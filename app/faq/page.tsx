import type { Metadata } from "next";
import { FaqHub } from "./FaqHub";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Construction FAQ — How Much Material Do I Need?",
  description:
    "Quick answers to common construction questions: how many bags of concrete, gallons of paint, sheets of drywall, and more. Free calculators included.",
  alternates: { canonical: "https://easybuildcalc.com/faq" },
  openGraph: {
    title: "Construction FAQ — How Much Material Do I Need?",
    description: "Quick answers with calculations for common construction quantity questions.",
    url: "https://easybuildcalc.com/faq",
  },
};

// ItemList schema for the FAQ hub
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Construction Material FAQ",
  description: "Common questions about construction material quantities with direct answers",
  numberOfItems: FAQS.length,
  itemListElement: FAQS.map((faq, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: faq.question,
    url: `https://easybuildcalc.com/faq/${faq.slug}`,
  })),
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "FAQ",  item: "https://easybuildcalc.com/faq" },
  ],
};

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">FAQ</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Construction FAQ</h1>
      <p className="text-gray-600 mb-6">
        Direct answers to "how much do I need" questions — with step-by-step calculations and free calculators.
      </p>
      <FaqHub />
    </div>
  );
}
