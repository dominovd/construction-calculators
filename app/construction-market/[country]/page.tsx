import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchHousingStarts, COUNTRY_META, formatStarts, formatPct, type CountryStarts } from "@/lib/oecd";
import { computeChartPaths } from "@/lib/fred";

/* ─── Slug ↔ code mapping ────────────────────────────────────────── */
function codeToSlug(code: string): string {
  return COUNTRY_META[code].name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
function slugToCode(slug: string): string | null {
  return (
    Object.keys(COUNTRY_META).find((code) => codeToSlug(code) === slug) ?? null
  );
}

/* ─── Static params ───────────────────────────────────────────────── */
export async function generateStaticParams() {
  return Object.keys(COUNTRY_META).map((code) => ({ country: codeToSlug(code) }));
}

/* ─── Metadata ────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const code = slugToCode(slug);
  if (!code) return { title: "Not Found" };
  const { name, flag } = COUNTRY_META[code];
  return {
    title: `${flag} ${name} Housing Starts & Construction Market Data`,
    description: `Annual housing starts and construction market trends for ${name}. Historical data from the OECD — year-over-year changes, peak years, and 10-year chart.`,
    alternates: { canonical: `https://easybuildcalc.com/construction-market/${slug}` },
    openGraph: {
      title: `${name} Housing Starts`,
      description: `Housing starts data and construction market trends for ${name}.`,
      url: `https://easybuildcalc.com/construction-market/${slug}`,
    },
  };
}

/* ─── Chart ───────────────────────────────────────────────────────── */
function HistoryChart({ country, color = "#3b82f6" }: { country: CountryStarts; color?: string }) {
  const values = country.values.map((v) => v.value);
  const years = country.values.map((v) => v.year);
  const paths = computeChartPaths(values, 560, 120, 10);
  if (!paths) return <div className="h-32 bg-gray-50 rounded-xl" />;

  const { linePath, areaPath } = paths;
  const W = 560, H = 120, PAD = 10;
  const min = Math.min(...values), max = Math.max(...values), range = max - min || 1;

  function xPos(i: number) { return PAD + (i / (values.length - 1)) * (W - 2 * PAD); }
  function yPos(v: number) { return PAD + ((max - v) / range) * (H - 2 * PAD); }

  // peak dot
  const peakIdx = values.indexOf(Math.max(...values));

  const labelStep = Math.max(1, Math.floor(years.length / 6));
  const labelYears = years.filter((_, i) => i % labelStep === 0 || i === years.length - 1);

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-32" preserveAspectRatio="none">
        <defs>
          <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#cg)" />
        <path d={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
        {/* peak marker */}
        <circle cx={xPos(peakIdx)} cy={yPos(values[peakIdx])} r="4" fill="#f59e0b" />
        <text x={xPos(peakIdx)} y={yPos(values[peakIdx]) - 7} textAnchor="middle" fontSize="8" fill="#92400e">
          Peak {years[peakIdx]}
        </text>
      </svg>
      <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
        {labelYears.map((y) => <span key={y}>{y}</span>)}
      </div>
    </div>
  );
}

/* ─── Stat card ───────────────────────────────────────────────────── */
function Stat({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className={`text-xl font-bold ${color ?? "text-gray-900"}`}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

/* ─── Data-driven article paragraphs ─────────────────────────────── */
function buildArticle(country: CountryStarts, allCountries: CountryStarts[]) {
  const { name, values, latest, yoy } = country;
  if (!values.length || latest === null) return null;

  const avg = values.reduce((s, v) => s + v.value, 0) / values.length;
  const peak = Math.max(...values.map((v) => v.value));
  const peakYear = values.find((v) => v.value === peak)?.year;
  const trend = (yoy ?? 0) >= 0 ? "expanding" : "contracting";
  const vsAvg = ((latest - avg) / avg) * 100;
  const globalRank = allCountries.findIndex((c) => c.code === country.code) + 1;

  return { trend, vsAvg, peakYear, peak, globalRank, avg };
}

function marketSignal(article: ReturnType<typeof buildArticle>, yoy: number | null) {
  if (!article) return null;
  if ((yoy ?? 0) > 5 && article.vsAvg > 0) {
    return "high-demand";
  }
  if ((yoy ?? 0) < -5 && article.vsAvg < 0) {
    return "softening";
  }
  if (article.globalRank <= 5) {
    return "large-market";
  }
  return "stable";
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const code = slugToCode(slug);
  if (!code) notFound();

  const allCountries = await fetchHousingStarts();
  const country = allCountries.find((c) => c.code === code);

  if (!country) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center text-gray-500">
        <p className="text-lg font-medium mb-2">{COUNTRY_META[code].flag} {COUNTRY_META[code].name}</p>
        <p className="text-sm">Housing starts data not currently available for this country.</p>
        <a href="/housing-starts" className="text-blue-600 text-sm hover:underline mt-4 inline-block">← All countries</a>
      </div>
    );
  }

  const { name, flag, latest, latestYear, yoy, values } = country;
  const article = buildArticle(country, allCountries);
  const signal = marketSignal(article, yoy);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
      { "@type": "ListItem", position: 2, name: "Housing Starts", item: "https://easybuildcalc.com/housing-starts" },
      { "@type": "ListItem", position: 3, name: name, item: `https://easybuildcalc.com/construction-market/${slug}` },
    ],
  };

  // Neighboring countries (same rank ±3)
  const rank = article?.globalRank ?? 0;
  const neighbors = allCountries.filter((c) => c.code !== code).slice(Math.max(0, rank - 3), rank + 2);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4 flex gap-1 flex-wrap">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span>›</span>
        <a href="/housing-starts" className="hover:text-blue-600">Housing Starts</a>
        <span>›</span>
        <span className="text-gray-700">{name}</span>
      </nav>

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{flag}</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{name}</h1>
        </div>
        <p className="text-gray-600 text-sm">
          Annual housing starts and construction market trends. Data sourced from the OECD.
        </p>
        {latestYear && <p className="text-xs text-gray-400 mt-1">Latest data: {latestYear}</p>}
      </div>

      {/* Stat row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Stat
          label="Latest starts"
          value={formatStarts(latest)}
          sub={latestYear ?? undefined}
        />
        <Stat
          label="Year-over-year"
          value={formatPct(yoy)}
          color={yoy !== null ? (yoy >= 0 ? "text-green-600" : "text-red-500") : undefined}
        />
        <Stat
          label="Global rank"
          value={article ? `#${article.globalRank}` : "—"}
          sub="by volume"
        />
        <Stat
          label="vs 10-yr avg"
          value={article ? `${article.vsAvg >= 0 ? "+" : ""}${article.vsAvg.toFixed(0)}%` : "—"}
          color={article ? (article.vsAvg >= 0 ? "text-green-600" : "text-red-500") : undefined}
        />
      </div>

      {/* Chart */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Housing Starts — 10-Year History
        </h2>
        <HistoryChart country={country} />
      </div>

      {/* Data table */}
      {values.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">Annual Data</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left text-gray-500 font-medium">Year</th>
                  <th className="px-4 py-2 text-right text-gray-500 font-medium">Starts</th>
                  <th className="px-4 py-2 text-right text-gray-500 font-medium">YoY</th>
                </tr>
              </thead>
              <tbody>
                {[...values].reverse().map((v, i, arr) => {
                  const prev = arr[i + 1];
                  const change = prev ? ((v.value - prev.value) / prev.value) * 100 : null;
                  const up = change !== null && change > 0;
                  const dn = change !== null && change < 0;
                  return (
                    <tr key={v.year} className="border-t border-gray-50">
                      <td className="px-4 py-2 font-medium text-gray-800">{v.year}</td>
                      <td className="px-4 py-2 text-right tabular-nums text-gray-700">{formatStarts(v.value)}</td>
                      <td className={`px-4 py-2 text-right tabular-nums font-medium ${up ? "text-green-600" : dn ? "text-red-500" : "text-gray-400"}`}>
                        {change !== null ? `${change >= 0 ? "+" : ""}${change.toFixed(1)}%` : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Article */}
      {article && (
        <article className="space-y-4 text-sm text-gray-700 leading-relaxed mb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            {name} Construction Market Overview
          </h2>
          <p>
            {name}&apos;s residential construction market is currently{" "}
            <strong>{article.trend}</strong>, with housing starts of{" "}
            <strong>{formatStarts(latest)}</strong> in {latestYear} —{" "}
            {Math.abs(article.vsAvg).toFixed(0)}%{" "}
            {article.vsAvg >= 0 ? "above" : "below"} the 10-year average of{" "}
            {formatStarts(article.avg)}.
          </p>
          {article.peakYear && (
            <p>
              The country&apos;s recorded peak was {formatStarts(article.peak)} units in{" "}
              {article.peakYear}.{" "}
              {latest !== null && article.peak > 0
                ? `Current activity is ${(((latest - article.peak) / article.peak) * 100).toFixed(0)}% ${latest < article.peak ? "below" : "above"} that peak.`
                : ""}
            </p>
          )}
          <p>
            Among the {allCountries.length} OECD countries tracked, {name} ranks{" "}
            <strong>#{article.globalRank}</strong> by total housing starts. Year-over-year
            change is <strong>{formatPct(yoy)}</strong>, reflecting{" "}
            {(yoy ?? 0) > 5
              ? "strong demand and active permitting."
              : (yoy ?? 0) < -5
              ? "declining permits and reduced construction activity."
              : "a relatively stable market."}
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <strong className="text-amber-800">For contractors working in {name}:</strong>{" "}
            <span className="text-amber-700">
              {article.trend === "expanding"
                ? "Rising starts typically lead to higher material demand within 3–6 months. Consider securing lumber and concrete supply early."
                : "A contracting market may create opportunities to negotiate better material pricing or lock in subcontractor rates."}
            </span>
          </div>

          <section className="border-t border-gray-100 pt-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              What this means for planning
            </h2>
            <p>
              Use housing starts as a demand signal rather than a direct price quote. A rising
              starts trend can tighten subcontractor availability and push demand toward framing,
              concrete, roofing, windows, and site materials. A falling trend can make supplier
              quotes more negotiable, but it may also reflect slower permitting or weaker buyer
              demand.
            </p>
            {signal === "high-demand" && (
              <p>
                {name} is showing both positive year-over-year movement and activity above its
                recent average. For active builders, that usually means confirming lead times early
                and padding estimates for materials with volatile delivery windows.
              </p>
            )}
            {signal === "softening" && (
              <p>
                {name} is below its recent average and moving lower year over year. This is a good
                market to refresh bids frequently, compare supplier quotes, and avoid carrying old
                material assumptions into new work.
              </p>
            )}
            {signal === "large-market" && (
              <p>
                Because {name} ranks near the top of the tracked OECD markets by housing-start
                volume, even modest percentage changes can represent a large shift in material and
                labor demand.
              </p>
            )}
            {signal === "stable" && (
              <p>
                {name} is not showing an extreme signal in the current dataset. For estimates, use
                the latest starts number as context, then rely on local supplier pricing and project
                dimensions for the final material count.
              </p>
            )}
          </section>

          <section className="border-t border-gray-100 pt-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Related estimating tools
            </h2>
            <p>
              For project-level planning, pair this market page with the{" "}
              <a href="/material-prices" className="text-blue-600 hover:underline">material price index</a>,{" "}
              <a href="/concrete-calculator" className="text-blue-600 hover:underline">concrete calculator</a>,{" "}
              <a href="/lumber-calculator" className="text-blue-600 hover:underline">lumber calculator</a>, and{" "}
              <a href="/deck-cost-calculator" className="text-blue-600 hover:underline">deck cost calculator</a>.
              Market data explains demand pressure; calculators translate dimensions into order
              quantities.
            </p>
          </section>
        </article>
      )}

      {/* Neighboring countries */}
      {neighbors.length > 0 && (
        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Compare with similar-ranked countries</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {neighbors.map((n) => (
              <a
                key={n.code}
                href={`/construction-market/${codeToSlug(n.code)}`}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm text-gray-800">
                  <span className="mr-1.5">{n.flag}</span>{n.name}
                </span>
                <span className={`text-xs font-medium ${(n.yoy ?? 0) >= 0 ? "text-green-600" : "text-red-500"}`}>
                  {formatPct(n.yoy)}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4">
            <a href="/housing-starts" className="text-sm text-blue-600 hover:underline">
              ← View all countries
            </a>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-8">
        Source:{" "}
        <a href="https://stats.oecd.org/" target="_blank" rel="noopener noreferrer" className="underline">
          OECD Statistics
        </a>{" "}
        — Housing dataset, STARTS indicator, annual frequency. Data may lag by 12–24 months
        for some countries.
      </p>
    </div>
  );
}
