import fs from "fs";
import path from "path";

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
  KOR: { name: "South Korea",    flag: "🇰🇷" },
  GBR: { name: "United Kingdom", flag: "🇬🇧" },
  CAN: { name: "Canada",         flag: "🇨🇦" },
  AUS: { name: "Australia",      flag: "🇦🇺" },
  POL: { name: "Poland",         flag: "🇵🇱" },
  ESP: { name: "Spain",          flag: "🇪🇸" },
  ITA: { name: "Italy",          flag: "🇮🇹" },
  NLD: { name: "Netherlands",    flag: "🇳🇱" },
  NZL: { name: "New Zealand",    flag: "🇳🇿" },
  SWE: { name: "Sweden",         flag: "🇸🇪" },
  AUT: { name: "Austria",        flag: "🇦🇹" },
  CHE: { name: "Switzerland",    flag: "🇨🇭" },
  BEL: { name: "Belgium",        flag: "🇧🇪" },
  IRL: { name: "Ireland",        flag: "🇮🇪" },
  NOR: { name: "Norway",         flag: "🇳🇴" },
  DNK: { name: "Denmark",        flag: "🇩🇰" },
  FIN: { name: "Finland",        flag: "🇫🇮" },
};

// ── 1. Read from committed JSON file (updated by GitHub Actions weekly) ──────
function loadFromFile(): CountryStarts[] | null {
  try {
    const filePath = path.join(process.cwd(), "data", "housing-starts.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(raw) as CountryStarts[];
    if (Array.isArray(data) && data.length > 0) return data;
  } catch {
    // file missing or malformed — fall through
  }
  return null;
}

// ── 2. Parse live OECD SDMX-JSON response ────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseSdmxJson(json: any): CountryStarts[] {
  try {
    const locationDim = json.structure.dimensions.series.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d: any) => d.id === "LOCATION"
    );
    const timeDim = json.structure.dimensions.observation[0];
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

      results.push({ code, name: meta.name, flag: meta.flag, values, latest: last.value, latestYear: last.year, yoy });
    });

    return results.sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
  } catch {
    return [];
  }
}

