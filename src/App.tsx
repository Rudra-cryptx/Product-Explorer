
import { useEffect, useMemo, useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  Search,
} from "lucide-react";

import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import QuickViewModal from "./components/QuickViewModal";
import { products } from "./data";
import type {
  CategoryOption,
  Product,
  SortOption,
} from "./types";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<CategoryOption>("All products");
  const [sort, setSort] = useState<SortOption>("featured");
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        document.querySelector<HTMLInputElement>(
          ".search-wrap input"
        )?.focus();
      }

      if (event.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesName = product.name
        .toLowerCase()
        .includes(query);

      const matchesCategory =
        category === "All products" ||
        product.category === category;

      return matchesName && matchesCategory;
    });

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => a.id - b.id);
    }

    return result;
  }, [search, category, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All products");
    setSort("featured");
  };

  return (
    <div className="app-shell" id="top">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Obsidian home">
          <span className="brand-mark">O</span>
          <span>
            obsidian<span className="brand-dot">.</span>
          </span>
        </a>

        <nav className="top-nav" aria-label="Main navigation">
          <a className="nav-active" href="#collection">Discover</a>
          <a href="#collection">Collections</a>
          <a href="#about">Our approach</a>
        </nav>

        <div className="header-right">
          <span className="edition-label">
            CURATED GOODS / VOL. 01
          </span>
          <span className="bag-icon">
            <ShoppingBag size={17} />
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              THE EVERYDAY EDITION
            </div>

            <h1>
              Good things.
              <br />
              <span>Better design.</span>
            </h1>

            <p className="hero-description">
              A considered collection of objects that make everyday
              life feel a little more extraordinary.
            </p>

            <a href="#collection" className="primary-button">
              Explore the collection <span>↘</span>
            </a>

            <div className="hero-footnote">
              <span className="tiny-orb" />
              Less noise. More of what matters.
            </div>
          </div>

          <div className="hero-art">
            <div className="art-glow" />
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1200&q=85"
                alt="Modern electronics collection"
              />
            </div>

            <div className="floating-note">
              <span className="note-icon">
                <Sparkles size={15} />
              </span>
              <div>
                <strong>Thoughtfully chosen</strong>
                <small>Design that earns its place.</small>
              </div>
            </div>

            <div className="art-index">01 <span>/</span> 04</div>
          </div>

          <div className="hero-side-label">
            OBJECTS FOR A BETTER EVERYDAY
          </div>
        </section>

        <section className="collection-section" id="collection">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" />
                THE COLLECTION
              </div>
              <h2>
                Find your <span>next favorite.</span>
              </h2>
            </div>

            <p className="section-intro">
              Useful by nature. Beautiful by design.
              <br />
              Every item has a reason to be here.
            </p>
          </div>

          <div className="toolbar">
            <SearchBar value={search} onChange={setSearch} />
            
          </div>

          <div className="collection-layout">
            <FilterBar
              category={category}
              onCategoryChange={setCategory}
              sort={sort}
              onSortChange={setSort}
              products={products}
              onReset={resetFilters}
            />

            <div className="results-area">
              <div className="results-header">
                <p aria-live="polite">
                  <strong>{filteredProducts.length}</strong>{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                  <span> / </span>
                  {category === "All products"
                    ? "All categories"
                    : category}
                </p>

                <span className="results-status">
                  <span />
                  SHOWING RESULTS
                </span>
              </div>

              <ProductGrid
                products={filteredProducts}
                search={search}
                onQuickView={setSelectedProduct}
                onReset={resetFilters}
              />

              <div className="collection-footer">
                <span>
                  SHOWING {filteredProducts.length} OF {products.length} OBJECTS
                </span>
                <span>
                  DESIGNED TO BE KEPT{" "}
                  <span className="footer-star">✳</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="manifesto" id="about">
          <div className="manifesto-symbol">✳</div>
          <p>
            Less, but <span>considerably better.</span>
          </p>
          <span className="manifesto-caption">
            A SMALL COLLECTION. A CLEAR POINT OF VIEW.
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand">
          <span className="brand-mark">O</span>
          <span>
            obsidian<span className="brand-dot">.</span>
          </span>
        </a>
        <span>© 2026 OBSIDIAN STUDIO</span>
        <span>MADE FOR EVERYDAY LIVING.</span>
      </footer>

      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
