"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Lock, Blocks, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Built around your business needs",
    desc: "Our AI-enabled custom ERP software helps streamline operations, improve visibility, reduce manual work, and connect every department on one intelligent platform. With industry-focused expertise, built-in AI capabilities, and reliable support, we help businesses work smarter and grow with confidence."
  },
  {
    icon: <Lock className="w-8 h-8 text-purple-500" />,
    title: "Full Ownership, One Trusted Partner",
    desc: "Your ERP, your control. Get a flexible, AI-ready solution with full ownership over your data and customizations backed by one dedicated team, from implementation to long-term growth."
  },
  {
    icon: <Blocks className="w-8 h-8 text-green-500" />,
    title: "Seamless Integration",
    desc: "Your custom ERP connects with the tools you already use—CRM, accounting software, e-commerce platforms, IoT devices, and third-party APIs."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    title: "Built to Scale",
    desc: "Designed to grow with your business, our AI-powered ERP easily adapts to new users, departments, processes, and business expansion."
  }
];

export default function ErpBenefits() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "mb-6")}
          >
            Why Businesses Trust Our Custom ERP Software
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1536px] mx-auto mb-10 sm:mb-14 lg:mb-16 items-stretch">
          {benefits.map((item, index) => {
            const isExpanded = !!expandedCards[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 sm:p-6 lg:p-8 rounded-[24px] sm:rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                      {item.icon}
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-navy-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0", !isExpanded && "line-clamp-3")}>
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center">
                  <button
                    onClick={() => toggleCard(index)}
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer group"
                  >
                    <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="tel:+919994610733"
            className="inline-flex w-full sm:w-auto items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300"
          >
            Call us for a free demo
          </a>
        </div>
      </div>
    </section>
  );
}
