"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-page text-char flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <span className="font-marker bg-saffron border-char shadow-hard mb-4 inline-block -rotate-6 rounded-full border-2 px-4 py-1 text-sm">
        Oops
      </span>
      <h1 className="display-type text-char text-6xl sm:text-8xl">
        Something broke.
      </h1>
      <p className="text-muted mt-3 max-w-md text-base">
        We could not load this screen right now. Try again or return to the
        menu.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="bg-ember hover:bg-ember-dark border-char shadow-hard inline-flex h-[52px] cursor-pointer items-center justify-center rounded-[12px] border-2 px-6 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Try again
        </button>
        <Link
          href="/"
          className="border-char text-char inline-flex h-[52px] items-center justify-center rounded-[12px] border-2 bg-white px-6 text-base font-semibold transition-transform hover:-translate-y-0.5"
        >
          Browse the menu
        </Link>
      </div>
    </main>
  );
}

