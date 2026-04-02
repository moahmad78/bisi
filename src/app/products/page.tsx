"use client";

import React from "react";
import { Target, BarChart2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ProductsPage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const gradeMatrix = [
    { 
      type: "Mild Steel", 
      rows: [
        { shape: "Round Bars", grades: "SAE 1008, SAE 1010, SAE 1018, C20" },
        { shape: "Square, Hexagon, Flats", grades: "SAE 1018, C20, EN32B" }
      ]
    },
    { 
      type: "Free Cutting Steel", 
      rows: [
        { shape: "Round & Hexagon Bars", grades: "EN1A(NL), EN1A(L)" }
      ]
    },
    { 
      type: "Carbon Steel", 
      rows: [
        { shape: "Round & Hexagon Bars", grades: "EN8, C40, CK45" }
      ]
    },
    { 
      type: "Case Hardening Steel", 
      rows: [
        { shape: "Round Bars", grades: "16 MN CR5, 20 MN CR5, SAE 8620" }
      ]
    },
    { 
      type: "Alloy Steel", 
      rows: [
        { shape: "Round Bars", grades: "EN19, EN24, EN31 etc." }
      ]
    }
  ];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-transparent font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ── Header ── */}
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mb-16 md:mb-20">
          <motion.div variants={itemReveal} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10">
              Product Catalogue
            </span>
          </motion.div>
          <motion.h1 variants={itemReveal} className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">
            Bright Steel Bar <span className="text-[#B38B59]">Catalogue</span>
          </motion.h1>
          <motion.p variants={itemReveal} className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-[#B38B59] pl-6">
            Cold Drawn Bright Steel Bars manufactured with superior surface finish, high dimensional accuracy, perfect straightness, and excellent machinability across all profiles.
          </motion.p>
        </motion.div>

        {/* ── Product Profile Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {[
            { id: "round-bars", title: "Round Bright Bars", image: "https://www.metalsupplies.com/wp-content/uploads/2016/11/round-bar.jpg", features: ["High dimensional accuracy", "Superior surface finish", "Perfect straightness & concentricity", "Excellent machinability"], applications: ["Automotive shafts & axles", "Precision gears", "Machined components", "High-stress fasteners"] },
            { id: "square-bars", title: "Square Bright Bars", image: "https://5.imimg.com/data5/KJ/LP/GLADMIN-48916739/square-bars-500x500.png", features: ["Precise right-angle geometry", "Tight tolerance control", "Consistent cross-section"], applications: ["Structural framework profiles", "General engineering dies", "Specialized tooling", "Heavy machinery parts"] },
            { id: "hexagon-bars", title: "Hexagon Bright Bars", image: "https://www.metalsupplies.com/wp-content/uploads/2012/08/metalsupplies_032.jpg", features: ["Uniform six-sided geometry", "Clean surface finish", "Excellent concentricity"], applications: ["Premium fasteners & heavy nuts", "Hydraulic fittings & valves", "Automotive structural components", "Precision machinery parts"] },
            { id: "flat-bars", title: "Flat Bright Bars", image: "https://www.sanghvioverseas.com/blog/wp-content/uploads/2024/07/steel-flat-bar.jpg", features: ["Superior precision & sharp edges", "Consistent profile", "Highly machinable"], applications: ["Machine parts", "Fabrication", "Engineering structures", "Special Purpose Machines (SPM)"] }
          ].map((product, i) => (
            <motion.div 
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.6 }} viewport={{ once: true }}
              className="scroll-mt-24 bg-white/5 backdrop-blur-md border border-[#B38B59]/40 rounded-xl overflow-hidden group hover:border-[#B38B59] transition-colors shadow-2xl"
            >
              <div className="relative w-full h-56 md:h-64 bg-neutral-900 border-b border-white/10 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="object-cover w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 to-transparent" />
                <h2 className="absolute bottom-6 left-6 text-2xl md:text-3xl font-semibold text-white">{product.title}</h2>
              </div>
              <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-[#B38B59] mb-3 uppercase tracking-widest">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((f, fi) => (
                      <li key={fi} className="text-slate-300 text-sm font-medium flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-1.5 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#B38B59] mb-3 uppercase tracking-widest">Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.map((a, ai) => (
                      <li key={ai} className="text-slate-300 text-sm font-medium flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 flex-shrink-0" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Specialized Steel Grades Matrix (Full Table) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 border-b border-white/10 pb-6 flex items-center gap-4">
             <BarChart2 className="w-7 h-7 text-[#B38B59] flex-shrink-0" /> Specialized Steel Grades Matrix
          </h2>
          <div className="bg-white/5 backdrop-blur-md border border-[#B38B59]/40 rounded-xl overflow-hidden shadow-2xl">
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[600px]">
                 <thead>
                   <tr className="bg-black border-b border-[#B38B59]/50">
                     <th className="py-5 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Steel Category</th>
                     <th className="py-5 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Profile / Shape</th>
                     <th className="py-5 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Exact Technical Grades</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                   {gradeMatrix.map((category, cIdx) => (
                      <React.Fragment key={cIdx}>
                        {category.rows.map((row, rIdx) => (
                          <tr key={`${cIdx}-${rIdx}`} className="hover:bg-white/5 transition-colors">
                            {rIdx === 0 && (
                              <td rowSpan={category.rows.length} className="py-5 px-6 text-white font-semibold border-r border-white/5 align-top text-sm md:text-base">
                                {category.type}
                              </td>
                            )}
                            <td className="py-5 px-6 text-slate-400 font-medium text-sm">
                              {row.shape}
                            </td>
                            <td className="py-5 px-6 text-[#B38B59] font-medium tracking-wide text-sm">
                              {row.grades}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </motion.div>

        {/* ── Small Size Precision Bars ── */}
        <motion.div 
          id="precision-small-size"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="scroll-mt-24 bg-white/5 backdrop-blur-md border border-[#B38B59] rounded-xl overflow-hidden relative shadow-[0_0_50px_rgba(179,139,89,0.08)]"
        >
          <div className="relative w-full h-56 md:h-80 bg-neutral-900 overflow-hidden">
             <img 
               src="https://5.imimg.com/data5/SELLER/Default/2025/10/554032002/GK/KZ/AF/143763735/small-size-steel-bar-500x500.jpg" 
               alt="Micro Precision Engineering" 
               className="object-cover w-full h-full opacity-40" 
               loading="lazy"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>
          
          <div className="p-8 md:p-12 lg:p-16 relative z-10 -mt-32 md:-mt-40">
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12 border-b border-white/10 pb-6 md:pb-8">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-[#B38B59] text-[#B38B59] flex items-center justify-center rounded-xl flex-shrink-0 backdrop-blur-md">
                 <Target className="w-6 h-6 md:w-7 md:h-7" />
               </div>
               <div>
                 <h2 className="text-2xl md:text-4xl font-semibold text-white mb-1">Small Size Precision Bars</h2>
                 <p className="text-slate-400 font-medium text-sm md:text-base">Critical millimetric tolerances for specialist machining.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
               <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl border border-[#B38B59]/30 hover:border-[#B38B59] transition-colors">
                 <h3 className="text-sm md:text-base font-medium text-[#B38B59] uppercase tracking-widest mb-2">Small Size Squares</h3>
                 <span className="block text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-6">Grades: MS, EN1A, EN8D</span>
                 <span className="text-3xl md:text-4xl font-semibold text-white">4mm <span className="text-neutral-600 px-2">–</span> 10mm</span>
               </div>
               
               <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-xl border border-[#B38B59]/30 hover:border-[#B38B59] transition-colors">
                 <h3 className="text-sm md:text-base font-medium text-[#B38B59] uppercase tracking-widest mb-2">Small Size Flats</h3>
                 <span className="block text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-6">Exact Custom Dimensions</span>
                 <div className="flex flex-wrap gap-2 md:gap-3">
                   {["8x4", "8x5", "10x4", "10x5", "10x3", "12x3", "11x5", "12x6", "14x5"].map((flat) => (
                     <span key={flat} className="px-4 py-2 bg-black text-slate-300 font-medium border border-white/10 rounded-xl hover:border-[#B38B59] transition-colors cursor-default text-sm">
                       {flat}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
