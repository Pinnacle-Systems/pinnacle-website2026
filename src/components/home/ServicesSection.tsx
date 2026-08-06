"use client";

import { motion } from "framer-motion";
import { MonitorDot, MonitorCog, Rocket, Cpu, CheckCircle2, ArrowRight, Network } from "lucide-react";

const servicesData = [
  {
    title: "Customized ERP Software Solutions",
    description: "Every business operates differently, and your software should be too. Pinnacle Systems designs and develops custom ERP software specifically tailored to your unique processes, the needs of your industry and growth targets. From finance and inventory through HR and procurement and production management, our ERP solutions integrate all departments into one unifying platform.",
    highlightsTitle: "Highlights of the most important elements:",
    highlights: [
      "Fully customizable modules based on your business processes",
      "Seamless data flow across departments",
      "Scalable architecture that grows to meet the needs of your business",
      "Cloud-based and on-premise deployment solutions",
      "Analytics dashboards and reports are available in real-time"
    ],
    cta: "Request an ERP Consultation",
    icon: MonitorCog
  },
  {
    title: "Mobile App Development Services",
    description: "Reach your customers wherever they are. We design and build high-performing, user-friendly mobile applications for iOS and Android that combine clean design with robust functionality. Whether you need a customer-facing app, an internal business tool, or a full-scale marketplace platform, our team delivers apps built for performance, security, and long-term scalability.",
    highlightsTitle: "Key highlights:",
    highlights: [
      "Native & cross-platform app development",
      "Intuitive UI/UX design",
      "API Integrations and APIs for integrations with partners from third parties",
      "Support and maintenance after launch",
      "Secure, scalable app architecture"
    ],
    cta: "To Start Your App",
    icon: Cpu
  },
  {
    title: "Website & Web Application Development",
    description: "Your website is usually the first impression that customers get of your business. Make it memorable. Pinnacle Systems builds fast, reliable, secure websites and web-based applications, from corporate websites, e-commerce platforms, and more to custom-designed portals for websites, along with SaaS products.",
    highlightsTitle: "The key points:",
    highlights: [
      "Responsive, mobile-first design",
      "Custom web application development",
      "CMS-based and eCommerce-based websites",
      "SEO-friendly design from the beginning",
      "Support for the website and ongoing maintenance"
    ],
    cta: "Get a Website Quote",
    icon: MonitorDot
  },
  {
    title: "Data-Driven Digital Marketing & SEO Services",
    description: "The latest technology is worthy of attention. The digital marketing department at our company can help companies establish their online presence and deliver real results with SEO, paid ads, as well as social media and content marketing strategies that are specifically tailored to your needs and the audience you want to reach.",
    highlightsTitle: "The key points:",
    highlights: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) marketing campaigns",
      "Social media management and marketing",
      "Content marketing & strategy",
      "Analytics, tracking and reporting on performance"
    ],
    cta: "Grow Your Online Presence",
    icon: Rocket
  },
  {
    title: "Seamless System Integration Services",
    description: "Disconnected systems slow your business down. Pinnacle Systems specializes in integrating your existing software, platforms, and third-party tools into one connected ecosystem — improving data accuracy, eliminating manual work, and boosting overall efficiency.",
    highlightsTitle: "Key highlights:",
    highlights: [
      "ERP CRM, ERP, and other third-party API integrations",
      "Logistics integrations and payment gateways",
      "Cloud and on-premise systems integration",
      "Custom middleware development",
      "Data movement and data synchronization"
    ],
    cta: "Talk to an Integration Expert",
    icon: Network
  }
];

const BackgroundDecorations = () => (
  <>
    {/* Left Top Curved Line */}
    <svg className="absolute top-0 left-0 w-64 h-64 text-primary/20 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,0 C 50,100 150,100 200,200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
    
    {/* Right Bottom Shape */}
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white rounded-bl-[100px] opacity-40 pointer-events-none transform translate-x-32 -translate-y-32"></div>
  </>
);

export default function ServicesSection() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#f8f9fa] overflow-hidden">
      <BackgroundDecorations />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center w-full mx-auto mb-16 overflow-visible">
          <h2 className="text-3xl lg:text-[32px] leading-[1.2] font-extrabold text-[#0b132a] whitespace-nowrap">
            Enterprise-Grade Software & <span className="text-primary">Digital Marketing Solutions</span>
          </h2>
          <p className="text-gray-500 text-[17px] leading-relaxed text-center max-w-3xl mx-auto mt-4">
            We provide a full range of marketing and technology solutions designed to assist your business in being efficient, reaching the right people, and growing without fear.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            // Center the 5th item
            const isLast = index === 4;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-primary/20 hover:shadow-[0_8px_30px_rgba(255,90,0,0.08)] transition-all duration-300 flex flex-col ${
                  isLast ? "md:col-span-2 lg:max-w-4xl mx-auto" : ""
                }`}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary stroke-[1.5]" />
                  </div>
                  <h3 className="text-[22px] lg:text-[24px] font-extrabold text-[#0b132a] leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 text-[16.5px] leading-relaxed mb-8 text-justify">
                  {service.description}
                </p>

                <div className="mb-10 flex-grow">
                  <h4 className="text-[17px] font-bold text-[#0b132a] mb-4">
                    {service.highlightsTitle}
                  </h4>
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-[16px] leading-snug">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-primary font-bold text-[15px] hover:text-orange-600 transition-colors group">
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
