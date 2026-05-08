import type { Metadata } from "next";
import { BlockCalculator } from "./BlockCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Block Calculator — CMU Blocks, Bricks & Mortar",
  description:
    "Calculate how many concrete blocks or bricks you need for any wall. Includes mortar bag estimate and total cost. Supports CMU, half block, and brick sizes. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/block-calculator" },
  openGraph: {
    title: "Block Calculator — CMU Blocks, Bricks & Mortar",
    description: "Calculate concrete blocks, bricks, and mortar for any wall size.",
    url: "https://easybuildcalc.com/block-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Concrete Blocks for a Wall",
  step: [
    { "@type": "HowToStep", text: "Measure the wall length and height in feet." },
    { "@type": "HowToStep", text: "Multiply to get total wall area in square feet." },
    { "@type": "HowToStep", text: "Determine blocks per square foot based on block size plus mortar joint." },
    { "@type": "HowToStep", text: "Multiply area × blocks per sq ft, then add 5–10% for waste." },
    { "@type": "HowToStep", text: "Estimate mortar at 3 bags per 100 CMU blocks." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many CMU blocks do I need per square foot?", acceptedAnswer: { "@type": "Answer", text: "A standard 8×8×16 inch CMU block covers about 0.89 square feet of wall face (including mortar joints). That equals roughly 1.125 blocks per square foot. For a 200 sq ft wall, you need about 225 blocks plus 5–10% waste." } },
    { "@type": "Question", name: "How much mortar do I need for concrete blocks?", acceptedAnswer: { "@type": "Answer", text: "A standard rule of thumb is 3 bags of 80-lb mortar mix per 100 standard CMU blocks. For a 200-block wall, estimate 6 bags. Actual usage varies with joint thickness and block type." } },
    { "@type": "Question", name: "What is the standard size of a concrete block?", acceptedAnswer: { "@type": "Answer", text: "The most common CMU (concrete masonry unit) is 8 inches tall × 8 inches deep × 16 inches wide. With a 3/8-inch mortar joint, it covers an 8⅜\" × 16⅜\" area — about 0.89 sq ft per block." } },
    { "@type": "Question", name: "How much does a concrete block wall cost?", acceptedAnswer: { "@type": "Answer", text: "Standard CMU blocks cost $2–4 each. A 100 sq ft wall needs about 115 blocks plus mortar = $250–500 in materials. Professional installation adds $8–20 per sq ft in labor. Total installed cost is typically $15–30 per sq ft." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Block Calculator", item: "https://easybuildcalc.com/block-calculator" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Concrete Block Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/block-calculator",
};


export default function BlockPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Block Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Block Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate concrete blocks, bricks, and mortar bags for any wall. Supports CMU, half-block, and standard brick sizes.</p>
      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <BlockCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="block-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">CMU Block Coverage Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Block Type</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Size (W×H×L)</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Sq Ft / Block</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Blocks / 100 Sq Ft</th>
            </tr></thead>
            <tbody>
              {[
                ["Standard CMU",  "8″×8″×16″",   "0.89",  "113"],
                ["Half Block",    "8″×8″×8″",    "0.44",  "225"],
                ["4″ CMU",        "4″×8″×16″",   "0.89",  "113"],
                ["12″ CMU",       "12″×8″×16″",  "0.89",  "113"],
                ["Standard Brick","2¼″×3¾″×8″",  "0.13",  "785"],
              ].map(([type, size, sqft, per100]) => (
                <tr key={type} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{type}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{size}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{sqft}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{per100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Always add waste:</strong>{" "}
          <span className="text-amber-700">Order 5% extra for straight walls, 10% for walls with corners, openings, or cuts. CMU blocks can't be returned once cut. Having extra on hand prevents project delays.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many CMU blocks do I need per square foot?", a: "About 1.125 blocks per square foot for standard 8×8×16 CMU with 3/8\" mortar joints. Multiply your wall area (length × height) by 1.125, then add 5–10% for waste. Round up to the nearest full block." },
            { q: "How much mortar do I need for concrete blocks?", a: "Rule of thumb: 3 bags of 80-lb mortar per 100 standard CMU blocks. A 200 sq ft wall using standard CMU needs about 225 blocks and 7 mortar bags. Always round up — running short mid-wall delays the pour." },
            { q: "What is the standard size of a concrete block?", a: "Standard CMU is 8\"(H) × 8\"(D) × 16\"(L) nominal. Actual dimensions are 7⅝\"×7⅝\"×15⅝\" — the 3/8\" difference accounts for the mortar joint. Courses stack at 8 inches center-to-center vertically." },
            { q: "How much does a concrete block wall cost?", a: "CMU blocks run $2–4 each at most building supply stores. A 40-ft long, 4-ft tall wall (160 sq ft) needs about 180 blocks and 6 bags of mortar — roughly $400–800 in materials. Professional laying costs $8–20/sq ft in labor." },
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
