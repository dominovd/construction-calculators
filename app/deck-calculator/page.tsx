import type { Metadata } from "next";
import { DeckCalculator } from "./DeckCalculator";

export const metadata: Metadata = {
  title: "Deck Calculator — Boards, Linear Feet & Material Cost",
  description:
    "Calculate how many decking boards you need for any deck size. Supports 5/4×6, 2×6, 2×4, and 2×8 boards with customizable gap and waste factor.",
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

export default function DeckPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Deck Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Deck Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate decking boards, linear footage, and material cost for any deck size and board profile.
      </p>

      <DeckCalculator />

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
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Add 10–15% waste for cuts, especially around stairs and angles.
            Budget separately for joists, beams, posts, concrete footings, and hardware — typically
            2–3× the cost of decking boards alone.
          </span>
        </div>
      </article>
    </div>
  );
}
