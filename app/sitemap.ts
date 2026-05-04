import type { MetadataRoute } from "next";
import { COUNTRY_META } from "@/lib/oecd";

const BASE = "https://easybuildcalc.com";

function codeToSlug(code: string): string {
  return COUNTRY_META[code].name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const calculators = [
  { slug: "concrete-calculator",     priority: 0.9, changeFreq: "monthly" as const },
  { slug: "board-foot-calculator",   priority: 0.9, changeFreq: "monthly" as const },
  { slug: "asphalt-calculator",      priority: 0.9, changeFreq: "monthly" as const },
  { slug: "paint-calculator",        priority: 0.9, changeFreq: "monthly" as const },
  { slug: "drywall-calculator",      priority: 0.8, changeFreq: "monthly" as const },
  { slug: "roof-pitch-calculator",   priority: 0.8, changeFreq: "monthly" as const },
  { slug: "shingles-calculator",     priority: 0.8, changeFreq: "monthly" as const },
  { slug: "sand-calculator",         priority: 0.8, changeFreq: "monthly" as const },
  { slug: "mulch-calculator",        priority: 0.8, changeFreq: "monthly" as const },
  { slug: "gravel-calculator",       priority: 0.8, changeFreq: "monthly" as const },
  { slug: "rebar-calculator",        priority: 0.7, changeFreq: "monthly" as const },
  { slug: "brick-calculator",        priority: 0.7, changeFreq: "monthly" as const },
  { slug: "stud-calculator",         priority: 0.7, changeFreq: "monthly" as const },
  { slug: "flooring-calculator",     priority: 0.7, changeFreq: "monthly" as const },
  { slug: "deck-calculator",         priority: 0.7, changeFreq: "monthly" as const },
  { slug: "fence-calculator",        priority: 0.7, changeFreq: "monthly" as const },
  { slug: "insulation-calculator",   priority: 0.7, changeFreq: "monthly" as const },
  { slug: "lumber-calculator",       priority: 0.7, changeFreq: "monthly" as const },
  { slug: "concrete-mix-calculator", priority: 0.6, changeFreq: "monthly" as const },
  { slug: "tile-calculator",         priority: 0.9, changeFreq: "monthly" as const },
  { slug: "paver-calculator",        priority: 0.9, changeFreq: "monthly" as const },
  { slug: "stair-calculator",        priority: 0.9, changeFreq: "monthly" as const },
  { slug: "sod-calculator",          priority: 0.8, changeFreq: "monthly" as const },
  { slug: "cubic-yard-calculator",   priority: 0.9, changeFreq: "monthly" as const },
  { slug: "topsoil-calculator",      priority: 0.9, changeFreq: "monthly" as const },
  { slug: "retaining-wall-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "carpet-calculator",       priority: 0.8, changeFreq: "monthly" as const },
  { slug: "block-calculator",        priority: 0.8, changeFreq: "monthly" as const },
  { slug: "excavation-calculator",    priority: 0.8, changeFreq: "monthly" as const },
  { slug: "metal-roofing-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "wallpaper-calculator",     priority: 0.8, changeFreq: "monthly" as const },
  { slug: "concrete-curb-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "window-calculator",        priority: 0.9, changeFreq: "monthly" as const },
];

const countryPages = Object.keys(COUNTRY_META).map((code) => ({
  url: `${BASE}/construction-market/${codeToSlug(code)}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE,                             lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/material-prices`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/housing-starts`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lumber-market`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...countryPages,
    { url: `${BASE}/about`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE}/contact`,                lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${BASE}/guides`,                 lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guides/osb-vs-plywood`,                         lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/guides/metal-roofing-vs-asphalt-shingles`,      lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/guides/concrete-block-vs-poured-foundation`,    lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/guides/gravel-vs-asphalt-driveway`,             lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/guides/vinyl-vs-hardwood-flooring`,             lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/guides/spray-foam-vs-fiberglass-insulation`,    lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/faq`,                                           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq/how-many-gallons-of-paint-for-12x12-room`,              lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-much-rebar-for-10x10-slab`,                         lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-bags-of-concrete-for-10x10-slab`,              lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-sheets-of-drywall-for-12x12-room`,             lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-studs-for-16-foot-wall`,                       lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-much-mulch-for-100-square-feet`,                    lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-pavers-for-10x10-patio`,                       lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-shingles-for-1500-sq-ft-roof`,                 lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-concrete-blocks-for-40-foot-wall`,             lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-rolls-of-sod-for-1000-sq-ft`,                  lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-much-gravel-for-200-foot-driveway`,                 lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/faq/how-many-tiles-for-12x12-room`,                         lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/privacy`,                lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    ...calculators.map(({ slug, priority, changeFreq }) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    })),
  ];
}
