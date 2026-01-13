"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
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

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// Puffy Button Component
function PuffyButton({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) {
  return (
    <motion.a
      href={href}
      className={`relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-purple"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

// AI Chatbot Component (Simulated)
function GrowthConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{role: string; content: string}>>([
    { role: "assistant", content: "👋 Hi! I'm Cameron's Growth Concierge AI. Ask me about his work on the ZappyRide acquisition, MarTech expertise, or growth strategies." }
  ]);
  const [input, setInput] = useState("");

  const responses: Record<string, string> = {
    "zappyride": "Cameron facilitated ZappyRide's acquisition by J.D. Power through strategic brand positioning and a +2000% audience growth campaign. He created ZappyCast, an EV industry podcast that established thought leadership.",
    "acquisition": "The acquisition was driven by: 1) 400k first-year users, 2) Strategic podcast content (ZappyCast), 3) Data-driven lead generation infrastructure, 4) Strong brand positioning in the EV market.",
    "martech": "Cameron specializes in marketing technology stack management, including HubSpot-to-Salesforce migrations, automation workflows, and analytics integration. He's implemented comprehensive MarTech solutions at Inspiration Mobility.",
    "growth": "Key growth achievements: +2000% audience growth at ZappyRide, 200% website traffic increase at Keller Williams, and transforming marketing into a revenue stream at Sweet Express.",
    "default": "I can tell you about Cameron's acquisition facilitation, MarTech expertise, growth strategies, or specific projects. What interests you?"
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: "user", content: input }]);

    const lowerInput = input.toLowerCase();
    let response = responses.default;

    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-neon-magenta to-neon-purple rounded-full flex items-center justify-center text-2xl glow-magenta"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
      >
        🤖
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-28 right-8 z-50 w-96 h-[500px] glass rounded-2xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-neon-cyan text-glow-cyan">Growth Concierge AI</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.map((msg, i) => (
              <div key={i} className={`p-3 rounded-xl ${msg.role === 'user' ? 'bg-neon-purple/20 ml-8' : 'bg-card/50 mr-8'}`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Cameron's work..."
              className="flex-1 px-4 py-2 bg-card border border-card-border rounded-xl text-sm focus:outline-none focus:border-neon-cyan"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl font-medium"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* AI Chatbot */}
      <GrowthConcierge />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1e2e_1px,transparent_1px),linear-gradient(to_bottom,#1e1e2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-2 bg-neon-purple/20 border border-neon-purple rounded-full text-sm font-medium text-neon-purple mb-6">
              🚀 Technical Force Multiplier
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan text-glow-magenta">
                Cameron Wolf
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-300">
              Senior Growth Leader & Architect
            </h2>

            <p className="text-xl md:text-2xl text-neon-cyan text-glow-cyan font-semibold mb-12">
              Facilitated the acquisition of ZappyRide by J.D. Power
            </p>
          </motion.div>

          {/* Live Metrics Ticker */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="glass p-8 rounded-2xl glow-magenta">
              <div className="text-5xl font-black text-neon-magenta text-glow-magenta mb-2">
                +<AnimatedCounter end={2000} suffix="%" />
              </div>
              <div className="text-gray-400 font-medium">Audience Growth</div>
            </div>

            <div className="glass p-8 rounded-2xl glow-cyan">
              <div className="text-5xl font-black text-neon-cyan text-glow-cyan mb-2">
                <AnimatedCounter end={400} />K
              </div>
              <div className="text-gray-400 font-medium">First-Year Users</div>
            </div>

            <div className="glass p-8 rounded-2xl glow-magenta">
              <div className="text-5xl font-black text-neon-purple mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-gray-400 font-medium">YOY Revenue Increase</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <PuffyButton href="#acquisition">View The Exit Story</PuffyButton>
            <PuffyButton href="#contact" className="bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
              Get in Touch
            </PuffyButton>
          </motion.div>
        </div>
      </section>

      {/* The Exit Story - Acquisition Mechanics */}
      <section id="acquisition" className="py-32 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
                The Exit Story
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              How strategic brand positioning and data-driven growth infrastructure
              led to J.D. Power's acquisition of ZappyRide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-6xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold mb-4 text-neon-magenta">ZappyCast: Thought Leadership</h3>
              <p className="text-gray-400 mb-4">
                Created and launched an EV industry podcast series that established ZappyRide
                as a thought leader in the automotive tech space. This content strategy drove
                massive audience engagement and positioned the brand for acquisition.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-magenta rounded-full"></span>
                  Industry-first EV podcast series
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-magenta rounded-full"></span>
                  Established thought leadership position
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-magenta rounded-full"></span>
                  Drove +2000% audience growth
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Data-Driven Infrastructure</h3>
              <p className="text-gray-400 mb-4">
                Built comprehensive marketing and lead generation infrastructure that converted
                brand visibility into 400k first-year users and demonstrated clear revenue potential.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  400k first-year users acquired
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  MarTech stack optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                  100% YOY revenue growth
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Acquisition Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Acquisition Timeline</h3>
            <div className="space-y-6">
              {[
                { date: "April 2021", title: "Joined ZappyRide", desc: "Began strategic brand positioning" },
                { date: "Q2 2021", title: "Launched ZappyCast", desc: "EV industry podcast series initiated" },
                { date: "2021-2022", title: "+2000% Growth", desc: "Explosive audience growth phase" },
                { date: "Q1 2023", title: "400K Users", desc: "Reached critical mass for acquisition" },
                { date: "May 2023", title: "Acquisition", desc: "J.D. Power acquired ZappyRide" }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-24 flex-shrink-0">
                    <div className="text-sm font-bold text-neon-purple">{milestone.date}</div>
                  </div>
                  <div className="flex-1 border-l-2 border-neon-magenta pl-6 pb-6">
                    <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section id="technical" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-magenta to-neon-cyan">
                Technical Infrastructure
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              MarTech expertise that bridges marketing strategy and technical execution
            </p>
          </motion.div>

          {/* Code Example - HubSpot to Salesforce Migration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-neon-cyan">HubSpot → Salesforce Migration Logic</h3>
              <span className="px-4 py-2 bg-neon-purple/20 rounded-full text-sm text-neon-purple">TypeScript</span>
            </div>
            <pre className="bg-background p-6 rounded-xl overflow-x-auto text-sm">
              <code className="text-gray-300">{`// Lead scoring & routing automation
async function syncLeadData(hubspotLead: Lead): Promise<void> {
  const enrichedLead = {
    ...hubspotLead,
    score: calculateEngagementScore(hubspotLead),
    segment: determineMarketSegment(hubspotLead),
    priority: assignPriority(hubspotLead.interactions)
  };

  // Route to appropriate sales team based on MarTech signals
  const salesforceRecord = await salesforce.create({
    object: 'Lead',
    data: transformToSalesforceSchema(enrichedLead),
    assignment: routeByEngagement(enrichedLead.score)
  });

  // Trigger automated nurture campaigns
  await hubspot.workflows.enroll(
    enrichedLead.email,
    getWorkflowBySegment(enrichedLead.segment)
  );
}

// Result: 45% increase in qualified lead conversion`}</code>
            </pre>
          </motion.div>

          {/* Growth Engine Diagram */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Targeting", desc: "Data-driven audience segmentation & persona development", color: "neon-magenta" },
              { icon: "⚙️", title: "Automation", desc: "MarTech stack integration & workflow optimization", color: "neon-cyan" },
              { icon: "📈", title: "Optimization", desc: "A/B testing, analytics & continuous improvement", color: "neon-purple" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="glass p-8 rounded-2xl text-center cursor-pointer"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 text-${item.color}`}>{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-magenta">
                Experience
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "Inspiration Mobility",
                role: "Marketing Professional",
                period: "May 2023 - Present",
                achievements: [
                  "Implemented data-driven optimization strategies to maximize marketing ROI",
                  "Managed SEM budgets and optimized campaign performance",
                  "Developed comprehensive growth strategies across multiple channels",
                  "Led MarCom tech stack implementation and integration"
                ],
                color: "neon-magenta"
              },
              {
                company: "J.D. Power / ZappyRide",
                role: "Marketing Specialist",
                period: "April 2021 - May 2023",
                achievements: [
                  "Created and launched ZappyCast, an EV industry podcast series",
                  "Achieved +2000% audience growth driving acquisition value",
                  "Implemented marketing initiatives that contributed to company acquisition",
                  "Developed content marketing strategies for the automotive tech sector"
                ],
                color: "neon-cyan"
              },
              {
                company: "Sweet Express",
                role: "Marketing Manager",
                period: "February 2019 - April 2021",
                achievements: [
                  "Implemented comprehensive branding strategy from the ground up",
                  "Transformed marketing department into a revenue-generating operation",
                  "Drove significant social media growth and engagement",
                  "Enhanced digital presence across all marketing channels"
                ],
                color: "neon-purple"
              },
              {
                company: "Keller Williams Realty",
                role: "Marketing Coordinator",
                period: "2018 - 2019",
                achievements: [
                  "Achieved 200% increase in website traffic through SEO optimization",
                  "Optimized marketing channels for maximum reach and engagement",
                  "Created video content that enhanced brand exposure",
                  "Developed and executed digital marketing campaigns"
                ],
                color: "neon-magenta"
              }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`glass p-8 rounded-2xl border-l-4 border-${job.color}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.role}</h3>
                    <p className={`text-xl text-${job.color} font-semibold`}>{job.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400">
                      <span className={`w-2 h-2 bg-${job.color} rounded-full mt-2 flex-shrink-0`}></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta animate-gradient">
                Let's Build Something
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Looking for a technical force multiplier who can architect growth at scale? Let's talk.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href="mailto:cameron@cameronwolf.info"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-8 rounded-2xl glow-magenta hover:bg-neon-magenta/10 transition-colors"
              >
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-neon-magenta">cameron@cameronwolf.info</p>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/camwolf/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-8 rounded-2xl glow-cyan hover:bg-neon-cyan/10 transition-colors"
              >
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-neon-cyan">Connect with me</p>
              </motion.a>
            </div>

            <PuffyButton href="mailto:cameron@cameronwolf.info">
              Start a Conversation
            </PuffyButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Cameron Wolf · Built with Next.js 15, Framer Motion & Tailwind CSS
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Technical Force Multiplier | Growth Architect | Acquisition Facilitator
          </p>
        </div>
      </footer>
    </div>
  );
}
