"use client";

import { motion } from "framer-motion";
import { Factory, Shirt, TestTube, HeartPulse, GraduationCap, Building, Sparkles, Store } from "lucide-react";

const industries = [
  { name: "Textile", icon: Shirt },
  { name: "Manufacturing", icon: Factory },
  { name: "Textile Testing Lab", icon: TestTube },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Construction", icon: Building },
  { name: "Fire Works", icon: Sparkles },
  { name: "Retails", icon: Store },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 lg:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-[1200px] mx-auto">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-[20px] p-6 lg:p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <ind.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#0b132a] font-bold text-[16px] lg:text-[17px]">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
