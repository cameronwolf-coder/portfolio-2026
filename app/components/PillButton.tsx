"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "outline-light";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function PillButton({
  children,
  href,
  variant = "primary",
  showArrow = false,
  className = "",
  onClick,
}: PillButtonProps) {
  const variantClass = {
    primary: "pill-btn-primary",
    outline: "pill-btn-outline",
    "outline-light": "pill-btn-outline-light",
  }[variant];

  const content = (
    <motion.span
      className={`pill-btn ${variantClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
      {showArrow && <ArrowUpRight size={18} className="arrow-rotate" aria-hidden="true" />}
    </motion.span>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
          {content}
        </a>
      );
    }
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  );
}
