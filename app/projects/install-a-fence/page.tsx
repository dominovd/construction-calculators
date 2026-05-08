import type { Metadata } from "next";
import Link from "next/link";
import { FenceCalculator } from "@/app/fence-calculator/FenceCalculator";
import { FencePostConcreteCalculator } from "@/app/fence-post-concrete-calculator/FencePostConcreteCalculator";
import { PaintCalculator } from "@/app/paint-calculator/PaintCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Install a Wood Fence — 2026 Cost & Step-by-Step Plan",
  description:
    "Build a 100-ft pressure-treated wood privacy fence in 2026: panels, posts, post concrete, stain. Materials + labor breakdown with all the calculators you need.",
  alternates: { canonical: "https://easybuildcalc.com/projects/install-a-fence" },
  openGraph: {
    title: "Install a Wood Fence — Cost & Plan",
    description: "Panels → posts → footings → stain. Total cost in 2026 with calculators inline.",
    url: "https://easybuildcalc.com/projects/install-a-fence",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://easybuildcalc.com/projects" },
    { "@type": "ListItem", position: 3, name: "Install a Fence", item: "https://easybuildcalc.com/projects/install-a-fence" },
  ],
};

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to install a 100-ft wood privacy fence",
  description: "Plan the line, dig post holes, set posts in concrete, hang panels, and stain.",
  totalTime: "P3D",
  step: [
    { "@type": "HowToStep", position: 1, name: "Plan the line and call 811", text: "Mark the property line, confirm setback (5–10 ft typical), and call 811 to mark utilities at least 2 days before digging." },
    { "@type": "HowToStep", position: 2, name: "Dig post holes & set posts", text: "Dig 36–48 inches deep (frost line) at 8 ft on center. Set 4×4 PT posts in 80-lb concrete bags, plumb with braces while curing." },
    { "@type": "HowToStep", position: 3, name: "Hang panels", text: "After concrete cures (24–48 h), attach 6×8 ft pre-built panels to posts with galvanized brackets or screws." },
    { "@type": "HowToStep", position: 4, name: "Stain or seal", text: "Wait 30 days for fresh PT to dry, then apply 2 coats of stain. Plan ~1 gallon per 100 ft of fence (both sides)." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does a 100-ft wood fence cost in 2026?", acceptedAnswer: { "@type": "Answer", text: "A 100-ft 6-ft pressure-treated privacy fence costs $2,400–$5,000 installed in 2026 ($24–$50/lf). DIY removes ~60% labor: figure $900–$1,400 in materials only. Cedar adds ~30%; vinyl runs $35–$70/lf installed." } },
    { "@type": "Question", name: "How many fence posts do I need for 100 ft?", acceptedAnswer: { "@type": "Answer", text: "13 posts for a straight 100-ft run with 8-ft on-center spacing (12 panels + 1 corner/end). Add 1 extra post per gate. 6×6 posts are sturdier than 4×4 for tall (6 ft+) privacy fences in windy areas." } },
    { "@type": "Question", name: "How deep should fence posts go?", acceptedAnswer: { "@type": "Answer", text: "1/3 of the post height is the rule of thumb — so 24 inches deep for a 6-ft fence (8-ft post). In cold climates, go below frost line: 36–48″ in northern states. Use 80-lb concrete bags, 1.5–2 bags per hole at 10″ diameter." } },
    { "@type": "Question", name: "Do I need a permit to build a fence?", acceptedAnswer: { "@type": "Answer", text: "Most US municipalities don't require permits for fences under 6 ft on residential property, but some do — and HOAs almost always have rules on style, height, and material. Always check with your city and HOA before buying materials." } },
    { "@type": "Question", name: "PT pine, cedar, or vinyl?", acceptedAnswer: { "@type": "Answer", text: "PT pine ($24–$45/lf) is cheapest and lasts 15–20 years with stain. Cedar ($30–$55/lf) lasts 20–30 years and weathers gray naturally. Vinyl ($35–$70/lf) is maintenance-free and lasts 30+ years but doesn't biodegrade and looks plastic." } },
  ],
};

