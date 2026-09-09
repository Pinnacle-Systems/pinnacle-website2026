"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Cloud, Activity, Package, UserX, ScanBarcode, Link as LinkIcon,
  CheckSquare, MessageSquare, Mail, MessageCircle, LayoutDashboard,
  BarChart, Settings, Factory, ShieldCheck, TrendingUp, Scissors,
  Cpu, Rocket, Zap, MonitorSmartphone, Truck, Layers, Sparkles
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function KnittingSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Cloud Technology", desc: "Access your ERP anytime, anywhere with secure, reliable cloud technology — no dependency on office systems or physical servers.", icon: Cloud },
    { title: "Real-Time Tracking", desc: "Monitor live production and business data with accurate reports for faster, smarter decisions across every department.", icon: Activity },
    { title: "Production & Inventory", desc: "Track knitting production progress and yarn/fabric inventory in real time for better planning, control, and efficiency.", icon: Package },
    { title: "No 3rd Party Involvement", desc: "Direct sales, implementation, and support from our team ensure faster communication, better service, and accountability.", icon: UserX },
    { title: "Barcode Scanning", desc: "Faster data entry, reduced manual errors, accurate yarn and fabric stock tracking, and improved inventory control.", icon: ScanBarcode },
    { title: "Seamless Integration", desc: "Connect your finance operations to the E-Way Bill and E-Invoice platforms for speedier processing and improved compliance.", icon: LinkIcon },
    { title: "Built-in Approval System", desc: "Route purchase orders, expenses, and requests through role-based approval workflows for faster and controlled decision-making.", icon: CheckSquare },
    { title: "Integration with SMS", desc: "Send automatic, intelligently generated SMS alerts for production updates and payment reminders.", icon: MessageSquare },
    { title: "Scheduled Mail Sending", desc: "Set up automated, scheduled email campaigns and reports sent to customers, vendors, or internal teams.", icon: Mail },
    { title: "WhatsApp Integration", desc: "Send invoices, order confirmations, and dispatch updates directly to vendors or customers via WhatsApp.", icon: MessageCircle },
    { title: "Action Dashboard", desc: "A single dashboard showing pending approvals, overdue tasks, and items that need attention — so nothing slips through.", icon: LayoutDashboard },
    { title: "Graphical Reports", desc: "Visual, real-time reports on production, yarn consumption, inventory, and finance, built for quick decision-making.", icon: BarChart }
  ];

  const platformPoints = [
    "The knitting process requires the constant coordination of yarn inventory, machine planning, production output, as well as fabric quality. Often, this is tracked by hand across spreadsheets and registers.",
    "Pinnacle ERP has been designed for knitting machines, linking yarn procurement, machine-wise production planning, quality inspection, and dispatch into one system.",
    "You can get real-time insight into the performance of your machine as well as yarn consumption and fabric inventory, without waiting for reports at the end of the day.",
    "Based on the actual operation of knitting units, including knitting lots of yarn, gauges for machines, GSM, and fabric size and shade-wise production. Made from the same common manufacturing software."
  ];

  const modules = [
    "Complete Knitting ERP Modules",
    "Yarn & Fabric Inventory Management",
    "Production Planning",
    "Knitting Production Management",
    "Process Management (Dyeing & Finishing)",
    "Quality Management",
    "Order & Costing Management",
    "Dispatch",
    "Sales, Billing & Receivables"
  ];

  const segments = [
    "Circular and flat knitting units",
    "Fabric manufacturers supplying garment exporters",
    "Knit-to-dye and knit-to-finish processing units",
    "Job work and subcontract knitting units"
  ];

  const whyChooseUs = [
    { title: "Purpose-Built for Knitting", desc: "Every module is designed around real knitting workflows — yarn lots, machine gauge, GSM, and shade-wise production — not adapted from generic textile ERP.", icon: Settings },
    { title: "Complete Financial Integration", desc: "Built-in billing, receivables, and two-way Tally integration mean your finance team works from the same data as your production floor.", icon: Zap },
    { title: "End-to-End Visibility", desc: "From yarn procurement to fabric dispatch, track cost, status, and delivery timelines without switching between systems.", icon: ShieldCheck },
    { title: "Scalable for Growing Units", desc: "Whether you run a single knitting unit or manage multiple facilities and subcontractors, Pinnacle ERP scales with your operations.", icon: TrendingUp },
    { title: "Machine-Wise Production Planning", desc: "Plan and monitor output by machine, gauge, and shift, maximizing capacity utilization.", icon: Factory },
    { title: "Yarn Lot & Batch Tracking", desc: "Track yarn from procurement to consumption by lot, count, and shade for full traceability.", icon: Cpu },
    { title: "Integrated Dyeing & Processing Visibility", desc: "Track fabric movement through in-house or subcontracted dyeing and finishing processes.", icon: Scissors },
    { title: "Dedicated Implementation Support", desc: "Get structured onboarding, data migration, and training so your teams are productive from day one.", icon: MonitorSmartphone }
  ];

  const processes = [
    "Requirement & Business Process Study",
    "SOP Preparation",
    "Scope Definition & Scope Sign-off",
    "Process Study",
    "ERP Configuration & Development",
    "Data Preparation & Migration",
    "Testing & User Acceptance Testing",
    "Training & User Onboarding",
    "Go-Live & Post-Go-Live Support"
  ];

  const faqs = [
    { q: "1. What is knitting ERP software?", a: "It's a management system built specifically for knitting units, covering yarn procurement, production planning, quality, and dispatch in one platform." },
    { q: "2. Can it track yarn by lot and shade?", a: "Yes, the Inventory module tracks yarn by count, lot, and shade from procurement through to consumption." },
    { q: "3. Does it support machine-wise production planning?", a: "Yes, Production Planning and Production Management let you plan and monitor output by machine, gauge, and shift." },
    { q: "4. Can it manage subcontracted dyeing or finishing?", a: "Yes, the Process Management module tracks materials and status for both internal and subcontracted dyeing and finishing." },
    { q: "5. Does Pinnacle ERP integrate with Tally?", a: "Yes, it offers two-way Tally integration, syncing sales and accounting data automatically in both directions." },
    { q: "6. Can I track fabric quality by batch?", a: "Yes, Quality Management supports in-line and final fabric inspection with batch and shade-level tracking." },
    { q: "7. Can I calculate yarn consumption accurately per order?", a: "Yes, the Costing module tracks yarn consumption alongside machine time and processing charges for accurate order costing." },
    { q: "8. Is GST and e-invoicing supported?", a: "Yes, the Sales & Billing module supports GST invoicing along with E-Invoice and E-Way Bill integration." },
    { q: "9. Can this ERP handle multiple knitting units or warehouses?", a: "Yes, it supports multi-location and multi-warehouse management for businesses operating more than one facility." },
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
            src="/images/erp-software/KNITTINGSOFTWARE.webp"
            alt="Knitting ERP Solutions"
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
                <Factory className="w-4 h-4" />
                <span>KNITTING ERP SOLUTIONS</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Knitting ERP Software Built for the Complete Yarn-to-Fabric Process
              </h1>
              
              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                Streamline your entire knitting operations in one place—from yarn management and production planning to machine tracking, quality control, stock, costing, and dispatch. It helps knitting companies reduce wastage, improve machine utilization, track production in real time, minimize manual work, and make faster, data-driven decisions.
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Core Features of Pinnacle Knitting ERP Software
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ONE PLATFORM (Navy) ── */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(theme.h2, "text-white mb-8 text-center")}
              >
                One Platform, From Yarn Store to Fabric Dispatch
              </motion.h2>

              <div className="space-y-6">
                {platformPoints.map((text, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/30">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300 text-[16px] leading-relaxed")}>
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES & SEGMENTS (White) ── */}
      <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Modules */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-5 sm:mb-8 text-left">Complete Knitting ERP Modules</h2>
              <div className="flex flex-col gap-2 sm:gap-3">
                {modules.map((module, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-center gap-3 bg-white border border-gray-100 p-3 sm:p-4 rounded-xl hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-gray-800 text-[13px] sm:text-[14px] md:text-[15px] leading-snug">{module}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industry Segments */}
            <div className="bg-gray-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 md:p-10 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-5 sm:mb-8 text-left">Built for Every Segment of the Knitting Industry</h2>
              <div className="flex flex-col gap-3">
                {segments.map((segment, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/30">
                      <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="font-bold text-navy-900 text-[13px] sm:text-[15px] md:text-[16px] leading-snug">{segment}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (Navy) ── */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Why Choose Us
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-3xl mx-auto")}
            >
              Why Choose Pinnacle ERP for Knitting Operations
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-white leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-[14px] sm:text-[14.5px] leading-relaxed m-0 flex-grow">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS FLOW (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Implementation Process
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              How We Get You Started
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-5xl mx-auto">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm relative z-10 text-xl font-bold text-navy-900 group-hover:text-white">
                  {index + 1}
                </div>
                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-gray-600 group-hover:text-primary transition-colors leading-tight">
                  {process}
                </h3>
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
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-[15px] md:text-[17px] font-semibold text-white pr-4">{faq.q}</span>
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
      </section>

      {/* ── BOTTOM CTA (Orange) ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-primary rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(255,90,0,0.25)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-20"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Bring Every Stage of Your Knitting Operations Onto One Platform.</h2>
            <Link 
              href="?contact=true" scroll={false} 
              className="inline-flex items-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg group relative z-10"
            >
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
