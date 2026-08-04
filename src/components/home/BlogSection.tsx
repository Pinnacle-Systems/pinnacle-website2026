import React from 'react';
import Image from 'next/image';
import { Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section className="relative pt-24 pb-24 bg-[#f8f9fa]">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Header */}
         <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative gap-8">
            <div className="w-full md:w-[60%] relative z-10">
               {/* Pill */}
               <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 mb-6 bg-white shadow-sm">
                 <div className="w-4 h-[3px] bg-primary rounded-full"></div>
                 <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">OUR LATEST BLOG</span>
               </div>
               
               {/* Heading */}
               <h2 className="text-3xl lg:text-[36px] leading-[1.2] font-extrabold text-[#0b132a] max-w-xl">
                 Exploring Its Potential in Various <span className="text-primary">Industries.</span>
               </h2>
            </div>
            
            <div className="w-full md:w-[40%] flex justify-start md:justify-end md:pt-16 pb-2 relative z-10">
               <button className="bg-primary hover:bg-orange-600 text-white font-bold text-[13px] tracking-wider px-8 py-4 rounded-full transition-colors shadow-md shadow-primary/20 uppercase md:-mt-1">
                  VIEW ALL POST
               </button>
            </div>
            
            {/* Divider Line */}
            <div className="absolute bottom-4 right-0 w-[45%] h-[1px] bg-gray-300 hidden md:block"></div>
         </div>
         
         {/* Grid Layout */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mx-12 lg:gap-16">
            
            {/* Featured Large Card (Left) */}
            <div className="lg:col-span-5 h-full">
               <div className="bg-white p-5 rounded-[24px] shadow-sm flex flex-col h-full group hover:shadow-md transition-shadow">
                  <div className="relative w-full aspect-[16/11] rounded-t-[16px] overflow-hidden">
                     <Image 
                       src="/grid1img.png" 
                       alt="Blog Post 1" 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  {/* Orange Meta Bar */}
                  <div className="w-full bg-primary text-white flex items-center justify-between px-6 py-4 rounded-b-[16px] mb-6 shadow-md shadow-primary/20">
                     <div className="flex items-center gap-2">
                        <Calendar size={16} /> 
                        <span className="text-[14px] font-medium">20 June 2024</span>
                     </div>
                     <div className="w-[1px] h-4 bg-white/40"></div>
                     <div className="flex items-center gap-2">
                        <MessageSquare size={16} /> 
                        <span className="text-[14px] font-medium">Comment-05</span>
                     </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-2 pt-2 pb-4 flex flex-col flex-grow">
                     <h3 className="text-2xl font-semibold text-[#0b132a] leading-tight mb-4 group-hover:text-primary transition-colors cursor-pointer">
                       Leveraging Descriptive Solutions for Business Growth.
                     </h3>
                     <p className="text-[#64748b] text-[15px] leading-relaxed mb-8 flex-grow">
                       Appropriatel promote enterprise-wide through in information without equity best revolutioniz
                     </p>
                     <div className="mt-auto">
                        <a href="#" className="inline-flex items-center gap-2 text-gray-500 font-bold text-[13px] tracking-wider uppercase hover:text-primary transition-colors">
                           READ MORE <ArrowRight size={16} strokeWidth={2.5} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Small Horizontal Cards (Right) */}
            <div className="lg:col-span-7 flex flex-col gap-6 h-full">
               
               {/* Card 1 */}
               <div className="bg-white p-5 rounded-[24px] shadow-sm flex flex-col sm:flex-row gap-6 group hover:shadow-md transition-shadow flex-1">
                  <div className="relative w-full sm:w-[45%] lg:w-[40%] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 my-auto">
                     <Image 
                       src="/gridimg2.png" 
                       alt="Blog Post 2" 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                  </div>
                  <div className="flex flex-col justify-center w-full py-2">
                     {/* Meta Bar */}
                     <div className="bg-[#f8f9fa] flex items-center gap-4 px-4 py-2.5 rounded-[10px] mb-5 w-max border border-gray-100">
                        <div className="flex items-center gap-2 text-primary">
                           <Calendar size={15} /> 
                           <span className="text-gray-500 text-[13px] font-medium">20 June 2024</span>
                        </div>
                        <div className="w-[1px] h-3 bg-gray-300"></div>
                        <div className="flex items-center gap-2 text-primary">
                           <MessageSquare size={15} /> 
                           <span className="text-gray-500 text-[13px] font-medium">Comment-05</span>
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-[#0b132a] leading-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                       How to Create Modern Web Site For Your Business..
                     </h3>
                     <p className="text-[#64748b] text-[14px] leading-relaxed mb-6">
                       Appropriatel promote enterprise-wide through in information without best revolutioniz
                     </p>
                     <div className="mt-auto">
                        <a href="#" className="inline-flex items-center gap-2 text-gray-500 font-bold text-[12px] tracking-wider uppercase hover:text-primary transition-colors">
                           READ MORE <ArrowRight size={16} strokeWidth={2.5} />
                        </a>
                     </div>
                  </div>
               </div>
               
               {/* Card 2 */}
               <div className="bg-white p-5 rounded-[24px] shadow-sm flex flex-col sm:flex-row gap-6 group hover:shadow-md transition-shadow flex-1">
                  <div className="relative w-full sm:w-[45%] lg:w-[40%] aspect-[4/3] rounded-[16px] overflow-hidden shrink-0 my-auto">
                     <Image 
                       src="/gridimg3.png" 
                       alt="Blog Post 3" 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                  </div>
                  <div className="flex flex-col justify-center w-full py-2">
                     {/* Meta Bar */}
                     <div className="bg-[#f8f9fa] flex items-center gap-4 px-4 py-2.5 rounded-[10px] mb-5 w-max border border-gray-100">
                        <div className="flex items-center gap-2 text-primary">
                           <Calendar size={15} /> 
                           <span className="text-gray-500 text-[13px] font-medium">20 June 2024</span>
                        </div>
                        <div className="w-[1px] h-3 bg-gray-300"></div>
                        <div className="flex items-center gap-2 text-primary">
                           <MessageSquare size={15} /> 
                           <span className="text-gray-500 text-[13px] font-medium">Comment-05</span>
                        </div>
                     </div>
                     <h3 className="text-xl font-semibold text-[#0b132a] leading-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                       How to Create Modern Web Site For Your Business..
                     </h3>
                     <p className="text-[#64748b] text-[14px] leading-relaxed mb-6">
                       Appropriatel promote enterprise-wide through in information without best revolutioniz
                     </p>
                     <div className="mt-auto">
                        <a href="#" className="inline-flex items-center gap-2 text-gray-500 font-bold text-[12px] tracking-wider uppercase hover:text-primary transition-colors">
                           READ MORE <ArrowRight size={16} strokeWidth={2.5} />
                        </a>
                     </div>
                  </div>
               </div>
               
            </div>
         </div>
         
       </div>
    </section>
  );
}
