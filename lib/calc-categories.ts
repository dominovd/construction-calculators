/**
 * Канонический список всех калькуляторов сайта с категориями и тегами.
 *
 * Используется:
 * - <RelatedCalculators /> — для подбора 4–6 родственных калькуляторов.
 * - Cost-калькуляторами и project-bundles — для перекрёстного линкования.
 *
 * Single source of truth. Когда добавляешь новый калькулятор —
 * добавь его сюда, и он автоматически появится в "связанных" блоках.
 */

export type CalcCategory =
  | "concrete-masonry"
  | "lumber-framing"
  | "roofing"
  | "walls-insulation"
  | "flooring-tile"
  | "outdoor-landscape"
  | "site-utilities";

export type CalcEntry = {
  /** URL slug под /app/{slug}/page.tsx */
  slug: string;
  /** Короткий label для UI ссылок */
  label: string;
  /** Группа для подбора связанных */
  category: CalcCategory;
  /** Доп.теги — позволяют ловить кросс-категориальные связи (например, deck → lumber и concrete) */
  tags?: string[];
};

export const CATEGORY_LABEL: Record<CalcCategory, string> = {
  "concrete-masonry": "Concrete & Masonry",
  "lumber-framing": "Lumber & Framing",
  "roofing": "Roofing",
  "walls-insulation": "Walls & Insulation",
  "flooring-tile": "Flooring & Tile",
  "outdoor-landscape": "Outdoor & Landscaping",
  "site-utilities": "Site & Utilities",
};

