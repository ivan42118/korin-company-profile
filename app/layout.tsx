import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const din = localFont({
  variable: "--font-din",
  src: [
    {
      path: "../assets/fonts/DIN-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/DIN-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/DIN-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PT Korin Technomic | Precision Plastic Injection Manufacturing",
  description:
    "PT Korin Technomic is an Indonesian plastic injection molding manufacturer for footwear components, industrial parts, synthetic rattan, and mass production programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${din.variable} ${barlowCondensed.variable} ${barlow.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
