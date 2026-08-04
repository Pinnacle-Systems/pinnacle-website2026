"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        "absolute top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "fixed py-4 bg-navy-900/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10" : "py-5 bg-transparent border-b border-white/5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group block">
          <div className="relative h-12 w-48 lg:w-56 group-hover:scale-105 transition-transform">
            <Image 
              src="/pinnacleblacklogo.png" 
              alt="Pinnacle Systems Logo" 
              fill 
              className="object-contain object-left" 
            />
          </div>
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
