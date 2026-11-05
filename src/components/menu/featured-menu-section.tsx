import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { formatKobo } from "@/lib/money";

export interface FeaturedMenuItem {
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
  );
}

