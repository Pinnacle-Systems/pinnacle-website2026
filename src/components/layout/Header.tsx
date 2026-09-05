"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About Us", href: "/about-us", hasDropdown: false },
  {
    name: "Services",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Custom ERP Software", href: "/custom-erp-software" },
      { name: "Web Application", href: "/services/web-application" },
      { name: "Website Development", href: "/services/website-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Digital Marketing", href: "/digital-marketing-services-in-tirupur" }
    ]
  },
  { name: "Contact Us", href: "/under-construction", hasDropdown: false },
  { name: "Blog", href: "/under-construction", hasDropdown: false },
  { name: "FAQ", href: "/under-construction", hasDropdown: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
        isScrolled ? "fixed py-3 lg:py-4 bg-navy-900/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/10" : "py-4 lg:py-5 bg-transparent border-b border-white/5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative group block">
          <div className="relative h-10 w-40 sm:h-12 sm:w-48 lg:w-56 group-hover:scale-105 transition-transform">
            <Image
              src="/pinaclefinallogo.png"
              alt="Pinnacle Systems Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
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
                <div className="absolute z-50 top-full -left-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[250px] bg-white border border-gray-100 rounded-xl shadow-xl translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-[14px] font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
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

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/under-construction"
            className="text-primary hover:text-white font-bold text-[14px] tracking-wide flex items-center gap-2 transition-colors group uppercase"
          >
            GET A QUOTE NOW
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bg-[#0b132a] border-b border-white/10 shadow-2xl z-50 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="w-full flex items-center justify-between text-[16px] font-medium text-gray-200 py-2 border-b border-white/5"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform", servicesDropdownOpen && "rotate-180")} />
                    </button>
                    {servicesDropdownOpen && link.dropdownItems && (
                      <div className="pl-4 py-2 flex flex-col gap-2 bg-white/5 rounded-lg my-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[14.5px] text-gray-300 hover:text-primary py-1.5 block"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[16px] font-medium text-gray-200 hover:text-primary py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Link
                href="/under-construction"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-primary hover:bg-primary-hover text-white text-center py-3.5 rounded-full font-bold text-[14px] tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                GET A QUOTE NOW
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
