import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GUIDES, getGuide, type Tag } from "@/lib/guides";

const TAG_COLORS: Record<Tag, string> = {
  Roofing:    "bg-blue-100 text-blue-700",
  Foundation: "bg-stone-100 text-stone-700",
  Flooring:   "bg-amber-100 text-amber-700",
  Driveway:   "bg-gray-100 text-gray-700",
  Framing:    "bg-orange-100 text-orange-700",
  Insulation: "bg-green-100 text-green-700",
  Concrete:   "bg-yellow-100 text-yellow-800",
};

export async function generateStaticParams() {
  return GUIDES.filter(g => g.section === "howto").map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDesc,
    alternates: { canonical: `https://easybuildcalc.com/howto/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDesc,
      url: `https://easybuildcalc.com/howto/${guide.slug}`,
    },
  };
}

export default async function HowToPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide || guide.section !== "howto") notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDesc,
    url: `https://easybuildcalc.com/howto/${guide.slug}`,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",           item: "https://easybuildcalc.com" },
      { "@type": "ListItem", position: 2, name: "Planning Guides", item: "https://easybuildcalc.com/howto" },
      { "@type": "ListItem", position: 3, name: guide.title,      item: `https://easybuildcalc.com/howto/${guide.slug}` },
    ],
  };

  const verdictColors = {
    A:       "border-blue-200 bg-blue-50",
    B:       "border-emerald-200 bg-emerald-50",
    neither: "border-amber-200 bg-amber-50",
  };
  const verdictTextColors = {
    A:       "text-blue-800",
    B:       "text-emerald-800",
    neither: "text-amber-800",
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <a href="/howto" className="hover:text-blue-600">Planning Guides</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">{guide.title}</span>
      </nav>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {guide.tags.map(tag => (
          <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${TAG_COLORS[tag]}`}>{tag}</span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{guide.title}</h1>
      <p className="text-gray-600 mb-8 text-base leading-relaxed">{guide.summary}</p>

      {/* Comparison table */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          {guide.optionA} vs {guide.optionB}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2.5 text-left text-gray-600 font-medium w-1/3">Factor</th>
                <th className="border border-gray-200 px-4 py-2.5 text-left text-blue-700 font-semibold">{guide.optionA}</th>
                <th className="border border-gray-200 px-4 py-2.5 text-left text-emerald-700 font-semibold">{guide.optionB}</th>
              </tr>
            </thead>
            <tbody>
              {guide.compareRows.map(row => (
                <tr key={row.aspect} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600 font-medium text-xs">{row.aspect}</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">{row.a}</td>
                  <td className="border border-gray-200 px-4 py-2 text-sm">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Pros & Cons</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-blue-700 mb-3">{guide.optionA}</h3>
            <ul className="space-y-1.5 mb-4">
              {guide.prosA.map(p => (
                <li key={p} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>{p}
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {guide.consA.map(c => (
                <li key={c} className="flex gap-2 text-sm text-gray-500">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-semibold text-emerald-700 mb-3">{guide.optionB}</h3>
            <ul className="space-y-1.5 mb-4">
              {guide.prosB.map(p => (
                <li key={p} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>{p}
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {guide.consB.map(c => (
                <li key={c} className="flex gap-2 text-sm text-gray-500">
                  <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost / detail sections */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Details & Cost Breakdown</h2>
        {guide.costSection.map(s => (
          <div key={s.heading}>
            <h3 className="font-semibold text-gray-800 mb-1">{s.heading}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>

      {/* Bottom line */}
      <div className={`border rounded-xl p-5 mb-8 ${verdictColors[guide.verdictFavors]}`}>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">Bottom Line</p>
        <p className={`text-sm leading-relaxed font-medium ${verdictTextColors[guide.verdictFavors]}`}>
          {guide.verdict}
        </p>
      </div>

      {/* Related calculators */}
      {guide.relatedCalcs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Calculators</h2>
          <div className="flex flex-wrap gap-2">
            {guide.relatedCalcs.map(calc => (
              <Link
                key={calc.slug}
                href={`/${calc.slug}`}
                className="text-sm px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                {calc.name} →
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {guide.faqs.map(faq => (
            <details key={faq.q} className="border border-gray-200 rounded-lg">
              <summary className="font-semibold text-gray-800 px-4 py-3 cursor-pointer select-none list-none flex justify-between items-center hover:bg-gray-50 rounded-lg">
                <span>{faq.q}</span><span className="text-gray-400 ml-2 flex-shrink-0 text-lg">+</span>
              </summary>
              <div className="px-4 pb-4 border-t border-gray-100">
                <p className="text-gray-600 pt-3 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <Link href="/howto" className="text-sm text-blue-600 hover:underline">← All Planning Guides</Link>
    </div>
  );
}
