"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import PillButton from "../components/PillButton";
import Footer from "../components/Footer";
import AutomationFlow from "../components/AutomationFlow";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms with spring physics
  const heroY = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, -200]),
    { stiffness: 100, damping: 30, restDelta: 0.001 }
  );

  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 0.95]);

  const statusBadgeY = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, -100]),
    { stiffness: 150, damping: 30 }
  );

  const narrativeY = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, -150]),
    { stiffness: 120, damping: 30 }
  );

  // Parallax background orbs
  const bgOrb1Y = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, 300]),
    { stiffness: 100, damping: 30 }
  );
  const bgOrb2Y = useSpring(
    useTransform(heroScrollProgress, [0, 1], [0, 200]),
    { stiffness: 120, damping: 30 }
  );
  const manifestoOrbY = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3], [100, -100]),
    { stiffness: 100, damping: 30 }
  );
  const archOrbY = useSpring(
    useTransform(scrollYProgress, [0.3, 0.6], [200, -200]),
    { stiffness: 80, damping: 30 }
  );
  const engineOrbY = useSpring(
    useTransform(scrollYProgress, [0.6, 0.9], [100, -100]),
    { stiffness: 100, damping: 30 }
  );
  const ctaOrb1Y = useSpring(
    useTransform(scrollYProgress, [0.8, 1], [50, -50]),
    { stiffness: 100, damping: 30 }
  );
  const ctaOrb2Y = useSpring(
    useTransform(scrollYProgress, [0.8, 1], [-50, 50]),
    { stiffness: 100, damping: 30 }
  );

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-maroon z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Identity Statement */}
      <section className="section-dark relative min-h-screen px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 pb-20 flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Parallax Background Elements */}
          <motion.div
            className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl"
            style={{ y: bgOrb1Y }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-teal/5 blur-3xl"
            style={{ y: bgOrb2Y }}
          />

          <motion.div
            style={{
              y: heroY,
              opacity: heroOpacity,
              scale: heroScale
            }}
            className="relative z-10"
          >
            {/* Status Badge */}
            <motion.div
              className="inline-block px-3 sm:px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal-light text-xs sm:text-sm font-mono mb-6 sm:mb-8"
              style={{ y: statusBadgeY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              STATUS: BUILDING GTM + OPS INFRASTRUCTURE
            </motion.div>

            {/* Identity Statement */}
            <motion.h1
              className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 sm:mb-12 leading-[0.95]"
              style={{ transform: 'translateX(-2px)' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I BUILD THE<br />
              <span className="text-maroon-light">OPERATING SYSTEMS</span><br />
              BEHIND MODERN<br />
              GROWTH.
            </motion.h1>

            {/* Narrative */}
            <motion.div
              className="max-w-3xl space-y-4 sm:space-y-6"
              style={{ y: narrativeY }}
            >
              <motion.p
                className="text-lg sm:text-xl md:text-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Growth, onboarding, and customer operations are no longer just management problems. They are <strong>systems problems</strong>.
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl leading-relaxed text-dark-muted"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I build the CRM architecture, automation, API integrations, attribution, AI workflows, and onboarding systems that help teams scale without adding more manual work.
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl leading-relaxed text-dark-muted"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Most startup operations are duct tape. Leads, handoffs, onboarding steps, enrichment, reporting, and follow-up all depend on the person who remembers how the process works. I rebuild that into systems.
              </motion.p>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl leading-relaxed text-dark-muted"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                The job is not running more campaigns. The job is building the machine that routes work, scores intent, orchestrates follow-up, measures outcomes, and keeps operating when nobody is babysitting a spreadsheet.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto - Systems Over Manual Ops */}
      <section className="section-light relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Parallax Background Shape */}
        <motion.div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl"
          style={{
            y: manifestoOrbY
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12 sm:mb-16">
              <motion.h2
                className="font-sans font-black text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 text-light-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                SYSTEMS OVER MANUAL OPS
              </motion.h2>
              <motion.h3
                className="font-sans font-bold text-2xl sm:text-3xl text-teal mb-8 sm:mb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                THE OPERATING PRINCIPLES
              </motion.h3>
              <motion.p
                className="text-lg sm:text-xl leading-relaxed text-light-muted max-w-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Operational infrastructure has to be concrete enough to run today and durable enough to survive growth.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                className="card-rounded card-light p-6 sm:p-8"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="font-sans font-bold text-xl sm:text-2xl mb-4 text-maroon-light">Clarity</h4>
                <p className="text-sm sm:text-base text-light-muted leading-relaxed">
                  Every lifecycle stage, handoff, routing rule, and report needs a clear owner and a clear source of truth. If the process only lives in someone&apos;s head, it is not a system yet.
                </p>
              </motion.div>

              <motion.div
                className="card-rounded card-light p-6 sm:p-8"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="font-sans font-bold text-xl sm:text-2xl mb-4 text-teal">Leverage</h4>
                <p className="text-sm sm:text-base text-light-muted leading-relaxed">
                  Automation should remove repeat work, not create a black box. The goal is fewer manual updates, faster handoffs, cleaner data, and more time for judgment.
                </p>
              </motion.div>

              <motion.div
                className="card-rounded card-light p-6 sm:p-8"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h4 className="font-sans font-bold text-xl sm:text-2xl mb-4 text-teal-light">Resilience</h4>
                <p className="text-sm sm:text-base text-light-muted leading-relaxed">
                  Systems degrade when assumptions break. The work is designing workflows, schemas, dashboards, and documentation that stay useful after the first messy edge case shows up.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Automation Flow Visualization */}
      <AutomationFlow />

      {/* Architecture - System Audits */}
      <section id="systems" className="section-dark relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Parallax Decorative Elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-maroon/5 blur-3xl"
          style={{
            y: archOrbY
          }}
        />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-12 sm:mb-16">
              <motion.div
                className="inline-block px-3 sm:px-4 py-2 rounded-full bg-maroon/10 text-maroon-light text-xs sm:text-sm font-mono mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                PORTFOLIO AS SYSTEM AUDITS
              </motion.div>
              <motion.h2
                className="font-sans font-black text-5xl sm:text-6xl md:text-7xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Architecture
              </motion.h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* System Audit 01 - Enterprise Growth Logic Layer */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="card-rounded card-dark p-6 sm:p-8 md:p-10"
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <span className="text-xs sm:text-sm font-mono text-maroon-light">SYSTEM AUDIT 01</span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl mt-2 mb-4">
                    ENTERPRISE GROWTH LOGIC LAYER
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-dark-muted mb-6">Truv · Series B Enterprise Compliance SaaS</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">Outcome</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Built the CRM and automation spine for a high-velocity B2B growth engine at Truv (Series B, enterprise compliance SaaS).
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">What Was Built</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Architected a deterministic lifecycle management system using HubSpot Ops Hub, custom objects, and constraint-based workflow logic. Integrated ClickHouse and BigQuery for real-time attribution. Deployed Clay for enrichment pipelines and SmartLead + Knock for multi-channel orchestration.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-base sm:text-lg mb-3">System Architecture</h4>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <div>
                      <span className="font-mono text-maroon-light">CRM & Logic:</span>
                      <p className="text-dark-muted mt-1">HubSpot (Ops Hub, custom objects, workflows, calculated properties)</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal">Data Plane:</span>
                      <p className="text-dark-muted mt-1">BigQuery, ClickHouse, Hex</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal-light">Enrichment:</span>
                      <p className="text-dark-muted mt-1">Clay</p>
                    </div>
                    <div>
                      <span className="font-mono text-maroon-light">Activation:</span>
                      <p className="text-dark-muted mt-1">SmartLead, Knock, SendGrid</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>Custom object schema for account-based lifecycle tracking</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>SQL-driven attribution model with ClickHouse query layer</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>Automated enrichment workflows (Clay → HubSpot sync)</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>Multi-touch orchestration engine (email, in-app, SMS via API routing)</span>
                    </li>
                  </ul>
                </div>

                <div className="card-rounded card-dark p-6 border-l-4 border-maroon">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-dark-muted">
                    Eliminated manual lead routing. Enabled real-time ABM without sales ops intervention. Created auditable attribution layer for revenue forecasting.
                  </p>
                </div>
              </motion.div>

              {/* System Audit 02 - SaaS Exit Nucleus */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-rounded card-dark p-6 sm:p-8 md:p-10"
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <span className="text-xs sm:text-sm font-mono text-teal">SYSTEM AUDIT 02</span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl mt-2 mb-4">
                    SaaS EXIT NUCLEUS
                  </h3>
                  <p className="text-sm font-mono text-dark-muted mb-6">ZappyRide → J.D. Power Acquisition</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Built the growth engine that delivered hundreds of qualified leads converting into recurring revenue, ultimately leading to acquisition by J.D. Power.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">What Was Built</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Built a bootstrapped growth engine optimized for acquisition readiness. Architected ZappyCast (EV industry podcast) as a thought leadership distribution system. Created deterministic SEO and content loops in HubSpot. Designed custom HTML/CSS for speed and brand differentiation.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Architecture</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-mono text-teal">CRM & Automation:</span>
                      <p className="text-dark-muted mt-1">HubSpot (workflows, lead scoring, content attribution)</p>
                    </div>
                    <div>
                      <span className="font-mono text-maroon-light">Distribution:</span>
                      <p className="text-dark-muted mt-1">Custom podcast infrastructure, SEMrush for technical SEO</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal-light">Brand Layer:</span>
                      <p className="text-dark-muted mt-1">Custom HTML/CSS (no-code constraints eliminated)</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal mt-1">→</span>
                      <span>Deterministic content attribution (SEMrush + HubSpot integration)</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal mt-1">→</span>
                      <span>Podcast-to-lead pipeline with automated nurture sequences</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal mt-1">→</span>
                      <span>Custom site architecture for performance and conversion optimization</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal mt-1">→</span>
                      <span>Infrastructure designed to demonstrate acquisition value (not just traction)</span>
                    </li>
                  </ul>
                </div>

                <div className="card-rounded card-dark p-6 border-l-4 border-teal">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-dark-muted tabular-nums">
                    Hundreds of qualified leads converted into recurring revenue. Acquired by J.D. Power in 2023.
                  </p>
                </div>
              </motion.div>

              {/* System Audit 03 - Mass-User Inbound Engine */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="card-rounded card-dark p-6 sm:p-8 md:p-10"
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <span className="text-xs sm:text-sm font-mono text-teal-light">SYSTEM AUDIT 03</span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl mt-2 mb-4">
                    MASS-USER INBOUND ENGINE
                  </h3>
                  <p className="text-sm font-mono text-dark-muted mb-6">Sweet Express · Content & Recruitment Portal</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Built a content and recruitment portal that reached 400,000 users in 12 months at Sweet Express.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">What Was Built</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Built a content distribution system with CMS-driven workflows, recruiting paths, and feedback loop analytics. Designed it to scale by turning repeat publishing and follow-up tasks into defined workflows.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Architecture</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-mono text-teal-light">Content Ops:</span>
                      <p className="text-dark-muted mt-1">CMS with workflow automation</p>
                    </div>
                    <div>
                      <span className="font-mono text-maroon-light">Analytics Feedback:</span>
                      <p className="text-dark-muted mt-1">Custom event tracking → content prioritization logic</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal">Distribution:</span>
                      <p className="text-dark-muted mt-1">Multi-channel syndication (social, email, SEO)</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal-light mt-1">→</span>
                      <span>Content recommendation engine based on engagement signals</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal-light mt-1">→</span>
                      <span>Editorial calendar with repeatable publishing workflow</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal-light mt-1">→</span>
                      <span>User acquisition funnel with deterministic conversion paths</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-teal-light mt-1">→</span>
                      <span>Revenue transformation: marketing became a profit center</span>
                    </li>
                  </ul>
                </div>

                <div className="card-rounded card-dark p-6 border-l-4 border-teal">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-dark-muted tabular-nums">
                    2,000% audience expansion and 400,000 first-year portal users. Marketing became a measurable business system, not a loose collection of posts.
                  </p>
                </div>
              </motion.div>

              {/* System Audit 04 - Enterprise Automation Spine */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="card-rounded card-dark p-6 sm:p-8 md:p-10"
                whileHover={{
                  y: -6,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <span className="text-xs sm:text-sm font-mono text-maroon-light">SYSTEM AUDIT 04</span>
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl mt-2 mb-4">
                    ENTERPRISE AUTOMATION SPINE
                  </h3>
                  <p className="text-sm font-mono text-dark-muted mb-6">Inspiration Mobility · HubSpot → Salesforce Migration</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Led the HubSpot → Salesforce Marketing Cloud migration and custom LLM deployment at Inspiration Mobility.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">What Was Built</h4>
                  <p className="text-sm sm:text-base text-dark-muted leading-relaxed">
                    Spearheaded enterprise CRM transition to enable complex automation at scale. Integrated custom LLMs into the MarCom stack to turn repeat marketing tasks into AI-assisted workflows. Built API-driven orchestration for SEM, nurture, and scoring.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Architecture</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-mono text-maroon-light">CRM & Automation:</span>
                      <p className="text-dark-muted mt-1">Salesforce Marketing Cloud (Journey Builder, SQL queries, API integrations)</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal">Intelligence Layer:</span>
                      <p className="text-dark-muted mt-1">Custom LLM deployment for content generation, lead enrichment, intent scoring</p>
                    </div>
                    <div>
                      <span className="font-mono text-teal-light">Activation:</span>
                      <p className="text-dark-muted mt-1">API-driven SEM bidding, multi-channel nurture, deterministic routing</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">System Highlights</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>Migration logic: HubSpot → SFMC with zero data loss</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>LLM-powered lead scoring and intent prediction</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>Autonomous content generation for email and landing pages</span>
                    </li>
                    <li className="flex items-start gap-2 text-dark-muted">
                      <span className="text-maroon-light mt-1">→</span>
                      <span>SEM budget optimization via deterministic modeling</span>
                    </li>
                  </ul>
                </div>

                <div className="card-rounded card-dark p-6 border-l-4 border-maroon">
                  <h4 className="font-semibold text-lg mb-2">Outcome</h4>
                  <p className="text-dark-muted tabular-nums">
                    25% ROI lift. Eliminated manual content production. Enabled enterprise-grade automation without ops bottlenecks.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Engine Room - Technical Control Plane */}
      <section className="section-light relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl"
          style={{
            y: engineOrbY
          }}
        />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-12 sm:mb-16">
              <motion.div
                className="inline-block px-3 sm:px-4 py-2 rounded-full bg-teal/10 text-teal text-xs sm:text-sm font-mono mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                TECHNICAL CONTROL PLANE
              </motion.div>
              <motion.h2
                className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-light-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Engine Room
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-maroon-light mb-4 uppercase tracking-wide">Languages & Frameworks</h3>
                <div className="space-y-2 font-mono text-xs sm:text-sm text-light-muted">
                  <div>SQL</div>
                  <div>Python</div>
                  <div>TypeScript / React</div>
                  <div>HTML/CSS</div>
                  <div>REST APIs / Webhooks</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-teal mb-4 uppercase tracking-wide">CRM & Ops</h3>
                <div className="space-y-2 font-mono text-sm text-light-muted">
                  <div>HubSpot (Ops Hub, custom objects, workflows, calculated properties)</div>
                  <div>Salesforce Marketing Cloud</div>
                  <div>Pipedream</div>
                  <div>Notion</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-teal-light mb-4 uppercase tracking-wide">Activation & Orchestration</h3>
                <div className="space-y-2 font-mono text-sm text-light-muted">
                  <div>SmartLead</div>
                  <div>Knock</div>
                  <div>SendGrid</div>
                  <div>Clay</div>
                  <div>Multi-channel journey logic</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-maroon-light mb-4 uppercase tracking-wide">Data & Analytics</h3>
                <div className="space-y-2 font-mono text-sm text-light-muted">
                  <div>BigQuery</div>
                  <div>ClickHouse</div>
                  <div>Hex</div>
                  <div>Looker Studio</div>
                  <div>SEMrush</div>
                  <div>Google Analytics 4</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-teal mb-4 uppercase tracking-wide">Enrichment & Signal</h3>
                <div className="space-y-2 font-mono text-sm text-light-muted">
                  <div>Clay</div>
                  <div>Firecrawl</div>
                  <div>Clearbit</div>
                  <div>Custom enrichment pipelines</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xs sm:text-sm font-mono text-teal-light mb-4 uppercase tracking-wide">AI & Intelligence</h3>
                <div className="space-y-2 font-mono text-sm text-light-muted">
                  <div>OpenAI API</div>
                  <div>Anthropic Claude API</div>
                  <div>Agentic workflows</div>
                  <div>Firecrawl</div>
                  <div>Deterministic attribution</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultative CTA */}
      <section id="audit" className="section-dark relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-maroon/5 blur-3xl"
          style={{ y: ctaOrb1Y }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-teal/5 blur-3xl"
          style={{ y: ctaOrb2Y }}
        />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              READY TO ENGINEER<br />YOUR GTM STACK?
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-dark-muted mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I work with teams that have outgrown spreadsheets, founder memory, and manual handoffs, and need someone to build the systems that scale.
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl text-dark-muted mb-12 sm:mb-16 font-medium px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              If you need someone to run campaigns, I&apos;m not your guy. If you need someone to build the system that runs them, let&apos;s talk.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PillButton href="mailto:cameron@cameronwolf.info?subject=Systems%20Audit%20Request" variant="primary" showArrow>
                REQUEST A SYSTEMS AUDIT
              </PillButton>
            </motion.div>

            <motion.p
              className="text-xs sm:text-sm text-dark-muted mt-6 sm:mt-8 font-mono px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              TYPICAL ENGAGEMENT: 90-DAY INFRASTRUCTURE BUILD
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
