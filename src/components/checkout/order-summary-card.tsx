"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Loader2, ShieldCheck } from "lucide-react";
import { formatKobo } from "@/lib/money";
import {
  formatCartLineOptions,
  getCartTotalCount,
  type CartLineItem,
} from "@/hooks/use-cart";

interface OrderSummaryCardProps {
  items: CartLineItem[];
  orderType: "DELIVERY" | "PICKUP";
  subtotalKobo: number;
  deliveryFeeKobo: number;
  discountKobo: number;
  totalKobo: number;
  appliedPromoCode: string | null;
  isPaying: boolean;
  isPayDisabled: boolean;
  onPay: () => void;
}

export function OrderSummaryCard({
  items,
  orderType,
  subtotalKobo,
  deliveryFeeKobo,
  discountKobo,
  totalKobo,
  appliedPromoCode,
  isPaying,
  isPayDisabled,
  onPay,
}: OrderSummaryCardProps) {
  const [showItems, setShowItems] = useState(false);
  const totalCount = getCartTotalCount(items);

  return (
    <>
      {/* Receipt-Style Sticky Summary Card */}
      <div className="sticky top-26 overflow-hidden rounded-t-[20px] bg-white shadow-sm">
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-[#111C24]">
              Order summary
            </h2>
            <span className="text-xs font-medium text-stone-400 tabular-nums">
              {totalCount} {totalCount === 1 ? "position" : "positions"}
            </span>
          </div>

          {/* Collapsible Items Strip */}
          <div className="mt-4 rounded-2xl border border-dashed border-stone-200 bg-[#FFFBF5]/70 p-3.5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2 overflow-hidden">
                  {items.slice(0, 4).map((line) => (
                    <div
                      key={line.lineId}
                      className="relative size-9 overflow-hidden rounded-full border-2 border-white bg-stone-200"
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
                <span className="text-xs font-bold text-[#111C24]">
                  {totalCount} {totalCount === 1 ? "item" : "items"} in order
                </span>
              </div>

              <button
                type="button"
                onClick={() => setShowItems((prev) => !prev)}
                className="inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-[#F97316] hover:text-[#EA580C]"
              >
                <span>{showItems ? "Hide items" : "Show items"}</span>
                {showItems ? (
                  <ChevronUp className="size-3.5" />
                ) : (
                  <ChevronDown className="size-3.5" />
                )}
              </button>
            </div>

            {/* Expanded Item Lines */}
            {showItems && (
              <ul className="mt-3.5 space-y-2.5 border-t border-dashed border-stone-200 pt-3.5">
                {items.map((line) => {
                  const options = formatCartLineOptions(line);
                  return (
                    <li
                      key={line.lineId}
                      className="flex items-start justify-between gap-3 text-xs"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-white">
                          <Image
                            src={line.imageUrl}
                            alt={line.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-[#111C24]">
                            {line.quantity}x {line.name}
                          </p>
                          {options && (
                            <p className="text-[11px] text-stone-400">
                              {options}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="shrink-0 font-bold tabular-nums text-[#111C24]">
                        {formatKobo(line.unitPriceKobo * line.quantity)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Right-Aligned Receipt Totals */}
          <dl className="mt-5 space-y-3 border-t border-dashed border-stone-200 pt-4 text-xs">
            <div className="flex items-center justify-between text-stone-500">
              <dt className="font-semibold tracking-wider uppercase">
                Subtotal
              </dt>
              <dd className="font-bold text-[#111C24] tabular-nums">
                {formatKobo(subtotalKobo)}
              </dd>
            </div>

            <div className="flex items-center justify-between text-stone-500">
              <dt className="font-semibold tracking-wider uppercase">
                Delivery fee
              </dt>
              <dd className="font-bold text-[#111C24] tabular-nums">
                {orderType === "PICKUP"
                  ? "FREE (Pickup)"
                  : formatKobo(deliveryFeeKobo)}
              </dd>
            </div>

            {discountKobo > 0 && (
              <div className="flex items-center justify-between text-[#15803D]">
                <dt className="font-semibold tracking-wider uppercase">
                  Discount {appliedPromoCode ? `(${appliedPromoCode})` : ""}
                </dt>
                <dd className="font-bold tabular-nums">
                  -{formatKobo(discountKobo)}
                </dd>
              </div>
            )}

            <div className="flex items-center justify-between border-t border-dashed border-stone-200 pt-3.5 text-sm font-extrabold text-[#111C24]">
              <dt className="tracking-wider uppercase">Total</dt>
              <dd className="text-lg text-[#F97316] tabular-nums">
                {formatKobo(totalKobo)}
              </dd>
            </div>
          </dl>

          {/* Desktop Pay Button */}
          <div className="mt-6 hidden md:block">
            <button
              type="button"
              onClick={onPay}
              disabled={isPayDisabled || isPaying}
              className="flex h-13 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-[0_10px_24px_-6px_rgba(249,115,22,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#EA580C] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPaying ? (
                <>
                  <Loader2 className="size-4.5 animate-spin" />
                  <span>Processing payment...</span>
                </>
              ) : (
                <span>Pay {formatKobo(totalKobo)}</span>
              )}
            </button>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-stone-400">
              <ShieldCheck className="size-3.5 text-[#15803D]" />
              <span>You&apos;ll pay securely with Bachs</span>
            </p>
          </div>
        </div>

        {/* Receipt Zigzag Bottom Edge */}
        <svg
          viewBox="0 0 400 12"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="block h-3 w-full text-[#FFFBF5]"
        >
          <path
            d="M0 12L10 0L20 12L30 0L40 12L50 0L60 12L70 0L80 12L90 0L100 12L110 0L120 12L130 0L140 12L150 0L160 12L170 0L180 12L190 0L200 12L210 0L220 12L230 0L240 12L250 0L260 12L270 0L280 12L290 0L300 12L310 0L320 12L330 0L340 12L350 0L360 12L370 0L380 12L390 0L400 12V12H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Mobile Sticky Bottom Pay Bar */}
      <div className="border-border fixed inset-x-0 bottom-0 z-30 border-t bg-white/95 p-4 backdrop-blur-xs md:hidden">
        <button
          type="button"
          onClick={onPay}
          disabled={isPayDisabled || isPaying}
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#F97316] px-6 text-sm font-bold text-white shadow-[0_8px_20px_-4px_rgba(249,115,22,0.5)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPaying ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Processing payment...</span>
            </>
          ) : (
            <span>Pay {formatKobo(totalKobo)}</span>
          )}
        </button>
        <p className="mt-1.5 flex items-center justify-center gap-1 text-center text-[10px] font-medium text-stone-400">
          <ShieldCheck className="size-3 text-[#15803D]" />
          <span>You&apos;ll pay securely with Bachs</span>
        </p>
      </div>
    </>
  );
}

