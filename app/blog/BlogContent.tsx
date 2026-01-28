"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import PillButton from "../components/PillButton";
import Footer from "../components/Footer";
import type { BlogPost } from "./lib/types";

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="min-h-screen">
      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-maroon z-[60]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="section-dark relative min-h-[60vh] px-4 sm:px-6 md:px-12 pt-32 sm:pt-40 pb-20 flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div
            className="inline-block px-3 sm:px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal-light text-xs sm:text-sm font-mono mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            INSIGHTS
          </motion.div>

          <motion.h1
            className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            THOUGHTS ON<br />
            <span className="text-maroon-light">GROWTH</span> &{" "}
            <span className="text-teal-light">SYSTEMS</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-dark-muted max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Deep dives into MarTech infrastructure, growth engineering, and the
            systems that drive acquisition-ready scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PillButton
              href="https://camwolfatx.substack.com"
              variant="primary"
              showArrow
            >
              Subscribe on Substack
            </PillButton>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-light py-20 sm:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post, i) => (
                <motion.a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-rounded card-light flex flex-col overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-maroon/20 to-teal/20 overflow-hidden">
                    {post.thumbnailUrl ? (
                      <Image
                        src={post.thumbnailUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-black text-maroon/30">
                          CW
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-mono text-light-muted mb-3">
                      {formatDate(post.pubDate)}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl text-light-text mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-light-muted leading-relaxed flex-1">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-maroon group-hover:text-maroon-light transition-colors">
                      Read on Substack
                      <ArrowUpRight
                        size={16}
                        className="arrow-rotate"
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-light-muted mb-6">
                Posts are loading or the feed is temporarily unavailable.
              </p>
              <PillButton
                href="https://camwolfatx.substack.com"
                variant="outline"
                showArrow
              >
                Visit Substack Directly
              </PillButton>
            </motion.div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-dark py-20 sm:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              STAY IN THE LOOP
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-dark-muted mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get insights on growth systems, MarTech infrastructure, and the
              engineering behind acquisition-ready scale.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <PillButton
                href="https://camwolfatx.substack.com"
                variant="primary"
                showArrow
              >
                Subscribe on Substack
              </PillButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
