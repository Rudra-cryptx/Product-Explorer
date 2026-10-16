
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";
import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
  search: string;
  onQuickView: (product: Product) => void;
  onReset: () => void;
}

export default function ProductGrid({
  products,
  search,
  onQuickView,
  onReset,
}: ProductGridProps) {
  if (products.length === 0) {
    return <EmptyState search={search} onReset={onReset} />;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
