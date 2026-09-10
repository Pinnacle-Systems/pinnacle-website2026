"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, CheckCircle2, Zap, Search, MousePointerClick, 
  ShieldCheck, PenTool, Code, CheckSquare, Rocket, ChevronDown,
  LineChart, FastForward, Target, BadgeDollarSign, HeadphonesIcon, TrendingUp, MonitorSmartphone
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WebsiteDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const performanceFeatures = [
    { title: "Load fast", desc: "Optimized for Core Web Vitals and mobile-first performance", icon: Zap },
    { title: "Rank higher", desc: "Built on clean, SEO-friendly code structure from day one", icon: Search },
    { title: "Convert better", desc: "Designed around user behavior, not just aesthetics", icon: MousePointerClick },
    { title: "Scale easily", desc: "Built on modern, secure frameworks that grow with your business", icon: ShieldCheck }
  ];

  const devServices = [
    { title: "Corporate Website Development", desc: "Establish digital authority with a professional, fast-loading corporate site that builds immediate trust with stakeholders and B2B partners.", link: "Explore Corporate Websites" },
    { title: "Services Websites", desc: "Turn local searches into qualified leads with structured service breakdowns, localized SEO foundations and frictionless contact forms.", link: "Explore Service Websites" },
    { title: "Real Estate Website Development", desc: "Showcase properties with high-resolution image optimization, integrated map features and advanced search filters for buyers and investors.", link: "Explore Real Estate Websites" },
    { title: "Healthcare & Clinic Websites", desc: "Increase patient engagement by delivering fast-loading websites for clinics that build trust. Easy appointment booking systems as well as secure forms for patient contact.", link: "Explore Healthcare Websites" },
    { title: "Website Redesign Services", desc: "Transform your outdated, underperforming site into a modern, mobile-responsive asset while safely redirecting URLs to protect your existing SEO rankings.", link: "Explore Website Redesign" },
    { title: "E-Commerce Website Development", desc: "Drive more online sales with secure, high-speed Shopify or custom platforms featuring optimized product architectures and seamless checkout flows.", link: "Explore E-Commerce Design" },
    { title: "CMS Website Design", desc: "Take full control of your content with customized, easy-to-use WordPress or custom CMS setups that require zero coding knowledge for your team to update.", link: "Explore CMS Development" },
    { title: "Landing Website Design", desc: "Maximize your Meta Ads and Google Ads ROI with hyper-focused, distraction-free landing pages built exclusively for high conversion rates.", link: "Explore Landing Page Design" }
  ];

  const technologies = [
    { category: "CMS Platforms", items: "WordPress, Shopify" },
    { category: "Front-End Development", items: "HTML5, CSS3, JavaScript, Next.js" },
    { category: "Back-End Development", items: "Node.js, Python" },
    { category: "E-Commerce", items: "Shopify, WooCommerce" },
    { category: "Hosting & Security", items: "AWS, Google Cloud, Cloudflare, SSL" },
    { category: "Design Tools", items: "Figma, Adobe XD" }
  ];

  const processes = [
    { title: "Requirement Analysis", icon: Search },
    { title: "UI/UX Design", icon: PenTool },
    { title: "Development", icon: Code },
    { title: "Testing & QA", icon: CheckSquare },
    { title: "Deployment & Support", icon: Rocket }
  ];

  const whyChooseUs = [
    { title: "In-House SEO Experts", desc: "Every website we build is backed by our in-house SEO team from day one, not handed off to a separate agency later. This means your site's structure, page speed and content are optimized to rank from the moment it launches, not months after.", icon: LineChart },
    { title: "Performance-First Development", desc: "We don't just make websites that look good — we build for Core Web Vitals, fast load times and mobile-first experiences that keep visitors on the page instead of bouncing.", icon: FastForward },
    { title: "Conversion-Focused Design", desc: "Every layout, CTA and form is designed around how users actually behave — turning traffic into leads and sales, not just page views.", icon: Target },
    { title: "Transparent, Fixed Pricing", desc: "No hidden fees or scope surprises. You get a clear quote upfront based on your goals.", icon: BadgeDollarSign },
    { title: "Ongoing Support After Launch", desc: "We don't disappear after your site goes live — we offer maintenance, security monitoring and updates to keep it running smoothly.", icon: HeadphonesIcon },
    { title: "Built to Scale", desc: "Your website is developed on modern, secure frameworks that grow with your business, so you won't need a rebuild in a year.", icon: TrendingUp }
  ];

  const faqs = [
    { q: "What is the time frame to create and design the website?", a: "A typical website takes 3 to 6 weeks from start to launch, depending on the level of complexity. A landing page may be completed in as short as a couple of weeks, whereas E-commerce or custom CMS builds that have advanced features can take between 6 and 8 weeks." },
    { q: "How much does a professional website cost?", a: "Pricing depends on the type of website, features and platform (e.g., WordPress, Shopify, or custom-built). We provide a fixed quote after understanding your goals — there are no hidden fees or surprise charges." },
    { q: "Will my website be optimized for Google (SEO)?", a: "Yes. Each website we create is built on clear, SEO-friendly code with speedy loading pages, mobile-first designs and an appropriate technical structure. This gives you the best foundation to be ranked higher on Google right from the start." },
    { q: "Are you capable of revamping my website without impacting my SEO rankings?", a: "Yes. The process we use to redesign your website includes secure URL redirection and SEO audits for technical SEO to ensure that your rankings, backlinks and traffic are secure in and after the alteration." },
    { q: "Does my site work for mobile phones?", a: "Absolutely. Every website we build is mobile-friendly by default and optimized for Core Web Vitals, ensuring speedy loading and seamless navigation across smartphones, tablets, as well as desktops." },
    { q: "Do I have the ability to update the site myself, after it's been constructed?", a: "Yes. We are built on easy-to-use CMS platforms such as WordPress or an individual CMS and your team can make changes to text, images, pages and text without coding expertise." },
    { q: "Do you create e-commerce sites?", a: "Yes. We create high-speed, secure e-commerce sites using Shopify or custom platforms that have optimized page layouts for products as well as simplified checkout flows that are created to improve conversion rates." },
    { q: "What makes your websites different from a template-based website?", a: "Our websites are designed around performance and conversions — not just visuals. We focus on speed, SEO structure and user behavior so your website actively generates leads and sales, rather than just looking good." },
    { q: "Do you offer website support and maintenance after launch?", a: "Yes. We offer ongoing support packages for updates, security monitoring, backups and performance optimization to keep your website running smoothly after it goes live." },
    { q: "How do I get started with a new website or redesign?", a: "Simply request a Free Website Audit. We'll review your current site (or goals for a new one) and provide a clear breakdown of what's needed to make your website faster, higher-ranking and more conversion-focused." }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0b132a] pt-32 pb-10 sm:pb-14">
        {/* Background Banner Image */}
        <div className="absolute inset-x-0 bottom-0 top-[90px] lg:top-[100px] z-0">
          <Image
            src="/images/page-1/WEBISTEDEVELOPMENT.webp"
            alt="Website Development"
            fill
            priority
            className="object-cover object-right "
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col text-left mt-6 sm:mt-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wider mb-6 w-fit">
                <Rocket className="w-4 h-4" />
                <span>HIGH-CONVERTING DESIGN</span>
              </div>
              
              <h1 className={cn(theme.h1, "text-white mb-6 sm:mb-8 text-left")}>
                Website Development Company for Fast, High-Converting Websites
              </h1>
              
              <p className={cn(theme.p, "text-gray-300")}>
                We design and develop websites that load in seconds, rank on Google and turn visitors into paying customers not just another page on the internet.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link 
                  href="?contact=true" scroll={false} 
                  className={cn(theme.buttonPrimary, "inline-flex w-full sm:w-auto justify-center items-center gap-3 text-base sm:text-lg group px-8 sm:px-10 py-4 sm:py-5")}
                >
                  Get a Free Website Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built to Perform */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[20px] sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(theme.h2, "text-navy-900 mb-4 sm:mb-6")}
              >
                Website Development That&apos;s Built to Perform
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className={cn(theme.p, "text-black mx-auto text-center")}
              >
                A great-looking website means nothing if it&apos;s slow, hard to navigate, or invisible on Google. As a website development company focused on performance and conversions, we build websites that:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
              {performanceFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-5 sm:p-6 rounded-[16px] sm:rounded-2xl flex items-start gap-4 hover:border-primary/20 hover:shadow-sm transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1">{feature.title}</h3>
                    <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-black text-[14px] sm:text-[15px] leading-relaxed !text-left")}>
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center border-t border-gray-100 pt-8 sm:pt-10"
            >
              <p className={cn(theme.p, "text-black font-medium mx-auto text-center mb-6 sm:mb-8")}>
                Whether you need a brand-new website or a redesign of an underperforming one, we build with one goal: turning your website into your best-performing sales channel.
              </p>
              <Link 
                href="?contact=true" scroll={false} 
                className={cn(theme.buttonPrimary, "inline-flex w-full sm:w-auto justify-center items-center gap-3 group px-7 sm:px-8 py-3.5 sm:py-4")}
              >
                Get a Free Website Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Development Services */}
      <section className="py-16 sm:py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(theme.h2, "text-white")}
            >
              Website Development Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-[1536px] mx-auto">
            {devServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[20px] sm:rounded-3xl hover:bg-white/10 hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 group flex flex-col"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                </div>
                <p className={cn(theme.p, "text-gray-300 mb-5 sm:mb-6 flex-grow text-[14px] leading-relaxed tracking-normal !indent-0")}>
                  {service.desc}
                </p>
                <Link 
                  href="?contact=true" scroll={false} 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-orange-400 transition-colors mt-auto text-sm sm:text-base group/link"
                >
                  {service.link}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology We Work With */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Technology We Work With
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-5 sm:p-6 rounded-[16px] sm:rounded-2xl flex flex-col justify-center items-center text-center hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-1.5 sm:mb-2">{tech.category}</h3>
                <p className="text-primary font-medium text-sm sm:text-base m-0">{tech.items}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Our Process
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-sm relative z-10">
                  <process.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-white transition-colors" />
                  {index < processes.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 sm:-right-8 top-1/2 w-4 sm:w-6 h-[2px] bg-primary/30 transform -translate-y-1/2 z-0" />
                  )}
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-bold text-navy-900 group-hover:text-primary transition-colors leading-snug">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-3xl mx-auto")}
            >
              Why Choose Us
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 sm:p-7 rounded-[20px] sm:rounded-3xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">{item.title}</h3>
                </div>
                <p className={cn(theme.p, "text-gray-300 text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-navy-900")}
            >
              Frequently Asked Questions
            </motion.h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <div
                    className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'}`}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div className="flex items-center justify-between p-4 sm:p-5">
                      <h4 className="text-[#0b132a] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-snug pr-4">{faq.q}</h4>
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-1 sm:ml-3">
                        <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                        <div className={`absolute h-full w-[2px] sm:w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-primary rounded-2xl sm:rounded-3xl p-8 sm:p-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 leading-snug">Work with Pinnacle Systems Today!</h2>
            <Link 
              href="?contact=true" scroll={false} 
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white text-[#0b132a] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base transition-all group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
