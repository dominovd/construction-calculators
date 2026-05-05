"use client";

import { useState } from "react";

const HOLE_DIAMETERS = [8, 10, 12, 14] as const;
type HoleDiameter = (typeof HOLE_DIAMETERS)[number];

const BAG_SIZES = [
  { label: "50 lb", cuFt: 0.375 },
  { label: "60 lb", cuFt: 0.45 },
  { label: "80 lb", cuFt: 0.60 },
] as const;

const POST_SIZES = [
  { label: "4×4", areaFt2: (3.5 / 12) * (3.5 / 12) },
  { label: "6×6", areaFt2: (5.5 / 12) * (5.5 / 12) },
  { label: '4" round', areaFt2: Math.PI * (2 / 12) * (2 / 12) },
  { label: '6" round', areaFt2: Math.PI * (3 / 12) * (3 / 12) },
] as const;

export function FencePostConcreteCalculator() {
  const [numPosts, setNumPosts] = useState("10");
  const [holeDiameter, setHoleDiameter] = useState<HoleDiameter>(10);
  const [holeDepth, setHoleDepth] = useState("3");
  const [bagSizeIdx, setBagSizeIdx] = useState(2); // default 80 lb
  const [postSizeIdx, setPostSizeIdx] = useState(0); // default 4x4
  const [pricePerBag, setPricePerBag] = useState("8");

  const posts = Math.max(0, Math.round(parseFloat(numPosts) || 0));
  const depth = parseFloat(holeDepth) || 0;
  const price = parseFloat(pricePerBag) || 0;

  const bag = BAG_SIZES[bagSizeIdx];
  const postArea = POST_SIZES[postSizeIdx].areaFt2;
  const holeRadius = holeDiameter / 2 / 12; // convert inches to feet
  const holeArea = Math.PI * holeRadius * holeRadius;
  const netArea = Math.max(0, holeArea - postArea);
  const cuFtPerHole = netArea * depth;
  const totalCuFt = cuFtPerHole * posts;
  const totalBags = Math.ceil(totalCuFt / bag.cuFt);
  const totalCost = totalBags * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Fence Post Concrete Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Number of posts + depth + price row */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Number of Posts</label>
            <input
              type="number"
              inputMode="numeric"
              min="1"
              step="1"
              value={numPosts}
              onChange={(e) => setNumPosts(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Hole Depth (ft)</label>
            <input
              type="number"
              inputMode="decimal"
              min="1"
              step="0.5"
              value={holeDepth}
              onChange={(e) => setHoleDepth(e.target.value)}
              className="calc-input text-center"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Price per Bag ($)</label>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.50"
              value={pricePerBag}
              onChange={(e) => setPricePerBag(e.target.value)}
              className="calc-input text-center"
            />
          </div>
        </div>

        {/* Hole diameter toggle */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Post Hole Diameter</label>
          <div className="flex flex-wrap gap-2">
            {HOLE_DIAMETERS.map((d) => (
              <button
                key={d}
                onClick={() => setHoleDiameter(d)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  d === holeDiameter
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {d}&Prime;
              </button>
            ))}
          </div>
        </div>

        {/* Bag size toggle */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Bag Size</label>
          <div className="flex flex-wrap gap-2">
            {BAG_SIZES.map((b, i) => (
              <button
                key={b.label}
                onClick={() => setBagSizeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === bagSizeIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {b.label} ({b.cuFt} cu&nbsp;ft)
              </button>
            ))}
          </div>
        </div>

        {/* Post size toggle */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Post Size</label>
          <div className="flex flex-wrap gap-2">
            {POST_SIZES.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setPostSizeIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === postSizeIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-3 gap-3 pt-1">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Cu ft / Hole</p>
            <p className="text-2xl font-bold text-blue-800">{cuFtPerHole.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">cubic feet</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Total Bags</p>
            <p className="text-2xl font-bold text-blue-800">{totalBags}</p>
            <p className="text-xs text-blue-500 mt-0.5">{bag.label} bags</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Est. Cost</p>
            <p className="text-2xl font-bold text-blue-800">${totalCost.toFixed(0)}</p>
            <p className="text-xs text-blue-500 mt-0.5">at ${price.toFixed(2)}/bag</p>
          </div>
        </div>

        {/* Amber tip */}
        <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
          <strong className="text-amber-800">Tip:</strong> Order 10% extra bags to account for
          uneven holes and spillage. For {posts} posts, consider buying{" "}
          <strong>{Math.ceil(totalBags * 1.1)}</strong> bags total.
        </div>
      </div>
    </div>
  );
}
