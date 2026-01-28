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
    company: "Inspiration Mobility",
    role: "Senior Marketing Manager",
    period: "2023 - Present",
    description:
      "Leading full MarTech migration and deploying custom LLM solutions for enterprise marketing automation.",
    achievements: [
      "HubSpot to Salesforce migration",
      "Custom LLM deployment",
      "25% ROI lift",
      "Agentic workflows",
    ],
    accent: "maroon",
  },
  {
    company: "Truv",
    role: "Growth Marketing Lead",
    period: "2022 - 2023",
    description:
      "Built the CRM and automation spine for enterprise growth, implementing deterministic routing and attribution.",
    achievements: [
      "Enterprise ABM",
      "ClickHouse attribution",
      "Clay enrichment",
      "SQL-driven routing",
    ],
    accent: "teal",
  },
  {
    company: "ZappyRide (Acquired by J.D. Power)",
    role: "Brand & Growth Lead",
    period: "2019 - 2022",
    description:
      "Facilitated acquisition through strategic growth architecture. Built content, community, and brand infrastructure that drove acquisition value.",
    achievements: [
      "+2,000% audience growth",
      "400K year-1 users",
      "ZappyCast podcast",
      "J.D. Power acquisition",
    ],
    accent: "maroon",
  },
  {
    company: "Sweet Express",
    role: "Marketing Lead",
    period: "2017 - 2019",
    description:
      "Built a zero-touch content engine that scaled to 400K users in 12 months with no ad spend.",
    achievements: [
      "400K users",
      "$0 ad spend",
      "Content engine",
      "100% YoY revenue",
    ],
    accent: "teal",
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
