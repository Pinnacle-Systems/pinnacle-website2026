"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { theme } from "@/theme";

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
    <section className="pt-12 pb-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${theme.h2} mb-6`}
          >
            Custom ERP vs. Off-the-Shelf: Which Is Right for You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={theme.p}
          >
            See why an AI-powered custom ERP built specifically for your workflows outperforms generic solutions.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

            {/* Left Column - Off the Shelf */}
            <div className="order-2 lg:order-1 space-y-8 bg-red-50/50 p-8 rounded-3xl border border-red-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-500">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                Generic ERP Solutions
              </h3>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`left-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <X className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.feature}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.offTheShelf}</p>
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
                className="relative w-full max-w-sm aspect-square rounded-full overflow-hidden shadow-2xl border-[12px] border-white z-10"
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full border border-gray-200 -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full border border-gray-100 -z-10"></div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12"
              >
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium shadow-xl shadow-blue-500/20 transition-all flex items-center gap-2 group">
                  Upgrade Your Business Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column - Custom ERP */}
            <div className="order-3 lg:order-3 space-y-8 bg-green-50/50 p-8 rounded-3xl border border-green-100 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                Our Custom ERP Software
              </h3>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <motion.div
                    key={`right-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.feature}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.custom}</p>
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
