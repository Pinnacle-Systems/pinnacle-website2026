import React from 'react';
import Image from 'next/image';
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: 'Vairamuthu Vairam',
    role: 'DEVELOPER',
    image: '/per1.png',
    text: 'Good experience with Technical Persons.Customized ERP for Garment Industry. Latest Cloud Technology.'
  },
  {
    name: 'Vivek Bharath',
    role: 'DEVELOPER',
    image: '/per2.png',
    text: 'Very Customized ERP Solutions... On-Time Delivery... Very Good Customer Support and Service... Customer Satisfactions is their Satisfaction...'
  },
  {
    name: 'Shwetha',
    role: 'DEVELOPER',
    image: '/per3.png',
    text: 'Great and quick response to the Clients.Looking frwd to have more projects with this team.All the best Pinnacle team👍 '
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#0b132a] overflow-hidden">
       {/* Background Map Graphic Placeholder */}
       <div 
         className="absolute inset-0 opacity-[0.05] pointer-events-none bg-center bg-no-repeat bg-contain" 
         style={{ backgroundImage: `url('/globe.svg')`, backgroundSize: '80%' }}
       ></div>
       
       {/* Decorative Orbit Shape */}
       <div className="absolute right-[5%] top-1/3 w-12 h-12 rounded-full border border-primary/40 hidden xl:block">
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-primary rounded-full -translate-y-1/2"></div>
       </div>
       
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Header */}
         <div className="flex flex-col items-center text-center mb-16">
             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 mb-6 bg-white/5 shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Google My Business Reviews</span>
            </div>
            <h2 className={cn(theme.h2, "text-white")}>
              What Our <span className="text-primary"> Clients Say</span>
            </h2>
         </div>
         
         {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-8">
            {testimonials.map((t, index) => (
              <div key={index} className="relative bg-[#151c33] rounded-[24px] px-8 pt-12 pb-14 flex flex-col items-center text-center shadow-2xl">
                 {/* Quote SVG */}
                 <div className="mb-8 text-primary">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 11h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2z"></path>
                      <path d="M10 11v4a4 4 0 0 1 -4 4h-1"></path>
                      <path d="M20 11h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2z"></path>
                      <path d="M20 11v4a4 4 0 0 1 -4 4h-1"></path>
                    </svg>
                 </div>
                 
                 <p className={theme.p}>
                   {t.text}
                 </p>
                 
                 <div className="flex gap-1 mb-8">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-[18px] h-[18px] fill-[#eab308] text-[#eab308]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                     </svg>
                   ))}
                 </div>
                 
                 <div className="flex items-center justify-center gap-2 mb-2 w-full">
                    <h4 className="text-white font-bold text-[16px]">{t.name}</h4>
                    {/* <span className="text-primary text-[12px] uppercase font-extrabold tracking-wider">{t.role}</span> */}
                 </div>
                 
                 {/* Bottom orange line gradient */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"></div>
                 
                 {/* Avatar */}
                 {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[68px] h-[68px] rounded-full border-4 border-[#0b132a] bg-[#1a233a] flex items-center justify-center overflow-hidden z-20">
                    <Image 
                      src={t.image} 
                      alt={t.name} 
                      fill 
                      className="object-cover"
                    />
                    <span className="text-gray-500 text-xs">img</span>
                 </div> */}
              </div>
            ))}
         </div>
       </div>
    </section>
  );
}
