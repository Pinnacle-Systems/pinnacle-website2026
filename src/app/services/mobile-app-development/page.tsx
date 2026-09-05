"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Smartphone, Apple, LayoutGrid, Rocket, Search, 
  MonitorSmartphone, PlayCircle, BarChart, Users, DollarSign, MousePointerClick
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const introPoints = [
    "Pinnacle Systems is a leading mobile app development company, building high-performance Android and iOS mobile apps.",
    "Apps are designed to be user-centric, performance-oriented designed, flexible, and optimized for speed, UX, and conversions.",
    "As a professional mobile app development partner, we go beyond simply launching an app — we craft an experience around it.",
    "Our development team brings deep experience in building business-centric, objective-driven, and performance-based apps tailored to your goals.",
    "Developers are proficient in Flutter, React Native, native technologies, and other emerging mobile frameworks — allowing us to select the ideal tech stack for every project.",
    "We prioritize scalability, seamless user experience, and future-ready architecture to ensure long-term app success.",
    "Over the years, we've delivered a strong portfolio of mobile apps across Android, iOS, Windows, and cross-platform environments."
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

  const technologies = [
    "Node.js", "Native Android"
  ];

  const whyChooseUs = [
    { title: "Work Efficiency", desc: "Our skilled team of app analysts, development strategists, and designers delivers an exceptional user experience — building apps that lead in their respective app stores.", icon: BarChart },
    { title: "Client Satisfaction", desc: "We're committed to our clients' success on every mobile app project, whether cross-platform or native Android — backed by in-depth research and business insight.", icon: Users },
    { title: "Affordable Price", desc: "We deliver top-notch mobile apps within your budget, quoting competitive pricing without compromising on quality or functionality.", icon: DollarSign },
    { title: "Interactive UI/UX", desc: "Our creative designers turn UX concepts into interactive prototypes and apps — customer-centric, enterprise-ready, and built to perform like a sales tool for your business.", icon: MousePointerClick }
  ];

  const faqs = [
    { q: "1. How long does it take to build a mobile app?", a: "An MVP can take 4–8 weeks, while full-featured apps with custom backend and integrations typically take 3–6 months, depending on complexity." },
    { q: "2. How much does it cost to develop a mobile app?", a: "Cost depends on features, platform (iOS, Android, or both), and complexity. We provide a fixed quote after a discovery call — no hidden charges." },
    { q: "3. Should I build for iOS, Android, or both?", a: "It depends on your target audience. We help you decide based on your users' behavior, and can build natively or cross-platform (e.g., Flutter/React Native) to cover both efficiently." },
    { q: "4. Will my app be secure?", a: "Yes. We follow industry-standard security practices including encrypted data storage, secure authentication, and secure API handling — especially critical for healthcare, e-commerce, and fintech apps." },
    { q: "5. Can you redesign or upgrade my existing app?", a: "Yes. We audit your current app's performance and UX, then modernize it — improving speed and usability while preserving your existing user base, data, and app store reviews/ratings." },
    { q: "6. Will my app work smoothly on all devices?", a: "Yes. We test extensively across device sizes and OS versions to ensure consistent performance, whether built natively or cross-platform." },
    { q: "7. Do you build e-commerce or on-demand apps?", a: "Yes. We build secure e-commerce apps with in-app checkout, as well as on-demand marketplace apps with real-time tracking and integrated payments." },
    { q: "8. Can I update app content myself after launch?", a: "Yes, for apps built with a CMS-backed or admin panel structure, your team can update content, listings, or products without needing a developer for every change." },
    { q: "9. Do you offer app maintenance and support after launch?", a: "Yes. We offer ongoing support for bug fixes, OS updates, security patches, and performance monitoring to keep your app running reliably post-launch." },
    { q: "10. How do I get started with app development?", a: "Request a Free App Audit or Discovery Call. We'll review your idea or existing app and outline a clear roadmap — features, timeline, and cost — before development begins." }
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
            <Smartphone className="w-4 h-4" />
            <span>Mobile Innovation</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Mobile Application Development Company
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-gray-300 text-center sm:text-center")}
          >
            Pinnacle Systems is a trusted mobile app development company that builds iOS and Android applications engineered to drive brand growth and business engagement.
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
              Talk to Our App Development Team
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
              Top-Notch Mobile App Development Company
            </motion.h2>

            <div className="space-y-6">
              {introPoints.map((text, idx) => (
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
        <div className="max-w-6xl mx-auto mb-20 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-[#0b132a]")}
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
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MonitorSmartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-semibold text-[#0b132a] group-hover:text-primary transition-colors">{service}</h3>
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
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/20 px-10 py-5 rounded-xl text-xl font-bold text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all cursor-default shadow-lg"
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
              Why Choose Pinnacle Systems for Mobile App Development?
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
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{item.desc}</p>
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
              FAQs
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
                  <span className="text-[16px] md:text-[18px] font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0", openFaq === idx ? "transform rotate-180" : "")} />
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
