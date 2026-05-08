import type { Metadata } from "next";
import { DeckCostCalculator } from "./DeckCostCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Deck Cost Calculator (2026) — Materials + Labor by Size & Material",
  description:
    "Estimate the total cost to build a deck in 2026: pressure-treated, composite, cedar, or hardwood. Materials + labor by size, railing, and region. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/deck-cost-calculator" },
  openGraph: {
    title: "Deck Cost Calculator (2026)",
    description: "Total deck build cost: PT vs composite vs hardwood, materials + labor.",
    url: "https://easybuildcalc.com/deck-cost-calculator",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a deck cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A pressure-treated 12×16 deck (the most popular size) runs $4,500–$8,500 installed in 2026 — about $24–$45 per square foot. Composite decking pushes the high end to $10,000–$13,000 for the same size; cedar sits in between at $7,000–$10,500.",
      },
    },
    {
      "@type": "Question",
      name: "Pressure-treated vs composite — what's worth the extra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PT wood costs ~50% less upfront but needs staining every 2–3 years and lasts 15–20 years. Composite (Trex, TimberTech) lasts 25–30 years with no staining and resists rot, splinters, and mold — but adds $1,200–$2,500 to a 12×16 deck. Composite typically pays back in 8–10 years vs. PT.",
      },
    },
    {
      "@type": "Question",
      name: "Does a deck add value to my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — wood decks recoup ~50–60% of cost at resale per Remodeling Magazine's 2025 Cost vs. Value report; composite decks recoup ~40–50%. The difference: composite costs more upfront, so absolute ROI is similar but the percentage is lower.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit to build a deck?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most US municipalities require a permit for any deck higher than 30″ off grade or attached to the house. Permits run $50–$300 and trigger inspections of footings (before pour) and final structure. Free-standing ground-level decks under 30″ often skip permits, but property setbacks still apply.",
      },
    },
    {
      "@type": "Question",
      name: "Should I DIY my deck or hire a pro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 12×16 PT deck is a 4–6 day DIY project for an intermediate handyperson. You save ~50–60% (typically $2,500–$4,000 in labor). Hardest parts: squaring the frame, ledger flashing, and accurate footing layout. A botched ledger can rot the house wall, so research that step thoroughly or hire just that part out.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Deck Cost Calculator", item: "https://easybuildcalc.com/deck-cost-calculator" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Deck Cost Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/deck-cost-calculator",
};

export default function DeckCostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Deck Cost</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Deck Cost Calculator</h1>
      <p className="text-gray-600 mb-4">
        Total cost in 2026 to build a deck: materials (decking, frame, posts, footings, fasteners, stain) + labor.
        Pick size, material, region for a low–avg–high estimate.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-900">
        <strong>Quick answer:</strong> A standard 12×16 pressure-treated deck costs{" "}
        <strong>$4,500–$8,500 installed</strong> in 2026 ($24–$45/ft²). Composite runs <strong>$8,000–$13,000</strong>;
        cedar <strong>$7,000–$10,500</strong>. DIY removes ~55% labor.
      </div>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <DeckCostCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators
        currentSlug="deck-cost-calculator"
        override={["deck-calculator", "lumber-calculator", "fence-post-concrete-calculator", "paint-calculator", "stair-calculator", "concrete-calculator"]}
        title="Related calculators"
      />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Cost by deck material (per ft²)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Material</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Material cost</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Installed cost</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Lifespan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Pressure-treated pine", "$1.25/lf", "$24–$45/ft²",  "15–20 yr"],
                ["Cedar",                  "$3.00/lf", "$28–$55/ft²",  "20–25 yr"],
                ["Composite (Trex-class)", "$5.50/lf", "$40–$75/ft²",  "25–30 yr"],
                ["Hardwood (ipe)",         "$8.00/lf", "$55–$100/ft²", "40+ yr"],
              ].map(([m, mc, ic, l]) => (
                <tr key={m} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{m}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{mc}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{ic}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">What this calculator includes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Decking surface:</strong> by chosen material, ~1.1 lf per ft² of deck.</li>
          <li><strong>Frame &amp; posts:</strong> joists, ledger, rim, beam at ~1.7 BF per ft²; 4×4 PT posts every ~32 ft².</li>
          <li><strong>Footings:</strong> 80-lb concrete bags, 1.5 bags per post hole.</li>
          <li><strong>Fasteners:</strong> deck screws, joist hangers, flashing — flat $0.75/ft².</li>
          <li><strong>Railing:</strong> $25/lf (PT) to $40/lf (composite), if enabled.</li>
          <li><strong>Stain:</strong> only for PT/cedar (1 gal per 175 ft²).</li>
          <li><strong>Labor:</strong> $8–$25/ft² depending on region and material complexity.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">What pushes deck cost up</h2>
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
                ["Elevated deck (6+ ft)",  "+25–40% (more posts, longer span, code)"],
                ["Stairs (per flight)",    "+$500–$1,200"],
                ["Built-in benches/planters", "+$300–$800 each"],
                ["Multi-level layout",      "+30–50%"],
                ["Removal of old deck",     "+$3–$6/ft²"],
                ["High-cost region (CA, NY)", "+30–40% on labor"],
                ["Permit + inspection",     "$50–$300 flat"],
              ].map(([f, i]) => (
                <tr key={f} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{f}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{i}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Get 3 quotes. Deck pricing varies ±25% in the same metro. Cheap bids often skip flashing
            on the ledger, use lighter joists, or skimp on hidden fasteners — all of which show in 2–3 years.
            Always ask for a written breakdown: footings, frame lumber, decking lf, hardware, hours.
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
