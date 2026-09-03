import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { theme } from "@/theme";

export default function ContactSection() {
  return (
    <section className="relative py-12 lg:py-20 bg-white overflow-hidden">
       {/* Decorative Left Background */}
       <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent -z-10"></div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Column (Form) */}
            <div className="w-full lg:w-[45%]">
               {/* Pill */}
               <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 mb-6 bg-white shadow-sm">
                 <div className="w-4 h-[3px] bg-primary rounded-full"></div>
                 <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">CONTACT US</span>
               </div>
               
               {/* Heading */}
               <h2 className={`${theme.h2} font-semibold mb-10 max-w-lg`}>
                 Make an Online Appointment Booking For Business Planning.
               </h2>
               
               {/* Form */}
               <form className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input 
                     type="text" 
                     placeholder="Your Name *" 
                     required
                     className="w-full px-6 py-4 rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[15px] placeholder:text-gray-400" 
                   />
                   <input 
                     type="email" 
                     placeholder="Your E-Mail *" 
                     required
                     className="w-full px-6 py-4 rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[15px] placeholder:text-gray-400" 
                   />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <input 
                     type="text" 
                     placeholder="Subject *" 
                     required
                     className="w-full px-6 py-4 rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[15px] placeholder:text-gray-400" 
                   />
                   <input 
                     type="tel" 
                     placeholder="Phone *" 
                     required
                     className="w-full px-6 py-4 rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[15px] placeholder:text-gray-400" 
                   />
                 </div>
                 
                 <textarea 
                   placeholder="Message" 
                   rows={5} 
                   className="w-full px-6 py-4 rounded-[14px] border border-gray-200 focus:border-primary focus:outline-none transition-colors text-[15px] placeholder:text-gray-400 resize-none"
                 ></textarea>
                 
                 <button 
                   type="submit" 
                   className="bg-primary hover:bg-orange-600 text-white font-bold text-[14px] tracking-wider px-10 py-4 rounded-full transition-colors duration-300 shadow-md shadow-primary/20 uppercase flex items-center justify-center gap-2 group"
                 >
                   SEND NOW <ArrowUpRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
            </div>
            
            {/* Right Column (Image) */}
            <div className="w-full lg:w-[55%]">
               <div className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden shadow-2xl">
                  <Image 
                    src="/grp.png" 
                    alt="Group Discussion" 
                    fill 
                    className="object-cover" 
                  />
                  
                  {/* Play Badge */}
                  <div className="absolute top-10 left-10 w-24 h-24 bg-[#0b132a] rounded-full flex items-center justify-center text-primary font-bold z-10 cursor-pointer hover:scale-105 transition-transform shadow-xl">
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
                     <span className="relative z-10 text-[15px] tracking-wide">Play</span>
                  </div>
               </div>
            </div>
            
         </div>
       </div>
    </section>
  );
}
