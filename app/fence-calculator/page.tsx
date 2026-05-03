import type { Metadata } from "next";
import { FenceCalculator } from "./FenceCalculator";

export const metadata: Metadata = {
  title: "Free Fence Calculator — Posts, Panels & Cost Estimator",
  description:
    "Calculate how many fence posts and panels you need for any yard. Supports wood privacy, picket, chain link, vinyl, and split rail fencing. Free online tool.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many fence posts do I need for 100 feet of fence?", acceptedAnswer: { "@type": "Answer", text: "For 100 feet with 8-foot spacing: 100 / 8 + 1 = 13.5, so 14 posts. Add corner posts separately. For chain link at 10-foot spacing: 100 / 10 + 1 = 11 posts. Always add 1 post for the end of each run." } },
    { "@type": "Question", name: "How deep should fence posts be set?", acceptedAnswer: { "@type": "Answer", text: "A common rule: bury 1/3 of the post length, or a minimum of 2 feet. For a 6-foot fence using 8-foot posts, set 2–2.5 feet deep. In frost-prone areas, dig below the frost line (36–48 inches in northern states) to prevent heaving." } },
    { "@type": "Question", name: "How much concrete do I need per fence post?", acceptedAnswer: { "@type": "Answer", text: "Typically 1–2 bags of 50-lb fast-setting concrete per post, depending on hole diameter and post size. For a standard 4x4 post in an 8-inch diameter hole, 1 bag of 50-lb concrete is usually sufficient. Use fast-setting concrete — no mixing required." } },
    { "@type": "Question", name: "What is the cheapest type of fencing?", acceptedAnswer: { "@type": "Answer", text: "Chain link is typically the cheapest fence option at $8–$18 per linear foot installed. Split rail fencing runs $10–$20/lf. Wood privacy fencing costs $15–$35/lf installed. Vinyl and aluminum are $20–$40/lf but require less maintenance long-term." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Fence Calculator", item: "https://easybuildcalc.com/fence-calculator" },
  ],
};

export default function FencePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Fence Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Fence Calculator</h1>
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
          the frost line (typically 36–48 inches in northern states) to prevent heaving. Use our
          free calculator above to estimate posts, panels, and concrete for your entire fence run.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always call 811 (US) before digging to check for underground utilities.
            Add 10% extra posts and panels for mistakes and future repairs.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many fence posts do I need for 100 feet of fence?", a: "For 100 feet with 8-foot spacing: 100 ÷ 8 + 1 = 13.5, so 14 posts. Add corner posts separately. For chain link at 10-foot spacing: 100 ÷ 10 + 1 = 11 posts. Always add 1 post for the end of each run." },
            { q: "How deep should fence posts be set?", a: "A common rule: bury ⅓ of the post length, or a minimum of 2 feet. For a 6-foot fence using 8-foot posts, set 2–2.5 feet deep. In frost-prone areas, dig below the frost line (36–48 inches in northern states) to prevent heaving." },
            { q: "How much concrete do I need per fence post?", a: "Typically 1–2 bags of 50-lb fast-setting concrete per post, depending on hole diameter and post size. For a standard 4×4 post in an 8-inch diameter hole, 1 bag of 50-lb concrete is usually sufficient. Use fast-setting concrete — no mixing required." },
            { q: "What is the cheapest type of fencing?", a: "Chain link is typically the cheapest fence option at $8–$18 per linear foot installed. Split rail fencing runs $10–$20/lf. Wood privacy fencing costs $15–$35/lf installed. Vinyl and aluminum are $20–$40/lf but require less maintenance long-term." },
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
