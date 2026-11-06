"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { formatKobo } from "@/lib/money";
import {
  FEATURED_MENU_ITEMS,
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategoryItem,
} from "@/mocks/menu";
import { useCartStore } from "@/hooks/use-cart";

type CategoryFilter = "featured" | MenuCategoryItem["id"];

export function FeaturedMenuSection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>("featured");
  const openOptionSheet = useCartStore((s) => s.openOptionSheet);

  const displayedItems =
    activeCategory === "featured"
      ? FEATURED_MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.categoryId === activeCategory);

  return (
    <section id="menu" className="scroll-mt-24">
      <div className="mb-6 flex items-center justify-center gap-3 sm:gap-4">
        <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
        <h2 className="display-type text-center text-2xl tracking-wide text-[#111C24] sm:text-3xl">
          OUR FEATURED MENU
        </h2>
        <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
      </div>

      {/* Category Switcher Chips */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mb-7 flex flex-wrap items-center justify-center gap-2.5"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "featured"}
          onClick={() => setActiveCategory("featured")}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
            activeCategory === "featured"
              ? "bg-[#F97316] text-white shadow-xs"
              : "bg-[#FDF8F0] text-[#111C24] hover:bg-[#FFEDD5]"
          }`}
        >
          Featured
        </button>
        {MENU_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                isSelected
                  ? "bg-[#F97316] text-white shadow-xs"
                  : "bg-[#FDF8F0] text-[#111C24] hover:bg-[#FFEDD5]"
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {displayedItems.map((item) => (
          <article
            key={item.id}
            onClick={() => {
              if (item.isAvailable) openOptionSheet(item);
            }}
            className={`group flex flex-col justify-between rounded-[18px] bg-[#FDF8F0] p-4 transition-all duration-200 sm:p-5 ${
              item.isAvailable
                ? "cursor-pointer hover:-translate-y-1 hover:shadow-md"
                : "cursor-not-allowed opacity-75"
            }`}
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
                  className={`object-cover transition-transform duration-300 ${
                    item.isAvailable
                      ? "group-hover:scale-105"
                      : "grayscale"
                  }`}
                />
                {!item.isAvailable ? (
                  <span className="font-marker border-char absolute top-2.5 left-2.5 -rotate-6 rounded-full border bg-stone-200 px-2.5 py-0.5 text-[11px] text-[#111C24]">
                    Sold out
                  </span>
                ) : (
                  item.badge && (
                    <span className="font-marker bg-saffron border-char absolute top-2.5 left-2.5 -rotate-6 rounded-full border px-2.5 py-0.5 text-[11px] text-[#111C24]">
                      {item.badge}
                    </span>
                  )
                )}
              </div>

              {/* Title & Description */}
              <h3 className="display-type text-xl tracking-wide text-[#111C24]">
                {item.shortTitle}
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
              <button
                type="button"
                disabled={!item.isAvailable}
                onClick={(e) => {
                  e.stopPropagation();
                  if (item.isAvailable) openOptionSheet(item);
                }}
                aria-label={`Customize and add ${item.name}`}
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-[#F97316] text-white transition-transform hover:scale-110 hover:bg-[#EA580C] disabled:cursor-not-allowed disabled:bg-stone-300"
              >
                <Plus className="size-4 stroke-[2.5]" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
