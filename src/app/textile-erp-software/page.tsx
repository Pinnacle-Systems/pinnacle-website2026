import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
import Image from 'next/image';
import FaqAccordion from './components/FaqAccordion';
import {
  Calculator,
  Receipt,
  Smartphone,
  FileCheck,
  MessageSquare,
  Mail,
  MessageCircle,
  LayoutDashboard,
  BarChart3,
  RotateCw,
  Droplets,
  Scissors,
  Printer,
  Palette,
  ShoppingBag,
  Banknote,
  ArrowRight,
  Shirt,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  BarChart,
  Globe,
  Lock,
  Sparkles,
  Star,
  Sliders,
  Award,
  UserCheck,
  Zap,
  Plug,
  Server
} from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

// Custom SVG Icons matching Key Features reference
function ProcessManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M24 14V10M24 38V34M34 24H38M10 24H14M31.07 16.93L33.9 14.1M14.1 33.9L16.93 31.07M31.07 31.07L33.9 33.9M14.1 14.1L16.93 16.93" />
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 20V24L26.5 26.5" />
    </svg>
  );
}

function InventoryManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="16" y="8" width="12" height="10" rx="1.5" />
      <path d="M22 8V18" />
      <path d="M18 13H26" />
      <rect x="8" y="18" width="16" height="20" rx="1.5" />
      <path d="M16 18V38" />
      <path d="M11 28H21" />
      <rect x="24" y="22" width="16" height="16" rx="1.5" />
      <path d="M32 22V38" />
      <path d="M27 30H37" />
    </svg>
  );
}

function MaterialManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 20L24 8L42 20V38H30" />
      <path d="M6 20V38H18" />
      <path d="M18 38V26H30" />
      <path d="M18 20H30" />
      <path d="M24 14V17" />
      <circle cx="36" cy="34" r="4" />
      <path d="M36 28V30M36 38V40M30 34H32M40 34H42M31.8 29.8L33.2 31.2M38.8 36.8L40.2 38.2M31.8 38.2L33.2 36.8M38.8 31.2L40.2 29.8" />
    </svg>
  );
}

function CostManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="12" y="8" width="24" height="32" rx="4" />
      <rect x="16" y="13" width="16" height="7" rx="1.5" />
      <path d="M17 25H19M23 25H25M29 25H31M17 30H19M23 30H25M29 30H31M17 35H19M23 35H31" />
    </svg>
  );
}

function PlanningManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="10" width="30" height="28" rx="3" />
      <path d="M14 6V12M24 6V12M8 17H38" />
      <path d="M13 23H17M21 23H25M13 29H17" />
      <circle cx="33" cy="33" r="8" fill="white" />
      <circle cx="33" cy="33" r="8" />
      <path d="M33 29V33L36 34.5" />
    </svg>
  );
}

function MerchandiseManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 14L10 20C10.5 21.5 12 22 13 21C14 20 14.5 21.5 16 21C17.5 20.5 18 21.5 19 21C20 20.5 20.5 21.5 22 21C23.5 20.5 24 21.5 25 21C26 20.5 26.5 21.5 28 21C29.5 20.5 30 21.5 31 21C32 20.5 32.5 21.5 34 21C35.5 20.5 36 21.5 37 21C38 22 39.5 21.5 40 20L38 14H8Z" />
      <path d="M14 14V21M20 14V21M26 14V21M32 14V21" />
      <path d="M10 21V38H38V21" />
      <rect x="15" y="26" width="10" height="12" />
      <rect x="29" y="26" width="6" height="7" />
    </svg>
  );
}

function SupplyChainManagementIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 38H32M19 34H29M21 30H27" />
      <circle cx="24" cy="18" r="3" />
      <path d="M21 28V24C21 22.5 22 22 24 22C26 22 27 22.5 27 24V28" />
      <path d="M15 24H9M9 24L12 21M9 24L12 27" />
      <path d="M33 24H39M39 24L36 21M39 24L36 27" />
      <path d="M24 13V8M24 8L21 11M24 8L27 11" />
    </svg>
  );
}

