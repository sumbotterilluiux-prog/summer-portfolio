import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/lib/analytics";
import { getPersonJsonLd, getPortfolioJsonLd } from "@/lib/json-ld";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Used sparingly, in italic, to emphasize a phrase within a heading
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://summerbotterill.com"),
  title: {
    default: "Summer Botterill — Product Designer",
    template: "%s | Summer Botterill",
  },
  description:
    "Product Designer specializing in enterprise UX, design systems, and data-heavy interfaces. Designed tools for commercial and supply chain operators at Anheuser-Busch.",
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Design Systems",
    "Enterprise UX",
    "Maryland",
    "Anheuser-Busch",
    "B2B Design",
  ],
  authors: [{ name: "Summer Botterill" }],
  creator: "Summer Botterill",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summerbotterill.com",
    siteName: "Summer Botterill Portfolio",
    title: "Summer Botterill — Product Designer",
    description:
      "Product Designer specializing in enterprise UX, design systems, and data-heavy interfaces.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Summer Botterill — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer Botterill — Product Designer",
    description:
      "Product Designer specializing in enterprise UX, design systems, and data-heavy interfaces.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonJsonLd();
  const portfolioJsonLd = getPortfolioJsonLd();

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