// ── 3. Hardcoded static fallback (last resort) ───────────────────────────────
const STATIC_DATA: Record<string, { year: string; value: number }[]> = {
  USA: [
    { year: "2014", value: 1003000 }, { year: "2015", value: 1108000 },
    { year: "2016", value: 1168000 }, { year: "2017", value: 1202000 },
    { year: "2018", value: 1247000 }, { year: "2019", value: 1290000 },
    { year: "2020", value: 1380000 }, { year: "2021", value: 1595000 },
    { year: "2022", value: 1553000 }, { year: "2023", value: 1413000 },
  ],
  JPN: [
    { year: "2014", value: 880472 }, { year: "2015", value: 909299 },
    { year: "2016", value: 967237 }, { year: "2017", value: 946396 },
    { year: "2018", value: 942370 }, { year: "2019", value: 905123 },
    { year: "2020", value: 812164 }, { year: "2021", value: 856484 },
    { year: "2022", value: 860000 }, { year: "2023", value: 819623 },
  ],
  KOR: [
    { year: "2014", value: 440100 }, { year: "2015", value: 517000 },
    { year: "2016", value: 726000 }, { year: "2017", value: 654000 },
    { year: "2018", value: 554000 }, { year: "2019", value: 487000 },
    { year: "2020", value: 457000 }, { year: "2021", value: 543000 },
    { year: "2022", value: 380000 }, { year: "2023", value: 350000 },
  ],
  DEU: [
    { year: "2014", value: 285000 }, { year: "2015", value: 310000 },
    { year: "2016", value: 375400 }, { year: "2017", value: 348000 },
    { year: "2018", value: 347300 }, { year: "2019", value: 360000 },
    { year: "2020", value: 368000 }, { year: "2021", value: 380000 },
    { year: "2022", value: 295000 }, { year: "2023", value: 260100 },
  ],
  FRA: [
    { year: "2014", value: 355300 }, { year: "2015", value: 354100 },
    { year: "2016", value: 378000 }, { year: "2017", value: 426000 },
    { year: "2018", value: 412000 }, { year: "2019", value: 446000 },
    { year: "2020", value: 376000 }, { year: "2021", value: 460000 },
    { year: "2022", value: 383000 }, { year: "2023", value: 295000 },
  ],
  CAN: [
    { year: "2014", value: 189300 }, { year: "2015", value: 194500 },
    { year: "2016", value: 197900 }, { year: "2017", value: 219800 },
    { year: "2018", value: 212800 }, { year: "2019", value: 208700 },
    { year: "2020", value: 218437 }, { year: "2021", value: 271198 },
    { year: "2022", value: 261534 }, { year: "2023", value: 240267 },
  ],
  AUS: [
    { year: "2014", value: 154900 }, { year: "2015", value: 184700 },
    { year: "2016", value: 188900 }, { year: "2017", value: 171900 },
    { year: "2018", value: 162700 }, { year: "2019", value: 167700 },
    { year: "2020", value: 149200 }, { year: "2021", value: 193500 },
    { year: "2022", value: 189300 }, { year: "2023", value: 170000 },
  ],
  POL: [
    { year: "2014", value: 143000 }, { year: "2015", value: 148000 },
    { year: "2016", value: 163000 }, { year: "2017", value: 178000 },
    { year: "2018", value: 185000 }, { year: "2019", value: 207900 },
    { year: "2020", value: 221400 }, { year: "2021", value: 235000 },
    { year: "2022", value: 210000 }, { year: "2023", value: 220000 },
  ],
  GBR: [
    { year: "2014", value: 141000 }, { year: "2015", value: 155000 },
    { year: "2016", value: 163000 }, { year: "2017", value: 162000 },
    { year: "2018", value: 165000 }, { year: "2019", value: 172000 },
    { year: "2020", value: 141000 }, { year: "2021", value: 187000 },
    { year: "2022", value: 172000 }, { year: "2023", value: 155000 },
  ],
  ESP: [
    { year: "2014", value: 34400 },  { year: "2015", value: 49600 },
    { year: "2016", value: 63600 },  { year: "2017", value: 82300 },
    { year: "2018", value: 100300 }, { year: "2019", value: 107200 },
    { year: "2020", value: 84000 },  { year: "2021", value: 109000 },
    { year: "2022", value: 112000 }, { year: "2023", value: 115000 },
  ],
  ITA: [
    { year: "2014", value: 56000 }, { year: "2015", value: 57000 },
    { year: "2016", value: 61000 }, { year: "2017", value: 64000 },
    { year: "2018", value: 66000 }, { year: "2019", value: 65000 },
    { year: "2020", value: 55000 }, { year: "2021", value: 70000 },
    { year: "2022", value: 73000 }, { year: "2023", value: 70000 },
  ],
  NLD: [
    { year: "2014", value: 44700 }, { year: "2015", value: 54800 },
    { year: "2016", value: 63300 }, { year: "2017", value: 63200 },
    { year: "2018", value: 66000 }, { year: "2019", value: 71500 },
    { year: "2020", value: 69800 }, { year: "2021", value: 77600 },
    { year: "2022", value: 73000 }, { year: "2023", value: 73200 },
  ],
  NZL: [
    { year: "2014", value: 22200 }, { year: "2015", value: 25000 },
    { year: "2016", value: 29000 }, { year: "2017", value: 31000 },
    { year: "2018", value: 32200 }, { year: "2019", value: 38200 },
    { year: "2020", value: 39000 }, { year: "2021", value: 51000 },
    { year: "2022", value: 46900 }, { year: "2023", value: 36500 },
  ],
  SWE: [
    { year: "2014", value: 37000 }, { year: "2015", value: 49400 },
    { year: "2016", value: 62000 }, { year: "2017", value: 63200 },
    { year: "2018", value: 51000 }, { year: "2019", value: 45800 },
    { year: "2020", value: 44300 }, { year: "2021", value: 53000 },
    { year: "2022", value: 51000 }, { year: "2023", value: 34900 },
  ],
  AUT: [
    { year: "2014", value: 42000 }, { year: "2015", value: 45600 },
    { year: "2016", value: 44800 }, { year: "2017", value: 48600 },
    { year: "2018", value: 46800 }, { year: "2019", value: 52000 },
    { year: "2020", value: 50300 }, { year: "2021", value: 52000 },
    { year: "2022", value: 43000 }, { year: "2023", value: 36000 },
  ],
  CHE: [
    { year: "2014", value: 46300 }, { year: "2015", value: 47200 },
    { year: "2016", value: 48800 }, { year: "2017", value: 51000 },
    { year: "2018", value: 49800 }, { year: "2019", value: 52000 },
    { year: "2020", value: 48200 }, { year: "2021", value: 46000 },
    { year: "2022", value: 40100 }, { year: "2023", value: 38000 },
  ],
  BEL: [
    { year: "2014", value: 41000 }, { year: "2015", value: 42000 },
    { year: "2016", value: 43000 }, { year: "2017", value: 44000 },
    { year: "2018", value: 42000 }, { year: "2019", value: 43000 },
    { year: "2020", value: 40000 }, { year: "2021", value: 48000 },
    { year: "2022", value: 44000 }, { year: "2023", value: 38000 },
  ],
  IRL: [
    { year: "2014", value: 11000 }, { year: "2015", value: 12600 },
    { year: "2016", value: 14900 }, { year: "2017", value: 19300 },
    { year: "2018", value: 18000 }, { year: "2019", value: 21200 },
    { year: "2020", value: 20500 }, { year: "2021", value: 30000 },
    { year: "2022", value: 29000 }, { year: "2023", value: 32500 },
  ],
  NOR: [
    { year: "2014", value: 28000 }, { year: "2015", value: 33600 },
    { year: "2016", value: 37800 }, { year: "2017", value: 36600 },
    { year: "2018", value: 33200 }, { year: "2019", value: 28000 },
    { year: "2020", value: 27200 }, { year: "2021", value: 32000 },
    { year: "2022", value: 29000 }, { year: "2023", value: 21000 },
  ],
  DNK: [
    { year: "2014", value: 14100 }, { year: "2015", value: 19800 },
    { year: "2016", value: 23000 }, { year: "2017", value: 25200 },
    { year: "2018", value: 24000 }, { year: "2019", value: 22000 },
    { year: "2020", value: 19300 }, { year: "2021", value: 22000 },
    { year: "2022", value: 20000 }, { year: "2023", value: 16200 },
  ],
  FIN: [
    { year: "2014", value: 23300 }, { year: "2015", value: 24000 },
    { year: "2016", value: 33700 }, { year: "2017", value: 43000 },
    { year: "2018", value: 39800 }, { year: "2019", value: 39700 },
    { year: "2020", value: 32000 }, { year: "2021", value: 39300 },
    { year: "2022", value: 36000 }, { year: "2023", value: 21500 },
  ],
};

