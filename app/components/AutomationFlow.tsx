"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function AutomationFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax layers with different speeds
  const layer1Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [100, -100]),
    { stiffness: 100, damping: 30 }
  );

  const layer2Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, -150]),
    { stiffness: 120, damping: 30 }
  );

  const layer3Y = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -200]),
    { stiffness: 80, damping: 30 }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-20 sm:py-32 px-4 sm:px-6 md:px-12 overflow-hidden section-dark"
    >
      {/* Decorative parallax backgrounds */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-maroon/10 blur-3xl"
        style={{ y: layer1Y }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-teal/10 blur-3xl"
        style={{ y: layer2Y }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-3 sm:px-4 py-2 rounded-full bg-maroon/10 text-maroon-light text-xs sm:text-sm font-mono mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            LIVE AUTOMATION ARCHITECTURE
          </motion.div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            DATA IN MOTION
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-muted max-w-3xl mx-auto">
            Watch how intelligent automation transforms raw contact data into qualified,
            enriched leads ready for multi-channel outreach.
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connection Lines - hidden on mobile where cards stack vertically */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            {/* HubSpot to Clay */}
            <motion.path
              d="M 200 200 Q 400 80, 600 200"
              stroke="url(#gradient1)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Clay to SmartLead */}
            <motion.path
              d="M 600 200 Q 800 320, 1000 200"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10 5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9A1B3D" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00A3A3" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00A3A3" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Platform Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 z-10">
            {/* HubSpot */}
            <motion.div
              className="relative"
              style={{ y: layer1Y }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="card-rounded card-dark p-6 sm:p-8"
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(154, 27, 61, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-maroon/10 flex items-center justify-center">
                  <div className="text-3xl font-bold text-maroon-light">H</div>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-3xl mb-3 text-maroon-light">
                  HubSpot
                </h3>
                <p className="text-sm font-mono text-dark-muted mb-6">SOURCE SYSTEM</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-dark-muted leading-relaxed mb-6">
                  CRM extracts contact records via API. Filters by lifecycle stage,
                  ICP criteria, and engagement signals.
                </p>

                {/* Data Output */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-maroon-light mb-2">OUTPUT DATA:</div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-maroon/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-maroon animate-pulse" />
                    <span className="font-mono text-dark-muted">contact_id, email, company</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-maroon/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-maroon animate-pulse" />
                    <span className="font-mono text-dark-muted">industry, revenue_range</span>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <div className="text-2xl font-bold text-maroon-light font-black tabular-nums">2,500</div>
                  <div className="text-xs text-dark-muted">Records/Day</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Clay */}
            <motion.div
              className="relative"
              style={{ y: layer2Y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="card-rounded card-dark p-6 sm:p-8"
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0, 163, 163, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-teal/10 flex items-center justify-center">
                  <div className="text-3xl font-bold text-teal-light">C</div>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-3xl mb-3 text-teal-light">
                  Clay
                </h3>
                <p className="text-sm font-mono text-dark-muted mb-6">ENRICHMENT ENGINE</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-dark-muted leading-relaxed mb-6">
                  Enriches contacts with 50+ data sources. Appends technographics,
                  intent signals, and verified contact info.
                </p>

                {/* Data Output */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-teal-light mb-2">ENRICHED DATA:</div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-teal/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="font-mono text-dark-muted">job_title, linkedin_url</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-teal/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="font-mono text-dark-muted">tech_stack, intent_score</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-teal/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                    <span className="font-mono text-dark-muted">funding_stage, headcount</span>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <div className="text-2xl font-bold text-teal-light font-black tabular-nums">94%</div>
                  <div className="text-xs text-dark-muted">Enrichment Rate</div>
                </div>
              </motion.div>
            </motion.div>

            {/* SmartLead */}
            <motion.div
              className="relative"
              style={{ y: layer3Y }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="card-rounded card-dark p-6 sm:p-8"
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px rgba(201, 168, 76, 0.15)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <div className="text-3xl font-bold text-gold">S</div>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-3xl mb-3 text-gold">
                  SmartLead
                </h3>
                <p className="text-sm font-mono text-dark-muted mb-6">ACTIVATION LAYER</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-dark-muted leading-relaxed mb-6">
                  Executes personalized outreach sequences. A/B tests messaging,
                  optimizes send times, manages deliverability.
                </p>

                {/* Data Output */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-gold mb-2">CAMPAIGN DATA:</div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-gold/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="font-mono text-dark-muted">sequence_id, variant</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 text-xs bg-gold/5 rounded-lg px-3 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="font-mono text-dark-muted">send_time, opens, clicks</span>
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <div className="text-2xl font-bold text-gold font-black tabular-nums">38%</div>
                  <div className="text-xs text-dark-muted">Response Rate</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-maroon-light font-black tabular-nums">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                24/7
              </motion.span>
            </div>
            <div className="text-xs sm:text-sm text-dark-muted mt-2 font-mono">AUTONOMOUS</div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-teal-light font-black tabular-nums">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                &lt;2s
              </motion.span>
            </div>
            <div className="text-xs sm:text-sm text-dark-muted mt-2 font-mono">LATENCY</div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold font-black tabular-nums">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                0
              </motion.span>
            </div>
            <div className="text-xs sm:text-sm text-dark-muted mt-2 font-mono">MANUAL STEPS</div>
          </div>

          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-maroon-light font-black tabular-nums">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                100%
              </motion.span>
            </div>
            <div className="text-xs sm:text-sm text-dark-muted mt-2 font-mono">AUDITABLE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
