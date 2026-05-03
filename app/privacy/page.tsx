import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for EasyBuildCalc — how we collect and use data, cookies, and third-party services.",
  alternates: { canonical: "https://easybuildcalc.com/privacy" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://easybuildcalc.com" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://easybuildcalc.com/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav className="text-xs text-gray-500 mb-4">
        <a href="/" className="hover:text-blue-600">Home</a>
        <span className="mx-1.5">›</span>
        <span className="text-gray-700">Privacy Policy</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: May 3, 2026</p>

      <article className="space-y-8 text-sm text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Overview</h2>
          <p>
            EasyBuildCalc (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website{" "}
            <a href="https://easybuildcalc.com" className="text-blue-600 hover:underline">easybuildcalc.com</a>.
            This page explains what information we collect when you use our calculators, how we use it, and your rights.
          </p>
          <p className="mt-3">
            All calculators on this site run entirely in your browser. We do not store any measurements,
            dimensions, or calculations you enter — that data never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h2>
          <p className="mb-3">We collect limited, non-personal data automatically when you visit the site:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Pages visited and time spent on each page</li>
            <li>Browser type and operating system (in aggregate)</li>
            <li>Referring website or search query</li>
            <li>General geographic region (country/city level)</li>
          </ul>
          <p className="mt-3">
            This data is collected via <strong>Google Analytics</strong> in anonymized, aggregated form.
            We use it solely to understand which calculators are most useful and to improve the site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Cookies</h2>
          <p className="mb-3">
            We use cookies for two purposes:
          </p>
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-1">Analytics cookies (Google Analytics)</p>
              <p className="text-gray-600">
                These cookies help us measure traffic and usage patterns. Data is collected anonymously.
                You can opt out via{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Google Analytics Opt-out
                </a>.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-1">Advertising cookies (Google AdSense)</p>
              <p className="text-gray-600">
                EasyBuildCalc is supported by ads served by Google AdSense. Google may use cookies to
                show ads relevant to your interests based on your browsing history. You can manage ad
                personalization at{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  adssettings.google.com
                </a>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h2>
          <p className="mb-3">We use the following third-party services, each with its own privacy policy:</p>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong className="text-gray-800">Google Analytics</strong> —{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                privacy policy
              </a>
            </li>
            <li>
              <strong className="text-gray-800">Google AdSense</strong> —{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                privacy policy
              </a>
            </li>
          </ul>
          <p className="mt-3">
            We do not sell, trade, or otherwise transfer your data to any other third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Children&apos;s Privacy</h2>
          <p>
            EasyBuildCalc is not directed at children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal information,
            please contact us and we will promptly delete it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h2>
          <p className="mb-3">Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of analytics and advertising tracking</li>
            <li>Lodge a complaint with your local data protection authority (EU/UK users)</li>
          </ul>
          <p className="mt-3">
            Since we do not collect personal data directly (only anonymized analytics), most of these
            rights apply to data held by Google. Visit{" "}
            <a href="https://myaccount.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              myaccount.google.com
            </a>{" "}
            to manage your Google data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated date. We encourage you to review this policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a href="mailto:info@easybuildcalc.com" className="text-blue-600 hover:underline">
              info@easybuildcalc.com
            </a>{" "}
            or visit our{" "}
            <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
          </p>
        </section>

      </article>
    </div>
  );
}
