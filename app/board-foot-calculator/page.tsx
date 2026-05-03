import type { Metadata } from "next";
import { BoardFootCalculator } from "./BoardFootCalculator";

export const metadata: Metadata = {
  title: "Free Board Foot Calculator — Lumber Volume Tool",
  description:
    "Calculate board feet of lumber instantly. Enter thickness, width, and length to get exact volume. Free tool for carpenters, woodworkers, and builders.",
  alternates: { canonical: "https://easybuildcalc.com/board-foot-calculator" },
  openGraph: {
    title: "Board Foot Calculator",
    description: "Calculate board feet of lumber by thickness, width, and length.",
    url: "https://easybuildcalc.com/board-foot-calculator",
  },
};

// Structured data для Google (HowTo schema)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Board Feet",
  description: "Calculate the volume of lumber in board feet using thickness, width, and length.",
  step: [
    { "@type": "HowToStep", text: "Measure the thickness of the board in inches." },
    { "@type": "HowToStep", text: "Measure the width of the board in inches." },
    { "@type": "HowToStep", text: "Measure the length of the board in feet." },
    {
      "@type": "HowToStep",
      text: "Apply the formula: Board Feet = (Thickness × Width × Length) / 12",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a board foot of lumber?", acceptedAnswer: { "@type": "Answer", text: "A board foot is a unit of lumber volume equal to 1 inch thick × 12 inches wide × 12 inches long. It equals 144 cubic inches. This is the standard unit used by hardwood dealers and sawmills across North America." } },
    { "@type": "Question", name: "How do you calculate board feet?", acceptedAnswer: { "@type": "Answer", text: "Use the formula: Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12. For example, a 2×6 board that is 10 feet long equals (2 × 6 × 10) ÷ 12 = 10 board feet." } },
    { "@type": "Question", name: "Is framing lumber sold by the board foot?", acceptedAnswer: { "@type": "Answer", text: "No. Framing lumber (2×4, 2×6, etc.) is sold by the linear foot or per board at home improvement stores. Board feet are primarily used for hardwood lumber at specialty dealers." } },
    { "@type": "Question", name: "How many board feet in a 2x4x8?", acceptedAnswer: { "@type": "Answer", text: "A standard 2×4 that is 8 feet long contains (1.5 × 3.5 × 8) ÷ 12 = 3.5 board feet using actual dimensions. Using nominal dimensions: (2 × 4 × 8) ÷ 12 = 5.33 board feet." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Board Foot Calculator", item: "https://easybuildcalc.com/board-foot-calculator" },
  ],
};

export default function BoardFootPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-1.5">›</span>
          <span className="text-gray-700">Board Foot Calculator</span>
        </nav>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Free Board Foot Calculator
        </h1>
        <p className="text-gray-600 mb-6">
          Calculate the volume of lumber in board feet. Enter dimensions below — results update instantly.
        </p>

        {/* Calculator (client component) */}
        <BoardFootCalculator />

        {/* SEO content */}
        <article className="mt-10 space-y-6 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">What Is a Board Foot?</h2>
          <p>
            A <strong>board foot</strong> is a unit of lumber volume equal to a piece
            measuring 1 inch thick × 12 inches wide × 12 inches long — or any combination
            that equals the same volume. It&apos;s the standard unit used by lumber yards,
            sawmills, and hardwood dealers across North America. Use this free tool to
            calculate board feet for any board size before you order.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Board Foot Formula</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm">
            Board Feet = (Thickness × Width × Length) ÷ 12
          </div>
          <p>Where thickness and width are in <strong>inches</strong>, and length is in <strong>feet</strong>.</p>

          <h3 className="text-lg font-semibold text-gray-900">Example Calculation</h3>
          <p>
            A board that is <strong>1.5" thick × 5.5" wide × 8 feet long</strong>:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 font-mono text-sm">
            (1.5 × 5.5 × 8) ÷ 12 = 66 ÷ 12 = <strong>5.5 board feet</strong>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">Common Lumber Sizes in Board Feet</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-3 py-2 font-medium">Nominal Size</th>
                  <th className="text-left px-3 py-2 font-medium">Actual Size</th>
                  <th className="text-right px-3 py-2 font-medium">BF per 8ft board</th>
                  <th className="text-right px-3 py-2 font-medium">BF per 12ft board</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["1×4", '¾" × 3½"', "1.75", "2.63"],
                  ["1×6", '¾" × 5½"', "2.75", "4.13"],
                  ["2×4", '1½" × 3½"', "3.5", "5.25"],
                  ["2×6", '1½" × 5½"', "5.5", "8.25"],
                  ["2×8", '1½" × 7¼"', "7.25", "10.88"],
                  ["2×10", '1½" × 9¼"', "9.25", "13.88"],
                  ["4×4", '3½" × 3½"', "8.17", "12.25"],
                ].map(([nom, act, bf8, bf12]) => (
                  <tr key={nom} className="hover:bg-gray-50">
                    <td className="px-3 py-2 font-medium">{nom}</td>
                    <td className="px-3 py-2 text-gray-500">{act}</td>
                    <td className="px-3 py-2 text-right">{bf8}</td>
                    <td className="px-3 py-2 text-right">{bf12}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">When Do You Need Board Feet?</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Ordering hardwood at a lumber yard (hardwood is sold by the board foot)</li>
            <li>Estimating lumber costs for furniture or cabinet making</li>
            <li>Calculating wood for flooring, decking, or siding projects</li>
            <li>Comparing prices between different board sizes</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
            <strong className="text-amber-800">Pro tip:</strong>{" "}
            <span className="text-amber-700">
              Always add 10–15% waste factor when ordering lumber for any project.
              Cuts, knots, and defects always reduce usable yield.
            </span>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {[
              { q: "What is a board foot of lumber?", a: "A board foot is a unit of lumber volume equal to 1 inch thick × 12 inches wide × 12 inches long. It equals 144 cubic inches. This is the standard unit used by hardwood dealers and sawmills across North America." },
              { q: "How do you calculate board feet?", a: "Use the formula: Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12. For example, a 2×6 board that is 10 feet long equals (2 × 6 × 10) ÷ 12 = 10 board feet." },
              { q: "Is framing lumber sold by the board foot?", a: "No. Framing lumber (2×4, 2×6, etc.) is sold by the linear foot or per board at home improvement stores. Board feet are primarily used for hardwood lumber at specialty dealers." },
              { q: "How many board feet in a 2x4x8?", a: "A standard 2×4 that is 8 feet long contains (1.5 × 3.5 × 8) ÷ 12 = 3.5 board feet, using actual dimensions. Using nominal dimensions (2 × 4 × 8) ÷ 12 = 5.33 board feet." },
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
    </>
  );
}
