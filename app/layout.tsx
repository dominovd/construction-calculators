import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildcalc.com"), // ← замени на свой домен
  title: {
    default: "Free Construction Calculators | BuildCalc",
    template: "%s | BuildCalc",
  },
  description:
    "Free online construction calculators for contractors, builders, and DIY projects. Board foot, roof pitch, rebar, concrete, flooring, and more.",
  keywords: ["construction calculator", "building calculator", "contractor tools", "DIY calculator"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BuildCalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — раскомментируй после одобрения */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="text-lg font-semibold text-blue-700 hover:text-blue-800">
          🔧 BuildCalc
        </a>
        <nav className="hidden sm:flex gap-5 text-sm text-gray-600">
          <a href="/board-foot-calculator" className="hover:text-blue-600">Board Foot</a>
          <a href="/stud-calculator" className="hover:text-blue-600">Stud / Framing</a>
          <a href="/roof-pitch-calculator" className="hover:text-blue-600">Roof Pitch</a>
          <a href="/rebar-calculator" className="hover:text-blue-600">Rebar</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-gray-500 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} BuildCalc. Free construction calculators.</p>
        <nav className="flex gap-4">
          <a href="/about" className="hover:text-gray-700">About</a>
          <a href="/privacy" className="hover:text-gray-700">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
