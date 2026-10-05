"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, CheckCircle2, Users, Calendar, Calculator, Clock, 
    Fingerprint, FileText, ShieldCheck, MapPin, ChevronDown, Check, X,
    Landmark, HeartPulse, Building, Percent, HeartHandshake, PieChart
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const features = [
  { title: "Employee Management", icon: Users, image: "/images/HRMS/EmployeeManagement.webp", desc: "Centralize employee profiles, documents, wages, and workforce records." },
  { title: "Attendance & Leave Management", icon: Calendar, image: "/images/HRMS/Attendance&Leave Management.webp", desc: "Track attendance, leave, overtime, late arrivals, and permissions." },
  { title: "Payroll Management", icon: Calculator, image: "/images/HRMS/Payroll Management.webp", desc: "Automate salary calculations, deductions, overtime, and payroll processing." },
  { title: "Custom Shift Scheduling", icon: Clock, image: "/images/HRMS/Custom Shift Scheduling .webp", desc: "Manage fixed, rotating, and flexible employee shifts." },
  { title: "Biometric Attendance Integration", icon: Fingerprint, image: "/images/HRMS/BiometricAttendanceIntegration.webp", desc: "Sync attendance data directly from compatible biometric devices." },
  { title: "Digital Payslips", icon: FileText, image: "/images/HRMS/DigitalPayslips.webp", desc: "Generate and securely share digital salary payslips." },
  { title: "Statutory Compliance", icon: ShieldCheck, image: "/images/HRMS/StatutoryCompliance.webp", desc: "Manage PF, ESI, PT, and TDS calculations." },
  { title: "Multi-Site Management", icon: MapPin, image: "/images/HRMS/Multi-SiteManagement.webp", desc: "Manage employees, attendance, and payroll across multiple locations." }
];

const compliance = [
    { title: "Provident Fund (PF)", icon: Landmark, desc: "Manage applicable PF deductions and payroll records." },
    { title: "Employees' State Insurance (ESI)", icon: HeartPulse, desc: "Calculate applicable ESI contributions as part of payroll processing." },
    { title: "Professional Tax (PT)", icon: Building, desc: "Manage applicable Professional Tax deductions based on employee and location requirements." },
    { title: "TDS", icon: Percent, desc: "Support payroll-related TDS calculations and reporting." },
    { title: "Labour Welfare Fund", icon: HeartHandshake, desc: "Track applicable LWF deductions and records." },
    { title: "Payroll Reports", icon: PieChart, desc: "Generate payroll and statutory reports for HR and finance teams." }
];

const faqs = [
    { q: <>What is HR and payroll software?</>, a: <>HR and payroll software is a system that helps businesses manage employee records, attendance, leave, payroll processing, deductions, payslips, and related HR activities from one platform.</> },
    { q: <>What does payroll software do?</>, a: <>Payroll software helps calculate employee wages, overtime, deductions, statutory contributions, and payroll records based on configured employee and attendance information.</> },
    { q: <>Can <strong>Dot.HR</strong> integrate with biometric attendance machines?</>, a: <><strong>Dot.HR</strong> can integrate with supported biometric attendance devices to sync employee attendance data. The specific devices and integration method depend on the supported hardware and configuration.</> },
    { q: <>Does <strong>Dot.HR</strong> support PF and ESI?</>, a: <><strong>Dot.HR</strong> supports payroll processing for applicable PF and ESI calculations based on configured employee and payroll information.</> },
    { q: <>Can <strong>Dot.HR</strong> manage shift workers?</>, a: <>Yes. <strong>Dot.HR</strong> is designed to support shift-based workforces, including configurable shifts, attendance tracking, overtime, and payroll processing.</> },
    { q: <>Can I manage multiple branches with <strong>Dot.HR</strong>?</>, a: <><strong>Dot.HR</strong> supports multi-site workforce management, allowing organizations to manage employees, attendance, and payroll across multiple locations from a centralized system.</> },
    { q: <>Is <strong>Dot.HR</strong> suitable for textile companies?</>, a: <><strong>Dot.HR</strong> is designed to support workforce requirements common in textile and manufacturing environments, including shift-based employees, biometric attendance, overtime, and payroll management.</> },
    { q: <>Can employees access digital payslips?</>, a: <><strong>Dot.HR</strong> provides digital payslip generation and distribution through supported employee access channels.</> },
    { q: <>Does <strong>Dot.HR</strong> support contract workers?</>, a: <><strong>Dot.HR</strong> can support contract and flexible workforces, including employee onboarding, attendance, site management, and payroll processes based on your workforce structure.</> },
    { q: <>Can <strong>Dot.HR</strong> replace Excel for payroll?</>, a: <><strong>Dot.HR</strong> can centralize employee, attendance, leave, overtime, and payroll processes that are often managed through spreadsheets, reducing the need for manual Excel-based payroll workflows.</> }
];

