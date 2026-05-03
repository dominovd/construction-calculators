import type { Metadata } from "next";
import {
  fetchAllMaterials,
  MATERIALS,
  HOUSING,
  computeChartPaths,
  formatDate,
  formatPct,
  type Observation,
  type SeriesResult,
} from "@/lib/fred";

export const metadata: Metadata = {
  title: "Construction Material Price Index — Lumber, Steel & Concrete",
  description:
    "Track monthly price changes for lumber, steel, ready-mix concrete, and housing starts. Data sourced from the U.S. Bureau of Labor Statistics via FRED.",
  alternates: { canonical: "https://easybuildcalc.com/material-prices" },
  openGraph: {
    title: "Construction Material Price Index",
    description:
      "Monthly lumber, steel, and concrete price trends from the U.S. Bureau of Labor Statistics.",
    url: "https://easybuildcalc.com/material-prices",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Material Prices", item: "https://easybuildcalc.com/material-prices" },
  ],
};

/* ─── SVG line + area chart ─────────────────────────────────────── */
function PriceChart({
  data,
  color,
}: {
  data: Observation[];
  color: string;
}) {
  const values = data.map((o) => o.value);
  const paths = computeChartPaths(values, 560, 100, 8);
  if (!paths) return <div className="h-24 bg-gray-50 rounded" />;

  const { linePath, areaPath, lastX, lastY } = paths;

  // X-axis labels: show every 6th point
  const labelStep = Math.max(1, Math.floor(data.length / 5));
  const labels = data
    .map((o, i) => ({ i, date: o.date }))
    .filter((_, i) => i % labelStep === 0 || i === data.length - 1);

  return (
    <div>
      <svg
        viewBox="0 0 560 100"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* area */}
        <path
          d={areaPath}
          fill={`url(#fill-${color.replace("#", "")})`}
        />
        {/* line */}
        <path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* last-point dot */}
        <circle cx={lastX} cy={lastY} r="4" fill={color} />
      </svg>
      {/* x-axis labels */}
      <div className="flex justify-between text-xs text-gray-400 mt-1 px-1">
        {labels.slice(0, 2).map(({ date }) => (
          <span key={date}>{formatDate(date)}</span>
        ))}
        <span>{formatDate(data[data.length - 1].date)}</span>
      </div>
    </div>
  );
}