export const CALCULATORS: CalcEntry[] = [
  // ── Concrete & masonry ─────────────────────────────────────────────────
  { slug: "concrete-calculator",            label: "Concrete",            category: "concrete-masonry", tags: ["foundation", "slab"] },
  { slug: "concrete-mix-calculator",        label: "Concrete Mix",        category: "concrete-masonry" },
  { slug: "concrete-curb-calculator",       label: "Concrete Curb",       category: "concrete-masonry" },
  { slug: "concrete-patio-cost-calculator", label: "Concrete Patio Cost",  category: "concrete-masonry", tags: ["patio", "slab", "cost"] },
  { slug: "block-calculator",               label: "Concrete Block",      category: "concrete-masonry", tags: ["wall"] },
  { slug: "brick-calculator",               label: "Brick",               category: "concrete-masonry", tags: ["wall"] },
  { slug: "rebar-calculator",               label: "Rebar",               category: "concrete-masonry", tags: ["foundation"] },
  { slug: "fence-post-concrete-calculator", label: "Fence Post Concrete", category: "concrete-masonry", tags: ["fence"] },

  // ── Lumber & framing ───────────────────────────────────────────────────
  { slug: "board-foot-calculator",          label: "Board Foot",          category: "lumber-framing" },
  { slug: "lumber-calculator",              label: "Lumber",              category: "lumber-framing" },
  { slug: "stud-calculator",                label: "Wall Studs",          category: "lumber-framing", tags: ["wall", "framing"] },
  { slug: "stair-calculator",               label: "Stair Stringer",      category: "lumber-framing" },
  { slug: "deck-calculator",                label: "Deck",                category: "lumber-framing", tags: ["outdoor", "fence"] },
  { slug: "deck-cost-calculator",           label: "Deck Cost",           category: "lumber-framing", tags: ["outdoor", "deck", "cost"] },
  { slug: "fence-calculator",               label: "Fence",               category: "lumber-framing", tags: ["outdoor", "fence"] },

  // ── Roofing ────────────────────────────────────────────────────────────
  { slug: "roof-pitch-calculator",          label: "Roof Pitch",          category: "roofing" },
  { slug: "shingles-calculator",            label: "Asphalt Shingles",    category: "roofing" },
  { slug: "metal-roofing-calculator",       label: "Metal Roofing",       category: "roofing" },

  // ── Walls & insulation ─────────────────────────────────────────────────
  { slug: "drywall-calculator",             label: "Drywall",             category: "walls-insulation", tags: ["wall"] },
  { slug: "paint-calculator",               label: "Paint",               category: "walls-insulation", tags: ["wall", "finishing"] },
  { slug: "insulation-calculator",          label: "Insulation",          category: "walls-insulation", tags: ["wall", "attic"] },
  { slug: "wallpaper-calculator",           label: "Wallpaper",           category: "walls-insulation", tags: ["wall", "finishing"] },
  { slug: "window-calculator",              label: "Window",              category: "walls-insulation" },
  { slug: "window-rough-opening-calculator",label: "Window Rough Opening",category: "walls-insulation" },
  { slug: "basement-waterproofing-calculator", label: "Basement Waterproofing", category: "walls-insulation", tags: ["basement"] },

  // ── Flooring & tile ────────────────────────────────────────────────────
  { slug: "flooring-calculator",            label: "Flooring",            category: "flooring-tile" },
  { slug: "tile-calculator",                label: "Tile",                category: "flooring-tile" },
  { slug: "carpet-calculator",              label: "Carpet",              category: "flooring-tile" },

  // ── Outdoor & landscaping ──────────────────────────────────────────────
  { slug: "mulch-calculator",               label: "Mulch",               category: "outdoor-landscape", tags: ["landscape"] },
  { slug: "gravel-calculator",              label: "Gravel",              category: "outdoor-landscape", tags: ["landscape"] },
  { slug: "sand-calculator",                label: "Sand",                category: "outdoor-landscape", tags: ["landscape"] },
  { slug: "topsoil-calculator",             label: "Topsoil",             category: "outdoor-landscape", tags: ["landscape"] },
  { slug: "sod-calculator",                 label: "Sod",                 category: "outdoor-landscape", tags: ["lawn"] },
  { slug: "paver-calculator",               label: "Paver",               category: "outdoor-landscape", tags: ["patio"] },
  { slug: "retaining-wall-calculator",      label: "Retaining Wall",      category: "outdoor-landscape", tags: ["landscape"] },
  { slug: "cubic-yard-calculator",          label: "Cubic Yard",          category: "outdoor-landscape", tags: ["bulk"] },

  // ── Site & utilities ───────────────────────────────────────────────────
  { slug: "excavation-calculator",          label: "Excavation",          category: "site-utilities", tags: ["foundation"] },
  { slug: "asphalt-calculator",             label: "Asphalt",             category: "site-utilities", tags: ["driveway"] },
  { slug: "hvac-duct-calculator",           label: "HVAC Duct",           category: "site-utilities" },
  { slug: "septic-tank-calculator",         label: "Septic Tank",         category: "site-utilities" },
];

export type CalcSlug = (typeof CALCULATORS)[number]["slug"];

const BY_SLUG: Record<string, CalcEntry> = Object.fromEntries(
  CALCULATORS.map((c) => [c.slug, c]),
);

export function getCalcEntry(slug: string): CalcEntry | undefined {
  return BY_SLUG[slug];
}

/**
 * Подобрать N родственных калькуляторов для текущего slug.
 *
 * Алгоритм:
 *   1. Те же category + общий тег → высший приоритет.
 *   2. Те же category → следующий приоритет.
 *   3. Общий тег без совпадения category → ниже.
 *   4. Если меньше N — добиваем рандомом из той же категории.
 *
 * @param currentSlug — slug текущей страницы (исключается из выдачи)
 * @param limit — сколько вернуть (default 6)
 */
export function pickRelated(currentSlug: string, limit = 6): CalcEntry[] {
  const current = BY_SLUG[currentSlug];
  if (!current) return [];

  const currentTags = new Set(current.tags ?? []);
  const others = CALCULATORS.filter((c) => c.slug !== currentSlug);

  // Score every other calc and sort
  const scored = others.map((c) => {
    let score = 0;
    if (c.category === current.category) score += 10;
    const sharedTags = (c.tags ?? []).filter((t) => currentTags.has(t)).length;
    score += sharedTags * 5;
    return { entry: c, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.entry);
}
