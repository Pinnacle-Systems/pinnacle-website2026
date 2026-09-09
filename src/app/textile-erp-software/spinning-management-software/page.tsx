import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Activity, AlertCircle, Files, Truck, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import FaqAccordion from '../components/FaqAccordion';

const challenges = [
  {
    title: "Cotton Costs Keep Moving. Your Visibility Shouldn't Lag Behind.",
    desc: "Price swings hit hardest when procurement decisions are made on last week's data.",
    icon: TrendingUp
  },
  {
    title: "Machines Run 24/7. Your Reports Shouldn't Take 24 Hours.",
    desc: "Shift-wise efficiency and downtime deserve real-time answers, not next-day summaries.",
    icon: Activity
  },
  {
    title: "One Mixing Error, One Wasted Lot.",
    desc: "Without blend ratio and lot-wise traceability, small errors turn into expensive rework.",
    icon: AlertCircle
  },
  {
    title: "Three Registers, Three Different Truths.",
    desc: "Production, inventory, and accounts running separately means no one number anyone trusts.",
    icon: Files
  },
  {
    title: "Dispatch Delayed Is Trust Delayed.",
    desc: "Manual billing and paperwork mismatches slow down the one moment that should build buyer confidence.",
    icon: Truck
  }
];

const modules = [
  {
    title: "Spinning Production Module",
    description: "Real-time tracking from mixing and blow room through carding, ring frame, and autoconer. Shift-wise efficiency and hank realization monitoring. Complete lot-wise traceability built into every stage.",
    image: "/images/erp-software/spinninmodule.jpg.jpeg"
  },
  {
    title: "Purchase & Procurement Module",
    description: "Cotton and raw material purchase order management. Supplier rate comparison and bale-wise receipt tracking. Multi-level budget approvals for procurement control.",
    image: "/images/erp-software/Purchaseandprocurmrnt.webp"
  },
  {
    title: "Sales, Dispatch & Billing Module",
    description: "Sales orders linked directly to live yarn stock. GST-ready automated invoicing. Export documentation and e-way bill support.",
    image: "/images/erp-software/salesstoremanagement.webp"
  },
  {
    title: "Inventory & Stores Management",
    description: "Real-time stock tracking of cotton, waste, and packing material. Live finished yarn stock visibility. Automatic reconciliation with production and dispatch.",
    image: "/images/erp-software/invenrtyandstoremanagement.webp"
  },
  {
    title: "Quality Control Module",
    description: "Count, CSP, U%, IPI, and hairiness tracked lot-wise and shift-wise. Instant traceability back to the exact machine. Direct linkage to the mixing batch behind any quality issue.",
    image: "/images/erp-software/Qualitycontrolmodule.webp"
  },
  {
    title: "Finance & Accounts Module",
    description: "Real-time cost of production tracking. Receivables and payables management. GST compliance reflecting actual production and sales data.",
    image: "/images/erp-software/Finance-and-Accounting-Module.webp"
  },
  {
    title: "HR, Payroll & Contractor Management",
    description: "Attendance and wage tracking. Contractor and job-work billing management. Billing tied to actual shift-wise output.",
    image: "/images/erp-software/hrspayrollmanagement.webp"
  },
  {
    title: "Maintenance & Machine Management",
    description: "Machine-wise breakdown history. Preventive maintenance scheduling. Continuous downtime tracking.",
    image: "/images/erp-software/maintenance-management.webp"
  },
  {
    title: "MIS Dashboards & Reports",
    description: "Owner and manager-level dashboards. Live numbers pulled from every module in real time. Unified view of production, sales, and financial performance.",
    image: "/images/erp-software/misandreporting.png"
  }
];

const whyChooseUs = [
  {
    title: "Built by Mill People, Not Coders.",
    desc: "Every feature comes from real shop-floor experience — not a generic ERP with textile labels slapped on."
  },
  {
    title: "One System. One Truth.",
    desc: "Production, sales, purchase, and accounts run on one database — not six mismatched registers."
  },
  {
    title: "Real-Time, Not Next-Day.",
    desc: "See machine efficiency and stock as it happens — not in tomorrow's report."
  },
  {
    title: "Cotton to Cone, Fully Traceable.",
    desc: "Every lot is tracked end-to-end — quality issues traced back in minutes, not days."
  },
  {
    title: "Billing Built In, Not Bolted On.",
    desc: "GST invoices and export docs generate straight from dispatch — no separate software, no mismatches."
  }
];

