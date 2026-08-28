import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Settings, Users, Server, CheckCircle2, Lightbulb, LineChart, Sliders, Layers, Rocket, Headset } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Dark Hero Section Container */}
      <div className="bg-[#0b132a] relative  overflow-hidden pb-24">
        <Header />
       </div>
        <div>
        <div className=" md:pt-[50px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white">
                   <h1 className="text-3xl lg:text-4xl font-bold text-black leading-[1.1] mb-6 relative">
              About <span className="text-primary">Pinnacle Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8c98a4] font-medium leading-relaxed whitespace-nowrap pb-10">
              Custom ERP Software for  Textile & Manufacturing
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 md:py-16 bg-[#11192F] rounded-[40px] mx-4 md:mx-8 lg:mx-20 mt-10 shadow-2xl">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl ">
           
            <div className="w-full md:w-[55%] text-center md:text-left">
              {/* Subtitle Pill style from home */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
                <div className="w-4 h-[3px] bg-primary rounded-full"></div>
                <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Our Story</span>
              </div>
              
              <h2 className="text-3xl lg:text-[32px] xl:text-4xl leading-[1.2] font-extrabold text-white mb-8">
                <span className="xl:whitespace-nowrap">ERP should adapt to your business,</span> <span className="text-primary block mt-2">not the other way around.</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                  <p className="text-white text-[18px] leading-relaxed text-justify m-0">
                    Established in 2018, Pinnacle Systems was Founded by Mr Manoj Padmanabhan, Founder & CEO, with over 25 years of experience helping fashion companies implement Technology Solutions. A recognised thought Leader in the fashion industry.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-primary shrink-0 ring-4 ring-primary/20"></div>
                  <p className="text-white text-[18px] leading-relaxed text-justify m-0">
                    We deliver tailor-made ERP systems for the manufacturing sector, especially the clothing and textile sector. We strive to ensure that companies are able to operate efficiently, control expenses and inventories and make decisions faster.
                  </p>
                </div>
              </div>
            </div>
            
             <div className="w-full md:w-[45%] flex justify-center items-center md:translate-x-16 lg:translate-x-20">
              <div className="w-full rounded-[24px] overflow-hidden border-4 border-primary/20 shadow-xl shrink-0">
                <Image 
                  src="/images/pages2/Sir.WebP.webp" 
                  alt="Mr Manoj Padmanabhan, Founder & CEO" 
                  width={890}
                  height={1000}
                  className="w-full h-[320px] md:h-[380px] lg:h-[420px] object-cover object-center" 
                />
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
      {/* Features Grid Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-16 mb-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gray-200 mb-6 bg-white shadow-sm">
            <div className="w-4 h-[3px] bg-primary rounded-full"></div>
            <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl  font-extrabold text-[#0b132a]">
            Our Core <span className="text-primary">Values</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            <div className="group relative flex flex-col justify-start px-8 py-10 bg-[#f4f5f7] rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none rounded-[inherit]"></div>
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-[1]"></div>
              
              <div className="relative z-10 w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border-[2px] border-white shadow-[0_0_15px_rgba(255,255,255,0.7)] bg-transparent group-hover:bg-[#0b132a] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300">
                    <Settings className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 leading-tight m-0">
                    Built Around Your Business
                  </h3>
                </div>
                <p className="text-[#64748b] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed text-justify">
                  Our ERP integrates Purchase, Sales, Inventory, Production, Quality, Financing, Costing and dispatch on the single platform. For manufacturers of Textiles and Clothing, we offer to manage the Orders, Raw Materials Planning, Production Tracking, T&A, Subcontracting, Costing and Shipping Management.
                </p>
              </div>
            </div>
            
            <div className="group relative flex flex-col justify-start px-8 py-10 bg-[#f4f5f7] rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none rounded-[inherit]"></div>
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-[1]"></div>
              
              <div className="relative z-10 w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border-[2px] border-white shadow-[0_0_15px_rgba(255,255,255,0.7)] bg-transparent group-hover:bg-[#0b132a] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300">
                    <Users className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 leading-tight m-0">
                    Industry-Focused Expertise
                  </h3>
                </div>
                <p className="text-[#64748b] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed text-justify">
                  Not only does Manufacturing require an array of Technology, but it also involves a detailed Knowledge of the Production Process, Cost Management, Planning, and Logistics. In collaboration with our Clients, we carefully analyze the gap in the process right from order to dispatch and develop Customized Solutions that help reduce manual Efforts.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-start px-8 py-10 bg-[#f4f5f7] rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none rounded-[inherit]"></div>
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-[1]"></div>
              
              <div className="relative z-10 w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border-[2px] border-white shadow-[0_0_15px_rgba(255,255,255,0.7)] bg-transparent group-hover:bg-[#0b132a] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300">
                    <Server className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 leading-tight m-0">
                    One Integrated Platform, End-to-End Support
                  </h3>
                </div>
                <p className="text-[#64748b] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed text-justify">
                  Pinnacle&apos;s ERP connects your Internal Departments into one system with integrations for Accounting, E-Invoice, E-Way Bill, Barcode, Banking, and WhatsApp. Our relationship doesn't end at Go-live — we support Implementation, Training, Enhancements, and Scaling as your Business grows.
                </p>
              </div>
            </div>

            <div className="group relative flex flex-col justify-start px-8 py-10 bg-[#f4f5f7] rounded-[24px] shadow-sm w-full h-full border border-gray-100 hover:border-primary hover:shadow-lg hover:-translate-y-2 transition-all duration-400 overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none rounded-[inherit]"></div>
              <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-no-repeat bg-center opacity-[0.35] group-hover:opacity-20 transition-opacity duration-300 pointer-events-none rounded-[inherit] z-[1]"></div>
              
              <div className="relative z-10 w-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-full border-[2px] border-white shadow-[0_0_15px_rgba(255,255,255,0.7)] bg-transparent group-hover:bg-[#0b132a] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#0b132a] group-hover:text-white transition-colors duration-300 leading-tight m-0">
                    Beyond ERP
                  </h3>
                </div>
                <p className="text-[#64748b] group-hover:text-white transition-colors duration-300 text-[15px] leading-relaxed text-justify">
                  We also help Businesses establish their Online Presence by providing Web Development, Website Development, Mobile App Development and Digital Marketing Services.
                </p>
              </div>
            </div>
          </div>

          {/* Approach Section */}
          <div className="mb-32 text-center mt-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
              <div className="w-4 h-[3px] bg-primary rounded-full"></div>
              <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Our Approach</span>
            </div>
            
            <h2 className="text-3xl lg:text-[32px] leading-[1.15] font-extrabold text-[#0b132a] mb-12">
              How we <span className="text-primary">Deliver Success</span>
            </h2>
            <div className="relative max-w-6xl mx-auto mt-16 px-4">
              {/* Connecting Line for Desktop */}
              <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-gray-200 z-0"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4 relative z-10">
                {[
                  { label: 'Understand', icon: Lightbulb },
                  { label: 'Analyze', icon: LineChart },
                  { label: 'Customize', icon: Sliders },
                  { label: 'Integrate', icon: Layers },
                  { label: 'Implement', icon: Rocket },
                  { label: 'Support', icon: Headset }
                ].map((step) => (
                  <div key={step.label} className="flex flex-col items-center group cursor-pointer relative">
                    <div className="w-14 h-14 rounded-full bg-white border-[3px] border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all duration-400 mb-5 relative z-10">
                      <step.icon className="w-[22px] h-[22px] stroke-[1.5]" />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0b132a] group-hover:text-primary transition-colors duration-300 text-center">
                      {step.label}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Commitment & CTA */}
          <div className="mt-16 lg:mt-24 relative overflow-hidden bg-gradient-to-br from-[#0b132a] to-[#1a233a] rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-10 lg:p-14 text-center border border-white/10">
            <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover opacity-[0.05] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment</h2>
              <p className="text-[17px] text-gray-300 mb-4 italic leading-relaxed">
                &quot;Our goal is simple — make ERP work for your business, not the other way around.&quot;
              </p>
              <p className="text-[17px] text-gray-400 mb-10 leading-relaxed">
                Pinnacle Systems – Custom ERP Solutions for Modern Manufacturing<br/>
                <span className="text-primary font-medium mt-2 block">Built around your processes. Designed for your industry. Ready to grow with your business.</span>
              </p>
              
              <Link href="/under-construction" className="inline-block bg-primary hover:bg-orange-600 text-white font-bold text-[14px] px-9 py-4 rounded-full transition-colors duration-300 tracking-wide shadow-md shadow-primary/20 uppercase">
                Book a Free Demo
              </Link>
            </div>
          </div>
</div>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Footer />
      </div>
    </main>
  );
}
