import type { Metadata } from "next";
import { GravelCalculator } from "./GravelCalculator";

export const metadata: Metadata = {
  title: "Gravel Calculator — Cubic Yards & Tons for Driveways & Paths",
  description:
    "Calculate how many tons or cubic yards of gravel you need for driveways, paths, and landscaping. Supports crushed stone, pea gravel, river rock, and more.",
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

export default function GravelPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Gravel Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Gravel Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate cubic yards and tons of gravel, crushed stone, or rock for driveways, paths, and landscaping.
      </p>

      <GravelCalculator />

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
          </span>
        </div>
      </article>
    </div>
  );
}
