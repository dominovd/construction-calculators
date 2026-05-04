"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS, ALL_FAQ_CATEGORIES, type FaqCategory } from "@/lib/faqs";

const CAT_COLORS: Record<FaqCategory, string> = {
  Paint:       "bg-pink-100 text-pink-700",
  Concrete:    "bg-stone-100 text-stone-700",
  Framing:     "bg-orange-100 text-orange-700",
  Roofing:     "bg-blue-100 text-blue-700",
  Flooring:    "bg-amber-100 text-amber-700",
  Landscaping: "bg-green-100 text-green-700",
  Masonry:     "bg-red-100 text-red-700",
};

export function FaqHub() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | null>(null);

  const filtered = activeCategory
    ? FAQS.filter(f => f.category === activeCategory)
    : FAQS;

  return (
    <div className="space-y-5">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
            activeCategory === null
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
          }`}
        >
          All
        </button>
        {ALL_FAQ_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-gray-300 text-gray-600 hover:border-blue-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="space-y-2">
        {filtered.map(faq => (
          <Link
            key={faq.slug}
            href={`/faq/${faq.slug}`}
            className="flex items-start justify-between gap-3 border border-gray-200 rounded-xl px-4 py-3.5 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 leading-snug mb-1.5">
                {faq.question}
              </p>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CAT_COLORS[faq.category]}`}>
                  {faq.category}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  → {faq.relatedCalc.name}
                </span>
              </div>
            </div>
            <span className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 text-lg mt-0.5">→</span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-gray-400 text-center py-8">No questions in this category yet.</p>
      )}
    </div>
  );
}
