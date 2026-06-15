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

      <section className="border border-blue-100 bg-blue-50 rounded-xl p-4 mb-6">
        <h2 className="text-base font-semibold text-blue-950 mb-2">What these reports cover</h2>
        <p className="text-sm text-blue-800 leading-relaxed">
          EasyBuildCalc reports focus on builder-facing signals: material price indexes,
          housing starts, peak-to-current changes, and the planning impact for contractors.
          The goal is to make public construction data usable for bids, budgets, and project
          timing without forcing readers to interpret raw economic series.
        </p>
      </section>

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

      <section className="mt-8 grid sm:grid-cols-3 gap-3 text-sm">
        <Link href="/material-prices" className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
          <h2 className="font-semibold text-gray-900 mb-1">Material Prices</h2>
          <p className="text-gray-600">Track monthly lumber, steel, concrete, and housing starts data.</p>
        </Link>
        <Link href="/housing-starts" className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
          <h2 className="font-semibold text-gray-900 mb-1">Housing Starts</h2>
          <p className="text-gray-600">Compare annual new construction activity across OECD countries.</p>
        </Link>
        <Link href="/lumber-market" className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
          <h2 className="font-semibold text-gray-900 mb-1">Lumber Market</h2>
          <p className="text-gray-600">Compare US lumber PPI with global softwood price trends.</p>
        </Link>
      </section>

      <section className="mt-8 text-sm text-gray-700 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">How to cite the data</h2>
        <p>
          Each report includes source links and the exact datasets used. If you quote a chart or
          summary, link to the report URL and mention the original public data source named on the
          page. For contractor proposals, use the report as market context and the calculators as
          project-specific estimates. Reports are updated when the underlying public datasets
          publish new periods, so check the page date before reusing older numbers in bids or
          forecasts.
        </p>
      </section>
    </div>
  );
}
