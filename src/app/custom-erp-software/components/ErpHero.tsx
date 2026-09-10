"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

export default function ErpHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
      {/* Background Banner Image */}
      <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
        <Image
          src="/images/erp-software/CUSTOMERP.webp"
          alt="AI-Powered Custom ERP Dashboard"
          fill
          priority
          className="content-fit  mix-blend-overlay"
        />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
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

            <h1 className={cn(theme.h1, "text-white")}>
              AI-Powered Custom ERP Software Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Your Business.
              </span>
            </h1>

            <p className={theme.p}>
              Off-the-shelf ERP software often forces businesses to change their workflows to fit the system. Our AI-powered custom ERP software is built around your business processes, connecting Sales, Inventory, Production, Finance, HR and Operations on one intelligent platform. From workflow automation and real-time reporting to AI-driven insights and predictive capabilities, we develop ERP solutions that adapt to how your business actually works.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link
                href="?contact=true" scroll={false}
                className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 uppercase text-center"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+1234567890"
                className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm tracking-wide border border-white/15 backdrop-blur-sm transition-all duration-300 uppercase text-center"
              >
                <Phone className="w-4 h-4 group-hover:-rotate-12 transition-transform text-blue-400" />
                <span>Call Us</span>
              </Link>
            </div>

            {/* Micro Feature Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300 text-xs sm:text-sm font-medium">
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
        </div>
      </div>
    </section>
  );
}
