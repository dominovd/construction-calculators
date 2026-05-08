import type { Metadata } from "next";
import { GravelCalculator } from "./GravelCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Gravel Calculator — Cubic Yards & Tons for Driveways & Paths",
  description:
    "Calculate how many tons or cubic yards of gravel you need for driveways, paths, and landscaping. Supports crushed stone, pea gravel, river rock, and more. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/gravel-calculator" },
  openGraph: {
    title: "Gravel Calculator",
    description: "Calculate gravel cubic yards and tons for driveways and paths.",
    url: "https://easybuildcalc.com/gravel-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Gravel for a Driveway",
  description: "Calculate how many tons of gravel you need for a driveway or path.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the driveway in feet." },
    { "@type": "HowToStep", text: "Choose gravel depth: 4 inches for light traffic, 6 inches for vehicles." },
    { "@type": "HowToStep", text: "Calculate cubic yards: length × width × (depth ÷ 12) ÷ 27." },
    { "@type": "HowToStep", text: "Multiply by gravel density (≈ 1.4–1.5 tons/yd³) to get tons." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many tons of gravel do I need for a driveway?", acceptedAnswer: { "@type": "Answer", text: "A standard 2-car driveway (20 ft wide × 50 ft long) at 4-inch depth needs about 12.3 cubic yards or roughly 18 tons of gravel. Add 10% for compaction and settling." } },
    { "@type": "Question", name: "How deep should gravel be for a driveway?", acceptedAnswer: { "@type": "Answer", text: "For a new gravel driveway, use 4–6 inches of compacted base gravel topped with 2–4 inches of surface gravel. Total depth of 6–8 inches is standard for passenger vehicles." } },
    { "@type": "Question", name: "How much area does a ton of gravel cover?", acceptedAnswer: { "@type": "Answer", text: "One ton of gravel covers approximately 100 sq ft at 2 inches deep, 65 sq ft at 3 inches, or 50 sq ft at 4 inches deep. Coverage varies by stone type and density." } },
    { "@type": "Question", name: "What type of gravel is best for a driveway?", acceptedAnswer: { "@type": "Answer", text: "#57 crushed stone or #21A (crusher run) works best as a base layer. Top with pea gravel, crushed granite, or ⅜-inch crushed stone for a finished surface." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Gravel Calculator", item: "https://easybuildcalc.com/gravel-calculator" },
  ],
};

export default function GravelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Gravel Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Gravel Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate cubic yards and tons of gravel, crushed stone, or rock for driveways, paths, and landscaping.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <GravelCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="gravel-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Gravel Depth by Project</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Project</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Recommended Depth</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Gravel Type</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Driveway (base layer)",    "6–8 inches",  "#57 or crushed stone"],
                ["Driveway (top layer)",     "2–4 inches",  "Pea gravel or crushed granite"],
                ["Walkway / path",           "2–3 inches",  "Pea gravel or river rock"],
                ["Drainage / French drain",  "12+ inches",  "#57 stone or washed gravel"],
                ["Landscaping border",       "2–3 inches",  "River rock or decorative stone"],
                ["Playground",              "6–9 inches",  "Pea gravel (2–3\" size)"],
              ].map(([p, d, g]) => (
                <tr key={p} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{d}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{g}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">How Many Tons in a Yard of Gravel?</h2>
        <p>
          One cubic yard of typical crushed stone or gravel weighs approximately <strong>1.4–1.5 tons</strong>,
          depending on stone type and moisture. Landscaping suppliers price gravel by the ton for bulk
          delivery and by the bag for small quantities.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always add 10% for compaction — gravel settles 10–15% after installation.
            For driveways, install geotextile fabric underneath to prevent gravel from sinking into soil.
            Use our free calculator above to get exact tons and cubic yards before ordering.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many tons of gravel do I need for a driveway?", a: "A standard 2-car driveway (20 ft wide × 50 ft long) at 4-inch depth needs about 12.3 cubic yards or roughly 18 tons of gravel. Add 10% for compaction and settling. Use our calculator above for your exact dimensions." },
            { q: "How deep should gravel be for a driveway?", a: "For a new gravel driveway, use 4–6 inches of compacted base gravel (#21 or #57 stone) topped with 2–4 inches of pea gravel or crushed stone surface. Total depth of 6–8 inches is standard for passenger vehicles." },
            { q: "How much area does a ton of gravel cover?", a: "One ton of gravel covers approximately 100 sq ft at 2 inches deep, or 65 sq ft at 3 inches deep. At 4 inches deep, 1 ton covers about 50 sq ft. Coverage varies slightly by stone type and density." },
            { q: "What type of gravel is best for a driveway?", a: "#57 crushed stone or #21A (crusher run) works best as a base layer — it compacts well and provides a stable foundation. Top the base with pea gravel, crushed granite, or ⅜-inch crushed stone for a clean finished surface." },
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
