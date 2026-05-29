"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { facilitiesImages } from "../../content";
import { Lightbox } from "../ui/Lightbox";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

type FacilitiesSectionProps = {
  images?: typeof facilitiesImages;
};

export function FacilitiesSection({ images = facilitiesImages }: FacilitiesSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const next = () => setActiveIndex((current) => (current === null ? 0 : (current + 1) % images.length));
  const prev = () => setActiveIndex((current) => (current === null ? 0 : (current - 1 + images.length) % images.length));

  return (
    <section id="facilities" className="facilities-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="label">Our Facilities</p>
          <SplitHeadline text="Where precision comes to life." italic="precision" />
        </Reveal>
      </div>

      <div ref={heroRef} className="facility-hero">
        <motion.div style={{ y }} className="facility-hero__media">
          <Image src={images[0].src} alt={images[0].alt} fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div className="facility-hero__overlay">
          <p className="label">Cirebon, West Java - Indonesia</p>
          <h3>Production floors built for controlled manufacturing, quality checks, and repeatable output.</h3>
        </div>
      </div>

      <div className="section-shell facility-gallery">
        {images.slice(1).map((image, index) => (
          <button key={image.src} className="gallery-tile" onClick={() => setActiveIndex(index + 1)} aria-label={`Open ${image.alt}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 92vw, 30vw" className="object-cover" />
          </button>
        ))}
      </div>

      <Lightbox images={images} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onPrev={prev} onNext={next} />
    </section>
  );
}
