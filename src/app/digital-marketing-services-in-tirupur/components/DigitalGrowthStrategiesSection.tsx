"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
import { cn } from "@/lib/utils";

const businessTypes = [
  {
    icon: Shirt,
    tag: "B2B & Exports",
    title: "Textile & Garment Businesses",
    desc: "Show your products, capabilities, manufacturing strengths, and brand to the right audience. Digital marketing can help textile and garment businesses improve visibility, attract B2B enquiries, and create opportunities beyond traditional sales channels.",
    image: "/images/digital-marketing-service-in-tirupru/Textile & Garment Businesses.webp",
  },
  {
    icon: Factory,
    tag: "Industrial Growth",
    title: "Manufacturing Businesses",
    desc: "Help potential buyers discover your products and capabilities through search, content, paid campaigns, and a website that clearly communicates what your business provides.",
    image: "/images/digital-marketing-service-in-tirupru/Manufacturing Businesses.webp",
  },
  {
    icon: Briefcase,
    tag: "Lead Generation",
    title: "B2B Businesses",
    desc: "B2B customers often research a company before making contact. We focus on search visibility, useful content, website experience, and lead-generation opportunities that help your business stay visible throughout that research process.",
    image: "/images/digital-marketing-service-in-tirupru/b2b.webp",
  },
  {
    icon: ShoppingCart,
    tag: "Online Sales",
    title: "E-commerce & D2C Brands",
    desc: "Reach potential customers across search and social channels while improving the journey from product discovery to website visit and purchase.",
    image: "/images/digital-marketing-service-in-tirupru/E-commerce & D2C Brands.webp",
  },
  {
    icon: MapPin,
    tag: "Local SEO",
    title: "Local Businesses",
    desc: "Easier to find your company locally by using local search marketing, Google Business Profiles, social media marketing and other location-based digital marketing techniques",
    image: "/images/digital-marketing-service-in-tirupru/Local business.webp",
  },
  {
    icon: UserCheck,
    tag: "Client Acquisition",
    title: "Professional & Service Businesses",
    desc: "Present your expertise clearly, build trust with potential customers, and create more opportunities for enquiries through search, content, advertising, and an effective online presence.",
    image: "/images/digital-marketing-service-in-tirupru/professtional business.webp",
  },
];

export default function DigitalGrowthStrategiesSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Tailored Industry Solutions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}
          >
            Digital Growth Strategies Built for{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Tiruppur Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "text-black text-center max-w-3xl mx-auto")}
          >
            Tiruppur has a strong and diverse business community, from textile and garment companies to manufacturers, exporters, B2B businesses, e-commerce brands, and local service providers.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
          {businessTypes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="bg-white border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative w-full h-40 sm:h-48 rounded-[14px] sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-gray-200 border border-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="content-fit group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>

                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                    {item.desc}
                  </p>
                </div>

              
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <div className="mt-10 sm:mt-14 flex justify-center w-full">
          <Link
            href="?contact=true"
            scroll={false}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-[15px] sm:text-base shadow-xl shadow-blue-500/20 transition-all group"
          >
            Grow your Business online
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
