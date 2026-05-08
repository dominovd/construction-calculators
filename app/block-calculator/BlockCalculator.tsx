"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const BLOCK_TYPES = [
  { label: "Standard CMU (8\"×8\"×16\")",   w: 16, h: 8,  area: 0.889 }, // 128 sq in = 0.889 sq ft
  { label: "Half Block (8\"×8\"×8\")",       w: 8,  h: 8,  area: 0.444 },
  { label: "4\" CMU (4\"×8\"×16\")",         w: 16, h: 8,  area: 0.889 },
  { label: "12\" CMU (12\"×8\"×16\")",       w: 16, h: 8,  area: 0.889 },
  { label: "Solid Brick (2¼\"×3¾\"×8\")",   w: 8,  h: 2.25, area: 0.125 },
];

// Mortar joint: 3/8" standard
const JOINT = 0.375;

export function BlockCalculator() {
  const [length, setLength]     = useState("20");
  const [height, setHeight]     = useState("8");
  const [blockIdx, setBlockIdx] = useState(0);
  const [waste, setWaste]       = useState("5");
  const [priceBlock, setPriceBlock] = useState(String(getRetailDefault("cmu-block-8x8x16")));
  const [priceMortar, setPriceMortar] = useState(String(getRetailDefault("mortar-bag-70lb")));

  const l     = parseFloat(length)     || 0;
  const h     = parseFloat(height)     || 0;
  const wPct  = parseFloat(waste)      || 0;
  const pBlk  = parseFloat(priceBlock) || 0;
  const pMort = parseFloat(priceMortar)|| 0;

  const block = BLOCK_TYPES[blockIdx];

  // Wall area in sq ft
  const wallArea = l * h;

  // Blocks per sq ft: account for mortar joint
  const blockWidthFt  = (block.w + JOINT) / 12;
  const blockHeightFt = (block.h + JOINT) / 12;
  const blocksPerSqFt = 1 / (blockWidthFt * blockHeightFt);

  const blocksNet   = wallArea * blocksPerSqFt;
  const blocksTotal = Math.ceil(blocksNet * (1 + wPct / 100));

  // Mortar: ~3 bags per 100 blocks for CMU
  const mortarBags = Math.ceil(blocksTotal * 0.03);

  const blockCost  = blocksTotal * pBlk;
  const mortarCost = mortarBags * pMort;
  const totalCost  = blockCost + mortarCost;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Block Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Block type selector */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Block / Brick Type</label>
          <div className="flex flex-wrap gap-2">
            {BLOCK_TYPES.map((b, i) => (
              <button key={b.label} onClick={() => setBlockIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === blockIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{b.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Wall Length (ft)",  value: length,     setter: setLength },
            { label: "Wall Height (ft)",  value: height,     setter: setHeight },
            { label: "Waste (%)",         value: waste,      setter: setWaste },
            { label: "Price / Block ($)", value: priceBlock, setter: setPriceBlock },
            { label: "Mortar Bag ($)",    value: priceMortar,setter: setPriceMortar },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Wall Area",      value: `${wallArea.toFixed(0)} sq ft`,       sub: `${l}′ × ${h}′` },
            { label: "Blocks Needed",  value: blocksTotal.toLocaleString(),          sub: `+${waste}% waste` },
            { label: "Mortar Bags",    value: mortarBags.toLocaleString(),           sub: "80-lb bags" },
            { label: "Est. Cost",      value: `$${totalCost.toFixed(0)}`,            sub: `blocks + mortar` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {blocksTotal > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-1">Material breakdown:</p>
            <p>Blocks: <strong>{blocksTotal.toLocaleString()}</strong> at ${priceBlock} each = <strong>${blockCost.toFixed(0)}</strong></p>
            <p>Mortar: <strong>{mortarBags}</strong> bags at ${priceMortar} each = <strong>${mortarCost.toFixed(0)}</strong></p>
            <p className="text-gray-400 mt-1">Does not include rebar, grout, or foundation costs.</p>
          </div>
        )}
      </div>
    </div>
  );
}
