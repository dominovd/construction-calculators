import type { Metadata } from "next";
import { BasementWaterproofingCalculator } from "./BasementWaterproofingCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Basement Waterproofing Cost Calculator — Estimate by Method",
  description:
    "Estimate basement waterproofing costs by method: interior drainage, exterior excavation, crack injection, or sump pump. Get low, high, and midpoint estimates in seconds.",
  alternates: { canonical: "https://easybuildcalc.com/basement-waterproofing-calculator" },
  openGraph: {
    title: "Free Basement Waterproofing Cost Calculator — Estimate by Method",
    description:
      "Estimate basement waterproofing costs by method: interior drainage, exterior excavation, crack injection, or sump pump. Get low, high, and midpoint estimates.",
    url: "https://easybuildcalc.com/basement-waterproofing-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Estimate Basement Waterproofing Costs",
  description:
    "Calculate the estimated cost of basement waterproofing based on your basement size, problem severity, and chosen waterproofing method.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Measure your basement",
      text: "Enter your basement length and width in feet.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Select your problem type",
      text: "Choose the severity of your water problem: minor seepage, moderate leaking, or severe flooding.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Choose a waterproofing method",
      text: "Select interior drainage, exterior excavation, crack injection, or sump pump only.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review your estimate",
      text: "View your low, high, and midpoint cost estimates based on industry pricing data.",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does basement waterproofing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basement waterproofing costs range from $500 for a simple crack injection to $30,000+ for full exterior excavation on a large home. Interior drainage systems typically run $50–$100 per linear foot of wall perimeter, while exterior excavation costs $100–$300 per linear foot. Sump pump installation alone runs $800–$4,000 depending on severity.",
      },
    },
    {
      "@type": "Question",
      name: "Is interior or exterior waterproofing better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Exterior waterproofing is the most comprehensive solution — it stops water before it reaches your foundation — but costs 2–3× more and requires excavating around the entire perimeter. Interior drainage (a French drain + sump pump) is less invasive, faster to install, and effective for managing water that does enter. Most waterproofing contractors recommend interior systems for moderate issues and exterior for severe structural concerns.",
      },
    },
    {
      "@type": "Question",
      name: "Does basement waterproofing increase home value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A dry, waterproofed basement can recoup 50–70% of the project cost at resale and is often required by buyers' lenders if there is evidence of water intrusion. It also prevents thousands in structural damage and mold remediation costs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does basement waterproofing last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Interior drainage systems with a quality sump pump last 10–25 years with routine maintenance. Exterior waterproofing membranes can last 25–50 years. Crack injections are a permanent fix for non-moving cracks. Most reputable contractors offer 10–25 year transferable warranties.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://easybuildcalc.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Basement Waterproofing Calculator",
      item: "https://easybuildcalc.com/basement-waterproofing-calculator",
    },
  ],
};

export default function BasementWaterproofingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Free Basement Waterproofing Cost Calculator
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        Estimate waterproofing costs by method and problem severity — interior drainage, exterior
        excavation, crack injection, or sump pump.
      </p>

      <BasementWaterproofingCalculator />
      <RelatedCalculators currentSlug="basement-waterproofing-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Waterproofing Methods Compared
          </h2>
          <p className="mb-3">
            Choosing the right waterproofing method depends on the severity of your water problem,
            your budget, and whether the issue is structural or purely drainage-related. Here is how
            the main methods compare:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Method</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Cost</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Best For</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Durability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-3 py-2 font-medium">Interior Drainage</td>
                  <td className="px-3 py-2">$50–$100/LF</td>
                  <td className="px-3 py-2">Ongoing seepage, hydrostatic pressure</td>
                  <td className="px-3 py-2">15–25 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium">Exterior Excavation</td>
                  <td className="px-3 py-2">$100–$300/LF</td>
                  <td className="px-3 py-2">Foundation cracks, severe flooding</td>
                  <td className="px-3 py-2">25–50 years</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Crack Injection</td>
                  <td className="px-3 py-2">$500–$6,000 flat</td>
                  <td className="px-3 py-2">Isolated cracks, minor seepage</td>
                  <td className="px-3 py-2">Permanent (non-moving cracks)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium">Sump Pump Only</td>
                  <td className="px-3 py-2">$800–$4,000 flat</td>
                  <td className="px-3 py-2">Minor to moderate water accumulation</td>
                  <td className="px-3 py-2">10–15 years (pump lifespan)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Interior vs. Exterior Waterproofing: Which Should You Choose?
          </h2>
          <p className="mb-2">
            <strong>Choose interior drainage</strong> when water seeps through the floor or lower
            wall joints, the problem is ongoing but the foundation is structurally sound, and you
            want a less disruptive installation. A French drain channel is cut along the perimeter
            footing and water is routed to a sump pit where a pump ejects it outside.
          </p>
          <p>
            <strong>Choose exterior excavation</strong> when the foundation wall itself is cracked
            or deteriorating, the waterproofing membrane has failed, or you are planning a major
            renovation and can absorb the disruption. Crews excavate to the footing, apply a
            waterproof membrane, install drainage board and a footing drain, then backfill. It is
            the most permanent solution but also the most expensive and disruptive.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                How much does basement waterproofing cost?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Costs range from $500 for a crack injection to $30,000+ for full exterior
                excavation on a large home. Interior drainage systems average $50–$100 per linear
                foot of wall perimeter. A 30×25 ft basement has a 110 LF perimeter, putting the
                interior drainage cost at $5,500–$11,000 for moderate issues. Always get at least 3
                quotes — prices vary dramatically by region and contractor.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                Interior vs. exterior — which is better?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Neither is universally better. Exterior waterproofing stops water at the source and
                protects the foundation itself, but costs 2–3× more. Interior drainage is less
                invasive and handles ongoing water effectively. Many homes use a combination: crack
                injection for isolated issues plus a sump pump for routine groundwater management.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                Does waterproofing increase home value?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Yes. A waterproofed basement typically recoups 50–70% of project cost at resale.
                More importantly, unaddressed water problems can cause structural damage, mold, and
                failed inspections that cost far more than waterproofing would have. Many buyers'
                lenders require documentation that water issues have been professionally resolved.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                How long does basement waterproofing last?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Interior drainage systems last 15–25 years with sump pump maintenance every 3–5
                years. Exterior membranes last 25–50 years. Crack injections are permanent for
                non-moving cracks. Most quality contractors offer 10–25 year transferable
                warranties, which is a key differentiator when comparing bids.
              </div>
            </details>
          </div>
        </section>
      </article>
    </div>
  );
}
