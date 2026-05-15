import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cameronwolf.info"),
  title: "Cameron Wolf | GTM Engineer and AI Systems Builder",
  description:
    "Personal portfolio for Cameron Wolf, a GTM engineer building RevOps architecture, automation, attribution, AI agents, and growth systems.",
  keywords: ["GTM engineer", "AI systems builder", "RevOps", "CRM architecture", "marketing automation", "data pipelines", "API integrations", "HubSpot", "growth infrastructure", "agentic workflows"],
  authors: [{ name: "Cameron Wolf" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cameron Wolf | GTM Engineer and AI Systems Builder",
    description:
      "RevOps architecture, automation, attribution, AI agents, and growth systems by Cameron Wolf.",
    url: "https://www.cameronwolf.info",
    siteName: "Cameron Wolf",
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Wolf | GTM Engineer and AI Systems Builder",
    description:
      "RevOps architecture, automation, attribution, AI agents, and growth systems by Cameron Wolf.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#171717" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
