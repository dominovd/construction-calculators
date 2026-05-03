"use client";

import { useState } from "react";

const BLOCK_TYPES = [
  { label: "Standard (12\"×4\"×6\")",  w: 12, h: 4,  d: 6,  weight: 28 },
  { label: "Large (18\"×6\"×6\")",     w: 18, h: 6,  d: 6,  weight: 60 },
  { label: "Allan Block (12\"×4\"×8\")", w: 12, h: 4, d: 8, weight: 35 },
  { label: "Cap Block (12\"×2\"×6\")", w: 12, h: 2,  d: 6,  weight: 14 },
];

export function RetainingWallCalculator() {
  const [wallLength, setWallLength] = useState("40");
  const [wallHeight, setWallHeight] = useState("24");
  const [blockIdx, setBlockIdx]     = useState(0);
  const [priceBlock, setPriceBlock] = useState("3.50");

  const l     = parseFloat(wallLength) || 0;
  const h     = parseFloat(wallHeight) || 0; // inches
  const price = parseFloat(priceBlock) || 0;
  const block = BLOCK_TYPES[blockIdx];

  const rowsNeeded   = Math.ceil(h / block.h);
  const blocksPerRow = Math.ceil((l * 12) / block.w);
  const totalBlocks  = rowsNeeded * blocksPerRow;
  const totalWeight  = (totalBlocks * block.weight) / 2000; // tons
  const totalCost    = totalBlocks * price;

  // Gravel base: 6" deep × 1 ft behind wall
  const gravelYds = (l * 1 * (6 / 12)) / 27;
  // Drainage gravel behind wall: 1 ft wide × full height
  const drainYds  = (l * 1 * (h / 12)) / 27;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Retaining Wall Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Block Type</label>
          <div className="flex flex-wrap gap-2">
            {BLOCK_TYPES.map((b, i) => (
              <button key={b.label} onClick={() => setBlockIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === blockIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{b.label}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Wall Length (ft)",   value: wallLength,  setter: setWallLength },
            { label: "Wall Height (in)",   value: wallHeight,  setter: setWallHeight },
            { label: "Price / Block ($)",  value: priceBlock,  setter: setPriceBlock },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="1" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Rows",          value: rowsNeeded.toString(),          sub: `${block.h}" per row` },
            { label: "Blocks / Row",  value: blocksPerRow.toLocaleString(),  sub: `${block.w}" per block` },
            { label: "Total Blocks",  value: totalBlocks.toLocaleString(),   sub: `${totalWeight.toFixed(1)} tons` },
            { label: "Est. Cost",     value: `$${totalCost.toFixed(0)}`,     sub: `at $${priceBlock}/block` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {totalBlocks > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-1">Base & drainage materials:</p>
            <p>Compacted gravel base (6″ deep): <strong>{gravelYds.toFixed(2)} yd³</strong></p>
            <p>Drainage gravel behind wall: <strong>{drainYds.toFixed(2)} yd³</strong></p>
            <p className="text-gray-400 mt-1">Add filter fabric between soil and drainage gravel.</p>
          </div>
        )}
      </div>
    </div>
  );
}
