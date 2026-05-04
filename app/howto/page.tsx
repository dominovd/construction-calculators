import type { Metadata } from "next";
import { HowToHub } from "./HowToHub";

export const metadata: Metadata = {
  title: "Construction Planning Guides — Cost Breakdowns & How-To — EasyBuildCalc",
  description:
    "Practical project planning guides: concrete patio cost breakdown, how to frame a wall, lumber lists, and more. Free guides for contractors and DIYers.",
  alternates: { canonical: "https://easybuildcalc.com/howto" },
  openGraph: {
    title: "Construction Planning Guides — EasyBuildCalc",
    description: "Cost breakdowns, how-to guides, and material lists for common construction projects.",
    url: "https://easybuildcalc.com/howto",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",   item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "How-To", item: "https://easybuildcalc.com/howto" },
  ],
};

export default function HowToPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Planning Guides</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Project Planning Guides</h1>
      <p className="text-gray-600 mb-6">
        Cost breakdowns, how-to walkthroughs, and material lists — everything you need before you start building.
      </p>
      <HowToHub />
    </div>
  );
}
