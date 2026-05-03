import type { MetadataRoute } from "next";

const BASE = "https://easybuildcalc.com";

const calculators = [
  { slug: "board-foot-calculator",  priority: 0.9, changeFreq: "monthly" as const },
  { slug: "asphalt-calculator",     priority: 0.9, changeFreq: "monthly" as const },
  { slug: "roof-pitch-calculator",  priority: 0.8, changeFreq: "monthly" as const },
  { slug: "sand-calculator",        priority: 0.8, changeFreq: "monthly" as const },
  { slug: "rebar-calculator",       priority: 0.7, changeFreq: "monthly" as const },
  { slug: "brick-calculator",       priority: 0.7, changeFreq: "monthly" as const },
  { slug: "stud-calculator",        priority: 0.7, changeFreq: "monthly" as const },
  { slug: "flooring-calculator",    priority: 0.7, changeFreq: "monthly" as const },
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
