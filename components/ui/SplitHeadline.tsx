"use client";

import { motion } from "framer-motion";

type SplitHeadlineProps = {
  text: string;
  className?: string;
};

export function SplitHeadline({ text, className }: SplitHeadlineProps) {
  const words = text.split(" ");

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {words.map((word, index) => {
        return (
          <motion.span
            key={`${word}-${index}`}
            className="split-word"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}
