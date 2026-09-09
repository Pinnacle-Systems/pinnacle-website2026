"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Zap,
  Phone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

export default function DigitalMarketingHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a]  pt-32 pb-10 sm:pb-14">
      {/* Background Banner Image */}
      <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
        <Image
          src="/images/page-1/DIGHTALMARKETING.webp"
          alt="Digital Marketing Company in Tiruppur"
          fill
          priority
          className="content-fit"
        />
      </div>

      {/* Background Decorative Ambient Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left lg:-ml-2 xl:-ml-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>DIGITAL GROWTH AGENCY</span>
            </div>

            <h1 className={cn(theme.h1, "text-white")}>
              Digital Marketing Services in Tiruppur{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                That Helps Your Business Grow
              </span>
            </h1>

            <p className={theme.p}>
              Pinnacle Systems helps businesses in Tiruppur build a stronger presence online and connect with the people who matter to their business. We provide digital marketing services that bring together search, paid advertising, social media, content, and website optimization based on your goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="?contact=true" scroll={false}
                className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 uppercase"
              >
                Get Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+919994610733"
                className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide border border-white/15 backdrop-blur-sm transition-all duration-300 uppercase"
              >
                <Phone className="w-4 h-4 group-hover:-rotate-12 transition-transform text-blue-400" />
                Call +91 9994610733
              </Link>
            </div>

            {/* Micro Feature Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>AI-Driven SEO Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>High ROAS PPC Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Transparent Monthly Reports</span>
              </div>
            </div>
          </motion.div>

       
        </div>
      </div>
    </section>
  );
}
