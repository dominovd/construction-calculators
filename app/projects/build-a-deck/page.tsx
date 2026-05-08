import type { Metadata } from "next";
import Link from "next/link";
import { DeckCalculator } from "@/app/deck-calculator/DeckCalculator";
import { LumberCalculator } from "@/app/lumber-calculator/LumberCalculator";
import { FencePostConcreteCalculator } from "@/app/fence-post-concrete-calculator/FencePostConcreteCalculator";
import { PaintCalculator } from "@/app/paint-calculator/PaintCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Build a 12×16 Deck — Cost Estimator & Step-by-Step (2026)",
  description:
    "Total cost to build a 12×16 deck in 2026: footings, framing, decking, fasteners, stain. Step-by-step plan with all the calculators you need on one page.",
  alternates: { canonical: "https://easybuildcalc.com/projects/build-a-deck" },
  openGraph: {
    title: "Build a 12×16 Deck — Cost & Plan",
    description: "Footings → frame → decking → finish. Total cost in 2026 with calculators inline.",
    url: "https://easybuildcalc.com/projects/build-a-deck",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://easybuildcalc.com/projects" },
    { "@type": "ListItem", position: 3, name: "Build a Deck", item: "https://easybuildcalc.com/projects/build-a-deck" },
  ],
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to build a 12×16 deck",
  description: "Plan, dig footings, frame the deck, install decking, and finish — with material estimates at each step.",
  totalTime: "P5D",
  step: [
    { "@type": "HowToStep", position: 1, name: "Plan the footprint", text: "Mark a 12×16 ft rectangle, square the corners, check local setback codes, and locate the ledger position against the house." },
    { "@type": "HowToStep", position: 2, name: "Dig footings & set posts", text: "Dig 8–10 holes 36–48 inches deep depending on frost line. Use 6×6 or 4×4 PT posts in concrete piers." },
    { "@type": "HowToStep", position: 3, name: "Frame the deck", text: "Bolt a 2×10 ledger to the house, install rim joists and 2×8 or 2×10 joists at 16 inches on center." },
    { "@type": "HowToStep", position: 4, name: "Install decking surface", text: "Lay 5/4×6 PT or composite decking with 1/4-inch gaps, fasten with deck screws or hidden clips." },
    { "@type": "HowToStep", position: 5, name: "Stain or seal", text: "Wait 30 days for PT lumber to dry, then apply 1 gallon of stain per ~150–200 sq ft." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does it cost to build a 12×16 deck in 2026?", acceptedAnswer: { "@type": "Answer", text: "A standard 12×16 ground-level pressure-treated deck costs $4,500–$8,500 installed in 2026 — about $24–$45 per square foot. Composite decking pushes the high end to $10,000–$13,000. DIY removes ~50% labor: figure $2,200–$4,000 in materials only." } },
    { "@type": "Question", name: "How many footings does a 12×16 deck need?", acceptedAnswer: { "@type": "Answer", text: "8 footings minimum: 4 along the outer beam (every 6–8 ft) plus 4 against the ledger if not using house-attached ledger. Add 2 more for stairs. Use 80-lb concrete bags, ~2–3 bags per hole at 10″ diameter × 36″ depth." } },
    { "@type": "Question", name: "Do I need a permit to build a deck?", acceptedAnswer: { "@type": "Answer", text: "Most US municipalities require a permit for any deck above 30 inches off grade or attached to the house. Permits run $50–$300 and require an inspection of footings and final structure. Always check with your local building department before starting." } },
    { "@type": "Question", name: "Composite or pressure-treated decking?", acceptedAnswer: { "@type": "Answer", text: "Pressure-treated is cheapest upfront ($1.25/lf) and good for 15–20 years with stain. Composite ($3–$8/lf) lasts 25–30 years with no staining and resists rot, but doubles material cost. ROI on composite typically pays back in 8–10 years vs. PT." } },
    { "@type": "Question", name: "How long does it take to build a 12×16 deck?", acceptedAnswer: { "@type": "Answer", text: "DIY: 4–6 full days (one weekend for footings + one weekend for framing/decking). Pro crew: 2–3 days. Add 1 day per stair flight and 1 day if integrating with existing siding." } },
  ],
};

const TotalCostBox = () => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-900">
    <p className="font-semibold mb-2">12×16 deck total cost — 2026 estimate</p>
    <table className="w-full text-xs">
      <thead>
        <tr className="text-blue-800">
          <th className="text-left py-1">Step</th>
          <th className="text-right py-1">Materials</th>
          <th className="text-right py-1">Labor</th>
          <th className="text-right py-1">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Footings + concrete</td><td className="text-right">$120</td><td className="text-right">$240</td><td className="text-right">$360</td></tr>
        <tr><td>Framing (joists + ledger)</td><td className="text-right">$580</td><td className="text-right">$960</td><td className="text-right">$1,540</td></tr>
        <tr><td>Decking (5/4×6 PT)</td><td className="text-right">$680</td><td className="text-right">$1,440</td><td className="text-right">$2,120</td></tr>
        <tr><td>Fasteners, hangers, posts</td><td className="text-right">$220</td><td className="text-right">—</td><td className="text-right">$220</td></tr>
        <tr><td>Stain (gallons + labor)</td><td className="text-right">$60</td><td className="text-right">$200</td><td className="text-right">$260</td></tr>
        <tr className="font-semibold border-t border-blue-200">
          <td className="pt-1">Total</td>
          <td className="text-right pt-1">≈ $1,660</td>
          <td className="text-right pt-1">≈ $2,840</td>
          <td className="text-right pt-1">≈ $4,500</td>
        </tr>
      </tbody>
    </table>
    <p className="text-xs text-blue-700 mt-2">
      Composite decking instead of PT: add ~$1,200–$2,000 to materials. High-cost regions (CA, NY): +30–40% on labor.
    </p>
  </div>
);

