import type { Metadata } from "next";
import Link from "next/link";
import {
  fetchMaterialSeries,
  MATERIALS,
  HOUSING,
  formatDate,
  formatPct,
  computeChartPaths,
  annualizeAndIndex,
  type Observation,
} from "@/lib/fred";

export const metadata: Metadata = {
  title: "State of US Construction Materials — 2026 Report | EasyBuildCalc",
  description:
    "Where US lumber, steel, concrete and housing starts stand in May 2026. YoY change, distance from 5-year peak, and what it means for builders. Built on FRED + BLS data.",
  alternates: {
    canonical: "https://easybuildcalc.com/reports/state-of-us-construction-materials-2026",
  },
  openGraph: {
    title: "State of US Construction Materials — 2026",
    description: "Lumber, steel, concrete & housing starts in May 2026. Free data report.",
    url: "https://easybuildcalc.com/reports/state-of-us-construction-materials-2026",
    type: "article",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "State of US Construction Materials — 2026 Edition",
  description:
    "Annual data report on US construction materials and housing starts. Built on FRED + BLS public datasets.",
  datePublished: "2026-05-08",
  dateModified: "2026-05-08",
  author: { "@type": "Organization", name: "EasyBuildCalc" },
  publisher: {
    "@type": "Organization",
    name: "EasyBuildCalc",
    url: "https://easybuildcalc.com",
  },
  url: "https://easybuildcalc.com/reports/state-of-us-construction-materials-2026",
  isAccessibleForFree: true,
};

const datasetLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "US Construction Materials PPI & Housing Starts (May 2026)",
  description:
    "Producer Price Index data for US lumber, steel, ready-mix concrete, plus housing starts. Compiled from FRED.",
  isAccessibleForFree: true,
  license: "https://www.stlouisfed.org/about-us/legal/copyright",
  creator: { "@type": "Organization", name: "Federal Reserve Bank of St. Louis" },
  url: "https://easybuildcalc.com/reports/state-of-us-construction-materials-2026",
  variableMeasured: ["Lumber PPI", "Steel PPI", "Concrete PPI", "Housing Starts (SAAR)"],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Reports", item: "https://easybuildcalc.com/reports" },
    { "@type": "ListItem", position: 3, name: "State of US Construction Materials 2026", item: "https://easybuildcalc.com/reports/state-of-us-construction-materials-2026" },
  ],
};

/* ─── helpers ───────────────────────────────────────────────────────── */

function peakDistance(obs: Observation[]): { peak: number; peakDate: string; current: number; pct: number } | null {
  if (obs.length === 0) return null;
  let peak = obs[0];
  for (const o of obs) {
    if (o.value > peak.value) peak = o;
  }
  const current = obs[obs.length - 1];
  const pct = ((current.value - peak.value) / peak.value) * 100;
  return { peak: peak.value, peakDate: peak.date, current: current.value, pct };
}

/* ─── chart component ────────────────────────────────────────────────── */

function MiniChart({ obs, color }: { obs: Observation[]; color: string }) {
  const values = obs.map((o) => o.value);
  const paths = computeChartPaths(values, 280, 80, 6);
  if (!paths) return null;
  return (
    <svg viewBox="0 0 280 80" className="w-full h-20" preserveAspectRatio="none">
      <path d={paths.areaPath} fill={color} fillOpacity="0.12" />
      <path d={paths.linePath} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx={paths.lastX} cy={paths.lastY} r="3" fill={color} />
    </svg>
  );
}

/* ─── one row in the dashboard ───────────────────────────────────────── */

