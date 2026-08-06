"use client";

import { motion } from "framer-motion";
import { Layers, Wrench, Globe, Shield, Users } from "lucide-react";

const reasons = [
  {
    title: "End-to-End Expertise",
    description: "From software development to marketing, we cover every stage of your digital growth under one roof.",
    icon: Layers,
  },
  {
    title: "Custom-Built",
    description: "We design solutions around your business, not the other way around.",
    icon: Wrench,
  },
  {
    title: "Local Knowledge",
    description: "We blend local market knowledge with international development as well as quality benchmarks.",
    icon: Globe,
  },
  {
    title: "Transparent Process",
    description: "Clear timelines, transparent communication, and no unexpected costs.",
    icon: Shield,
  },
  {
    title: "Long-Term Partnership",
    description: "We don't just deliver projects; we support and scale with you as your business grows.",
    icon: Users,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-12 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
            Why Businesses Choose <span className="text-primary">Pinnacle Systems</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            // Center the last two items gracefully or let grid handle it
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8f9fa] rounded-[24px] p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 border border-gray-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-5 text-primary mx-auto">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-[16px] xl:text-[17px] 2xl:text-[18px] font-bold text-[#0b132a] mb-3 leading-snug text-center whitespace-nowrap tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-[14.5px] leading-relaxed text-justify">
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
