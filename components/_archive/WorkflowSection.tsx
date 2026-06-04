"use client";

import { motion } from "framer-motion";
import { workflow } from "../../content";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function WorkflowSection() {
  return (
    <section id="workflow" className="workflow-section">
      <div className="section-shell workflow-grid">
        <Reveal className="workflow-sticky">
          <p className="label">How We Work</p>
          <SplitHeadline text="From concept to delivery." />
          <p>
            Every project moves through a controlled nine-step process, from requirement capture to packing and shipment.
          </p>
        </Reveal>

        <div className="workflow-list">
          <motion.div
            className="workflow-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {workflow.map((step, index) => {
            const Icon = step.Icon;
            return (
              <motion.article
                key={step.title}
                className="workflow-step"
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.6, delay: index * 0.04 }}
              >
                <span className="workflow-step__watermark">{String(index + 1).padStart(2, "0")}</span>
                <div className="workflow-step__icon">
                  <Icon size={24} />
                </div>
                <div>
                  <span className="pill">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
