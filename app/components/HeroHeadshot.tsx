"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroHeadshot() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] mx-auto"
    >
      {/* Background semicircle */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-maroon rounded-b-full" />

      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border-2 border-maroon/20" />
      <div className="absolute inset-2 rounded-full border border-maroon/10" />

      {/* Headshot circle */}
      <div className="absolute inset-[10%] rounded-full bg-dark-card border-2 border-dark-border overflow-hidden">
        <Image
          src="/headshot.jpg"
          alt="Cameron Wolf"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 224px, 304px"
        />
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 bg-dark-card border border-dark-border rounded-2xl px-4 py-2 shadow-lg"
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-maroon text-sm">&#9733;</span>
            ))}
          </div>
          <span className="text-dark-text text-xs font-bold">10+ Years</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
