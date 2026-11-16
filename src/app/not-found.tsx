import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-page relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-10 sm:px-8">
      {/* Centered Card Container */}
      <div className="relative z-10 w-full max-w-240 bg-white px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        {/* Top-Right Close Button */}
        <Link
          href="/"
          aria-label="Close and return home"
          className="text-muted hover:text-[#111C24] absolute top-5 right-5 inline-flex size-10 items-center justify-center rounded-full transition-colors sm:top-7 sm:right-7"
        >
          <X className="size-6 stroke-[1.75]" />
        </Link>

        {/* Two-Column Split: Large Cut-out Shawarma Left | 404 & Copy Right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* Left Column: Large Background-Free Shawarma Image */}
          <div className="flex items-center justify-center md:col-span-6">
            <div className="relative aspect-square w-full max-w-95">
              <Image
                src="/shawarma-cutout.png"
                alt="Freshly grilled loaded shawarma wrap"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 380px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Tall 404, Shawarma Copy, and Go Back Home CTA */}
          <div className="flex flex-col items-center text-center md:col-span-6 md:items-start md:text-left">
            <h1 className="display-type text-[104px] leading-[0.85] tracking-tight text-[#F97316] sm:text-[132px]">
              404
            </h1>

            <p className="mt-4 text-lg font-bold text-[#111C24] sm:text-xl">
              Looks like this shawarma rolled off the grill.
            </p>

            <p className="text-muted mt-2.5 max-w-sm text-sm leading-relaxed">
              The page you are looking for is not on our menu or has already
              been devoured. Return to the home page to grab a fresh, hot wrap.
            </p>

            <div className="mt-7">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-[12px] bg-[#F97316] px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#EA580C]"
              >
                Go back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
