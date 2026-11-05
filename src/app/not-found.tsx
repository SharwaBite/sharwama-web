import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-page text-char flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="font-marker bg-saffron border-char shadow-hard mb-4 inline-block -rotate-6 rounded-full border-2 px-4 py-1 text-sm">
        404
      </span>
      <h1 className="display-type text-char text-6xl sm:text-8xl">
        Not here.
      </h1>
      <p className="text-muted mt-3 max-w-md text-base">
        This page could not be found. Browse the menu to start an order.
      </p>
      <Link
        href="/"
        className="bg-ember hover:bg-ember-dark border-char shadow-hard mt-8 inline-flex h-[52px] items-center justify-center rounded-[12px] border-2 px-6 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
      >
        Browse the menu
      </Link>
    </main>
  );
}

