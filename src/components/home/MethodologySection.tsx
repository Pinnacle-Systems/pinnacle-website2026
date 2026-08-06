"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Consultation",
    description: "We understand your business, challenges, and goals.",
  },
  {
    title: "Strategy & Planning",
    description: "We design a tailored solution roadmap and timeline.",
  },
  {
    title: "Design & Development",
    description: "Our team builds your solution with regular check-ins and updates.",
  },
  {
    title: "Testing & Quality Assurance",
    description: "Every solution is rigorously tested before launch.",
  },
  {
    title: "Go Live & Support",
    description: "We deploy your solution and provide ongoing support as you scale.",
  },
];

export default function MethodologySection() {
  return (
    <section className="py-16 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-2 lg:mb-4">
          <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
            Implementation <span className="text-primary">& Methodology</span>
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full">
          <div className="relative">
            {/* Center Horizontal Line (hidden on small screens, shown on md+) */}
            <div className="absolute top-[114px] left-[10%] right-[10%] h-1 bg-gray-100 hidden md:block rounded-full z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
              {steps.map((step, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col items-center text-center group mb-8 md:mb-0"
                  >
                    {/* Top: Title */}
                    <div className="h-16 flex items-end justify-center mb-6 w-full">
                      <h3 className="text-[15px] md:text-[13px] lg:text-[15px] xl:text-[16px] font-bold text-[#0b132a] leading-tight px-2 whitespace-nowrap tracking-tight">
                        {step.title}
                      </h3>
                    </div>

                    {/* Middle: Timeline Dot */}
                    <div className="w-14 h-14 bg-white border-4 border-primary rounded-full flex items-center justify-center font-bold text-xl text-primary shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10 mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </div>

                    {/* Bottom: Description Card */}
                    <div className="bg-[#f8f9fa] rounded-[24px] p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1 w-full flex-grow flex items-start justify-center">
                      <p className="text-gray-500 text-[14.5px] leading-relaxed">
                        {step.description}
                      </p>
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
