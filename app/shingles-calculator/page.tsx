import type { Metadata } from "next";
import { ShinglesCalculator } from "./ShinglesCalculator";

export const metadata: Metadata = {
  title: "Shingles Calculator — Squares, Bundles & Cost Estimator",
  description:
    "Calculate how many roofing shingles you need for any roof. Enter building footprint and pitch to get squares, bundle count, and material cost.",
  alternates: { canonical: "https://easybuildcalc.com/shingles-calculator" },
  openGraph: {
    title: "Shingles Calculator",
    description: "Calculate roofing squares, bundles, and cost for any roof.",
    url: "https://easybuildcalc.com/shingles-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Roofing Shingles",
  description: "Calculate the number of shingle squares and bundles needed for a roof.",
  step: [
    { "@type": "HowToStep", text: "Measure the building footprint (length × width in feet)." },
    { "@type": "HowToStep", text: "Multiply by the pitch factor for your roof slope to get actual roof area." },
    { "@type": "HowToStep", text: "Add 10–15% waste for hips, valleys, and starter course." },
    { "@type": "HowToStep", text: "Divide by 100 to get squares; multiply by 3 to get bundles." },
  ],
};

export default function ShinglesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Shingles Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shingles Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate roofing squares, bundle count, and material cost for any roof pitch and footprint.
      </p>

      <ShinglesCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">What is a Roofing Square?</h2>
        <p>
          A <strong>roofing square</strong> equals 100 square feet of roof surface. It&apos;s the
          standard unit roofers use when ordering and pricing shingles. Most architectural shingles
          come in <strong>3 bundles per square</strong>, though heavier products may need 4 bundles.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Pitch Factor Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Pitch</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Slope Factor</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Classification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2:12", "1.02", "Low slope"],
                ["4:12", "1.05", "Conventional"],
                ["6:12", "1.12", "Moderate"],
                ["8:12", "1.20", "Steep"],
                ["12:12", "1.41", "Very steep"],
              ].map(([pitch, factor, cls]) => (
                <tr key={pitch} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{pitch}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{factor}×</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always order 1 extra square for waste, cuts, and future repairs.
            Also budget for underlayment (1 roll per 4 squares), drip edge, and ridge cap shingles.
          </span>
        </div>
      </article>
    </div>
  );
}
