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
  LineChart, ClipboardCheck, Timer, ShoppingBag, Banknote, Users, Briefcase, FileText
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

  const whatMakesUs = [
    { title: "Core ERP", desc: "Comprehensive integration of essential business functions such as Finance, Sales, Purchase, Inventory, Production, HR, and Operations within a single unified ERP platform.", icon: Layers },
    { title: "Industry Depth", desc: "Ability to provide industry-specific workflows, processes, controls, reports, and functionality tailored to the unique operational requirements of different industries.", icon: Factory },
    { title: "Manufacturing / Operations", desc: "Integrated management of production planning, BOM, MRP, material consumption, WIP, quality, job work, costing, machine operations, and finished goods.", icon: Scissors },
    { title: "Business Process Integration", desc: "Seamless integration of end-to-end business processes, connecting departments, transactions, workflows, and data in a single unified system.", icon: LinkIcon },
    { title: "Customization", desc: "Flexible configuration of workflows, forms, fields, reports, approvals, and business rules to match specific organizational and industry requirements.", icon: Settings },
    { title: "Industry-Specific Reporting", desc: "Specialized MIS and analytical reports designed to provide meaningful insights based on the unique processes, KPIs, and requirements of each industry.", icon: BarChart },
    { title: "Multi-Company / Branch", desc: "Centralized management of multiple companies, branches, locations, and warehouses with consolidated and entity-wise operational and financial reporting.", icon: Briefcase },
    { title: "Management Intelligence", desc: "Real-time dashboards, KPIs, analytics, and actionable insights that help management monitor performance and make faster, data-driven decisions.", icon: TrendingUp }
  ];

  const modules = [
    { title: "Enquiry & Pre-Costing", desc: "Capture customer enquiries and develop accurate pre-costing for every garment style before accepting the order. Define style details, fabrics, trims, accessories, use templates with Components, BOM, operations, labour, overheads, and other cost components to arrive at the right selling price.", icon: FileText },
    { title: "Sampling", desc: "Manage the complete sample development cycle from design interpretation to fit, size-set, and pre-production (PP) samples. Track sample status, buyer approvals, and revisions style-wise, ensuring the confirmed sample matches production specifications before bulk order execution begins.", icon: Scissors },
    { title: "Buyer Order Management", desc: "Manage the complete customer order lifecycle from enquiry, quotation, and order confirmation to production requirements and delivery. Maintain style, colour, size, quantity, delivery date, pricing, customer specifications, amendments, and order budget in one place.", icon: ShoppingBag },
    { title: "Time & Action (T&A) Scheduler", desc: "Plan, schedule, and monitor every activity from order confirmation to shipment, with automatic timelines based on the Order Date, Shipment Date, or Delivery Date. Ensure each department knows its target dates and identify delays before they impact delivery.", icon: Timer },
    { title: "Material Planning", desc: "Convert confirmed orders into detailed material and production plans. Plan the requirement of fabric, trims, accessories, packing materials, manpower, machines, and production capacity based on order quantities and delivery schedules.", icon: Package },
    { title: "Procurement", desc: "Manage the complete purchasing cycle from material requisition to supplier purchase order and receipt. Control procurement of fabric, trims, accessories, packing materials, and other production requirements based on planned demand, with full visibility of pending, approved, and received purchases.", icon: Truck },
    { title: "Quality Control", desc: "Manage the complete purchasing cycle from material requisition to supplier purchase and receipt. Control purchases of fabric, trims, accessories, packing materials, and other production requirements based on planned demand.", icon: ShieldCheck },
    { title: "Inventory Management", desc: "Track and control garment materials and finished goods across multiple warehouses and locations. Maintain real-time visibility of fabric, trims, accessories, WIP, and finished-goods stock.", icon: Layers },
    { title: "Process Management", desc: "Manage and monitor garment processes carried out internally or through subcontractors. Track materials moving between departments, job workers, and production processes with complete quantity and status visibility.", icon: Activity },
    { title: "Production", desc: "Control garment production from cutting to stitching, finishing, packing, and completion. Monitor production quantities, targets, output, rejection, wastage, and efficiency at each stage.", icon: Factory },
    { title: "Shipment", desc: "Manage the complete dispatch process from finished-goods readiness to packing, shipment, and delivery. Ensure the right quantity and assortment reaches the customer as per the order and delivery schedule.", icon: Truck },
    { title: "Accounting & Finance", desc: "It is powerful Financial Accounting software integrated to the Pinnacle ERP. This takes away the burden of financial Department by avoiding duplication and the manual errors of the financial department. Manage the financial side of customer sales. Integrate sales transactions with finance and accounting for complete receivables visibility.", icon: Banknote },
    { title: "Analytics & Visual Dashboards", desc: "Get real-time, visual insights into production, inventory, quality, and financial performance across every module. Role-based dashboards highlight pending approvals, delays, and key metrics at a glance — helping management make faster, data-backed decisions.", icon: LayoutDashboard }
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
            <ShoppingBag className="w-4 h-4" />
            <span>Garment ERP Solutions</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Garment ERP Software Built for the Complete Manufacturing Lifecycle
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-gray-300 text-center sm:text-center max-w-4xl")}
          >
            From enquiry and costing to production, quality, and dispatch — Pinnacle ERP brings every stage of garment manufacturing onto one connected platform.
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
              Core Features of Pinnacle Garment Management Software
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

        {/* One Platform Intro */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white mb-8 text-center")}
            >
              One Platform, From First Enquiry to Final Dispatch
            </motion.h2>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/30">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300 text-[16px] leading-relaxed")}>
                  Pinnacle Garment ERP is an end-to-end business management platform designed specifically for the garment industry. It connects every stage of your operation from customer enquiry and order management to production planning, sourcing, inventory, quality, packing, and final dispatch. Instead of managing different processes through disconnected software, spreadsheets, emails, and manual records, Pinnacle brings your entire garment business onto one integrated platform.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 border border-primary/30">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300 text-[16px] leading-relaxed")}>
                  With real-time visibility across departments, automated workflows, centralized data, and powerful reports, Pinnacle helps garment manufacturers and exporters reduce errors, improve efficiency, control costs, and deliver orders on time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What Makes Us */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-4xl mx-auto")}
            >
              What Makes Pinnacle ERP for Garment Industries
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatMakesUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
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

        {/* Garment ERP Modules */}
        <div className="max-w-6xl mx-auto mb-24 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-[#0b132a] mb-6")}
            >
              Complete Garment ERP Modules
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
                <p className={cn(theme.p, "text-gray-600 mb-0 flex-grow leading-relaxed")}>
                  {module.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* How We Get You Started (Process Flow) */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
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
                <h3 className="text-[14px] md:text-[15px] font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                  {process}
                </h3>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">Bring Every Stage of Garment Manufacturing Onto One Platform.</h2>
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
