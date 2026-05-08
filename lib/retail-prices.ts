/**
 * Retail-anchor prices for calculator defaults.
 *
 * Replaces hardcoded numbers in Calculator.tsx files. Calculators import the
 * price they need via `getRetailPrice(sku)` and use it as their `useState`
 * default. Users can still override via the input field — the anchor is just
 * a fresh, dated default.
 *
 * Source: prices snapped by hand from Home Depot Atlanta GA (or HomeWyse for
 * services like ready-mix concrete). Refreshed once per quarter. Each entry
 * carries `pricedAt` so the UI can show a freshness badge.
 *
 * When updating: bump `price`, `pricedAt`, and ideally `sourceUrl`.
 * When a price moves more than ±20%, double-check the source.
 *
 * STATUS (May 8, 2026): all 21 SKUs refreshed.
 *   - HD-confirmed via screenshot: cmu-block-8x8x16
 *   - HD product page (live URL, but item out-of-stock at time of snap):
 *     drywall-half-4x8 (computed from 4×9 sister SKU), mortar-bag-70lb,
 *     paver-4x8-each, rebar-no4-lf, lumber-bf-spf, deck-board-pt-1x6-lf,
 *     fence-panel-6ft, fence-post-4x4-8ft. Prices = industry typical;
 *     re-snap with screenshot when in stock.
 *   - WebSearch snippets: concrete-bag-80lb, paint-gallon-interior,
 *     shingles-square, insulation-blown-bag, all 5 flooring SKUs, tile-12x12-box.
 *   - Industry averages (bulk / service, no single retail SKU):
 *     concrete-readymix, gravel-3-4-ton, sand-mason-ton, mulch-bulk-yd3,
 *     asphalt-ton.
 */

export type Retailer = "Home Depot" | "Lowe's" | "Menards" | "Amazon" | "HomeWyse" | "Industry avg";

export type RetailPriceEntry = {
  /** Display label for UI / disclaimer */
  label: string;
  /** Current retail price */
  price: number;
  /** Unit of sale */
  unit: string;
  /** Where the number came from */
  source: Retailer;
  /** Optional product page URL — handy when you go re-snap the price */
  sourceUrl?: string;
  /** Date the price was last snapped (YYYY-MM-DD) */
  pricedAt: string;
  /** Optional notes (e.g., region, grade, brand) */
  notes?: string;
};

/**
 * Top-20 SKUs covering the calculators that currently hardcode prices.
 *
 * IMPORTANT: numbers below MIRROR the existing 2024 hardcodes so behavior
 * doesn't change on import. Replace them with fresh Home Depot prices in
 * a follow-up commit — see memory/sku-inventory.md for the full list.
 */
