import type { Metadata } from "next";
import { MetalRoofingCalculator } from "./MetalRoofingCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Metal Roofing Calculator — Squares, Panels & Cost",
  description:
    "Calculate metal roofing panels, squares, and total material cost for any roof pitch and footprint. Supports standing seam, R-panel, and corrugated. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/metal-roofing-calculator" },
  openGraph: {
    title: "Metal Roofing Calculator — Panels, Squares & Cost",
    description: "Calculate metal roofing panels and cost for any pitch and footprint.",
    url: "https://easybuildcalc.com/metal-roofing-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Metal Roofing Panels",
  step: [
    { "@type": "HowToStep", text: "Measure roof length and width (flat footprint) in feet." },
    { "@type": "HowToStep", text: "Determine roof pitch (rise per 12 inches of run)." },
    { "@type": "HowToStep", text: "Multiply flat area by pitch multiplier (√(rise²+144)/12) to get actual roof area." },
    { "@type": "HowToStep", text: "Add 10% waste for standing seam or corrugated panels." },
    { "@type": "HowToStep", text: "Divide by 100 to get roofing squares, then multiply by price per square foot." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many squares of metal roofing do I need?", acceptedAnswer: { "@type": "Answer", text: "Measure your flat roof footprint (length × width), multiply by the pitch factor, add 10% waste, then divide by 100. A 40×30 ft house with a 4/12 pitch has a flat area of 1,200 sq ft. Pitch factor = 1.054, so actual area = 1,265 sq ft + 10% = 1,392 sq ft = 13.9 squares." } },
    { "@type": "Question", name: "How much does metal roofing cost per square?", acceptedAnswer: { "@type": "Answer", text: "Standing seam metal roofing runs $300–700 per square (100 sq ft) installed. R-panel or exposed-fastener metal is cheaper at $150–350 per square installed. Materials alone run $100–400 per square depending on panel type and gauge." } },
    { "@type": "Question", name: "How long does metal roofing last?", acceptedAnswer: { "@type": "Answer", text: "Steel metal roofing typically lasts 40–70 years. Galvalume and Galvanized steel panels last 40–60 years. Aluminum lasts 50+ years. Standing seam profiles outlast exposed-fastener panels because there are no fasteners to fail. Most metal roofs outlast the buildings they cover." } },
    { "@type": "Question", name: "What pitch is too low for metal roofing?", acceptedAnswer: { "@type": "Answer", text: "Standing seam metal roofing can be installed on pitches as low as 1/12. Exposed-fastener R-panel requires at least 2/12 to 3/12. For pitches below 2/12, use a concealed-fastener system with continuous sealant to prevent water infiltration at the laps." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Metal Roofing Calculator", item: "https://easybuildcalc.com/metal-roofing-calculator" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Metal Roofing Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/metal-roofing-calculator",
};


export default function MetalRoofingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Metal Roofing Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Metal Roofing Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate metal roofing panels, squares, and material cost for any pitch and footprint. Supports standing seam, R-panel, and corrugated profiles.</p>
      <MetalRoofingCalculator />
      <RelatedCalculators currentSlug="metal-roofing-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Metal Roofing Panel Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Panel Type</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Min Pitch</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Material $/sq ft</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Lifespan</th>
            </tr></thead>
            <tbody>
              {[
                ["Standing Seam",   "1/12",  "$2.50–6.00", "50–70 yrs"],
                ["R-Panel (exposed)","2/12", "$1.50–3.50", "30–45 yrs"],
                ["Corrugated",      "3/12",  "$1.00–2.50", "30–40 yrs"],
                ["Metal Shingles",  "3/12",  "$3.00–7.00", "40–60 yrs"],
              ].map(([t, p, c, l]) => (
                <tr key={t} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{p}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{c}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm">
          <strong className="text-blue-900">Pitch multiplier:</strong>{" "}
          <span className="text-blue-700">Your flat footprint underestimates actual roof area. A 4/12 pitch adds 5.4% more area; an 8/12 pitch adds 20%. Always calculate actual roof area using the pitch multiplier before ordering panels.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many squares of metal roofing do I need?", a: "Measure your flat footprint (length × width), multiply by the pitch factor (√(rise²+144)/12), add 10% waste, then divide by 100 to get squares. A 40×30 ft house at 4/12 pitch = 1,200 × 1.054 = 1,265 sq ft + 10% = 13.9 squares." },
            { q: "How much does metal roofing cost per square?", a: "Materials run $100–400 per square (100 sq ft) depending on panel profile and gauge. Installed, standing seam costs $300–700/square. R-panel installed runs $150–350/square. Metal shingles fall between. Request quotes from at least three contractors — regional pricing varies significantly." },
            { q: "How long does metal roofing last?", a: "Steel panels last 40–70 years; aluminum 50+ years. Exposed-fastener profiles are limited by fastener life (30–45 years). Standing seam avoids this failure mode and typically lasts the full 50–70 year range. Most metal roofs outlast the life expectancy of the building." },
            { q: "What pitch is too low for metal roofing?", a: "Standing seam can handle pitches as low as 1/12 with proper underlayment. R-panel and corrugated need at least 2/12–3/12 to prevent water infiltration at exposed fasteners. Below 2/12, specify a concealed-fastener system with continuous urethane sealant at laps." },
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
