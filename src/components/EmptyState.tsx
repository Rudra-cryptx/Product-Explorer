
import { PackageSearch } from "lucide-react";

interface EmptyStateProps {
  search: string;
  onReset: () => void;
}

export default function EmptyState({
  search,
  onReset,
}: EmptyStateProps) {
  return (
    <section className="empty-state" aria-live="polite">
      <div className="empty-icon">
        <PackageSearch size={30} />
      </div>

      <p className="eyebrow">NOTHING HERE YET</p>
      <h3>No products found</h3>

      <p>
        {search
          ? `We couldn't find a product matching "${search}". Try another name.`
          : "No products match your current filters. Try changing your category."}
      </p>

      <button
        type="button"
        className="primary-button"
        onClick={onReset}
      >
        Clear search and filters <span>↗</span>
      </button>
    </section>
  );
}
