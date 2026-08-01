import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Dark Hero Section Container */}
        <div className="bg-navy-900 relative rounded-[40px] overflow-hidden">
          <Header />
          <Hero />
        </div>

        {/* Feature Cards overlapping the dark section and white section */}
        <div className="relative z-10 -mt-32 px-4 pb-20">
          <FeatureCards />
        </div>
      </div>
    </main>
  );
}
