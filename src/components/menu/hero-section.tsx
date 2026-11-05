import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1280px] px-4 pt-6 pb-12 sm:px-8 lg:px-12 lg:pt-10 lg:pb-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
        {/* Left Column: Headline, Copy, CTAs, Badges */}
        <div className="relative z-10 flex flex-col items-start lg:col-span-6">
          <h1 className="display-type text-[64px] leading-[0.88] tracking-tight sm:text-[82px] lg:text-[96px]">
            <span className="block text-[#111C24]">MADE</span>
            <span className="mt-1 block text-[#F97316]">BETTER.</span>
          </h1>

          <div className="relative mt-5 max-w-md">
            <p className="text-base leading-snug font-medium text-[#111C24] sm:text-lg">
              Premium shawarma crafted with fresh ingredients and bold flavors.
            </p>

            {/* Hand-drawn curly arrow pointing toward the hero dish */}
            <svg
              viewBox="0 0 120 70"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -bottom-8 hidden w-24 text-[#111C24] lg:block"
            >
              <path
                d="M6 12C14 38 42 46 52 28C60 14 40 8 36 22C32 38 62 56 106 52"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M96 44L108 52L95 59"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Dual Pill CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href="#menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#F97316] px-8 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#EA580C]"
            >
              Explore Menu
            </Link>
            <Link
              href="/checkout"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#111C24] bg-transparent px-8 text-sm font-bold text-[#111C24] transition-all hover:-translate-y-0.5 hover:bg-[#111C24] hover:text-white"
            >
              Order Now
            </Link>
          </div>

          {/* Feature Badges with Divider */}
          <div className="mt-9 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3 border-r border-stone-300 pr-6 sm:pr-8">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10C4 6.686 7.582 4 12 4C16.418 4 20 6.686 20 10H4Z"
                    fill="currentColor"
                  />
                  <rect
                    x="3"
                    y="12"
                    width="18"
                    height="3"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <path
                    d="M4 17H20C20 19.209 18.209 21 16 21H8C5.791 21 4 19.209 4 17Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <div className="text-xs leading-tight">
                <p className="font-extrabold text-[#111C24]">100%</p>
                <p className="font-medium text-stone-600">Fresh Ingredients</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white">
                <Flame className="size-5 fill-current" />
              </span>
              <div className="text-xs leading-tight">
                <p className="font-extrabold text-[#111C24]">Grilled</p>
                <p className="font-medium text-stone-600">To Perfection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Platter + Orange Brush Splash */}
        <div className="relative flex items-center justify-center lg:col-span-6">
          {/* Orange Brush Stroke Splash Backdrop */}
          <svg
            viewBox="0 0 500 420"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 bottom-2 w-[115%] max-w-none text-[#F97316]"
          >
            <path
              d="M110 290C165 180 315 110 450 125C485 130 495 165 465 190C490 195 505 225 480 255C450 290 365 345 135 350C80 350 75 320 110 290Z"
              fill="currentColor"
            />
            <path
              d="M45 315L95 265M58 338L115 288"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>

          {/* Hero Dish Card / Platter */}
          <div className="relative z-10 w-full max-w-[480px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border-4 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=85"
                alt="Freshly grilled loaded shawarma on a wooden board"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>
            {/* Wooden Platter Base Accent */}
            <div className="mx-auto -mt-3 h-5 w-11/12 rounded-full bg-[#4A2511] shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

