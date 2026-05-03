import type { Metadata } from "next";
import { RetainingWallCalculator } from "./RetainingWallCalculator";

export const metadata: Metadata = {
  title: "Free Retaining Wall Calculator — Blocks, Cost & Materials",
  description:
    "Calculate how many retaining wall blocks you need for any wall size. Includes drainage gravel and base estimates. Supports standard, large, and Allan block types. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/retaining-wall-calculator" },
  openGraph: {
    title: "Retaining Wall Calculator — Blocks, Rows & Cost",
    description: "Calculate retaining wall blocks and materials for any wall size.",
    url: "https://easybuildcalc.com/retaining-wall-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Retaining Wall Blocks",
  step: [
    { "@type": "HowToStep", text: "Measure the total length and height of the wall in feet." },
    { "@type": "HowToStep", text: "Divide wall height by block height to get the number of rows." },
    { "@type": "HowToStep", text: "Divide wall length by block length to get blocks per row." },
    { "@type": "HowToStep", text: "Multiply rows × blocks per row for total block count." },
    { "@type": "HowToStep", text: "Add 6 inches compacted gravel base and drainage gravel behind the wall." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many retaining wall blocks do I need?", acceptedAnswer: { "@type": "Answer", text: "Divide your wall height by the block height to get row count, and wall length by block width to get blocks per row. Multiply for total blocks. For a 40-ft wall, 24 inches high using 4-inch blocks, you need 6 rows × 40 blocks = 240 blocks." } },
    { "@type": "Question", name: "How deep should a retaining wall base be?", acceptedAnswer: { "@type": "Answer", text: "Bury the first course of blocks 6–8 inches below grade for walls under 4 feet. Use a 6-inch compacted gravel base for drainage and stability. Taller walls may require a poured concrete footing." } },
    { "@type": "Question", name: "Do I need a permit for a retaining wall?", acceptedAnswer: { "@type": "Answer", text: "Most jurisdictions require a permit for retaining walls over 4 feet tall (measured from the base of the footing to the top of the wall). Walls near property lines or with surcharge loads may need permits at lower heights. Check with your local building department." } },
    { "@type": "Question", name: "How much does a retaining wall cost?", acceptedAnswer: { "@type": "Answer", text: "DIY concrete block retaining walls cost $8–20 per sq ft of wall face, including blocks, base gravel, and drainage materials. Professional installation runs $20–50 per sq ft. Natural stone and engineered walls cost more." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Retaining Wall Calculator", item: "https://easybuildcalc.com/retaining-wall-calculator" },
  ],
};

export default function RetainingWallPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Retaining Wall Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Retaining Wall Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate blocks, rows, base gravel, and drainage materials for any retaining wall. Works with standard, large, and Allan Block styles.</p>
      <RetainingWallCalculator />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Retaining Wall Design Guidelines</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Wall Height</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Batter (Setback)</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Base Burial</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Permit Needed</th>
            </tr></thead>
            <tbody>
              {[
                ["Under 2 ft",  "None required",  "4–6 inches", "Rarely"],
                ["2–4 ft",      "1\" per foot",   "6–8 inches", "Sometimes"],
                ["4–6 ft",      "1\" per foot",   "8–12 inches","Usually"],
                ["Over 6 ft",   "Engineer required", "12\"+ / footing", "Always"],
              ].map(([h, b, bu, p]) => (
                <tr key={h} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{h}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{b}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{bu}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Drainage is critical:</strong>{" "}
          <span className="text-amber-700">Most retaining wall failures are caused by water buildup behind the wall. Always install a 12-inch wide drainage gravel column behind the wall, topped with filter fabric to prevent soil migration. For longer walls, add drain pipe at the base.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many retaining wall blocks do I need?", a: "Divide wall height (in inches) by block height, then multiply by blocks per row (wall length in inches ÷ block width). For a 40-ft wall at 24 inches using 4×12 blocks: (24÷4) × (480÷12) = 6 rows × 40 blocks = 240 blocks." },
            { q: "How deep should a retaining wall base be?", a: "Bury the first course 6 inches below grade for small walls (under 3 ft). For larger walls, bury one block height (4–6 inches) per foot of wall height, up to 12 inches. Always set on a 6-inch compacted gravel base." },
            { q: "Do I need a permit for a retaining wall?", a: "Most municipalities require permits for walls over 4 feet tall measured from the bottom of the footing. Walls near property lines or holding back slopes with buildings above often need permits at lower heights. Always check local codes." },
            { q: "How much does a retaining wall cost?", a: "DIY interlocking block walls run $8–20 per square foot of wall face, including materials. Professional installation adds $15–35/sq ft in labor. A 40-ft long, 2-ft tall wall (80 sq ft) typically costs $640–$1,600 in DIY materials." },
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
