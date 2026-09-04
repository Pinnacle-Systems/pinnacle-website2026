import Link from "next/link";
import { Hammer } from "lucide-react";
import { theme } from "@/theme";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-[#0b132a] flex flex-col items-center justify-center text-white p-4">
      <div className="max-w-md text-center space-y-6 pt-20">
        <div className="flex justify-center">
          <div className="p-5 bg-white/5 rounded-full ring-1 ring-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            <Hammer className="w-12 h-12 text-primary animate-bounce" />
          </div>
        </div>
        <h1 className={theme.h1}>
          Under <span className="text-primary">Construction</span>
        </h1>
        <p className={theme.p}>
          We're working hard to bring you this page. Please check back later!
        </p>
        <div className="pt-8">
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-primary/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
