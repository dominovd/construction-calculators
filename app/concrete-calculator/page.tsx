import type { Metadata } from "next";
import { ConcreteCalculator } from "./ConcreteCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Concrete Calculator — Cubic Yards, Bags & Cost",
  description:
    "Calculate how much concrete you need for any slab, footing, or wall. Get cubic yards, 60-lb and 80-lb bag counts, and ready-mix cost instantly. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/concrete-calculator" },
  openGraph: {
    title: "Concrete Calculator",
    description: "Calculate concrete cubic yards, bags, and ready-mix cost for any project.",
    url: "https://easybuildcalc.com/concrete-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Concrete for a Slab",
  description: "Calculate how many cubic yards or bags of concrete you need.",
  step: [
    { "@type": "HowToStep", text: "Measure the length and width of the area in feet." },
    { "@type": "HowToStep", text: "Decide on slab thickness in inches (4\" for driveways, 6\" for heavy loads)." },
    { "@type": "HowToStep", text: "Multiply L × W × (depth ÷ 12) to get cubic feet, then divide by 27 for cubic yards." },
    { "@type": "HowToStep", text: "One 60-lb bag covers 0.45 cu ft; one 80-lb bag covers 0.60 cu ft." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many 80-lb bags of concrete make a yard?", acceptedAnswer: { "@type": "Answer", text: "It takes approximately 45 bags of 80-lb concrete to make one cubic yard. For 60-lb bags, you need about 60 bags per cubic yard." } },
    { "@type": "Question", name: "How thick should a concrete driveway slab be?", acceptedAnswer: { "@type": "Answer", text: "A residential driveway should be at least 4 inches thick for standard vehicles. For heavier trucks or loads, use 5–6 inches. Always place concrete over a 4-inch compacted gravel base." } },
    { "@type": "Question", name: "How much does a yard of ready-mix concrete cost?", acceptedAnswer: { "@type": "Answer", text: "Ready-mix concrete typically costs $125–$200 per cubic yard depending on region, mix design, and supplier. Most companies have a minimum order of 1 yard and charge a short-load fee for orders under 3–5 yards." } },
    { "@type": "Question", name: "When should I use bags instead of ready-mix?", acceptedAnswer: { "@type": "Answer", text: "Bagged concrete is practical for projects under 0.5–1 cubic yard — small footings, fence posts, or repairs. For anything larger, ready-mix is faster, stronger, and often cheaper when labor is considered." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Concrete Calculator", item: "https://easybuildcalc.com/concrete-calculator" },
  ],
};

export default function ConcretePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Concrete Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Concrete Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate cubic yards, bag count, and ready-mix cost for slabs, footings, and walls.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <ConcreteCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="concrete-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Concrete Formula</h2>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Cubic Feet = Length × Width × (Thickness ÷ 12){"\n"}
          Cubic Yards = Cubic Feet ÷ 27{"\n"}
          60-lb Bags = Cubic Feet ÷ 0.45{"\n"}
          80-lb Bags = Cubic Feet ÷ 0.60
        </pre>

        <h2 className="text-xl font-semibold text-gray-900">Recommended Slab Thickness</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Project</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Thickness</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Walkway / patio", "3–4 inches", "Light foot traffic"],
                ["Residential driveway", "4 inches", "Standard passenger vehicles"],
                ["Garage slab", "4–6 inches", "Heavier vehicles"],
                ["Footing", "8–12 inches", "Depends on load and soil"],
                ["Commercial slab", "6+ inches", "Forklifts and heavy loads"],
              ].map(([p, t, n]) => (
                <tr key={p} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Bags vs. Ready-Mix</h2>
        <p>
          Use our free calculator above to compare bag count vs. ready-mix cost before you order.
          Mixing bags is cost-effective for small projects under 1 cubic yard. For anything larger,
          ready-mix concrete delivered by truck is faster, more consistent, and often cheaper per yard.
          Most ready-mix suppliers have a minimum order of 1 yard.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always order 5–10% extra concrete. Running short mid-pour creates cold joints that weaken the slab.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many 80-lb bags of concrete make a yard?", a: "It takes approximately 45 bags of 80-lb concrete to make one cubic yard. For 60-lb bags, you need about 60 bags per cubic yard." },
            { q: "How thick should a concrete driveway slab be?", a: "A residential driveway should be at least 4 inches thick for standard vehicles. For heavier trucks or loads, use 5–6 inches. Always place concrete over a 4-inch compacted gravel base." },
            { q: "How much does a yard of ready-mix concrete cost?", a: "Ready-mix concrete typically costs $125–$200 per cubic yard depending on region, mix design, and supplier. Most companies have a minimum order of 1 yard and charge a short-load fee for orders under 3–5 yards." },
            { q: "When should I use bags instead of ready-mix?", a: "Bagged concrete is practical for projects under 0.5–1 cubic yard — small footings, fence posts, or repairs. For anything larger, ready-mix is faster, stronger, and often cheaper when labor is considered." },
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
