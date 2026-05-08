import type { Metadata } from "next";
import { ConcreteMixCalculator } from "./ConcreteMixCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Concrete Mix Calculator — Cement, Sand & Gravel Ratios",
  description:
    "Calculate how much cement, sand, and gravel you need for any concrete mix ratio. Supports 1:2:3, 1:1.5:3, and custom mix designs for hand mixing. Free online tool.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best concrete mix ratio for a driveway?", acceptedAnswer: { "@type": "Answer", text: "A 1:2:3 mix (cement:sand:gravel) produces approximately 3,000 psi concrete, suitable for driveways, sidewalks, and patios. For structural elements, use a stronger 1:1.5:3 mix (~4,000 psi)." } },
    { "@type": "Question", name: "How many bags of cement per yard of concrete?", acceptedAnswer: { "@type": "Answer", text: "For a standard 1:2:3 mix, you need approximately 5.5–6 bags of 94-lb Portland cement per cubic yard of concrete." } },
    { "@type": "Question", name: "What is the water-cement ratio?", acceptedAnswer: { "@type": "Answer", text: "The water-cement ratio (W/C) is the weight of water divided by the weight of cement. Lower ratios (0.40–0.45) produce stronger concrete. Never add extra water on site — it reduces strength." } },
    { "@type": "Question", name: "Can I mix concrete without a mixer?", acceptedAnswer: { "@type": "Answer", text: "Yes, but it's labor-intensive. For volumes under 1/4 cubic yard, hand mixing in a wheelbarrow works. For larger volumes, rent a drum mixer — mixing by hand becomes impractical above 10–15 bags." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Concrete Mix Calculator", item: "https://easybuildcalc.com/concrete-mix-calculator" },
  ],
};

export default function ConcreteMixPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Concrete Mix Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Concrete Mix Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate exact quantities of cement, sand, and gravel for hand-mixed concrete by volume and mix ratio.
      </p>

      <ConcreteMixCalculator />
      <RelatedCalculators currentSlug="concrete-mix-calculator" />

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
            is more consistent, faster, and often cheaper when you factor in labor. Use our free
            calculator above to compare mix ratios before you buy materials.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What is the best concrete mix ratio for a driveway?", a: "A 1:2:3 mix (cement:sand:gravel) produces approximately 3,000 psi concrete, which is suitable for driveways, sidewalks, and patios. For structural elements like beams and columns, use a stronger 1:1.5:3 mix (~4,000 psi)." },
            { q: "How many bags of cement per yard of concrete?", a: "For a standard 1:2:3 mix, you need approximately 5.5–6 bags of 94-lb Portland cement per cubic yard of concrete. This assumes a water-cement ratio of 0.50 and typical aggregate gradation." },
            { q: "What is the water-cement ratio?", a: "The water-cement ratio (W/C) is the weight of water divided by the weight of cement. Lower ratios (0.40–0.45) produce stronger, more durable concrete. Higher ratios (0.55+) make mixing easier but reduce strength. Never add extra water on site to make concrete easier to pour." },
            { q: "Can I mix concrete without a mixer?", a: "Yes, but it's labor-intensive. For volumes under ¼ cubic yard, hand mixing in a wheelbarrow or tub works. Use a margin trowel or hoe. For larger volumes, rent a drum mixer — mixing by hand becomes impractical above 10–15 bags." },
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
