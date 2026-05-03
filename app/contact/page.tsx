import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact EasyBuildCalc — questions, feedback, or partnership inquiries.",
  alternates: { canonical: "https://easybuildcalc.com/contact" },
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 text-sm mb-10">
        Have a question, found a bug, or want to suggest a calculator? We&apos;d love to hear from you.
      </p>

      <div className="space-y-6">
        {/* Email */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✉️</span>
            <h2 className="text-base font-semibold text-gray-900">Email</h2>
          </div>
          <p className="text-sm text-gray-500 mb-3">
            For general questions, feedback, and partnership inquiries:
          </p>
          <a
            href="mailto:info@easybuildcalc.com"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            info@easybuildcalc.com
          </a>
        </div>

        {/* Response time */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-blue-900 mb-1">Response time</h3>
          <p className="text-sm text-blue-700">
            We typically respond within 1–2 business days.
          </p>
        </div>

        {/* Topics */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Common topics</h2>
          <div className="space-y-3">
            {[
              { icon: "🐛", title: "Bug report", desc: "Calculator giving wrong results? Let us know the numbers you entered and expected output." },
              { icon: "💡", title: "Feature request", desc: "Need a calculator we don't have yet? We're always adding new tools." },
              { icon: "🤝", title: "Partnership", desc: "Interested in affiliate partnerships or advertising? Reach out with details." },
              { icon: "📰", title: "Press & media", desc: "Writing about construction or DIY tools? Happy to help." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
