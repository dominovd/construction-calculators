import type { Metadata } from "next";
import { RebarCalculator } from "./RebarCalculator";
import { localeAlternates } from "@/lib/locale-meta";

export async function generateMetadata(): Promise<Metadata> {
  const { canonical, languages } = await localeAlternates("rebar-calculator");
  return {
    title: "Rebar Calculator — Quantity, Spacing & Weight for Concrete Slabs",
    description:
      "Calculate rebar quantity, linear feet, and weight for concrete slabs and footings. Enter slab dimensions and spacing to get exact rebar counts.",
    alternates: { canonical, languages },
    openGraph: {
      title: "Rebar Calculator",
      description: "Calculate rebar quantity and weight for concrete slabs and footings.",
      url: canonical,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Rebar for a Concrete Slab",
  description: "Calculate how many rebar bars you need for a concrete slab or footing.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the concrete slab in feet." },
    { "@type": "HowToStep", text: "Choose rebar spacing (typically 12 or 18 inches on center)." },
    { "@type": "HowToStep", text: "Divide each dimension by the spacing to get bar count per direction." },
    { "@type": "HowToStep", text: "Multiply bar count by slab dimension to get total linear feet." },
  ],
};

export default function RebarPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Rebar Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate rebar quantity, linear footage, and weight for concrete slabs and footings.
      </p>

      <RebarCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How to Calculate Rebar</h2>
        <p>
          For a concrete slab with a grid pattern, rebar runs in two perpendicular directions.
          The number of bars in each direction equals the slab dimension divided by spacing, plus one.
        </p>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Bars (direction 1) = ⌈Width ÷ Spacing⌉ + 1{"\n"}
          Bars (direction 2) = ⌈Length ÷ Spacing⌉ + 1{"\n"}
          Linear Feet = (Bars₁ × Length) + (Bars₂ × Width)
        </pre>

        <h2 className="text-lg font-semibold text-gray-900">Rebar Size & Weight Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Bar Size</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Diameter</th>
                <th className="border border-gray-200 px-3 py-2 text-left">lbs / ft</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["#3", "⅜\"", "0.376", "Residential footings, light slabs"],
                ["#4", "½\"", "0.668", "Standard slabs, driveways, patios"],
                ["#5", "⅝\"", "1.043", "Retaining walls, heavy slabs"],
                ["#6", "¾\"", "1.502", "Structural columns, heavy duty"],
              ].map(([size, dia, weight, use]) => (
                <tr key={size} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{size}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{dia}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{weight}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">Standard Rebar Spacing</h2>
        <p>
          Residential concrete driveways and patios typically use <strong>#4 rebar at 12" OC</strong>.
          Garage slabs use <strong>#4 at 18" OC</strong>. Always check local building codes — seismic
          zones and heavy loads require closer spacing or larger bars.
        </p>
      </article>
    </div>
  );
}
