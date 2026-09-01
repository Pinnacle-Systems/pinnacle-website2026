import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from 'next/link';
import Image from 'next/image';
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
  Lock
} from "lucide-react";

export const metadata = {
  title: 'Textile ERP Software - Pinnacle Systems',
  description: 'Manage spinning, knitting, processing, cutting, printing, embroidery, garments, inventory, production, and dispatch in one connected textile ERP system.',
};

const features = [
  {
    title: "Tally Integration",
    description: "Integrate your yarn procurement, fabric selling, and billing of job-work directly to Tally; no need for any data entry between your fabric manufacturing plant and your accountancy.",
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
    description: "Check your spinning, knitting, and garment manufacturing process from your shop floor and on the go; no need to be confined to your desktop only.",
    icon: Smartphone,
    image: "/images/erp-software/RealtimeTracking.webp"
  },
  {
    title: "In-built Approval Process",
    description: "Integrate the approval of the fabric quality, shade, and stage through a digital process; no more chasing your supervisors throughout different departments for getting a signature.",
    icon: FileCheck,
    image: "/images/erp-software/BuiltinApprovalSystem.webp"
  },
  {
    title: "SMS Integration",
    description: "Receive SMS alerts for your machine breakdown, production, and delivery date for your time-critical export orders.",
    icon: MessageSquare,
    image: "/images/erp-software/IntegrationwithSMS.webp"
  },
  {
    title: "Schedule Email Alerts",
    description: "Automate the sending of order confirmation, dispatch confirmation, and reminders for billing for your export clients.",
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
    description: "Track machine-wise yarn consumption, manage mixing ratios, and monitor lot-wise waste in real-time.",
    linkText: "Explore Spinning Software",
    href: "/textile-erp-software/spinning-management-software",
    icon: RotateCw
  },
  {
    title: "Knitting Management Solution",
    description: "Monitor yarn allocation, track fabric roll output by shift, and measure exact machine efficiency seamlessly.",
    linkText: "Explore Knitting Software",
    href: "/textile-erp-software/knitting",
    icon: Shirt
  },
  {
    title: "Processing Management Solution",
    description: "Maintain strict shade consistency, manage chemical recipes, and track complex dyeing job-work batches without manual registers.",
    linkText: "Explore Processing Software",
    href: "/textile-erp-software/processing",
    icon: Droplets
  },
  {
    title: "Cutting Management Solution",
    description: "Track material consumption, optimize fabric utilization, and monitor the exact movement of cut panels between departments.",
    linkText: "Explore Cutting Software",
    href: "/textile-erp-software/cutting",
    icon: Scissors
  },
  {
    title: "Printing Management Solution",
    description: "Manage printing order statuses, track ink and chemical consumption, and monitor lot-wise production accurately.",
    linkText: "Explore Printing Software",
    href: "/textile-erp-software/printing",
    icon: Printer
  },
  {
    title: "Embroidery Management Solution",
    description: "Monitor embroidery machine output per shift, track job allocations, and manage thread consumption for complex designs.",
    linkText: "Explore Embroidery Software",
    href: "/textile-erp-software/embroidery",
    icon: Palette
  },
  {
    title: "Garments Management Solution",
    description: "Control the entire customer order lifecycle from order placement to production and shipment, for both Make-to-Order (MTO) and Make-to-Stock (MTS).",
    linkText: "Explore Garments Software",
    href: "/textile-erp-software/garments",
    icon: ShoppingBag
  },
  {
    title: "Payroll Management Solution",
    description: "Streamline employee attendance, shift management, piece-rate wages, payroll processing, and production-linked wage calculations.",
    linkText: "Explore Payroll Software",
    href: "/textile-erp-software/payroll",
    icon: Banknote
  }
];

