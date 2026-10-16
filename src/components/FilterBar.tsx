
import { ArrowDownWideNarrow, SlidersHorizontal } from "lucide-react";
import type { CategoryOption, Product, SortOption } from "../types";

interface FilterBarProps {
  category: CategoryOption;
  onCategoryChange: (category: CategoryOption) => void;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  products: Product[];
  onReset: () => void;
}

const categories: CategoryOption[] = [
  "All products",
  "Audio",
  "Wearables",
  "Workspace",
  "Lifestyle",
];

export default function FilterBar({
  category,
  onCategoryChange,
  sort,
  onSortChange,
  products,
  onReset,
}: FilterBarProps) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-title">
        <SlidersHorizontal size={16} />
        <span>FILTERS</span>
        <button type="button" onClick={onReset}>Reset</button>
      </div>

      <div className="filter-group">
        <h3>Category</h3>

        <div className="category-options">
          {categories.map((item) => {
            const count =
              item === "All products"
                ? products.length
                : products.filter(
                    (product) => product.category === item
                  ).length;

            return (
              <button
                type="button"
                key={item}
                className={`category-option ${
                  category === item ? "selected" : ""
                }`}
                onClick={() => onCategoryChange(item)}
                aria-pressed={category === item}
              >
                <span className="category-radio">
                  {category === item && <span />}
                </span>

                <span>{item}</span>
                <span className="category-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-group mobile-sort">
        <label htmlFor="sort-select">
          <ArrowDownWideNarrow size={15} />
          Sort products
        </label>

        <select
          id="sort-select"
          value={sort}
          onChange={(event) =>
            onSortChange(event.target.value as SortOption)
          }
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-desc">Price: High to low</option>
          <option value="rating-desc">Top rated</option>
        </select>
      </div>
    </aside>
  );
}
