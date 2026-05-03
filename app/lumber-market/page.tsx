import type { Metadata } from "next";
import { fetchMaterialSeries, annualizeAndIndex, formatPct } from "@/lib/fred";
import { fetchLumberComparison } from "@/lib/imf";

export const metadata: Metadata = {
  title: "Lumber Price History: US vs World — 2024 Data",
  description:
    "Compare US lumber producer prices (FRED WPU081) with global softwood log prices (IMF PSOFTLOG), both indexed to 2019=100. See how domestic and global lumber price trends diverge over time.",
  alternates: { canonical: "https://easybuildcalc.com/lumber-market" },
  openGraph: {
    title: "Lumber Price History: US vs World — 2024 Data",
    description:
      "US lumber PPI vs global softwood log prices, indexed to 2019=100. Understand domestic vs world price divergence.",
    url: "https://easybuildcalc.com/lumber-market",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Lumber Market", item: "https://easybuildcalc.com/lumber-market" },
  ],
};

/* ─── Constants ──────────────────────────────────────────────────── */
const W = 600;
const H = 160;
const PAD = { t: 12, r: 12, b: 30, l: 44 };
const CHART_W = W - PAD.l - PAD.r;
const CHART_H = H - PAD.t - PAD.b;

const US_COLOR = "#2563eb";   // blue-600
const IMF_COLOR = "#d97706";  // amber-600

