"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animated Counter Component
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

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Warm Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent-warm z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section - Bento Grid */}
      <section className="min-h-screen px-6 py-20 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-20"
          >
            <div className="serif-heading text-2xl tracking-tight">Cameron Wolf</div>
            <a href="#contact" className="tactile-btn-secondary">
              Let's Talk
            </a>
          </motion.nav>

          {/* Oversized Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="serif-display text-7xl md:text-9xl mb-8">
              HEY, I'M<br />CAMERON
            </h1>
            <p className="text-2xl md:text-3xl text-accent-earth font-light max-w-2xl">
              Technical Force Multiplier who facilitated the acquisition of ZappyRide by J.D. Power
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bento-grid mb-12"
          >
            {/* Large Headshot Card - 4 columns */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-4 bento-card p-8 flex flex-col justify-between min-h-[500px]"
            >
              <div className="bento-image bg-gradient-to-br from-accent-warm/20 to-accent-sage/20 flex items-center justify-center mb-6">
                <span className="text-8xl serif-display text-accent-earth">CW</span>
              </div>
              <div>
                <h3 className="serif-heading text-2xl mb-2">Growth Architect</h3>
                <p className="text-gray-600">Senior Leader specializing in acquisition-focused growth strategies</p>
              </div>
            </motion.div>

            {/* Acquisition Story - 5 columns */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-5 bento-card p-8 flex flex-col justify-between"
            >
              <div className="mb-6">
                <div className="inline-block px-4 py-2 rounded-full bg-accent-sage/10 text-accent-sage text-sm font-medium mb-4">
                  THE EXIT STORY
                </div>
                <h2 className="serif-heading text-4xl mb-4">
                  From Zero to Acquisition
                </h2>
                <p className="editorial-text text-gray-600">
                  In 24 months, I transformed ZappyRide from a startup into an acquisition target for J.D. Power through strategic brand positioning and data-driven infrastructure.
                </p>
              </div>
              <a href="#acquisition" className="tactile-btn w-fit">
                View Case Study →
              </a>
            </motion.div>

            {/* Metrics Block - 3 columns */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-3 bento-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-6xl serif-display text-accent-warm mb-2">
                  +<AnimatedCounter end={2000} suffix="%" />
                </div>
                <p className="text-gray-600 font-medium">Audience Growth</p>
              </div>
              <div className="mt-8">
                <div className="text-4xl serif-display text-accent-earth mb-2">
                  <AnimatedCounter end={400} />K
                </div>
                <p className="text-gray-600 font-medium">First-Year Users</p>
              </div>
            </motion.div>

            {/* Technical Infrastructure - 8 columns */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-8 bento-card p-8"
            >
              <h3 className="serif-heading text-3xl mb-6">Technical Infrastructure</h3>
              <div className="bg-foreground/5 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-mono text-accent-earth">HubSpot → Salesforce Migration</span>
                  <span className="px-3 py-1 bg-accent-warm/10 rounded-full text-xs text-accent-earth">TypeScript</span>
                </div>
                <pre className="text-sm font-mono text-gray-700 overflow-x-auto whitespace-pre-wrap">
{`// Lead scoring & automated routing
async function syncLeadData(lead: Lead) {
  const enriched = {
    ...lead,
    score: calculateEngagement(lead),
    segment: determineMarket(lead)
  };

  await salesforce.create({
    object: 'Lead',
    data: transform(enriched)
  });

  // Result: 45% increase in conversions
}`}
                </pre>
              </div>
              <p className="text-gray-600">
                MarTech expertise that bridges marketing strategy and technical execution
              </p>
            </motion.div>

            {/* Revenue Impact - 4 columns */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-12 md:col-span-4 bento-card p-8 flex flex-col justify-center"
            >
              <div className="text-6xl serif-display text-accent-sage mb-4">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-xl text-gray-700 font-medium mb-2">YOY Revenue Increase</p>
              <p className="text-gray-600">Transformed marketing into a revenue-generating operation</p>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            style={{ opacity }}
            className="scroll-indicator flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* The Acquisition Story - Editorial Layout */}
      <section id="acquisition" className="py-32 px-6 md:px-12 bg-card">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-accent-warm/10 text-accent-warm text-sm font-medium mb-6">
                CASE STUDY
              </div>
              <h2 className="serif-display text-6xl md:text-7xl mb-8">
                The Mechanics<br />of an Acquisition
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed">
                How strategic brand positioning and data-driven growth infrastructure led to J.D. Power's acquisition of ZappyRide
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-12 mb-20">
              {[
                { year: "2021", quarter: "April", title: "Joined ZappyRide", desc: "Began strategic brand positioning and audience research" },
                { year: "2021", quarter: "Q2", title: "Launched ZappyCast", desc: "Created EV industry podcast to establish thought leadership" },
                { year: "2022", quarter: "Full Year", title: "+2000% Growth Phase", desc: "Explosive audience growth through content strategy and SEO" },
                { year: "2023", quarter: "Q1", title: "Reached Critical Mass", desc: "400,000 users demonstrated clear acquisition value" },
                { year: "2023", quarter: "May", title: "Acquisition Complete", desc: "J.D. Power acquired ZappyRide, validating growth strategy" }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex gap-8 items-start"
                >
                  <div className="w-32 flex-shrink-0">
                    <div className="serif-heading text-xl text-accent-earth">{milestone.year}</div>
                    <div className="text-sm text-gray-500">{milestone.quarter}</div>
                  </div>
                  <div className="flex-1 border-l-2 border-accent-warm pl-8 pb-8">
                    <h4 className="serif-heading text-2xl mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Two-Column Breakdown */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card p-10"
              >
                <div className="text-5xl mb-6">🎙️</div>
                <h3 className="serif-heading text-3xl mb-4">Thought Leadership</h3>
                <p className="editorial-text text-gray-600 mb-6">
                  ZappyCast positioned ZappyRide as the authoritative voice in the EV industry. This wasn't just content marketing—it was strategic brand architecture that made the company indispensable.
                </p>
                <ul className="space-y-3">
                  {[
                    "Industry-first EV podcast series",
                    "Established thought leadership position",
                    "Drove +2000% audience growth",
                    "Created acquisition narrative"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-accent-warm rounded-full mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bento-card p-10"
              >
                <div className="text-5xl mb-6">📊</div>
                <h3 className="serif-heading text-3xl mb-4">Data Infrastructure</h3>
                <p className="editorial-text text-gray-600 mb-6">
                  Built comprehensive marketing and lead generation infrastructure that converted brand visibility into measurable acquisition value—400k users in year one.
                </p>
                <ul className="space-y-3">
                  {[
                    "400k first-year users acquired",
                    "MarTech stack optimization",
                    "100% YOY revenue growth",
                    "Scalable lead generation engine"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-accent-sage rounded-full mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience - Minimalist Timeline */}
      <section id="experience" className="py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-display text-6xl md:text-7xl mb-20">Experience</h2>

            <div className="space-y-16">
              {[
                {
                  company: "Inspiration Mobility",
                  role: "Marketing Professional",
                  period: "May 2023 - Present",
                  achievements: [
                    "Implemented data-driven optimization strategies maximizing marketing ROI",
                    "Managed SEM budgets and optimized campaign performance",
                    "Led MarCom tech stack implementation and integration"
                  ]
                },
                {
                  company: "J.D. Power / ZappyRide",
                  role: "Marketing Specialist",
                  period: "April 2021 - May 2023",
                  achievements: [
                    "Created ZappyCast: EV industry podcast driving +2000% audience growth",
                    "Implemented marketing initiatives that facilitated company acquisition",
                    "Developed content strategies for the automotive tech sector"
                  ]
                },
                {
                  company: "Sweet Express",
                  role: "Marketing Manager",
                  period: "February 2019 - April 2021",
                  achievements: [
                    "Implemented comprehensive branding strategy from ground up",
                    "Transformed marketing into a revenue-generating operation",
                    "Drove significant social media growth and engagement"
                  ]
                },
                {
                  company: "Keller Williams Realty",
                  role: "Marketing Coordinator",
                  period: "2018 - 2019",
                  achievements: [
                    "Achieved 200% increase in website traffic through SEO",
                    "Created video content that enhanced brand exposure",
                    "Executed digital marketing campaigns"
                  ]
                }
              ].map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-accent-warm pl-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="serif-heading text-3xl mb-2">{job.role}</h3>
                      <p className="text-xl text-accent-earth font-medium">{job.company}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {job.achievements.map((achievement, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent-sage rounded-full mt-2.5 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact - Editorial CTA */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-card">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="serif-display text-6xl md:text-8xl mb-8">
              Let's Build<br />Something
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
              Looking for a technical force multiplier who can architect growth at scale? Let's start a conversation.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
              <motion.a
                href="mailto:cameron@cameronwolf.info"
                whileHover={{ scale: 1.03 }}
                className="bento-card p-10 text-left"
              >
                <div className="text-4xl mb-4">📧</div>
                <h3 className="serif-heading text-xl mb-2">Email</h3>
                <p className="text-accent-earth font-medium">cameron@cameronwolf.info</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="bento-card p-10 text-left"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="serif-heading text-xl mb-2">LinkedIn</h3>
                <p className="text-accent-earth font-medium">Connect with me</p>
              </motion.a>
            </div>

            <a href="mailto:cameron@cameronwolf.info" className="tactile-btn inline-block">
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-card-border">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © 2024 Cameron Wolf · Technical Force Multiplier
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js 15 · Warm Minimalism Design System
          </p>
        </div>
      </footer>
    </div>
  );
}
