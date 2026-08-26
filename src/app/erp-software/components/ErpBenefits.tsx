"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lock, Blocks, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
          >
            Why Businesses Trust Our Custom ERP Software
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto mb-12">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="tel:+1234567890"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all duration-300"
          >
            Call us for a free demo
          </Link>
        </div>
      </div>
    </section>
  );
}
