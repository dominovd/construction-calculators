import type { Metadata } from "next";
import { PaintCalculator } from "./PaintCalculator";

export const metadata: Metadata = {
  title: "Free Paint Calculator — Gallons Needed for Any Room",
  description:
    "Calculate how many gallons of paint you need for walls and ceiling. Enter room dimensions, number of coats, and doors/windows for an accurate estimate. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/paint-calculator" },
  openGraph: {
    title: "Paint Calculator",
    description: "Calculate paint gallons needed for any room with waste factor.",
    url: "https://easybuildcalc.com/paint-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Paint for a Room",
  description: "Calculate how many gallons of paint you need for walls and ceiling.",
  step: [
    { "@type": "HowToStep", text: "Measure room length, width, and ceiling height in feet." },
    { "@type": "HowToStep", text: "Calculate wall area: 2 × (length + width) × height." },
    { "@type": "HowToStep", text: "Subtract doors (~21 sq ft each) and windows (~15 sq ft each)." },
    { "@type": "HowToStep", text: "Divide by 350 (sq ft per gallon) and multiply by number of coats." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many gallons of paint do I need for a 12×12 room?", acceptedAnswer: { "@type": "Answer", text: "A 12×12 room with 8-foot ceilings has about 320 sq ft of paintable wall area (minus door and window). At 350 sq ft per gallon, you need about 1 gallon per coat — so 2 gallons for two coats." } },
    { "@type": "Question", name: "Does primer count as a coat of paint?", acceptedAnswer: { "@type": "Answer", text: "No. Primer is a separate product applied before paint. If painting over new drywall, a different color, or bare wood, always prime first. This improves adhesion, evens absorption, and often reduces the number of finish coats needed." } },
    { "@type": "Question", name: "How much paint coverage does one gallon provide?", acceptedAnswer: { "@type": "Answer", text: "One gallon of paint covers approximately 350–400 sq ft on smooth, primed surfaces. Rough, textured, or porous surfaces may only yield 250–300 sq ft per gallon. Always check the manufacturer's label for exact coverage." } },
    { "@type": "Question", name: "Is it cheaper to buy a 5-gallon bucket?", acceptedAnswer: { "@type": "Answer", text: "Yes, for large projects. A 5-gallon bucket typically saves 15–25% compared to buying five individual gallons. If you need 4 or more gallons of the same color, the 5-gallon option is almost always more economical." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Paint Calculator", item: "https://easybuildcalc.com/paint-calculator" },
  ],
};

export default function PaintPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Paint Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Paint Calculator</h1>
      <p className="text-gray-600 mb-6">
        Find out exactly how many gallons of paint to buy for any room — walls and ceiling included.
      </p>

      <PaintCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">How Much Paint Do I Need?</h2>
        <p>
          Use our free calculator above to get an accurate gallon count before heading to the store.
          One gallon of paint typically covers <strong>350–400 square feet</strong> on smooth surfaces.
          Most rooms need two coats — one for coverage and one for an even finish. New drywall or
          dramatic color changes may need a third coat.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Paint Coverage by Surface</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Surface Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Sq ft / Gallon</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Smooth drywall (primed)", "350–400"],
                ["New unprimed drywall",    "300–350"],
                ["Rough or textured wall",  "250–300"],
                ["Bare wood or masonry",    "200–300"],
                ["Second coat (any surface)", "400+"],
              ].map(([s, c]) => (
                <tr key={s} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{s}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Gallon vs. Quart</h2>
        <p>
          For accent walls or small touch-ups, a quart (covers ~87 sq ft) is often enough.
          Buying gallons is more economical for full rooms. Most paint stores can color-match
          any sample and mix custom colors in both sizes.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Pro tip:</strong>{" "}
          <span className="text-amber-700">
            Always buy slightly more than you need and save a quart for touch-ups.
            Paint batches vary slightly in color — mismatched touch-ups are noticeable.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many gallons of paint do I need for a 12×12 room?", a: "A 12×12 room with 8-foot ceilings has about 320 sq ft of paintable wall area (minus door and window). At 350 sq ft per gallon, you need about 1 gallon per coat — so 2 gallons for two coats." },
            { q: "Does primer count as a coat of paint?", a: "No. Primer is a separate product applied before paint. If painting over new drywall, a different color, or bare wood, always prime first. This improves adhesion, evens absorption, and often reduces the number of finish coats needed." },
            { q: "How much paint coverage does one gallon provide?", a: "One gallon of paint covers approximately 350–400 sq ft on smooth, primed surfaces. Rough, textured, or porous surfaces may only yield 250–300 sq ft per gallon. Always check the manufacturer's label for exact coverage." },
            { q: "Is it cheaper to buy a 5-gallon bucket?", a: "Yes, for large projects. A 5-gallon bucket typically saves 15–25% compared to buying five individual gallons. If you need 4 or more gallons of the same color, the 5-gallon option is almost always more economical." },
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
