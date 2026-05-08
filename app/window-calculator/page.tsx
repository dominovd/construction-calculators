import type { Metadata } from "next";
import { WindowCalculator } from "./WindowCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Window Calculator — Count, Size & Replacement Cost",
  description:
    "Calculate window material and installation cost for any mix of window types and sizes. Supports double-hung, casement, bay, skylight, and picture windows. Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/window-calculator" },
  openGraph: {
    title: "Window Calculator — Cost for Any Window Type",
    description: "Calculate window replacement or new construction cost by type and size.",
    url: "https://easybuildcalc.com/window-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Window Replacement Cost",
  step: [
    { "@type": "HowToStep", text: "List each window type and its rough opening dimensions (width × height in inches)." },
    { "@type": "HowToStep", text: "Enter the quantity and unit price for each window type." },
    { "@type": "HowToStep", text: "Set the labor rate per window (varies by type — bay windows take longer)." },
    { "@type": "HowToStep", text: "Add all material costs plus labor to get your total project estimate." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How much does window replacement cost?", acceptedAnswer: { "@type": "Answer", text: "Window replacement costs $300–1,200 per window installed, including materials and labor. Basic double-hung vinyl windows run $150–400 each; casements are $200–600; bay windows $600–2,500+. Installation labor adds $75–200 per window for standard replacements." } },
    { "@type": "Question", name: "What is the standard window size?", acceptedAnswer: { "@type": "Answer", text: "The most common residential double-hung window is 36 inches wide × 48 inches tall. Standard sizes range from 24×36 to 48×60 inches. Bay windows are typically 6–12 feet wide. Always measure the rough opening (framed hole) not the window unit itself." } },
    { "@type": "Question", name: "How long does window installation take?", acceptedAnswer: { "@type": "Answer", text: "A straightforward insert replacement (no frame changes) takes 1–2 hours per window. Full-frame replacement in new construction takes 30–60 minutes per window. Bay and bow windows take 4–8 hours. A full house of 10–15 windows can typically be done in one day by a two-person crew." } },
    { "@type": "Question", name: "What window type is most energy efficient?", acceptedAnswer: { "@type": "Answer", text: "Casement and awning windows seal tightest when closed (the sash compresses against the frame). For cold climates, look for triple-pane glass, low-E coating, and argon or krypton gas fill. ENERGY STAR windows save 12–33% on heating and cooling compared to non-certified windows." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Window Calculator", item: "https://easybuildcalc.com/window-calculator" },
  ],
};

export default function WindowPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Window Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Window Calculator</h1>
      <p className="text-gray-600 mb-6">Estimate window material and installation cost for any mix of window types and sizes. Add multiple windows with different dimensions and styles.</p>
      <WindowCalculator />
      <RelatedCalculators currentSlug="window-calculator" />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Window Type Cost Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Window Type</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Material Range</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Labor Range</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Best Use</th>
            </tr></thead>
            <tbody>
              {[
                ["Double-Hung",  "$150–500",   "$75–150",   "Bedrooms, living rooms"],
                ["Casement",     "$200–600",   "$100–200",  "Views, ventilation"],
                ["Sliding",      "$150–450",   "$75–150",   "Wide openings, basements"],
                ["Bay / Bow",    "$600–2,500+","$200–600",  "Living rooms, dining areas"],
                ["Skylight",     "$300–2,000+","$400–1,500","Roofs, vaulted ceilings"],
                ["Picture",      "$100–800",   "$75–150",   "Light without ventilation"],
              ].map(([t, m, l, u]) => (
                <tr key={t} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{m}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{l}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{u}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <strong className="text-green-900">Tax credits available:</strong>{" "}
          <span className="text-green-700">ENERGY STAR-certified windows qualify for a federal tax credit of up to 30% of cost (up to $600 per year for windows). Replace windows in the same calendar year to maximize the credit. Check energystar.gov for eligible products.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How much does window replacement cost?", a: "Standard double-hung vinyl replacement windows run $150–500 per unit plus $75–150 labor = $225–650 installed. Casements cost $275–800 installed. Bay windows are $800–3,000+. A 10-window house typically runs $3,000–8,000 for mid-grade vinyl windows with professional installation." },
            { q: "What is the standard window size?", a: "The most common residential window is 36\"×48\" (double-hung). Standard widths run 24–48 inches; standard heights 36–60 inches. Rough opening is typically 0.5\" larger than the window unit on each side. Always measure the rough opening before ordering — units are sized to fit the rough opening." },
            { q: "How long does window installation take?", a: "Insert replacement (same frame, new sash): 1–2 hours per window. Full-frame replacement: 2–4 hours per window. Bay or bow windows: 4–8 hours. A 2-person crew can typically replace a full house of 10–15 standard windows in one day. Skylights add half a day each." },
            { q: "What window type is most energy efficient?", a: "Casement and awning windows compress tightly against the frame when locked, eliminating air gaps. Pair with triple-pane glass, low-E coating (U-factor ≤0.30), and argon gas fill for maximum efficiency. ENERGY STAR-certified windows reduce heating and cooling costs 12–33% versus single-pane." },
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
