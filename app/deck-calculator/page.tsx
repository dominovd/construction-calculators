import type { Metadata } from "next";
import { DeckCalculator } from "./DeckCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";

export const metadata: Metadata = {
  title: "Free Deck Calculator — Boards, Linear Feet & Material Cost",
  description:
    "Calculate how many decking boards you need for any deck size. Supports 5/4×6, 2×6, 2×4, and 2×8 boards with customizable gap and waste factor. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/deck-calculator" },
  openGraph: {
    title: "Deck Calculator",
    description: "Calculate decking boards, linear feet, and material cost for any deck.",
    url: "https://easybuildcalc.com/deck-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Deck Boards",
  description: "Calculate how many decking boards you need for a deck.",
  step: [
    { "@type": "HowToStep", text: "Measure deck length and width in feet." },
    { "@type": "HowToStep", text: "Choose board width (e.g., 5/4×6 has 5.5\" actual width)." },
    { "@type": "HowToStep", text: "Add board gap (typically ¼ inch for drainage)." },
    { "@type": "HowToStep", text: "Divide deck width by (board width + gap) to get number of boards, then multiply by deck length for linear feet." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many deck boards do I need for a 12x16 deck?", acceptedAnswer: { "@type": "Answer", text: "A 12x16 deck is 192 sq ft. Using 5/4x6 boards (5.5 inch actual width) with 1/4-inch gaps, you need approximately 38 boards at 16 feet long, or 42 boards with 10% waste. The exact count depends on board length and run direction." } },
    { "@type": "Question", name: "What is the best wood for a deck?", acceptedAnswer: { "@type": "Answer", text: "Pressure-treated pine is the most popular choice for its affordability and durability ($2–$4/linear ft). Cedar and redwood are naturally rot-resistant and look beautiful ($4–$8/lf). Composite decking (Trex, TimberTech) costs more upfront ($6–$12/lf) but requires almost no maintenance." } },
    { "@type": "Question", name: "How wide should gaps be between deck boards?", acceptedAnswer: { "@type": "Answer", text: "Leave 1/4 to 1/8 inch between boards for drainage and expansion. Green or wet pressure-treated lumber will shrink as it dries, so butting boards tightly often results in proper gaps once dry. Use a 16d nail as a spacer for consistent gaps." } },
    { "@type": "Question", name: "What joist spacing do I need under decking?", acceptedAnswer: { "@type": "Answer", text: "Standard 5/4x6 decking spans 16 inches OC safely for straight installation. For diagonal decking (45 degrees), reduce joist spacing to 12 inches OC. Composite and PVC decking has its own span requirements — always check the manufacturer specs." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Deck Calculator", item: "https://easybuildcalc.com/deck-calculator" },
  ],
};

export default function DeckPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Deck Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Deck Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate decking boards, linear footage, and material cost for any deck size and board profile.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <DeckCalculator />
      <PriceDisclaimer className="mt-3" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Common Decking Board Sizes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Nominal</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Actual Width</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["5/4×6", "5.5\"", "Residential decks — most popular choice"],
                ["2×6",   "5.5\"", "Stronger span, better for wide joist spacing"],
                ["2×4",   "3.5\"", "Smaller decks, tighter look"],
                ["2×8",   "7.25\"", "Wide plank look, premium decks"],
              ].map(([nom, act, use]) => (
                <tr key={nom} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{nom}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{act}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Joist Spacing for Decking</h2>
        <p>
          Standard treated lumber decking (5/4×6 or 2×6) spans up to <strong>16 inches OC</strong> safely.
          For composite or PVC decking, check the manufacturer specs — many require 12-inch spacing,
          especially for diagonal installations. Always double-check joist span tables for your specific load.
          This free tool lets you plug in your board size and deck dimensions to get an instant board count.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Add 10–15% waste for cuts, especially around stairs and angles.
            Budget separately for joists, beams, posts, concrete footings, and hardware — typically
            2–3× the cost of decking boards alone.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many deck boards do I need for a 12×16 deck?", a: "A 12×16 deck is 192 sq ft. Using 5/4×6 boards (5.5 inch actual width) with ¼-inch gaps, you need approximately 38 boards at 16 feet long, or 42 boards with 10% waste. The exact count depends on board length and run direction." },
            { q: "What is the best wood for a deck?", a: "Pressure-treated pine is the most popular choice for its affordability and durability ($2–$4/linear ft). Cedar and redwood are naturally rot-resistant and look beautiful ($4–$8/lf). Composite decking (Trex, TimberTech) costs more upfront ($6–$12/lf) but requires almost no maintenance." },
            { q: "How wide should gaps be between deck boards?", a: "Leave ¼ to ⅛ inch between boards for drainage and expansion. Green or wet pressure-treated lumber will shrink as it dries, so butting boards tightly often results in proper gaps once dry. Use a 16d nail as a spacer for consistent gaps." },
            { q: "What joist spacing do I need under decking?", a: "Standard 5/4×6 decking spans 16 inches OC safely for straight installation. For diagonal decking (45°), reduce joist spacing to 12 inches OC. Composite and PVC decking has its own span requirements — always check the manufacturer specs." },
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
