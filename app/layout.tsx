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
  title: "Cameron Wolf | GTM Engineer & Growth Architect",
  description: "GTM Engineer who builds CRM architecture, automation pipelines, and data infrastructure. Facilitated the acquisition of ZappyRide by J.D. Power. Currently engineering GTM systems at Truv.",
  keywords: ["GTM engineer", "go-to-market engineering", "CRM architecture", "marketing automation", "data pipelines", "API integrations", "ZappyRide", "J.D. Power", "HubSpot", "growth infrastructure"],
  authors: [{ name: "Cameron Wolf" }],
  openGraph: {
    title: "Cameron Wolf | GTM Engineer & Growth Architect",
    description: "GTM Engineer who builds growth infrastructure, not just strategy. From stealth startup to J.D. Power acquisition.",
    url: "https://cameronwolf.info",
    siteName: "Cameron Wolf Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cameron Wolf | GTM Engineer & Growth Architect",
    description: "GTM Engineer who builds CRM architecture, automation pipelines, and growth infrastructure.",
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
  "jobTitle": "GTM Engineer",
  "description": "GTM Engineer specializing in CRM architecture, automation pipelines, data infrastructure, and AI-native growth systems.",
  "url": "https://cameronwolf.info",
  "email": "cameron@cameronwolf.info",
  "sameAs": [
    "https://www.linkedin.com/in/camwolf/"
  ],
  "knowsAbout": [
    "GTM Engineering",
    "CRM Architecture",
    "Marketing Automation",
    "Data Pipelines",
    "API Integrations",
    "HubSpot Ops Hub",
    "Growth Infrastructure",
    "Pipeline Analytics",
    "AI-Native GTM Tools",
    "Attribution Modeling"
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