export default function HrmsClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 flex flex-col text-left"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
                    <span><strong>Dot.HR</strong> BY PINNACLE SYSTEMS</span>
                </div>
                <h1 className={cn(theme.h1, "text-white")}>
                    HR & Payroll Software for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Modern Workforces</span>
                </h1>
                <p className={theme.p}>
                    <strong>Dot.HR</strong> by Pinnacle Systems is an easy-to-use HR and payroll management software for businesses of all sizes. Manage employees, attendance, shifts, leave, overtime, biometric data, payroll, payslips, and statutory compliance from one platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
                    <Link
                        href="?contact=true" scroll={false}
                        className="group flex w-full sm:w-auto items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 uppercase text-center"
                    >
                        <span>Book a Free Demo</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-6 relative w-full lg:pl-6"
            >
                {/* Browser Mockup */}
                <div className="relative w-full rounded-2xl bg-white shadow-2xl shadow-black/40 border border-white/10 overflow-hidden group transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)]">
                    {/* Browser Header */}
                    <div className="h-10 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2 relative">
                        <div className="flex gap-2 z-10">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        {/* Fake Address Bar */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="px-4 py-1 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center">
                                <span className="text-[11px] text-gray-500 font-medium">Dashboard • Live</span>
                            </div>
                        </div>
                    </div>
                    {/* Dashboard Image */}
                    <div className="relative w-full aspect-[16/10] bg-white overflow-hidden">
                        <Image
                            src="/images/HRMS/dothr-dashboard.webp"
                            alt="Dot.HR Dashboard"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={theme.h2}>HR & Payroll Software Features</h2>
            <p className="text-gray-600 mt-4 text-lg">Everything you need to manage employees, attendance, shifts, payroll, and India payroll compliance from one platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-[1600px] mx-auto">
            {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                  className="group rounded-[20px] sm:rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden">
                    <Image src={feature.image} alt={feature.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-[#0b132a]/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col relative">
                    {/* <div className="absolute -top-8 sm:-top-10 right-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg border border-gray-50">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div> */}
                    <h3 className="text-base sm:text-lg font-bold text-[#0b132a] mb-2 sm:mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className={cn(theme.p, "text-gray-600 text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={theme.h2}>Indian Payroll Compliance Management</h2>
            <p className="text-gray-600 mt-4 text-lg">Stay compliant with automated statutory calculations and reporting built into your payroll workflow.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliance.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors shrink-0">
                            <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#0b132a] mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-[#0b132a] text-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Move Beyond Excel-Based Payroll Management</h2>
                <p className="text-gray-400 text-lg">Many businesses still manage employee attendance, leave, overtime, and payroll using spreadsheets and separate systems.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
                        <X className="w-6 h-6" /> Traditional Process
                    </h3>
                    <ul className="space-y-4">
                        {["Manual attendance entry", "Excel-based payroll", "Manual overtime calculation", "Paper payslips", "Multiple employee files", "Manual reports", "Separate branch records"].map((text, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> {text}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 border border-primary/30">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Check className="w-6 h-6 text-primary" /> With <strong>Dot.HR</strong>
                    </h3>
                    <ul className="space-y-4">
                        {["Automated attendance sync", "Centralized payroll processing", "Attendance-based overtime", "Digital payslips", "Centralized employee records", "Automated payroll reports", "Multi-site workforce management"].map((text, i) => (
                            <li key={i} className="flex items-center gap-3 text-white font-medium">
                                <CheckCircle2 className="w-5 h-5 text-primary" /> {text}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className={theme.h2}>How HR & Payroll Software Works</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { step: "1", title: "Add Employees", desc: "Create employee profiles, wage structures, departments, and shift details." },
                    { step: "2", title: "Track Attendance", desc: "Sync biometric attendance and manage attendance, leave, overtime, and shifts." },
                    { step: "3", title: "Process Payroll", desc: "Calculate wages, overtime, deductions, and applicable statutory contributions." },
                    { step: "4", title: "Generate Payslips", desc: "Create digital payslips and payroll reports for employees, HR, finance, and management." },
                ].map((item, idx) => (
                    <div key={idx} className="relative">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4 relative z-10">
                            {item.step}
                        </div>
                        <h3 className="text-lg font-bold text-[#0b132a] mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        {idx !== 3 && <div className="hidden lg:block absolute top-6 left-12 w-full h-[2px] bg-gray-200 -z-0" />}
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className={theme.h2}>HR & Payroll Software for Different Industries</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                    { title: "Textile & Manufacturing", desc: "Payroll Software for Textile & Manufacturing Companies.", href: "/textile-erp-software/textile-payroll-software/" },
                    { title: "Corporate & IT", desc: "HR & Payroll Software for Corporate Offices" },
                    { title: "Retail, Logistics & Warehousing", desc: "Workforce & Payroll Management for Distributed Teams" },
                    { title: "Contractors & Staffing Agencies", desc: "Payroll Software for Contract & Temporary Workers" }
                ].map((ind, idx) => {
                    if (ind.href) {
                        return (
                            <Link key={idx} href={ind.href} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md hover:border-primary/30 transition-all group cursor-pointer">
                                <h3 className="text-lg font-bold text-[#0b132a] mb-1.5 group-hover:text-primary transition-colors">{ind.title}</h3>
                                <p className="text-gray-500 text-sm">{ind.desc}</p>
                            </Link>
                        );
                    }
                    return (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start">
                            <h3 className="text-lg font-bold text-[#0b132a] mb-1.5">{ind.title}</h3>
                            <p className="text-gray-500 text-sm">{ind.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className={theme.h2}>Why Businesses Choose <strong>Dot.HR</strong></h2>
            </div>
            <div className="space-y-6">
                {[
                    { title: "One Centralized Platform", desc: "Manage employee records, attendance, leave, shifts, and payroll in one system." },
                    { title: "Built for Shift-Based Workforces", desc: "Support rotating shifts, overtime, multiple locations, and workforce structures." },
                    { title: "Reduce Manual Payroll Work", desc: "Automate repetitive payroll calculations and reduce spreadsheet dependency." },
                    { title: "Digital Employee Records", desc: "Keep employee information and payroll history organized in one place." },
                    { title: "Designed for Growing Businesses", desc: "Start with essential HR and payroll features and expand as your workforce grows." }
                ].map((benefit, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg font-bold text-[#0b132a] mb-1.5">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm">{benefit.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Simplify HR & Payroll?</h2>
            <p className="text-gray-300 text-lg mb-8">Manage employees, attendance, shifts, payroll, payslips, and compliance from one platform.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="?contact=true" scroll={false} className={theme.buttonPrimary}>
                    Book a Free <strong>Dot.HR</strong> Demo
                </Link>
                <Link href="tel:+919994610733" className={theme.buttonSecondary}>
                    Talk to Our HR & Payroll Team →
                </Link>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <div className="text-center mb-12">
                <h2 className={theme.h2}>Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                        <button 
                            className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-[#0b132a]"
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        >
                            <span className="pr-4">{faq.q}</span>
                            <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform shrink-0", openFaq === idx && "rotate-180")} />
                        </button>
                        {openFaq === idx && (
                            <div className="px-6 pb-4 text-gray-600">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
