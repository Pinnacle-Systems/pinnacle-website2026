"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Share2,
  Megaphone,
  FileText,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Improve your visibility in organic search and help potential customers discover your business when they are looking for relevant products or services.",
    image: "/images/digital-marketing-service-in-tirupru/seonew.jpg",
    linkText: "Explore SEO Services",
    href: "/contact",
  },
  {
    icon: Target,
    title: "Google Ads & PPC",
    desc: "Target your audience via paid search campaigns while they are actively looking for the product or service you provide.",
    image: "/images/digital-marketing-service-in-tirupru/googleads.webp",
    linkText: "Explore Google Ads & PPC",
    href: "/contact",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a consistent presence across relevant social platforms with content and communication designed around your audience and brand.",
    image: "/images/digital-marketing-service-in-tirupru/Social media marketing.webp",
    linkText: "Explore Social Media Marketing",
    href: "/contact",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Reach potential customers on Facebook and Instagram with campaigns built around awareness, enquiries, conversions, or sales.",
    image: "/images/digital-marketing-service-in-tirupru/META ADS.webp",
    linkText: "Explore Meta Ads",
    href: "/contact",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Create useful content that answers customer questions, supports search visibility, communicates expertise, and helps move prospects toward a decision.",
    image: "/images/digital-marketing-service-in-tirupru/Content Marketing.webp",
    linkText: "Explore Content Marketing",
    href: "/contact",
  },
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    desc: "Capture local commercial inquiries in Tiruppur and surrounding industrial zones. Optimize your Google Maps presence to attract local clients and direct phone calls.",
    image: "/images/digital-marketing-service-in-tirupru/localseoandgmb.webp",
    linkText: "Explore Local SEO",
    href: "/contact",
  },
];
export default function DigitalMarketingServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(theme.h2, "text-navy-900 mb-4 max-w-4xl mx-auto")}
          >
            Digital Marketing Services That Move Your Business Forward
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={cn(theme.p, "text-black text-center max-w-3xl mx-auto")}
          >
            At Pinnacle Systems, we select and coordinate the services that make sense for your business, audience, and objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1536px] mx-auto">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-5 sm:p-7 rounded-[20px] sm:rounded-3xl hover:border-primary/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Service Image Banner */}
                  <div className="relative w-full h-40 sm:h-48 rounded-[14px] sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 bg-gray-200 border border-gray-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="content-fit group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className={cn(theme.p, "text-black text-[14px] leading-relaxed tracking-normal !indent-0 !mb-0")}>
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-gray-200">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-bold text-[14px] sm:text-[15px] text-primary hover:text-orange-600 transition-colors group/link"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
