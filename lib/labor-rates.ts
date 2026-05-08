/**
 * Labor rates для cost-калькуляторов.
 *
 * Аналог lib/retail-prices.ts, но для **трудозатрат**: «во что обходится
 * установка/работа», а не «сколько стоит материал».
 *
 * Источник — публичные cost guides (HomeAdvisor, HomeWyse, Angi, HomeGuide).
 * Ставки **национальные средние**; региональный разброс отдельным фактором
 * учитывается на cost-калькуляторе через `regionalMultiplier`.
 *
 * Каждая запись:
 *   - low/avg/high — диапазон
 *   - unit — за что (sqft, lf, item, square, etc.)
 *   - source — кто опубликовал референс
 *   - sourceUrl — ссылка для верификации
 *   - pricedAt — дата снятия
 *
 * STATUS (May 2026): первичный набор для топ-15 cost-калькуляторов.
 * Обновляется ежеквартально вручную (пока).
 */

export type LaborRateEntry = {
  label: string;
  low: number;
  avg: number;
  high: number;
  unit: string;
  source: string;
  sourceUrl?: string;
  pricedAt: string;
  notes?: string;
};

export const LABOR_RATES = {
  // ── Concrete & masonry ─────────────────────────────────────────────────
  "concrete-pour-sqft": {
    label: "Concrete pour & finish (slab)",
    low: 4,
    avg: 6,
    high: 9,
    unit: "ft²",
    source: "HomeWyse / HomeGuide",
    sourceUrl: "https://homeguide.com/costs/concrete-slab-cost",
    pricedAt: "2026-05-08",
    notes: "Includes form, place, finish. Not material — just labor.",
  },
  "concrete-patio-install-sqft": {
    label: "Concrete patio install (labor)",
    low: 4,
    avg: 7,
    high: 12,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/concrete-patio-cost",
    pricedAt: "2026-05-08",
  },
  "paver-install-sqft": {
    label: "Paver patio install (labor)",
    low: 8,
    avg: 12,
    high: 20,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/paver-patio-cost",
    pricedAt: "2026-05-08",
  },
  "block-laying-sqft": {
    label: "Concrete block wall (labor)",
    low: 5,
    avg: 9,
    high: 15,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/cinder-block-wall-cost",
    pricedAt: "2026-05-08",
  },

  // ── Lumber & framing ───────────────────────────────────────────────────
  "framing-sqft": {
    label: "Wall framing (labor)",
    low: 4,
    avg: 7,
    high: 12,
    unit: "ft²",
    source: "Angi / HomeAdvisor",
    sourceUrl: "https://www.homeadvisor.com/cost/additions-and-remodels/wall-framing/",
    pricedAt: "2026-05-08",
  },
  "deck-build-sqft": {
    label: "Deck build (labor)",
    low: 8,
    avg: 15,
    high: 25,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/deck-cost",
    pricedAt: "2026-05-08",
    notes: "Excludes materials. Premium woods (cedar, ipe) push high end up.",
  },

  // ── Roofing ────────────────────────────────────────────────────────────
  "roof-tearoff-square": {
    label: "Roof tear-off (labor)",
    low: 100,
    avg: 150,
    high: 200,
    unit: "square",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/roof-replacement-cost",
    pricedAt: "2026-05-08",
    notes: "Per 100 ft² of roof area. 1–2 layers; 3+ adds 30%.",
  },
  "shingle-install-square": {
    label: "Asphalt shingle install (labor)",
    low: 150,
    avg: 250,
    high: 400,
    unit: "square",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/roof-installation-cost",
    pricedAt: "2026-05-08",
  },
  "metal-roofing-install-square": {
    label: "Metal roofing install (labor)",
    low: 300,
    avg: 500,
    high: 800,
    unit: "square",
    source: "HomeGuide",
    pricedAt: "2026-05-08",
  },

  // ── Walls & insulation ─────────────────────────────────────────────────
  "drywall-install-sqft": {
    label: "Drywall hang & finish (labor)",
    low: 1.5,
    avg: 2.5,
    high: 4,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/drywall-installation-cost",
    pricedAt: "2026-05-08",
  },
  "interior-paint-sqft": {
    label: "Interior painting (labor)",
    low: 1.5,
    avg: 3,
    high: 6,
    unit: "ft² wall",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/interior-painting-cost",
    pricedAt: "2026-05-08",
    notes: "Per ft² of wall surface. 2 coats included.",
  },
  "exterior-paint-sqft": {
    label: "Exterior painting (labor)",
    low: 1,
    avg: 2.5,
    high: 5,
    unit: "ft² wall",
    source: "HomeGuide",
    pricedAt: "2026-05-08",
  },
  "blown-insulation-sqft": {
    label: "Blown-in insulation install (labor)",
    low: 0.5,
    avg: 1,
    high: 2,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/blown-in-insulation-cost",
    pricedAt: "2026-05-08",
  },

  // ── Flooring & tile ────────────────────────────────────────────────────
  "hardwood-install-sqft": {
    label: "Hardwood floor install (labor)",
    low: 3,
    avg: 6,
    high: 10,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/hardwood-floor-installation-cost",
    pricedAt: "2026-05-08",
  },
  "laminate-install-sqft": {
    label: "Laminate / vinyl plank install",
    low: 2,
    avg: 3,
    high: 5,
    unit: "ft²",
    source: "HomeGuide",
    pricedAt: "2026-05-08",
  },
  "carpet-install-sqft": {
    label: "Carpet install (labor)",
    low: 1,
    avg: 2,
    high: 4,
    unit: "ft²",
    source: "HomeGuide",
    pricedAt: "2026-05-08",
  },
  "tile-install-sqft": {
    label: "Ceramic tile install (labor)",
    low: 5,
    avg: 9,
    high: 16,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/tile-installation-cost",
    pricedAt: "2026-05-08",
    notes: "Floor tile. Wall tile and complex layouts add 25–50%.",
  },

  // ── Outdoor & fence ────────────────────────────────────────────────────
  "fence-install-lf": {
    label: "Wood fence install (labor)",
    low: 15,
    avg: 25,
    high: 45,
    unit: "lin ft",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/fence-installation-cost",
    pricedAt: "2026-05-08",
    notes: "6 ft privacy fence. Vinyl/aluminum can run $30–$60/lf.",
  },
  "asphalt-driveway-sqft": {
    label: "Asphalt driveway install (labor)",
    low: 3,
    avg: 5,
    high: 8,
    unit: "ft²",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/asphalt-driveway-cost",
    pricedAt: "2026-05-08",
  },

  // ── Site / excavation ──────────────────────────────────────────────────
  "excavation-cuyd": {
    label: "Excavation (labor + machine)",
    low: 50,
    avg: 80,
    high: 200,
    unit: "yd³",
    source: "HomeGuide",
    sourceUrl: "https://homeguide.com/costs/excavation-cost",
    pricedAt: "2026-05-08",
    notes: "Wide range — depends on soil, accessibility, haul-off distance.",
  },
} as const satisfies Record<string, LaborRateEntry>;

