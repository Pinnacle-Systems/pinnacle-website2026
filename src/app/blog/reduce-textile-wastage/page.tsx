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
  ChevronDown, 
  AlertTriangle, 
  TrendingDown, 
  Layers, 
  Scissors, 
  Settings, 
  Database, 
  Sparkles,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ReduceTextileWastageArticlePage() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What are the main types of textile waste in a manufacturing industry?",
      a: "Yarn waste, fabric scrap, and cutting waste are the most common types of textile waste. Process loss during dyeing, rejected or reworked garments, and leftover trims and roll ends from closed orders also significantly contribute to overall textile waste."
    },
    {
      q: "How much wastage is acceptable in garment manufacturing?",
      a: "The acceptable amount of wastage in garment manufacturing depends on the fabric type, garment style complexity, and production process. Rather than relying on a generic industry benchmark, set realistic BOM allowances based on recent order history and aim to incrementally reduce them through process optimization."
    },
    {
      q: "Where should I start if I don't track wastage today?",
      a: "Begin by selecting 2 to 3 active production orders and recording actual fabric consumption against the BOM allowance, alongside defect rejections at each stage. Even a simple spreadsheet tracking roll-wise consumption will instantly reveal where the widest gap between planned and actual costs lies."
    },
    {
      q: "How can I improve marker efficiency?",
      a: "Boost marker efficiency by utilizing the actual measured fabric width and lot-specific shrinkage rather than nominal specs. Routinely review markers by style, and implement roll-wise lay planning so that shorter rolls and remnant end-bits are utilized intentionally rather than discarded."
    },
    {
      q: "Is lean manufacturing suitable for small textile industries?",
      a: "Yes, lean manufacturing is an exceptional fit for small and medium textile units as long as it stays practical and low-cost. Tools like 5S, standard operating procedures, and visual management boards require minimal investment. Indian MSMEs can also leverage financial support through the official MSME Competitive (Lean) Scheme."
    },
    {
      q: "Can ERP software really reduce textile waste?",
      a: "ERP software provides the critical real-time visibility needed to reduce waste—revealing exactly where losses occur by lot, machine, shift, and stage before an order closes. The software doesn't fix machines, but it equips plant managers with actionable variance data to eliminate recurring mistakes."
    },
    {
      q: "What should manufacturers do with unavoidable textile waste?",
      a: "The most effective approach is to segregate waste by fiber type and color directly at the source—such as the cutting table or sewing line. Weigh and record each lot to maintain inventory traceability, then sell or route it to certified recyclers and upcyclers. Clean, pre-sorted scrap commands a significantly higher salvage value than mixed, contaminated waste."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Reduce Production Wastage in Textile Manufacturing",
    "description": "Learn where the textile industry loses fabric, yarn, and time, and how to reduce production wastage with lean methods, better planning, and ERP-led tracking.",
    "image": "https://www.pinnaclesystems.co.in/images/blog/image_hd.webp",
    "datePublished": "2026-10-28T09:00:00+05:30",
    "dateModified": "2026-10-28T09:00:00+05:30",
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
      "@id": "https://www.pinnaclesystems.co.in/blog/reduce-textile-wastage/"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Textile ERP Software
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                Oct 28, 2026
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(theme.h1, "text-white mb-6 text-left")}
            >
              How to Reduce Production Wastage in Textile Manufacturing
            </motion.h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              Learn where the textile industry loses fabric, yarn, and time, and how to reduce production wastage with lean methods, better planning, and ERP-led tracking.
            </p>
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
                <p 
                  className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" 
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Share Article
                </p>
                <button 
                  onClick={handleShare}
                  title="Copy link to clipboard"
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/50 transition-colors relative"
                >
                  <Share2 className="w-4 h-4" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] bg-navy-900 text-white px-2 py-0.5 rounded shadow whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Main Content */}
            <article className="flex-grow max-w-3xl">
              
              {/* Featured Banner Image */}
              <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100 bg-gray-50">
                <img 
                  src="/images/blog/image_hd.webp" 
                  alt="Textile manufacturing wastage reduction banner" 
                  className="w-full h-auto object-cover max-h-[460px]"
                />
              </div>

              <div className="prose prose-lg max-w-none text-[#0b132a]">
                
                {/* Highlight Callout */}
                <div className="bg-gradient-to-br from-primary/5 via-blue-50/40 to-transparent border-l-4 border-primary p-6 sm:p-8 rounded-r-2xl mb-8">
                  <p className={cn(theme.p, "text-[18px] leading-relaxed mb-0 font-medium text-gray-800")}>
                    Textile owners know their pain points by heart: costly yarn, rising labour bills, demanding buyers. <span className="font-semibold text-primary">“If you ask how close the fabric used on the last order was to its BOM, most people can&apos;t give you a number.”</span> It&apos;s in this gap, between what was planned and what was actually used, that profit slips out the door—often without anyone noticing.
                  </p>
                </div>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Waste is rarely one catastrophic mistake. It is an accumulation of small leakages occurring quietly through the knitting process, the dyeing process, the stitching process, the cutting process, and finishing. None of these individual failures is big enough by itself to make management panic about whether an order will turn a profit. Yet combined, they represent thousands of meters of squandered fabric and wasted machine hours.
                </p>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  This handbook shows you where those losses happen, how to track them down with precision, and what operational changes consistently bring that lost profit back onto your balance sheet.
                </p>

                {/* ── SECTION: Where wastage actually happens ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Where Wastage Actually Happens
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  &ldquo;Textile waste&rdquo; is an umbrella term for distinctly different operational issues. Sorting them out by stage is critical because each issue has an accountable person, a specific root cause, and a different method of resolution.
                </p>

                {/* Wastage Table */}
                <div className="overflow-x-auto my-8 rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#0b132a] text-white">
                        <th className="py-4 px-5 font-semibold text-xs tracking-wider uppercase">Stage</th>
                        <th className="py-4 px-5 font-semibold text-xs tracking-wider uppercase">Typical Waste</th>
                        <th className="py-4 px-5 font-semibold text-xs tracking-wider uppercase">Usual Cause</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-navy-900 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mr-2">1</span>
                          Yarn / Knitting
                        </td>
                        <td className="py-4 px-5 text-gray-700">Yarn waste (hard and soft waste, cone-end remnants), knitting faults, needle lines</td>
                        <td className="py-4 px-5 text-gray-600">Poor yarn quality or storage, incorrect machine settings, absence of lot-wise tracking</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-navy-900 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mr-2">2</span>
                          Dyeing &amp; Processing
                        </td>
                        <td className="py-4 px-5 text-gray-700">Shade mismatch, re-dyeing, shrinkage and width variation, process loss</td>
                        <td className="py-4 px-5 text-gray-600">Recipe or lot variation, unclear shade approval, wrong GSM or width at finishing</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-navy-900 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mr-2">3</span>
                          Cutting
                        </td>
                        <td className="py-4 px-5 text-gray-700">Cutting waste, end bits, wrong lay, fabric left on the roll</td>
                        <td className="py-4 px-5 text-gray-600">Low marker efficiency, poor spreading tension, lack of roll-wise lay planning</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-navy-900 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mr-2">4</span>
                          Stitching &amp; Finishing
                        </td>
                        <td className="py-4 px-5 text-gray-700">Rejected pieces, rework, repeat washing, lost trims and accessories</td>
                        <td className="py-4 px-5 text-gray-600">Operator skill gaps, unclear tolerance specs, delayed quality checks</td>
                      </tr>
                      <tr className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-4 px-5 font-bold text-navy-900 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mr-2">5</span>
                          Stores &amp; Planning
                        </td>
                        <td className="py-4 px-5 text-gray-700">Excess or dead stock, leftover fabric, expired trims</td>
                        <td className="py-4 px-5 text-gray-600">Over-booking buffer, lack of consumption tracking, BOM mismatch</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className={cn(theme.p, "mb-8 text-gray-600")}>
                  Fabric scraps and cutting waste are the most visible on the shop floor, so they tend to receive the most immediate attention. However, fixing mistakes downstream—such as re-dyeing lots, altering finished panels, or discarding rejected stitched garments—often costs drastically more. That is because both the raw material and the cumulative labor, processing energy, and machine time already invested are completely written off.
                </p>

                {/* ── SECTION: Wastage baseline ── */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 my-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <TrendingDown className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">Start by Measuring: Build a Wastage Baseline</h3>
                      <p className="text-xs text-gray-500">Record these 5 essential metrics for every production order</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    You cannot systematically reduce waste if you do not track it in real time. Before modifying machine parameters or reorganizing shifts, pick these vital baseline numbers:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Formula 1</span>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Fabric Variance (%)</h4>
                      <code className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded block overflow-x-auto font-mono">
                        (Actual Fabric Used − BOM Fabric) ÷ BOM Fabric × 100
                      </code>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Formula 2</span>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Marker Efficiency (%)</h4>
                      <code className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded block overflow-x-auto font-mono">
                        Area of Pattern Pieces ÷ Area of Marker × 100
                      </code>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Tracking Metric</span>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Stage-Wise Process Loss (%)</h4>
                      <p className="text-xs text-gray-600">Calculated step-by-step: yarn to greige fabric, greige to finished processed fabric.</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-sm">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">Tracking Metric</span>
                      <h4 className="font-bold text-navy-900 text-sm mb-1">Rejection &amp; Rework Rate (%)</h4>
                      <p className="text-xs text-gray-600">Categorized by stage, style complexity, and individual buyer standards.</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Always reconcile leftover fabric rolls and trims immediately as soon as an order closes.</span>
                  </div>
                </div>

                {/* ── SUB-SECTION: Fabric Variance Example ── */}
                <h3 className={cn(theme.h3, "text-[22px] md:text-[24px] text-navy-900 mt-10 mb-4")}>
                  A Simple Fabric Variance Example
                </h3>
                
                <p className={cn(theme.p, "mb-4 text-gray-600")}>
                  These numbers are illustrative, not benchmarks, but they reflect standard shop-floor realities:
                </p>

                {/* Example Card */}
                <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-8 my-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-center sm:text-left border-b border-white/10 pb-6 mb-6">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Order Volume</p>
                      <p className="text-2xl font-bold text-white">10,000 T-Shirts</p>
                      <p className="text-xs text-gray-400 mt-1">@ 0.30 kg BOM fabric allowance</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Planned vs. Actual</p>
                      <p className="text-2xl font-bold text-amber-400">3,000 → 3,270 kg</p>
                      <p className="text-xs text-amber-300 mt-1">Variance: +270 kg (+9.0%)</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Financial Loss</p>
                      <p className="text-2xl font-bold text-red-400">₹81,000 Loss</p>
                      <p className="text-xs text-red-300 mt-1">@ ₹300 per kg on one order</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-0 relative z-10">
                    The next crucial question is: <strong className="text-white">Where did those 270 kilograms go?</strong> Did it slip away into sub-optimal marker efficiency, unexpected width shrinkage beyond tolerance, a re-dyed dye bath, or unrecorded over-cutting? Without roll-wise and stage-wise logging, managers can only guess. Progressive mills compare each order against both the initial BOM allowance and their own best historical run for the exact same style.
                  </p>
                </div>

                {/* ── SECTION: Why wastage creeps in ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Why Wastage Creeps In
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  When fabric margins vanish, shop-floor operators and machines usually receive the immediate blame. In reality, the true root causes sit far upstream in planning, material consistency, and delayed communications:
                </p>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "Planning",
                      desc: "BOMs constructed from outdated historical averages instead of real-time roll width, measured shrinkage data, and fresh marker efficiency.",
                      icon: Layers
                    },
                    {
                      title: "Material",
                      desc: "Unmanaged variations slipping through unchecked: mismatched yarn lots, GSM drift, uneven roll lengths, and lot-to-lot shade variances.",
                      icon: AlertTriangle
                    },
                    {
                      title: "Process",
                      desc: "Absence of standardized machine presets, delayed lab-dip shade approvals, and quality inspections carried out only at the end instead of at critical intermediate gates.",
                      icon: Settings
                    },
                    {
                      title: "People",
                      desc: "Line operators kept unaware of the true financial cost of rejections, compounded by piece-rate incentive systems focused solely on gross output volume rather than first-time-right quality.",
                      icon: CheckCircle2
                    },
                    {
                      title: "Data Disconnect",
                      desc: "Wastage logged manually on paper notebooks or spreadsheets days late, completely breaking traceability back to the specific lot, machine, or shift.",
                      icon: Database
                    }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-navy-900 text-base mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-0">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  The data disconnect is what most mills underestimate. If you cannot trace a loss directly to a stage, machine, and lot number, you cannot fix it with lasting confidence.
                </p>

                {/* ── SECTION: Fixes by production stage ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Fixes by Production Stage
                </h2>

                <div className="space-y-8 my-8">
                  
                  {/* Stage 1 */}
                  <div className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100">
                    <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">1</span>
                      Yarn &amp; Knitting
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Track yarn strictly by lot and compare consumption against the knitting programme, not merely issue against receipt.",
                        "Log yarn waste (hard waste, soft waste, cone-end remnants) by machine and shift to make anomalous days immediately apparent.",
                        "Maintain standardized machine settings and stitch lengths for every style, checking GSM at the start of every single batch run.",
                        "Store yarn in climate-controlled areas to avoid dampness and dust, and enforce FIFO (First In, First Out) lot dispatch."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage 2 */}
                  <div className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100">
                    <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">2</span>
                      Dyeing &amp; Processing
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Enforce a strict, documented shade approval step with physical sign-off before bulk dyeing, never after batches are unloaded.",
                        "Measure and record width and shrinkage percentages immediately after finishing for every processed roll. Feed these exact figures back into the BOM and cutting layout.",
                        "Log all re-dyeing operations with mandatory reason codes. Recurring patterns by color group, lot, or batch size pinpoint chemical or operator issues."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage 3 */}
                  <div className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100">
                    <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">3</span>
                      Cutting &amp; Lay Planning
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Plan digital markers using actual measured fabric roll widths and lab-tested shrinkage, not theoretical nominal widths from purchase orders.",
                        "Adopt roll-wise lay planning so end bits and remnant rolls are assigned into short lays purposefully, rather than left over haphazardly.",
                        "Monitor spreading tension and edge alignment closely; poor spreading causes panel distortions and severe shade shading across plies.",
                        "Audit marker efficiency by style and planner. In the cutting room, marker optimization represents the single biggest controllable cost factor."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stage 4 */}
                  <div className="p-6 rounded-3xl bg-gray-50/70 border border-gray-100">
                    <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">4</span>
                      Stitching, Checking &amp; Finishing
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Inspect early: implement first-piece approval and roaming inline audits, because end-of-line checking only counts the damage after costs are sunk.",
                        "Equip sewing operators with clear approved sample references and defined tolerance limits for seams, SPI, and styling specs.",
                        "Track rejections by operation code and operator group, utilizing the data for constructive skill retraining rather than blame.",
                        "Reconcile trims, labels, zippers, and packaging accessories rigorously upon issue and return to keep leftover stock visible."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* ── SECTION: Lean manufacturing in textiles ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Lean Manufacturing in Textiles: What Fits and What Doesn&apos;t
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Lean methodology centers entirely around eliminating non-value-adding waste (Muda), making it naturally suited to apparel and knitwear production. You do not need to implement every textbook Japanese tool at once; a core subset carries 80% of the practical value:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {[
                    { name: "5S System", desc: "Organized fabric stores, tidy cutting tables, and clean machine stations eliminate search time, prevent bundle mix-ups, and safeguard loose trims." },
                    { name: "Standard Work", desc: "Predetermined machine settings, feed tensions, and standard operating procedures ensure consistent garment quality regardless of who works the shift." },
                    { name: "Visual Control", desc: "Line-side and cutting room boards showing hourly defects, rework counts, and actual vs. target output keep quality visible in real time." },
                    { name: "Kanban Pull", desc: "Releasing cut pieces and bundle feeds based strictly on sewing line consumption, preventing the bottlenecking of bulky work-in-progress (WIP)." },
                    { name: "Poka-Yoke", desc: "Simple error-proofing fixtures, guide folders, and color-coded tags that physically prevent size and shade mismatches during assembly." },
                    { name: "Kaizen", desc: "Empowering line supervisors and floor operators to propose small, regular incremental adjustments to reduce material handling and strain." }
                  ].map((lean, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                      <span className="font-bold text-navy-900 text-sm block mb-1 text-primary">{lean.name}</span>
                      <p className="text-gray-600 text-xs leading-relaxed mb-0">{lean.desc}</p>
                    </div>
                  ))}
                </div>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Lean also has clear boundaries. It cannot overcome an inaccurately configured BOM, nor will it magically compensate for a poor-quality yarn lot. It functions best when built on top of transparent, reliable data.
                </p>

                {/* MSME Scheme Notice */}
                <div className="bg-blue-50/70 border border-blue-200 p-6 rounded-2xl mb-12">
                  <h4 className="font-bold text-navy-900 text-base mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Government Support for Indian MSMEs
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    The Ministry of MSME runs the <strong className="text-navy-900">MSME Competitive (Lean) Scheme</strong> to subsidize lean consultants and implementation assistance for domestic manufacturing units.
                  </p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-0">
                    Registration and formal applications are managed through the official{" "}
                    <a 
                      href="https://lean.msme.gov.in/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      MSME Lean Portal <ExternalLink className="w-3 h-3" />
                    </a>. Eligibility criteria and financial subsidies have evolved across iterations, so verify current terms directly on the portal.
                  </p>
                </div>

                {/* ── SECTION: Handling unavoidable waste ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Handling the Waste You Can&apos;t Avoid
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Even in high-efficiency facilities, some waste is unavoidable—such as marker remnant end bits, edge trimmings, and cone-end yarn tails. The goal is to keep this unavoidable scrap clean, sorted, and monetized:
                </p>

                <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li><strong>Segregate at source:</strong> Separate scraps by fiber type (100% cotton, poly-cotton, modal) and color directly at the cutting table. Mixed, contaminated waste commands a fraction of the salvage value.</li>
                  <li><strong>Weigh and log every lot:</strong> Maintain inventory weights for waste generation at each stage to preserve full input-output material reconciliation.</li>
                  <li><strong>Monetize or upcycle:</strong> Partner with certified circular textile recyclers, or repurpose clean remnants internally for pocket linings, tags, or packaging accessories.</li>
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  For a comprehensive international perspective on circular models, the Ellen MacArthur Foundation&apos;s landmark publication{" "}
                  <a 
                    href="https://www.ellenmacarthurfoundation.org/a-new-textiles-economy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline font-semibold inline-flex items-center gap-1"
                  >
                    A New Textiles Economy <ExternalLink className="w-3 h-3" />
                  </a>{" "}
                  provides invaluable insight into circular recovery architectures.
                </p>

                {/* ── SECTION: How ERP helps ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  How ERP Helps with Textile Waste Management
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  An ERP does not physically adjust a knitting needle or spread fabric on a table. Instead, it bridges the disconnected numbers normally trapped in paper tally sheets and fragmented spreadsheets. A purpose-built textile ERP:
                </p>

                <ul className="space-y-4 mb-8 mt-2">
                  {[
                    "Maintains dynamic BOMs with stage-specific wastage and shrinkage allowances, comparing planned vs. actual material usage per order in real time.",
                    "Provides barcoded roll-wise and lot-wise traceability from yarn receipt through knitting, processing, and cutting.",
                    "Captures cutting, sewing, and inspection defect logs instantly on simple shop-floor screens, tagged by style, operator, and machine.",
                    "Generates live variance alerts while an order is actively running, allowing managers to intervene before costly over-consumption finishes.",
                    "Reconciles residual fabric rolls and trims upon order closure, preventing unrecorded dead stock from gathering dust in stores."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Off-the-shelf software consistently struggles with textile-specific nuances like multi-UOM conversions (converting kg of yarn into meters of dyed fabric and pieces of apparel) and outside job-work shrinkage. We examine this thoroughly in our deep dive on{" "}
                  <Link href="/blog/erp-for-knitwear-industry-tirupur/" className="text-primary hover:underline font-semibold">
                    Why generic ERPs fail in Tirupur&apos;s knitwear industry
                  </Link>. If your factory produces export orders, our guide on{" "}
                  <Link href="/blog/erp-for-garment-exporters/" className="text-primary hover:underline font-semibold">
                    ERP for garment exporters
                  </Link>{" "}
                  covers buyer specifications, compliance tracking, and shipment schedules.
                </p>

                {/* ── SECTION: Questions to ask ERP vendors ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Questions to Ask Any ERP Vendor
                </h2>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Before committing capital to software, pressure-test vendors with these real-world shop-floor inquiries:
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Can your system track fabric consumption by lot, individual roll, and process stage—or only at a broad aggregate order level?",
                    "How are wastage allowances, variable fabric shrinkage, and width differences configured within the BOM?",
                    "Can shop-floor operators and supervisors record data easily using tablets, barcode scanners, or simplified screens?",
                    "Can production managers review variance dashboards while an order is still in production, rather than waiting for post-closure reports?",
                    "How does the software handle external job-work, subcontracted dyeing, printing, and challan reconciliation?",
                    "What happens to our custom reports, unit conversions, and parameters if our manufacturing workflow expands next year?"
                  ].map((q, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-700">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{q}</span>
                    </div>
                  ))}
                </div>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  If your unit has customized processes that resist rigid off-the-shelf templates, exploring a{" "}
                  <Link href="/custom-erp-software/" className="text-primary hover:underline font-semibold">
                    textile ERP software built around your workflow
                  </Link>{" "}
                  is the most reliable way to achieve seamless user adoption.
                </p>

                {/* ── SECTION: Common mistakes ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  Common Mistakes That Sabotage Waste Reduction
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {[
                    { title: "Chasing cutting waste alone", desc: "Cutting scrap is visible, but re-dyeing batches and sewing line rework often write off 3x the capital." },
                    { title: "Using a flat wastage % across styles", desc: "A basic single-jersey crew tee and a heavily paneled, washed polo behave completely differently." },
                    { title: "Measuring only at order closure", desc: "Post-mortems tell you what you lost, but live tracking lets you correct the lay while fabric is still on the table." },
                    { title: "Blaming operators first", desc: "Examine fabric width variations, stitch density specs, and machine tension before blaming machine operators." },
                    { title: "Deploying software before fixing process", desc: "Clean up physical store organization and BOM standards first, then let the ERP preserve that discipline." },
                    { title: "Ignoring leftover dead stock", desc: "Remnant rolls and leftover trims gathering dust in stores represent working capital you have already paid for." }
                  ].map((mistake, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-rose-100 bg-rose-50/30">
                      <h4 className="font-bold text-navy-900 text-sm mb-1 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                        {mistake.title}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed mb-0">{mistake.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ── SECTION: 90-Day Plan ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>
                  A 90-Day Starting Plan
                </h2>

                <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 space-y-8 my-8 ml-2">
                  {[
                    {
                      phase: "Weeks 1–2",
                      title: "Establish the Baseline",
                      desc: "Select two or three core running styles. Track exact fabric variance against BOM and document piece rejection rates at every stage."
                    },
                    {
                      phase: "Weeks 3–6",
                      title: "Target the Primary Leak",
                      desc: "Analyze where the widest discrepancy occurred. Tackle one single root cause first—such as lab shade sign-offs or marker width calibration."
                    },
                    {
                      phase: "Weeks 7–10",
                      title: "Implement Floor Discipline",
                      desc: "Apply 5S in fabric stores and cutting bays. Erect a simple daily rejection and rework visual board at the primary assembly line."
                    },
                    {
                      phase: "Weeks 11–13",
                      title: "Calibrate & Scale",
                      desc: "Review variance improvements. Update BOM baseline allowances with real shop-floor data and evaluate if manual logs need an automated ERP system."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white shadow"></div>
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">{step.phase}</span>
                      <h4 className="text-lg font-bold text-navy-900 mt-0.5 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-0">{step.desc}</p>
                    </div>
                  ))}
                </div>

                {/* ── CONCLUSION BOX ── */}
                <div className="bg-[#0b132a] text-white p-8 rounded-3xl my-12 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-[50px] pointer-events-none"></div>
                  <h3 className="text-xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                    <span className="text-primary font-bold">Conclusion:</span> Where Does the Money Return?
                  </h3>
                  <p className="font-normal text-gray-300 leading-relaxed relative z-10 text-[15px] mb-4">
                    Reducing wastage starts with knowing exactly where it happens. Measure fabric consumption, record process losses, and track rejections at each production gate. Fix the underlying upstream causes first, and use practical lean habits to lock in those gains.
                  </p>
                  <p className="font-normal text-gray-300 leading-relaxed relative z-10 text-[15px] mb-0">
                    When paper notebooks and scattered spreadsheets start slowing your teams down, that is the exact inflection point where an ERP designed around textile realities pays for itself. If you want to explore how stage-wise tracking can safeguard margins in your facility, talk with the{" "}
                    <Link href="/" className="text-primary hover:underline font-semibold">
                      Pinnacle Systems
                    </Link>{" "}
                    team about your process.
                  </p>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* ── FAQ SECTION ── */}
                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4 mb-12">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="border border-gray-200 rounded-2xl overflow-hidden transition-colors hover:border-gray-300 bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-5 flex justify-between items-center gap-4 transition-colors font-bold text-navy-900 hover:text-primary"
                      >
                        <span className="text-[17px] leading-snug">{faq.q}</span>
                        <ChevronDown 
                          className={cn(
                            "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200", 
                            openFaq === idx ? "rotate-180 text-primary" : ""
                          )} 
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <hr className="my-12 border-gray-200" />
                
                {/* ── EMBEDDED CTA ── */}
                <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-8 rounded-r-2xl mt-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    Ready to eliminate production wastage in your textile unit?
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    Discover how Pinnacle ERP brings roll-wise traceability, real-time variance alerts, and lean shop-floor control to your operations.
                  </p>
                  <Link 
                    href="?contact=true" 
                    scroll={false} 
                    className={cn(theme.buttonPrimary, "px-6 py-3 text-sm inline-block")}
                  >
                    Book a Free Demo
                  </Link>
                </div>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-[#11192F]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
