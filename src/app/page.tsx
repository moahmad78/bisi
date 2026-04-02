"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
    { name: "TATA", logo: "https://static.vecteezy.com/system/resources/previews/020/975/561/large_2x/tata-logo-tata-icon-transparent-free-png.png" },
    { name: "JSW", logo: "https://e7.pngegg.com/pngimages/575/90/png-clipart-india-jsw-steel-ltd-jsw-group-logo-steel-blue-text.png" },
    { name: "BHUSHAN Power & Steel", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZy6qeFtL3kafMWOHuWZZNCxpQINigqqsb3A&s" },
    { name: "VSP", logo: "https://www.3blmedia.com/sites/default/files/styles/5x4_l/public/images/VSPGlobal_4C_3.png?h=532f109e" },
    { name: "Arjas Steel Pvt. Ltd", logo: "https://premiersteels.in/wp-content/uploads/2020/03/suppliers-1.png" },
    { name: "Jaiswal Nico", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrq_k3lBGlxEI4cQ2HVadObIP3lYPqxHt9Cw&s" },
    { name: "Gerdau", logo: "https://logospng.org/wp-content/uploads/gerdau.png" },
    { name: "RINL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-Kd_sEx2xPXWI0FQ_NLCe4Z6SO7MZMY3xw&s" }
  ];

  /* ── Mobile Hero Slider State ── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://shyammetalics.com/static/media/blugs.c1fa9be1f7c62eb160a2.webp",
    "https://www.beharilalengineering.com/assets/img/images/carbon-product-3.1.jpg?v=1.3",
    "https://www.aonesteelgroup.com/wp-content/uploads/2024/06/Img.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-transparent overflow-hidden font-sans selection:bg-[#B38B59] selection:text-white">
      
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO (DESKTOP)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] hidden md:flex flex-col justify-center pt-36 pb-32">
        <div className="absolute inset-0 z-0">
           <div 
             className="absolute inset-0 bg-fixed bg-cover bg-center opacity-60" 
             style={{ backgroundImage: 'url("https://www.bisiengineering.in/static/media/hero-bg.e515046fe9ebbecc4127.jpg")' }}
           />
           <div className="absolute inset-0 bg-industrial-overlay" />
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
              BISI Engineering delivers high-precision Cold Drawn Bright Steel Bars across Round, Square, Hexagon, and Flat profiles. We serve Automotive, Hydraulic, SPM, and General Engineering sectors with unmatched dimensional accuracy.
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

        {/* ── Marquee Strip (Desktop Only) ── */}
        <div className="absolute bottom-0 left-0 w-full z-20 bg-black/50 backdrop-blur-md py-6 border-t border-white/10 overflow-hidden">
          <div className="flex w-max animate-marquee">
            {[...Array(4)].map((_, dupIdx) => (
              <div key={dupIdx} className="flex flex-nowrap items-center">
                {[
                  { val: "100%", label: "Customer Focus" },
                  { val: "22+", label: "Years of Excellence" },
                  { val: "18", label: "Production Machines" },
                  { val: "ISO", label: "9001:2015 Certified" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1 pr-16 md:pr-24 pl-6">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight whitespace-nowrap">
                      {stat.val}
                    </span>
                    <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide uppercase whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO (MOBILE)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="md:hidden block bg-zinc-950">
        {/* Top Section: Auto-playing Slider */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${slides[currentSlide]}")` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full">
            {slides.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? "w-6 bg-[#B38B59]" : "w-1.5 bg-white/30"}`} />
            ))}
          </div>
        </div>

        {/* Bottom Section: Content Flow */}
        <div className="px-6 py-12">
          <span className="inline-block px-4 py-1 rounded-full border border-[#B38B59]/40 text-[#B38B59] text-[10px] font-bold tracking-widest uppercase mb-6 bg-[#B38B59]/5">
            Est. 2002 | ISO Certified
          </span>
          <h1 className="text-3xl font-bold text-white tracking-tight leading-tight mb-6">
            Precision Bright Bars Engineered for <span className="text-[#B38B59]">Performance.</span>
          </h1>
          <p className="text-slate-400 text-base font-medium leading-relaxed mb-10 border-l-2 border-[#B38B59] pl-4">
            A trusted manufacturer and supplier of high-quality Bright Steel Bars serving engineering, automotive, hydraulic, and industrial manufacturing sectors across India and global markets.
          </p>
          <div className="flex flex-col gap-4">
            <Link 
              href="/products" 
              className="w-full flex justify-center items-center py-4 bg-[#B38B59] text-white text-xs tracking-widest uppercase font-bold rounded-xl shadow-lg"
            >
              Explore Products
            </Link>
            <Link 
              href="/contact" 
              className="w-full flex justify-center items-center py-4 bg-transparent text-white text-xs tracking-widest uppercase font-bold rounded-xl border border-[#B38B59]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: ENGINEERING SNAPSHOT
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1565515261920-561b6238b77a?q=80&w=2070&auto=format&fit=crop")' }} />
          <div className="absolute inset-0 bg-industrial-overlay" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
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
      <section className="relative py-24 md:py-32 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532054942125-1e3914a1eb4c?q=80&w=2070&auto=format&fit=crop")' }} />
          <div className="absolute inset-0 bg-industrial-overlay" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
                className="group relative bg-white/5 backdrop-blur-md border border-[#B38B59]/40 rounded-xl overflow-hidden hover:border-[#B38B59] transition-colors"
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
            className="mt-16 bg-white/5 backdrop-blur-md border border-[#B38B59] rounded-xl overflow-hidden p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center"
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
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: RAW MATERIAL PARTNERS (INFINITE MARQUEE)
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 mb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950 opacity-90" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
        </div>
        
        <div className="relative z-10 w-full overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
            <h2 className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-4">Raw Material Strength</h2>
            <h3 className="text-2xl md:text-4xl font-semibold text-white">We source from India&apos;s most trusted mills.</h3>
          </div>
          
          <div className="flex w-max animate-marquee py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            {[...Array(3)].map((_, dupIdx) => (
              rawMaterialPartners.map((partner, idx) => (
                <div key={`${dupIdx}-${idx}`} className="flex items-center px-12 md:px-20 group">
                   <div className="h-12 w-auto md:h-16 relative">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img 
                       src={partner.logo} 
                       alt={partner.name} 
                       className="h-full w-auto object-contain grayscale brightness-200 opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300"
                       loading="lazy" 
                     />
                   </div>
                   <div className="w-1.5 h-1.5 rounded-full bg-[#B38B59]/40 ml-12 md:ml-20" />
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
