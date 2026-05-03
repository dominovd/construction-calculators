import type { Metadata } from "next";
import { InsulationCalculator } from "./InsulationCalculator";

export const metadata: Metadata = {
  title: "Free Insulation Calculator — Batts, Rolls & Blown-in by R-Value",
  description:
    "Calculate how many bags or rolls of insulation you need for walls, attics, and crawl spaces. Supports fiberglass batt and blown-in insulation by R-value. Free online tool.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What R-value do I need for my attic?", acceptedAnswer: { "@type": "Answer", text: "The DOE recommends R-38 to R-60 for attics in most US climate zones. Zone 1–2 (South) needs R-30; zones 3–4 need R-38 to R-49; zones 5–8 (North) need R-49 to R-60. Check the Energy Star map for your specific zone." } },
    { "@type": "Question", name: "Is blown-in insulation better than batts?", acceptedAnswer: { "@type": "Answer", text: "Blown-in insulation fills gaps and irregular spaces better than batts, making it superior for attics and retrofit projects. Batts are easier for DIY wall insulation in open stud cavities. Both provide similar R-value per inch when installed correctly." } },
    { "@type": "Question", name: "How much does insulation cost per square foot?", acceptedAnswer: { "@type": "Answer", text: "Fiberglass batt insulation costs $0.50–$1.50 per sq ft installed. Blown-in insulation runs $1.00–$2.50 per sq ft. Spray foam costs $2–$7 per sq ft. DIY installation with bagged insulation is significantly cheaper than professional installation." } },
    { "@type": "Question", name: "Can I add insulation on top of existing insulation?", acceptedAnswer: { "@type": "Answer", text: "Yes, in most cases. You can add blown-in insulation over existing batts in an attic to reach a higher R-value. Make sure existing insulation is dry and not moldy. Do not cover recessed lights unless they are rated IC (Insulation Contact)." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Insulation Calculator", item: "https://easybuildcalc.com/insulation-calculator" },
  ],
};

export default function InsulationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Insulation Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Insulation Calculator</h1>
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
          a minimum number of bags at home centers). This free tool helps you estimate bags or rolls for
          either insulation type before you head to the store.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Air sealing before insulating doubles your energy savings. Caulk and foam around
            penetrations, electrical boxes, and framing gaps before adding insulation.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What R-value do I need for my attic?", a: "The DOE recommends R-38 to R-60 for attics in most US climate zones. Zone 1–2 (South) needs R-30; zones 3–4 need R-38 to R-49; zones 5–8 (North) need R-49 to R-60. Check the Energy Star map for your specific zone." },
            { q: "Is blown-in insulation better than batts?", a: "Blown-in insulation fills gaps and irregular spaces better than batts, making it superior for attics and retrofit projects. Batts are easier for DIY wall insulation in open stud cavities. Both provide similar R-value per inch when installed correctly." },
            { q: "How much does insulation cost per square foot?", a: "Fiberglass batt insulation costs $0.50–$1.50 per sq ft installed. Blown-in insulation runs $1.00–$2.50 per sq ft. Spray foam costs $2–$7 per sq ft. DIY installation with bagged insulation is significantly cheaper than professional installation." },
            { q: "Can I add insulation on top of existing insulation?", a: "Yes, in most cases. You can add blown-in insulation over existing batts in an attic to reach a higher R-value. Make sure existing insulation is dry and not moldy. Do not cover recessed lights unless they are rated IC (Insulation Contact)." },
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
