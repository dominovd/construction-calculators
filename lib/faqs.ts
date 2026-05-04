export type FaqCategory =
  | "Paint"
  | "Concrete"
  | "Framing"
  | "Roofing"
  | "Flooring"
  | "Landscaping"
  | "Masonry";

export type TableRow = { label: string; value: string };

export type HowToStep = { text: string };

export type RelatedFaq = { slug: string; question: string };

export type Faq = {
  slug: string;
  question: string;          // exact search query — used as H1
  metaTitle: string;
  metaDesc: string;
  category: FaqCategory;
  directAnswer: string;      // 2–3 sentences — featured snippet bait
  tableHeading: string;      // column header for the "value" column
  tableLabel: string;        // column header for the "label" column
  table: TableRow[];         // quick reference by common sizes
  howToSteps: HowToStep[];   // HowTo schema steps
  proTip: string;            // amber callout at bottom
  relatedCalc: { slug: string; name: string };
  relatedFaqs: RelatedFaq[];
};

export const FAQS: Faq[] = [
  // ─── 1. Paint — 12×12 room ───────────────────────────────────────────────
  {
    slug: "how-many-gallons-of-paint-for-12x12-room",
    question: "How many gallons of paint for a 12×12 room?",
    metaTitle: "How Many Gallons of Paint for a 12×12 Room? (2026 Answer)",
    metaDesc:
      "A 12×12 room needs about 1–2 gallons of paint for walls (one coat). See the exact calculation, a quick table for other room sizes, and a free paint calculator.",
    category: "Paint",
    directAnswer:
      "A 12×12 room with 8-foot ceilings needs approximately 1 gallon of paint per coat for the walls, or 1.5–2 gallons for two coats. One gallon of paint covers roughly 350–400 square feet. After subtracting a standard door and two windows, the net wall area is about 320–340 square feet.",
    tableHeading: "Paint Needed (2 coats)",
    tableLabel: "Room Size",
    table: [
      { label: "10×10 ft",  value: "1.5 gallons" },
      { label: "12×12 ft",  value: "1.5–2 gallons" },
      { label: "12×15 ft",  value: "2 gallons" },
      { label: "14×14 ft",  value: "2–2.5 gallons" },
      { label: "15×20 ft",  value: "2.5–3 gallons" },
      { label: "20×20 ft",  value: "3–4 gallons" },
    ],
    howToSteps: [
      { text: "Calculate wall area: add up all four wall lengths, multiply by ceiling height. For 12×12 with 8 ft ceilings: (12+12+12+12) × 8 = 384 sq ft." },
      { text: "Subtract openings: deduct ~21 sq ft per door and ~15 sq ft per window. One door + two windows = 51 sq ft. Net area: 384 − 51 = 333 sq ft." },
      { text: "Divide by coverage: one gallon covers 350–400 sq ft. 333 ÷ 375 = 0.89 gallons per coat." },
      { text: "Multiply by coats: for two coats, 0.89 × 2 = 1.78 gallons. Round up to 2 gallons." },
    ],
    proTip:
      "Buy paint in the larger size when you're close to the boundary — a quart costs about 40% of a gallon but only covers 25%. If you need 1.3 gallons, buy 2 gallons rather than 1 gallon + 1 quart.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-sheets-of-drywall-for-12x12-room", question: "How many sheets of drywall for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-1500-sq-ft-house", question: "How many gallons of paint for a 1,500 sq ft house?" },
    ],
  },

  // ─── 2. Rebar — 10×10 slab ───────────────────────────────────────────────
  {
    slug: "how-much-rebar-for-10x10-slab",
    question: "How much rebar for a 10×10 slab?",
    metaTitle: "How Much Rebar for a 10×10 Slab? (2026 Answer)",
    metaDesc:
      "A 10×10 concrete slab with rebar on 12-inch centers needs about 220 linear feet of #4 rebar (11 bars each direction). See the exact layout and cost estimate.",
    category: "Concrete",
    directAnswer:
      "A 10×10 foot slab with #4 rebar on 12-inch centers requires 11 bars running each direction — 22 bars total — at 10 feet each, totaling 220 linear feet of rebar. At typical pricing of $0.60–0.90 per linear foot for #4 rebar, that's $130–200 in rebar materials.",
    tableHeading: "Rebar (12\" spacing, #4)",
    tableLabel: "Slab Size",
    table: [
      { label: "10×10 ft",  value: "220 lin ft / 22 bars" },
      { label: "12×12 ft",  value: "312 lin ft / 26 bars" },
      { label: "10×20 ft",  value: "330 lin ft / 33 bars" },
      { label: "20×20 ft",  value: "840 lin ft / 42 bars" },
      { label: "20×30 ft",  value: "1,240 lin ft / 62 bars" },
      { label: "24×24 ft",  value: "1,200 lin ft / 50 bars" },
    ],
    howToSteps: [
      { text: "Choose spacing: residential slabs typically use #4 rebar on 12-inch centers. Driveways and heavier loads use 12\" or 8\" spacing with #4 or #5 bar." },
      { text: "Calculate bars per direction: divide slab length by spacing and add 1. For 10 ft on 12\" centers: 10 ÷ 1 + 1 = 11 bars per direction." },
      { text: "Calculate total bars: 11 bars × 2 directions = 22 bars. Each bar is 10 ft long = 220 linear feet total." },
      { text: "Add 10% for overlap and waste: 220 × 1.10 = 242 linear feet. Round up when ordering." },
    ],
    proTip:
      "Rebar comes in 20-foot sticks. For a 10×10 slab, each 20-foot stick cuts perfectly in half with zero waste. Order 12 sticks (240 lin ft) to cover 22 bars × 10 ft with waste.",
    relatedCalc: { slug: "rebar-calculator", name: "Rebar Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
      { slug: "how-much-rebar-for-20x20-slab", question: "How much rebar for a 20×20 slab?" },
    ],
  },

  // ─── 3. Concrete — 10×10 slab ────────────────────────────────────────────
  {
    slug: "how-many-bags-of-concrete-for-10x10-slab",
    question: "How many bags of concrete for a 10×10 slab?",
    metaTitle: "How Many Bags of Concrete for a 10×10 Slab? (2026 Answer)",
    metaDesc:
      "A 10×10 slab at 4 inches thick needs 1.23 cubic yards of concrete — about 56 bags of 80-lb mix or 74 bags of 60-lb mix. See exact counts for 4\" and 6\" thickness.",
    category: "Concrete",
    directAnswer:
      "A 10×10 foot slab poured 4 inches thick requires 1.23 cubic yards of concrete, or approximately 56 bags of 80-lb mix (each covers 0.022 yd³). For a 6-inch slab, you need 1.85 cubic yards — about 84 bags of 80-lb mix. For slabs over 1 yard, ready-mix is more economical than bags.",
    tableHeading: "80-lb Bags Needed",
    tableLabel: "Slab Size (4\" thick)",
    table: [
      { label: "4×4 ft",    value: "9 bags" },
      { label: "6×6 ft",    value: "20 bags" },
      { label: "10×10 ft",  value: "56 bags" },
      { label: "12×12 ft",  value: "80 bags" },
      { label: "10×20 ft",  value: "111 bags" },
      { label: "20×20 ft",  value: "222 bags" },
    ],
    howToSteps: [
      { text: "Calculate cubic feet: length × width × depth (in feet). For 10×10 at 4\": 10 × 10 × 0.333 = 33.3 cubic feet." },
      { text: "Convert to cubic yards: 33.3 ÷ 27 = 1.23 cubic yards." },
      { text: "Add 10% waste: 1.23 × 1.10 = 1.35 cubic yards to order." },
      { text: "Convert to bags: one 80-lb bag = 0.022 yd³. So 1.35 ÷ 0.022 = 61 bags. Round up to 62." },
    ],
    proTip:
      "Above 1 cubic yard, ready-mix concrete is almost always cheaper than bags. Bags run $6–9 each at retail — 56 bags = $336–504 just in materials. A yard of ready-mix costs $150–175 delivered. For a 10×10 slab, ready-mix saves $100–200 and saves hours of mixing.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-much-rebar-for-10x10-slab", question: "How much rebar for a 10×10 slab?" },
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
    ],
  },

  // ─── 4. Drywall — 12×12 room ─────────────────────────────────────────────
  {
    slug: "how-many-sheets-of-drywall-for-12x12-room",
    question: "How many sheets of drywall for a 12×12 room?",
    metaTitle: "How Many Sheets of Drywall for a 12×12 Room? (2026 Answer)",
    metaDesc:
      "A 12×12 room with 8-foot ceilings needs about 16–18 sheets of 4×8 drywall including walls and ceiling. Get the exact breakdown and a free drywall calculator.",
    category: "Framing",
    directAnswer:
      "A 12×12 room with 8-foot ceilings needs approximately 16–18 sheets of 4×8 drywall for walls and ceiling combined, including 10% waste. The four walls cover 384 sq ft and the ceiling covers 144 sq ft — 528 total sq ft gross, minus openings. Each 4×8 sheet covers 32 sq ft.",
    tableHeading: "4×8 Sheets (walls + ceiling)",
    tableLabel: "Room Size (8 ft ceiling)",
    table: [
      { label: "10×10 ft",  value: "14–16 sheets" },
      { label: "12×12 ft",  value: "16–18 sheets" },
      { label: "12×15 ft",  value: "19–21 sheets" },
      { label: "14×14 ft",  value: "19–22 sheets" },
      { label: "15×20 ft",  value: "24–27 sheets" },
      { label: "20×20 ft",  value: "30–34 sheets" },
    ],
    howToSteps: [
      { text: "Calculate wall area: perimeter × height. For 12×12 at 8 ft: (12+12+12+12) × 8 = 384 sq ft." },
      { text: "Calculate ceiling area: 12 × 12 = 144 sq ft." },
      { text: "Subtract openings: 1 door (21 sq ft) + 2 windows (30 sq ft) = 51 sq ft. Net area: 384 + 144 − 51 = 477 sq ft." },
      { text: "Add 10% waste: 477 × 1.10 = 525 sq ft. Divide by 32 (sq ft per 4×8 sheet) = 16.4 → order 17 sheets." },
    ],
    proTip:
      "For ceilings, use 4×12 sheets instead of 4×8 — fewer seams means less taping and a flatter finished surface. A 12-foot room hits the perfect width with no waste on 4×12 sheets.",
    relatedCalc: { slug: "drywall-calculator", name: "Drywall Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
    ],
  },

  // ─── 5. Studs — 16-foot wall ─────────────────────────────────────────────
  {
    slug: "how-many-studs-for-16-foot-wall",
    question: "How many studs for a 16-foot wall?",
    metaTitle: "How Many Studs for a 16-Foot Wall? (2026 Answer)",
    metaDesc:
      "A 16-foot wall on 16-inch centers needs 13 studs plus 3 plates. On 24-inch centers it needs 9 studs. See the quick table for all common wall lengths.",
    category: "Framing",
    directAnswer:
      "A 16-foot wall framed with studs on 16-inch centers needs 13 studs plus 3 plates (top plate, double top plate, and bottom plate) — 16 total pieces of lumber. On 24-inch centers, the same wall needs 9 studs. Add 1 extra stud for every door or window opening (king stud, jack stud, cripple arrangement).",
    tableHeading: "Studs (16\" OC) + plates",
    tableLabel: "Wall Length",
    table: [
      { label: "8 ft",   value: "7 studs + 3 plates" },
      { label: "10 ft",  value: "9 studs + 3 plates" },
      { label: "12 ft",  value: "11 studs + 3 plates" },
      { label: "16 ft",  value: "13 studs + 3 plates" },
      { label: "20 ft",  value: "16 studs + 3 plates" },
      { label: "24 ft",  value: "19 studs + 3 plates" },
    ],
    howToSteps: [
      { text: "Divide wall length by stud spacing: 16 ft ÷ 1.333 ft (16\") = 12 spaces." },
      { text: "Add 1 for the end stud: 12 + 1 = 13 studs." },
      { text: "Add plates: 3 plates (bottom plate + top plate + double top plate), each the full 16 ft = 3 more pieces." },
      { text: "Add extras for openings: each door or window needs 2 king studs + 2 jack studs + cripples. Rough estimate: add 5 studs per opening." },
    ],
    proTip:
      "The industry shortcut: multiply wall length in feet by 0.75 to get stud count at 16\" OC, then add 1 for the end. For a 16-foot wall: 16 × 0.75 + 1 = 13 studs. Add 10% for waste and corners.",
    relatedCalc: { slug: "stud-calculator", name: "Stud / Framing Calculator" },
    relatedFaqs: [
      { slug: "how-many-sheets-of-drywall-for-12x12-room", question: "How many sheets of drywall for a 12×12 room?" },
      { slug: "how-much-rebar-for-10x10-slab", question: "How much rebar for a 10×10 slab?" },
    ],
  },

  // ─── 6. Mulch — 100 sq ft ────────────────────────────────────────────────
  {
    slug: "how-much-mulch-for-100-square-feet",
    question: "How much mulch for 100 square feet?",
    metaTitle: "How Much Mulch for 100 Square Feet? (2026 Answer)",
    metaDesc:
      "100 square feet of mulch at 3 inches deep needs 0.93 cubic yards — about 7 bags of 2-cubic-foot mulch. See a quick table for all common areas and depths.",
    category: "Landscaping",
    directAnswer:
      "For 100 square feet at the recommended 3-inch depth, you need 0.93 cubic yards of mulch — about 25 cubic feet. That's roughly 7 bags of 2-cubic-foot bagged mulch, or 13 bags of the smaller 1.5-cubic-foot bags. For larger areas, bulk mulch by the yard is significantly cheaper.",
    tableHeading: "Mulch Needed (3\" depth)",
    tableLabel: "Area",
    table: [
      { label: "50 sq ft",    value: "0.46 yd³ / 4 bags (2 cu ft)" },
      { label: "100 sq ft",   value: "0.93 yd³ / 7 bags" },
      { label: "200 sq ft",   value: "1.85 yd³ / 14 bags" },
      { label: "500 sq ft",   value: "4.63 yd³ / 35 bags" },
      { label: "1,000 sq ft", value: "9.26 yd³ / 70 bags" },
      { label: "2,000 sq ft", value: "18.5 yd³ — order bulk" },
    ],
    howToSteps: [
      { text: "Measure your bed area in square feet (length × width for rectangles)." },
      { text: "Choose depth: 2 inches for topdressing existing beds, 3 inches for new beds, 4 inches for weed suppression." },
      { text: "Calculate cubic feet: area × depth (in) ÷ 12. For 100 sq ft at 3\": 100 × 3 ÷ 12 = 25 cubic feet." },
      { text: "Convert to cubic yards: 25 ÷ 27 = 0.93 yd³. Or to bags: 25 ÷ 2 = 12.5 → buy 13 bags of 2 cu ft." },
    ],
    proTip:
      "Bulk mulch (delivered by the yard) costs $25–45/yd³. Bagged mulch at $4–6 per 2-cu-ft bag works out to $54–81/yd³ — 2–3× more expensive. The break-even point is around 3 cubic yards (about 300 sq ft at 3\" deep). Order bulk for anything larger.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-gravel-for-200-foot-driveway", question: "How much gravel for a 200-foot driveway?" },
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
    ],
  },

  // ─── 7. Pavers — 10×10 patio ─────────────────────────────────────────────
  {
    slug: "how-many-pavers-for-10x10-patio",
    question: "How many pavers for a 10×10 patio?",
    metaTitle: "How Many Pavers for a 10×10 Patio? (2026 Answer)",
    metaDesc:
      "A 10×10 patio needs 100–450 pavers depending on size. Standard 4×8 brick pavers: 450 pieces. 12×12 concrete pavers: 100 pieces. See the full table and calculator.",
    category: "Masonry",
    directAnswer:
      "A 10×10 foot patio (100 sq ft) needs approximately 450 standard 4×8 inch brick pavers, 225 concrete pavers at 6×6 inches, or 100 pavers at 12×12 inches. Always add 10% for cuts and waste. Paver count varies significantly by size — use the table below for your specific paver.",
    tableHeading: "Pavers for 10×10 (100 sq ft)",
    tableLabel: "Paver Size",
    table: [
      { label: "4×8\" brick",     value: "450 pavers" },
      { label: "6×6\"",          value: "400 pavers" },
      { label: "6×9\"",          value: "267 pavers" },
      { label: "12×12\"",        value: "100 pavers" },
      { label: "16×16\"",        value: "57 pavers" },
      { label: "12×18\"",        value: "67 pavers" },
    ],
    howToSteps: [
      { text: "Calculate patio area: 10 × 10 = 100 sq ft." },
      { text: "Calculate paver coverage: paver width (in) × paver length (in) ÷ 144 = sq ft per paver. For 4×8: 4×8÷144 = 0.222 sq ft." },
      { text: "Divide area by coverage: 100 ÷ 0.222 = 450 pavers." },
      { text: "Add 10% for cuts and waste: 450 × 1.10 = 495. Round up to 500 pavers." },
    ],
    proTip:
      "For a 10×10 patio, also plan for: 1 inch of bedding sand (0.31 yd³), 4–6 inches of compacted gravel base (1.2–1.9 yd³), and edge restraints for the perimeter (40 linear feet). The base materials often cost as much as the pavers themselves.",
    relatedCalc: { slug: "paver-calculator", name: "Paver Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-many-tiles-for-12x12-room", question: "How many tiles for a 12×12 room?" },
    ],
  },

  // ─── 8. Shingles — 1500 sq ft roof ───────────────────────────────────────
  {
    slug: "how-many-shingles-for-1500-sq-ft-roof",
    question: "How many shingles for a 1,500 sq ft roof?",
    metaTitle: "How Many Shingles for a 1,500 Sq Ft Roof? (2026 Answer)",
    metaDesc:
      "A 1,500 sq ft roof footprint needs 17–22 squares of shingles depending on pitch, plus 10% waste. That's 51–66 bundles of 3-tab or architectural shingles.",
    category: "Roofing",
    directAnswer:
      "A house with a 1,500 square foot footprint and a 4/12 pitch has an actual roof area of about 1,580 sq ft (1,500 × 1.054 pitch factor), or 15.8 roofing squares. Adding 10% waste gives 17.4 squares — order 18 squares (54 bundles, since 3 bundles = 1 square). Steeper pitches need more material.",
    tableHeading: "Squares needed (incl. 10% waste)",
    tableLabel: "Footprint + Pitch",
    table: [
      { label: "1,500 sq ft / 4:12",  value: "17–18 squares / 51–54 bundles" },
      { label: "1,500 sq ft / 6:12",  value: "19–20 squares / 57–60 bundles" },
      { label: "1,500 sq ft / 8:12",  value: "21–22 squares / 63–66 bundles" },
      { label: "2,000 sq ft / 4:12",  value: "23–24 squares / 69–72 bundles" },
      { label: "2,000 sq ft / 6:12",  value: "25–27 squares / 75–81 bundles" },
      { label: "2,500 sq ft / 4:12",  value: "29–30 squares / 87–90 bundles" },
    ],
    howToSteps: [
      { text: "Measure the flat footprint of the roof (length × width of the house)." },
      { text: "Apply pitch multiplier: 4/12 pitch → ×1.054, 6/12 → ×1.118, 8/12 → ×1.202, 12/12 → ×1.414." },
      { text: "Add 10% waste: multiply by 1.10. Divide by 100 to get roofing squares." },
      { text: "Convert to bundles: multiply squares by 3 (standard architectural shingles). Add ridge cap bundles separately (1 bundle per 35 linear feet of ridge)." },
    ],
    proTip:
      "Buy all shingles from the same lot number — color can vary between production runs. If your job takes more than one delivery, confirm all bundles share the same lot code printed on the wrapper.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-for-1500-sq-ft-roof", question: "How many shingles for a 1,500 sq ft roof?" },
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
    ],
  },

  // ─── 9. Concrete blocks — 40-foot wall ───────────────────────────────────
  {
    slug: "how-many-concrete-blocks-for-40-foot-wall",
    question: "How many concrete blocks for a 40-foot wall?",
    metaTitle: "How Many Concrete Blocks for a 40-Foot Wall? (2026 Answer)",
    metaDesc:
      "A 40-foot wall built 4 feet high with standard 8×16 CMU blocks needs 240 blocks (6 rows × 40 blocks). See counts for other heights and block sizes.",
    category: "Masonry",
    directAnswer:
      "A 40-foot long wall built 4 feet tall (48 inches) using standard 8-inch tall CMU blocks needs 6 rows × 40 blocks per row = 240 blocks, plus 5% waste = 252 blocks. The wall area is 160 sq ft. Add mortar: approximately 8 bags of 80-lb mortar mix.",
    tableHeading: "Blocks needed (standard 8×16 CMU)",
    tableLabel: "Wall (40 ft long)",
    table: [
      { label: "2 ft tall (24\")",   value: "3 rows × 40 = 120 blocks" },
      { label: "3 ft tall (36\")",   value: "5 rows × 40 = 200 blocks" },
      { label: "4 ft tall (48\")",   value: "6 rows × 40 = 240 blocks" },
      { label: "6 ft tall (72\")",   value: "9 rows × 40 = 360 blocks" },
      { label: "8 ft tall (96\")",   value: "12 rows × 40 = 480 blocks" },
      { label: "10 ft tall (120\")", value: "15 rows × 40 = 600 blocks" },
    ],
    howToSteps: [
      { text: "Determine rows: divide wall height (in inches) by block height (8\" for standard CMU). 48\" ÷ 8\" = 6 rows." },
      { text: "Determine blocks per row: divide wall length (in inches) by block length (16\"). 40 ft × 12 = 480\" ÷ 16\" = 30 blocks per row." },
      { text: "Multiply: 6 rows × 30 blocks = 180 blocks. Wait — 40 ft × 12 = 480 inches ÷ 16 = 30, not 40. Blocks are 16\" so 40 ft = 30 blocks/row." },
      { text: "Add 5% waste: 180 × 1.05 = 189 blocks. Estimate mortar: 1 bag per 25 blocks = 8 bags." },
    ],
    proTip:
      "Standard CMU blocks are 15⅝\" actual width (16\" nominal including mortar joint). So a 40-foot wall = 480 inches ÷ 16\" nominal = exactly 30 blocks per row with no cuts needed — ideal for planning.",
    relatedCalc: { slug: "block-calculator", name: "Block Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
      { slug: "how-much-rebar-for-10x10-slab", question: "How much rebar for a 10×10 slab?" },
    ],
  },

  // ─── 10. Sod — 1,000 sq ft ───────────────────────────────────────────────
  {
    slug: "how-many-rolls-of-sod-for-1000-sq-ft",
    question: "How many rolls of sod for 1,000 sq ft?",
    metaTitle: "How Many Rolls of Sod for 1,000 Sq Ft? (2026 Answer)",
    metaDesc:
      "1,000 sq ft of lawn needs about 100–111 rolls of sod (standard rolls cover 9 sq ft each) or 3 pallets. See counts for common lawn sizes and a cost estimate.",
    category: "Landscaping",
    directAnswer:
      "A 1,000 square foot lawn needs approximately 111 standard sod rolls (each covering 9 sq ft) after adding 10% for cuts and edges. Most sod is sold by the pallet — a standard pallet covers 450–500 sq ft — so you need 2–3 pallets. At $200–350 per pallet, budget $400–700 in sod materials.",
    tableHeading: "Rolls & Pallets needed",
    tableLabel: "Lawn Area",
    table: [
      { label: "500 sq ft",    value: "56 rolls / 1–2 pallets" },
      { label: "1,000 sq ft",  value: "111 rolls / 2–3 pallets" },
      { label: "2,000 sq ft",  value: "222 rolls / 4–5 pallets" },
      { label: "5,000 sq ft",  value: "556 rolls / 10–12 pallets" },
      { label: "¼ acre",       value: "~1,200 rolls / 24–27 pallets" },
      { label: "½ acre",       value: "~2,400 rolls / 48–54 pallets" },
    ],
    howToSteps: [
      { text: "Measure your lawn area in square feet (length × width for simple shapes)." },
      { text: "Add 10% for cuts, edges, and irregular shapes: 1,000 × 1.10 = 1,100 sq ft to cover." },
      { text: "Divide by roll size: standard rolls are 2 ft × 4.5 ft = 9 sq ft. 1,100 ÷ 9 = 122 rolls." },
      { text: "Convert to pallets: 1 pallet = ~50 rolls (450 sq ft). 122 rolls ÷ 50 = 2.4 → order 3 pallets." },
    ],
    proTip:
      "Order sod for delivery on the day you plan to install — sod begins deteriorating within 24–48 hours of harvest, especially in summer. Lay it within 24 hours of delivery and water immediately after installation.",
    relatedCalc: { slug: "sod-calculator", name: "Sod Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-much-gravel-for-200-foot-driveway", question: "How much gravel for a 200-foot driveway?" },
    ],
  },

  // ─── 11. Gravel — 200-foot driveway ──────────────────────────────────────
  {
    slug: "how-much-gravel-for-200-foot-driveway",
    question: "How much gravel for a 200-foot driveway?",
    metaTitle: "How Much Gravel for a 200-Foot Driveway? (2026 Answer)",
    metaDesc:
      "A 200-foot driveway 12 feet wide and 6 inches deep needs about 14.8 cubic yards or 20 tons of gravel. See the full calculation and cost estimate.",
    category: "Landscaping",
    directAnswer:
      "A 200-foot driveway that is 12 feet wide with a 6-inch gravel layer needs approximately 14.8 cubic yards (about 20 tons) of gravel. At $25–50 per ton delivered, that's $500–1,000 in gravel materials. A properly built gravel driveway has 3 layers: 4–6 inches of base rock, 3–4 inches of middle stone, and 2 inches of top dressing.",
    tableHeading: "Gravel needed (6\" depth, 12 ft wide)",
    tableLabel: "Driveway Length",
    table: [
      { label: "50 ft",   value: "3.7 yd³ / 5 tons" },
      { label: "100 ft",  value: "7.4 yd³ / 10 tons" },
      { label: "200 ft",  value: "14.8 yd³ / 20 tons" },
      { label: "300 ft",  value: "22.2 yd³ / 30 tons" },
      { label: "500 ft",  value: "37 yd³ / 50 tons" },
      { label: "1,000 ft", value: "74 yd³ / 100 tons" },
    ],
    howToSteps: [
      { text: "Calculate volume: length × width × depth (all in feet). 200 × 12 × 0.5 ft (6\") = 1,200 cubic feet." },
      { text: "Convert to cubic yards: 1,200 ÷ 27 = 44.4 cubic yards for the full base." },
      { text: "For a single 6-inch layer: 200 × 12 × 0.5 ÷ 27 = 44.4 ÷ 3 = 14.8 cubic yards." },
      { text: "Convert to tons: gravel weighs ~1.35 tons/yd³. 14.8 × 1.35 = 20 tons." },
    ],
    proTip:
      "Order crusher run (also called road base or 21AA) for the base layers — it contains fines that compact and bind well. Use pea gravel or ¾\" clean crushed stone only for the top 2-inch dressing layer. Mixing types at the base leads to poor compaction.",
    relatedCalc: { slug: "gravel-calculator", name: "Gravel Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
    ],
  },

  // ─── 12. Tiles — 12×12 room ──────────────────────────────────────────────
  {
    slug: "how-many-tiles-for-12x12-room",
    question: "How many tiles for a 12×12 room?",
    metaTitle: "How Many Tiles for a 12×12 Room? (2026 Answer)",
    metaDesc:
      "A 12×12 room needs 144–160 tiles if using 12×12 inch tiles (1 tile per sq ft plus 10% waste). For 18×18 tiles you need 67 tiles. See the full table by tile size.",
    category: "Flooring",
    directAnswer:
      "A 12×12 foot room (144 sq ft) needs 144 tiles if using 12×12 inch tiles — exactly 1 tile per square foot — plus 10% waste = 159 tiles. For 18×18 inch tiles, you need 67 tiles. For 24×24 inch tiles, you need 38 tiles. Always add 10% for cuts; add 15% for diagonal layouts.",
    tableHeading: "Tiles for 12×12 room (144 sq ft)",
    tableLabel: "Tile Size",
    table: [
      { label: "6×6\"",   value: "576 tiles + waste" },
      { label: "12×12\"", value: "144 tiles + waste" },
      { label: "16×16\"", value: "81 tiles + waste" },
      { label: "18×18\"", value: "64 tiles + waste" },
      { label: "24×24\"", value: "36 tiles + waste" },
      { label: "12×24\"", value: "72 tiles + waste" },
    ],
    howToSteps: [
      { text: "Measure room area: 12 × 12 = 144 sq ft." },
      { text: "Calculate tile coverage: (tile width in inches × tile length in inches) ÷ 144 = sq ft per tile. For 18×18: 18×18÷144 = 2.25 sq ft/tile." },
      { text: "Divide area by tile coverage: 144 ÷ 2.25 = 64 tiles." },
      { text: "Add waste: 10% for straight lay (64 × 1.10 = 71 tiles), 15% for diagonal lay (64 × 1.15 = 74 tiles). Round up to full boxes." },
    ],
    proTip:
      "Tiles are sold in boxes covering a set square footage — always buy full boxes and round up. Keep unopened boxes for future repairs; tiles are discontinued regularly and you won't find an exact match years later.",
    relatedCalc: { slug: "tile-calculator", name: "Tile Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-many-pavers-for-10x10-patio", question: "How many pavers for a 10×10 patio?" },
    ],
  },

  // ─── 13. How many shingles in a bundle ───────────────────────────────────
  {
    slug: "how-many-shingles-in-a-bundle",
    question: "How many shingles in a bundle?",
    metaTitle: "How Many Shingles in a Bundle? (3-Tab, Architectural & More)",
    metaDesc:
      "A bundle of 3-tab shingles contains 26 shingles and covers 33 sq ft. Architectural shingles: 21–29 per bundle. See all types and how many bundles per square.",
    category: "Roofing",
    directAnswer:
      "A standard bundle of 3-tab asphalt shingles contains 26 shingles and covers approximately 33 square feet (one-third of a roofing square). Architectural (dimensional) shingles vary by brand: most contain 21–29 shingles per bundle, also covering 33 sq ft. You need 3 bundles to cover one roofing square (100 sq ft).",
    tableHeading: "Shingles per bundle / coverage",
    tableLabel: "Shingle Type",
    table: [
      { label: "3-Tab (standard)",       value: "26 shingles / 33 sq ft" },
      { label: "Architectural (most)",   value: "21–29 shingles / 33 sq ft" },
      { label: "GAF Timberline HDZ",     value: "21 shingles / 33 sq ft" },
      { label: "CertainTeed Landmark",   value: "24 shingles / 33 sq ft" },
      { label: "Owens Corning Duration", value: "21 shingles / 33 sq ft" },
      { label: "Ridge cap bundle",       value: "Covers 35 lin ft of ridge" },
    ],
    howToSteps: [
      { text: "One roofing square = 100 sq ft of roof surface." },
      { text: "One bundle covers 33 sq ft = one-third of a square." },
      { text: "So 3 bundles = 1 square. To find bundles needed: calculate roof squares × 3." },
      { text: "Add 10% waste: squares × 1.10 × 3 = bundles to order. For a 20-square roof: 20 × 1.10 × 3 = 66 bundles." },
    ],
    proTip:
      "Ridge cap shingles are sold separately — don't count on cutting field shingles for the ridge. One bundle of ridge cap covers about 35 linear feet. Measure your ridge(s) and order accordingly.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-much-does-a-square-of-shingles-cover", question: "How much does a square of shingles cover?" },
      { slug: "how-many-nails-per-shingle", question: "How many nails per shingle?" },
    ],
  },

  // ─── 14. How many 80lb bags of concrete in a yard ────────────────────────
  {
    slug: "how-many-80lb-bags-of-concrete-in-a-yard",
    question: "How many 80lb bags of concrete in a yard?",
    metaTitle: "How Many 80lb Bags of Concrete in a Yard? (2026 Answer)",
    metaDesc:
      "It takes 45 bags of 80lb concrete mix to make one cubic yard. For 60lb bags you need 60, and for 40lb bags you need 90. See the full breakdown and cost comparison.",
    category: "Concrete",
    directAnswer:
      "One cubic yard of concrete requires 45 bags of 80-pound concrete mix. Each 80-lb bag yields 0.60 cubic feet of mixed concrete, and one cubic yard = 27 cubic feet. So 27 ÷ 0.60 = 45 bags. For 60-lb bags (0.45 cu ft each): 60 bags per yard. For 40-lb bags (0.30 cu ft): 90 bags per yard.",
    tableHeading: "Bags per cubic yard",
    tableLabel: "Bag Size",
    table: [
      { label: "80 lb bag",  value: "45 bags / yd³" },
      { label: "60 lb bag",  value: "60 bags / yd³" },
      { label: "50 lb bag",  value: "72 bags / yd³" },
      { label: "40 lb bag",  value: "90 bags / yd³" },
    ],
    howToSteps: [
      { text: "One cubic yard = 27 cubic feet." },
      { text: "Find your bag's yield: 80-lb bag = 0.60 cu ft, 60-lb = 0.45 cu ft, 40-lb = 0.30 cu ft (printed on bag label)." },
      { text: "Divide 27 by yield per bag: 27 ÷ 0.60 = 45 bags of 80-lb mix per yard." },
      { text: "For your project: calculate cubic yards needed, multiply by bags per yard, add 10% waste." },
    ],
    proTip:
      "At $6–9 per 80-lb bag, one cubic yard in bags costs $270–405. Ready-mix runs $150–175/yard delivered — and saves hours of mixing. Bags only make sense for projects under 0.5 yards (about 22 bags).",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
      { slug: "how-many-bags-of-concrete-for-a-fence-post", question: "How many bags of concrete for a fence post?" },
    ],
  },

  // ─── 15. Paint for a bedroom ─────────────────────────────────────────────
  {
    slug: "how-many-gallons-of-paint-for-a-bedroom",
    question: "How many gallons of paint for a bedroom?",
    metaTitle: "How Many Gallons of Paint for a Bedroom? (2026 Answer)",
    metaDesc:
      "Most bedrooms need 1–2 gallons of paint for two coats on the walls. A typical 12×12 bedroom uses about 1.5–2 gallons. See estimates by room size.",
    category: "Paint",
    directAnswer:
      "A typical bedroom needs 1–2 gallons of paint for two coats on the walls. A 10×10 bedroom needs about 1.5 gallons; a 12×12 bedroom needs 1.5–2 gallons; a 14×14 bedroom needs 2–2.5 gallons. One gallon covers 350–400 square feet. These estimates assume one door, two windows, and 8-foot ceilings.",
    tableHeading: "Paint needed (2 coats, walls only)",
    tableLabel: "Bedroom Size",
    table: [
      { label: "Small (10×10 ft)",   value: "1–1.5 gallons" },
      { label: "Medium (12×12 ft)",  value: "1.5–2 gallons" },
      { label: "Large (14×14 ft)",   value: "2–2.5 gallons" },
      { label: "Master (14×16 ft)",  value: "2–3 gallons" },
      { label: "Add ceiling",        value: "+1 gallon (any size)" },
      { label: "Add trim/doors",     value: "+1 quart" },
    ],
    howToSteps: [
      { text: "Measure all four walls: add lengths, multiply by ceiling height. 12×12 at 8 ft: 48 × 8 = 384 sq ft gross." },
      { text: "Subtract 1 door (21 sq ft) and 2 windows (30 sq ft): 384 − 51 = 333 sq ft net." },
      { text: "Divide by 350 (coverage per gallon): 333 ÷ 350 = 0.95 gallons per coat." },
      { text: "Multiply by 2 coats: 1.9 gallons. Round up to 2 gallons." },
    ],
    proTip:
      "If you're going from a dark color to light (or vice versa), buy a tinted primer in a similar shade to your topcoat. It cuts to true coverage in 2 coats instead of 3, saving a gallon and a day of work.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-much-paint-for-a-front-door", question: "How much paint for a front door?" },
    ],
  },

  // ─── 16. Bricks per square foot ──────────────────────────────────────────
  {
    slug: "how-many-bricks-per-square-foot",
    question: "How many bricks per square foot?",
    metaTitle: "How Many Bricks Per Square Foot? (Wall & Patio)",
    metaDesc:
      "Standard modular bricks need 6.75 bricks per square foot of wall face. For patio or flat work: 4.5 bricks per sq ft (using the flat face). See all common brick sizes.",
    category: "Masonry",
    directAnswer:
      "Standard modular bricks (3-5/8\" × 2-1/4\" × 7-5/8\") laid in a running bond pattern require approximately 6.75 bricks per square foot of wall face, including a 3/8\" mortar joint. For flat patio work laid on the broad face: 4.5 bricks per square foot. For queen-size bricks: 5.5 per sq ft.",
    tableHeading: "Bricks per sq ft",
    tableLabel: "Brick Type / Use",
    table: [
      { label: "Standard modular (wall)",  value: "6.75 bricks/sq ft" },
      { label: "Standard modular (patio)", value: "4.5 bricks/sq ft" },
      { label: "Queen size (wall)",        value: "5.5 bricks/sq ft" },
      { label: "Jumbo (wall)",             value: "4.5 bricks/sq ft" },
      { label: "King size (wall)",         value: "4.8 bricks/sq ft" },
      { label: "Norman (wall)",            value: "4.5 bricks/sq ft" },
    ],
    howToSteps: [
      { text: "Determine your brick size and joint thickness (standard is 3/8\")." },
      { text: "Calculate brick face area with joint: (brick height + joint) × (brick length + joint)." },
      { text: "For standard modular: (2.25 + 0.375) × (7.625 + 0.375) = 2.625 × 8 = 21 sq inches." },
      { text: "Divide 144 sq in (1 sq ft) by 21 = 6.86 → round to 6.75 with mortar overlap. Add 5–10% waste." },
    ],
    proTip:
      "Always add 5% waste for straight walls, 10% for walls with corners, cuts, or complex patterns. Order all bricks at once from the same production run — color varies between batches.",
    relatedCalc: { slug: "brick-calculator", name: "Brick Calculator" },
    relatedFaqs: [
      { slug: "how-many-bricks-for-a-10x10-patio", question: "How many bricks for a 10×10 patio?" },
      { slug: "how-many-concrete-blocks-for-40-foot-wall", question: "How many concrete blocks for a 40-foot wall?" },
    ],
  },

  // ─── 17. Nails per shingle ───────────────────────────────────────────────
  {
    slug: "how-many-nails-per-shingle",
    question: "How many nails per shingle?",
    metaTitle: "How Many Nails Per Shingle? (Standard & High-Wind)",
    metaDesc:
      "Standard installations use 4 nails per shingle. High-wind zones require 6 nails per shingle. Learn nail placement, length, and how many nails per square.",
    category: "Roofing",
    directAnswer:
      "Standard roofing installations require 4 nails per shingle placed just below the tar strip. In high-wind areas (wind zones 2–3, or where code requires), use 6 nails per shingle. With 4 nails per shingle and 3 bundles per square, a 20-square roof needs approximately 2,340 roofing nails (26 shingles × 3 bundles × 3 squares × 4 nails = rough estimate).",
    tableHeading: "Nails per shingle",
    tableLabel: "Condition",
    table: [
      { label: "Standard (wind ≤ 60 mph)",   value: "4 nails" },
      { label: "High wind (60–150 mph)",      value: "6 nails" },
      { label: "Low-slope (2–4:12 pitch)",    value: "6 nails" },
      { label: "Hip/ridge shingles",          value: "2 nails each" },
      { label: "Starter strip",               value: "3–4 nails per piece" },
      { label: "Nails per square (4-nail)",   value: "320–340 nails" },
    ],
    howToSteps: [
      { text: "Place nails 1 inch from each end of the shingle, and evenly spaced between for 4-nail pattern." },
      { text: "Nail location: 5/8\" above the cutout (for 3-tab) or along the nailing zone marked on architectural shingles." },
      { text: "Nail length: minimum 1-1/4\" for new decking, 2\" when nailing over existing shingles." },
      { text: "For a complete roof: (total squares × 3 bundles × shingles per bundle × nails per shingle) + 10% extra for misses." },
    ],
    proTip:
      "Use ring-shank roofing nails — they hold 40% better than smooth shank. Minimum 12-gauge, galvanized or stainless. Hand-driven nails seat more consistently than pneumatic guns on cold days when shingles are brittle.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-much-does-a-square-of-shingles-cover", question: "How much does a square of shingles cover?" },
    ],
  },

  // ─── 18. How much does a square of shingles cover ────────────────────────
  {
    slug: "how-much-does-a-square-of-shingles-cover",
    question: "How much does a square of shingles cover?",
    metaTitle: "How Much Does a Square of Shingles Cover? (2026)",
    metaDesc:
      "One roofing square covers exactly 100 square feet of roof surface. It takes 3 bundles to make one square. See how to convert your roof to squares.",
    category: "Roofing",
    directAnswer:
      "One roofing square covers exactly 100 square feet of roof surface. This is the universal standard in the roofing industry — one square always equals 100 sq ft regardless of shingle type or brand. Three bundles of standard asphalt shingles make one square. Roofers price labor and materials by the square.",
    tableHeading: "Squares needed",
    tableLabel: "Roof footprint + pitch",
    table: [
      { label: "1,000 sq ft / flat",    value: "10 squares" },
      { label: "1,000 sq ft / 4:12",    value: "10.5 squares" },
      { label: "1,500 sq ft / 4:12",    value: "15.8 squares" },
      { label: "2,000 sq ft / 4:12",    value: "21 squares" },
      { label: "2,000 sq ft / 6:12",    value: "22.4 squares" },
      { label: "2,500 sq ft / 6:12",    value: "28 squares" },
    ],
    howToSteps: [
      { text: "Measure your roof's flat footprint (house length × width)." },
      { text: "Multiply by pitch factor: 4:12 = ×1.054, 6:12 = ×1.118, 8:12 = ×1.202, 12:12 = ×1.414." },
      { text: "Divide by 100 to get squares." },
      { text: "Add 10% waste: multiply by 1.10. This is your order quantity in squares." },
    ],
    proTip:
      "When getting contractor quotes, always verify they're quoting the same number of squares. Measure your own roof or ask for the square count in writing — it's easy to compare bids when everyone is working from the same number.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-many-shingles-for-1500-sq-ft-roof", question: "How many shingles for a 1,500 sq ft roof?" },
    ],
  },

  // ─── 19. Concrete for a fence post ───────────────────────────────────────
  {
    slug: "how-many-bags-of-concrete-for-a-fence-post",
    question: "How many bags of concrete for a fence post?",
    metaTitle: "How Many Bags of Concrete for a Fence Post? (2026)",
    metaDesc:
      "Most fence posts need 1–2 bags of 80lb concrete mix. A standard 4×4 post in a 10-inch diameter hole needs about 1.5 bags. See counts by hole size.",
    category: "Concrete",
    directAnswer:
      "A standard fence post hole (10 inches diameter, 24 inches deep) requires approximately 1.5 bags of 80-pound concrete mix. For a larger 12-inch diameter hole at 30 inches deep, use 2–3 bags. Most residential fence installations use 1–2 bags of 80-lb mix per post, depending on post height and soil conditions.",
    tableHeading: "80-lb bags per post hole",
    tableLabel: "Hole size",
    table: [
      { label: "8\" dia × 20\" deep",   value: "0.75 bags" },
      { label: "10\" dia × 24\" deep",  value: "1.5 bags" },
      { label: "10\" dia × 30\" deep",  value: "2 bags" },
      { label: "12\" dia × 30\" deep",  value: "2.5 bags" },
      { label: "12\" dia × 36\" deep",  value: "3 bags" },
      { label: "16\" dia × 48\" deep",  value: "6 bags" },
    ],
    howToSteps: [
      { text: "Calculate hole volume in cubic feet: π × radius² × depth. For 10\" dia × 24\": 3.14 × 0.208² × 2 = 0.27 cu ft." },
      { text: "Subtract post volume: a 4×4 post in 2 ft of hole = (3.5 × 3.5 / 144) × 2 = 0.17 cu ft. Net = 0.27 − 0.17 = 0.10 cu ft concrete." },
      { text: "Wait — typical rule: post hole concrete volume is roughly 3× the post cross-section for a 10\" hole. Use 0.6 cu ft." },
      { text: "One 80-lb bag = 0.60 cu ft. So 0.60 ÷ 0.60 = 1 bag minimum. Add buffer: use 1.5 bags per post." },
    ],
    proTip:
      "Fast-setting concrete (Quikrete Fast-Setting or similar) doesn't require mixing — pour dry mix into the hole, add water, and it sets in 20–40 minutes. Ideal for fence posts. Still use 1.5 bags per post for proper support.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-quikrete-per-fence-post", question: "How many bags of Quikrete per fence post?" },
      { slug: "how-many-80lb-bags-of-concrete-in-a-yard", question: "How many 80lb bags of concrete in a yard?" },
    ],
  },

  // ─── 20. Square feet in a box of laminate ────────────────────────────────
  {
    slug: "how-many-square-feet-in-a-box-of-laminate-flooring",
    question: "How many square feet in a box of laminate flooring?",
    metaTitle: "How Many Square Feet in a Box of Laminate Flooring?",
    metaDesc:
      "Most boxes of laminate flooring cover 15–22 square feet. Popular brands: Pergo covers 19.63 sq ft, LifeProof 20.06 sq ft. Always check the label.",
    category: "Flooring",
    directAnswer:
      "A box of laminate flooring typically covers 15–22 square feet, depending on the brand and plank size. Most common boxes cover 19–21 sq ft. To find boxes needed: divide your room area (plus 10% waste) by the sq ft per box. Always check the box label — coverage is printed on every package.",
    tableHeading: "Coverage per box",
    tableLabel: "Brand / Product",
    table: [
      { label: "Pergo Outlast+",        value: "19.63 sq ft/box" },
      { label: "LifeProof (Home Depot)", value: "20.06 sq ft/box" },
      { label: "Shaw Floors (typical)", value: "17–21 sq ft/box" },
      { label: "Mohawk (typical)",      value: "15–22 sq ft/box" },
      { label: "TrafficMaster",         value: "15.9 sq ft/box" },
      { label: "Generic 48\"×7\" planks", value: "~20 sq ft/box" },
    ],
    howToSteps: [
      { text: "Measure room length × width = sq ft. For a 12×15 room: 180 sq ft." },
      { text: "Add 10% waste for cuts and stagger: 180 × 1.10 = 198 sq ft." },
      { text: "Add 15% for diagonal layouts: 180 × 1.15 = 207 sq ft." },
      { text: "Check box coverage label. Divide total sq ft by box coverage. 198 ÷ 20 = 9.9 → buy 10 boxes." },
    ],
    proTip:
      "Buy one extra box and keep it sealed. If a plank gets damaged years later, the color and embossing will match perfectly since it came from the same production run. Discontinued flooring is nearly impossible to match.",
    relatedCalc: { slug: "flooring-calculator", name: "Flooring Calculator" },
    relatedFaqs: [
      { slug: "how-many-tiles-for-12x12-room", question: "How many tiles for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
    ],
  },

  // ─── 21. Deck screws per board ───────────────────────────────────────────
  {
    slug: "how-many-deck-screws-per-board",
    question: "How many deck screws per board?",
    metaTitle: "How Many Deck Screws Per Board? (2026 Guide)",
    metaDesc:
      "Use 2 deck screws per joist crossing per board. A 16-foot deck board crossing joists at 16\" spacing needs 26 screws. See counts by board length.",
    category: "Framing",
    directAnswer:
      "The standard is 2 deck screws per joist per board — one on each side of the center of the board. A 16-foot deck board on joists at 16-inch centers crosses 13 joists, needing 26 screws per board. For 5/4×6 composite boards, some manufacturers require 3 screws per joist to prevent cupping.",
    tableHeading: "Screws per board (16\" joist spacing)",
    tableLabel: "Board length",
    table: [
      { label: "8 ft board",   value: "14 screws" },
      { label: "10 ft board",  value: "16 screws" },
      { label: "12 ft board",  value: "20 screws" },
      { label: "16 ft board",  value: "26 screws" },
      { label: "20 ft board",  value: "32 screws" },
      { label: "24 ft board",  value: "38 screws" },
    ],
    howToSteps: [
      { text: "Count joist crossings per board: board length ÷ joist spacing + 1. For 16 ft at 16\" OC: (192 ÷ 16) + 1 = 13 joists." },
      { text: "Multiply by 2 screws per joist: 13 × 2 = 26 screws per board." },
      { text: "Count total boards in your deck, multiply to get total screws." },
      { text: "Add 10% extra for drops, damaged screws, and starting/ending boards." },
    ],
    proTip:
      "For a 200 sq ft deck with 16-ft boards on 16\" centers, you'll use roughly 5 lbs of #10 × 2-1/2\" screws. Buy a 5-lb box (about 500 screws) — it's cheaper per screw than smaller quantities and covers you for a few mistakes.",
    relatedCalc: { slug: "deck-calculator", name: "Deck Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-12x12-deck", question: "How many deck boards for a 12×12 deck?" },
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
    ],
  },

  // ─── 22. Paint for a front door ──────────────────────────────────────────
  {
    slug: "how-much-paint-for-a-front-door",
    question: "How much paint for a front door?",
    metaTitle: "How Much Paint for a Front Door? (Quarts vs Gallons)",
    metaDesc:
      "A standard front door needs one quart of paint for two coats — enough to cover both sides plus the frame. See what to buy for single vs double doors.",
    category: "Paint",
    directAnswer:
      "One quart of exterior paint is enough for a standard 36×80-inch front door — it covers both sides (about 40 sq ft per side = 80 sq ft total) with two coats. For a double door or if you're painting the frame and sidelights, buy a half-gallon. A gallon will last for multiple re-paints.",
    tableHeading: "Paint needed (2 coats)",
    tableLabel: "Door type",
    table: [
      { label: "Single door (36×80\")",  value: "1 quart" },
      { label: "Single + frame/trim",    value: "1 quart–½ gallon" },
      { label: "Double door",            value: "½–1 gallon" },
      { label: "Door + sidelights",      value: "1 gallon" },
      { label: "With primer coat",       value: "+1 quart primer" },
      { label: "Re-paint (no primer)",   value: "1 quart" },
    ],
    howToSteps: [
      { text: "Calculate door area: 36\" × 80\" = 2,880 sq in = 20 sq ft per face. Both sides = 40 sq ft." },
      { text: "Add frame and molding: roughly 10–15 sq ft extra." },
      { text: "Total: 50–55 sq ft. One quart covers 100 sq ft per coat — plenty for 2 coats." },
      { text: "If bare wood or drastic color change, prime first with a quart of exterior primer." },
    ],
    proTip:
      "Use a small foam roller for flat door panels and a brush only for the recessed details — it gives a smoother finish than brush-only. Apply in the shade on a day between 50–90°F. Exterior door paint dries tacky and can stick to the frame if you close it too soon — wait 2 hours minimum.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-a-bedroom", question: "How many gallons of paint for a bedroom?" },
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
    ],
  },

  // ─── 23. Quikrete per fence post ─────────────────────────────────────────
  {
    slug: "how-many-bags-of-quikrete-per-fence-post",
    question: "How many bags of Quikrete per fence post?",
    metaTitle: "How Many Bags of Quikrete Per Fence Post? (2026)",
    metaDesc:
      "Most fence posts need 1–2 bags of Quikrete 80lb fast-setting mix. A standard 4×4 post in a 10-inch hole at 24 inches deep uses about 1.5 bags.",
    category: "Concrete",
    directAnswer:
      "A standard 4×4 fence post in a 10-inch diameter hole at 24 inches deep needs approximately 1.5 bags of 80-lb Quikrete Fast-Setting Concrete. For a 6×6 post in a 12-inch hole at 36 inches deep, use 3 bags. Quikrete Fast-Setting can be poured dry into the hole — no mixing required.",
    tableHeading: "80-lb Quikrete bags per post",
    tableLabel: "Post size / hole",
    table: [
      { label: "4×4 post / 8\" dia / 20\" deep",  value: "1 bag" },
      { label: "4×4 post / 10\" dia / 24\" deep", value: "1.5 bags" },
      { label: "4×4 post / 10\" dia / 30\" deep", value: "2 bags" },
      { label: "6×6 post / 12\" dia / 36\" deep", value: "3 bags" },
      { label: "6×6 post / 14\" dia / 42\" deep", value: "4 bags" },
      { label: "4×4 gate post / 12\" × 36\"",     value: "3 bags" },
    ],
    howToSteps: [
      { text: "Dig hole to proper depth: one-third to one-half the post height above ground. For a 6-ft fence, dig 24–30 inches deep." },
      { text: "Add 3–4 inches of gravel at the bottom for drainage." },
      { text: "Set post, check plumb in both directions." },
      { text: "Pour dry Quikrete Fast-Setting mix around post. Add water per bag label (about 1 gallon per bag). Done — no mixing needed. Sets in 20–40 minutes." },
    ],
    proTip:
      "Gate posts take the most stress — always use 3+ bags and consider a 12-inch diameter hole. A sagging gate is almost always caused by an undersized or shallow post footing.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-a-fence-post", question: "How many bags of concrete for a fence post?" },
      { slug: "how-many-80lb-bags-of-concrete-in-a-yard", question: "How many 80lb bags of concrete in a yard?" },
    ],
  },

  // ─── 24. Paint for 10×10 room ────────────────────────────────────────────
  {
    slug: "how-many-gallons-of-paint-for-a-10x10-room",
    question: "How many gallons of paint for a 10×10 room?",
    metaTitle: "How Many Gallons of Paint for a 10×10 Room? (2026)",
    metaDesc:
      "A 10×10 room needs about 1–1.5 gallons of paint for two coats on the walls. With 8-foot ceilings, the net wall area is about 285 sq ft after deducting a door and window.",
    category: "Paint",
    directAnswer:
      "A 10×10 foot room with 8-foot ceilings needs approximately 1 gallon of paint per coat, or 1.5 gallons for two coats on the walls. After subtracting one door and one window, the net wall area is about 285–300 square feet. One gallon covers 350–400 sq ft, so 1.5 gallons covers two full coats with a little extra.",
    tableHeading: "Paint needed (2 coats)",
    tableLabel: "Room size",
    table: [
      { label: "8×8 ft",   value: "1 gallon" },
      { label: "10×10 ft", value: "1–1.5 gallons" },
      { label: "10×12 ft", value: "1.5 gallons" },
      { label: "12×12 ft", value: "1.5–2 gallons" },
      { label: "12×15 ft", value: "2 gallons" },
      { label: "Add ceiling", value: "+1 quart to +1 gallon" },
    ],
    howToSteps: [
      { text: "Wall area: (10+10+10+10) × 8 ft ceiling = 320 sq ft gross." },
      { text: "Subtract 1 door (21 sq ft) + 1 window (15 sq ft) = 36 sq ft. Net: 284 sq ft." },
      { text: "Per coat: 284 ÷ 375 (avg coverage) = 0.76 gallons." },
      { text: "Two coats: 0.76 × 2 = 1.52 gallons. Buy 2 gallons for safety." },
    ],
    proTip:
      "For a 10×10 room, the choice between 1 gallon and 2 gallons is often a coin flip. When in doubt, buy 2 — leftover paint in a sealed can stays good for 2–5 years for touch-ups. Going back to the store mid-project risks a slightly different tint from a new mix.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-a-bedroom", question: "How many gallons of paint for a bedroom?" },
    ],
  },

  // ─── 25. Mulch for 200 sq ft ─────────────────────────────────────────────
  {
    slug: "how-much-mulch-for-200-square-feet",
    question: "How much mulch for 200 square feet?",
    metaTitle: "How Much Mulch for 200 Square Feet? (2026 Answer)",
    metaDesc:
      "200 square feet of mulch at 3 inches deep needs 1.85 cubic yards — about 13 bags of 2-cubic-foot mulch. See amounts for 2-inch and 4-inch depths too.",
    category: "Landscaping",
    directAnswer:
      "For 200 square feet at the recommended 3-inch depth, you need 1.85 cubic yards of mulch — about 50 cubic feet. That's 25 bags of 2-cubic-foot mulch, or 17 bags of 3-cubic-foot bags. At this volume, bulk mulch delivery is more economical than bags.",
    tableHeading: "Mulch needed for 200 sq ft",
    tableLabel: "Depth",
    table: [
      { label: "2 inches",  value: "1.23 yd³ / 17 bags (2 cu ft)" },
      { label: "3 inches",  value: "1.85 yd³ / 25 bags" },
      { label: "4 inches",  value: "2.47 yd³ / 33 bags" },
      { label: "Bulk (3\")", value: "1.85 yd³ ≈ $50–90 delivered" },
      { label: "Bagged (3\")", value: "25 bags ≈ $100–150" },
    ],
    howToSteps: [
      { text: "Measure your area: 200 sq ft (e.g., a 10×20 ft bed or two 10×10 areas)." },
      { text: "Choose depth: 2\" for topdressing, 3\" for standard, 4\" for weed suppression." },
      { text: "Calculate: 200 × 3 ÷ 12 = 50 cubic feet. ÷ 27 = 1.85 cubic yards." },
      { text: "Convert to bags: 50 ÷ 2 = 25 bags of 2-cu-ft mulch. Round up." },
    ],
    proTip:
      "At 200 sq ft you're right at the break-even between bulk and bagged. If you have a pickup truck, a bulk yard of mulch ($30–50) is far cheaper than 25 bags ($100–150). One cubic yard fits in a standard pickup bed.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-much-gravel-for-200-foot-driveway", question: "How much gravel for a 200-foot driveway?" },
    ],
  },

  // ─── 26. Soil for 4×8 raised bed ─────────────────────────────────────────
  {
    slug: "how-much-soil-for-a-4x8-raised-bed",
    question: "How much soil for a 4×8 raised bed?",
    metaTitle: "How Much Soil for a 4×8 Raised Bed? (6\", 10\", 12\" deep)",
    metaDesc:
      "A 4×8 raised bed 12 inches deep needs 0.89 cubic yards of soil — about 24 cubic feet. See amounts for 6, 10, and 12-inch depths and the Mel's Mix recipe.",
    category: "Landscaping",
    directAnswer:
      "A standard 4×8 foot raised bed filled 12 inches deep needs 32 cubic feet of soil — about 1.19 cubic yards. At 10 inches deep: 0.99 yd³. At 6 inches: 0.59 yd³. Most gardeners use a mix of topsoil, compost, and coarse vermiculite (Mel's Mix) rather than straight topsoil for better drainage and root development.",
    tableHeading: "Soil needed for 4×8 raised bed",
    tableLabel: "Fill depth",
    table: [
      { label: "6 inches",  value: "16 cu ft / 0.59 yd³" },
      { label: "8 inches",  value: "21.3 cu ft / 0.79 yd³" },
      { label: "10 inches", value: "26.7 cu ft / 0.99 yd³" },
      { label: "12 inches", value: "32 cu ft / 1.19 yd³" },
      { label: "16 inches", value: "42.7 cu ft / 1.58 yd³" },
      { label: "Bags needed (1 cu ft bags, 12\")", value: "32 bags" },
    ],
    howToSteps: [
      { text: "Calculate volume: 4 ft × 8 ft × depth (ft). At 12\": 4 × 8 × 1 = 32 cubic feet." },
      { text: "Convert to cubic yards: 32 ÷ 27 = 1.19 yd³." },
      { text: "For Mel's Mix (recommended): ⅓ compost, ⅓ peat moss or coco coir, ⅓ coarse vermiculite." },
      { text: "At 12\" deep, buy 11 cubic feet each of compost, peat, and vermiculite. Or order 1.2 yards of pre-blended raised bed mix." },
    ],
    proTip:
      "Never fill a raised bed with straight topsoil — it compacts badly and drains poorly. Blended \"raised bed mix\" from garden centers costs more but plants perform dramatically better. Budget $60–120 for a 4×8×12 fill with quality blended mix.",
    relatedCalc: { slug: "topsoil-calculator", name: "Topsoil Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-200-square-feet", question: "How much mulch for 200 square feet?" },
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
    ],
  },

  // ─── 27. Concrete for 12×12 slab ─────────────────────────────────────────
  {
    slug: "how-many-bags-of-concrete-for-a-12x12-slab",
    question: "How many bags of concrete for a 12×12 slab?",
    metaTitle: "How Many Bags of Concrete for a 12×12 Slab? (2026)",
    metaDesc:
      "A 12×12 slab at 4 inches thick needs 1.78 cubic yards — about 80 bags of 80-lb concrete mix. At 6 inches thick: 119 bags. Order ready-mix instead.",
    category: "Concrete",
    directAnswer:
      "A 12×12 foot slab poured 4 inches thick requires 1.78 cubic yards of concrete — approximately 80 bags of 80-lb mix. At 6-inch thickness you need 2.67 cubic yards, or 120 bags. For any slab this size, ready-mix concrete is significantly cheaper and faster than bags.",
    tableHeading: "80-lb bags needed",
    tableLabel: "12×12 slab thickness",
    table: [
      { label: "3 inches",  value: "60 bags (1.33 yd³)" },
      { label: "4 inches",  value: "80 bags (1.78 yd³)" },
      { label: "5 inches",  value: "100 bags (2.22 yd³)" },
      { label: "6 inches",  value: "120 bags (2.67 yd³)" },
      { label: "Ready-mix (4\")", value: "1.78 yd³ ≈ $280–350" },
      { label: "Bags cost (4\")", value: "80 × $7 = $560+" },
    ],
    howToSteps: [
      { text: "Volume: 12 × 12 × (4/12) = 48 cubic feet." },
      { text: "Convert to yards: 48 ÷ 27 = 1.78 yd³." },
      { text: "Add 10% waste: 1.78 × 1.10 = 1.96 yd³. Round to 2 yards for ready-mix order." },
      { text: "If using bags: 1.96 ÷ 0.022 = 89 bags of 80-lb mix. Round up to 90." },
    ],
    proTip:
      "A 12×12 slab is 1.78 yards — right at the threshold where ready-mix makes financial and practical sense. One ready-mix truck minimum is usually 1 yard. Call a local batch plant: a 2-yard delivery ($300–400) will be cheaper than 90 bags ($630+) and take 2 hours less to pour.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
      { slug: "how-much-concrete-for-a-20x20-slab", question: "How much concrete for a 20×20 slab?" },
    ],
  },

  // ─── 28. Concrete for 20×20 slab ─────────────────────────────────────────
  {
    slug: "how-much-concrete-for-a-20x20-slab",
    question: "How much concrete for a 20×20 slab?",
    metaTitle: "How Much Concrete for a 20×20 Slab? (2026 Answer)",
    metaDesc:
      "A 20×20 concrete slab at 4 inches thick needs 4.94 cubic yards of concrete. At 6 inches: 7.41 yards. Always order ready-mix for a slab this size.",
    category: "Concrete",
    directAnswer:
      "A 20×20 foot slab at 4 inches thick requires 4.94 cubic yards of concrete. At 6 inches thick: 7.41 cubic yards. Always use ready-mix concrete for a 20×20 slab — you need at least 5 yards, which equals 225+ bags of 80-lb mix. Ready-mix will cost $750–1,000 vs $1,500+ in bags.",
    tableHeading: "Concrete needed",
    tableLabel: "20×20 slab thickness",
    table: [
      { label: "4 inches",   value: "4.94 yd³" },
      { label: "5 inches",   value: "6.17 yd³" },
      { label: "6 inches",   value: "7.41 yd³" },
      { label: "8 inches",   value: "9.88 yd³" },
      { label: "4\" + 10% waste", value: "5.43 yd³ → order 5.5 yd³" },
      { label: "6\" + 10% waste", value: "8.15 yd³ → order 8.5 yd³" },
    ],
    howToSteps: [
      { text: "Volume: 20 × 20 × (4/12) = 133 cubic feet." },
      { text: "Convert to yards: 133 ÷ 27 = 4.94 yd³." },
      { text: "Add 10% for waste and overpour: 4.94 × 1.10 = 5.43 yd³." },
      { text: "Order 5.5 yards from a ready-mix plant. Schedule pour for early morning — concrete is harder to work as it heats up." },
    ],
    proTip:
      "For a 20×20 slab, hire at least 3 people for the pour: one managing the chute, one screeding, one floating the edges. A 5-yard pour gives you roughly 45–60 minutes of working time in mild weather. Have everything staged and ready before the truck arrives.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-a-12x12-slab", question: "How many bags of concrete for a 12×12 slab?" },
      { slug: "how-much-rebar-for-10x10-slab", question: "How much rebar for a 10×10 slab?" },
    ],
  },

  // ─── 29. Shingles for 10×10 shed ─────────────────────────────────────────
  {
    slug: "how-many-bundles-of-shingles-for-a-10x10-shed",
    question: "How many bundles of shingles for a 10×10 shed?",
    metaTitle: "How Many Bundles of Shingles for a 10×10 Shed?",
    metaDesc:
      "A 10×10 shed with a simple gable roof typically needs 6–9 bundles of shingles depending on pitch. See counts for 3:12, 4:12, and 6:12 pitches.",
    category: "Roofing",
    directAnswer:
      "A 10×10 shed with a standard gable roof at 4:12 pitch has a roof area of about 105 sq ft (2 sides), plus waste — requiring about 4 bundles of shingles. At a steeper 6:12 pitch: 5 bundles. Add 1 bundle for ridge cap and starter strip. Total: 5–7 bundles for most 10×10 sheds.",
    tableHeading: "Bundles needed (10×10 shed)",
    tableLabel: "Roof pitch",
    table: [
      { label: "3:12 gable",  value: "4 bundles field + 1 starter = 5 total" },
      { label: "4:12 gable",  value: "4–5 bundles + 1 starter = 5–6 total" },
      { label: "6:12 gable",  value: "5–6 bundles + 1 starter = 6–7 total" },
      { label: "8:12 gable",  value: "6–7 bundles + 1 starter = 7–8 total" },
      { label: "Hip roof 4:12", value: "6–8 bundles total" },
    ],
    howToSteps: [
      { text: "Calculate one roof face: 10 ft wide × rake length. For 4:12 pitch, rake = √(5² + 10²) = 11.18 ft. One face = 10 × 11.18 = 111.8 sq ft." },
      { text: "Multiply by 2 faces (gable): 223.6 sq ft total." },
      { text: "Add 15% waste for a small roof (more cuts, more waste %): 223.6 × 1.15 = 257 sq ft." },
      { text: "Divide by 33 (sq ft per bundle): 257 ÷ 33 = 7.8 → buy 8 bundles plus 1 ridge/starter bundle." },
    ],
    proTip:
      "Small roofs like sheds have a higher waste percentage than large roofs because the ratio of edges to field area is higher. Budget 15% waste instead of 10% for any roof under 500 sq ft.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-many-bundles-of-shingles-for-a-12x16-shed", question: "How many bundles of shingles for a 12×16 shed?" },
    ],
  },

  // ─── 30. Shingles for 12×16 shed ─────────────────────────────────────────
  {
    slug: "how-many-bundles-of-shingles-for-a-12x16-shed",
    question: "How many bundles of shingles for a 12×16 shed?",
    metaTitle: "How Many Bundles of Shingles for a 12×16 Shed?",
    metaDesc:
      "A 12×16 shed with a 4:12 gable roof needs about 8–10 bundles of shingles including starter strip and ridge cap. See full breakdown by pitch.",
    category: "Roofing",
    directAnswer:
      "A 12×16 shed with a 4:12 gable roof needs approximately 8–10 bundles of shingles total, including field shingles, starter strip, and ridge cap. The roof area is about 275 sq ft (both sides), adding 15% waste brings it to 316 sq ft — about 9.5 bundles. Round up to 10.",
    tableHeading: "Bundles (12×16 shed)",
    tableLabel: "Roof pitch",
    table: [
      { label: "3:12 gable",   value: "7–8 bundles total" },
      { label: "4:12 gable",   value: "9–10 bundles total" },
      { label: "6:12 gable",   value: "10–12 bundles total" },
      { label: "8:12 gable",   value: "12–14 bundles total" },
    ],
    howToSteps: [
      { text: "One roof face at 4:12: rake = √(6² + 16²) = 17.09 ft. Area = 12 × 17.09 = 205 sq ft." },
      { text: "Wait — for a 12×16 shed the ridge runs 16 ft, each side is 12/2 = 6 ft wide. Rake = √(6² + 16²)? No: rake = √(run² + rise²) where run = 6 ft, rise = 6×(4/12) = 2 ft. Rake = √(36+4) = 6.32 ft. One face = 16 × 6.32 = 101 sq ft." },
      { text: "Two faces: 202 sq ft. Add 15% waste: 232 sq ft ÷ 33 = 7 bundles field shingles." },
      { text: "Add 1 bundle starter + 1 bundle ridge cap (16 lin ft ÷ 35 = under 1 bundle). Total: 9 bundles." },
    ],
    proTip:
      "Buying a 10-bundle minimum (a full pallet row) is often cheaper per bundle than buying individual bundles. Check with your lumber yard — at 10+ bundles you may qualify for a contractor discount.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-bundles-of-shingles-for-a-10x10-shed", question: "How many bundles of shingles for a 10×10 shed?" },
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
    ],
  },

  // ─── 31. Deck boards for 12×12 deck ──────────────────────────────────────
  {
    slug: "how-many-deck-boards-for-a-12x12-deck",
    question: "How many deck boards for a 12×12 deck?",
    metaTitle: "How Many Deck Boards for a 12×12 Deck? (2026)",
    metaDesc:
      "A 12×12 deck needs about 28 deck boards using standard 5/4×6 decking at 12 feet long with 1/8-inch gaps. See counts for different board widths and lengths.",
    category: "Framing",
    directAnswer:
      "A 12×12 foot deck using 5/4×6 deck boards (5.5 inch actual width) with 1/8-inch spacing gaps needs approximately 26–28 boards at 12 feet long. The effective coverage per board is 5.625 inches (5.5\" + 0.125\" gap). 144 inches ÷ 5.625 = 25.6 boards — buy 28 to account for waste and end cuts.",
    tableHeading: "Boards needed (12×12 deck)",
    tableLabel: "Board size",
    table: [
      { label: "5/4×6 at 12 ft",   value: "28 boards" },
      { label: "2×6 at 12 ft",     value: "28 boards" },
      { label: "5/4×4 at 12 ft",   value: "40 boards" },
      { label: "Composite 6\" at 12 ft", value: "28 boards" },
      { label: "Diagonal layout",  value: "+15% = 32 boards" },
    ],
    howToSteps: [
      { text: "Determine run direction: boards typically run the long direction. For a 12×12, either direction gives 12 ft boards with no waste." },
      { text: "Calculate board spacing: actual width + gap = 5.5 + 0.125 = 5.625 inches per board." },
      { text: "Number of boards: 144 inches (12 ft) ÷ 5.625 = 25.6 → round up to 26. Add 2 for waste = 28 boards." },
      { text: "Add 10% extra if boards need cutting or any are irregular. Buy 30 for a comfortable buffer." },
    ],
    proTip:
      "For a 12×12 deck, 12-foot boards run perfectly with no length waste — a major advantage. Avoid 16-foot boards (you'd cut 4 feet off every board). Check if your lumber yard stocks 12-foot 5/4×6 — some carry only 10 and 16 foot lengths.",
    relatedCalc: { slug: "deck-calculator", name: "Deck Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-16x20-deck", question: "How many deck boards for a 16×20 deck?" },
      { slug: "how-many-deck-screws-per-board", question: "How many deck screws per board?" },
    ],
  },

  // ─── 32. Deck boards for 16×20 deck ──────────────────────────────────────
  {
    slug: "how-many-deck-boards-for-a-16x20-deck",
    question: "How many deck boards for a 16×20 deck?",
    metaTitle: "How Many Deck Boards for a 16×20 Deck? (2026)",
    metaDesc:
      "A 16×20 deck needs about 44 boards using 5/4×6 decking at 16 feet long. See counts for different board sizes and layout patterns.",
    category: "Framing",
    directAnswer:
      "A 16×20 foot deck (320 sq ft) using 5/4×6 boards at 16 feet long needs approximately 44 boards running the 16-foot direction. With 5.625 inches effective width per board: 240 inches ÷ 5.625 = 42.7 boards. Add 5% waste = 45 boards. If running 20-foot boards: 35 boards with butt joints, or 37 with waste.",
    tableHeading: "Boards needed (16×20 deck)",
    tableLabel: "Board size / direction",
    table: [
      { label: "5/4×6 × 16 ft (run 16 ft)", value: "44–46 boards" },
      { label: "5/4×6 × 20 ft (run 20 ft)", value: "35–37 boards" },
      { label: "2×6 × 16 ft",               value: "44–46 boards" },
      { label: "Composite 6\" × 16 ft",      value: "44–46 boards" },
      { label: "Diagonal layout",            value: "+15% more boards" },
    ],
    howToSteps: [
      { text: "Choose board direction: typically the longer dimension. For 16×20, run boards the 20-ft direction using 20-ft boards (fewer seams) or the 16-ft direction using 16-ft boards (less expensive)." },
      { text: "Width to span (boards running 16 ft): 20 ft = 240 inches. 240 ÷ 5.625 = 42.7 boards." },
      { text: "Add 5% waste: 42.7 × 1.05 = 44.8 → buy 45 boards." },
      { text: "Total screws: 45 boards × ~28 screws each (16 ft board on 16\" OC joists) ≈ 1,260 screws. Buy a 5-lb box." },
    ],
    proTip:
      "On a 16×20 deck, consider running 2-piece boards with a butt joint over a doubled joist rather than splicing on a single joist. Doubled joists (3\" wide) give you room to land both board ends properly and prevent the raised-board look of poor splices.",
    relatedCalc: { slug: "deck-calculator", name: "Deck Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-12x12-deck", question: "How many deck boards for a 12×12 deck?" },
      { slug: "how-many-deck-screws-per-board", question: "How many deck screws per board?" },
    ],
  },

  // ─── 33. Fence pickets for 100 feet ──────────────────────────────────────
  {
    slug: "how-many-fence-pickets-for-100-feet",
    question: "How many fence pickets for 100 feet of fence?",
    metaTitle: "How Many Fence Pickets for 100 Feet of Fence? (2026)",
    metaDesc:
      "100 feet of privacy fence needs 200 pickets using standard 3.5-inch pickets with no gaps, or 150 pickets at 6-inch spacing. See counts by picket width.",
    category: "Framing",
    directAnswer:
      "For a privacy fence (no gaps) using standard 3.5-inch wide pickets, 100 linear feet requires approximately 343 pickets. For a standard 6-foot privacy fence with 5.5-inch wide (1×6) pickets touching: 218 pickets. For a picket fence with 3.5-inch pickets and 3.5-inch gaps: 171 pickets.",
    tableHeading: "Pickets for 100 linear feet",
    tableLabel: "Picket width / gap",
    table: [
      { label: "1×4 (3.5\") no gap",      value: "343 pickets" },
      { label: "1×6 (5.5\") no gap",      value: "218 pickets" },
      { label: "1×4 with 1.5\" gap",      value: "240 pickets" },
      { label: "1×4 with 3.5\" gap",      value: "171 pickets" },
      { label: "Dog-ear 5.5\" no gap",    value: "218 pickets" },
      { label: "Shadowbox (alternating)", value: "218 + 218 = 436 (both sides)" },
    ],
    howToSteps: [
      { text: "Convert total fence length to inches: 100 ft × 12 = 1,200 inches." },
      { text: "Add picket width + gap: for 1×6 (5.5\") touching: 5.5\" per picket." },
      { text: "Divide: 1,200 ÷ 5.5 = 218 pickets." },
      { text: "Add 5% waste for cuts at gates and corners: 218 × 1.05 = 229 → buy 230 pickets." },
    ],
    proTip:
      "Buy all pickets from one delivery if possible — wood grain, color, and moisture content vary between loads. Wet pickets will shrink as they dry, creating gaps; dry pickets installed in winter may cup in summer humidity. Acclimate boards to local conditions for a week before installation.",
    relatedCalc: { slug: "fence-calculator", name: "Fence Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-12x12-deck", question: "How many deck boards for a 12×12 deck?" },
      { slug: "how-many-bags-of-quikrete-per-fence-post", question: "How many bags of Quikrete per fence post?" },
    ],
  },

  // ─── 34. Shingles for 24×24 garage ───────────────────────────────────────
  {
    slug: "how-many-shingles-for-a-24x24-garage",
    question: "How many shingles for a 24×24 garage?",
    metaTitle: "How Many Shingles for a 24×24 Garage? (2026 Answer)",
    metaDesc:
      "A 24×24 garage with a 4:12 gable roof needs about 15–18 squares of shingles (45–54 bundles). See full breakdown by pitch including waste.",
    category: "Roofing",
    directAnswer:
      "A 24×24 foot garage with a standard 4:12 gable roof has a flat footprint of 576 sq ft. After applying the pitch multiplier (×1.054) and 10% waste, you need approximately 15.8 squares — buy 16 squares (48 bundles). Add 1 bundle for ridge cap (24 ft ridge). Total: about 49 bundles.",
    tableHeading: "Squares / bundles (24×24 garage)",
    tableLabel: "Roof pitch",
    table: [
      { label: "3:12",  value: "13.6 sq / 41 bundles" },
      { label: "4:12",  value: "15.8 sq / 48 bundles" },
      { label: "6:12",  value: "17.8 sq / 54 bundles" },
      { label: "8:12",  value: "19.6 sq / 59 bundles" },
      { label: "12:12", value: "25.7 sq / 78 bundles" },
    ],
    howToSteps: [
      { text: "Flat footprint: 24 × 24 = 576 sq ft." },
      { text: "Apply pitch multiplier for 4:12: 576 × 1.054 = 607 sq ft actual roof area." },
      { text: "Add 10% waste: 607 × 1.10 = 668 sq ft." },
      { text: "Divide by 100 for squares: 6.68 squares per side × 2 sides = wait, that's for a shed. Full garage: 668 ÷ 100 = 6.68 squares (one slope). Total gable = 13.4 + 10% = 15.8 squares. Buy 16 squares = 48 bundles." },
    ],
    proTip:
      "For a 24×24 garage, you're likely buying a full pallet (80 bundles = ~26 squares). Check if your supplier offers a pallet discount — it's often 5–10% off and you'll have extras for future repairs and ridge/starter.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-much-does-a-square-of-shingles-cover", question: "How much does a square of shingles cover?" },
    ],
  },

  // ─── 35. Studs for 12×12 room ────────────────────────────────────────────
  {
    slug: "how-many-studs-for-a-12x12-room",
    question: "How many studs do I need for a 12×12 room?",
    metaTitle: "How Many Studs for a 12×12 Room? (2026 Answer)",
    metaDesc:
      "Framing a 12×12 room requires about 52 studs at 16-inch centers (for all 4 walls) plus 12 plates. See the full breakdown including corners and openings.",
    category: "Framing",
    directAnswer:
      "Framing all four walls of a 12×12 room at 16-inch centers requires approximately 52 studs plus 12 plates (3 plates per wall × 4 walls). Each 12-foot wall needs 11 studs; four walls = 44 studs, plus extras for corners (2 per corner × 4 corners = 8). Add more for door and window framing.",
    tableHeading: "Studs per wall (16\" OC)",
    tableLabel: "Wall length",
    table: [
      { label: "12 ft wall (studs)",    value: "11 studs" },
      { label: "12×12 room (4 walls)",  value: "~52 studs total" },
      { label: "Plates (3 per wall)",   value: "12 × 12 ft = 144 lin ft" },
      { label: "Add per door opening",  value: "+5 studs" },
      { label: "Add per window",        value: "+4 studs" },
      { label: "Add corner framing",    value: "+8 studs (2 per corner)" },
    ],
    howToSteps: [
      { text: "Each 12-ft wall at 16\" OC: (144 ÷ 16) + 1 = 10 spaces + 1 = 11 studs per wall." },
      { text: "Four walls: 11 × 4 = 44 studs (ignoring corners)." },
      { text: "Corner framing: 2 extra studs per corner × 4 corners = 8 studs." },
      { text: "Total basic: 52 studs + 12 plate lengths (3 per wall × 4 walls). Add 5 studs per door, 4 per window." },
    ],
    proTip:
      "Order 10% extra for waste and damaged boards — studs with checks, twists, or crowns need to be culled. For a 12×12 room addition, a standard unit (bundle) at most yards is 50–60 studs, which covers the room perfectly.",
    relatedCalc: { slug: "stud-calculator", name: "Stud / Framing Calculator" },
    relatedFaqs: [
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
      { slug: "how-many-sheets-of-drywall-for-12x12-room", question: "How many sheets of drywall for a 12×12 room?" },
    ],
  },

  // ─── 36. Studs for 20-foot wall ──────────────────────────────────────────
  {
    slug: "how-many-studs-for-a-20-foot-wall",
    question: "How many studs for a 20-foot wall?",
    metaTitle: "How Many Studs for a 20-Foot Wall? (16\" and 24\" OC)",
    metaDesc:
      "A 20-foot wall at 16-inch centers needs 16 studs plus 3 plates. At 24-inch centers: 11 studs. Add extras for any door or window openings.",
    category: "Framing",
    directAnswer:
      "A 20-foot wall framed at 16-inch centers needs 16 studs plus 3 plates (bottom plate, top plate, double top plate). At 24-inch centers, the same wall needs 11 studs. These counts don't include extra studs for door or window openings — add 5 studs per door and 4 per window.",
    tableHeading: "Studs + plates for 20-foot wall",
    tableLabel: "Spacing",
    table: [
      { label: "16\" OC",    value: "16 studs + 3 plates" },
      { label: "24\" OC",    value: "11 studs + 3 plates" },
      { label: "12\" OC",    value: "21 studs + 3 plates" },
      { label: "Add door",   value: "+5 studs" },
      { label: "Add window", value: "+4 studs" },
    ],
    howToSteps: [
      { text: "Divide wall length by spacing: 20 ft = 240 inches. 240 ÷ 16 = 15 spaces." },
      { text: "Add 1 end stud: 15 + 1 = 16 studs." },
      { text: "Add 3 plates (bottom + top + double top plate): each 20 ft long." },
      { text: "Add opening studs: per door — 2 king studs + 2 jack studs + cripples ≈ 5 extra. Per window — 4 extra studs." },
    ],
    proTip:
      "The quick formula: (wall length in feet × 0.75) + 1 = studs at 16\" OC. For 20 ft: (20 × 0.75) + 1 = 16 studs. Add 10% for waste and always buy in multiples of a unit if your yard bundles them.",
    relatedCalc: { slug: "stud-calculator", name: "Stud / Framing Calculator" },
    relatedFaqs: [
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
      { slug: "how-many-studs-for-a-24-foot-wall", question: "How many studs for a 24-foot wall?" },
    ],
  },

  // ─── 37. Studs for 24-foot wall ──────────────────────────────────────────
  {
    slug: "how-many-studs-for-a-24-foot-wall",
    question: "How many studs for a 24-foot wall?",
    metaTitle: "How Many Studs for a 24-Foot Wall? (16\" and 24\" OC)",
    metaDesc:
      "A 24-foot wall at 16-inch centers needs 19 studs plus 3 plates. At 24-inch centers: 13 studs. See the quick formula and add-ons for openings.",
    category: "Framing",
    directAnswer:
      "A 24-foot wall at 16-inch on-center spacing needs 19 studs plus 3 plates (72 linear feet of plate stock). At 24-inch spacing: 13 studs. A 24-foot wall is a common garage wall dimension — plan for a 9-foot garage door opening, which requires 2 king studs, 2 jack studs, a LVL header, and multiple cripple studs above.",
    tableHeading: "Studs for 24-foot wall",
    tableLabel: "Spacing",
    table: [
      { label: "16\" OC",         value: "19 studs + 3 plates" },
      { label: "24\" OC",         value: "13 studs + 3 plates" },
      { label: "Add 9-ft garage door", value: "+6 studs + header" },
      { label: "Add standard door",    value: "+5 studs" },
      { label: "Add window",           value: "+4 studs" },
    ],
    howToSteps: [
      { text: "Divide by spacing: 24 ft = 288 inches. 288 ÷ 16 = 18 spaces + 1 end = 19 studs." },
      { text: "Plates: 3 plates × 24 ft = 72 linear feet. Buy 12 × 8-ft 2×4s or 8 × 10-ft boards." },
      { text: "For a garage door: rough opening is 9 ft wide × 7 ft tall. Add double king studs, jack studs, and a point-loaded LVL header. Consult an engineer for header sizing." },
      { text: "Total studs including garage door: 19 + 6 = 25 studs plus header material." },
    ],
    proTip:
      "A 24-foot garage wall with a 9-foot door leaves 15 feet of framed wall. That 15-foot section needs a properly sized header — typically a 4×10 or LVL beam to carry roof loads. Don't size the header by guessing — use a span table or have an engineer specify it.",
    relatedCalc: { slug: "stud-calculator", name: "Stud / Framing Calculator" },
    relatedFaqs: [
      { slug: "how-many-studs-for-a-20-foot-wall", question: "How many studs for a 20-foot wall?" },
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
    ],
  },

  // ─── 38. Caulk for a bathtub ─────────────────────────────────────────────
  {
    slug: "how-much-caulk-for-a-bathtub",
    question: "How much caulk for a bathtub?",
    metaTitle: "How Much Caulk for a Bathtub? (Tubes Needed)",
    metaDesc:
      "One tube of caulk (10.1 oz) is enough for a standard bathtub — it covers about 30–40 linear feet at 1/4-inch bead width. See what to buy for tub surrounds.",
    category: "Masonry",
    directAnswer:
      "One standard 10.1-oz tube of caulk is sufficient for a complete bathtub caulking job. A standard tub has about 12–16 linear feet of seams (the perimeter where tub meets tile or wall). One tube covers 30–40 linear feet at a 1/4-inch bead, so one tube handles the job with material to spare. Buy 2 tubes for a full tub surround with tile.",
    tableHeading: "Caulk tubes needed",
    tableLabel: "Project",
    table: [
      { label: "Bathtub perimeter only",  value: "1 tube (10.1 oz)" },
      { label: "Tub + 3-wall surround",   value: "2 tubes" },
      { label: "Walk-in shower (60\"×36\")", value: "2–3 tubes" },
      { label: "Large walk-in (60\"×48\")", value: "3 tubes" },
      { label: "Tile joints (per 50 sq ft)", value: "1 tube grout caulk" },
    ],
    howToSteps: [
      { text: "Remove all old caulk with a plastic scraper or oscillating tool. Clean surfaces with rubbing alcohol." },
      { text: "Fill tub with water before caulking — the weight expands the tub slightly. Caulk with water in it creates a joint that won't crack when the tub fills." },
      { text: "Cut caulk tube tip at 45°, 1/4\" from end. Apply steady bead along all seams." },
      { text: "Smooth with a wet finger or caulk tool. Remove excess immediately. Allow to cure 24 hours before water contact." },
    ],
    proTip:
      "Use 100% silicone caulk for tub and shower joints — it's fully waterproof and mold-resistant. Avoid latex or acrylic caulk in wet areas. For colored grout joints at tile corners, use sanded caulk in a matching color instead of grout — caulk flexes without cracking.",
    relatedCalc: { slug: "tile-calculator", name: "Tile Calculator" },
    relatedFaqs: [
      { slug: "how-many-tiles-for-12x12-room", question: "How many tiles for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-a-bedroom", question: "How many gallons of paint for a bedroom?" },
    ],
  },

  // ─── 39. Drywall for 2000 sq ft house ────────────────────────────────────
  {
    slug: "how-much-drywall-for-a-2000-sq-ft-house",
    question: "How much drywall for a 2,000 sq ft house?",
    metaTitle: "How Much Drywall for a 2,000 Sq Ft House? (2026)",
    metaDesc:
      "A 2,000 sq ft house typically needs 8,000–8,500 sq ft of drywall (250–265 sheets of 4×8). See the breakdown for walls, ceilings, and waste.",
    category: "Framing",
    directAnswer:
      "A 2,000 square foot single-story house typically requires 8,000–8,500 square feet of drywall — about 250–265 sheets of 4×8 (32 sq ft each). This covers all interior walls and ceilings. The ceiling alone is 2,000 sq ft; walls in a typical floor plan add another 5,500–6,500 sq ft of surface area.",
    tableHeading: "Drywall for full house",
    tableLabel: "House size",
    table: [
      { label: "1,000 sq ft",   value: "~130 sheets (4×8)" },
      { label: "1,500 sq ft",   value: "~190 sheets" },
      { label: "2,000 sq ft",   value: "~250–265 sheets" },
      { label: "2,500 sq ft",   value: "~310–330 sheets" },
      { label: "3,000 sq ft",   value: "~370–400 sheets" },
    ],
    howToSteps: [
      { text: "Ceiling: equals floor area = 2,000 sq ft." },
      { text: "Walls: estimate total wall linear footage × ceiling height. Average 2,000 sq ft house has ~600 lin ft of walls × 9 ft = 5,400 sq ft gross walls." },
      { text: "Subtract openings (doors and windows): typical house has 15 doors (315 sq ft) + 20 windows (300 sq ft) = 615 sq ft. Net walls: ~4,785 sq ft." },
      { text: "Total: 2,000 (ceiling) + 4,785 (walls) = 6,785 sq ft. Add 15% waste = 7,803 sq ft ÷ 32 = 244 sheets. Buy 250." },
    ],
    proTip:
      "For a whole-house drywall job, use 4×12 sheets on ceilings to minimize seams — fewer butt joints means less taping and a flatter finish. The extra cost per sheet is offset by labor savings in finishing.",
    relatedCalc: { slug: "drywall-calculator", name: "Drywall Calculator" },
    relatedFaqs: [
      { slug: "how-many-sheets-of-drywall-for-12x12-room", question: "How many sheets of drywall for a 12×12 room?" },
      { slug: "how-many-studs-for-a-20-foot-wall", question: "How many studs for a 20-foot wall?" },
    ],
  },

  // ─── 40. Paint for 12×15 room ────────────────────────────────────────────
  {
    slug: "how-much-paint-for-a-12x15-room",
    question: "How much paint do I need for a 12×15 room?",
    metaTitle: "How Much Paint for a 12×15 Room? (2026 Answer)",
    metaDesc:
      "A 12×15 room with 8-foot ceilings needs about 2 gallons of paint for two coats on the walls. With a door and two windows, the net wall area is about 372 sq ft.",
    category: "Paint",
    directAnswer:
      "A 12×15 foot room with 8-foot ceilings needs approximately 2 gallons of paint for two coats on all four walls. The gross wall area is (12+15+12+15) × 8 = 432 sq ft. After subtracting one door and two windows (about 51 sq ft), you have 381 sq ft net — requiring 2.2 gallons for two coats.",
    tableHeading: "Paint for 12×15 room",
    tableLabel: "Coats / area",
    table: [
      { label: "Walls only (1 coat)",   value: "1 gallon" },
      { label: "Walls only (2 coats)",  value: "2 gallons" },
      { label: "Walls + ceiling (2 coats)", value: "3 gallons" },
      { label: "With primer coat",      value: "+1 gallon primer" },
      { label: "Trim and doors",        value: "+1 quart" },
    ],
    howToSteps: [
      { text: "Perimeter: (12+15+12+15) = 54 ft. × 8 ft ceiling = 432 sq ft gross." },
      { text: "Subtract 1 door (21 sq ft) + 2 windows (30 sq ft) = 51 sq ft. Net: 381 sq ft." },
      { text: "Per coat: 381 ÷ 375 = 1.02 gallons. Two coats = 2.04 gallons." },
      { text: "Ceiling: 12 × 15 = 180 sq ft ÷ 375 = 0.48 gallons per coat. Two coats ceiling = ~1 gallon." },
    ],
    proTip:
      "For a 12×15 room, buy 2 gallons of wall color. If painting the ceiling a different color, buy 1 additional gallon of ceiling white. That's your complete kit for the room.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-a-bedroom", question: "How many gallons of paint for a bedroom?" },
    ],
  },

  // ─── 41. Rebar for a driveway ─────────────────────────────────────────────
  {
    slug: "how-much-rebar-for-a-driveway",
    question: "How much rebar do I need for a driveway?",
    metaTitle: "How Much Rebar for a Concrete Driveway? (2026)",
    metaDesc:
      "A 10×20 ft driveway with #4 rebar on 18-inch centers needs about 330 linear feet of rebar. Most residential driveways use #3 or #4 rebar at 18\" OC.",
    category: "Concrete",
    directAnswer:
      "A standard residential driveway uses #3 or #4 rebar on 18-inch centers. For a 10×20 foot driveway: 8 bars each direction × 20 ft = 160 ft + 13 bars × 10 ft = 130 ft = 290 linear feet total. Many driveways use wire mesh (6×6 W1.4) instead of rebar for sections under 5 inches thick.",
    tableHeading: "Rebar for concrete driveway (18\" OC, #4)",
    tableLabel: "Driveway size",
    table: [
      { label: "10×20 ft",  value: "290 lin ft" },
      { label: "10×30 ft",  value: "420 lin ft" },
      { label: "12×20 ft",  value: "340 lin ft" },
      { label: "12×30 ft",  value: "490 lin ft" },
      { label: "16×40 ft",  value: "820 lin ft" },
      { label: "20×40 ft",  value: "1,020 lin ft" },
    ],
    howToSteps: [
      { text: "Decide: rebar or wire mesh? Residential driveways under 4 inches thick typically use 6×6 wire mesh. Driveways 5+ inches thick or heavy vehicle use: #4 rebar." },
      { text: "Bars per direction at 18\" OC: driveway width ÷ 1.5 + 1. For 10 ft: 10 ÷ 1.5 + 1 = 7.7 → 8 bars." },
      { text: "Each bar runs the opposite dimension. 8 bars × 20 ft = 160 ft. Then 14 bars × 10 ft = 140 ft. Total: 300 lin ft." },
      { text: "Add 10% for lap splices: 300 × 1.10 = 330 lin ft." },
    ],
    proTip:
      "Wire mesh (6×6-W1.4 welded wire fabric) is cheaper and faster than rebar for residential driveways. At $0.20/sq ft vs $0.60+ for rebar, a 200 sq ft driveway saves $80 in materials. Rebar is worth the cost for driveways that will see trucks or heavy equipment.",
    relatedCalc: { slug: "rebar-calculator", name: "Rebar Calculator" },
    relatedFaqs: [
      { slug: "how-much-rebar-for-10x10-slab", question: "How much rebar for a 10×10 slab?" },
      { slug: "how-much-concrete-for-a-20x20-slab", question: "How much concrete for a 20×20 slab?" },
    ],
  },

  // ─── 42. Sand for 10×10 patio ─────────────────────────────────────────────
  {
    slug: "how-much-sand-for-a-10x10-patio",
    question: "How much sand for a 10×10 patio?",
    metaTitle: "How Much Sand for a 10×10 Patio? (Bedding & Base)",
    metaDesc:
      "A 10×10 paver patio needs about 0.31 cubic yards of bedding sand (1 inch deep) — roughly 9 bags of 50-lb sand. See amounts for different patio sizes.",
    category: "Landscaping",
    directAnswer:
      "A 10×10 foot patio needs approximately 0.31 cubic yards of coarse bedding sand for the 1-inch setting layer (the standard depth under pavers). That's 8.3 cubic feet — about nine 50-pound bags of coarse sand. For a larger 4–6 inch compacted gravel base, you'll need an additional 1.2–1.9 cubic yards of gravel.",
    tableHeading: "Bedding sand (1\" layer)",
    tableLabel: "Patio size",
    table: [
      { label: "10×10 ft",  value: "0.31 yd³ / 9 bags (50 lb)" },
      { label: "10×20 ft",  value: "0.62 yd³ / 17 bags" },
      { label: "12×20 ft",  value: "0.74 yd³ / 20 bags" },
      { label: "16×20 ft",  value: "0.99 yd³ / 27 bags" },
      { label: "20×20 ft",  value: "1.23 yd³ / 33 bags" },
    ],
    howToSteps: [
      { text: "Bedding sand volume: 10 × 10 × (1/12) = 8.33 cubic feet ÷ 27 = 0.31 cubic yards." },
      { text: "A 50-lb bag of sand = ~0.5 cubic feet. So 8.33 ÷ 0.5 = 16.7 bags. But actual bag coverage varies — buy 9–10 bags for a 10×10 (bags are heavier than expected)." },
      { text: "Also calculate gravel base: 10 × 10 × (4/12) = 33.3 cu ft ÷ 27 = 1.23 yd³ for a 4-inch base." },
      { text: "Total materials: 9 bags bedding sand + 1.2–1.9 yd³ compacted gravel base." },
    ],
    proTip:
      "Use coarse concrete sand (not play sand or mason sand) for paver bedding. Fine sand migrates under load. Polymeric sand swept into joints after installation locks pavers in place and resists weeds — budget 1–2 bags of poly-sand for a 10×10 patio.",
    relatedCalc: { slug: "paver-calculator", name: "Paver Calculator" },
    relatedFaqs: [
      { slug: "how-many-pavers-for-10x10-patio", question: "How many pavers for a 10×10 patio?" },
      { slug: "how-much-gravel-for-200-foot-driveway", question: "How much gravel for a 200-foot driveway?" },
    ],
  },

  // ─── 43. Bundles for 1000 sq ft ──────────────────────────────────────────
  {
    slug: "how-many-bundles-of-shingles-for-1000-sq-ft",
    question: "How many bundles of shingles for 1,000 sq ft?",
    metaTitle: "How Many Bundles of Shingles for 1,000 Sq Ft? (2026)",
    metaDesc:
      "A 1,000 sq ft flat footprint with 4:12 pitch needs about 35 bundles of shingles including 10% waste. See counts by pitch and how to add ridge cap.",
    category: "Roofing",
    directAnswer:
      "A house with 1,000 square feet of flat footprint and a 4:12 pitch has an actual roof area of 1,054 sq ft. Adding 10% waste = 1,159 sq ft ÷ 100 = 11.6 squares × 3 bundles = 35 bundles. For a steeper 6:12 pitch: 38 bundles. Always verify by measuring the actual roof, not the floor plan.",
    tableHeading: "Bundles for 1,000 sq ft footprint",
    tableLabel: "Pitch",
    table: [
      { label: "Flat / low slope", value: "33 bundles" },
      { label: "3:12",             value: "34 bundles" },
      { label: "4:12",             value: "35 bundles" },
      { label: "6:12",             value: "38 bundles" },
      { label: "8:12",             value: "40 bundles" },
      { label: "12:12",            value: "47 bundles" },
    ],
    howToSteps: [
      { text: "Start with flat footprint: 1,000 sq ft." },
      { text: "Apply pitch multiplier (4:12 = ×1.054): 1,054 sq ft actual area." },
      { text: "Add 10% waste: 1,054 × 1.10 = 1,159 sq ft." },
      { text: "Divide by 33 (sq ft per bundle): 1,159 ÷ 33 = 35.1 → buy 36 bundles." },
    ],
    proTip:
      "Don't forget ridge cap and starter strips — these are sold separately. Measure your ridge length and divide by 35 (linear feet per bundle of ridge cap). A simple gable on a 1,000 sq ft house has about a 32-foot ridge, needing 1 bundle of ridge cap.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-much-does-a-square-of-shingles-cover", question: "How much does a square of shingles cover?" },
    ],
  },

  // ─── 44. Pea gravel for 10×10 ────────────────────────────────────────────
  {
    slug: "how-much-pea-gravel-for-a-10x10-area",
    question: "How much pea gravel for a 10×10 area?",
    metaTitle: "How Much Pea Gravel for a 10×10 Area? (2026 Answer)",
    metaDesc:
      "A 10×10 area filled 2 inches deep needs 0.62 cubic yards of pea gravel — about 1 ton, or 50 bags of 50-lb pea gravel. See amounts for different depths.",
    category: "Landscaping",
    directAnswer:
      "A 10×10 foot area covered with 2 inches of pea gravel needs 0.62 cubic yards — roughly 0.84 tons (1,680 lbs). That's about 34 bags of 50-lb pea gravel. For a deeper 3-inch layer: 0.93 cubic yards. For a playground or path, 2–3 inches is standard; for drainage, 4–6 inches.",
    tableHeading: "Pea gravel for 10×10 area",
    tableLabel: "Depth",
    table: [
      { label: "1 inch",  value: "0.31 yd³ / 0.42 tons / 17 bags" },
      { label: "2 inches", value: "0.62 yd³ / 0.84 tons / 34 bags" },
      { label: "3 inches", value: "0.93 yd³ / 1.26 tons / 50 bags" },
      { label: "4 inches", value: "1.23 yd³ / 1.67 tons / 67 bags" },
      { label: "6 inches", value: "1.85 yd³ / 2.50 tons / 100 bags" },
    ],
    howToSteps: [
      { text: "Volume: 10 × 10 × (2/12) = 16.67 cu ft ÷ 27 = 0.62 yd³." },
      { text: "Weight: pea gravel is ~1.35 tons/yd³. 0.62 × 1.35 = 0.84 tons = 1,680 lbs." },
      { text: "Bags: 1,680 ÷ 50 (lb per bag) = 33.6 → buy 34 bags." },
      { text: "For bulk delivery: 0.62 yd³ is below most delivery minimums (usually 1 yard). Buy bags or order 1 yard and use leftovers." },
    ],
    proTip:
      "Pea gravel doesn't compact and migrates easily — it's better for decorative beds and playgrounds than for paths or driveways. For paths, use angular crushed stone (3/8\" or 3/4\") which interlocks and stays in place under foot traffic.",
    relatedCalc: { slug: "gravel-calculator", name: "Gravel Calculator" },
    relatedFaqs: [
      { slug: "how-much-gravel-for-200-foot-driveway", question: "How much gravel for a 200-foot driveway?" },
      { slug: "how-much-sand-for-a-10x10-patio", question: "How much sand for a 10×10 patio?" },
    ],
  },

  // ─── 45. Bricks for 10×10 patio ──────────────────────────────────────────
  {
    slug: "how-many-bricks-for-a-10x10-patio",
    question: "How many bricks for a 10×10 patio?",
    metaTitle: "How Many Bricks for a 10×10 Patio? (2026 Answer)",
    metaDesc:
      "A 10×10 patio using standard 4×8 bricks needs about 450 bricks. For larger 4×8×2-1/4\" pavers laid flat: the same 450 count. Add 10% waste.",
    category: "Masonry",
    directAnswer:
      "A 10×10 foot patio (100 sq ft) using standard 4×8 inch bricks laid flat needs approximately 450 bricks, plus 10% waste = 495 bricks. Each brick covers (4×8) = 32 sq in = 0.222 sq ft, so 100 ÷ 0.222 = 450 bricks. For a running bond pattern, add 15% waste (518 bricks).",
    tableHeading: "Bricks for 10×10 patio (100 sq ft)",
    tableLabel: "Brick size / pattern",
    table: [
      { label: "4×8\" straight lay",     value: "450 bricks + 10% = 495" },
      { label: "4×8\" running bond",     value: "450 + 15% = 518" },
      { label: "4×8\" herringbone",      value: "450 + 15% = 518" },
      { label: "3×9\" Norman brick",     value: "533 bricks + 10%" },
      { label: "8×8\" square paver",     value: "225 bricks + 10%" },
    ],
    howToSteps: [
      { text: "Calculate patio area: 10 × 10 = 100 sq ft." },
      { text: "Brick coverage: width (in) × length (in) ÷ 144. For 4×8: 32 ÷ 144 = 0.222 sq ft/brick." },
      { text: "Bricks needed: 100 ÷ 0.222 = 450 bricks." },
      { text: "Add waste: straight = 10%, running bond or herringbone = 15%. 450 × 1.15 = 518. Round up to nearest pallet (typically 500 bricks)." },
    ],
    proTip:
      "Bricks are usually sold on pallets of 500–520 pieces. For a 10×10 patio needing 495–520 bricks, one pallet is perfect — ask your supplier how many are on a pallet before ordering. Buying by the pallet is almost always cheaper per brick.",
    relatedCalc: { slug: "brick-calculator", name: "Brick Calculator" },
    relatedFaqs: [
      { slug: "how-many-bricks-per-square-foot", question: "How many bricks per square foot?" },
      { slug: "how-many-pavers-for-10x10-patio", question: "How many pavers for a 10×10 patio?" },
    ],
  },

  // ─── 46. Bags of mulch for 10 yards ──────────────────────────────────────
  {
    slug: "how-many-bags-of-mulch-for-10-yards",
    question: "How many bags of mulch for 10 yards?",
    metaTitle: "How Many Bags of Mulch Equal 10 Cubic Yards?",
    metaDesc:
      "10 cubic yards of mulch equals 270 cubic feet — requiring 135 bags of 2-cubic-foot mulch or 90 bags of 3-cubic-foot bags. Order bulk delivery instead.",
    category: "Landscaping",
    directAnswer:
      "10 cubic yards of mulch equals 270 cubic feet. To get 10 yards from bags: you need 135 bags of 2-cubic-foot mulch, or 90 bags of 3-cubic-foot bags. At $5–7 per bag, that's $675–945 just in bags. A bulk delivery of 10 yards costs $250–450 — order bulk for anything over 2–3 yards.",
    tableHeading: "Bags needed per cubic yard",
    tableLabel: "Bag size",
    table: [
      { label: "1 cu ft bag",   value: "27 bags/yd³ × 10 = 270 bags" },
      { label: "1.5 cu ft bag", value: "18 bags/yd³ × 10 = 180 bags" },
      { label: "2 cu ft bag",   value: "13.5 bags/yd³ × 10 = 135 bags" },
      { label: "3 cu ft bag",   value: "9 bags/yd³ × 10 = 90 bags" },
      { label: "Bulk cost",     value: "$250–450 delivered vs $675–945 in bags" },
    ],
    howToSteps: [
      { text: "1 cubic yard = 27 cubic feet." },
      { text: "2-cu-ft bags per yard: 27 ÷ 2 = 13.5 bags. For 10 yards: 135 bags." },
      { text: "3-cu-ft bags per yard: 27 ÷ 3 = 9 bags. For 10 yards: 90 bags." },
      { text: "Bulk is almost always the answer at 10 yards. Call local landscaping suppliers for delivery rates — many deliver 5–15 yards for $50–100 delivery fee." },
    ],
    proTip:
      "At 10 cubic yards, bagged mulch costs 2–3× more than bulk AND requires hours of loading, unloading, and cutting bags. Order bulk mulch, have it dumped in your driveway, and use a wheelbarrow. 10 yards takes about 3–5 hours to spread for one person.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-much-mulch-for-200-square-feet", question: "How much mulch for 200 square feet?" },
    ],
  },

  // ─── 47. Quikrete for 10×10 slab ─────────────────────────────────────────
  {
    slug: "how-many-bags-of-quikrete-for-a-10x10-slab",
    question: "How many bags of Quikrete for a 10×10 slab?",
    metaTitle: "How Many Bags of Quikrete for a 10×10 Slab? (2026)",
    metaDesc:
      "A 10×10 slab at 4 inches thick needs about 56 bags of 80-lb Quikrete — but ready-mix is cheaper. See bag counts for 4\" and 6\" thickness.",
    category: "Concrete",
    directAnswer:
      "A 10×10 foot slab poured 4 inches thick requires 1.23 cubic yards — approximately 56 bags of 80-lb Quikrete concrete mix (each yields 0.022 yd³). At 6-inch thickness: 84 bags. For any slab this size, a ready-mix truck is significantly cheaper ($175–220 delivered vs $390–500 in Quikrete bags).",
    tableHeading: "80-lb Quikrete bags needed",
    tableLabel: "10×10 slab depth",
    table: [
      { label: "3 inches", value: "42 bags (0.93 yd³)" },
      { label: "4 inches", value: "56 bags (1.23 yd³)" },
      { label: "5 inches", value: "69 bags (1.54 yd³)" },
      { label: "6 inches", value: "84 bags (1.85 yd³)" },
    ],
    howToSteps: [
      { text: "Volume: 10 × 10 × (4/12) = 33.3 cu ft ÷ 27 = 1.23 yd³." },
      { text: "Add 10% waste: 1.23 × 1.10 = 1.35 yd³." },
      { text: "Bags: 1.35 ÷ 0.022 (yd³ per 80-lb bag) = 61 bags. Round up to 62." },
      { text: "Compare: 62 bags × $7.50 = $465 in bags. Ready-mix: ~$200 delivered. Save $265 and several hours of mixing." },
    ],
    proTip:
      "If you do use bags, rent a electric concrete mixer ($40/day) instead of mixing by hand. Hand-mixing 56 bags is exhausting and produces inconsistent results. A mixer handles 2 bags at once and keeps concrete workable throughout the pour.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-10x10-slab", question: "How many bags of concrete for a 10×10 slab?" },
      { slug: "how-many-80lb-bags-of-concrete-in-a-yard", question: "How many 80lb bags of concrete in a yard?" },
    ],
  },

  // ─── 48. How much does a yard of concrete weigh ──────────────────────────
  {
    slug: "how-much-does-a-yard-of-concrete-weigh",
    question: "How much does a yard of concrete weigh?",
    metaTitle: "How Much Does a Yard of Concrete Weigh? (Wet & Cured)",
    metaDesc:
      "A cubic yard of freshly mixed concrete weighs approximately 4,050 lbs (about 2 tons). Cured concrete is slightly lighter at 3,900–4,000 lbs. See weight by mix type.",
    category: "Concrete",
    directAnswer:
      "A cubic yard of standard ready-mix concrete weighs approximately 4,050 pounds (about 2 tons) when freshly mixed. After curing, the weight drops slightly to 3,900–4,000 lbs as water evaporates. Lightweight concrete mixes weigh 3,000–3,500 lbs/yd³; heavyweight mixes can reach 5,000+ lbs/yd³.",
    tableHeading: "Weight per cubic yard",
    tableLabel: "Concrete type",
    table: [
      { label: "Standard ready-mix (wet)",    value: "~4,050 lbs (2.0 tons)" },
      { label: "Standard ready-mix (cured)",  value: "~3,900 lbs (1.95 tons)" },
      { label: "Lightweight concrete",        value: "3,000–3,500 lbs" },
      { label: "Heavyweight concrete",        value: "5,000–6,000 lbs" },
      { label: "Fiber-reinforced mix",        value: "~4,050 lbs (same as standard)" },
    ],
    howToSteps: [
      { text: "Standard concrete density is approximately 150 lbs per cubic foot." },
      { text: "One cubic yard = 27 cubic feet." },
      { text: "Multiply: 27 × 150 = 4,050 lbs per cubic yard." },
      { text: "To convert to tons: 4,050 ÷ 2,000 = 2.025 tons." },
    ],
    proTip:
      "Concrete trucks carry 8–10 cubic yards per load — that's up to 40,500 lbs, which is why residential driveways must support heavy truck weight. If your driveway can't handle it, ask for a short-load delivery or pump truck.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-in-a-cubic-yard", question: "How many bags of concrete in a cubic yard?" },
      { slug: "how-many-80lb-bags-of-concrete-in-a-yard", question: "How many 80lb bags of concrete in a yard?" },
    ],
  },

  // ─── 49. How thick should a concrete driveway be ─────────────────────────
  {
    slug: "how-thick-should-a-concrete-driveway-be",
    question: "How thick should a concrete driveway be?",
    metaTitle: "How Thick Should a Concrete Driveway Be? (4 vs 6 Inch)",
    metaDesc:
      "A standard residential concrete driveway should be 4 inches thick. For heavy vehicles (RVs, trucks), use 5–6 inches. See thickness by use case.",
    category: "Concrete",
    directAnswer:
      "A standard residential concrete driveway should be 4 inches thick for normal passenger vehicles. If you park heavy vehicles like RVs, pickup trucks with trailers, or commercial vehicles, use 5–6 inches. Driveways with poor soil base should also use 6 inches for added strength.",
    tableHeading: "Recommended thickness",
    tableLabel: "Use case",
    table: [
      { label: "Passenger cars (standard)",        value: "4 inches" },
      { label: "Pickup trucks / SUVs",             value: "4–5 inches" },
      { label: "RVs / heavy trucks / trailers",    value: "5–6 inches" },
      { label: "Commercial / delivery vehicles",   value: "6 inches" },
      { label: "Poor soil / expansive clay",       value: "6 inches + gravel base" },
    ],
    howToSteps: [
      { text: "Determine your heaviest expected vehicle (passenger car, truck, RV)." },
      { text: "Choose thickness: 4\" for cars, 5–6\" for heavy vehicles." },
      { text: "Prepare 4\" compacted gravel base under the slab for drainage and stability." },
      { text: "Calculate volume: length × width × (thickness ÷ 12) = cubic feet ÷ 27 = cubic yards." },
      { text: "For a 20×20 driveway at 4\": 20 × 20 × 0.333 = 133 cu ft ÷ 27 = 5 yd³." },
    ],
    proTip:
      "Use 3,500–4,000 PSI concrete mix for driveways. Add fiber reinforcement instead of wire mesh — it's cheaper, easier to install, and equally effective for residential slabs.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-much-does-a-yard-of-concrete-weigh", question: "How much does a yard of concrete weigh?" },
      { slug: "how-many-bags-of-concrete-for-a-20x20-slab", question: "How many bags of concrete for a 20×20 slab?" },
    ],
  },

  // ─── 50. How many square feet does a bundle of shingles cover ────────────
  {
    slug: "how-many-square-feet-does-a-bundle-of-shingles-cover",
    question: "How many square feet does a bundle of shingles cover?",
    metaTitle: "How Many Square Feet Does a Bundle of Shingles Cover?",
    metaDesc:
      "One bundle of asphalt shingles covers approximately 33 square feet. You need 3 bundles to cover one roofing square (100 sq ft). See coverage by shingle type.",
    category: "Roofing",
    directAnswer:
      "One bundle of standard asphalt shingles covers approximately 33 square feet of roof area. Three bundles equal one roofing square, which covers 100 square feet. This applies to both 3-tab and architectural (dimensional) shingles — the bundle count is the same, though architectural shingles have fewer but larger pieces per bundle.",
    tableHeading: "Bundle coverage",
    tableLabel: "Shingle type",
    table: [
      { label: "3-Tab asphalt",              value: "33 sq ft per bundle" },
      { label: "Architectural (dimensional)", value: "33 sq ft per bundle" },
      { label: "Impact-resistant",           value: "32–33 sq ft per bundle" },
      { label: "Hip & ridge caps",           value: "~20 lin ft per bundle" },
      { label: "1 roofing square",           value: "100 sq ft = 3 bundles" },
    ],
    howToSteps: [
      { text: "Measure your roof footprint: length × width for each section." },
      { text: "Multiply by the pitch multiplier (e.g., 6/12 pitch = ×1.118) to get actual roof area." },
      { text: "Divide by 100 to get roofing squares." },
      { text: "Multiply by 3 to get bundles. Add 10–15% for waste and hip/ridge cuts." },
      { text: "Example: 1,500 sq ft roof → 15 squares → 45 bundles + 10% = 50 bundles." },
    ],
    proTip:
      "Always order an extra 10% for waste, especially for cut areas around valleys, hips, and ridges. Leftover shingles are useful for future repairs — keep them if they're undamaged.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-shingles-in-a-bundle", question: "How many shingles in a bundle?" },
      { slug: "how-much-does-a-square-of-shingles-cover", question: "How much does a square of shingles cover?" },
    ],
  },

  // ─── 51. How many bags of concrete in a cubic yard ───────────────────────
  {
    slug: "how-many-bags-of-concrete-in-a-cubic-yard",
    question: "How many bags of concrete in a cubic yard?",
    metaTitle: "How Many Bags of Concrete in a Cubic Yard? (40, 60, 80 lb)",
    metaDesc:
      "One cubic yard of concrete requires 45 bags of 80-lb Quikrete, 60 bags of 60-lb, or 90 bags of 40-lb. Use ready-mix for anything over 0.5 cubic yards.",
    category: "Concrete",
    directAnswer:
      "One cubic yard of concrete requires approximately 45 bags of 80-lb concrete mix, 60 bags of 60-lb mix, or 90 bags of 40-lb mix. For projects larger than half a cubic yard, ready-mix concrete is more cost-effective and easier to work with.",
    tableHeading: "Bags per cubic yard",
    tableLabel: "Bag size",
    table: [
      { label: "80-lb bag (Quikrete / Sakrete)", value: "45 bags" },
      { label: "60-lb bag",                      value: "60 bags" },
      { label: "50-lb bag",                      value: "72 bags" },
      { label: "40-lb bag",                      value: "90 bags" },
    ],
    howToSteps: [
      { text: "One 80-lb bag of concrete mix yields about 0.60 cubic feet when mixed." },
      { text: "One cubic yard = 27 cubic feet." },
      { text: "27 ÷ 0.60 = 45 bags of 80-lb mix per cubic yard." },
      { text: "For 60-lb bags: each yields ~0.45 cu ft → 27 ÷ 0.45 = 60 bags." },
      { text: "For 40-lb bags: each yields ~0.30 cu ft → 27 ÷ 0.30 = 90 bags." },
    ],
    proTip:
      "At ~$7 per 80-lb bag, one cubic yard via bags costs $315 vs $150–180 for ready-mix delivered. For anything over 1 cubic yard, order ready-mix — you'll save money and time.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-80lb-bags-of-concrete-in-a-yard", question: "How many 80lb bags of concrete in a yard?" },
      { slug: "how-much-does-a-yard-of-concrete-weigh", question: "How much does a yard of concrete weigh?" },
    ],
  },

  // ─── 52. How many board feet in a 2x4x8 ─────────────────────────────────
  {
    slug: "how-many-board-feet-in-a-2x4x8",
    question: "How many board feet in a 2x4x8?",
    metaTitle: "How Many Board Feet in a 2x4x8? (Formula + Other Sizes)",
    metaDesc:
      "A standard 2×4×8 contains 5.33 board feet. Board feet = (thickness × width × length in inches) ÷ 144. See board foot count for common lumber sizes.",
    category: "Framing",
    directAnswer:
      "A 2×4×8 board contains 5.33 board feet. The formula is: thickness (inches) × width (inches) × length (inches) ÷ 144. For a 2×4×8: 2 × 4 × 96 ÷ 144 = 5.33 board feet. Note that nominal dimensions (2×4) are used in the calculation, not actual dimensions (1.5×3.5).",
    tableHeading: "Board feet",
    tableLabel: "Lumber size × length",
    table: [
      { label: "2×4×8",   value: "5.33 bd ft" },
      { label: "2×4×10",  value: "6.67 bd ft" },
      { label: "2×4×12",  value: "8.00 bd ft" },
      { label: "2×6×8",   value: "8.00 bd ft" },
      { label: "2×6×10",  value: "10.00 bd ft" },
      { label: "2×8×8",   value: "10.67 bd ft" },
      { label: "4×4×8",   value: "10.67 bd ft" },
    ],
    howToSteps: [
      { text: "Write down nominal thickness × width × length (all in inches)." },
      { text: "For a 2×4×8: thickness = 2\", width = 4\", length = 8 ft = 96\"." },
      { text: "Multiply: 2 × 4 × 96 = 768." },
      { text: "Divide by 144: 768 ÷ 144 = 5.33 board feet." },
      { text: "For lengths in feet: use the simplified formula T(in) × W(in) × L(ft) ÷ 12." },
    ],
    proTip:
      "Board feet use nominal dimensions (2×4), not actual dimensions (1.5×3.5). This is the industry standard for pricing and ordering lumber — always use nominal dimensions in your calculations.",
    relatedCalc: { slug: "board-foot-calculator", name: "Board Foot Calculator" },
    relatedFaqs: [
      { slug: "how-many-studs-for-a-8-foot-wall", question: "How many studs for an 8-foot wall?" },
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
    ],
  },

  // ─── 53. How thick should asphalt be for a driveway ──────────────────────
  {
    slug: "how-thick-should-asphalt-be-for-a-driveway",
    question: "How thick should asphalt be for a driveway?",
    metaTitle: "How Thick Should Asphalt Be for a Driveway? (2 to 4 Inches)",
    metaDesc:
      "A residential asphalt driveway should be 2–3 inches thick for cars and 3–4 inches for heavy vehicles, laid over a 6–8 inch compacted gravel base.",
    category: "Masonry",
    directAnswer:
      "A residential asphalt driveway should be 2–3 inches thick of compacted asphalt for standard passenger vehicles, installed over a 6–8 inch compacted gravel base. For heavy vehicles (trucks, RVs), use 3–4 inches of asphalt. The total pavement depth including base is typically 8–12 inches.",
    tableHeading: "Asphalt thickness by use",
    tableLabel: "Use case",
    table: [
      { label: "Residential cars",           value: "2–3 inches asphalt" },
      { label: "Pickup trucks / SUVs",       value: "3 inches asphalt" },
      { label: "Heavy trucks / RVs",         value: "3–4 inches asphalt" },
      { label: "Gravel base (all types)",    value: "6–8 inches compacted" },
    ],
    howToSteps: [
      { text: "Excavate 10–12 inches below final grade." },
      { text: "Compact 6–8 inches of crushed gravel base (Class II aggregate)." },
      { text: "Apply binder course: 1.5–2 inches of binder (base) asphalt." },
      { text: "Apply surface course: 1–1.5 inches of fine surface asphalt. Compact each layer." },
      { text: "Total asphalt: 2.5–3.5 inches in two lifts for best results." },
    ],
    proTip:
      "Never pour asphalt in a single 3-inch lift — always use two lifts (binder + surface) for better compaction and longevity. Single-lift installations crack and rut within a few years.",
    relatedCalc: { slug: "asphalt-calculator", name: "Asphalt Calculator" },
    relatedFaqs: [
      { slug: "how-much-gravel-under-concrete-slab", question: "How much gravel under a concrete slab?" },
      { slug: "how-many-square-feet-does-a-ton-of-asphalt-cover", question: "How many square feet does a ton of asphalt cover?" },
    ],
  },

  // ─── 54. How much gravel under concrete slab ─────────────────────────────
  {
    slug: "how-much-gravel-under-concrete-slab",
    question: "How much gravel under a concrete slab?",
    metaTitle: "How Much Gravel Under a Concrete Slab? (4 Inch Base Guide)",
    metaDesc:
      "Place 4 inches of compacted gravel under a concrete slab for driveways and patios. Use 6 inches in areas with poor drainage or freeze-thaw cycles.",
    category: "Concrete",
    directAnswer:
      "You need a minimum 4-inch compacted gravel base under a concrete slab for patios and driveways. In cold climates with freeze-thaw cycles, or on poor/clay soils, use 6 inches. The gravel should be compacted crushed stone (not pea gravel) to prevent settling.",
    tableHeading: "Recommended base depth",
    tableLabel: "Application",
    table: [
      { label: "Patio slab (mild climate)",     value: "4 inches crushed stone" },
      { label: "Driveway (standard)",           value: "4–6 inches crushed stone" },
      { label: "Cold climate / freeze-thaw",    value: "6–8 inches" },
      { label: "Clay or expansive soil",        value: "6–8 inches + geotextile fabric" },
      { label: "Walkway / sidewalk",            value: "4 inches" },
    ],
    howToSteps: [
      { text: "Excavate to a depth of 4\" gravel + 4\" concrete (8\" total for standard patio)." },
      { text: "Spread 3/4\" crushed stone (not pea gravel — it doesn't compact well)." },
      { text: "Compact in 2\" lifts with a plate compactor. Don't compact more than 2\" at a time." },
      { text: "Check with a level; the base should slope 1/8\" per foot away from structures for drainage." },
      { text: "Pour concrete within 24 hours of compacting to avoid the base shifting." },
    ],
    proTip:
      "Use 3/4\" crushed angular stone, not pea gravel or sand. Angular stone locks together when compacted; round stones shift under load and cause slab cracking.",
    relatedCalc: { slug: "gravel-calculator", name: "Gravel Calculator" },
    relatedFaqs: [
      { slug: "how-thick-should-a-concrete-driveway-be", question: "How thick should a concrete driveway be?" },
      { slug: "how-much-gravel-for-a-100-foot-driveway", question: "How much gravel for a 100-foot driveway?" },
    ],
  },

  // ─── 55. How much paint for kitchen cabinets ─────────────────────────────
  {
    slug: "how-much-paint-for-kitchen-cabinets",
    question: "How much paint for kitchen cabinets?",
    metaTitle: "How Much Paint for Kitchen Cabinets? (Quarts & Gallons)",
    metaDesc:
      "Paint an average kitchen's cabinets with 1 quart of primer and 1–2 quarts of paint per coat. Most kitchens need 1 gallon total for two coats on all surfaces.",
    category: "Paint",
    directAnswer:
      "An average kitchen with 20–25 linear feet of cabinets needs approximately 1 quart of primer and 1–1.5 quarts of paint per coat. For two coats (recommended), plan on 1 gallon of paint total. Larger kitchens (30+ linear feet) may need 1.5–2 gallons.",
    tableHeading: "Paint needed (2 coats)",
    tableLabel: "Kitchen size",
    table: [
      { label: "Small (10–15 lin ft of cabinets)",  value: "1 qt primer + 1 qt paint" },
      { label: "Medium (20–25 lin ft)",             value: "1 qt primer + 1 gal paint" },
      { label: "Large (30+ lin ft)",                value: "1 gal primer + 1.5 gal paint" },
      { label: "Upper cabinets only",               value: "1 qt primer + 1 qt paint" },
      { label: "Lower cabinets only",               value: "1 qt primer + 1 qt paint" },
    ],
    howToSteps: [
      { text: "Remove all doors and drawers. Count total pieces: doors + drawer fronts + face frames." },
      { text: "Estimate paintable area: each standard door ≈ 5 sq ft; drawer front ≈ 2 sq ft." },
      { text: "Total area = (# doors × 5) + (# drawer fronts × 2) + face frame area." },
      { text: "One quart covers ~100 sq ft per coat. Divide total area by 100 for quarts needed." },
      { text: "Multiply by 2 for two coats (always use 2 coats on cabinets)." },
    ],
    proTip:
      "Use a cabinet-specific paint (Sherwin-Williams Emerald Urethane or Benjamin Moore Advance) rather than regular latex wall paint. Cabinet paints cure harder and resist grease, moisture, and chipping far better.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-a-20x20-room", question: "How many gallons of paint for a 20×20 room?" },
      { slug: "how-much-paint-for-a-front-door", question: "How much paint for a front door?" },
    ],
  },

  // ─── 56. How many tons of gravel for a driveway ──────────────────────────
  {
    slug: "how-many-tons-of-gravel-for-a-driveway",
    question: "How many tons of gravel for a driveway?",
    metaTitle: "How Many Tons of Gravel for a Driveway? (Per Linear Foot)",
    metaDesc:
      "A 200-foot gravel driveway (12 ft wide, 4 in deep) needs about 30 tons of gravel. Use 1.5 tons per 10 linear feet for a standard single-lane driveway.",
    category: "Landscaping",
    directAnswer:
      "A standard single-lane gravel driveway (12 feet wide, 4 inches deep) requires approximately 1.5 tons of gravel per 10 linear feet, or 15 tons per 100 linear feet. For a 200-foot driveway, plan on 30 tons. Gravel weighs about 1.4 tons per cubic yard.",
    tableHeading: "Tons of gravel needed",
    tableLabel: "Driveway length (12 ft wide, 4\" deep)",
    table: [
      { label: "50 feet",  value: "~7.5 tons" },
      { label: "100 feet", value: "~15 tons" },
      { label: "150 feet", value: "~22 tons" },
      { label: "200 feet", value: "~30 tons" },
      { label: "300 feet", value: "~45 tons" },
    ],
    howToSteps: [
      { text: "Measure driveway length × width in feet." },
      { text: "Multiply by depth in feet (4\" = 0.333 ft): length × 12 × 0.333 = cubic feet." },
      { text: "Divide by 27 to get cubic yards." },
      { text: "Multiply cubic yards by 1.4 to get tons (crushed stone density)." },
      { text: "Example: 200 ft × 12 ft × 0.333 = 800 cu ft ÷ 27 = 29.6 yd³ × 1.4 = 41 tons." },
    ],
    proTip:
      "Order gravel in layers: 6 inches of large base stone (2–3\" crusher run), then 4 inches of 3/4\" crushed stone on top. This two-layer system lasts decades vs. a single layer of uniform stone.",
    relatedCalc: { slug: "gravel-calculator", name: "Gravel Calculator" },
    relatedFaqs: [
      { slug: "how-much-gravel-for-a-100-foot-driveway", question: "How much gravel for a 100-foot driveway?" },
      { slug: "how-much-gravel-under-concrete-slab", question: "How much gravel under a concrete slab?" },
    ],
  },

  // ─── 57. How many pallets of sod for 1 acre ──────────────────────────────
  {
    slug: "how-many-pallets-of-sod-for-1-acre",
    question: "How many pallets of sod for 1 acre?",
    metaTitle: "How Many Pallets of Sod for 1 Acre? (Rolls & Square Feet)",
    metaDesc:
      "One acre (43,560 sq ft) requires 87–109 pallets of sod, depending on pallet size. Most pallets cover 400–504 sq ft. Add 5% for waste.",
    category: "Landscaping",
    directAnswer:
      "One acre equals 43,560 square feet. A standard pallet of sod covers 400–504 square feet depending on the supplier. You'll need approximately 87–109 pallets per acre. Most suppliers sell pallets at 400–450 sq ft, so plan on 97–109 pallets plus 5% waste.",
    tableHeading: "Pallets per acre",
    tableLabel: "Pallet size",
    table: [
      { label: "400 sq ft pallet",  value: "109 pallets per acre" },
      { label: "450 sq ft pallet",  value: "97 pallets per acre" },
      { label: "500 sq ft pallet",  value: "87 pallets per acre" },
      { label: "504 sq ft pallet",  value: "86 pallets per acre" },
    ],
    howToSteps: [
      { text: "Measure your lawn area in square feet." },
      { text: "Add 5% for waste, overlapping edges, and irregular cuts." },
      { text: "Ask your supplier for their pallet size in square feet." },
      { text: "Divide total sq ft by pallet coverage to get pallet count." },
      { text: "Example: 43,560 sq ft (1 acre) × 1.05 ÷ 450 sq ft/pallet = 102 pallets." },
    ],
    proTip:
      "Sod is perishable — install within 24 hours of delivery in warm weather, 48 hours in cool weather. Arrange pallets in the shade and water them if you can't install immediately.",
    relatedCalc: { slug: "sod-calculator", name: "Sod Calculator" },
    relatedFaqs: [
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
      { slug: "how-many-rolls-of-sod-for-500-sq-ft", question: "How many rolls of sod for 500 sq ft?" },
    ],
  },

  // ─── 58. How many studs for an 8-foot wall ───────────────────────────────
  {
    slug: "how-many-studs-for-a-8-foot-wall",
    question: "How many studs for an 8-foot wall?",
    metaTitle: "How Many Studs for an 8-Foot Wall? (16\" and 24\" OC)",
    metaDesc:
      "An 8-foot wall with studs 16\" on center needs 7 studs. At 24\" on center, you need 5 studs. Add 2 top plates and 1 bottom plate plus corner and door framing.",
    category: "Framing",
    directAnswer:
      "An 8-foot wall requires 7 studs spaced 16 inches on center, or 5 studs at 24 inches on center. You'll also need a double top plate (2 boards × 8 ft) and a single bottom plate (1 board × 8 ft) — that's 3 more 2×4s. Total for a basic 8-foot wall: 10 boards at 16\" OC.",
    tableHeading: "Studs for 8-foot wall",
    tableLabel: "Stud spacing",
    table: [
      { label: "12\" on center", value: "9 studs" },
      { label: "16\" on center", value: "7 studs" },
      { label: "24\" on center", value: "5 studs" },
    ],
    howToSteps: [
      { text: "Divide wall length by spacing: 8 ft ÷ (16\" ÷ 12) = 8 ÷ 1.333 = 6 spaces." },
      { text: "Add 1 for the starting stud: 6 + 1 = 7 studs." },
      { text: "Add plates: 2 top plates + 1 bottom plate = 3 more boards." },
      { text: "Add corner framing: 2–3 extra studs per corner." },
      { text: "For doors/windows: add 2 jack studs + 2 king studs + header lumber per opening." },
    ],
    proTip:
      "Order 10% extra studs for waste, cuts, blocking, and mistakes. Use the formula: (wall length in inches ÷ spacing in inches) + 1 = stud count, then round up.",
    relatedCalc: { slug: "stud-calculator", name: "Stud / Framing Calculator" },
    relatedFaqs: [
      { slug: "how-many-studs-for-a-20-foot-wall", question: "How many studs for a 20-foot wall?" },
      { slug: "how-many-studs-for-16-foot-wall", question: "How many studs for a 16-foot wall?" },
    ],
  },

  // ─── 59. How much mulch for 300 square feet ──────────────────────────────
  {
    slug: "how-much-mulch-for-300-square-feet",
    question: "How much mulch for 300 square feet?",
    metaTitle: "How Much Mulch for 300 Square Feet? (Bags & Cubic Yards)",
    metaDesc:
      "300 square feet of mulch at 3 inches deep needs 2.8 cubic yards or about 19 bags (2 cu ft each). At 2 inches deep, you need 1.9 cubic yards or 13 bags.",
    category: "Landscaping",
    directAnswer:
      "For 300 square feet at the standard 3-inch depth, you need approximately 2.8 cubic yards of mulch, or about 19 bags (2 cu ft bags). At 2 inches deep, you need 1.9 cubic yards or 13 bags. Most landscapers apply 2–3 inches for weed suppression and moisture retention.",
    tableHeading: "Mulch needed for 300 sq ft",
    tableLabel: "Depth",
    table: [
      { label: "2 inches", value: "1.9 cu yd / 13 bags (2 cu ft)" },
      { label: "3 inches", value: "2.8 cu yd / 19 bags (2 cu ft)" },
      { label: "4 inches", value: "3.7 cu yd / 25 bags (2 cu ft)" },
    ],
    howToSteps: [
      { text: "Calculate volume: 300 sq ft × (3\" ÷ 12) = 300 × 0.25 = 75 cubic feet." },
      { text: "Convert to cubic yards: 75 ÷ 27 = 2.78 cubic yards." },
      { text: "Convert to bags: 75 cu ft ÷ 2 cu ft per bag = 37.5 → 38 bags... wait, that's wrong. Let me redo." },
      { text: "75 cubic feet ÷ 2 cubic feet per bag = 37.5 bags. Round up to 38." },
      { text: "Or buy in bulk: order 3 cubic yards for a standard delivery minimum." },
    ],
    proTip:
      "Bulk mulch is typically half the price of bagged mulch per cubic yard. If you need 3+ cubic yards, buy bulk. Most suppliers have a 3 cubic yard minimum for delivery.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-much-mulch-for-500-square-feet", question: "How much mulch for 500 square feet?" },
    ],
  },

  // ─── 60. How many bags of mulch for 100 square feet ──────────────────────
  {
    slug: "how-many-bags-of-mulch-for-100-square-feet",
    question: "How many bags of mulch for 100 square feet?",
    metaTitle: "How Many Bags of Mulch for 100 Square Feet?",
    metaDesc:
      "100 square feet of mulch at 3 inches deep needs about 6–7 bags (2 cu ft each) or 1 cubic yard bulk. At 2 inches deep, you need 4–5 bags.",
    category: "Landscaping",
    directAnswer:
      "For 100 square feet at 3 inches deep, you need about 6–7 bags of mulch (2 cubic foot bags) or roughly 0.93 cubic yards in bulk. At 2 inches deep, you need 4–5 bags. Standard 2 cu ft bags cover about 8 sq ft at 3\" deep.",
    tableHeading: "Bags for 100 sq ft",
    tableLabel: "Depth",
    table: [
      { label: "2 inches", value: "4–5 bags (2 cu ft bags)" },
      { label: "3 inches", value: "6–7 bags (2 cu ft bags)" },
      { label: "4 inches", value: "9–10 bags (2 cu ft bags)" },
    ],
    howToSteps: [
      { text: "Calculate cubic feet: 100 sq ft × (3\" ÷ 12) = 100 × 0.25 = 25 cu ft." },
      { text: "Divide by bag size: 25 cu ft ÷ 2 cu ft per bag = 12.5 → 13 bags." },
      { text: "Alternatively in cubic yards: 25 ÷ 27 = 0.93 yd³ — order 1 cubic yard bulk." },
    ],
    proTip:
      "A 2 cubic foot bag covers about 8 square feet at 3 inches deep. For quick math: divide your square footage by 8 to get bag count at 3-inch depth.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
      { slug: "how-much-mulch-for-300-square-feet", question: "How much mulch for 300 square feet?" },
    ],
  },

  // ─── 61. How many pounds of grass seed for 1000 sq ft ────────────────────
  {
    slug: "how-many-pounds-of-grass-seed-for-1000-sq-ft",
    question: "How many pounds of grass seed for 1,000 sq ft?",
    metaTitle: "How Many Pounds of Grass Seed for 1,000 Sq Ft?",
    metaDesc:
      "New lawn seeding needs 3–8 lbs of grass seed per 1,000 sq ft depending on grass type. Overseeding an existing lawn takes 1–3 lbs per 1,000 sq ft.",
    category: "Landscaping",
    directAnswer:
      "New lawns need 3–8 pounds of grass seed per 1,000 square feet depending on the grass species. Kentucky bluegrass and fine fescue require about 3–4 lbs; tall fescue and ryegrass need 6–8 lbs. For overseeding an existing lawn, use half the new-lawn rate (1–4 lbs per 1,000 sq ft).",
    tableHeading: "Seed rate per 1,000 sq ft",
    tableLabel: "Grass type",
    table: [
      { label: "Kentucky Bluegrass",    value: "3–4 lbs (new), 1–2 lbs (overseed)" },
      { label: "Fine Fescue",           value: "3–5 lbs (new), 1–2 lbs (overseed)" },
      { label: "Tall Fescue",           value: "6–8 lbs (new), 3–4 lbs (overseed)" },
      { label: "Perennial Ryegrass",    value: "6–8 lbs (new), 3–4 lbs (overseed)" },
      { label: "Bermuda (hulled)",      value: "1–2 lbs (new)" },
      { label: "Zoysia",               value: "1–2 lbs (new)" },
    ],
    howToSteps: [
      { text: "Identify your grass species from the seed bag or your existing lawn." },
      { text: "Determine if you're seeding a new lawn or overseeding." },
      { text: "Multiply your area (sq ft) by the seeding rate (lbs per 1,000 sq ft) ÷ 1,000." },
      { text: "Example: 5,000 sq ft of new tall fescue lawn → 5,000 × 7 ÷ 1,000 = 35 lbs." },
    ],
    proTip:
      "Split seeding into two passes at right angles to each other for more even coverage. Use a broadcast spreader — hand-throwing leads to bare patches and clumps.",
    relatedCalc: { slug: "sod-calculator", name: "Sod Calculator" },
    relatedFaqs: [
      { slug: "how-many-pallets-of-sod-for-1-acre", question: "How many pallets of sod for 1 acre?" },
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
    ],
  },

  // ─── 62. How many wheelbarrow loads in a cubic yard ──────────────────────
  {
    slug: "how-many-wheelbarrow-loads-in-a-cubic-yard",
    question: "How many wheelbarrow loads in a cubic yard?",
    metaTitle: "How Many Wheelbarrow Loads in a Cubic Yard?",
    metaDesc:
      "A standard 3-cubic-foot wheelbarrow holds about 1/9 of a cubic yard. You need 9 wheelbarrow loads to move 1 cubic yard of material.",
    category: "Concrete",
    directAnswer:
      "A standard 3-cubic-foot wheelbarrow takes approximately 9 full loads to move 1 cubic yard of material. A larger 6-cubic-foot contractor wheelbarrow requires only 4–5 loads per cubic yard. One cubic yard = 27 cubic feet.",
    tableHeading: "Loads per cubic yard",
    tableLabel: "Wheelbarrow size",
    table: [
      { label: "2 cu ft (small)",         value: "13–14 loads per yard" },
      { label: "3 cu ft (standard)",      value: "9 loads per yard" },
      { label: "4 cu ft (medium)",        value: "7 loads per yard" },
      { label: "6 cu ft (contractor)",    value: "4–5 loads per yard" },
    ],
    howToSteps: [
      { text: "One cubic yard = 27 cubic feet." },
      { text: "Find your wheelbarrow capacity in cubic feet (usually printed on the tray or in the manual)." },
      { text: "Divide 27 by wheelbarrow capacity: 27 ÷ 3 = 9 loads." },
      { text: "Keep in mind that heavy materials (concrete, wet soil) should only be filled 75% to avoid tipping." },
      { text: "At 75% capacity: 3 cu ft × 0.75 = 2.25 cu ft per load → 27 ÷ 2.25 = 12 loads." },
    ],
    proTip:
      "Wet concrete or saturated soil at full capacity makes a wheelbarrow very hard to control. Fill to 75% for safety and maneuverability, especially on slopes.",
    relatedCalc: { slug: "cubic-yard-calculator", name: "Cubic Yard Calculator" },
    relatedFaqs: [
      { slug: "how-many-cubic-yards-in-a-dump-truck-load", question: "How many cubic yards in a dump truck load?" },
      { slug: "how-much-does-a-yard-of-concrete-weigh", question: "How much does a yard of concrete weigh?" },
    ],
  },

  // ─── 63. How much concrete for a 6x6 post ────────────────────────────────
  {
    slug: "how-much-concrete-for-a-6x6-post",
    question: "How much concrete for a 6×6 post?",
    metaTitle: "How Much Concrete for a 6×6 Post? (Bags by Depth)",
    metaDesc:
      "A 6×6 post in a 12\" diameter hole 36\" deep needs about 1.5 bags of 80-lb concrete. For a 48\" deep hole, use 2 bags. See exact bag counts by hole size.",
    category: "Concrete",
    directAnswer:
      "A 6×6 post set in a 12-inch diameter hole 36 inches deep requires approximately 1.5 bags of 80-lb concrete mix. For a 48-inch deep hole (code minimum for frost-prone areas), use 2 bags. The 6×6 post itself displaces about 0.1 cubic feet of volume in the hole.",
    tableHeading: "Bags of 80-lb concrete",
    tableLabel: "Hole diameter × depth",
    table: [
      { label: "10\" dia × 30\" deep", value: "1 bag (80-lb)" },
      { label: "12\" dia × 36\" deep", value: "1.5 bags" },
      { label: "12\" dia × 48\" deep", value: "2 bags" },
      { label: "14\" dia × 42\" deep", value: "2.5 bags" },
      { label: "16\" dia × 48\" deep", value: "3.5 bags" },
    ],
    howToSteps: [
      { text: "Calculate hole volume: π × (radius in ft)² × depth in ft." },
      { text: "For 12\" diameter: radius = 0.5 ft → π × 0.25 × 3 ft = 2.36 cu ft." },
      { text: "Subtract post volume: 0.5 ft × 0.5 ft × 3 ft = 0.75 cu ft." },
      { text: "Net concrete needed: 2.36 − 0.75 = 1.61 cu ft." },
      { text: "One 80-lb bag yields ~0.60 cu ft → 1.61 ÷ 0.60 = 2.7 → round up to 3 bags." },
    ],
    proTip:
      "For 6×6 structural posts (decks, pergolas), dig below the frost line in your area (often 36–48\"). Use fast-setting concrete (Quikrete Fast-Setting) — pour dry mix into the hole, add water on top, no mixing required.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-a-fence-post", question: "How many bags of concrete for a fence post?" },
      { slug: "how-many-bags-of-quikrete-per-fence-post", question: "How many bags of Quikrete per fence post?" },
    ],
  },

  // ─── 64. How much sand for a 4x4 sandbox ─────────────────────────────────
  {
    slug: "how-much-sand-for-a-4x4-sandbox",
    question: "How much sand for a 4×4 sandbox?",
    metaTitle: "How Much Sand for a 4×4 Sandbox? (Bags & Depth Guide)",
    metaDesc:
      "A 4×4 sandbox filled 6 inches deep needs 8 cubic feet of sand — about 8 bags (50-lb each) or 4 bags of 100-lb play sand. See amounts by fill depth.",
    category: "Landscaping",
    directAnswer:
      "A 4×4 foot sandbox filled 6 inches deep needs 8 cubic feet of sand, which is approximately 8 bags of 50-lb play sand (each covers ~1 cu ft) or 4–5 large bags of 100-lb play sand. At a shallower 4-inch depth, you need about 5 cubic feet.",
    tableHeading: "Sand for 4×4 sandbox",
    tableLabel: "Fill depth",
    table: [
      { label: "3 inches",  value: "4 cu ft ≈ 4 bags (50-lb)" },
      { label: "4 inches",  value: "5.3 cu ft ≈ 6 bags (50-lb)" },
      { label: "6 inches",  value: "8 cu ft ≈ 8 bags (50-lb)" },
      { label: "8 inches",  value: "10.7 cu ft ≈ 11 bags (50-lb)" },
    ],
    howToSteps: [
      { text: "Calculate sandbox volume: 4 ft × 4 ft × (6\" ÷ 12) = 4 × 4 × 0.5 = 8 cubic feet." },
      { text: "One 50-lb bag of play sand fills about 0.5 cubic feet (check the bag label)." },
      { text: "Divide: 8 cu ft ÷ 0.5 cu ft per bag = 16 bags of 50-lb sand." },
      { text: "Or use 50-lb bags: 8 ÷ 0.5 = 16 bags. For 100-lb bags: 8 ÷ 1.0 = 8 bags." },
    ],
    proTip:
      "Use washed play sand (labeled \"play sand\"), not builder's sand or sandbox sand from big-box stores that isn't specifically labeled as play-safe. Play sand is washed to remove silica dust.",
    relatedCalc: { slug: "sand-calculator", name: "Sand Calculator" },
    relatedFaqs: [
      { slug: "how-much-sand-for-a-10x10-patio", question: "How much sand for a 10×10 patio?" },
      { slug: "how-many-bags-of-sand-for-pavers", question: "How many bags of sand for pavers?" },
    ],
  },

  // ─── 65. How many bags of concrete for a 20x20 slab ──────────────────────
  {
    slug: "how-many-bags-of-concrete-for-a-20x20-slab",
    question: "How many bags of concrete for a 20×20 slab?",
    metaTitle: "How Many Bags of Concrete for a 20×20 Slab?",
    metaDesc:
      "A 20×20 slab at 4\" thick needs 6.17 cubic yards or about 278 bags of 80-lb concrete. Order ready-mix — using bags is impractical at this size.",
    category: "Concrete",
    directAnswer:
      "A 20×20 foot slab at 4 inches thick requires approximately 6.17 cubic yards of concrete, which equals about 278 bags of 80-lb mix. At this volume, ready-mix concrete is strongly recommended — it costs about $150–180 per cubic yard delivered vs. $7 per bag ($1,946 total for bags).",
    tableHeading: "Concrete for 20×20 slab",
    tableLabel: "Thickness",
    table: [
      { label: "3.5 inches (minimal)", value: "5.4 yd³ / 243 bags 80-lb" },
      { label: "4 inches (standard)",  value: "6.17 yd³ / 278 bags 80-lb" },
      { label: "5 inches (heavy use)", value: "7.7 yd³ / 347 bags 80-lb" },
      { label: "6 inches (garage)",    value: "9.26 yd³ / 417 bags 80-lb" },
    ],
    howToSteps: [
      { text: "Calculate volume: 20 × 20 × (4 ÷ 12) = 400 × 0.333 = 133.3 cubic feet." },
      { text: "Convert to cubic yards: 133.3 ÷ 27 = 4.94 yd³. Add 10% waste: × 1.10 = 5.43 yd³." },
      { text: "In bags: 5.43 yd³ × 45 bags/yd³ = 244 bags of 80-lb." },
      { text: "Call a ready-mix supplier: 5.5–6 yards delivered costs $825–1,080 vs. $1,700+ in bags." },
    ],
    proTip:
      "For a 20×20 slab, always use ready-mix. Mixing 250+ bags by hand takes 15+ hours and produces inconsistent concrete quality. A 6-yard ready-mix truck can pour it in under 2 hours.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-much-concrete-for-a-20x20-slab", question: "How much concrete for a 20×20 slab?" },
      { slug: "how-many-bags-of-concrete-in-a-cubic-yard", question: "How many bags of concrete in a cubic yard?" },
    ],
  },

  // ─── 66. How many bags of concrete for a mailbox post ────────────────────
  {
    slug: "how-many-bags-of-concrete-for-a-mailbox-post",
    question: "How many bags of concrete for a mailbox post?",
    metaTitle: "How Many Bags of Concrete for a Mailbox Post?",
    metaDesc:
      "A mailbox post needs 1 bag of 50-lb fast-setting concrete in a 6–8 inch diameter hole 24 inches deep. Use 2 bags if the hole is wider or deeper.",
    category: "Concrete",
    directAnswer:
      "One 50-lb bag of fast-setting concrete is typically enough for a mailbox post set in a 6–8 inch diameter hole 24 inches deep. If you're using a 4×4 wood post with a wider or deeper hole, use 1–2 bags of 80-lb mix. Mailbox posts don't need large footings — USPS guidelines require the post to break away easily in a collision.",
    tableHeading: "Concrete bags for mailbox post",
    tableLabel: "Hole size",
    table: [
      { label: "6\" dia × 18\" deep", value: "0.5 bag (50-lb)" },
      { label: "6\" dia × 24\" deep", value: "1 bag (50-lb)" },
      { label: "8\" dia × 24\" deep", value: "1 bag (80-lb)" },
      { label: "8\" dia × 30\" deep", value: "1–2 bags (80-lb)" },
    ],
    howToSteps: [
      { text: "Dig a hole 6\" in diameter and 24\" deep with a post hole digger or auger." },
      { text: "Place the post in the center; check for plumb with a level." },
      { text: "Pour 1 bag of Quikrete Fast-Setting concrete dry into the hole." },
      { text: "Add water (about 1 gallon) per the bag instructions — no mixing required." },
      { text: "Hold plumb for 4 minutes; support with stakes for 4 hours before mounting the mailbox." },
    ],
    proTip:
      "Use fast-setting concrete (Quikrete 5000 or Fast-Setting) — you pour it dry into the hole, add water on top, and it sets hard enough in 4 hours. No mixing, no tools.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-many-bags-of-concrete-for-a-fence-post", question: "How many bags of concrete for a fence post?" },
      { slug: "how-much-concrete-for-a-6x6-post", question: "How much concrete for a 6×6 post?" },
    ],
  },

  // ─── 67. How many bags of sand for pavers ────────────────────────────────
  {
    slug: "how-many-bags-of-sand-for-pavers",
    question: "How many bags of sand for pavers?",
    metaTitle: "How Many Bags of Sand for Pavers? (Bedding + Jointing Sand)",
    metaDesc:
      "A 10×10 paver patio needs about 14 bags of 50-lb bedding sand for the 1-inch base layer, plus 3–4 bags of polymeric jointing sand to fill the joints.",
    category: "Masonry",
    directAnswer:
      "A 10×10 paver patio (100 sq ft) needs approximately 14 bags of 50-lb coarse bedding sand for the 1-inch setting layer, plus 3–4 bags of polymeric sand for joint filling. For larger areas, plan on 0.5 cubic feet of bedding sand per square foot (at 1-inch depth).",
    tableHeading: "Sand bags for paver projects",
    tableLabel: "Patio size (1\" bedding layer)",
    table: [
      { label: "10×10 ft (100 sq ft)",  value: "14 bags bedding + 4 bags jointing" },
      { label: "12×12 ft (144 sq ft)",  value: "20 bags bedding + 5 bags jointing" },
      { label: "10×20 ft (200 sq ft)",  value: "28 bags bedding + 7 bags jointing" },
      { label: "20×20 ft (400 sq ft)",  value: "55 bags bedding + 14 bags jointing" },
    ],
    howToSteps: [
      { text: "Calculate bedding sand volume: area × 1\" depth = area × 0.083 ft = cubic feet." },
      { text: "For 100 sq ft: 100 × 0.083 = 8.3 cubic feet of sand." },
      { text: "One 50-lb bag of coarse sand = ~0.5 cubic feet → 8.3 ÷ 0.5 = 16.6 → 17 bags." },
      { text: "Jointing sand: estimate 1 bag per 25 sq ft of paver surface (joint width varies)." },
      { text: "100 sq ft ÷ 25 = 4 bags of polymeric jointing sand." },
    ],
    proTip:
      "Use coarse concrete sand (not play sand or stone dust) for the bedding layer — it compacts firmly and drains well. Never use polymeric sand as bedding — it's only for filling joints after pavers are laid.",
    relatedCalc: { slug: "paver-calculator", name: "Paver Calculator" },
    relatedFaqs: [
      { slug: "how-many-pavers-for-a-12x12-patio", question: "How many pavers for a 12×12 patio?" },
      { slug: "how-much-sand-for-a-10x10-patio", question: "How much sand for a 10×10 patio?" },
    ],
  },

  // ─── 68. How many bricks for a 20x20 patio ───────────────────────────────
  {
    slug: "how-many-bricks-for-a-20x20-patio",
    question: "How many bricks for a 20×20 patio?",
    metaTitle: "How Many Bricks for a 20×20 Patio?",
    metaDesc:
      "A 20×20 foot patio requires approximately 1,800–2,000 standard bricks (4×8 inch). Add 10% for waste and cuts. See brick count by size.",
    category: "Masonry",
    directAnswer:
      "A 20×20 foot patio (400 sq ft) requires approximately 1,800–2,000 standard 4×8-inch bricks laid flat, including a 10% waste allowance. Larger bricks (6×9\") reduce the count to about 1,100. Always add 10–15% extra for cuts, breakage, and future repairs.",
    tableHeading: "Bricks for 20×20 patio",
    tableLabel: "Brick size",
    table: [
      { label: "Standard 4×8\"",   value: "~1,800 bricks (+10% waste)" },
      { label: "Queen 3×7.6\"",   value: "~2,400 bricks" },
      { label: "6×9\" paver",     value: "~1,100 bricks" },
      { label: "4×4\" paver",     value: "~3,600 bricks" },
    ],
    howToSteps: [
      { text: "Calculate patio area: 20 × 20 = 400 sq ft." },
      { text: "Find brick coverage: a 4×8\" brick = 0.222 sq ft." },
      { text: "Divide: 400 ÷ 0.222 = 1,802 bricks." },
      { text: "Add 10% for waste: 1,802 × 1.10 = 1,982 → order 2,000 bricks." },
    ],
    proTip:
      "For a patio, use paving bricks (SW grade — Severe Weathering) rated for ground contact. Standard facing bricks are not freeze-thaw resistant when laid flat and will crack within a few winters.",
    relatedCalc: { slug: "brick-calculator", name: "Brick Calculator" },
    relatedFaqs: [
      { slug: "how-many-bricks-for-a-10x10-patio", question: "How many bricks for a 10×10 patio?" },
      { slug: "how-many-bricks-per-square-foot", question: "How many bricks per square foot?" },
    ],
  },

  // ─── 69. How many cinder blocks for a 10x10 shed ─────────────────────────
  {
    slug: "how-many-cinder-blocks-for-a-10x10-shed",
    question: "How many cinder blocks for a 10×10 shed?",
    metaTitle: "How Many Cinder Blocks for a 10×10 Shed? (Foundation Guide)",
    metaDesc:
      "A 10×10 shed on a concrete block foundation uses 9 corner/pier blocks for a simple skid foundation, or 40–50 CMU blocks for a full perimeter wall foundation.",
    category: "Masonry",
    directAnswer:
      "For a simple pier/skid foundation, a 10×10 shed uses 9 solid concrete blocks (typically 4×8×16\") placed in a 3×3 grid pattern. For a full perimeter block wall foundation (2 courses high), you'll need approximately 44 standard 8×8×16 CMU blocks.",
    tableHeading: "Block count for 10×10 shed",
    tableLabel: "Foundation type",
    table: [
      { label: "Pier/skid (3×3 grid)",           value: "9 solid concrete blocks" },
      { label: "Perimeter wall, 1 course",        value: "22 CMU blocks (8×8×16\")" },
      { label: "Perimeter wall, 2 courses",       value: "44 CMU blocks" },
      { label: "Full perimeter, 3 courses",       value: "66 CMU blocks" },
    ],
    howToSteps: [
      { text: "For pier foundation: place blocks in a 3×3 grid (corners, midpoints, center)." },
      { text: "For perimeter wall: perimeter = 4 × 10 = 40 linear feet." },
      { text: "One 16\" block = 1.33 linear feet → 40 ÷ 1.33 = 30 blocks per course." },
      { text: "Subtract corners already counted once, net ~22 blocks per course." },
      { text: "Multiply by number of courses: 2 courses = 44 blocks." },
    ],
    proTip:
      "For most residential sheds, a 9-block pier/skid foundation is adequate and much cheaper than a perimeter wall. Ensure blocks are level — use a string line and adjust gravel or sand base under each block.",
    relatedCalc: { slug: "block-calculator", name: "Block Calculator" },
    relatedFaqs: [
      { slug: "how-many-concrete-blocks-for-40-foot-wall", question: "How many concrete blocks for a 40-foot wall?" },
      { slug: "how-many-bricks-per-square-foot", question: "How many bricks per square foot?" },
    ],
  },

  // ─── 70. How many cubic yards in a dump truck load ────────────────────────
  {
    slug: "how-many-cubic-yards-in-a-dump-truck-load",
    question: "How many cubic yards in a dump truck load?",
    metaTitle: "How Many Cubic Yards in a Dump Truck Load?",
    metaDesc:
      "A standard 10-wheel dump truck holds 10–14 cubic yards. Tandem axle trucks carry 14–16 yards. Small single-axle trucks haul 5–7 yards.",
    category: "Concrete",
    directAnswer:
      "A standard 10-wheel (tri-axle) dump truck holds 10–14 cubic yards of material. Tandem axle trucks carry 14–16 cubic yards. Small single-axle trucks haul 5–7 cubic yards. The actual capacity depends on the material's weight — heavier materials like gravel or wet soil fill trucks by weight before reaching full volume.",
    tableHeading: "Cubic yards by truck size",
    tableLabel: "Truck type",
    table: [
      { label: "Small single-axle",        value: "5–7 cubic yards" },
      { label: "Standard 10-wheel",        value: "10–14 cubic yards" },
      { label: "Tandem axle",              value: "14–16 cubic yards" },
      { label: "Semi-trailer (end dump)",  value: "20–26 cubic yards" },
    ],
    howToSteps: [
      { text: "Calculate your material volume in cubic yards." },
      { text: "Contact local haulers to ask their truck capacity (volume and weight limit)." },
      { text: "Divide your total yards by truck capacity to get number of loads." },
      { text: "Account for weight: a tandem truck may hold 14 yards of mulch but only 10 yards of gravel (weight limit reached first)." },
    ],
    proTip:
      "Always clarify with your supplier whether the price is per cubic yard or per truckload. Loose materials (topsoil, mulch) settle 10–20% after delivery — order 10% extra to account for compaction.",
    relatedCalc: { slug: "cubic-yard-calculator", name: "Cubic Yard Calculator" },
    relatedFaqs: [
      { slug: "how-many-wheelbarrow-loads-in-a-cubic-yard", question: "How many wheelbarrow loads in a cubic yard?" },
      { slug: "how-many-tons-in-a-cubic-yard-of-dirt", question: "How many tons in a cubic yard of dirt?" },
    ],
  },

  // ─── 71. How many deck boards for a 10x10 deck ───────────────────────────
  {
    slug: "how-many-deck-boards-for-a-10x10-deck",
    question: "How many deck boards for a 10×10 deck?",
    metaTitle: "How Many Deck Boards for a 10×10 Deck?",
    metaDesc:
      "A 10×10 deck (100 sq ft) needs about 28 pieces of 5/4×6×12 decking boards. At 10-foot lengths, you need 20 boards. Add 10% for waste.",
    category: "Framing",
    directAnswer:
      "A 10×10 foot deck (100 sq ft) requires approximately 20 boards of 5/4×6×10 decking (10-foot boards across 10-foot span) or 14 boards of 5/4×6×12 laid in the other direction. With 10% waste, order 22–25 boards. This is for decking only — add rim boards, joists, and posts separately.",
    tableHeading: "Deck boards for 10×10 deck",
    tableLabel: "Board size",
    table: [
      { label: "5/4×6×10 (run parallel)",  value: "20 boards + 10% = 22" },
      { label: "5/4×6×12",                value: "14 boards + 10% = 16" },
      { label: "2×6×10 (thicker)",         value: "20 boards + 10% = 22" },
      { label: "Composite 1\"×6×12",       value: "14 boards + 10% = 16" },
    ],
    howToSteps: [
      { text: "Determine the deck area: 10 × 10 = 100 sq ft." },
      { text: "A 5/4×6 board has a nominal 6\" width; actual face width is 5.5\"." },
      { text: "With 1/8\" gap between boards, effective width per board = 5.625\"." },
      { text: "For 10 ft span: 120\" ÷ 5.625\" = 21.3 → 22 boards." },
      { text: "Add 10% for waste and end cuts: 22 × 1.10 = 25 boards." },
    ],
    proTip:
      "Buy boards in the longest length that avoids a seam on your deck surface. Seams on deck boards are a common weak point — full-length boards with no butt joints are stronger and look better.",
    relatedCalc: { slug: "deck-calculator", name: "Deck Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-12x12-deck", question: "How many deck boards for a 12×12 deck?" },
      { slug: "how-many-deck-boards-for-a-20x20-deck", question: "How many deck boards for a 20×20 deck?" },
    ],
  },

  // ─── 72. How many deck boards for a 20x20 deck ───────────────────────────
  {
    slug: "how-many-deck-boards-for-a-20x20-deck",
    question: "How many deck boards for a 20×20 deck?",
    metaTitle: "How Many Deck Boards for a 20×20 Deck?",
    metaDesc:
      "A 20×20 deck (400 sq ft) needs about 85–90 pieces of 5/4×6 decking at 20-foot lengths, or 57 boards at 16-foot lengths. Add 10% for waste.",
    category: "Framing",
    directAnswer:
      "A 20×20 foot deck (400 sq ft) requires approximately 85–90 boards of 5/4×6 decking at 20-foot lengths, or about 57 boards at 16-foot lengths (with a butt joint mid-span). With 10% waste, order 95–100 boards at 20-foot length. This covers decking boards only.",
    tableHeading: "Deck boards for 20×20 deck",
    tableLabel: "Board size",
    table: [
      { label: "5/4×6×20 (no seam)",   value: "43 boards + 10% = 47" },
      { label: "5/4×6×16 (with seam)", value: "57 boards + 10% = 63" },
      { label: "5/4×6×12",            value: "76 boards + 10% = 84" },
      { label: "2×6×20",              value: "43 boards + 10% = 47" },
    ],
    howToSteps: [
      { text: "Area: 20 × 20 = 400 sq ft." },
      { text: "Effective board width (5/4×6 with 1/8\" gap): 5.625\"." },
      { text: "For 20 ft span: 240\" ÷ 5.625\" = 42.7 → 43 boards." },
      { text: "Add 10%: 43 × 1.10 = 47 boards (running the full 20-ft length)." },
      { text: "If using shorter boards: double the count and add 15% for seams." },
    ],
    proTip:
      "For a 20×20 deck, use 20-foot boards to avoid mid-span butt joints. Joints weaken the deck surface and are a tripping hazard. If 20-ft boards are too expensive, stagger joints so they never align on adjacent boards.",
    relatedCalc: { slug: "deck-calculator", name: "Deck Calculator" },
    relatedFaqs: [
      { slug: "how-many-deck-boards-for-a-16x20-deck", question: "How many deck boards for a 16×20 deck?" },
      { slug: "how-many-deck-boards-for-a-10x10-deck", question: "How many deck boards for a 10×10 deck?" },
    ],
  },

  // ─── 73. How many gallons of paint for a 20x20 room ──────────────────────
  {
    slug: "how-many-gallons-of-paint-for-a-20x20-room",
    question: "How many gallons of paint for a 20×20 room?",
    metaTitle: "How Many Gallons of Paint for a 20×20 Room?",
    metaDesc:
      "A 20×20 room with 8-foot ceilings needs about 3 gallons of paint for walls (2 coats) plus 1 gallon for the ceiling. Total: 4 gallons for two coats.",
    category: "Paint",
    directAnswer:
      "A 20×20 room with 8-foot ceilings requires about 3 gallons of wall paint for two coats (after deducting doors and windows) and 1 gallon for the ceiling. Plan on 4 gallons total for a complete two-coat paint job including ceiling, or 2 gallons for walls only.",
    tableHeading: "Paint for 20×20 room (8 ft ceilings)",
    tableLabel: "Area painted",
    table: [
      { label: "Walls only, 1 coat",           value: "1.5 gallons" },
      { label: "Walls only, 2 coats",          value: "3 gallons" },
      { label: "Ceiling only, 1 coat",         value: "0.6 gallons" },
      { label: "Ceiling only, 2 coats",        value: "1.2 gallons" },
      { label: "Walls + ceiling, 2 coats",     value: "~4 gallons" },
    ],
    howToSteps: [
      { text: "Wall area: perimeter 80 ft × 8 ft ceiling = 640 sq ft." },
      { text: "Subtract doors (2 × 20 sq ft = 40 sq ft) and windows (3 × 15 sq ft = 45 sq ft): 640 − 85 = 555 sq ft." },
      { text: "At 350 sq ft per gallon: 555 ÷ 350 = 1.58 gallons per coat → 3.2 gallons for 2 coats." },
      { text: "Ceiling: 20 × 20 = 400 sq ft ÷ 350 = 1.14 gallons per coat → 2.3 gallons for 2 coats." },
      { text: "Total: 3.2 + 2.3 = 5.5 gallons for walls + ceiling, 2 coats. Buy 6 gallons." },
    ],
    proTip:
      "If changing from dark to light color, you may need a primer coat first, adding another gallon. Buying 5-gallon pails saves 20–30% vs. buying individual gallons.",
    relatedCalc: { slug: "paint-calculator", name: "Paint Calculator" },
    relatedFaqs: [
      { slug: "how-many-gallons-of-paint-for-12x12-room", question: "How many gallons of paint for a 12×12 room?" },
      { slug: "how-many-gallons-of-paint-for-a-10x10-room", question: "How many gallons of paint for a 10×10 room?" },
    ],
  },

  // ─── 74. How many nails for a square of shingles ─────────────────────────
  {
    slug: "how-many-nails-for-a-square-of-shingles",
    question: "How many nails for a square of shingles?",
    metaTitle: "How Many Nails for a Square of Shingles?",
    metaDesc:
      "One roofing square (100 sq ft) of 3-tab shingles requires 320 nails (4 per shingle × 26 shingles × 3 bundles). Architectural shingles: 160–240 nails per square.",
    category: "Roofing",
    directAnswer:
      "One roofing square (100 sq ft, 3 bundles) of standard 3-tab shingles requires approximately 320 nails — 4 nails per shingle, with 26 shingles per bundle and 3 bundles per square. For architectural (dimensional) shingles, use 4–6 nails per shingle, totaling 250–400 nails per square depending on wind zone.",
    tableHeading: "Nails per roofing square",
    tableLabel: "Shingle type",
    table: [
      { label: "3-Tab (standard wind zone)",     value: "320 nails (4 per shingle)" },
      { label: "3-Tab (high wind zone)",         value: "384 nails (6 per shingle)" },
      { label: "Architectural (standard)",       value: "252–336 nails" },
      { label: "Architectural (high wind)",      value: "336–420 nails" },
    ],
    howToSteps: [
      { text: "Count shingles per square: 3 bundles × 26 shingles = 78 shingles per square (3-tab)." },
      { text: "Multiply by nails per shingle: 78 × 4 = 312 nails (standard) or 78 × 6 = 468 (high wind)." },
      { text: "For architectural shingles: ~63 shingles per square × 4–6 nails = 252–378 nails." },
      { text: "Add 10% for starter strip nails and ridge cap nails." },
    ],
    proTip:
      "Use 1-1/4\" roofing nails for new decking; 1-3/4\" or 2\" nails when re-roofing over existing shingles. Nails must penetrate at least 3/4\" into the roof deck to meet code.",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-nails-per-shingle", question: "How many nails per shingle?" },
      { slug: "how-many-square-feet-does-a-bundle-of-shingles-cover", question: "How many sq ft does a bundle of shingles cover?" },
    ],
  },

  // ─── 75. How many pavers for a 12x12 patio ───────────────────────────────
  {
    slug: "how-many-pavers-for-a-12x12-patio",
    question: "How many pavers for a 12×12 patio?",
    metaTitle: "How Many Pavers for a 12×12 Patio?",
    metaDesc:
      "A 12×12 patio (144 sq ft) needs about 198 standard 4×8\" pavers or 96 square 12×12\" pavers. Add 10% for cuts and waste.",
    category: "Masonry",
    directAnswer:
      "A 12×12 foot patio (144 square feet) requires approximately 648 standard 4×8-inch brick pavers (+10% = 713) or 144 square 12×12-inch concrete pavers (+10% = 158). Always add 10% for edge cuts and breakage.",
    tableHeading: "Pavers for 12×12 patio",
    tableLabel: "Paver size",
    table: [
      { label: "4×8\" brick paver",        value: "648 pavers (+10% = 713)" },
      { label: "6×9\" brick paver",        value: "384 pavers (+10% = 422)" },
      { label: "12×12\" concrete paver",   value: "144 pavers (+10% = 158)" },
      { label: "16×16\" concrete paver",   value: "81 pavers (+10% = 89)" },
      { label: "12×18\" paver",            value: "96 pavers (+10% = 106)" },
    ],
    howToSteps: [
      { text: "Calculate patio area: 12 × 12 = 144 sq ft." },
      { text: "Pavers per sq ft: 144 sq in per sq ft ÷ paver area in sq in." },
      { text: "For 4×8\" paver: 144 ÷ 32 = 4.5 pavers/sq ft → 144 × 4.5 = 648 pavers." },
      { text: "For 12×12\" paver: 144 ÷ 144 = 1.0 per sq ft → 144 pavers." },
      { text: "Add 10% for waste: 648 × 1.10 = 713 (4×8\") or 144 × 1.10 = 158 (12×12\")." },
    ],
    proTip:
      "Use polymeric sand in the joints to prevent weeds and ant infiltration. Sweep it in dry, then mist with water to activate the binding agents. Redo every 3–5 years.",
    relatedCalc: { slug: "paver-calculator", name: "Paver Calculator" },
    relatedFaqs: [
      { slug: "how-many-pavers-for-10x10-patio", question: "How many pavers for a 10×10 patio?" },
      { slug: "how-many-bags-of-sand-for-pavers", question: "How many bags of sand for pavers?" },
    ],
  },

  // ─── 76. How many rolls of sod for 500 sq ft ─────────────────────────────
  {
    slug: "how-many-rolls-of-sod-for-500-sq-ft",
    question: "How many rolls of sod for 500 sq ft?",
    metaTitle: "How Many Rolls of Sod for 500 Sq Ft?",
    metaDesc:
      "500 square feet of lawn needs about 56 rolls of sod (each roll covers 9 sq ft). Add 5% for waste and cuts, making it 59 rolls total.",
    category: "Landscaping",
    directAnswer:
      "You need approximately 56 rolls of sod to cover 500 square feet. A standard sod roll is 2 feet wide × 5 feet long (10 sq ft) or 16 inches × 81 inches (9 sq ft) depending on the supplier. With 5% waste, order 59–62 rolls. Confirm your supplier's roll dimensions before ordering.",
    tableHeading: "Rolls of sod for 500 sq ft",
    tableLabel: "Roll size",
    table: [
      { label: "9 sq ft roll (16\"×81\")",   value: "56 rolls + 5% = 59" },
      { label: "10 sq ft roll (2'×5')",       value: "50 rolls + 5% = 53" },
      { label: "0.5 pallet (200–252 sq ft)",  value: "2 pallets needed" },
    ],
    howToSteps: [
      { text: "Confirm your sod supplier's roll size (usually 9–10 sq ft per roll)." },
      { text: "Divide 500 sq ft by roll size: 500 ÷ 9 = 55.6 → 56 rolls." },
      { text: "Add 5% for cuts and irregular edges: 56 × 1.05 = 58.8 → 59 rolls." },
      { text: "Alternatively: order 1.25 pallets if pallets are 400 sq ft each." },
    ],
    proTip:
      "Measure your lawn on a clear day and sketch the shape. Odd-shaped lawns waste more sod — add 10% instead of 5% for complex shapes with curves and angles.",
    relatedCalc: { slug: "sod-calculator", name: "Sod Calculator" },
    relatedFaqs: [
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
      { slug: "how-many-square-feet-does-a-roll-of-sod-cover", question: "How many square feet does a roll of sod cover?" },
    ],
  },

  // ─── 77. How many shingles for a 12x12 shed ──────────────────────────────
  {
    slug: "how-many-shingles-for-a-12x12-shed",
    question: "How many shingles for a 12×12 shed?",
    metaTitle: "How Many Shingles for a 12×12 Shed? (Bundles & Squares)",
    metaDesc:
      "A 12×12 shed with a simple gable roof needs 3–4 bundles of shingles (1–1.3 squares) depending on roof pitch. Steeper pitches require more material.",
    category: "Roofing",
    directAnswer:
      "A 12×12 shed (144 sq ft footprint) with a standard gable roof at 4/12 pitch needs approximately 3–4 bundles of shingles. The actual roof area is larger than the footprint: at 4/12 pitch, multiply by 1.054, giving about 152 sq ft of roof area = 1.5 squares = ~5 bundles. Add 10% waste.",
    tableHeading: "Shingle bundles for 12×12 shed",
    tableLabel: "Roof pitch",
    table: [
      { label: "3/12 pitch (low)",  value: "~4 bundles (1.3 squares)" },
      { label: "4/12 pitch",        value: "~5 bundles (1.6 squares)" },
      { label: "6/12 pitch",        value: "~6 bundles (2.0 squares)" },
      { label: "8/12 pitch (steep)", value: "~7 bundles (2.3 squares)" },
    ],
    howToSteps: [
      { text: "Footprint area: 12 × 12 = 144 sq ft (both slopes together)." },
      { text: "Apply pitch multiplier for 4/12 pitch: 144 × 1.054 = 151.8 sq ft." },
      { text: "Convert to roofing squares: 151.8 ÷ 100 = 1.52 squares." },
      { text: "Multiply by 3 bundles/square: 1.52 × 3 = 4.56 → 5 bundles." },
      { text: "Add 10% for ridge, starter, and waste: 5 × 1.10 = 5.5 → 6 bundles to be safe." },
    ],
    proTip:
      "Don't forget the ridge cap — a 12×12 shed gable has about 12 linear feet of ridge, requiring 1 bundle of ridge cap shingles (covers ~20 linear feet).",
    relatedCalc: { slug: "shingles-calculator", name: "Shingles Calculator" },
    relatedFaqs: [
      { slug: "how-many-bundles-of-shingles-for-a-10x10-shed", question: "How many bundles of shingles for a 10×10 shed?" },
      { slug: "how-many-bundles-of-shingles-for-a-12x16-shed", question: "How many bundles for a 12×16 shed?" },
    ],
  },

  // ─── 78. How many square feet does a roll of sod cover ───────────────────
  {
    slug: "how-many-square-feet-does-a-roll-of-sod-cover",
    question: "How many square feet does a roll of sod cover?",
    metaTitle: "How Many Square Feet Does a Roll of Sod Cover?",
    metaDesc:
      "A standard sod roll covers 9–10 square feet. Most rolls measure 2 feet × 5 feet (10 sq ft) or 16 inches × 81 inches (9 sq ft). Pallets cover 400–504 sq ft.",
    category: "Landscaping",
    directAnswer:
      "A standard sod roll covers 9–10 square feet. The most common sizes are 2 feet wide × 5 feet long (10 sq ft) and 16 inches wide × 81 inches long (approximately 9 sq ft). Supplier roll sizes vary, so confirm before ordering. A full pallet typically holds 50–56 rolls and covers 400–504 sq ft.",
    tableHeading: "Sod roll coverage",
    tableLabel: "Roll dimensions",
    table: [
      { label: "16\" × 81\" (standard)",  value: "9 sq ft per roll" },
      { label: "2' × 5' (common)",         value: "10 sq ft per roll" },
      { label: "2' × 4' (small)",          value: "8 sq ft per roll" },
      { label: "Full pallet",              value: "400–504 sq ft" },
    ],
    howToSteps: [
      { text: "Ask your sod supplier for their roll dimensions (they vary by farm)." },
      { text: "Calculate roll area: width × length = sq ft per roll." },
      { text: "Divide your lawn area by roll coverage to get roll count." },
      { text: "Add 5% for waste: (area ÷ sq ft per roll) × 1.05 = rolls to order." },
    ],
    proTip:
      "Sod rolls are heavy (20–40 lbs each) and should be installed within 24–48 hours of delivery. Order only what you can install in one day during hot weather.",
    relatedCalc: { slug: "sod-calculator", name: "Sod Calculator" },
    relatedFaqs: [
      { slug: "how-many-rolls-of-sod-for-500-sq-ft", question: "How many rolls of sod for 500 sq ft?" },
      { slug: "how-many-rolls-of-sod-for-1000-sq-ft", question: "How many rolls of sod for 1,000 sq ft?" },
    ],
  },

  // ─── 79. How many square feet does a ton of asphalt cover ────────────────
  {
    slug: "how-many-square-feet-does-a-ton-of-asphalt-cover",
    question: "How many square feet does a ton of asphalt cover?",
    metaTitle: "How Many Square Feet Does a Ton of Asphalt Cover?",
    metaDesc:
      "One ton of asphalt covers approximately 80 square feet at 2 inches thick, or 40 sq ft at 4 inches thick. Coverage varies by mix type and compaction.",
    category: "Masonry",
    directAnswer:
      "One ton of asphalt covers approximately 80 square feet at 2 inches thick, 54 square feet at 3 inches thick, or 40 square feet at 4 inches thick. Asphalt weighs about 145 lbs per cubic foot when compacted. A standard residential driveway at 2–3 inches thick uses 1 ton per 54–80 sq ft.",
    tableHeading: "Asphalt coverage per ton",
    tableLabel: "Compacted thickness",
    table: [
      { label: "1 inch",   value: "160 sq ft per ton" },
      { label: "1.5 inch", value: "107 sq ft per ton" },
      { label: "2 inches", value: "80 sq ft per ton" },
      { label: "3 inches", value: "54 sq ft per ton" },
      { label: "4 inches", value: "40 sq ft per ton" },
    ],
    howToSteps: [
      { text: "Asphalt density (compacted) = ~145 lbs per cubic foot." },
      { text: "One ton = 2,000 lbs ÷ 145 lbs/cu ft = 13.8 cubic feet per ton." },
      { text: "At 2\" thick (0.167 ft): 13.8 ÷ 0.167 = 82.6 sq ft per ton." },
      { text: "At 3\" thick (0.25 ft): 13.8 ÷ 0.25 = 55.2 sq ft per ton." },
      { text: "Add 10% to your tonnage estimate for compaction and waste." },
    ],
    proTip:
      "Hot mix asphalt compacts 15–20% when rolled — always order 15% more than your calculated volume. Cold patch asphalt compacts less uniformly and is only suitable for small repairs.",
    relatedCalc: { slug: "asphalt-calculator", name: "Asphalt Calculator" },
    relatedFaqs: [
      { slug: "how-thick-should-asphalt-be-for-a-driveway", question: "How thick should asphalt be for a driveway?" },
      { slug: "how-many-tons-of-gravel-for-a-driveway", question: "How many tons of gravel for a driveway?" },
    ],
  },

  // ─── 80. How many square feet in a roll of carpet ────────────────────────
  {
    slug: "how-many-square-feet-in-a-roll-of-carpet",
    question: "How many square feet in a roll of carpet?",
    metaTitle: "How Many Square Feet in a Roll of Carpet?",
    metaDesc:
      "A standard carpet roll is 12 feet wide and 100 feet long (1,200 sq ft). Rolls also come in 13.5-foot and 15-foot widths. Carpet is sold by the square yard.",
    category: "Flooring",
    directAnswer:
      "A standard carpet roll is 12 feet wide and typically 100 feet long, covering 1,200 square feet per roll. Rolls also come in 13.5-foot and 15-foot widths. Carpet is usually sold by the linear yard (3 feet of length from a 12-foot roll = 4 square yards = 36 sq ft), not by the roll.",
    tableHeading: "Carpet roll dimensions",
    tableLabel: "Roll width",
    table: [
      { label: "12 ft wide (standard)",     value: "100 ft long = 1,200 sq ft" },
      { label: "13.5 ft wide",              value: "100 ft long = 1,350 sq ft" },
      { label: "15 ft wide",               value: "100 ft long = 1,500 sq ft" },
      { label: "1 linear yard (12 ft wide)", value: "36 sq ft = 4 sq yd" },
    ],
    howToSteps: [
      { text: "Carpet is sold in linear yards from a 12-foot wide roll." },
      { text: "Convert room dimensions to linear yards: room length (ft) ÷ 3 = linear yards." },
      { text: "Add 10% for seams and waste." },
      { text: "In square yards: room area (sq ft) ÷ 9 × 1.10 = sq yd to order." },
      { text: "Example: 15×20 room = 300 sq ft ÷ 9 = 33.3 sq yd + 10% = 37 sq yd." },
    ],
    proTip:
      "Always measure in the direction the carpet will run — the 12-foot roll width may or may not align with your room's longer dimension. Minimize seams by running the carpet lengthwise in the room.",
    relatedCalc: { slug: "carpet-calculator", name: "Carpet Calculator" },
    relatedFaqs: [
      { slug: "how-many-square-yards-of-carpet-for-a-12x12-room", question: "How many sq yd of carpet for a 12×12 room?" },
      { slug: "how-many-square-feet-in-a-box-of-laminate-flooring", question: "How many sq ft in a box of laminate flooring?" },
    ],
  },

  // ─── 81. How many yards of concrete for a 30x30 slab ─────────────────────
  {
    slug: "how-many-yards-of-concrete-for-a-30x30-slab",
    question: "How many yards of concrete for a 30×30 slab?",
    metaTitle: "How Many Yards of Concrete for a 30×30 Slab?",
    metaDesc:
      "A 30×30 slab at 4 inches thick needs 11.1 cubic yards of concrete. At 6 inches thick, you need 16.7 yards. Always order 5–10% extra.",
    category: "Concrete",
    directAnswer:
      "A 30×30 foot slab at 4 inches thick requires approximately 11.1 cubic yards of concrete. At 6 inches thick (for a garage or heavy-use area), you need 16.7 cubic yards. Add 5–10% for waste and uneven subgrade, so order 12–13 yards at 4\" or 17–18 yards at 6\".",
    tableHeading: "Concrete for 30×30 slab",
    tableLabel: "Thickness",
    table: [
      { label: "4 inches",   value: "11.1 yd³ (+10% = 12.2 yd³)" },
      { label: "5 inches",   value: "13.9 yd³ (+10% = 15.3 yd³)" },
      { label: "6 inches",   value: "16.7 yd³ (+10% = 18.3 yd³)" },
    ],
    howToSteps: [
      { text: "Calculate volume: 30 × 30 × (4 ÷ 12) = 900 × 0.333 = 300 cubic feet." },
      { text: "Convert to cubic yards: 300 ÷ 27 = 11.11 yd³." },
      { text: "Add 10% for waste: 11.11 × 1.10 = 12.2 yd³." },
      { text: "A 30×30 slab requires 2 full concrete truck loads (typically 8–10 yd per load)." },
    ],
    proTip:
      "For a garage floor (30×30), use 6-inch thickness with rebar on 18\" centers and 4,000 PSI concrete. This supports vehicle traffic for decades without cracking.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-much-concrete-for-a-20x20-slab", question: "How much concrete for a 20×20 slab?" },
      { slug: "how-thick-should-a-concrete-driveway-be", question: "How thick should a concrete driveway be?" },
    ],
  },

  // ─── 82. How much concrete for deck footings ─────────────────────────────
  {
    slug: "how-much-concrete-for-deck-footings",
    question: "How much concrete for deck footings?",
    metaTitle: "How Much Concrete for Deck Footings? (Per Footing Guide)",
    metaDesc:
      "A typical 12-inch diameter deck footing 42 inches deep needs 2.5 bags of 80-lb concrete. An 8-foot deck with 4 footings needs about 10 bags total.",
    category: "Concrete",
    directAnswer:
      "A standard 12-inch diameter deck footing 42 inches deep (typical frost depth) requires about 2.5 bags of 80-lb concrete mix per footing. A typical 12×16-foot deck with 6 footings needs 15 bags total. Larger 16-inch diameter footings use 4–5 bags each.",
    tableHeading: "Concrete bags per footing",
    tableLabel: "Footing diameter × depth",
    table: [
      { label: "10\" dia × 36\" deep",  value: "1.5 bags (80-lb)" },
      { label: "12\" dia × 42\" deep",  value: "2.5 bags (80-lb)" },
      { label: "12\" dia × 48\" deep",  value: "3 bags (80-lb)" },
      { label: "16\" dia × 42\" deep",  value: "4.5 bags (80-lb)" },
      { label: "16\" dia × 48\" deep",  value: "5 bags (80-lb)" },
    ],
    howToSteps: [
      { text: "Find your local frost depth (required footing depth) — usually 36–48\" in northern states." },
      { text: "Choose footing diameter: minimum 10\" for typical decks, 12–16\" for heavy spans." },
      { text: "Calculate volume: π × (radius)² × depth (all in feet)." },
      { text: "12\" dia × 42\" deep: π × 0.25 × 3.5 = 2.75 cu ft ÷ 0.60 cu ft/bag = 4.6 bags." },
      { text: "Multiply by number of footings and add 10% for spillage." },
    ],
    proTip:
      "Use Quikrete Fast-Setting Concrete for deck footings — pour it dry, add water on top, no mixing needed. Set time is 20–40 minutes and you can install posts the same day.",
    relatedCalc: { slug: "concrete-calculator", name: "Concrete Calculator" },
    relatedFaqs: [
      { slug: "how-much-concrete-for-a-6x6-post", question: "How much concrete for a 6×6 post?" },
      { slug: "how-many-bags-of-concrete-for-a-fence-post", question: "How many bags for a fence post?" },
    ],
  },

  // ─── 83. How much gravel for a 100-foot driveway ─────────────────────────
  {
    slug: "how-much-gravel-for-a-100-foot-driveway",
    question: "How much gravel for a 100-foot driveway?",
    metaTitle: "How Much Gravel for a 100-Foot Driveway? (Tons & Yards)",
    metaDesc:
      "A 100-foot driveway (12 ft wide, 4 in deep) needs 14.8 cubic yards or about 21 tons of gravel. See amounts by width and depth.",
    category: "Landscaping",
    directAnswer:
      "A 100-foot driveway that is 12 feet wide and 4 inches deep needs approximately 14.8 cubic yards or about 21 tons of gravel. At 6-inch depth (recommended for new driveways), plan on 22 cubic yards or 31 tons.",
    tableHeading: "Gravel for 100-foot driveway",
    tableLabel: "Width × depth",
    table: [
      { label: "10 ft wide × 4\" deep",  value: "12.4 yd³ / 17 tons" },
      { label: "12 ft wide × 4\" deep",  value: "14.8 yd³ / 21 tons" },
      { label: "12 ft wide × 6\" deep",  value: "22.2 yd³ / 31 tons" },
      { label: "14 ft wide × 4\" deep",  value: "17.3 yd³ / 24 tons" },
    ],
    howToSteps: [
      { text: "Calculate volume: 100 ft × 12 ft × (4\" ÷ 12) = 100 × 12 × 0.333 = 400 cu ft." },
      { text: "Convert to cubic yards: 400 ÷ 27 = 14.8 yd³." },
      { text: "Convert to tons: 14.8 × 1.4 (tons/yd³ for crushed stone) = 20.7 tons." },
      { text: "Add 10% for spreading and compaction loss: 20.7 × 1.10 = 22.8 → 23 tons." },
    ],
    proTip:
      "A 100-foot driveway is right on the edge of what's cost-effective to haul in a standard tri-axle truck (14 tons). You'll likely need 2 loads — ask your supplier about the cost difference between 1 large semi-load vs. 2 tri-axle loads.",
    relatedCalc: { slug: "gravel-calculator", name: "Gravel Calculator" },
    relatedFaqs: [
      { slug: "how-many-tons-of-gravel-for-a-driveway", question: "How many tons of gravel for a driveway?" },
      { slug: "how-much-gravel-under-concrete-slab", question: "How much gravel under a concrete slab?" },
    ],
  },

  // ─── 84. How much grout for tile floor ───────────────────────────────────
  {
    slug: "how-much-grout-for-tile-floor",
    question: "How much grout for a tile floor?",
    metaTitle: "How Much Grout for a Tile Floor? (Bags by Tile Size)",
    metaDesc:
      "A 10×10 tile floor (100 sq ft) needs 1–2 bags of grout depending on tile size and joint width. Larger tiles with narrow joints use less grout.",
    category: "Flooring",
    directAnswer:
      "A 100 sq ft tile floor with 12×12-inch tiles and 3/16-inch joints needs about 1 bag (25 lbs) of sanded grout. Smaller tiles or wider joints require more grout — a floor with 4×4 tiles may need 3 bags. Use the tile manufacturer's grout coverage chart for exact quantities.",
    tableHeading: "Grout bags for 100 sq ft",
    tableLabel: "Tile size × joint width",
    table: [
      { label: "4×4\" tile, 1/8\" joint",   value: "3 bags (25 lbs each)" },
      { label: "12×12\" tile, 3/16\" joint", value: "1 bag" },
      { label: "12×12\" tile, 1/4\" joint",  value: "1.5 bags" },
      { label: "18×18\" tile, 3/16\" joint", value: "0.75 bags" },
      { label: "24×24\" tile, 1/8\" joint",  value: "0.5 bags" },
    ],
    howToSteps: [
      { text: "Find the grout coverage on your grout bag label — it lists sq ft per bag by tile size and joint width." },
      { text: "If unavailable, use the formula: lbs per sq ft = (tile perimeter × joint depth × joint width) ÷ (tile area × 144) × grout density." },
      { text: "Simpler rule: add 10% to calculated amount for waste and touch-ups." },
      { text: "Mix in small batches — grout has a 30-minute working time." },
    ],
    proTip:
      "Buy grout from the same dye lot for consistency. Grout color shifts slightly between lots — even matching bags from different batches can show variation after installation.",
    relatedCalc: { slug: "tile-calculator", name: "Tile Calculator" },
    relatedFaqs: [
      { slug: "how-many-tiles-for-12x12-room", question: "How many tiles for a 12×12 room?" },
      { slug: "how-many-bags-of-sand-for-pavers", question: "How many bags of sand for pavers?" },
    ],
  },

  // ─── 85. How much mulch for 500 square feet ──────────────────────────────
  {
    slug: "how-much-mulch-for-500-square-feet",
    question: "How much mulch for 500 square feet?",
    metaTitle: "How Much Mulch for 500 Square Feet? (Bags & Cubic Yards)",
    metaDesc:
      "500 square feet of mulch at 3 inches deep needs 4.6 cubic yards or about 62 bags (2 cu ft each). At 2 inches, you need 3.1 cubic yards or 42 bags.",
    category: "Landscaping",
    directAnswer:
      "For 500 square feet at 3 inches deep, you need approximately 4.6 cubic yards of mulch or about 62 bags (2 cu ft bags). At 2 inches deep, you need 3.1 cubic yards or 42 bags. Buying in bulk (by the cubic yard) is significantly cheaper than bagged mulch for this quantity.",
    tableHeading: "Mulch for 500 sq ft",
    tableLabel: "Depth",
    table: [
      { label: "2 inches", value: "3.1 yd³ / 42 bags (2 cu ft)" },
      { label: "3 inches", value: "4.6 yd³ / 62 bags (2 cu ft)" },
      { label: "4 inches", value: "6.2 yd³ / 83 bags (2 cu ft)" },
    ],
    howToSteps: [
      { text: "Calculate volume: 500 sq ft × (3\" ÷ 12) = 500 × 0.25 = 125 cu ft." },
      { text: "Convert to cubic yards: 125 ÷ 27 = 4.63 yd³." },
      { text: "In bags: 125 cu ft ÷ 2 cu ft/bag = 62.5 → 63 bags." },
      { text: "Order 5 cubic yards in bulk for a standard delivery (most companies have a 3 yd minimum)." },
    ],
    proTip:
      "At 500 sq ft, bulk mulch saves significantly over bags. Expect to pay $25–45 per cubic yard for bulk vs. $4–6 per bag ($248–378 for 62 bags). You save $100+ by going bulk.",
    relatedCalc: { slug: "mulch-calculator", name: "Mulch Calculator" },
    relatedFaqs: [
      { slug: "how-much-mulch-for-300-square-feet", question: "How much mulch for 300 square feet?" },
      { slug: "how-much-mulch-for-100-square-feet", question: "How much mulch for 100 square feet?" },
    ],
  },

  // ─── 86. How many tons in a cubic yard of dirt ───────────────────────────
  {
    slug: "how-many-tons-in-a-cubic-yard-of-dirt",
    question: "How many tons in a cubic yard of dirt?",
    metaTitle: "How Many Tons in a Cubic Yard of Dirt?",
    metaDesc:
      "A cubic yard of topsoil weighs about 1.1 tons (2,200 lbs). Compacted fill dirt weighs 1.25 tons per yard. Wet or clay soil can reach 1.5–1.7 tons per yard.",
    category: "Concrete",
    directAnswer:
      "A cubic yard of average topsoil weighs approximately 1.1 tons (2,200 lbs). Dry fill dirt weighs about 1.0–1.1 tons per cubic yard, while compacted or wet clay-heavy soil can weigh 1.5–1.7 tons per yard. Sandy soil is on the lighter end at 1.0–1.1 tons per yard.",
    tableHeading: "Weight per cubic yard",
    tableLabel: "Soil type",
    table: [
      { label: "Dry topsoil",        value: "~1.1 tons (2,200 lbs)" },
      { label: "Moist topsoil",      value: "~1.35 tons (2,700 lbs)" },
      { label: "Dry fill dirt",      value: "~1.0–1.1 tons" },
      { label: "Wet clay soil",      value: "~1.5–1.7 tons" },
      { label: "Sandy loam",         value: "~1.1–1.3 tons" },
      { label: "Compacted fill",     value: "~1.25–1.35 tons" },
    ],
    howToSteps: [
      { text: "One cubic yard = 27 cubic feet." },
      { text: "Typical topsoil density: 80–90 lbs per cubic foot." },
      { text: "27 × 85 lbs/cu ft = 2,295 lbs ≈ 1.15 tons per cubic yard." },
      { text: "For wet clay: 27 × 115 lbs/cu ft = 3,105 lbs ≈ 1.55 tons per yard." },
      { text: "To convert tons to cubic yards: tons ÷ 1.1 = approximate cubic yards of topsoil." },
    ],
    proTip:
      "When ordering topsoil or fill dirt, ask for the weight per yard from your supplier — it varies significantly with moisture content. Fresh-delivered soil is often much heavier than dry stored soil.",
    relatedCalc: { slug: "topsoil-calculator", name: "Topsoil Calculator" },
    relatedFaqs: [
      { slug: "how-many-cubic-yards-in-a-dump-truck-load", question: "How many cubic yards in a dump truck load?" },
      { slug: "how-many-wheelbarrow-loads-in-a-cubic-yard", question: "How many wheelbarrow loads in a cubic yard?" },
    ],
  },
];

export const ALL_FAQ_CATEGORIES: FaqCategory[] = [
  "Paint", "Concrete", "Framing", "Roofing", "Flooring", "Landscaping", "Masonry",
];

export function getFaq(slug: string): Faq | undefined {
  return FAQS.find(f => f.slug === slug);
}
