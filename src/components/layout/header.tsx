"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#menu", label: "Menu" },
  { href: "/#combos", label: "Promo" },
  { href: "/account", label: "My Orders" },
  { href: "/login", label: "Sign In" },
] as const;

function ShawarmaLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Top dome / wrap fold */}
      <path
        d="M6 14C6 8.477 11.373 4 18 4C24.627 4 30 8.477 30 14H6Z"
        fill="#F97316"
      />
      {/* Sesame / grill marks */}
      <ellipse cx="14" cy="9.5" rx="1.4" ry="0.8" fill="#FFFBF5" />
      <ellipse cx="18.5" cy="8" rx="1.4" ry="0.8" fill="#FFFBF5" />
      <ellipse cx="22.5" cy="10" rx="1.4" ry="0.8" fill="#FFFBF5" />
      {/* Filling strip */}
      <rect x="4.5" y="16" width="27" height="3.5" rx="1.75" fill="#EA580C" />
      {/* Cheese / sauce wave */}
      <rect x="5.5" y="21" width="25" height="3" rx="1.5" fill="#FBBF24" />
      {/* Bottom toasted wrap base */}
      <path
        d="M6 26H30C30 29.314 27.314 32 24 32H12C8.686 32 6 29.314 6 26Z"
        fill="#F97316"
      />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-page/95 sticky top-0 z-40 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 sm:px-8 lg:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F97316]"
        >
          <ShawarmaLogoIcon className="size-9 shrink-0" />
          <span className="display-type text-char text-2xl tracking-tight sm:text-[28px]">
            SharwaBite
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-[#F97316]"
                    : "text-char hover:text-[#F97316]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/checkout"
            aria-label="View cart"
            className="border-char/15 text-char hover:border-[#F97316] hover:text-[#F97316] relative inline-flex size-10 items-center justify-center rounded-full border bg-white transition-colors"
          >
            <ShoppingBag className="size-4.5" />
            <span className="bg-ember absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-[11px] font-bold text-white">
              2
            </span>
          </Link>

          <Link
            href="/#menu"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#111C24] px-6 text-xs font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:bg-[#F97316]"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2.5 md:hidden">
          <Link
            href="/checkout"
            aria-label="View cart"
            className="border-char/15 text-char relative inline-flex size-10 items-center justify-center rounded-full border bg-white"
          >
            <ShoppingBag className="size-4.5" />
            <span className="bg-ember absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full text-[11px] font-bold text-white">
              2
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="text-char inline-flex size-10 items-center justify-center rounded-full border border-stone-200 bg-white"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-border bg-page border-b px-4 pt-2 pb-6 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-char hover:text-[#F97316] block py-1.5 text-base font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#menu"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-[#111C24] px-6 text-sm font-bold text-white"
          >
            Order Now
          </Link>
        </nav>
      )}
    </header>
  );
}