const TotalCostBox = () => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-sm text-blue-900">
    <p className="font-semibold mb-2">100-ft 6-ft PT privacy fence — 2026 estimate</p>
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
        <tr><td>Posts (13× 4×4×8)</td><td className="text-right">$195</td><td className="text-right">$300</td><td className="text-right">$495</td></tr>
        <tr><td>Post concrete (~22 bags)</td><td className="text-right">$143</td><td className="text-right">—</td><td className="text-right">$143</td></tr>
        <tr><td>Panels (12× 6×8 PT)</td><td className="text-right">$480</td><td className="text-right">$1,200</td><td className="text-right">$1,680</td></tr>
        <tr><td>Hardware + brackets</td><td className="text-right">$80</td><td className="text-right">—</td><td className="text-right">$80</td></tr>
        <tr><td>Stain (2 gal × 2 coats)</td><td className="text-right">$112</td><td className="text-right">$200</td><td className="text-right">$312</td></tr>
        <tr className="font-semibold border-t border-blue-200">
          <td className="pt-1">Total</td>
          <td className="text-right pt-1">≈ $1,010</td>
          <td className="text-right pt-1">≈ $1,700</td>
          <td className="text-right pt-1">≈ $2,710</td>
        </tr>
      </tbody>
    </table>
    <p className="text-xs text-blue-700 mt-2">
      Cedar instead of PT: add $400–$700 to materials. High-cost regions (CA, NY): +30–40% on labor.
      Gates: +$200–$500 each (single), +$400–$900 (double).
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

export default function InstallAFencePage() {
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
        <span className="text-gray-700">Install a Fence</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Install a Wood Fence — Cost &amp; Plan</h1>
      <p className="text-gray-600 mb-4">
        Total cost in 2026 ≈ <strong>$2,700 installed</strong> for a 100-ft 6-ft pressure-treated privacy fence.
        Three calculators below cover panels, post concrete, and stain — sized for a typical residential lot.
      </p>

      <PriceUpdatedBadge />
      <TotalCostBox />

      <StepHeader n={1} title="Plan the line & call 811" />
      <p className="text-sm text-gray-700 mb-3">
        Mark the property line. Most cities require fences 5–10 ft from the line; check setback before digging.
        Call 811 at least 48 hours before — they&apos;ll mark gas, electric, water, and cable lines free of charge.
        Hitting a utility on a fence line costs $5,000+ to fix.
      </p>
      <FenceCalculator />

      <StepHeader n={2} title="Dig post holes & set posts" />
      <p className="text-sm text-gray-700 mb-3">
        At 8-ft on center: 13 posts for 100 ft (12 panels + 1 corner). Holes 10–12&quot; diameter,
        36–48&quot; deep depending on frost line. Use 80-lb concrete bags — 1.5 bags per hole for 4×4 posts,
        2 bags for 6×6.
      </p>
      <FencePostConcreteCalculator />

      <StepHeader n={3} title="Hang panels & gate" />
      <p className="text-sm text-gray-700 mb-3">
        After concrete cures (minimum 24 hours, 48 for windy areas), attach 6×8 ft pre-built privacy panels
        with galvanized brackets or 3″ deck screws into the posts. Use a level on every panel — fences look
        bad fast if any panel is off-plumb.
      </p>

      <StepHeader n={4} title="Stain or seal" />
      <p className="text-sm text-gray-700 mb-3">
        Wait 30 days for PT lumber to dry before staining. 100 ft of 6-ft fence = ~600 ft² of one-side surface
        × 2 sides = 1,200 ft². At 200 ft²/gal × 2 coats, plan 6–8 gallons total. Roller works for the bulk;
        brush for the cracks.
      </p>
      <PaintCalculator />

      <PriceDisclaimer className="mt-6" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Permits, codes, and HOA</h2>
        <p>
          Most US municipalities don&apos;t require permits for fences under 6 ft on residential property,
          but some do — and HOAs almost always regulate height, material, and even color. Check both before
          buying. Corner-lot houses often have stricter setbacks because of sight-distance requirements.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">DIY vs. hire a pro</h2>
        <p>
          A 100-ft straight-run fence is achievable DIY in 2–3 weekends with one helper. Hardest parts:
          getting all post tops at the same height (string-line them) and post concrete that sets plumb.
          A pro crew finishes in 1–2 days and charges ~$1,500–$2,500 in labor for this size — about 60%
          of the total bill.
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
        currentSlug="fence-calculator"
        override={["fence-calculator", "fence-post-concrete-calculator", "paint-calculator", "lumber-calculator", "concrete-calculator", "deck-calculator"]}
        title="Calculators used in this project"
      />
    </div>
  );
}
