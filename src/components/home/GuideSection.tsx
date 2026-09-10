'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: 'What services does Pinnacle Systems offer?',
    answer: 'Pinnacle Systems provides end-to-end Technology Solutions, including Custom ERP Software Development, Website Development, Mobile App Development, Digital Marketing and System integration services. We help Businesses streamline operations, improve productivity and accelerate Digital Transformation.'
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We collaborate with Companies across many different Industries, Including manufacturing, Healthcare, Textiles, Retail, Logistics, Education, Commercial Real estate and also Startups. Each solution is designed to meet specific Industry requirements.'
  },
  {
    question: 'Do you create Customized Software to meet Specific Business requirements?',
    answer: 'Yes. We are experts in the development of Custom Software that matches your workflow, processes and growth targets. Our solutions are designed to increase efficiency, decrease the manual labor involved and ensure long-term capacity.'
  },
  {
    question: 'Do you have the ability to integrate our existing Software with your newer systems?',
    answer: 'Yes. We offer system integration services that connect ERP Software, Accounting Software, CRM platforms, Payment channels, ECommerce platforms and Third-party software to ensure that data flows seamlessly throughout your company.'
  },
  {
    question: 'Do you create Mobile applications and Websites?',
    answer: 'Absolutely. We create and design User-friendly Websites and Mobile Applications that work on Android as well as IOS. Our solutions are focused on speed, safety, user experience and the ability to scale.'
  },
];

export default function GuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#f8f9fa] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute left-0 top-1/4 w-48 sm:w-64 h-48 sm:h-64 border border-dashed border-primary/40 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 lg:opacity-100"></div>
      <div className="absolute left-1/4 bottom-0 w-24 sm:w-32 h-24 sm:h-32 border border-dashed border-primary/40 rounded-full translate-y-1/2 opacity-50 lg:opacity-100"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-12 lg:gap-24">

          {/* Left Column */}
          <div className="w-full lg:w-1/2 relative z-10 lg:pl-12 xl:pl-16 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-primary/20 mb-5 sm:mb-6 bg-white shadow-sm w-fit">
              <div className="w-3 sm:w-4 h-[2px] sm:h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-[0.1em] sm:tracking-[0.15em] uppercase">Pinnacle Systems COMPANY</span>
            </div>

            {/* Heading */}
            <h2 className={cn(theme.h2, "mb-10 sm:mb-12 max-w-lg mx-auto lg:mx-0")}>
              Keeping Your Business Safe and <span className="text-primary">Available.</span>
            </h2>

            {/* Image Box */}
            <div className="relative w-full max-w-[500px] sm:max-w-[550px] mx-auto lg:mx-0">
              {/* Background Decorative blob/shape on top-right */}
              <div className="absolute -right-4 sm:-right-8 md:-right-12 -top-4 sm:-top-8 w-[90%] h-[115%] bg-[#fff9f4] rounded-[24px] sm:rounded-[30px] -z-10"></div>

              <div className="relative rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-lg aspect-[16/10] w-full">
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
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
            <h2 className={cn(theme.h2, "mb-5 sm:mb-6 text-center lg:text-left")}>
              FAQ.
            </h2>

            {/* Accordion */}
            <div className="space-y-3 mt-6 sm:mt-8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-[10px] transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'shadow-md shadow-gray-200/50' : 'shadow-sm border border-gray-100 hover:border-gray-200'
                      }`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 sm:p-5">
                      <h4 className="text-[#0b132a] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-snug pr-4">{faq.question}</h4>
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-1 sm:ml-3">
                        {/* Horizontal line (always visible) */}
                        <div className="absolute w-full h-[2px] sm:h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                        {/* Vertical line (rotates and fades when open) */}
                        <div className={`absolute h-full w-[2px] sm:w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                      </div>
                    </div>

                    {/* Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                          <div className="w-full h-[1px] bg-gray-100 mb-3 sm:mb-4"></div>
                          <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal")}>
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
