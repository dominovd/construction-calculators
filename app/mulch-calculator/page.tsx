import type { Metadata } from "next";
import { MulchCalculator } from "./MulchCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";

export const metadata: Metadata = {
  title: "Free Mulch Calculator — Cubic Yards & Bags for Garden Beds",
  description:
    "Calculate how much mulch, wood chips, or compost you need for any garden bed or landscape area. Get cubic yards, bags, and bulk delivery cost instantly. Free online tool.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much mulch do I need for a 100 sq ft garden bed?", acceptedAnswer: { "@type": "Answer", text: "For 3-inch depth: 100 x (3/12) / 27 = 0.93 cubic yards, or about 1 cubic yard. That's roughly 14 bags of 2 cu ft mulch. For a 2-inch layer, you need about 0.62 cubic yards or 9–10 bags." } },
    { "@type": "Question", name: "How deep should mulch be?", acceptedAnswer: { "@type": "Answer", text: "Apply 2–3 inches of mulch for weed suppression and moisture retention in most beds. Do not exceed 4 inches — deep mulch can prevent water penetration, cause root rot, and harbor pests. Keep mulch 2–3 inches away from plant stems and tree trunks." } },
    { "@type": "Question", name: "How much does a yard of mulch cost?", acceptedAnswer: { "@type": "Answer", text: "Bulk mulch delivered typically costs $25–$55 per cubic yard depending on type and region. Shredded hardwood is $30–$45/yd; cedar is $45–$65/yd; colored mulch is $40–$60/yd. Bagged mulch at home centers costs more per yard but is convenient for small areas." } },
    { "@type": "Question", name: "How many bags of mulch equal a yard?", acceptedAnswer: { "@type": "Answer", text: "One cubic yard equals 27 cubic feet. A standard 2 cu ft bag: 27 / 2 = 13.5 bags per yard. A 3 cu ft bag: 27 / 3 = 9 bags per yard. Bulk delivery is more economical above 2–3 cubic yards." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Mulch Calculator", item: "https://easybuildcalc.com/mulch-calculator" },
  ],
};

export default function MulchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Mulch Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Mulch Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate cubic yards and bags of mulch, wood chips, or compost for any landscape area.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <MulchCalculator />
      <PriceDisclaimer className="mt-3" />

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
          available in larger varieties like shredded hardwood, cedar, and pine bark. This free
          tool helps you compare both options side by side before heading to the store.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Keep mulch 2–3 inches away from plant stems and tree trunks — mulch piled against
            wood causes rot and pest problems.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How much mulch do I need for a 100 sq ft garden bed?", a: "For 3-inch depth: 100 × (3/12) ÷ 27 = 0.93 cubic yards, or about 1 cubic yard. That's roughly 14 bags of 2 cu ft mulch. For a 2-inch layer, you need about 0.62 cubic yards or 9–10 bags." },
            { q: "How deep should mulch be?", a: "Apply 2–3 inches of mulch for weed suppression and moisture retention in most beds. Do not exceed 4 inches — deep mulch can prevent water penetration, cause root rot, and harbor pests. Keep mulch 2–3 inches away from plant stems and tree trunks." },
            { q: "How much does a yard of mulch cost?", a: "Bulk mulch delivered typically costs $25–$55 per cubic yard depending on type and region. Shredded hardwood is $30–$45/yd; cedar is $45–$65/yd; colored mulch is $40–$60/yd. Bagged mulch at home centers costs more per yard but is convenient for small areas." },
            { q: "How many bags of mulch equal a yard?", a: "One cubic yard equals 27 cubic feet. A standard 2 cu ft bag: 27 ÷ 2 = 13.5 bags per yard. A 3 cu ft bag: 27 ÷ 3 = 9 bags per yard. Bulk delivery is more economical above 2–3 cubic yards." },
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
