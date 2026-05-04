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
    metaTitle: "How Many 80lb Bags of Concrete in a Yard? (2025 Answer)",
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
    metaTitle: "How Many Gallons of Paint for a Bedroom? (2025 Answer)",
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
    metaTitle: "How Much Does a Square of Shingles Cover? (2025)",
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
    metaTitle: "How Many Bags of Concrete for a Fence Post? (2025)",
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
    metaTitle: "How Many Deck Screws Per Board? (2025 Guide)",
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
    metaTitle: "How Many Bags of Quikrete Per Fence Post? (2025)",
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
    metaTitle: "How Many Gallons of Paint for a 10×10 Room? (2025)",
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
    metaTitle: "How Much Mulch for 200 Square Feet? (2025 Answer)",
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
    metaTitle: "How Many Bags of Concrete for a 12×12 Slab? (2025)",
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
    metaTitle: "How Much Concrete for a 20×20 Slab? (2025 Answer)",
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
    metaTitle: "How Many Deck Boards for a 12×12 Deck? (2025)",
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
    metaTitle: "How Many Deck Boards for a 16×20 Deck? (2025)",
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
    metaTitle: "How Many Fence Pickets for 100 Feet of Fence? (2025)",
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
    metaTitle: "How Many Shingles for a 24×24 Garage? (2025 Answer)",
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
    metaTitle: "How Many Studs for a 12×12 Room? (2025 Answer)",
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
    metaTitle: "How Much Drywall for a 2,000 Sq Ft House? (2025)",
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
    metaTitle: "How Much Paint for a 12×15 Room? (2025 Answer)",
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
    metaTitle: "How Much Rebar for a Concrete Driveway? (2025)",
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
    metaTitle: "How Many Bundles of Shingles for 1,000 Sq Ft? (2025)",
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
    metaTitle: "How Much Pea Gravel for a 10×10 Area? (2025 Answer)",
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
    metaTitle: "How Many Bricks for a 10×10 Patio? (2025 Answer)",
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
    metaTitle: "How Many Bags of Quikrete for a 10×10 Slab? (2025)",
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
];

export const ALL_FAQ_CATEGORIES: FaqCategory[] = [
  "Paint", "Concrete", "Framing", "Roofing", "Flooring", "Landscaping", "Masonry",
];

export function getFaq(slug: string): Faq | undefined {
  return FAQS.find(f => f.slug === slug);
}
