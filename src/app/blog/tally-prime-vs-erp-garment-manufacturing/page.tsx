"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  CheckCircle2, 
  ExternalLink,
  AlertCircle,
  Layers,
  ArrowRight
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TallyVsGarmentERPPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tally Prime vs ERP for Garment Manufacturing: Which System Does Your Factory Need?",
    "description": "Outgrowing Excel for cutting, size-colour POs, and sub-contracting? Learn when to keep Tally Prime, how to sync a garment ERP, and avoid costly data errors.",
    "image": "https://www.pinnaclesystems.co.in/images/blog/tally_vs_garmnetsERp.webp",
    "datePublished": "2026-11-26T09:00:00+05:30",
    "dateModified": "2026-11-26T09:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Pinnacle Systems",
      "url": "https://www.pinnaclesystems.co.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pinnacle Systems",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pinnaclesystems.co.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.pinnaclesystems.co.in/blog/tally-prime-vs-erp-garment-manufacturing/"
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                Nov 26, 2026
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
              Tally Prime vs ERP for Garment Manufacturing: Which System Does Your Factory Need?
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── ARTICLE CONTENT (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* Social Share Sidebar */}
            <div className="hidden lg:block w-16 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Share Article
                </p>
                <button 
                  onClick={handleShare}
                  title="Copy link to clipboard"
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/50 transition-colors relative"
                >
                  <Share2 className="w-4 h-4" />
                  {copied && (
                    <span className="absolute left-12 bg-[#0b132a] text-white text-[11px] font-semibold px-2 py-1 rounded shadow whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Main Content */}
            <article className="flex-grow max-w-3xl">
              
              <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100">
                <img 
                  src="/images/blog/tally_vs_garmnetsERp.webp" 
                  alt="Tally Prime vs ERP for Garment Manufacturing" 
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>

              <div className="prose prose-lg max-w-none text-[#0b132a]">
                
                <p className={cn(theme.p, "text-[18px] leading-relaxed mb-6 font-medium text-gray-800")}>
                  If you have a garment factory in Tirupur, Ludhiana or Surat, it is likely that you have Tally Prime set up with the financial data of your business and running smoothly. However, once your orders get more complex, say your buyer sends you size colour charts, you send the fabric to a dyer and receive back more fabric than you originally had. Your merchandise manager asks if your cutting will be finished on time to meet your delivery date. This information can be found by looking at 3 Excel documents.
                </p>

                <p className={cn(theme.p, "mb-8 text-gray-600")}>
                  Then somebody mentions ERP, and somebody points out that Tally already has stock and GST management. This is true. Tally Prime is accounting software. Garment ERP helps you track your orders through the production area. Choosing whether to use Tally Prime or an ERP system for your garment factory isn't really about choosing between the two. It is about deciding which system should be responsible, what information it should hold and how they should work together.
                </p>

                {/* The short answer */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>The short answer</h2>
                
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-12">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#0b132a] text-white">
                      <tr>
                        <th className="py-4 px-5 font-semibold text-sm tracking-wide">Your situation</th>
                        <th className="py-4 px-5 font-semibold text-sm tracking-wide">What usually makes sense</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 text-gray-800 font-medium">Mostly Sub-contracting or trading, few styles, one unit, small team.</td>
                        <td className="py-4 px-5 text-gray-600">Stay on Tally Prime. Tighten stock-item and bill of materials discipline.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-4 px-5 text-gray-800 font-medium">Own cutting and stitching, many styles a month, buyer POs with size-colour breakup</td>
                        <td className="py-4 px-5 text-gray-600">Add a garment ERP for production. Keep Tally Prime for accounts. Sync both ways.</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 text-gray-800 font-medium">Several units, export orders with LC and duty drawback, finance team wanting one database</td>
                        <td className="py-4 px-5 text-gray-600">Evaluate a full ERP that includes accounts and plan the move of Tally history deliberately.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* What does Tally Prime do well */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  What does Tally Prime do well in a garment factory?
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Tally Prime has several advantages which most users will have chosen it for. It can handle your ledgers, GST, e-invoicing, chasing, and valuation of stock. It can also handle more manufacturing than you might think. You can create a bill of material for your finished product, create stock journal and manufacturing journal vouchers and manage your <a href="https://help.tallysolutions.com/job-work/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Sub-contracting orders in Tally Prime <ExternalLink className="w-3.5 h-3.5 inline" /></a> as a prime manufacturer or job worker.
                </p>
                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  This may be sufficient if your unit is mainly doing stitching with a small amount of different styles. However, problems occur when you have questions to ask regarding the order rather than the voucher.
                </p>

                {/* Where the gap shows up */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Where the gap shows up
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  An accounting system can be used to track what has happened. It will be necessary to have visibility in garment manufacturing so that action can be taken at an early stage. This is typically seen in:
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    { label: "Order Matrix", desc: "Buyer creates 1 PO which gets converted into dozens of size/colour combinations. How many size M navy items were cut, sewn and packed? As 1 SKU is created per size/colour combination, there will be a lot of SKUs in the accounts." },
                    { label: "Cut planning", desc: "Marker efficiency, lay plans and end bits are determined before cutting. The consumption is then seen in accounts." },
                    { label: "Fabric Variance", desc: "Planning vs. actual consumption per order." },
                    { label: "Work In Progress", desc: "Bundles being cut, sewn and checked along with line balancing and standard minutes." },
                    { label: "Time and Action", desc: "Are trims, approvals and cutting on the critical path to ship date?" },
                    { label: "Piece rate wages and incentive", desc: "Pay linked to production must reflect what was produced on each line." },
                    { label: "Costing per order", desc: "Fabric, trims, Sub-contracting and wages can be viewed." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">
                        <strong className="text-navy-900 font-semibold">{item.label} – </strong>{item.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  Units can also cause issues. Yarn is purchased in KG’s, knitted fabric issued in KG’s or rolls, woven fabric in metres and garments sold in pieces or dozens. If the conversion factor isn’t held against the item and process, discrepancies will occur between departments.
                </p>

                {/* A worked example */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  A worked example
                </h2>
                <p className="text-sm italic text-gray-500 mb-4">
                  These figures are illustrative; use your own consumption and allowances.
                </p>

                <div className="bg-gray-50 border-l-4 border-primary rounded-r-2xl p-6 mb-6">
                  <p className="text-gray-800 font-medium mb-3">
                    Take an order of 12,000 knit T-shirts, budgeted at 0.22 kg of finished fabric per piece.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                      <span>Fabric needed: 12,000 × 0.22 = <strong>2,640 kg</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                      <span>Add a 5% allowance for shrinkage and cutting loss: about <strong>2,772 kg to plan for</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                      <span>Cutting actually consumes 2,910 kg: <strong>138 kg over plan, about 5%</strong></span>
                    </li>
                  </ul>
                </div>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  In an accounts-led flow, you usually find this when the stock journal is posted or at the month-end stock check. In a production ERP, the variance shows against that order when the cut is closed, while you can still look at marker length, fabric width or lay height before the next order repeats the loss. The earlier article on <Link href="/blog/reduce-textile-wastage/" className="text-primary hover:underline font-semibold">reducing production wastage in textile manufacturing</Link> covers causes and fixes in more depth.
                </p>

                {/* Sub-contracting and GST */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Sub-contracting and GST
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Sub-contracting is common in garment clusters. Different Sub-contracting Workers may undertake the knitting, dyeing, compacting, printing & stitching processes. Delivery Challans are raised for goods sent to sub-contracting under section 143 of the CGST Act. There is a form GST ITC-04 that needs to be filled for showing items sent out and received.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Something that many teams miss is that ITC-04 was a quarterly return up to September 2021. From 01/10/2021, as per the <a href="https://tutorial.gst.gov.in/userguide/inputtaxcredit/Manual_itc04.htm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">GST portal guidance <ExternalLink className="w-3.5 h-3.5 inline" /></a> note for ITC-04, it is raised half-yearly if the aggregate turnover is greater than 5cr and annual if up to 5cr. Many old articles and notes show this as a quarterly return, but please do check with your CA. Most inputs will be received back within 1 year and capital goods within 3 years. If goods are not returned within the correct time, they can be considered a supply.
                </p>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  The actual problem is not usually filling out the form. The issue is creating a workflow from yarn to knitter, grey to dyer, dyed to compactor, printing and then stitching unit. Each section will have its own challan, quantity, expected loss and return date. Tally Prime can be used to record Sub-contracting orders and movement of material. However, usually factories will want to see a garment order-based report so they know which style is with which job worker. They will also want to know how much process loss each processor has indicated against the allowed amount. A production ERP will help here, or a well-constructed report based on Tally data.
                </p>

                {/* Keep, add or replace: three paths */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Keep, add or replace: three paths
                </h2>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#0b132a] text-white">
                      <tr>
                        <th className="py-4 px-5 font-semibold text-sm tracking-wide">Path</th>
                        <th className="py-4 px-5 font-semibold text-sm tracking-wide">Works when</th>
                        <th className="py-4 px-5 font-semibold text-sm tracking-wide">Watch out for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-semibold text-navy-900 whitespace-nowrap">Stay on Tally Prime</td>
                        <td className="py-4 px-5 text-gray-700">Few styles, simple flow, one unit, a disciplined team</td>
                        <td className="py-4 px-5 text-red-600 font-medium">Shadow Excel sheets, stock mismatches, costing done after the fact</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-4 px-5 font-semibold text-primary whitespace-nowrap">Garment ERP plus Tally sync</td>
                        <td className="py-4 px-5 text-gray-700">Production and merchandising are the pain; The accounts team is happy with Tally</td>
                        <td className="py-4 px-5 text-amber-700 font-medium">Sync design: unclear ownership of data creates duplicates</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-semibold text-navy-900 whitespace-nowrap">Full ERP replacing Tally</td>
                        <td className="py-4 px-5 text-gray-700">Multiple units, export finance, one database wanted by management</td>
                        <td className="py-4 px-5 text-amber-700 font-medium">Migration effort, retraining the accounts team, a parallel run</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Large platforms such as SAP and Infor cover multi-country apparel groups. For a single-state factory, they are typically more system than needed, and the budget and timeline reflect that. Most Indian garment manufacturers land on the middle path or a mid-market garment ERP.
                </p>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  If you are unsure which row describes you, list your last three months of buyer orders with the number of styles, size-colour combinations and Sub-contracting per order. The pattern usually answers the question.
                </p>

                {/* How a Tally integrated textile ERP works */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  How a Tally integrated textile ERP works
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Tally Prime supports data exchange over XML, JSON and ODBC. Per Tally's own page on <a href="https://help.tallysolutions.com/getting-started-with-tally-integrations/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Tally Prime integration options <ExternalLink className="w-3.5 h-3.5 inline" /></a>, XML works in both directions, and JSON and ODBC paths typically involve TDL customisation. An outside system can push vouchers or masters into Tally over HTTP, and Tally can also pull data from an external system. A garment ERP that offers a Tally bridge for garment manufacturing uses these routes to move data. That is the plumbing. The design question is ownership.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  A workable split for two-way Tally sync in textile software looks like this. It is one sensible model, not the only one.
                </p>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#0b132a] text-white">
                      <tr>
                        <th className="py-3.5 px-4 font-semibold text-sm">Data</th>
                        <th className="py-3.5 px-4 font-semibold text-sm">Created in</th>
                        <th className="py-3.5 px-4 font-semibold text-sm">Flows to</th>
                        <th className="py-3.5 px-4 font-semibold text-sm">Why</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Party and ledger masters</td>
                        <td className="py-3.5 px-4 text-gray-700 font-medium">Tally (accounts team)</td>
                        <td className="py-3.5 px-4 text-gray-700">ERP</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">One party list, consistent GST details</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Styles, BOMs, size-colour detail</td>
                        <td className="py-3.5 px-4 text-primary font-medium">ERP</td>
                        <td className="py-3.5 px-4 text-gray-700">Tally at item or group level only</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">Tally does not need every size and colour</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Fabric and trims purchase bills</td>
                        <td className="py-3.5 px-4 text-primary font-medium">ERP, from PO and goods receipt</td>
                        <td className="py-3.5 px-4 text-gray-700">Tally</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">Entry happens once, where the goods arrive</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Sales and export invoices</td>
                        <td className="py-3.5 px-4 text-primary font-medium">ERP, from packed quantity</td>
                        <td className="py-3.5 px-4 text-gray-700">Tally</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">The invoice follows what was actually packed</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Sub-contracting challans and movements</td>
                        <td className="py-3.5 px-4 text-primary font-medium">ERP</td>
                        <td className="py-3.5 px-4 text-gray-700">Tally, as vouchers</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">One challan series for GST and ITC-04</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors bg-gray-50/40">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Payroll or piece-rate summary</td>
                        <td className="py-3.5 px-4 text-primary font-medium">ERP</td>
                        <td className="py-3.5 px-4 text-gray-700">Tally, as a journal</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">Totals, not each worker</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-navy-900">Receipts, payments, outstanding</td>
                        <td className="py-3.5 px-4 text-gray-700 font-medium">Tally</td>
                        <td className="py-3.5 px-4 text-gray-700">ERP, as a view for merchandisers</td>
                        <td className="py-3.5 px-4 text-gray-600 text-sm">Accounts owns the money</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  To sync Tally Prime with a production ERP safely, give each data type one system of record. Where both systems can edit the same voucher, conflicts follow. Add a monthly control check, such as ERP closing stock value against Tally stock value, so differences surface as numbers rather than as surprises at audit time.
                </p>

                {/* Sync mistakes to avoid */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Sync mistakes to avoid
                </h2>

                <ul className="space-y-4 mb-12">
                  {[
                    { title: "Pushing size-colour detail into Tally", desc: "It slows data entry and clutters reports. Summarise at style or item-group level." },
                    { title: "Letting both systems create parties", desc: "Duplicate GSTINs and spelling variants multiply quickly." },
                    { title: "Unit mismatches at the boundary", desc: "Decide where kg-to-metres-to-pieces conversion happens, and apply it in one place." },
                    { title: "Backdated edits after filing", desc: "Agree a lock date so ERP changes do not alter periods already reported in GST returns." },
                    { title: "No visible error log", desc: "If a voucher fails to sync, someone should see it the same day, not at month-end." },
                    { title: "Skipping a parallel month", desc: "Run both for at least one closing cycle before trusting the numbers." }
                  ].map((mistake, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">
                        <strong className="text-navy-900 font-semibold">{mistake.title}:</strong> {mistake.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Questions to ask a vendor */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Questions to ask a vendor
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  When you evaluate an apparel ERP with Tally accounting integration, ask for answers in writing:
                </p>

                <ul className="space-y-3 mb-12 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li>Which Tally versions does the bridge support, and who maintains it when Tally changes?</li>
                  <li>Which data flows in each direction, and which system wins in a conflict?</li>
                  <li>What happens when a voucher fails to post, and who sees the error?</li>
                  <li>How are units, GST ledgers and cost centres mapped?</li>
                  <li>How are Sub-contracting challans and process loss handled for ITC-04 reconciliation?</li>
                  <li>Can the sync run on a schedule and on demand?</li>
                  <li>What does the migration of open orders and opening stock involve?</li>
                  <li>Can you speak to a garment manufacturer already running the same setup?</li>
                </ul>

                {/* Where Pinnacle Systems fits */}
                <h2 className={cn(theme.h2, "text-[26px] md:text-[30px] text-navy-900 mt-12 mb-6")}>
                  Where Pinnacle Systems fits
                </h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Pinnacle Systems builds ERP software for textile and garment manufacturers, including its <Link href="/textile-erp-software/garment-erp-software/" className="text-primary hover:underline font-semibold">garment ERP software</Link> for order, cutting, production and Sub-contracting tracking, as part of a wider <Link href="/textile-erp-software/" className="text-primary hover:underline font-semibold">textile ERP software</Link> range. For factories already on Tally Prime, the practical conversation is which of the data flows above matter on day one. Most teams start with masters and invoices, then add Sub-contracting and costing once the first cycle reconciles.
                </p>

                {/* Conclusion Callout */}
                <div className="bg-[#0b132a] text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                  <h3 className="text-primary text-xl font-bold mb-3 relative z-10">Conclusion</h3>
                  <p className="font-medium leading-relaxed relative z-10 text-[16px] text-gray-200 mb-4">
                    Tally Prime is not the problem in most garment factories; missing production visibility is. If your flow is simple, tidy Tally and keep going. If orders, cutting and Sub-contracting have outgrown Excel, adding a garment ERP and syncing it with Tally is usually less disruptive than replacing your accounts system. Only when several units, export finance and one shared database become the priority does a full replacement deserve a serious look.
                  </p>
                  <p className="text-gray-300 relative z-10 text-[15px]">
                    If you want to test your own situation, share a recent buyer order with your size-colour breakdown and Sub-contracting, and we can map where Tally Prime would hold the data and where a garment ERP would take over.
                  </p>
                </div>

                <hr className="my-12 border-gray-200" />
                
                {/* Embedded CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 rounded-r-2xl mt-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to scale your garment manufacturing?</h3>
                  <p className="text-gray-600 mb-6">See how Pinnacle Garment ERP seamlessly connects shop-floor production with Tally accounting.</p>
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
