"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  TrendingUp,
  Building2,
  RefreshCw,
  Target,
  Mic,
  BarChart3,
  Lightbulb,
  Settings,
  Palette,
  Mail,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "./components/Navbar";
import PillButton from "./components/PillButton";
import SectionHeader from "./components/SectionHeader";
import HeroHeadshot from "./components/HeroHeadshot";
import ServiceCard from "./components/ServiceCard";
import SkillsMarquee from "./components/SkillsMarquee";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Footer from "./components/Footer";

const capabilities = [
  {
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and narrative architecture that turns companies into category leaders.",
    items: ["Positioning", "Category Creation", "Narrative Architecture", "Voice & Tone"],
    icon: Target,
    accent: "maroon" as const,
  },
  {
    title: "Content & Media",
    description:
      "Podcast production, thought leadership, and editorial strategy that builds authority.",
    items: ["Podcasting", "Thought Leadership", "Editorial Strategy", "SEO Engines"],
    icon: Mic,
    accent: "teal" as const,
  },
  {
    title: "Growth Marketing",
    description:
      "Demand generation, ABM, and performance campaigns that convert at scale.",
    items: ["Demand Gen", "ABM", "Performance", "Conversion Optimization"],
    icon: BarChart3,
    accent: "maroon" as const,
  },
  {
    title: "Strategic Frameworks",
    description:
      "Jobs-to-be-Done, RICE prioritization, and growth modeling for data-driven decisions.",
    items: ["JTBD", "RICE", "Growth Modeling", "OKR Development"],
    icon: Lightbulb,
    accent: "teal" as const,
  },
  {
    title: "Marketing Operations",
    description:
      "CRM strategy, marketing automation, and attribution modeling that scales with the business.",
    items: ["CRM Strategy", "Automation", "Attribution", "Analytics"],
    icon: Settings,
    accent: "maroon" as const,
  },
  {
    title: "Creative Direction",
    description:
      "Campaign concepts, visual identity, and website experiences that stand out.",
    items: ["Campaign Concepts", "Visual Identity", "Web Experience", "Brand Guidelines"],
    icon: Palette,
    accent: "teal" as const,
  },
];

