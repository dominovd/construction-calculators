import type { Metadata } from "next";
import { SandCalculator } from "./SandCalculator";

export const metadata: Metadata = {
  title: "Free Sand Calculator — Cubic Yards, Tons & Bags",
  description:
    "Calculate how much sand, gravel, or topsoil you need by area and depth. Get cubic yards, tons, and number of 50-lb bags instantly. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/sand-calculator" },
  openGraph: {
    title: "Sand Calculator",
    description: "Calculate sand, gravel, or topsoil quantity in cubic yards, tons, and bags.",
    url: "https://easybuildcalc.com/sand-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Sand Quantity",
  description: "Calculate how much sand or gravel you need for any project.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Decide the depth needed in inches (2–4 inches for most projects)." },
    { "@type": "HowToStep", text: "Multiply length × width × depth to get cubic feet, then divide by 27 for cubic yards." },
    { "@type": "HowToStep", text: "Multiply cubic yards by material density to get tons." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much sand do I need under pavers?", acceptedAnswer: { "@type": "Answer", text: "For a paver patio or walkway, use 1 inch of bedding sand (coarse, concrete sand) under the pavers. For a 200 sq ft patio at 1-inch depth, you need about 0.62 cubic yards or roughly 0.84 tons of sand." } },
    { "@type": "Question", name: "How many bags of sand per square foot?", acceptedAnswer: { "@type": "Answer", text: "For a 1-inch sand layer under pavers: one 50-lb bag covers about 6 sq ft. For a 2-inch layer, one bag covers 3 sq ft. At 3 inches, one 50-lb bag covers only about 2 sq ft." } },
    { "@type": "Question", name: "What type of sand is used for paver base?", acceptedAnswer: { "@type": "Answer", text: "Use coarse concrete sand (also called sharp sand or builder's sand) for paver bedding — not play sand or mason sand. Concrete sand drains well and resists shifting. For polymeric sand between pavers, use special polymeric jointing sand." } },
    { "@type": "Question", name: "How much sand do I need for a sandbox?", acceptedAnswer: { "@type": "Answer", text: "A typical backyard sandbox (4 ft × 6 ft × 8 inches deep) needs about 1.33 cubic yards or approximately 18 cubic feet of sand. That's about 9 bags of 50-lb play sand. Use washed play sand — not construction sand." } },
  ],
};

export default function SandPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Free Sand Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate cubic yards, tons, and bags of sand, gravel, topsoil, or mulch for any area.
      </p>

      <SandCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">Sand Calculation Formula</h2>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Cubic Feet = Length × Width × (Depth ÷ 12){"\n"}
          Cubic Yards = Cubic Feet ÷ 27{"\n"}
          Tons = Cubic Yards × Density (sand ≈ 1.35 t/yd³)
        </pre>

        <h2 className="text-lg font-semibold text-gray-900">Material Densities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Material</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Density (tons/yd³)</th>
                <th className="border border-gray-200 px-3 py-2 text-left">lbs per cubic foot</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Dry Sand", "1.35", "~100"],
                ["Gravel", "1.50", "~110"],
                ["Topsoil", "1.10", "~85"],
                ["Mulch", "0.25", "~20"],
                ["Pea Gravel", "1.47", "~108"],
              ].map(([mat, d, lbs]) => (
                <tr key={mat} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{mat}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{lbs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">Typical Depths by Project</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Project</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Recommended Depth</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Paver base / patio sand", "1 inch (screeding layer)"],
                ["Sandbox", "6–8 inches"],
                ["Playground base", "9–12 inches"],
                ["Garden bed topsoil", "6–8 inches"],
                ["Lawn topdressing", "¼–½ inch"],
              ].map(([proj, depth]) => (
                <tr key={proj} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{proj}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How much sand do I need under pavers?", a: "For a paver patio or walkway, use 1 inch of bedding sand (coarse, concrete sand) under the pavers. For a 200 sq ft patio at 1-inch depth, you need about 0.62 cubic yards or roughly 0.84 tons of sand." },
            { q: "How many bags of sand per square foot?", a: "For a 1-inch sand layer under pavers: one 50-lb bag covers about 6 sq ft. For a 2-inch layer, one bag covers 3 sq ft. At 3 inches, one 50-lb bag covers only about 2 sq ft." },
            { q: "What type of sand is used for paver base?", a: "Use coarse concrete sand (also called sharp sand or builder's sand) for paver bedding — not play sand or mason sand. Concrete sand drains well and resists shifting. For polymeric sand between pavers, use special polymeric jointing sand." },
            { q: "How much sand do I need for a sandbox?", a: "A typical backyard sandbox (4 ft × 6 ft × 8 inches deep) needs about 1.33 cubic yards or approximately 18 cubic feet of sand. That's about 9 bags of 50-lb play sand. Use washed play sand — not construction sand." },
          ].map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold text-gray-800 mb-1">{q}</h3>
              <p className="text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
