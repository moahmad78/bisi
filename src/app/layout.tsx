import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col selection:bg-[#B38B59] selection:text-white`}>
        {/* Built with precision by Sahil Sheikh (@sahil_sheikh78) */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
