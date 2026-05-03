import type { Metadata } from "next";
import { TileCalculator } from "./TileCalculator";

export const metadata: Metadata = {
  title: "Free Tile Calculator — How Many Tiles Do I Need?",
  description:
    "Calculate the number of tiles and boxes needed for any floor or wall. Enter room dimensions, tile size, and waste factor. Supports 12×12, 18×18, 24×24, and more. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/tile-calculator" },
  openGraph: {
    title: "Tile Calculator — Tiles & Boxes for Any Room",
    description: "Calculate tiles and boxes needed by room size and tile dimensions.",
    url: "https://easybuildcalc.com/tile-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Tile for a Floor or Wall",
  description: "Calculate the number of tiles needed for any floor or wall project.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the room in feet." },
    { "@type": "HowToStep", text: "Multiply length × width to get the total area in square feet." },
    { "@type": "HowToStep", text: "Add a waste factor of 10% for straight layouts, 15% for diagonal patterns." },
    { "@type": "HowToStep", text: "Divide the total area by the area of one tile to get the tile count." },
    { "@type": "HowToStep", text: "Divide by tiles per box and round up to find the number of boxes." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many tiles do I need for a 10×10 room?", acceptedAnswer: { "@type": "Answer", text: "A 10×10 room is 100 sq ft. With 12×12 tiles (1 sq ft each) and 10% waste you need 110 tiles, or about 14 boxes of 8. Use our free tile calculator above for any room size and tile format." } },
    { "@type": "Question", name: "How much waste should I add for tile?", acceptedAnswer: { "@type": "Answer", text: "Add 10% waste for straight-lay patterns, 15% for diagonal or herringbone, and 20% for complex patterns or rooms with many cuts. Always buy at least one extra box to keep for future repairs." } },
    { "@type": "Question", name: "How do I calculate tiles for a bathroom floor?", acceptedAnswer: { "@type": "Answer", text: "Measure the bathroom length and width in feet, multiply to get square footage, add 10–15% for waste, then divide by the area of one tile. Our calculator handles the math automatically." } },
    { "@type": "Question", name: "How many square feet does a box of tile cover?", acceptedAnswer: { "@type": "Answer", text: "It depends on tile size and quantity per box. A box of 6 tiles at 12×12 inches covers 6 sq ft. A box of 4 tiles at 18×18 covers 4.5 sq ft. Always check the box label for exact coverage." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Tile Calculator", item: "https://easybuildcalc.com/tile-calculator" },
  ],
};

export default function TilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Tile Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Tile Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate exactly how many tiles and boxes you need for any floor or wall. Enter your room size, pick your tile format, and get an instant count with waste included.
      </p>

      <TileCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">How Much Tile Do I Need?</h2>
        <p>
          The basic formula is: <strong>Area (sq ft) × waste factor ÷ tile area = tiles needed</strong>.
          For a 10×12 room with 12×12-inch tiles and 10% waste:
          120 × 1.10 ÷ 1.0 = <strong>132 tiles</strong>. Divide by tiles per box and always round up.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Waste Factor by Layout Pattern</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Pattern</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Recommended Waste</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Straight / grid",    "10%", "Easiest layout, fewest cuts"],
                ["Offset / brick",     "10%", "Half-tile offsets on each row"],
                ["Diagonal (45°)",     "15%", "Corner cuts increase waste significantly"],
                ["Herringbone",        "15%", "Many 45° cuts at joints"],
                ["Complex / mosaic",   "20%", "Multiple cuts, borders, inlays"],
                ["Irregular room",     "+5%", "Add extra for alcoves and bump-outs"],
              ].map(([p, w, n]) => (
                <tr key={p} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{w}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
          <strong className="text-blue-900">Pro tip:</strong>{" "}
          <span className="text-blue-700">
            Always buy one extra box beyond your calculated amount — tile dye lots vary between production runs.
            If you need to replace a broken tile years later, a tile from a different lot may not match exactly.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many tiles do I need for a 10×10 room?", a: "A 10×10 room is 100 sq ft. Using 12×12 tiles with 10% waste, you need 110 tiles — about 14 boxes of 8 tiles each. For 18×18 tiles, you need about 49 tiles (each covers 2.25 sq ft), or around 7 boxes of 7." },
            { q: "How much waste should I add for tile?", a: "Add 10% for straight-lay patterns, 15% for diagonal or herringbone layouts, and 20% for complex patterns or rooms with lots of cuts. For rooms with multiple angles or many alcoves, add an extra 5%." },
            { q: "How do I calculate tiles for a bathroom floor?", a: "Measure length × width in feet to get square footage. Add 10–15% for waste, then divide by the area of one tile. Our calculator handles all the math. For an average 5×8 bathroom, expect about 45–50 tiles at 12×12." },
            { q: "How many square feet does a box of tile cover?", a: "Coverage depends on tile size and count per box. A box of 6 tiles at 12×12 covers 6 sq ft. A box of 4 tiles at 18×18 covers 4.5 sq ft. A box of 3 tiles at 24×24 covers 12 sq ft. Always check the box label." },
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
