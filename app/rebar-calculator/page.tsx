import type { Metadata } from "next";
import { RebarCalculator } from "./RebarCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";

export const metadata: Metadata = {
  title: "Free Rebar Calculator — Quantity, Spacing & Weight for Concrete Slabs",
  description:
    "Calculate rebar quantity, linear feet, and weight for concrete slabs and footings. Enter slab dimensions and spacing to get exact rebar counts. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/rebar-calculator" },
  openGraph: {
    title: "Rebar Calculator",
    description: "Calculate rebar quantity and weight for concrete slabs and footings.",
    url: "https://easybuildcalc.com/rebar-calculator",
  },
};

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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What size rebar should I use for a concrete driveway?", acceptedAnswer: { "@type": "Answer", text: "#4 rebar (½ inch diameter) at 12-inch spacing is standard for residential driveways and patios. For heavier use or expansive soils, use #4 at 12-inch OC both ways. Always check local building codes." } },
    { "@type": "Question", name: "Do I need rebar in a 4-inch concrete slab?", acceptedAnswer: { "@type": "Answer", text: "Rebar is recommended for most slabs — driveways, garage floors, and patios. While a plain 4-inch slab may technically hold up, rebar significantly reduces cracking from settling, temperature changes, and vehicle loads." } },
    { "@type": "Question", name: "How far apart should rebar be spaced in a slab?", acceptedAnswer: { "@type": "Answer", text: "Standard spacing is 12 inches on center (OC) for residential slabs. High-load applications like garage floors may use 12-inch spacing with heavier #5 rebar. Residential footings typically use 2 bars horizontally, centered in the footing." } },
    { "@type": "Question", name: "Should I use rebar or wire mesh in a concrete slab?", acceptedAnswer: { "@type": "Answer", text: "Rebar provides superior crack control and tensile strength, especially for slabs that may be subject to settlement or heavy loads. Wire mesh (welded wire fabric) is cheaper and faster to install but provides less structural reinforcement. Many contractors use a combination." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Rebar Calculator", item: "https://easybuildcalc.com/rebar-calculator" },
  ],
};

export default function RebarPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Free Rebar Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate rebar quantity, linear footage, and weight for concrete slabs and footings.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <RebarCalculator />
      <PriceDisclaimer className="mt-3" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How to Calculate Rebar</h2>
        <p>
          For a concrete slab with a grid pattern, rebar runs in two perpendicular directions.
          The number of bars in each direction equals the slab dimension divided by spacing, plus one.
          This free tool handles all the math — just enter your slab dimensions and spacing to get
          bar counts, linear footage, and total weight.
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

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What size rebar should I use for a concrete driveway?", a: "#4 rebar (½ inch diameter) at 12-inch spacing is standard for residential driveways and patios. For heavier use or expansive soils, use #4 at 12-inch OC both ways. Always check local building codes." },
            { q: "Do I need rebar in a 4-inch concrete slab?", a: "Rebar is recommended for most slabs — driveways, garage floors, and patios. While a plain 4-inch slab may technically hold up, rebar significantly reduces cracking from settling, temperature changes, and vehicle loads." },
            { q: "How far apart should rebar be spaced in a slab?", a: "Standard spacing is 12 inches on center (OC) for residential slabs. High-load applications like garage floors may use 12-inch spacing with heavier #5 rebar. Residential footings typically use 2 bars horizontally, centered in the footing." },
            { q: "Should I use rebar or wire mesh in a concrete slab?", a: "Rebar provides superior crack control and tensile strength, especially for slabs that may be subject to settlement or heavy loads. Wire mesh (welded wire fabric) is cheaper and faster to install but provides less structural reinforcement. Many contractors use a combination." },
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
