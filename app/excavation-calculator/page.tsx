import type { Metadata } from "next";
import { ExcavationCalculator } from "./ExcavationCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Excavation Calculator — Cubic Yards, Truck Loads & Haul Cost",
  description:
    "Calculate excavation volume in cubic yards, truck loads needed, and hauling cost for any dig. Accounts for soil swell factors. Free online excavation calculator.",
  alternates: { canonical: "https://easybuildcalc.com/excavation-calculator" },
  openGraph: {
    title: "Excavation Calculator — Cubic Yards & Truck Loads",
    description: "Calculate excavation volume, truck loads, and haul cost for any soil type.",
    url: "https://easybuildcalc.com/excavation-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Excavation Volume and Truck Loads",
  step: [
    { "@type": "HowToStep", text: "Measure the excavation length, width, and depth in feet." },
    { "@type": "HowToStep", text: "Multiply length × width × depth to get cubic feet." },
    { "@type": "HowToStep", text: "Divide by 27 to convert to cubic yards (bank measure)." },
    { "@type": "HowToStep", text: "Multiply by the soil swell factor (1.12–1.55) to get loose cubic yards." },
    { "@type": "HowToStep", text: "Divide loose cubic yards by truck capacity to get number of truck loads." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the swell factor in excavation?", acceptedAnswer: { "@type": "Answer", text: "Swell factor accounts for soil expansion when excavated. Loam expands about 25% (factor 1.25), clay 35%, sand/gravel 12%, and rock 40–55%. A 100 cubic yard excavation in clay produces 135 loose cubic yards to haul." } },
    { "@type": "Question", name: "How many cubic yards fit in a dump truck?", acceptedAnswer: { "@type": "Answer", text: "A standard tandem dump truck holds 10–14 loose cubic yards. A tri-axle or large semi-dump holds 14–18 cubic yards. For estimates, use 12 yards for small projects and 14 for large hauls." } },
    { "@type": "Question", name: "How do I calculate excavation in cubic yards?", acceptedAnswer: { "@type": "Answer", text: "Multiply length × width × depth in feet, then divide by 27 to get cubic yards. A 30×20 ft excavation at 4 ft deep is 2,400 cubic feet ÷ 27 = 88.9 bank cubic yards. Apply swell factor for loose haul volume." } },
    { "@type": "Question", name: "How much does excavation cost per cubic yard?", acceptedAnswer: { "@type": "Answer", text: "Excavation and hauling typically costs $50–200 per bank cubic yard depending on soil type, depth, access, and location. Equipment rental for a skid steer or mini-excavator runs $300–600/day. Large projects with rock or poor access cost more." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Excavation Calculator", item: "https://easybuildcalc.com/excavation-calculator" },
  ],
};

export default function ExcavationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Excavation Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Excavation Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate excavation volume in cubic yards, number of truck loads, and hauling cost. Accounts for soil swell factors by soil type.</p>
      <ExcavationCalculator />
      <RelatedCalculators currentSlug="excavation-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Soil Swell Factors & Weight</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Soil Type</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Swell Factor</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Weight (lbs/yd³)</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Notes</th>
            </tr></thead>
            <tbody>
              {[
                ["Loam / Topsoil",   "1.25 (25%)",  "2,100",  "Common residential soil"],
                ["Clay",             "1.35 (35%)",  "2,700",  "Heavy, high swell — plan extra loads"],
                ["Sand / Gravel",    "1.12 (12%)",  "2,800",  "Low swell, easy to work"],
                ["Decomposed Rock",  "1.40 (40%)",  "3,000",  "Requires ripping or hammering"],
                ["Solid Rock",       "1.55 (55%)",  "4,500",  "Blasting or hydraulic hammer needed"],
              ].map(([s, sw, wt, n]) => (
                <tr key={s} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{s}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{sw}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{wt}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Bank vs. loose measure:</strong>{" "}
          <span className="text-amber-700">Excavation is calculated in "bank" cubic yards (in-ground volume). Once excavated, soil swells — a 100 bank yd³ clay excavation requires 135 loose yd³ of truck capacity to haul. Always size your haul estimate to loose volume.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "What is the swell factor in excavation?", a: "Swell factor is the ratio of loose (excavated) volume to bank (in-ground) volume. Soil expands when disturbed: loam by 25%, clay by 35%, sand/gravel by 12%, and solid rock by 55%. Use the loose volume to determine truck load requirements." },
            { q: "How many cubic yards fit in a dump truck?", a: "Standard tandem dump trucks hold 10–14 loose cubic yards. Tri-axle trucks hold 14–18 cubic yards. For budgeting, use 12 yd³ per load for small jobs. Confirm capacity with your hauler — weight limits (often 20–25 tons) may restrict loads before volume does for heavy soils." },
            { q: "How do I calculate excavation in cubic yards?", a: "Formula: Length (ft) × Width (ft) × Depth (ft) ÷ 27 = bank cubic yards. Then multiply by swell factor for loose cubic yards. Example: 30×20 ft at 4 ft = 2,400 cu ft ÷ 27 = 88.9 bank yd³. In clay (factor 1.35) = 120 loose yd³ to haul." },
            { q: "How much does excavation cost per cubic yard?", a: "All-in excavation (machine time + operator + hauling) typically runs $50–200 per bank cubic yard. Simple loam excavation with good access: $50–80/yd³. Rocky or confined sites: $150–300/yd³. Get multiple quotes — rates vary significantly by region and site conditions." },
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
