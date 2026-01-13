"use client";

import { motion, useScroll, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animated Counter with Tabular Numbers
function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <span ref={ref} className="tabular-nums">{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Warm Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent-warm z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-card-border z-40"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="serif-heading text-xl tracking-tight">Cameron Wolf</div>
          <a href="#audit" className="tactile-btn-secondary text-sm">
            Request Systems Audit
          </a>
        </div>
      </motion.nav>

      {/* Hero: The Identity Statement */}
      <section className="min-h-screen px-6 md:px-12 pt-32 pb-20 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* Status Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-accent-sage/10 border border-accent-sage/20 text-accent-sage text-sm font-mono mb-8">
              STATUS: BUILDING DURABLE GROWTH NUCLEI
            </div>

            {/* Oversized Identity Statement */}
            <h1 className="serif-display text-7xl md:text-9xl mb-12 leading-[0.95]" style={{ transform: 'translateX(-2px)' }}>
              HEY, I'M CAMERON.<br />
              I ENGINEER THE<br />
              SYSTEMS THAT MAKE<br />
              <span className="text-accent-warm">ULTRA-GROWTH</span><br />
              INEVITABLE.
            </h1>

            {/* The Narrative */}
            <div className="max-w-3xl">
              <p className="editorial-text text-xl md:text-2xl leading-relaxed mb-6">
                Marketing is no longer a department; it is a <strong>technical infrastructure problem</strong>. I architect high-velocity growth frameworks that bridge the gap between "writing code" and "expressing intent."
              </p>
              <p className="editorial-text text-xl md:text-2xl leading-relaxed text-gray-600">
                My focus is on <strong>systemic optimization</strong>—building autonomous engines that turn data into a mathematical path toward 100%+ annual scaling.
              </p>
            </div>
          </motion.div>

          {/* Quick Metrics - Tabular Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="metric-block">
              <div className="text-4xl serif-display text-accent-warm mb-2 tabular-nums">
                +<AnimatedCounter end={2000} />%
              </div>
              <div className="text-sm text-gray-600 font-medium">Audience Expansion</div>
            </div>
            <div className="metric-block">
              <div className="text-4xl serif-display text-accent-earth mb-2 tabular-nums">
                <AnimatedCounter end={400} />K
              </div>
              <div className="text-sm text-gray-600 font-medium">Users Processed</div>
            </div>
            <div className="metric-block">
              <div className="text-4xl serif-display text-accent-sage mb-2 tabular-nums">
                100%
              </div>
              <div className="text-sm text-gray-600 font-medium">YOY Revenue Growth</div>
            </div>
            <div className="metric-block">
              <div className="text-4xl serif-display text-accent-warm mb-2 tabular-nums">
                25%
              </div>
              <div className="text-sm text-gray-600 font-medium">ROI Lift via LLMs</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Manifesto: Systems Over Campaigns */}
      <section className="py-32 px-6 md:px-12 bg-card">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16"
          >
            {/* Left: Heading */}
            <div>
              <h2 className="serif-display text-5xl md:text-6xl leading-tight">
                THE PHILOSOPHY<br />OF THE ENGINE.
              </h2>
            </div>

            {/* Right: Manifesto */}
            <div className="space-y-8">
              <p className="editorial-text text-xl leading-relaxed">
                Most marketing fails because it is <strong>brittle</strong>. I build <strong>Autonomous Growth Engines</strong> designed to withstand the complexity of modern markets.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="serif-heading text-2xl mb-3 text-accent-warm">Determinism</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Eliminating "best guesses" through SQL-driven attribution and deterministic task paths.
                  </p>
                </div>

                <div>
                  <h3 className="serif-heading text-2xl mb-3 text-accent-earth">Velocity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Engineering the "Always-On" experimentation engine to maximize the rate of learning.
                  </p>
                </div>

                <div>
                  <h3 className="serif-heading text-2xl mb-3 text-accent-sage">Integrity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring every machine-facing surface (APIs, Feeds, Schemas) is optimized for the AI-agent economy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Architecture: Portfolio as System Audits */}
      <section id="systems" className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-accent-warm/10 text-accent-warm text-sm font-mono mb-6">
                SYSTEM AUDITS
              </div>
              <h2 className="serif-display text-6xl md:text-7xl mb-6">
                The Architecture
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Each engagement is a complete systems overhaul—not campaigns, but infrastructure.
              </p>
            </div>

            {/* Asymmetric Bento Grid */}
            <div className="bento-grid">
              {/* Card A: SaaS Scale Framework */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="col-span-12 md:col-span-7 bento-card p-10"
              >
                <div className="mb-6">
                  <span className="text-sm font-mono text-accent-warm">CASE STUDY A</span>
                  <h3 className="serif-heading text-4xl mt-2 mb-4">
                    ARCHITECTING THE SaaS EXIT NUCLEUS
                  </h3>
                  <p className="text-sm font-mono text-gray-500 mb-6">J.D. Power / ZappyRide · 2021-2023</p>
                </div>

                <p className="editorial-text text-lg text-gray-700 mb-6 leading-relaxed">
                  Designed a bootstrapped GTM framework that scaled revenue <strong className="tabular-nums">100% YOY</strong>. I didn't just build a brand; I built an infrastructure so robust it passed the <strong>J.D. Power stress test</strong>, resulting in a full acquisition.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="metric-block">
                    <div className="text-3xl serif-display text-accent-warm mb-1 tabular-nums">+2,000%</div>
                    <div className="text-sm text-gray-600">Audience Growth</div>
                  </div>
                  <div className="metric-block">
                    <div className="text-3xl serif-display text-accent-earth mb-1 tabular-nums">400K</div>
                    <div className="text-sm text-gray-600">First-Year Users</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Architected ZappyCast podcast infrastructure for thought leadership</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Built deterministic lead generation engine with SQL-driven attribution</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Facilitated acquisition through demonstrable infrastructure value</span>
                  </div>
                </div>
              </motion.div>

              {/* Card B: Mass-User Engine */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-12 md:col-span-5 bento-card p-10"
              >
                <div className="mb-6">
                  <span className="text-sm font-mono text-accent-earth">CASE STUDY B</span>
                  <h3 className="serif-heading text-3xl mt-2 mb-4">
                    HIGH-VELOCITY INBOUND ORCHESTRATION
                  </h3>
                  <p className="text-sm font-mono text-gray-500 mb-6">Sweet Express · 2019-2021</p>
                </div>

                <p className="editorial-text text-gray-700 mb-6 leading-relaxed">
                  Engineered a content and recruitment portal that processed <strong className="tabular-nums">400,000 users</strong> in 12 months. By automating the "Human-First" media loop, achieved <strong className="tabular-nums">2,000%</strong> audience expansion with zero manual intervention.
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-earth mt-1">→</span>
                    <span>Autonomous content distribution engine</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-earth mt-1">→</span>
                    <span>Transformed marketing into revenue stream</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-earth mt-1">→</span>
                    <span>Zero-touch scaling architecture</span>
                  </div>
                </div>
              </motion.div>

              {/* Card C: Enterprise Logic Layer */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="col-span-12 md:col-span-12 bento-card p-10"
              >
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <span className="text-sm font-mono text-accent-sage">CASE STUDY C</span>
                    <h3 className="serif-heading text-3xl mt-2 mb-4">
                      CRM MIGRATION & LLM INTEGRATION
                    </h3>
                    <p className="text-sm font-mono text-gray-500 mb-6">Inspiration Mobility · 2023-Present</p>

                    <p className="editorial-text text-gray-700 mb-6 leading-relaxed">
                      Spearheaded the transition from HubSpot to <strong>Salesforce Marketing Cloud</strong> to enable enterprise-grade automation. Integrated custom LLMs into the MarCom stack, turning "marketing tasks" into "autonomous intelligence loops" that yielded a <strong className="tabular-nums">25% ROI lift</strong>.
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent-sage mt-1">→</span>
                        <span>Enterprise CRM migration architecture</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent-sage mt-1">→</span>
                        <span>Custom LLM deployment for agentic workflows</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent-sage mt-1">→</span>
                        <span>SEM budget optimization via deterministic modeling</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-foreground/5 rounded-2xl p-6">
                    <div className="text-xs font-mono text-accent-sage mb-4">MIGRATION LOGIC SAMPLE</div>
                    <pre className="text-sm font-mono text-gray-700 overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`// Deterministic lead scoring
async function migrateLeadData(lead) {
  const enriched = {
    ...lead,
    score: calculateEngagement(lead),
    segment: determineMarket(lead),
    intent: predictConversion(lead)
  };

  await sfmc.create({
    object: 'Lead',
    data: transform(enriched),
    route: assignByIntent(enriched)
  });

  // Result: 25% ROI lift
}`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Engine Room: Technical Stack */}
      <section className="py-32 px-6 md:px-12 bg-card">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-display text-5xl md:text-6xl mb-16">The Engine Room</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-sm font-mono text-accent-warm mb-4 uppercase tracking-wide">Frameworks & Logic</h3>
                <div className="space-y-2 font-mono text-sm text-gray-700">
                  <div>SQL</div>
                  <div>HTML / CSS</div>
                  <div>PYTHON</div>
                  <div>RICE PRIORITIZATION</div>
                  <div>JOBS-TO-BE-DONE</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-accent-earth mb-4 uppercase tracking-wide">The Stack</h3>
                <div className="space-y-2 font-mono text-sm text-gray-700">
                  <div>SALESFORCE MARKETING CLOUD</div>
                  <div>HUBSPOT</div>
                  <div>LOOKER STUDIO</div>
                  <div>SEMRUSH</div>
                  <div>GOOGLE ANALYTICS 4</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono text-accent-sage mb-4 uppercase tracking-wide">Emerging Intelligence</h3>
                <div className="space-y-2 font-mono text-sm text-gray-700">
                  <div>CUSTOM LLM DEPLOYMENT</div>
                  <div>AGENTIC WORKFLOWS</div>
                  <div>GENERATIVE SEARCH (GSO)</div>
                  <div>DETERMINISTIC ATTRIBUTION</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Experience */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-display text-5xl md:text-6xl mb-16">Prior Systems Work</h2>

            <div className="space-y-12">
              <div className="border-l-2 border-accent-warm pl-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="serif-heading text-2xl mb-1">Marketing Coordinator</h3>
                    <p className="text-lg text-accent-earth font-medium">Keller Williams Realty</p>
                  </div>
                  <span className="text-gray-500 text-sm font-mono">2018-2019</span>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Achieved <strong className="tabular-nums">200%</strong> increase in website traffic through technical SEO</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Optimized marketing channels for systematic lead generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-warm mt-1">→</span>
                    <span>Architected video content distribution pipeline</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Consultative CTA */}
      <section id="audit" className="py-32 px-6 md:px-12 bg-card">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-display text-6xl md:text-7xl mb-8">
              READY TO AUDIT<br />YOUR GROWTH ENGINE?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              I specialize in organizations that have outgrown "simple marketing" and require a <strong>Systems Architect</strong> to prepare for ultra-growth.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <motion.a
                href="mailto:cameron@cameronwolf.info"
                whileHover={{ scale: 1.03 }}
                className="bento-card p-8 text-left"
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="serif-heading text-lg mb-2">Email</h3>
                <p className="text-accent-earth font-medium text-sm">cameron@cameronwolf.info</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="bento-card p-8 text-left"
              >
                <div className="text-3xl mb-3">💼</div>
                <h3 className="serif-heading text-lg mb-2">LinkedIn</h3>
                <p className="text-accent-earth font-medium text-sm">Connect on LinkedIn</p>
              </motion.a>
            </div>

            {/* Shimmer Button */}
            <motion.a
              href="mailto:cameron@cameronwolf.info?subject=Systems%20Audit%20Request"
              className="inline-block tactile-btn text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">REQUEST A SYSTEMS AUDIT</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'linear',
                }}
              />
            </motion.a>

            <p className="text-sm text-gray-500 mt-6 font-mono">
              TYPICAL ENGAGEMENT: 90-DAY INFRASTRUCTURE BUILD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-card-border">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Cameron Wolf · <span className="font-mono">Systems Architect</span>
          </p>
          <p className="text-xs text-gray-500 font-mono">
            BUILT WITH NEXT.JS 15 · DETERMINISTIC DESIGN SYSTEM
          </p>
        </div>
      </footer>
    </div>
  );
}
