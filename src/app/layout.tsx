import type { Metadata } from "next";
import { Archivo, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";
import { Toaster } from "@/components/ui/sonner";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo-src",
  display: "swap",
});

const marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker-src",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "SharwaBite", template: "%s | SharwaBite" },
  description:
    "Fresh shawarma crafted with bold flavors, delivered hot and fast to your doorstep.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${marker.variable} h-full font-sans antialiased`}
    >
      <body className="bg-page text-char flex min-h-full flex-col">
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
