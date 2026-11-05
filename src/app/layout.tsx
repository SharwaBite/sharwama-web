import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Permanent_Marker } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/providers";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "SharwaBite", template: "%s | SharwaBite" },
  description:
    "Fresh shawarma, delivered hot and fast at your door steps. Order yours now.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
