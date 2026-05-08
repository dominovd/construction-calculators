"use client";

import { useState } from "react";
import { getRetailDefault } from "@/lib/retail-prices";

export function ConcreteCalculator() {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("4");
  const [pricePerYard, setPricePerYard] = useState(String(getRetailDefault("concrete-readymix")));

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;
  const price = parseFloat(pricePerYard) || 0;

  const cubicFeet = l * w * (d / 12);
  const cubicYards = cubicFeet / 27;
  const bags60 = Math.ceil(cubicFeet / 0.45);
  const bags80 = Math.ceil(cubicFeet / 0.60);
  const readyMixCost = cubicYards * price;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">Concrete Calculator</h2>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Length (ft)",      value: length,       setter: setLength },
            { label: "Width (ft)",       value: width,        setter: setWidth },
            { label: "Depth (in)",       value: depth,        setter: setDepth },
            { label: "Ready-mix ($/yd³)", value: pricePerYard, setter: setPricePerYard },
          ].map(({ label, value, setter }) => (
            <div key={label}>
              <label className="block text-xs text-gray-500 mb-1">{label}</label>
              <input type="number" inputMode="decimal" min="0" step="0.5" value={value}
                onChange={(e) => setter(e.target.value)} className="calc-input text-center" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Cubic Yards",  value: cubicYards.toFixed(2),    sub: "yd³" },
            { label: "60-lb Bags",   value: bags60.toLocaleString(),   sub: "bags" },
            { label: "80-lb Bags",   value: bags80.toLocaleString(),   sub: "bags" },
            { label: "Ready-mix",    value: `$${readyMixCost.toFixed(0)}`, sub: `at $${pricePerYard}/yd³` },
          ].map(({ label, value, sub }) => (
            <div key={label} className="result-box">
              <p className="text-xs text-blue-600 font-medium mb-1">{label}</p>
              <p className="text-2xl font-bold text-blue-800">{value}</p>
              <p className="text-xs text-blue-500 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        {cubicYards > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            With 10% waste: <strong>{(cubicYards * 1.1).toFixed(2)} yd³</strong> /
            <strong> {Math.ceil(bags60 * 1.1)} × 60-lb bags</strong>.
            Ready-mix is typically more economical above 1 yd³.
          </div>
        )}
      </div>
    </div>
  );
}
