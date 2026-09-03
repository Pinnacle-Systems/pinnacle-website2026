import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import MethodologySection from "@/components/home/MethodologySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CtaSection from "@/components/home/CtaSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import PricingSection from "@/components/home/PricingSection";
import GuideSection from "@/components/home/GuideSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Dark Hero Section Container */}
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="bg-navy-900 relative rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] overflow-hidden shadow-2xl border border-white/5">
          {/* Circuit background overlay across the entire dark hero container */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('/circuit-board.svg')] bg-cover bg-no-repeat bg-center mix-blend-overlay pointer-events-none"></div>
          <Header />
          <Hero />
        </div>
      </div>

      {/* Feature Cards overlapping the dark section and white section */}
      <div className="max-w-[1600px] mx-auto relative z-10 -mt-12 sm:-mt-16 lg:-mt-24 xl:-mt-28 px-4 sm:px-6 lg:px-12 xl:px-20 pb-4">
        <FeatureCards />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      {/* <ServicesSection /> */}

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Guide Section */}
      <GuideSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
