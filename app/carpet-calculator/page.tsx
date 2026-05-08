import type { Metadata } from "next";
import { CarpetCalculator } from "./CarpetCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Carpet Calculator — Square Yards & Cost for Any Room",
  description:
    "Calculate how many square yards of carpet you need for any room, including waste. Estimates carpet and pad cost. Free online carpet calculator.",
  alternates: { canonical: "https://easybuildcalc.com/carpet-calculator" },
  openGraph: {
    title: "Carpet Calculator — Square Yards & Total Cost",
    description: "Calculate carpet square yards and cost with padding for any room.",
    url: "https://easybuildcalc.com/carpet-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Carpet for a Room",
  step: [
    { "@type": "HowToStep", text: "Measure the room length and width in feet." },
    { "@type": "HowToStep", text: "Multiply to get square footage." },
    { "@type": "HowToStep", text: "Add 10% for waste and seams." },
    { "@type": "HowToStep", text: "Divide by 9 to convert square feet to square yards." },
    { "@type": "HowToStep", text: "Multiply by price per square yard for carpet and pad cost." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I calculate square yards of carpet?", acceptedAnswer: { "@type": "Answer", text: "Multiply room length × width in feet to get square footage, add 10% for waste, then divide by 9. A 12×15 ft room is 180 sq ft. With 10% waste = 198 sq ft ÷ 9 = 22 square yards." } },
    { "@type": "Question", name: "How much does carpet cost per square yard?", acceptedAnswer: { "@type": "Answer", text: "Basic carpet runs $2–5 per square yard. Mid-grade carpet is $5–10/sq yd. Premium carpet can reach $15–25/sq yd or more. Carpet pad adds $1–3/sq yd. Installation labor adds $3–8/sq yd." } },
    { "@type": "Question", name: "How wide is carpet sold?", acceptedAnswer: { "@type": "Answer", text: "Most residential carpet is sold in 12-foot wide rolls. Some commercial carpet comes in 6-foot or 15-foot widths. To minimize seams, plan your cut from the roll to match your room dimensions." } },
    { "@type": "Question", name: "How much extra carpet should I buy?", acceptedAnswer: { "@type": "Answer", text: "Add 10% for rooms with straight walls. Add 15% for rooms with alcoves, closets, or angled walls. Keep leftover carpet for future patch repairs — carpet dye lots change over time." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Carpet Calculator", item: "https://easybuildcalc.com/carpet-calculator" },
  ],
};

export default function CarpetPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Carpet Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Carpet Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate square yards of carpet needed for any room, with waste included. Estimates total cost for carpet and pad.</p>
      <CarpetCalculator />
      <RelatedCalculators currentSlug="carpet-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Carpet Cost Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Component</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Low</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Mid</th>
              <th className="border border-gray-200 px-3 py-2 text-left">High</th>
            </tr></thead>
            <tbody>
              {[
                ["Carpet (per sq yd)",      "$2–5",  "$5–10",  "$15–25+"],
                ["Pad (per sq yd)",         "$1–1.50","$1.50–2.50","$3–5"],
                ["Installation (per sq yd)","$3–4",  "$4–6",   "$6–8"],
                ["Tack strips & misc",      "$0.50","$0.75",  "$1.00"],
              ].map(([c, lo, mi, hi]) => (
                <tr key={c} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{c}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-green-700">{lo}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{mi}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700">{hi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
          <strong className="text-blue-900">Buying tip:</strong>{" "}
          <span className="text-blue-700">Carpet is sold by the square yard but measured in square feet. Divide your square footage by 9 to get square yards. Always buy from the same dye lot — order all carpet for a project at once to ensure color consistency.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How do I calculate square yards of carpet?", a: "Length (ft) × Width (ft) ÷ 9 = square yards. For a 12×15 ft room: 180 ÷ 9 = 20 sq yd. Add 10% waste = 22 sq yd. Always round up when ordering — you can't return partial rolls." },
            { q: "How much does carpet cost per square yard?", a: "Basic polyester carpet: $2–5/sq yd. Mid-grade nylon: $5–10/sq yd. Premium wool or SmartStrand: $15–25/sq yd. Add $1–3 for pad and $3–8 for professional installation. Total installed cost ranges from $6 to $36/sq yd." },
            { q: "How wide is carpet sold?", a: "Standard residential carpet rolls are 12 feet wide. This means a 12×15 ft room can be cut from one piece with 0 seams. A 14×20 ft room would need two pieces seamed together. Plan cuts to minimize seams in high-traffic areas." },
            { q: "How much extra carpet should I buy?", a: "10% extra covers waste for a standard rectangular room. Add 15% for rooms with closets, L-shapes, or angled walls. Always save leftover pieces — if a section gets damaged, a patch from the same dye lot is invisible." },
          ].map(({ q, a }) => (
            <details key={q} className="border border-gray-200 rounded-lg">
              <summary className="font-semibold text-gray-800 px-4 py-3 cursor-pointer select-none list-none flex justify-between items-center hover:bg-gray-50 rounded-lg">
                <span>{q}</span><span className="text-gray-400 ml-2 flex-shrink-0 text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 border-t border-gray-100"><p className="text-gray-600 pt-3">{a}</p></div>
            </details>
          ))}
        </div>
      </article>
    </div>
  );
}
