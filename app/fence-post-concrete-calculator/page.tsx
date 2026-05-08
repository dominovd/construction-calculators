import type { Metadata } from "next";
import { FencePostConcreteCalculator } from "./FencePostConcreteCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";

export const metadata: Metadata = {
  title: "Free Fence Post Concrete Calculator — Bags per Post Estimator",
  description:
    "Calculate exactly how many bags of concrete you need to set fence posts. Supports 50 lb, 60 lb, and 80 lb bags. Enter posts, hole size, and depth for an instant estimate.",
  alternates: { canonical: "https://easybuildcalc.com/fence-post-concrete-calculator" },
  openGraph: {
    title: "Fence Post Concrete Calculator",
    description: "Find out how many bags of concrete you need for your fence posts. Fast, free, accurate.",
    url: "https://easybuildcalc.com/fence-post-concrete-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Concrete for Fence Posts",
  description: "Determine the number of concrete bags needed to set fence posts based on hole diameter, depth, post size, and bag size.",
  step: [
    { "@type": "HowToStep", text: "Count the number of fence posts you need to set." },
    { "@type": "HowToStep", text: "Determine the post hole diameter (typically 3× the post width — 8\" for a 4×4, 10–12\" for a 6×6)." },
    { "@type": "HowToStep", text: "Set hole depth to at least 1/3 of post length, and below the frost line in cold climates." },
    { "@type": "HowToStep", text: "Calculate net concrete volume: (hole area − post area) × depth." },
    { "@type": "HowToStep", text: "Divide total cubic feet by the bag yield (0.375 for 50 lb, 0.45 for 60 lb, 0.60 for 80 lb) and round up." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How deep should fence posts be set?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard rule is to bury 1/3 of the total post length. For a 6-foot fence with 8-foot posts, set 2–2.5 feet deep. In cold climates, dig below the local frost line (often 36–48 inches in northern states) to prevent heaving. A minimum of 2 feet is recommended regardless of post height.",
      },
    },
    {
      "@type": "Question",
      name: "What mix of concrete is best for fence posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fast-setting concrete (such as Quikrete Fast-Setting or Sakrete Fast-Setting) is the most popular choice for fence posts. Pour dry mix directly into the hole and add water — no mixing needed. It sets in 20–40 minutes, letting you continue work the same day. Standard 80 lb bags yielding 0.60 cu ft are the most economical option per cubic foot.",
      },
    },
    {
      "@type": "Question",
      name: "Fast-set vs regular concrete for fence posts — which is better?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fast-setting concrete sets in 20–40 minutes and can be poured dry, making it ideal for fence posts since you don't need a mixer. Regular concrete (e.g., Quikrete 5000) takes 24–48 hours to cure but is slightly stronger (5,000 psi vs 4,000 psi). For typical residential fences, fast-set is the practical choice. Use regular concrete for heavy gates or structural posts bearing significant load.",
      },
    },
    {
      "@type": "Question",
      name: "How long should I wait before attaching fence panels to new posts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With fast-setting concrete, posts are stable enough for light work within 4 hours and ready for fence panel installation after 24 hours. For regular concrete, wait at least 24–48 hours before attaching panels and 7 days for full working strength. Avoid applying significant lateral force (like gate hardware under load) for at least 28 days, which is when concrete reaches its rated strength.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Fence Post Concrete Calculator", item: "https://easybuildcalc.com/fence-post-concrete-calculator" },
  ],
};

export default function FencePostConcretePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Fence Post Concrete Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Free Fence Post Concrete Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Enter your post count, hole diameter, depth, and bag size to find out exactly how many bags of concrete you need.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <FencePostConcreteCalculator />
      <PriceDisclaimer className="mt-3" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Post Hole Concrete Formula</h2>
        <p>
          The amount of concrete needed for a fence post hole depends on three measurements: the
          hole diameter, the hole depth, and the cross-sectional area of the post itself (which
          displaces some concrete). The formula is:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-xs">
          <p>Hole area (sq ft) = π × (hole radius in ft)²</p>
          <p>Post area (sq ft) = post width² <em>(square post)</em> or π × (post radius in ft)² <em>(round post)</em></p>
          <p>Concrete volume (cu ft) = (hole area − post area) × depth (ft)</p>
          <p>Bags needed = ⌈ total cu ft ÷ bag yield ⌉</p>
        </div>
        <p>
          Bag yields: <strong>50 lb = 0.375 cu ft</strong>, <strong>60 lb = 0.45 cu ft</strong>,{" "}
          <strong>80 lb = 0.60 cu ft</strong>. Always round up — partial bags still count as a
          full purchase. Order 10% extra for spillage and uneven holes.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Quick Reference: Bags Needed by Post Count
        </h2>
        <p>
          Assuming a <strong>10&Prime; diameter hole</strong>, <strong>3 ft depth</strong>,{" "}
          <strong>4×4 post</strong>, and <strong>80 lb bags</strong> (0.60 cu ft each):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Posts</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Total Cu Ft</th>
                <th className="border border-gray-200 px-3 py-2 text-left">80 lb Bags</th>
                <th className="border border-gray-200 px-3 py-2 text-left">+10% Buffer</th>
              </tr>
            </thead>
            <tbody>
              {[
                [5, "3.2", 6, 7],
                [10, "6.3", 11, 12],
                [15, "9.5", 16, 18],
                [20, "12.6", 21, 24],
                [25, "15.8", 27, 30],
              ].map(([posts, cuFt, bags, buffer]) => (
                <tr key={posts} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{posts} posts</td>
                  <td className="border border-gray-200 px-3 py-1.5">{cuFt} cu ft</td>
                  <td className="border border-gray-200 px-3 py-1.5">{bags} bags</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{buffer} bags</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Note: actual bag counts shown in table are calculated independently and may differ
          slightly from the calculator above due to the 10&Prime; hole / 4×4 post assumption.
          Use the calculator for your exact inputs.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Call 811 (US Dig Safe) before digging any post holes to identify underground
            utilities. Hitting a gas or electric line can be fatal and will be your liability.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "How deep should fence posts be set?",
              a: "The standard rule is to bury 1/3 of the total post length. For a 6-foot fence with 8-foot posts, set 2–2.5 feet deep. In cold climates, dig below the local frost line (often 36–48 inches in northern states) to prevent heaving. A minimum of 2 feet is recommended regardless of post height.",
            },
            {
              q: "What mix of concrete is best for fence posts?",
              a: "Fast-setting concrete (such as Quikrete Fast-Setting or Sakrete Fast-Setting) is the most popular choice. Pour dry mix directly into the hole and add water — no mixing needed. It sets in 20–40 minutes, letting you continue work the same day. Standard 80 lb bags are the most economical option per cubic foot.",
            },
            {
              q: "Fast-set vs regular concrete for fence posts — which is better?",
              a: "Fast-setting concrete sets in 20–40 minutes and can be poured dry — ideal for fence posts since you don't need a mixer. Regular concrete takes 24–48 hours to cure but is slightly stronger (5,000 psi vs 4,000 psi). For typical residential fences, fast-set is the practical choice. Use regular concrete for heavy gates or structural posts bearing significant load.",
            },
            {
              q: "How long should I wait before attaching fence panels to new posts?",
              a: "With fast-setting concrete, posts are stable enough for light work within 4 hours and ready for fence panel installation after 24 hours. For regular concrete, wait at least 24–48 hours before attaching panels and 7 days for full working strength. Avoid applying significant lateral force for at least 28 days.",
            },
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
