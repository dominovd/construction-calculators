export type HowToTag = "Concrete" | "Framing" | "Roofing" | "Landscaping" | "Flooring";

export type HowToSection = {
  heading: string;
  body: string;
};

export type HowToTable = {
  heading: string;
  label: string;
  rows: { label: string; value: string }[];
};

export type HowToGuide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  tags: HowToTag[];
  intro: string;               // 1-2 sentence context
  directAnswer: string;        // Quick Answer box — direct, scannable
  table: HowToTable;           // Key reference table
  sections: HowToSection[];    // Main content sections
  proTip: string;              // Amber tip box
  faqs: { q: string; a: string }[];
  relatedCalcs: { slug: string; name: string }[];
};

export const HOWTOS: HowToGuide[] = [

  // ─── 1. Concrete patio cost ───────────────────────────────────────────────
  {
    slug: "concrete-patio-cost",
    title: "Concrete Patio Cost: What Affects the Final Price",
    metaTitle: "Concrete Patio Cost: What Affects the Final Price (2026)",
    metaDesc:
      "A concrete patio costs $8–18/sq ft installed or $3–6/sq ft DIY. A 12×16 patio runs $1,500–2,500 hired. See cost by size, finish type, and what drives the price.",
    tags: ["Concrete"],
    intro:
      "Concrete is one of the most durable and cost-effective patio materials — but the final price varies widely depending on size, finish, and whether you pour it yourself or hire a contractor.",
    directAnswer:
      "A contractor-installed concrete patio costs $8–18 per square foot. A 12×16 ft patio (192 sq ft) runs $1,500–2,500 for a plain broom finish, or $2,500–4,000 with stamping. DIY materials cost $3–6/sq ft — the same patio runs $600–900 in concrete, forms, and rebar alone.",
    table: {
      heading: "Concrete patio cost by size",
      label: "Patio size",
      rows: [
        { label: "10×10 ft (100 sq ft)",  value: "DIY $400–600 / Contractor $900–1,500" },
        { label: "12×16 ft (192 sq ft)",  value: "DIY $600–900 / Contractor $1,500–2,500" },
        { label: "16×20 ft (320 sq ft)",  value: "DIY $1,000–1,500 / Contractor $2,500–4,000" },
        { label: "20×20 ft (400 sq ft)",  value: "DIY $1,200–2,000 / Contractor $3,200–5,500" },
        { label: "20×30 ft (600 sq ft)",  value: "DIY $1,800–3,000 / Contractor $5,000–9,000" },
      ],
    },
    sections: [
      {
        heading: "What drives the price",
        body: "Six factors move the needle most: (1) Thickness — 4\" is standard for foot traffic; 6\" for vehicles adds ~50% more concrete. (2) Finish type — broom finish is cheapest; exposed aggregate adds $2–4/sq ft; stamped concrete adds $4–8/sq ft. (3) Site access — if a concrete truck can't reach your yard, a pump truck adds $500–800. (4) Demolition — removing an existing patio adds $1–3/sq ft. (5) Subgrade — rocky or unstable soil requires extra excavation and gravel base work. (6) Region — labor rates in the Northeast and West Coast run 30–50% higher than the South and Midwest.",
      },
      {
        heading: "DIY cost breakdown (12×16 patio)",
        body: "Concrete: 2.4 cubic yards of ready-mix at $160–180/yard = $385–430. Rebar or fiber reinforcement: $60–90. Forms and stakes: $40–60. Gravel base (4\" compacted): $80–120. Concrete sealer: $40–60. Equipment rental (float, trowel, screed): $80–150/day. Total DIY: $685–910. Labor is 10–15 hours for a first-timer with one helper.",
      },
      {
        heading: "Contractor cost breakdown",
        body: "A contractor's price covers concrete, forms, labor, finishing, and cleanup. Expect $8–12/sq ft for a plain broom-finish slab in most markets. Stamped concrete: $12–18/sq ft. Colored (integral pigment): add $1–3/sq ft. Saw-cut control joints are typically included. Most contractors require a minimum job size of $800–1,200. Always get 3 quotes — prices vary 20–40% between contractors.",
      },
      {
        heading: "Stamped vs plain concrete",
        body: "Plain broom-finish concrete is the cheapest and most durable option — it's slip-resistant and hides wear well. Stamped concrete mimics brick, slate, or stone patterns and looks premium, but costs 2–3× more and requires resealing every 2–3 years ($0.50–1.50/sq ft). Exposed aggregate (seeded or washed finish) is a middle ground: durable, attractive, and costs $1–3/sq ft more than broom. For a budget patio meant to last 30+ years with zero maintenance, plain concrete wins.",
      },
      {
        heading: "Permits and code requirements",
        body: "Most jurisdictions require a permit for concrete patios over 200 sq ft or those attached to the house. Permit cost: $50–200. Some areas restrict impervious surface coverage — if you're covering a large yard area, check setback and coverage rules before you pour. Footings for attached patios (connected to the house structure) may need to match the frost depth of your foundation.",
      },
    ],
    proTip:
      "Get your concrete delivered as ready-mix even for mid-size patios (200+ sq ft). Mixing 80-lb bags by hand for a 12×16 patio means mixing 60+ bags — that's a full day of exhausting work. Ready-mix runs $160–180/yard delivered and the truck can pour the whole thing in 20 minutes.",
    faqs: [
      { q: "How thick should a concrete patio be?", a: "4 inches is standard for foot traffic and patio furniture. If you plan to drive or park on the patio, use 5–6 inches. Always pour over a compacted 4-inch gravel base for drainage and stability." },
      { q: "Does a concrete patio add value to a home?", a: "Yes — a well-built concrete patio typically returns 50–70% of its cost at resale. Stamped or stained concrete patios can return more in markets where outdoor living is valued. Plain concrete is a safe investment; elaborate finishes are more subjective." },
      { q: "How long does a concrete patio last?", a: "A properly poured and sealed concrete patio lasts 30–50 years. Common failure points are cracks from tree roots, freeze-thaw cycles, and improper curing. Using 4,000 PSI concrete, control joints every 8–10 feet, and sealing every 3–5 years maximizes lifespan." },
      { q: "Can I pour concrete directly on dirt?", a: "No. You need a compacted gravel base (minimum 4 inches of crushed stone) under the slab. Pouring directly on soil leads to uneven settling and cracking within 2–5 years. In areas with expansive clay soil, use 6 inches of gravel and consider adding fiber reinforcement." },
    ],
    relatedCalcs: [
      { slug: "concrete-calculator",   name: "Concrete Calculator" },
      { slug: "gravel-calculator",     name: "Gravel Calculator" },
      { slug: "rebar-calculator",      name: "Rebar Calculator" },
    ],
  },

  // ─── 2. How to frame a wall ───────────────────────────────────────────────
  {
    slug: "how-to-frame-a-wall",
    title: "How to Frame a Wall: Stud Count, Lumber List & Cost",
    metaTitle: "How to Frame a Wall — Stud Count, Lumber List & Cost (2026)",
    metaDesc:
      "Frame a wall with 1 stud per linear foot at 16\" OC, plus 3 plates. A 10-foot wall needs 9 studs and 30 ft of plate lumber. Full lumber list and cost estimate inside.",
    tags: ["Framing"],
    intro:
      "Framing a wall is one of the most fundamental carpentry skills. Getting your lumber list right before you start saves time, money, and a second trip to the lumber yard.",
    directAnswer:
      "For a standard 8-ft wall at 16\" on center: use 1 stud per linear foot of wall + 3 plates (2 top plates + 1 bottom plate). A 10-foot wall needs 9 studs and 3 boards of 2×4×10 for plates — about 12 boards total. Add 2–3 extra studs per corner and 4 studs + header lumber per door or window opening.",
    table: {
      heading: "Stud count by wall length (16\" OC)",
      label: "Wall length",
      rows: [
        { label: "8 ft",  value: "7 studs + 3 plates (2×4×8)" },
        { label: "10 ft", value: "9 studs + 3 plates (2×4×10)" },
        { label: "12 ft", value: "10 studs + 3 plates (2×4×12)" },
        { label: "16 ft", value: "13 studs + 3 plates (2×4×16)" },
        { label: "20 ft", value: "16 studs + 3 plates (2×4×20 or spliced)" },
        { label: "24 ft", value: "19 studs + 3 plates" },
      ],
    },
    sections: [
      {
        heading: "How to calculate stud count",
        body: "The formula: (wall length in inches ÷ stud spacing in inches) + 1 = stud count. Round up to the next whole number. For a 10-foot wall at 16\" OC: (120 ÷ 16) + 1 = 8.5 → 9 studs. At 24\" OC: (120 ÷ 24) + 1 = 6 studs. Add 10% for waste and mistakes. The extra stud at the end accounts for the bookend stud — the formula gives you spaces, not studs, so you always add 1.",
      },
      {
        heading: "Complete lumber list for a basic wall",
        body: "For a 10-foot non-load-bearing partition wall with one standard door: Studs (2×4×8 pre-cuts): 9 pieces. Top plates (2×4×10): 2 pieces. Bottom plate (2×4×10): 1 piece. Corner framing (if it's a corner wall): 3 extra studs. Door rough opening (3'0\" door = 38\" RO): 2 king studs + 2 jack studs (cut to 81\") + double 2×10 header (or LVL beam) + cripple studs above. Total for wall with one door: approximately 18–20 pieces of 2×4 + header lumber.",
      },
      {
        heading: "Step-by-step framing process",
        body: "1. Snap chalk lines on the floor for the wall location. 2. Cut the bottom plate to length; mark stud positions every 16\" OC starting from one end. 3. Mark the same layout on your top plates (lay both together and mark simultaneously). 4. Cut all studs to height (ceiling height minus 4.5\" for three plates). 5. Assemble the wall flat on the floor: lay studs between top and bottom plates and nail with two 16d nails per end. 6. Frame door and window openings with king studs, jack studs, and headers. 7. Tilt the wall up and brace it plumb. 8. Nail the bottom plate to the floor (concrete anchors or nails) and the top plate to ceiling joists or blocking.",
      },
      {
        heading: "Cost estimate",
        body: "2×4×8 studs cost $4–6 each depending on region and grade. A 10-foot partition wall runs $60–90 in studs plus $15–25 in plate lumber — roughly $75–115 total for a basic wall. A 20-foot exterior wall with one window and one door: $150–250 in framing lumber plus $50–100 for the header. Add OSB sheathing for exterior walls at $25–40 per 4×8 sheet (you'll need about 8–10 sheets for a 20-foot wall). Professional framing labor: $2–5 per sq ft of wall area, or $25–60 per linear foot all-in installed.",
      },
      {
        heading: "Load-bearing vs partition walls",
        body: "Partition walls divide space and carry no structural load — they're what this guide covers. Load-bearing walls carry the weight of floors, roofs, or other walls above and transfer it to the foundation. Before removing or moving any wall, determine if it's load-bearing: exterior walls and interior walls running perpendicular to floor joists are almost always load-bearing. Adding a load-bearing wall requires proper beam sizing (LVL or built-up lumber), post supports, and often a structural engineer review. Never guess on load-bearing work.",
      },
    ],
    proTip:
      "Pre-cut all your studs to the same length before assembly — use a stop block clamped to a miter saw fence so every stud is identical. Framing a wall goes 3× faster when you're not measuring each stud individually.",
    faqs: [
      { q: "What size lumber is used for wall framing?", a: "Standard interior walls use 2×4 lumber (actual size 1.5\"×3.5\"). Exterior walls in cold climates often use 2×6 (actual 1.5\"×5.5\") to fit R-21 insulation. The thicker wall also reduces thermal bridging through studs, improving energy performance." },
      { q: "Do I need a permit to frame a wall?", a: "Interior non-load-bearing partition walls generally don't require a permit in most jurisdictions. Any wall that's load-bearing, changes the structure, or affects electrical/plumbing typically requires a permit. Always check with your local building department before starting — fines for unpermitted work can exceed the project cost." },
      { q: "What's the difference between 16\" and 24\" on center?", a: "16\" OC is the standard for most residential walls — it supports 1/2\" drywall, works with all standard fixtures, and is accepted everywhere by code. 24\" OC (Advanced Framing / OVE) uses 15–20% less lumber and reduces thermal bridging but requires 5/8\" drywall and is not accepted in all jurisdictions for load-bearing applications. Use 16\" OC unless your plans specifically call for 24\" OC." },
      { q: "How do I frame around a door opening?", a: "Mark the rough opening (door width + 2\"). Install king studs (full height) at each side. Install jack studs (trimmer studs) inside the king studs — these support the header and are cut to the height of the RO. Install the header (sized to span the opening — a 3' door needs a doubled 2×6 minimum; wider openings need larger headers or LVL). Add cripple studs above the header to the top plate, maintaining your 16\" OC layout." },
    ],
    relatedCalcs: [
      { slug: "stud-calculator",    name: "Stud / Framing Calculator" },
      { slug: "lumber-calculator",  name: "Lumber Cost Calculator" },
      { slug: "drywall-calculator", name: "Drywall Calculator" },
    ],
  },

];

export function getHowTo(slug: string): HowToGuide | undefined {
  return HOWTOS.find(h => h.slug === slug);
}
