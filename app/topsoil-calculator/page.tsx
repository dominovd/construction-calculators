import type { Metadata } from "next";
import { TopsoilCalculator } from "./TopsoilCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Topsoil Calculator — Cubic Yards & Bags for Gardens and Lawns",
  description:
    "Calculate how many cubic yards or bags of topsoil you need for any garden bed, lawn, or landscaping project. Instant results with bulk vs. bagged comparison. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/topsoil-calculator" },
  openGraph: {
    title: "Topsoil Calculator — Cubic Yards & Bags",
    description: "Calculate topsoil cubic yards and bags needed for any project.",
    url: "https://easybuildcalc.com/topsoil-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Topsoil for a Garden or Lawn",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Decide on depth: 4 inches for lawns, 6–8 inches for garden beds." },
    { "@type": "HowToStep", text: "Multiply: length × width × (depth ÷ 12) = cubic feet." },
    { "@type": "HowToStep", text: "Divide by 27 to get cubic yards." },
    { "@type": "HowToStep", text: "Order bulk if over 2 yards; buy bagged for smaller quantities." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many cubic yards of topsoil do I need?", acceptedAnswer: { "@type": "Answer", text: "For a 20×15 ft area at 4 inches deep you need about 3.7 cubic yards. Use the formula: length × width × depth (in) ÷ 324 = cubic yards. Our free topsoil calculator does this instantly." } },
    { "@type": "Question", name: "How deep should topsoil be for a lawn?", acceptedAnswer: { "@type": "Answer", text: "For overseeding or leveling: 1–2 inches. For new lawn installation: 4–6 inches. For garden beds: 6–8 inches to allow root development. Grass roots penetrate 4–6 inches in quality topsoil." } },
    { "@type": "Question", name: "How many bags of topsoil equal one cubic yard?", acceptedAnswer: { "@type": "Answer", text: "It depends on bag size. A 0.75 cubic foot bag: 36 bags per yard. A 1 cubic foot bag: 27 bags per yard. A 2 cubic foot bag: 13.5 bags per yard. Bulk topsoil is cheaper above 2 cubic yards." } },
    { "@type": "Question", name: "How much does a cubic yard of topsoil weigh?", acceptedAnswer: { "@type": "Answer", text: "Topsoil weighs approximately 1.08 tons (2,160 lbs) per cubic yard when dry. Wet or clay-heavy topsoil can weigh more. A full pickup truck bed holds about 1 cubic yard of topsoil." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Topsoil Calculator", item: "https://easybuildcalc.com/topsoil-calculator" },
  ],
};

export default function TopsoilPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Topsoil Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Topsoil Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate cubic yards and bags of topsoil for lawns, garden beds, and landscaping. Compare bulk delivery vs. bagged topsoil instantly.</p>
      <TopsoilCalculator />
      <RelatedCalculators currentSlug="topsoil-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Topsoil Depth by Project</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Project</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Depth</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
            </tr></thead>
            <tbody>
              {[
                ["Lawn leveling / overseeding", "1–2 inches",  "Fills low spots, top dressing"],
                ["New lawn installation",       "4–6 inches",  "Supports root establishment"],
                ["Vegetable garden bed",        "8–12 inches", "Deep roots for produce"],
                ["Flower / shrub bed",          "6–8 inches",  "Allows ornamental root growth"],
                ["Raised bed fill",             "12–18 inches","Full raised bed depth"],
                ["Tree planting area",          "12 inches",   "In planting zone only"],
              ].map(([p, d, n]) => (
                <tr key={p} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <strong className="text-green-900">Bulk vs. bagged:</strong>{" "}
          <span className="text-green-700">Bulk topsoil (delivered by the yard) typically costs $25–50/yard. Bagged topsoil runs $3–6 per 0.75 cu ft bag — that's $108–216 per cubic yard. For anything over 2 yards, bulk delivery saves 50–70%.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many cubic yards of topsoil do I need?", a: "Use this formula: length (ft) × width (ft) × depth (in) ÷ 324 = cubic yards. A 20×15 ft area at 4 inches deep needs 3.7 cubic yards. Our topsoil calculator handles the math automatically." },
            { q: "How deep should topsoil be for a lawn?", a: "For a new lawn, 4–6 inches of topsoil supports healthy grass root development. For overseeding or leveling an existing lawn, a 1–2 inch top dressing is sufficient. Deeper is better — grass roots can penetrate 4–6 inches in good topsoil." },
            { q: "How many bags of topsoil equal one cubic yard?", a: "27 bags of 1 cubic foot topsoil = 1 cubic yard. 36 bags of 0.75 cubic foot bags (40-qt bags) = 1 cubic yard. Bagged is convenient for small jobs but costs 3–5× more per yard than bulk delivery." },
            { q: "How much does topsoil weigh?", a: "Dry topsoil weighs approximately 1,080 lbs (0.54 tons) per cubic yard. Wet topsoil can weigh 20–30% more. A typical pickup truck can carry 1–1.5 cubic yards of dry topsoil without overloading." },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg">
              <summary className="font-semibold text-gray-800 px-4 py-3 cursor-pointer select-none list-none flex justify-between items-center hover:bg-gray-50 rounded-lg">
                <span>{q}</span><span className="text-gray-400 ml-2 flex-shrink-0 text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 border-t border-gray-100"><p className="text-gray-600 pt-3">{a}</p></div>
            </details>
          ))}
        </div>
      </article>
    </div>
  );
}
