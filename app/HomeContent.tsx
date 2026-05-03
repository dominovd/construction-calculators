"use client";

import Link from "next/link";
import { formatPct, formatDate } from "@/lib/fred";

type MarketItem = { emoji: string; label: string; mom: number | null; lastDate: string | null };
type MarketData = { items: MarketItem[]; hasData: boolean } | null;

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
  { slug: "tile-calculator",         name: "Tile Calculator",           desc: "Calculate tiles and boxes needed for any floor or wall with waste included.",      icon: "🔲" },
  { slug: "paver-calculator",        name: "Paver Calculator",          desc: "Calculate paver quantity and base materials for patios, walkways, and driveways.", icon: "🧩" },
  { slug: "stair-calculator",        name: "Stair Calculator",          desc: "Calculate step count, riser height, run depth, and stringer length.",             icon: "🪜" },
  { slug: "sod-calculator",          name: "Sod Calculator",            desc: "Calculate sod rolls, pallets, and topsoil for any lawn area.",                    icon: "🌱" },
];

const MARKET_PAGES = [
  { href: "/material-prices",  emoji: "📈", title: "Material Price Index",       desc: "Monthly lumber, steel & concrete price trends from BLS data." },
  { href: "/housing-starts",   emoji: "🏠", title: "Global Housing Starts",      desc: "Annual new construction starts for 20+ countries via OECD." },
  { href: "/lumber-market",    emoji: "🪵", title: "Lumber Market: US vs World", desc: "US lumber PPI vs global softwood prices, indexed to 2019=100." },
];

export function HomeContent({ market }: { market: MarketData }) {
  return (
    <>
      {/* Hero */}
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

      {/* Material Price Widget */}
      {market?.hasData && (
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-900">
                📊 Material Price Index — this month
              </h2>
              <a href="/material-prices" className="text-xs text-blue-600 hover:underline">
                View full history →
              </a>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {market.items.map(({ emoji, label, mom, lastDate }) => {
                const up = mom !== null && mom > 0;
                const dn = mom !== null && mom < 0;
                return (
                  <div key={label} className="text-center">
                    <div className="text-xl mb-1">{emoji}</div>
                    <p className="text-[11px] text-gray-500 leading-tight mb-1">
                      {label.split(" ")[0]}
                    </p>
                    <p className={`text-base font-bold ${up ? "text-red-600" : dn ? "text-green-600" : "text-gray-700"}`}>
                      {up ? "↑" : dn ? "↓" : "→"} {formatPct(mom)}
                    </p>
                    {lastDate && (
                      <p className="text-[10px] text-gray-400 mt-0.5">{formatDate(lastDate)}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Market Data pages */}
      <section className="max-w-5xl mx-auto px-4 pt-6 pb-2">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Construction Market Data
        </h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {MARKET_PAGES.map(({ href, emoji, title, desc }) => (
            <a
              key={href}
              href={href}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <span className="text-2xl shrink-0">{emoji}</span>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 mb-0.5">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Calculators grid */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Free Calculators
        </h2>
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

      {/* Description + FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-4">
        <div className="bg-blue-50 rounded-xl p-6 text-center mb-10">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">
            Trusted by builders and DIYers
          </h2>
          <p className="text-sm text-blue-700 max-w-xl mx-auto">
            All calculators use standard industry formulas. Results match professional
            estimation software — without the price tag.
          </p>
        </div>

        <article className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <h2 className="text-xl font-semibold text-gray-900">Why Use a Free Construction Calculator?</h2>
          <p>
            Ordering too little material means a costly second delivery and project delays. Ordering
            too much wastes money and leaves you hauling surplus bags back to the store. Our free
            calculators give you a precise estimate before you buy — so you order exactly what you
            need, the first time.
          </p>
          <p>
            Whether you&apos;re a contractor putting together a bid, a builder framing a new home, or a
            homeowner planning a weekend project, every tool on EasyBuildCalc is free, instant,
            and requires no account. Enter your dimensions, pick your material, and get a complete
            breakdown in seconds.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "⚡", title: "Instant results", desc: "All calculations happen in your browser — no wait, no server." },
              { icon: "🔒", title: "Your data stays private", desc: "Nothing you enter is stored or sent anywhere." },
              { icon: "📏", title: "Industry-standard formulas", desc: "The same math used by professional estimators." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-xl mb-1">{icon}</div>
                <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-900 pt-2">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {[
              { q: "Are these construction calculators really free?", a: "Yes — every calculator on EasyBuildCalc is completely free to use. No account, no subscription, and no paywall. All calculations run in your browser and your data is never sent to any server." },
              { q: "How accurate are the results?", a: "All calculators use standard industry formulas from construction estimating references and manufacturer coverage tables. Results are accurate estimates suited for planning and budgeting. For structural applications, always verify with your engineer or supplier." },
              { q: "Do I need to sign up or create an account?", a: "No sign-up required. All 19 free tools are open — just enter your dimensions and get instant results." },
              { q: "What construction calculators do you offer?", a: "EasyBuildCalc covers concrete, board feet, roof pitch, rebar, drywall, paint, flooring, studs, asphalt, mulch, fence, deck, shingles, concrete mix, insulation, gravel, sand, and lumber — 19 free calculators in total." },
              { q: "Can I use these calculators on my phone?", a: "Yes. All calculators are fully responsive and work on any device — phone, tablet, or desktop. No app download needed." },
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
      </section>
    </>
  );
}
