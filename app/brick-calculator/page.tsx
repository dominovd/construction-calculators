import type { Metadata } from "next";
import { BrickCalculator } from "./BrickCalculator";
import { localeAlternates } from "@/lib/locale-meta";

export async function generateMetadata(): Promise<Metadata> {
  const { canonical, languages } = await localeAlternates("brick-calculator");
  return {
    title: "Brick Calculator — Bricks & Mortar for Any Wall or Patio",
    description:
      "Calculate how many bricks and bags of mortar you need for walls, patios, and walkways. Supports standard, modular, queen, and paver brick sizes.",
    alternates: { canonical, languages },
    openGraph: {
      title: "Brick Calculator",
      description: "Calculate bricks and mortar for walls, patios, and walkways.",
      url: canonical,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Bricks for a Wall",
  description: "Calculate how many bricks and bags of mortar you need for any masonry project.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and height of the wall in feet." },
    { "@type": "HowToStep", text: "Select the brick type (standard is 7.5 bricks per square foot)." },
    { "@type": "HowToStep", text: "Multiply area by bricks per sq ft, then add 10% for waste." },
    { "@type": "HowToStep", text: "Calculate mortar: approximately 0.07 bags per square foot." },
  ],
};

export default function BrickPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Brick Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Estimate bricks and mortar needed for walls, patios, pathways, and garden beds.
      </p>

      <BrickCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How Many Bricks Per Square Foot?</h2>
        <p>
          Standard US bricks (3⅝" × 2¼" × 7⅝") with ⅜" mortar joints cover approximately
          <strong> 7.5 bricks per square foot</strong> in a single wythe (one brick thick) wall.
          Different sizes yield different coverage:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Brick Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Dimensions</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Per sq ft</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Standard", '3⅝" × 2¼" × 7⅝"', "7.5"],
                ["Modular", '3⅝" × 2¼" × 7⅝"', "6.75"],
                ["Queen", '3⅛" × 2¾" × 9⅝"', "5.76"],
                ["Paver (flat)", '4" × 8" × 2¼"', "4.5"],
              ].map(([type, dims, count]) => (
                <tr key={type} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{type}</td>
                  <td className="border border-gray-200 px-3 py-1.5 font-mono text-gray-500">{dims}</td>
                  <td className="border border-gray-200 px-3 py-1.5 font-semibold">{count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">Mortar Estimation</h2>
        <p>
          A 60-lb bag of mortar mix covers approximately <strong>12–15 square feet</strong> of single-wythe
          wall. Always add 10% extra for waste and thick spots. Pre-mixed mortar bags are easiest for
          smaller projects; bulk mortar is more economical for large walls.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700 text-xs">
            Always order 10% more bricks than calculated. Broken bricks, cuts around corners, and
            color matching from the same batch are common reasons for running short mid-project.
          </span>
        </div>
      </article>
    </div>
  );
}
