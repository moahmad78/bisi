"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, Send, UserCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  // ── Form State ──
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ── Web3Forms Submission ──
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const payload = {
        access_key: "YOUR_KEY_HERE",
        subject: `New BISI Enquiry from ${formData.companyName || "Website"}`,
        from_name: formData.contactPerson || "BISI Website",
        "Company Name": formData.companyName,
        "Contact Person": formData.contactPerson,
        Email: formData.email,
        Phone: formData.phone,
        "Product Type": formData.productType || "Not specified",
        "Required Quantity (MT)": formData.quantity || "Not specified",
        "Detailed Requirements": formData.details || "No additional details provided.",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          productType: "",
          quantity: "",
          details: "",
        });
      } else {
        setErrorMessage(result.message || "Submission failed. Please try again or email us directly.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Shared input className ──
  const inputClass =
    "w-full bg-black border border-white/10 rounded-xl px-4 md:px-5 py-3 md:py-4 text-white font-medium focus:outline-none focus:border-[#B38B59] transition-colors text-sm md:text-base placeholder:text-white/25";

  return (
    <div className="pt-36 pb-24 md:pb-32 min-h-screen bg-black font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* ── Header ── */}
        <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mb-16 md:mb-24">
          <motion.div variants={itemReveal} className="mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10">
              Contact / Enquiry
            </span>
          </motion.div>
          <motion.h1 variants={itemReveal} className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-8">
            Connect with <span className="text-[#B38B59]">BISI.</span>
          </motion.h1>
          <motion.p variants={itemReveal} className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl border-l-2 border-[#B38B59] pl-6">
            Inquire about custom dimensions, industrial supply timelines, or initiate a material procurement order. We are committed to responding within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          
          {/* ── Contact Details ── */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            
             <div className="bg-neutral-950 border border-white/5 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden group hover:border-[#B38B59]/50 transition-colors">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#B38B59]/5 rounded-bl-full transition-all group-hover:bg-[#B38B59]/10 pointer-events-none" />
               <UserCircle className="w-8 h-8 text-[#B38B59] mb-4 relative z-10" />
               <h3 className="text-lg font-semibold text-white tracking-wide mb-2 relative z-10">Managing Partner</h3>
               <p className="text-[#B38B59] font-semibold text-lg relative z-10">Pradeep Bansal</p>
             </div>

             <div className="bg-neutral-950 border border-white/5 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden group hover:border-[#B38B59]/50 transition-colors">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#B38B59]/5 rounded-bl-full transition-all group-hover:bg-[#B38B59]/10 pointer-events-none" />
               <MapPin className="w-8 h-8 text-[#B38B59] mb-4 relative z-10" />
               <h3 className="text-lg font-semibold text-white tracking-wide mb-3 relative z-10">Headquarters</h3>
               <p className="text-slate-300 font-medium leading-relaxed relative z-10 text-sm md:text-base">
                 # 280, 4th main, IV Phase,<br />
                 Peenya industrial area,<br />
                 Bengaluru - 560058
               </p>
             </div>

             <div className="bg-neutral-950 border border-white/5 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden group hover:border-[#B38B59]/50 transition-colors">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#B38B59]/5 rounded-bl-full transition-all group-hover:bg-[#B38B59]/10 pointer-events-none" />
               <Phone className="w-8 h-8 text-[#B38B59] mb-4 relative z-10" />
               <h3 className="text-lg font-semibold text-white tracking-wide mb-3 relative z-10">Phone Numbers</h3>
               <div className="flex flex-col gap-2 relative z-10 text-sm md:text-base">
                 <span className="text-slate-300 font-medium">Phone: <span className="text-white">080-41144796</span></span>
                 <span className="text-slate-300 font-medium">Mobile: <span className="text-white">9845047839</span></span>
                 <span className="text-slate-300 font-medium">Mobile: <span className="text-white">9945693122</span></span>
               </div>
             </div>

             <div className="bg-neutral-950 border border-white/5 p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden group hover:border-[#B38B59]/50 transition-colors">
               <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#B38B59]/5 rounded-bl-full transition-all group-hover:bg-[#B38B59]/10 pointer-events-none" />
               <Mail className="w-8 h-8 text-[#B38B59] mb-4 relative z-10" />
               <h3 className="text-lg font-semibold text-white tracking-wide mb-3 relative z-10">Email</h3>
               <p className="text-slate-300 font-medium relative z-10 text-sm md:text-base">
                 brightindiasteel@gmail.com
               </p>
             </div>
          </div>

          {/* ── Request a Quote Form ── */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-950 border border-white/5 p-8 md:p-12 lg:p-16 rounded-xl shadow-2xl h-full">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  /* ═══ SUCCESS STATE ═══ */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-16 md:py-24"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#B38B59]/10 border-2 border-[#B38B59] flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10 text-[#B38B59]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                      Enquiry Sent Successfully.
                    </h3>
                    <p className="text-slate-400 font-medium text-base md:text-lg max-w-md mb-10 leading-relaxed">
                      We will contact you within <span className="text-[#B38B59] font-semibold">24 hours</span>. For urgent enquiries, call us directly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="inline-flex items-center px-8 py-4 bg-transparent text-[#B38B59] text-sm tracking-widest uppercase font-semibold rounded-xl border border-[#B38B59] hover:bg-[#B38B59]/10 transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : (
                  /* ═══ FORM STATE ═══ */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 md:mb-8 border-b border-white/10 pb-6">
                      Request a Quote
                    </h2>

                    <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="M/S. Global Industries..."
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Contact Person *</label>
                          <input
                            type="text"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="Your Name..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="procurement@company.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Contact Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="+91..."
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Product Type</label>
                          <select
                            name="productType"
                            value={formData.productType}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none`}
                          >
                            <option value="">Select Product...</option>
                            <option value="Round Bright Bars">Round Bright Bars</option>
                            <option value="Square Bright Bars">Square Bright Bars</option>
                            <option value="Flat Bright Bars">Flat Bright Bars</option>
                            <option value="Hexagon Bright Bars">Hexagon Bright Bars</option>
                            <option value="Small Size Precision Bars">Small Size Precision Bars</option>
                            <option value="Custom Profiles">Custom Profiles</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-400 tracking-wide">Required Quantity (MT)</label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g. 5 MT"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-400 tracking-wide">Detailed Requirements / Dimensions / Grades</label>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleChange}
                          rows={5}
                          className={`${inputClass} resize-none`}
                          placeholder="E.g. We require Round Bright Bars (EN8, 25mm dia, 3m length)..."
                        />
                      </div>

                      {/* ── Error Message ── */}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4"
                        >
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                          <p className="text-red-300 text-sm font-medium">{errorMessage}</p>
                        </motion.div>
                      )}

                      {/* ── Submit Button ── */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto inline-flex justify-center items-center px-10 md:px-12 py-4 md:py-5 text-sm tracking-widest uppercase font-semibold rounded-xl border transition-all duration-300 ${
                          isSubmitting
                            ? "bg-neutral-800 text-white/50 border-white/10 cursor-not-allowed animate-pulse"
                            : "bg-white text-black border-transparent hover:bg-[#B38B59] hover:text-white hover:border-[#B38B59]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Submit Enquiry <Send className="w-4 h-4 ml-3" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
