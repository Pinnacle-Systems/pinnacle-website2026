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
  Cpu, Rocket, Zap, MonitorSmartphone, Truck, Layers, Droplets,
  LineChart, ClipboardCheck, Timer, ShoppingBag, Banknote, Users, Briefcase, FileText, Sparkles
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GarmentErpSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Cloud Technology", desc: "Access your ERP anytime, anywhere with secure, reliable cloud technology — no dependency on office systems or physical servers.", icon: Cloud },
    { title: "Real-Time Tracking", desc: "Monitor live business data and access accurate reports for faster, smarter decisions across every department.", icon: Activity },
    { title: "Production & Inventory", desc: "Track production progress and inventory in real time for better planning, control, and efficiency on the shop floor.", icon: Package },
    { title: "No 3rd Party Involvement", desc: "Direct sales, implementation, and support from our team ensure faster communication, better service, and accountability.", icon: UserX },
    { title: "Barcode Scanning", desc: "Faster data entry, reduced manual errors, accurate stock tracking, and improved inventory control.", icon: ScanBarcode },
    { title: "Seamless Integration", desc: "Connect your finance operations to the E-Way Bill and E-Invoice platforms for speedier processing and improved compliance.", icon: LinkIcon },
    { title: "Built-in Approval System", desc: "Route purchase orders, expenses, and requests through role-based approval workflows for faster and controlled decision-making.", icon: CheckSquare },
    { title: "Integration with SMS", desc: "Send automatic, intelligently generated SMS alerts for order updates and payment reminders.", icon: MessageSquare },
    { title: "Scheduled Mail Sending", desc: "Set up automated, scheduled email campaigns and reports sent to customers, vendors, or internal teams.", icon: Mail },
    { title: "WhatsApp Integration", desc: "Send invoices, order confirmations, and updates directly to vendors or customers via WhatsApp.", icon: MessageCircle },
    { title: "Action Dashboard", desc: "A single dashboard showing pending approvals, overdue tasks, and items that need attention — so nothing slips through.", icon: LayoutDashboard },
    { title: "Graphical Reports", desc: "Visual, real-time reports on sales, inventory, finance, and operations, built for quick decision-making.", icon: BarChart }
  ];

  const introPoints = [
    "Pinnacle Garment ERP is an end-to-end business management platform designed specifically for the garment industry. It connects every stage of your operation from customer enquiry and order management to production planning, sourcing, inventory, quality, packing, and final dispatch.",
    "Instead of managing different processes through disconnected software, spreadsheets, emails, and manual records, Pinnacle brings your entire garment business onto one integrated platform.",
    "With real-time visibility across departments, automated workflows, centralized data, and powerful reports, Pinnacle helps garment manufacturers and exporters reduce errors, improve efficiency, control costs, and deliver orders on time."
  ];

  const whatMakesUs = [
    { title: "Core ERP", desc: "Comprehensive integration of essential business functions such as Finance, Sales, Purchase, Inventory, Production, HR, and Operations within a single unified platform.", icon: Layers },
    { title: "Industry Depth", desc: "Ability to provide industry-specific workflows, processes, controls, reports, and functionality tailored to unique operational requirements.", icon: Factory },
    { title: "Manufacturing / Operations", desc: "Integrated management of production planning, BOM, MRP, material consumption, WIP, quality, job work, costing, machine operations, and finished goods.", icon: Scissors },
    { title: "Business Process Integration", desc: "Seamless integration of end-to-end business processes, connecting departments, transactions, workflows, and data in a single system.", icon: LinkIcon },
    { title: "Customization", desc: "Flexible configuration of workflows, forms, fields, reports, approvals, and business rules to match specific organizational requirements.", icon: Settings },
    { title: "Industry-Specific Reporting", desc: "Specialized MIS and analytical reports designed to provide meaningful insights based on the unique KPIs and requirements.", icon: BarChart },
    { title: "Multi-Company / Branch", desc: "Centralized management of multiple companies, branches, and warehouses with consolidated and entity-wise reporting.", icon: Briefcase },
    { title: "Management Intelligence", desc: "Real-time dashboards, KPIs, analytics, and actionable insights that help management monitor performance and make faster, data-driven decisions.", icon: TrendingUp }
  ];

  const modules = [
    { title: "Enquiry & Pre-Costing", desc: "Capture customer enquiries and develop accurate pre-costing for every garment style before accepting the order. Define style details, fabrics, trims, and overheads to arrive at the right selling price.", icon: FileText },
    { title: "Sampling", desc: "Manage the complete sample development cycle from design interpretation to fit, size-set, and PP samples. Track status, approvals, and revisions style-wise.", icon: Scissors },
    { title: "Buyer Order Management", desc: "Manage the customer order lifecycle from enquiry to confirmation, tracking style, colour, size, delivery date, pricing, and order budget in one place.", icon: ShoppingBag },
    { title: "Time & Action (T&A) Scheduler", desc: "Plan, schedule, and monitor every activity with automatic timelines. Ensure each department knows its target dates and identify delays before they impact delivery.", icon: Timer },
    { title: "Material Planning", desc: "Convert confirmed orders into detailed material and production plans. Plan the requirement of fabric, trims, manpower, and production capacity based on quantities.", icon: Package },
    { title: "Procurement", desc: "Manage the purchasing cycle from material requisition to supplier PO and receipt. Control procurement of fabric, trims, and packing materials with full visibility.", icon: Truck },
    { title: "Quality Control", desc: "Manage incoming material, in-line, and final inspection to ensure that quality standards are met at every single production and procurement stage.", icon: ShieldCheck },
    { title: "Inventory Management", desc: "Track and control garment materials and finished goods across multiple warehouses. Maintain real-time visibility of fabric, trims, WIP, and finished goods.", icon: Layers },
    { title: "Process Management", desc: "Manage and monitor garment processes carried out internally or through subcontractors. Track materials moving between departments and job workers.", icon: Activity },
    { title: "Production", desc: "Control garment production from cutting to stitching, finishing, and packing. Monitor production quantities, targets, output, rejection, wastage, and efficiency.", icon: Factory },
    { title: "Shipment", desc: "Manage the complete dispatch process from finished-goods readiness to packing, shipment, and delivery. Ensure the right quantity reaches the customer.", icon: Truck },
    { title: "Accounting & Finance", desc: "Powerful financial accounting integrated to the ERP. Take away the burden of finance by avoiding duplication. Integrate sales with finance for complete receivables visibility.", icon: Banknote },
    { title: "Visual Dashboards", desc: "Get real-time, visual insights into production, inventory, quality, and financial performance. Role-based dashboards highlight pending approvals and delays.", icon: LayoutDashboard }
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
    { q: "1. What is the garment ERP software?", a: "It's a management software designed specifically for manufacturers of apparel and covers costing and order management, production quality, dispatch, and costing all in one place." },
    { q: "2. Does Pinnacle ERP handle pre-costing before an order is confirmed?", a: "Yes, the Enquiry & Pre-Costing module lets you cost styles using fabric, trims, BOM, labour, and overheads before quoting the customer." },
    { q: "3. What is the Time & Action (T&A) Scheduler?", a: "It will automatically plan every step from order confirmation through shipment it flags delays before they can affect delivery dates." },
    { q: "4. Can it manage subcontracted or job-work processes?", a: "Yes, the Process Management module tracks materials and status for both internal processes and subcontract job work." },
    { q: "5. Does Pinnacle ERP integrate with Tally?", a: "Yes, it offers two-way Tally integration, syncing sales and accounting data automatically in both directions." },
    { q: "6. Can I track fabric and inventory across multiple warehouses?", a: "Yes, the Inventory module supports multi-warehouse tracking, including fabric rolls, lots, batches, and shades." },
    { q: "7. Does it support quality inspection at every production stage?", a: "Yes, Quality Management covers incoming material, in-line, and final inspection, along with rework tracking." },
    { q: "8. Can I track order-wise profitability?", a: "Yes, Order Management provides budget vs. actual cost tracking and order-wise profitability reports." },
    { q: "9. Is GST and e-invoicing supported?", a: "Yes, the Sales & Billing module supports GST invoicing along with E-Invoice and E-Way Bill integration." },
    { q: "10. How long does implementation take?", a: "Timelines depend on factory size and data volume, but implementation typically includes structured onboarding, training, and go-live support within a few weeks." }
  ];

  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">

      <Header />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Banner Image */}
        <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
          <Image
            src="/images/textile-erp/GARMENTS.webp"
            alt="Garment ERP Solutions"
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
                <ShoppingBag className="w-4 h-4" />
                <span>GARMENT ERP SOLUTIONS</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Garment ERP Software Built for the Complete Manufacturing Lifecycle
              </h1>
              
              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                From enquiry and costing to production, quality, and dispatch — Pinnacle ERP brings every stage of garment manufacturing onto one connected platform.
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
              Core Features of Pinnacle Garment ERP
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {features.map((feature, idx) => {
              const IconComp = feature.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 4) * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-md font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{feature.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed flex-grow tracking-normal !indent-0 !mb-0 !text-left")}>{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ONE PLATFORM INTRO (Navy) ── */}
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
                One Platform, From First Enquiry to Final Dispatch
              </motion.h2>

              <div className="space-y-5 mb-8">
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
                    <p className={cn(theme.p, "text-white text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0 !text-left")}>
                      {text}
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
              Complete Garment ERP Modules
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
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed flex-grow tracking-normal !indent-0 !mb-0 !text-left")}>{module.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US (Navy) ── */}
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
              What Makes Pinnacle ERP for Garment Industries Different
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whatMakesUs.map((item, idx) => {
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 max-w-5xl mx-auto">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 bg-gray-50 border border-gray-100 p-4 rounded-2xl hover:border-blue-200 transition-colors group"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-navy-900 leading-snug">
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Bring Every Stage of Garment Manufacturing Onto One Platform.</h2>
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
