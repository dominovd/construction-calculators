import type { Metadata } from "next";
import { ShinglesCalculator } from "./ShinglesCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Shingles Calculator — Squares, Bundles & Cost Estimator",
  description:
    "Calculate how many roofing shingles you need for any roof. Enter building footprint and pitch to get squares, bundle count, and material cost. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/shingles-calculator" },
  openGraph: {
    title: "Shingles Calculator",
    description: "Calculate roofing squares, bundles, and cost for any roof.",
    url: "https://easybuildcalc.com/shingles-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Roofing Shingles",
  description: "Calculate the number of shingle squares and bundles needed for a roof.",
  step: [
    { "@type": "HowToStep", text: "Measure the building footprint (length × width in feet)." },
    { "@type": "HowToStep", text: "Multiply by the pitch factor for your roof slope to get actual roof area." },
    { "@type": "HowToStep", text: "Add 10–15% waste for hips, valleys, and starter course." },
    { "@type": "HowToStep", text: "Divide by 100 to get squares; multiply by 3 to get bundles." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many bundles of shingles do I need per square?", acceptedAnswer: { "@type": "Answer", text: "Standard 3-tab and architectural (dimensional) shingles come 3 bundles per square (100 sq ft). Heavier premium shingles may require 4 bundles per square — always check the product packaging." } },
    { "@type": "Question", name: "How many squares of shingles for a 1,500 sq ft house?", acceptedAnswer: { "@type": "Answer", text: "The roof area is larger than the house footprint due to pitch. A 1,500 sq ft house with a 4:12 pitch has approximately 1,575 sq ft of roof area (multiply by 1.05 pitch factor). That's about 17 squares or 51 bundles, plus starter course and ridge cap." } },
    { "@type": "Question", name: "How long do architectural shingles last?", acceptedAnswer: { "@type": "Answer", text: "Quality architectural (dimensional) shingles are rated for 25–30 years and often last 20–25 years in practice. Premium Class 4 impact-resistant shingles can last 30–40 years and may qualify for insurance discounts." } },
    { "@type": "Question", name: "What is the minimum pitch for asphalt shingles?", acceptedAnswer: { "@type": "Answer", text: "Standard asphalt shingles require a minimum 2:12 pitch with special underlayment installation. Below 2:12, you need a membrane roofing system (low-slope materials). Most manufacturers recommend 4:12 or steeper for best performance." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Shingles Calculator", item: "https://easybuildcalc.com/shingles-calculator" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Asphalt Shingles Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/shingles-calculator",
};


export default function ShinglesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Shingles Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Shingles Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate roofing squares, bundle count, and material cost for any roof pitch and footprint.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <ShinglesCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="shingles-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">What is a Roofing Square?</h2>
        <p>
          A <strong>roofing square</strong> equals 100 square feet of roof surface. It&apos;s the
          standard unit roofers use when ordering and pricing shingles. Most architectural shingles
          come in <strong>3 bundles per square</strong>, though heavier products may need 4 bundles.
          Use our free calculator above to get your square and bundle count based on footprint and pitch.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Pitch Factor Chart</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Pitch</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Slope Factor</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Classification</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2:12", "1.02", "Low slope"],
                ["4:12", "1.05", "Conventional"],
                ["6:12", "1.12", "Moderate"],
                ["8:12", "1.20", "Steep"],
                ["12:12", "1.41", "Very steep"],
              ].map(([pitch, factor, cls]) => (
                <tr key={pitch} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{pitch}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{factor}×</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always order 1 extra square for waste, cuts, and future repairs.
            Also budget for underlayment (1 roll per 4 squares), drip edge, and ridge cap shingles.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many bundles of shingles do I need per square?", a: "Standard 3-tab and architectural (dimensional) shingles come 3 bundles per square (100 sq ft). Heavier premium shingles may require 4 bundles per square — always check the product packaging." },
            { q: "How many squares of shingles for a 1,500 sq ft house?", a: "The roof area is larger than the house footprint due to pitch. A 1,500 sq ft house with a 4:12 pitch has approximately 1,575 sq ft of roof area (multiply by 1.05 pitch factor). That's about 17 squares or 51 bundles, plus starter course and ridge cap." },
            { q: "How long do architectural shingles last?", a: "Quality architectural (dimensional) shingles are rated for 25–30 years and often last 20–25 years in practice. Premium Class 4 impact-resistant shingles can last 30–40 years and may qualify for insurance discounts." },
            { q: "What is the minimum pitch for asphalt shingles?", a: "Standard asphalt shingles require a minimum 2:12 pitch with special underlayment installation. Below 2:12, you need a membrane roofing system (low-slope materials). Most manufacturers recommend 4:12 or steeper for best performance." },
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
