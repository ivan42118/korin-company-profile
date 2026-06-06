"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { facilities } from "../../content";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const facility = facilities[activeTab];

  return (
    <section id="facilities" className="facilities-section">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="label">Our Facilities</p>
            <SplitHeadline text="Two plants. One standard." />
          </div>
          <p>
            Korin operates production facilities in Tangerang and Cirebon — each running the same quality
            processes and inspection standards.
          </p>
        </Reveal>

        <div className="facility-tabs" role="tablist" aria-label="Select facility">
          {facilities.map((f, index) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeTab === index}
              className={`facility-tab ${activeTab === index ? "facility-tab--active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="facility-tab__label">{f.label}</span>
              <span className="facility-tab__name">{f.name}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={facility.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div ref={heroRef} className="facility-hero">
          <motion.div style={{ y }} className="facility-hero__media">
            <Image
              src={facility.heroImage}
              alt={`${facility.name} facility — PT Korin Technomic`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={activeTab === 0}
            />
          </motion.div>
          <div className="facility-hero__overlay">
            <p className="label">{facility.name} — {facility.label}</p>
            <h3>{facility.description}</h3>
            <address className="facility-hero__address">{facility.address}</address>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
