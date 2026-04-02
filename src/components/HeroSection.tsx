"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 md:pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://www.bisiengineering.in/static/media/hero-bg.e515046fe9ebbecc4127.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background z-0" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto mt-16">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 hidden md:block">
              Premium <span className="text-accent-light">Bright Bars</span> <br /> Manufacturer in India
            </h1>
            <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-6 md:hidden">
              Bright Bars Manufacturer in India
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-metallic-300 mb-10 leading-relaxed max-w-2xl"
          >
            Engineering excellence with Precision Bright Bars, EN8D Bright Bars, and Mild Steel Bright Bars. Supplying the automotive, hydraulic, and SPM industries with uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/products"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded hover:bg-accent-light transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded hover:bg-white/5 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-40 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
    </section>
  );
}