const StepHeader = ({ n, title }: { n: number; title: string }) => (
  <div className="flex items-center gap-2 mt-8 mb-2">
    <div className="w-7 h-7 rounded-full bg-blue-700 text-white text-sm font-semibold flex items-center justify-center">
      {n}
    </div>
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
  </div>
);

export default function BuildADeckPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Build a Deck</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Build a 12×16 Deck — Cost Estimator &amp; Plan</h1>
      <p className="text-gray-600 mb-4">
        Total cost in 2026 ≈ <strong>$4,500 installed</strong> for a standard pressure-treated 12×16 ground-level deck.
        Below is the step-by-step plan with all four calculators you&apos;ll actually need — embedded inline so you can
        size each part as you go.
      </p>

      <PriceUpdatedBadge />
      <TotalCostBox />

      <StepHeader n={1} title="Plan the footprint" />
      <p className="text-sm text-gray-700">
        Mark a 12×16 ft rectangle. Square the corners using the 3-4-5 rule (a 9-12-15 ft triangle is exact for a 12-ft side).
        Check setbacks: most US cities require 5–10 ft from property lines. If the deck attaches to the house, identify
        where the ledger will sit (on the rim joist, sealed against the siding).
      </p>

      <StepHeader n={2} title="Dig footings & set posts" />
      <p className="text-sm text-gray-700 mb-3">
        For a 12×16 deck on the ground, you typically need <strong>6–8 footings</strong>: 3–4 along the outer beam at
        ~6 ft on center, plus 3–4 along the ledger if free-standing. Frost depth varies — 36 inches in Pennsylvania, 48 in
        Minnesota, 12 in the South. Use 80-lb concrete bags, mixed in the hole.
      </p>
      <FencePostConcreteCalculator />

      <StepHeader n={3} title="Frame the deck" />
      <p className="text-sm text-gray-700 mb-3">
        Standard frame: 2×10 ledger lag-bolted to the house, 2×10 rim joists, 2×8 or 2×10 floor joists at 16 inches on center.
        For a 12-ft span (between beams), 2×8 joists work; 16-ft cantilevers need 2×10 minimum. Total lumber for the frame:
        roughly 17 × 2×10×16 ft + 11 × 2×8×12 ft + 2 × 6×6×8 PT posts.
      </p>
      <LumberCalculator />

      <StepHeader n={4} title="Install decking surface" />
      <p className="text-sm text-gray-700 mb-3">
        Standard 5/4×6 PT decking, fastened perpendicular to joists with 2.5-inch deck screws and a 1/4-inch gap between boards.
        For a 12×16 deck running 12-ft boards: ~33 boards (16 ft × 12 boards / 5.5 inch effective coverage), or 14 boards if
        running 16-ft lengths.
      </p>
      <DeckCalculator />

      <StepHeader n={5} title="Stain or seal" />
      <p className="text-sm text-gray-700 mb-3">
        Wait 30 days for fresh PT to dry before staining. A 12×16 deck = 192 ft² top + ~30 ft² of railings/edges = ~225 ft² to
        cover. Two coats. One gallon of deck stain covers 150–200 ft² per coat.
      </p>
      <PaintCalculator />

      <PriceDisclaimer className="mt-6" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Codes &amp; permits</h2>
        <p>
          Most US municipalities require a permit for any deck higher than 30 inches off grade, or any deck attached
          to the house. Permits cost $50–$300 and trigger an inspection of footings (before pour) and final structure.
          Free-standing ground-level decks (under 30″) often don&apos;t require permits, but property setbacks still apply.
          Always check with your local building department first.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">DIY vs. hire a pro</h2>
        <p>
          A 12×16 PT deck is an achievable DIY project for an intermediate handyperson over two weekends. The hardest
          parts are squaring the frame, getting the ledger water-tight, and lining up the footings. Pro crews finish in
          2–3 days, charging ~$2,800–$4,500 in labor for this size — about 60% of the total project cost. DIY saves that
          line item but adds risk (a poorly flashed ledger can rot the house wall).
        </p>

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

      <RelatedCalculators
        currentSlug="deck-calculator"
        override={["deck-calculator", "lumber-calculator", "fence-post-concrete-calculator", "paint-calculator", "board-foot-calculator", "stair-calculator"]}
        title="Calculators used in this project"
      />
    </div>
  );
}
