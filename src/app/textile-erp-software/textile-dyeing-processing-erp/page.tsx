"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Cloud, Activity, Package, UserX, ScanBarcode, Link as LinkIcon,
  CheckSquare, MessageSquare, Mail, MessageCircle, LayoutDashboard,
  BarChart, Settings, Factory, ShieldCheck, TrendingUp, Scissors,
  Cpu, Rocket, Zap, MonitorSmartphone, Truck, Layers, Droplets,
  LineChart, ClipboardCheck, Timer
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TextileProcessingSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Cloud Technology", desc: "Access your Textile Processing ERP anytime, anywhere with secure, reliable cloud hosting — monitor your dyeing, weaving, and finishing units from the office, floor, or on the move.", icon: Cloud },
    { title: "Real-Time Tracking", desc: "Monitor live production data across every processing stage and pull accurate reports instantly — for faster, smarter decisions on the floor.", icon: Activity },
    { title: "Production & Inventory", desc: "Track batch progress and fabric/yarn inventory in real time — from grey stock to finished goods — for better planning, control, and reduced wastage.", icon: Package },
    { title: "No 3rd Party Involvement", desc: "Direct sales, implementation, and support from our team — faster communication, better service, and full accountability, with no middlemen slowing things down.", icon: UserX },
    { title: "Barcode Scanning", desc: "Faster batch and lot data entry, reduced manual errors, and accurate stock tracking across dyeing, weaving, and warehouse operations.", icon: ScanBarcode },
    { title: "Seamless Integration", desc: "Connect your finance operations directly to E-Way Bill and E-Invoice platforms for faster processing and full compliance — no manual duplication.", icon: LinkIcon },
    { title: "Built-in Approval System", desc: "Route purchase orders, chemical/dye purchases, and expense requests through role-based approval workflows for faster, controlled decision-making.", icon: CheckSquare },
    { title: "Integration with SMS", desc: "Automatic SMS alerts for order status updates, batch completion, and payment reminders — keeping customers and vendors informed without manual follow-up.", icon: MessageSquare },
    { title: "Scheduled Mail Shooting", desc: "Set up automated, scheduled email reports and updates for customers, vendors, or internal teams: batch status, dispatch updates, and outstanding payments, sent on autopilot.", icon: Mail },
    { title: "WhatsApp Integration", desc: "Send invoices, order confirmations, and batch/dispatch updates directly to vendors and customers via WhatsApp no delays waiting on email.", icon: MessageCircle },
    { title: "Action Dashboard", desc: "A single dashboard showing pending approvals, overdue batches, and delayed orders — so nothing slips through the cracks on the production floor.", icon: LayoutDashboard },
    { title: "Graphical Reports", desc: "Visual, real-time reports on production, inventory, finance, and processing costs built for quick, floor-level and management decision-making.", icon: BarChart }
  ];

  const modules = [
    { title: "Yarn & Raw Material Management", desc: "Track yarn purchases, lot numbers, and consumption in real time, with automatic stock updates as material moves through each process.", icon: Cpu },
    { title: "Dyeing & Processing Management", desc: "Recipe-wise costing, shade-matching records, batch tracking, and process-wise wastage reports—so every dye lot is accounted for.", icon: Droplets },
    { title: "Weaving & Production Tracking", desc: "Machine-wise and shift-wise production entries, loom efficiency tracking, and real-time WIP (work-in-progress) visibility.", icon: Factory },
    { title: "Finishing & Quality Control", desc: "Quality inspection checkpoints at every stage, with defect tracking and grade-wise (A/B/C grade) fabric classification.", icon: ClipboardCheck },
    { title: "Inventory & Warehouse Management", desc: "Real-time stock of grey fabric, processed fabric, and finished goods — searchable by lot, batch, or order number.", icon: Package },
    { title: "Order & Dispatch Management", desc: "Track customer orders from booking to dispatch, with automatic alerts for delays and pending balances.", icon: Truck },
    { title: "Costing & Profitability Reports", desc: "Batch-wise and order-wise costing that shows actual profitability — not estimated margins.", icon: LineChart }
  ];

  const automationFeatures = [
    { title: "Real-Time Batch Tracking", desc: "Track every batch instantly as it moves through receiving, washing, dyeing, and ironing — right up to final packing. No more chasing supervisors for status updates; every stage is visible the moment it happens.", icon: Activity },
    { title: "Resource Optimization", desc: "Smart scheduling allocates machines, chemical usage, and labour automatically to maximize throughput, so your facility runs at full capacity without manual planning bottlenecks.", icon: Timer },
    { title: "Quality Assurance", desc: "Cut rework rates with digital inspection checkpoints built into every critical stage of the process — catch defects before they move downstream, not after.", icon: ShieldCheck },
    { title: "Cost Transparency", desc: "Get live insights into utility consumption and per-garment processing costs — so you always know your real margin, not an end-of-month estimate.", icon: TrendingUp }
  ];

  const faqs = [
    { q: "1. What is garment processing management software?", a: "It's a system that digitizes and automates your garment facility's wet and dry processes — including batch receiving, washing, dyeing, ironing, and packing — giving you real-time visibility instead of manual tracking through registers or spreadsheets." },
    { q: "2. Can it track both wet processing (washing/dyeing) and dry processing (ironing/finishing) separately?", a: "Yes. Each process stage is tracked independently, so you can see exactly where a batch is at any moment — whether it's in washing, drying, ironing, or packing — with process-wise timestamps." },
    { q: "3. How does the software help reduce rework?", a: "Digital inspection checkpoints are built into critical stages of the process, so defects are flagged and caught immediately — before the batch moves further downstream, instead of being discovered at final QC." },
    { q: "4. Can it track chemical and utility usage per batch?", a: "Yes. The system captures chemical consumption and utility usage tied to each batch, giving you accurate, batch-wise processing costs instead of estimated averages." },
    { q: "5. Will this help with machine and labour scheduling?", a: "Yes. Smart scheduling allocates machines, chemical resources, and labour based on real capacity and workload, helping reduce idle time and maximize throughput." },
    { q: "6. Do I need technical staff to operate this software?", a: "No. The interface is built for shop-floor use — supervisors and operators can log batch movements and inspections without any coding or IT background." },
    { q: "7. Can I see real cost-per-garment, not just total facility cost?", a: "Yes. Cost tracking is broken down to a per-garment level, factoring in utility consumption and processing time, so you get accurate margins on every order." },
    { q: "8. Is this suitable for small processing units or only large facilities?", a: "It scales to your operation — whether you run a single wash/dye unit or manage multiple processing lines across locations." },
    { q: "9. Does it integrate with our existing ERP or accounting system?", a: "Yes, the software is built to integrate with common ERP and accounting platforms, so production and cost data flow through without duplicate data entry." },
    { q: "10. How long does it take to implement?", a: "Most facilities are fully onboarded — including staff training on batch entry and inspection workflows — within 2 to 4 weeks, depending on facility size." }
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
            <Droplets className="w-4 h-4" />
            <span>Textile Processing ERP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Textile Processing ERP Software Built for Yarn, Dyeing, Weaving & Finishing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-gray-300 text-center sm:text-center max-w-4xl")}
          >
            Run your entire textile production—from raw material to dispatch—on one system that eliminates manual tracking, reduces waste, and gives you real-time visibility across every process stage.
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

        {/* Core Features */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Core Features — Textile Processing ERP
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 border border-primary/30 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-[14px] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* One ERP Modules */}
        <div className="max-w-6xl mx-auto mb-24 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-[#0b132a] mb-6")}
            >
              One ERP. Every Textile Process. Full Visibility.
            </motion.h2>
            <p className={cn(theme.p, "text-gray-600 mx-auto text-center")}>
              Built specifically for textile processing units, not a generic manufacturing ERP forced to fit your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <module.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#0b132a] mb-4 group-hover:text-primary transition-colors">{module.title}</h3>
                <p className={cn(theme.p, "text-gray-600 mb-0 flex-grow")}>
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link 
              href="/contact" 
              className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 group px-8 py-4")}
            >
              See How It Works — Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Smart Automation */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-3xl mx-auto mb-6")}
            >
              Smart Automation for the Modern Textile Facility
            </motion.h2>
            <p className={cn(theme.p, "text-gray-300 max-w-4xl mx-auto text-center sm:text-center")}>
              Managing complex wet and dry garment processing shouldn't be a headache. Our processing management software gives you total control over your production floor — from raw batch receipt to final packing — all from one dashboard.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/contact" 
              className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 group px-8 py-4")}
            >
              See Smart Automation in Action — Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
                        <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
