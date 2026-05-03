import type { Metadata } from "next";
import { SodCalculator } from "./SodCalculator";

export const metadata: Metadata = {
  title: "Free Sod Calculator — How Many Rolls or Pallets of Sod Do I Need?",
  description:
    "Calculate sod rolls, pallets, and cost for any lawn area. Supports Bermuda, Zoysia, Fescue, St. Augustine, and Kentucky Bluegrass. Includes topsoil estimate. Free tool.",
  alternates: { canonical: "https://easybuildcalc.com/sod-calculator" },
  openGraph: {
    title: "Sod Calculator — Rolls, Pallets & Cost for Any Lawn",
    description: "Calculate sod rolls and pallets needed for any yard size.",
    url: "https://easybuildcalc.com/sod-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Sod for a Lawn",
  description: "Calculate rolls and pallets of sod needed for a lawn or yard.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Multiply to get the total square footage." },
    { "@type": "HowToStep", text: "Add 5–10% for waste, edges, and irregular shapes." },
    { "@type": "HowToStep", text: "Divide by 9 sq ft to get rolls needed (standard roll = 18×6 inches or 2×4.5 feet)." },
    { "@type": "HowToStep", text: "Divide total sq ft by pallet coverage (typically 450 sq ft) to get pallets." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many rolls of sod do I need for my lawn?", acceptedAnswer: { "@type": "Answer", text: "Measure your lawn in square feet and divide by 9 (a standard sod roll covers 9 sq ft). Add 5–10% for waste. For a 1,200 sq ft lawn, you'd need about 133 rolls. Use our free sod calculator for an exact count." } },
    { "@type": "Question", name: "How many square feet does a pallet of sod cover?", acceptedAnswer: { "@type": "Answer", text: "A standard pallet of sod covers 450–504 sq ft depending on roll size and grass type. Bermuda, Zoysia, and St. Augustine typically come in 450 sq ft pallets, while some Fescue pallets cover up to 504 sq ft." } },
    { "@type": "Question", name: "How deep should topsoil be before laying sod?", acceptedAnswer: { "@type": "Answer", text: "Lay sod over 4 inches of quality topsoil for best root establishment. Remove existing weeds, till the soil, add starter fertilizer, then grade to 1 inch below hardscape edges before laying sod." } },
    { "@type": "Question", name: "When is the best time to lay sod?", acceptedAnswer: { "@type": "Answer", text: "Cool-season grasses (fescue, bluegrass) are best installed in fall or spring. Warm-season grasses (Bermuda, Zoysia, St. Augustine) establish best when laid in late spring through summer when soil temperatures exceed 65°F." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Sod Calculator", item: "https://easybuildcalc.com/sod-calculator" },
  ],
};

export default function SodPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Sod Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Sod Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate how many rolls and pallets of sod you need for any lawn or yard. Includes topsoil and starter fertilizer estimates.
      </p>

      <SodCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Choosing the Right Grass Type</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Grass Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Climate</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Sun</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Drought Tolerance</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Bermuda",            "Warm season",  "Full sun",        "High"],
                ["Zoysia",             "Warm/Transitional", "Full sun",   "Medium-High"],
                ["St. Augustine",      "Warm season",  "Sun/Part shade",  "Medium"],
                ["Tall Fescue",        "Cool season",  "Sun/Part shade",  "Medium"],
                ["Kentucky Bluegrass", "Cool season",  "Full sun",        "Low-Medium"],
              ].map(([g, c, s, d]) => (
                <tr key={g} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{g}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{c}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{s}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <strong className="text-green-900">Sod installation checklist:</strong>{" "}
          <span className="text-green-700">
            Remove existing vegetation → till soil 4–6 inches → add 4 inches of topsoil → grade to slope away from foundation → apply starter fertilizer → lay sod in a brick pattern → roll with sod roller → water immediately and daily for 2 weeks.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many rolls of sod do I need for my lawn?", a: "Measure your lawn area in square feet, add 5–10% for waste, then divide by 9 sq ft per roll. A 1,200 sq ft lawn needs about 133 rolls with 5% waste. For irregular yards, divide the area into rectangles and calculate each separately." },
            { q: "How many square feet does a pallet of sod cover?", a: "A standard pallet covers 450–504 sq ft depending on roll size and grass variety. At 450 sq ft per pallet, a 2,000 sq ft yard needs about 4.5 pallets — order 5. Most suppliers sell by the pallet for delivery and by individual rolls for pickup." },
            { q: "How deep should topsoil be before laying sod?", a: "Prepare 4 inches of quality topsoil (loam or sandy loam) before laying sod. Less than 4 inches limits root depth and drought tolerance. Remove weeds, till the existing soil, then spread and grade the new topsoil before laying." },
            { q: "When is the best time to lay sod?", a: "Warm-season grasses (Bermuda, Zoysia, St. Augustine) establish best from late spring through summer when soil is above 65°F. Cool-season grasses (fescue, bluegrass) do best in fall when temperatures cool to 50–65°F but before first frost." },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg">
              <summary className="font-semibold text-gray-800 px-4 py-3 cursor-pointer select-none list-none flex justify-between items-center hover:bg-gray-50 rounded-lg">
                <span>{q}</span>
                <span className="text-gray-400 ml-2 flex-shrink-0 text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 border-t border-gray-100">
                <p className="text-gray-600 pt-3">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </article>
    </div>
  );
}
