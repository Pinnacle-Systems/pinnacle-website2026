"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const categories = [
  "Web Application Development",
  "Custom ERP Software",
  "Textile ERP Software",
  "Website Development",
  "Digital Marketing Services",
  "Mobile app development"
];

// Placeholder articles
const allArticles = [
  {
    title: "ERP for Garment Exporters: How the Right System Simplifies Buyer Orders, Compliance and Shipments.",
    excerpt: "Garment exporters operate under pressure that domestic manufacturers rarely face. Learn why export-focused ERP has become essential.",
    category: "Textile ERP Software",
    date: "Sep 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    slug: "/blog/erp-for-garment-exporters"
  },
  {
    title: "Why Custom ERPs Outperform Off-the-Shelf Solutions",
    excerpt: "Generic software forces you to change your workflow. Learn why a custom-built ERP adapts to your business.",
    category: "Custom ERP Software",
    date: "Aug 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  },
  {
    title: "10 Digital Marketing Trends to Watch This Year",
    excerpt: "Stay ahead of the curve with these emerging digital marketing strategies that actually drive conversions.",
    category: "Digital Marketing Services",
    date: "Aug 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  },
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "An inside look at how modern frameworks like Next.js are revolutionizing web application architecture.",
    category: "Web Application Development",
    date: "Aug 02, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  },
  {
    title: "Mobile App Design: Engaging Users from the First Tap",
    excerpt: "UI/UX principles that keep users coming back to your mobile applications time and time again.",
    category: "Mobile app development",
    date: "Jul 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  },
  {
    title: "The Importance of Fast-Loading Corporate Websites",
    excerpt: "How site speed directly impacts your bounce rate, SEO rankings and ultimately, your bottom line.",
    category: "Website Development",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    slug: "#"
  }
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredArticles = allArticles.filter(article => article.category === activeTab);

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
          <div className="max-w-4xl mx-auto text-center mt-12 mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span>Insights & News</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(theme.h1, "text-white mb-6")}
            >
              The Pinnacle Blog
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(theme.p, "mx-auto text-gray-300 max-w-2xl text-center")}
            >
              Discover the latest trends, tips and insights across software development, digital marketing and industry-specific ERP solutions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── TABS & CONTENT (White) ── */}
      <section className="py-16 sm:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs Container */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-300",
                    activeTab === cat 
                      ? "bg-primary text-white shadow-md transform scale-105" 
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary/50 hover:text-primary"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article, idx) => (
                    <div 
                      key={idx}
                      className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                    >
                      <div className="h-56 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#0b132a] mb-4 group-hover:text-primary transition-colors leading-tight">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                          {article.excerpt}
                        </p>
                        
                        <Link href={article.slug} className="inline-flex items-center gap-2 text-primary font-bold text-[15px] hover:gap-3 transition-all mt-auto w-fit">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0b132a] mb-3">Check Back Soon</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We are currently writing highly informative articles for the <span className="font-semibold text-primary">{activeTab}</span> category. Subscribe to our newsletter to be notified when they drop!
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER (Navy) ── */}
      <section className="py-20 bg-[#0b132a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Stay Updated
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-10 text-[16px]">
              Get the latest insights on software development, ERP strategies and digital marketing delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-white/5 border border-white/10 text-white rounded-full px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                required
              />
              <button 
                type="button"
                className="bg-primary text-white hover:bg-orange-600 px-8 py-4 rounded-full font-bold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
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