const whyChooseReasons = [
  { title: "Designed Around Your Processes", desc: "Configure the system to match your exact textile operations, workflows, and approval procedures." },
  { title: "Real-Time Visibility", desc: "Monitor orders, raw materials, production progress, stock levels, costs, and profitability instantly." },
  { title: "Improved Production Control", desc: "Monitor your complete manufacturing lifecycle, from initial raw material intake to final product dispatch." },
  { title: "Scalable for Growth", desc: "Support additional users, departments, branches, and production capacity seamlessly as your business expands." },
  { title: "Better Decision-Making", desc: "Use accurate reports and live dashboards to make faster, more informed business decisions." },
  { title: "Lower IT Burden", desc: "Avoid the complexity and cost of maintaining expensive on-site servers and IT infrastructure." },
  { title: "Faster Adoption", desc: "Get your team up and running quickly with an intuitive, highly visual interface that boosts productivity." },
  { title: "Milestone Alerts", desc: "Stay on track with real-time automated alerts for key project milestones." }
];

const whatWeOffer = [
  { title: "Built-in Best Practices", desc: "Configurable modules enable seamless management across Planning, Merchandising, Inventory, Production, Warehousing, Distribution, Retail, Finance, and E-commerce.", icon: CheckCircle2 },
  { title: "Predictive Tools & AI", desc: "Leverage AI-powered forecasting, demand analysis, and inventory optimization for proactive decision-making. Quick functions ensure fast data entry and easy migration.", icon: Cpu },
  { title: "Advanced Business Management", desc: "From strategy to execution, powerful query tools deliver real-time insights, allowing you to drill down from consolidated reports directly to transaction-level details.", icon: BarChart },
  { title: "Conductive Business Network", desc: "Dedicated partner portals connect customers, suppliers, agents, and distributors. Sync transactions directly to reduce manual data entry and save time.", icon: Globe },
  { title: "Secured Architecture", desc: "Protect your critical business data, proprietary formulas, and financial information with advanced, enterprise-grade cloud security and robust protection protocols.", icon: Lock }
];