export const RETAIL_PRICES = {
  // ── Drywall ────────────────────────────────────────────────────────────
  "drywall-half-4x8": {
    label: 'USG Sheetrock UltraLight ½" drywall (4×8)',
    price: 15.09,
    unit: "sheet",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/USG-Sheetrock-Brand-1-2-in-x-4-ft-x-8-ft-UltraLight-Drywall-14113411708/202530243",
    pricedAt: "2026-05-08",
    notes: "Derived: 4×8 was out of stock; computed from 4×9 sister-SKU $16.98 ÷ 36 ft² × 32 ft².",
  },

  // ── Concrete & masonry ─────────────────────────────────────────────────
  "concrete-readymix": {
    label: "Ready-mix concrete (delivered)",
    price: 145,
    unit: "yd³",
    source: "Industry avg",
    sourceUrl: "https://www.concretenetwork.com/concrete-prices.html",
    pricedAt: "2026-05-08",
    notes: "Industry typical $125–$165 nationally; up 9% YoY in Q1 2025. Sub-truckload (<10 yd³) adds ~$43/yd³.",
  },
  "concrete-bag-80lb": {
    label: "Quikrete 80 lb concrete mix",
    price: 6.47,
    unit: "bag",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Quikrete-80-lb-Concrete-Mix-110180/100318511",
    pricedAt: "2026-05-08",
    notes: "Quikrete model 110180.",
  },
  "cmu-block-8x8x16": {
    label: '8"×8"×16" Concrete Block (Best Seller)',
    price: 2.55,
    unit: "each",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/8-in-x-8-in-x-16-in-Concrete-Block-30161345/100350252",
    pricedAt: "2026-05-08",
    notes: "ZIP 80223 (Denver CO).",
  },
  "mortar-bag-70lb": {
    label: "SAKRETE 80 lb Type S Mortar Mix",
    price: 10.97,
    unit: "bag",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/SAKRETE-80-lb-Gray-Type-S-Mortar-Mix-65302880/100350211",
    pricedAt: "2026-05-08",
    notes: "HD shows out-of-stock in Denver/Atlanta on May 8 2026. Industry typical $9.97–$12. Re-snap when in stock.",
  },

  // ── Roofing ────────────────────────────────────────────────────────────
  "shingles-square": {
    label: "GAF Timberline architectural shingles (per square)",
    price: 126,
    unit: "square",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/GAF-Timberline-Natural-Shadow-Charcoal-Algae-Resistant-Architectural-Shingles-33-33-sq-ft-per-Bundle-0601180/100658149",
    pricedAt: "2026-05-08",
    notes: "GAF Timberline at $41.97/bundle × 3 bundles per square ≈ $126. 3-tab is cheaper (~$90/sq).",
  },

  // ── Paint ──────────────────────────────────────────────────────────────
  "paint-gallon-interior": {
    label: "Behr Premium Plus interior, 1 gal",
    price: 27.98,
    unit: "gallon",
    source: "Home Depot",
    sourceUrl: "https://www.behr.com/consumer/products/interior-paint/premium-plus-interior",
    pricedAt: "2026-05-08",
    notes: "Behr Premium Plus interior, mid-grade flat. Range $24.98–$30.98 by sheen/color.",
  },

  // ── Flooring ───────────────────────────────────────────────────────────
  "flooring-hardwood-sqft": {
    label: "Solid oak hardwood (#1 Common)",
    price: 4.59,
    unit: "ft²",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/b/Flooring-Hardwood-Flooring/Oak/N-5yc1vZaq8xZ1z11yin",
    pricedAt: "2026-05-08",
    notes: "Mid-tier oak; budget #1 Common is ~$2.65, premium is $5–7.",
  },
  "flooring-laminate-sqft": {
    label: "Pergo Outlast+ laminate",
    price: 2.79,
    unit: "ft²",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Pergo-Outlast-Marigold-Oak-12-mm-T-x-7-4-in-W-Waterproof-Laminate-Wood-Flooring-19-63-sqft-case-LF000854/206828632",
    pricedAt: "2026-05-08",
    notes: "Pergo XP entry-level $1.89; Outlast+ $2.49–$2.99.",
  },
  "flooring-vinyl-plank-sqft": {
    label: "Lifeproof Sterling Oak 22 MIL LVP",
    price: 2.98,
    unit: "ft²",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Lifeproof-Sterling-Oak-22-MIL-x-8-7-in-W-x-48-in-L-Click-Lock-Waterproof-Luxury-Vinyl-Plank-Flooring-20-1-sqft-case-I966106LP/309083456",
    pricedAt: "2026-05-08",
    notes: "Lifeproof 6 MIL builder grade $1.69; 22 MIL is contractor-popular.",
  },
  "flooring-carpet-sqft": {
    label: "TrafficMaster stain-resistant texture",
    price: 2.49,
    unit: "ft²",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/b/Flooring-Carpet/Stain-Resistant/N-5yc1vZarl0Z1z1bvvy",
    pricedAt: "2026-05-08",
    notes: "Range $0.63 (budget) to $4.49 (berber). $2.19–$3.04 typical.",
  },
  "tile-12x12-box": {
    label: "Mid-tier ceramic tile, 12×12 (15 ft²/case)",
    price: 22,
    unit: "box",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/b/Flooring-Tile/Ceramic-Tile/N-5yc1vZb1g0Z1z18gid",
    pricedAt: "2026-05-08",
    notes: "Mid-tier blend: builder $8.84, designer $30–50. $22/case = ~$1.50/ft² — defensible default.",
  },
  "flooring-tile-sqft": {
    label: "Mid-tier floor tile (per ft²)",
    price: 1.5,
    unit: "ft²",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/b/Flooring-Tile/Ceramic-Tile/N-5yc1vZb1g0Z1z18gid",
    pricedAt: "2026-05-08",
    notes: "Per-sqft anchor for flooring calculator. Builder $0.59, designer $3+.",
  },
  "paver-4x8-each": {
    label: 'Pavestone 8"×4"×60mm Red Holland Paver',
    price: 0.85,
    unit: "each",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Pavestone-8-in-x-4-in-x-60-mm-Red-Concrete-Paver-21751/202026922",
    pricedAt: "2026-05-08",
    notes: "HD shows out-of-stock in Denver/Atlanta on May 8 2026. Industry typical $0.78–$1.10. Re-snap when in stock.",
  },

  // ── Site / landscaping ─────────────────────────────────────────────────
  "gravel-3-4-ton": {
    label: '¾" gravel / crushed stone (bulk)',
    price: 30,
    unit: "ton",
    source: "Industry avg",
    sourceUrl: "https://homeguide.com/costs/gravel-prices",
    pricedAt: "2026-05-08",
    notes: "Range $20–$50/ton material only; with delivery $50–$100 added.",
  },
  "sand-mason-ton": {
    label: "Mason sand (bulk)",
    price: 45,
    unit: "ton",
    source: "Industry avg",
    sourceUrl: "https://hellogravel.com/sand-cost-guide-current-prices-per-ton-and-buying-tips-for-2026/",
    pricedAt: "2026-05-08",
    notes: "Range $40–$55/ton material only.",
  },
  "mulch-bulk-yd3": {
    label: "Bulk hardwood mulch",
    price: 40,
    unit: "yd³",
    source: "Industry avg",
    sourceUrl: "https://homeguide.com/costs/mulch-prices",
    pricedAt: "2026-05-08",
    notes: "Range $30 (undyed pine) to $80+ (cypress). Bagged ~35% more than bulk.",
  },

  // ── Insulation ─────────────────────────────────────────────────────────
  "insulation-blown-bag": {
    label: "Owens Corning AttiCat blown-in (27.5 lb)",
    price: 40.34,
    unit: "bag",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Owens-Corning-R-19-R-60-AttiCat-PINK-Fiberglass-Blown-in-Insulation-27-5-lb-1-Bag-AC01/100541755",
    pricedAt: "2026-05-08",
    notes: "27.5 lb bag covers ~109 ft² at R-19. Free 24h blower rental w/ 10+ bags.",
  },

  // ── Steel ──────────────────────────────────────────────────────────────
  "rebar-no4-lf": {
    label: "Weyerhaeuser #4 Grade 60 rebar, ½″",
    price: 0.5,
    unit: "lin ft",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/Weyerhaeuser-1-2-in-x-20-ft-4-Grade-60-Rebar-00351/202094335",
    pricedAt: "2026-05-08",
    notes: "$10 per 20-ft stick ÷ 20 = $0.50/LF. HD shows out-of-stock May 8 2026; industry typical $0.45–$0.85.",
  },

  // ── Lumber ─────────────────────────────────────────────────────────────
  "lumber-bf-spf": {
    label: "Mixed lumber (per board-foot, mid-tier)",
    price: 1.5,
    unit: "board-foot",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/b/Lumber-Composites-Dimensional-Lumber/N-5yc1vZc5dx",
    pricedAt: "2026-05-08",
    notes: "Mid-tier blend: SPF 2×4 ≈ $0.80/BF, larger PT ≈ $2–3/BF, premium hardwood $5–10/BF. $1.50 is a defensible default for a generic 'lumber' calculator — users adjust via input.",
  },
  "deck-board-pt-1x6-lf": {
    label: "WeatherShield 5/4×6×8 PT decking",
    price: 1.25,
    unit: "lin ft",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/WeatherShield-5-4-in-x-6-in-x-8-ft-Standard-Ground-Contact-Pressure-Treated-Southern-Yellow-Pine-Decking-Board-253919/206968441",
    pricedAt: "2026-05-08",
    notes: "$9.97 / 8 ft ≈ $1.25/lf. Industry typical $1.20–$1.60.",
  },

  // ── Asphalt ────────────────────────────────────────────────────────────
  "asphalt-ton": {
    label: "Hot-mix asphalt (delivered)",
    price: 115,
    unit: "ton",
    source: "Industry avg",
    sourceUrl: "https://homeguide.com/costs/asphalt-prices",
    pricedAt: "2026-05-08",
    notes: "Range $85–$150 typical for hot mix; specialty mixes higher. Min orders ~2 tons.",
  },

  // ── Fencing (excl. concrete bag) ───────────────────────────────────────
  "fence-panel-6ft": {
    label: "ProWood 6'×8' PT pine dog-ear privacy panel",
    price: 39.97,
    unit: "panel",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/ProWood-6ft-x-8ft-Pine-Pressure-Treated-Privacy-Dog-Ear-Flat-Wood-Fence-Panel-158083/203733689",
    pricedAt: "2026-05-08",
    notes: "Typical $39–$49 for 6×8 dog-ear; board-on-board $69+.",
  },
  "fence-post-4x4-8ft": {
    label: '4"×4"×8\' #1 PT post',
    price: 14.97,
    unit: "each",
    source: "Home Depot",
    sourceUrl: "https://www.homedepot.com/p/4-in-x-4-in-x-8-ft-1-Pressure-Treated-Post-4210154/202812131",
    pricedAt: "2026-05-08",
    notes: "Typical $13–$19 for #1 PT post; ground-contact runs $19–$24.",
  },
} as const satisfies Record<string, RetailPriceEntry>;

