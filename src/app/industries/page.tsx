"use client";

import { motion, Variants } from "framer-motion";

export default function IndustriesPage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const sectors = [
    { title: "Direct Exporters", desc: "We supply precision Bright Bars to direct exporters who require materials meeting strict international dimensional and metallurgical compliance standards for shipment worldwide.", image: "https://cdn2.hubspot.net/hubfs/242200/Stock%20images/Industrial%20port%20at%20dawn%20at%20the%20Port%20of%20Casablanca,%20Morocco..jpeg" },
    { title: "Hydraulic Fitting Manufacturers", desc: "Our defect-free surface finish bars serve manufacturers of pistons, cylinders, and hydraulic valve systems where zero surface discontinuity is critical for extreme pressure applications.", image: "https://img1.wsimg.com/isteam/ip/5056d7c1-e245-432d-a678-e2ca012047b0/hydraulic-fitting-india.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:388,cg:true" },
    { title: "SPM Manufacturers", desc: "Custom dimension flat and square Bright Bars for Special Purpose Machine manufacturers. We deliver unique profiles built to print for robotic and automated assembly unit fabrication.", image: "https://parcrobotics.in/wp-content/uploads/2025/04/steptodown.com176586.jpg" },
    { title: "Automotive Components", desc: "High tensile steel for critical shafts, axles, and precision machined components deployed across light and heavy vehicle manufacturing sectors.", image: "https://www.keyence.com/Images/ss_sealing_p_automotive-parts_001_1791826.png" },
    { title: "General Engineering", desc: "Foundational Bright Bars for heavy gears, structural systems, dies, tooling, and universal machinery components that form the backbone of general engineering.", image: "https://www.ucp.ac.uk/app/uploads/sites/4/2024/02/(UCP)Engineering2022%20(14).jpg" }
  ];

  return (
    <div className="pt-36 pb-24 md:pb-32 min-h-screen bg-black font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ── Header ── */}
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mb-12 md:mb-16">
          <motion.div variants={itemReveal} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10">
              Industries We Serve
            </span>
          </motion.div>
          <motion.h1 variants={itemReveal} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8">
            Industries We <span className="text-[#B38B59]">Empower.</span>
          </motion.h1>
          <motion.p variants={itemReveal} className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-[#B38B59] pl-6">
            Through uncompromising quality, BISI's metallurgical precision powers critical structural applications across heavy and specialized global industries.
          </motion.p>
        </motion.div>

        {/* ── Major Clients / Vendors Banner ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 bg-[#B38B59]/10 border border-[#B38B59]/30 rounded-xl p-6 md:p-10 lg:p-12 relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#B38B59] rounded-full blur-[100px] opacity-10 pointer-events-none" />
           <div className="relative z-10">
             <h2 className="text-xs md:text-sm font-semibold text-[#B38B59] tracking-[0.2em] uppercase mb-4">Major Clients & Vendors</h2>
             <h3 className="text-xl md:text-3xl font-semibold text-white leading-tight mb-8">
               Our customers are the vendors of <span className="text-[#B38B59]">ABB, BOSCH, TVS,</span> and <span className="text-[#B38B59]">VST.</span>
             </h3>
             <div className="flex flex-wrap items-center gap-4 md:gap-8">
                {["ABB", "BOSCH", "TVS", "VST"].map(corp => (
                  <span key={corp} className="text-xl md:text-3xl font-black tracking-widest text-white/30">{corp}</span>
                ))}
             </div>
           </div>
        </motion.div>

        {/* ── Sector Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-neutral-950 border border-white/5 rounded-xl relative group overflow-hidden flex flex-col hover:border-[#B38B59]/50 transition-colors shadow-2xl"
            >
               <div className="relative w-full aspect-video bg-neutral-900 border-b border-white/10 overflow-hidden">
                 <img 
                   src={sector.image} 
                   alt={sector.title}
                   className="object-cover w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
               </div>
               
               <div className="p-6 md:p-8 flex-grow relative z-10">
                 <div className="w-10 h-1 bg-[#B38B59] mb-6" />
                 <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">{sector.title}</h2>
                 <p className="text-slate-400 leading-relaxed font-medium text-sm">{sector.desc}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
