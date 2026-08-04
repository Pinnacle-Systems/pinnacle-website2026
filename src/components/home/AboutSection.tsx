"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CloudCog } from "lucide-react";

const RadarBackground = () => (
  <motion.svg 
    viewBox="0 0 500 500" 
    className="w-full h-full text-[#0b132a]"
    animate={{ rotate: 360 }}
    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
  >
    {/* Outer thin dashed ring */}
    <circle cx="250" cy="250" r="230" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
    
    {/* Thick segmented ring */}
    <circle cx="250" cy="250" r="190" fill="none" stroke="currentColor" strokeWidth="16" strokeDasharray="20 16" />
    
    {/* Inner thin dashed ring */}
    <circle cx="250" cy="250" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
    
    {/* Solid thin inner rings */}
    <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="250" cy="250" r="120" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </motion.svg>
);

export default function AboutSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Decorative Radar SVG */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-[15%] lg:-right-[10%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.04] pointer-events-none">
        <RadarBackground />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:-ml-10 xl:-ml-20"
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-[1.1/1] max-w-2xl mx-auto">
              <Image 
                src="/men-women.png" 
                alt="Essential IT Solutions" 
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[540px] lg:-ml-4 xl:-ml-10"
          >
            {/* Subtitle Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Pinnacle Systems COMPANY</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-[42px] leading-[1.15] font-extrabold text-[#0b132a] mb-6">
              Essential IT Solutions For <br className="hidden sm:block" />
              Modern <span className="text-primary">Businesses.</span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-500 text-[15.5px] leading-relaxed mb-10 pr-4">
              Monotonectally repurpose maintainable infrastruct whereas Pinnacle Systems in fermentum quis tempo sapien maximus design.
            </p>

            {/* Feature Block */}
            <div className="flex items-start gap-5 mb-10">
              <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center rounded-[20px] bg-[#fff3ef] text-primary">
                <CloudCog className="w-9 h-9 stroke-[1.5]" />
              </div>
              <div className="pt-1.5">
                <h4 className="text-[20px] font-bold text-[#0b132a] mb-2.5">Cloud Based Solution</h4>
                <p className="text-gray-500 text-[15px] leading-[1.7] pr-2">
                  Monotonectally repurpose maintainable infrastruct whereas Pinnacle Systems in fermentum quis tempo sapien maximus design.
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-primary hover:bg-orange-600 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-primary/20">
              EXPLORE MORE
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
