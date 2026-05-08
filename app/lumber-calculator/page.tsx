import type { Metadata } from "next";
import { LumberCalculator } from "./LumberCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";

export const metadata: Metadata = {
  title: "Free Lumber Calculator — Board Feet & Cost for Any Size",
  description:
    "Calculate board feet and total cost for any lumber size and quantity. Supports 2×4, 2×6, 2×8, 2×10, 4×4, and custom dimensions. Perfect for framing and hardwood projects. Free online tool.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the actual size of a 2x4?", acceptedAnswer: { "@type": "Answer", text: "A 2×4 has actual dimensions of 1.5 inches × 3.5 inches. Lumber is sold by its nominal (pre-milling) size, but milling and drying reduce it. Always use actual dimensions when calculating board feet or planning cuts." } },
    { "@type": "Question", name: "How much does lumber cost per board foot?", acceptedAnswer: { "@type": "Answer", text: "Common softwood framing lumber (SPF 2×4) sells for $0.50–$0.80 per board foot at home centers. Hardwoods vary widely: poplar costs $3–$5/BF; oak is $5–$8/BF; walnut runs $10–$20/BF; figured maple or exotic species can exceed $30/BF." } },
    { "@type": "Question", name: "How do I calculate how much lumber I need?", acceptedAnswer: { "@type": "Answer", text: "For framing: calculate total linear feet needed for each member size, then convert to board count by dividing by your board length. For hardwood projects: calculate total board feet needed, add 15–20% waste, then divide by average BF per board in your lumber." } },
    { "@type": "Question", name: "What is green lumber vs. kiln-dried?", acceptedAnswer: { "@type": "Answer", text: "Green lumber is freshly cut and has high moisture content — it will shrink and warp as it dries. Kiln-dried (KD) lumber has been dried to 19% moisture or less and is more dimensionally stable. Use KD lumber for interior finish work; green or treated is fine for structural framing." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Lumber Calculator", item: "https://easybuildcalc.com/lumber-calculator" },
  ],
};

export default function LumberPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Lumber Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Lumber Cost Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate board feet and total material cost for any lumber size and quantity.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <LumberCalculator />
      <PriceDisclaimer className="mt-3" />

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
            For framing, 10% is usually sufficient. Use our free calculator above to
            get your board feet and total cost before heading to the lumber yard.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What is the actual size of a 2x4?", a: "A 2×4 has actual dimensions of 1.5 inches × 3.5 inches. Lumber is sold by its nominal (pre-milling) size, but milling and drying reduce it. Always use actual dimensions when calculating board feet or planning cuts." },
            { q: "How much does lumber cost per board foot?", a: "Common softwood framing lumber (SPF 2×4) sells for $0.50–$0.80 per board foot at home centers. Hardwoods vary widely: poplar costs $3–$5/BF; oak is $5–$8/BF; walnut runs $10–$20/BF; figured maple or exotic species can exceed $30/BF." },
            { q: "How do I calculate how much lumber I need?", a: "For framing: calculate total linear feet needed for each member size, then convert to board count by dividing by your board length. For hardwood projects: calculate total board feet needed, add 15–20% waste, then divide by average BF per board in your lumber." },
            { q: "What is green lumber vs. kiln-dried?", a: "Green lumber is freshly cut and has high moisture content — it will shrink and warp as it dries. Kiln-dried (KD) lumber has been dried to 19% moisture or less and is more dimensionally stable. Use KD lumber for interior finish work; green or treated is fine for structural framing." },
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
