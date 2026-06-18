import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kassapos.in"),
  title: {
    default: "Kassapos — India's Most Powerful POS & Billing Software",
    template: "%s | Kassapos",
  },
  description:
    "Kassapos is India's leading POS and billing software for supermarkets, restaurants, retail shops, and more. Cloud-ready, GST compliant, 24/7 Tamil & English support. Trusted by 7,500+ businesses.",
  keywords: [
    "billing software Chennai",
    "POS software India",
    "supermarket billing software",
    "restaurant billing software",
    "cloud billing software",
    "GST billing software",
    "retail POS",
    "kassapos",
  ],
  authors: [{ name: "Kassapos Software Solutions Pvt Ltd" }],
  creator: "Kassapos Software Solutions Pvt Ltd",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kassapos.in",
    siteName: "Kassapos",
    title: "Kassapos — India's Most Powerful POS & Billing Software",
    description:
      "From corner shops to supermarket chains — Kassapos handles every bill, every product, every report. Instantly.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kassapos — India's Most Powerful POS & Billing Software",
    description: "Trusted by 7,500+ businesses across South India since 2008.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <head>
        <link rel="preload" as="image" href="/images/hero.webp" fetchPriority="high" />
      </head>
      <body className="min-h-screen text-slate-900 font-sans antialiased overflow-x-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <SplashScreen />
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
