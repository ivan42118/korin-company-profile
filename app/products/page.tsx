"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";
import { LenisProvider } from "../../components/ui/LenisProvider";
import { PageCurtain } from "../../components/ui/PageCurtain";
import { Reveal } from "../../components/ui/Reveal";
import { ScrollProgress } from "../../components/ui/ScrollProgress";
import { SplitHeadline } from "../../components/ui/SplitHeadline";
import { catalogProducts, productCategories } from "../../content";

function ProductCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return catalogProducts;
    return catalogProducts.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

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
              <p className="label">Product Catalog</p>
              <SplitHeadline text="Everything Korin makes." />
              <p className="page-hero__description">
                Browse the full range of components produced at our Tangerang and Cirebon facilities.
                Select a category to filter the catalog.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Category filter */}
        <div className="products-filter-bar">
          <div className="section-shell products-filter-bar__inner">
            <button
              className={`filter-pill ${activeCategory === "all" ? "filter-pill--active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              All Products
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-pill ${activeCategory === cat.id ? "filter-pill--active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <section className="products-catalog-section">
          <div className="section-shell">
            {/* Active category description */}
            {activeCategory !== "all" && (
              <Reveal>
                <div className="catalog-category-header">
                  {(() => {
                    const cat = productCategories.find((c) => c.id === activeCategory);
                    return cat ? (
                      <>
                        <h2>{cat.name}</h2>
                        <p>{cat.description}</p>
                      </>
                    ) : null;
                  })()}
                </div>
              </Reveal>
            )}

            <div className="products-catalog-grid">
              {filtered.map((product, index) => (
                <Reveal key={product.id} delay={(index % 6) * 0.05}>
                  <article className="product-catalog-card">
                    <div className="product-catalog-card__image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 42vw, (max-width: 1200px) 28vw, 22vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="product-catalog-card__body">
                      <span className="tag">{product.tag}</span>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      {product.producedBy.length > 0 && (
                        <div className="product-catalog-card__machines">
                          {product.producedBy.map((machineSlug) => (
                            <Link
                              key={machineSlug}
                              href={`/machines/${machineSlug}`}
                              className="machine-link-pill"
                            >
                              {machineSlug
                                .split("-")
                                .map((w) => w[0].toUpperCase() + w.slice(1))
                                .join(" ")}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="catalog-empty">
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA to contact */}
        <section className="catalog-cta-section">
          <div className="section-shell catalog-cta-inner">
            <Reveal>
              <p className="label">Custom Requirements</p>
              <h2>Need a specific component?</h2>
              <p>
                If you don't see what you need, reach out. Korin handles custom tooling,
                new mold development, and bespoke component production.
              </p>
              <Link href="/#contact" className="button button--primary">
                Start an Inquiry →
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductCatalog />
    </Suspense>
  );
}
