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

const services = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Improve your visibility in organic search and help potential customers discover your business when they are looking for relevant products or services.",
    image: "/images/digital-marketing-service-in-tirupru/seo.webp",
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
    image: "/images/digital-marketing-service-in-tirupru/socilamediamarketing.webp",
    linkText: "Explore Social Media Marketing",
    href: "/contact",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Reach potential customers on Facebook and Instagram with campaigns built around awareness, enquiries, conversions, or sales.",
    image: "/images/digital-marketing-service-in-tirupru/metaads.webp",
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
    <section className="py-10 sm:py-14 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className={`${theme.h2} mb-6`}>
            Digital Marketing Services That Move Your Business Forward
          </h2>
          <p className={`${theme.p} font-medium`}>
            At Pinnacle Systems, we select and coordinate the services that make sense for your business, audience, and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* Service Image Banner */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary border border-orange-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b132a] group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-orange-600 transition-colors"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
