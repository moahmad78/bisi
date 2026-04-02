"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
      className="mt-16 md:mt-24 w-full bg-white/5 backdrop-blur-md border border-[#B38B59]/40 p-6 md:p-10 rounded-xl shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
      
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 border-b border-white/10 pb-6 relative z-10 text-center">
        Our Location
      </h2>
      
      <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-inner">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.247671522916!2d77.5106029!3d13.0198939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ce355469445%3A0xe7673844670e02ad!2s280%2C%204th%20Main%20Rd%2C%20Ganapathy%20Nagar%2C%20Peenya%20Industrial%20Area%20Phase%20IV%2C%20Peenya%2C%20Bengaluru%2C%20Karnataka%20560058!5e0!3m2!1sen!2sin!4v1775042710199!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full grayscale-[50%] invert-[90%] hue-rotate-180 contrast-125 hover:grayscale-0 hover:invert-0 hover:hue-rotate-0 transition-all duration-700"
        ></iframe>
      </div>
    </motion.div>
  );
}
