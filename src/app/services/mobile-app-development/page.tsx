"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Smartphone, Apple, LayoutGrid, Rocket, Search, 
  MonitorSmartphone, PlayCircle, BarChart, Users, DollarSign, MousePointerClick
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const introPoints = [
    "Pinnacle Systems is a leading mobile app development company, building high-performance Android and iOS mobile apps.",
    "Apps are designed to be user-centric, performance-oriented designed, flexible and optimized for speed, UX and conversions.",
    "As a professional mobile app development partner, we go beyond simply launching an app — we craft an experience around it.",
    "Our development team brings deep experience in building business-centric, objective-driven and performance-based apps tailored to your goals.",
    "Developers are proficient in Flutter, React Native, native technologies and other emerging mobile frameworks — allowing us to select the ideal tech stack for every project.",
    "We prioritize scalability, seamless user experience and future-ready architecture to ensure long-term app success.",
    "Over the years, we've delivered a strong portfolio of mobile apps across Android, iOS, Windows and cross-platform environments."
  ];

  const processes = [
    { title: "Mobile App Strategy", icon: Search },
    { title: "User Experience Design", icon: LayoutGrid },
    { title: "Development", icon: Smartphone },
    { title: "Testing", icon: CheckCircle2 },
    { title: "Launch", icon: Rocket }
  ];

  const services = [
    "Enterprise app development",
    "Android mobile app development",
    "iOS app development",
    "iPad application development",
    "Windows app development",
    "PhoneGap app development"
  ];

  const technologies = ["Node.js", "Native Android"];

  const whyChooseUs = [
    { title: "Work Efficiency", desc: "Our skilled team of app analysts, development strategists and designers delivers an exceptional user experience — building apps that lead in their respective app stores.", icon: BarChart },
    { title: "Client Satisfaction", desc: "We're committed to our clients' success on every mobile app project, whether cross-platform or native Android — backed by in-depth research and business insight.", icon: Users },
    { title: "Affordable Price", desc: "We deliver top-notch mobile apps within your budget, quoting competitive pricing without compromising on quality or functionality.", icon: DollarSign },
    { title: "Interactive UI/UX", desc: "Our creative designers turn UX concepts into interactive prototypes and apps — customer-centric, enterprise-ready and built to perform like a sales tool for your business.", icon: MousePointerClick }
  ];

  const faqs = [
    { q: "How long does it take to build a mobile app?", a: "An MVP can take 4–8 weeks, while full-featured apps with custom backend and integrations typically take 3–6 months, depending on complexity." },
    { q: "How much does it cost to develop a mobile app?", a: "Cost depends on features, platform (iOS android, or both) and complexity. We provide a fixed quote after a discovery call — no hidden charges." },
    { q: "Should I build for iOS android, or both?", a: "It depends on your target audience. We help you decide based on your users' behavior and can build natively or cross-platform (e.g., Flutter/React Native) to cover both efficiently." },
    { q: "Will my app be secure?", a: "Yes. We follow industry-standard security practices including encrypted data storage, secure authentication and secure API handling — especially critical for healthcare, e-commerce and fintech apps." },
    { q: "Can you redesign or upgrade my existing app?", a: "Yes. We audit your current app's performance and UX, then modernize it — improving speed and usability while preserving your existing user base, data and app store reviews/ratings." },
    { q: "Will my app work smoothly on all devices?", a: "Yes. We test extensively across device sizes and OS versions to ensure consistent performance, whether built natively or cross-platform." },
    { q: "Do you build e-commerce or on-demand apps?", a: "Yes. We build secure e-commerce apps with in-app checkout, as well as on-demand marketplace apps with real-time tracking and integrated payments." },
    { q: "Can I update app content myself after launch?", a: "Yes, for apps built with a CMS-backed or admin panel structure, your team can update content, listings, or products without needing a developer for every change." },
    { q: "Do you offer app maintenance and support after launch?", a: "Yes. We offer ongoing support for bug fixes, OS updates, security patches and performance monitoring to keep your app running reliably post-launch." },
    { q: "How do I get started with app development?", a: "Request a Free App Audit or Discovery Call. We'll review your idea or existing app and outline a clear roadmap — features, timeline and cost — before development begins." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Banner Image */}
        <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
          <Image
            src="/images/page-1/MOBLIEAPPDEVELOPMENT.webp"
            alt="Mobile Application Development"
            fill
            priority
            className="object-cover object-right"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col text-left mt-6 sm:mt-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
                <Smartphone className="w-4 h-4" />
                <span>MOBILE INNOVATION</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Mobile Application Development Company
              </h1>
              
              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                Pinnacle Systems is a trusted mobile app development company that builds iOS and Android applications engineered to drive brand growth and business engagement.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link 
                  href="?contact=true" scroll={false} 
                  className={cn(theme.buttonPrimary, "inline-flex w-full sm:w-auto justify-center items-center gap-3 text-base sm:text-lg group px-8 sm:px-10 py-4 sm:py-5")}
                >
                  Talk to Our App Development Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[20px] sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-lg shadow-gray-200/50 border border-gray-100">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(theme.h2, "text-navy-900 mb-8 sm:mb-10 text-center")}
            >
              Top-Notch Mobile App Development Company
            </motion.h2>

            <div className="space-y-5 sm:space-y-6">
              {introPoints.map((text, idx) => (
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
                  <p className={cn(theme.p, "text-black text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
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
                <h3 className="text-[13px] sm:text-[15px] font-bold text-gray-300 group-hover:text-white transition-colors leading-snug">{process.title}</h3>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1536px] mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-5 sm:p-6 rounded-[20px] sm:rounded-2xl hover:border-primary/20 hover:shadow-sm transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MonitorSmartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-navy-900 leading-snug group-hover:text-primary transition-colors">{service}</h3>
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
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 px-8 sm:px-10 py-3.5 sm:py-5 rounded-xl text-lg sm:text-xl font-bold text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all cursor-default"
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
              Why Choose Pinnacle Systems for Mobile App Development?
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
                <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.desc}</p>
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
                  transition={{ delay: idx * 0.04 }}
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

                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                          <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>
                          <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
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
              href="?contact=true" scroll={false} 
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