function buildFromStatic(): CountryStarts[] {
  const results: CountryStarts[] = [];
  for (const [code, rawValues] of Object.entries(STATIC_DATA)) {
    const meta = COUNTRY_META[code];
    if (!meta) continue;
    const values = rawValues.filter((v) => !isNaN(v.value));
    if (!values.length) continue;
    const last = values[values.length - 1];
    const prev = values.length >= 2 ? values[values.length - 2] : null;
    const yoy = prev ? ((last.value - prev.value) / prev.value) * 100 : null;
    results.push({ code, name: meta.name, flag: meta.flag, values, latest: last.value, latestYear: last.year, yoy });
  }
  return results.sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
}

// ── Main export ───────────────────────────────────────────────────────────────
export async function fetchHousingStarts(): Promise<CountryStarts[]> {
  // Priority 1: JSON file committed by GitHub Actions (freshest data)
  const fromFile = loadFromFile();
  if (fromFile) return fromFile;

  // Priority 2: Live OECD API (works from non-Vercel IPs)
  try {
    const CODES = Object.keys(COUNTRY_META).join("+");
    const url =
      `https://stats.oecd.org/SDMX-JSON/data/HOUSING/${CODES}.STARTS.A/OECD` +
      `?contentType=application/json&lastNObservations=10`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "EasyBuildCalc/1.0 (https://easybuildcalc.com)",
        "Accept": "application/json",
      },
      next: { revalidate: 86400 * 7 },
    });
    if (res.ok) {
      const json = await res.json();
      const parsed = parseSdmxJson(json);
      if (parsed.length > 0) return parsed;
    }
  } catch {
    // fall through
  }

  // Priority 3: Hardcoded static data
  return buildFromStatic();
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
