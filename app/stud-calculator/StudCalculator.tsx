"use client";

import { useState } from "react";

export function StudCalculator() {
  const [wallLength, setWallLength] = useState("12");
  const [spacing, setSpacing] = useState<16 | 24>(16);
  const [extraWalls, setExtraWalls] = useState("0");
  const [openings, setOpenings] = useState("0");

  const len = parseFloat(wallLength) || 0;
  const extra = parseInt(extraWalls) || 0;
  const open = parseInt(openings) || 0;

  const walls = Math.max(1, extra + 1);
  const basePerWall = Math.ceil((len * 12) / spacing) + 1;
  const baseTotal = basePerWall * walls;
  const cornerStuds = extra * 3;
  const openingStuds = open * 4;
  const subtotal = baseTotal + cornerStuds + openingStuds;
  const withWaste = Math.ceil(subtotal * 1.1);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Stud / Framing Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Wall length (feet)</label>
          <input type="number" min="0" step="0.5" value={wallLength}
            onChange={(e) => setWallLength(e.target.value)} className="calc-input max-w-xs" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Stud spacing</label>
          <div className="flex gap-3">
            {([16, 24] as const).map((s) => (
              <button key={s} onClick={() => setSpacing(s)}
                className={`flex-1 max-w-[120px] py-2 rounded-lg border text-sm font-medium transition-colors ${
                  spacing === s ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-700 hover:border-blue-400"
                }`}>
                {s}&quot; OC
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {spacing === 16 ? "Standard — load-bearing & exterior walls" : "Economy — non-load-bearing interior walls"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional walls</label>
            <input type="number" min="0" value={extraWalls}
              onChange={(e) => setExtraWalls(e.target.value)} className="calc-input" placeholder="0" />
            <p className="text-xs text-gray-400 mt-1">Same length as above</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Doors / windows</label>
            <input type="number" min="0" value={openings}
              onChange={(e) => setOpenings(e.target.value)} className="calc-input" placeholder="0" />
            <p className="text-xs text-gray-400 mt-1">Each adds ~4 extra studs</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-2">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Studs Needed</p>
            <p className="text-2xl font-bold text-blue-800">{subtotal}</p>
            <p className="text-xs text-blue-500 mt-0.5">studs</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">With 10% extra</p>
            <p className="text-2xl font-bold text-blue-800">{withWaste}</p>
            <p className="text-xs text-blue-500 mt-0.5">recommended</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">Spacing</p>
            <p className="text-2xl font-bold text-blue-800">{spacing}&quot;</p>
            <p className="text-xs text-blue-500 mt-0.5">on center</p>
          </div>
        </div>

        {(cornerStuds > 0 || openingStuds > 0) && (
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-3 text-xs text-gray-500 space-y-1">
            <p className="font-medium text-gray-600 mb-1">Breakdown:</p>
            <p>Wall studs: {baseTotal}</p>
            {cornerStuds > 0 && <p>Corner framing: +{cornerStuds}</p>}
            {openingStuds > 0 && <p>Door/window framing: +{openingStuds}</p>}
            <p className="font-medium text-gray-700 border-t border-gray-200 pt-1 mt-1">
              Total (no waste): {subtotal} studs
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
