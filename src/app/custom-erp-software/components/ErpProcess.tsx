"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldAlert, Rocket, Headset } from 'lucide-react';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    icon: <Search />,
    title: "Discovery & Process Mapping",
    desc: "We analyze your current workflows, bottlenecks and data silos, identifying opportunities for AI and automation to understand your business needs."
  },
  {
    icon: <PenTool />,
    title: "ERP Architecture & Planning",
    desc: "We design the right system architecture and select the modules, including AI capabilities, your business actually needs."
  },
  {
    icon: <Code2 />,
    title: "Development and Integration",
    desc: "We design your ERP with an agile method, including AI-driven features. We also provide regular demonstrations as well as seamless integration with existing software."
  },
  {
    icon: <ShieldAlert />,
    title: "Testing & Quality Assurance",
    desc: "We test thoroughly for every module, workflow and AI feature, as well as the roles of users, to ensure the security of your ERP."
  },
  {
    icon: <Rocket />,
    title: "Deployment & Training",
    desc: "We provide smooth go-live support and practical team training, including how to use AI-powered tools to ensure quick and effective adoption."
  },
  {
    icon: <Headset />,
    title: "Ongoing Support & Scaling",
    desc: "We provide continuous support, AI model improvements, enhancements and scalability as your business grows."
  }
];

export default function ErpProcess() {
  return (
    <section className="py-16 sm:py-24 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "mb-4 sm:mb-6 text-white")}
          >
            How We Build Your Custom ERP System
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-[1536px] w-full mx-auto relative z-10">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl hover:bg-white/10 transition-colors relative group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 sm:-top-8 text-8xl sm:text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                {index + 1}
              </div>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 sm:mb-6 relative z-10">
                {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 relative z-10 text-white">{step.title}</h3>
              <p className={cn(theme.p, "text-[14px] sm:text-[15px] leading-relaxed text-gray-300")}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
