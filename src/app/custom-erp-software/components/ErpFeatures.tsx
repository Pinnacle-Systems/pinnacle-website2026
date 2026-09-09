"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Activity, PackageCheck, Users, ScanLine, Link as LinkIcon, CheckCircle, Bell, Mail, MessageSquare, LayoutDashboard, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Cloud />,
    image: "/images/erp-software/CloudTechnology.webp",
    title: "Cloud Technology",
    desc: "Anywhere access with secure cloud technology: Access your ERP anytime, anywhere with secure, reliable cloud technology."
  },
  {
    icon: <Activity />,
    image: "/images/erp-software/RealtimeTracking.webp",
    title: "Real-time Tracking",
    desc: "Monitor live business data and access accurate reports for faster, smarter decisions."
  },
  {
    icon: <PackageCheck />,
    image: "/images/erp-software/Production&Inventory.webp",
    title: "Production & Inventory",
    desc: "Track production progress and inventory in real time for better planning, control, and efficiency."
  },
  {
    icon: <Users />,
    image: "/images/erp-software/feature_no3rdparty.jpg",
    title: "No 3rd Party Involvement",
    desc: "Direct sales, implementation, and support from our team ensures faster communication, better service, and accountability."
  },
  {
    icon: <ScanLine />,
    image: "/images/erp-software/BarcodeScanning.webp",
    title: "Barcode Scanning",
    desc: "Faster data entry, reduced manual errors, accurate stock tracking, and improved inventory control."
  },
  {
    icon: <LinkIcon />,
    image: "/images/erp-software/SeamlessIntegration.webp",
    title: "Seamless Integration",
    desc: "Connect your finance operations to the E-Way Bill and E-Invoice platforms for speedier processing and improved conformity."
  },
  {
    icon: <CheckCircle />,
    image: "/images/erp-software/BuiltinApprovalSystem.webp",
    title: "Built-in Approval System",
    desc: "Route purchase orders, expenses, and requests through role-based approval workflows for faster and controlled decision-making."
  },
  {
    icon: <Bell />,
    image: "/images/erp-software/IntegrationwithSMS.webp",
    title: "Integration with SMS",
    desc: "Send automatic SMS alerts that are intelligently generated for updates to orders as well as payment reminders."
  },
  {
    icon: <Mail />,
    image: "/images/erp-software/ScheduledMailShooting.webp",
    title: "Scheduled Mail Shooting",
    desc: "Set up automated, scheduled email campaigns and reports sent to customers, vendors, or internal teams."
  },
  {
    icon: <MessageSquare />,
    image: "/images/erp-software/whatsapp_logo.svg",
    imageClass: "object-contain p-4",
    title: "WhatsApp Integration",
    desc: "Send invoices as well as order confirmations and updates directly to vendors or customers via WhatsApp."
  },
  {
    icon: <LayoutDashboard />,
    image: "/images/erp-software/ActionDashboard.webp",
    title: "Action Dashboard",
    desc: "A single dashboard showing pending approvals, overdue tasks, and items that need attention so nothing slips through."
  },
  {
    icon: <BarChart3 />,
    image: "/images/erp-software/GraphicalReports.webp",
    title: "Graphical Reports",
    desc: "Visual, real-time reports on sales, inventory, finance, and operations built for quick decision-making."
  }
];

export default function ErpFeatures() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6")}
          >
            Core Features That Power Your Custom ERP
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 max-w-[1600px] mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.1 }}
              className="group rounded-[20px] sm:rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-44 sm:h-48 lg:h-52 w-full overflow-hidden">
                <Image src={feature.image} alt={feature.title} fill className={`${(feature as any).imageClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-5 sm:p-6 lg:p-7 flex-1 flex flex-col relative">
                <div className="absolute -top-8 sm:-top-10 right-5 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg border border-gray-50">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3 pr-6 sm:pr-8 leading-snug">
                  {feature.title}
                </h3>
                <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
