"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { FaReact, FaAngular, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaServer } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiNextdotjs, SiPhp } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const technologies = [
  { name: "React", Icon: FaReact, brand: "text-[#61DAFB]" },
  { name: "Next.js", Icon: SiNextdotjs, brand: "text-[#000000]" },
  { name: "Angular", Icon: FaAngular, brand: "text-[#DD0031]" },
  { name: "Node.js", Icon: FaNodeJs, brand: "text-[#339933]" },
  { name: "JavaScript", Icon: SiJavascript, brand: "text-[#F7DF1E]" },
  { name: "Python", Icon: FaPython, brand: "text-[#3776AB]" },
  { name: "PHP", Icon: SiPhp, brand: "text-[#777BB4]" },
  { name: "SQL", Icon: FaDatabase, brand: "text-[#003B57]" },
  { name: "PostgreSQL", Icon: SiPostgresql, brand: "text-[#4169E1]" },
  { name: "Oracle", Icon: GrOracle, brand: "text-[#F80000]" },
  { name: "Git", Icon: FaGitAlt, brand: "text-[#F05032]" },
  { name: "VPS", Icon: FaServer, brand: "text-[#8A2BE2]" },
];

export default function TechnologiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastAngleRef = useRef<number | null>(null);
  const rotationRef = useRef(0);

  // Sync state to ref for requestAnimationFrame
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  // Auto-rotation loop
  useEffect(() => {
    if (isDragging) return;
    let animationFrame: number;
    const animate = () => {
      rotationRef.current = (rotationRef.current + 0.15) % 360;
      setRotation(rotationRef.current);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const getAngle = (clientX: number, clientY: number) => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(clientY - centerY, clientX - centerX) * (180 / Math.PI);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastAngleRef.current = getAngle(e.clientX, e.clientY);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || lastAngleRef.current === null) return;
    const currentAngle = getAngle(e.clientX, e.clientY);
    let delta = currentAngle - lastAngleRef.current;

    // Handle wrap-around when crossing the -180/180 boundary
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    setRotation(prev => prev + delta);
    lastAngleRef.current = currentAngle;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    lastAngleRef.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) { }
  };

  return (
    <section className="py-4  bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column (Text) */}
          <div>
            <h2 className={cn(theme.h2, "mb-4 sm:mb-6")}>
              Technologies We <span className="text-primary">Work With</span>
            </h2>
            <div className="w-20 sm:w-24 h-1.5 bg-primary rounded-full mb-6 sm:mb-8"></div>
            <p className={theme.p}>
              We Engineer High-performance Software and Enterprise Web Platforms by leveraging a Modern, highly Scalable Technology Stack. Instead of relying on rigid Templates, we select the precise Frameworks and Architectures required to build Secure, Lightning-fast Digital Solutions tailored to your exact Technical requirements.
              Our Development team utilizes advanced Front-end and Back-end Environments to deploy resilient Applications optimized for Modern Web Standards. By Adhering to strict Coding Practices and robust Data Integration, we build Digital Infrastructure that is Responsive, Secure, and designed for Long-term Scalability.
            </p>
          </div>

          {/* Right Column (Orbiting Globe) */}
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center mt-6 lg:mt-0" style={{ perspective: '1000px' }}>
            {/* Center 3D Globe - Not rotated so it stays spherical */}
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-20 pointer-events-none">
              {/* Spherical Base */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#ff8a4c,_#e65100,_#bf360c)] shadow-[inset_-15px_-15px_25px_rgba(0,0,0,0.4),inset_10px_10px_20px_rgba(255,255,255,0.6),0_15px_40px_rgba(255,90,0,0.4)] overflow-hidden flex items-center justify-center">
                {/* 3D Map Lines (using spinning Globe icon scaled up) */}
                <Globe className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white/40 animate-[spin_15s_linear_infinite]" strokeWidth={1} />
              </div>

              {/* Specular Highlight / Reflection for Glassy 3D Look */}
              <div className="absolute top-[8%] left-[15%] w-[45%] h-[20%] bg-gradient-to-b from-white/70 to-transparent rounded-[100%] rotate-[-25deg] blur-[1px] pointer-events-none z-10"></div>

              {/* Bottom ambient shadow inside the sphere */}
              <div className="absolute bottom-[2%] left-[15%] w-[70%] h-[20%] bg-black/20 rounded-[100%] blur-[4px] pointer-events-none z-10"></div>
            </div>

            {/* 3D Orbital Plane Wrapper */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ transform: 'rotateZ(30deg) rotateX(65deg)', transformStyle: 'preserve-3d' }}
            >
              {/* Subtle orbital rings */}
              <div className="absolute inset-4 sm:inset-0 lg:-inset-4 rounded-full border-[1.5px] border-gray-400/90 pointer-events-none z-0" style={{ transformStyle: 'preserve-3d' }}></div>
              <div className="absolute inset-12 sm:inset-10 lg:inset-8 rounded-full border border-gray-400/60 pointer-events-none z-0" style={{ transformStyle: 'preserve-3d' }}></div>
              <div className="absolute inset-20 sm:inset-20 lg:inset-20 rounded-full border border-gray-400/40 pointer-events-none z-0" style={{ transformStyle: 'preserve-3d' }}></div>

              {/* Orbiting Track (Outer container spinning) */}
              <div
                ref={containerRef}
                className="absolute inset-4 sm:inset-0 lg:-inset-4 z-30 cursor-grab active:cursor-grabbing touch-none pointer-events-auto"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ transform: `rotateZ(${rotation}deg)`, transformStyle: 'preserve-3d' }}
              >
                {technologies.map((tech, index) => {
                  const angle = (index * 360) / technologies.length;
                  return (
                    <div
                      key={tech.name}
                      className="absolute inset-0 flex justify-center pointer-events-none"
                      style={{ transform: `rotateZ(${angle}deg)`, transformStyle: 'preserve-3d' }}
                    >
                      {/* Element at radius */}
                      <div
                        className="absolute top-0 -mt-6 sm:-mt-8 w-12 h-12 sm:w-16 sm:h-16 pointer-events-auto"
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        {/* Dynamic counter-rotation to stay perfectly upright against all 3 parent rotations */}
                        <div
                          className="w-full h-full"
                          style={{ transform: `rotateZ(-${angle + rotation}deg) rotateX(-65deg) rotateZ(-30deg)`, transformStyle: 'preserve-3d' }}
                        >
                          <div className="w-full h-full bg-white rounded-full shadow-xl border border-gray-200 flex items-center justify-center group hover:scale-110 hover:border-primary/50 transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                            <tech.Icon className={`w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm ${tech.brand}`} />
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
      </div>
    </section>
  );
}
