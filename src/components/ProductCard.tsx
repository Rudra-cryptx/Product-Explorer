
import { useState } from "react";
import { Heart, Star, ArrowUpRight, ImageOff } from "lucide-react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({
  product,
  onQuickView,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {imageFailed ? (
          <div className="image-fallback" role="img" aria-label={`Image unavailable for ${product.name}`}>
            <ImageOff size={28} />
            <span>Image unavailable</span>
          </div>
        ) : (
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}

        {product.badge && (
          <span
            className={`product-badge badge-${product.badge.toLowerCase()}`}
          >
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className={`favorite-button ${
            isFavorite ? "is-favorite" : ""
          }`}
          aria-label={
            isFavorite
              ? `Remove ${product.name} from favorites`
              : `Add ${product.name} to favorites`
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((value) => !value)}
        >
          <Heart
            size={17}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>

        <button
          type="button"
          className="quick-view"
          onClick={() => onQuickView(product)}
        >
          Quick view <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="product-info">
        <div className="product-meta">
          <span className="category-label">{product.category}</span>
          <span className="rating" aria-label={`Rating ${product.rating} out of 5`}>
            <Star size={13} fill="currentColor" />
            {product.rating.toFixed(1)}
          </span>
        </div>

        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <span className="price">${product.price.toFixed(2)}</span>

          <button
            type="button"
            className="add-button"
            onClick={() => onQuickView(product)}
            aria-label={`View details for ${product.name}`}
          >
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}
