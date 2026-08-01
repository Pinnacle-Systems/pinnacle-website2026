"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/circuit-board.svg')] bg-cover bg-no-repeat bg-center mix-blend-overlay"></div>
        
        {/* Floating Decorative Elements matching the design */}
        {/* Thin orange circle ring near the top left */}
        <div className="absolute top-16 left-[20%] w-12 h-12 rounded-full border border-primary/60 hidden lg:block"></div>
        {/* Small solid orange dot slightly below and right of the ring */}
        <div className="absolute top-32 left-[25%] w-1.5 h-1.5 bg-primary rounded-full hidden lg:block"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl pt-20"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 mb-6 border border-white/20 rounded-full py-1.5 px-4 bg-white/5 backdrop-blur-sm">
              <span className="w-5 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-wider text-[13px] uppercase">Solutek IT Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 relative">
              The Beauty Behind <br /> IT Services.
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-10 leading-relaxed pr-8">
              Where your interests international networks intersect provid custom software solutions for any value software.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8">
              <Link
                href="/explore"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1"
              >
                EXPLORE MORE
              </Link>

              <button className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center transition-colors relative">
                  <div className="absolute inset-1 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-hover transition-colors">
                    <Play className="w-5 h-5 text-white ml-1 relative z-10" fill="currentColor" />
                  </div>
                </div>
                <span className="text-gray-300 font-bold text-[13px] tracking-widest uppercase group-hover:text-white transition-colors underline underline-offset-4 decoration-gray-600 group-hover:decoration-gray-400">WATCH VIDEO</span>
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] opacity-20 pointer-events-none">
              {/* Specific scalloped wavy dark shape with stroke */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path 
                  fill="#101935" 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth="0.5"
                  d="M48.7,-64.1C62,-54.2,70.9,-38.7,75,-22.1C79.1,-5.5,78.4,12.2,70.8,27.1C63.2,41.9,48.7,53.8,32.7,62.1C16.6,70.4,-0.9,74.9,-17.7,71.5C-34.5,68.2,-50.5,56.9,-61.7,42.5C-72.9,28.1,-79.3,10.6,-78.3,-6.4C-77.3,-23.4,-68.9,-39.8,-56.3,-50C-43.6,-60.1,-26.8,-64,-10.1,-62.7C6.5,-61.3,23.1,-54.6,35.4,-74Z" 
                  transform="translate(100 100) scale(1.1)" 
                />
              </svg>
            </div>
            {/* 
              Make sure to place 'hero-man.png' in the public folder.
            */}
            <Image
              src="/hero-thumb.png"
              alt="IT Professional using tablet"
              fill
              className="object-contain object-bottom relative z-10 drop-shadow-2xl"
              priority
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
