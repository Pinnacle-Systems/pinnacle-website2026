"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, TrendingUp, Cog, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import IndustriesSection from '@/components/home/IndustriesSection';

export default function ErpIndustries() {
  return (
    <>
      <IndustriesSection />

      <section className="pt-12 lg:pt-16 pb-16 sm:pb-24 bg-white relative">
        <div className="container mx-auto px-4">
          {/* Textile Specialty */}
          <div className="bg-navy-900 rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 lg:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-medium text-[12px] sm:text-sm mb-4 sm:mb-6">
                  <Shirt className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Industry Focus
                </div>
                <h2 className={cn(theme.h2, "mb-4 sm:mb-6 text-white")}>
                  We specialize in ERP Software for the <span className="text-blue-400">Textile Industry</span>
                </h2>
                <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                  <p className={theme.p}>
                    We specialize exclusively in AI-powered ERP solutions engineered specifically for the textile industry. Unlike generic software retrofitted for manufacturing, our systems are meticulously designed around the actual operational realities of textile businesses.
                  </p>
                  <p className={theme.p}>
                    We support the entire production lifecycle from initial yarn procurement and knitting to dyeing, finishing and final dispatch, equipping your operations with purpose-built tools.
                  </p>
                </div>
                <Link
                  href="?contact=true" scroll={false}
                  className="inline-block w-full sm:w-auto text-center bg-primary hover:bg-primary-hover text-white px-6 py-3.5 sm:py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 text-sm sm:text-[15px]"
                >
                  Book a Free Textile ERP Demo
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-0"
              >
                {[
                  { title: "End-to-End Traceability", desc: "AI-driven batch tracking across the entire supply chain.", icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { title: "Intelligent Cost Control", desc: "Predictive wastage monitoring and real-time production and cost visibility.", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { title: "Operational Scalability", desc: "Streamlined job-work tracking and multi-unit management.", icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  { title: "Seamless Compliance", desc: "Built-in invoicing and automated e-way bill generation.", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-[20px] sm:rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 sm:mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{feature.title}</h4>
                    <p className={cn(theme.p, "text-[13px] sm:text-[14px] text-gray-300")}>{feature.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
