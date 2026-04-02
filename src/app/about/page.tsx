"use client";

import { Award, Truck, Factory, Package, Shield, Target, Clock, Users, Cog, Move, Sparkles, Ruler, Phone, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FaCar, FaWrench, FaCogs, FaMicrochip, FaGlobe } from "react-icons/fa";
import BlurredBackgroundSection from "@/components/BlurredBackgroundSection";

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
    <BlurredBackgroundSection 
      backgroundImageUrl="https://tiimg.tistatic.com/fp/1/009/294/jsw-tmt-steel-bar-137.jpg"
      overlayOpacity={0.7}
      blurAmount="blur-sm"
    >
      <div className="bg-transparent min-h-screen font-sans selection:bg-[#B38B59] selection:text-white pt-36 pb-24">

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
            className="relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59] overflow-hidden"
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
            className="relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59] overflow-hidden"
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
          MANUFACTURING INFRASTRUCTURE (CAPACITY)
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer} className="mb-12">
          <motion.h2 variants={itemReveal} className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-3">Capacity Infographic</motion.h2>
          <motion.h3 variants={itemReveal} className="text-3xl md:text-5xl font-semibold text-white mb-6">State-of-the-Art Infrastructure</motion.h3>
          <motion.p variants={itemReveal} className="text-slate-400 font-medium max-w-2xl">
            Precision begins with the right tools. Our manufacturing floor is optimized for multi-stage processing with specialized machinery for every grade.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Factory, title: "Extrusion & Pointing", desc: "3 Extrusion & 4 Pointing Machines for high-volume raw material preparation." },
            { icon: Move, title: "Cutting & Straightening", desc: "4 Heavy Cutting & 2 Straightening Machines ensuring dimensional straightness." },
            { icon: Sparkles, title: "Finishing & Grinding", desc: "2 Polishing & 1 Centreless Bar Grinding Machine for superior surface finish." },
            { icon: Ruler, title: "Quality Control", desc: "Vernier Calipers, Micrometers, and 2-Ton Weighing Scale for micron-level accuracy." }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59]/40 p-8 hover:border-[#B38B59] transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 1px, transparent 0)', backgroundSize: '15px 15px' }} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#B38B59]/10 border border-[#B38B59]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#B38B59]/20 transition-all">
                  <card.icon className="w-6 h-6 text-[#B38B59]" />
                </div>
                <h4 className="text-white text-lg font-bold mb-3">{card.title}</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
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
              className="relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59]/40 p-8 md:p-10 overflow-hidden group hover:border-[#B38B59] transition-colors"
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

      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Quality Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5"
          >
            <h2 className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-3">Committed to Quality</h2>
            <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">ISO 9001:2015 Certified</h3>
            
            {/* Quality Policy */}
            <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed mb-10 border-l-2 border-[#B38B59] pl-6">
              &quot;We satisfy customer through compliance of their needs by on time delivery of premium quality Bright Steel Bars in a cost effective manner through Continual improvements in process, quality and Skills of employees by adopting ISO standards and Statutory, Regulatory requirements.&quot;
            </p>

            {/* Key Objectives Grid */}
            <div>
              <p className="text-sm font-semibold text-[#B38B59] tracking-widest uppercase mb-6">Key Objectives</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "100% Customer Satisfaction",
                  "Zero Defects or Rejections",
                  "On-time Delivery",
                  "No Machine Breakdowns"
                ].map((obj, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B38B59] flex-shrink-0" />
                    <span className="text-white/70 text-sm md:text-base font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Certificate Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-2/5 relative flex justify-center lg:justify-end"
          >
            {/* The Certificate Frame */}
            <div className="w-full max-w-sm md:max-w-md bg-neutral-900 p-4 border border-[#B38B59]/40 rounded-2xl shadow-[0_0_20px_rgba(179,139,89,0.15)] group relative overflow-hidden">
              {/* Mesh Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10 overflow-hidden rounded-lg border border-white/5 bg-black/50">
                <img 
                  src="/iso.jpg" 
                  alt="BISI ISO 9001:2015 Certificate" 
                  className="w-full h-auto rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-500" 
                  loading="lazy" 
                />
              </div>
              <p className="text-center text-white/40 text-[10px] md:text-xs tracking-widest uppercase mt-4 mb-1 font-semibold group-hover:text-[#B38B59] transition-colors relative z-10">
                Click to Enlarge
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          INDUSTRIES WE EMPOWER
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <div className="relative bg-zinc-950/50 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 p-10 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-sm font-semibold tracking-[0.25em] text-[#B38B59] uppercase mb-4">Market Reach</h2>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Industries We Empower</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { icon: FaCar, title: "Automotive", desc: "Vendors of ABB, BOSCH, TVS" },
                { icon: FaWrench, title: "Hydraulic", desc: "Equipment & Fittings" },
                { icon: FaCogs, title: "Engineering", desc: "General Fabrication" },
                { icon: FaMicrochip, title: "SPM", desc: "Special Purpose Machines" },
                { icon: FaGlobe, title: "Exports", desc: "Global Engineering Components" }
              ].map((industry, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#B38B59]/60 group-hover:bg-[#B38B59]/5 transition-all duration-500 shadow-2xl">
                    <industry.icon className="w-8 h-8 text-white/40 group-hover:text-[#B38B59] transition-colors" />
                  </div>
                  <h4 className="text-white font-bold text-sm mb-2">{industry.title}</h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SISTER CONCERN PANEL
      ═══════════════════════════════════════════ */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59] overflow-hidden"
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
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white/5 backdrop-blur-md rounded-xl border border-[#B38B59] p-8 md:p-12 overflow-hidden group hover:border-[#B38B59] transition-colors">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B38B59]/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#B38B59]/10" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
              {/* Avatar Column */}
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#B38B59]/10 border-2 border-[#B38B59]/40 flex items-center justify-center flex-shrink-0 shadow-2xl">
                <span className="text-3xl md:text-4xl font-bold text-[#B38B59]">PB</span>
              </div>

              {/* Info Column */}
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Pradeep Bansal</h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-6">
                  <p className="text-[#B38B59] text-xs font-semibold uppercase tracking-[0.2em]">Managing Partner</p>
                  <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                  <a href="tel:+919845047839" className="flex items-center justify-center md:justify-start gap-2 text-white/50 hover:text-[#B38B59] transition-colors text-sm font-medium">
                    <Phone className="w-3.5 h-3.5" />
                    +91 9845047839
                  </a>
                </div>
                <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed max-w-2xl">
                  &quot;Leading Bright India Steel Industries with a vision for unparalleled precision, zero-defect manufacturing, and absolute customer satisfaction.&quot;
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      </div>
    </BlurredBackgroundSection>
  );
}
