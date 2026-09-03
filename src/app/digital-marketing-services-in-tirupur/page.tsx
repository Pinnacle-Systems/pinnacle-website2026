import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Metadata from "./components/DigitalMarketingContent";

export const metadata = {
  title: "Digital Marketing Services in Tirupur | SEO, PPC & Social Media - Pinnacle",
  description:
    "Transform your business with premier Digital Marketing Services in Tirupur. Pinnacle Systems delivers AI-driven SEO, Google Ads, Meta Ads, Social Media, and Lead Generation for Textile, Manufacturing, and B2B Brands.",
  keywords: [
    "Digital Marketing Services in Tirupur",
    "SEO Agency in Tirupur",
    "Social Media Marketing Tirupur",
    "Google Ads Company Tirupur",
    "B2B Digital Marketing Tirupur",
    "Textile Industry Marketing",
  ],
};

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Metadata />
      <Footer />
    </main>
  );
}
