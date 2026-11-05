import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 py-12 sm:px-8 lg:px-12">
      <Link
        href="/"
        className="text-muted hover:text-char mb-4 inline-flex w-fit items-center text-sm font-medium"
      >
        &larr; Back to menu
      </Link>
      <h1 className="display-type text-char text-5xl sm:text-6xl">
        Checkout
      </h1>
      <p className="text-muted mt-3 max-w-md text-base">
        Checkout screen placeholder — delivery/pickup details and order summary.
      </p>
    </main>
  );
}

