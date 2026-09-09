"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircleQuestion, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqCategories = [
  "Custom ERP Software",
  "Web Application Development",
  "Website Development",
  "Mobile App Development",
  "Digital Marketing Services"
];

const faqsData: Record<string, { q: string; a: string }[]> = {
  "Custom ERP Software": [
    { q: "What is custom ERP software?", a: "Custom ERP software is a business management system built around your specific processes, rather than forcing your operations into a generic, one-size-fits-all template." },
    { q: "How is custom ERP different from off-the-shelf ERP?", a: "Off-the-shelf ERP requires you to adapt your workflows to the software; custom ERP is built to match how your business actually operates, including industry-specific processes." },
    { q: "How long does it take to build a custom ERP system?", a: "Timelines depend on the number of modules and complexity, but most custom ERP projects take 2 to 6 months from requirement analysis to go-live." },
    { q: "Can custom ERP integrate with our existing software and tools?", a: "Yes, custom ERP can be built to integrate with accounting tools like Tally, payment gateways, e-commerce platforms, and other business systems you already use." },
    { q: "Is custom ERP suitable for small and mid-sized businesses?", a: "Yes, ERP systems can be scoped and scaled to match your business size, so you only pay for the modules and complexity you actually need." },
    { q: "Can the ERP be accessed remotely or on mobile devices?", a: "Yes, modern custom ERP systems are typically cloud-based, giving you secure access from anywhere on desktop or mobile." },
    { q: "What happens if our business processes change after the ERP is built?", a: "Custom ERP is built to be configurable, so workflows, forms, and modules can be updated as your business evolves." },
    { q: "Do you provide training and support after implementation?", a: "Yes, we provide structured onboarding, staff training, and ongoing technical support after go-live." },
    { q: "How much does custom ERP software cost?", a: "Cost depends on the modules, number of users, and complexity of your workflows — we provide a detailed quote after understanding your requirements." },
    { q: "Is our business data secure in a custom ERP system?", a: "Yes, security is built in from the start, including role-based access control, data encryption, and secure hosting practices." }
  ],
  "Web Application Development": [
    { q: "What is web application development?", a: "Web application development is the process of building interactive, browser-based software — such as dashboards, portals, and booking systems — rather than static websites." },
    { q: "How is a web application different from a website?", a: "A website mainly displays information, while a web application lets users log in, input data, and perform tasks through backend logic and databases." },
    { q: "How long does it take to build a web application?", a: "Simple web apps typically take 4 to 8 weeks, while complex, enterprise-grade applications can take 3 to 6 months depending on scope." },
    { q: "Which technologies do you use for web application development?", a: "We build using modern frameworks including React, Next.js, Node.js, PHP/Laravel, and Python, chosen based on your project's requirements." },
    { q: "Can you integrate third-party APIs and payment gateways?", a: "Yes, we regularly integrate payment gateways, CRMs, analytics tools, and other third-party APIs into custom web applications." },
    { q: "Can you upgrade or modernize our existing web application?", a: "Yes, we offer legacy application modernization, improving performance, security, and scalability without disrupting your business operations." },
    { q: "Will the web application be scalable as our business grows?", a: "Yes, we design with scalable architecture from the start, so the application can support more users, data, and features over time." },
    { q: "Do you provide post-launch support and maintenance?", a: "Yes, we offer ongoing maintenance, including bug fixes, performance monitoring, security updates, and feature enhancements." },
    { q: "How much does web application development cost?", a: "Cost depends on features, integrations, and the technology stack — we provide a transparent quote after a free consultation." },
    { q: "Is our data secure in a custom-built web application?", a: "Yes, security is built in from day one, including secure authentication, encryption, and data protection best practices." }
  ],
  "Website Development": [
    { q: "What is included in your website development service?", a: "Our website development service includes design, development, content structuring, mobile responsiveness, and on-page SEO setup." },
    { q: "How long does it take to build a website?", a: "A standard business website typically takes 2 to 4 weeks, while larger or e-commerce websites can take 6 to 10 weeks." },
    { q: "Do you build websites using WordPress, or custom code?", a: "We build using both — WordPress and CMS platforms for content-driven sites, and Next.js/React for custom, high-performance websites." },
    { q: "Will my website be mobile-friendly and fast-loading?", a: "Yes, every website we build is fully responsive and optimized for speed, which also supports better search engine rankings." },
    { q: "Can you redesign my existing website instead of building a new one?", a: "Yes, we offer website redesign services that improve design, performance, and SEO while retaining your existing content and branding." },
    { q: "Will my website be optimized for SEO?", a: "Yes, we implement on-page SEO fundamentals — clean URLs, proper heading structure, meta tags, and fast load times — as part of development." },
    { q: "Can I update the website content myself after launch?", a: "Yes, if built on a CMS like WordPress, you'll have an easy-to-use dashboard to update content, images, and pages without coding." },
    { q: "Do you provide hosting and domain support?", a: "Yes, we can assist with hosting setup, domain configuration, and ongoing website maintenance." },
    { q: "How much does website development cost?", a: "Cost depends on design complexity, number of pages, and functionality required — we provide a clear quote after understanding your needs." },
    { q: "Do you offer ongoing website maintenance after launch?", a: "Yes, we offer maintenance packages covering updates, security patches, backups, and performance monitoring." }
  ],
  "Mobile App Development": [
    { q: "Do you build apps for both Android and iOS?", a: "Yes, we develop native Android and iOS apps, as well as cross-platform apps using Flutter and React Native." },
    { q: "How long does it take to build a mobile app?", a: "A basic app typically takes 6 to 10 weeks, while feature-rich or enterprise apps can take 3 to 6 months depending on complexity." },
    { q: "Should I build a native app or a cross-platform app?", a: "It depends on your budget and requirements — native apps offer the best performance, while cross-platform apps are faster and more cost-effective to build for both platforms." },
    { q: "Can you integrate payment gateways and third-party APIs into the app?", a: "Yes, we integrate payment gateways, maps, chat, push notifications, and other third-party APIs as needed." },
    { q: "Will you help publish the app on the Play Store and App Store?", a: "Yes, we handle the complete app submission process, including store listing setup and compliance with platform guidelines." },
    { q: "Can you upgrade or add features to an existing app?", a: "Yes, we offer app enhancement services, adding new features or improving performance on apps you've already built." },
    { q: "Do you provide app maintenance and support after launch?", a: "Yes, we offer ongoing maintenance, including bug fixes, OS-update compatibility, and feature updates." },
    { q: "How much does mobile app development cost?", a: "Cost depends on platform choice, features, and complexity — we provide a detailed quote after a free consultation." },
    { q: "Will the app be secure and protect user data?", a: "Yes, we implement secure authentication, encrypted data storage, and follow platform security best practices." },
    { q: "Can the app scale as our user base grows?", a: "Yes, we architect apps with scalable backend infrastructure to handle growing users and data without performance issues." }
  ],
  "Digital Marketing Services": [
    { q: "What digital marketing services do you offer?", a: "We offer SEO, social media marketing, PPC/Google Ads, content marketing, and website analytics as part of our digital marketing services." },
    { q: "How long does it take to see results from SEO?", a: "SEO typically takes 3 to 6 months to show measurable ranking and traffic improvements, depending on competition and starting point." },
    { q: "Do you manage Google Ads and social media ads?", a: "Yes, we plan, set up, and manage paid campaigns across Google Ads, Facebook, and Instagram based on your target audience and budget." },
    { q: "Can you create content for our website and social media?", a: "Yes, we provide content creation services including blog posts, social media posts, and website copy aligned with your SEO strategy." },
    { q: "Will I get reports on my campaign performance?", a: "Yes, we provide regular performance reports covering traffic, rankings, ad spend, and conversions, so you can track ROI." },
    { q: "Do you offer local SEO for businesses targeting a specific city or region?", a: "Yes, we optimize for local search, including Google Business Profile management and location-based keyword targeting." },
    { q: "Can digital marketing help increase leads for my business?", a: "Yes, a combination of SEO, paid ads, and content marketing is designed to drive targeted traffic that converts into leads and sales." },
    { q: "Do you work with businesses of all sizes and industries?", a: "Yes, we tailor digital marketing strategies to fit businesses ranging from small local businesses to larger enterprises across industries." },
    { q: "How much does digital marketing cost?", a: "Cost depends on the services selected, ad budget, and campaign scope — we provide a customized quote based on your goals." },
    { q: "Can you manage both our website SEO and social media together?", a: "Yes, we offer integrated digital marketing packages combining SEO, social media, and paid advertising for consistent results." }
  ]
};

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(faqCategories[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Reset open FAQ when switching tabs
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    setOpenFaq(null);
  };

  return (
    <main className="min-h-screen bg-[#0b132a] text-white overflow-hidden">
      
      {/* ── HERO & TABS (Navy) ── */}
      <div className="relative overflow-hidden pt-24 pb-12">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
        </div>
        <Header />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center mt-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <MessageCircleQuestion className="w-4 h-4" />
              <span>Help Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(theme.h1, "text-white mb-6")}
            >
              Frequently Asked Questions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(theme.p, "mx-auto text-gray-300 max-w-2xl text-center mb-12")}
            >
              Find answers to the most common questions about our custom ERP software, web development, mobile apps, and digital marketing services.
            </motion.p>
          </div>

          {/* Tabs Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto mb-16"
          >
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabSwitch(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-300 border",
                  activeTab === cat 
                    ? "bg-primary text-white border-primary shadow-md transform scale-105" 
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FAQ ACCORDION CONTENT (Navy) ── */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faqsData[activeTab]?.map((faq, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: idx * 0.05 }}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA (Orange on White) ── */}
      <section className="py-10 sm:py-14 bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-primary rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(255,90,0,0.25)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-20"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-5 relative z-10">Still have questions? Let&apos;s talk.</h2>
            <Link href="?contact=true" scroll={false} className="inline-flex items-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg group relative z-10">
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
