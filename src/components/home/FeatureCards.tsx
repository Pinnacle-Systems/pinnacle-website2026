"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Megaphone, MessageSquare, CloudCog, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ShieldCheck,
    title: "Data Security",
    description: "Monotonectally solutek in fermentum quis",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Monotonectally solutek in fermentum quis",
  },
  {
    icon: MessageSquare,
    title: "IT Consultation",
    description: "Monotonectally solutek in fermentum quis",
  },
  {
    icon: CloudCog,
    title: "Cloud Services",
    description: "Monotonectally solutek in fermentum quis",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "Monotonectally solutek in fermentum quis",
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
              }}
              className="group relative flex flex-col items-center text-center p-8 bg-white/95 hover:bg-primary transition-all duration-300 rounded-xl shadow-[0_5px_30px_rgba(0,0,0,0.05)] cursor-pointer border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* Background pattern on hover */}
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none rounded-[inherit]"></div>
              
              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Decorative elements for the 'Technology' card (index 4) */}
                {index === 4 && (
                  <>
                    <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full border border-primary/40 group-hover:border-white/40"></div>
                    <div className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white"></div>
                  </>
                )}

                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-5 rounded-full border border-transparent group-hover:border-white/50 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90 text-[15px] leading-relaxed transition-colors duration-300 px-2">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
