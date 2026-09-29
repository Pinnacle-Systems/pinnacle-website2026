import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Metadata from "./components/DigitalMarketingContent";

export const metadata = {
  title: "Digital Marketing Agency in Tirupur | Pinnacle Systems",
  description: "Looking for digital marketing services in Tirupur? Pinnacle Systems helps businesses grow with SEO, social media and PPC. Get a free consultation today!",
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
