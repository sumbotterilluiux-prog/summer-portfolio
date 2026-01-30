import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/lib/analytics";
import { getPersonJsonLd, getPortfolioJsonLd } from "@/lib/json-ld";

const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    "Toronto",
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
      className={`${satoshi.variable} ${jetbrainsMono.variable}`}
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