export type LaborTask = keyof typeof LABOR_RATES;

export function getLabor(task: LaborTask): LaborRateEntry {
  return LABOR_RATES[task];
}

/**
 * Региональный множитель (применяется к labor, не к материалам).
 * Базис = 1.0 для US national average.
 *
 * NOTE: пока без ZIP-lookup — пользователь сам выбирает свой регион.
 * На будущее можно подтягивать из IP geo.
 */
export const REGIONAL_MULTIPLIER = {
  "low-cost":     { label: "Low-cost area (rural South, Midwest)", factor: 0.8 },
  "national-avg": { label: "National average",                     factor: 1.0 },
  "high-cost":    { label: "High-cost area (CA, NY, MA, urban)",   factor: 1.4 },
} as const;

export type Region = keyof typeof REGIONAL_MULTIPLIER;

/** Labor cost для заданного task с учётом региона (используем avg). */
export function laborAvg(task: LaborTask, region: Region = "national-avg"): number {
  return LABOR_RATES[task].avg * REGIONAL_MULTIPLIER[region].factor;
}

/** Возвращает {low, high} с учётом региона. */
export function laborRange(
  task: LaborTask,
  region: Region = "national-avg",
): { low: number; high: number } {
  const f = REGIONAL_MULTIPLIER[region].factor;
  return { low: LABOR_RATES[task].low * f, high: LABOR_RATES[task].high * f };
}
