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
  BarChart, Scissors, Sparkles, AlertCircle, Target, Eye, Ruler, Layers, FileText, PieChart, Box, ArrowRightLeft
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CuttingManagementSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Cloud Technology", desc: "Access your cutting room data anytime, anywhere with secure, reliable cloud technology — no dependency on office systems or physical servers.", icon: Cloud },
    { title: "Real-Time Cutting Tracking", desc: "Monitor live marker efficiency, lay progress, and cutting output for faster, floor-level decisions.", icon: Activity },
    { title: "Fabric & Bundle Inventory", desc: "Track fabric roll consumption and cut bundle stock in real time, linking usage directly to production orders.", icon: Package },
    { title: "No 3rd Party Involvement", desc: "Direct sales, implementation, and support from our team ensure faster communication, better service, and accountability.", icon: UserX },
    { title: "Barcode Scanning", desc: "Faster bundle creation, reduced manual errors, and accurate tracking of cut panels from table to stitching line.", icon: ScanBarcode },
    { title: "Seamless Integration", desc: "Connect your finance and inventory operations for accurate fabric costing and stock reconciliation.", icon: LinkIcon },
    { title: "Built-in Approval System", desc: "Route lay plans, wastage adjustments, and requests through role-based approval workflows for controlled decision-making.", icon: CheckSquare },
    { title: "Integration with SMS", desc: "Send automatic SMS alerts for cutting completion updates and line issue notifications.", icon: MessageSquare },
    { title: "Scheduled Mail Shooting", desc: "Set up automated, scheduled cutting room reports sent to production managers and internal teams.", icon: Mail },
    { title: "WhatsApp Integration", desc: "Send cutting status updates and bundle issue confirmations directly to supervisors via WhatsApp.", icon: MessageCircle },
    { title: "Action Dashboard", desc: "A single dashboard showing pending lay plans, wastage alerts, and bundles awaiting issue — so nothing slips through.", icon: LayoutDashboard },
    { title: "Graphical Reports", desc: "Visual, real-time reports on marker efficiency, fabric wastage, and cutting output, built for quick decision-making.", icon: BarChart }
  ];

  const challenges = [
    "Marker efficiency tracked on paper or spreadsheets, with no visibility into actual fabric utilization",
    "Lay planning done manually, leading to fabric shortages or excess consumption",
    "Cut panels and bundles tracked by hand, causing mismatched or lost pieces on the floor",
    "Cutting room wastage never compared against planned consumption",
    "No real-time link between cutting output and downstream stitching requirements"
  ];

  const modules = [
    { title: "Marker Planning & Efficiency", desc: "Plan and record marker efficiency for every style and size ratio, comparing planned vs. actual fabric consumption.", icon: Ruler },
    { title: "Lay Planning", desc: "Plan fabric lay height, length, and ply count based on order quantity and fabric roll availability, minimizing wastage.", icon: Layers },
    { title: "Cutting Order Management", desc: "Generate cutting orders linked to confirmed production orders, with size, colour, and quantity breakdowns.", icon: FileText },
    { title: "Bundle Management", desc: "Create and track bundles by size, colour, and quantity, with barcode-based tracking from cutting to stitching line issue.", icon: Package },
    { title: "Fabric Consumption & Wastage Tracking", desc: "Track actual fabric consumption against planned norms, identifying wastage at the roll and lay level.", icon: PieChart },
    { title: "Cut Panel Inventory", desc: "Maintain real-time stock of cut panels awaiting issue, avoiding shortages or overstock at the cutting stage.", icon: Box },
    { title: "Line Issue & Handover", desc: "Issue bundles to stitching lines with complete traceability, ensuring the right pieces reach the right line on time.", icon: ArrowRightLeft },
    { title: "Cutting Room Reports", desc: "Get real-time reports on marker efficiency, wastage percentage, and cutting output by style, order, and cutter.", icon: BarChart }
  ];

  const whyChooseUs = [
    { title: "Built for Cutting Room Accuracy", desc: "Unlike generic production tools, our system is designed around marker efficiency, lay planning, and bundle tracking — not adapted from a standard manufacturing template.", icon: Target },
    { title: "Reduces Fabric Wastage", desc: "Real-time comparison of planned vs. actual consumption helps identify and reduce wastage at the roll and lay level.", icon: Scissors },
    { title: "Eliminates Bundle Mismatches", desc: "Barcode-based bundle tracking ensures every cut piece is accounted for from cutting table to stitching line.", icon: CheckCircle2 },
    { title: "Real-Time Cutting Room Visibility", desc: "Track marker efficiency, output, and wastage as cutting happens, not at the end of the day.", icon: Eye },
    { title: "Integrates With Your ERP", desc: "Connects directly with production planning, inventory, and order data from your broader Pinnacle ERP system — no duplicate data entry.", icon: LinkIcon }
  ];

  const faqs = [
    { q: "1. Can this software track marker efficiency for every style?", a: "Yes. Marker efficiency is recorded per style and size ratio, comparing planned versus actual fabric consumption." },
    { q: "2. Does it help reduce fabric wastage during cutting?", a: "Yes. Real-time tracking of actual consumption against planned norms helps identify and reduce wastage at the roll and lay level." },
    { q: "3. Can it manage bundle creation and tracking?", a: "Yes. Bundles are created and tracked by size, colour, and quantity, with barcode-based tracking from cutting to line issue." },
    { q: "4. Does it support lay planning based on fabric availability?", a: "Yes. Lay height, length, and ply count are planned based on order quantity and available fabric rolls." },
    { q: "5. Can I track cut panel inventory before it's issued to the line?", a: "Yes. Cut Panel Inventory maintains real-time stock of panels awaiting issue, avoiding shortages or overstock." },
    { q: "6. Does it link cutting output to stitching line requirements?", a: "Yes. Line Issue & Handover ensures bundles are issued to stitching lines with complete traceability." },
    { q: "7. Will this connect with our existing Pinnacle ERP system?", a: "Yes. The cutting module integrates directly with production planning, inventory, and order data from your broader ERP." },
    { q: "8. Can I compare wastage by cutter or cutting table?", a: "Yes. Cutting Room Reports provide wastage and efficiency breakdowns by style, order, and cutter." },
    { q: "9. Is barcode scanning required, or can bundles be tracked manually too?", a: "Barcode scanning is recommended for accuracy and speed, but manual entry is also supported where needed." },
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
            src="/images/textile-erp/CUTTINGMANAGEMENT.webp"
            alt="Cutting Management Software"
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
                <Scissors className="w-4 h-4" />
                <span>CUTTING MANAGEMENT SOFTWARE</span>
              </div>

              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Cutting Management Software Built for Accurate, Efficient Fabric Cutting
              </h1>

              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                From marker planning and lay planning to cutting, bundling, and issue tracking — Pinnacle ERP brings complete control to your cutting room.
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
              Core Features of Pinnacle Cutting Management Software
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
                    <h3 className="text-base sm:text-md font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>                    {feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE CUTTING ROOM REALITY (Navy) ── */}
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
                The Cutting Room Isn&apos;t Just Cutting Fabric — It&apos;s Where Your Margins Are Won or Lost
              </motion.h2>
              <p className={cn(theme.p, "text-white text-center mb-8 max-w-3xl mx-auto")}>
                Most manufacturing software treats cutting as a single line item, missing the reality that fabric utilization, marker efficiency, and bundle accuracy directly determine your order&apos;s profitability.
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
                    <p className={cn(theme.p, "text-white text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary/20 border border-primary/30 rounded-2xl p-6 flex items-center justify-center">
                <p className={cn(theme.p, "text-white text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0 text-center")}>
                  A cutting management software connects marker planning, lay execution, and bundle tracking into one system — so every fabric roll is utilized efficiently and every bundle reaches the line accurately.
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
              One System for Every Stage of the Cutting Process
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
              Why Garment Manufacturers Choose Our Cutting Management Software
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
                  <p className={cn(theme.p, "text-white text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.desc}</p>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Bring Complete Control to Your Cutting Room.</h2>
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