const keyFeaturesList = [
  { title: "Process Management", icon: ProcessManagementIcon },
  { title: "Inventory Management", icon: InventoryManagementIcon },
  { title: "Material Management", icon: MaterialManagementIcon },
  { title: "Cost Management", icon: CostManagementIcon },
  { title: "Planning Management", icon: PlanningManagementIcon },
  { title: "Merchandise Management", icon: MerchandiseManagementIcon },
  { title: "Supply Chain Management", icon: SupplyChainManagementIcon },
];

const whyChooseItems = [
  { 
    title: "4.9 Google Rating", 
    icon: Star,
    cardBg: "bg-amber-50/50 hover:bg-amber-50/90 border-amber-200/60 hover:border-amber-300/80 shadow-amber-500/5",
    iconBg: "bg-amber-100/80 text-amber-600 group-hover:bg-amber-500 group-hover:text-white"
  },
  { 
    title: "Tailored to Your Factory Workflows", 
    icon: Sliders,
    cardBg: "bg-blue-50/50 hover:bg-blue-50/90 border-blue-200/60 hover:border-blue-300/80 shadow-blue-500/5",
    iconBg: "bg-blue-100/80 text-blue-600 group-hover:bg-blue-500 group-hover:text-white"
  },
  { 
    title: "25+ Years of Industry Experts", 
    icon: Award,
    cardBg: "bg-emerald-50/50 hover:bg-emerald-50/90 border-emerald-200/60 hover:border-emerald-300/80 shadow-emerald-500/5",
    iconBg: "bg-emerald-100/80 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white"
  },
  { 
    title: "Dedicated Account Manager", 
    icon: UserCheck,
    cardBg: "bg-purple-50/50 hover:bg-purple-50/90 border-purple-200/60 hover:border-purple-300/80 shadow-purple-500/5",
    iconBg: "bg-purple-100/80 text-purple-600 group-hover:bg-purple-500 group-hover:text-white"
  },
  { 
    title: "Fast, Phased Implementation", 
    icon: Zap,
    cardBg: "bg-orange-50/50 hover:bg-orange-50/90 border-orange-200/60 hover:border-orange-300/80 shadow-orange-500/5",
    iconBg: "bg-orange-100/80 text-orange-600 group-hover:bg-orange-500 group-hover:text-white"
  },
  { 
    title: "Seamless Integrations", 
    icon: Plug,
    cardBg: "bg-teal-50/50 hover:bg-teal-50/90 border-teal-200/60 hover:border-teal-300/80 shadow-teal-500/5",
    iconBg: "bg-teal-100/80 text-teal-600 group-hover:bg-teal-500 group-hover:text-white"
  },
  { 
    title: "On-Premise and On-Cloud", 
    icon: Server,
    cardBg: "bg-sky-50/50 hover:bg-sky-50/90 border-sky-200/60 hover:border-sky-300/80 shadow-sky-500/5",
    iconBg: "bg-sky-100/80 text-sky-600 group-hover:bg-sky-500 group-hover:text-white"
  },
];

export const metadata = {
  title: "Textile ERP Software—End-to-End Manufacturing Control",
  description: "Run spinning, knitting, dyeing, cutting, printing and garments on one connected Textile ERP system from Pinnacle Systems. Book a free demo today",
};

