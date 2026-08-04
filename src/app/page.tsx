import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/PricingSection";
import GuideSection from "@/components/home/GuideSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Dark Hero Section Container */}
        <div className="bg-navy-900 relative rounded-t-[40px] overflow-hidden">
          <Header />
          <Hero />
        </div>

        {/* Feature Cards overlapping the dark section and white section */}
        <div className="relative z-10 -mt-32 px-4 lg:px-24 xl:px-28 pb-4">
          <FeatureCards />
        </div>

        {/* About Section */}
        <AboutSection />
        
        {/* Services Section */}
        <ServicesSection />

        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Guide Section */}
        <GuideSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        {/* Blog Section */}
        <BlogSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
