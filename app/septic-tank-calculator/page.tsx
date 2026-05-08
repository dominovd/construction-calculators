import type { Metadata } from "next";
import { SepticTankCalculator } from "./SepticTankCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free Septic Tank Size Calculator — Tank & Drain Field Sizing",
  description:
    "Calculate the minimum septic tank size and drain field area for your home. Enter bedrooms, occupants, water usage, and soil type to get code-based sizing estimates.",
  alternates: { canonical: "https://easybuildcalc.com/septic-tank-calculator" },
  openGraph: {
    title: "Free Septic Tank Size Calculator — Tank & Drain Field Sizing",
    description:
      "Find the right septic tank size and drain field area based on bedrooms, occupants, daily water usage, and soil type.",
    url: "https://easybuildcalc.com/septic-tank-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Size a Septic Tank and Drain Field",
  description:
    "Calculate the minimum septic tank capacity and drain field area required for a residential property based on bedrooms, occupants, water usage, and soil type.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter number of bedrooms",
      text: "Input the number of bedrooms in your home to determine the code-minimum tank size.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter occupants and water usage",
      text: "Enter the number of occupants and estimated daily water usage per person in gallons.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Select soil type",
      text: "Choose your soil type: sandy (fast draining), loamy (average), or clay (slow draining). This determines the drain field loading rate.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review your sizing",
      text: "View the recommended minimum tank size, daily flow, drain field area, and estimated trench length.",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How big of a septic tank do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most US codes require a minimum 1,000-gallon tank for homes with 1–3 bedrooms, 1,250 gallons for 4 bedrooms, and 1,500 gallons for 5 bedrooms. The actual required size is the greater of the code minimum or twice your daily water flow. A family of 4 using 75 gallons per person per day generates 300 GPD, so the tank minimum would be max(1,000, 600) = 1,000 gallons.",
      },
    },
    {
      "@type": "Question",
      name: "How often should you pump a septic tank?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential septic tanks should be pumped every 3–5 years. The frequency depends on tank size and household water usage. A 1,000-gallon tank serving 4 people typically needs pumping every 3–4 years. Neglecting pumping leads to solids overflowing into the drain field, causing costly failures.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a septic system last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-maintained septic tank lasts 20–40 years. Concrete tanks can last 40+ years; plastic and fiberglass tanks 30–40 years. The drain field typically lasts 25–30 years but can fail earlier if overloaded, clogged, or if solids escape the tank. Regular pumping is the most important maintenance factor.",
      },
    },
    {
      "@type": "Question",
      name: "Can I install my own septic system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In most US jurisdictions, a permit is required and the system must be designed by a licensed engineer or soil scientist and inspected by the local health department. Some rural counties allow owner-installation under a permit. Never install a system without permits — unpermitted systems can prevent home sales and result in mandatory removal at your expense.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://easybuildcalc.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Septic Tank Size Calculator",
      item: "https://easybuildcalc.com/septic-tank-calculator",
    },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Septic Tank Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/septic-tank-calculator",
};


export default function SepticTankPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Free Septic Tank Size Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Calculate minimum septic tank capacity and drain field size based on bedrooms, occupants,
        water usage, and soil type.
      </p>

      <SepticTankCalculator />
      <RelatedCalculators currentSlug="septic-tank-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Standard Septic Tank Sizes by Bedrooms
          </h2>
          <p className="mb-3">
            Most US state and county codes establish minimum septic tank capacities based on bedroom
            count, since bedrooms are used as a proxy for potential occupancy. The actual required
            size is the greater of the code minimum and twice the daily flow estimate.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Bedrooms</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Code Minimum</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Typical Occupants</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Recommended</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["1–2", "1,000 gal", "1–3 people", "1,000 gal"],
                  ["3", "1,000 gal", "2–4 people", "1,000–1,250 gal"],
                  ["4", "1,250 gal", "3–5 people", "1,250–1,500 gal"],
                  ["5", "1,500 gal", "4–6 people", "1,500–1,750 gal"],
                  ["6+", "1,750 gal", "5+ people", "1,750–2,000 gal"],
                ].map(([beds, min, occ, rec], i) => (
                  <tr key={beds} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-3 py-2 font-medium">{beds}</td>
                    <td className="px-3 py-2">{min}</td>
                    <td className="px-3 py-2">{occ}</td>
                    <td className="px-3 py-2">{rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Drain Field Sizing by Soil Type
          </h2>
          <p className="mb-3">
            The drain field (or leach field) disperses treated effluent into the soil. The required
            area depends on your soil's percolation rate — how quickly it absorbs water. A
            percolation test (perc test) is typically required by permit.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Soil Type</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Loading Rate</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Drain Field for 300 GPD</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-3 py-2 font-medium">Sandy / Fast draining</td>
                  <td className="px-3 py-2">1.2 gpd/sq ft</td>
                  <td className="px-3 py-2">250 sq ft</td>
                  <td className="px-3 py-2">Smallest field; may need filter fabric</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-3 py-2 font-medium">Loamy / Average</td>
                  <td className="px-3 py-2">0.6 gpd/sq ft</td>
                  <td className="px-3 py-2">500 sq ft</td>
                  <td className="px-3 py-2">Most common residential soil</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Clay / Slow draining</td>
                  <td className="px-3 py-2">0.3 gpd/sq ft</td>
                  <td className="px-3 py-2">1,000 sq ft</td>
                  <td className="px-3 py-2">May require mound or alternative system</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            If your soil percolation is too slow (clay soils with perc rate slower than 60 min/inch),
            a conventional drain field may not be approved. Alternative systems such as mound
            systems, aerobic treatment units, or drip irrigation systems may be required.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                How big of a septic tank do I need?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Most US codes require a minimum 1,000-gallon tank for 1–3 bedroom homes, 1,250
                gallons for 4 bedrooms, and 1,500 gallons for 5 bedrooms. The final size is the
                greater of the code minimum or twice your estimated daily water flow. Use the
                calculator to find the right size for your household.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                How often should you pump a septic tank?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Every 3–5 years for most households. A 1,000-gallon tank serving 4 people should
                be pumped every 3–4 years. Larger tanks or smaller households can go 5–7 years.
                Annual inspections are recommended to monitor sludge and scum levels. Neglecting
                pumping is the leading cause of drain field failure.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                How long does a septic system last?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                A well-maintained concrete or fiberglass tank lasts 20–40 years or more. The drain
                field typically lasts 25–30 years. The most common cause of early failure is
                solids carryover into the leach field from an overdue tank pumping. Avoid flushing
                non-biodegradable items and limit garbage disposal use to extend system life.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                Can I install my own septic system?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                In most jurisdictions, a permit is required and the system must be designed by a
                licensed professional and pass inspection by the local health department. Some
                rural counties allow owner-installation with a permit. Installing without permits
                risks fines, forced removal, and problems when selling the home. Always check with
                your county health department before proceeding.
              </div>
            </details>
          </div>
        </section>
      </article>
    </div>
  );
}
