"use client";

import { Award, Truck, Factory, Package, Shield, Target, Clock, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-neutral-950 min-h-screen font-sans selection:bg-[#B38B59] selection:text-white pt-36 pb-24">

      {/* ═══════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════ */}
      <div className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl">
          <motion.div variants={itemReveal} className="mb-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-semibold tracking-widest uppercase bg-[#B38B59]/10">
              An ISO 9001:2015 Certified Company
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs font-semibold tracking-widest uppercase bg-white/5">
              Established 2002
            </span>
          </motion.div>
          <motion.h2 variants={itemReveal} className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-4">About BISI</motion.h2>
          <motion.h1 variants={itemReveal} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.05]">
            Redefining Precision,<br className="hidden md:block" /> One Bright Bar at a Time.
          </motion.h1>
          <motion.p variants={itemReveal} className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-3xl">
            Established in 2002, Bright India Steel Industries (BISI) is headquartered in the Peenya Industrial Area, Bengaluru. We are intensely focused on producing safe, reliable, and highly economical Bright Steel products across Round, Square, Hexagon, and Flat profiles. Our facility houses 18 dedicated machines and is backed by NABL-accredited cross-testing partnerships. Customer satisfaction is our motto.
          </motion.p>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════
          HERO IMAGE: FACILITY SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#B38B59] translate-x-4 translate-y-4 rounded-xl" />
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-white/10 z-10 bg-black">
            <img 
              src="https://www.aceprecision.com/wp-content/uploads/2024/10/INterior_Cover.jpg" 
              alt="BISI Engineering — CNC Precision Manufacturing Facility" 
              className="object-cover w-full h-full opacity-75" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          DASHBOARD: VISION/MISSION + CORE VALUES
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

          {/* ── Panel 1: Vision & Mission ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative bg-neutral-900 rounded-xl border border-[#B38B59]/30 overflow-hidden"
          >
            {/* Mesh Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
            
            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 border border-[#B38B59] rounded-lg flex items-center justify-center bg-[#B38B59]/10">
                  <Target className="w-5 h-5 text-[#B38B59]" />
                </div>
                <h3 className="text-lg font-semibold text-[#B38B59] tracking-widest uppercase">Vision & Mission</h3>
              </div>

              {/* Vision */}
              <div className="mb-10">
                <h4 className="text-2xl font-bold text-white mb-4">Vision</h4>
                <p className="text-white/80 font-medium leading-relaxed">
                  To be the most trusted and innovative supplier of high-precision Bright Steel Bars in India. We look toward immense development in the Extrusion (Drawing) sector while maintaining strict dedication to safe, sustainable, and internationally competitive industrial practices.
                </p>
              </div>

              <div className="border-t border-[#B38B59]/20 mb-10" />

              {/* Mission */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Mission</h4>
                <p className="text-white/80 font-medium leading-relaxed">
                  To focus intensely on advancements within the Extrusion (Drawing) sector. Safety is our prime concern, and producing economical, flawless materials remains our ultimate imperative toward achieving 100% customer satisfaction with zero defects and on-time delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Panel 2: Core Values ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}
            className="relative bg-neutral-900 rounded-xl border border-[#B38B59]/30 overflow-hidden"
          >
            {/* Mesh Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />

            <div className="relative z-10 p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 border border-[#B38B59] rounded-lg flex items-center justify-center bg-[#B38B59]/10">
                  <Shield className="w-5 h-5 text-[#B38B59]" />
                </div>
                <h3 className="text-lg font-semibold text-[#B38B59] tracking-widest uppercase">Core Values</h3>
              </div>

              <div className="flex flex-col divide-y divide-[#B38B59]/15">
                {[
                  { icon: Shield, title: "Quality First", desc: "Uncompromising ISO 9001:2015 quality standards with NABL-accredited cross-testing across every batch produced." },
                  { icon: Target, title: "Precision Engineering", desc: "Millimetric dimensional accuracy and superior surface finish achieved through 18 dedicated extrusion, pointing, and grinding machines." },
                  { icon: Clock, title: "Timely Delivery", desc: "Streamlined logistics powered by our goods storage facility, crane operations, and dedicated local transport fleet." },
                  { icon: Users, title: "Customer Focus", desc: "Customer satisfaction is our motto. We build long-term partnerships with transparent pricing and dedicated procurement support." },
                ].map((value, i) => (
                  <div key={i} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                    <div className="w-9 h-9 border border-[#B38B59]/50 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#B38B59]/5 mt-0.5">
                      <value.icon className="w-4 h-4 text-[#B38B59]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1.5">{value.title}</h4>
                      <p className="text-white/70 text-sm font-medium leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INFRASTRUCTURE PANELS
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-10">
          <motion.h2 variants={itemReveal} className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-3">Capacity & Logistics</motion.h2>
          <motion.h3 variants={itemReveal} className="text-3xl md:text-4xl font-semibold text-white">Infrastructure & Facilities</motion.h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: Package, title: "Goods Storage Facility", desc: "Massive covered indoor staging areas preserving material integrity and ensuring organized dispatch readiness for large-volume orders." },
            { icon: Factory, title: "Crane Facility", desc: "Integrated overhead EOT cranes for safe, rapid, and heavy-scale material handling operations across the manufacturing floor." },
            { icon: Truck, title: "Local Transport Facility", desc: "Streamlined local supply chain execution powered by our own dedicated fleet of transport vehicles for timely delivery." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative bg-neutral-900 rounded-xl border border-[#B38B59]/20 p-8 md:p-10 overflow-hidden group hover:border-[#B38B59]/50 transition-colors"
            >
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 border border-[#B38B59]/50 rounded-xl flex items-center justify-center bg-[#B38B59]/10 mb-6 group-hover:bg-[#B38B59]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#B38B59]" />
                </div>
                <h4 className="text-white text-lg font-bold mb-4">{item.title}</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SISTER CONCERN PANEL
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative bg-neutral-900 rounded-xl border border-[#B38B59]/30 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B38B59]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 p-8 md:p-10 lg:p-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 border border-[#B38B59] rounded-lg flex items-center justify-center bg-[#B38B59]/10">
                <Award className="w-5 h-5 text-[#B38B59]" />
              </div>
              <h3 className="text-lg font-semibold text-[#B38B59] tracking-widest uppercase">Sister Concern</h3>
            </div>

            <p className="text-white/80 font-medium leading-relaxed text-base md:text-lg mb-8">
              <strong className="text-white">M/S. Industrial Steel & Alloys</strong> is Our sister concern in which we supply Black Rounds, Flats, Heavy Forge Rounds in almost all common Grades like Carbon Steel, EN8, C-45, EN19, EN24, 20MNCR5, SAE 8620, EN353, ST-52, SAE 4140 etc.
            </p>

            <p className="text-sm font-semibold text-[#B38B59] tracking-widest uppercase mb-4">Supported Industrial Grades:</p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["Carbon Steel", "EN8", "C-45", "EN19", "EN24", "20MNCR5", "SAE 8620", "EN353", "ST-52", "SAE 4140"].map(grade => (
                <span key={grade} className="px-3 md:px-4 py-2 bg-black/50 border border-[#B38B59]/20 text-white font-medium rounded-lg text-sm hover:border-[#B38B59]/60 transition-colors">
                  {grade}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          LEADERSHIP PANEL
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-10 text-center max-w-3xl mx-auto">
          <motion.h2 variants={itemReveal} className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-3">Management</motion.h2>
          <motion.h3 variants={itemReveal} className="text-3xl md:text-4xl font-semibold text-white">Leadership</motion.h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="relative bg-neutral-900 rounded-xl border border-[#B38B59]/30 p-8 md:p-10 text-center overflow-hidden group hover:border-[#B38B59]/50 transition-colors">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B38B59]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#B38B59]/10" />
            <div className="w-20 h-20 rounded-full bg-[#B38B59]/10 border-2 border-[#B38B59]/40 flex items-center justify-center mx-auto mb-6 relative z-10">
              <span className="text-2xl font-bold text-[#B38B59]">PB</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">Pradeep Bansal</h4>
            <p className="text-[#B38B59] text-xs font-semibold uppercase tracking-[0.2em] mb-4 relative z-10">Managing Partner</p>
            <p className="text-white/60 text-sm font-medium leading-relaxed relative z-10">
              Leading BISI Engineering&apos;s vision of excellence in Precision Bright Steel manufacturing since 2002.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
