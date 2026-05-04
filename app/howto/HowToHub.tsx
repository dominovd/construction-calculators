"use client";

import Link from "next/link";
import { HOWTOS, type HowToTag } from "@/lib/howtos";

const TAG_COLORS: Record<HowToTag, string> = {
  Concrete:    "bg-yellow-100 text-yellow-800",
  Framing:     "bg-orange-100 text-orange-700",
  Roofing:     "bg-blue-100 text-blue-700",
  Landscaping: "bg-green-100 text-green-700",
  Flooring:    "bg-amber-100 text-amber-700",
};

export function HowToHub() {
  return (
    <div className="space-y-3">
      {HOWTOS.map(guide => (
        <Link
          key={guide.slug}
          href={`/howto/${guide.slug}`}
          className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-700 leading-snug mb-1">
                {guide.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-2">
                {guide.intro}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {guide.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[tag]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-gray-300 group-hover:text-blue-400 flex-shrink-0 text-lg mt-0.5">→</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
