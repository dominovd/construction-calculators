import type { Metadata } from "next";
import { DrywallCalculator } from "./DrywallCalculator";
import { PriceUpdatedBadge, PriceDisclaimer } from "@/components/PriceUpdatedBadge";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Drywall Calculator — Sheets & Cost for Any Room",
  description:
    "Calculate how many drywall sheets you need for walls and ceilings. Enter room dimensions, doors, and windows to get exact sheet count and material cost. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/drywall-calculator" },
  openGraph: {
    title: "Drywall Calculator",
    description: "Calculate drywall sheets and material cost for any room.",
    url: "https://easybuildcalc.com/drywall-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Drywall for a Room",
  description: "Calculate the number of drywall sheets needed for walls and ceiling.",
  step: [
    { "@type": "HowToStep", text: "Measure room length, width, and ceiling height in feet." },
    { "@type": "HowToStep", text: "Calculate total wall area: 2 × (length + width) × height." },
    { "@type": "HowToStep", text: "Subtract openings: ~21 sq ft per door, ~15 sq ft per window." },
    { "@type": "HowToStep", text: "Divide net area by 32 (4×8 sheet) and round up to get sheet count." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many sheets of drywall do I need for a 12×12 room?", acceptedAnswer: { "@type": "Answer", text: "A 12×12 room with 8-foot ceilings has approximately 384 sq ft of wall area. Minus 2 doors (42 sq ft), you need about 342 sq ft of drywall, which equals 11 sheets of 4×8 drywall (32 sq ft each) plus waste." } },
    { "@type": "Question", name: "What thickness drywall should I use for walls?", acceptedAnswer: { "@type": "Answer", text: "½-inch drywall is standard for most interior walls and ceilings. Use ⅝-inch for fire-rated walls (garages, between floors), soundproofing, and commercial applications. ¼-inch is for curved surfaces only." } },
    { "@type": "Question", name: "How much does drywall cost per sheet?", acceptedAnswer: { "@type": "Answer", text: "Standard ½-inch 4×8 drywall sheets cost $12–$20 each at home centers depending on type and location. Moisture-resistant (green board) and fire-rated (type X) varieties cost $15–$25 per sheet." } },
    { "@type": "Question", name: "Do I need special drywall for a bathroom?", acceptedAnswer: { "@type": "Answer", text: "Yes. Use moisture-resistant drywall (greenboard) in bathrooms — but not in shower or tub areas, which require cement board. Paperless drywall or glass-mat drywall is even more mold-resistant in humid areas." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Drywall Calculator", item: "https://easybuildcalc.com/drywall-calculator" },
  ],
};

export default function DrywallPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Drywall Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Drywall Calculator</h1>
      <p className="text-gray-600 mb-6">
        Calculate how many 4×8 drywall sheets you need for any room, including ceiling and waste factor.
      </p>

      <div className="mb-2">
        <PriceUpdatedBadge />
      </div>
      <DrywallCalculator />
      <PriceDisclaimer className="mt-3" />
      <RelatedCalculators currentSlug="drywall-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">How to Calculate Drywall</h2>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Wall Area = 2 × (Length + Width) × Height{"\n"}
          Net Area  = Wall Area + Ceiling Area − Openings{"\n"}
          Sheets    = ⌈Net Area ÷ 32⌉  (4×8 sheet = 32 sq ft)
        </pre>

        <h2 className="text-xl font-semibold text-gray-900">Drywall Thickness Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Thickness</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["¼\"", "Curved surfaces, over existing drywall"],
                ["⅜\"", "Repairs, garage ceilings (older homes)"],
                ["½\"", "Standard walls and ceilings (most common)"],
                ["⅝\"", "Fire-rated walls, soundproofing, commercial"],
              ].map(([t, u]) => (
                <tr key={t} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Don&apos;t Forget Supplies</h2>
        <p>
          This free tool gives you the sheet count — but budget for supplies too: joint compound
          (1 gallon per 100 sq ft), drywall tape, corner bead, screws (1 lb per 500 sq ft), and primer.
          For ceilings, use ⅝&quot; sag-resistant drywall — standard ½&quot; can sag between joists over time.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always add 10% waste. Cuts around outlets, light fixtures, and irregular angles
            consume more material than you expect.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many sheets of drywall do I need for a 12×12 room?", a: "A 12×12 room with 8-foot ceilings has approximately 384 sq ft of wall area. Minus 2 doors (42 sq ft), you need about 342 sq ft of drywall, which equals 11 sheets of 4×8 drywall (32 sq ft each) plus waste." },
            { q: "What thickness drywall should I use for walls?", a: "½-inch drywall is standard for most interior walls and ceilings. Use ⅝-inch for fire-rated walls (garages, between floors), soundproofing, and commercial applications. ¼-inch is for curved surfaces only." },
            { q: "How much does drywall cost per sheet?", a: "Standard ½-inch 4×8 drywall sheets cost $12–$20 each at home centers depending on type and location. Moisture-resistant (green board) and fire-rated (type X) varieties cost $15–$25 per sheet." },
            { q: "Do I need special drywall for a bathroom?", a: "Yes. Use moisture-resistant drywall (greenboard) in bathrooms — but not in shower or tub areas, which require cement board. Paperless drywall or glass-mat drywall is even more mold-resistant in humid areas." },
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
