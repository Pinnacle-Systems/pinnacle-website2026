'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What services does Pinnacle Systems offer?',
    answer: 'Pinnacle Systems provides end-to-end Technology Solutions, including Custom ERP Software Development, Website Development, Mobile App Development, Digital Marketing, and System integration services. We help Businesses streamline operations, improve productivity, and accelerate Digital Transformation.'
  },
  {
    question: 'Which industries do you serve?',
    answer: 'We collaborate with Companies across many different Industries, Including manufacturing, Healthcare, Textiles, Retail, Logistics, Education, Commercial Real estate and also Startups. Each solution is designed to meet specific Industry requirements.'
  },
  {
    question: 'Do you create Customized Software to meet Specific Business requirements?',
    answer: 'Yes. We are experts in the development of Custom Software that matches your workflow, processes and growth targets. Our solutions are designed to increase efficiency, decrease the manual labor involved, and ensure long-term capacity.'
  },
  {
    question: 'Do you have the ability to integrate our existing Software with your newer systems?',
    answer: 'Yes. We offer system integration services that connect ERP Software, Accounting Software, CRM platforms, Payment channels, ECommerce platforms, and Third-party software to ensure that data flows seamlessly throughout your company.'
  },
  {
    question: 'Do you create Mobile applications and Websites?',
    answer: 'Absolutely. We create and design User-friendly Websites and Mobile Applications that work on Android as well as IOS. Our solutions are focused on speed, safety, user experience, and the ability to scale.'
  },

];

export default function GuideSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-12 lg:py-20 bg-[#f8f9fa] overflow-hidden">
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
            <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] mb-12 max-w-lg">
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
            <h2 className="text-3xl lg:text-[32px] font-extrabold text-[#0b132a] mb-4">
              FAQ.
            </h2>



            {/* Accordion */}
            <div className="space-y-3 mt-8">
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
                    <div className="flex items-center justify-between p-5">
                      <h4 className="text-[#0b132a] font-bold text-[15px] sm:text-[16px]">{faq.question}</h4>
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0 ml-3">
                        {/* Horizontal line (always visible) */}
                        <div className="absolute w-full h-[2.5px] bg-primary rounded-full transition-transform duration-300"></div>
                        {/* Vertical line (rotates and fades when open) */}
                        <div className={`absolute h-full w-[2.5px] bg-primary rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}></div>
                      </div>
                    </div>

                    {/* Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5">
                          <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                          <p className="text-[#64748b] text-[14px] leading-[1.7] text-justify indent-6">
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
