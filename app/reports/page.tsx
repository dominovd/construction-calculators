import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction Industry Reports — EasyBuildCalc",
  description:
    "Original data-driven reports on US and global construction materials. Built on FRED, OECD, and BLS data with annual analysis.",
  alternates: { canonical: "https://easybuildcalc.com/reports" },
};

const REPORTS = [
  {
    slug: "state-of-us-construction-materials-2026",
    title: "State of US Construction Materials — 2026 Edition",
    blurb:
      "Lumber, steel, concrete and housing starts: where prices are vs. 5-year peaks, YoY trends, and what it means for builders this year.",
    publishedAt: "May 2026",
    emoji: "📊",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Reports", item: "https://easybuildcalc.com/reports" },
  ],
};

export default function ReportsIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Reports</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Construction Industry Reports</h1>
      <p className="text-gray-600 mb-6">
        Original data-driven reports built on public datasets from FRED, OECD, and BLS. Free to read,
        free to cite — please link back to the source page.
      </p>

      <ul className="space-y-3">
        {REPORTS.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/reports/${r.slug}`}
              className="block border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{r.emoji}</span>
                <div>
                  <p className="text-xs text-blue-600 font-medium mb-0.5">{r.publishedAt}</p>
                  <p className="font-semibold text-gray-900">{r.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{r.blurb}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
