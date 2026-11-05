export interface MenuItemOptionChoice {
  id: string;
  label: string;
  priceDeltaKobo: number;
  imageUrl?: string;
}

export interface MockMenuItem {
  id: string;
  categoryId: "shawarma" | "combos" | "drinks";
  name: string;
  shortTitle: string;
  description: string;
  priceKobo: number;
  largePriceKobo?: number;
  imageUrl: string;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  isAvailable: boolean;
  badge?: string;
}

export interface MenuCategoryItem {
  id: "shawarma" | "combos" | "drinks";
  name: string;
  imageUrl: string;
}

export const MENU_CATEGORIES: MenuCategoryItem[] = [
  {
    id: "shawarma",
    name: "Shawarma",
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "combos",
    name: "Combos",
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "drinks",
    name: "Drinks",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
  },
];

export const MENU_ITEMS: MockMenuItem[] = [
  {
    id: "chicken-shawarma",
    categoryId: "shawarma",
    name: "Chicken shawarma",
    shortTitle: "CHICKEN SHAWARMA",
    description:
      "Juicy grilled chicken strips with crisp veggies and rich garlic sauce.",
    priceKobo: 350000,
    largePriceKobo: 480000,
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    isBestSeller: true,
    isAvailable: true,
    badge: "Best seller",
  },
  {
    id: "beef-shawarma",
    categoryId: "shawarma",
    name: "Beef shawarma",
    shortTitle: "BEEF SHAWARMA",
    description:
      "Spiced tender beef slices, melted cheese, sautéed onions and slaw.",
    priceKobo: 400000,
    largePriceKobo: 550000,
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    isAvailable: true,
  },
  {
    id: "mixed-shawarma",
    categoryId: "shawarma",
    name: "Mixed shawarma",
    shortTitle: "MIXED SPECIAL",
    description:
      "Crispy chicken and spiced beef together with double sausage and sauce.",
    priceKobo: 450000,
    largePriceKobo: 600000,
    imageUrl:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    isAvailable: true,
  },
  {
    id: "sausage-shawarma",
    categoryId: "shawarma",
    name: "Sausage shawarma",
    shortTitle: "SAUSAGE SHAWARMA",
    description:
      "Grilled double sausage, cabbage, carrots and creamy garlic sauce.",
    priceKobo: 380000,
    largePriceKobo: 500000,
    imageUrl:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "chicken-combo",
    categoryId: "combos",
    name: "Chicken combo",
    shortTitle: "COMBO MEAL",
    description:
      "Loaded shawarma, spiced fries, and chilled drink. The perfect combo!",
    priceKobo: 480000,
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    isFeatured: true,
    isAvailable: true,
  },
  {
    id: "chapman",
    categoryId: "drinks",
    name: "Chapman",
    shortTitle: "CHAPMAN",
    description: "Cold, fizzy and fruity Nigerian house special.",
    priceKobo: 150000,
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "zobo",
    categoryId: "drinks",
    name: "Zobo",
    shortTitle: "CHILLED ZOBO",
    description: "Chilled spiced hibiscus drink brewed fresh daily.",
    priceKobo: 100000,
    imageUrl:
      "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "coke-50cl",
    categoryId: "drinks",
    name: "Coke 50cl",
    shortTitle: "COKE 50CL",
    description: "Ice-cold 50cl bottle.",
    priceKobo: 70000,
    imageUrl:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
  {
    id: "bottled-water",
    categoryId: "drinks",
    name: "Bottled water",
    shortTitle: "BOTTLED WATER",
    description: "Chilled 75cl pure table water.",
    priceKobo: 30000,
    imageUrl:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80",
    isAvailable: true,
  },
];

export const FEATURED_MENU_ITEMS: MockMenuItem[] = MENU_ITEMS.filter(
  (item) => item.isFeatured,
);

export const COMBO_SHOWCASE_PLATTERS = [
  {
    id: "combo-beef",
    alt: "Beef shawarma platter",
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=450&q=80",
    isCenterElevated: false,
  },
  {
    id: "combo-signature",
    alt: "Signature double chicken shawarma combo",
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=450&q=80",
    isCenterElevated: true,
  },
  {
    id: "combo-mixed",
    alt: "Crispy mixed shawarma platter",
    imageUrl:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=450&q=80",
    isCenterElevated: false,
  },
] as const;

export const SHAWARMA_SIZE_OPTIONS: MenuItemOptionChoice[] = [
  { id: "regular", label: "Regular", priceDeltaKobo: 0 },
  { id: "large", label: "Large", priceDeltaKobo: 130000 },
];

export const SHAWARMA_SPICE_LEVELS = [
  { id: "mild", label: "Mild", flames: 1 },
  { id: "medium", label: "Medium", flames: 2 },
  { id: "hot", label: "Hot", flames: 3 },
] as const;

export const SHAWARMA_EXTRAS: MenuItemOptionChoice[] = [
  { id: "extra-sausage", label: "Extra sausage", priceDeltaKobo: 50000 },
  { id: "extra-cheese", label: "Extra cheese", priceDeltaKobo: 70000 },
  { id: "extra-chicken", label: "Extra chicken", priceDeltaKobo: 100000 },
  { id: "extra-sauce", label: "Extra sauce", priceDeltaKobo: 20000 },
];

