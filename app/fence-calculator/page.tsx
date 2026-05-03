import type { Metadata } from "next";
import { FenceCalculator } from "./FenceCalculator";

export const metadata: Metadata = {
  title: "Fence Calculator — Posts, Panels & Cost Estimator",
  description:
    "Calculate how many fence posts and panels you need for any yard. Supports wood privacy, picket, chain link, vinyl, and split rail fencing.",
  alternates: { canonical: "https://easybuildcalc.com/fence-calculator" },
  openGraph: {
    title: "Fence Calculator",
    description: "Calculate fence posts, panels, and material cost for any yard.",
    url: "https://easybuildcalc.com/fence-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Fence Materials",
  description: "Calculate how many posts and panels you need for a fence.",
  step: [
    { "@type": "HowToStep", text: "Measure the total perimeter or linear footage of fence needed." },
    { "@type": "HowToStep", text: "Choose post spacing (typically 8 feet for wood, 10 for chain link)." },
    { "@type": "HowToStep", text: "Number of posts = total length ÷ spacing + 1." },
    { "@type": "HowToStep", text: "Number of panels = total length ÷ panel width, rounded up." },
  ],
};

export default function FencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Fence Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Fence Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate posts, panels, and total material cost for any fence project.
      </p>

      <FenceCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Fence Post Spacing Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Fence Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Post Spacing</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Post Depth</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Wood Privacy",  "6–8 ft", "1/3 of post height"],
                ["Wood Picket",   "8 ft",   "2 ft minimum"],
                ["Chain Link",    "10 ft",  "2–3 ft"],
                ["Vinyl",         "8 ft",   "24–30 inches"],
                ["Split Rail",    "8 ft",   "24 inches"],
              ].map(([type, sp, depth]) => (
                <tr key={type} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{type}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{sp}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{depth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Post Hole Depth</h2>
        <p>
          A common rule of thumb: bury <strong>⅓ of the total post length</strong> underground.
          For a 6-foot fence with 8-foot posts, dig 2–2.5 feet deep. In frost zones, dig below
          the frost line (typically 36–48 inches in northern states) to prevent heaving.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always call 811 (US) before digging to check for underground utilities.
            Add 10% extra posts and panels for mistakes and future repairs.
          </span>
        </div>
      </article>
    </div>
  );
}
