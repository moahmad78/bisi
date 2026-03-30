"use client";

import { ShieldCheck, Cog, Activity } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function ManufacturingPage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const machineryFleet = [
    { name: "Extrusion Machines", qty: 3 },
    { name: "Pointing Machines", qty: 4 },
    { name: "Hack Saw Cutting", qty: 2 },
    { name: "Cutting Machines", qty: 4 },
    { name: "Straightening Unit", qty: 1 },
    { name: "Hydraulic Straightening", qty: 1 },
    { name: "Polishing Rigs", qty: 2 },
    { name: "Centreless Bar Grinding Machine", qty: 1 },
  ];

  const instruments = [
    { name: "Weighing Scale", qty: 1, spec: "2 TON Capacity" },
    { name: "Vernier Caliper", qty: 2, spec: "0–200mm Range" },
    { name: "Micrometer (Small)", qty: 1, spec: "0–25mm Range" },
    { name: "Micrometer (Large)", qty: 1, spec: "25–50mm Range" },
  ];

  const qualityObjectives = [
    "100% Customer Satisfaction",
    "Zero Defects",
    "Zero Reworks",
    "On-Time Delivery",
    "Zero Customer Complaints",
    "No Machine Breakdowns",
    "Maximized Output Yield",
    "Continuous Employee Skill Training"
  ];

  return (
    <div className="pt-36 pb-24 md:pb-32 min-h-screen bg-black font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ── Header ── */}
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mb-16 md:mb-24">
          <motion.div variants={itemReveal} className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10">
              Manufacturing & Quality
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase bg-white/5">
              An ISO 9001:2015 Certified Company
            </span>
          </motion.div>
          <motion.h1 variants={itemReveal} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8">
            Manufacturing <span className="text-[#B38B59]">Excellence.</span>
          </motion.h1>
          <motion.p variants={itemReveal} className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-[#B38B59] pl-6">
            State-of-the-art heavy engineering infrastructure with 18 dedicated machines and rigorous 8-point ISO Quality Policy for producing flawless Precision Bright Bars.
          </motion.p>
        </motion.div>

        {/* ═══════════════════════════════════════
            QUALITY POLICY: 8 OBJECTIVES
        ═══════════════════════════════════════ */}
        <section className="mb-16 md:mb-24">
           <div className="bg-neutral-950 border border-white/10 rounded-xl p-8 md:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#B38B59]/5 rounded-full blur-[100px] pointer-events-none" />
             <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 md:mb-10 flex items-center gap-4 relative z-10 border-b border-white/10 pb-6">
                <Activity className="w-7 h-7 text-[#B38B59] flex-shrink-0" /> ISO 9001:2015 Quality Objectives
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
                {qualityObjectives.map((obj, i) => (
                  <div key={i} className="bg-black border border-white/5 rounded-xl p-5 md:p-6 shadow-md hover:border-[#B38B59]/50 transition-colors">
                     <span className="text-[#B38B59] text-xl md:text-2xl font-bold block mb-2 opacity-50">0{i+1}</span>
                     <p className="text-white font-medium tracking-wide text-sm">{obj}</p>
                  </div>
                ))}
             </div>
           </div>
        </section>

        {/* ═══════════════════════════════════════
            MACHINERY CAPACITY TABLE (18 items)
        ═══════════════════════════════════════ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
            <Cog className="w-7 h-7 text-[#B38B59] flex-shrink-0" /> Machinery Capacity (18 Machines Total)
          </h2>
          
          <div className="bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-black border-b border-[#B38B59]/50">
                    <th className="py-4 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Machine Name</th>
                    <th className="py-4 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {machineryFleet.map((machine, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-slate-300 font-medium text-sm md:text-base">{machine.name}</td>
                      <td className="py-4 px-6 text-[#B38B59] font-bold text-right text-sm md:text-base">
                        {machine.qty} {machine.qty > 1 ? "Nos" : "No"}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-[#B38B59]/10 border-t border-[#B38B59]/30">
                    <td className="py-4 px-6 text-white font-semibold text-sm md:text-base">TOTAL</td>
                    <td className="py-4 px-6 text-white font-bold text-right text-sm md:text-base">18 Machines</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INSPECTION INSTRUMENTS TABLE
        ═══════════════════════════════════════ */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
            <ShieldCheck className="w-7 h-7 text-[#B38B59] flex-shrink-0" /> Inspection Instruments
          </h2>
          <div className="bg-neutral-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-black border-b border-[#B38B59]/50">
                    <th className="py-4 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Instrument</th>
                    <th className="py-4 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest text-center">Quantity</th>
                    <th className="py-4 px-6 text-xs font-semibold text-[#B38B59] uppercase tracking-widest">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {instruments.map((inst, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 text-white font-medium text-sm md:text-base">{inst.name}</td>
                      <td className="py-4 px-6 text-[#B38B59] font-bold text-center text-sm md:text-base">{inst.qty}</td>
                      <td className="py-4 px-6 text-slate-400 font-medium text-sm md:text-base">{inst.spec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TESTING TIE-UPS
        ═══════════════════════════════════════ */}
        <section>
          <div className="bg-neutral-950 border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-white border-b border-white/10 pb-6">Testing Tie-ups & Partnerships</h2>
            
            <div className="bg-black/80 border-l-2 border-[#B38B59] p-6 md:p-8 rounded-r-sm border-y border-r border-white/5">
              <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                We have an understanding with material testing labs accredited with <strong className="text-white border-b border-[#B38B59]">NABL</strong> for cross-testing of materials, ensuring full traceability and metallurgical compliance.
              </p>
            </div>
            
            <div className="bg-black/80 border-l-2 border-[#B38B59] p-6 md:p-8 rounded-r-sm border-y border-r border-white/5">
              <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                We also tie-up with <strong className="text-white">NDT people for magnetic particle test</strong> as required by our customers' specific quality parameters for detecting surface and sub-surface discontinuities.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
