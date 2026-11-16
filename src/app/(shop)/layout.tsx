import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ItemOptionSheet } from "@/components/menu/option-sheet";
import { CartDrawer } from "@/components/cart/cart-drawer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-page text-char flex min-h-screen flex-col">
      <Suspense fallback={<div className="bg-page h-20 w-full" />}>
        <Header />
      </Suspense>
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
      <ItemOptionSheet />
      <CartDrawer />
    </div>
  );
}
