import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="ZQ1waCH9VzWxNtRgULBPxZ3yTGbg4VLAroLQpsnlsdQ" />
        {/* Google AdSense — раскомментируй после одобрения */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        /> */}
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
