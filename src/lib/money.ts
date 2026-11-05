const nairaFormatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  currencyDisplay: "narrowSymbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/**
 * Converts integer kobo (e.g. 350000) to Naira (3500).
 */
export function koboToNaira(kobo: number): number {
  return Math.round(kobo / 100);
}

/**
 * Converts Naira (e.g. 3500) to integer kobo (350000).
 */
export function nairaToKobo(naira: number): number {
  return Math.round(naira * 100);
}

/**
 * Formats a Naira number as `₦3,500` (no decimals).
 */
export function formatNaira(naira: number): string {
  return nairaFormatter.format(Math.round(naira));
}

/**
 * Formats an integer kobo value from the API as `₦3,500` (no decimals).
 */
export function formatKobo(kobo: number): string {
  return formatNaira(koboToNaira(kobo));
}

/**
 * Formats an option delta in kobo as `+₦500` (or empty string when 0).
 */
export function formatKoboDelta(kobo: number): string {
  if (kobo === 0) return "";
  const sign = kobo > 0 ? "+" : "-";
  return `${sign}${formatKobo(Math.abs(kobo))}`;
}

