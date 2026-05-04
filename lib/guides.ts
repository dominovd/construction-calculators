export type Tag =
  | "Roofing"
  | "Foundation"
  | "Flooring"
  | "Driveway"
  | "Framing"
  | "Insulation"
  | "Concrete";

export type CompareRow = {
  aspect: string;
  a: string;
  b: string;
};

export type RelatedCalc = {
  slug: string;
  name: string;
};

export type FAQ = {
  q: string;
  a: string;
};

export type Guide = {
  slug: string;
  section?: "guides" | "howto"; // defaults to "guides"
  title: string;
  metaTitle: string;
  metaDesc: string;
  tags: Tag[];
  summary: string;         // 1-2 sentence intro
  optionA: string;         // e.g. "OSB"
  optionB: string;         // e.g. "Plywood"
  verdict: string;         // 2-3 sentence bottom line
  verdictFavors: "A" | "B" | "neither"; // for badge
  compareRows: CompareRow[];
  prosA: string[];
  consA: string[];
  prosB: string[];
  consB: string[];
  costSection: {           // freeform cost breakdown paragraphs
    heading: string;
    body: string;
  }[];
  faqs: FAQ[];
  relatedCalcs: RelatedCalc[];
};

export const GUIDES: Guide[] = [
  // ─── 1. OSB vs Plywood ───────────────────────────────────────────────────
  {
    slug: "osb-vs-plywood",
    title: "OSB vs Plywood: Cost, Strength & When to Use Each",
    metaTitle: "OSB vs Plywood — Cost, Strength & When to Use Each (2026)",
    metaDesc:
      "Compare OSB and plywood for roofing, walls, and subfloors. See cost per sheet, structural strength, moisture resistance, and which to choose for your project.",
    tags: ["Roofing", "Framing"],
    summary:
      "OSB and plywood are the two most common structural sheathing panels — but they differ significantly in cost, moisture behavior, and best applications.",
    optionA: "OSB",
    optionB: "Plywood",
    verdict:
      "OSB wins on price and is perfectly adequate for roof sheathing, wall sheathing, and subfloors in dry climates. Choose plywood where moisture exposure is likely — crawl spaces, bathrooms, areas prone to flooding — or where screw-holding strength matters for repeated fastening.",
    verdictFavors: "neither",
    compareRows: [
      { aspect: "Cost (7/16\" 4×8 sheet)", a: "$12–16",          b: "$18–28" },
      { aspect: "Structural strength",      a: "Equal (span-rated)", b: "Equal (span-rated)" },
      { aspect: "Moisture resistance",      a: "Swells, slow to dry", b: "Better, dries faster" },
      { aspect: "Edge swell",               a: "Significant",      b: "Minimal" },
      { aspect: "Weight (½\")",             a: "~48 lbs/sheet",    b: "~46 lbs/sheet" },
      { aspect: "Nail/screw holding",       a: "Good",             b: "Slightly better" },
      { aspect: "Spans",                    a: "Rated same as ply", b: "Rated same as OSB" },
      { aspect: "Environmental",            a: "Uses smaller trees", b: "Requires larger logs" },
    ],
    prosA: [
      "25–40% cheaper than plywood",
      "Consistent density throughout — no voids or knots",
      "Made from fast-growing small-diameter trees",
      "Passes same structural ratings as plywood",
    ],
    consA: [
      "Absorbs moisture and swells at edges — hard to reverse",
      "Heavier than plywood for the same thickness",
      "Doesn't re-dry as quickly after rain exposure",
      "Harder to identify damage once painted or covered",
    ],
    prosB: [
      "Dries faster after moisture exposure",
      "Better for high-humidity environments",
      "Holds fasteners through multiple removals",
      "Easier to see delamination or damage",
    ],
    consB: [
      "20–40% more expensive than OSB",
      "Can have internal voids in lower grades",
      "Requires larger-diameter logs",
      "Veneers can delaminate in prolonged moisture",
    ],
    costSection: [
      {
        heading: "Price per sheet (2026)",
        body: "OSB (7/16\", 4×8) runs $12–16 per sheet at most lumber yards. Plywood (½\", 4×8 CDX) runs $18–28. On a 2,000 sq ft house needing ~600 sheets of sheathing, OSB saves $3,600–7,200 in materials alone. That difference matters on large projects.",
      },
      {
        heading: "Long-term cost",
        body: "The long-term cost difference is minimal if installation is done correctly. OSB that stays dry performs as well as plywood for the life of the building. The risk is construction-phase moisture exposure: OSB left wet too long before roofing or siding can lead to edge swelling that causes problems with finishing materials.",
      },
    ],
    faqs: [
      { q: "Is OSB as strong as plywood?", a: "Yes — when span-rated for the same application, OSB and plywood perform equivalently under load. Both are tested to the same APA standards. OSB is slightly stiffer across the panel; plywood has more uniform strength in both directions." },
      { q: "Can OSB get wet during construction?", a: "Brief exposure is fine. Problems arise with prolonged wetting — days or weeks without drying. Edge swelling can lift shingles or create high spots in subfloors. Cover with tarps at the end of each day if rain is forecast." },
      { q: "Which is better for roof sheathing?", a: "Either works. OSB is the dominant choice today simply due to cost. Use plywood if you're in a coastal climate, have a low-slope roof, or the sheathing will be exposed before roofing is installed for more than a few days." },
      { q: "Does OSB hold screws as well as plywood?", a: "OSB holds screws well in initial installation. For applications requiring repeated fastening and removal — like cabinet installation or subfloor repairs — plywood holds up better to multiple screw cycles." },
    ],
    relatedCalcs: [
      { slug: "stud-calculator",   name: "Stud / Framing Calculator" },
      { slug: "shingles-calculator", name: "Shingles Calculator" },
      { slug: "lumber-calculator", name: "Lumber Cost Calculator" },
    ],
  },

  // ─── 2. Metal Roofing vs Asphalt Shingles ────────────────────────────────
  {
    slug: "metal-roofing-vs-asphalt-shingles",
    title: "Metal Roofing vs Asphalt Shingles: 10-Year Cost Comparison",
    metaTitle: "Metal Roofing vs Asphalt Shingles — 10-Year Cost Comparison (2026)",
    metaDesc:
      "Compare metal roofing and asphalt shingles on upfront cost, lifespan, maintenance, energy savings, and 10-year total cost of ownership. Which is worth the premium?",
    tags: ["Roofing"],
    summary:
      "Metal roofing costs 2–4× more upfront than asphalt shingles but lasts 2–3× longer. The real question is: does the premium pay off over 10–20 years?",
    optionA: "Metal Roofing",
    optionB: "Asphalt Shingles",
    verdict:
      "If you plan to stay in your home 15+ years, metal roofing typically wins on total cost of ownership — you avoid one full re-roof cycle and get lower maintenance and energy bills. For shorter time horizons or tight budgets, 3-tab or architectural shingles remain the better value.",
    verdictFavors: "A",
    compareRows: [
      { aspect: "Installed cost (per sq ft)", a: "$5–14",        b: "$1.50–5" },
      { aspect: "Lifespan",                   a: "40–70 years",  b: "15–30 years" },
      { aspect: "Maintenance",                a: "Very low",     b: "Low–moderate" },
      { aspect: "Energy savings",             a: "10–25% cooling", b: "Baseline" },
      { aspect: "Weight (per sq ft)",         a: "1–3 lbs",      b: "2–4 lbs" },
      { aspect: "Wind resistance",            a: "Up to 140 mph", b: "60–130 mph" },
      { aspect: "Fire rating",                a: "Class A",      b: "Class A (most)" },
      { aspect: "Insurance discount",         a: "Yes (5–35%)",  b: "Standard" },
    ],
    prosA: [
      "Lasts 40–70 years — likely the last roof you'll install",
      "Lower cooling costs (reflective coatings)",
      "Insurance discounts in hail/wind-prone areas",
      "Handles heavy snow loads without damage",
      "Lightweight — less stress on structure",
    ],
    consA: [
      "2–4× higher upfront cost",
      "Requires specialized installers",
      "Can be noisy in heavy rain without insulation",
      "Dents from large hail (some panels)",
      "Oil-canning (waviness) can be visible on flat panels",
    ],
    prosB: [
      "Much lower upfront cost",
      "Easy to repair — any roofer can do it",
      "Wide variety of colors and styles",
      "Simple DIY installation possible",
      "Cost-effective for shorter ownership horizons",
    ],
    consB: [
      "Needs replacement every 15–30 years",
      "Higher maintenance costs over time",
      "More prone to wind and hail damage",
      "Granule loss leads to accelerated aging",
      "Dark colors increase cooling load",
    ],
    costSection: [
      {
        heading: "10-year total cost (2,000 sq ft roof)",
        body: "Asphalt shingles installed: $6,000–12,000. If the roof lasts 20 years, you'll pay this cost twice over 40 years = $12,000–24,000. Metal roofing installed: $14,000–28,000 — once, for 40–70 years. Add ~10% cooling savings on a $2,400/year energy bill = $240/year = $2,400 over 10 years. Net 40-year advantage for metal: $5,000–15,000 depending on your specific quotes.",
      },
      {
        heading: "Insurance savings",
        body: "In hail- and wind-prone states (Texas, Oklahoma, Colorado), metal roofs qualify for 15–35% homeowner's insurance discounts. On a $2,000/year premium, that's $300–700 per year — enough to pay off the metal premium in 10–15 years on its own.",
      },
    ],
    faqs: [
      { q: "Is metal roofing worth the extra cost?", a: "For homeowners staying 15+ years: yes. You'll likely avoid one complete re-roof ($8,000–15,000) and benefit from lower energy and maintenance costs. For homeowners who move within 10 years, asphalt shingles have better ROI." },
      { q: "Does metal roofing increase home value?", a: "Yes — studies show metal roofs recover 85–95% of their cost in resale value, higher than asphalt at 60–70%. In storm-prone markets, metal roofs can be a significant selling point." },
      { q: "How noisy is metal roofing in rain?", a: "With proper insulation and solid sheathing underneath, metal roofing is no louder than asphalt. The 'noisy tin roof' experience comes from metal over open purlins (barns, sheds) with no insulation layer — not modern residential installations." },
      { q: "Can I put metal roofing over asphalt shingles?", a: "Yes — in most jurisdictions you can install metal over one existing layer of shingles. This saves $1,000–2,500 in tear-off costs. Check local code and manufacturer guidelines; some metal panel warranties require a clean deck." },
    ],
    relatedCalcs: [
      { slug: "metal-roofing-calculator", name: "Metal Roofing Calculator" },
      { slug: "shingles-calculator",      name: "Shingles Calculator" },
      { slug: "roof-pitch-calculator",    name: "Roof Pitch Calculator" },
    ],
  },

  // ─── 3. Concrete Blocks vs Poured Foundation ─────────────────────────────
  {
    slug: "concrete-block-vs-poured-foundation",
    title: "Concrete Block vs Poured Foundation: Pros, Cons & Cost",
    metaTitle: "Concrete Block vs Poured Foundation — Pros, Cons & Cost (2026)",
    metaDesc:
      "Compare CMU block and poured concrete foundations on strength, waterproofing, cost, and crack resistance. Which is right for your home or addition?",
    tags: ["Foundation"],
    summary:
      "Poured concrete and concrete block (CMU) are the two most common foundation types in the US. Regional preferences run strong — but the right choice depends on your soil, water table, and budget.",
    optionA: "Concrete Block (CMU)",
    optionB: "Poured Concrete",
    verdict:
      "Poured concrete is structurally superior — stronger, more watertight, and more resistant to lateral soil pressure. Concrete block is still widely used, costs slightly less in labor-intensive regions, and is easier to modify after the fact. In wet climates or areas with high lateral loads, go poured.",
    verdictFavors: "B",
    compareRows: [
      { aspect: "Compressive strength",     a: "1,500–3,000 PSI", b: "3,000–4,000 PSI" },
      { aspect: "Lateral strength",         a: "Lower (mortared joints)", b: "Higher (monolithic)" },
      { aspect: "Water resistance",         a: "Porous — needs coating", b: "More watertight" },
      { aspect: "Installed cost",           a: "$10–20/sq ft",   b: "$12–22/sq ft" },
      { aspect: "Labor skill required",     a: "Mason required",  b: "Concrete crew" },
      { aspect: "Repair/modification",      a: "Easy — cut blocks", b: "Requires coring" },
      { aspect: "Regional availability",    a: "Southeast, Northeast", b: "Midwest, West" },
      { aspect: "Crack behavior",           a: "Cracks at joints", b: "Can crack randomly" },
    ],
    prosA: [
      "Easier to make penetrations and modifications",
      "No forms needed — reduces equipment cost",
      "Can be built incrementally",
      "Familiar to masons in many regions",
      "Hollow cores can be rebar-filled for added strength",
    ],
    consA: [
      "Mortar joints are weak points for water and lateral force",
      "More labor-intensive than poured",
      "Requires regular waterproofing maintenance",
      "Lower overall structural strength",
      "Slower to build than forming and pouring",
    ],
    prosB: [
      "Monolithic — no joints to crack or leak",
      "Stronger in lateral (soil pressure) loading",
      "More watertight out of the form",
      "Faster installation with experienced crew",
      "Better for wet or high water table sites",
    ],
    consB: [
      "Requires forms — more equipment",
      "Harder to modify after curing",
      "Cracks can propagate anywhere, not just joints",
      "Slightly higher cost in some regions",
      "Requires cure time before backfilling",
    ],
    costSection: [
      {
        heading: "Cost comparison",
        body: "Both foundation types land in a similar range: $10–22 per square foot of wall face depending on region, depth, and complexity. Poured concrete can be faster in labor hours (forms go up quickly, one pour) but requires a pump truck on larger jobs. Block requires a skilled mason but no forms. In the Southeast where masons are abundant, block is often cheaper; in the Midwest where concrete crews dominate, poured typically costs less.",
      },
      {
        heading: "Waterproofing cost",
        body: "Both types need exterior waterproofing — typically $3–8 per sq ft for membrane + drainage board. Block requires this more urgently due to porous mortar joints. Budget an additional $2,000–6,000 for a full basement waterproofing system regardless of foundation type.",
      },
    ],
    faqs: [
      { q: "Which foundation is stronger — block or poured?", a: "Poured concrete is structurally stronger, particularly against lateral (horizontal) soil pressure. This matters most in deep basements, flood zones, or expansive clay soils. For shallow foundations and crawl spaces, the difference is less significant." },
      { q: "Are concrete block foundations still built today?", a: "Yes, especially in the Southeast and parts of the Northeast. In some regions, block is still the dominant residential foundation type. Modern CMU construction with filled and rebar-reinforced cores can meet the same code requirements as poured concrete." },
      { q: "How do I waterproof a block foundation?", a: "Standard approach: apply hydraulic cement to any cracks, then a waterproofing membrane (parge coat + elastomeric coating, or dimple mat system) on the exterior face. Interior drain tile and a sump pump handle any water that does penetrate." },
      { q: "Can you convert a block foundation to poured?", a: "Technically yes — you'd demolish and repour — but this is rarely cost-effective unless the block foundation has significant structural issues. More common is reinforcing an existing block wall with interior rebar and concrete fill, or adding a poured concrete interior wall." },
    ],
    relatedCalcs: [
      { slug: "block-calculator",    name: "Block Calculator" },
      { slug: "concrete-calculator", name: "Concrete Calculator" },
      { slug: "rebar-calculator",    name: "Rebar Calculator" },
    ],
  },

  // ─── 4. Gravel vs Asphalt Driveway ───────────────────────────────────────
  {
    slug: "gravel-vs-asphalt-driveway",
    title: "Gravel vs Asphalt Driveway: Which Is Cheaper Long-Term?",
    metaTitle: "Gravel vs Asphalt Driveway — Long-Term Cost Comparison (2026)",
    metaDesc:
      "Compare gravel and asphalt driveways on upfront cost, maintenance, lifespan, and total 20-year cost. Which material is right for your driveway?",
    tags: ["Driveway"],
    summary:
      "Gravel driveways cost a fraction of asphalt to install but need annual maintenance. Asphalt costs more upfront but delivers a cleaner, more durable surface with less ongoing work.",
    optionA: "Gravel",
    optionB: "Asphalt",
    verdict:
      "For rural driveways over 200 feet, gravel is almost always cheaper even over 20 years. For shorter suburban driveways where appearance matters and maintenance is inconvenient, asphalt delivers better long-term value despite the higher upfront cost.",
    verdictFavors: "neither",
    compareRows: [
      { aspect: "Installed cost (per sq ft)", a: "$0.50–2.00",  b: "$3–7" },
      { aspect: "Lifespan",                   a: "Indefinite (with maintenance)", b: "20–30 years" },
      { aspect: "Maintenance cost/year",      a: "$100–400",    b: "$50–150" },
      { aspect: "Snow/ice removal",           a: "Challenging (gravel scatter)", b: "Easy" },
      { aspect: "Heat absorption",            a: "Low",         b: "High (hot summers)" },
      { aspect: "Appearance",                 a: "Rustic",      b: "Clean, finished" },
      { aspect: "Drainage",                   a: "Excellent",   b: "Requires grading" },
      { aspect: "DIY friendly",               a: "Yes",         b: "Difficult" },
    ],
    prosA: [
      "Very low upfront cost — 4–10× cheaper than asphalt",
      "Excellent drainage — no runoff issues",
      "Easy to install and expand yourself",
      "Naturally absorbs ice and snow melt",
      "Works for any driveway length",
    ],
    consA: [
      "Requires regrading every 1–3 years",
      "Stones scatter onto lawn and roads",
      "Difficult to plow cleanly in winter",
      "Dusty in dry weather",
      "Ruts and potholes form over time",
    ],
    prosB: [
      "Clean, finished appearance",
      "Easy to plow and maintain in winter",
      "No scattered stones or dust",
      "Minimal year-to-year maintenance",
      "Adds curb appeal and home value",
    ],
    consB: [
      "4–10× higher upfront cost",
      "Needs reseal every 3–5 years ($0.15–0.25/sq ft)",
      "Cracks over time — needs patching",
      "Gets very hot in summer sun",
      "Needs professional installation",
    ],
    costSection: [
      {
        heading: "20-year cost for a 1,000 sq ft driveway",
        body: "Gravel: Installation $700–1,500 + annual regrading/top-up ($150–350/yr) = $3,700–8,500 over 20 years. Asphalt: Installation $3,500–7,000 + sealcoating every 4 years ($200–350 each = $1,000–1,750 over 20 years) + crack repairs ($500–1,000) = $5,000–9,750 total. The gap narrows significantly for short driveways.",
      },
      {
        heading: "Long driveway math",
        body: "For a 500-foot rural driveway (roughly 5,000 sq ft), gravel costs $3,000–8,000 installed vs $18,000–35,000 for asphalt. Even with $500/year in gravel maintenance, you'd save $15,000–27,000 over 20 years. For long rural driveways, gravel wins decisively.",
      },
    ],
    faqs: [
      { q: "How thick should a gravel driveway be?", a: "A properly built gravel driveway has 3 layers: 4–6 inches of large base rock (3–4\" crushed stone), 4 inches of mid-size rock (1.5\" crusher run), and 2–3 inches of top dressing (pea gravel or ¾\" crushed stone). Total depth: 10–15 inches for heavy use." },
      { q: "How long does an asphalt driveway last?", a: "A properly installed and maintained asphalt driveway lasts 20–30 years. Key maintenance: seal the surface 6–12 months after installation, then every 3–5 years. Fill cracks as they appear. Neglected asphalt deteriorates in 10–15 years." },
      { q: "Can you pave over gravel with asphalt?", a: "Yes — this is actually the recommended approach. The existing gravel serves as the base layer. Have an asphalt contractor evaluate the existing base: if it's well-compacted and properly graded, you can often pave directly over it, saving excavation and base material costs." },
      { q: "What type of gravel is best for driveways?", a: "Crusher run (also called road base or crush and run) is the best single material for driveways — it contains fines that bind and compact well. For top dressing, ¾-inch crushed stone or limestone provides good drainage without scattering. Avoid smooth pea gravel for driveways — it doesn't compact and rolls under tires." },
    ],
    relatedCalcs: [
      { slug: "gravel-calculator",   name: "Gravel Calculator" },
      { slug: "asphalt-calculator",  name: "Asphalt Calculator" },
      { slug: "cubic-yard-calculator", name: "Cubic Yard Calculator" },
    ],
  },

  // ─── 5. Vinyl vs Hardwood Flooring ───────────────────────────────────────
  {
    slug: "vinyl-vs-hardwood-flooring",
    title: "Vinyl vs Hardwood Flooring: Cost, Durability & Resale Value",
    metaTitle: "Vinyl vs Hardwood Flooring — Cost, Durability & Resale Value (2026)",
    metaDesc:
      "Compare luxury vinyl plank (LVP) and hardwood flooring on cost, durability, water resistance, and home resale value. Which floors are worth the investment?",
    tags: ["Flooring"],
    summary:
      "Luxury vinyl plank has surged in popularity as a realistic-looking, waterproof alternative to hardwood — at roughly half the cost. But hardwood still holds a premium in resale value and longevity.",
    optionA: "Vinyl (LVP)",
    optionB: "Hardwood",
    verdict:
      "LVP wins for bathrooms, basements, kitchens, and rental properties — waterproof, durable, and easy to install. Hardwood wins for main living areas where resale value matters, especially in markets where buyers expect real wood. Many homeowners use both: LVP in wet and high-traffic zones, hardwood in living and dining rooms.",
    verdictFavors: "neither",
    compareRows: [
      { aspect: "Material cost (per sq ft)", a: "$2–7",          b: "$5–15" },
      { aspect: "Installed cost (per sq ft)", a: "$3–9",         b: "$8–20" },
      { aspect: "Water resistance",          a: "100% waterproof", b: "Poor — swells" },
      { aspect: "Durability (wear layer)",   a: "12–20+ mil",    b: "Can be refinished" },
      { aspect: "Lifespan",                  a: "15–25 years",   b: "25–100+ years" },
      { aspect: "Refinishable",              a: "No",            b: "Yes (3–5 times)" },
      { aspect: "Resale value",              a: "Good",          b: "Excellent" },
      { aspect: "DIY install",               a: "Easy (click-lock)", b: "Moderate (nail-down)" },
    ],
    prosA: [
      "Fully waterproof — works in bathrooms, basements, laundry",
      "Lower cost — typically half the price of hardwood",
      "Easy DIY click-lock installation",
      "Comfortable underfoot — softer than wood",
      "Hides subfloor imperfections better",
    ],
    consA: [
      "Cannot be refinished — replace when worn",
      "Lower resale value than real hardwood",
      "Can look artificial in high-end homes",
      "Shorter lifespan (15–25 years)",
      "Not biodegradable — ends up in landfill",
    ],
    prosB: [
      "Can be refinished 3–5 times — multi-generational lifespan",
      "Strongest ROI in home resale",
      "Natural material — ages with character",
      "Adds perceived value in luxury markets",
      "Hypoallergenic and easy to clean",
    ],
    consB: [
      "Poor moisture resistance — not for wet areas",
      "2–3× more expensive than LVP",
      "Requires climate control (expands/contracts with humidity)",
      "Harder DIY installation",
      "Shows scratches in high-traffic areas",
    ],
    costSection: [
      {
        heading: "Cost for a 500 sq ft room",
        body: "LVP installed: $1,500–4,500. Solid hardwood installed: $4,000–10,000. The difference ($2,500–5,500) is significant — but hardwood can be refinished 3–5 times. Over a 60-year period, you'd replace LVP 2–3 times ($3,000–9,000) vs refinishing hardwood ($500–1,500 per refinish) = roughly equivalent long-term cost, with hardwood likely coming out ahead in a quality home.",
      },
      {
        heading: "Resale value",
        body: "The National Association of Realtors reports that hardwood floors are one of the top features buyers want, and typically recover 70–80% of installation cost at resale. LVP recovers 50–65%. In a $500,000 home, real hardwood can add $5,000–15,000 to the sale price over LVP.",
      },
    ],
    faqs: [
      { q: "Is luxury vinyl plank as good as hardwood?", a: "For practical durability in everyday use, high-quality LVP (20+ mil wear layer) is comparable or better than hardwood — it's waterproof, scratch-resistant, and comfortable. Where it falls short is longevity (can't be refinished), resale premium, and appearance in high-end homes." },
      { q: "How thick should LVP be?", a: "For residential use, 6mm or thicker with a 12-mil+ wear layer is the minimum. 8mm with a 20-mil wear layer is better for families with pets and children. Thickness affects both durability and how well it bridges minor subfloor irregularities." },
      { q: "Can you put LVP over existing hardwood?", a: "Yes — floating LVP can go over existing hardwood floors as long as the surface is level, secure, and free from major gaps or humps. This is a popular renovation approach: the hardwood remains underneath (and can be restored someday), while the LVP provides a fresh surface." },
      { q: "What adds more value to a home: LVP or hardwood?", a: "Hardwood adds more resale value, particularly in mid-to-high-end markets. However, updated LVP in good condition beats old, scratched hardwood. If your existing hardwood can be refinished for $1,500, that adds more value than replacing it with LVP." },
    ],
    relatedCalcs: [
      { slug: "flooring-calculator", name: "Flooring Calculator" },
      { slug: "tile-calculator",     name: "Tile Calculator" },
    ],
  },

  // ─── 6. Spray Foam vs Fiberglass Insulation ──────────────────────────────
  {
    slug: "spray-foam-vs-fiberglass-insulation",
    title: "Spray Foam vs Fiberglass Insulation: R-Value, Cost & Payback",
    metaTitle: "Spray Foam vs Fiberglass Insulation — R-Value, Cost & Payback (2026)",
    metaDesc:
      "Compare spray foam and fiberglass batt insulation on R-value per inch, air sealing, moisture control, cost, and energy payback period. Which insulation is worth it?",
    tags: ["Insulation", "Framing"],
    summary:
      "Spray foam insulates and air-seals simultaneously — a major advantage in energy performance. Fiberglass costs far less but does nothing to stop air infiltration, which accounts for 30–40% of heat loss in most homes.",
    optionA: "Spray Foam",
    optionB: "Fiberglass Batts",
    verdict:
      "Open-cell spray foam in walls and closed-cell in rim joists and crawl spaces is the gold standard for energy performance — expect 30–50% lower heating/cooling costs vs fiberglass alone. But at 5–10× the cost, payback takes 5–12 years. For new construction where air sealing is part of the scope, spray foam is usually worth it. For retrofits, blown-in cellulose often provides the best cost-per-R-value improvement.",
    verdictFavors: "A",
    compareRows: [
      { aspect: "R-value per inch",        a: "3.7 (open) / 6.5 (closed)", b: "2.2–2.7" },
      { aspect: "Air sealing",             a: "Excellent — monolithic",   b: "None — requires separate barrier" },
      { aspect: "Moisture barrier",        a: "Closed-cell: yes",          b: "No" },
      { aspect: "Material cost (per sq ft)", a: "$1–3 (open) / $2–5 (closed)", b: "$0.30–0.60" },
      { aspect: "Installed cost (per sq ft)", a: "$1.50–4",               b: "$0.50–1.50" },
      { aspect: "Lifespan",                a: "Lifetime of building",      b: "20–30 years (can settle)" },
      { aspect: "DIY friendly",            a: "Limited (kit for small areas)", b: "Yes" },
      { aspect: "Fire rating",             a: "Requires thermal barrier", b: "Passes as-is" },
    ],
    prosA: [
      "Air seals and insulates in one step",
      "Higher R-value per inch — fits more R in thin cavities",
      "Closed-cell acts as a vapor barrier",
      "Doesn't sag or settle over time",
      "Strengthens wall/roof structure slightly",
    ],
    consA: [
      "5–10× more expensive than fiberglass",
      "Requires professional installation (health hazards uncured)",
      "Off-gassing during installation",
      "Difficult to remove for electrical/plumbing work",
      "Some formulations not environmentally friendly (HFC blowing agents)",
    ],
    prosB: [
      "Lowest cost insulation option",
      "DIY-friendly — no special equipment",
      "Easy to install around wiring and pipes",
      "Widely available, no lead time",
      "Easy to remove for repairs",
    ],
    consB: [
      "Does not air seal — requires separate vapor/air barrier",
      "Can sag or settle over time",
      "Loses effective R-value when air moves through it",
      "Moisture can accumulate if vapor barrier is missing",
      "Lower R-value per inch vs foam",
    ],
    costSection: [
      {
        heading: "Cost for a 2,000 sq ft home",
        body: "Fiberglass batts in walls and attic: $2,500–5,000 materials + $500–1,500 labor = $3,000–6,500 total. Spray foam (open-cell walls + closed-cell rim joists): $8,000–15,000 professionally installed. The premium is $5,000–9,000. At 35% energy savings on a $2,400/year bill, that's $840/year saved — payback in 6–11 years.",
      },
      {
        heading: "Hybrid approach (recommended)",
        body: "Most energy-conscious builders use a hybrid: spray foam on the rim joists, band joist, and any penetrations (where air sealing matters most) + blown-in cellulose or fiberglass in the attic floor. This delivers 80–90% of spray foam's performance at 50–60% of the cost.",
      },
    ],
    faqs: [
      { q: "Is spray foam worth the extra cost?", a: "In new construction where it's bid as part of the initial scope, usually yes. The energy savings over a 30-year mortgage typically exceed the cost premium significantly, especially in climates with extreme summers or winters. In retrofits, the ROI is narrower and depends heavily on your current energy bills." },
      { q: "What R-value do I need?", a: "DOE recommendations: Attic — R-38 to R-60 depending on climate zone. Walls — R-13 to R-21. Floors over crawl spaces — R-19 to R-30. Colder climates (zones 5–7) need the higher end. Your local energy code specifies minimums." },
      { q: "Can I spray foam over fiberglass?", a: "Not practically — spray foam needs to adhere to the substrate (framing, sheathing). The standard approach for upgrade is to remove existing batts, spray foam the cavities, or add a continuous rigid foam layer on the exterior (retrofitting from outside). Blown-in cellulose can be added on top of existing batts in attics." },
      { q: "Does spray foam cause moisture problems?", a: "Closed-cell spray foam can cause moisture issues if improperly specified — it's a vapor retarder, so moisture in the wall can't dry to the inside. The key is to ensure vapor drive is understood: in cold climates, closed-cell goes on the warm side of the insulation. Open-cell spray foam is vapor-permeable and more forgiving." },
    ],
    relatedCalcs: [
      { slug: "insulation-calculator", name: "Insulation Calculator" },
      { slug: "stud-calculator",       name: "Stud / Framing Calculator" },
    ],
  },

  // ─── 7. Concrete patio cost ───────────────────────────────────────────────
  {
    slug: "concrete-patio-cost",
    section: "howto",
    title: "Concrete Patio Cost: DIY vs Contractor — What Affects the Final Price",
    metaTitle: "Concrete Patio Cost: DIY vs Contractor (2026 Price Guide)",
    metaDesc:
      "A DIY concrete patio costs $3–6 per sq ft in materials. Hiring a contractor runs $8–18/sq ft installed. Here's what drives the final price and when each makes sense.",
    tags: ["Concrete"],
    summary:
      "Concrete is one of the most durable and cost-effective patio materials — but the price gap between DIY and contractor work is significant. A 12×16 patio can cost $600 in materials or $2,500+ installed. Here's how to estimate your project accurately.",
    optionA: "DIY Concrete Patio",
    optionB: "Contractor-Installed Patio",
    verdict:
      "For patios under 200 sq ft, experienced DIYers can save $1,000–2,000 mixing and pouring themselves — but concrete is unforgiving and must be placed and finished quickly. For larger slabs, stamped finishes, or poor soil conditions, a contractor delivers better results with a warranty and proper equipment. If you've never poured concrete, start with a small slab to practice.",
    verdictFavors: "neither",
    compareRows: [
      { aspect: "Material cost (per sq ft)", a: "$3–6",                         b: "$3–6 (included in quote)" },
      { aspect: "Total installed cost",       a: "$3–6/sq ft",                   b: "$8–18/sq ft" },
      { aspect: "Labor",                      a: "You + 1–2 helpers",            b: "Experienced crew" },
      { aspect: "Equipment",                  a: "Rent mixer, screed, float",    b: "Included in price" },
      { aspect: "Stamping / finishes",        a: "Difficult without experience", b: "Full range available" },
      { aspect: "Typical project duration",   a: "Full weekend",                 b: "1–2 days" },
      { aspect: "Permits",                    a: "You pull & manage",            b: "Usually included" },
      { aspect: "Warranty",                   a: "None",                         b: "Typically 1 year" },
    ],
    prosA: [
      "Save $500–3,000 on a typical patio",
      "Full control over mix, finish, and timing",
      "No scheduling delays — work on your timeline",
      "Builds real skills for future projects",
    ],
    consA: [
      "Concrete is unforgiving — errors can't be undone once it sets",
      "Physically demanding; requires helpers for slabs over 100 sq ft",
      "Equipment rental adds $150–300 to project cost",
      "Risk of cracking from improper finishing or curing",
    ],
    prosB: [
      "Professional finish including stamping, staining, or exposed aggregate",
      "Proper subgrade prep, forming, and reinforcement included",
      "Finished in one day — no multi-weekend commitment",
      "Warranty covers cracking and settling defects",
    ],
    consB: [
      "2–4× higher cost than DIY",
      "Scheduling may require weeks of lead time",
      "Quality varies widely by contractor",
      "Less control over timing and product choices",
    ],
    costSection: [
      {
        heading: "Material cost breakdown (DIY)",
        body: "For a 12×16 ft patio (192 sq ft) at 4\" thick: you need ~2.4 cubic yards of concrete. Ready-mix runs $150–180/yard delivered = $360–430. Rebar (if used): ~$80. Forms, stakes, fiber: ~$50. Concrete sealer: ~$40. Total materials: $530–600. Equipment rental (mixer or pump, screed, float, trowel): $150–300/day. Grand total DIY: ~$700–900 for a 12×16 patio.",
      },
      {
        heading: "Contractor price breakdown",
        body: "Contractors price concrete work at $8–18 per sq ft installed, depending on region, finish type, and site conditions. A plain broom-finish 12×16 patio runs $1,500–2,200. Stamped or colored concrete adds $4–8/sq ft — the same patio with stamping costs $2,300–3,700. Heated climates and simple shapes are on the low end; complex shapes, steep slopes, or difficult access push costs up.",
      },
      {
        heading: "What drives the price",
        body: "Thickness (4\" vs 6\" = +50% concrete), reinforcement (rebar vs fiber vs none), finish type (broom, exposed aggregate, stamped, polished), site access (pump truck adds $500–800 if the truck can't reach), removal of existing patio ($1–3/sq ft), and regional labor rates. Permits are usually required for patios over 200 sq ft and cost $50–200 depending on municipality.",
      },
    ],
    faqs: [
      { q: "How thick should a concrete patio be?", a: "4 inches is standard for pedestrian use. If you'll park vehicles on it or expect heavy loads, use 5–6 inches. Always pour over a compacted 4-inch gravel base for drainage." },
      { q: "Does a concrete patio need rebar?", a: "For most residential patios, fiber-reinforced concrete (fibers added to the mix) is sufficient and easier to work with than rebar. Rebar is recommended for slabs near structures, retaining walls, or areas with expansive clay soil." },
      { q: "How long does concrete take to cure?", a: "Concrete reaches 70% strength in 7 days and full design strength (~4,000 PSI) in 28 days. You can walk on it after 24–48 hours and place light furniture after 7 days. Avoid heavy vehicles for 28 days." },
      { q: "What's the cheapest concrete patio finish?", a: "A broom finish (dragging a stiff broom across wet concrete) costs nothing extra and provides a slip-resistant surface. It's the standard finish for most DIY and contractor pours." },
    ],
    relatedCalcs: [
      { slug: "concrete-calculator",   name: "Concrete Calculator" },
      { slug: "gravel-calculator",     name: "Gravel Calculator" },
      { slug: "rebar-calculator",      name: "Rebar Calculator" },
    ],
  },

  // ─── 8. How to frame a wall ───────────────────────────────────────────────
  {
    slug: "how-to-frame-a-wall",
    section: "howto",
    title: "How to Frame a Wall: Stud Count, Lumber List & Cost",
    metaTitle: "How to Frame a Wall — Stud Count, Lumber List & Cost (2026)",
    metaDesc:
      "Standard 16\" OC framing uses ~0.75 studs per linear foot. Here's how to calculate your stud count, build your lumber list, and estimate material cost for any wall.",
    tags: ["Framing"],
    summary:
      "Framing a wall is one of the most fundamental carpentry skills — and getting your material list right before you start saves time and money. Whether you're adding a partition wall, finishing a basement, or framing a new addition, this guide covers the stud count formula, complete lumber list, and typical cost per linear foot.",
    optionA: "16\" On-Center (Standard)",
    optionB: "24\" On-Center (Advanced / OVE)",
    verdict:
      "Standard 16\" OC framing is the right choice for most projects: it's universally accepted by code, handles drywall well, and simplifies window and door framing. The 24\" OC system (OVE — Optimum Value Engineering) uses 15–20% less lumber but requires 5/8\" drywall and careful engineering on load-bearing walls. Stick with 16\" OC unless your plans specifically call for OVE.",
    verdictFavors: "A",
    compareRows: [
      { aspect: "Stud spacing",               a: "16 inches on center",          b: "24 inches on center" },
      { aspect: "Studs per 10 linear feet",   a: "8 studs",                      b: "5–6 studs" },
      { aspect: "Lumber cost savings",        a: "Baseline",                     b: "15–20% less lumber" },
      { aspect: "Drywall requirement",        a: "Standard 1/2\" drywall",       b: "Requires 5/8\" drywall" },
      { aspect: "Insulation cavity",          a: "3.5\" (R-13–15 batts)",        b: "3.5\" but less thermal bridging" },
      { aspect: "Load-bearing use",           a: "Standard — no restrictions",   b: "Engineering review recommended" },
      { aspect: "Code acceptance",            a: "Universal",                    b: "Check local jurisdiction" },
      { aspect: "Window/door framing",        a: "Straightforward",              b: "Requires layout adjustment" },
    ],
    prosA: [
      "Accepted by all building codes without special engineering",
      "Works with standard 1/2\" drywall and all fixtures",
      "More attachment points for cabinets, shelves, and heavy loads",
      "Easier to frame windows and doors — more layout flexibility",
    ],
    consA: [
      "Uses 15–20% more lumber than 24\" OC",
      "More thermal bridging through studs reduces effective R-value",
    ],
    prosB: [
      "15–20% lumber savings on a typical wall",
      "Fewer studs = less thermal bridging, slightly better energy performance",
      "Wider bays can accommodate thicker insulation in some assemblies",
    ],
    consB: [
      "Requires thicker (5/8\") and heavier drywall",
      "Not suitable for all load-bearing applications without engineering",
      "Fixtures and cabinetry harder to fasten — fewer stud locations",
      "Not accepted by all jurisdictions for residential framing",
    ],
    costSection: [
      {
        heading: "Stud count formula",
        body: "For 16\" OC: (wall length in inches ÷ 16) + 1 = stud count. Round up. For a 10-foot wall: (120 ÷ 16) + 1 = 8.5 → 9 studs. Add: 3 plates (2 top plates + 1 bottom plate = 3 boards at the full wall length). For each corner: 3 extra studs. For each door or window: 2 king studs + 2 jack studs + header lumber. Rule of thumb: order 1 stud per linear foot of wall, then add plates and extras.",
      },
      {
        heading: "Complete lumber list for a 10-foot wall",
        body: "Studs (8-ft pre-cuts): 9 pieces. Top plates (2×4×10): 2 pieces. Bottom plate (2×4×10): 1 piece. Corner framing (if exterior corner): 3 extra studs. Standard door rough opening (3'0\" door → 38\" RO): 2 jack studs + 2 king studs + double 2×10 header (or LVL). Total boards for basic 10-ft wall with one door: ~20 pieces of 2×4×8 + 3 pieces of 2×4×10 + header lumber.",
      },
      {
        heading: "Material cost estimate",
        body: "2×4×8 studs run $4–6 each at lumber yards (prices vary by region). A basic 10-foot partition wall costs $80–120 in lumber. A 20-foot exterior wall with window and door openings: $180–280 in framing lumber. Add sheathing (OSB or plywood at $25–40 per 4×8 sheet), house wrap ($0.15–0.25/sq ft), and fasteners. Labor for professional framing runs $2–5 per sq ft of wall area, or $20–50 per linear foot all-in.",
      },
    ],
    faqs: [
      { q: "What size lumber is used for framing?", a: "Most residential walls use 2×4 lumber (actual 1.5\"×3.5\"). Exterior walls in cold climates often use 2×6 (actual 1.5\"×5.5\") to accommodate R-21 insulation. Load-bearing beams and headers use doubled 2× material or engineered LVL beams." },
      { q: "How do I frame a wall with a door?", a: "Mark the rough opening (door width + 2\" for the frame + 1/2\" for shimming). Install king studs at each side. Add jack studs inside the king studs to support the header. Install a doubled 2×10 header (or size to span — wider openings need larger headers). Cripple studs above the header continue to the top plate at 16\" OC." },
      { q: "Do I need a permit to frame a wall?", a: "Interior non-load-bearing partition walls generally don't require a permit in most jurisdictions. Any load-bearing wall, exterior wall, or wall that affects structure requires a building permit. Always check with your local building department before starting." },
      { q: "What's the difference between load-bearing and partition walls?", a: "Load-bearing walls carry the weight of the structure above (roof, floors, other walls) down to the foundation. Partition walls only divide space and carry no structural load. Before removing or modifying any wall, determine if it's load-bearing — exterior walls parallel to the ridge and walls directly above a beam or foundation wall are almost always load-bearing." },
    ],
    relatedCalcs: [
      { slug: "stud-calculator",   name: "Stud / Framing Calculator" },
      { slug: "lumber-calculator", name: "Lumber Cost Calculator" },
      { slug: "drywall-calculator", name: "Drywall Calculator" },
    ],
  },
];

export const ALL_TAGS: Tag[] = ["Roofing", "Foundation", "Flooring", "Driveway", "Framing", "Insulation", "Concrete"];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find(g => g.slug === slug);
}
