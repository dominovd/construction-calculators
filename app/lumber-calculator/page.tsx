import type { Metadata } from "next";
import { LumberCalculator } from "./LumberCalculator";

export const metadata: Metadata = {
  title: "Lumber Calculator — Board Feet & Cost for Any Size",
  description:
    "Calculate board feet and total cost for any lumber size and quantity. Supports 2×4, 2×6, 2×8, 2×10, 4×4, and custom dimensions. Perfect for framing and hardwood projects.",
  alternates: { canonical: "https://easybuildcalc.com/lumber-calculator" },
  openGraph: {
    title: "Lumber Calculator",
    description: "Calculate lumber board feet and cost for framing and hardwood projects.",
    url: "https://easybuildcalc.com/lumber-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Lumber Cost",
  description: "Calculate board feet and total cost for any lumber size.",
  step: [
    { "@type": "HowToStep", text: "Choose lumber size (nominal or actual dimensions)." },
    { "@type": "HowToStep", text: "Enter board length in feet and quantity." },
    { "@type": "HowToStep", text: "Apply formula: Board Feet = (Thickness × Width × Length) ÷ 12." },
    { "@type": "HowToStep", text: "Multiply total board feet by price per board foot for total cost." },
  ],
};

export default function LumberPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Lumber Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Lumber Cost Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate board feet and total material cost for any lumber size and quantity.
      </p>

      <LumberCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Nominal vs. Actual Lumber Sizes</h2>
        <p>
          Lumber is sold by nominal size (e.g., 2×4) but the actual dimension is smaller due to
          milling and drying. Always use actual dimensions when calculating board feet.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Nominal</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Actual</th>
                <th className="border border-gray-200 px-3 py-2 text-left">BF per 8 ft board</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2×4",  "1.5″ × 3.5″",  "3.5"],
                ["2×6",  "1.5″ × 5.5″",  "5.5"],
                ["2×8",  "1.5″ × 7.25″", "7.25"],
                ["2×10", "1.5″ × 9.25″", "9.25"],
                ["2×12", "1.5″ × 11.25″","11.25"],
                ["4×4",  "3.5″ × 3.5″",  "8.17"],
              ].map(([nom, act, bf]) => (
                <tr key={nom} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{nom}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{act}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{bf} BF</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Framing Lumber vs. Hardwood Pricing</h2>
        <p>
          <strong>Framing lumber</strong> (SPF, hem-fir, Douglas fir) is typically priced by the
          linear foot or per board at home centers. <strong>Hardwood</strong> (oak, maple, walnut,
          cherry) is priced by the board foot and sold at specialty lumber yards, often in random
          widths and lengths.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Add 15–20% waste for hardwood projects (cuts, defects, grain matching).
            For framing, 10% is usually sufficient.
          </span>
        </div>
      </article>
    </div>
  );
}
