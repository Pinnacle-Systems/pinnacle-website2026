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

        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[24px] border border-gray-200 shadow-sm overflow-hidden">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-[1.2fr_1.5fr_1.5fr] bg-gray-50/80 border-b border-gray-200">
            <div className="p-6 xl:p-8 flex items-center justify-start">
              <span className="font-bold text-gray-800 text-lg">Key Features</span>
            </div>
            <div className="p-6 xl:p-8 border-l border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-0">Generic ERP Solutions</h3>
            </div>
            <div className="p-6 xl:p-8 border-l border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-0">Our Custom ERP Software</h3>
            </div>
          </div>

          {/* Body Rows */}
          <div className="divide-y divide-gray-200">
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr_1.5fr] group hover:bg-gray-50/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="p-6 xl:p-8 flex items-center bg-gray-50/50 lg:bg-transparent border-b lg:border-b-0 border-gray-100">
                  <h4 className="font-bold text-gray-800 text-[16px] lg:text-[18px] mb-0">{item.feature}</h4>
                </div>

                {/* Generic ERP */}
                <div className="p-6 xl:p-8 flex items-start gap-4 lg:border-l border-gray-200 bg-red-50/10 hover:bg-red-50/40 transition-colors">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      <X className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="lg:hidden text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">Generic ERP</span>
                    <p className={cn(theme.p, "text-gray-700 text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.offTheShelf}</p>
                  </div>
                </div>

                {/* Custom ERP */}
                <div className="p-6 xl:p-8 flex items-start gap-4 lg:border-l border-gray-200 bg-green-50/10 hover:bg-green-50/40 transition-colors">
                  <div className="mt-1 shrink-0">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <span className="lg:hidden text-xs font-bold text-green-600 uppercase tracking-wider mb-2 block">Custom ERP</span>
                    <p className={cn(theme.p, "text-gray-800 text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0 font-medium")}>{item.custom}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
