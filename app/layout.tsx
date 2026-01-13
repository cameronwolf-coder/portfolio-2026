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
  title: "Cameron Wolf | Technical Force Multiplier & Growth Architect",
  description: "Senior Growth Leader who facilitated the acquisition of ZappyRide by J.D. Power. +2000% audience growth, 400k users, MarTech expertise.",
  keywords: ["growth marketing", "martech", "acquisition", "technical marketing", "ZappyRide", "J.D. Power", "marketing technology"],
  authors: [{ name: "Cameron Wolf" }],
  openGraph: {
    title: "Cameron Wolf | Technical Force Multiplier",
    description: "Facilitated the acquisition of ZappyRide by J.D. Power through strategic growth architecture",
    url: "https://cameronwolf.info",
    siteName: "Cameron Wolf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Wolf | Technical Force Multiplier",
    description: "Senior Growth Leader & Architect",
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
  "jobTitle": "Senior Growth Leader & Architect",
  "description": "Technical Force Multiplier specializing in marketing technology, growth strategy, and acquisition facilitation",
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
    "name": "Inspiration Mobility"
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
    <html lang="en">
      <head>
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
