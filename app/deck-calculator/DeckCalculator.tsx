"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

const BOARD_SIZES = [
  { label: "5/4×6 (5.5\")", widthIn: 5.5 },
  { label: "2×6 (5.5\")",   widthIn: 5.5 },
  { label: "2×4 (3.5\")",   widthIn: 3.5 },
  { label: "2×8 (7.25\")",  widthIn: 7.25 },
];

export function DeckCalculator() {
  const [deckLength, setDeckLength] = useState("16");
  const [deckWidth, setDeckWidth] = useState("12");
  const [boardIdx, setBoardIdx] = useState(0);
  const [gap, setGap] = useState("0.25");
  const [waste, setWaste] = useState("10");
  const [pricePerLf, setPricePerLf] = useState(String(getRetailDefault("deck-board-pt-1x6-lf")));

  const l = parseFloat(deckLength) || 0;
  const w = parseFloat(deckWidth) || 0;
  const g = parseFloat(gap) || 0;
  const wasteP = parseFloat(waste) || 0;
  const price = parseFloat(pricePerLf) || 0;
  const board = BOARD_SIZES[boardIdx];

  const sqFt = l * w;
  const boardSpacingFt = (board.widthIn + g) / 12;
  const numBoards = Math.ceil((w / boardSpacingFt) * (1 + wasteP / 100));
  const linearFt = numBoards * l;
  const totalCost = linearFt * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Deck Calculator</h2>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1">Decking Board Size</label>
          <div className="flex flex-wrap gap-2">
            {BOARD_SIZES.map((b, i) => (
              <button key={b.label} onClick={() => setBoardIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === boardIdx ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>
                {b.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Deck Length (ft)",  value: deckLength, setter: setDeckLength },
            { label: "Deck Width (ft)",   value: deckWidth,  setter: setDeckWidth },
            { label: "Board Gap (in)",    value: gap,        setter: setGap },
            { label: "Waste %",          value: waste,      setter: setWaste, step: "1" },
            { label: "Price / lin ft ($)", value: pricePerLf, setter: setPricePerLf },
          ].map(({ label, value, setter, step }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step={step || "0.25"} value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Deck Area",    value: `${sqFt.toFixed(0)}`, sub: "sq ft" },
            { label: "Boards",       value: String(numBoards),    sub: `${board.widthIn}\" wide` },
            { label: "Linear Feet",  value: linearFt.toFixed(0),  sub: "ft total" },
            { label: "Est. Cost",    value: `$${totalCost.toFixed(0)}`, sub: "decking material" },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {sqFt > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Decking only. Add framing lumber (joists, beams, posts), hardware, and fasteners separately.
          </div>
        )}
      </div>
    </div>
  );
}
