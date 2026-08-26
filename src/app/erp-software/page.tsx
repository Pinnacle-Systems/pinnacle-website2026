import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ErpHero from "./components/ErpHero";
import ErpComparison from "./components/ErpComparison";
import ErpIndustries from "./components/ErpIndustries";
import ErpBenefits from "./components/ErpBenefits";
import ErpFeatures from "./components/ErpFeatures";
import ErpProcess from "./components/ErpProcess";
import ErpFaq from "./components/ErpFaq";

export const metadata = {
  title: "AI-Powered Custom ERP Software | Pinnacle",
  description: "Our AI-powered custom ERP software is built around your business processes, connecting Sales, Inventory, Production, Finance, HR, and Operations on one intelligent platform.",
};

export default function ErpSoftwarePage() {
    return (
        <main className="min-h-screen bg-white pt-4 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1600px] mx-auto bg-white shadow-2xl rounded-t-[40px] overflow-hidden">
                <Header />
                <ErpHero />
                <ErpComparison />
                <ErpIndustries />
                <ErpBenefits />
                <ErpFeatures />
                <ErpProcess />
                <ErpFaq />
                <Footer />
            </div>
        </main>
    );
}
