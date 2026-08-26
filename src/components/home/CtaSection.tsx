"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-16 bg-primary relative overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-white mb-6"
          >
            Let's Build Something <span className="text-white underline decoration-white/30 underline-offset-8">Great Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-[17px] md:text-[19px] leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Whether you need a Custom ERP system, a new Mobile App, a Modern Website, or a Marketing Strategy that delivers results — Pinnacle Systems is ready to help you get there.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/under-construction" className="w-max bg-[#0b132a] text-white hover:bg-white hover:text-[#0b132a] px-8 lg:px-10 py-4 lg:py-3 rounded-full font-bold text-[16px] lg:text-[18px] transition-all duration-300 shadow-[0_8px_25px_rgba(11,19,42,0.3)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.4)] flex items-center justify-center gap-3 mx-auto group">
              Explore Our Services

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
