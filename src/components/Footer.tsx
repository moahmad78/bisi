"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  return (
    <footer className="bg-black border-t border-white/10 pt-0 md:pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Full-width Map Section - Hidden on Contact Page */}
        {!isContactPage && (
          <div className="mt-10 mb-6 md:mt-24 md:mb-16">
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl h-48 md:h-56 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.247671522916!2d77.5106029!3d13.0198939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ce355469445%3A0xe7673844670e02ad!2s280%2C%204th%20Main%20Rd%2C%20Ganapathy%20Nagar%2C%20Peenya%20Industrial%20Area%20Phase%20IV%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1775042710199!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[50%] invert-[90%] hue-rotate-180 contrast-125 group-hover:grayscale-0 group-hover:invert-0 group-hover:hue-rotate-0 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-xl"></div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/logo.png"
                alt="BISI Engineering — Bright India Steel Industry"
                width={180}
                height={72}
                className="h-16 w-auto md:h-20 lg:h-24 object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
            </Link>

            <p className="text-slate-400 font-medium leading-relaxed mb-6 text-sm">
              Precision Bright Bars Engineered for Performance. <span className="text-white block mt-2 italic">&quot;Customer satisfaction is our motto.&quot;</span>
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center px-4 py-1.5 rounded-xl border border-[#B38B59]/50 text-[#B38B59] text-[10px] font-semibold tracking-[0.2em] uppercase bg-[#B38B59]/10 max-w-max">
                An ISO 9001:2015 Certified Company
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-xl border border-white/20 text-white/80 text-[10px] font-semibold tracking-[0.2em] uppercase bg-white/5 max-w-max">
                Established 2002
              </span>
            </div>
          </div>

          {/* Column 2: Product Range */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Product Range</h4>
            <ul className="space-y-4">
              {[
                { label: "Round Bright Bars", hash: "/products#round-bars" },
                { label: "Square Bright Bars", hash: "/products#square-bars" },
                { label: "Flat Bright Bars", hash: "/products#flat-bars" },
                { label: "Hexagon Bright Bars", hash: "/products#hexagon-bars" },
                { label: "Precision Small Size", hash: "/products#precision-small-size" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.hash} className="text-sm text-slate-400 hover:text-[#B38B59] transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-[#B38B59] transition-colors font-medium">About BISI</Link></li>
              <li><Link href="/manufacturing" className="text-sm text-slate-400 hover:text-[#B38B59] transition-colors font-medium">Manufacturing & Quality</Link></li>
              <li><Link href="/industries" className="text-sm text-slate-400 hover:text-[#B38B59] transition-colors font-medium">Industries We Serve</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-[#B38B59] transition-colors font-medium">Contact / Enquiry</Link></li>
            </ul>
          </div>

          {/* Column 4: Corporate Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">Corporate Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-slate-400 font-medium">
                <MapPin className="w-5 h-5 text-[#B38B59] mt-0.5 flex-shrink-0" />
                <span># 280, 4th main, IV Phase,<br />Peenya industrial area,<br />Bengaluru - 560058</span>
              </li>
              <li className="flex items-start gap-4 text-sm text-slate-400 font-medium">
                <Phone className="w-5 h-5 text-[#B38B59] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918041144796" className="hover:text-[#B38B59] transition-colors">Phone: 080-41144796</a>
                  <a href="tel:+919845047839" className="hover:text-[#B38B59] transition-colors">Mobile: 9845047839</a>
                  <a href="tel:+919945693122" className="hover:text-[#B38B59] transition-colors">Mobile: 9945693122</a>
                </div>
              </li>
              <li className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                <Mail className="w-5 h-5 text-[#B38B59] flex-shrink-0" />
                <a href="mailto:brightindiasteel@gmail.com" className="hover:text-[#B38B59] transition-colors">brightindiasteel@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Bright India Steel Industries (BISI) | Sister Concern: M/S. Industrial Steel & Alloys. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 font-medium hover:text-[#B38B59] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 font-medium hover:text-[#B38B59] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
