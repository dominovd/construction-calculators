import type { Metadata } from "next";
import { StudCalculator } from "./StudCalculator";

export const metadata: Metadata = {
  title: "Stud Calculator — Wall Framing Stud Count",
  description:
    "Calculate how many studs you need for wall framing. Enter wall length and stud spacing (16\" or 24\" OC) to get an exact stud count with extras.",
  alternates: { canonical: "https://easybuildcalc.com/stud-calculator" },
  openGraph: { url: "https://easybuildcalc.com/stud-calculator" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Calculate Wall Studs",
  description: "Calculate the number of studs needed to frame a wall.",
  step: [
    { "@type": "HowToStep", text: "Measure the total length of your wall in feet." },
    { "@type": "HowToStep", text: "Choose stud spacing: 16 inches OC (standard) or 24 inches OC." },
    { "@type": "HowToStep", text: "Divide wall length by stud spacing and round up." },
    { "@type": "HowToStep", text: "Add 1 stud for the end, plus extras for corners and openings." },
  ],
};

export default function StudPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-xs text-gray-500 mb-4">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-1.5">›</span>
          <span className="text-gray-700">Stud Calculator</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Stud Calculator
        </h1>
        <p className="text-gray-600 mb-6">
          Calculate how many wall studs you need for any framing project. Supports 16&quot; and 24&quot; OC spacing.
        </p>

        <StudCalculator />

        <article className="mt-10 space-y-6 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">How Many Studs Do I Need?</h2>
          <p>
            The basic formula for calculating wall studs is simple: divide the wall length (in inches)
            by the stud spacing, then add 1 for the final end stud. Most residential walls use{" "}
            <strong>16 inches on center (OC)</strong> spacing, which provides structural support
            for drywall and meets building codes.
          </p>

          <h2 className="text-xl font-semibold text-gray-900">Stud Spacing Formula</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 font-mono text-sm">
            Studs = (Wall Length in inches ÷ Spacing) + 1
          </div>

          <h3 className="text-lg font-semibold text-gray-900">Example: 12-foot wall at 16&quot; OC</h3>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 font-mono text-sm">
            (12 ft × 12 in) ÷ 16 + 1 = 144 ÷ 16 + 1 = 9 + 1 = <strong>10 studs</strong>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">16&quot; vs 24&quot; OC — Which to Use?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-3 py-2 font-medium">Spacing</th>
                  <th className="text-left px-3 py-2 font-medium">Use case</th>
                  <th className="text-left px-3 py-2 font-medium">Pros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-3 py-2 font-medium">16&quot; OC</td>
                  <td className="px-3 py-2">Load-bearing walls, exterior walls</td>
                  <td className="px-3 py-2 text-gray-500">Stronger, fits standard drywall</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">24&quot; OC</td>
                  <td className="px-3 py-2">Non-load-bearing interior walls</td>
                  <td className="px-3 py-2 text-gray-500">Uses ~33% fewer studs, cheaper</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm">
            <strong className="text-amber-800">Pro tip:</strong>{" "}
            <span className="text-amber-700">
              Always order 10–15% extra studs to account for splits, warps, and cut waste.
              The calculator above includes this buffer automatically.
            </span>
          </div>

          <h2 className="text-xl font-semibold text-gray-900">What Stud Length Do I Need?</h2>
          <p>
            For standard 8-foot ceilings, use <strong>92⅝&quot; (pre-cut) studs</strong> — this accounts
            for the top plate (double 2×4 = 3&quot;) and bottom plate (1.5&quot;), leaving exactly 8 feet of
            finished ceiling height.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li><strong>8 ft ceiling</strong> → 92⅝&quot; or 8 ft studs</li>
            <li><strong>9 ft ceiling</strong> → 104⅝&quot; or 9 ft studs</li>
            <li><strong>10 ft ceiling</strong> → 116⅝&quot; or 10 ft studs</li>
          </ul>
        </article>
      </div>
    </>
  );
}
