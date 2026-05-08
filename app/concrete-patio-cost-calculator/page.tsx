import type { Metadata } from "next";
import { ConcretePatioCostCalculator } from "./ConcretePatioCostCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Concrete Patio Cost Calculator (2026) — Materials + Labor",
  description:
    "Estimate the total cost of a concrete patio in 2026: ready-mix, rebar, gravel base, and labor. Pick size, finish, and region to get a low–avg–high estimate.",
  alternates: { canonical: "https://easybuildcalc.com/concrete-patio-cost-calculator" },
  openGraph: {
    title: "Concrete Patio Cost Calculator (2026)",
    description: "Materials + labor estimate by size, finish, and region.",
    url: "https://easybuildcalc.com/concrete-patio-cost-calculator",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a concrete patio cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain broom-finish concrete patio runs $8–$15 per square foot installed in 2026 (national average), with a typical 12×16 patio costing $1,500–$2,900. Stamped or stained finishes add 40–80%, pushing high-end installs over $25/ft².",
      },
    },
    {
      "@type": "Question",
      name: "What's cheaper — concrete patio or pavers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain concrete is typically cheaper upfront ($8–$15/ft²) than pavers ($14–$30/ft²). However, pavers are easier to repair, don't crack the same way, and often have better resale appeal — so total lifetime cost can be similar.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need rebar in a concrete patio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes for structural integrity. #4 rebar (½″) on an 18-inch grid is standard for residential patios at 4-inch thickness. Welded wire mesh is a cheaper alternative for non-load-bearing patios. Both reduce cracking by ~70%.",
      },
    },
    {
      "@type": "Question",
      name: "How thick should a concrete patio be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "4 inches is standard for residential foot-traffic patios. Use 6 inches if you'll drive vehicles on it (driveway-grade) or in cold climates with deep frost. 5 inches is a good compromise for furniture-heavy patios.",
      },
    },
    {
      "@type": "Question",
      name: "What raises the cost of a concrete patio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Decorative finishes (stamped, stained, exposed aggregate) add 40–80% to labor. Slope grading, removal of existing concrete, poor access for the truck, and high-cost regions (CA, NY, Northeast) all push price up. Permits add $50–$200.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Concrete Patio Cost Calculator", item: "https://easybuildcalc.com/concrete-patio-cost-calculator" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Concrete Patio Cost Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/concrete-patio-cost-calculator",
};

export default function ConcretePatioCostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Concrete Patio Cost</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Concrete Patio Cost Calculator</h1>
      <p className="text-gray-600 mb-4">
        Total installed cost in 2026: materials (concrete, rebar, gravel base) plus labor. Adjust size,
        finish, and region for a low–average–high estimate.
      </p>

      {/* Featured-snippet box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-900">
        <strong>Quick answer:</strong> A standard 12×16 broom-finish concrete patio costs{" "}
        <strong>$1,500–$2,900 installed</strong> ({"$8–$15/ft²"}). Stamped or stained finishes run{" "}
        <strong>$3,000–$5,500</strong> for the same size. Use the calculator below to dial in your specific dimensions.
      </div>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <ConcretePatioCostCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators
        currentSlug="concrete-patio-cost-calculator"
        override={["concrete-calculator", "paver-calculator", "rebar-calculator", "gravel-calculator", "concrete-curb-calculator", "excavation-calculator"]}
        title="Related calculators"
      />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">What this calculator includes</h2>
        <p>
          Our concrete patio cost calculator breaks down your project into the four main expense categories
          you&apos;ll actually pay for:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Concrete (ready-mix):</strong> ~${(145).toFixed(0)}/yd³ delivered (national avg, May 2026), priced by volume — length × width × thickness ÷ 27.</li>
          <li><strong>Rebar:</strong> #4 (½″) bar on an 18-inch grid for crack control. ~$0.50/lf in 2026.</li>
          <li><strong>Gravel base:</strong> 2 inches of compacted ¾″ stone under the slab. ~$30/ton bulk.</li>
          <li><strong>Labor:</strong> form, place, finish, edge — $4–$12/ft² depending on finish and region.</li>
        </ul>
        <p>
          Not included (yet): permits ($50–$200), demolition of existing concrete, drainage work, sealer
          ($0.50–$1.50/ft² if applied separately), and finishes outside the four presets.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Cost factors that move the needle</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Factor</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Cost impact</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Stamped or stained finish", "+40–80% on labor"],
                ["Stained vs. plain", "+15% on materials, +40% on labor"],
                ["Removal of existing slab", "+$2–$5/ft²"],
                ["High-cost region (CA, NY, MA)", "+30–40% on labor"],
                ["Poor truck access (long pour)", "+$1–$3/ft²"],
                ["Cold-climate frost depth", "Thicker slab, +25% on concrete"],
                ["Permit", "$50–$200 flat"],
              ].map(([factor, impact]) => (
                <tr key={factor} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{factor}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">DIY vs. hire a contractor?</h2>
        <p>
          DIY removes the labor line — about 50–60% of the total — but requires renting a mixer ($75–$120/day)
          or wheelbarrowing 2+ yards by hand, plus setting accurate forms. For a 12×16 patio you&apos;re
          saving ~$1,400 but trading 1–2 days of hard physical work and risking a finish that looks rough.
          Most homeowners hire it out unless they&apos;ve done concrete before.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Get 3 quotes — concrete pricing varies by ±25% in the same metro, and the cheapest bid
            often skips the gravel base or uses lighter rebar. Always ask for a written breakdown:
            ready-mix yards, rebar layout, base prep, and labor hours.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqLd.mainEntity.map((q) => (
            <details key={q.name} className="border border-gray-200 rounded-lg px-4 py-2">
              <summary className="font-medium cursor-pointer text-gray-900">{q.name}</summary>
              <p className="mt-2 text-gray-600">{q.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </article>
    </div>
  );
}
