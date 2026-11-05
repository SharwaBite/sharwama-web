import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Order",
};

export default async function OrderTrackingPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 py-12 sm:px-8 lg:px-12">
      <span className="font-marker bg-saffron border-char shadow-hard mb-4 inline-block w-fit -rotate-3 rounded-full border-2 px-4 py-1 text-sm">
        Live tracking
      </span>
      <h1 className="display-type text-char text-5xl sm:text-6xl">
        Order #{token}
      </h1>
      <p className="text-muted mt-3 max-w-md text-base">
        Order tracking screen placeholder — stage visuals, progress stepper, and
        receipt details.
      </p>
    </main>
  );
}

