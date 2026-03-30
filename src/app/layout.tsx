import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BISI | Bright Bars Manufacturer in India",
  description:
    "BISI is a premium Bright Bars Manufacturer in India, specializing in Precision Bright Bars, Bright Steel Bars, Mild Steel Bright Bars, EN8D Bright Bars, and EN1A Bright Bars for modern manufacturing.",
  keywords: [
    "Bright Bars Manufacturer India",
    "Precision Bright Bars",
    "Bright Steel Bars Supplier",
    "Mild Steel Bright Bars",
    "EN8D Bright Bars",
    "EN1A Bright Bars"
  ],
  authors: [{ name: "Sahil Sheikh", url: "https://instagram.com/sahil_sheikh78" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-slate-900 min-h-screen flex flex-col selection:bg-blue-700 selection:text-white`}>
        {/* Built with precision by Sahil Sheikh (@sahil_sheikh78) */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
