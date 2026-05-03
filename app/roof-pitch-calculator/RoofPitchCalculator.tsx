"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

export function RoofPitchCalculator() {
  const { t } = useT();
  const [rise, setRise] = useState("4");
  const [run, setRun] = useState("12");
  const [spanFt, setSpanFt] = useState("24");

  const r = parseFloat(rise) || 0;
  const ru = parseFloat(run) || 0;
  const span = parseFloat(spanFt) || 0;

  const angleDeg = ru > 0 ? Math.atan(r / ru) * (180 / Math.PI) : 0;
  const multiplier = ru > 0 ? Math.sqrt(r * r + ru * ru) / ru : 0;
  const halfSpan = span / 2;
  const rafterLen = halfSpan * multiplier;
  const ridgeHeight = ru > 0 ? (halfSpan * r) / ru : 0;

  const pitchLabel = `${r}:${ru}`;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-blue-700 px-5 py-3">
        <h2 className="text-white font-semibold text-sm">{t("calc_roof_pitch")}</h2>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { labelKey: "rise", value: rise, setter: setRise, step: "0.5", min: "0" },
            { labelKey: "run",  value: run,  setter: setRun,  step: "1",   min: "1" },
            { labelKey: "span", value: spanFt, setter: setSpanFt, step: "1", min: "0" },
          ].map(({ labelKey, value, setter, step, min }) => (
            <div key={labelKey}>
              <label className="block text-xs text-gray-500 mb-1">{t(labelKey)}</label>
              <input
                type="number"
                inputMode="decimal"
                min={min}
                step={step}
                value={value}
                onChange={(e) => setter(e.target.value)}
                className="calc-input text-center"
              />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("pitch")}</p>
            <p className="text-2xl font-bold text-blue-800">{pitchLabel}</p>
            <p className="text-xs text-blue-500 mt-0.5">rise : run</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("angle")}</p>
            <p className="text-2xl font-bold text-blue-800">{angleDeg.toFixed(1)}°</p>
            <p className="text-xs text-blue-500 mt-0.5">degrees</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("rafter_length")}</p>
            <p className="text-2xl font-bold text-blue-800">{rafterLen.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">feet</p>
          </div>
          <div className="result-box">
            <p className="text-xs text-blue-600 font-medium mb-1">{t("ridge_height")}</p>
            <p className="text-2xl font-bold text-blue-800">{ridgeHeight.toFixed(2)}</p>
            <p className="text-xs text-blue-500 mt-0.5">feet</p>
          </div>
        </div>

        {r > 0 && (
          <div className="mt-3 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700">
            Rafter multiplier: <strong>{multiplier.toFixed(4)}</strong>
            {r <= 3 && " ⚠ Low pitch — check local snow load requirements."}
            {r >= 9 && " ⚠ Steep pitch — consider extra safety measures during installation."}
          </div>
        )}
      </div>
    </div>
  );
}
