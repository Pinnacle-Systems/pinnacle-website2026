"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, ChevronDown, 
  Banknote, AlertTriangle, Users, FileText, Zap, ShieldCheck,
  Calculator, Clock, Gift, Network, CheckSquare, LineChart, Link as LinkIcon,
  Sparkles, AlertCircle
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TextilePayrollSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenges = [
    "Manual piece-rate calculations that take days to finalize",
    "Attendance and production data tracked separately, causing wage disputes",
    "Contract/job-worker payments calculated outside the main payroll system",
    "Overtime, incentives, and shift allowances computed manually, prone to error",
    "Compliance filings (PF, ESI, bonus, gratuity) handled as a separate, time-consuming task"
  ];

  const modules = [
    { title: "Piece-Rate Wage Calculation", desc: "Automatically calculate wages based on production output—per garment, per operation, or per batch—pulled directly from your production data.", icon: Calculator },
    { title: "Attendance & Shift Management", desc: "Track attendance via biometric, RFID, or manual entry, with automatic shift, overtime, and late-mark calculations.", icon: Clock },
    { title: "Contract & Job-Worker Payments", desc: "Manage payments to contract labor and job workers separately from regular payroll, with full visibility into pending and processed amounts.", icon: Users },
    { title: "Incentive & Bonus Management", desc: "Configure production-linked incentives, attendance bonuses, and festival bonuses that calculate automatically each cycle.", icon: Gift },
    { title: "Statutory Compliance", desc: "Automated PF, ESI, professional tax, and bonus calculations—with ready-to-file statutory reports, reducing compliance risk.", icon: ShieldCheck },
    { title: "Payslip Generation & Disbursement", desc: "Generate digital payslips instantly and disburse wages via bank transfer, with SMS/WhatsApp notifications to workers.", icon: FileText },
    { title: "Department & Line-Wise Wage Reports", desc: "Get wage cost breakdowns by department, production line, or order — helping you track true labour cost per garment or batch.", icon: LineChart }
  ];

  const whyChooseUs = [
    { title: "Built for Piece-Rate Wages", desc: "Unlike generic payroll tools, our system is designed around textile-specific wage structures, not adapted from a standard HR product.", icon: Zap },
    { title: "Eliminates Wage Disputes", desc: "Automatic linking of attendance and production data means wages are calculated the same way every time—transparent and error-free.", icon: CheckSquare },
    { title: "Faster Payroll Cycles", desc: "What used to take days of manual calculation is processed in minutes, even with hundreds of contract and piece-rate workers.", icon: Clock },
    { title: "Built-In Compliance", desc: "Stay compliant with PF, ESI, and labor law requirements without maintaining separate spreadsheets or manual filings.", icon: ShieldCheck },
    { title: "Integrates With Your ERP", desc: "Connects directly with production and attendance data from your Textile Processing ERP—no duplicate data entry.", icon: Network }
  ];

  const faqs = [
    { q: "1. Can this software handle piece-rate wages for garment workers?", a: "Yes. Wages are calculated automatically based on production output per operation, garment, or batch, pulled directly from your production records." },
    { q: "2. Does it support contract and job-worker payments separately from regular staff?", a: "Yes. Contract labour and job-worker payments are managed in a separate workflow, with full visibility into pending and completed payments." },
    { q: "3. Can it calculate overtime and shift allowances automatically?", a: "Yes. Shift timings, overtime hours, and applicable allowances are calculated automatically based on your attendance and shift rules." },
    { q: "4. Does the software handle PF, ESI, and other statutory compliance?", a: "Yes. PF, ESI, professional tax, and bonus calculations are automated, with statutory reports ready for filing." },
    { q: "5. Can it integrate with biometric or RFID attendance systems?", a: "Yes. The software integrates with biometric, RFID, and manual attendance methods to pull data directly into payroll processing." },
    { q: "6. Will this connect with our existing Textile Processing ERP?", a: "Yes. Payroll integrates directly with your production and attendance data, so wages are calculated without duplicate manual entry." },
    { q: "7. Can workers receive payslips digitally?", a: "Yes. Digital payslips are generated automatically and can be sent via SMS or WhatsApp along with wage disbursement notifications." },
    { q: "8. Is this suitable for units with a mix of daily-rate, piece-rate, and monthly-salary staff?", a: "Yes. The system supports multiple wage structures simultaneously, so you don't need separate systems for different worker categories." }
  ];

  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">

      {/* ── HERO (Navy) ── */}
      <div className="bg-[#0b132a] relative overflow-hidden pt-24 pb-20">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
        </div>
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <Banknote className="w-4 h-4" />
              <span>Textile Payroll Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(theme.h1, "text-white")}
            >
              Payroll Software Built for Textile Manufacturing Units
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(theme.p, "mx-auto text-gray-300 text-center max-w-4xl")}
            >
              Manage complex wage structures—piece-rate, daily-rate, shift-based, and contract labor accurately and on time, with a payroll system built specifically for textile and garment production floors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex justify-center gap-4"
            >
              <Link href="/contact" className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 text-lg group px-10 py-5")}>
                Book a Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── CORE MODULES (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Features
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-navy-900")}>
              Core Payroll Modules
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {modules.map((module, idx) => {
              const IconComp = module.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (idx % 3) * 0.1 }}
                  className={cn(
                    "bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col",
                    idx === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : "" // Centers the 7th item
                  )}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{module.title}</h3>
                  </div>
                  <p className="text-black text-[14px] leading-relaxed flex-grow">{module.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE PAYROLL REALITY (Navy) ── */}
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
                Textile Payroll Isn&apos;t Like Standard Office Payroll
              </motion.h2>
              <p className={cn(theme.p, "text-gray-300 text-center mb-8 max-w-3xl mx-auto")}>
                Most payroll software is built for fixed-salary office staff—not for the reality of a textile or garment unit, where wages depend on production output, piece rates, shifts, and contract labor.
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
                    <p className={cn(theme.p, "mb-0 text-left indent-0 max-w-none text-gray-300 text-[15px] sm:text-[16px] leading-relaxed")}>
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <p className={cn(theme.p, "mb-0 text-left text-white font-medium")}>
                  A textile payroll software connects attendance, production output, and wage rules into one system—so every worker is paid accurately and on time, with full compliance built in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Why Choose Us
            </div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn(theme.h2, "text-navy-900")}>
              Why Textile Manufacturers Choose Our Payroll Software
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/80 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-black text-[14px] leading-relaxed flex-grow">{item.desc}</p>
                </motion.div>
              );
            })}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Simplify Piece-Rates, Compliance & Payouts.</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg group relative z-10">
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
