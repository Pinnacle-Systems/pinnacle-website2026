"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Megaphone, MessageSquare, CloudCog, Cpu, Server, Target, Code } from "lucide-react";
import { cn } from "@/lib/utils";

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
    title: "Customized ERP Solution",
    description: "AI-powered ERP tailored to your business workflow",
  },
  
  
 
 
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, secure websites that convert visitors into customers",
  },
  {
    icon: Code,
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android",
  },
   {
    icon: Target,
    title: "Digital Marketing",
    description: "AI-driven SEO, ads, and content that grow you",
  },
   {
    icon: Target,
    title: "Integration Services",
    description: "Connect your systems into one seamless data ecosystem",
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
    transition: { duration: 0.5, ease: "easeOut" }
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                zIndex: 10,
              }}
              className="group relative flex flex-col items-center justify-start text-center px-2 py-2 bg-[#f4f5f7] hover:bg-primary rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit]"></div>
              
              <div className="relative z-10 w-full flex flex-col items-center">
               
                {/* White ring around the icon */}
                <div className="w-[72px] h-[72px] flex items-center justify-center mx-auto mb-3 rounded-full border-[2px] border-white shadow-[0_0_15px_rgba(255,255,255,0.7)] bg-transparent group-hover:bg-[#0b132a] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                </div>
                
                <h3 className="text-[16px] py-1 font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-[#64748b] px-2 group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed">
                  {feature.description}
                </p>
                
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 lg:mt-24 relative overflow-hidden bg-gradient-to-br from-[#0b132a] to-[#1a233a] rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-10 lg:p-14 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 border border-white/10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.05] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
        
        {/* Stat 1 */}
        <div className="text-center flex-1 relative z-10 group">
          <div className="text-5xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={9} />+
          </div>
          <div className="text-gray-300 font-bold tracking-widest uppercase text-[13px]">Years of Experience</div>
        </div>
        
        <div className="w-full md:w-px h-px md:h-20 bg-white/10 relative z-10"></div>
        
        {/* Stat 2 */}
        <div className="text-center flex-1 relative z-10 group">
          <div className="text-5xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={90} />+
          </div>
          <div className="text-gray-300 font-bold tracking-widest uppercase text-[13px]">Happy Clients</div>
        </div>
        
        <div className="w-full md:w-px h-px md:h-20 bg-white/10 relative z-10"></div>
        
        {/* Stat 3 */}
        <div className="text-center flex-1 relative z-10 group">
          <div className="text-5xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={120} />+
          </div>
          <div className="text-gray-300 font-bold tracking-widest uppercase text-[13px]">Projects Delivered</div>
        </div>
        
        <div className="w-full md:w-px h-px md:h-20 bg-white/10 relative z-10"></div>
        
        {/* Stat 4 */}
        <div className="text-center flex-1 relative z-10 group">
          <div className="text-5xl font-extrabold text-white mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <AnimatedNumber value={50} />+
          </div>
          <div className="text-gray-300 font-bold tracking-widest uppercase text-[13px]">Team Members</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
