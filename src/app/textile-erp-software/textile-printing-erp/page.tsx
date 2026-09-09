"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CheckCircle2, ChevronDown,
  Printer, Droplets, Package, BarChart, Banknote,
  Layout, Layers, ScanBarcode, Network, ShieldCheck, Factory, Scissors, CheckSquare, Sparkles, FileText, Truck, AlertCircle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TextilePrintingErpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const introPoints = [
    "Textile printing involves coordinating designs, colour separations, screens or rollers, print paste consumption, and production schedules often tracked manually across design files and job cards.",
    "Pinnacle ERP is built specifically for textile printing units, connecting design management, screen/roller tracking, print production, and dispatch in one connected system.",
    "Get real-time visibility into print run status, colour matching, and machine utilization without waiting for the shift to end.",
    "Built around how printing units actually operate: design repeats, colour separations, screens, print paste recipes, and job-work billing not adapted from generic manufacturing software."
  ];

  const differentiators = [
    { title: "Design & Screen Management", desc: "Track design masters, color separations, and screen or roller inventory linked to each design.", icon: Layout },
    { title: "Print Paste Recipe Control", desc: "Maintain standard print paste recipes by design and colour for consistent, repeatable output.", icon: Droplets },
    { title: "Job-Work & Fabric Tracking", desc: "Track third-party fabric received for printing separately from owned stock, with accurate billing.", icon: Package },
    { title: "Machine & Run Planning", desc: "Plan printing machine loads by design, batch size, and delivery priority to reduce changeovers.", icon: Factory },
    { title: "Integrated Finance", desc: "Built-in billing and receivables with two-way Tally integration.", icon: Banknote }
  ];

  const modules = [
    { title: "Design & Development Management", desc: "Maintain a central design library with colour separations, repeat sizes, and approval status for every design.", icon: Layout },
    { title: "Screen / Roller & Print Paste Management", desc: "Track screens, rollers, and print paste recipes linked to each design and color combination.", icon: Layers },
    { title: "Grey Fabric Receipt & Inventory", desc: "Receive and track grey or base fabric from own stock or customer job work before printing begins.", icon: Package },
    { title: "Order & Job-Work Management", desc: "Manage printing orders for both owned production and customer job-work, with clear design and delivery tracking.", icon: FileText },
    { title: "Print Production Planning & Scheduling", desc: "Plan and schedule print runs based on machine capacity, design changeovers, and delivery priority.", icon: Network },
    { title: "Print Production Management", desc: "Track fabric movement and status through printing, washing, and fixing stages, whether handled in-house or via subcontractors.", icon: Printer },
    { title: "Quality Management", desc: "Inspect printed fabric at every stage to maintain design accuracy, colour consistency, and finish quality.", icon: ShieldCheck },
    { title: "Inventory Management (WIP & Finished)", desc: "Maintain real-time visibility of fabric at every stage grey, in-process, and printed, across warehouses.", icon: BarChart },
    { title: "Dispatch", desc: "Manage the complete dispatch process from finished fabric readiness to shipment and delivery, for both owned and job-work fabric.", icon: Truck },
    { title: "Sales, Billing & Receivables", desc: "Integrated financial accounting built into Pinnacle ERP, covering both direct sales and job-work printing charges.", icon: Banknote }
  ];

  const segments = [
    "Screen and rotary printing units",
    "Digital textile printing units",
    "Job-work / third-party printing units",
    "Composite textile mills with in-house printing"
  ];

  const whyChooseUs = [
    { title: "Purpose-Built for Printing Units", desc: "Every module is designed around real printing workflows — design libraries, screen/roller tracking, print paste recipes, and job-work billing.", icon: Printer },
    { title: "Clear Job-Work Accountability", desc: "Separately track customer-owned fabric from your own stock, with accurate process-wise billing and return tracking.", icon: CheckSquare },
    { title: "Consistent Design & Colour Control", desc: "Centralized design and recipe management help maintain consistent print quality across repeat orders and reduce reprocessing costs.", icon: Layout },
    { title: "Complete Financial Integration", desc: "Built-in billing, receivables, and two-way Tally integration mean your finance team works from the same data as your print floor.", icon: Banknote },
    { title: "Dedicated Implementation Support", desc: "Get structured onboarding, data migration, and training so your teams are productive from day one.", icon: ShieldCheck }
  ];

  const processes = [
    { title: "Requirement Understanding", desc: "We study your current process across design, printing, and dispatch." },
    { title: "Custom ERP Setup", desc: "Configure modules and workflows to match your printing unit's operations." },
    { title: "Data Migration", desc: "Move your existing design, order, and customer data into the new system." },
    { title: "Training & Onboarding", desc: "Hands-on training for design, production, quality, and finance teams." },
    { title: "Go-Live & Support", desc: "Launch with dedicated support during the transition." }
  ];

  const faqs = [
    { q: "1. What is textile printing management software?", a: "It's a management system built specifically for fabric printing units, covering design management, screen/roller tracking, production, and dispatch in one platform." },
    { q: "2. Can it manage design and colour separation records?", a: "Yes, the Design & Development module maintains a central library of design masters, colour separations, and approval status." },
    { q: "3. Does it track screens, rollers, and print paste recipes?", a: "Yes, you can link screens or rollers and standard print paste recipes to each design and colour combination for consistent output." },
    { q: "4. Can it separately track job-work fabric from our own stock?", a: "Yes, the system tracks customer-owned job-work fabric separately from owned stock, with accurate process-wise billing." },
    { q: "5. Can I track fabric through each printing stage?", a: "Yes, Print Production Management tracks fabric batch-wise through printing, washing, and fixing, whether done in-house or subcontracted." },
    { q: "6. Does Pinnacle ERP integrate with Tally?", a: "Yes, it offers two-way Tally integration, syncing sales and accounting data automatically in both directions." },
    { q: "7. Can I track design mismatches or print defects by batch?", a: "Yes, Quality Management supports in-process and final inspection with design mismatch and defect tracking at the batch level." },
    { q: "8. Is job-work billing handled differently from regular sales?", a: "Yes, the system calculates job-work billing based on processes performed, separate from standard sales invoicing." },
    { q: "9. Can I plan machine capacity around design changeovers?", a: "Yes, Production Planning lets you schedule machine loads based on design, batch size, and delivery priority to reduce changeover time." },
    { q: "10. How long does implementation take?", a: "Timelines depend on unit size and data volume, but implementation typically includes structured onboarding, training, and go-live support within a few weeks." }
  ];

  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">

      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Banner Image */}
        <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
          <Image
            src="/images/textile-erp/PRINTING.webp"
            alt="Textile Printing Management Software"
            fill
            priority
            className="object-cover object-right-top"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
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
                <Printer className="w-4 h-4" />
                <span>TEXTILE PRINTING ERP</span>
              </div>

              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Textile Printing Management Software Built for the Complete Print Production Process
              </h1>

              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                From design and screen planning to print production, quality, and dispatch — Pinnacle ERP connects every stage of your printing unit on one platform.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="?contact=true" scroll={false}
                  className={cn(theme.buttonPrimary, "inline-flex w-full sm:w-auto justify-center items-center gap-3 text-base sm:text-lg group px-8 sm:px-10 py-4 sm:py-5")}
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Core Features
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-navy-900")}>
              What Makes Pinnacle ERP Different for Textile Printing
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {differentiators.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 5) * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-md font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE PRINTING REALITY (Navy) ── */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(theme.h2, "text-white mb-6 text-center")}
              >
                One Platform, From Design to Printed Fabric Dispatch
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                {introPoints.map((text, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {/* <p className={cn(theme.p, "text-white text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0 !text-left")}> */}
                    <p className={cn(theme.p, "text-white text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP MODULES (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Modules
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-navy-900 mb-4")}>
              Complete Textile Printing Management Modules
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {modules.map((module, idx) => {
              const IconComp = module.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-md font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{module.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{module.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US & SEGMENTS (Navy) ── */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Why Choose Us
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-white max-w-3xl mx-auto mb-4")}>
              Why Choose Pinnacle ERP for Textile Printing
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 max-w-[1536px] mx-auto mb-20">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-md font-bold text-white leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-white text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Segments Integration inside Navy */}
          <div className="max-w-5xl mx-auto text-center border-t border-white/10 pt-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white mb-8")}
            >
              Built for Every Segment of Printing
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {segments.map((segment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-primary/10 border border-primary/20 p-5 rounded-2xl flex items-center justify-center text-center hover:bg-primary/20 transition-colors h-full min-h-[90px]"
                >
                  <h3 className="text-[15px] font-semibold text-white">{segment}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE GET YOU STARTED (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Onboarding
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-navy-900")}>
              How We Get You Started
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 gap-x-6 max-w-[1536px] mx-auto">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 text-primary rounded-full flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-[16px] font-bold text-navy-900 mb-2 leading-tight">
                  {process.title}
                </h3>
                <p className="text-black text-[14px] leading-relaxed">
                  {process.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ (Navy) ── */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              FAQ
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-white")}>
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-[14px] sm:text-[16px] md:text-[17px] font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0", openFaq === idx ? "transform rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                        <p className={cn(theme.p, "mb-0 indent-0 max-w-none !text-[14px] sm:!text-[15px] !text-gray-300")}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA (Orange) ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-primary rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(255,90,0,0.25)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-20"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Bring Every Stage of Your Textile Printing Operations Onto One Platform.</h2>
            <Link href="?contact=true" scroll={false} className="inline-flex items-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg group relative z-10">
              Book a Free Demo Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="bg-[#11192F]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
