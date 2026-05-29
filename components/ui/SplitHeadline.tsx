"use client";

import { motion } from "framer-motion";

type SplitHeadlineProps = {
  text: string;
  italic?: string;
  className?: string;
};

export function SplitHeadline({ text, italic, className }: SplitHeadlineProps) {
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
        const clean = word.replace(/[.,?]/g, "");
        const isItalic = italic?.split(" ").includes(clean);
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
            {isItalic ? <em>{word}</em> : word}
          </motion.span>
        );
      })}
    </motion.h2>
  );
}
