export type CountryStarts = {
  code: string;
  name: string;
  flag: string;
  values: { year: string; value: number }[];
  latest: number | null;
  latestYear: string | null;
  yoy: number | null;
};

export const COUNTRY_META: Record<string, { name: string; flag: string }> = {
  USA: { name: "United States",  flag: "🇺🇸" },
  JPN: { name: "Japan",          flag: "🇯🇵" },
  DEU: { name: "Germany",        flag: "🇩🇪" },
  FRA: { name: "France",         flag: "🇫🇷" },
  GBR: { name: "United Kingdom", flag: "🇬🇧" },
  KOR: { name: "South Korea",    flag: "🇰🇷" },
  CAN: { name: "Canada",         flag: "🇨🇦" },
  AUS: { name: "Australia",      flag: "🇦🇺" },
  ITA: { name: "Italy",          flag: "🇮🇹" },
  ESP: { name: "Spain",          flag: "🇪🇸" },
  POL: { name: "Poland",         flag: "🇵🇱" },
  NLD: { name: "Netherlands",    flag: "🇳🇱" },
  SWE: { name: "Sweden",         flag: "🇸🇪" },
  NOR: { name: "Norway",         flag: "🇳🇴" },
  DNK: { name: "Denmark",        flag: "🇩🇰" },
  FIN: { name: "Finland",        flag: "🇫🇮" },
  AUT: { name: "Austria",        flag: "🇦🇹" },
  CHE: { name: "Switzerland",    flag: "🇨🇭" },
  BEL: { name: "Belgium",        flag: "🇧🇪" },
  NZL: { name: "New Zealand",    flag: "🇳🇿" },
  IRL: { name: "Ireland",        flag: "🇮🇪" },
};

const CODES = Object.keys(COUNTRY_META).join("+");

const OECD_URL =
  `https://stats.oecd.org/SDMX-JSON/data/HOUSING/${CODES}.STARTS.A/OECD` +
  `?contentType=application/json&lastNObservations=10`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseSdmxJson(json: any): CountryStarts[] {
  const locationDim = json.structure.dimensions.series.find(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (d: any) => d.id === "LOCATION"
  );
  const timeDim = json.structure.dimensions.observation[0]; // TIME_PERIOD
  const seriesMap = json.dataSets[0].series;

  const results: CountryStarts[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  locationDim.values.forEach((loc: any, locIdx: number) => {
    const code = loc.id as string;
    const meta = COUNTRY_META[code];
    if (!meta) return;

    const key = `${locIdx}:0:0`;
    const s = seriesMap[key];
    if (!s) return;

    const values = Object.entries(s.observations)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map(([tIdx, obs]: [string, any]) => ({
        year: timeDim.values[parseInt(tIdx)].id as string,
        value: obs[0] as number,
      }))
      .filter((v) => v.value !== null && !isNaN(v.value))
      .sort((a, b) => a.year.localeCompare(b.year));

    if (!values.length) return;

    const last = values[values.length - 1];
    const prev = values.length >= 2 ? values[values.length - 2] : null;
    const yoy = prev ? ((last.value - prev.value) / prev.value) * 100 : null;

    results.push({
      code,
      name: meta.name,
      flag: meta.flag,
      values,
      latest: last.value,
      latestYear: last.year,
      yoy,
    });
  });

  return results.sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
}

export async function fetchHousingStarts(): Promise<CountryStarts[]> {
  try {
    const res = await fetch(OECD_URL, { next: { revalidate: 86400 * 7 } });
    if (!res.ok) return [];
    const json = await res.json();
    return parseSdmxJson(json);
  } catch {
    return [];
  }
}

export function formatStarts(v: number | null): string {
  if (v === null) return "—";
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(2)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(0)}K`;
  return v.toLocaleString();
}

export function formatPct(v: number | null): string {
  if (v === null) return "—";
  return `${v >= 0 ? "+" : ""}${v.toFixed(1)}%`;
}
