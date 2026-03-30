"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const rawMaterialPartners = [
    "TATA", "JSW", "BHUSHAN Power & Steel", "VSP",
    "Arjas Steel Pvt. Ltd", "Jaiswal Nico", "Gerdau India", "RINL"
  ];

  return (
    <div className="bg-black overflow-hidden font-sans selection:bg-[#B38B59] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-36 pb-48">
        <div className="absolute inset-0 z-0 select-none">
           <img 
             src="https://www.bisiengineering.in/static/media/hero-bg.e515046fe9ebbecc4127.jpg" 
             alt="Heavy Engineering Sunset Pipes Industrial Background" 
             className="object-cover w-full h-full" 
             loading="eager"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
           <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex-grow flex flex-col justify-center w-full">
          <motion.div 
            initial="hidden" animate="show" variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={itemReveal} className="mb-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-5 py-2 rounded-full border border-[#B38B59] text-[#B38B59] text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-[#B38B59]/10 backdrop-blur-sm">
                An ISO 9001:2015 Certified Company
              </span>
              <span className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 text-white/80 text-[10px] md:text-xs font-semibold tracking-widest uppercase bg-white/5 backdrop-blur-sm">
                Established 2002
              </span>
            </motion.div>

            <motion.h1 
              variants={itemReveal}
              className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-8"
            >
              Precision Bright Bars <br className="hidden md:block" />
              Engineered for <span className="text-[#B38B59]">Performance.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemReveal}
              className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-12 font-medium border-l-2 border-[#B38B59] pl-6"
            >
              BISI Engineering delivers high-precision Cold Drawn Bright Steel Bars across Round, Square, Hexagon, and Flat profiles. We serve Automotive, Hydraulic, SPM, and General Engineering sectors with unmatched dimensional accuracy. Customer satisfaction is our motto.
            </motion.p>
            
            <motion.div variants={itemReveal} className="flex flex-col sm:flex-row gap-5">
              <Link 
                href="/contact" 
                className="inline-flex justify-center items-center px-10 py-5 bg-[#B38B59] text-white text-sm tracking-widest uppercase font-semibold rounded-xl hover:bg-[#9a7448] transition-colors shadow-lg shadow-[#B38B59]/20"
              >
                Request a Quote <ArrowUpRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/products" 
                className="inline-flex justify-center items-center px-10 py-5 bg-transparent text-white text-sm tracking-widest uppercase font-semibold rounded-xl border border-[#B38B59] hover:bg-[#B38B59]/10 transition-colors"
              >
                View Product Catalogue
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stat Strip — Infinite Marquee */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-black/40 backdrop-blur-md border-t border-white/5 overflow-hidden">
          <div className="flex w-max animate-marquee py-6">
            {[...Array(4)].map((_, dupIdx) => (
              [
                { val: "22+", label: "Years of Excellence" },
                { val: "18", label: "Production Machines" },
                { val: "ISO", label: "9001:2015 Certified" },
                { val: "100%", label: "Customer Focus" }
              ].map((stat, i) => (
                <div key={`${dupIdx}-${i}`} className="flex flex-col gap-1 pr-16 md:pr-24 pl-6">
                  <span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight whitespace-nowrap">{stat.val}</span>
                  <span className="text-xs md:text-sm text-neutral-400 font-medium tracking-wide whitespace-nowrap">{stat.label}</span>
                </div>
              ))
            )).flat()}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: ENGINEERING SNAPSHOT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-neutral-950 border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.h2 variants={itemReveal} className="text-sm font-medium tracking-[0.2em] text-[#B38B59] uppercase mb-4">Engineering Snapshot</motion.h2>
            <motion.h3 variants={itemReveal} className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
              Engineering Strength with <span className="border-b-2 border-[#B38B59]">Precision Steel Solutions.</span>
            </motion.h3>
            <motion.p variants={itemReveal} className="text-lg text-slate-300 mb-10 font-medium leading-relaxed">
              Headquartered in Peenya Industrial Area, Bengaluru since 2002, we are deeply committed to producing safe, reliable, and economical Bright Steel Bars. Our facility is equipped with 18 dedicated machines delivering Round, Square, Hexagon, and Flat profiles to the most demanding tolerances.
            </motion.p>
            <motion.ul variants={itemReveal} className="space-y-4 mb-10">
              {["ISO 9001:2015 Continuous Certification", "NABL Accredited Cross-Testing Partnerships", "Zero Defect Manufacturing Target", "Dedicated NDT & Magnetic Particle Testing"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white font-medium text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#B38B59] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={itemReveal}>
              <Link href="/about" className="inline-flex items-center text-[#B38B59] font-medium tracking-widest uppercase hover:text-white transition-colors border-b border-[#B38B59] hover:border-white pb-1 text-sm">
                About BISI Engineering <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-[#B38B59] translate-x-4 translate-y-4 rounded-xl" />
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 z-10 bg-black">
              <img src="https://avantiengineering.com/wp-content/uploads/2019/10/CNC-Screw-Machine.jpg" alt="BISI Industrial Facility — CNC Screw Machines" className="object-cover w-full h-full opacity-80" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: CORE PRODUCTS PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-black border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.h2 variants={itemReveal} className="text-sm font-medium tracking-[0.2em] text-[#B38B59] uppercase mb-4">Core Products</motion.h2>
            <motion.h3 variants={itemReveal} className="text-3xl md:text-5xl font-semibold text-white mb-6">Engineered Bar Portfolio</motion.h3>
            <motion.p variants={itemReveal} className="text-slate-400 font-medium">Cold Drawn Bright Steel Bars manufactured with superior surface finish, dimensional accuracy, and straightness.</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Round Bars", image: "https://www.metalsupplies.com/wp-content/uploads/2016/11/round-bar.jpg", desc: "Shafts, Axles, Gears" },
              { title: "Square Bars", image: "https://5.imimg.com/data5/KJ/LP/GLADMIN-48916739/square-bars-500x500.png", desc: "Structural, Tooling, Dies" },
              { title: "Flat Bars", image: "https://www.sanghvioverseas.com/blog/wp-content/uploads/2024/07/steel-flat-bar.jpg", desc: "SPM, Base Plates, Guides" },
              { title: "Hexagon Bars", image: "https://www.metalsupplies.com/wp-content/uploads/2012/08/metalsupplies_032.jpg", desc: "Fasteners, Nuts, Hydraulics" },
              { title: "Custom Profiles", image: "https://image.made-in-china.com/43f34j00hwYlCjkfJRUa/Galvanized-Steel-Round-Bar-Price-12mm-16mm-32mm-Gi-Round-Rod-Bar-Zinc-Coated-Mental-Round-Square-Bar.webp", desc: "Built to Your Print" }
            ].map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.6 }} viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-[#B38B59] transition-colors"
              >
                <div className="relative h-44 w-full bg-neutral-900 border-b border-white/10 overflow-hidden">
                  <img src={prod.image} alt={prod.title} className="object-cover w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" loading="lazy" />
                </div>
                <div className="p-5">
                  <h4 className="text-base font-semibold text-white mb-1">{prod.title}</h4>
                  <p className="text-[#B38B59] text-xs font-semibold tracking-wide uppercase">{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Special Precision Showcase ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
            className="mt-16 bg-neutral-950 border border-[#B38B59]/30 rounded-xl overflow-hidden p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center"
          >
            <div className="w-full lg:w-1/2">
              <h4 className="text-2xl md:text-3xl font-semibold text-white mb-6">Special Precision: Small Size Bars</h4>
              <p className="text-slate-300 font-medium mb-10 leading-relaxed border-l-2 border-[#B38B59] pl-6 text-sm md:text-base">
                Micro-precision tolerances for specialist Automotive and SPM units. Available in MS, EN1A, and EN8D grades.
              </p>
              
              <div className="mb-8">
                <span className="block text-xs text-[#B38B59] uppercase tracking-widest font-semibold mb-3">Small Size Squares (4mm–10mm)</span>
                <span className="px-6 py-2 bg-[#B38B59]/10 border border-[#B38B59] text-white font-semibold rounded-xl inline-block">4mm – 10mm</span>
              </div>

              <div>
                <span className="block text-xs text-[#B38B59] uppercase tracking-widest font-semibold mb-3">Small Size Flats (Exact Dimensions)</span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["8x4", "8x5", "10x4", "10x5", "10x3", "12x3", "11x5", "12x6", "14x5"].map((flat) => (
                    <span key={flat} className="px-3 md:px-4 py-2 bg-black border border-white/20 text-slate-300 font-semibold rounded-xl text-sm">
                      {flat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative w-full lg:w-1/2 min-h-[300px] md:min-h-[400px] border border-white/10 rounded-xl overflow-hidden">
              <img src="https://5.imimg.com/data5/SELLER/Default/2025/10/554032002/GK/KZ/AF/143763735/small-size-steel-bar-500x500.jpg" alt="Small Size Precision Steel Bars" className="object-cover w-full h-full opacity-60" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: RAW MATERIAL PARTNERS
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-neutral-950">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm font-medium tracking-[0.2em] text-[#B38B59] uppercase mb-4">Raw Material Strength</h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white">We source only from India's most trusted steel mills.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
             {rawMaterialPartners.map((partner, idx) => (
               <div key={idx} className="bg-black border border-white/5 rounded-xl p-5 md:p-6 text-center flex items-center justify-center min-h-[80px] md:min-h-[100px] hover:border-[#B38B59]/50 transition-colors">
                 <span className="text-white font-semibold tracking-wide text-sm md:text-base">{partner}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
}