const faqs = [
  {
    q: "What is a textile ERP system?",
    a: "A textile ERP system connects every stage of textile production spinning, knitting, processing, cutting, printing, embroidery, and garments into one platform, replacing manual registers, spreadsheets, and disconnected department updates."
  },
  {
    q: "What makes this different from general ERP software that is specifically designed for textiles?",
    a: "Generic ERP is designed to be used in general business or retail and expanded to fit a textile floor, but it is missing the tracking of fabric lots, shade batches, and yarn consumption. Pinnacle's ERP is based on manufacturing stages for textiles right from the beginning, ensuring that it is not bolted on after."
  },
  {
    q: "Can it track fabric lots and shade consistency across production?",
    a: "Yes, every cloth roll is managed on a lot basis along with its shade and weight throughout the process of knitting until processing."
  },
  {
    q: "Does it support job-work and outsourced textile units?",
    a: "Yes, the ERP system is designed for handling Job work/Outsourcing type of process flow which is prevalent in the area of spinning, dyeing, and garments manufacture."
  },
  {
    q: "Will this work for my specific process-spinning, knitting, or garments only?",
    a: "Yes, you choose the modules that match your operation. A spinning mill doesn't need the garments module, and a garment export unit doesn't need spinning. The ERP is modular, not a fixed all-or-nothing bundle."
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
    a: "Yes, the ERP includes a mobile app so you can check machine output, order status, and dashboards from anywhere, not just from a factory desktop."
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
      {/* Dark Header Section */}
      <div className="bg-[#0b132a] relative overflow-hidden pb-24">
        <Header />
      </div>
      
      {/* Hero Content */}
      <div className=" px-4 sm:px-6 lg:px-8 relative z-10 mb-16 lg:mb-24 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left pt-6 lg:pt-10">
              <h1 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
                Textile ERP Software for <span className="text-primary block mt-2">End-to-End Manufacturing Control</span>
              </h1>
  <p className="text-black text-lg mb-10 leading-relaxed text-justify">                Manage spinning, knitting, processing, cutting, printing, embroidery, garments, inventory, production, and dispatch in one connected textile ERP system.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                <Link href="/contact" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-primary/20 uppercase w-full sm:w-auto text-center">
                  Request a Free Demo
                </Link>
                <Link href="/contact" className="inline-block bg-[#0b132a] hover:bg-gray-800 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-gray-900/20 uppercase w-full sm:w-auto text-center">
                  Talk to a Textile ERP Expert
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10">
              <div className="relative w-full max-w-[650px] aspect-[4/3]">
                <Image 
                  src="/images/textile-erp/TextileERP.webp"
                  alt="Textile ERP Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Fades the four straight sides into the white background */}
                <div className="absolute inset-0 shadow-[inset_0_0_25px_15px_#ffffff] pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-10 mb-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
            <div className="w-4 h-[3px] bg-primary rounded-full"></div>
            <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Core Capabilities</span>
          </div>
          <h2  className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
            Every Key Feature Built for <span className="text-primary">Textile Production</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={feature.image} alt={feature.title} fill className={`${(feature as any).imageClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-[#0b132a]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col relative">
                {/* <div className="absolute -top-10 right-6 w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-lg border border-gray-50">
                  <feature.icon className="w-6 h-6" />
                </div> */}
                <h3 className="text-xl font-bold text-[#0b132a] mb-3 pr-8">
                  {feature.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed flex-1 text-justify">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ERP Modules Section */}
      <div className="bg-[#f8f9fa] py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Integrated Solutions</span>
            </div>
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
              Now Integrated ERP Solutions for the <span className="text-primary">Apparel & Textile Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {erpModules.map((module, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-[#f8f9fa] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <module.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="text-[19px] font-bold text-[#0b132a] mb-4 leading-snug">
                  {module.title}
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed flex-grow mb-6">
                  {module.description}
                </p>
                <Link href={module.href} className="inline-flex items-center gap-2 text-primary font-semibold text-[14px] hover:text-orange-600 transition-colors mt-auto group/link">
                  {module.linkText}
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-24">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
            <div className="w-4 h-[3px] bg-primary rounded-full"></div>
            <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Why Choose Pinnacle ERP?</span>
          </div>
          <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-8">
            The Pinnacle <span className="text-primary">Advantage</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Highly Configurable", "User-Friendly", "End-to-End Integrated", "AI-Enabled", "100% Cloud-Based"].map((tag, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-full text-[13px] border border-gray-200 shadow-sm">{tag}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseReasons.map((reason, idx) => (
            <div key={idx} className="bg-white rounded-[20px] p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-[#0b132a] leading-snug">{reason.title}</h3>
              </div>
              <p className="text-[#64748b] text-[14.5px] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 lg:py-28 bg-[#11192F] relative overflow-hidden rounded-t-[40px] md:rounded-t-[80px]">
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-[40%] text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-700 mb-6 bg-white/5 shadow-sm">
                <div className="w-4 h-[3px] bg-primary rounded-full"></div>
                <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">What We Offer</span>
              </div>
              
              <h2 className="text-3xl lg:text-[32px] xl:text-4xl leading-[1.2] font-extrabold text-white mb-6">
                Your Trusted Partner <span className="text-primary block mt-2">for Digital Transformation</span>
              </h2>
              
              <p className="text-gray-300 text-[18px] leading-relaxed">
                From concept to implementation, Pinnacle Systems is your trusted partner. We combine agile project management with efficient execution to bring your textile operations into the digital age.
              </p>
            </div>

            <div className="w-full lg:w-[60%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatWeOffer.map((offer, idx) => (
                  <div key={idx} className={`bg-white/5 border border-white/10 rounded-[20px] p-6 hover:bg-white/10 transition-colors duration-300 ${idx === whatWeOffer.length - 1 ? 'md:col-span-2 md:w-[calc(50%-12px)] md:mx-auto' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-5">
                      <offer.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h3 className="font-bold text-white text-[18px] mb-3">{offer.title}</h3>
                    <p className="text-gray-400 text-[14.5px] leading-relaxed">{offer.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#f8f9fa] rounded-[20px] p-6 lg:p-8 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                    Q
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0b132a] text-[17px] mb-3 leading-snug">{faq.q}</h3>
                    <p className="text-[#64748b] text-[15px] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4 bg-[#11192F]">
        <Footer />
      </div>
    </main>
  );
}
