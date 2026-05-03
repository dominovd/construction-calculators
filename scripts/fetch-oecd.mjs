/**
 * scripts/fetch-oecd.mjs
 * Fetches OECD housing starts data and saves to data/housing-starts.json
 * Run manually: node scripts/fetch-oecd.mjs
 * Run via GitHub Actions: see .github/workflows/update-housing-data.yml
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const COUNTRY_META = {
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

const CODES = Object.keys(COUNTRY_META).join("+");
const OECD_URL =
  `https://stats.oecd.org/SDMX-JSON/data/HOUSING/${CODES}.STARTS.A/OECD` +
  `?contentType=application/json&lastNObservations=10`;

function parseSdmxJson(json) {
  const locationDim = json.structure.dimensions.series.find((d) => d.id === "LOCATION");
  const timeDim = json.structure.dimensions.observation[0];
  const seriesMap = json.dataSets[0].series;

  const results = [];

  locationDim.values.forEach((loc, locIdx) => {
    const code = loc.id;
    const meta = COUNTRY_META[code];
    if (!meta) return;

    const key = `${locIdx}:0:0`;
    const s = seriesMap[key];
    if (!s) return;

    const values = Object.entries(s.observations)
      .map(([tIdx, obs]) => ({
        year: timeDim.values[parseInt(tIdx)].id,
        value: obs[0],
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

async function main() {
  console.log("Fetching OECD housing starts data...");
  console.log(`URL: ${OECD_URL}`);

  const res = await fetch(OECD_URL, {
    headers: {
      "User-Agent": "EasyBuildCalc/1.0 (https://easybuildcalc.com; data@easybuildcalc.com)",
      "Accept": "application/json",
    },
  });

  if (!res.ok) {
    console.error(`OECD API returned HTTP ${res.status} ${res.statusText}`);
    process.exit(1);
  }

  const json = await res.json();
  const results = parseSdmxJson(json);

  if (!results.length) {
    console.error("Parsed 0 countries — something is wrong with the response shape.");
    process.exit(1);
  }

  const outDir = path.join(ROOT, "data");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "housing-starts.json");
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));

  console.log(`✓ Saved ${results.length} countries to data/housing-starts.json`);
  console.log(`  Latest year: ${results[0]?.latestYear}`);
  results.slice(0, 5).forEach((c) => {
    console.log(`  ${c.flag} ${c.name}: ${c.latest?.toLocaleString()} (${c.latestYear})`);
  });
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
