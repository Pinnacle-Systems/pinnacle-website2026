"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

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
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-white">
      {/* Background Decorative Radar SVG */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-50%] sm:-right-[15%] lg:-right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] opacity-[0.03] sm:opacity-[0.04] pointer-events-none">
        <RadarBackground />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative w-full ml-0 lg:-ml-10 xl:-ml-20"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[1.1/1] max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
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
            className="max-w-2xl lg:max-w-[750px] w-full mx-auto lg:mx-0 lg:-ml-4 xl:-ml-10 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Subtitle Pill */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-red-100/60 mb-5 sm:mb-6 bg-white shadow-sm w-fit">
              <div className="w-3 sm:w-4 h-[2px] sm:h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.1em] sm:tracking-[0.15em] uppercase">Pinnacle Systems COMPANY</span>
            </div>

            {/* Heading */}
            <h2 className={cn(theme.h2, "mb-5 sm:mb-6 text-center lg:text-left")}>
              Your One-Stop <span className="text-primary">Technology Partner</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-2 sm:space-y-3 mb-8 lg:mb-10 text-left">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                <p className={cn(theme.p, "text-[14px] sm:text-[17px] text-black")}>
                  We specialize in delivering innovative AI-driven, Cloud-based, Mobile, and Web Application Development services tailored for different Industry verticals.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                <p className={cn(theme.p, "text-[14px] sm:text-[17px] text-black")}>
                  Our deep-experienced team of professionals is dedicated to transforming ideas into Scalable Digital Solutions with Rapid Delivery and Exceptional Quality.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                <p className={cn(theme.p, "text-[14px] sm:text-[17px] text-black")}>
                  Our presence in the region and our commitment to excellence allow us to analyze the Local Market&apos;s Dynamics and provide Solutions that help drive growth.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                <p className={cn(theme.p, "text-[14px] sm:text-[17px] text-black")}>
                  We prioritize Cutting-Edge Technology Adoption and Agile Methodologies to meet Client objectives Efficiently.
                </p>
              </div>
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="mt-1.5 sm:mt-2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                <p className={cn(theme.p, "text-[14px] sm:text-[17px] text-black")}>
                  At Pinnacle Systems, we don’t just build Software — we create Competitive Advantages that position our Clients for sustainable Success in an evolving Digital landscape.
                </p>
              </div>
            </div>

            {/* Button */}
            <Link href="/under-construction" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold text-[14px] sm:text-[15px] px-8 sm:px-9 py-3.5 sm:py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-primary/20 text-center w-full sm:w-auto">
              Explore Our Services
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
