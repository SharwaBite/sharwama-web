"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Minus, Plus, SlidersHorizontal, X } from "lucide-react";
import { toast } from "sonner";
import { formatKobo } from "@/lib/money";
import {
  MENU_ITEMS,
  SHAWARMA_EXTRAS,
  type MockMenuItem,
} from "@/mocks/menu";
import { useCartStore } from "@/hooks/use-cart";

const SIZE_PILLS = [
  { id: "regular" as const, label: "Regular", weight: "380g", deltaKobo: 0 },
  { id: "large" as const, label: "Large", weight: "480g", deltaKobo: 130000 },
] as const;

const EXTRA_INGREDIENTS: Record<
  string,
  { emoji: string; shortLabel: string }
> = {
  "extra-cheese": { emoji: "🧀", shortLabel: "Cheese" },
  "extra-sausage": { emoji: "🌭", shortLabel: "Sausage" },
  "extra-chicken": { emoji: "🍗", shortLabel: "Chicken" },
  "extra-sauce": { emoji: "🍅", shortLabel: "Garlic Dip" },
};

const RECOMMENDED_PAIRING_IDS = ["chapman", "zobo", "coke-50cl"];

function OptionSheetInner({
  item,
  onSelectDifferentItem,
  onClose,
}: {
  item: MockMenuItem;
  onSelectDifferentItem: (nextItem: MockMenuItem) => void;
  onClose: () => void;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const hasSizes =
    item.categoryId === "shawarma" || Boolean(item.largePriceKobo);

  const [sizeId, setSizeId] = useState<"regular" | "large">("regular");
  const [selectedExtraIds, setSelectedExtraIds] = useState<string[]>([
    "extra-cheese",
    "extra-sausage",
  ]);
  const [quantity, setQuantity] = useState(1);

  const toggleExtra = (extraId: string) => {
    setSelectedExtraIds((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId],
    );
  };

  const basePriceKobo =
    hasSizes && sizeId === "large"
      ? (item.largePriceKobo ?? item.priceKobo + 130000)
      : item.priceKobo;

  const selectedExtras =
    item.categoryId === "drinks"
      ? []
      : SHAWARMA_EXTRAS.filter((extra) => selectedExtraIds.includes(extra.id));

  const extrasTotalKobo = selectedExtras.reduce(
    (sum, extra) => sum + extra.priceDeltaKobo,
    0,
  );

  const unitPriceKobo = basePriceKobo + extrasTotalKobo;
  const liveTotalKobo = unitPriceKobo * quantity;

  const recommendedPairings = MENU_ITEMS.filter(
    (m) => RECOMMENDED_PAIRING_IDS.includes(m.id) && m.id !== item.id,
  ).slice(0, 3);

  const handleAddToOrder = () => {
    if (!item.isAvailable) return;

    addItem({
      item,
      sizeId: hasSizes ? sizeId : undefined,
      sizeLabel: hasSizes
        ? sizeId === "large"
          ? "480g (Large)"
          : "380g (Regular)"
        : undefined,
      extras: selectedExtras.map((e) => ({
        id: e.id,
        label: e.label,
        priceDeltaKobo: e.priceDeltaKobo,
      })),
      unitPriceKobo,
      quantity,
    });

    toast.success(`Added ${quantity}x ${item.name} to My Order`);
    openCart();
  };

  const handleQuickAddPairing = (pairing: MockMenuItem) => {
    addItem({
      item: pairing,
      extras: [],
      unitPriceKobo: pairing.priceKobo,
      quantity: 1,
    });
    toast.success(`Added ${pairing.name} to My Order`);
  };

  const mainImageSrc =
    item.categoryId === "shawarma" ? "/shawarma-cutout.png" : item.imageUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="meal-builder-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-xs sm:p-5"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[840px] overflow-hidden rounded-[24px] bg-white px-5 py-4 shadow-2xl sm:px-7 sm:py-5"
      >
        {/* ==================== 1. MEAL CATEGORY HEADER & PILLS ==================== */}
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-bold text-[#111C24] sm:text-base">
            Meal Category
          </h3>

          <div className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="inline-flex size-8 items-center justify-center rounded-full text-[#F97316]"
            >
              <SlidersHorizontal className="size-4" />
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close meal builder"
              className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone-200 text-[#111C24] transition-colors hover:bg-stone-100"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Dish Switcher Pills */}
        <div className="mt-2.5 flex items-center gap-2 overflow-hidden">
          {MENU_ITEMS.slice(0, 6).map((menuEntry) => {
            const isActive = menuEntry.id === item.id;
            return (
              <button
                key={menuEntry.id}
                type="button"
                onClick={() => onSelectDifferentItem(menuEntry)}
                className={`shrink-0 cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#111C24] text-white"
                    : "bg-[#FFFBF5] text-[#111C24] hover:bg-[#FFEDD5]/60"
                }`}
              >
                {menuEntry.name}
              </button>
            );
          })}
        </div>

        {/* ==================== 2. MAIN BUILDER SPLIT ==================== */}
        <div className="mt-4 grid grid-cols-1 items-center gap-4 md:grid-cols-12 md:gap-6">
          {/* Left Column: Large Frameless Cut-out Food Image */}
          <div className="flex items-center justify-center md:col-span-5">
            <div className="relative aspect-square w-36 sm:w-48 md:w-56">
              <Image
                src={mainImageSrc}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className={
                  item.categoryId === "shawarma"
                    ? "object-contain"
                    : "rounded-full object-cover"
                }
              />
            </div>
          </div>

          {/* Right Column: Title, Description, Size Pills, Build Your Meal, Add to Order */}
          <div className="flex flex-col items-start md:col-span-7">
            <h2
              id="meal-builder-title"
              className="text-2xl font-extrabold tracking-tight text-[#111C24] sm:text-3xl"
            >
              {item.name}
            </h2>

            <p className="mt-1 max-w-md text-xs leading-relaxed text-stone-500">
              {item.description}
            </p>

            {/* SIZE Pills */}
            {hasSizes && (
              <div className="mt-3.5 w-full">
                <span className="block text-[10px] font-bold tracking-wider text-stone-400 uppercase">
                  SIZE
                </span>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  {SIZE_PILLS.map((pill) => {
                    const isSelected = sizeId === pill.id;
                    return (
                      <button
                        key={pill.id}
                        type="button"
                        onClick={() => setSizeId(pill.id)}
                        className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                          isSelected
                            ? "border border-[#111C24] bg-[#111C24] text-white"
                            : "border border-dashed border-stone-300 bg-white text-[#111C24] hover:border-[#F97316]"
                        }`}
                      >
                        {pill.weight} ({pill.label})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* BUILD YOUR MEAL (Dashed Ingredient Cards with Bottom Check Badge) */}
            {item.categoryId !== "drinks" && (
              <div className="mt-3.5 w-full">
                <span className="block text-[10px] font-bold tracking-wider text-stone-400 uppercase">
                  BUILD YOUR MEAL
                </span>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 pb-1.5">
                  {SHAWARMA_EXTRAS.map((extra) => {
                    const isSelected = selectedExtraIds.includes(extra.id);
                    const visual = EXTRA_INGREDIENTS[extra.id] ?? {
                      emoji: "✨",
                      shortLabel: extra.label,
                    };

                    return (
                      <button
                        key={extra.id}
                        type="button"
                        onClick={() => toggleExtra(extra.id)}
                        aria-pressed={isSelected}
                        title={`${extra.label} (+${formatKobo(extra.priceDeltaKobo)})`}
                        className={`relative flex h-15 w-15 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed pb-1.5 transition-all ${
                          isSelected
                            ? "border-[#111C24] bg-[#FFFBF5]"
                            : "border-stone-300 bg-white hover:border-stone-400"
                        }`}
                      >
                        <span className="text-2xl leading-none">
                          {visual.emoji}
                        </span>
                        <span className="mt-0.5 text-[9px] font-semibold text-stone-500">
                          {visual.shortLabel}
                        </span>

                        {/* Bottom Overlapping Check Circle */}
                        <span
                          className={`absolute -bottom-2 flex size-4.5 items-center justify-center rounded-full transition-colors ${
                            isSelected
                              ? "bg-[#111C24] text-white"
                              : "border border-stone-300 bg-white text-transparent"
                          }`}
                        >
                          <Check className="size-2.5 stroke-[3]" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Stepper + Split [ ₦Price | Add to order ] Pill Button */}
            <div className="mt-4 flex flex-wrap items-center gap-3.5">
              {/* + 1 - Circular Stepper */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-[#111C24] transition-colors hover:bg-stone-200"
                >
                  <Plus className="size-3.5 stroke-[2.5]" />
                </button>
                <span className="min-w-4 text-center text-xs font-bold tabular-nums text-[#111C24]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-[#111C24] transition-colors hover:bg-stone-200"
                >
                  <Minus className="size-3.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Split Dark Pill Button: [ Price | Add to order ] */}
              <button
                type="button"
                onClick={handleAddToOrder}
                disabled={!item.isAvailable}
                className="inline-flex h-10 cursor-pointer items-center rounded-full bg-[#111C24] px-6 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#F97316] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="pr-4 text-xs font-extrabold tabular-nums">
                  {formatKobo(liveTotalKobo)}
                </span>
                <span className="h-3.5 w-px bg-white/25" />
                <span className="pl-4 text-xs font-bold tracking-wide">
                  Add to order
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ==================== 3. RECOMMENDED PAIRINGS STRIP ==================== */}
        <div className="mt-4 pt-1">
          <span className="block text-[10px] font-bold tracking-wider text-stone-400 uppercase">
            RECOMMENDED PAIRINGS
          </span>

          <div className="mt-2 grid grid-cols-3 gap-2.5 sm:gap-3">
            {recommendedPairings.map((pairing) => (
              <div
                key={pairing.id}
                className="flex items-center justify-between gap-2 rounded-2xl border border-dashed border-stone-300 bg-white p-2.5 transition-colors hover:border-[#F97316]"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-[#FDF8F0]">
                    <Image
                      src={pairing.imageUrl}
                      alt={pairing.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="truncate text-xs font-bold text-[#111C24]">
                      {pairing.name}
                    </h4>
                    <span className="block text-[10px] text-stone-400">
                      500ml
                    </span>
                    <span className="mt-0.5 block text-xs font-extrabold tabular-nums text-[#F97316]">
                      {formatKobo(pairing.priceKobo)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleQuickAddPairing(pairing)}
                  aria-label={`Add ${pairing.name} to order`}
                  className="inline-flex size-6 shrink-0 cursor-pointer items-center justify-center self-end rounded-full bg-[#111C24] text-white transition-colors hover:bg-[#F97316]"
                >
                  <Plus className="size-3 stroke-[2.5]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ItemOptionSheet() {
  const selectedMenuItem = useCartStore((s) => s.selectedMenuItem);
  const openOptionSheet = useCartStore((s) => s.openOptionSheet);
  const closeOptionSheet = useCartStore((s) => s.closeOptionSheet);

  if (!selectedMenuItem) return null;

  return (
    <OptionSheetInner
      key={selectedMenuItem.id}
      item={selectedMenuItem}
      onSelectDifferentItem={openOptionSheet}
      onClose={closeOptionSheet}
    />
  );
}
