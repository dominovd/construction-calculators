import type { Metadata } from "next";
import { PaverCalculator } from "./PaverCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Paver Calculator — How Many Pavers Do I Need?",
  description:
    "Calculate the number of pavers for a patio, driveway, or walkway. Supports 4×8, 6×6, 12×12, and more. Includes base gravel and bedding sand estimates. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/paver-calculator" },
  openGraph: {
    title: "Paver Calculator — Pavers, Sand & Gravel for Any Project",
    description: "Calculate paver quantity and base materials for patios and driveways.",
    url: "https://easybuildcalc.com/paver-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Pavers for a Patio or Driveway",
  description: "Calculate how many pavers you need for any outdoor paving project.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Multiply to get total square footage." },
    { "@type": "HowToStep", text: "Add 10% waste for straight patterns, 15% for diagonal." },
    { "@type": "HowToStep", text: "Divide by the area of one paver (in sq ft) and round up." },
    { "@type": "HowToStep", text: "Calculate base materials: 1 inch bedding sand + 4 inch gravel base." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many pavers do I need for a 10×10 patio?", acceptedAnswer: { "@type": "Answer", text: "A 10×10 patio is 100 sq ft. Using 4×8 inch pavers (each 0.22 sq ft) with 10% waste, you need about 495 pavers. With 12×12 inch pavers (1 sq ft each), you need about 110 pavers. Use our free calculator above for exact counts." } },
    { "@type": "Question", name: "How deep should the base be for pavers?", acceptedAnswer: { "@type": "Answer", text: "For foot-traffic patios, use 4 inches of compacted gravel base plus 1 inch of bedding sand. For driveways that see vehicle traffic, increase the gravel base to 6–8 inches." } },
    { "@type": "Question", name: "How many pavers are in a pallet?", acceptedAnswer: { "@type": "Answer", text: "Pallet quantities vary by paver size. A pallet of 4×8 brick pavers typically contains 480–500 pavers covering about 105–110 sq ft. A pallet of 12×12 pavers usually has 100–120 pieces covering 100–120 sq ft. Check with your supplier for exact counts." } },
    { "@type": "Question", name: "How much sand do I need for paver installation?", acceptedAnswer: { "@type": "Answer", text: "Plan for about 1 inch of bedding sand beneath the pavers. For 100 sq ft, that's roughly 0.31 cubic yards or about 0.4 tons of coarse sand. Our calculator estimates this automatically." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Paver Calculator", item: "https://easybuildcalc.com/paver-calculator" },
  ],
};

export default function PaverPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Paver Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Paver Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate how many pavers you need for a patio, walkway, or driveway — including base sand and gravel estimates. Works with any paver size.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <PaverCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="paver-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Paver Installation Layers</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Layer</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Depth — Patio</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Depth — Driveway</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Compacted gravel base", "4 inches", "6–8 inches"],
                ["Bedding sand",          "1 inch",   "1 inch"],
                ["Pavers",               "2.375 in (std brick)", "2.375–3 in (heavy-duty)"],
                ["Polymeric joint sand",  "fills gaps", "fills gaps"],
              ].map(([l, p, d]) => (
                <tr key={l} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{l}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Use polymeric sand (not regular sand) to fill joints — it hardens when wet and prevents ants,
            weeds, and joint washout. One 50 lb bag covers approximately 25–40 sq ft of 4×8 brick pavers.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many pavers do I need for a 10×10 patio?", a: "A 10×10 patio is 100 sq ft. Using 4×8 brick pavers (0.222 sq ft each) with 10% waste, you need about 495 pavers. With 12×12 pavers (1 sq ft each), you need about 110 pavers. Our calculator gives you exact counts for any size." },
            { q: "How deep should the base be for pavers?", a: "For pedestrian patios, use 4 inches of compacted crushed gravel plus 1 inch of coarse bedding sand. For driveways that see vehicles, increase the gravel base to 6–8 inches to support the added weight." },
            { q: "How many pavers are on a pallet?", a: "Pallet counts vary by manufacturer and paver size. A standard pallet of 4×8 brick pavers typically covers 100–110 sq ft. A pallet of 12×12 pavers usually covers 100–120 sq ft. Always confirm with your local supplier." },
            { q: "How much sand do I need under pavers?", a: "Allow 1 inch of coarse bedding sand beneath the pavers. For 100 sq ft, you need about 0.31 cubic yards or 0.4 tons of concrete sand. Use coarse sand — play sand or fine sand will shift under traffic." },
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