const growthStories = [
  {
    icon: Rocket,
    title: "From Startup to Acquisition",
    company: "ZappyRide → J.D. Power",
    description:
      "Led brand, content, and growth for an EV marketplace from stealth to exit. Built the narrative that positioned us as the trusted EV authority, culminating in acquisition by industry giant J.D. Power.",
    metrics: [
      { value: "100%", label: "YoY Growth" },
      { value: "400K", label: "Year 1 Users" },
      { value: "EXIT", label: "Acquired" },
    ],
    accent: "maroon",
  },
  {
    icon: TrendingUp,
    title: "Content as Growth Engine",
    company: "Sweet Express",
    description:
      "Transformed marketing from cost center to revenue driver. Built a zero-touch content system that processed 400,000 users in 12 months—turning editorial strategy into scalable user acquisition.",
    metrics: [
      { value: "2,000%", label: "Audience" },
      { value: "400K", label: "Users" },
      { value: "$0", label: "Ad Spend" },
    ],
    accent: "teal",
  },
  {
    icon: Building2,
    title: "Enterprise Brand at Velocity",
    company: "Truv · Series B SaaS",
    description:
      "Positioned a compliance SaaS for rapid enterprise adoption. Built messaging framework, demand gen strategy, and ABM campaigns that turned complex technical products into must-have solutions.",
    metrics: [
      { value: "B2B", label: "Enterprise" },
      { value: "ABM", label: "Strategy" },
      { value: "Series B", label: "Scale" },
    ],
    accent: "maroon",
  },
  {
    icon: RefreshCw,
    title: "Marketing Infrastructure Overhaul",
    company: "Inspiration Mobility",
    description:
      "Led complete martech migration and introduced AI-powered content workflows. Transformed slow, manual campaigns into intelligent, autonomous systems.",
    metrics: [
      { value: "25%", label: "ROI Lift" },
      { value: "AI", label: "Powered" },
      { value: "0", label: "Manual Work" },
    ],
    accent: "teal",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, -150]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  const heroOpacity = useTransform(
    heroScrollProgress,
    [0, 0.5, 1],
    [1, 0.8, 0.4]
  );

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-maroon z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Navbar />

      {/* ===== HERO (DARK) ===== */}
      <section className="section-dark relative min-h-screen px-6 md:px-[71px] pt-32 pb-20 flex items-center overflow-hidden">
        {/* Parallax background orb */}
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl"
          style={{ y: heroY }}
        />

        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Copy */}
              <div>
                {/* Badge */}
                <motion.div
                  className="inline-block px-4 py-2 rounded-full bg-maroon/10 text-maroon-light text-sm font-mono mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  TECHNICAL FORCE MULTIPLIER
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-dark-text"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  I BUILD BRANDS
                  <br />
                  THAT <span className="text-maroon-light">SCALE</span> AND
                  <br />
                  STORIES THAT SELL.
                </motion.h1>

                {/* Description */}
                <motion.div
                  className="max-w-xl space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <p className="text-lg text-dark-muted leading-relaxed">
                    From zero to acquisition. From quiet to dominant. I architect
                    growth strategies that turn overlooked companies into category
                    leaders.
                  </p>
                </motion.div>

                {/* Metrics */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {[
                    { value: "2,000%", label: "Audience Growth", color: "text-maroon-light" },
                    { value: "400K", label: "Users Year 1", color: "text-teal-light" },
                    { value: "100%", label: "YoY Revenue", color: "text-gold" },
                    { value: "1", label: "Acquisition Exit", color: "text-maroon-light" },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div
                        className={`text-3xl sm:text-4xl font-black tabular-nums ${metric.color}`}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs sm:text-sm text-dark-muted mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="flex flex-wrap gap-4 mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <PillButton href="#portfolio" variant="primary" showArrow>
                    View The Exit Story
                  </PillButton>
                  <PillButton href="#contact" variant="outline-light" showArrow>
                    Get in Touch
                  </PillButton>
                </motion.div>
              </div>

              {/* Right: Headshot */}
              <div className="hidden md:flex justify-center">
                <HeroHeadshot />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== EXIT STORY (LIGHT) ===== */}
      <section id="portfolio" className="section-light py-20 sm:py-28 px-6 md:px-[71px]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="THE EXIT STORY"
            headline="Built a Category-Defining Podcast"
            subtitle="ZappyRide needed credibility in a crowded, skeptical EV market. Traditional marketing wasn't enough."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Thought Leadership Card */}
            <motion.div
              className="card-rounded card-light p-8 sm:p-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-maroon/10 flex items-center justify-center mb-6">
                <Mic size={28} className="text-maroon-light" />
              </div>
              <h3 className="text-2xl font-bold text-light-text mb-3">
                Thought Leadership
              </h3>
              <p className="text-light-muted leading-relaxed mb-6">
                Created ZappyCast — a weekly podcast featuring industry leaders,
                Tesla engineers, policy makers, and EV pioneers. Not as a
                &ldquo;marketing channel,&rdquo; but as genuine thought
                leadership.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-light-border">
                <div>
                  <div className="text-3xl font-black text-maroon tabular-nums">
                    50+
                  </div>
                  <div className="text-sm text-light-muted">Episodes</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-teal tabular-nums">
                    100K+
                  </div>
                  <div className="text-sm text-light-muted">Listeners</div>
                </div>
              </div>
            </motion.div>

            {/* Growth Infrastructure Card */}
            <motion.div
              className="card-rounded card-light p-8 sm:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-teal-light" />
              </div>
              <h3 className="text-2xl font-bold text-light-text mb-3">
                Growth Infrastructure
              </h3>
              <p className="text-light-muted leading-relaxed mb-6">
                Became the most-cited EV podcast in the industry. Drove inbound
                partnerships, press coverage, and positioned ZappyRide as the
                authority — ultimately contributing to the J.D. Power acquisition.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-light-border">
                <div>
                  <div className="text-3xl font-black text-maroon tabular-nums">
                    400K
                  </div>
                  <div className="text-sm text-light-muted">Year 1 Users</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-teal tabular-nums">
                    100%
                  </div>
                  <div className="text-sm text-light-muted">YoY Revenue</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Acquisition Timeline Strip */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-maroon" />
              <div>
                <p className="text-sm font-bold text-light-text">April 2021</p>
                <p className="text-xs text-light-muted">ZappyCast Launch</p>
              </div>
            </div>
            <div className="flex-1 max-w-[200px] border-t-2 border-dashed border-light-border" />
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-teal" />
              <div>
                <p className="text-sm font-bold text-light-text">May 2023</p>
                <p className="text-xs text-light-muted">J.D. Power Acquisition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== GROWTH PORTFOLIO (DARK) ===== */}
      <section className="section-dark py-20 sm:py-28 px-6 md:px-[71px]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="GROWTH PORTFOLIO"
            headline="Work That Compounds"
            theme="dark"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {growthStories.map((story, i) => {
              const Icon = story.icon;
              const accentText =
                story.accent === "maroon"
                  ? "text-maroon-light"
                  : "text-teal-light";
              const accentBg =
                story.accent === "maroon" ? "bg-maroon/10" : "bg-teal/10";

              return (
                <motion.div
                  key={story.company}
                  className="group card-rounded card-dark p-6 sm:p-8"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${accentBg} flex items-center justify-center`}
                    >
                      <Icon size={24} className={accentText} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center group-hover:border-maroon-light/50 transition-colors">
                      <ArrowUpRight
                        size={16}
                        className="text-dark-muted group-hover:text-maroon-light arrow-rotate"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${accentText}`}>
                    {story.title}
                  </h3>
                  <p className="text-sm font-mono text-dark-muted mb-4">
                    {story.company}
                  </p>
                  <p className="text-dark-muted leading-relaxed mb-6 text-sm">
                    {story.description}
                  </p>

                  <div className="pt-5 border-t border-dark-border grid grid-cols-3 gap-4 text-center">
                    {story.metrics.map((m) => (
                      <div key={m.label}>
                        <div
                          className={`text-xl sm:text-2xl font-black tabular-nums ${accentText}`}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-dark-muted">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SKILLS MARQUEE ===== */}
      <SkillsMarquee />

      {/* ===== EXPERIENCE (LIGHT) ===== */}
      <section className="section-light py-20 sm:py-28 px-6 md:px-[71px]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="EXPERIENCE"
            headline="Career Timeline"
            align="center"
          />
          <ExperienceTimeline />
        </div>
      </section>

      {/* ===== CAPABILITIES (DARK) ===== */}
      <section className="section-dark py-20 sm:py-28 px-6 md:px-[71px]">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            badge="CAPABILITIES"
            headline="What I Build"
            theme="dark"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <ServiceCard
                key={cap.title}
                title={cap.title}
                description={cap.description}
                items={cap.items}
                icon={cap.icon}
                index={i}
                accent={cap.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT (LIGHT) ===== */}
      <section
        id="contact"
        className="section-light py-20 sm:py-28 px-6 md:px-[71px]"
      >
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-light-text mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              LET&apos;S BUILD
              <br />
              SOMETHING UNFORGETTABLE
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-light-muted mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you&apos;re a startup looking for your breakthrough moment
              or an enterprise ready to dominate your category — I build growth
              engines that compound.
            </motion.p>

            {/* Contact Cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="mailto:cameron@cameronwolf.info"
                className="card-rounded card-light p-6 group text-center hover:border-maroon/30"
              >
                <Mail
                  size={28}
                  className="mx-auto mb-3 text-maroon group-hover:scale-110 transition-transform"
                />
                <p className="text-sm font-bold text-light-text">Email</p>
                <p className="text-xs text-light-muted mt-1">
                  cameron@cameronwolf.info
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-rounded card-light p-6 group text-center hover:border-teal/30"
              >
                <Linkedin
                  size={28}
                  className="mx-auto mb-3 text-teal group-hover:scale-110 transition-transform"
                />
                <p className="text-sm font-bold text-light-text">LinkedIn</p>
                <p className="text-xs text-light-muted mt-1">
                  linkedin.com/in/camwolf
                </p>
              </a>
            </motion.div>

            <PillButton
              href="mailto:cameron@cameronwolf.info?subject=Let's%20Build%20Together"
              variant="outline"
              showArrow
            >
              START THE CONVERSATION
            </PillButton>

            <motion.p
              className="text-xs text-light-muted mt-8 font-mono tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              CURRENTLY OPEN TO SELECT PROJECTS
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