const features = [
  {
    title: "Tally Integration",
    description: "Integrate your yarn procurement, fabric selling and billing of job-work directly to Tally; no need for any data entry between your fabric manufacturing plant and your accountancy.",
    icon: Calculator,
    image: "/images/erp-software/SeamlessIntegration.webp"
  },
  {
    title: "E-Way Bill & E-Invoice Integration",
    description: "Generate your GST-approved E-Way Bills and E-Invoices for your fabrics and garments shipping through ERP itself; no separate software for the purpose.",
    icon: Receipt,
    image: "/images/erp-software/feature_integration.jpg"
  },
  {
    title: "Mobile App",
    description: "Check your spinning, knitting and garment manufacturing process from your shop floor and on the go; no need to be confined to your desktop only.",
    icon: Smartphone,
    image: "/images/erp-software/RealtimeTracking.webp"
  },
  {
    title: "In-built Approval Process",
    description: "Integrate the approval of the fabric quality, shade and stage through a digital process; no more chasing your supervisors throughout different departments for getting a signature.",
    icon: FileCheck,
    image: "/images/erp-software/BuiltinApprovalSystem.webp"
  },
  {
    title: "SMS Integration",
    description: "Receive SMS alerts for your machine breakdown, production and delivery date for your time-critical export orders.",
    icon: MessageSquare,
    image: "/images/erp-software/IntegrationwithSMS.webp"
  },
  {
    title: "Schedule Email Alerts",
    description: "Automate the sending of order confirmation, dispatch confirmation and reminders for billing for your export clients.",
    icon: Mail,
    image: "/images/erp-software/ScheduledMailShooting.webp"
  },
  {
    title: "WhatsApp Integration",
    description: "Production Updates, Shipping Confirmation & Payment Reminders – All on WhatsApp, because your customers and suppliers will keep themselves busy there.",
    icon: MessageCircle,
    image: "/images/erp-software/whatsapp_logo.svg",
    imageClass: "object-contain p-4"
  },
  {
    title: "Action Dashboard",
    description: "Check pending approvals for fabric, delayed machines, imminent orders – all in one dashboard, sorted by their priority.",
    icon: LayoutDashboard,
    image: "/images/erp-software/ActionDashboard.webp"
  },
  {
    title: "Graphical Reports",
    description: "Convert spindle volume as well as yarn usage and information about the production of garments into reports. You can see the trends shift-wise as well as machine-wise.",
    icon: BarChart3,
    image: "/images/erp-software/GraphicalReports.webp"
  }
];

const erpModules = [
  {
    title: "Spinning Management Solution",
    description: "Track machine-wise yarn consumption, manage mixing ratios and monitor lot-wise waste in real-time.",
    linkText: "Explore Spinning Software",
    href: "/textile-erp-software/spinning-management-software",
    icon: RotateCw,
    image: "/images/textile-erp/spining management solutions.webp"
  },
  {
    title: "Knitting Management Solution",
    description: "Monitor yarn allocation, track fabric roll output by shift and measure exact machine efficiency seamlessly.",
    linkText: "Explore Knitting Software",
    href: "/textile-erp-software/knitting-manufacturing-software",
    icon: Shirt,
    image: "/images/textile-erp/kniting management solutions.webp"
  },
  {
    title: "Processing Management Solution",
    description: "Maintain strict shade consistency, manage chemical recipes and track complex dyeing job-work batches without manual registers.",
    linkText: "Explore Processing Software",
    href: "/textile-erp-software/textile-dyeing-processing-erp",
    icon: Droplets,
    image: "/images/textile-erp/processing  management solutions.webp"
  },
  {
    title: "Cutting Management Solution",
    description: "Track material consumption, optimize fabric utilization and monitor the exact movement of cut panels between departments.",
    linkText: "Explore Cutting Software",
    href: "/textile-erp-software/cutting-management-software",
    icon: Scissors,
    image: "/images/textile-erp/Fabric_Cutting_Standards_-_Textile_School[1].webp"
  },
  {
    title: "Printing Management Solution",
    description: "Manage printing order statuses, track ink and chemical consumption and monitor lot-wise production accurately.",
    linkText: "Explore Printing Software",
    href: "/textile-erp-software/textile-printing-erp",
    icon: Printer,
    image: "/images/textile-erp/printing maangement solutions.webp"
  },
  {
    title: "Embroidery Management Solution",
    description: "Monitor embroidery machine output per shift, track job allocations and manage thread consumption for complex designs.",
    linkText: "Explore Embroidery Software",
    href: "/textile-erp-software/embroidery-job-work-software",
    icon: Palette,
    image: "/images/textile-erp/emboridary.webp"
  },
  {
    title: "Garments Management Solution",
    description: "Control the entire customer order lifecycle from order placement to production and shipment, for both Make-to-Order (MTO) and Make-to-Stock (MTS).",
    linkText: "Explore Garments Software",
    href: "/textile-erp-software/garment-erp-software",
    icon: ShoppingBag,
    image: "/images/textile-erp/Garment Management solutions.webp"
  },
  {
    title: "Payroll Management Solution",
    description: "Streamline employee attendance, shift management, piece-rate wages, payroll processing and production-linked wage calculations.",
    linkText: "Explore Payroll Software",
    href: "/textile-erp-software/textile-payroll-software",
    icon: Banknote,
    image: "/images/textile-erp/Payroll Management solutions.webp"
  }
];

