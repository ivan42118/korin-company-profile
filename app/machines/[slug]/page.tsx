import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/layout/Footer";
import { Navbar } from "../../../components/layout/Navbar";
import { LenisProvider } from "../../../components/ui/LenisProvider";
import { PageCurtain } from "../../../components/ui/PageCurtain";
import { Reveal } from "../../../components/ui/Reveal";
import { ScrollProgress } from "../../../components/ui/ScrollProgress";
import { SplitHeadline } from "../../../components/ui/SplitHeadline";
import { catalogProducts, machines, productCategories } from "../../../content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const machine = machines.find((m) => m.slug === slug);
  if (!machine) return { title: "Machine not found" };
  return {
    title: `${machine.name} — PT Korin Technomic`,
    description: machine.fullDescription,
  };
}

export default async function MachineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const machine = machines.find((m) => m.slug === slug);
  if (!machine) notFound();

  const Icon = machine.Icon;

  const producedCategories = productCategories.filter((c) =>
    machine.producedCategoryIds.includes(c.id)
  );

  const producedProducts = catalogProducts.filter((p) =>
    machine.producedCategoryIds.includes(p.categoryId)
  );

  const machineIndex = machines.findIndex((m) => m.slug === slug);
  const prevMachine = machines[machineIndex - 1] ?? null;
  const nextMachine = machines[machineIndex + 1] ?? null;

  return (
    <>
      <LenisProvider />
      <ScrollProgress />
      <PageCurtain />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="machine-detail-hero">
          <div className="machine-detail-hero__media">
            <Image
              src={machine.image}
              alt={`${machine.name} — PT Korin Technomic`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="machine-detail-hero__overlay" />
          </div>
          <div className="machine-detail-hero__content section-shell">
            <Reveal>
              <div className="machine-detail-hero__icon" aria-hidden="true">
                <Icon size={40} />
              </div>
              <p className="label">Machine {String(machineIndex + 1).padStart(2, "0")}</p>
              <h1>{machine.name}</h1>
              <p className="machine-detail-hero__tagline">{machine.description}</p>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="machine-detail-overview">
          <div className="section-shell machine-detail-overview__grid">
            <Reveal>
              <div className="machine-detail-overview__text">
                <p className="label">Overview</p>
                <SplitHeadline text="What this machine does." />
                <p>{machine.fullDescription}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="machine-detail-overview__capabilities">
                <p className="label">Capabilities</p>
                <ul className="capabilities-list">
                  {machine.capabilities.map((cap) => (
                    <li key={cap}>
                      <span className="capabilities-list__bullet" aria-hidden="true">—</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gallery */}
        {machine.galleryImages.length > 1 && (
          <section className="machine-gallery-section">
            <div className="section-shell">
              <Reveal>
                <p className="label">Gallery</p>
              </Reveal>
              <div className="machine-gallery-grid">
                {machine.galleryImages.map((src, i) => (
                  <Reveal key={src} delay={i * 0.06}>
                    <div className="machine-gallery-tile">
                      <Image
                        src={src}
                        alt={`${machine.name} — image ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 92vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products produced */}
        {producedCategories.length > 0 && (
          <section className="machine-products-section">
            <div className="section-shell">
              <Reveal>
                <p className="label">What this machine produces</p>
                <SplitHeadline text="Products from this machine." />
              </Reveal>

              <div className="machine-products-grid">
                {producedProducts.slice(0, 8).map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.04}>
                    <Link
                      href={`/products?category=${product.categoryId}`}
                      className="machine-product-card"
                    >
                      <div className="machine-product-card__image">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 42vw, 22vw"
                          className="object-contain"
                        />
                      </div>
                      <div className="machine-product-card__body">
                        <span className="tag">{product.tag}</span>
                        <h3>{product.name}</h3>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>

              {producedProducts.length > 8 && (
                <Reveal>
                  <div className="machine-products-more">
                    <Link href="/products" className="button button--outline">
                      View All Products →
                    </Link>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        )}

        {/* Machine navigation */}
        <nav className="machine-nav" aria-label="Other machines">
          <div className="section-shell machine-nav__inner">
            {prevMachine ? (
              <Link href={`/machines/${prevMachine.slug}`} className="machine-nav__link machine-nav__link--prev">
                <span className="machine-nav__dir">← Previous</span>
                <span className="machine-nav__name">{prevMachine.name}</span>
              </Link>
            ) : (
              <span />
            )}
            <Link href="/machines" className="machine-nav__all">
              All Machines
            </Link>
            {nextMachine ? (
              <Link href={`/machines/${nextMachine.slug}`} className="machine-nav__link machine-nav__link--next">
                <span className="machine-nav__dir">Next →</span>
                <span className="machine-nav__name">{nextMachine.name}</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}
