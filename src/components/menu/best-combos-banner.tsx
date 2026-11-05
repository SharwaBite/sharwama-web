import Image from "next/image";
import Link from "next/link";
import { COMBO_SHOWCASE_PLATTERS } from "@/mocks/menu";

export function BestCombosBanner() {
  return (
    <section
      id="combos"
      className="relative mt-12 scroll-mt-24 rounded-[22px] bg-[#111C24] px-6 py-8 sm:mt-16 sm:px-10 sm:py-10"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left Typographic Lockup */}
        <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left">
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-5 bg-[#F97316]" />
            <span className="display-type text-lg tracking-wider text-white">
              OUR
            </span>
            <span className="h-[2px] w-5 bg-[#F97316]" />
          </div>

          {/* Giant "BEST" with side spark lines */}
          <div className="relative mt-1 inline-flex items-center gap-3">
            {/* Left sparks */}
            <span
              aria-hidden="true"
              className="flex flex-col items-end gap-1.5 text-white"
            >
              <span className="h-0.5 w-2.5 rotate-25 rounded-full bg-white" />
              <span className="h-0.5 w-3.5 rounded-full bg-white" />
              <span className="h-0.5 w-2.5 -rotate-25 rounded-full bg-white" />
            </span>

            <span className="display-type text-6xl leading-none tracking-tight text-white sm:text-7xl">
              BEST
            </span>

            {/* Right sparks */}
            <span
              aria-hidden="true"
              className="flex flex-col items-start gap-1.5 text-white"
            >
              <span className="h-0.5 w-2.5 -rotate-25 rounded-full bg-white" />
              <span className="h-0.5 w-3.5 rounded-full bg-white" />
              <span className="h-0.5 w-2.5 rotate-25 rounded-full bg-white" />
            </span>
          </div>

          <span className="display-type mt-0.5 text-4xl leading-none tracking-wide text-[#F97316] sm:text-5xl">
            COMBOS
          </span>

          <Link
            href="/checkout"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-[#F97316] px-8 text-xs font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#EA580C]"
          >
            Order Combo
          </Link>
        </div>

        {/* Right Staggered 3-Platter Trio */}
        <div className="grid grid-cols-3 items-end gap-3 sm:gap-5 lg:col-span-7">
          {COMBO_SHOWCASE_PLATTERS.map((platter) => (
            <div
              key={platter.id}
              className={`relative aspect-square overflow-hidden rounded-2xl border-2 bg-stone-800 ${
                platter.isCenterElevated
                  ? "-mt-6 border-[#F97316] shadow-2xl sm:-mt-14"
                  : "border-white/15 shadow-lg"
              }`}
            >
              <Image
                src={platter.imageUrl}
                alt={platter.alt}
                fill
                loading="lazy"
                sizes={
                  platter.isCenterElevated
                    ? "(max-width: 1024px) 30vw, 220px"
                    : "(max-width: 1024px) 30vw, 200px"
                }
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
