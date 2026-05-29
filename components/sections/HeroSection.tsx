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
          EST.1999 - PRECISION MANUFACTURING
        </motion.p>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          THE PARTS
          <br />
           BEHIND EVERY <span className="text-accent">GREAT</span>SHOE
          <br />
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Precision-manufactured footwear components & synthetic rattan,
          <br />
          trusted by leading brands since 1999.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 18 }}
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
        aria-hidden="true"
      >
        Scroll
      </motion.div>
    </section>
  );
}