const whyChooseReasons = [
  { title: "Designed Around Your Processes", desc: "Configure the system to match your exact textile operations, workflows and approval procedures." },
  { title: "Real-Time Visibility", desc: "Monitor orders, raw materials, production progress, stock levels, costs and profitability instantly." },
  { title: "Improved Production Control", desc: "Monitor your complete manufacturing lifecycle, from initial raw material intake to final product dispatch." },
  { title: "Scalable for Growth", desc: "Support additional users, departments, branches and production capacity seamlessly as your business expands." },
  { title: "Better Decision-Making", desc: "Use accurate reports and live dashboards to make faster, more informed business decisions." },
  { title: "Lower IT Burden", desc: "Avoid the complexity and cost of maintaining expensive on-site servers and IT infrastructure." },
  { title: "Faster Adoption", desc: "Get your team up and running quickly with an intuitive, highly visual interface that boosts productivity." },
  { title: "Milestone Alerts", desc: "Stay on track with real-time automated alerts for key project milestones." }
];

const whatWeOffer = [
  { title: "Built-in Best Practices", desc: "Configurable modules enable seamless management across Planning, Merchandising, Inventory, Production, Warehousing, Distribution, Retail, Finance and E-commerce.", icon: CheckCircle2 },
  { title: "Predictive Tools & AI", desc: "Leverage AI-powered forecasting, demand analysis and inventory optimization for proactive decision-making. Quick functions ensure fast data entry and easy migration.", icon: Cpu },
  { title: "Advanced Business Management", desc: "From strategy to execution, powerful query tools deliver real-time insights, allowing you to drill down from consolidated reports directly to transaction-level details.", icon: BarChart },
  { title: "Conductive Business Network", desc: "Dedicated partner portals connect customers, suppliers, agents and distributors. Sync transactions directly to reduce manual data entry and save time.", icon: Globe },
  { title: "Secured Architecture", desc: "Protect your critical business data, proprietary formulas and financial information with advanced, enterprise-grade cloud security and robust protection protocols.", icon: Lock }
];

