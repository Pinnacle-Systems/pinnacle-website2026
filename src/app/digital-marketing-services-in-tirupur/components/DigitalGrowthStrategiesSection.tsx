"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Factory,
  Briefcase,
  ShoppingCart,
  MapPin,
  UserCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { theme } from "@/theme";

const businessTypes = [
  {
    icon: Shirt,
    tag: "B2B & Exports",
    title: "Textile & Garment Businesses",
    desc: "Show your products, capabilities, manufacturing strengths, and brand to the right audience. Digital marketing can help textile and garment businesses improve visibility, attract B2B enquiries, and create opportunities beyond traditional sales channels.",
  },
  {
    icon: Factory,
    tag: "Industrial Growth",
    title: "Manufacturing Businesses",
    desc: "Help potential buyers discover your products and capabilities through search, content, paid campaigns, and a website that clearly communicates what your business provides.",
  },
  {
    icon: Briefcase,
    tag: "Lead Generation",
    title: "B2B Businesses",
    desc: "B2B customers often research a company before making contact. We focus on search visibility, useful content, website experience, and lead-generation opportunities that help your business stay visible throughout that research process.",
  },
  {
    icon: ShoppingCart,
    tag: "Online Sales",
    title: "E-commerce & D2C Brands",
    desc: "Reach potential customers across search and social channels while improving the journey from product discovery to website visit and purchase.",
  },
  {
    icon: MapPin,
    tag: "Local SEO",
    title: "Local Businesses",
    desc: "Easier to find your company locally by using local search marketing, Google Business Profiles, social media marketing and other location-based digital marketing techniques",
  },
  {
    icon: UserCheck,
    tag: "Client Acquisition",
    title: "Professional & Service Businesses",
    desc: "Present your expertise clearly, build trust with potential customers, and create more opportunities for enquiries through search, content, advertising, and an effective online presence.",
  },
];

export default function DigitalGrowthStrategiesSection() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Ambient Logo Orange Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ffefe8]/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffefe8] border border-[#ffdbcd] text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Tailored Industry Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${theme.h2} mb-6`}
          >
            Digital Growth Strategies Built for{" "}
            <span className="bg-gradient-to-r from-primary via-[#ff7b00] to-orange-500 bg-clip-text text-transparent">
              Tiruppur Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`${theme.p} font-normal`}
          >
            Tiruppur has a strong and diverse business community, from textile and garment companies to manufacturers, exporters, B2B businesses, e-commerce brands, and local service providers.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#ffdbcd] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Accent Orange Gradient Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-[#ff7b00] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar: Icon + Tag Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#ffefe8] text-primary border border-[#ffdbcd] flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                      <IconComp className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:bg-[#ffefe8] group-hover:text-primary group-hover:border-[#ffdbcd] transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-[#0b132a] mb-3 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer Arrow Interaction */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">
                  <span>Explore Strategy</span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-primary text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