/* ─── Individual price card ──────────────────────────────────────── */
function PriceCard({
  label,
  emoji,
  unit,
  color,
  colorLight,
  description,
  result,
}: {
  label: string;
  emoji: string;
  unit: string;
  color: string;
  colorLight: string;
  description: string;
  result: SeriesResult;
}) {
  const { observations, current, mom, yoy } = result;
  const noData = observations.length === 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      {/* header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-2xl">{emoji}</span>
            <h2 className="text-base font-semibold text-gray-900 mt-1">{label}</h2>
            <p className="text-xs text-gray-400">{unit}</p>
          </div>
          {!noData && (
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">{current?.toFixed(1)}</p>
              <p className="text-xs text-gray-400">
                as of {formatDate(observations[observations.length - 1].date)}
              </p>
            </div>
          )}
        </div>

        {/* MoM / YoY badges */}
        {!noData && (
          <div className="flex gap-3">
            <div
              className="rounded-lg px-3 py-1.5 text-xs font-medium"
              style={{ backgroundColor: colorLight, color }}
            >
              MoM {formatPct(mom)}
            </div>
            <div className="rounded-lg px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600">
              YoY {formatPct(yoy)}
            </div>
          </div>
        )}
      </div>

      {/* chart */}
      <div className="px-4 pb-4">
        {noData ? (
          <div className="h-24 flex items-center justify-center text-xs text-gray-400 bg-gray-50 rounded-lg">
            Data temporarily unavailable
          </div>
        ) : (
          <PriceChart data={observations} color={color} />
        )}
      </div>

      {/* description */}
      <div className="px-5 pb-5 border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function MaterialPricesPage() {
  const { lumber, steel, concrete, housing } = await fetchAllMaterials();

  const hasData = lumber.observations.length > 0;
  const lastUpdated = lumber.observations.at(-1)?.date
    ? formatDate(lumber.observations.at(-1)!.date)
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Material Prices</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Construction Material Price Index
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          Monthly producer price changes for lumber, steel, and ready-mix concrete — sourced
          directly from the U.S. Bureau of Labor Statistics via FRED. Updated monthly to help
          contractors and builders track cost trends for budgeting and bidding.
        </p>
        {hasData && lastUpdated && (
          <p className="text-xs text-gray-400 mt-2">Last data point: {lastUpdated}</p>
        )}
      </div>

      {/* 3 material cards */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <PriceCard
          {...MATERIALS.lumber}
          result={lumber}
        />
        <PriceCard
          {...MATERIALS.steel}
          result={steel}
        />
        <PriceCard
          {...MATERIALS.concrete}
          result={concrete}
        />
      </div>

      {/* Housing Starts — full width */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-10">
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-2xl">{HOUSING.emoji}</span>
              <h2 className="text-base font-semibold text-gray-900 mt-1">{HOUSING.label}</h2>
              <p className="text-xs text-gray-400">{HOUSING.unit}</p>
            </div>
            {housing.current !== null && (
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">
                  {housing.current.toLocaleString()}K
                </p>
                <p className="text-xs text-gray-400">
                  as of {housing.observations.at(-1) ? formatDate(housing.observations.at(-1)!.date) : "—"}
                </p>
              </div>
            )}
          </div>
          {housing.observations.length > 0 && (
            <div className="flex gap-3">
              <div className="rounded-lg px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-700">
                MoM {formatPct(housing.mom)}
              </div>
              <div className="rounded-lg px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-600">
                YoY {formatPct(housing.yoy)}
              </div>
            </div>
          )}
        </div>
        <div className="px-4 pb-4">
          {housing.observations.length === 0 ? (
            <div className="h-24 flex items-center justify-center text-xs text-gray-400 bg-gray-50 rounded-lg">
              Data temporarily unavailable
            </div>
          ) : (
            <PriceChart data={housing.observations} color={HOUSING.color} />
          )}
        </div>
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500 leading-relaxed">{HOUSING.description}</p>
        </div>
      </div>


      {/* Context article */}
      <article className="space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          How to Use Material Price Trends for Project Budgeting
        </h2>
        <p>
          Material costs are one of the biggest variables in construction budgeting. A 10% increase
          in lumber prices can swing the cost of a framing package by thousands of dollars.
          Tracking the Producer Price Index (PPI) for key materials lets you anticipate cost
          changes before they hit your invoice.
        </p>

        <h3 className="text-base font-semibold text-gray-800">What is the Producer Price Index?</h3>
        <p>
          The PPI measures the average change in selling prices received by domestic producers.
          Unlike retail prices, the PPI reflects wholesale costs — closer to what contractors
          actually pay when buying materials in volume. Data is published monthly by the
          U.S. Bureau of Labor Statistics.
        </p>

        <h3 className="text-base font-semibold text-gray-800">Why Housing Starts Matter</h3>
        <p>
          Housing starts — the number of new residential construction projects begun each month —
          are a leading indicator of material demand. When starts surge, lumber, concrete, and
          drywall prices typically follow within 1–3 months. Monitoring this trend helps you
          decide when to lock in material prices or delay purchasing.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm">
          <strong className="text-blue-900">Tip for contractors:</strong>{" "}
          <span className="text-blue-700">
            If MoM lumber prices are rising for 2+ consecutive months, consider pre-purchasing
            framing material or including a material escalation clause in bids.
          </span>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          Data source: U.S. Bureau of Labor Statistics, retrieved via the{" "}
          <a
            href="https://fred.stlouisfed.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Federal Reserve Bank of St. Louis (FRED)
          </a>
          . Series: WPU081 (lumber), WPU101 (steel), PCU327320327320 (concrete), HOUST (housing starts).
          Updated monthly. Not a substitute for supplier quotes.
        </p>
      </article>
    </div>
  );
}
