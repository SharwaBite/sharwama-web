"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  Minus,
  Plus,
  ShoppingBag,
  TicketPercent,
  X,
} from "lucide-react";
import { formatKobo } from "@/lib/money";
import {
  formatCartLineOptions,
  getCartDiscountKobo,
  getCartSubtotalKobo,
  getCartTotalCount,
  useCartStore,
} from "@/hooks/use-cart";

export function CartDrawer() {
  const items = useCartStore((s) => s.items);
  const isCartOpen = useCartStore((s) => s.isCartOpen);
  const openCart = useCartStore((s) => s.openCart);
  const closeCart = useCartStore((s) => s.closeCart);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const appliedPromoCode = useCartStore((s) => s.appliedPromoCode);
  const promoError = useCartStore((s) => s.promoError);
  const applyPromo = useCartStore((s) => s.applyPromo);
  const removePromo = useCartStore((s) => s.removePromo);

  const [promoInput, setPromoInput] = useState("");

  const totalCount = getCartTotalCount(items);
  const subtotalKobo = getCartSubtotalKobo(items);
  const discountKobo = getCartDiscountKobo(subtotalKobo, appliedPromoCode);
  const netSubtotalKobo = Math.max(0, subtotalKobo - discountKobo);
  const unavailableItems = items.filter((item) => item.isAvailable === false);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyPromo(promoInput)) {
      setPromoInput("");
    }
  };

  return (
    <>
      {/* Mobile Sticky Bottom Cart Pill (visible on mobile when cart has items) */}
      {totalCount > 0 && !isCartOpen && (
        <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
          <button
            type="button"
            onClick={openCart}
            className="flex w-full cursor-pointer items-center justify-between rounded-full bg-[#111C24] p-2 pr-5 text-white shadow-xl transition-transform active:scale-[0.99]"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2 overflow-hidden pl-1">
                {items.slice(0, 3).map((line) => (
                  <div
                    key={line.lineId}
                    className="relative size-9 overflow-hidden rounded-full border-2 border-[#111C24] bg-stone-700"
                  >
                    <Image
                      src={line.imageUrl}
                      alt={line.name}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold">
                  {totalCount} {totalCount === 1 ? "position" : "positions"}
                </span>
                <span className="block text-xs font-semibold tabular-nums text-[#F97316]">
                  {formatKobo(netSubtotalKobo)}
                </span>
              </div>
            </div>

            <span className="rounded-full bg-[#F97316] px-4 py-2 text-xs font-bold text-white">
              My Order
            </span>
          </button>
        </div>
      )}

      {/* Right-Side "My Order" Panel (Desktop 420px) / Full-Screen Sheet (Mobile) */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="my-order-title"
          className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs sm:p-4"
          onClick={closeCart}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full flex-col bg-white p-6 shadow-2xl sm:max-w-[400px] sm:rounded-[28px] sm:p-7"
          >
            {/* ==================== 1. HEADER: My Order | N positions ==================== */}
            <div className="flex items-center justify-between">
              <h2
                id="my-order-title"
                className="text-lg font-extrabold text-[#111C24]"
              >
                My Order
              </h2>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-stone-400 tabular-nums">
                  {totalCount} {totalCount === 1 ? "position" : "positions"}
                </span>
                <button
                  type="button"
                  onClick={closeCart}
                  aria-label="Close My Order"
                  className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-stone-200 text-[#111C24] transition-colors hover:bg-stone-100"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* ==================== 2. EMPTY STATE ==================== */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
                <div className="mb-4 flex size-18 items-center justify-center rounded-full bg-[#FFF5E6] text-[#F97316]">
                  <ShoppingBag className="size-8 stroke-[1.75]" />
                </div>
                <p className="text-base font-bold text-[#111C24]">
                  Your order is empty
                </p>
                <p className="mt-1 max-w-xs text-xs text-stone-400">
                  Pick a fresh shawarma or combo from the menu to get started.
                </p>
                <Link
                  href="/#menu"
                  onClick={closeCart}
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-7 text-xs font-bold text-white shadow-[0_8px_20px_-4px_rgba(249,115,22,0.45)] transition-transform hover:-translate-y-0.5 hover:bg-[#EA580C]"
                >
                  Browse the menu
                </Link>
              </div>
            ) : (
              <>
                {/* ==================== 3. DASHED ITEM CARDS ==================== */}
                <div className="mt-5 flex-1 space-y-3.5 overflow-y-auto pr-0.5">
                  {unavailableItems.map((soldOutItem) => (
                    <div
                      key={soldOutItem.lineId}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-[#B45309]/40 bg-[#FFEDD5] p-3 text-xs"
                    >
                      <div className="flex items-center gap-2 text-[#9A3412]">
                        <AlertTriangle className="size-4 shrink-0" />
                        <span className="font-semibold">
                          {soldOutItem.name} is sold out.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(soldOutItem.lineId)}
                        className="shrink-0 cursor-pointer font-bold text-[#B91C1C] underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}

                  {items.map((line) => {
                    const subtitle =
                      formatCartLineOptions(line) || "380g (Regular)";
                    const lineTotal = line.unitPriceKobo * line.quantity;

                    return (
                      <div
                        key={line.lineId}
                        className="flex items-center justify-between gap-3.5 rounded-[20px] border border-dashed border-stone-200 bg-white p-3.5 transition-colors hover:border-stone-300"
                      >
                        <div className="flex items-center gap-3.5">
                          {/* Circular Dish Thumbnail */}
                          <div className="relative size-15 shrink-0 overflow-hidden rounded-full bg-[#FDF8F0]">
                            <Image
                              src={line.imageUrl}
                              alt={line.name}
                              fill
                              sizes="60px"
                              className="object-cover"
                            />
                          </div>

                          {/* Title, Subtitle, Orange Price */}
                          <div>
                            <h3 className="text-xs font-bold text-[#111C24] sm:text-sm">
                              {line.name}
                            </h3>
                            <p className="mt-0.5 line-clamp-1 text-[11px] text-stone-400">
                              {subtitle}
                            </p>
                            <span className="mt-2 block text-xs font-extrabold tabular-nums text-[#F97316]">
                              {formatKobo(lineTotal)}
                            </span>
                          </div>
                        </div>

                        {/* Compact + 1 - Stepper */}
                        <div className="flex items-center gap-2 self-end">
                          <button
                            type="button"
                            onClick={() => updateQuantity(line.lineId, 1)}
                            aria-label={`Increase ${line.name}`}
                            className="inline-flex size-6 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-[#111C24] transition-colors hover:bg-stone-200"
                          >
                            <Plus className="size-3 stroke-[2.5]" />
                          </button>
                          <span className="min-w-3 text-center text-xs font-bold tabular-nums text-[#111C24]">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(line.lineId, -1)}
                            aria-label={`Decrease ${line.name}`}
                            className="inline-flex size-6 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-[#111C24] transition-colors hover:bg-stone-200"
                          >
                            <Minus className="size-3 stroke-[2.5]" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ==================== 4. PROMOCODE & TOTALS ==================== */}
                <div className="mt-4 pt-2">
                  {/* Dashed Divider Promo Row */}
                  <div className="border-y border-dashed border-stone-200 py-3.5">
                    {appliedPromoCode ? (
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase">
                          PROMOCODE
                        </span>
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111C24]">
                          <TicketPercent className="size-4 text-[#111C24]" />
                          <span>{appliedPromoCode.toLowerCase()}</span>
                          <button
                            type="button"
                            onClick={removePromo}
                            aria-label="Remove promo code"
                            className="ml-1 cursor-pointer text-stone-400 hover:text-[#B91C1C]"
                          >
                            &times;
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleApplyPromo}
                        className="flex items-center justify-between gap-2"
                      >
                        <label
                          htmlFor="my-order-promo"
                          className="text-[11px] font-semibold tracking-wider text-stone-500 uppercase"
                        >
                          PROMOCODE
                        </label>
                        <div className="flex items-center gap-1.5">
                          <input
                            id="my-order-promo"
                            type="text"
                            value={promoInput}
                            onChange={(e) => setPromoInput(e.target.value)}
                            placeholder="WELCOME10"
                            className="h-7 w-28 rounded-full border border-dashed border-stone-300 bg-[#FFFBF5] px-2.5 text-xs font-semibold text-[#111C24] uppercase placeholder:text-stone-400 focus:border-[#F97316] focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="h-7 cursor-pointer rounded-full bg-[#111C24] px-3 text-[11px] font-bold text-white hover:bg-[#F97316]"
                          >
                            Apply
                          </button>
                        </div>
                      </form>
                    )}
                    {promoError && (
                      <p className="mt-1.5 text-right text-[11px] font-medium text-[#B91C1C]">
                        {promoError}
                      </p>
                    )}
                  </div>

                  {/* Summary Rows */}
                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between text-stone-500">
                      <span className="font-semibold tracking-wider uppercase">
                        DISCOUNT
                      </span>
                      <span className="font-semibold text-[#111C24] tabular-nums">
                        {discountKobo > 0 ? "-10%" : "0%"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-stone-500">
                      <span className="font-semibold tracking-wider uppercase">
                        DELIVERY
                      </span>
                      <span className="font-semibold text-[#111C24]">FREE</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 text-sm font-extrabold text-[#111C24]">
                      <span className="tracking-wider uppercase">TOTAL</span>
                      <span className="text-base tabular-nums">
                        {formatKobo(netSubtotalKobo)}
                      </span>
                    </div>
                  </div>

                  {/* Confirm Order Full-Width Pill Button */}
                  <Link
                    href={unavailableItems.length > 0 ? "#" : "/checkout"}
                    onClick={(e) => {
                      if (unavailableItems.length > 0) {
                        e.preventDefault();
                        return;
                      }
                      closeCart();
                    }}
                    aria-disabled={unavailableItems.length > 0}
                    className={`mt-6 flex h-13 w-full items-center justify-center rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-[0_10px_24px_-6px_rgba(249,115,22,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#EA580C] ${
                      unavailableItems.length > 0
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    Confirm Order
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
