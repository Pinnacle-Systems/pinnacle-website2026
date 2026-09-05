"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Zap, Search, MousePointerClick, 
  ShieldCheck, PenTool, Code, CheckSquare, Rocket, ChevronDown,
  LineChart, FastForward, Target, BadgeDollarSign, HeadphonesIcon, TrendingUp, MonitorSmartphone
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function WebsiteDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const performanceFeatures = [
    { title: "Load fast", desc: "Optimized for Core Web Vitals and mobile-first performance", icon: Zap },
    { title: "Rank higher", desc: "Built on clean, SEO-friendly code structure from day one", icon: Search },
    { title: "Convert better", desc: "Designed around user behavior, not just aesthetics", icon: MousePointerClick },
    { title: "Scale easily", desc: "Built on modern, secure frameworks that grow with your business", icon: ShieldCheck }
  ];

  const devServices = [
    { title: "Corporate Website Development", desc: "Establish digital authority with a professional, fast-loading corporate site that builds immediate trust with stakeholders and B2B partners.", link: "Explore Corporate Websites" },
    { title: "Services Websites", desc: "Turn local searches into qualified leads with structured service breakdowns, localized SEO foundations, and frictionless contact forms.", link: "Explore Service Websites" },
    { title: "Real Estate Website Development", desc: "Showcase properties with high-resolution image optimization, integrated map features, and advanced search filters for buyers and investors.", link: "Explore Real Estate Websites" },
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
    { title: "In-House SEO Experts", desc: "Every website we build is backed by our in-house SEO team from day one, not handed off to a separate agency later. This means your site's structure, page speed, and content are optimized to rank from the moment it launches, not months after.", icon: LineChart },
    { title: "Performance-First Development", desc: "We don't just make websites that look good — we build for Core Web Vitals, fast load times, and mobile-first experiences that keep visitors on the page instead of bouncing.", icon: FastForward },
    { title: "Conversion-Focused Design", desc: "Every layout, CTA, and form is designed around how users actually behave — turning traffic into leads and sales, not just page views.", icon: Target },
    { title: "Transparent, Fixed Pricing", desc: "No hidden fees or scope surprises. You get a clear quote upfront based on your goals.", icon: BadgeDollarSign },
    { title: "Ongoing Support After Launch", desc: "We don't disappear after your site goes live — we offer maintenance, security monitoring, and updates to keep it running smoothly.", icon: HeadphonesIcon },
    { title: "Built to Scale", desc: "Your website is developed on modern, secure frameworks that grow with your business, so you won't need a rebuild in a year.", icon: TrendingUp }
  ];

  const faqs = [
    { q: "1. What is the time frame to create and design the website?", a: "A typical website takes 3 to 6 weeks from start to launch, depending on the level of complexity. A landing page may be completed in as short as a couple of weeks, whereas E-commerce or custom CMS builds that have advanced features can take between 6 and 8 weeks." },
    { q: "2. How much does a professional website cost?", a: "Pricing depends on the type of website, features, and platform (e.g., WordPress, Shopify, or custom-built). We provide a fixed quote after understanding your goals — there are no hidden fees or surprise charges." },
    { q: "3. Will my website be optimized for Google (SEO)?", a: "Yes. Each website we create is built on clear, SEO-friendly code with speedy loading pages, mobile-first designs, and an appropriate technical structure. This gives you the best foundation to be ranked higher on Google right from the start." },
    { q: "4. Are you capable of revamping my website without impacting my SEO rankings?", a: "Yes. The process we use to redesign your website includes secure URL redirection and SEO audits for technical SEO to ensure that your rankings, backlinks, and traffic are secure in and after the alteration." },
    { q: "5. Does my site work for mobile phones?", a: "Absolutely. Every website we build is mobile-friendly by default, and optimized for Core Web Vitals, ensuring speedy loading and seamless navigation across smartphones, tablets, as well as desktops." },
    { q: "6. Do I have the ability to update the site myself, after it's been constructed?", a: "Yes. We are built on easy-to-use CMS platforms such as WordPress or an individual CMS, and your team can make changes to text, images, pages, and text without coding expertise." },
    { q: "7. Do you create e-commerce sites?", a: "Yes. We create high-speed, secure e-commerce sites using Shopify or custom platforms that have optimized page layouts for products as well as simplified checkout flows that are created to improve conversion rates." },
    { q: "8. What makes your websites different from a template-based website?", a: "Our websites are designed around performance and conversions — not just visuals. We focus on speed, SEO structure, and user behavior so your website actively generates leads and sales, rather than just looking good." },
    { q: "9. Do you offer website support and maintenance after launch?", a: "Yes. We offer ongoing support packages for updates, security monitoring, backups, and performance optimization to keep your website running smoothly after it goes live." },
    { q: "10. How do I get started with a new website or redesign?", a: "Simply request a Free Website Audit. We'll review your current site (or goals for a new one) and provide a clear breakdown of what's needed to make your website faster, higher-ranking, and more conversion-focused." }
  ];

  return (
    <main className="min-h-screen bg-[#0b132a] text-white pt-24 pb-16 overflow-hidden">
      <Header />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Rocket className="w-4 h-4" />
            <span>High-Converting Design</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Website Development Company for Fast, High-Converting Websites
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-gray-300 text-center sm:text-center")}
          >
            We design and develop websites that load in seconds, rank on Google, and turn visitors into paying customers not just another page on the internet.
          </motion.p>
        </div>

        {/* Built to Perform */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(theme.h2, "text-white mb-6")}
              >
                Website Development That's Built to Perform
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                className={cn(theme.p, "text-gray-300 mx-auto text-center sm:text-center")}
              >
                A great-looking website means nothing if it's slow, hard to navigate, or invisible on Google. As a website development company focused on performance and conversions, we build websites that:
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {performanceFeatures.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-start gap-5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>
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
              className="text-center border-t border-white/10 pt-10"
            >
              <p className={cn(theme.p, "text-white/90 font-medium mx-auto text-center sm:text-center mb-8")}>
                Whether you need a brand-new website or a redesign of an underperforming one, we build with one goal: turning your website into your best-performing sales channel.
              </p>
              <Link 
                href="/contact" 
                className={cn(theme.buttonPrimary, "inline-flex items-center gap-3 group px-8 py-4")}
              >
                Get a Free Website Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Website Development Services */}
        <div className="max-w-6xl mx-auto mb-20 bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={cn(theme.h2, "text-[#0b132a] mb-6")}
            >
              Website Development Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {devServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#0b132a] mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className={cn(theme.p, "text-gray-600 mb-6 flex-grow")}>
                  {service.desc}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-orange-700 transition-colors mt-auto group/link"
                >
                  {service.link}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology We Work With */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Technology We Work With
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.category}</h3>
                <p className="text-primary font-medium m-0">{tech.items}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Process Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              Our Process
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg relative z-10">
                  <process.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute -right-6 top-1/2 w-4 h-0.5 bg-primary/50 transform -translate-y-1/2 -z-10" />
                  )}
                </div>
                <h3 className="text-[15px] md:text-[16px] font-bold text-gray-300 group-hover:text-white transition-colors">{process.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white max-w-3xl mx-auto")}
            >
              Why Choose Us
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(theme.h2, "text-white")}
            >
              FAQ
            </motion.h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <span className="text-[16px] md:text-[18px] font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0", openFaq === idx ? "transform rotate-180" : "")} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className={cn(theme.p, "mb-0 indent-0 max-w-none text-gray-400")}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-primary rounded-[3rem] p-12 md:p-16 shadow-[0_10px_40px_rgba(255,90,0,0.3)] relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-20"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">Work with Pinnacle Systems Today!</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 bg-white text-[#0b132a] hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl group relative z-10"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
      <Footer />
    </main>
  );
}
