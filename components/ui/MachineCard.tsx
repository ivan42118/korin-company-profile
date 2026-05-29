"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type MachineCardProps = {
  index: number;
  machine: {
    name: string;
    description: string;
    image: string;
    Icon: LucideIcon;
  };
};

export function MachineCard({ index, machine }: MachineCardProps) {
  const Icon = machine.Icon;

  return (
    <article
      className="machine-card"
    >
      <div className="machine-card__image">
        <Image src={machine.image} alt={`${machine.name} at PT Korin Technomic`} fill sizes="(max-width: 768px) 92vw, 25vw" className="object-cover" />
        <div className="machine-card__shade" />
      </div>
      <span className="machine-card__number">{String(index + 1).padStart(2, "0")}</span>
      <div className="machine-card__icon" aria-hidden="true">
        <Icon size={34} />
      </div>
      <div className="machine-card__copy">
        <h3>{machine.name}</h3>
        <p>{machine.description}</p>
      </div>
    </article>
  );
}
