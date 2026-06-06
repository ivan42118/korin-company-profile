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
    "PT Korin Technomic adalah produsen komponen alas kaki dan injection molding plastik presisi dari Indonesia. Melayani produksi massal, cetakan, dan komponen footwear sejak 1999.",
  keywords: [
    "plastic injection molding",
    "footwear components",
    "heel counter",
    "toe cap",
    "EVA components",
    "synthetic rattan",
    "PT Korin Technomic",
    "manufacturing Indonesia",
    "komponen sepatu",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT Korin Technomic",
    title: "PT Korin Technomic | Precision Plastic Injection Manufacturing",
    description:
      "Produsen komponen alas kaki & injection molding plastik presisi dari Indonesia. Injection, EVA, braiding, printing — satu ekosistem produksi terintegrasi.",
    images: [
      {
        url: "/halaman_depan_gerbang_tangerang.jpg",
        width: 1200,
        height: 630,
        alt: "PT Korin Technomic — Factory Gate Tangerang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Korin Technomic | Precision Plastic Injection Manufacturing",
    description: "Produsen komponen alas kaki & injection molding plastik presisi dari Indonesia.",
    images: ["/halaman_depan_gerbang_tangerang.jpg"],
  },
  icons: {
    icon: "/logo-korin.png",
    apple: "/logo-korin.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${din.variable} ${barlowCondensed.variable} ${barlow.variable} ${spaceMono.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Lewati ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
