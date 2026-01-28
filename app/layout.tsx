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
  title: "Cameron Wolf | Technical Brain, Marketing Leader",
  description: "A technical brain in a non-technical role. Growth leader who builds CRM architecture, automation workflows, and attribution models — and facilitated the acquisition of ZappyRide by J.D. Power.",
  keywords: ["growth marketing", "martech", "acquisition", "technical marketing", "ZappyRide", "J.D. Power", "marketing technology", "CRM architecture", "marketing automation"],
  authors: [{ name: "Cameron Wolf" }],
  openGraph: {
    title: "Cameron Wolf | Technical Brain, Marketing Leader",
    description: "A growth leader who builds the systems, not just the strategy. From stealth startup to J.D. Power acquisition.",
    url: "https://cameronwolf.info",
    siteName: "Cameron Wolf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Wolf | Technical Brain, Marketing Leader",
    description: "A technical brain in a non-technical role. Growth leader & architect.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cameron Wolf",
  "jobTitle": "Senior Growth Marketing Manager",
  "description": "A technical brain in a non-technical role. Growth leader specializing in marketing technology, CRM architecture, and growth systems.",
  "url": "https://cameronwolf.info",
  "email": "cameron@cameronwolf.info",
  "sameAs": [
    "https://www.linkedin.com/in/camwolf/"
  ],
  "knowsAbout": [
    "Marketing Technology",
    "Growth Strategy",
    "Data-Driven Marketing",
    "SEM Management",
    "MarTech Stack Implementation",
    "Brand Development",
    "Lead Generation",
    "Digital Optimization",
    "Content Marketing",
    "Analytics"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Michigan"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Truv"
  },
  "award": [
    "+2000% Audience Growth at ZappyRide",
    "Facilitated ZappyRide acquisition by J.D. Power",
    "200% Website Traffic Increase at Keller Williams"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
