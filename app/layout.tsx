import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://easybuildcalc.com"),
  title: {
    default: "Free Construction Calculators | EasyBuildCalc",
    template: "%s | EasyBuildCalc",
  },
  description:
    "Free online construction calculators for contractors, builders, and DIY projects. Board foot, roof pitch, rebar, concrete, flooring, and more.",
  keywords: ["construction calculator", "building calculator", "contractor tools", "DIY calculator"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EasyBuildCalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZQ1waCH9VzWxNtRgULBPxZ3yTGbg4VLAroLQpsnlsdQ" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-blue-700 hover:text-blue-800 shrink-0">
          🔧 EasyBuildCalc
        </a>
        <nav className="hidden sm:flex gap-1 text-sm">
          <a href="/" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Calculators
          </a>
          <a href="/projects" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="/reports/state-of-us-construction-materials-2026" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Reports
          </a>
          <a href="/material-prices" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Prices
          </a>
          <a href="/housing-starts" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Housing
          </a>
          <a href="/lumber-market" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            Lumber
          </a>
          <a href="/about" className="px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors">
            About
          </a>
        </nav>
        {/* Mobile: hamburger replaced with simple icon links */}
        <nav className="sm:hidden flex gap-3 text-xs text-gray-500">
          <a href="/material-prices" className="hover:text-blue-600">📊</a>
          <a href="/housing-starts" className="hover:text-blue-600">🏠</a>
          <a href="/lumber-market" className="hover:text-blue-600">🪵</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} EasyBuildCalc. Free construction calculators.</p>
        <nav className="flex flex-wrap gap-4">
          <a href="/projects" className="hover:text-gray-700">Projects</a>
          <a href="/reports/state-of-us-construction-materials-2026" className="hover:text-gray-700">Reports</a>
          <a href="/material-prices" className="hover:text-gray-700">Prices</a>
          <a href="/housing-starts" className="hover:text-gray-700">Housing</a>
          <a href="/lumber-market" className="hover:text-gray-700">Lumber</a>
          <a href="/guides" className="hover:text-gray-700">Guides</a>
          <a href="/faq" className="hover:text-gray-700">FAQ</a>
          <a href="/about" className="hover:text-gray-700">About</a>
          <a href="/contact" className="hover:text-gray-700">Contact</a>
          <a href="/privacy" className="hover:text-gray-700">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
