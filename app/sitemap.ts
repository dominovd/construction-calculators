import type { MetadataRoute } from "next";

const BASE = "https://easybuildcalc.com";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...calculators.map(({ slug, priority, changeFreq }) => ({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: changeFreq,
      priority,
    })),
  ];
}
