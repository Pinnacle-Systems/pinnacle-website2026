"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about-us", hasDropdown: false },
  { 
    name: "Services", 
    href: "#", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Custom Erp Software", href: "/custom-erp-software" }
    ]
  },
  { name: "Contact Us", href: "/under-construction", hasDropdown: false },
  { name: "Blog", href: "/under-construction", hasDropdown: false },
  { name: "FAQ", href: "/under-construction", hasDropdown: false },
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
              src="/pinaclefinallogo.png"
              alt="Pinnacle Systems Logo"
              fill
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                onClick={(e) => link.hasDropdown && e.preventDefault()}
                className="text-[15px] font-semibold text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 py-2 group-hover:text-white"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                )}
              </Link>
              
              {link.hasDropdown && link.dropdownItems && (
                <div className="absolute top-full -left-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[220px] bg-white border border-gray-100 rounded-xl shadow-xl translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/under-construction"
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
