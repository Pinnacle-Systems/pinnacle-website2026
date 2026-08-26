"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ErpHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-900 rounded-b-[40px] pt-28 pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col gap-12">
          {/* Top Row: Title Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wider mb-6 border border-blue-500/20">
                SMART ERP PLATFORM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
                AI-Powered Custom ERP Software Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Business.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-2xl mx-auto lg:ml-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-navy-800/50 backdrop-blur-sm border border-white/10">
                <Image 
                  src="/erp-dashboard.jpg" 
                  alt="AI-Powered Custom ERP Dashboard" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Description & CTAs */}
          <div className="w-full text-center lg:text-left mt-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed w-full"
            >
              Off-the-shelf ERP software often forces businesses to change their workflows to fit the system. Our AI-powered custom ERP software is built around your business processes, connecting Sales, Inventory, Production, Finance, HR, and Operations on one intelligent platform. From workflow automation and real-time reporting to AI-driven insights and predictive capabilities, we develop ERP solutions that adapt to how your business actually works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+1234567890"
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm border border-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                Call us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
