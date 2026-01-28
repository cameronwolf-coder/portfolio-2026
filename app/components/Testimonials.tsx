"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cameron doesn't just execute marketing. He builds the systems that make marketing execute itself. His technical depth is rare in a growth leader.",
    name: "Former Executive",
    title: "VP, J.D. Power / ZappyRide",
  },
  {
    quote:
      "Most marketers hand you a strategy deck. Cameron hands you a working system. He bridges the gap between what marketing wants and what engineering can deliver.",
    name: "Cross-Functional Partner",
    title: "Product Leader, Series B SaaS",
  },
  {
    quote:
      "He turned our marketing from a cost center into a growth engine. The infrastructure he built is still running, and still compounding.",
    name: "Former Stakeholder",
    title: "Founder & CEO",
  },
];

export default function Testimonials() {
  return (
    <div className="mt-16">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="card-rounded card-dark p-6 sm:p-8 border-l-2 border-l-maroon-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Quote size={20} className="text-maroon-light mb-4" />
            <p className="text-dark-muted leading-relaxed text-sm mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-dark-text font-bold text-sm">{t.name}</p>
              <p className="text-dark-muted text-xs">{t.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
