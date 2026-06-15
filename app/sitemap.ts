import type { MetadataRoute } from "next";
import { FAQS } from "@/lib/faqs";
import { GUIDES } from "@/lib/guides";
import { HOWTOS } from "@/lib/howtos";
import { COUNTRY_META } from "@/lib/oecd";

const BASE = "https://easybuildcalc.com";

function codeToSlug(code: string): string {
  return COUNTRY_META[code].name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

const calculators = [
  { slug: "concrete-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "board-foot-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "asphalt-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "paint-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "drywall-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "roof-pitch-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "shingles-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "sand-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "mulch-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "gravel-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "rebar-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "brick-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "stud-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "flooring-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "deck-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "fence-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "insulation-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "lumber-calculator", priority: 0.7, changeFreq: "monthly" as const },
  { slug: "concrete-mix-calculator", priority: 0.6, changeFreq: "monthly" as const },
  { slug: "tile-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "paver-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "stair-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "sod-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "cubic-yard-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "topsoil-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "retaining-wall-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "carpet-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "block-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "excavation-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "metal-roofing-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "wallpaper-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "concrete-curb-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "window-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "fence-post-concrete-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "window-rough-opening-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "basement-waterproofing-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "hvac-duct-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "septic-tank-calculator", priority: 0.8, changeFreq: "monthly" as const },
  { slug: "concrete-patio-cost-calculator", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "deck-cost-calculator", priority: 0.9, changeFreq: "monthly" as const },
];

const projectBundles = [
  { slug: "build-a-deck", priority: 0.9, changeFreq: "monthly" as const },
  { slug: "install-a-fence", priority: 0.9, changeFreq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/material-prices`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/housing-starts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lumber-market`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/howto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/reports`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    {
      url: `${BASE}/reports/state-of-us-construction-materials-2026`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const countryPages = Object.keys(COUNTRY_META).map((code) => ({
    url: `${BASE}/construction-market/${codeToSlug(code)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const guidePages = GUIDES.map((guide) => ({
    url: `${BASE}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const howToPages = HOWTOS.map((guide) => ({
    url: `${BASE}/howto/${guide.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const faqPages = FAQS.map((faq) => ({
    url: `${BASE}/faq/${faq.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.9,
  }));

  return [
    ...staticPages,
    ...countryPages,
    ...guidePages,
    ...howToPages,
    ...faqPages,
    ...calculators.map(({ slug, priority, changeFreq }) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    })),
    ...projectBundles.map(({ slug, priority, changeFreq }) => ({
      url: `${BASE}/projects/${slug}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    })),
  ];
}
