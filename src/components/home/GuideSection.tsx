'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What Medical Services Do You Provide?',
    answer: 'Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative.'
  },
  {
    question: 'What is your customer geography?',
    answer: 'Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative.'
  },
  {
    question: 'What are the main industries we serve?',
    answer: 'Appropriately promote enterprise-wide vortals throuh innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative.'
  }
];

export default function GuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative pt-24 pb-24 bg-[#f8f9fa] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute left-0 top-1/4 w-64 h-64 border border-dashed border-primary/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-1/4 bottom-0 w-32 h-32 border border-dashed border-primary/40 rounded-full translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 relative z-10 lg:pl-12 xl:pl-16">
            {/* Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Pinnacle Systems COMPANY</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl lg:text-[40px] leading-[1.2] font-extrabold text-[#0b132a] mb-12 max-w-lg">
              Keeping Your Business Safe and <span className="text-primary">Available.</span>
            </h2>
            
            {/* Image Box */}
            <div className="relative">
               {/* Background Decorative blob/shape on top-right */}
               <div className="absolute -right-8 md:-right-12 -top-8 w-[90%] h-[115%] bg-[#fff9f4] rounded-[30px] -z-10"></div>
               
               <div className="relative rounded-[30px] overflow-hidden shadow-lg aspect-[16/10] w-full max-w-[550px]">
                 <Image 
                   src="/groupdiscussion.png" 
                   alt="Business Meeting" 
                   fill
                   className="object-cover"
                 />
               </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 pt-4">
            <h2 className="text-3xl lg:text-[36px] font-extrabold text-[#0b132a] mb-4">
              A Comprehensive <span className="text-primary">Guide.</span>
            </h2>
            
            <p className="text-[#64748b] text-[15px] leading-relaxed mb-10 max-w-md">
              Alternative innovation network environmental whiteboard pursue for premier methods empowerment go forward opportunities
            </p>
            
            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <div 
                    key={index}
                    className={`bg-white rounded-[12px] transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'
                    }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6">
                      <h4 className="text-[#0b132a] font-bold text-[17px]">{faq.question}</h4>
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0">
                         {/* Horizontal line (always visible) */}
                         <div className="absolute w-full h-[3px] bg-primary rounded-full transition-transform duration-300"></div>
                         {/* Vertical line (rotates and fades when open) */}
                         <div className={`absolute h-full w-[3px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                      </div>
                    </div>
                    
                    {/* Body */}
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                          <p className="text-[#64748b] text-[15px] leading-[1.8]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
