export interface NavLinkItem {
  href: string;
  label: string;
}

export interface ValuePropItem {
  id: "fresh" | "delivery" | "taste" | "price";
  title: string;
  description: string;
}

export interface DeliveryZoneItem {
  id: string;
  name: string;
  areas: string[];
  feeKobo: number;
  isActive: boolean;
}

export interface PromoCodeItem {
  code: string;
  type: "PERCENT" | "FIXED";
  value: number;
  description: string;
}

export const SHOP_INFO = {
  name: "SharwaBite",
  hoursLabel: "Open 10:00 AM – 10:00 PM daily",
  openTime: "10:00 AM",
  closeTime: "10:00 PM",
  phone: "0803 000 0000",
  phoneHref: "tel:08030000000",
  deliveryWindow: "30–45 mins",
  cityLabel: "Lagos, Nigeria",
  pickupAddress: "14 Admiralty Way, Lekki Phase 1, Lagos",
  isOpen: true,
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/#menu", label: "Menu" },
  { href: "/#combos", label: "Promo" },
  { href: "/account", label: "My Orders" },
  { href: "/login", label: "Sign In" },
];

export const VALUE_PROPS: ValuePropItem[] = [
  {
    id: "fresh",
    title: "FRESH INGREDIENTS",
    description: "We use only the freshest ingredients for the best taste.",
  },
  {
    id: "delivery",
    title: "FAST DELIVERY",
    description: "Hot and fresh shawarma delivered to your door.",
  },
  {
    id: "taste",
    title: "PREMIUM TASTE",
    description: "Bold flavors, premium quality, unforgettable experience.",
  },
  {
    id: "price",
    title: "AFFORDABLE PRICE",
    description: "Great taste at a price that won't break the bank.",
  },
];

export const DELIVERY_ZONES: DeliveryZoneItem[] = [
  {
    id: "zone-a",
    name: "Zone A (Nearby)",
    areas: ["Lekki Phase 1", "Oniru", "Maroko"],
    feeKobo: 80000,
    isActive: true,
  },
  {
    id: "zone-b",
    name: "Zone B",
    areas: ["Victoria Island", "Ikoyi", "Ikate", "Jakande"],
    feeKobo: 120000,
    isActive: true,
  },
  {
    id: "zone-c",
    name: "Zone C",
    areas: ["Chevron", "VGC", "Ajah", "Lagos Island"],
    feeKobo: 180000,
    isActive: true,
  },
];

export const PROMO_CODES: PromoCodeItem[] = [
  {
    code: "WELCOME10",
    type: "PERCENT",
    value: 10,
    description: "10% off your order",
  },
];

