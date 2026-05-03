import type { Metadata } from "next";
import { InsulationCalculator } from "./InsulationCalculator";

export const metadata: Metadata = {
  title: "Insulation Calculator — Batts, Rolls & Blown-in by R-Value",
  description:
    "Calculate how many bags or rolls of insulation you need for walls, attics, and crawl spaces. Supports fiberglass batt and blown-in insulation by R-value.",
  alternates: { canonical: "https://easybuildcalc.com/insulation-calculator" },
  openGraph: {
    title: "Insulation Calculator",
    description: "Calculate insulation bags, rolls, and cost by R-value for walls and attics.",
    url: "https://easybuildcalc.com/insulation-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Insulation for a Home",
  description: "Calculate the number of insulation bags or rolls needed by R-value.",
  step: [
    { "@type": "HowToStep", text: "Measure the total square footage of walls or attic floor." },
    { "@type": "HowToStep", text: "Choose the required R-value based on your climate zone." },
    { "@type": "HowToStep", text: "Find the coverage per bag or roll on the packaging." },
    { "@type": "HowToStep", text: "Divide total area by coverage per bag, then add 10% for waste." },
  ],
};

export default function InsulationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Insulation Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Insulation Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate insulation bags or rolls needed for walls, attics, and floors by R-value and area.
      </p>

      <InsulationCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Recommended R-Values by Climate Zone</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Zone</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Region (US)</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Attic</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Wall</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1–2", "Florida, Hawaii", "R-30", "R-13"],
                ["3",   "Southeast US",    "R-38", "R-13 to R-15"],
                ["4",   "Mid-Atlantic, Pacific NW", "R-38 to R-49", "R-13 to R-21"],
                ["5–6", "Midwest, New England", "R-49 to R-60", "R-21"],
                ["7–8", "Northern US, Alaska", "R-60+", "R-21+"],
              ].map(([z, r, a, w]) => (
                <tr key={z} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-semibold">{z}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{r}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{a}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Batt vs. Blown-In Insulation</h2>
        <p>
          <strong>Fiberglass batts</strong> are easy to install in open stud cavities and attic floors.
          <strong> Blown-in</strong> (loose fill) fills irregular spaces better and is ideal for attics,
          crawl spaces, and retrofit projects. Blown-in requires a machine (often rented free when buying
          a minimum number of bags at home centers).
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Air sealing before insulating doubles your energy savings. Caulk and foam around
            penetrations, electrical boxes, and framing gaps before adding insulation.
          </span>
        </div>
      </article>
    </div>
  );
}
