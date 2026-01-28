"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
  index: number;
  accent?: "maroon" | "teal";
}

export default function ServiceCard({
  title,
  description,
  items,
  icon: Icon,
  index,
  accent = "maroon",
}: ServiceCardProps) {
  const accentColor = accent === "maroon" ? "bg-maroon" : "bg-teal";
  const accentText = accent === "maroon" ? "text-maroon-light" : "text-teal-light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-rounded card-dark p-6 md:p-8 relative cursor-default"
    >
      {/* Top row: icon + arrow */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-12 h-12 rounded-2xl ${accentColor}/10 flex items-center justify-center`}
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

      {/* Title */}
      <h3 className="text-xl font-bold text-dark-text mb-2">{title}</h3>

      {/* Description */}
      <p className="text-dark-muted text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Items */}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-mono text-dark-muted bg-dark-bg/50 px-3 py-1.5 rounded-full border border-dark-border"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
