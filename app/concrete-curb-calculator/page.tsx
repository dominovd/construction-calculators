import type { Metadata } from "next";
import { ConcreteCurbCalculator } from "./ConcreteCurbCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Concrete Curb Calculator — Cubic Yards & Cost",
  description:
    "Calculate concrete volume in cubic yards for curbs, gutters, and barrier curbs. Supports standard, curb-and-gutter, and mountable profiles. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/concrete-curb-calculator" },
  openGraph: {
    title: "Concrete Curb Calculator — Cubic Yards & Cost",
    description: "Calculate concrete cubic yards for curbs and gutters by profile type.",
    url: "https://easybuildcalc.com/concrete-curb-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Concrete for a Curb",
  step: [
    { "@type": "HowToStep", text: "Select the curb profile type (standard, curb-and-gutter, mountable, etc.)." },
    { "@type": "HowToStep", text: "Measure the total linear footage of curb needed." },
    { "@type": "HowToStep", text: "Multiply cross-section area (sq ft) by length (ft) to get cubic feet." },
    { "@type": "HowToStep", text: "Divide by 27 to convert to cubic yards." },
    { "@type": "HowToStep", text: "Add 5–10% waste for curves and form adjustments." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much concrete do I need for a curb?", acceptedAnswer: { "@type": "Answer", text: "Multiply the curb cross-section area (in square feet) by the curb length (in feet) to get cubic feet, then divide by 27 for cubic yards. A standard 6×18 inch curb at 100 linear feet needs: (6×18/144) × 100 / 27 = 2.78 cubic yards." } },
    { "@type": "Question", name: "What is the standard concrete curb size?", acceptedAnswer: { "@type": "Answer", text: "The most common residential curb is 6 inches wide and 18 inches tall (6×18). Curb-and-gutter combines the curb with a 12–18 inch gutter pan, making it 6×24 or 6×30 total. Barrier curb is typically 8 inches wide for higher traffic resistance." } },
    { "@type": "Question", name: "How much does concrete curbing cost?", acceptedAnswer: { "@type": "Answer", text: "Poured-in-place concrete curbing costs $15–35 per linear foot installed, depending on profile and region. Landscape curbing (extruded) is cheaper at $5–12 per linear foot. Materials alone run $1–5 per linear foot; contractor labor makes up most of the cost." } },
    { "@type": "Question", name: "What PSI concrete is used for curbs?", acceptedAnswer: { "@type": "Answer", text: "Concrete curbs typically use 3,500–4,000 PSI mix. AASHTO and most municipal specs require 3,500 PSI minimum with air entrainment (5–7% air content) in freeze-thaw climates. Use 4,000 PSI in heavy-traffic or cold-weather applications." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Concrete Curb Calculator", item: "https://easybuildcalc.com/concrete-curb-calculator" },
  ],
};

export default function ConcreteCurbPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Concrete Curb Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Concrete Curb Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate concrete volume and cost for curbs and gutters. Choose from standard, curb-and-gutter, barrier, or mountable curb profiles.</p>
      <ConcreteCurbCalculator />
      <RelatedCalculators currentSlug="concrete-curb-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Curb Profile Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Profile</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Dimensions</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Yd³ per 100 ft</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Use Case</th>
            </tr></thead>
            <tbody>
              {[
                ["Standard Curb",    "6\"×18\"", "2.78", "Residential streets"],
                ["Curb & Gutter",    "6\"×24\"", "3.70", "Streets with drainage"],
                ["Barrier Curb",     "8\"×18\"", "3.70", "High-speed roads"],
                ["Mountable Curb",   "4\"×12\"", "1.23", "Driveways, parking lots"],
                ["Extruded Curb",    "6\"×12\"", "1.85", "Landscape edging"],
              ].map(([p, d, v, u]) => (
                <tr key={p} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{v}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
          <strong className="text-blue-900">Ready-mix vs. bags:</strong>{" "}
          <span className="text-blue-700">Ready-mix is almost always cheaper above 1 cubic yard (about 45 bags). For a 200-ft standard curb needing 5.6 yards, order ready-mix. Bags are only practical for small repairs under 20 linear feet.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How much concrete do I need for a curb?", a: "Formula: (width in × height in ÷ 144) × length ft ÷ 27 = cubic yards. A 6×18\" curb at 100 ft: (6×18÷144) × 100 ÷ 27 = 0.75 × 100 ÷ 27 = 2.78 yd³. Add 5% waste for curves and form adjustments." },
            { q: "What is the standard concrete curb size?", a: "Standard residential curbs are 6 inches wide × 18 inches tall. Curb-and-gutter adds a 12–18 inch horizontal gutter pan for drainage, totaling 6×24 to 6×30 inches. Municipal specs often specify 3,500 PSI concrete with air entrainment in freeze-thaw zones." },
            { q: "How much does concrete curbing cost?", a: "Contractor-installed poured concrete curbing runs $15–35 per linear foot. A 200-ft curb costs $3,000–7,000 installed. Decorative extruded landscape curbing (lawn edging) is $5–12 per linear foot. Material cost alone is $1–5 per linear foot — labor is the dominant cost." },
            { q: "What PSI concrete is used for curbs?", a: "Most highway and municipal specs require 3,500 PSI minimum. For cold-weather or high-traffic applications, use 4,000 PSI with 5–7% air entrainment to resist freeze-thaw spalling. Standard ready-mix ordered as '4000 PSI air-entrained' meets almost all curb applications." },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg">
              <summary className="font-semibold text-gray-800 px-4 py-3 cursor-pointer select-none list-none flex justify-between items-center hover:bg-gray-50 rounded-lg">
                <span>{q}</span><span className="text-gray-400 ml-2 flex-shrink-0 text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 border-t border-gray-100"><p className="text-gray-600 pt-3">{a}</p></div>
            </details>
          ))}
        </div>
      </article>
    </div>
  );
}
