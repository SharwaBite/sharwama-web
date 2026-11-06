"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import {
  CheckoutForm,
  type CheckoutFieldErrors,
  type CheckoutFormValues,
} from "@/components/checkout/checkout-form";
import { OrderSummaryCard } from "@/components/checkout/order-summary-card";
import {
  getCartDiscountKobo,
  getCartSubtotalKobo,
  useCartStore,
} from "@/hooks/use-cart";
import { DELIVERY_ZONES, SHOP_INFO } from "@/mocks/shop";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const appliedPromoCode = useCartStore((s) => s.appliedPromoCode);
  const openCart = useCartStore((s) => s.openCart);

  const [values, setValues] = useState<CheckoutFormValues>({
    orderType: "DELIVERY",
    fullName: "",
    phone: "",
    email: "",
    zoneId: DELIVERY_ZONES[0].id,
    street: "",
    landmark: "",
    kitchenNote: "",
  });

  const [errors, setErrors] = useState<CheckoutFieldErrors>({});
  const [isPaying, setIsPaying] = useState(false);

  const handleFieldChange = <K extends keyof CheckoutFormValues>(
    field: K,
    value: CheckoutFormValues[K],
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const subtotalKobo = getCartSubtotalKobo(items);
  const discountKobo = getCartDiscountKobo(subtotalKobo, appliedPromoCode);

  const selectedZone = DELIVERY_ZONES.find((z) => z.id === values.zoneId);
  const deliveryFeeKobo =
    values.orderType === "PICKUP" ? 0 : (selectedZone?.feeKobo ?? 0);

  const totalKobo = Math.max(0, subtotalKobo - discountKobo) + deliveryFeeKobo;

  const isOutOfArea =
    values.orderType === "DELIVERY" && values.zoneId === "not-covered";
  const isPayDisabled = !SHOP_INFO.isOpen || isOutOfArea || items.length === 0;

  const validate = (): boolean => {
    const nextErrors: CheckoutFieldErrors = {};

    if (!values.fullName.trim()) {
      nextErrors.fullName = "Enter your full name so we know who to hand the order to.";
    }

    const cleanPhone = values.phone.replace(/\s+/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      nextErrors.phone = "Enter a valid Nigerian phone number (e.g. 0803 123 4567).";
    }

    if (values.orderType === "DELIVERY") {
      if (values.zoneId === "not-covered") {
        nextErrors.zoneId =
          "We do not deliver to this area yet. Switch to pickup to continue.";
      }
      if (!values.street.trim()) {
        nextErrors.street = "Enter your street address and house number.";
      }
      if (!values.landmark.trim()) {
        nextErrors.landmark =
          "Add the nearest landmark so our rider finds you fast.";
      }
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePay = () => {
    if (!validate()) {
      toast.error("Check the highlighted fields to continue.");
      return;
    }

    setIsPaying(true);
    setTimeout(() => {
      toast.success("Payment confirmed! Order #1042 is being prepared.");
      router.push("/orders/1042");
    }, 900);
  };

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 pt-4 pb-24 sm:px-8 md:pb-12 lg:px-12">
      {/* Store Closed Banner (Section 5.9) */}
      {!SHOP_INFO.isOpen && (
        <div
          role="status"
          className="mb-6 flex items-center justify-center gap-2 rounded-2xl bg-stone-200 px-4 py-3 text-xs font-bold text-[#111C24]"
        >
          <Clock className="size-4 text-[#C2410C]" />
          <span>
            We are closed right now. We open at {SHOP_INFO.openTime}.
          </span>
        </div>
      )}

      {/* Top Back Link & Page Title */}
      <div className="mb-6">
        <button
          type="button"
          onClick={openCart}
          className="text-muted hover:text-[#111C24] inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to cart</span>
        </button>

        <h1 className="display-type mt-2 text-4xl tracking-tight text-[#111C24] sm:text-5xl">
          Checkout
        </h1>
      </div>

      {/* Empty Cart Fallback */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[24px] bg-white px-6 py-16 text-center shadow-xs">
          <div className="mb-4 flex size-18 items-center justify-center rounded-full bg-[#FFF5E6] text-[#F97316]">
            <ShoppingBag className="size-8 stroke-[1.75]" />
          </div>
          <h2 className="text-lg font-extrabold text-[#111C24]">
            Your cart is empty
          </h2>
          <p className="mt-1 max-w-xs text-xs text-stone-400">
            Add a fresh shawarma or combo from the menu before checking out.
          </p>
          <Link
            href="/#menu"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-8 text-xs font-bold text-white shadow-[0_8px_20px_-4px_rgba(249,115,22,0.45)] transition-transform hover:-translate-y-0.5 hover:bg-[#EA580C]"
          >
            Browse the menu
          </Link>
        </div>
      ) : (
        /* Two-Column Desktop Split: Form Left (7 cols) | Sticky Summary Right (5 cols) */
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <CheckoutForm
              values={values}
              errors={errors}
              discountKobo={discountKobo}
              onChange={handleFieldChange}
            />
          </div>

          <div className="lg:col-span-5">
            <OrderSummaryCard
              items={items}
              orderType={values.orderType}
              subtotalKobo={subtotalKobo}
              deliveryFeeKobo={deliveryFeeKobo}
              discountKobo={discountKobo}
              totalKobo={totalKobo}
              appliedPromoCode={appliedPromoCode}
              isPaying={isPaying}
              isPayDisabled={isPayDisabled}
              onPay={handlePay}
            />
          </div>
        </div>
      )}
    </main>
  );
}
