import type { Metadata } from "next";
import { FlooringCalculator } from "./FlooringCalculator";
import { localeAlternates } from "@/lib/locale-meta";

export async function generateMetadata(): Promise<Metadata> {
  const { canonical, languages } = await localeAlternates("flooring-calculator");
  return {
    title: "Flooring Calculator — Square Feet, Boxes & Cost",
    description:
      "Calculate how much flooring you need for any room. Supports hardwood, laminate, vinyl plank, tile, and carpet. Includes waste factor and cost estimate.",
    alternates: { canonical, languages },
    openGraph: {
      title: "Flooring Calculator",
      description: "Calculate flooring square footage, boxes needed, and material cost.",
      url: canonical,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Flooring for a Room",
  description: "Calculate how many square feet and boxes of flooring you need.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of each room in feet." },
    { "@type": "HowToStep", text: "Multiply length × width to get square footage." },
    { "@type": "HowToStep", text: "Add 10% for diagonal cuts and waste (15% for diagonal installation)." },
    { "@type": "HowToStep", text: "Divide by the coverage per box to get number of boxes to order." },
  ],
};

export default function FlooringPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Flooring Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate flooring for any room — hardwood, laminate, vinyl plank, tile, or carpet.
      </p>

      <FlooringCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How to Calculate Flooring</h2>
        <p>
          Multiply your room&apos;s length by its width to get square footage. Always add a
          <strong> waste factor</strong> before ordering:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Installation Pattern</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Waste Factor</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Straight / parallel to walls", "7–10%"],
                ["Diagonal (45°)", "12–15%"],
                ["Herringbone pattern", "15–20%"],
                ["Irregular room shape", "+5% extra"],
              ].map(([pattern, waste]) => (
                <tr key={pattern} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{pattern}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{waste}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-semibold text-gray-900">Flooring Material Cost Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Material</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Material Cost / ft²</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Install Cost / ft²</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Hardwood", "$3–$12", "$3–$8"],
                ["Laminate", "$1–$5", "$2–$4"],
                ["Vinyl Plank (LVP)", "$2–$7", "$1–$3"],
                ["Ceramic Tile", "$1–$10", "$4–$10"],
                ["Carpet", "$2–$7", "$1–$3"],
              ].map(([mat, mc, ic]) => (
                <tr key={mat} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{mat}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{mc}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{ic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
