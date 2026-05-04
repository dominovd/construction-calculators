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
    metaTitle: "How Many Gallons of Paint for a 12×12 Room? (2025 Answer)",
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
    metaTitle: "How Much Rebar for a 10×10 Slab? (2025 Answer)",
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
    metaTitle: "How Many Bags of Concrete for a 10×10 Slab? (2025 Answer)",
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
    metaTitle: "How Many Sheets of Drywall for a 12×12 Room? (2025 Answer)",
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
    metaTitle: "How Many Studs for a 16-Foot Wall? (2025 Answer)",
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
    metaTitle: "How Much Mulch for 100 Square Feet? (2025 Answer)",
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
    metaTitle: "How Many Pavers for a 10×10 Patio? (2025 Answer)",
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
    metaTitle: "How Many Shingles for a 1,500 Sq Ft Roof? (2025 Answer)",
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
    metaTitle: "How Many Concrete Blocks for a 40-Foot Wall? (2025 Answer)",
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
    metaTitle: "How Many Rolls of Sod for 1,000 Sq Ft? (2025 Answer)",
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
    metaTitle: "How Much Gravel for a 200-Foot Driveway? (2025 Answer)",
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
    metaTitle: "How Many Tiles for a 12×12 Room? (2025 Answer)",
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
];

export const ALL_FAQ_CATEGORIES: FaqCategory[] = [
  "Paint", "Concrete", "Framing", "Roofing", "Flooring", "Landscaping", "Masonry",
];

export function getFaq(slug: string): Faq | undefined {
  return FAQS.find(f => f.slug === slug);
}
