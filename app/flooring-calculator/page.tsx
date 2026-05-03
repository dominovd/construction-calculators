import type { Metadata } from "next";
import { FlooringCalculator } from "./FlooringCalculator";

export const metadata: Metadata = {
  title: "Free Flooring Calculator — Square Feet, Boxes & Cost",
  description:
    "Calculate how much flooring you need for any room. Supports hardwood, laminate, vinyl plank, tile, and carpet. Includes waste factor and cost estimate. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/flooring-calculator" },
  openGraph: {
    title: "Flooring Calculator",
    description: "Calculate flooring square footage, boxes needed, and material cost.",
    url: "https://easybuildcalc.com/flooring-calculator",
  },
};

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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much flooring do I need for a 12×12 room?", acceptedAnswer: { "@type": "Answer", text: "A 12×12 room has 144 sq ft of floor area. Add 10% waste for a straight installation, so order approximately 158–160 sq ft. For diagonal or herringbone patterns, add 15–20% instead." } },
    { "@type": "Question", name: "How do I calculate flooring for multiple rooms?", acceptedAnswer: { "@type": "Answer", text: "Calculate each room separately (length × width), then add all areas together. Add your waste percentage to the total, not to each room individually, to minimize over-ordering." } },
    { "@type": "Question", name: "What is the typical waste factor for flooring?", acceptedAnswer: { "@type": "Answer", text: "For straight installations parallel to walls, use 7–10%. For diagonal (45°) installations, use 12–15%. For herringbone or complex patterns, use 15–20%. Irregular room shapes add another 5%." } },
    { "@type": "Question", name: "How many boxes of flooring do I need?", acceptedAnswer: { "@type": "Answer", text: "Divide your total square footage (including waste) by the coverage per box shown on the product packaging. Most laminate and vinyl plank boxes cover 20–25 sq ft; hardwood typically 15–20 sq ft." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Flooring Calculator", item: "https://easybuildcalc.com/flooring-calculator" },
  ],
};

export default function FlooringPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Free Flooring Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate flooring for any room — hardwood, laminate, vinyl plank, tile, or carpet.
      </p>

      <FlooringCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">How to Calculate Flooring</h2>
        <p>
          Multiply your room&apos;s length by its width to get square footage. Always add a
          <strong> waste factor</strong> before ordering. This free tool calculates square footage,
          waste-adjusted totals, and box counts — enter your room dimensions and price per box to get started:
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

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How much flooring do I need for a 12×12 room?", a: "A 12×12 room has 144 sq ft of floor area. Add 10% waste for a straight installation, so order approximately 158–160 sq ft. For diagonal or herringbone patterns, add 15–20% instead." },
            { q: "How do I calculate flooring for multiple rooms?", a: "Calculate each room separately (length × width), then add all areas together. Add your waste percentage to the total, not to each room individually, to minimize over-ordering." },
            { q: "What is the typical waste factor for flooring?", a: "For straight installations parallel to walls, use 7–10%. For diagonal (45°) installations, use 12–15%. For herringbone or complex patterns, use 15–20%. Irregular room shapes add another 5%." },
            { q: "How many boxes of flooring do I need?", a: "Divide your total square footage (including waste) by the coverage per box shown on the product packaging. Most laminate and vinyl plank boxes cover 20–25 sq ft; hardwood typically 15–20 sq ft." },
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
