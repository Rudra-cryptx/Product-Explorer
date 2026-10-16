
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="search-wrap">
      <Search size={18} aria-hidden="true" />

      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products by name..."
        aria-label="Search products by name"
      />

      {value && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}

      <kbd aria-hidden="true">Ctrl K</kbd>
    </div>
  );
}
