"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Layout, Server, Shield, Zap, Search, PenTool, Code, CheckSquare, Rocket, MonitorSmartphone, Settings, Database, RefreshCw, BarChart, Users, DollarSign, MousePointerClick } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WebApplicationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is web application development?", a: "The process of building interactive, browser-based software — like CRMs, dashboards, and SaaS platforms — rather than static websites." },
    { q: "How is a web application different from a website?", a: "A website is mainly informational, while a web app is interactive, letting users log in, input data, and perform tasks with backend logic." },
    { q: "How long does it take to build a web application?", a: "Simple apps take 4-8 weeks; complex, enterprise-grade apps can take 3-6 months or more, depending on scope." },
    { q: "How much does it cost to develop a web application?", a: "Cost depends on features, integrations, and tech stack — reach out for a free consultation and custom quote." },
    { q: "Which technologies do you use for web application development?", a: "React, Next.js, Node.js, PHP/Laravel, and Python — chosen based on your project's scale and goals." },
    { q: "Can you upgrade or modernize our existing web application?", a: "Yes, we modernize legacy systems for better performance, security, and scalability without disrupting operations." },
    { q: "Do you provide support and maintenance after launch?", a: "Yes, including bug fixes, performance monitoring, security updates, and feature enhancements post-launch." },
    { q: "Is my data secure with a custom-built web application?", a: "Yes, security is built in from day one, including secure authentication, encryption, and data-protection best practices." },
    { q: "Can you integrate third-party tools and APIs into my web application?", a: "Yes, we regularly integrate payment gateways, CRMs, analytics tools, and other third-party APIs based on your workflow needs." },
    { q: "Will my web application be scalable as my business grows?", a: "Yes, we design with future growth in mind, using scalable architecture that supports more users, data, and features over time." }
  ];

  const processes = [
    { title: "Requirement Analysis", icon: Search },
    { title: "UI/UX Design", icon: PenTool },
    { title: "Development", icon: Code },
    { title: "Testing & QA", icon: CheckSquare },
    { title: "Deployment & Support", icon: Rocket }
  ];

  const services = [
    "Custom web application development",
    "SaaS application development",
    "Enterprise web application development",
    "CRM & ERP development",
    "API development & integration",
    "Web app maintenance & support",
    "Legacy application modernization"
  ];

  const whyChooseUs = [
    { title: "Work Efficiency", desc: "Our skilled team of solution architects, developers, and QA engineers delivers robust web applications built for performance at scale.", icon: BarChart },
    { title: "Client Satisfaction", desc: "We're committed to our clients' success on every web app project, backed by in-depth business analysis and technical insight.", icon: Users },
    { title: "Affordable Price", desc: "We deliver enterprise-grade web applications within your budget, quoting competitive pricing without compromising on quality or security.", icon: DollarSign },
    { title: "Interactive UI/UX", desc: "Our creative designers turn complex workflows into intuitive, easy-to-use interfaces — built to improve efficiency and user adoption.", icon: MousePointerClick }
  ];

  return (
    <main className="min-h-screen bg-[#0b132a] text-white pt-24 pb-16 overflow-hidden">
      <Header />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Zap className="w-4 h-4" />
            <span>Expert Engineering</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "mb-8")}
          >
            Web Application Development Company
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-gray-300 text-center sm:text-center text-lg md:text-xl")}
          >
            Pinnacle Systems is a trusted web application development company that builds secure, scalable, and high-performing web apps engineered to streamline operations and drive business growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link 
              href="/contact" 
              className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 text-lg group px-10 py-5")}
            >
              Talk to Our Web App Development Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(theme.h2, "text-white mb-8 text-center")}
            >
              Top-Notch Web Application Development Company
            </motion.h2>

            <div className="space-y-6">
              {[
                "Pinnacle Systems is a leading web application development company, building robust, scalable web apps tailored to complex business needs.",
                "Web apps are performance-centric, user-focused, secure, and optimized for speed, functionality, and seamless integration.",
                "As a professional web application development partner, we go beyond simply building software — we engineer solutions that solve real business problems.",
                "Our development team brings deep experience in building custom, objective-driven, and enterprise-grade web applications tailored to your goals.",
                "Developers are proficient in React, Next.js, Node.js, PHP/Laravel, Python, and other modern frameworks — allowing us to select the ideal tech stack for every project.",
                "We prioritize scalability, data security, and future-ready architecture to ensure long-term application success.",
                "Over the years, we've delivered a strong portfolio of web apps across SaaS platforms, enterprise systems, CRMs, ERPs, and custom business tools."
              ].map((text, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/30">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300 text-[16px] md:text-[17px] leading-relaxed")}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Process Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Our Process
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg relative">
                  <process.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 w-4 h-0.5 bg-primary/50 transform -translate-y-1/2" />
                  )}
                </div>
                <h3 className="text-[15px] md:text-[16px] font-bold text-gray-300 group-hover:text-white transition-colors">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Services Include */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Our Services Include
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MonitorSmartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[16px] font-semibold text-white">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "text-white mb-10")}
          >
            Technologies We Use
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["React", "Next.js", "Node.js", "Python"].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/20 px-8 py-4 rounded-xl text-xl font-bold text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all cursor-default shadow-lg"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-3xl mx-auto")}
            >
              Why Choose Pinnacle Systems for Web Application Development?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-white">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300", openFaq === idx ? "transform rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-primary rounded-[3rem] p-12 md:p-16 shadow-[0_10px_40px_rgba(255,90,0,0.3)] relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-20"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">Work with Pinnacle Systems Today!</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#0b132a] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl group relative z-10"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
      <Footer />
    </main>
  );
}
