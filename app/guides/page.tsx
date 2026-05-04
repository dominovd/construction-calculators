import type { Metadata } from "next";
import { GuidesHub } from "./GuidesHub";

export const metadata: Metadata = {
  title: "Construction Material Comparison Guides — EasyBuildCalc",
  description:
    "In-depth comparisons of construction materials: OSB vs plywood, metal roofing vs asphalt, gravel vs asphalt driveway, spray foam vs fiberglass, and more. Free guides for contractors and DIYers.",
  alternates: { canonical: "https://easybuildcalc.com/guides" },
  openGraph: {
    title: "Construction Material Comparison Guides",
    description: "Compare materials side-by-side: cost, durability, and when to use each.",
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
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Material Comparison Guides</h1>
      <p className="text-gray-600 mb-6">
        Side-by-side comparisons of common construction materials — cost, durability, and when to use each.
      </p>
      <GuidesHub />
    </div>
  );
}
