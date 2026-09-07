"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Printer, Droplets, Package, BarChart, Banknote,
  Layout, Layers, ScanBarcode, Network, ShieldCheck, Factory, Scissors, CheckSquare
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
    { title: "Design & Screen/Roller Management", desc: "Track design masters, color separations, and screen or roller inventory linked to each design", icon: Layout },
    { title: "Print Paste & Color Recipe Control", desc: "Maintain standard print paste recipes by design and colour for consistent, repeatable output", icon: Droplets },
    { title: "Job-Work & Customer Fabric Tracking", desc: "Track third-party (job-work) fabric received for printing separately from owned stock, with accurate process-wise billing", icon: Package },
    { title: "Machine & Print Run Planning", desc: "Plan printing machine loads by design, batch size, and delivery priority to reduce changeover time", icon: Factory },
    { title: "Integrated Finance & Accounting", desc: "Built-in billing and receivables with two-way Tally integration", icon: Banknote }
  ];

  const modules = [
    { title: "Design & Development Management", desc: "Maintain a central design library with colour separations, repeat sizes, and approval status for every design.", icon: Layout },
    { title: "Screen / Roller & Print Paste Management", desc: "Track screens, rollers, and print paste recipes linked to each design and color combination.", icon: Layers },
    { title: "Grey Fabric Receipt & Inventory", desc: "Receive and track grey or base fabric from own stock or customer job work before printing begins.", icon: Package },
    { title: "Order & Job-Work Management", desc: "Manage printing orders for both owned production and customer job-work, with clear design and delivery tracking.", icon: FileTextIcon },
    { title: "Print Production Planning & Scheduling", desc: "Plan and schedule print runs based on machine capacity, design changeovers, and delivery priority.", icon: Network },
    { title: "Print Production Management", desc: "Track fabric movement and status through printing, washing, and fixing stages, whether handled in-house or via subcontractors.", icon: Printer },
    { title: "Quality Management", desc: "Inspect printed fabric at every stage to maintain design accuracy, colour consistency, and finish quality.", icon: ShieldCheck },
    { title: "Inventory Management (WIP & Finished)", desc: "Maintain real-time visibility of fabric at every stage grey, in-process, and printed, across warehouses.", icon: BarChart },
    { title: "Dispatch", desc: "Manage the complete dispatch process from finished fabric readiness to shipment and delivery, for both owned and job-work fabric.", icon: TruckIcon },
    { title: "Sales, Billing & Job-Work Receivables", desc: "Integrated financial accounting built into Pinnacle ERP, covering both direct sales and job-work printing charges.", icon: Banknote }
  ];

  const segments = [
    "Screen and rotary printing units",
    "Digital textile printing units",
    "Job-work / third-party printing units",
    "Composite textile mills with in-house printing"
  ];

  const whyChooseUs = [
    { title: "Purpose-Built for Printing Units", desc: "Every module is designed around real printing workflows — design libraries, screen/roller tracking, print paste recipes, and job-work billing — not adapted from generic textile ERP.", icon: Printer },
    { title: "Clear Job-Work Accountability", desc: "Separately track customer-owned fabric from your own stock, with accurate process-wise billing and return tracking.", icon: CheckSquare },
    { title: "Consistent Design & Colour Control", desc: "Centralized design and recipe management help maintain consistent print quality across repeat orders and reduce reprocessing costs.", icon: Layout },
    { title: "Complete Financial Integration", desc: "Built-in billing, receivables, and two-way Tally integration mean your finance team works from the same data as your print floor.", icon: Banknote },
    { title: "Dedicated Implementation Support", desc: "Get structured onboarding, data migration, and training so your teams are productive from day one.", icon: ShieldCheck }
  ];

  const processes = [
    { title: "Requirement Understanding", desc: "We study your current process across design, printing, and dispatch" },
    { title: "Custom ERP Setup", desc: "Configure modules and workflows to match your printing unit's operations" },
    { title: "Data Migration", desc: "Move your existing design, order, and customer data into the new system" },
    { title: "Training & Onboarding", desc: "Hands-on training for design, production, quality, and finance teams" },
    { title: "Go-Live & Support", desc: "Launch with dedicated support during the transition" }
  ];

  const faqs = [
    { q: "What is textile printing management software?", a: "It's a management system built specifically for fabric printing units, covering design management, screen/roller tracking, production, and dispatch in one platform." },
    { q: "Can it manage design and colour separation records?", a: "Yes, the Design & Development module maintains a central library of design masters, colour separations, and approval status." },
    { q: "Does it track screens, rollers, and print paste recipes?", a: "Yes, you can link screens or rollers and standard print paste recipes to each design and colour combination for consistent output." },
    { q: "Can it separately track job-work fabric from our own stock?", a: "Yes, the system tracks customer-owned job-work fabric separately from owned stock, with accurate process-wise billing." },
    { q: "Can I track fabric through each printing stage?", a: "Yes, Print Production Management tracks fabric batch-wise through printing, washing, and fixing, whether done in-house or subcontracted." },
    { q: "Does Pinnacle ERP integrate with Tally?", a: "Yes, it offers two-way Tally integration, syncing sales and accounting data automatically in both directions." },
    { q: "Can I track design mismatches or print defects by batch?", a: "Yes, Quality Management supports in-process and final inspection with design mismatch and defect tracking at the batch level." },
    { q: "Is job-work billing handled differently from regular sales?", a: "Yes, the system calculates job-work billing based on processes performed, separate from standard sales invoicing." },
    { q: "Can I plan machine capacity around design changeovers?", a: "Yes, Production Planning lets you schedule machine loads based on design, batch size, and delivery priority to reduce changeover time." },
    { q: "How long does implementation take?", a: "Timelines depend on unit size and data volume, but implementation typically includes structured onboarding, training, and go-live support within a few weeks." }
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
        <div className="max-w-5xl mx-auto text-center mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Printer className="w-4 h-4" />
            <span>Textile Printing ERP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Textile Printing Management Software Built for the Complete Print Production Process
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-center sm:text-center")}
          >
            From design and screen planning to print production, quality, and dispatch — Pinnacle ERP connects every stage of your printing unit on one platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 text-lg group px-10 py-5")}
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Intro / Problem Statement */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white mb-8 text-center")}
            >
              One Platform, From Design to Printed Fabric Dispatch
            </motion.h2>

            <div className="space-y-6">
              {introPoints.map((point, idx) => (
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
                  <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300")}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-4xl mx-auto")}
            >
              What Makes Pinnacle ERP Different for Textile Printing
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {differentiators.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 5) * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-4">{item.title}</h3>
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400 flex-grow")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Printing Segments */}
        <div className="max-w-5xl mx-auto mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "text-white mb-10")}
          >
            Built for Every Segment of the Textile Printing Industry
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary/10 border border-primary/20 p-6 rounded-2xl flex items-center justify-center text-center hover:bg-primary/20 transition-colors h-full min-h-[100px]"
              >
                <h3 className="text-[16px] font-semibold text-white">{segment}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Printing ERP Modules */}
        <div className="max-w-7xl mx-auto mb-24 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-[#0b132a] mb-6")}
            >
              Complete Textile Printing Management Modules
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <module.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#0b132a] mb-4">{module.title}</h3>
                <p className={cn(theme.p, "text-gray-600 mb-0 flex-grow leading-relaxed indent-0")}>
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-4xl mx-auto")}
            >
              Why Choose Pinnacle ERP for Textile Printing Management
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-4">{item.title}</h3>
                <p className={cn(theme.p, "text-gray-400 mb-0 flex-grow indent-0")}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Get You Started */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              How We Get You Started
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 gap-x-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center text-center relative group"
              >
                <div className="w-14 h-14 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg relative z-10 text-xl font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2 leading-tight">
                  {process.title}
                </h3>
                <p className={cn(theme.p, "text-gray-400 text-[14px] leading-relaxed mb-0 indent-0")}>
                  {process.desc}
                </p>
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
                        <p className={cn(theme.p, "mb-0 indent-0 text-gray-400")}>{faq.a}</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">Bring Every Stage of Your Textile Printing Operations Onto One Platform.</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#0b132a] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl group relative z-10"
          >
            Book a Free Demo Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
      <Footer />
    </main>
  );
}

// Inline missing lucide icons for standard use in lists
function FileTextIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}
