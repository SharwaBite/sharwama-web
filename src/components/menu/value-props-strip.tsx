import type { ReactNode } from "react";
import { VALUE_PROPS, type ValuePropItem } from "@/mocks/shop";

const VALUE_PROP_ICONS: Record<ValuePropItem["id"], ReactNode> = {
  fresh: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="size-10 shrink-0"
      aria-hidden="true"
    >
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
  delivery: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="size-10 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M8 26H27L24 15H17V20H11C9.343 20 8 21.343 8 23V26Z"
        fill="#F97316"
        stroke="#111C24"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="28"
        r="3.5"
        fill="#FFFBF5"
        stroke="#111C24"
        strokeWidth="1.75"
      />
      <circle
        cx="27"
        cy="28"
        r="3.5"
        fill="#FFFBF5"
        stroke="#111C24"
        strokeWidth="1.75"
      />
      <path
        d="M22 15H27L30 22"
        stroke="#111C24"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  taste: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="size-10 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M8 27L6 14L14 19L20 11L26 19L34 14L32 27H8Z"
        fill="#F97316"
        stroke="#111C24"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9 30H31"
        stroke="#111C24"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  ),
  price: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="size-10 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M21.5 9H30V17.5L18.5 29L10 20.5L21.5 9Z"
        fill="#F97316"
        stroke="#111C24"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="25.5"
        cy="13.5"
        r="1.75"
        fill="#FFFBF5"
        stroke="#111C24"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

export function ValuePropsStrip() {
  return (
    <section
      aria-label="Why choose SharwaBite"
      className="mt-8 rounded-[18px] bg-[#FDF8F0] p-5 sm:p-7"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-stone-200/80">
        {VALUE_PROPS.map((prop, idx) => (
          <div
            key={prop.id}
            className={`flex items-start gap-3.5 ${idx > 0 ? "lg:pl-6" : ""}`}
          >
            {VALUE_PROP_ICONS[prop.id]}
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
  );
}