const faqs = [
  {
    question: "What is spinning mill ERP software?",
    answer: "Spinning mill ERP software is a management system that connects production, inventory, purchase, sales, billing, and HR into one platform, specifically built around spinning mill processes like mixing, carding, and ring frame operations."
  },
  {
    question: "How does ERP software reduce yarn wastage in spinning mills?",
    answer: "ERP software reduces yarn wastage by tracking blow room and process-wise waste percentage in real time, flagging deviations the moment they happen instead of at month-end."
  },
  {
    question: "What modules does a spinning mill ERP system typically include?",
    answer: "A complete spinning mill ERP includes nine core modules: Spinning Production, Purchase & Procurement, Sales & Billing, Inventory & Stores, Quality Control, Finance & Accounts, HR & Payroll, Maintenance & Machine Management, and MIS Dashboards."
  },
  {
    question: "Is Pinnacle Systems ERP cloud-based?",
    answer: "Yes, Pinnacle Systems ERP is 100% cloud-based, allowing mill owners and managers to access real-time production, inventory, and financial data from anywhere, on any device."
  },
  {
    question: "Can spinning mill ERP software handle GST billing and export documentation?",
    answer: "Yes, spinning mill ERP software generates GST-ready invoices, e-way bills, and export documentation automatically from dispatch data, eliminating manual re-entry."
  },
  {
    question: "What is lot-wise traceability in spinning mills?",
    answer: "Lot-wise traceability is the ability to track a specific batch of yarn back through every production stage — ring frame, speed frame, carding, and mixing — to the exact cotton bales used."
  },
  {
    question: "How long does it take to implement ERP software in a spinning mill?",
    answer: "Implementation timelines vary by mill size, but spinning-specific ERP software focuses on configuring machine layouts and mixing ratios rather than building processes from scratch, making it faster than a generic manufacturing ERP."
  },
  {
    question: "What is the difference between a generic ERP and Pinnacle Spinning Mill ERP?",
    answer: "A generic ERP is built for manufacturing broadly and adapted afterward with textile labels, while Pinnacle Spinning Mill ERP is built directly around spinning processes and terminology from the ground up."
  },
  {
    question: "How does real-time production monitoring benefit spinning mill owners?",
    answer: "Real-time production monitoring lets owners see machine efficiency, shift-wise output, and stock positions as they happen, allowing corrective decisions while the loss is still small and reversible."
  },
  {
    question: "Why should a spinning mill choose Pinnacle Systems ERP?",
    answer: "Spinning mills choose Pinnacle Systems ERP because it's built by a team with 9+ years of dedicated spinning industry experience, offering complete, cloud-based, end-to-end management trusted by 90+ clients across 20+ completed projects."
  }
];

export const metadata = {
  title: 'Spinning Management Software - Pinnacle Systems',
  description: 'Track machine-wise yarn consumption, manage mixing ratios, and monitor lot-wise waste in real-time with our Spinning Management Software.',
};

export default function SpinningManagementSoftwarePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Banner Image */}
        <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
          <Image
            src="/images/erp-software/SPINNING.webp"
            alt="Spinning Mill ERP Software"
            fill
            priority
            className="object-cover object-right-top"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col text-left mt-6 sm:mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
                <Sparkles className="w-4 h-4" />
                <span>SPINNING MANAGEMENT</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Spinning Mill ERP Software — Real-Time Control from Cotton to Yarn
              </h1>
              
              <p className={cn(theme.p, "text-gray-300 text-[15px] sm:text-[16px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                Track production, inventory, quality, and billing in one system — built for spinning mills that need real numbers, not next-day reports.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link href="?contact=true" scroll={false} className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-primary/25 uppercase text-center w-full sm:w-auto">
                  Request a Free Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="?contact=true" scroll={false} className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-wide uppercase text-center w-full sm:w-auto backdrop-blur-sm border border-white/10">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Industry Pain Points
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Common Challenges in Spinning Mills — And How <span className="text-primary">ERP Software Solves Them</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {challenges.map((challenge, idx) => {
              const IconComp = challenge.icon;
              return (
                <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gray-50 border border-gray-100 rounded-[20px] sm:rounded-3xl p-6 sm:p-7 hover:bg-white hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">
                      {challenge.title}
                    </h3>
                  </div>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                    {challenge.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              ERP Modules
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Spinning Mill ERP Software Modules — <span className="text-primary">Complete Mill Management in One Platform</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {modules.map((module, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[20px] sm:rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <Image
                    src={module.image}
                    alt={module.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-3 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-[14px] sm:text-[15px] leading-relaxed text-black !text-left")}>
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Why Choose Pinnacle
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Why Spinning Mills Choose <span className="text-primary">Pinnacle ERP?</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              {["100% Cloud Based", "Dedicated Spinning Support", "Transparent Process", "Customized"].map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-2 bg-white text-gray-700 font-semibold px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] border border-gray-200 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-[1536px] mx-auto mb-12">
            {/* Left: Cards */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-5">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[20px] sm:rounded-3xl p-5 sm:p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-start gap-4 sm:gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center text-primary font-black text-base sm:text-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1.5 leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-[14px] sm:text-[15px] leading-relaxed text-black !text-left")}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[500px] rounded-[24px] overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/erp-software/whychoosepinnacle.webp"
                  alt="Why Choose Pinnacle ERP"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="?contact=true" scroll={false} className="inline-flex items-center gap-3 bg-primary hover:bg-orange-600 text-white font-bold text-sm sm:text-[15px] px-8 sm:px-10 py-4 sm:py-5 rounded-full transition-all duration-300 tracking-wide shadow-xl shadow-primary/20 uppercase hover:scale-105 transform">
              See Pinnacle ERP in Action — Book a Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1536px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/3] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="/groupdiscussion.png"
                  alt="FAQ Discussion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                FAQ
              </div>
              <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 text-left")}>
                Frequently Asked Questions About <span className="text-primary">Spinning Mill ERP</span>
              </h2>
              <p className={cn(theme.p, "text-black !text-left mb-8")}>
                Got questions about spinning mill ERP software? We have answers.
              </p>
              <FaqAccordion faqs={faqs.map(f => ({ q: f.question, a: f.answer }))} />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#11192F] mt-auto">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
