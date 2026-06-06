"use client";

import { machines } from "../../content";
import { MachineCard } from "../ui/MachineCard";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function MachinesSection() {
  return (
    <section id="machines" className="machines-section">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="label">Manufacturing Capabilities</p>
            <SplitHeadline text="10+ Machines. One Complete Process." />
          </div>
          <p>
            Injection, EVA, braiding, printing, extrusion, and finishing capabilities are organized into one integrated
            production ecosystem.
          </p>
        </Reveal>
        <div className="machines-grid">
          {machines.map((machine, index) => (
            <MachineCard key={machine.name} index={index} machine={machine} />
          ))}
        </div>
      </div>
    </section>
  );
}
