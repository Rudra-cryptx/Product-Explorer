
export type Category =
  | "Audio"
  | "Wearables"
  | "Workspace"
  | "Lifestyle";

export type ProductBadge =
  | "BESTSELLER"
  | "NEW"
  | "LIMITED";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  rating: number;
  description: string;
  image: string;
  badge?: ProductBadge;
}

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating-desc";

export type CategoryOption = "All products" | Category;
