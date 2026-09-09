"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Zap,
  BarChart3,
  Phone,
  ArrowRight,
  Award,
  Users,
  Lightbulb,
  Search,
  Target,
  Rocket,
  RefreshCw,
  Sparkles,
  Cpu,
  Code2,
  Smartphone,
  Database,
} from "lucide-react";
import { theme } from "@/theme";
import DigitalMarketingHero from "./DigitalMarketingHero";
import DigitalMarketingServicesSection from "./DigitalMarketingServicesSection";
import DigitalGrowthStrategiesSection from "./DigitalGrowthStrategiesSection";
import { cn } from "@/lib/utils";

const approachSteps = [
  {
    step: "01",
    title: "1. Understand",
    desc: "We learn about your business, products or services, target customers, competitors, current online presence, and growth objectives.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "2. Research",
    desc: "We study relevant search behaviour, keywords, competitors, audiences, market opportunities, and existing digital performance.",
    icon: Search,
  },
  {
    step: "03",
    title: "3. Strategize",
    desc: "Based on our findings, we create a practical digital marketing roadmap aligned with your business priorities and available resources.",
    icon: Target,
  },
  {
    step: "04",
    title: "4. Execute",
    desc: "Our team implements the agreed activities across relevant channels, including search, paid advertising, social media, content, and website optimization.",
    icon: Rocket,
  },
  {
    step: "05",
    title: "5. Measure",
    desc: "We monitor the metrics that matter to your business, from organic visibility and website traffic to enquiries, conversions, advertising performance, and other KPIs.",
    icon: BarChart3,
  },
  {
    step: "06",
    title: "6. Optimize",
    desc: "Digital marketing is an ongoing process. We review performance, identify opportunities, test improvements, and refine the strategy over time.",
    icon: RefreshCw,
  },
];

const faqs = [
  {
    q: "What does a digital marketing company in Tiruppur do?",
    a: "A digital marketing firm assists firms in marketing their services and goods by using internet marketing methods including SEO, pay-per-click, social media marketing, content marketing, email marketing, and local search.",
  },
  {
    q: "How does digital marketing help my business in Tiruppur?",
    a: "Digital marketing services will be able to assist you in improving your company's visibility on the Internet, reaching the right customers, creating inquiries, and acquiring new customers.",
  },
  {
    q: "What digital marketing services does Pinnacle Systems provide?",
    a: "Pinnacle Systems provides SEO, PPC, Google Ads, social media marketing, Meta Ads, content marketing, email marketing, website optimization, local SEO, and related digital marketing services.",
  },
  {
    q: "Do you provide digital marketing services for textile businesses?",
    a: "Yes. Our digital marketing strategies can be adapted for textile manufacturers, garment companies, exporters, suppliers, brands, and other businesses within the textile ecosystem.",
  },
  {
    q: "Do you provide SEO services in Tiruppur?",
    a: "Yes. We provide SEO strategies covering keyword research, technical SEO, on-page optimization, content, local SEO, competitor analysis, and other organic search activities.",
  },
  {
    q: "Do you manage Google Ads and Meta Ads?",
    a: "Yes. We manage paid advertising campaigns across platforms such as Google, Facebook, and Instagram based on your business objectives and target audience.",
  },
  {
    q: "Should my business invest in SEO or paid advertising?",
    a: "It all depends on your objective, your market, competition, budget, and timeline. SEO will help you with organic visibility, while paid visibility is possible when your campaign works effectively. It is common to apply both strategies together.",
  },
  {
    q: "What is the cost of digital marketing in Tiruppur?",
    a: "Digital marketing costs depend on your services, goals, competition, campaign scope, and ad budget. Pinnacle Systems creates a customized proposal based on your business needs rather than using a fixed package.",
  },
  {
    q: "How long does digital marketing take to show results?",
    a: "The timeline depends on the channel and your starting position. Paid advertising can begin generating measurable campaign data quickly, while SEO and content marketing generally require consistent work over a longer period to build organic visibility.",
  },
  {
    q: "How do you measure digital marketing performance?",
    a: "We track KPIs relevant to your business, which may include search visibility, organic traffic, leads, conversions, cost per lead, advertising performance, website engagement, and other agreed objectives.",
  },
];

