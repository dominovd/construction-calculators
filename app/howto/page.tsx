import type { Metadata } from "next";
import { HowToHub } from "./HowToHub";

export const metadata: Metadata = {
  title: "Construction Planning Guides — Cost Breakdowns & How-To — EasyBuildCalc",
  description:
    "Practical project planning guides: concrete patio cost breakdown, how to frame a wall, lumber lists, and more. Free guides for contractors and DIYers.",
  alternates: { canonical: "https://easybuildcalc.com/howto" },
  openGraph: {
    title: "Construction Planning Guides — EasyBuildCalc",
    description: "Cost breakdowns, how-to guides, and material lists for common construction projects.",
    url: "https://easybuildcalc.com/howto",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",   item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "How-To", item: "https://easybuildcalc.com/howto" },
  ],
};

export default function HowToPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Planning Guides</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Project Planning Guides</h1>
      <p className="text-gray-600 mb-6">
        Cost breakdowns, how-to walkthroughs, and material lists — everything you need before you start building.
      </p>
      <section className="border border-blue-100 bg-blue-50 rounded-xl p-4 mb-6">
        <h2 className="text-base font-semibold text-blue-950 mb-2">Use these before ordering materials</h2>
        <p className="text-sm text-blue-800 leading-relaxed">
          These guides explain the assumptions behind common construction estimates: thickness,
          spacing, waste factor, labor scope, permits, and when a DIY material count becomes a
          contractor job. Each guide links back to the calculator that handles the final numbers.
        </p>
      </section>
      <HowToHub />
      <section className="mt-8 text-sm text-gray-700 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Popular planning paths</h2>
        <p>
          For concrete work, start with the patio cost guide, then confirm cubic yards with the{" "}
          <a href="/concrete-calculator" className="text-blue-600 hover:underline">concrete calculator</a>{" "}
          and reinforcement with the{" "}
          <a href="/rebar-calculator" className="text-blue-600 hover:underline">rebar calculator</a>.
          For framing, read the wall framing guide first, then use the{" "}
          <a href="/stud-calculator" className="text-blue-600 hover:underline">stud calculator</a>{" "}
          to turn wall length, spacing, and openings into a lumber list. For complete jobs, pair a
          guide with the matching project estimator so material counts, sequence, and cost stay in
          the same planning flow.
        </p>
      </section>
    </div>
  );
}
