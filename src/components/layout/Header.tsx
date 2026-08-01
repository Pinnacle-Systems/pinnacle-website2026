"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: true },
  { name: "Company", href: "/company", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio", hasDropdown: false },
  { name: "Service", href: "/service", hasDropdown: true },
  { name: "Blog", href: "/blog", hasDropdown: true },
  { name: "Contact", href: "/contact", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "absolute top-0 left-0 right-0 z-50 transition-all duration-300 py-5",
        isScrolled ? "fixed top-4 left-4 right-4 max-w-[1600px] mx-auto bg-navy-900/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-white/10 rounded-2xl" : "bg-transparent border-b border-white/5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative group">
          <div className="text-primary group-hover:scale-105 transition-transform">
            {/* Logo icon matching the design (cluster of dots) */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="1 3" />
              <path d="M12 2V4M12 20V22M2 12H4M20 12H22M5.92893 5.92893L7.34315 7.34315M16.6569 16.6569L18.0711 18.0711M5.92893 18.0711L7.34315 16.6569M16.6569 7.34315L18.0711 5.92893" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
              <circle cx="8" cy="8" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span className="text-[26px] font-bold text-white tracking-tight">SoluTek</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 group"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/quote"
            className="text-primary hover:text-white font-bold text-[14px] tracking-wide flex items-center gap-2 transition-colors group uppercase"
          >
            GET A QUOTE NOW
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </header>
  );
}
