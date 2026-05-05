import type { Metadata } from "next";
import { WindowRoughOpeningCalculator } from "./WindowRoughOpeningCalculator";

export const metadata: Metadata = {
  title: "Free Window Rough Opening Calculator — Size & Header Chart",
  description:
    "Calculate window rough opening width, height, header size, and jack stud height instantly. Follows NAHB standard framing (+2\" width, +2.5\" height). Free online tool.",
  alternates: { canonical: "https://easybuildcalc.com/window-rough-opening-calculator" },
  openGraph: {
    title: "Window Rough Opening Calculator",
    description: "Find the rough opening size, header, and stud lengths for any window. Fast and free.",
    url: "https://easybuildcalc.com/window-rough-opening-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Window Rough Opening Size",
  description: "Determine the correct rough opening dimensions, header size, and framing member lengths for a window installation.",
  step: [
    { "@type": "HowToStep", text: "Find the window unit width and height from the manufacturer's spec sheet." },
    { "@type": "HowToStep", text: "Add 2 inches to the window width for the rough opening width (shimming clearance on each side)." },
    { "@type": "HowToStep", text: "Add 2.5 inches to the window height for the rough opening height (1.5\" rough sill + 1\" shim clearance)." },
    { "@type": "HowToStep", text: "Select the header size based on the rough opening width: ≤42\" → 2×6, ≤66\" → 2×8, ≤90\" → 2×10, ≤120\" → 2×12, wider → LVL." },
    { "@type": "HowToStep", text: "Cut jack (trimmer) studs to: sill height from floor + rough opening height." },
    { "@type": "HowToStep", text: "Cut king studs to: ceiling height − 3 inches (for top and bottom plates)." },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a rough opening for a window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A rough opening is the framed hole in a wall that a window fits into before trim and finishing. It is intentionally larger than the window unit to allow for shimming, leveling, and squaring the window during installation. The rough opening is bounded by a header at the top, a rough sill at the bottom, and jack (trimmer) studs on the sides.",
      },
    },
    {
      "@type": "Question",
      name: "How much bigger is a rough opening than the window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The standard rough opening is 2 inches wider and 2.5 inches taller than the window unit dimensions. The extra width allows for 3/4\" of shimming on each side plus clearance. The extra height accounts for the rough sill thickness (1.5\") and shim space top and bottom (0.5\" each). Some window manufacturers specify their own required rough opening — always check the spec sheet.",
      },
    },
    {
      "@type": "Question",
      name: "What size header do I need for a window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Header size is determined by the rough opening width and the load above. A common guide for single-story or top-floor windows in load-bearing walls: RO ≤ 42\" → doubled 2×6; 43\"–66\" → doubled 2×8; 67\"–90\" → doubled 2×10; 91\"–120\" → doubled 2×12; over 120\" → LVL beam (consult a structural engineer). Non-load-bearing walls can use smaller headers or cripples only. Always verify with local building codes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a building permit to replace or add a window?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Replacing a window in the same rough opening with the same size generally does not require a permit in most US jurisdictions. However, cutting a new window opening, enlarging an existing opening, or adding a window in a load-bearing wall almost always requires a permit and possibly engineer approval. Adding an egress window to a basement bedroom is also typically permitted. Check with your local building department before starting work.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Window Rough Opening Calculator", item: "https://easybuildcalc.com/window-rough-opening-calculator" },
  ],
};

