"use client";

import { useState } from "react";

export function CarpetCalculator() {
  const [length, setLength]   = useState("15");
  const [width, setWidth]     = useState("12");
  const [waste, setWaste]     = useState("10");
  const [priceYd, setPriceYd] = useState("4.50");
  const [padPrice, setPadPrice] = useState("1.20");

  const l     = parseFloat(length) || 0;
  const w     = parseFloat(width) || 0;
  const wPct  = parseFloat(waste) || 0;
  const pSqYd = parseFloat(priceYd) || 0;
  const pPad  = parseFloat(padPrice) || 0;

  const areaSqFt      = l * w;
  const areaWithWaste = areaSqFt * (1 + wPct / 100);
  const areaSqYd      = areaWithWaste / 9;
  const carpetCost    = areaSqYd * pSqYd;
  const padCost       = areaSqYd * pPad;
  const totalCost     = carpetCost + padCost;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Carpet Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Room Length (ft)",    value: length,   setter: setLength },
            { label: "Room Width (ft)",     value: width,    setter: setWidth },
            { label: "Waste Factor (%)",    value: waste,    setter: setWaste },
            { label: "Carpet ($/sq yd)",    value: priceYd,  setter: setPriceYd },
            { label: "Pad ($/sq yd)",       value: padPrice, setter: setPadPrice },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Room Area",      value: `${areaSqFt.toFixed(0)} sq ft`,  sub: "total area" },
            { label: "Carpet Needed",  value: `${areaSqYd.toFixed(2)} sq yd`,  sub: `+${waste}% waste` },
            { label: "Carpet Cost",    value: `$${carpetCost.toFixed(0)}`,      sub: `at $${priceYd}/sq yd` },
            { label: "Total w/ Pad",   value: `$${totalCost.toFixed(0)}`,       sub: `pad $${padCost.toFixed(0)}` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {areaSqYd > 0 && (
          <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Carpet is sold in 12-ft wide rolls. Your room will need approximately{" "}
            <strong>{(areaWithWaste / 12).toFixed(1)} linear feet</strong> from a 12-ft roll.
          </div>
        )}
      </div>
    </div>
  );
}
