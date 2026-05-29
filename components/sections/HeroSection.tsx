"use client";

import { motion } from "framer-motion";

type HeroSectionProps = {
  videoSrc?: string;
};

export function HeroSection({ videoSrc = "/videos/korin-hero.mp4" }: HeroSectionProps) {
  return (
    <section id="top" className="hero-section">
      <div className="hero-video-wrapper">
        <video className="hero-video" autoPlay muted loop playsInline aria-label="PT Korin Technomic manufacturing process video">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          EST. - PRECISION MANUFACTURING
        </motion.p>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          THE <span className="text-accent">PRECISION</span>
          <br />
          FACTORY OF
          <br />
          INDONESIA.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Plastic injection molding manufacturer serving footwear,
          <br />
          industrial, and consumer goods sectors across Indonesia.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <a href="#capabilities" className="btn-primary">
            View Capabilities -&gt;
          </a>
          <a href="#contact" className="btn-secondary">
            Start Inquiry
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}
