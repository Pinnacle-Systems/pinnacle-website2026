"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

export default function DemoModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isOpen = searchParams.get("contact") === "true";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("contact");
    const newSearch = params.toString();
    router.replace(`${pathname}${newSearch ? `?${newSearch}` : ""}`, { scroll: false });
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify({
      access_key: "fc7cf231-adb2-4d94-8e26-caa8f3ae7758",
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
        
        // Reset success message after 3 seconds and close modal
        setTimeout(() => {
          setSubmitStatus("idle");
          closeModal();
        }, 3000);
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[24px] sm:rounded-[2rem] shadow-2xl overflow-hidden z-10"
          >
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 rounded-full blur-[60px] -z-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 pb-0">
              <div>
                <h2 className="text-2xl font-extrabold text-[#0b132a] tracking-tight leading-tight mb-2">
                  Book a Demo
                </h2>
                <p className="text-gray-500 text-sm m-0 p-0">
                  Fill out the form below and we will get back to you.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors shrink-0 -mt-8 -mr-4"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-6 sm:pb-8  space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="demo-name" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="demo-name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="demo-phone" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="demo-email" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="demo-email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="demo-subject" className="block text-xs font-bold text-[#0b132a] mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="demo-subject"
                  name="subject"
                  required
                  placeholder="E.g., Textile ERP Demo Request"
                  className="w-full bg-gray-50 border border-gray-200 text-[#0b132a] text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="m-0 p-0 text-sm font-medium">Thank you! Your request has been sent.</p>
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
                  "w-full flex items-center justify-center gap-3 group relative overflow-hidden mt-6",
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
                    Submit Request
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
