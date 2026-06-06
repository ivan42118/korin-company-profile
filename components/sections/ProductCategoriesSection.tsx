"use client";

import Link from "next/link";
import { productCategories } from "../../content";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

// ─── Inline SVG Illustrations ─────────────────────────────────────────────────

function HeelComponentsIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M20 80 C20 80 22 55 35 42 C48 29 68 26 85 30 C100 34 106 44 105 56 C104 64 98 72 88 76 L20 80Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"
      />
      <path
        d="M20 80 L88 76"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <path
        d="M35 42 C35 42 38 48 40 55 C42 62 40 70 38 76"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M60 30 C60 30 62 36 63 44 C64 52 62 64 60 72"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 3"
      />
      <path
        d="M20 80 C18 82 16 85 18 88 L88 84 C90 82 92 79 88 76"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />
      <circle cx="105" cy="50" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="80" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function ToeCapIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M15 72 C15 72 18 50 30 38 C42 26 60 22 78 26 C92 30 102 42 100 58 C100 58 98 64 90 68 L15 72Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"
      />
      <path
        d="M15 72 L90 68"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      <path
        d="M28 40 C32 36 40 32 50 30"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M60 24 C72 24 84 30 92 40"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3 3"
      />
      <path
        d="M15 72 C13 74 13 78 15 80 L90 76 C92 74 92 70 90 68"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />
      <path
        d="M100 58 C102 56 104 50 100 44"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <ellipse cx="57" cy="46" rx="18" ry="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

function EvaComponentIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Midsole body */}
      <path
        d="M12 62 C12 55 18 48 30 44 L88 40 C98 40 108 46 108 56 C108 64 100 70 88 72 L32 76 C20 76 12 70 12 62Z"
        stroke="currentColor" strokeWidth="2" fill="none"
      />
      {/* Top face */}
      <path
        d="M30 44 C22 44 14 50 14 58"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      <path
        d="M88 40 C100 40 108 46 108 56"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
      />
      {/* Foam cell pattern */}
      <ellipse cx="35" cy="57" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="55" cy="54" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="75" cy="53" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="45" cy="65" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="65" cy="63" rx="6" ry="4" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="87" cy="62" rx="5" ry="3.5" stroke="currentColor" strokeWidth="1" />
      {/* Ground plane */}
      <path d="M14 75 L106 75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
    </svg>
  );
}

function SheetMaterialIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Sheet stack — 3 layers */}
      {/* Bottom layer */}
      <path
        d="M14 72 L106 72 L100 84 L8 84 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />
      {/* Middle layer */}
      <path
        d="M16 62 L108 62 L106 72 L14 72 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none"
      />
      {/* Top layer */}
      <path
        d="M18 52 L110 52 L108 62 L16 62 Z"
        stroke="currentColor" strokeWidth="2" fill="none"
      />
      {/* Top surface detail lines */}
      <path d="M28 52 L26 62" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M50 52 L48 62" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M72 52 L70 62" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M94 52 L92 62" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      {/* Curl on corner of top sheet */}
      <path
        d="M110 52 C112 50 112 46 108 44 C104 42 100 44 100 48"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path
        d="M100 48 L110 52"
        stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"
      />
    </svg>
  );
}

function ShankIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Main shank body */}
      <path
        d="M22 66 C22 66 22 52 30 46 L58 38 L90 42 C98 44 102 52 100 60 C98 66 92 70 84 70 L30 74 C26 74 22 71 22 66Z"
        stroke="currentColor" strokeWidth="2" fill="none"
      />
      {/* Central spine rib */}
      <path
        d="M30 46 L58 38 L90 42"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      />
      {/* Side ribs */}
      <path d="M36 70 L34 46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M54 72 L56 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M72 72 L76 40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M88 70 L90 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* D-ring */}
      <rect x="26" y="28" width="16" height="10" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M34 28 L34 38" stroke="currentColor" strokeWidth="1" />
      {/* Mounting holes */}
      <circle cx="40" cy="56" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="56" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function RattanIllustration() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Weave grid — horizontal strands */}
      <path d="M12 30 C20 28 28 32 36 30 C44 28 52 32 60 30 C68 28 76 32 84 30 C92 28 100 32 108 30"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 42 C20 40 28 44 36 42 C44 40 52 44 60 42 C68 40 76 44 84 42 C92 40 100 44 108 42"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 54 C20 52 28 56 36 54 C44 52 52 56 60 54 C68 52 76 56 84 54 C92 52 100 56 108 54"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M12 66 C20 64 28 68 36 66 C44 64 52 68 60 66 C68 64 76 68 84 66 C92 64 100 68 108 66"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Weave grid — vertical strands (crossing) */}
      <path d="M24 24 C22 32 26 40 24 48 C22 56 26 64 24 72 C22 80 24 86 24 86"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
      <path d="M42 24 C40 32 44 40 42 48 C40 56 44 64 42 72 C40 80 42 86 42 86"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
      <path d="M60 24 C58 32 62 40 60 48 C58 56 62 64 60 72 C58 80 60 86 60 86"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
      <path d="M78 24 C76 32 80 40 78 48 C76 56 80 64 78 72 C76 80 78 86 78 86"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
      <path d="M96 24 C94 32 98 40 96 48 C94 56 98 64 96 72 C94 80 96 86 96 86"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeOpacity="0.7" />
    </svg>
  );
}

const categoryIllustrations: Record<string, React.ComponentType> = {
  "heel-components": HeelComponentsIllustration,
  "toe-caps": ToeCapIllustration,
  "eva-components": EvaComponentIllustration,
  "sheet-materials": SheetMaterialIllustration,
  "shanks-accessories": ShankIllustration,
  "synthetic-rattan": RattanIllustration,
};

// ─── Section Component ────────────────────────────────────────────────────────

export function ProductCategoriesSection() {
  return (
    <section id="products" className="product-categories-section">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="label">Product Range</p>
            <SplitHeadline text="What Korin produces." />
          </div>
          <p>
            From precision footwear components to synthetic rattan — six product families, all manufactured
            in-house at our Tangerang and Cirebon facilities.
          </p>
        </Reveal>

        <div className="product-categories-grid">
          {productCategories.map((category, index) => {
            const Illustration = categoryIllustrations[category.id];
            return (
              <Reveal key={category.id} delay={index * 0.06}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="category-card"
                  aria-label={`Browse ${category.name}`}
                >
                  <div className="category-card__illustration">
                    {Illustration && <Illustration />}
                  </div>
                  <div className="category-card__body">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span className="category-card__cta">Browse products →</span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="product-categories-footer">
            <Link href="/products" className="button button--outline">
              View Full Catalog
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
