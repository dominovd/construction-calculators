"use client";

import { useState } from "react";

// Swell factors: how much soil expands when excavated
const SOIL_TYPES = [
  { label: "Loam / Topsoil",   swell: 1.25, weight: 2100 }, // lbs/yd³ in-bank
  { label: "Clay",             swell: 1.35, weight: 2700 },
  { label: "Sand / Gravel",    swell: 1.12, weight: 2800 },
  { label: "Decomposed Rock",  swell: 1.40, weight: 3000 },
  { label: "Solid Rock",       swell: 1.55, weight: 4500 },
];

export function ExcavationCalculator() {
  const [length, setLength]     = useState("30");
  const [width, setWidth]       = useState("20");
  const [depth, setDepth]       = useState("4");
  const [soilIdx, setSoilIdx]   = useState(0);
  const [truckYd, setTruckYd]   = useState("14");   // truck capacity in yd³
  const [costTruck, setCostTruck] = useState("450"); // cost per truck haul

  const l     = parseFloat(length)    || 0;
  const w     = parseFloat(width)     || 0;
  const d     = parseFloat(depth)     || 0;
  const trk   = parseFloat(truckYd)   || 14;
  const cTrk  = parseFloat(costTruck) || 0;

  const soil  = SOIL_TYPES[soilIdx];

  // Bank cubic yards (in-ground volume)
  const bankCuFt  = l * w * d;
  const bankCuYd  = bankCuFt / 27;

  // Loose cubic yards (after excavation — swells)
  const looseCuYd = bankCuYd * soil.swell;

  // Truck loads
  const truckLoads = Math.ceil(looseCuYd / trk);

  // Weight
  const weightTons = (bankCuYd * soil.weight) / 2000;

  // Haul cost
  const haulCost = truckLoads * cTrk;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Excavation Calculator</h2>
      </div>
      <div className="p-5 space-y-4">
        {/* Soil type */}
        <div>
          <label className="block text-xs text-gray-500 mb-1">Soil Type</label>
          <div className="flex flex-wrap gap-2">
            {SOIL_TYPES.map((s, i) => (
              <button key={s.label} onClick={() => setSoilIdx(i)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  i === soilIdx
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
                }`}>{s.label}</button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "Length (ft)",          value: length,    setter: setLength },
            { label: "Width (ft)",           value: width,     setter: setWidth },
            { label: "Depth (ft)",           value: depth,     setter: setDepth },
            { label: "Truck Cap. (yd³)",     value: truckYd,   setter: setTruckYd },
            { label: "Cost / Truck Load ($)", value: costTruck, setter: setCostTruck },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="1" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Bank Volume",    value: `${bankCuYd.toFixed(1)} yd³`,    sub: `${bankCuFt.toFixed(0)} cu ft` },
            { label: "Loose Volume",   value: `${looseCuYd.toFixed(1)} yd³`,   sub: `${soil.swell}× swell factor` },
            { label: "Truck Loads",    value: truckLoads.toLocaleString(),      sub: `${trk} yd³ per truck` },
            { label: "Haul Cost",      value: `$${haulCost.toFixed(0)}`,        sub: `at $${costTruck}/load` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {bankCuYd > 0 && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-xs text-gray-600 space-y-1">
            <p className="font-semibold text-gray-700 mb-1">Excavation summary:</p>
            <p>In-ground soil: <strong>{bankCuYd.toFixed(1)} bank yd³</strong> → <strong>{looseCuYd.toFixed(1)} loose yd³</strong> after excavation</p>
            <p>Estimated weight: <strong>{weightTons.toFixed(1)} tons</strong> ({(soil.weight / 2000).toFixed(2)} tons/yd³)</p>
            <p className="text-gray-400 mt-1">Haul cost estimate only — does not include excavation labor or equipment rental.</p>
          </div>
        )}
      </div>
    </div>
  );
}
