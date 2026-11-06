"use client";

import { useState } from "react";
import {
  AlertCircle,
  Clock,
  MapPin,
  Phone,
  Store,
  TicketPercent,
  Truck,
} from "lucide-react";
import { formatKobo } from "@/lib/money";
import { DELIVERY_ZONES, SHOP_INFO } from "@/mocks/shop";
import { useCartStore } from "@/hooks/use-cart";

export interface CheckoutFormValues {
  orderType: "DELIVERY" | "PICKUP";
  fullName: string;
  phone: string;
  email: string;
  zoneId: string;
  street: string;
  landmark: string;
  kitchenNote: string;
}

export type CheckoutFieldErrors = Partial<
  Record<keyof CheckoutFormValues, string>
>;

interface CheckoutFormProps {
  values: CheckoutFormValues;
  errors: CheckoutFieldErrors;
  discountKobo: number;
  onChange: <K extends keyof CheckoutFormValues>(
    field: K,
    value: CheckoutFormValues[K],
  ) => void;
}

export function CheckoutForm({
  values,
  errors,
  discountKobo,
  onChange,
}: CheckoutFormProps) {
  const appliedPromoCode = useCartStore((s) => s.appliedPromoCode);
  const promoError = useCartStore((s) => s.promoError);
  const applyPromo = useCartStore((s) => s.applyPromo);
  const removePromo = useCartStore((s) => s.removePromo);

  const [promoInput, setPromoInput] = useState("");

  const isOutOfArea =
    values.orderType === "DELIVERY" && values.zoneId === "not-covered";

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (applyPromo(promoInput)) {
      setPromoInput("");
    }
  };

  return (
    <div className="space-y-6">
      {/* ==================== 1. DELIVERY OR PICKUP SEGMENTED TOGGLE ==================== */}
      <div className="rounded-[20px] bg-white p-5 shadow-xs sm:p-6">
        <span className="block text-[11px] font-bold tracking-wider text-stone-400 uppercase">
          ORDER TYPE
        </span>
        <div
          role="radiogroup"
          aria-label="Order type"
          className="mt-3 grid grid-cols-2 gap-2.5 rounded-full bg-[#FFFBF5] p-1.5"
        >
          <button
            type="button"
            role="radio"
            aria-checked={values.orderType === "DELIVERY"}
            onClick={() => onChange("orderType", "DELIVERY")}
            className={`inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full text-xs font-bold transition-all sm:text-sm ${
              values.orderType === "DELIVERY"
                ? "bg-[#111C24] text-white shadow-xs"
                : "text-[#111C24] hover:bg-stone-200/50"
            }`}
          >
            <Truck className="size-4 text-[#F97316]" />
            <span>Delivery</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={values.orderType === "PICKUP"}
            onClick={() => onChange("orderType", "PICKUP")}
            className={`inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full text-xs font-bold transition-all sm:text-sm ${
              values.orderType === "PICKUP"
                ? "bg-[#111C24] text-white shadow-xs"
                : "text-[#111C24] hover:bg-stone-200/50"
            }`}
          >
            <Store className="size-4 text-[#F97316]" />
            <span>Pickup</span>
          </button>
        </div>
      </div>

      {/* ==================== 2. YOUR DETAILS ==================== */}
      <div className="rounded-[20px] bg-white p-5 shadow-xs sm:p-6">
        <h2 className="text-base font-extrabold text-[#111C24]">
          Your details
        </h2>

        <div className="mt-4 space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="checkout-fullName"
              className="mb-1.5 block text-xs font-bold text-[#111C24]"
            >
              Full name
            </label>
            <input
              id="checkout-fullName"
              type="text"
              autoComplete="name"
              value={values.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="Chinedu Okafor"
              aria-invalid={Boolean(errors.fullName)}
              className={`h-11 w-full rounded-[12px] border bg-white px-3.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316] ${
                errors.fullName ? "border-[#B91C1C]" : "border-stone-200"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs font-medium text-[#B91C1C]">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="checkout-phone"
                className="mb-1.5 block text-xs font-bold text-[#111C24]"
              >
                Phone number
              </label>
              <input
                id="checkout-phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                placeholder="0803 123 4567"
                aria-invalid={Boolean(errors.phone)}
                className={`h-11 w-full rounded-[12px] border bg-white px-3.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316] ${
                  errors.phone ? "border-[#B91C1C]" : "border-stone-200"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs font-medium text-[#B91C1C]">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="checkout-email"
                className="mb-1.5 block text-xs font-bold text-[#111C24]"
              >
                Email{" "}
                <span className="font-normal text-stone-400">(optional)</span>
              </label>
              <input
                id="checkout-email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => onChange("email", e.target.value)}
                placeholder="you@example.com"
                className="h-11 w-full rounded-[12px] border border-stone-200 bg-white px-3.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ==================== 3. DELIVERY ADDRESS OR PICKUP CARD ==================== */}
      <div className="rounded-[20px] bg-white p-5 shadow-xs sm:p-6">
        {values.orderType === "DELIVERY" ? (
          <div>
            <h2 className="text-base font-extrabold text-[#111C24]">
              Delivery details
            </h2>

            <div className="mt-4 space-y-4">
              {/* Delivery Area / Zone Select */}
              <div>
                <label
                  htmlFor="checkout-zone"
                  className="mb-1.5 block text-xs font-bold text-[#111C24]"
                >
                  Delivery area
                </label>
                <select
                  id="checkout-zone"
                  value={values.zoneId}
                  onChange={(e) => onChange("zoneId", e.target.value)}
                  aria-invalid={Boolean(errors.zoneId)}
                  className={`h-11 w-full rounded-[12px] border bg-white px-3.5 text-sm text-[#111C24] focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316] ${
                    errors.zoneId ? "border-[#B91C1C]" : "border-stone-200"
                  }`}
                >
                  {DELIVERY_ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id}>
                      {zone.name} — {zone.areas.join(", ")} (
                      {formatKobo(zone.feeKobo)})
                    </option>
                  ))}
                  <option value="not-covered">
                    My area is not listed above
                  </option>
                </select>
                {errors.zoneId && (
                  <p className="mt-1 text-xs font-medium text-[#B91C1C]">
                    {errors.zoneId}
                  </p>
                )}
              </div>

              {/* Out of Area Inline Prompt */}
              {isOutOfArea && (
                <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-dashed border-[#B45309]/50 bg-[#FFF5E6] p-4 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-2.5 text-xs text-[#9A3412]">
                    <AlertCircle className="mt-0.5 size-4 shrink-0 text-[#F97316]" />
                    <p className="font-medium">
                      We do not deliver to this area yet. You can choose pickup
                      instead.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onChange("zoneId", DELIVERY_ZONES[0].id);
                      onChange("orderType", "PICKUP");
                    }}
                    className="shrink-0 cursor-pointer rounded-full bg-[#111C24] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#F97316]"
                  >
                    Switch to pickup
                  </button>
                </div>
              )}

              {/* Street Address */}
              <div>
                <label
                  htmlFor="checkout-street"
                  className="mb-1.5 block text-xs font-bold text-[#111C24]"
                >
                  Street address
                </label>
                <input
                  id="checkout-street"
                  type="text"
                  autoComplete="street-address"
                  value={values.street}
                  onChange={(e) => onChange("street", e.target.value)}
                  placeholder="24B Fola Osibo Street, Lekki Phase 1"
                  aria-invalid={Boolean(errors.street)}
                  className={`h-11 w-full rounded-[12px] border bg-white px-3.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316] ${
                    errors.street ? "border-[#B91C1C]" : "border-stone-200"
                  }`}
                />
                {errors.street && (
                  <p className="mt-1 text-xs font-medium text-[#B91C1C]">
                    {errors.street}
                  </p>
                )}
              </div>

              {/* Nearest Landmark */}
              <div>
                <label
                  htmlFor="checkout-landmark"
                  className="mb-1.5 block text-xs font-bold text-[#111C24]"
                >
                  Nearest landmark
                </label>
                <input
                  id="checkout-landmark"
                  type="text"
                  value={values.landmark}
                  onChange={(e) => onChange("landmark", e.target.value)}
                  placeholder="Opposite Prince Ebeano Supermarket"
                  aria-invalid={Boolean(errors.landmark)}
                  className={`h-11 w-full rounded-[12px] border bg-white px-3.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316] ${
                    errors.landmark ? "border-[#B91C1C]" : "border-stone-200"
                  }`}
                />
                {errors.landmark && (
                  <p className="mt-1 text-xs font-medium text-[#B91C1C]">
                    {errors.landmark}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Pickup Shop Details Card */
          <div>
            <h2 className="text-base font-extrabold text-[#111C24]">
              Pickup point
            </h2>
            <div className="mt-3 rounded-2xl border border-dashed border-stone-300 bg-[#FFFBF5] p-4">
              <p className="text-sm font-extrabold text-[#111C24]">
                {SHOP_INFO.name} — Flagship Stand
              </p>
              <div className="mt-2.5 space-y-2 text-xs text-stone-600">
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0 text-[#F97316]" />
                  <span>{SHOP_INFO.pickupAddress}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="size-4 shrink-0 text-[#F97316]" />
                  <span>{SHOP_INFO.hoursLabel} (Ready in 15–20 mins)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-[#F97316]" />
                  <span>{SHOP_INFO.phone}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ==================== 4. KITCHEN NOTE & PROMO CODE ==================== */}
      <div className="rounded-[20px] bg-white p-5 shadow-xs sm:p-6">
        <div>
          <label
            htmlFor="checkout-note"
            className="mb-1.5 block text-xs font-bold text-[#111C24]"
          >
            Note for the kitchen{" "}
            <span className="font-normal text-stone-400">(optional)</span>
          </label>
          <textarea
            id="checkout-note"
            rows={2}
            maxLength={200}
            value={values.kitchenNote}
            onChange={(e) => onChange("kitchenNote", e.target.value)}
            placeholder="Extra napkins, gate code for rider, etc."
            className="w-full rounded-[12px] border border-stone-200 bg-white px-3.5 py-2.5 text-sm text-[#111C24] placeholder:text-stone-400 focus:outline-2 focus:outline-offset-2 focus:outline-[#F97316]"
          />
        </div>

        {/* Promo Code Row */}
        <div className="mt-5 border-t border-dashed border-stone-200 pt-5">
          <span className="mb-2 block text-xs font-bold text-[#111C24]">
            Promo code
          </span>
          {appliedPromoCode ? (
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-[#15803D]/40 bg-[#15803D]/10 px-4 py-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#15803D]">
                <TicketPercent className="size-4 shrink-0" />
                <span>
                  {appliedPromoCode} applied, you save{" "}
                  {formatKobo(discountKobo)}
                </span>
              </div>
              <button
                type="button"
                onClick={removePromo}
                className="cursor-pointer font-bold text-[#111C24] underline underline-offset-2 hover:text-[#B91C1C]"
              >
                Remove
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplyPromo} className="flex gap-2.5">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="Enter promo code (e.g. WELCOME10)"
                className="h-11 flex-1 rounded-[12px] border border-dashed border-stone-300 bg-[#FFFBF5] px-3.5 text-sm font-semibold text-[#111C24] uppercase placeholder:normal-case placeholder:font-normal placeholder:text-stone-400 focus:border-[#F97316] focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 cursor-pointer rounded-full bg-[#111C24] px-6 text-xs font-bold text-white transition-colors hover:bg-[#F97316]"
              >
                Apply
              </button>
            </form>
          )}
          {promoError && (
            <p className="mt-1.5 text-xs font-medium text-[#B91C1C]">
              {promoError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

