"use client";

import { motion } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discovery & Consultation",
    description: "We understand your Business, Challenges and Goals.",
  },
  {
    title: "Strategy & Planning",
    description: "We design a tailored Solution Roadmap and Timeline.",
  },
  {
    title: "Design & Development",
    description: "Our Team builds your Solution with regular check-Ins and Updates.",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Every Solution is rigorously tested before Launch.",
  },
  {
    title: "Go Live & Support",
    description: "We deploy your Solution and provide ongoing Support as you Scale.",
  },
];

export default function MethodologySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <h2 className={cn(theme.h2, "mb-4 sm:mb-6")}>
            Implementation <span className="text-primary">& Methodology</span>
          </h2>
          <div className="w-16 sm:w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full">
          <div className="relative">
            {/* Center Horizontal Line (hidden on small screens, shown on md+) */}
            <div className="absolute top-[116px] lg:top-[118px] left-[10%] right-[10%] h-1 bg-gray-100 hidden md:block rounded-full z-0 overflow-hidden">
               {/* Animated fill line */}
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                 className="absolute top-0 left-0 h-full bg-primary/30 rounded-full"
               ></motion.div>

               {/* Continuous Traveling Pulse */}
               <motion.div 
                 initial={{ left: "-25%" }}
                 whileInView={{ left: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                 className="absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
               ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 sm:gap-8 md:gap-4 lg:gap-6 xl:gap-8">
              {steps.map((step, index) => {
                const isLastOdd = index === steps.length - 1 && steps.length % 2 !== 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col items-center text-center group ${isLastOdd ? 'sm:col-span-2 md:col-span-1 sm:w-1/2 sm:mx-auto md:w-full' : ''}`}
                  >
                    {/* Top: Title */}
                    <div className="h-auto md:h-16 flex items-center md:items-end justify-center mb-3 md:mb-6 w-full">
                      <h3 className="text-[16px] sm:text-[17px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-bold text-[#0b132a] leading-snug px-1 whitespace-normal tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Middle: Timeline Dot */}
                    <div className="w-[56px] h-[56px] md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] bg-white border-4 border-primary rounded-full flex items-center justify-center font-bold text-[18px] sm:text-[20px] text-primary shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10 mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      {index + 1}
                    </div>

                    {/* Bottom: Description Card (Speech Bubble) */}
                    <div className="relative w-full max-w-[320px] sm:max-w-none flex-grow mt-1 md:mt-2 filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_15px_35px_rgba(255,90,0,0.12)] transition-all duration-300 group-hover:-translate-y-1.5">
                      {/* Triangle Pointer */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-5 md:h-5 bg-white rotate-45 rounded-tl-[4px]"></div>
                      
                      {/* Card Body */}
                      <div className="bg-white rounded-2xl md:rounded-xl lg:rounded-2xl p-5 md:px-2 md:py-4 lg:p-5 xl:p-6 h-full flex flex-col items-center justify-center relative z-10 overflow-hidden">
                        {/* Animated bottom border line on hover */}
                        <div className="absolute bottom-0 left-0 h-[3px] bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                        
                        <p className={cn(theme.p, "text-black text-[14px] leading-snug tracking-normal !text-center !indent-0")}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
