"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the investment required for a Custom ERP System?",
    answer: "The cost depends on your business requirements, modules, integrations, users and level of customization."
  },
  {
    question: "How do you develop an ERP system tailored to my business needs?",
    answer: "We develop the ERP around your specific workflows, requirements, modules and business processes, ensuring a solution that fits your operations."
  },
  {
    question: "Is Custom ERP scalable?",
    answer: "Yes. The system can grow with your business by adding users, modules, branches and new features."
  },
  {
    question: "Will the ERP system belong to my business?",
    answer: "Yes. The ERP system is built for your business, giving you full ownership and control based on the agreed terms."
  }
];

export default function ErpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "mb-4 sm:mb-6")}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-3 sm:mb-4"
              >
                <div
                  className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between p-4 sm:p-5">
                    <h4 className="text-[#0b132a] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-snug pr-4">{faq.question}</h4>
                    <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-1 sm:ml-3">
                      <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                      <div className={`absolute h-full w-[2px] sm:w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>
                        <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal")}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="tel:+1234567890"
            className="inline-flex w-full sm:w-auto items-center justify-center bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Call for a Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
