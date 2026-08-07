"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-20 pb-4 lg:pb-0 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 rounded-[40px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/circuit-board.svg')] bg-cover bg-no-repeat bg-center mix-blend-overlay"></div>
  
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl pt-0 -mt-12 lg:-mt-24 ml-10 lg:ml-20"
          >
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 mb-6 border border-white/20 rounded-full py-1.5 px-4 bg-white/5 backdrop-blur-sm">
              <span className="w-5 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-wider text-[13px] uppercase">Pinnacle Systems IT Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-6 relative">
              Custom ERP Software &    Digital  Transformation Services
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-10 leading-relaxed text-justify">
             Pinnacle Systems delivers custom ERP software, web development, mobile application development, digital marketing, Software & Hardware Integration and AI Automation that help businesses automate operations with defined business rules and accelerate growth.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 xl:gap-5 flex-wrap xl:flex-nowrap">
              <Link
                href="/under-construction"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 whitespace-nowrap text-[15px]"
              >
                Get a Free Consultation
              </Link>
              <Link
                href="/under-construction"
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.3)] hover:shadow-[0_0_30px_rgba(255,90,0,0.5)] transform hover:-translate-y-1 whitespace-nowrap text-[15px]"
              >
                Explore Our Services
              </Link>

              <button className="flex items-center gap-3 group whitespace-nowrap">
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
            className="relative hidden lg:block h-[550px] lg:h-[650px] w-full"
          >
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                {/* Smooth 8-lobed wavy circle */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    fill="#15192B" 
                    stroke="rgba(255, 255, 255, 0.15)" 
                    strokeWidth="1.5"
                    d="M 191.00,100.00 190.71,103.17 189.87,106.28 188.53,109.30 186.78,112.20 184.73,114.94 182.53,117.54 180.29,120.02 178.16,122.41 176.22,124.77 174.58,127.14 173.26,129.60 172.29,132.19 171.64,134.94 171.24,137.88 171.01,141.00 170.85,144.27 170.64,147.65 170.27,151.05 169.62,154.40 168.63,157.59 167.24,160.54 165.42,163.17 163.17,165.42 160.54,167.24 157.59,168.63 154.40,169.62 151.05,170.27 147.65,170.64 144.27,170.85 141.00,171.01 137.88,171.24 134.94,171.64 132.19,172.29 129.60,173.26 127.14,174.58 124.77,176.22 122.41,178.16 120.02,180.29 117.54,182.53 114.94,184.73 112.20,186.78 109.30,188.53 106.28,189.87 103.17,190.71 100.00,191.00 96.83,190.71 93.72,189.87 90.70,188.53 87.80,186.78 85.06,184.73 82.46,182.53 79.98,180.29 77.59,178.16 75.23,176.22 72.86,174.58 70.40,173.26 67.81,172.29 65.06,171.64 62.12,171.24 59.00,171.01 55.73,170.85 52.35,170.64 48.95,170.27 45.60,169.62 42.41,168.63 39.46,167.24 36.83,165.42 34.58,163.17 32.76,160.54 31.37,157.59 30.38,154.40 29.73,151.05 29.36,147.65 29.15,144.27 28.99,141.00 28.76,137.88 28.36,134.94 27.71,132.19 26.74,129.60 25.42,127.14 23.78,124.77 21.84,122.41 19.71,120.02 17.47,117.54 15.27,114.94 13.22,112.20 11.47,109.30 10.13,106.28 9.29,103.17 9.00,100.00 9.29,96.83 10.13,93.72 11.47,90.70 13.22,87.80 15.27,85.06 17.47,82.46 19.71,79.98 21.84,77.59 23.78,75.23 25.42,72.86 26.74,70.40 27.71,67.81 28.36,65.06 28.76,62.12 28.99,59.00 29.15,55.73 29.36,52.35 29.73,48.95 30.38,45.60 31.37,42.41 32.76,39.46 34.58,36.83 36.83,34.58 39.46,32.76 42.41,31.37 45.60,30.38 48.95,29.73 52.35,29.36 55.73,29.15 59.00,28.99 62.12,28.76 65.06,28.36 67.81,27.71 70.40,26.74 72.86,25.42 75.23,23.78 77.59,21.84 79.98,19.71 82.46,17.47 85.06,15.27 87.80,13.22 90.70,11.47 93.72,10.13 96.83,9.29 100.00,9.00 103.17,9.29 106.28,10.13 109.30,11.47 112.20,13.22 114.94,15.27 117.54,17.47 120.02,19.71 122.41,21.84 124.77,23.78 127.14,25.42 129.60,26.74 132.19,27.71 134.94,28.36 137.88,28.76 141.00,28.99 144.27,29.15 147.65,29.36 151.05,29.73 154.40,30.38 157.59,31.37 160.54,32.76 163.17,34.58 165.42,36.83 167.24,39.46 168.63,42.41 169.62,45.60 170.27,48.95 170.64,52.35 170.85,55.73 171.01,59.00 171.24,62.12 171.64,65.06 172.29,67.81 173.26,70.40 174.58,72.86 176.22,75.23 178.16,77.59 180.29,79.98 182.53,82.46 184.73,85.06 186.78,87.80 188.53,90.70 189.87,93.72 190.71,96.83 191.00,100.00 Z" 
                  />
                </svg>
              </motion.div>
            </div>
            
            <Image
              src="/hero-thumb.png"
              alt="IT Professional using tablet"
              fill
              className="object-contain object-bottom relative z-10 drop-shadow-2xl scale-[1.15] origin-bottom translate-y-8 mt-10"
              priority
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
