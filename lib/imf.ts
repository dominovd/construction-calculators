// IMF Primary Commodity Prices — no API key needed
// https://www.imf.org/external/datamapper/api/v1/

export type IMFObservation = { year: string; value: number };

export type LumberComparison = {
  imf: IMFObservation[];        // Global softwood price, USD/m³
  imfIndexed: IMFObservation[]; // Normalized to 2019 = 100
};

async function fetchIMF(indicator: string): Promise<IMFObservation[]> {
  try {
    const url = `https://www.imf.org/external/datamapper/api/v1/${indicator}`;
    const res = await fetch(url, { next: { revalidate: 86400 * 7 } });
    if (!res.ok) return [];
    const json = await res.json();

    // IMF returns values nested as { values: { INDICATOR: { WLD: { "2000": 123, ... } } } }
    const data =
      json.values?.[indicator]?.WLD ??
      json.values?.[indicator]?.["001"] ?? // IMF sometimes uses "001" for world
      null;

    if (!data) return [];

    return Object.entries(data as Record<string, number>)
      .map(([year, value]) => ({ year, value }))
      .filter((o) => o.value !== null && !isNaN(Number(o.value)))
      .map((o) => ({ year: o.year, value: Number(o.value) }))
      .sort((a, b) => a.year.localeCompare(b.year));
  } catch {
    return [];
  }
}

function indexTo100(data: IMFObservation[], baseYear = "2019"): IMFObservation[] {
  const base = data.find((d) => d.year === baseYear);
  if (!base) return data;
  return data.map((d) => ({ year: d.year, value: (d.value / base.value) * 100 }));
}

export async function fetchLumberComparison(): Promise<LumberComparison> {
  // PSOFTLOG = Softwood Logs, average export price, USD/m³
  const imf = await fetchIMF("PSOFTLOG");
  const imfIndexed = indexTo100(imf, "2019");
  return { imf, imfIndexed };
}
