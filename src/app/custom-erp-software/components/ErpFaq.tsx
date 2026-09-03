"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { theme } from "@/theme";

const faqs = [
  {
    question: "What is the investment required for a Custom ERP System?",
    answer: "The cost depends on your business requirements, modules, integrations, users, and level of customization."
  },
  {
    question: "How do you develop an ERP system tailored to my business needs?",
    answer: "We develop the ERP around your specific workflows, requirements, modules, and business processes, ensuring a solution that fits your operations."
  },
  {
    question: "Is Custom ERP scalable?",
    answer: "Yes. The system can grow with your business by adding users, modules, branches, and new features."
  },
  {
    question: "Will the ERP system belong to my business?",
    answer: "Yes. The ERP system is built for your business, giving you full ownership and control based on the agreed terms."
  }
];

export default function ErpFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${theme.h2} mb-6`}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors text-left"
              >
                <span className="font-semibold text-lg text-navy-900 pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${openIndex === index ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white/50 border border-t-0 border-gray-100 rounded-b-2xl -mt-2">
                      <p className="text-gray-600 pt-2">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Call for a Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
