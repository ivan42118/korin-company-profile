"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ProductCardProps = {
  product: {
    tag: string;
    name: string;
    description: string;
    image: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      className="product-card"
    >
      <div className="product-card__image">
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 768px) 86vw, 28vw" className="object-contain p-8" />
      </div>
      <div className="product-card__body">
        <span className="pill">{product.tag}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <ArrowUpRight className="product-card__arrow" size={24} aria-hidden="true" />
      </div>
    </article>
  );
}
