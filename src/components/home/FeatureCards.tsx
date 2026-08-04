"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Megaphone, MessageSquare, CloudCog, Cpu, Server, Target, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Textile ERP Software",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: Megaphone,
    title: "Payroll Management Software",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: MessageSquare,
    title: "CRM Software",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: CloudCog,
    title: "Financial Management Software",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: Cpu,
    title: "Cloud & IoT Solutions",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: Server,
    title: "Computer Hardware Solutions",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: Target,
    title: "Digital Marketing Services",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Monotonectally Pinnacle Systems in fermentum quis",
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
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                zIndex: 10,
              }}
              className="group relative flex flex-col items-center justify-center text-center px-4 py-8 bg-[#f8f9fa] hover:bg-primary transition-all duration-300 rounded-xl shadow-sm w-full h-full border border-gray-100 hover:border-primary overflow-hidden"
            >
              {/* Background pattern always visible */}
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.15] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit]"></div>
              
              <div className="relative z-10 w-full flex flex-col items-center">
               

                {/* White ring around the icon */}
                <div className="w-[72px] h-[72px] flex items-center justify-center mx-auto mb-5 rounded-full border-[3px] border-white shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-white/10 group-hover:bg-[#0b132a] transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                </div>
                
                <h3 className="text-base lg:text-[15px] font-bold text-[#0b132a] group-hover:text-white mb-2.5 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
