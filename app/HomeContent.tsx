"use client";

import Link from "next/link";

const CALCS = [
  { slug: "concrete-calculator",     name: "Concrete Calculator",       desc: "Calculate cubic yards, bag count, and ready-mix cost for slabs and footings.",    icon: "🪣" },
  { slug: "board-foot-calculator",   name: "Board Foot Calculator",     desc: "Calculate lumber volume in board feet by thickness, width, and length.",          icon: "🪵" },
  { slug: "stud-calculator",         name: "Stud / Framing Calculator", desc: "Find how many wall studs you need for any wall length and stud spacing.",          icon: "🏗️" },
  { slug: "drywall-calculator",      name: "Drywall Calculator",        desc: "Calculate 4×8 drywall sheets for walls and ceilings including waste.",            icon: "🧊" },
  { slug: "paint-calculator",        name: "Paint Calculator",          desc: "Find out how many gallons of paint you need for any room.",                       icon: "🎨" },
  { slug: "flooring-calculator",     name: "Flooring Calculator",       desc: "Calculate flooring materials for any room with waste factor included.",            icon: "📐" },
  { slug: "roof-pitch-calculator",   name: "Roof Pitch Calculator",     desc: "Convert roof pitch to angle, calculate rise and run for any roof slope.",         icon: "🏠" },
  { slug: "shingles-calculator",     name: "Shingles Calculator",       desc: "Calculate roofing squares, bundles, and cost for any pitch and footprint.",       icon: "🏘️" },
  { slug: "rebar-calculator",        name: "Rebar Calculator",          desc: "Calculate rebar quantity, spacing, and total weight for slabs and footings.",     icon: "⚙️" },
  { slug: "brick-calculator",        name: "Brick Calculator",          desc: "Estimate bricks and mortar needed for walls, patios, and walkways.",             icon: "🧱" },
  { slug: "concrete-mix-calculator", name: "Concrete Mix Calculator",   desc: "Calculate cement, sand, and gravel quantities for any hand-mix ratio.",          icon: "⚗️" },
  { slug: "insulation-calculator",   name: "Insulation Calculator",     desc: "Calculate batt rolls or blown-in bags needed by R-value and area.",              icon: "🌡️" },
  { slug: "deck-calculator",         name: "Deck Calculator",           desc: "Calculate decking boards, linear footage, and material cost for any deck.",       icon: "🪜" },
  { slug: "fence-calculator",        name: "Fence Calculator",          desc: "Calculate fence posts, panels, and total cost for any yard perimeter.",           icon: "🚧" },
  { slug: "mulch-calculator",        name: "Mulch Calculator",          desc: "Calculate cubic yards and bags of mulch or wood chips for garden beds.",          icon: "🌿" },
  { slug: "gravel-calculator",       name: "Gravel Calculator",         desc: "Calculate tons and cubic yards of crushed stone or gravel for driveways.",        icon: "🪨" },
  { slug: "sand-calculator",         name: "Sand Calculator",           desc: "Calculate how many bags or tons of sand you need by area and depth.",            icon: "🏖️" },
  { slug: "asphalt-calculator",      name: "Asphalt Calculator",        desc: "Estimate asphalt tonnage for driveways, parking lots, and roads.",               icon: "🛣️" },
  { slug: "lumber-calculator",       name: "Lumber Cost Calculator",    desc: "Calculate board feet and total cost for any lumber size and quantity.",           icon: "📏" },
];

export function HomeContent() {
  return (
    <>
      <section className="bg-white border-b border-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Free Construction Calculators
          </h1>
          <p className="text-lg text-gray-600">
            Accurate tools for contractors, builders, and DIY homeowners. No signup required.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CALCS.map((calc) => (
            <Link
              key={calc.slug}
              href={`/${calc.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-sm transition-all group"
            >
              <div className="text-2xl mb-2">{calc.icon}</div>
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                {calc.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{calc.desc}</p>
              <span className="text-xs text-blue-600 font-medium">Use calculator →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Trusted by builders and DIYers
          </h2>
          <p className="text-sm text-blue-700 max-w-xl mx-auto">
            All calculators use standard industry formulas. Results match professional
            estimation software — without the price tag.
          </p>
        </div>
      </section>
    </>
  );
}
