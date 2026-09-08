"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify({
      access_key: "fc7cf231-adb2-4d94-8e26-caa8f3ae7758",
      // access_key: "aace922b-3caf-42b7-a56f-3ebde2a4f838",
      subject: "New Contact Form Submission - Pinnacle Systems",
      from_name: object.name,
      ...object
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0b132a] text-white pt-20 sm:pt-24 pb-10 sm:pb-16 overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mt-8 sm:mt-12 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={cn(theme.h1, "text-white")}
          >
            Let's Talk About Your Next Big Project
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(theme.p, "mx-auto text-center sm:text-center")}
          >
            Whether you need custom ERP software, a new website, or a complete digital transformation — our experts are ready to help you accelerate growth.
          </motion.p>
        </div>

        {/* Contact Layout Grid */}
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 sm:mb-24 items-start">
          
          {/* Contact Information (Left Column) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-5">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">Our Headquarters</h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed m-0 p-0 indent-0">
                      Tirupur, Tamil Nadu<br />
                      India - 641604
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">Phone Number</h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed m-0 p-0 indent-0">
                      +91 98765 43210<br />
                      Mon-Fri, 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">Email Address</h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed m-0 p-0 indent-0">
                      contact@pinnaclesystems.in<br />
                      support@pinnaclesystems.in
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <Clock className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-400 text-[14px] leading-relaxed m-0 p-0 indent-0">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-[24px] sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h2 className="text-2xl font-extrabold text-[#0b132a] tracking-tight leading-tight mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-[14px] mb-6 m-0 p-0 indent-0">Fill out the form below and we will get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Optional Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project requirements..."
                    className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="m-0 p-0 text-sm font-medium">Thank you! Your message has been sent successfully.</p>
                  </motion.div>
                )}
                
                {submitStatus === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p className="m-0 p-0 text-sm font-medium">Something went wrong. Please try again later.</p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    theme.buttonPrimary, 
                    "w-full flex items-center justify-center gap-3 group relative overflow-hidden",
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                
              </form>
            </div>
          </motion.div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
