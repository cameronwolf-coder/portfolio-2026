"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/systems", label: "Systems" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-6 left-4 right-4 md:left-8 md:right-8 z-50"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-dark-bg/90 backdrop-blur-xl border border-dark-border rounded-[50px] px-6 py-3 flex items-center justify-between">
            {/* Left: Nav Links (Desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href) && link.href !== "#contact";
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-maroon text-white"
                        : "text-dark-muted hover:text-dark-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Center: Logo */}
            <Link
              href="/"
              className="text-lg font-black tracking-tight text-dark-text"
            >
              CAMERON<span className="text-maroon-light">WOLF</span>
            </Link>

            {/* Right: CTA (Desktop) */}
            <div className="hidden md:block">
              <Link
                href="mailto:cameron@cameronwolf.info"
                className="pill-btn pill-btn-primary text-sm"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-dark-text p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-dark-text hover:text-maroon-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:cameron@cameronwolf.info"
              onClick={() => setMobileOpen(false)}
              className="pill-btn pill-btn-primary mt-4"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
