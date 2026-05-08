import type { Metadata } from "next";
import { fetchHousingStarts, formatStarts, formatPct, COUNTRY_META, type CountryStarts } from "@/lib/oecd";
import { computeChartPaths } from "@/lib/fred";

function codeToSlug(code: string): string {
  return COUNTRY_META[code].name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export const metadata: Metadata = {
  title: "Global Housing Starts by Country — Annual OECD Data",
  description:
    "Compare annual housing starts across 20+ countries: US, Japan, Germany, UK, France, Canada, Australia and more. Sourced from the OECD Housing dataset.",
  alternates: { canonical: "https://easybuildcalc.com/housing-starts" },
  openGraph: {
    title: "Global Housing Starts by Country",
    description: "Annual housing starts data for 20+ countries from the OECD.",
    url: "https://easybuildcalc.com/housing-starts",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Housing Starts", item: "https://easybuildcalc.com/housing-starts" },
  ],
};

/* ─── Horizontal bar chart row ───────────────────────────────────── */
function BarRow({
  country,
  maxValue,
  rank,
}: {
  country: CountryStarts;
  maxValue: number;
  rank: number;
}) {
  const pct = maxValue > 0 ? (country.latest! / maxValue) * 100 : 0;
  const up = country.yoy !== null && country.yoy > 0;
  const dn = country.yoy !== null && country.yoy < 0;

  const slug = codeToSlug(country.code);

  return (
    <a
      href={`/construction-market/${slug}`}
      className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0 hover:bg-blue-50 rounded-lg px-1 -mx-1 transition-colors group"
    >
      {/* rank */}
      <span className="w-5 text-xs text-gray-400 text-right shrink-0">{rank}</span>
      {/* flag + name */}
      <div className="w-40 flex items-center gap-1.5 shrink-0">
        <span className="text-base">{country.flag}</span>
        <span className="text-sm text-gray-800 group-hover:text-blue-700 truncate">{country.name}</span>
      </div>
      {/* bar */}
      <div className="flex-1 bg-gray-100 rounded-full h-4 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500 group-hover:bg-blue-600 transition-colors"
          style={{ width: `${pct.toFixed(1)}%` }}
        />
      </div>
      {/* value */}
      <span className="w-16 text-xs text-gray-700 text-right shrink-0 font-medium tabular-nums">
        {formatStarts(country.latest)}
      </span>
      {/* yoy */}
      <span
        className={`w-14 text-xs text-right shrink-0 font-medium tabular-nums ${
          up ? "text-green-600" : dn ? "text-red-500" : "text-gray-400"
        }`}
      >
        {up ? "↑" : dn ? "↓" : ""} {formatPct(country.yoy)}
      </span>
      <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">→</span>
    </a>
  );
}

/* ─── Sparkline for table ────────────────────────────────────────── */
function Sparkline({ values, color = "#3b82f6" }: { values: number[]; color?: string }) {
  const paths = computeChartPaths(values, 80, 28, 2);
  if (!paths) return <div className="w-20 h-7 bg-gray-50 rounded" />;
  return (
    <svg viewBox="0 0 80 28" className="w-20 h-7" preserveAspectRatio="none">
      <path d={paths.areaPath} fill={color} fillOpacity="0.12" />
      <path d={paths.linePath} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Top-5 multi-line trend chart ──────────────────────────────── */
const TREND_COLORS = ["#3b82f6", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6"];

function TrendChart({ countries }: { countries: CountryStarts[] }) {
  const top5 = countries.slice(0, 5);
  if (!top5.length) return null;

  // collect all years across top5
  const allYears = [...new Set(top5.flatMap((c) => c.values.map((v) => v.year)))].sort();
  const W = 560, H = 140, PAD = { t: 8, r: 8, b: 24, l: 50 };
  const chartW = W - PAD.l - PAD.r;
  const chartH = H - PAD.t - PAD.b;

  const allValues = top5.flatMap((c) => c.values.map((v) => v.value));
  const minV = Math.min(...allValues);
  const maxV = Math.max(...allValues);
  const range = maxV - minV || 1;

  function xPos(year: string) {
    const idx = allYears.indexOf(year);
    return PAD.l + (idx / (allYears.length - 1)) * chartW;
  }
  function yPos(val: number) {
    return PAD.t + ((maxV - val) / range) * chartH;
  }

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-36">
        {/* y-axis grid lines */}
        {[0, 0.5, 1].map((frac) => {
          const y = PAD.t + frac * chartH;
          const label = (maxV - frac * range).toFixed(0);
          return (
            <g key={frac}>
              <line x1={PAD.l} y1={y} x2={W - PAD.r} y2={y} stroke="#e5e7eb" strokeWidth="1" />
              <text x={PAD.l - 4} y={y + 4} textAnchor="end" fontSize="9" fill="#9ca3af">{label}</text>
            </g>
          );
        })}
        {/* lines per country */}
        {top5.map((country, ci) => {
          const pts = country.values
            .map((v) => `${xPos(v.year).toFixed(1)},${yPos(v.value).toFixed(1)}`)
            .join(" ");
          return (
            <polyline
              key={country.code}
              points={pts}
              fill="none"
              stroke={TREND_COLORS[ci]}
              strokeWidth="2"
              strokeLinejoin="round"
            />
          );
        })}
        {/* x-axis labels */}
        {allYears
          .filter((_, i) => i % 2 === 0 || i === allYears.length - 1)
          .map((year) => (
            <text
              key={year}
              x={xPos(year)}
              y={H - 4}
              textAnchor="middle"
              fontSize="9"
              fill="#9ca3af"
            >
              {year}
            </text>
          ))}
      </svg>
      {/* legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
        {top5.map((c, i) => (
          <div key={c.code} className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-0.5 rounded" style={{ backgroundColor: TREND_COLORS[i] }} />
            <span className="text-xs text-gray-500">{c.flag} {c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function HousingStartsPage() {
  const countries = await fetchHousingStarts();
  const hasData = countries.length > 0;

  const maxValue = hasData ? (countries[0].latest ?? 0) : 0;

  // latest year from data
  const latestYear = hasData ? countries[0].latestYear : null;

  // all years available (for table header)
  const allYears = hasData
    ? [...new Set(countries.flatMap((c) => c.values.map((v) => v.year)))]
        .sort()
        .slice(-5)
    : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Housing Starts by Country</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Global Housing Starts by Country
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          Annual residential construction starts for 20+ countries. Data sourced from the
          OECD Housing dataset — a key indicator of construction activity and material demand
          across major economies.
        </p>
        {latestYear && (
          <p className="text-xs text-gray-400 mt-2">Latest data: {latestYear}</p>
        )}
      </div>

      {!hasData ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-500 text-sm">
          Unable to load OECD data at this time. Please try again later.
        </div>
      ) : (
        <>
          {/* Bar chart ranking */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <h2 className="text-base font-semibold text-gray-900 mb-1">
              Housing Starts Ranking — {latestYear}
            </h2>
            <p className="text-xs text-gray-400 mb-5">Total new residential units started. YoY = year-over-year change. <span className="text-blue-500">Click any country for detailed data →</span></p>
            <div className="hidden sm:flex items-center gap-3 pb-2 mb-1 border-b border-gray-100">
              <span className="w-5" />
              <span className="w-40 text-xs text-gray-400">Country</span>
              <span className="flex-1 text-xs text-gray-400">Relative scale</span>
              <span className="w-16 text-xs text-gray-400 text-right">Units</span>
              <span className="w-14 text-xs text-gray-400 text-right">YoY</span>
            </div>
            {countries.map((c, i) => (
              <BarRow key={c.code} country={c} maxValue={maxValue} rank={i + 1} />
            ))}
          </div>

          {/* Trend chart — top 5 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <h2 className="text-base font-semibold text-gray-900 mb-1">
              10-Year Trend — Top 5 Countries
            </h2>
            <p className="text-xs text-gray-400 mb-4">Annual housing starts, all years available in OECD data.</p>
            <TrendChart countries={countries} />
          </div>

          {/* Data table */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-10">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">Full Data Table</h2>
              <p className="text-xs text-gray-400 mt-0.5">Housing starts by country, last 5 years</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-gray-500 font-medium">Country</th>
                    {allYears.map((y) => (
                      <th key={y} className="px-3 py-3 text-right text-gray-500 font-medium">{y}</th>
                    ))}
                    <th className="px-3 py-3 text-right text-gray-500 font-medium">Trend</th>
                    <th className="px-3 py-3 text-right text-gray-500 font-medium">YoY</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((c) => {
                    const valMap = Object.fromEntries(c.values.map((v) => [v.year, v.value]));
                    const sparkValues = allYears.map((y) => valMap[y] ?? 0).filter(Boolean);
                    const up = c.yoy !== null && c.yoy > 0;
                    const dn = c.yoy !== null && c.yoy < 0;
                    return (
                      <tr key={c.code} className="border-t border-gray-50 hover:bg-gray-50">
                        <td className="px-4 py-2.5 font-medium text-gray-800">
                          <span className="mr-1.5">{c.flag}</span>{c.name}
                        </td>
                        {allYears.map((y) => (
                          <td key={y} className="px-3 py-2.5 text-right tabular-nums text-gray-600">
                            {valMap[y] ? formatStarts(valMap[y]) : "—"}
                          </td>
                        ))}
                        <td className="px-3 py-2.5">
                          <Sparkline values={sparkValues} />
                        </td>
                        <td className={`px-3 py-2.5 text-right tabular-nums font-medium ${up ? "text-green-600" : dn ? "text-red-500" : "text-gray-400"}`}>
                          {formatPct(c.yoy)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Article */}
      <article className="space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          What Do Housing Starts Tell Us About Construction?
        </h2>
        <p>
          Housing starts — the number of new residential construction projects begun in a given
          period — are one of the most closely watched leading indicators in the construction
          industry. A surge in starts signals rising demand for lumber, concrete, drywall, wiring,
          and HVAC equipment. A sustained decline often precedes slowdowns in material prices
          and contractor employment.
        </p>

        <h3 className="text-base font-semibold text-gray-800">Why Country Comparisons Matter</h3>
        <p>
          Global construction trends affect commodity prices regardless of where you build.
          The US imports roughly one-third of its softwood lumber from Canada. A construction boom
          in Germany or Japan tightens global steel supply. Tracking international starts data
          helps contractors and estimators anticipate price movements before they appear on invoices.
        </p>

        <h3 className="text-base font-semibold text-gray-800">How to Interpret the Data</h3>
        <p>
          Raw start counts favor large countries. The United States and Japan top the rankings
          by volume, but smaller countries like New Zealand and Ireland often lead on a
          per-capita basis. Year-over-year (YoY) percentage change is a better signal of
          momentum — a country with starts up 15% YoY is experiencing a construction boom
          regardless of its absolute size.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <strong className="text-blue-900">For US contractors:</strong>{" "}
          <span className="text-blue-700">
            Watch the US YoY trend alongside the{" "}
            <a href="/material-prices" className="underline hover:text-blue-900">material price index</a>.
            When starts are rising and lumber prices are also trending up, locking in material
            prices early on large projects typically saves 5–15%.
          </span>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          Data source:{" "}
          <a
            href="https://stats.oecd.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            OECD Statistics
          </a>{" "}
          — Housing dataset, STARTS indicator, annual frequency. Data updated through 2023.
          Some countries may lag by 12–24 months in official reporting. Not seasonally adjusted.
        </p>
      </article>
    </div>
  );
}
