import Image from "next/image";
import Link from "next/link";
import { Flame, Plus } from "lucide-react";
import { formatKobo } from "@/lib/money";

interface FeaturedMenuItem {
  id: string;
  name: string;
  description: string;
  priceKobo: number;
  imageUrl: string;
  badge?: string;
}

const FEATURED_MENU: FeaturedMenuItem[] = [
  {
    id: "chicken-shawarma",
    name: "CHICKEN SHAWARMA",
    description:
      "Juicy grilled chicken strips with crisp veggies and rich garlic sauce.",
    priceKobo: 350000,
    imageUrl:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80",
    badge: "Best seller",
  },
  {
    id: "beef-shawarma",
    name: "BEEF SHAWARMA",
    description:
      "Spiced tender beef slices, melted cheese, sautéed onions and slaw.",
    priceKobo: 400000,
    imageUrl:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "mixed-shawarma",
    name: "MIXED SPECIAL",
    description:
      "Crispy chicken and spiced beef together with double sausage and sauce.",
    priceKobo: 450000,
    imageUrl:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "combo-meal",
    name: "COMBO MEAL",
    description:
      "Loaded shawarma, spiced fries, and chilled drink. The perfect combo!",
    priceKobo: 480000,
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
  },
];

const VALUE_PROPS = [
  {
    title: "FRESH INGREDIENTS",
    description: "We use only the freshest ingredients for the best taste.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-10 shrink-0" aria-hidden="true">
        <circle cx="23" cy="18" r="10" fill="#F97316" fillOpacity="0.2" />
        <path
          d="M28 10C18 10 12 16 12 26C22 26 28 20 28 10Z"
          fill="#F97316"
          stroke="#111C24"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M12 26C16 22 20 18 25 13M12 26L9 29"
          stroke="#111C24"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "FAST DELIVERY",
    description: "Hot and fresh shawarma delivered to your door.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-10 shrink-0" aria-hidden="true">
        <path
          d="M8 26H27L24 15H17V20H11C9.343 20 8 21.343 8 23V26Z"
          fill="#F97316"
          stroke="#111C24"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="28" r="3.5" fill="#FFFBF5" stroke="#111C24" strokeWidth="1.75" />
        <circle cx="27" cy="28" r="3.5" fill="#FFFBF5" stroke="#111C24" strokeWidth="1.75" />
        <path d="M22 15H27L30 22" stroke="#111C24" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "PREMIUM TASTE",
    description: "Bold flavors, premium quality, unforgettable experience.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-10 shrink-0" aria-hidden="true">
        <path
          d="M8 27L6 14L14 19L20 11L26 19L34 14L32 27H8Z"
          fill="#F97316"
          stroke="#111C24"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path d="M9 30H31" stroke="#111C24" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AFFORDABLE PRICE",
    description: "Great taste at a price that won't break the bank.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="size-10 shrink-0" aria-hidden="true">
        <path
          d="M21.5 9H30V17.5L18.5 29L10 20.5L21.5 9Z"
          fill="#F97316"
          stroke="#111C24"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <circle cx="25.5" cy="13.5" r="1.75" fill="#FFFBF5" stroke="#111C24" strokeWidth="1.5" />
      </svg>
    ),
  },
] as const;

export default function ShopHomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ==================== 1. HERO SECTION ==================== */}
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
                Premium shawarma crafted with fresh ingredients and bold
                flavors.
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
                  <p className="font-medium text-stone-600">
                    Fresh Ingredients
                  </p>
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

      {/* ==================== 2. MAIN WHITE SHOWCASE CONTAINER ==================== */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8 lg:px-12">
        <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          {/* ---------- 2A. OUR FEATURED MENU ---------- */}
          <section id="menu" className="scroll-mt-24">
            <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
              <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
              <h2 className="display-type text-center text-2xl tracking-wide text-[#111C24] sm:text-3xl">
                OUR FEATURED MENU
              </h2>
              <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_MENU.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between rounded-[18px] bg-[#FDF8F0] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-5"
                >
                  <div>
                    {/* Food Thumbnail */}
                    <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-white">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {item.badge && (
                        <span className="font-marker bg-saffron border-char absolute top-2.5 left-2.5 -rotate-6 rounded-full border px-2.5 py-0.5 text-[11px] text-[#111C24]">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="display-type text-xl tracking-wide text-[#111C24]">
                      {item.name}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Quick Add */}
                  <div className="mt-4 flex items-center justify-between pt-2">
                    <span className="text-sm font-extrabold tabular-nums text-[#F97316] sm:text-base">
                      {formatKobo(item.priceKobo)}
                    </span>
                    <Link
                      href="/checkout"
                      aria-label={`Order ${item.name}`}
                      className="inline-flex size-8 items-center justify-center rounded-full bg-[#F97316] text-white transition-transform hover:scale-110 hover:bg-[#EA580C]"
                    >
                      <Plus className="size-4 stroke-[2.5]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ---------- 2B. OUR BEST COMBOS BANNER ---------- */}
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
                {/* Left Platter */}
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/15 bg-stone-800 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=450&q=80"
                    alt="Beef shawarma platter"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover"
                  />
                </div>

                {/* Center Elevated Platter (breaks above banner on desktop) */}
                <div className="relative -mt-6 aspect-square overflow-hidden rounded-2xl border-2 border-[#F97316] bg-stone-800 shadow-2xl sm:-mt-14">
                  <Image
                    src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=450&q=80"
                    alt="Signature double chicken shawarma combo"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 30vw, 220px"
                    className="object-cover"
                  />
                </div>

                {/* Right Platter */}
                <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/15 bg-stone-800 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=450&q=80"
                    alt="Crispy mixed shawarma platter"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 30vw, 200px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ---------- 2C. 4-COLUMN VALUE PROPOSITION STRIP ---------- */}
          <section
            aria-label="Why choose SharwaBite"
            className="mt-8 rounded-[18px] bg-[#FDF8F0] p-5 sm:p-7"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-stone-200/80">
              {VALUE_PROPS.map((prop, idx) => (
                <div
                  key={prop.title}
                  className={`flex items-start gap-3.5 ${
                    idx > 0 ? "lg:pl-6" : ""
                  }`}
                >
                  {prop.icon}
                  <div>
                    <h3 className="display-type text-base tracking-wide text-[#111C24]">
                      {prop.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
