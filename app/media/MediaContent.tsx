"use client";

import { useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Script from "next/script";
import Navbar from "../components/Navbar";
import PillButton from "../components/PillButton";
import Footer from "../components/Footer";
import type { YouTubeVideo } from "./lib/types";

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

const instagramPosts = [
  "https://www.instagram.com/p/C2NyKQ4vekA/",
  "https://www.instagram.com/p/CxMLphwrFGP/",
  "https://www.instagram.com/p/CY0DSM8LFf1/",
];

export default function MediaContent({ videos }: { videos: YouTubeVideo[] }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const processEmbeds = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      "instgrm" in window &&
      (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm
    ) {
      (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
    }
  }, []);

  useEffect(() => {
    // Process embeds if script already loaded
    processEmbeds();
  }, [processEmbeds]);

  return (
    <div className="min-h-screen">
      {/* Instagram embed script */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />

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
            className="inline-block px-3 sm:px-4 py-2 rounded-full bg-maroon/10 border border-maroon/20 text-maroon-light text-xs sm:text-sm font-mono mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MEDIA PORTFOLIO
          </motion.div>

          <motion.h1
            className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            VISUAL<br />
            <span className="text-maroon-light">STORYTELLING</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-dark-muted max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Content creation and media production through Wolf Bros Media.
            Exploring stories worth telling.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PillButton
              href="https://www.youtube.com/@wolfbrosmedia"
              variant="primary"
              showArrow
            >
              YouTube
            </PillButton>
            <PillButton
              href="https://www.instagram.com/wolfbrosmedia/"
              variant="outline-light"
              showArrow
            >
              Instagram
            </PillButton>
          </motion.div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="section-light py-20 sm:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-maroon/10 text-maroon text-xs sm:text-sm font-mono mb-6">
              YOUTUBE
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-light-text">
              Latest Videos
            </h2>
          </motion.div>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  className="card-rounded card-light overflow-hidden"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  {/* Embedded YouTube Player */}
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-mono text-light-muted mb-2 block">
                      {formatDate(video.pubDate)}
                    </span>
                    <h3 className="font-bold text-lg text-light-text leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
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
                Videos are loading or the feed is temporarily unavailable.
              </p>
              <PillButton
                href="https://www.youtube.com/@wolfbrosmedia"
                variant="outline"
                showArrow
              >
                Visit YouTube Channel
              </PillButton>
            </motion.div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section-dark py-20 sm:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            className="mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-teal/10 text-teal-light text-xs sm:text-sm font-mono mb-6">
              INSTAGRAM
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl">
              Featured Posts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {instagramPosts.map((url, i) => (
              <motion.div
                key={url}
                className="min-w-0 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                dangerouslySetInnerHTML={{
                  __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${url}?utm_source=ig_embed" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin:0; max-width:540px; min-width:280px; padding:0; width:100%;"><div style="padding:16px;"><a href="${url}?utm_source=ig_embed" style="background:#FFFFFF; line-height:0; padding:0; text-align:center; text-decoration:none; width:100%;" target="_blank"><div style="padding:19% 0;"></div><div style="display:block; height:50px; margin:0 auto 12px; width:50px;"></div><div style="padding-top:8px;"><div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div></a></div></blockquote>`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-light py-20 sm:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-light-text mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              FOLLOW THE JOURNEY
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-light-muted mb-10 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Subscribe on YouTube and follow on Instagram for the latest from
              Wolf Bros Media.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <PillButton
                href="https://www.youtube.com/@wolfbrosmedia"
                variant="outline"
                showArrow
              >
                Subscribe on YouTube
              </PillButton>
              <PillButton
                href="https://www.instagram.com/wolfbrosmedia/"
                variant="outline"
                showArrow
              >
                Follow on Instagram
              </PillButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
