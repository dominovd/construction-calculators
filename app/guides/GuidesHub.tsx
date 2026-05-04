"use client";

import { useState } from "react";
import Link from "next/link";
import { GUIDES, ALL_TAGS, type Tag } from "@/lib/guides";

const TAG_COLORS: Record<Tag, string> = {
  Roofing:    "bg-blue-100 text-blue-700",
  Foundation: "bg-stone-100 text-stone-700",
  Flooring:   "bg-amber-100 text-amber-700",
  Driveway:   "bg-gray-100 text-gray-700",
  Framing:    "bg-orange-100 text-orange-700",
  Insulation: "bg-green-100 text-green-700",
  Concrete:   "bg-yellow-100 text-yellow-800",
};

const VERDICT_BADGE: Record<string, { label: string; cls: string }> = {
  A:       { label: "Option A wins",  cls: "bg-blue-100 text-blue-700" },
  B:       { label: "Option B wins",  cls: "bg-emerald-100 text-emerald-700" },
  neither: { label: "Depends on use", cls: "bg-amber-100 text-amber-700" },
};

export function GuidesHub() {
  const [activeTag, setActiveTag] = useState<Tag | null>(null);

  const comparisonGuides = GUIDES.filter(g => (g.section ?? "guides") === "guides");

  const filtered = activeTag
    ? comparisonGuides.filter(g => g.tags.includes(activeTag))
    : comparisonGuides;

  return (
    <div className="space-y-6">
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            activeTag === null
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
          }`}
        >
          All
        </button>
        {ALL_TAGS.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Guide cards */}
      <div className="space-y-3">
        {filtered.map(guide => {
          const verdict = VERDICT_BADGE[guide.verdictFavors];
          return (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 leading-snug mb-1">
                    {guide.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-2">
                    {guide.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {guide.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[tag]}`}>
                        {tag}
                      </span>
                    ))}
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${verdict.cls}`}>
                      {verdict.label}
                    </span>
                  </div>
                </div>
                <div className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 text-lg mt-0.5">→</div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-8">No guides in this category yet.</p>
      )}
    </div>
  );
}
