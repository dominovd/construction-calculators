import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EasyBuildCalc — Free Construction Calculators",
  description:
    "EasyBuildCalc provides free, accurate construction calculators for contractors, builders, and DIYers. Learn about our tools and mission.",
  alternates: { canonical: "https://easybuildcalc.com/about" },
  openGraph: {
    title: "About EasyBuildCalc",
    description: "Free construction calculators for contractors, builders, and DIY projects.",
    url: "https://easybuildcalc.com/about",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://easybuildcalc.com/about" },
  ],
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EasyBuildCalc",
  url: "https://easybuildcalc.com",
  description: "Free online construction calculators for contractors, builders, and DIY projects.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://easybuildcalc.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const TOOLS = [
  { emoji: "🧱", name: "Concrete Calculator", href: "/concrete-calculator", desc: "Cubic yards, bags, and ready-mix cost" },
  { emoji: "📐", name: "Board Foot Calculator", href: "/board-foot-calculator", desc: "Lumber volume in board feet" },
  { emoji: "🏠", name: "Roof Pitch Calculator", href: "/roof-pitch-calculator", desc: "Rise, run, rafter length, and pitch angle" },
  { emoji: "🔩", name: "Rebar Calculator", href: "/rebar-calculator", desc: "Rebar quantity and weight for slabs" },
  { emoji: "🧱", name: "Brick Calculator", href: "/brick-calculator", desc: "Bricks and mortar for walls" },
  { emoji: "🪵", name: "Flooring Calculator", href: "/flooring-calculator", desc: "Boxes and material cost for any floor" },
  { emoji: "🏗️", name: "Stud Calculator", href: "/stud-calculator", desc: "Wall framing studs at 16\" or 24\" OC" },
  { emoji: "🛣️", name: "Asphalt Calculator", href: "/asphalt-calculator", desc: "Tons and cost for driveways and lots" },
  { emoji: "🪣", name: "Drywall Calculator", href: "/drywall-calculator", desc: "Sheets for walls and ceilings" },
  { emoji: "🎨", name: "Paint Calculator", href: "/paint-calculator", desc: "Gallons and quarts for any room" },
  { emoji: "🌿", name: "Mulch Calculator", href: "/mulch-calculator", desc: "Cubic yards and bags for garden beds" },
  { emoji: "🏡", name: "Fence Calculator", href: "/fence-calculator", desc: "Posts, panels, and total cost" },
  { emoji: "🌊", name: "Gravel Calculator", href: "/gravel-calculator", desc: "Tons and yards of gravel or crushed stone" },
  { emoji: "🪜", name: "Deck Calculator", href: "/deck-calculator", desc: "Decking boards and linear footage" },
  { emoji: "🏚️", name: "Shingles Calculator", href: "/shingles-calculator", desc: "Squares and bundles for any roof pitch" },
  { emoji: "🧪", name: "Concrete Mix Calculator", href: "/concrete-mix-calculator", desc: "Cement, sand, and gravel by mix ratio" },
  { emoji: "❄️", name: "Insulation Calculator", href: "/insulation-calculator", desc: "Batts and blown-in bags by R-value" },
  { emoji: "🌾", name: "Sand Calculator", href: "/sand-calculator", desc: "Cubic yards and tons of sand" },
  { emoji: "🪚", name: "Lumber Calculator", href: "/lumber-calculator", desc: "Board count and board feet for any size" },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">About</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">About EasyBuildCalc</h1>
      <p className="text-gray-600 mb-10 text-base leading-relaxed">
        Free, accurate construction calculators — built for contractors, builders, and DIYers who need
        fast answers on the job site or planning a project at home.
      </p>

      <article className="space-y-10 text-sm text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h2>
          <p>
            Construction math is repetitive and error-prone when done by hand. A wrong concrete estimate
            wastes money; a short shingle count costs you a second delivery. EasyBuildCalc exists to
            eliminate those mistakes with a simple, fast, free tool for every common calculation —
            no sign-up, no ads before you get the answer, no paywall.
          </p>
          <p className="mt-3">
            Every calculator on the site runs entirely in your browser. Nothing you enter is sent to
            any server — your project data stays private.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Who Uses EasyBuildCalc</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🏗️", title: "Contractors", desc: "Quick material estimates for bids and job-site planning." },
              { icon: "🏠", title: "DIYers", desc: "Confident numbers before heading to the lumber yard." },
              { icon: "📐", title: "Estimators", desc: "A sanity-check alongside full takeoff software." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">All Free Calculators</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {TOOLS.map(({ emoji, name, href, desc }) => (
              <a
                key={href}
                href={href}
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-xl shrink-0 mt-0.5">{emoji}</span>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-blue-700 text-xs">{name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Accuracy & Methodology</h2>
          <p>
            Each calculator uses standard industry formulas — the same ones found in construction
            estimating textbooks and manufacturer coverage tables. Where values vary by region or
            product (like concrete bag coverage or insulation R-values per inch), we use the most
            commonly published figures and note the assumptions clearly.
          </p>
          <p className="mt-3">
            Results should be used as estimates. Always verify critical quantities with your supplier
            or engineer before ordering materials for structural applications.
          </p>
        </section>

        <section className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <h2 className="text-base font-semibold text-blue-900 mb-2">Found a bug or want a new calculator?</h2>
          <p className="text-blue-700 text-sm mb-4">
            We&apos;re constantly adding new tools based on user requests. If a calculation is giving
            you wrong results or you need a tool we don&apos;t have yet, let us know.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Contact us →
          </a>
        </section>

      </article>
    </div>
  );
}
