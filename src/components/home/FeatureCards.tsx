"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Megaphone, MessageSquare, CloudCog, Cpu, Server, Target, Code, Globe, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { theme } from "@/theme";

function AnimatedNumber({ value, duration = 2000 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setCount(Math.floor(easeProgress * value));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

const features = [

  {
    icon: ShieldCheck,
    title: "Custom Erp Software",
    description: "AI-powered ERP tailored to your business workflow",
    link: "/custom-erp-software"
  },
  {
    icon: Code,
    title: "Web Application",
    description: "Scalable and interactive Web Applications built to streamline business operations",
    link: "/services/web-application"
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, secure Websites that convert visitors into Customers",
    link: "/services/website-development"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross platform Apps for IOS and Android",
    link: "/services/mobile-app-development"
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "AI-driven SEO, Ads, and Content that grows you",
    link: "/digital-marketing-services-in-tirupur"
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
};

export default function FeatureCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="container mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Link href={feature.link} key={index} className="contents">
              <motion.div
                variants={cardVariants}
                whileHover={{
                  zIndex: 10,
                }}
                className="group relative flex flex-col items-center justify-start text-center p-6 sm:p-5 lg:px-4 lg:py-6 bg-[#f4f5f7] rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer"
              >
                {/* Hover fill animation (bottom to top) */}
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none rounded-[inherit]"></div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-[1]"></div>

                <div className="relative z-10 w-full flex flex-col items-center">

                  {/* Soft light orange icon circle container */}
                  <div className="w-[64px] h-[64px] sm:w-[68px] sm:h-[68px] flex items-center justify-center mx-auto mb-4 rounded-full border border-[#ffdbcd] bg-[#ffefe8] group-hover:bg-[#0b132a] group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300 shrink-0">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.75]" />
                  </div>

                  <h3 className="text-[16px] py-1 font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>

                  <p className={cn(theme.p, "text-black")}>
                    {feature.description}
                  </p>

                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-12 sm:mt-16 lg:mt-24 relative overflow-hidden bg-gradient-to-br from-[#0b132a] to-[#1a233a] rounded-[28px] sm:rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-6 sm:p-10 lg:p-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 border border-white/10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Stat 1 */}
        <div className="text-center relative z-10 group px-2">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={9} />+
          </div>
          <div className="text-gray-300 font-bold tracking-wider uppercase text-[11px] sm:text-[13px]">Years of Experience</div>
        </div>

        {/* Stat 2 */}
        <div className="text-center relative z-10 group px-2 md:border-l md:border-white/10">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={90} />+
          </div>
          <div className="text-gray-300 font-bold tracking-wider uppercase text-[11px] sm:text-[13px]">Happy Clients</div>
        </div>

        {/* Stat 3 */}
        <div className="text-center relative z-10 group px-2 md:border-l md:border-white/10">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={120} />+
          </div>
          <div className="text-gray-300 font-bold tracking-wider uppercase text-[11px] sm:text-[13px]">Projects Delivered</div>
        </div>

        {/* Stat 4 */}
        <div className="text-center relative z-10 group px-2 md:border-l md:border-white/10">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={50} />+
          </div>
          <div className="text-gray-300 font-bold tracking-wider uppercase text-[11px] sm:text-[13px]">Team Members</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
