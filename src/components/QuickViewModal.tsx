
import { useEffect } from "react";
import { X, Star, Tag } from "lucide-react";
import type { Product } from "../types";

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
}

export default function QuickViewModal({
  product,
  onClose,
}: QuickViewModalProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="quick-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={20} />
        </button>

        <div className="quick-modal-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="quick-modal-content">
          <span className="category-label">{product.category}</span>

          <h2 id="quick-modal-title">{product.name}</h2>

          <div className="quick-modal-rating">
            <Star size={16} fill="currentColor" />
            <span>{product.rating.toFixed(1)} / 5</span>
          </div>

          <p>{product.description}</p>

          {product.badge && (
            <span className="product-badge">
              <Tag size={12} />
              {product.badge}
            </span>
          )}

          <div className="quick-modal-bottom">
            <span className="price">
              ${product.price.toFixed(2)}
            </span>

            <button
              type="button"
              className="primary-button"
              onClick={onClose}
            >
              Done <span>↗</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
