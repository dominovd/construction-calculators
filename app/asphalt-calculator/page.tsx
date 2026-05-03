import type { Metadata } from "next";
import { AsphaltCalculator } from "./AsphaltCalculator";

export const metadata: Metadata = {
  title: "Asphalt Calculator — Tons & Cost for Driveways and Parking Lots",
  description:
    "Calculate how many tons of asphalt you need for a driveway, parking lot, or road. Enter length, width, and depth to get tonnage and cost estimate.",
  alternates: { canonical: "https://easybuildcalc.com/asphalt-calculator" },
  openGraph: {
    title: "Asphalt Calculator",
    description: "Calculate asphalt tonnage for driveways and parking lots.",
    url: "https://easybuildcalc.com/asphalt-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Asphalt Tonnage",
  description: "Calculate how many tons of asphalt you need for any paving project.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Decide on pavement depth: 2–3 inches for driveways, 4+ for roads." },
    { "@type": "HowToStep", text: "Multiply length × width × depth (in feet) to get cubic feet." },
    { "@type": "HowToStep", text: "Convert to tons using the asphalt density of ~145 lbs per cubic foot." },
  ],
};

export default function AsphaltPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Asphalt Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate asphalt tonnage and cost for driveways, parking lots, and roads.
      </p>

      <AsphaltCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How to Calculate Asphalt Tonnage</h2>
        <p>
          Asphalt quantity is ordered by the ton. Hot mix asphalt (HMA) weighs approximately
          145 lbs per cubic foot, or about 2 tons per cubic yard. The formula:
        </p>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Cubic Feet = Length × Width × (Depth ÷ 12){"\n"}
          Cubic Yards = Cubic Feet ÷ 27{"\n"}
          Tons = Cubic Yards × 2
        </pre>

        <h2 className="text-lg font-semibold text-gray-900">Recommended Asphalt Depth by Project</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Project Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Depth</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Residential driveway", "2–3 inches", "Light vehicle traffic"],
                ["Parking lot", "3–4 inches", "Standard commercial use"],
                ["Heavy traffic road", "4–6 inches", "Trucks and buses"],
                ["Overlay / resurface", "1.5–2 inches", "Over existing base"],
              ].map(([type, depth, notes]) => (
                <tr key={type} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{type}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{depth}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">Asphalt Cost per Ton</h2>
        <p>
          Hot mix asphalt typically costs <strong>$80–$150 per ton</strong> depending on region and oil prices.
          A standard 500 sq ft driveway at 3" depth requires about 9–10 tons, costing roughly $900–$1,500
          in materials alone. Installation labor typically adds $2–$5 per square foot.
        </p>
      </article>
    </div>
  );
}
