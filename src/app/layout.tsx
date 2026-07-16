import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/contexts/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const TITLE = "Tolulope Olonibua — Front-End Engineer";
const DESCRIPTION =
  "Front-end engineer building fast, accessible web applications with React, TypeScript and Next.js. UK-based, full right to work.";
const OG_IMAGE = "/WhatsApp Image 2025-08-07 at 08.54.12.jpeg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0d" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Front-End Engineer, Front-End Developer, React, Next.js, TypeScript, Web Development, UK Developer, Manchester Developer",
  authors: [{ name: "Tolulope Olonibua" }],
  creator: "Tolulope Olonibua",
  publisher: "Tolulope Olonibua",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: OG_IMAGE,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.olonibua.site",
    siteName: "Tolulope Olonibua",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background-primary text-text-primary">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
