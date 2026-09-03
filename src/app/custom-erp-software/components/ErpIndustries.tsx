"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Shirt, TrendingUp, ShoppingCart, HardHat, Cog, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  { name: "Manufacturing", icon: <Factory className="w-6 h-6" />, image: "/images/erp-software/manufacturing.jpg" },
  { name: "Trading", icon: <TrendingUp className="w-6 h-6" />, image: "/images/erp-software/trading.jpg" },
  { name: "Retail", icon: <ShoppingCart className="w-6 h-6" />, image: "/images/erp-software/retail.jpg" },
  { name: "Construction", icon: <HardHat className="w-6 h-6" />, image: "/images/erp-software/construction.jpg" },
];

export default function ErpIndustries() {
  return (
    <section className="pt-24 pb-8 bg-white relative">
      <div className="container mx-auto px-4">

        {/* General Industries */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-navy-900 mb-6"
            >
              Other Industries We Serve
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-100 min-h-[240px] flex items-end p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                <div className="relative z-10 w-full">
                  <h3 className="font-bold text-2xl text-white tracking-wide drop-shadow-sm group-hover:translate-y-0 transition-transform duration-300">{ind.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Textile Specialty */}
        <div className="bg-navy-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-medium text-sm mb-6">
                <Shirt className="w-4 h-4" />
                Industry Focus
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                We specialize in ERP Software for the <span className="text-blue-400">Textile Industry</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                We specialize exclusively in AI-powered ERP solutions engineered specifically for the textile industry. Unlike generic software retrofitted for manufacturing, our systems are meticulously designed around the actual operational realities of textile businesses.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We support the entire production lifecycle from initial yarn procurement and knitting to dyeing, finishing, and final dispatch, equipping your operations with purpose-built tools.
              </p>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 whitespace-nowrap text-[15px]"
              >
                Book a Free Textile ERP Demo
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {[
                { title: "End-to-End Traceability", desc: "AI-driven batch tracking across the entire supply chain.", icon: <ShieldCheck /> },
                { title: "Intelligent Cost Control", desc: "Predictive wastage monitoring and real-time production and cost visibility.", icon: <TrendingUp /> },
                { title: "Operational Scalability", desc: "Streamlined job-work tracking and multi-unit management.", icon: <Cog /> },
                { title: "Seamless Compliance", desc: "Built-in invoicing and automated e-way bill generation.", icon: <Zap /> },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
