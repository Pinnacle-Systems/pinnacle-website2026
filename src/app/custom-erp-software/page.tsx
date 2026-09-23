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
  description: "Our AI-powered custom ERP software is built around your business processes, connecting Sales, Inventory, Production, Finance, HR and Operations on one intelligent platform.",
};

export default function ErpSoftwarePage() {
    const productSchema = {
        "@context": "https://schema.org/", 
        "@type": "Product", 
        "name": "Custom ERP Software",
        "image": "https://www.pinnaclesystems.co.in/images/erp-software/CUSTOMERP.webp",
        "description": "Our Custom ERP Software is a tailored enterprise resource planning solution designed to automate workflows and centralize business processes. This scalable, cloud-based ERP features real-time analytics, CRM integration, and inventory management to optimize operational efficiency and drive growth.",
        "brand": {
            "@type": "Brand",
            "name": "Pinnacle Systems"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "4",
            "ratingCount": "26"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "What is the investment required for a Custom ERP System?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost depends on your business requirements, modules, integrations, users and level of customization."
            }
        },{
            "@type": "Question",
            "name": "How do you develop an ERP system tailored to my business needs?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We develop the ERP around your specific workflows, requirements, modules and business processes, ensuring a solution that fits your operations."
            }
        },{
            "@type": "Question",
            "name": "Is Custom ERP scalable?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The system can grow with your business by adding users, modules, branches and new features"
            }
        },{
            "@type": "Question",
            "name": "Will the ERP system belong to my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The ERP system is built for your business, giving you full ownership and control based on the agreed terms"
            }
        }]
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Header />
            <ErpHero />
            <ErpComparison />
            <ErpIndustries />
            <ErpBenefits />
            <ErpFeatures />
            <ErpProcess />
            <ErpFaq />
            <Footer />
        </main>
    );
}
