import type { Metadata } from "next";
import { StairCalculator } from "./StairCalculator";

export const metadata: Metadata = {
  title: "Free Stair Calculator — Steps, Rise & Run for Any Staircase",
  description:
    "Calculate the number of steps, riser height, run depth, and stringer length for any staircase. Checks IRC building code compliance. Free online stair calculator.",
  alternates: { canonical: "https://easybuildcalc.com/stair-calculator" },
  openGraph: {
    title: "Stair Calculator — Steps, Rise, Run & Stringer Length",
    description: "Calculate stair dimensions and check building code compliance instantly.",
    url: "https://easybuildcalc.com/stair-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Stair Dimensions",
  description: "Calculate the number of steps and riser/run dimensions for a staircase.",
  step: [
    { "@type": "HowToStep", text: "Measure the total rise: the floor-to-floor height in inches." },
    { "@type": "HowToStep", text: "Divide total rise by your desired riser height (7 inches is typical) to get the number of steps." },
    { "@type": "HowToStep", text: "Round to the nearest whole number, then divide total rise by that number to get the actual riser height." },
    { "@type": "HowToStep", text: "Verify riser height is between 4 and 7¾ inches (IRC code)." },
    { "@type": "HowToStep", text: "Set run depth to 10–11 inches. Calculate total run = steps × run depth." },
    { "@type": "HowToStep", text: "Calculate stringer length = √(total rise² + total run²)." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the standard riser height for stairs?", acceptedAnswer: { "@type": "Answer", text: "The IRC building code requires risers between 4 and 7¾ inches. The most comfortable riser height is 7 to 7½ inches. Consistent riser height throughout the stair is more important than the exact dimension." } },
    { "@type": "Question", name: "How do I calculate the number of stairs I need?", acceptedAnswer: { "@type": "Answer", text: "Divide your total rise (floor-to-floor height in inches) by your desired riser height, then round up to the nearest whole number. For example, 108 inches ÷ 7 = 15.4, so you need 16 steps. The actual riser becomes 108 ÷ 16 = 6.75 inches." } },
    { "@type": "Question", name: "What is the standard stair run depth?", acceptedAnswer: { "@type": "Answer", text: "The IRC requires a minimum tread depth (run) of 10 inches. Most comfortable stairs have an 11-inch run. The classic rule of thumb is: rise + run = 17–18 inches for comfortable stairs." } },
    { "@type": "Question", name: "How long should my stair stringers be?", acceptedAnswer: { "@type": "Answer", text: "Stringer length = √(total rise² + total run²). For a 9-foot rise (108 inches) with 11 steps and 11-inch runs (total run 121 inches), the stringer is about √(108² + 121²) = 162 inches (13.5 feet). Use 2×12 lumber for stringers." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Stair Calculator", item: "https://easybuildcalc.com/stair-calculator" },
  ],
};

export default function StairPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Stair Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Stair Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate step count, riser height, run depth, stringer length, and building code compliance for any staircase. Enter your floor-to-floor height and get a full stair layout.
      </p>

      <StairCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">IRC Stair Building Code Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Dimension</th>
                <th className="border border-gray-200 px-3 py-2 text-left">IRC Minimum</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Recommended</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Riser height",           "4\" min, 7¾\" max", "7–7½\""],
                ["Tread (run) depth",      "10\" min",          "11\""],
                ["Stair width",            "36\" min",          "42–48\" (comfort)"],
                ["Headroom clearance",     "6\'8\" min",         "7\'0\" recommended"],
                ["Handrail height",        "34–38\" above tread", "36\" typical"],
                ["Riser variation",        "3⁄8\" max between adjacent risers", "0 (consistent)"],
              ].map(([d, min, rec]) => (
                <tr key={d} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-red-700">{min}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-green-700">{rec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">The 17–18 Rule:</strong>{" "}
          <span className="text-amber-700">
            A comfortable staircase satisfies: <strong>rise + run = 17 to 18 inches</strong>. A 7-inch rise with 11-inch run (7 + 11 = 18) is considered ideal. Steeper stairs fatigue climbers; too-shallow stairs waste floor space.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What is the standard riser height for stairs?", a: "The IRC building code requires risers between 4 and 7¾ inches. The most comfortable riser height is 7 to 7½ inches. Crucially, all risers in a single staircase must be within ⅜ inch of each other — inconsistent risers are a trip hazard and a code violation." },
            { q: "How do I calculate the number of stairs I need?", a: "Divide your total rise (floor-to-floor height in inches) by your target riser height, then round to the nearest whole number. For 108 inches ÷ 7 = 15.4, round up to 16 steps. The actual riser becomes 108 ÷ 16 = 6.75 inches — verify this is within the 4–7¾ inch range." },
            { q: "What is the standard tread depth for stairs?", a: "IRC requires a minimum of 10 inches of run (tread depth, not including nosing). Most comfortable stairs use 11 inches. Add a 1–1¼ inch nosing overhang for comfort and code compliance, bringing the total tread to 11–12¼ inches." },
            { q: "How long should my stair stringers be?", a: "Stringer length = √(total rise² + total run²). For a 9-foot rise with an 11-inch run per step, the diagonal is about 13.5 feet. Purchase 2×12 lumber at least 2 feet longer than the calculated diagonal to allow for cutting." },
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
