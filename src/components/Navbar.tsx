"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About BISI" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Developer signature — console easter egg
  useEffect(() => {
    console.log(
      '%c🛡️ PRECISION ENGINEERED BY SAHIL SHEIKH | IG: @SAHIL_SHEIKH78',
      'color: #B38B59; background: #0a0a0a; font-size: 14px; font-weight: bold; padding: 8px 16px; border-radius: 4px; border: 2px solid #B38B59; text-shadow: 0 0 8px rgba(179,139,89,0.3);'
    );
    console.info('Connect with the creator: https://www.instagram.com/sahil_sheikh78/');
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            <Link href="/" className="flex-shrink-0 group">
              <Image
                src="/logo.png"
                alt="BISI Engineering — Bright India Steel Industry"
                width={180}
                height={72}
                className="h-12 w-auto md:h-14 lg:h-16 object-contain transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  filter: 'invert(1) hue-rotate(180deg) brightness(1.15)',
                  mixBlendMode: 'screen',
                }}
                priority
              />
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.filter(l => l.href !== "/contact").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wider uppercase transition-colors relative pb-1 ${pathname === link.href
                    ? "text-[#B38B59] border-b border-[#B38B59]"
                    : "text-white/80 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-6 px-8 py-3 text-xs font-medium tracking-widest uppercase rounded-lg transition-colors border shadow-lg ${pathname === "/contact"
                  ? "bg-[#B38B59] text-white border-[#B38B59]"
                  : "bg-white text-black border-transparent hover:bg-neutral-200 hover:border-white"
                }`}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 relative z-[60]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════
          MOBILE: Mechanical Slide-In Sidebar + Backdrop
      ═══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.nav
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-[60] bg-neutral-950 border-l border-[#B38B59]/30 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="BISI Engineering"
                    width={140}
                    height={56}
                    className="object-contain h-8 w-auto"
                    style={{
                      filter: 'invert(1) hue-rotate(180deg) brightness(1.15)',
                      mixBlendMode: 'screen',
                    }}
                  />
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white p-1" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-grow flex flex-col p-6 gap-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-colors text-sm font-medium tracking-widest uppercase ${pathname === link.href
                          ? "bg-[#B38B59]/15 text-[#B38B59] border border-[#B38B59]/30"
                          : "text-white/80 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                    >
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${pathname === link.href ? "bg-[#B38B59]" : "bg-white/20"}`} />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Footer CTA */}
              <div className="p-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-[#B38B59] text-white text-sm font-semibold tracking-widest uppercase rounded-lg hover:bg-[#9a7448] transition-colors shadow-lg shadow-[#B38B59]/20"
                >
                  Get in Touch <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[10px] text-white/30 tracking-widest uppercase mt-4">ISO 9001:2015 · Est. 2002</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
