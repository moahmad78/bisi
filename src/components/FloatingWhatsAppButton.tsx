"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "919845047839"; // Using one of the numbers from the contact page as a default
  const message = "Hello BISI Engineering, I would like to inquire about your Bright Bars.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-shadow hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none group-hover:animate-none" />
      
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </motion.a>
  );
}