export type Sku = keyof typeof RETAIL_PRICES;

/**
 * Get the retail price for a SKU. If the SKU is missing (typo, dropped entry,
 * etc.), falls back to the supplied default so the calculator never crashes.
 *
 * Calculators use this to seed `useState`:
 *
 *   const [pricePerSheet, setPricePerSheet] = useState(
 *     String(getRetailPrice("drywall-half-4x8", 14).price)
 *   );
 */
export function getRetailPrice(sku: Sku, fallback?: number): RetailPriceEntry {
  const entry = RETAIL_PRICES[sku];
  if (entry) return entry;
  // Defensive: should be unreachable thanks to the Sku type, but TS narrows
  // away the branch on call sites that bypass the type.
  return {
    label: String(sku),
    price: fallback ?? 0,
    unit: "",
    source: "Industry avg",
    pricedAt: "1970-01-01",
    notes: "MISSING SKU — fix lib/retail-prices.ts",
  };
}

/** Just the dollar number — handy for `useState(String(getRetailDefault(...)))` */
export function getRetailDefault(sku: Sku): number {
  return RETAIL_PRICES[sku].price;
}

/**
 * Most recent `pricedAt` across the table — useful for the "Prices updated …"
 * badge above result-box. We pick the **earliest** date so the badge is
 * conservative (worst freshness in the table sets the displayed date).
 */
export function getOldestPricedAt(): string {
  return Object.values(RETAIL_PRICES)
    .map((e) => e.pricedAt)
    .sort()[0];
}

/** Format like "April 2026" for UI */
export function formatPricedMonth(isoDate: string): string {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
