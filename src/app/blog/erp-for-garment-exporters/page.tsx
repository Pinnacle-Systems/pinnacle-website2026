"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Tag, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function GarmentExportersArticlePage() {
  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">
      <Header />
      
      {/* ── HERO (Navy) ── */}
      <div className="bg-[#0b132a] relative overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Textile ERP Software
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                Sep 5, 2026
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                6 min read
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(theme.h1, "text-white mb-6 text-left")}
            >
              ERP for Garment Exporters: How the Right System Simplifies Buyer Orders, Compliance, and Shipments.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── ARTICLE CONTENT (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* Social Share Sidebar (Hidden on small screens) */}
            <div className="hidden lg:block w-16 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Share Article
                </p>
                <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/50 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <article className="flex-grow max-w-3xl">
              
              <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Garment Export Shipping Containers" 
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>

              <div className="prose prose-lg max-w-none text-[#0b132a]">
                <p className={cn(theme.p, "text-[18px] leading-relaxed mb-6 font-medium text-gray-800")}>
                  Garment exporters operate under pressure that domestic manufacturers rarely face — strict buyer specifications, letter of credit (LC) terms, export documentation, and delivery windows that leave no room for error. A single missed shipment date or costing mistake can mean lost margins or a damaged buyer relationship. This is exactly why generic manufacturing software falls short, and why ERP for garment exporters has become essential rather than optional for units serious about scaling international business.
                </p>
                
                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  In this guide, we&apos;ll break down what an export-focused garment ERP actually needs to do, the specific challenges it solves, and how to evaluate whether your current system is holding your export business back.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>Why Garment Exporters Need a Different Kind of ERP</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Most ERP software is built for general manufacturing — not for the specific realities of <Link href="/textile-erp-software/garment-erp-software" className="text-primary hover:underline font-semibold">garment export management</Link>. Export-driven garment units deal with challenges that a standard system simply isn&apos;t designed to handle:
                </p>

                <ul className="space-y-4 mb-8 mt-2">
                  {[
                    "Buyer purchase orders (POs) with complex size, colour, and quantity breakdowns",
                    "Multiple costing and quotation versions before an order is confirmed",
                    "Export documentation, HS code / HSN classification, and customs paperwork",
                    "Letter of credit (LC) terms tied directly to shipment timelines",
                    "Multi-currency invoicing for international buyers",
                    "Compliance reporting for schemes like RoDTEP and duty drawback"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  An apparel export ERP system needs to connect all of this — buyer specifications, production status, and compliance documentation — into a single, real-time view. Without it, exporters end up managing critical export deadlines across spreadsheets, email threads, and manual registers, which is where costly mistakes creep in.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">The Real Cost of Not Having Export-Focused ERP Software</h3>
                  <p className={cn(theme.p, "mb-6 text-gray-600 !indent-0")}>
                    Before looking at solutions, it&apos;s worth understanding what&apos;s actually at stake for units still relying on generic systems or manual tracking:
                  </p>
                  <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                    <li>Missed shipment dates due to poor visibility into production-to-shipment timelines</li>
                    <li>Costing errors from manually recalculating fabric, trims, and labour for every buyer negotiation</li>
                    <li>Compliance risk from incomplete or delayed export documentation</li>
                    <li>Buyer trust erosion when order status can&apos;t be communicated accurately or quickly</li>
                  </ul>
                  <p className={cn(theme.p, "mb-0 text-gray-800 font-medium !indent-0")}>
                    For export-oriented units, these aren&apos;t minor inefficiencies — they directly affect repeat business, since international buyers typically work with a small, trusted vendor base.
                  </p>
                </div>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Core Capabilities of ERP Software for Garment Exporters</h2>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Buyer Order & PO Management</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  An effective ERP for export-oriented garment units starts with structured buyer order management — capturing PO details, size and colour breakdowns, buyer-specific requirements, and amendments without losing traceability back to the original order. This is foundational to everything downstream, from production planning to shipment.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Style-Wise Costing and Quotation Management</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Export orders are often negotiated over multiple rounds before confirmation. Style-wise costing — covering fabric, trims, labour, and overheads — allows exporters to generate accurate quotations quickly and compare costing versions before finalizing a price with the buyer.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Time & Action (T&A) Calendar for Shipment Compliance</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  A Time & Action (T&A) calendar is one of the most critical tools for export compliance. It maps every activity — from order confirmation to fabric sourcing, cutting, production, inspection, and dispatch — against the final shipment date, flagging delays before they put the delivery window at risk.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Export Documentation & Compliance Reporting</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  From HS code classification to customs paperwork, export documentation software capabilities within the ERP reduce the manual burden of compliance work, helping exporters generate accurate, ready-to-file documentation aligned with GST for exports and applicable export incentive schemes.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Quality Inspection for Export Orders</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  International buyers typically enforce strict quality standards. In-line and final inspection tracking, tied to buyer-specific quality parameters, ensures quality inspection for export orders is consistent and documented — reducing the risk of rejected shipments.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Multi-Currency Invoicing and Buyer Billing</h3>
                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  Since export transactions typically involve international buyers, multi-currency invoicing is essential for accurate billing, receivables tracking, and financial reconciliation without manual currency conversion errors.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>How ERP Improves On-Time Shipment for Garment Exporters</h2>
                <p className={cn(theme.p, "mb-8 text-gray-600")}>
                  On-time shipment is the single biggest factor influencing whether an international buyer places repeat orders. Here&apos;s how an integrated system directly supports this:
                </p>

                <div className="space-y-6 mb-12">
                  <div className="border-l-4 border-primary pl-5">
                    <h4 className="text-[18px] font-bold text-navy-900 mb-2">Real-Time Production-to-Shipment Tracking</h4>
                    <p className="text-gray-600">Rather than checking with multiple departments individually, exporters get a single view of order status — from cutting and production through to final packing and dispatch.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-5">
                    <h4 className="text-[18px] font-bold text-navy-900 mb-2">Delivery Schedule Compliance Alerts</h4>
                    <p className="text-gray-600">Automated alerts flag when a style, order, or shipment is trending behind schedule, giving management time to react before the delivery date is missed.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-5">
                    <h4 className="text-[18px] font-bold text-navy-900 mb-2">Vendor and Supplier Coordination</h4>
                    <p className="text-gray-600">Since fabric and trims sourcing often involves multiple vendors, vendor and supplier management within the ERP ensures material delays are visible early, rather than discovered only at the cutting stage.</p>
                  </div>
                </div>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Evaluating ERP Options: What to Look for as a Garment Exporter</h2>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Industry-Specific vs. Generic ERP</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  The single biggest evaluation criterion is whether the system was built specifically for garment manufacturing and export workflows, or adapted from a generic manufacturing template. Export-specific features — T&A scheduling, buyer PO management, <a href="https://www.invoicera.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">multi-currency billing</a> — are rarely present in generic ERP systems.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Integration With Existing Systems</h3>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Look for ERP integration with Tally or your existing accounting software, so financial data doesn&apos;t need to be re-entered manually across systems.
                </p>

                <h3 className="text-2xl font-bold text-navy-900 mt-8 mb-3">Scalability for Multi-Buyer, Multi-Order Complexity</h3>
                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  As export volume grows, the ERP needs to handle increasing order complexity — multiple buyers, overlapping delivery schedules, and varying compliance requirements — without slowing down production planning.
                </p>

                <div className="bg-[#0b132a] text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                  <p className="font-medium leading-relaxed relative z-10 text-[16px]">
                    <span className="text-primary font-bold">Conclusion:</span> For garment exporters, success isn&apos;t just about production capacity — it&apos;s about visibility, accuracy, and speed at every stage from buyer order to final shipment. A purpose-built ERP for garment exporters brings buyer PO management, style-wise costing, T&A scheduling, and export compliance together in one system, eliminating the manual gaps where delays, costing errors, and missed deadlines typically occur. If you&apos;re still managing export orders across spreadsheets and disconnected tools, the right ERP isn&apos;t just an efficiency upgrade — it&apos;s what protects your buyer relationships and your margins.
                  </p>
                </div>

                <hr className="my-12 border-gray-200" />

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Frequently Asked Questions</h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">What is ERP for garment exporters?</h3>
                    <p className="text-gray-600">ERP for garment exporters is a management system built specifically to handle buyer order management, export compliance, costing, and production tracking for apparel units that manufacture and ship internationally.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">How does ERP help with export compliance?</h3>
                    <p className="text-gray-600">It centralizes export documentation, HS code classification, and compliance reporting, reducing manual paperwork and lowering the risk of delayed or incorrect filings.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Can ERP software handle multiple buyers and currencies?</h3>
                    <p className="text-gray-600">Yes, a well-built garment export ERP supports multi-currency invoicing and buyer-wise order tracking, even when managing dozens of concurrent international orders.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Does ERP improve on-time shipment rates?</h3>
                    <p className="text-gray-600">Yes, through T&A scheduling and real-time production tracking, ERP systems flag delays early enough for corrective action before they affect the shipment date.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Is ERP for garment exporters different from a standard garment ERP?</h3>
                    <p className="text-gray-600">Yes, while it shares core manufacturing modules with standard garment ERP, export-focused systems add buyer PO management, export documentation, and multi-currency billing specific to international trade.</p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>Bringing Buyer Orders, Compliance, and Production Together</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  For garment exporters, the difference between a smooth shipment cycle and a stressful one usually comes down to visibility — knowing exactly where every order, every buyer requirement, and every compliance deadline stands at any given moment. That&apos;s precisely what a purpose-built ERP for garment exporters is designed to deliver.
                </p>
                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  If you&apos;re currently managing export orders across spreadsheets and manual trackers, it may be time to see what a connected system looks like in practice. Our Garment ERP Software is built around these exact workflows — from pre-costing and buyer order management to T&A scheduling and dispatch — and connects directly with modules like Cutting Management Software and Textile Payroll Software for complete floor-to-shipment visibility.
                </p>
                
                {/* Embedded CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 rounded-r-2xl mt-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to scale your export business?</h3>
                  <p className="text-gray-600 mb-6">See how Pinnacle ERP simplifies compliance and ensures on-time shipments.</p>
                  <Link href="?contact=true" scroll={false} className={cn(theme.buttonPrimary, "px-6 py-3 text-sm")}>
                    Book a Free Demo
                  </Link>
                </div>

              </div>
            </article>

          </div>
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
