import type { Metadata } from "next";
import { WallpaperCalculator } from "./WallpaperCalculator";

export const metadata: Metadata = {
  title: "Free Wallpaper Calculator — Rolls Needed for Any Room",
  description:
    "Calculate how many wallpaper rolls you need for any room. Accounts for doors, windows, pattern repeat waste, and roll size. Free online wallpaper calculator.",
  alternates: { canonical: "https://easybuildcalc.com/wallpaper-calculator" },
  openGraph: {
    title: "Wallpaper Calculator — Rolls for Any Room",
    description: "Calculate wallpaper rolls needed for any room with doors, windows, and waste.",
    url: "https://easybuildcalc.com/wallpaper-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Wallpaper for a Room",
  step: [
    { "@type": "HowToStep", text: "Measure the room perimeter (2 × length + 2 × width) in feet." },
    { "@type": "HowToStep", text: "Multiply perimeter by wall height to get gross wall area." },
    { "@type": "HowToStep", text: "Subtract 21 sq ft per door and 15 sq ft per window." },
    { "@type": "HowToStep", text: "Add 15% waste (or 20–25% for patterned wallpaper)." },
    { "@type": "HowToStep", text: "Divide by the square footage of your roll to get the number of rolls." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How many rolls of wallpaper do I need?", acceptedAnswer: { "@type": "Answer", text: "Calculate wall area (perimeter × height), subtract openings, add 15% waste, then divide by roll coverage. A US standard roll covers 28 sq ft. A 12×15 ft room at 9 ft ceilings with 2 windows and 1 door needs about 8–9 rolls." } },
    { "@type": "Question", name: "How much extra wallpaper should I buy for pattern matching?", acceptedAnswer: { "@type": "Answer", text: "Plain or random textures: 10–15% extra. Small pattern repeat (under 6 inches): 15–20%. Large pattern repeat (over 12 inches): 25–30%. Buy all rolls from the same batch/dye lot — numbers won't match between production runs." } },
    { "@type": "Question", name: "How many sq ft does a double roll of wallpaper cover?", acceptedAnswer: { "@type": "Answer", text: "A US double roll covers approximately 56–57 square feet. A Euro double roll (standard in many imports) covers about 56 sq ft. Always verify the coverage printed on your specific roll label — actual usable coverage is often slightly less after trimming selvage." } },
    { "@type": "Question", name: "How much does it cost to wallpaper a room?", acceptedAnswer: { "@type": "Answer", text: "Wallpaper itself costs $25–150 per double roll. A 12×15 room typically needs 8–10 double rolls — $200–1,500 in materials. Professional installation adds $200–600 for a standard room. Specialty papers (grasscloth, foil) and high ceilings cost more." } },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Wallpaper Calculator", item: "https://easybuildcalc.com/wallpaper-calculator" },
  ],
};

export default function WallpaperPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a><span className="mx-1.5">›</span>
        <span className="text-gray-700">Wallpaper Calculator</span>
      </nav>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Free Wallpaper Calculator</h1>
      <p className="text-gray-600 mb-6">Calculate how many wallpaper rolls you need for any room. Deducts doors and windows, adjusts for waste, and supports US and Euro roll sizes.</p>
      <WallpaperCalculator />
      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Wallpaper Roll Sizes & Coverage</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead><tr className="bg-gray-100">
              <th className="border border-gray-200 px-3 py-2 text-left">Roll Type</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Width</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Length</th>
              <th className="border border-gray-200 px-3 py-2 text-left">Coverage</th>
            </tr></thead>
            <tbody>
              {[
                ["US Single Roll",      "20.5\"", "16.5 ft", "~28 sq ft"],
                ["US Double Roll",      "20.5\"", "33 ft",   "~57 sq ft"],
                ["Euro Double Roll",    "20.5\"", "33 ft",   "~56 sq ft"],
                ["Wide Commercial Roll","27\"",   "15 yd",   "~101 sq ft"],
              ].map(([t, w, l, c]) => (
                <tr key={t} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{t}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{w}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{l}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-blue-700 font-semibold">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Buy from the same dye lot:</strong>{" "}
          <span className="text-amber-700">Wallpaper color can vary between production batches. Always buy all rolls for a room at once from the same lot number — printed on the roll label. If you run short and reorder, the new lot may not match exactly.</span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            { q: "How many rolls of wallpaper do I need?", a: "Calculate gross wall area (perimeter × height), subtract 21 sq ft per door and 15 sq ft per window, add 15% waste, then divide by your roll's sq ft coverage. A US double roll covers ~57 sq ft. A 12×15 ft room at 9 ft with 1 door and 2 windows needs roughly 8–9 double rolls." },
            { q: "How much extra wallpaper for pattern matching?", a: "Plain textures and stripes: 10–15% extra. Wallpapers with a 3–6 inch pattern repeat: 15–20%. Large-repeat designs (12+ inches): 25–30%. The larger the repeat, the more you waste on matching adjacent strips. Our calculator defaults to 15% — increase it manually for patterned paper." },
            { q: "How many sq ft does a double roll cover?", a: "A US or Euro double roll covers 56–57 sq ft. But usable coverage is often less after trimming edges and matching patterns — budget for 50–54 sq ft effective coverage per double roll for plain paper, less for patterned. Always check the label; coverage is printed on every roll." },
            { q: "How much does it cost to wallpaper a room?", a: "Budget wallpaper: $15–30 per double roll. Mid-range: $30–80. Designer/specialty: $80–300+. A standard 12×15 ft room needs 8–10 double rolls. Add $200–600 for professional installation. DIY installation with pre-pasted wallpaper is accessible for first-timers on smooth walls." },
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
