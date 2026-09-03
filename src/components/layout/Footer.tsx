import React from 'react';
import Image from 'next/image';
import { Headset, Phone, MapPin, Mail, Calendar } from 'lucide-react';
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
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                  {/* Column 1 (About) */}
                  <div className="lg:col-span-4 lg:pr-6">
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
                              <a href="tel:+919042762263" className="text-[#8c98a4] hover:text-primary transition-colors text-[15px]">+91 9043010733</a>
                           </div>
                        </div>
                     </div>

                     {/* Social Links */}
                     <div className="flex items-center gap-5">
                        <Link href="https://www.facebook.com/pinnaclesystemsofficial/" target="_blank" className="text-[#8c98a4] hover:text-white transition-colors">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </Link>
                        <Link href="https://www.youtube.com/@PinnacleSystemsOfficial" target="_blank" className="text-[#8c98a4] hover:text-white transition-colors">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/pinnacle-systems-tirupur/" target="_blank" className="text-[#8c98a4] hover:text-white transition-colors">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </Link>
                        <Link href="https://www.instagram.com/pinnaclesystemsofficial/" target="_blank" className="text-[#8c98a4] hover:text-white transition-colors">
                           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                        </Link>
                     </div>
                  </div>

                  {/* Column 2 (Quick Links - moved left) */}
                  <div className="lg:col-span-2">
                     <h4 className="text-white text-[20px] font-bold mb-8">Quick Links</h4>
                     <ul className="space-y-4">
                        {[
                           { name: 'About Us', href: '/about-us' },
                           { name: 'Meet Our Team', href: '/under-construction' },
                           { name: 'Latest Blog', href: '/under-construction' },
                           { name: 'Contact Us', href: '/under-construction' },
                           { name: 'FAQ', href: '/under-construction' }
                        ].map(link => (
                           <li key={link.name}>
                              <Link href={link.href} className="text-[#8c98a4] hover:text-primary transition-colors text-[15px] block">
                                 {link.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Column 3 (Services - moved left) */}
                  <div className="lg:col-span-3">
                     <h4 className="text-white text-[20px] font-bold mb-8">Services</h4>
                     <ul className="space-y-4">
                        {[
                           { name: 'Custom ERP Software', href: '/under-construction' },
                           { name: 'Web Application', href: '/under-construction' },
                           { name: 'Website Development', href: '/under-construction' },
                           { name: 'Mobile App Development', href: '/under-construction' },
                           { name: 'Digital Marketing', href: '/under-construction' }
                        ].map(service => (
                           <li key={service.name}>
                              <Link href={service.href} className="text-[#8c98a4] hover:text-primary transition-colors text-[15px] block">
                                 {service.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Column 4 (Recent Blogs) */}
                  <div className="lg:col-span-3">
                     <h4 className="text-white text-[20px] font-bold mb-8">Recent Blogs</h4>
                     <div className="flex flex-col gap-5">
                        {[
                           {
                              title: 'Leveraging Descriptive Solutions for Business Growth',
                              date: '20 June 2024',
                              image: '/grid1img.png',
                              href: '/under-construction'
                           },
                           {
                              title: 'How to Create Modern Web Site For Your Business',
                              date: '20 June 2024',
                              image: '/gridimg2.png',
                              href: '/under-construction'
                           }
                        ].map((blog, idx) => (
                           <Link key={idx} href={blog.href} className="flex gap-4 group items-center">
                              <div className="relative w-16 h-16 rounded-[12px] overflow-hidden shrink-0">
                                 <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                 />
                              </div>
                              <div className="flex flex-col gap-1">
                                 <span className="text-[#8c98a4] text-[12px] flex items-center gap-1.5">
                                    <Calendar size={13} className="text-primary" /> {blog.date}
                                 </span>
                                 <h5 className="text-white text-[14px] font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                    {blog.title}
                                 </h5>
                              </div>
                           </Link>
                        ))}
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
