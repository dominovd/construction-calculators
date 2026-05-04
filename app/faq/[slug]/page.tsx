import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQS, getFaq, type FaqCategory } from "@/lib/faqs";

const CAT_COLORS: Record<FaqCategory, string> = {
  Paint:       "bg-pink-100 text-pink-700",
  Concrete:    "bg-stone-100 text-stone-700",
  Framing:     "bg-orange-100 text-orange-700",
  Roofing:     "bg-blue-100 text-blue-700",
  Flooring:    "bg-amber-100 text-amber-700",
  Landscaping: "bg-green-100 text-green-700",
  Masonry:     "bg-red-100 text-red-700",
};

export async function generateStaticParams() {
  return FAQS.map(f => ({ slug: f.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) return {};
  return {
    title: faq.metaTitle,
    description: faq.metaDesc,
    alternates: { canonical: `https://easybuildcalc.com/faq/${faq.slug}` },
    openGraph: {
      title: faq.metaTitle,
      description: faq.metaDesc,
      url: `https://easybuildcalc.com/faq/${faq.slug}`,
    },
  };
}

export default async function FaqPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const faq = getFaq(slug);
  if (!faq) notFound();

  // ── Schema markup ──────────────────────────────────────────────────────────

  // 1. QAPage — direct Q&A (appears in search as expandable answer)
  const qaLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.directAnswer,
        upvoteCount: 42,
      },
    },
  };

  // 2. HowTo — step-by-step calculation
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to calculate: ${faq.question}`,
    step: faq.howToSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: s.text,
    })),
  };

  // 3. FAQPage — related questions block
  const faqLd = faq.relatedFaqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.relatedFaqs.map(rf => ({
          "@type": "Question",
          name: rf.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: `See our detailed answer and calculation guide at easybuildcalc.com/faq/${rf.slug}`,
          },
        })),
      }
    : null;

  // 4. BreadcrumbList
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
      { "@type": "ListItem", position: 2, name: "FAQ",  item: "https://easybuildcalc.com/faq" },
      { "@type": "ListItem", position: 3, name: faq.question, item: `https://easybuildcalc.com/faq/${faq.slug}` },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <a href="/faq" className="hover:text-blue-600">FAQ</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700 truncate">{faq.question}</span>
      </nav>

      {/* Category tag */}
      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${CAT_COLORS[faq.category]}`}>
        {faq.category}
      </span>

      {/* H1 = exact search query */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4 leading-snug">
        {faq.question}
      </h1>

      {/* Direct answer — featured snippet target */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <p className="text-sm font-semibold text-blue-800 mb-1">Quick Answer</p>
        <p className="text-blue-900 leading-relaxed">{faq.directAnswer}</p>
      </div>

      {/* Quick reference table */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Quick Reference Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2.5 text-left text-gray-600 font-medium">
                  {faq.tableLabel}
                </th>
                <th className="border border-gray-200 px-4 py-2.5 text-left text-blue-700 font-semibold">
                  {faq.tableHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {faq.table.map(row => (
                <tr key={row.label} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700">{row.label}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-900">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to calculate — step by step */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Calculate It Yourself</h2>
        <ol className="space-y-3">
          {faq.howToSteps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pro tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Pro Tip</p>
        <p className="text-sm text-amber-900 leading-relaxed">{faq.proTip}</p>
      </div>

      {/* Calculator CTA */}
      <div className="border border-blue-200 rounded-xl p-5 mb-8 bg-white text-center">
        <p className="text-sm text-gray-600 mb-3">
          Need an exact number for your specific dimensions?
        </p>
        <Link
          href={`/${faq.relatedCalc.slug}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Use the {faq.relatedCalc.name} →
        </Link>
      </div>

      {/* Related questions */}
      {faq.relatedFaqs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Related Questions</h2>
          <div className="space-y-2">
            {faq.relatedFaqs.map(rf => (
              <Link
                key={rf.slug}
                href={`/faq/${rf.slug}`}
                className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <span className="text-sm text-gray-700 group-hover:text-blue-700">{rf.question}</span>
                <span className="text-gray-300 group-hover:text-blue-400 ml-2">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back link */}
      <Link href="/faq" className="text-sm text-blue-600 hover:underline">← All FAQ</Link>
    </div>
  );
}
