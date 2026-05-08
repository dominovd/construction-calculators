import type { Metadata } from "next";
import { HvacDuctCalculator } from "./HvacDuctCalculator";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export const metadata: Metadata = {
  title: "Free HVAC Duct Size Calculator — CFM & Diameter by Room",
  description:
    "Calculate the required CFM and round or rectangular duct size for any room. Enter square footage, ceiling height, and system type for instant HVAC duct sizing.",
  alternates: { canonical: "https://easybuildcalc.com/hvac-duct-calculator" },
  openGraph: {
    title: "Free HVAC Duct Size Calculator — CFM & Diameter by Room",
    description:
      "Calculate required CFM and duct diameter for any room. Supports cooling, heating, and both. Includes rectangular duct equivalents.",
    url: "https://easybuildcalc.com/hvac-duct-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Size an HVAC Duct for a Room",
  description:
    "Calculate the correct duct diameter and CFM airflow for a room based on square footage, ceiling height, and HVAC system type.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enter room dimensions",
      text: "Input the room area in square feet and ceiling height in feet.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Select system and duct type",
      text: "Choose cooling, heating, or both, and whether this is a supply or return duct.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set target velocity",
      text: "Select the desired air velocity in feet per minute (FPM). 600–800 FPM is typical for residential supply ducts.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Read your results",
      text: "View the required CFM, recommended round duct diameter, duct cross-sectional area, and rectangular equivalents.",
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size duct do I need for my room?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Duct size depends on the CFM required and your target air velocity. A typical 200 sq ft bedroom needs about 200 CFM for cooling. At 800 FPM velocity, that requires roughly a 7-inch round duct or a 6×7 rectangular equivalent. Use the calculator above to find the exact size for your room.",
      },
    },
    {
      "@type": "Question",
      name: "What is CFM in HVAC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CFM stands for Cubic Feet per Minute — the volume of air moved through a duct per minute. Each room requires a specific CFM based on its size and load. Cooling typically requires 1 CFM per square foot; heating requires about 1.2 CFM per square foot.",
      },
    },
    {
      "@type": "Question",
      name: "How do supply and return ducts differ in sizing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Supply ducts deliver conditioned air to rooms and are typically sized for 600–900 FPM to minimize noise and pressure loss. Return ducts bring air back to the air handler and are usually sized larger (lower velocity, 400–600 FPM) to avoid negative pressure and noise. This calculator sizes for supply ducts by default.",
      },
    },
    {
      "@type": "Question",
      name: "What velocity should HVAC ducts run at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Residential supply ducts are typically designed for 600–900 FPM. Lower velocities (600–700 FPM) are quieter and used near living areas; higher velocities (900–1,000 FPM) are acceptable for mechanical rooms or longer trunk runs. Return ducts typically run at 400–600 FPM.",
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
      name: "HVAC Duct Size Calculator",
      item: "https://easybuildcalc.com/hvac-duct-calculator",
    },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HVAC Duct Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://easybuildcalc.com/hvac-duct-calculator",
};


export default function HvacDuctPage() {
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

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Free HVAC Duct Size Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Find the right round or rectangular duct diameter for any room — enter square footage,
        ceiling height, and system type.
      </p>

      <HvacDuctCalculator />
      <RelatedCalculators currentSlug="hvac-duct-calculator" />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            CFM Formula and Rules of Thumb
          </h2>
          <p className="mb-2">
            The standard rule of thumb for residential HVAC sizing is <strong>1 CFM per square
            foot</strong> for cooling and <strong>1.2 CFM per square foot</strong> for heating.
            These figures assume standard 8–9 ft ceilings. For taller ceilings, multiply by{" "}
            <code className="bg-gray-100 px-1 rounded">ceiling height / 9</code>.
          </p>
          <p className="mb-2">
            Once you have CFM, the duct cross-sectional area (in square feet) is:{" "}
            <code className="bg-gray-100 px-1 rounded">area = CFM / velocity (FPM)</code>. Convert
            to a round diameter with:{" "}
            <code className="bg-gray-100 px-1 rounded">
              diameter (in) = √(4 × area / π) × 12
            </code>
            , then round up to the next standard size.
          </p>
          <p>
            Standard round duct sizes are: 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, and 20 inches.
            Always round up — a duct that is slightly oversized moves air quietly and efficiently;
            an undersized duct creates noise, pressure loss, and uneven comfort.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Standard Duct Sizes and Typical Uses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Round Diameter</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Approx. CFM @ 800 FPM</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-700">Typical Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["4\"", "70", "Small closet or bathroom"],
                  ["5\"", "110", "Small bathroom or half bath"],
                  ["6\"", "160", "Bathroom, small bedroom"],
                  ["7\"", "215", "Bedroom (up to ~215 sq ft)"],
                  ["8\"", "280", "Medium bedroom, home office"],
                  ["9\"", "355", "Large bedroom, small living room"],
                  ["10\"", "436", "Living room, master suite"],
                  ["12\"", "628", "Large living/dining area"],
                  ["14\"", "855", "Open-plan great room"],
                  ["16\"", "1,117", "Main trunk line, large spaces"],
                ].map(([size, cfm, use], i) => (
                  <tr key={size} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-3 py-2 font-medium">{size}</td>
                    <td className="px-3 py-2">{cfm} CFM</td>
                    <td className="px-3 py-2">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                What size duct do I need?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                It depends on the CFM your room requires and your target air velocity. A 200 sq ft
                room needs about 200 CFM for cooling. At 800 FPM, that requires a 7-inch round duct
                (duct area ≈ 0.25 sq ft). Use the calculator for your exact dimensions and system
                type.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                What is CFM in HVAC?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                CFM (Cubic Feet per Minute) is the volumetric flow rate of air through a duct.
                Every room has a required CFM based on its heat load. Too little CFM means poor
                comfort; too much wastes energy and creates noise. The rule of thumb is 1 CFM/sq ft
                for cooling, 1.2 CFM/sq ft for heating.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                Supply vs. return duct sizing?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Supply ducts are typically sized for 600–900 FPM. Return ducts move the same
                volume of air but at lower velocity (400–600 FPM) to avoid noise and pressure
                drop, so they are usually one or two sizes larger than the corresponding supply
                duct. A single return plenum serving multiple rooms is often significantly larger
                than any individual supply run.
              </div>
            </details>
            <details className="border border-gray-200 rounded-lg">
              <summary className="px-4 py-3 font-medium cursor-pointer text-gray-800 hover:bg-gray-50">
                What velocity should HVAC ducts run at?
              </summary>
              <div className="px-4 pb-3 text-gray-600">
                Residential supply ducts: 600–900 FPM. Use the lower end (600–700 FPM) near
                bedrooms and living areas where quiet operation matters. 800–1,000 FPM is
                acceptable for mechanical rooms or main trunk lines. Return ducts: 400–600 FPM.
                Higher velocities cause turbulence noise and reduce system efficiency.
              </div>
            </details>
          </div>
        </section>
      </article>
    </div>
  );
}
