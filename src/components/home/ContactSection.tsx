"use client";
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
       {/* Decorative Left Background */}
       <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent -z-10"></div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
            
            {/* Left Column (Form) */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
               {/* Pill */}
               <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-primary/20 mb-5 sm:mb-6 bg-white shadow-sm w-fit">
                 <div className="w-3 sm:w-4 h-[2px] sm:h-[3px] bg-primary rounded-full"></div>
                 <span className="text-primary font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.1em] sm:tracking-[0.15em] uppercase">CONTACT US</span>
               </div>
               
               {/* Heading */}
               <h2 className={cn(theme.h2, "mb-8 sm:mb-10 max-w-xl xl:max-w-2xl mx-auto lg:mx-0")}>
                 Make an Online Appointment Booking For Business Planning.
               </h2>
               
               {/* Form */}
               <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full text-left">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                   <input 
                     type="text" 
                     name="name"
                     placeholder="Your Name *" 
                     required
                     className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-[12px] sm:rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[14px] sm:text-[15px] placeholder:text-gray-400" 
                   />
                   <input 
                     type="email" 
                     name="email"
                     placeholder="Your E-Mail *" 
                     required
                     className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-[12px] sm:rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[14px] sm:text-[15px] placeholder:text-gray-400" 
                   />
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                   <input 
                     type="text" 
                     name="subject"
                     placeholder="Subject *" 
                     required
                     className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-[12px] sm:rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[14px] sm:text-[15px] placeholder:text-gray-400" 
                   />
                   <input 
                     type="tel" 
                     name="phone"
                     placeholder="Phone *" 
                     required
                     className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-[12px] sm:rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[14px] sm:text-[15px] placeholder:text-gray-400" 
                   />
                 </div>
                 
                 <textarea 
                   name="message"
                   placeholder="Message" 
                   rows={4} 
                   className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-[12px] sm:rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[14px] sm:text-[15px] placeholder:text-gray-400 resize-none sm:min-h-[140px]"
                 ></textarea>

                 {submitStatus === "success" && (
                   <div className="p-4 rounded-[12px] bg-green-50 border border-green-200 text-green-700 text-[14px] sm:text-[15px] flex items-center gap-3">
                     <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     Thank you! Your appointment booking request has been sent successfully.
                   </div>
                 )}

                 {submitStatus === "error" && (
                   <div className="p-4 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-[14px] sm:text-[15px] flex items-center gap-3">
                     <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     Something went wrong. Please try again later.
                   </div>
                 )}
                 
                 <div className="flex justify-center lg:justify-start pt-2">
                   <button 
                     type="submit" 
                     disabled={isSubmitting}
                     className="bg-primary hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-[13px] sm:text-[14px] tracking-wider px-8 py-3.5 sm:px-10 sm:py-4 rounded-full transition-colors duration-300 shadow-md shadow-primary/20 uppercase flex items-center justify-center gap-2 group w-full sm:w-auto"
                   >
                     {isSubmitting ? "SENDING..." : "SEND NOW"} 
                     {!isSubmitting && <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                   </button>
                 </div>
               </form>
            </div>
            
            {/* Right Column (Image) */}
            <div className="w-full lg:w-[55%] mt-8 lg:mt-0">
               <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl max-w-[600px] mx-auto lg:max-w-none">
                  <Image 
                    src="/grp.png" 
                    alt="Group Discussion" 
                    fill 
                    className="object-cover" 
                  />
                  
                  {/* Play Badge */}
                  <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-[#0b132a] rounded-full flex items-center justify-center text-primary font-bold z-10 cursor-pointer hover:scale-105 transition-transform shadow-xl">
                     <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        {/* Background Circle */}
                        <circle cx="50" cy="50" r="46" fill="none" stroke="#1e293b" strokeWidth="4" />
                        {/* Orange Progress Circle */}
                        <circle 
                          cx="50" cy="50" r="46" 
                          fill="none" 
                          stroke="#ff4f00" 
                          strokeWidth="4" 
                          strokeDasharray="289" 
                          strokeDashoffset="120" 
                          strokeLinecap="round" 
                        />
                     </svg>
                     <span className="relative z-10 text-[12px] sm:text-[15px] tracking-wide">Play</span>
                  </div>
               </div>
            </div>
            
         </div>
       </div>
    </section>
  );
}
