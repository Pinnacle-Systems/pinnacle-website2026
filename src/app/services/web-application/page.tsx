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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 lg:pb-32 bg-[#0b132a] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mt-6 sm:mt-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6 sm:mb-8"
            >
              <Zap className="w-4 h-4" />
              <span>Expert Engineering</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(theme.h1, "text-white mb-6 sm:mb-8")}
            >
              Web Application Development Company
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(theme.p, "max-w-3xl mx-auto text-gray-300 text-center")}
            >
              Pinnacle Systems is a trusted web application development company that builds secure, scalable, and high-performing web apps engineered to streamline operations and drive business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 sm:mt-10"
            >
              <Link 
                href="/contact" 
                className={cn(theme.buttonPrimary, "inline-flex w-full sm:w-auto justify-center items-center gap-3 text-base sm:text-lg group px-8 sm:px-10 py-4 sm:py-5")}
              >
                Talk to Our Web App Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[20px] sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-lg shadow-gray-200/50 relative border border-gray-100">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(theme.h2, "text-navy-900 mb-8 sm:mb-10 text-center")}
            >
              Top-Notch Web Application Development Company
            </motion.h2>

            <div className="space-y-5 sm:space-y-6">
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
                  className="flex gap-3 sm:gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 border border-primary/20">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-black text-[15px] sm:text-[16px] leading-relaxed tracking-normal !text-left")}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Our Process
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg relative z-10">
                  <process.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors" />
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 sm:-right-8 top-1/2 w-4 sm:w-6 h-[2px] bg-primary/50 transform -translate-y-1/2 z-0" />
                  )}
                </div>
                <h3 className="text-[14px] sm:text-[16px] font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Include */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Our Services Include
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-[1536px] mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-5 sm:p-6 rounded-[20px] sm:rounded-2xl hover:bg-white hover:border-primary/30 hover:shadow-lg transition-all flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MonitorSmartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-navy-900 leading-snug">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 sm:py-24 bg-[#0b132a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white mb-8 sm:mb-12")}
            >
              Technologies We Use
            </motion.h2>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              {["React", "Next.js", "Node.js", "Python"].map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-bold text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all cursor-default shadow-lg"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900 max-w-3xl mx-auto")}
            >
              Why Choose Pinnacle Systems for Web Application Development?
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-100 p-6 sm:p-8 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug">{item.title}</h3>
                </div>
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-[14px] sm:text-[15px] leading-relaxed text-black !text-left")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="mb-3 sm:mb-4"
                >
                  <div
                    className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between p-4 sm:p-5">
                      <h4 className="text-[#0b132a] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-snug pr-4">{faq.q}</h4>
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-1 sm:ml-3">
                        <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                        <div className={`absolute h-full w-[2px] sm:w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                          <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>
                          <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !text-left")}>
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 leading-snug">Work with Pinnacle Systems Today!</h2>
            <Link 
              href="/contact" 
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
