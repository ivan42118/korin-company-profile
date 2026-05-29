"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: "01",
    title: "GET A COMPLETE PICTURE OF",
    titleAccent: "PRODUCTION",
    description:
      "Monitor every machine in real-time. From injection to braiding, EVA to rotary, every process is connected and every output is tracked.",
    highlight: "No blind spots. No delays. No guesswork.",
  },
  {
    number: "02",
    title: "FROM MOLD DESIGN TO",
    titleAccent: "MASS PRODUCTION",
    description:
      "Our integrated workflow covers the full manufacturing cycle, from DFM analysis and trial runs to stable, repeatable mass production.",
    highlight: "End-to-end. In-house. On-time.",
  },
  {
    number: "03",
    title: "QUALITY VERIFIED AT",
    titleAccent: "EVERY STEP",
    description:
      "In-process inspection at every critical stage. Final verification before packing. Zero compromises on dimensional accuracy.",
    highlight: "100% inspection. Zero defect tolerance.",
  },
];

export function ProductionFlowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="production-flow-section" ref={ref}>
      <div className="flow-header">
        <motion.p className="label" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          HOW WE WORK
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
          YOUR PRODUCTION <span className="text-accent">FLOWS</span>
        </motion.h2>
        <motion.p className="flow-subtitle" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
          From a single mold design to thousands of precision components, our factory floor is built for performance, reliability, and scale.
        </motion.p>
      </div>

      {features.map((feature, index) => (
        <motion.div
          key={feature.number}
          className={`flow-feature ${index % 2 === 1 ? "flow-feature--reversed" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flow-text">
            <span className="flow-number">{feature.number}</span>
            <h3 className="flow-title">
              {feature.title}
              <br />
              <span className="text-accent">{feature.titleAccent}</span>
            </h3>
            <p className="flow-desc">{feature.description}</p>
            <p className="flow-highlight">{feature.highlight}</p>
          </div>

          <div className="flow-illustration">
            {index === 0 ? <AnimatedFactoryIllustration /> : index === 1 ? <WorkflowStepsCard /> : <QualityMetricsCard />}
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function AnimatedFactoryIllustration() {
  return (
    <div className="illustration-wrapper">
      <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="factory-svg" aria-label="Animated manufacturing flow illustration">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E0E0DE" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="500" fill="url(#grid)" opacity="0.4" />

        <g>
          <motion.rect x="230" y="280" width="140" height="80" rx="4" fill="#1B3A6B" opacity="0.9" animate={{ opacity: [0.9, 1, 0.9] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <motion.rect x="250" y="220" width="100" height="70" rx="6" fill="#1B3A6B" animate={{ y: [220, 218, 220] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <motion.rect x="270" y="190" width="60" height="35" rx="4" fill="#C8102E" animate={{ y: [190, 187, 190] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} />
          <motion.circle cx="300" cy="207" r="12" fill="white" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
          <text x="295" y="212" fontSize="12" fontWeight="bold" fill="#C8102E">K</text>
          <motion.circle cx="340" cy="195" r="5" fill="#22C55E" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} />
          <text x="270" y="375" fontSize="10" fill="#888" fontFamily="Space Mono">INJECTION</text>
        </g>

        <AnimatedMachine x={80} y={150} label="EVA" delay={0.3} />
        <AnimatedMachine x={420} y={140} label="ROTARY" delay={0.5} rotary />
        <AnimatedMachine x={70} y={340} label="VERTICAL" delay={0.7} piston />
        <AnimatedMachine x={440} y={330} label="BRAIDING" delay={0.9} braiding />

        <FlowLine x1="230" y1="300" x2="180" y2="200" delay={0} />
        <FlowLine x1="370" y1="295" x2="430" y2="195" delay={0.3} />
        <FlowLine x1="245" y1="340" x2="160" y2="370" delay={0.6} />
        <FlowLine x1="365" y1="345" x2="450" y2="370" delay={0.9} />

        <motion.circle r="4" fill="#C8102E" animate={{ x: [230, 180], y: [300, 200], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
        <motion.circle r="4" fill="#C8102E" animate={{ x: [370, 430], y: [295, 195], opacity: [0, 1, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }} />

        <rect x="430" y="30" width="150" height="70" rx="6" fill="#F5F5F3" stroke="#E0E0DE" />
        <text x="445" y="52" fontSize="9" fill="#888" fontFamily="Space Mono">PRODUCTION TODAY</text>
        <motion.text x="445" y="78" fontSize="22" fontWeight="bold" fill="#0F0F0F" fontFamily="Barlow Condensed" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 3, repeat: Infinity }}>
          12,848
        </motion.text>
        <motion.circle cx="570" cy="42" r="5" fill="#22C55E" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />

        <rect x="20" y="30" width="130" height="55" rx="6" fill="#F5F5F3" stroke="#E0E0DE" />
        <text x="35" y="50" fontSize="9" fill="#888" fontFamily="Space Mono">QUALITY RATE</text>
        <text x="35" y="72" fontSize="22" fontWeight="bold" fill="#22C55E" fontFamily="Barlow Condensed">99.8%</text>
      </svg>
    </div>
  );
}

function AnimatedMachine({ x, y, label, delay, rotary, piston, braiding }: { x: number; y: number; label: string; delay: number; rotary?: boolean; piston?: boolean; braiding?: boolean }) {
  return (
    <motion.g initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }}>
      <motion.rect x={x} y={y} width="110" height="65" rx="4" fill="#1B3A6B" opacity="0.8" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay }} />
      {rotary && (
        <motion.g style={{ transformOrigin: `${x + 55}px ${y + 15}px` }} animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
          <line x1={x + 55} y1={y + 5} x2={x + 55} y2={y + 25} stroke="#C8102E" strokeWidth="3" />
          <line x1={x + 45} y1={y + 15} x2={x + 65} y2={y + 15} stroke="#C8102E" strokeWidth="3" />
        </motion.g>
      )}
      {piston && <motion.rect x={x + 35} y={y - 30} width="20" height="35" rx="2" fill="#C8102E" animate={{ y: [y - 30, y - 20, y - 30] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} />}
      {braiding && (
        <motion.g style={{ transformOrigin: `${x + 55}px ${y + 20}px` }} animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
          <line x1={x + 40} y1={y + 8} x2={x + 70} y2={y + 32} stroke="#C8102E" strokeWidth="2" />
          <line x1={x + 70} y1={y + 8} x2={x + 40} y2={y + 32} stroke="white" strokeWidth="2" opacity="0.7" />
        </motion.g>
      )}
      {!rotary && !piston && !braiding && <motion.rect x={x + 15} y={y - 30} width="70" height="35" rx="3" fill="#C8102E" opacity="0.9" animate={{ y: [y - 30, y - 33, y - 30] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }} />}
      <motion.circle cx={x + 92} cy={y + 8} r="4" fill="#22C55E" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.3, repeat: Infinity, delay }} />
      <text x={x + 5} y={y + 82} fontSize="9" fill="#888" fontFamily="Space Mono">{label}</text>
    </motion.g>
  );
}

function FlowLine({ x1, y1, x2, y2, delay }: { x1: string | number; y1: string | number; x2: string | number; y2: string | number; delay: number }) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#C8102E"
      strokeWidth="1.5"
      strokeDasharray="6 4"
      animate={{ strokeDashoffset: [0, -20] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function WorkflowStepsCard() {
  const steps = ["Requirement", "Mold Design", "Material Prep", "Machine Setup", "Trial Run", "Mass Production"];
  return (
    <div className="metrics-card">
      <p className="metrics-title">PRODUCTION WORKFLOW</p>
      {steps.map((step, index) => (
        <motion.div key={step} className="workflow-step-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.4 }}>
          <span className="step-dot" />
          <span className="step-line" style={{ width: `${60 + index * 8}%` }} />
          <span className="step-name">{step}</span>
        </motion.div>
      ))}
    </div>
  );
}

function QualityMetricsCard() {
  return (
    <div className="metrics-card">
      <p className="metrics-title">QUALITY METRICS</p>
      {[
        { label: "Dimensional Accuracy", value: 99.8 },
        { label: "On-Time Delivery", value: 97.5 },
        { label: "First Article Pass", value: 95.2 },
      ].map((metric) => (
        <div key={metric.label} className="metric-bar-item">
          <div className="metric-bar-header">
            <span>{metric.label}</span>
            <span className="metric-value">{metric.value}%</span>
          </div>
          <div className="metric-bar-track">
            <motion.div className="metric-bar-fill" initial={{ width: 0 }} whileInView={{ width: `${metric.value}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} />
          </div>
        </div>
      ))}
    </div>
  );
}
