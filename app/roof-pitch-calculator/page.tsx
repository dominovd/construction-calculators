import type { Metadata } from "next";
import { RoofPitchCalculator } from "./RoofPitchCalculator";

export const metadata: Metadata = {
  title: "Roof Pitch Calculator — Angle, Rafter Length & Ridge Height",
  description:
    "Calculate roof pitch angle in degrees, rafter length, and ridge height from rise and run. Free tool for contractors, roofers, and DIY builders.",
  alternates: { canonical: "https://easybuildcalc.com/roof-pitch-calculator" },
  openGraph: {
    title: "Roof Pitch Calculator",
    description: "Convert roof pitch to angle and calculate rafter length for any roof.",
    url: "https://easybuildcalc.com/roof-pitch-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Roof Pitch",
  description: "Calculate roof pitch angle, rafter length, and ridge height from rise and run.",
  step: [
    { "@type": "HowToStep", text: "Enter the rise in inches (vertical rise per 12 inches of run)." },
    { "@type": "HowToStep", text: "Enter the run (typically 12 inches — standard reference)." },
    { "@type": "HowToStep", text: "Enter the building span in feet to get rafter length and ridge height." },
    { "@type": "HowToStep", text: "Read the pitch ratio, angle in degrees, rafter length, and ridge height." },
  ],
};

export default function RoofPitchPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Roof Pitch Calculator</h1>
      <p className="text-gray-500 text-sm mb-6">
        Convert rise:run to degrees, get rafter length and ridge height for any building span.
      </p>

      <RoofPitchCalculator />

      <article className="mt-10 space-y-5 text-sm text-gray-700 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-900">What is Roof Pitch?</h2>
        <p>
          Roof pitch is the ratio of vertical rise to horizontal run, expressed as X:12. A 4:12 pitch
          means the roof rises 4 inches for every 12 inches of horizontal run. It's the standard way
          builders and architects communicate roof slope in the US.
        </p>

        <h2 className="text-lg font-semibold text-gray-900">Roof Pitch Formula</h2>
        <p>To convert pitch to angle in degrees:</p>
        <pre className="bg-gray-100 rounded-lg p-3 text-xs overflow-x-auto">
          Angle = arctan(Rise / Run) × (180 / π){"\n"}
          Rafter Multiplier = √(Rise² + Run²) / Run{"\n"}
          Rafter Length = (Building Span / 2) × Rafter Multiplier
        </pre>

        <h2 className="text-lg font-semibold text-gray-900">Common Roof Pitches</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-3 py-2 text-left">Pitch</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Angle</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-200 px-3 py-2 text-left">Common Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2:12", "9.5°", "Low slope", "Flat/low roofs, commercial"],
                ["4:12", "18.4°", "Conventional", "Most US residential homes"],
                ["6:12", "26.6°", "Moderate", "Traditional houses"],
                ["8:12", "33.7°", "Steep", "Cape Cod, steep gabled"],
                ["12:12", "45°", "Very steep", "Dramatic architectural designs"],
              ].map(([pitch, angle, type, use]) => (
                <tr key={pitch} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-3 py-1.5 font-mono font-semibold">{pitch}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{angle}</td>
                  <td className="border border-gray-200 px-3 py-1.5">{type}</td>
                  <td className="border border-gray-200 px-3 py-1.5 text-gray-500">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}
