"use client";

import { motion } from "framer-motion";

interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  accent: "maroon" | "teal" | "gold";
}

const experiences: TimelineEntry[] = [
  {
    company: "Truv",
    role: "Senior Marketing Manager",
    period: "September 2025 - Present",
    description:
      "Leading AI as a bleeding-edge counterpart to scaling marketing campaigns. Building automation systems that unlock capabilities previously impossible to automate, turning manual marketing processes into intelligent, self-running infrastructure.",
    achievements: [
      "AI-driven automation",
      "Campaign scaling",
      "Series B SaaS",
    ],
    accent: "teal",
  },
  {
    company: "Inspiration Mobility",
    role: "Marketing Manager",
    period: "May 2023 - June 2024",
    description:
      "Spearheaded Salesforce Marketing Cloud integration and deployed advanced analytics to achieve a 25% increase in marketing ROI. Led rebranding initiative and cross-department campaign alignment.",
    achievements: [
      "Salesforce migration",
      "25% ROI lift",
      "Rebranding",
      "30% engagement increase",
    ],
    accent: "maroon",
  },
  {
    company: "J.D. Power",
    role: "Marketing Manager",
    period: "April 2021 - May 2023",
    description:
      "Spearheaded full-stack marketing from inception to acquisition. Built brand, website, and ZappyCast podcast from the ground up, driving 100% YoY revenue increase and positioning the company for acquisition.",
    achievements: [
      "100% YoY revenue",
      "ZappyCast podcast",
      "Brand overhaul",
      "Acquisition",
    ],
    accent: "teal",
  },
  {
    company: "Sweet Express",
    role: "Marketing Manager",
    period: "February 2019 - April 2021",
    description:
      "Drove 2,000% audience growth and launched a portal that attracted 400,000 users in year one. Built e-commerce store and managed social media to 15%+ engagement across 25K+ followers.",
    achievements: [
      "2,000% audience growth",
      "400K users",
      "E-commerce launch",
      "15%+ engagement",
    ],
    accent: "maroon",
  },
  {
    company: "Keller Williams Realty",
    role: "Marketing Director",
    period: "June 2018 - February 2019",
    description:
      "Implemented website optimization strategies that increased click-through and conversion rates by 200%. Created video web series that drove significant traffic growth.",
    achievements: [
      "200% conversion lift",
      "Video web series",
      "Full-stack marketing",
    ],
    accent: "teal",
  },
  {
    company: "3Sixty Interactive",
    role: "Digital Marketing Intern",
    period: "November 2017 - April 2018",
    description:
      "Supported client campaigns through Google Analytics and AdWords optimization. Assisted in client acquisition through networking and identified growth strategies.",
    achievements: [
      "Google Analytics",
      "AdWords",
      "Client acquisition",
    ],
    accent: "gold",
  },
];

const accentColors: Record<string, string> = {
  maroon: "bg-maroon",
  teal: "bg-teal",
  gold: "bg-gold",
};

export default function ExperienceTimeline() {
  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical dashed line */}
      <div className="timeline-line" />

      <div className="flex flex-col gap-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex gap-6 pl-2"
          >
            {/* Dot */}
            <div
              className={`timeline-dot mt-2 ${accentColors[exp.accent]}`}
            />

            {/* Card */}
            <div className="card-rounded card-light flex-1 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                <h3 className="text-lg font-bold text-light-text">
                  {exp.company}
                </h3>
                <span className="text-sm font-mono text-light-muted">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-maroon-light mb-2">
                {exp.role}
              </p>

              <p className="text-sm text-light-muted leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.achievements.map((a) => (
                  <span
                    key={a}
                    className="text-xs font-mono text-light-muted bg-light-bg px-3 py-1.5 rounded-full border border-light-border"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
