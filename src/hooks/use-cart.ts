"use client";

import { create } from "zustand";
import { type MockMenuItem } from "@/mocks/menu";
import { PROMO_CODES } from "@/mocks/shop";

export interface CartLineItem {
  lineId: string;
  menuItemId: string;
  name: string;
  imageUrl: string;
  sizeId?: "regular" | "large";
  sizeLabel?: string;
  spiceId?: "mild" | "medium" | "hot";
  spiceLabel?: string;
  extras: { id: string; label: string; priceDeltaKobo: number }[];
  note?: string;
  unitPriceKobo: number;
  quantity: number;
  isAvailable?: boolean;
}

interface AddToCartPayload {
  item: MockMenuItem;
  sizeId?: "regular" | "large";
  sizeLabel?: string;
  spiceId?: "mild" | "medium" | "hot";
  spiceLabel?: string;
  extras: { id: string; label: string; priceDeltaKobo: number }[];
  note?: string;
  unitPriceKobo: number;
  quantity: number;
}

interface CartStoreState {
  items: CartLineItem[];
  isCartOpen: boolean;
  selectedMenuItem: MockMenuItem | null;
  appliedPromoCode: string | null;
  promoError: string | null;

  openOptionSheet: (item: MockMenuItem) => void;
  closeOptionSheet: () => void;

  openCart: () => void;
  closeCart: () => void;

  addItem: (payload: AddToCartPayload) => void;
  updateQuantity: (lineId: string, delta: number) => void;
  removeItem: (lineId: string) => void;
  clearCart: () => void;

  applyPromo: (rawCode: string) => boolean;
  removePromo: () => void;
}

const INITIAL_CART_ITEMS: CartLineItem[] = [
  {
    lineId: "seed-chicken-large-sausage",
    menuItemId: "chicken-shawarma",
    name: "Chicken shawarma",
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    sizeId: "large",
    sizeLabel: "Large",
    spiceId: "medium",
    spiceLabel: "Medium",
    extras: [
      { id: "extra-sausage", label: "Extra sausage", priceDeltaKobo: 50000 },
    ],
    unitPriceKobo: 530000,
    quantity: 1,
    isAvailable: true,
  },
  {
    lineId: "seed-chapman",
    menuItemId: "chapman",
    name: "Chapman",
    imageUrl:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    extras: [],
    unitPriceKobo: 150000,
    quantity: 1,
    isAvailable: true,
  },
];

export const useCartStore = create<CartStoreState>((set) => ({
  items: INITIAL_CART_ITEMS,
  isCartOpen: false,
  selectedMenuItem: null,
  appliedPromoCode: null,
  promoError: null,

  openOptionSheet: (item) => set({ selectedMenuItem: item }),
  closeOptionSheet: () => set({ selectedMenuItem: null }),

  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addItem: ({
    item,
    sizeId,
    sizeLabel,
    spiceId,
    spiceLabel,
    extras,
    note,
    unitPriceKobo,
    quantity,
  }) =>
    set((state) => {
      const extrasKey = extras
        .map((e) => e.id)
        .sort()
        .join(",");
      const cleanNote = note?.trim() || undefined;
      const lineId = `${item.id}__${sizeId ?? "std"}__${spiceId ?? "none"}__${extrasKey}__${cleanNote ?? ""}`;

      const existingIndex = state.items.findIndex((i) => i.lineId === lineId);
      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return { items: updated, selectedMenuItem: null };
      }

      const newLine: CartLineItem = {
        lineId,
        menuItemId: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        sizeId,
        sizeLabel,
        spiceId,
        spiceLabel,
        extras,
        note: cleanNote,
        unitPriceKobo,
        quantity,
        isAvailable: item.isAvailable,
      };

      return {
        items: [...state.items, newLine],
        selectedMenuItem: null,
      };
    }),

  updateQuantity: (lineId, delta) =>
    set((state) => ({
      items: state.items
        .map((line) =>
          line.lineId === lineId
            ? { ...line, quantity: line.quantity + delta }
            : line,
        )
        .filter((line) => line.quantity > 0),
    })),

  removeItem: (lineId) =>
    set((state) => ({
      items: state.items.filter((line) => line.lineId !== lineId),
    })),

  clearCart: () => set({ items: [], appliedPromoCode: null, promoError: null }),

  applyPromo: (rawCode) => {
    const normalized = rawCode.trim().toUpperCase();
    if (!normalized) {
      set({ promoError: "Enter a promo code to apply." });
      return false;
    }

    const found = PROMO_CODES.find((p) => p.code.toUpperCase() === normalized);
    if (!found) {
      set({ promoError: "This code has expired or is invalid." });
      return false;
    }

    set({ appliedPromoCode: found.code, promoError: null });
    return true;
  },

  removePromo: () => set({ appliedPromoCode: null, promoError: null }),
}));

export function getCartTotalCount(items: CartLineItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartSubtotalKobo(items: CartLineItem[]): number {
  return items.reduce(
    (sum, item) => sum + item.unitPriceKobo * item.quantity,
    0,
  );
}

export function getCartDiscountKobo(
  subtotalKobo: number,
  appliedPromoCode: string | null,
): number {
  if (!appliedPromoCode) return 0;
  const found = PROMO_CODES.find(
    (p) => p.code.toUpperCase() === appliedPromoCode.toUpperCase(),
  );
  if (!found) return 0;
  if (found.type === "PERCENT") {
    return Math.round((subtotalKobo * found.value) / 100);
  }
  return Math.min(subtotalKobo, found.value);
}

export function formatCartLineOptions(line: CartLineItem): string {
  const parts: string[] = [];
  if (line.sizeLabel) parts.push(line.sizeLabel);
  if (line.spiceLabel) parts.push(`${line.spiceLabel} spice`);
  if (line.extras.length > 0) {
    parts.push(...line.extras.map((e) => e.label));
  }
  return parts.join(", ");
}

