import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatKobo } from "@/lib/money";
import { FEATURED_MENU_ITEMS } from "@/mocks/menu";

export function FeaturedMenuSection() {
  return (
    <section id="menu" className="scroll-mt-24">
      <div className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
        <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
        <h2 className="display-type text-center text-2xl tracking-wide text-[#111C24] sm:text-3xl">
          OUR FEATURED MENU
        </h2>
        <span className="h-[3px] w-8 rounded-full bg-[#F97316] sm:w-12" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_MENU_ITEMS.map((item) => (
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
  );
}
