"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type LightboxProps = {
  images: { src: string; alt: string }[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const active = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    if (!active) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="lightbox__close" onClick={onClose} aria-label="Close image preview">
            <X size={22} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={onPrev} aria-label="Previous image">
            <ChevronLeft size={28} />
          </button>
          <motion.div
            key={active.src}
            className="lightbox__image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
          </motion.div>
          <button className="lightbox__nav lightbox__nav--next" onClick={onNext} aria-label="Next image">
            <ChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
