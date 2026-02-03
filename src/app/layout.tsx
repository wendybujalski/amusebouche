import type { Metadata } from "next";
import { Courier_Prime, Tangerine, Comic_Neue } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "An Amuse Bouche",
  description: "Lots of fun little bite-sized experiments!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body
        className={`${comicNeue.variable} ${courierPrime.variable} ${tangerine.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
