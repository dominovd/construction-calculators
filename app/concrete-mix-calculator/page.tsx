import type { Metadata } from "next";
import { ConcreteMixCalculator } from "./ConcreteMixCalculator";

export const metadata: Metadata = {
  title: "Concrete Mix Calculator — Cement, Sand & Gravel Ratios",
  description:
    "Calculate how much cement, sand, and gravel you need for any concrete mix ratio. Supports 1:2:3, 1:1.5:3, and custom mix designs for hand mixing.",
  alternates: { canonical: "https://easybuildcalc.com/concrete-mix-calculator" },
  openGraph: {
    title: "Concrete Mix Calculator",
    description: "Calculate cement, sand, and gravel quantities for any mix ratio.",
    url: "https://easybuildcalc.com/concrete-mix-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Concrete Mix Proportions",
  description: "Calculate how much cement, sand, and gravel to mix for a given volume.",
  step: [
    { "@type": "HowToStep", text: "Choose a mix ratio such as 1:2:3 (cement:sand:gravel)." },
    { "@type": "HowToStep", text: "Calculate total parts (1+2+3 = 6)." },
    { "@type": "HowToStep", text: "Multiply target wet volume by 1.54 to get dry ingredient volume." },
    { "@type": "HowToStep", text: "Divide dry volume by total parts, then multiply by each ingredient's part count." },
  ],
};

export default function ConcreteMixPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Concrete Mix Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Concrete Mix Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate exact quantities of cement, sand, and gravel for hand-mixed concrete by volume and mix ratio.
      </p>

      <ConcreteMixCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Common Concrete Mix Ratios</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Mix Ratio</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Strength</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1:1.5:3", "~4000 psi", "Structural slabs, beams, columns"],
                ["1:2:3",   "~3000 psi", "General purpose — driveways, footings"],
                ["1:2:4",   "~2500 psi", "Patios, sidewalks, non-structural"],
                ["1:3:6",   "~1500 psi", "Mass concrete, fill, lean mix"],
              ].map(([r, s, u]) => (
                <tr key={r} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{r}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{s}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Water-Cement Ratio</h2>
        <p>
          The water-cement ratio (W/C) determines strength and workability. Use <strong>0.45–0.55</strong>
          (about 4–5 gallons per 94-lb bag). More water makes mixing easier but weakens the concrete —
          never add water to increase slump on a job site without adjusting the mix design.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Hand mixing is practical for small jobs under 0.5 yd³. For anything larger, ready-mix
            is more consistent, faster, and often cheaper when you factor in labor.
          </span>
        </div>
      </article>
    </div>
  );
}
