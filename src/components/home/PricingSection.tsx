import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard Plan',
    price: '$49',
    features: [
      '30 Days Trial Features',
      'Multi-Language Content',
      'Unlimited Features',
      'Data backup and recovery',
      'Synced To Cloud Database',
    ]
  },
  {
    name: 'Basic Plan',
    price: '$59',
    features: [
      '30 Days Trial Features',
      'Multi-Language Content',
      'Unlimited Features',
      'Data backup and recovery',
      'Synced To Cloud Database',
    ]
  },
  {
    name: 'Beginner Plan',
    price: '$69',
    features: [
      '30 Days Trial Features',
      'Multi-Language Content',
      'Unlimited Features',
      'Data backup and recovery',
      'Synced To Cloud Database',
    ]
  },
  {
    name: 'Premium Plan',
    price: '$79',
    features: [
      '30 Days Trial Features',
      'Multi-Language Content',
      'Unlimited Features',
      'Data backup and recovery',
      'Synced To Cloud Database',
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="relative pt-20 lg:pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">START BUSINESS</span>
            </div>
            <h2 className="text-4xl lg:text-[46px] leading-[1.2] font-extrabold text-[#0b132a]">
              Choose Your Best Plan
            </h2>
          </div>
          
          <div className="lg:w-1/2 flex items-center lg:pl-12">
            <div className="w-[2px] h-20 bg-orange-100 hidden lg:block mr-8 shrink-0"></div>
            <p className="text-[#64748b] text-[16px] leading-relaxed max-w-lg">
              paradigms. Monotonectally extend open-source mvia competitive methods of empowerment dri revolutionize stand- business.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col group h-full">
              {/* Top Section */}
              <div className="bg-[#fff9f8] p-2 rounded-[16px] rounded-tr-[50px] mb-2">
                 <div className="border border-dashed border-gray-400/70 rounded-[12px] rounded-tr-[42px] py-8 px-6 text-center transition-colors group-hover:border-primary/60">
                    <h3 className="text-primary text-[42px] font-extrabold leading-none mb-3">{plan.price}</h3>
                    <p className="text-[#0b132a] font-bold text-[18px]">{plan.name}</p>
                 </div>
              </div>
              
              {/* Bottom Section */}
              <div className="bg-[#f8f9fa] p-8 lg:p-10 rounded-[20px] relative overflow-hidden flex flex-col items-center flex-grow">
                 {/* Circuit watermark */}
                 <div 
                   className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{ backgroundImage: `url('/circuit-board-light.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                 ></div>
                 
                 <ul className="space-y-5 mb-10 w-full relative z-10 flex-grow">
                   {plan.features.map((feature, fIndex) => (
                     <li key={fIndex} className="flex items-center gap-3 text-[#64748b] text-[15px] font-medium">
                       <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-primary flex items-center justify-center text-primary shrink-0">
                         <Check size={10} strokeWidth={4} />
                       </div>
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
                 
                 <div className="mt-auto w-full relative z-10">
                   <button className="w-full bg-[#fff0eb] text-primary font-bold text-[13px] py-4 rounded-full transition-colors duration-300 hover:bg-primary hover:text-white tracking-wider uppercase">
                     CHOOSE PLAN
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
