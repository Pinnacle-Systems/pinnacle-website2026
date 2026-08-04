"use client";

import { motion } from "framer-motion";
import { MonitorDot, MonitorCog, Rocket, Cpu, Plus } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: MonitorDot,
  },
  {
    title: "IT Management",
    description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: MonitorCog,
  },
  {
    title: "Digital Marketing",
    description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: Rocket,
  },
  {
    title: "App Development",
    description: "Marketing repurpose success in professions whereas in services sapien maximus design.",
    icon: Cpu,
  },
];

const BackgroundDecorations = () => (
  <>
    {/* Left Top Curved Line */}
    <svg className="absolute top-0 left-0 w-64 h-64 text-primary/20 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,0 C 50,100 150,100 200,200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
    
    {/* Right Bottom Shape */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-bl-[100px] opacity-40 pointer-events-none transform translate-x-32 -translate-y-32"></div>

    {/* Floating Plus Left */}
    <div className="absolute top-1/4 left-[5%] flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm text-primary">
      <Plus className="w-5 h-5" />
    </div>

    {/* Floating Plus Right */}
    <div className="absolute bottom-1/4 right-[5%] flex items-center justify-center w-10 h-10 border border-primary/40 rounded-full text-primary">
      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
    </div>
  </>
);

export default function ServicesSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-[#f8f9fa] overflow-hidden">
      <BackgroundDecorations />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
            <div className="w-4 h-[3px] bg-primary rounded-full"></div>
            <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Pinnacle Systems COMPANY</span>
          </div>
          <h2 className="text-3xl lg:text-[42px] leading-[1.2] font-extrabold text-[#0b132a]">
            How Professional IT Services<br />
            Can Drive <span className="text-primary">Success.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[24px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group relative z-0 overflow-hidden cursor-pointer"
              >
                {/* Hover Background with X pattern */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                  <div className="absolute inset-0 bg-[conic-gradient(from_45deg,transparent_25%,rgba(255,255,255,0.08)_25%,rgba(255,255,255,0.08)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.08)_75%)]"></div>
                </div>

                <div className="mb-6 relative z-10">
                  <Icon className="w-12 h-12 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0b132a] group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90 transition-colors duration-300 text-[15px] leading-relaxed mb-8 relative z-10">
                  {service.description}
                </p>
                
                <button className="flex items-center relative z-10">
                  <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-[#fff3ef] text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                    <Plus className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[13px] tracking-wide text-white overflow-hidden whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-3 transition-all duration-300">
                    READ MORE
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
