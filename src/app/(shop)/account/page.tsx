import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account & Orders",
};

export default function AccountPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 py-12 sm:px-8 lg:px-12">
      <h1 className="display-type text-char text-5xl sm:text-6xl">
        My Orders
      </h1>
      <p className="text-muted mt-3 max-w-md text-base">
        Account and order history screen placeholder — past orders, saved
        addresses, and profile details.
      </p>
    </main>
  );
}