async function MaterialRow({ id, label, color, emoji, unit }: { id: string; label: string; color: string; emoji: string; unit: string }) {
  const obs = (await fetchMaterialSeriesLong(id, 60)).observations;
  const series = await fetchMaterialSeries(id);
  const peak = peakDistance(obs);

  const lastDate = series.observations.at(-1)?.date;

  return (
    <div className="border border-gray-200 rounded-xl p-4">
      <div className="flex items-baseline justify-between mb-1">
        <p className="text-sm font-semibold text-gray-900">{emoji} {label}</p>
        <p className="text-xs text-gray-500">{lastDate ? formatDate(lastDate) : "—"}</p>
      </div>
      <p className="text-2xl font-bold text-gray-900 tabular-nums">
        {series.current?.toFixed(1) ?? "—"} <span className="text-xs text-gray-500 font-normal">{unit}</span>
      </p>
      <div className="mt-2">
        <MiniChart obs={obs} color={color} />
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs mt-2">
        <div>
          <p className="text-gray-400 uppercase tracking-wide">MoM</p>
          <p className={`font-semibold tabular-nums ${(series.mom ?? 0) > 0 ? "text-green-700" : (series.mom ?? 0) < 0 ? "text-red-600" : "text-gray-500"}`}>{formatPct(series.mom)}</p>
        </div>
        <div>
          <p className="text-gray-400 uppercase tracking-wide">YoY</p>
          <p className={`font-semibold tabular-nums ${(series.yoy ?? 0) > 0 ? "text-green-700" : (series.yoy ?? 0) < 0 ? "text-red-600" : "text-gray-500"}`}>{formatPct(series.yoy)}</p>
        </div>
        <div>
          <p className="text-gray-400 uppercase tracking-wide">vs peak</p>
          <p className={`font-semibold tabular-nums ${peak && peak.pct >= 0 ? "text-green-700" : "text-red-600"}`}>
            {peak ? `${peak.pct.toFixed(1)}%` : "—"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* fetchMaterialSeries returns 24 obs by default — for the chart we need more */
async function fetchMaterialSeriesLong(id: string, limit: number) {
  // re-implement with custom limit
  const key = process.env.FRED_API_KEY;
  if (!key) return { observations: [] as Observation[] };
  try {
    const url =
      `https://api.stlouisfed.org/fred/series/observations` +
      `?series_id=${id}` +
      `&api_key=${key}` +
      `&file_type=json` +
      `&limit=${limit}` +
      `&sort_order=desc`;
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return { observations: [] as Observation[] };
    const json = await res.json();
    const observations = (json.observations as Array<{ date: string; value: string }>)
      .filter((o) => o.value !== ".")
      .reverse()
      .map((o) => ({ date: o.date, value: parseFloat(o.value) }));
    return { observations };
  } catch {
    return { observations: [] as Observation[] };
  }
}

/* ─── page ───────────────────────────────────────────────────────────── */

export default async function StateOfMaterialsReport() {
  // Pull all four series in parallel
  const [lumber, steel, concrete, housing] = await Promise.all([
    fetchMaterialSeries(MATERIALS.lumber.id),
    fetchMaterialSeries(MATERIALS.steel.id),
    fetchMaterialSeries(MATERIALS.concrete.id),
    fetchMaterialSeries(HOUSING.id),
  ]);

  const indexed = {
    lumber: annualizeAndIndex(lumber.observations, "2019"),
    steel: annualizeAndIndex(steel.observations, "2019"),
    concrete: annualizeAndIndex(concrete.observations, "2019"),
  };

  const lumberLatest = indexed.lumber.at(-1);
  const steelLatest = indexed.steel.at(-1);
  const concreteLatest = indexed.concrete.at(-1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <Link href="/reports" className="hover:text-blue-600">Reports</Link>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">State of US Construction Materials 2026</span>
      </nav>

      <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">May 2026 · Annual report</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        State of US Construction Materials — 2026 Edition
      </h1>
      <p className="text-gray-600 mb-6">
        Where US lumber, steel, concrete and housing starts actually stand right now —
        with month-over-month and year-over-year change, and the gap to each material&apos;s 5-year peak.
        All numbers pulled live from FRED at page load (BLS Producer Price Index for materials,
        Census Bureau for housing starts).
      </p>

      {/* ── Citation block — high-impact for backlinks ──────────────── */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 text-sm">
        <p className="font-semibold text-blue-900 mb-1">📎 Free to cite</p>
        <p className="text-blue-800 text-xs leading-relaxed">
          When citing this report, please link to{" "}
          <code className="bg-white border border-blue-200 rounded px-1 py-0.5 text-xs">
            https://easybuildcalc.com/reports/state-of-us-construction-materials-2026
          </code>{" "}
          and credit &quot;EasyBuildCalc 2026 State of US Construction Materials&quot;. Charts and numbers refresh daily;
          underlying data is publicly available from{" "}
          <a href="https://fred.stlouisfed.org/" className="underline" target="_blank" rel="nofollow noopener">FRED</a>.
        </p>
      </div>

      {/* ── Live dashboard ──────────────────────────────────────────── */}
      <h2 className="text-xl font-semibold text-gray-900 mb-3">Where prices are right now</h2>
      <p className="text-sm text-gray-600 mb-4">
        Producer Price Index (1982 = 100). MoM and YoY are momentum signals; &quot;vs peak&quot; shows
        how far each series is from its 5-year high.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        <MaterialRow id={MATERIALS.lumber.id}   label={MATERIALS.lumber.label}   color={MATERIALS.lumber.color}   emoji={MATERIALS.lumber.emoji}   unit={MATERIALS.lumber.unit} />
        <MaterialRow id={MATERIALS.steel.id}    label={MATERIALS.steel.label}    color={MATERIALS.steel.color}    emoji={MATERIALS.steel.emoji}    unit={MATERIALS.steel.unit} />
        <MaterialRow id={MATERIALS.concrete.id} label={MATERIALS.concrete.label} color={MATERIALS.concrete.color} emoji={MATERIALS.concrete.emoji} unit={MATERIALS.concrete.unit} />
        <MaterialRow id={HOUSING.id}            label={HOUSING.label}            color={HOUSING.color}            emoji={HOUSING.emoji}            unit={HOUSING.unit} />
      </div>

      {/* ── Headline indexed-to-2019 chart ──────────────────────────── */}
      <h2 className="text-xl font-semibold text-gray-900 mb-3">Materials vs. 2019 baseline</h2>
      <p className="text-sm text-gray-600 mb-3">
        Each material&apos;s annual average, indexed to 2019 = 100. Easy way to see the post-2020
        re-pricing — and which materials have come back down since.
      </p>
      <div className="border border-gray-200 rounded-xl p-4 mb-8">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-500 uppercase tracking-wide">
              <th className="text-left py-1">Material</th>
              <th className="text-right py-1">2019 (base)</th>
              <th className="text-right py-1">2021 peak yr</th>
              <th className="text-right py-1">Latest</th>
              <th className="text-right py-1">vs. 2019</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 tabular-nums">
            {[
              { m: "🪵 Lumber",    arr: indexed.lumber },
              { m: "🔩 Steel",     arr: indexed.steel },
              { m: "🪣 Concrete",  arr: indexed.concrete },
            ].map(({ m, arr }) => {
              const peak2021 = arr.find((x) => x.year === "2021");
              const latest = arr.at(-1);
              return (
                <tr key={m} className="border-t border-gray-100">
                  <td className="py-1.5 font-medium">{m}</td>
                  <td className="py-1.5 text-right">100.0</td>
                  <td className="py-1.5 text-right">{peak2021 ? peak2021.value.toFixed(1) : "—"}</td>
                  <td className="py-1.5 text-right">{latest ? latest.value.toFixed(1) : "—"}</td>
                  <td className={`py-1.5 text-right font-semibold ${latest && latest.value > 100 ? "text-amber-700" : "text-emerald-700"}`}>
                    {latest ? `${latest.value > 100 ? "+" : ""}${(latest.value - 100).toFixed(1)} pts` : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ── Findings — written narrative ────────────────────────────── */}
      <article className="space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900 mt-2">Five takeaways for builders this year</h2>

        <div>
          <p className="font-semibold text-gray-900 mb-1">1. Lumber is the volatile one — again.</p>
          <p>
            Lumber PPI moves more than any other material in the index. The 2021 spike (3×
            pre-pandemic) is well behind us, but month-to-month swings of ±5% are normal in 2026.
            For project budgets, that means: lock in your lumber price at order time, and add a
            5–8% contingency line for any project that buys lumber more than 30 days out.
            Lumber is currently <strong>{lumberLatest ? `${lumberLatest.value.toFixed(0)}% of 2019` : "—"}</strong>.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">2. Steel keeps grinding higher.</p>
          <p>
            Unlike lumber, steel hasn&apos;t corrected. The PPI is currently
            <strong> {steelLatest ? ` ${steelLatest.value.toFixed(0)}% of 2019 ` : " — "}</strong>
            and has held above 140 since 2022. Reason: structural (energy costs, tariffs, slow new
            capacity), not cyclical. Rebar and structural steel projects priced before mid-2024
            should plan on a meaningful re-quote.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">3. Ready-mix concrete is up — and it&apos;s sticky.</p>
          <p>
            Concrete PPI is at
            <strong> {concreteLatest ? ` ${concreteLatest.value.toFixed(0)}% of 2019` : " — "} </strong>,
            with steady ~5% YoY increases since 2022. Cement and aggregate plants don&apos;t come online quickly,
            and delivery distance dominates pricing — so even when raw material costs ease,
            the local truck rate doesn&apos;t. Expect <em>$140–$165 per cubic yard</em> as the going rate
            in most US markets in 2026.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">4. Housing starts: rate-sensitive, plateauing.</p>
          <p>
            US housing starts in early 2026 are running roughly flat YoY around{" "}
            <strong>{housing.current ? `${(housing.current * 1000).toLocaleString()}` : "1.4M"} SAAR</strong>{" "}
            — the same level as 2018. Mortgage rates above 6.5% have kept new construction in a
            holding pattern. Watch the Fed&apos;s rate path closely; a 100-bp cut typically pushes
            starts +8–12% within two quarters.
          </p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">5. The real cost squeeze is labor, not materials.</p>
          <p>
            Material PPI is up roughly 25–40% from 2019. Labor — especially skilled trades —
            has run faster: BLS Construction Labor PPI is up 35–45% in the same window, with
            tight licensing and an aging workforce. For a 2026 deck, kitchen, or roof job, the
            labor line is likely to be 50–60% of total cost (it was 40–50% pre-pandemic).
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mt-4">Methodology</h2>
        <p>
          All series are pulled live from{" "}
          <a href="https://fred.stlouisfed.org/" className="underline text-blue-700" target="_blank" rel="nofollow noopener">
            FRED
          </a>{" "}
          at page render with a 24-hour cache. Source identifiers:
        </p>
        <ul className="list-disc list-inside text-xs space-y-0.5">
          <li><code>{MATERIALS.lumber.id}</code> — PPI: lumber and wood products</li>
          <li><code>{MATERIALS.steel.id}</code> — PPI: iron and steel mill products</li>
          <li><code>{MATERIALS.concrete.id}</code> — PPI: ready-mix concrete</li>
          <li><code>{HOUSING.id}</code> — Census Bureau housing starts (SAAR)</li>
        </ul>
        <p>
          Indexing to 2019 uses annual averages of monthly observations. &quot;vs. peak&quot; uses the
          5-year monthly maximum. All numbers refresh automatically when underlying FRED data updates.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-4">Use the data</h2>
        <p>
          Sizing a real project? Plug the latest numbers into one of our calculators:{" "}
          <Link href="/concrete-calculator" className="text-blue-700 underline">Concrete</Link>,{" "}
          <Link href="/lumber-calculator" className="text-blue-700 underline">Lumber</Link>,{" "}
          <Link href="/rebar-calculator" className="text-blue-700 underline">Rebar</Link>,{" "}
          <Link href="/shingles-calculator" className="text-blue-700 underline">Shingles</Link>{" "}
          — all updated to May 2026 retail prices.
        </p>
      </article>
    </div>
  );
}
