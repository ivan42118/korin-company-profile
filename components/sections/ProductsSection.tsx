import { products } from "../../content";
import { ProductCard } from "../ui/ProductCard";
import { Reveal } from "../ui/Reveal";
import { SplitHeadline } from "../ui/SplitHeadline";

export function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <div className="section-shell">
        <Reveal className="section-heading">
          <p className="label">Our Products</p>
          <SplitHeadline text="Components made for every application." />
        </Reveal>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
