"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  headline: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeader({
  badge,
  headline,
  subtitle,
  align = "left",
  theme = "light",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignClass}`}
    >
      {badge && (
        <span className="inline-block px-4 py-2 rounded-full bg-maroon/10 text-maroon-light text-sm font-mono font-medium tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] ${
          isDark ? "text-dark-text" : "text-light-text"
        }`}
      >
        {headline}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${
            isDark ? "text-dark-muted" : "text-light-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
