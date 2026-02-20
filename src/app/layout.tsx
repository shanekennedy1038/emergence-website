import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Place your font file at: src/app/fonts/MangalPro.otf  (or .ttf)
// Update the src path below if your filename differs
const mangalPro = localFont({
  src: "./fonts/MangalPro.ttf",
  variable: "--font-playfair", // keeps the same CSS variable — no other files need changing
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Emergence Digital — Custom Digital Solutions Melbourne",
  description:
    "Melbourne-based digital agency offering app development, web design, system integration, and workflow automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mangalPro.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
