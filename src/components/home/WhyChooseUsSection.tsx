"use client";

import { motion } from "framer-motion";
import { Layers, Wrench, Globe, Shield, Users } from "lucide-react";
import { theme } from "@/theme";

const reasons = [
  {
    title: "End-to-End Expertise",
    description: "From Software Development to Marketing, we cover every stage of your Digital Growth under one roof.",
    icon: Layers,
  },
  {
    title: "Custom-Built",
    description: "We Design Solutions around your Business, not the other way around.",
    icon: Wrench,
  },
  {
    title: "Local Knowledge",
    description: "We blend Local market knowledge with International Development as well as Quality Benchmarks.",
    icon: Globe,
  },
  {
    title: "Transparent Process",
    description: "Clear Timelines, Transparent Communication, and no unexpected Costs.",
    icon: Shield,
  },
  {
    title: "Long-Term Partnership",
    description: "We don't just deliver Projects. We Support and Scale with you as your Business Grows.",
    icon: Users,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0b132a] relative overflow-hidden mt-8 lg:mt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03] z-0 pointer-events-none"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none z-0 transform translate-x-1/3 translate-y-1/3"></div>

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full border border-white/10 mb-5 sm:mb-6 bg-white/5 backdrop-blur-sm shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-white font-bold text-[12px] sm:text-[13px] tracking-[0.15em] uppercase">Pinnacle Systems Advantage</span>
            </div>

            <h2 className={`${theme.h2} text-white mb-5 sm:mb-6`}>
              Why Businesses Choose <br className="hidden sm:inline md:hidden" /><span className="text-primary relative inline-block">
                Pinnacle Systems
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className={`${theme.p} text-gray-400 max-w-2xl mx-auto`}>
              We bring Technical Excellence, Industry Expertise, and a Partner-First approach to every project we undertake.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 xl:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            // For odd number of items, span the last item differently on tablet
            const isLastOdd = index === reasons.length - 1 && reasons.length % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#151c35]/80 backdrop-blur-md rounded-[24px] p-6 xl:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(255,90,0,0.15)] hover:-translate-y-2 border border-white/5 hover:border-primary/40 transition-all duration-500 overflow-hidden flex flex-col items-center h-full ${isLastOdd ? 'sm:col-span-2 lg:col-span-1 sm:w-3/4 sm:mx-auto lg:w-full' : ''}`}
              >
                {/* Hover Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Border Highlight on Hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>

                {/* Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all duration-500 border border-white/5 group-hover:border-transparent shrink-0">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.5]" />
                </div>

                {/* Content */}
                <h3 className="relative text-[17px] sm:text-[18px] lg:text-[19px] font-bold text-white mb-3 sm:mb-4 text-center transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="relative text-gray-400 text-[14px] sm:text-[14.5px] leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