const faqs = [
  {
    q: "What is a textile ERP system?",
    a: "A textile ERP system connects every stage of textile production spinning, knitting, processing, cutting, printing, embroidery and garments into one platform, replacing manual registers, spreadsheets and disconnected department updates."
  },
  {
    q: "What makes this different from general ERP software that is specifically designed for textiles?",
    a: "Generic ERP is designed to be used in general business or retail and expanded to fit a textile floor, but it is missing the tracking of fabric lots, shade batches and yarn consumption. Pinnacle's ERP is based on manufacturing stages for textiles right from the beginning, ensuring that it is not bolted on after."
  },
  {
    q: "Can it track fabric lots and shade consistency across production?",
    a: "Yes, every cloth roll is managed on a lot basis along with its shade and weight throughout the process of knitting until processing."
  },
  {
    q: "Does it support job-work and outsourced textile units?",
    a: "Yes, the ERP system is designed for handling Job work/Outsourcing type of process flow which is prevalent in the area of spinning, dyeing and garments manufacture."
  },
  {
    q: "Will this work for my specific process-spinning, knitting, or garments only?",
    a: "Yes, you choose the modules that match your operation. A spinning mill doesn't need the garments module and a garment export unit doesn't need spinning. The ERP is modular, not a fixed all-or-nothing bundle."
  },
  {
    q: "Is it compatible with Tally and takes care of GST compliance?",
    a: "It integrates seamlessly with Tally for bookkeeping and is completely GST-compliant without the requirement of any other software."
  },
  {
    q: "How long does implementation take?",
    a: "Implementation timelines depend on how many modules and processes you're covering. Pinnacle's team handles setup and on-site training as part of the rollout, backed by 90+ textile implementations."
  },
  {
    q: "Can I access production data remotely, not just at the factory?",
    a: "Yes, the ERP includes a mobile app so you can check machine output, order status and dashboards from anywhere, not just from a factory desktop."
  },
  {
    q: "Do you offer a free demo before we commit?",
    a: "Yes, book a free demo to see how the ERP handles your specific production process spinning, dyeing, cutting, or garments before making a decision."
  },
  {
    q: "What happens if our production process changes or we add new machines/lines?",
    a: "The ERP is built to scale — new machines, lines, or processing stages can be added into the existing system without needing a separate setup or new software."
  }
];

