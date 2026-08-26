import React from 'react';
import Image from 'next/image';
import { Headset, Phone, Send, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 pb-4">
       <div className="bg-[#0b132a] rounded-[40px] overflow-hidden relative">
          
          {/* Top Orange Banner */}
          <div className="bg-primary px-8 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex items-center gap-5">
                <div className="w-[60px] h-[40px] rounded-full border-[1.5px] border-dashed border-white/50 flex items-center justify-center shrink-0">
                   <Headset className="text-white" size={26} strokeWidth={1.5} />
                </div>
                <h2 className="text-white text-2xl md:text-[28px] font-extrabold leading-tight">
                   Elevating Customer Experience.
                </h2>
             </div>
             
             <div className="flex items-center gap-5">
                <div className="w-[60px] h-[60px] rounded-full border-[1.5px] border-dashed border-white/50 flex items-center justify-center shrink-0 hidden sm:flex">
                   <Phone className="text-white" size={24} strokeWidth={1.5} />
                </div>
                <div className="bg-[#0b132a] text-white px-8 py-4 rounded-full font-bold text-[15px] tracking-wide whitespace-nowrap shadow-md">
                   + 91 9994610733
                </div>
             </div>
          </div>
          
          {/* Main Footer Content */}
          <div className="px-8 lg:px-16 pt-24 pb-16 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                
                {/* Column 1 (About) */}
                <div className="lg:col-span-4 lg:pr-8">
                   {/* Logo */}
                   <div className="relative h-14 w-56 mb-8">
                     <Image 
                     src="/pinaclefinallogo.png" 
                       alt="Pinnacle Systems Logo" 
                       fill 
                       className="object-contain object-left" 
                     />
                   </div>
                   
                   <div className="flex flex-col gap-4 mb-10 max-w-sm">
                     {/* Email 1 */}
                     <div className="flex items-center gap-3">
                       <Mail className="text-primary shrink-0" size={18} />
                       <a href="mailto:manoj@pinnaclesystems.co.in" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px]">manoj@pinnaclesystems.co.in</a>
                     </div>
                     
                     {/* Email 2 */}
                     <div className="flex items-center gap-3">
                       <Mail className="text-primary shrink-0" size={18} />
                       <a href="mailto:info@pinnaclesystems.co.in" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px]">info@pinnaclesystems.co.in</a>
                     </div>
                     
                     {/* Address */}
                     <div className="flex items-start gap-3">
                       <MapPin className="text-primary shrink-0 mt-1" size={18} />
                       <p className="text-[#8c98a4] text-[15px] leading-[1.8]">
                         65/108 - First Floor, MurungaPalayam First Street,Tirupur - 641603
                       </p>
                     </div>
                     
                     {/* Phones */}
                     <div className="flex items-center gap-3">
                       <Phone className="text-primary shrink-0" size={18} />
                       <div className="flex items-center gap-2">
                         <a href="tel:+919994610733" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px]">+91 9994610733</a>
                         <span className="text-[#8c98a4]">,</span>
                         <a href="tel:+919042762263" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px]">+91 9042762263</a>
                       </div>
                     </div>
                   </div>
                   
                   {/* Social Links */}
                   <div className="flex items-center gap-5">
                      <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </Link>
                      {/* <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                      </Link> */}
                      <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </Link>
                      <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">
                         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </Link>
                   </div>
                </div>
                
                {/* Column 2 (Useful Links) */}
                <div className="lg:col-span-2">
                   <h4 className="text-white text-[20px] font-bold mb-8">Useful Links</h4>
                   <ul className="space-y-4">
                      {['About Company', 'Meet Our Team', 'Latest Blog', 'Contact Us', 'Testimonials'].map(link => (
                         <li key={link}>
                            <Link href="/under-construction" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px] block">
                               {link}
                            </Link>
                         </li>
                      ))}
                   </ul>
                </div>
                
                {/* Column 3 (Services) */}
                <div className="lg:col-span-2">
                   <h4 className="text-white text-[20px] font-bold mb-8">Services.</h4>
                   <ul className="space-y-4">
                      {['About Company', 'Meet Our Team', 'Latest Blog', 'Contact Us', 'FAQ'].map(link => (
                         <li key={link}>
                            <Link href="/under-construction" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px] block">
                               {link}
                            </Link>
                         </li>
                      ))}
                   </ul>
                </div>
                
                {/* Column 4 (Newsletter) */}
                <div className="lg:col-span-4">
                   <h4 className="text-white text-[20px] font-bold mb-8">Newsletter</h4>
                   <p className="text-[#8c98a4] text-[15px] leading-[1.8] mb-8">
                      Globally monetize plug-and-play data it solu monotonectally disseminate oriented busine multifunctional mind design.
                   </p>
                   
                   <div className="relative mt-2">
                      <input 
                        type="email" 
                        placeholder="Enter Your E-mail" 
                        className="w-full bg-[#151c35] border border-transparent focus:border-primary focus:bg-[#1a2342] text-white px-6 py-4 rounded-[12px] focus:outline-none transition-colors placeholder:text-gray-500 text-[15px]"
                      />
                      <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-orange-600 text-white p-4 rounded-[8px] transition-colors flex items-center justify-center">
                         <Send size={18} />
                      </button>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Copyright Bar */}
          <div className="border-t border-[#1e253c] mx-8 lg:mx-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
             <p className="text-[#8c98a4] text-[14px]">
                © Copyright 2026 By Pinnacle Systems
             </p>
             <div className="flex gap-8 text-[14px]">
                <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/under-construction" className="text-[#8c98a4] hover:text-white transition-colors">Supports</Link>
             </div>
          </div>
          
       </div>
    </footer>
  );
}
