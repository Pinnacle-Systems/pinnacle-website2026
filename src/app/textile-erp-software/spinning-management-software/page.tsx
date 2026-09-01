import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Activity, AlertCircle, Files, Truck, CheckCircle2, ChevronDown } from 'lucide-react';

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
      <div className="bg-[#0b132a] relative overflow-hidden pb-24">
        <Header />
      </div>
      
      {/* Hero Content */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 relative z-10 py-16 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
               Spinning Mill ERP Software  Real-Time Control from Cotton to Yarn

              </h1>
              <p className="text-black text-lg mb-10 leading-relaxed text-justify">  
Track production, inventory, quality, and billing in one system — built for spinning mills that need real numbers, not next-day reports.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Link href="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-primary/20 uppercase w-full sm:w-auto text-center">
                  Request a Free Demo
                </Link>
                <Link href="/contact" className="inline-block bg-[#0b132a] hover:bg-gray-800 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-gray-900/20 uppercase w-full sm:w-auto text-center">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* Right Image Banner */}
            <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] max-w-[700px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
                <Image 
                  src="/images/erp-software/Spinning_management_hero.webp"
                  alt="Spinning Management Software Banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="bg-[#f8f9fa] py-20 lg:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Industry Pain Points</span>
            </div>
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6 max-w-3xl mx-auto">
              Common Challenges in Spinning Mills — And How <span className="text-primary">ERP Software Solves Them</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 justify-center">
            {challenges.map((challenge, idx) => (
              <div key={idx} className={`bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group lg:col-span-2 ${idx === 3 ? 'lg:col-start-2' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <challenge.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-[19px] font-bold text-[#0b132a] mb-4 leading-snug">
                  {challenge.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed flex-grow">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="bg-white py-20 lg:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6 max-w-3xl mx-auto">
              Spinning Mill ERP Software Modules — <span className="text-primary">Complete Mill Management in One Platform</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((module, idx) => (
              <div
                key={idx}
                className="group rounded-[24px] bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={module.image} 
                    alt={module.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-[#0b132a]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-[19px] font-bold text-[#0b132a] mb-4 leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-[#64748b] text-[15px] leading-relaxed flex-1 text-justify">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#f8f9fa] py-20 lg:py-24 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[36px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
              Why Spinning Mills Choose <span className="text-primary">Pinnacle ERP?</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-[#64748b] font-bold text-[14px] uppercase tracking-wide">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 100% Cloud Based</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Dedicated Spinning Support Team</span>
              <span className="hidden md:inline text-gray-300">|</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Transparent Process</span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Customized</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
            
            {/* Left Content: 5 rows */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="bg-white p-6 lg:p-7 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex items-start gap-5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center text-primary font-black text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-[19px] font-bold text-[#0b132a] mb-1.5 leading-snug">{item.title}</h3>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Content: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full aspect-[4/5] max-w-[550px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100">
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
            <Link href="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold text-[15px] px-10 py-5 rounded-full transition-colors duration-300 tracking-wide shadow-xl shadow-primary/20 uppercase w-full sm:w-auto hover:scale-105 transform">
              See Pinnacle ERP in Action — Book a Free Demo
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20 lg:py-24 relative">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[36px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
              Frequently Asked Questions About <span className="text-primary">Spinning Mill ERP Software</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-[#f8f9fa] rounded-2xl border border-gray-100 [&_summary::-webkit-details-marker]:hidden overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0b132a] text-[17px] hover:text-primary transition-colors list-none">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 group-open:text-primary transition-transform duration-300 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-[#64748b] text-[15.5px] leading-relaxed border-t border-gray-100 pt-4 mt-2">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#11192F] mt-auto">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