export default function TextileErpSoftwarePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unified Hero Section with Dark Background & Header */}
      <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-12 sm:pb-16">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">

            {/* Left Column: All Text Content & CTAs */}
            <div className="lg:col-span-6 flex flex-col text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs sm:text-sm font-bold tracking-wider mb-6 w-fit uppercase">
                <Shirt className="w-4 h-4 text-primary" />
                <span>Textile ERP Platform</span>
              </div>

              <h1 className={cn(theme.h1, "text-white")}>
                Cloud-Based Textile ERP Software {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400 block mt-2">
                 for Manufacturers & Exporters
                </span>
              </h1>

              <p className={theme.p}>
                Manage spinning, knitting, processing, cutting, printing, embroidery, garments, inventory, production and dispatch in one connected textile ERP system.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <Link
                  href="?contact=true" scroll={false}
                  className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-orange-600 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 uppercase text-center"
                >
                  Request a Free Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="tel:+919994610733"
                  className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-8 py-4 rounded-full border border-white/15 backdrop-blur-sm transition-all duration-300 tracking-wide uppercase text-center"
                >
                  Talk to a Textile ERP Expert
                </Link>
              </div>

              {/* Trust & Highlight Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-gray-300 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>90+ Textile Implementations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Tally & GST Integrated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Real-Time Shopfloor Visibility</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image with Browser Mockup */}
            <div className="lg:col-span-6 relative w-full lg:pl-6">
              <div className="relative w-full rounded-2xl bg-white shadow-2xl shadow-black/40 border border-white/10 overflow-hidden group transform transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,90,0,0.25)]">
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
                <div className="relative w-full aspect-video bg-white overflow-hidden">
                  <Image
                    src="/images/textile-erp/textileERPsoftwareBanner.webp"
                    alt="Textile ERP Software Dashboard"
                    fill
                    priority
                    className="transition-transform duration-700 ease-out group-hover:scale-105 object-fit"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Features Overview Section */}
      <section className="py-12 sm:py-16 bg-[#eef2f6] border-b border-gray-200/60 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-extrabold text-[#0b132a] text-lg sm:text-xl md:text-2xl tracking-wider uppercase mb-8 sm:mb-10">
            Key Features of Textile ERP Software
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-7xl mx-auto">
            {keyFeaturesList.map((item, idx) => (
              <div
                key={idx}
                className="w-[calc(50%-8px)] sm:w-[170px] md:w-[180px] lg:w-[190px] bg-white rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3.5 group cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10" />
                </div>
                <span className="text-[13.5px] sm:text-[14px]  text-gray-800 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Core Capabilities
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Every Key Feature Built for <span className="text-primary">Textile Production</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-white rounded-[20px] sm:rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className={`${(feature as any).imageClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ERP Modules Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Integrated Solutions
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Integrated ERP Solutions for the <span className="text-primary">Apparel & Textile Industry</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {erpModules.map((module, idx) => {
              const IconComp = module.icon;
              return (
                <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gray-50 rounded-[20px] sm:rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer overflow-hidden">
                  
                  {module.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={module.image} alt={module.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors duration-200">
                        {module.title}
                      </h3>
                    </div>
                    
                    <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 mb-4 flex-1")}>
                      {module.description}
                    </p>
                    
                    <Link href={module.href} className="inline-flex items-center justify-between text-[13px] sm:text-sm font-semibold text-gray-500 hover:text-primary transition-colors mt-auto group/link">
                      <span>{module.linkText}</span>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white group-hover/link:bg-primary/10 text-gray-400 group-hover/link:text-primary flex items-center justify-center transition-all duration-300 group-hover/link:translate-x-1 shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Why Choose Pinnacle ERP?
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-6 max-w-4xl mx-auto")}>
              The Pinnacle <span className="text-primary">Advantage</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {["Highly Configurable", "User-Friendly", "End-to-End Integrated", "AI-Enabled", "100% Cloud-Based"].map((tag, idx) => (
                <span key={idx} className="bg-white text-gray-700 font-semibold px-4 py-1.5 rounded-full text-[12px] sm:text-[13px] border border-gray-200 shadow-sm">{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whyChooseReasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-[20px] sm:rounded-3xl p-6 sm:p-7 border border-gray-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-md font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">{reason.title}</h3>
                </div>
                <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-24 bg-[#0b132a] relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.05] pointer-events-none"></div>
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              What We Offer
            </div>
            <h2 className={cn(theme.h2, "text-white mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Your Trusted Partner <span className="text-primary block sm:inline mt-2 sm:mt-0">for Digital Transformation</span>
            </h2>
            <p className={cn(theme.p, "text-gray-300 text-center max-w-3xl mx-auto")}>
              From concept to implementation, Pinnacle Systems is your trusted partner. We combine agile project management with efficient execution to bring your textile operations into the digital age.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whatWeOffer.map((offer, idx) => {
              const IconComp = offer.icon;
              return (
                <div key={idx} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/5 border border-white/10 rounded-[20px] sm:rounded-3xl p-6 sm:p-7 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">{offer.title}</h3>
                  </div>
                  <p className={cn(theme.p, "text-white text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                    {offer.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Pinnacle Textile ERP Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Pinnacle Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 tracking-tight mb-4">
              Why Choose Pinnacle Textile ERP?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal">
              Purpose-built for textile manufacturing, Pinnacle Textile ERP connects every stage of production, from raw material inward and shop-floor processing to dispatch.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-5xl mx-auto">
            {whyChooseItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className={cn(
                    "w-[calc(50%-8px)] sm:w-[200px] md:w-[220px] rounded-2xl p-5 border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center gap-3.5 group cursor-default",
                    item.cardBg
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                    item.iconBg
                  )}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-sm sm:text-[15px] text-gray-700 font-medium leading-snug">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1536px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Column: Image */}
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

            {/* Right Column: FAQ */}
            <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                FAQ
              </div>
              <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 text-left")}>
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className={cn(theme.p, "text-black  leading-relaxed tracking-normal !indent-0 mb-8 max-w-xl")}>
                Got questions about our Textile ERP Software? We have answers to help you understand how our system transforms your manufacturing.
              </p>

              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4 bg-[#11192F]">
        <Footer />
      </div>
    </main>
  );
}
