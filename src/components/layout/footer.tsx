import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16 w-full overflow-hidden">
      {/* Torn-paper top edge SVG */}
      <div className="relative z-10 -mb-1 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
           preserveAspectRatio="none"
          aria-hidden="true"
          className="h-7 w-full sm:h-11"
        >
          <path
            d="M0 48L0 22L38 14L76 26L118 10L164 24L212 12L260 25L310 9L356 21L408 8L456 24L508 14L556 26L610 10L660 22L712 8L764 24L816 12L868 25L920 11L972 23L1024 9L1076 22L1128 12L1180 26L1232 10L1284 23L1336 11L1388 24L1440 14L1440 48Z"
            fill="#F97316"
          />
        </svg>
      </div>

      {/* Vibrant Orange App / Order CTA Banner */}
      <div className="bg-[#F97316] pt-6 pb-10 sm:pt-8 sm:pb-12">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-8 px-4 sm:px-8 md:flex-row lg:px-12">
          {/* Tilted Phone Mockup */}
          <div className="relative flex justify-center md:w-5/12">
            <div className="w-56 -rotate-6 rounded-[28px] border-[6px] border-[#111C24] bg-[#FFFBF5] p-3 shadow-2xl sm:w-64">
              {/* Notch & status bar */}
              <div className="mx-auto mb-2.5 h-3 w-20 rounded-full bg-[#111C24]" />
              <div className="flex items-center justify-between text-[9px] font-semibold text-stone-500">
                <span>Lagos, Nigeria</span>
                <span className="inline-block size-2 rounded-full bg-[#F97316]" />
              </div>
              <div className="mt-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-[9px] text-stone-400">
                Search shawarma, combos...
              </div>
              {/* Mini hero inside phone */}
              <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-[#FFF5E6] p-2.5">
                <div>
                  <p className="text-[7px] font-bold tracking-wider text-stone-400 uppercase">
                    Fresh daily
                  </p>
                  <p className="display-type text-char text-lg leading-none">
                    MADE
                  </p>
                  <p className="display-type text-lg leading-none text-[#F97316]">
                    BETTER.
                  </p>
                  <span className="mt-1.5 inline-block rounded-full bg-[#F97316] px-2 py-0.5 text-[7px] font-bold text-white">
                    Order Now
                  </span>
                </div>
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#F97316]/15 text-2xl">
                  🌯
                </div>
              </div>
            </div>
          </div>

          {/* Right Headline & Store Badges */}
          <div className="flex flex-col items-center text-center md:w-7/12 md:items-start md:text-left">
            <h2 className="display-type text-[#111C24] text-3xl tracking-tight sm:text-4xl lg:text-[42px]">
              CRAVING SHAWARMA?
            </h2>
            <p className="display-type mt-1 text-xl tracking-wide text-white sm:text-2xl">
              ORDER EASIER WITH OUR APP!
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3.5 md:justify-start">
              {/* Google Play Badge */}
              <Link
                href="/#menu"
                className="inline-flex h-12 items-center gap-3 rounded-xl border border-white/15 bg-[#111C24] px-4 text-left text-white transition-transform hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#34A853"
                    d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1L13 12.4v-.2L3.7 2.3l-.1.1z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M16.1 15.6l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2.1-.1-.1z"
                  />
                  <path
                    fill="#EA4335"
                    d="M16.2 15.5L13 12.3 3.6 21.7c.4.4 1 .4 1.6.1l11-6.3z"
                  />
                  <path
                    fill="#4285F4"
                    d="M16.2 8.5L5.2 2.2c-.6-.3-1.2-.3-1.6.1L13 11.7l3.2-3.2z"
                  />
                </svg>
                <div>
                  <span className="block text-[9px] leading-none font-medium tracking-wider text-stone-300 uppercase">
                    GET IT ON
                  </span>
                  <span className="mt-0.5 block text-sm leading-tight font-bold">
                    Google Play
                  </span>
                </div>
              </Link>

              {/* App Store Badge */}
              <Link
                href="/#menu"
                className="inline-flex h-12 items-center gap-3 rounded-xl border border-white/15 bg-[#111C24] px-4 text-left text-white transition-transform hover:-translate-y-0.5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                </svg>
                <div>
                  <span className="block text-[9px] leading-none font-medium text-stone-300">
                    Download on the
                  </span>
                  <span className="mt-0.5 block text-sm leading-tight font-bold">
                    App Store
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Charcoal Shop Info Bar */}
      <div className="bg-[#111C24] py-8 text-stone-300">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 text-xs sm:flex-row sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="display-type text-lg text-white">SharwaBite</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-[#F97316]" />
              Open 10:00 AM – 10:00 PM daily
            </span>
            <a
              href="tel:08030000000"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 text-[#F97316]" />
              0803 000 0000
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-[#F97316]" />
              Delivery in 30–45 mins
            </span>
          </div>

          <div className="flex items-center gap-5 text-stone-400">
            <Link href="/#menu" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/#menu" className="hover:text-white">
              Terms
            </Link>
            <span>&copy; {new Date().getFullYear()} SharwaBite</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

