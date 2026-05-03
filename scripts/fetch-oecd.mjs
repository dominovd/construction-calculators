/**
 * scripts/fetch-oecd.mjs
 * Fetches OECD housing starts data and saves to data/housing-starts.json
 *
 * Tries multiple OECD API endpoints (old API was deprecated in 2024).
 * If all fail, exits cleanly with code 0 — existing JSON file is preserved.
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

// OECD migrated from stats.oecd.org to sdmx.oecd.org in 2024
// New REST API: https://sdmx.oecd.org/public/rest/
const ENDPOINTS = [
  // New OECD SDMX 2.1 REST API (post-2024)
  `https://sdmx.oecd.org/public/rest/data/OECD.SDD.TPS,DSD_HOUSING@DF_HOUSING,1.0/${CODES}.STARTS.A?startPeriod=2014&dimensionAtObservation=AllDimensions`,
  // Legacy endpoint (may still work for some regions)
  `https://stats.oecd.org/SDMX-JSON/data/HOUSING/${CODES}.STARTS.A/OECD?contentType=application/json&lastNObservations=10`,
];

const HEADERS = {
  "User-Agent": "EasyBuildCalc/1.0 (https://easybuildcalc.com; data@easybuildcalc.com)",
  "Accept": "application/json, application/vnd.sdmx.data+json",
};

// ── Parse old SDMX-JSON 1.0 format (stats.oecd.org) ──────────────────────────
function parseLegacySdmx(json) {
  const locationDim = json.structure?.dimensions?.series?.find((d) => d.id === "LOCATION");
  const timeDim = json.structure?.dimensions?.observation?.[0];
  const seriesMap = json.dataSets?.[0]?.series;
  if (!locationDim || !timeDim || !seriesMap) return null;

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
    results.push({ code, name: meta.name, flag: meta.flag, values, latest: last.value, latestYear: last.year, yoy });
  });
  return results.length ? results : null;
}

// ── Parse new SDMX-JSON 2.0 format (sdmx.oecd.org) ───────────────────────────
function parseNewSdmx(json) {
  try {
    // New format uses data.dataSets[0].observations with dimension indices as keys
    const structure = json.meta?.schema ?? json.structure;
    const dataset = json.data?.dataSets?.[0] ?? json.dataSets?.[0];
    if (!dataset) return null;

    // Try to extract dimension info
    const dimensions = json.data?.structure?.dimensions ?? json.structure?.dimensions;
    if (!dimensions) return null;

    const seriesDims = dimensions.series ?? dimensions.observation;
    const locationDim = seriesDims?.find((d) => d.id === "REF_AREA" || d.id === "LOCATION" || d.id === "COU");
    const timeDim = (dimensions.observation ?? dimensions.series)?.find(
      (d) => d.id === "TIME_PERIOD" || d.id === "obsTime"
    );
    if (!locationDim || !timeDim) return null;

    const byCode = {};
    const observations = dataset.observations ?? {};

    for (const [key, obs] of Object.entries(observations)) {
      const parts = key.split(":").map(Number);
      const locIdx = parts[locationDim.keyPosition ?? 0];
      const timeIdx = parts[timeDim.keyPosition ?? parts.length - 1];
      const locId = locationDim.values[locIdx]?.id;
      const timeId = timeDim.values[timeIdx]?.id;
      const value = obs[0];
      if (!locId || !timeId || value === null || isNaN(value)) continue;
      if (!byCode[locId]) byCode[locId] = [];
      byCode[locId].push({ year: timeId, value });
    }

    const results = [];
    for (const [code, vals] of Object.entries(byCode)) {
      const meta = COUNTRY_META[code];
      if (!meta) continue;
      const values = vals.sort((a, b) => a.year.localeCompare(b.year));
      const last = values[values.length - 1];
      const prev = values.length >= 2 ? values[values.length - 2] : null;
      const yoy = prev ? ((last.value - prev.value) / prev.value) * 100 : null;
      results.push({ code, name: meta.name, flag: meta.flag, values, latest: last.value, latestYear: last.year, yoy });
    }
    return results.length ? results : null;
  } catch {
    return null;
  }
}

async function tryFetch(url) {
  console.log(`\nTrying: ${url.slice(0, 80)}...`);
  const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(30000) });
  console.log(`  → HTTP ${res.status}`);
  if (!res.ok) return null;
  const json = await res.json();

  // Try new format first, then legacy
  const parsed = parseNewSdmx(json) ?? parseLegacySdmx(json);
  if (parsed) console.log(`  → Parsed ${parsed.length} countries`);
  return parsed;
}

async function main() {
  console.log("Fetching OECD housing starts data...");

  for (const url of ENDPOINTS) {
    try {
      const results = await tryFetch(url);
      if (results && results.length > 0) {
        const sorted = results.sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
        const outDir = path.join(ROOT, "data");
        fs.mkdirSync(outDir, { recursive: true });
        const outPath = path.join(outDir, "housing-starts.json");
        fs.writeFileSync(outPath, JSON.stringify(sorted, null, 2));
        console.log(`\n✓ Saved ${sorted.length} countries to data/housing-starts.json`);
        console.log(`  Latest year: ${sorted[0]?.latestYear}`);
        sorted.slice(0, 5).forEach((c) => {
          console.log(`  ${c.flag} ${c.name}: ${c.latest?.toLocaleString()} (${c.latestYear})`);
        });
        process.exit(0);
      }
    } catch (err) {
      console.log(`  → Error: ${err.message}`);
    }
  }

  // All endpoints failed — keep existing file, don't fail the Action
  console.log("\n⚠️  All OECD endpoints failed. Existing data/housing-starts.json preserved.");
  console.log("   Site will continue serving cached data.");
  process.exit(0);  // exit 0 so the Action shows green
}

main();
