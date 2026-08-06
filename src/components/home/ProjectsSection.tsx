"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

const projects = [
  { title: "CMC Softwar Solution", tag: "SOFTWARE", image: "/exploreomg1.png" },
  { title: "Software Development", tag: "SOFTWARE", image: "/exploreimg2.png" },
  { title: "App Development", tag: "SOFTWARE", image: "/exploreimg3.png" },
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    setDragStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStartX === null) return;
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
    const diff = dragStartX - clientX;
    
    if (diff > 50) {
      setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1));
    } else if (diff < -50) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
    
    setDragStartX(null);
  };

  return (
    <section className="relative py-12 lg:py-20 bg-white">
      {/* Header Container */}
      <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-red-100/60 mb-6 bg-white shadow-sm">
            <div className="w-4 h-[3px] bg-primary rounded-full"></div>
            <span className="text-primary font-bold text-[13px] tracking-[0.15em] uppercase">Pinnacle Systems PROJECT</span>
          </div>
          <h2 className="text-3xl lg:text-[42px] leading-[1.2] font-extrabold text-[#0b132a]">
            Explore Our Recent <span className="text-primary">Projects.</span>
          </h2>
        </div>
        <button className="bg-primary hover:bg-orange-600 text-white font-bold text-[13px] tracking-wider px-8 py-4 rounded-full transition-colors duration-300 shadow-md shadow-primary/20 uppercase whitespace-nowrap shrink-0">
          VIEW PROJECT DETAIL
        </button>
      </div>

      {/* Cards Area */}
      <div className="relative">
        {/* Dark Blue Background for bottom half (Full Bleed) */}
        <div className="absolute top-[40%] bottom-0 bg-[#0b132a] z-0 w-[100vw] left-1/2 -translate-x-1/2"></div>

        {/* Cards Carousel */}
        <div className="relative z-10 max-w-[1250px] mx-auto px-6">
          {/* Inner wrapper for strict horizontal clipping without clipping vertical shadows */}
          <div className="overflow-hidden w-full py-8 -my-8">
            <div 
              className="flex gap-6 lg:gap-8 cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-64px)/3)] shrink-0 bg-[#0f172a] rounded-[24px] overflow-hidden flex flex-col group transition-all duration-500 ease-in-out shadow-lg shadow-black/20"
                  style={{ transform: `translateX(calc(${currentIndex * -100}% - ${currentIndex * 24}px))` }}
                >
                  <div className="relative aspect-square w-full overflow-hidden pointer-events-none">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      draggable={false}
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  <div className="py-6 px-4 flex items-center justify-center text-center min-h-[85px] pointer-events-none">
                    <h3 className="text-white font-bold text-[18px] lg:text-[19px] group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 pb-12 lg:hidden">
            {projects.map((_, dotIndex) => (
              <button 
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className="w-[12px] h-[12px] rounded-full border border-primary flex items-center justify-center transition-colors hover:bg-primary/10"
              >
                {currentIndex === dotIndex && <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>}
              </button>
            ))}
          </div>
          {/* Desktop Spacer (since dots are hidden on large screens) */}
          <div className="hidden lg:block pb-12"></div>
        </div>
      </div>

      {/* Orange Logo Bar */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full bg-primary rounded-b-[30px] lg:rounded-b-[40px] py-8 lg:py-10 px-6 lg:px-12 flex flex-wrap md:flex-nowrap items-center justify-center gap-12 lg:gap-24 shadow-xl shadow-primary/10">
          
          <div className="flex items-center gap-3 text-white opacity-90 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 flex items-center justify-center font-bold text-2xl -mt-1">❦</div>
            <span className="text-xl lg:text-2xl font-bold tracking-wider uppercase">GRAMEEN</span>
          </div>
          
          <div className="flex items-center gap-3 text-white opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-xl lg:text-2xl font-bold tracking-wider">Walmart</span>
            <div className="w-5 h-5 flex items-center justify-center font-bold text-xl -mt-1">✻</div>
          </div>
          
          <div className="flex items-center gap-3 text-white opacity-90 hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 rounded-full border-[2.5px] border-white flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-wider uppercase">DELUXON</span>
          </div>
          
          <div className="flex items-center gap-3 text-white opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-1.5 -rotate-45">
               <div className="w-5 h-[3px] bg-white rounded-full"></div>
               <div className="w-5 h-[3px] bg-white rounded-full ml-2"></div>
            </div>
            <span className="text-xl lg:text-2xl font-bold tracking-wider uppercase">AROUNDS</span>
          </div>
        </div>
      </div>
      
      {/* Hide scrollbar styles injected safely */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      ` }} />
    </section>
  );
}
