"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface BlurredBackgroundSectionProps {
  backgroundImageUrl: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  blurAmount?: string; // e.g., "blur-sm", "blur-md", "blur-xl"
  priority?: boolean;
}

export default function BlurredBackgroundSection({
  backgroundImageUrl,
  children,
  className = "",
  overlayOpacity = 0.6,
  blurAmount = "blur-md",
  priority = false,
}: BlurredBackgroundSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImageUrl}
          alt="BISI Industrial Background"
          fill
          priority={priority}
          className={`object-cover object-center transition-all duration-1000 ${blurAmount}`}
          quality={85}
        />
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black invisible pointer-events-none" 
          style={{ opacity: overlayOpacity, visibility: 'visible' }}
        />
        {/* Industrial Gradient Mesh for consistency with BISI theme */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B38B59 0.5px, transparent 0)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Content Layer (Ensure it's above the background) */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