/* ─── Dual-line SVG chart ────────────────────────────────────────── */
function DualLineChart({
  usSeries,
  imfSeries,
}: {
  usSeries: { year: string; value: number }[];
  imfSeries: { year: string; value: number }[];
}) {
  if (usSeries.length === 0 && imfSeries.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 bg-gray-50 rounded-xl text-sm text-gray-400">
        Data unavailable
      </div>
    );
  }

  // Find years present in both series
  const usMap = Object.fromEntries(usSeries.map((d) => [d.year, d.value]));
  const imfMap = Object.fromEntries(imfSeries.map((d) => [d.year, d.value]));

  const allYears = [
    ...new Set([...usSeries.map((d) => d.year), ...imfSeries.map((d) => d.year)]),
  ].sort();

  // Compute value range across both series (only years with data)
  const allValues: number[] = [
    ...usSeries.map((d) => d.value),
    ...imfSeries.map((d) => d.value),
    100, // ensure baseline is always in view
  ];
  const minV = Math.max(0, Math.min(...allValues) - 5);
  const maxV = Math.max(...allValues) + 5;
  const range = maxV - minV || 1;

  function xPos(year: string): number {
    const idx = allYears.indexOf(year);
    return PAD.l + (idx / Math.max(allYears.length - 1, 1)) * CHART_W;
  }
  function yPos(val: number): number {
    return PAD.t + ((maxV - val) / range) * CHART_H;
  }

  // Build polyline points for each series
  const usPoints = usSeries
    .map((d) => `${xPos(d.year).toFixed(1)},${yPos(d.value).toFixed(1)}`)
    .join(" ");
  const imfPoints = imfSeries
    .map((d) => `${xPos(d.year).toFixed(1)},${yPos(d.value).toFixed(1)}`)
    .join(" ");

  // Baseline y=100
  const baselineY = yPos(100);

  // Y-axis labels
  const yTicks = [75, 100, 125, 150, 175, 200].filter(
    (v) => v >= minV - 5 && v <= maxV + 5
  );

  // X-axis labels: show every other year, always show first and last
  const xLabels = allYears.filter(
    (_, i) => i === 0 || i === allYears.length - 1 || i % 2 === 0
  );

  return (
    <div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: "160px" }}
        aria-label="Lumber price index chart: US vs Global, 2019=100"
      >
        {/* Y-axis grid + labels */}
        {yTicks.map((tick) => {
          const y = yPos(tick);
          return (
            <g key={tick}>
              <line
                x1={PAD.l}
                y1={y}
                x2={W - PAD.r}
                y2={y}
                stroke={tick === 100 ? "#94a3b8" : "#e5e7eb"}
                strokeWidth={tick === 100 ? "1" : "0.75"}
                strokeDasharray={tick === 100 ? "4 3" : undefined}
              />
              <text
                x={PAD.l - 5}
                y={y + 3.5}
                textAnchor="end"
                fontSize="9"
                fill="#9ca3af"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {/* US Lumber PPI line */}
        {usSeries.length >= 2 && (
          <polyline
            points={usPoints}
            fill="none"
            stroke={US_COLOR}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}

        {/* Global Softwood Log line */}
        {imfSeries.length >= 2 && (
          <polyline
            points={imfPoints}
            fill="none"
            stroke={IMF_COLOR}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        )}

        {/* Dots at last data points */}
        {usSeries.length > 0 && (() => {
          const last = usSeries[usSeries.length - 1];
          return (
            <circle
              cx={xPos(last.year)}
              cy={yPos(last.value)}
              r="3.5"
              fill={US_COLOR}
            />
          );
        })()}
        {imfSeries.length > 0 && (() => {
          const last = imfSeries[imfSeries.length - 1];
          return (
            <circle
              cx={xPos(last.year)}
              cy={yPos(last.value)}
              r="3.5"
              fill={IMF_COLOR}
            />
          );
        })()}

        {/* X-axis labels */}
        {xLabels.map((year) => (
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

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-2 pl-1">
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-5 rounded"
            style={{ height: "2.5px", backgroundColor: US_COLOR }}
          />
          <span className="text-xs text-gray-500">US Lumber PPI (FRED WPU081)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-5 rounded"
            style={{ height: "2.5px", backgroundColor: IMF_COLOR }}
          />
          <span className="text-xs text-gray-500">Global Softwood Log Price (IMF PSOFTLOG)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block w-5 border-t border-dashed border-slate-400"
            style={{ height: "1px", marginTop: "1px" }}
          />
          <span className="text-xs text-gray-400">2019 baseline (100)</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Stat card ──────────────────────────────────────────────────── */
function StatCard({
  label,
  index,
  yoy,
  color,
  colorLight,
  year,
}: {
  label: string;
  index: number | null;
  yoy: number | null;
  color: string;
  colorLight: string;
  year: string | null;
}) {
  if (index === null) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-1">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm text-gray-400">Data unavailable</p>
      </div>
    );
  }

  const aboveBase = index >= 100;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{index.toFixed(1)}</p>
      <p className="text-xs text-gray-400 mb-3">
        Index (2019 = 100){year ? ` · ${year}` : ""}
      </p>
      <div className="flex gap-2 flex-wrap">
        <span
          className="rounded-lg px-3 py-1.5 text-xs font-medium"
          style={{ backgroundColor: colorLight, color }}
        >
          {aboveBase ? "▲" : "▼"} {(index - 100).toFixed(1)} pts vs 2019
        </span>
        {yoy !== null && (
          <span className="rounded-lg px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600">
            YoY {formatPct(yoy)}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function LumberMarketPage() {
  const [fredResult, { imfIndexed }] = await Promise.all([
    fetchMaterialSeries("WPU081"),
    fetchLumberComparison(),
  ]);

  // Annualize monthly FRED data and index to 2019=100
  const usIndexed = annualizeAndIndex(fredResult.observations, "2019");

  // Latest US stat
  const usLatest = usIndexed.length > 0 ? usIndexed[usIndexed.length - 1] : null;
  const usPrev = usIndexed.length > 1 ? usIndexed[usIndexed.length - 2] : null;
  const usYoY =
    usLatest && usPrev ? ((usLatest.value - usPrev.value) / usPrev.value) * 100 : null;

  // Latest IMF stat
  const imfLatest = imfIndexed.length > 0 ? imfIndexed[imfIndexed.length - 1] : null;
  const imfPrev = imfIndexed.length > 1 ? imfIndexed[imfIndexed.length - 2] : null;
  const imfYoY =
    imfLatest && imfPrev ? ((imfLatest.value - imfPrev.value) / imfPrev.value) * 100 : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumb nav */}
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Lumber Market</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Lumber Market: US vs World Price Comparison
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          US lumber producer prices (FRED WPU081) alongside global softwood log prices (IMF PSOFTLOG),
          both normalized to 2019 = 100. See how domestic supply constraints, tariffs, and housing
          demand push US prices above or below the global benchmark.
        </p>
      </div>

      {/* Dual-line chart */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Price Index — US vs Global (2019 = 100)
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Annual average. US series: monthly PPI annualized. Global series: IMF annual USD/m³.
            </p>
          </div>
        </div>
        <DualLineChart usSeries={usIndexed} imfSeries={imfIndexed} />
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <StatCard
          label="US Lumber PPI — Latest Annual Index"
          index={usLatest?.value ?? null}
          yoy={usYoY}
          color={US_COLOR}
          colorLight="#dbeafe"
          year={usLatest?.year ?? null}
        />
        <StatCard
          label="Global Softwood Log Price — Latest Annual Index"
          index={imfLatest?.value ?? null}
          yoy={imfYoY}
          color={IMF_COLOR}
          colorLight="#fef3c7"
          year={imfLatest?.year ?? null}
        />
      </div>

      {/* Article */}
      <article className="space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          Why US Lumber Prices Diverge from Global Markets
        </h2>
        <p>
          Despite operating in a globally connected commodity market, US lumber prices frequently
          trade at a significant premium — or occasionally a discount — to global softwood log
          benchmarks. Three forces drive this divergence:
        </p>
        <p>
          <strong className="font-medium text-gray-800">Canadian lumber tariffs.</strong> The US
          levies countervailing and anti-dumping duties on Canadian softwood lumber imports, which
          typically range from 8% to over 20%. Since Canada supplies roughly a quarter of US lumber
          needs, these tariffs create a direct floor under domestic prices that global buyers do not
          face. When duties increase, the US PPI can spike independently of the IMF benchmark.
        </p>
        <p>
          <strong className="font-medium text-gray-800">Domestic production constraints.</strong>{" "}
          US sawmill capacity is tied to timber harvests on federal and private land. Environmental
          regulations, wildfire disruption, and mill closures can throttle supply quickly. Unlike
          steel or concrete, lumber cannot be easily substituted or stockpiled at scale — so supply
          shocks amplify price swings beyond what the global market reflects.
        </p>
        <p>
          <strong className="font-medium text-gray-800">Housing boom demand spikes.</strong> During
          periods of intense homebuilding activity — particularly 2020–2022 — US framing lumber
          demand surged faster than domestic mills could respond. The result was an historic price
          spike that dwarfed movements in the global softwood log index, which tracks raw log
          exports rather than processed dimensional lumber delivered to US job sites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 pt-2">
          How to Read the Price Index
        </h2>
        <p>
          Both series are normalized so that the average value in 2019 equals exactly 100. This
          lets you compare percentage changes on the same scale regardless of the underlying
          units (PPI index points for FRED; USD per cubic meter for IMF).
        </p>
        <p>
          A reading of <strong className="font-medium text-gray-800">125</strong> means prices
          are 25% above 2019 levels. A reading of{" "}
          <strong className="font-medium text-gray-800">80</strong> means prices are 20% below
          the 2019 average. When the two lines track closely, US and global markets are moving
          together. When the US line climbs well above the IMF line, domestic supply or tariff
          pressures are at work.
        </p>
        <p>
          The US series (FRED WPU081) is derived from monthly producer price data, which is
          averaged into annual figures here to match the annual frequency of the IMF series.
          Both series are based on data released with a lag — the most recent year shown may
          reflect preliminary estimates.
        </p>

        {/* Pro tip amber box */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
          <strong className="text-amber-900">Pro tip:</strong>{" "}
          <span className="text-amber-800">
            When the US PPI is more than 20% above the global index, it often signals domestic
            supply constraints — consider locking in lumber prices or phasing purchases over
            3–6 months to reduce exposure to further price spikes.
          </span>
        </div>

        {/* Source attribution */}
        <p className="text-xs text-gray-400 pt-2">
          Data sources:{" "}
          <a
            href="https://fred.stlouisfed.org/series/WPU081"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Federal Reserve Bank of St. Louis (FRED) — series WPU081
          </a>
          {" · "}
          <a
            href="https://www.imf.org/external/datamapper/PSOFTLOG"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            IMF Primary Commodity Prices — PSOFTLOG (Softwood Logs)
          </a>
          . Data updated annually. Not a substitute for supplier quotes.
        </p>
      </article>
    </div>
  );
}
