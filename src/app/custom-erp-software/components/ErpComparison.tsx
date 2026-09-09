"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const comparisonData = [
  {
    feature: "Modules & Features",
    offTheShelf: "Fixed set of modules, whether you need them or not",
    custom: "Modules including AI-driven insights designed around your actual business requirements"
  },
  {
    feature: "Workflow Adaptation",
    offTheShelf: "Adapt Business to Software",
    custom: "Adapt Software to Business"
  },
  {
    feature: "Pricing Model",
    offTheShelf: "Per-user or subscription-based pricing may increase as your team grows",
    custom: "Flexible pricing models based on your business and deployment requirements"
  },
  {
    feature: "Industry Specificity",
    offTheShelf: "Industry-specific needs may require add-ons, customization, or workarounds",
    custom: "Industry-specific requirements, including AI-based forecasting and automation, can be built into the system"
  },
  {
    feature: "Architecture & Ownership",
    offTheShelf: "Vendor-Driven Roadmap",
    custom: "Full Architecture & Enhancement Ownership"
  },
  {
    feature: "Support System",

    offTheShelf: "Tiered Vendor Support",
    custom: "Dedicated Contextual Support"
  }
];

export default function ErpComparison() {
  return (
    <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "mb-4 sm:mb-6")}
          >
            Custom ERP vs Off-the-Shelf : Which Is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(theme.p, "!text-black max-w-none mx-auto text-center")}
          >
            See why an AI-powered custom ERP built specifically for your workflows outperforms generic solutions.
          </motion.p>
        </div>

        <div className="w-full max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-8 items-center">

            {/* Left Column - Off the Shelf */}
            <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 bg-red-50/50 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-red-100 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                Generic ERP Solutions
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4 group lg:min-h-[110px]"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <X className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-[15px] sm:text-[16px] mb-1">{item.feature}</h4>
                      <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.offTheShelf}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Middle Column - Graphic */}
            <div className="order-1 lg:order-2 relative flex flex-col items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative w-full max-w-[280px] sm:max-w-sm aspect-square rounded-full overflow-hidden shadow-2xl border-[8px] sm:border-[12px] border-white z-10"
              >
                <Image
                  src="/images/erp-software/custom_ai_erp.jpg"
                  alt="AI Custom ERP Core"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
              </motion.div>

              {/* Decorative background circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[120%] aspect-square rounded-full border border-gray-200 -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] sm:w-[140%] aspect-square rounded-full border border-gray-100 -z-10"></div>

             
            </div>

            {/* Right Column - Custom ERP */}
            <div className="order-3 lg:order-3 space-y-6 sm:space-y-8 bg-green-50/50 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-green-100 h-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                Our Custom ERP Software
              </h3>

              <div className="space-y-5 sm:space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`right-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 sm:gap-4 group lg:min-h-[110px]"
                  >
                    <div className="mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-[15px] sm:text-[16px] mb-1">{item.feature}</h4>
                      <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.custom}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
