"use client";

import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type MachineCardProps = {
  index: number;
  machine: {
    name: string;
    slug: string;
    description: string;
    image: string;
    Icon: LucideIcon;
  };
};

export function MachineCard({ index, machine }: MachineCardProps) {
  const Icon = machine.Icon;

  return (
    <Link href={`/machines/${machine.slug}`} className="machine-card" aria-label={`Learn more about ${machine.name}`}>
      <div className="machine-card__image">
        <Image
          src={machine.image}
          alt={`${machine.name} at PT Korin Technomic`}
          fill
          sizes="(max-width: 768px) 92vw, 25vw"
          className="object-cover"
        />
        <div className="machine-card__shade" />
      </div>
      <span className="machine-card__number">{String(index + 1).padStart(2, "0")}</span>
      <div className="machine-card__icon" aria-hidden="true">
        <Icon size={34} />
      </div>
      <div className="machine-card__copy">
        <h3>{machine.name}</h3>
        <p>{machine.description}</p>
        <span className="machine-card__link-hint">View details →</span>
      </div>
    </Link>
  );
}
