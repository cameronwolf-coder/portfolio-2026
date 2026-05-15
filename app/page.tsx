import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import ExperienceTimeline from "./components/ExperienceTimeline";
import HeroHeadshot from "./components/HeroHeadshot";
import SkillsMarquee from "./components/SkillsMarquee";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cameronwolf.info"),
  title: "Cameron Wolf | GTM Engineer and AI Systems Builder",
  description:
    "Personal portfolio for Cameron Wolf, a GTM engineer building RevOps architecture, automation, attribution, AI agents, and growth systems.",
  alternates: {
    canonical: "https://www.cameronwolf.info",
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
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.cameronwolf.info/#person",
  name: "Cameron Wolf",
  url: "https://www.cameronwolf.info",
  jobTitle: "GTM Engineer and AI Systems Builder",
  email: "cameron@cameronwolf.info",
  sameAs: ["https://www.linkedin.com/in/camwolf/", "https://lupine.agency"],
  worksFor: {
    "@type": "Organization",
    name: "Lupine Digital",
    url: "https://lupine.agency",
  },
  knowsAbout: [
    "GTM Engineering",
    "RevOps",
    "CRM Architecture",
    "Marketing Automation",
    "AI Agents",
    "Agent Harnesses",
    "Attribution",
    "Pipeline Analytics",
    "HubSpot",
    "API Integrations",
  ],
};

const proof = [
  {
    href: "/case-studies/truv",
    title: "GTM Infrastructure from Scratch",
    label: "Truv · Series B SaaS",
    detail:
      "CRM architecture, lifecycle automation, enrichment workflows, and AI-powered outbound infrastructure.",
  },
  {
    href: "/case-studies/zappyride",
    title: "Startup to Acquisition",
    label: "ZappyRide -> J.D. Power",
    detail:
      "Brand, content, and growth systems that helped position an EV marketplace for acquisition.",
  },
  {
    href: "/case-studies/sweet-express",
    title: "Content as Growth Engine",
    label: "Sweet Express",
    detail:
      "Recruitment portal, social presence, ecommerce, and content systems that reached 400K users.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />

      <section className="section-light px-6 md:px-[71px] pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_420px] gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-maroon/10 text-maroon-light text-sm font-mono mb-6">
              GTM ENGINEER
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 text-light-text">
              CAMERON WOLF
              <br />
              <span className="text-maroon-light">BUILDS GROWTH</span>
              <br />
              SYSTEMS.
            </h1>
            <p className="text-lg text-light-muted leading-relaxed max-w-2xl mb-8">
              I build the CRM architecture, automation pipelines, attribution
              layers, AI workflows, and operational systems that make modern GTM
              teams faster. Lupine Digital is the agency where that work is
              packaged for clients.
            </p>
            <div id="contact" className="flex flex-wrap gap-4">
              <a
                href="mailto:cameron@cameronwolf.info"
                className="pill-btn pill-btn-primary"
              >
                <Mail size={16} />
                Email Cameron
              </a>
              <a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <HeroHeadshot />
          </div>
        </div>
      </section>

      <section id="work" className="section-dark py-20 sm:py-28 px-6 md:px-[71px]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="SELECTED WORK"
            headline="Proof Behind the Systems"
            theme="dark"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {proof.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-rounded p-6 sm:p-8 bg-[#1a1a22] border border-[#2a2a35] hover:bg-[#1f1f29] hover:border-[#3a3a48] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <p className="text-sm font-mono text-dark-muted">
                    {item.label}
                  </p>
                  <ArrowUpRight size={16} className="text-maroon-light" />
                </div>
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  {item.title}
                </h2>
                <p className="text-sm text-dark-muted leading-relaxed">
                  {item.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SkillsMarquee />

      <section
        id="experience"
        className="section-light py-20 sm:py-28 px-6 md:px-[71px]"
      >
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="EXPERIENCE"
            headline="Career Timeline"
            align="center"
          />
          <ExperienceTimeline />
        </div>
      </section>

      <Footer />
    </main>
  );
}
