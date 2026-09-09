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
  BarChart, Palette, Sparkles, AlertCircle, Target, Eye, PenTool, Ruler, Clock, Receipt, Box, Truck
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function EmbroiderySoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Cloud Technology", desc: "Access your embroidery ERP anytime, anywhere with secure, reliable cloud technology — no dependency on office systems or physical servers.", icon: Cloud },
    { title: "Real-Time Machine Tracking", desc: "Monitor live stitch count progress, machine output, and downtime across every embroidery head for faster floor decisions.", icon: Activity },
    { title: "Design & Thread Inventory", desc: "Track digitized design files alongside thread and consumable stock in real time, linking usage directly to production.", icon: Package },
    { title: "No 3rd Party Involvement", desc: "Direct sales, implementation, and support from our team ensure faster communication, better service, and accountability.", icon: UserX },
    { title: "Barcode Scanning", desc: "Faster data entry, reduced manual errors, and accurate tracking of job-work garments and finished embroidered pieces.", icon: ScanBarcode },
    { title: "Seamless Integration", desc: "Connect your finance operations to the E-Way Bill and E-Invoice platforms for speedier processing and improved compliance.", icon: LinkIcon },
    { title: "Built-in Approval System", desc: "Route purchase orders, job-work costing, and requests through role-based approval workflows for faster, controlled decision-making.", icon: CheckSquare },
    { title: "Integration with SMS", desc: "Send automatic, intelligently generated SMS alerts for order status updates and payment reminders.", icon: MessageSquare },
    { title: "Scheduled Mail Shooting", desc: "Set up automated, scheduled email campaigns and production reports sent to customers, vendors, or internal teams.", icon: Mail },
    { title: "WhatsApp Integration", desc: "Send invoices, job-work confirmations, and dispatch updates directly to vendors or customers via WhatsApp.", icon: MessageCircle },
    { title: "Action Dashboard", desc: "A single dashboard showing pending approvals, machine downtime, and overdue orders that need attention — so nothing slips through.", icon: LayoutDashboard },
    { title: "Graphical Reports", desc: "Visual, real-time reports on machine utilization, stitch-count costing, thread consumption, and finance, built for quick decision-making.", icon: BarChart }
  ];

  const challenges = [
    "Design files and digitizing records are tracked separately from production, causing rework and version confusion",
    "Thread and consumable usage estimated manually, leading to costing errors",
    "Machine-wise output and downtime tracked on paper, with no real-time visibility",
    "Job-work fabric received for embroidery mixed up with owned stock",
    "Stitch-count-based costing calculated manually for every design and order"
  ];

  const modules = [
    { title: "Design & Digitizing Management", desc: "Maintain a central library of design files, digitizing formats, and stitch counts linked to every customer order.", icon: PenTool },
    { title: "Thread & Consumable Planning", desc: "Plan thread, backing, and consumable requirements based on design stitch count and order quantity, reducing wastage and stockouts.", icon: Ruler },
    { title: "Machine-Wise Production Planning", desc: "Plan and schedule embroidery machine loads by design, number of heads, and delivery priority to minimize changeover time.", icon: Clock },
    { title: "Job-Work & Customer Fabric Tracking", desc: "Track fabric or garments received for embroidery job-work separately from owned stock, with accurate process-wise billing.", icon: Receipt },
    { title: "Production Management", desc: "Monitor machine-wise output, stitch count progress, and downtime in real time across your embroidery floor.", icon: Activity },
    { title: "Quality Management", desc: "Inspect embroidered pieces for thread breaks, design alignment, and finish quality, with rework and defect tracking.", icon: CheckCircle2 },
    { title: "Stitch-Count-Based Costing", desc: "Calculate order costs based on design stitch count, thread consumption, and machine time — before and after production.", icon: BarChart },
    { title: "Dispatch", desc: "Manage packing, job-work return tracking, and shipment for finished embroidered goods.", icon: Truck }
  ];

  const whyChooseUs = [
    { title: "Built for Design-Driven Production", desc: "Unlike generic manufacturing tools, our system is designed around design digitizing, stitch count, and machine-head planning — not adapted from a standard ERP template.", icon: Target },
    { title: "Accurate Stitch-Count Costing", desc: "Automatic linking of design data to thread and machine consumption means every order is costed consistently and accurately.", icon: Receipt },
    { title: "Clear Job-Work Accountability", desc: "Separately track customer-owned fabric and garments from your own stock, with accurate billing and return tracking.", icon: Box },
    { title: "Real-Time Machine Visibility", desc: "Track machine-wise output and downtime as production happens, not at the end of the shift.", icon: Eye },
    { title: "Integrates With Your ERP", desc: "Connects directly with garment, textile, or job-work data from your broader Pinnacle ERP system — no duplicate data entry.", icon: LinkIcon }
  ];

  const faqs = [
    { q: "1. Can this software manage design files and digitizing records?", a: "Yes. Design files, digitizing formats, and stitch counts are maintained in a central library linked to every customer order." },
    { q: "2. Does it calculate costing based on stitch count and thread consumption?", a: "Yes. Order costing is automatically calculated using design stitch count, thread usage, and machine time, pulled directly from production data." },
    { q: "3. Can it track job-work fabric or garments separately from our own stock?", a: "Yes. Customer-owned job-work items are tracked separately from owned stock, with accurate process-wise billing and return tracking." },
    { q: "4. Does it support machine-wise production tracking?", a: "Yes. Machine-wise output, stitch progress, and downtime are tracked in real time across your embroidery floor." },
    { q: "5. Can it plan thread and consumable requirements automatically?", a: "Yes. Thread, backing, and consumable requirements are planned based on design stitch count and order quantity." },
    { q: "6. Does it handle quality checks for embroidered goods?", a: "Yes. Quality Management supports inspection for thread breaks, design alignment, and finish quality, with rework tracking." },
    { q: "7. Will this connect with our existing Pinnacle ERP system?", a: "Yes. The embroidery module integrates directly with garment, textile, or job-work data from your broader ERP, avoiding duplicate entry." },
    { q: "8. Can it handle multiple machines with different head counts?", a: "Yes. Production planning accounts for machine-wise head count and capacity when scheduling embroidery runs." },
    { q: "9. Is job-work billing handled differently from regular sales?", a: "Yes. Job-work billing is calculated based on processes performed, separate from standard sales invoicing." },
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
            src="/images/textile-erp/EMBRODERIY.webp"
            alt="Embroidery Management Software"
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
                <Palette className="w-4 h-4" />
                <span>EMBROIDERY MANAGEMENT SOFTWARE</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Embroidery Management Software Built for the Complete Production Process
              </h1>
              
              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                From design digitizing and thread planning to machine production, quality, and dispatch — Pinnacle ERP connects every stage of your embroidery unit on one platform.
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
              Core Features of Pinnacle Embroidery ERP
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 4) * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0 !text-left")}>{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE EMBROIDERY REALITY (Navy) ── */}
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
                className={cn(theme.h2, "text-white mb-6 text-center")}
              >
                Embroidery Production Isn&apos;t Like Standard Manufacturing
              </motion.h2>
              <p className={cn(theme.p, "text-white text-center mb-8 max-w-3xl mx-auto")}>
                Most manufacturing software isn&apos;t built for the reality of an embroidery unit, where output depends on design complexity, stitch count, machine heads, and thread consumption — not just raw material and labour.
              </p>

              <div className="space-y-5 mb-8">
                {challenges.map((text, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                      <AlertCircle className="w-3.5 h-3.5 text-red-400" />
                    </div>
                    <p className={cn(theme.p, "text-white text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0 !text-left")}>
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-2xl p-6">
                <p className={cn(theme.p, "mb-0 text-center text-white font-medium")}>
                  An embroidery management software connects design data, machine production, and thread consumption into one system — so every order is costed accurately and delivered on time.
                </p>
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
              One System for Every Stage of Embroidery Production
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
                    <h3 className="text-base sm:text-[17px] font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{module.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed flex-grow tracking-normal !indent-0 !mb-0 !text-left")}>{module.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
            <Link href="?contact=true" scroll={false} className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 group px-8 py-4")}>
              See How It Works — Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (Navy) ── */}
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
              Why Embroidery Units Choose Our Management Software
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
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
                  <p className={cn(theme.p, "text-white text-[14px] leading-relaxed flex-grow tracking-normal !indent-0 !mb-0 !text-left")}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10 sm:mt-12">
            <Link href="?contact=true" scroll={false} className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 group px-8 py-4")}>
              Talk to Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Bring Complete Control to Your Embroidery Production.</h2>
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
