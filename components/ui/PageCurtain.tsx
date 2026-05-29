"use client";

import { motion } from "framer-motion";

export function PageCurtain() {
  return (
    <motion.div
      className="page-curtain"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
      aria-hidden="true"
    >
      <motion.span initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.28 }}>
        KORIN
      </motion.span>
    </motion.div>
  );
}
