import type { Metadata } from "next";
import { CubicYardCalculator } from "./CubicYardCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Cubic Yard Calculator — Convert Any Shape to Cubic Yards",
  description:
    "Calculate cubic yards for rectangles, circles, and triangles. Find volume in cubic feet, cubic yards, and tons for concrete, topsoil, gravel, mulch, and more. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/cubic-yard-calculator" },
  openGraph: {
    title: "Cubic Yard Calculator — Volume in Cubic Yards & Tons",
    description: "Calculate cubic yards for any shape and material instantly.",
    url: "https://easybuildcalc.com/cubic-yard-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Cubic Yards",
  description: "Convert any area and depth measurement into cubic yards.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width in feet." },
    { "@type": "HowToStep", text: "Measure or estimate the depth in inches." },
    { "@type": "HowToStep", text: "Multiply: length × width × (depth ÷ 12) to get cubic feet." },
    { "@type": "HowToStep", text: "Divide cubic feet by 27 to convert to cubic yards." },
    { "@type": "HowToStep", text: "Multiply cubic yards by material density to get tons." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I convert cubic feet to cubic yards?", acceptedAnswer: { "@type": "Answer", text: "Divide cubic feet by 27. One cubic yard equals 27 cubic feet (3 ft × 3 ft × 3 ft). For example, 54 cubic feet = 2 cubic yards." } },
    { "@type": "Question", name: "How many cubic yards are in a ton?", acceptedAnswer: { "@type": "Answer", text: "It depends on the material. Gravel: about 0.67 yd³/ton (1.45 tons/yd³). Topsoil: about 0.93 yd³/ton. Sand: about 0.74 yd³/ton. Concrete: about 0.49 yd³/ton. Use our calculator to convert automatically." } },
    { "@type": "Question", name: "How many cubic yards does a dump truck hold?", acceptedAnswer: { "@type": "Answer", text: "A standard dump truck holds 10–14 cubic yards. A tandem dump truck can carry 14–18 cubic yards. A small pickup truck holds about 1 cubic yard in its bed." } },
    { "@type": "Question", name: "How do I calculate cubic yards for an irregular area?", acceptedAnswer: { "@type": "Answer", text: "Break the area into rectangles, circles, or triangles and calculate each section separately. Add all the cubic yard totals together. Our calculator supports all three shapes." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Cubic Yard Calculator", item: "https://easybuildcalc.com/cubic-yard-calculator" },
  ],
};

export default function CubicYardPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Cubic Yard Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Cubic Yard Calculator</h1>
      <p className="text-gray-600 mb-6">Convert any area and depth to cubic yards and tons. Supports rectangles, circles, and triangles. Works for concrete, topsoil, gravel, mulch, fill dirt, and more.</p>
      <CubicYardCalculator />
      <RelatedCalculators currentSlug="cubic-yard-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Material Densities — Cubic Yards to Tons</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Material</th>
              <th className="border border-gray-200 px-3 py-2 text-right">Tons per yd³</th>
              <th className="border border-gray-200 px-3 py-2 text-right">yd³ per ton</th>
            </tr></thead>
            <tbody>
              {[
                ["Concrete",      "2.03", "0.49"],
                ["Crushed Stone", "1.50", "0.67"],
                ["Gravel",        "1.45", "0.69"],
                ["Sand (dry)",    "1.35", "0.74"],
                ["Topsoil",       "1.08", "0.93"],
                ["Fill Dirt",     "1.08", "0.93"],
                ["Mulch",         "0.43", "2.33"],
              ].map(([m, t, y]) => (
                <tr key={m} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{m}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-right">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-right">{y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Quick formula:</strong>{" "}
          <span className="text-amber-700">Cubic yards = (Length ft × Width ft × Depth in) ÷ 324. This shortcut combines dividing by 12 (inches to feet) and by 27 (feet to yards) in one step.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How do I convert cubic feet to cubic yards?", a: "Divide cubic feet by 27. One cubic yard = 27 cubic feet (3 × 3 × 3 feet). Example: 81 cubic feet ÷ 27 = 3 cubic yards." },
            { q: "How many cubic yards does a dump truck hold?", a: "A standard single-axle dump truck holds 10–14 cubic yards. A tandem axle (larger) truck holds 14–18 cubic yards. A typical half-ton pickup truck bed holds about 1 cubic yard of loose material." },
            { q: "How do I calculate cubic yards for a circle?", a: "Area = π × radius². Multiply by depth in feet, then divide by 27. For a 10-ft diameter circle at 4 inches deep: π × 5² × (4/12) / 27 = 0.97 cubic yards. Our calculator does this automatically." },
            { q: "How many bags of material equal one cubic yard?", a: "A 0.5 cubic foot bag: 54 bags per yard. A 1 cubic foot bag: 27 bags per yard. A 2 cubic foot bag: 13.5 bags per yard. Buying in bulk (by the yard) is almost always cheaper than bagged material for projects over 1 yard." },
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
