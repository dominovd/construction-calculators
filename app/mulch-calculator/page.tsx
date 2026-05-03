import type { Metadata } from "next";
import { MulchCalculator } from "./MulchCalculator";

export const metadata: Metadata = {
  title: "Mulch Calculator — Cubic Yards & Bags for Garden Beds",
  description:
    "Calculate how much mulch, wood chips, or compost you need for any garden bed or landscape area. Get cubic yards, bags, and bulk delivery cost instantly.",
  alternates: { canonical: "https://easybuildcalc.com/mulch-calculator" },
  openGraph: {
    title: "Mulch Calculator",
    description: "Calculate cubic yards and bags of mulch for garden beds and landscapes.",
    url: "https://easybuildcalc.com/mulch-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Mulch for a Garden Bed",
  description: "Calculate how many cubic yards or bags of mulch you need.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Decide on mulch depth: 2–3 inches for weed control, 4 inches for heavy coverage." },
    { "@type": "HowToStep", text: "Multiply length × width × (depth ÷ 12) to get cubic feet." },
    { "@type": "HowToStep", text: "Divide by 27 to get cubic yards, or by bag size to get bag count." },
  ],
};

export default function MulchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Mulch Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Mulch Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate cubic yards and bags of mulch, wood chips, or compost for any landscape area.
      </p>

      <MulchCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">How Much Mulch Do I Need?</h2>
        <p>
          One cubic yard of mulch covers 108 sq ft at 3 inches deep, or 81 sq ft at 4 inches deep.
          Most landscape beds use <strong>2–3 inches</strong> of mulch for weed suppression without
          smothering plant roots.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Coverage Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Depth</th>
                <th className="border border-gray-200 px-3 py-2 text-left">1 yd³ covers</th>
                <th className="border border-gray-200 px-3 py-2 text-left">2 cu ft bag covers</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 inch",  "324 sq ft", "24 sq ft"],
                ["2 inches","162 sq ft", "12 sq ft"],
                ["3 inches","108 sq ft", "8 sq ft"],
                ["4 inches","81 sq ft",  "6 sq ft"],
              ].map(([d, yd, bag]) => (
                <tr key={d} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{yd}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{bag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Bags vs. Bulk Delivery</h2>
        <p>
          Bagged mulch is convenient for small beds and easy to transport in a car.
          Bulk delivery becomes more economical above <strong>3 cubic yards</strong> and is
          available in larger varieties like shredded hardwood, cedar, and pine bark.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Keep mulch 2–3 inches away from plant stems and tree trunks — mulch piled against
            wood causes rot and pest problems.
          </span>
        </div>
      </article>
    </div>
  );
}
