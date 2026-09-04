// src/theme.js
// Centralized theme configuration for HTML tags and reusable UI classes.
// Import and apply these classes across your application for consistent global design.

export const theme = {
  // Main Heading (H1) Styling
  h1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0b132a] tracking-tight  text-white leading-[1.15]  mb-6 relative",

  // Reserved slots for future tag and element styling
  h2: "text-3xl sm:text-3xl lg:text-4xl font-bold text-[#0b132a] tracking-tight leading-tight",
  h3: "text-xl sm:text-2xl font-bold text-[#0b132a]",
  p: "text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl font-normal text-justify indent-6 sm:indent-8",

  // Buttons & Controls
  buttonPrimary:
    "bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,90,0,0.4)]",
  buttonSecondary:
    "bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold border border-white/20 transition-all",

  // Cards & Containers
  card: "bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#ffdbcd] transition-all duration-300",
  badge:
    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffefe8] border border-[#ffdbcd] text-primary text-xs sm:text-sm font-semibold tracking-wide uppercase",
};

export default theme;
