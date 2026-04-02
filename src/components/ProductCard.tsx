import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  delay?: number;
  imageSrc: string;
  imageAlt: string;
}

export default function ProductCard({ title, description, href, delay = 0, imageSrc, imageAlt }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-white border border-gray-200 rounded-lg group relative flex flex-col h-full hover:shadow-lg hover:border-blue-200 transition-all duration-300 shadow-sm overflow-hidden"
    >
      <div className="relative w-full aspect-video bg-slate-100 overflow-hidden border-b border-gray-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-sm font-bold text-blue-700 group/link mt-auto self-start"
        >
          <span className="relative overflow-hidden pb-0.5 border-b border-transparent group-hover/link:border-blue-700 transition-colors">
            View Specifications
          </span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 text-blue-700 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
