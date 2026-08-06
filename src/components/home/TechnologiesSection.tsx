"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FaReact, FaAngular, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaServer } from "react-icons/fa";
import { SiJavascript, SiPostgresql } from "react-icons/si";

const technologies = [
  { name: "React", Icon: FaReact, brand: "text-[#61DAFB]" },
  { name: "Angular", Icon: FaAngular, brand: "text-[#DD0031]" },
  { name: "Node.js", Icon: FaNodeJs, brand: "text-[#339933]" },
  { name: "JavaScript", Icon: SiJavascript, brand: "text-[#F7DF1E]" },
  { name: "Python", Icon: FaPython, brand: "text-[#3776AB]" },
  { name: "SQL", Icon: FaDatabase, brand: "text-[#003B57]" },
  { name: "PostgreSQL", Icon: SiPostgresql, brand: "text-[#4169E1]" },
  { name: "Git", Icon: FaGitAlt, brand: "text-[#F05032]" },
  { name: "VPS", Icon: FaServer, brand: "text-[#8A2BE2]" },
];

export default function TechnologiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Text) */}
          <div>
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
              Technologies We <span className="text-primary">Work With</span>
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mb-8"></div>
            <p className="text-gray-500 text-[17px] leading-relaxed text-justify">
              We use modern technologies, proven frameworks, and industry best practices to build high-performance software solutions. From custom ERP systems and mobile applications to web platforms and system integrations, we choose the right technology stack to deliver secure, scalable, and future-ready solutions that support your business growth.
            </p>
          </div>

          {/* Right Column (Orbiting Globe) */}
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-square mx-auto flex items-center justify-center mt-10 lg:mt-0">
            
            {/* Center Globe */}
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center z-20">
              <Globe className="w-14 h-14 sm:w-16 sm:h-16 text-primary animate-[spin_15s_linear_infinite]" />
            </div>

            {/* Orbiting Track (Outer container spinning) */}
            <div className="absolute inset-4 sm:inset-0 animate-[spin_30s_linear_infinite] z-30">
              {technologies.map((tech, index) => {
                const angle = (index * 360) / technologies.length;
                return (
                  <div 
                    key={tech.name}
                    className="absolute inset-0 flex justify-center"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Element at radius */}
                    <div className="absolute top-0 -mt-6 sm:-mt-8 w-12 h-12 sm:w-16 sm:h-16">
                      {/* Fixed counter-rotation for starting angle */}
                      <div className="w-full h-full" style={{ transform: `rotate(-${angle}deg)` }}>
                        {/* Dynamic counter-rotation to stay upright */}
                        <div className="w-full h-full animate-[spin_30s_linear_infinite_reverse]">
                          {/* The Logo Box */}
                          <div className="w-full h-full bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center group hover:scale-110 hover:border-primary/30 transition-all duration-300">
                            <tech.Icon className={`w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm ${tech.brand}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Subtle orbital rings */}
            <div className="absolute inset-8 sm:inset-6 lg:inset-4 rounded-full border border-gray-200/80 pointer-events-none z-0"></div>
            <div className="absolute inset-16 sm:inset-16 lg:inset-16 rounded-full border border-gray-200/50 pointer-events-none z-0"></div>
            <div className="absolute inset-24 sm:inset-28 lg:inset-32 rounded-full border border-gray-200/30 pointer-events-none z-0"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