export default function WindowRoughOpeningPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Window Rough Opening Calculator</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
        Free Window Rough Opening Calculator
      </h1>
      <p className="text-gray-600 mb-6">
        Enter your window unit dimensions to get the correct rough opening size, header specification,
        jack stud height, and other framing measurements.
      </p>

      <WindowRoughOpeningCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Standard Rough Opening Formulas</h2>
        <p>
          The rough opening (RO) must be slightly larger than the window unit to allow for shimming
          and leveling. The NAHB standard additions are:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-xs space-y-1">
          <p>RO Width = window unit width + 2&Prime;</p>
          <p>RO Height = window unit height + 2.5&Prime;</p>
          <p>Jack stud height = sill height from floor + RO height</p>
          <p>King stud length = (ceiling height × 12) − 3&Prime;</p>
          <p>Cripple stud height (below sill) = sill height − 1.5&Prime;</p>
        </div>
        <p>
          The 2&Prime; width addition provides roughly 3/4&Prime; of shimming clearance on each side.
          The 2.5&Prime; height addition accounts for the rough sill plate (1.5&Prime;) and shim space
          at the top and bottom (0.5&Prime; each). Always verify against the window manufacturer&apos;s
          installation guide, as some specify a different RO.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          Common Window Sizes, Rough Openings &amp; Headers
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Window Unit</th>
                <th className="border border-gray-200 px-3 py-2 text-left">RO Width</th>
                <th className="border border-gray-200 px-3 py-2 text-left">RO Height</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Header (load-bearing)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['24" × 36"', '26"', '38.5"', "Doubled 2×6"],
                ['30" × 48"', '32"', '50.5"', "Doubled 2×6"],
                ['36" × 48"', '38"', '50.5"', "Doubled 2×6"],
                ['48" × 48"', '50"', '50.5"', "Doubled 2×8"],
                ['60" × 48"', '62"', '50.5"', "Doubled 2×8"],
                ['72" × 60"', '74"', '62.5"', "Doubled 2×10"],
                ['84" × 60"', '86"', '62.5"', "Doubled 2×10"],
                ['96" × 60"', '98"', '62.5"', "Doubled 2×12"],
              ].map(([unit, row, roh, header]) => (
                <tr key={unit} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-medium">{unit}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{row}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{roh}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{header}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500">
          Header sizing above is for single-story or top-floor load-bearing walls under typical
          residential loads. Non-load-bearing walls may use smaller headers. Consult local codes
          or a structural engineer for multi-story or high-load applications.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Egress Window Requirements</h2>
        <p>
          Bedroom windows below grade (basement egress) must meet minimum egress requirements per
          IRC Section R310. The key minimums are:
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <strong>Net clear opening area:</strong> 5.7 sq ft minimum (5.0 sq ft for ground floor)
          </li>
          <li>
            <strong>Minimum net clear height:</strong> 24 inches
          </li>
          <li>
            <strong>Minimum net clear width:</strong> 20 inches
          </li>
          <li>
            <strong>Maximum sill height:</strong> 44 inches above the floor
          </li>
        </ul>
        <p>
          A common code-compliant egress window is 36&Prime; wide × 24&Prime; tall (net clear), which
          provides 6.0 sq ft of clear opening. The rough opening would be 38&Prime; × 26.5&Prime;.
          Note that egress windows always require a building permit.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
          <strong className="text-amber-800">Important:</strong>{" "}
          <span className="text-amber-700">
            These calculations follow common residential framing practice. Always verify header
            sizes with your local building code and consult a licensed contractor or structural
            engineer for load-bearing wall openings wider than 6 feet.
          </span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {[
            {
              q: "What is a rough opening for a window?",
              a: "A rough opening is the framed hole in a wall that a window fits into before trim and finishing. It is intentionally larger than the window unit to allow for shimming, leveling, and squaring the window during installation. The rough opening is bounded by a header at the top, a rough sill at the bottom, and jack (trimmer) studs on the sides.",
            },
            {
              q: "How much bigger is a rough opening than the window?",
              a: 'The standard rough opening is 2 inches wider and 2.5 inches taller than the window unit dimensions. The extra width allows for 3/4" of shimming on each side plus clearance. The extra height accounts for the rough sill thickness (1.5") and shim space top and bottom (0.5" each). Some window manufacturers specify their own required rough opening — always check the spec sheet.',
            },
            {
              q: "What size header do I need for a window?",
              a: 'Header size is determined by the rough opening width. A common guide for load-bearing walls: RO ≤ 42" → doubled 2×6; 43"–66" → doubled 2×8; 67"–90" → doubled 2×10; 91"–120" → doubled 2×12; over 120" → LVL beam. Non-load-bearing walls can use smaller headers. Always verify with local building codes.',
            },
            {
              q: "Do I need a building permit to replace or add a window?",
              a: "Replacing a window in the same rough opening generally does not require a permit in most US jurisdictions. However, cutting a new window opening, enlarging an existing opening, or adding a window in a load-bearing wall almost always requires a permit and possibly engineer approval. Check with your local building department before starting work.",
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
