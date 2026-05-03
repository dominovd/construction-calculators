"use client";

import { useState } from "react";

const TILE_SIZES = [
  { label: '12"×12"', w: 12, h: 12 },
  { label: '18"×18"', w: 18, h: 18 },
  { label: '24"×24"', w: 24, h: 24 },
  { label: '12"×24"', w: 12, h: 24 },
  { label: '6"×6"',  w: 6,  h: 6  },
  { label: '6"×24"', w: 6,  h: 24 },
];

export function TileCalculator() {
  const [length, setLength]   = useState("10");
  const [width, setWidth]     = useState("12");
  const [tileIdx, setTileIdx] = useState(0);
  const [waste, setWaste]     = useState("10");
  const [tilesPerBox, setTilesPerBox] = useState("6");
  const [pricePerBox, setPricePerBox] = useState("35");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const wPct = parseFloat(waste) || 0;
  const tpb = parseFloat(tilesPerBox) || 1;
  const ppb = parseFloat(pricePerBox) || 0;
  const tile = TILE_SIZES[tileIdx];

  const areaSqFt      = l * w;
  const areaWithWaste = areaSqFt * (1 + wPct / 100);
  const tileSqFt      = (tile.w * tile.h) / 144;
  const tilesNeeded   = Math.ceil(areaWithWaste / tileSqFt);
  const boxesNeeded   = Math.ceil(tilesNeeded / tpb);
  const totalCost     = boxesNeeded * ppb;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Tile Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Tile Size</label>
          <div className="flex flex-wrap gap-2">
            {TILE_SIZES.map((t, i) => (
              <button key={t.label} onClick={() => setTileIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === tileIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Room Length (ft)",  value: length,      setter: setLength },
            { label: "Room Width (ft)",   value: width,       setter: setWidth },
            { label: "Waste Factor (%)",  value: waste,       setter: setWaste },
            { label: "Tiles per Box",     value: tilesPerBox, setter: setTilesPerBox },
            { label: "Price per Box ($)", value: pricePerBox, setter: setPricePerBox },
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
            { label: "Room Area",   value: `${areaSqFt.toFixed(0)} sq ft`,    sub: "total area" },
            { label: "With Waste",  value: `${areaWithWaste.toFixed(0)} sq ft`, sub: `+${waste}% waste` },
            { label: "Tiles Needed", value: tilesNeeded.toLocaleString(),       sub: tile.label },
            { label: "Boxes",       value: boxesNeeded.toLocaleString(),        sub: ppb > 0 ? `$${totalCost.toFixed(0)} total` : `${tpb} tiles/box` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {tilesNeeded > 0 && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            One {tile.label} tile covers <strong>{tileSqFt.toFixed(3)} sq ft</strong>. Order <strong>{boxesNeeded} boxes</strong> — always buy an extra box for future repairs.
          </div>
        )}
      </div>
    </div>
  );
}
