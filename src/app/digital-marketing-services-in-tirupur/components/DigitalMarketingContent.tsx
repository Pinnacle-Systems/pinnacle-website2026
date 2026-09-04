"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Zap,
  BarChart3,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronUp,
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
    a: "Digital marketing services will be able to assist you in improving your company’s visibility on the Internet, reaching the right customers, creating inquiries, and acquiring new customers.",
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

      {/* 4. Our Approach to Digital Marketing - Connected Flow Pipeline */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Subtle Ambient Background Orbs */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#ffefe8]/60 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffefe8] border border-[#ffdbcd] text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Strategic Methodology
            </div>
            <h2 className={cn(theme.h2, "mb-4")}>
              Our Approach to Digital Marketing
            </h2>
            <p className={theme.p}>
              We feel that for digital marketing to be successful, one needs to understand the business itself, rather than merely picking the right marketing tools.
            </p>
          </div>

          {/* 6-Step Process Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {approachSteps.map((item, idx) => {
              const IconComp = item.icon;
              const isLast = idx === approachSteps.length - 1;

              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#ffdbcd] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  {/* Top Orange Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-[#ff7b00] to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Watermark Step Number */}
                  <span className="absolute -top-2 right-4 text-7xl font-black text-slate-100 group-hover:text-[#ffefe8] transition-colors duration-300 pointer-events-none select-none">
                    {item.step}
                  </span>

                  <div>
                    {/* Top Row: Icon + Phase Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-[#ffefe8] text-primary border border-[#ffdbcd] flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                        <IconComp className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:bg-[#ffefe8] group-hover:text-primary group-hover:border-[#ffdbcd] transition-colors">
                        PHASE {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-[#0b132a] mb-3 group-hover:text-primary transition-colors duration-200 relative z-10">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className={theme.p}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Flow Directional Indicator */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors relative z-10">
                    <span className="flex items-center gap-1.5 text-slate-500 group-hover:text-primary transition-colors font-medium">
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
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffefe8] border border-[#ffdbcd] text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <Cpu className="w-3.5 h-3.5 text-primary" />
                Integrated Tech Advantage
              </div>

              <h2 className={cn(theme.h2, "mb-4")}>
                Why Work With a Technology-Driven Digital Marketing Company?
              </h2>

              <p className={theme.p}>
                Digital marketing doesn't exist separately from your website and technology.
              </p>

              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Your website needs to support search engines, users, lead generation, analytics, and conversions. Your tracking needs to provide useful data. Your landing pages need to communicate your value clearly.
                </p>
                <p>
                  Pinnacle Systems brings together digital marketing, website development, mobile app development, ERP expertise, and technology solutions under one organization.
                </p>
                <p className={theme.p}>
                  This allows us to look beyond individual campaigns and consider how your digital presence works as a complete business system.
                </p>
              </div>
            </div>

            {/* Right Interactive Tech Capabilities Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Digital Marketing",
                  desc: "SEO, PPC & Data-Driven Campaigns",
                  icon: BarChart3,
                },
                {
                  title: "Website Development",
                  desc: "High-Speed, Conversion-Optimized UI/UX",
                  icon: Code2,
                },
                {
                  title: "Mobile App Dev",
                  desc: "Seamless iOS & Android Solutions",
                  icon: Smartphone,
                },
                {
                  title: "ERP & Tech Systems",
                  desc: "End-to-End Enterprise Automation",
                  icon: Database,
                },
              ].map((capability, index) => {
                const IconComp = capability.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 hover:bg-white hover:border-[#ffdbcd] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#ffefe8] text-primary border border-[#ffdbcd] flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-[#0b132a] text-lg mb-1 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h4>
                    <p className={theme.p}>
                      {capability.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion Section */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className={cn(theme.h2, "mb-4")}>
              Frequently Asked Questions
            </h2>
            <p className={theme.p}>
              Got questions about Digital Marketing Services in Tirupur? We have answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left font-bold text-[#0b132a] text-lg flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="py-12 sm:py-16 bg-[#0b132a] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className={cn(theme.h2, "mb-6")}>
            Ready to Grow Your Brand with Premier Digital Marketing in Tirupur?
          </h2>
          <p className={theme.p}>
            Partner with Pinnacle Systems today. Let’s craft a custom digital strategy that generates qualified leads and scales your revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+919994610733"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-[0_0_20px_rgba(255,90,0,0.4)] inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call +91 9994610733
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-base border border-white/20 transition-all inline-flex items-center gap-2"
            >
              Book Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