export default function DigitalMarketingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <DigitalMarketingHero />

      {/* 2. Services Grid Section */}
      <DigitalMarketingServicesSection />

      {/* 3. Growth Strategies for Tiruppur Businesses */}
      <DigitalGrowthStrategiesSection />

      {/* 4. Our Approach to Digital Marketing */}
      <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-0" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Strategic Methodology
            </div>
            <h2 className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6 max-w-4xl mx-auto")}>
              Our Approach to Digital Marketing
            </h2>
            <p className={cn(theme.p, "text-black text-center max-w-3xl mx-auto")}>
              We feel that for digital marketing to be successful, one needs to understand the business itself, rather than merely picking the right marketing tools.
            </p>
          </div>

          {/* 6-Step Process Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {approachSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isLast = idx === approachSteps.length - 1;

              return (
                <div
                  key={idx}
                  className="relative bg-white border border-gray-100 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-blue-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <span className="absolute -top-4 -right-4 text-8xl font-black text-gray-50/50 group-hover:text-primary/5 transition-colors duration-300 pointer-events-none select-none z-0">
                    {item.step}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-5">
                      <span className="text-[11px] sm:text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-colors uppercase">
                        PHASE {item.step}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>

                    <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[13px] sm:text-sm font-semibold text-gray-500 group-hover:text-primary transition-colors relative z-10">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      Step {idx + 1} of 6
                    </span>
                    {!isLast && (
                      <div className="flex items-center gap-1 text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
                        <span>Next Step</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                    {isLast && (
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                        Continuous Growth
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Technology-Driven Digital Marketing Advantage */}
      <section className="py-16 sm:py-24 bg-navy-900 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                Integrated Tech Advantage
              </div>

              <h2 className={cn(theme.h2, "text-white mb-4")}>
                Why Work With a Technology-Driven Digital Marketing Company?
              </h2>

              <div className="space-y-4 flex flex-col">
                <p className={cn(theme.p, "text-gray-300 text-[13px] sm:text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  Digital marketing doesn&apos;t exist separately from your website and technology.
                </p>
                <p className={cn(theme.p, "text-gray-300 text-[13px] sm:text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  Your website needs to support search engines, users, lead generation, analytics, and conversions. Your tracking needs to provide useful data. Your landing pages need to communicate your value clearly.
                </p>
                <p className={cn(theme.p, "text-gray-300 text-[13px] sm:text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  Pinnacle Systems brings together digital marketing, website development, mobile app development, ERP expertise, and technology solutions under one organization.
                </p>
                <p className={cn(theme.p, "text-gray-300 text-[13px] sm:text-[15px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                  This allows us to look beyond individual campaigns and consider how your digital presence works as a complete business system.
                </p>
              </div>
            </div>

            {/* Right Interactive Tech Capabilities Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Digital Marketing", desc: "SEO, PPC & Data-Driven Campaigns", icon: BarChart3 },
                { title: "Website Development", desc: "High-Speed, Conversion-Optimized UI/UX", icon: Code2 },
                { title: "Mobile App Dev", desc: "Seamless iOS & Android Solutions", icon: Smartphone },
                { title: "ERP & Tech Systems", desc: "End-to-End Enterprise Automation", icon: Database },
              ].map((capability, index) => {
                const IconComp = capability.icon;
                return (
                  <div
                    key={index}
                    className="p-5 sm:p-6 bg-white/5 rounded-[20px] border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 text-white flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-all duration-300">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-bold text-white text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h4>
                    <p className={cn(theme.p, "text-gray-400 text-[13px] sm:text-[14px] leading-relaxed !text-left")}>
                      {capability.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={cn(theme.h2, "mb-4")}>
              Frequently Asked Questions
            </h2>
            <p className={cn(theme.p, "text-black")}>
              Got questions about Digital Marketing Services in Tirupur? We have answers.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <div className="flex items-center justify-between p-4 sm:p-5">
                    <h4 className="text-[#0b132a] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-snug pr-4">{faq.q}</h4>
                    <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-1 sm:ml-3">
                      <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                      <div className={`absolute h-full w-[2px] sm:w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                    </div>
                  </div>

                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                        <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>
                        <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="py-10 sm:py-16 bg-[#0b132a] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={cn(theme.h2, "text-white mb-4 sm:mb-6")}>
            Ready to Grow Your Brand with Premier Digital Marketing in Tirupur?
          </h2>
          <p className={cn(theme.p, "text-gray-300 mb-8 sm:mb-10 text-center max-w-none")}>
            Partner with Pinnacle Systems today. Let&apos;s craft a custom digital strategy that generates qualified leads and scales your revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+919994610733"
              className="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-[0_0_20px_rgba(255,90,0,0.4)] inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call +91 9994610733
            </Link>
            <Link
              href="?contact=true" scroll={false}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base border border-white/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Book Strategy Session
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
