export type Observation = { date: string; value: number };

export type SeriesResult = {
  observations: Observation[];
  current: number | null;
  mom: number | null;   // month-over-month %
  yoy: number | null;   // year-over-year %
};

export const MATERIALS = {
  lumber: {
    id: "WPU081",
    label: "Lumber & Wood Products",
    unit: "PPI Index",
    color: "#b45309",
    colorLight: "#fef3c7",
    emoji: "🪵",
    description: "Producer Price Index for lumber and wood products (1982=100). Tracks wholesale price changes for dimensional lumber, plywood, and engineered wood.",
  },
  steel: {
    id: "WPU101",
    label: "Steel & Iron Products",
    unit: "PPI Index",
    color: "#1d4ed8",
    colorLight: "#dbeafe",
    emoji: "🔩",
    description: "Producer Price Index for iron and steel mill products. Relevant for rebar, structural steel, and metal framing costs.",
  },
  concrete: {
    id: "PCU327320327320",
    label: "Ready-Mix Concrete",
    unit: "PPI Index",
    color: "#6d28d9",
    colorLight: "#ede9fe",
    emoji: "🪣",
    description: "Producer Price Index for ready-mix concrete manufacturing. Reflects changes in delivered concrete costs for slabs and foundations.",
  },
} as const;

export const HOUSING = {
  id: "HOUST",
  label: "Housing Starts",
  unit: "Thousands (SAAR)",
  color: "#065f46",
  colorLight: "#d1fae5",
  emoji: "🏠",
  description: "Seasonally adjusted annual rate of new residential construction starts. A key leading indicator for construction material demand.",
};

async function fetchObservations(seriesId: string, limit = 24): Promise<Observation[]> {
  const key = process.env.FRED_API_KEY;
  if (!key) return [];

  try {
    const url =
      `https://api.stlouisfed.org/fred/series/observations` +
      `?series_id=${seriesId}` +
      `&api_key=${key}` +
      `&file_type=json` +
      `&limit=${limit}` +
      `&sort_order=desc`;

    const res = await fetch(url, { next: { revalidate: 86400 } }); // cache 24h
    if (!res.ok) return [];

    const json = await res.json();
    return (json.observations as Array<{ date: string; value: string }>)
      .filter((o) => o.value !== ".")
      .reverse()
      .map((o) => ({ date: o.date, value: parseFloat(o.value) }));
  } catch {
    return [];
  }
}

function pct(a: number, b: number): number {
  return ((a - b) / b) * 100;
}

export async function fetchMaterialSeries(seriesId: string): Promise<SeriesResult> {
  const observations = await fetchObservations(seriesId, 24);

  if (observations.length === 0) {
    return { observations: [], current: null, mom: null, yoy: null };
  }

  const current = observations[observations.length - 1].value;
  const mom =
    observations.length >= 2
      ? pct(current, observations[observations.length - 2].value)
      : null;
  const yoy =
    observations.length >= 13
      ? pct(current, observations[observations.length - 13].value)
      : null;

  return { observations, current, mom, yoy };
}

export async function fetchAllMaterials() {
  const [lumber, steel, concrete, housing] = await Promise.all([
    fetchMaterialSeries(MATERIALS.lumber.id),
    fetchMaterialSeries(MATERIALS.steel.id),
    fetchMaterialSeries(MATERIALS.concrete.id),
    fetchMaterialSeries(HOUSING.id),
  ]);
  return { lumber, steel, concrete, housing };
}

/** Compact summary for the homepage widget */
export async function fetchMarketSummary() {
  const [lumber, steel, concrete] = await Promise.all([
    fetchMaterialSeries(MATERIALS.lumber.id),
    fetchMaterialSeries(MATERIALS.steel.id),
    fetchMaterialSeries(MATERIALS.concrete.id),
  ]);
  return {
    lumber:   { mom: lumber.mom,   current: lumber.current,   lastDate: lumber.observations.at(-1)?.date ?? null },
    steel:    { mom: steel.mom,    current: steel.current,    lastDate: steel.observations.at(-1)?.date ?? null },
    concrete: { mom: concrete.mom, current: concrete.current, lastDate: concrete.observations.at(-1)?.date ?? null },
  };
}

/** Convert monthly observations to annual averages, indexed to baseYear=100 */
export function annualizeAndIndex(
  obs: Observation[],
  baseYear = "2019"
): { year: string; value: number }[] {
  const byYear: Record<string, number[]> = {};
  for (const o of obs) {
    const yr = o.date.slice(0, 4);
    if (!byYear[yr]) byYear[yr] = [];
    byYear[yr].push(o.value);
  }
  const annual = Object.entries(byYear)
    .map(([year, vals]) => ({
      year,
      value: vals.reduce((a, b) => a + b, 0) / vals.length,
    }))
    .sort((a, b) => a.year.localeCompare(b.year));

  const base = annual.find((d) => d.year === baseYear);
  if (!base) return annual;
  return annual.map((d) => ({ year: d.year, value: (d.value / base.value) * 100 }));
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatPct(v: number | null): string {
  if (v === null) return "—";
  const sign = v >= 0 ? "+" : "";
  return `${sign}${v.toFixed(1)}%`;
}

/** Compute SVG path strings for a line+area chart — runs server-side */
export function computeChartPaths(
  values: number[],
  w = 560,
  h = 100,
  pad = 8
): { linePath: string; areaPath: string; lastX: number; lastY: number } | null {
  if (values.length < 2) return null;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const pts = values.map((v, i) => ({
    x: pad + (i / (values.length - 1)) * (w - 2 * pad),
    y: pad + ((max - v) / range) * (h - 2 * pad),
  }));

  const linePath = pts
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");

  const areaPath =
    `${linePath}` +
    ` L${pts[pts.length - 1].x.toFixed(1)},${(h - pad).toFixed(1)}` +
    ` L${pts[0].x.toFixed(1)},${(h - pad).toFixed(1)} Z`;

  return {
    linePath,
    areaPath,
    lastX: pts[pts.length - 1].x,
    lastY: pts[pts.length - 1].y,
  };
}
