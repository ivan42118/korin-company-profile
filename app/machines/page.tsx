import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { LenisProvider } from "../../components/ui/LenisProvider";
import { PageCurtain } from "../../components/ui/PageCurtain";
import { Reveal } from "../../components/ui/Reveal";
import { ScrollProgress } from "../../components/ui/ScrollProgress";
import { SplitHeadline } from "../../components/ui/SplitHeadline";
import { machines, productCategories } from "../../content";

export const metadata: Metadata = {
  title: "Machines — PT Korin Technomic",
  description:
    "Explore PT Korin Technomic's production machinery — injection, EVA, braiding, pad printing, extrusion, and more. Each machine drives a distinct part of our manufacturing process.",
};

export default function MachinesPage() {
  return (
    <>
      <LenisProvider />
      <ScrollProgress />
      <PageCurtain />
      <Navbar />
      <main>
        {/* Page header */}
        <section className="page-hero">
          <div className="section-shell">
            <Reveal>
              <p className="label">Manufacturing Capabilities</p>
              <SplitHeadline text="10+ Machines. One integrated process." />
              <p className="page-hero__description">
                Injection, EVA, braiding, extrusion, printing, and finishing — each machine type at Korin handles
                a specific stage of the production workflow, from raw material to finished component.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Machines grid */}
        <section className="machines-index-section">
          <div className="section-shell">
            <div className="machines-index-grid">
              {machines.map((machine, index) => {
                const Icon = machine.Icon;
                const producedCategories = productCategories.filter((c) =>
                  machine.producedCategoryIds.includes(c.id)
                );
                return (
                  <Reveal key={machine.slug} delay={index * 0.04}>
                    <Link href={`/machines/${machine.slug}`} className="machine-index-card">
                      <div className="machine-index-card__image">
                        <Image
                          src={machine.image}
                          alt={`${machine.name} — PT Korin Technomic`}
                          fill
                          sizes="(max-width: 768px) 92vw, 45vw"
                          className="object-cover"
                        />
                        <div className="machine-index-card__shade" />
                      </div>
                      <div className="machine-index-card__body">
                        <div className="machine-index-card__icon" aria-hidden="true">
                          <Icon size={28} />
                        </div>
                        <span className="machine-index-card__number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2>{machine.name}</h2>
                        <p>{machine.description}</p>
                        <div className="machine-index-card__tags">
                          {producedCategories.map((c) => (
                            <span key={c.id} className="tag">
                              {c.name}
                            </span>
                          ))}
                        </div>
                        <span className="machine-index-card__cta">View machine →</span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
