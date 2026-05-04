import type { Metadata } from "next";
import { GuidesHub } from "./GuidesHub";

export const metadata: Metadata = {
  title: "Construction Guides — Materials, Costs & How-To — EasyBuildCalc",
  description:
    "In-depth construction guides: material comparisons, cost breakdowns, and how-to framing guides. OSB vs plywood, metal vs asphalt, concrete patio cost, how to frame a wall, and more.",
  alternates: { canonical: "https://easybuildcalc.com/guides" },
  openGraph: {
    title: "Construction Guides — Materials, Costs & How-To",
    description: "Material comparisons, cost breakdowns, and how-to guides for contractors and DIYers.",
    url: "https://easybuildcalc.com/guides",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://easybuildcalc.com/guides" },
  ],
};

export default function GuidesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Guides</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Construction Guides</h1>
      <p className="text-gray-600 mb-6">
        Material comparisons, cost breakdowns, and how-to guides — everything you need to plan and price your project.
      </p>
      <GuidesHub />
    </div>
  );
}
