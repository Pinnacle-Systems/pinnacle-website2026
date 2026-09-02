"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ErpHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] rounded-b-[40px] lg:rounded-b-[56px] pt-32 pb-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>SMART ERP PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6">
              AI-Powered Custom ERP Software Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Your Business.
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl font-normal">
              Off-the-shelf ERP software often forces businesses to change their workflows to fit the system. Our AI-powered custom ERP software is built around your business processes, connecting Sales, Inventory, Production, Finance, HR, and Operations on one intelligent platform. From workflow automation and real-time reporting to AI-driven insights and predictive capabilities, we develop ERP solutions that adapt to how your business actually works.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 uppercase"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+1234567890"
                className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-white/15 backdrop-blur-sm transition-all duration-300 uppercase"
              >
                <Phone className="w-4 h-4 group-hover:-rotate-12 transition-transform text-blue-400" />
                Call Us
              </Link>
            </div>

            {/* Micro Feature Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Tailored Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Real-Time AI Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Zero Downtime Migration</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual / Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[28px] blur-xl opacity-30 hover:opacity-50 transition duration-500"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-[#11192F] border border-white/15">
                <Image 
                  src="/erp-dashboard.jpg" 
                  alt="AI-Powered Custom ERP Dashboard" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-[#0b132a]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Workflow Efficiency</div>
                  <div className="text-sm font-bold text-white">+48% Productivity</div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 bg-[#0b132a]/90 backdrop-blur-md border border-white/15 p-3.5 px-4 rounded-2xl shadow-xl z-20"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="text-xs font-semibold text-white">Live AI Analytics</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
