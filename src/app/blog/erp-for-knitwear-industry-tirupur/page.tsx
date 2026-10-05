"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, CheckCircle2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function KnitwearERPArticlePage() {
  return (
    <main className="min-h-screen bg-white text-[#0b132a] overflow-hidden">
      <Header />
      
      {/* ── HERO (Navy) ── */}
      <div className="bg-[#0b132a] relative overflow-hidden pt-32 pb-24">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('/circuit-board-light.svg')] bg-cover bg-center opacity-[0.03]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-primary/20 border border-primary/30 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Textile ERP Software
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                Sep 28, 2026
              </span>
              <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(theme.h1, "text-white mb-6 text-left")}
            >
              Why Generic ERPs Fail in Tirupur's Knitwear Industry
            </motion.h1>
          </div>
        </div>
      </div>

      {/* ── ARTICLE CONTENT (White) ── */}
      <section className="py-16 sm:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
            
            {/* Social Share Sidebar (Hidden on small screens) */}
            <div className="hidden lg:block w-16 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4 items-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  Share Article
                </p>
                <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/50 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <article className="flex-grow max-w-3xl">
              
              <div className="rounded-3xl overflow-hidden mb-12 shadow-lg border border-gray-100">
                <img 
                  src="/images/blog/erp-for-knitwear-industry-tirupur.webp" 
                  alt="Knitwear Industry Tirupur" 
                  className="w-full h-auto object-cover max-h-[400px]"
                />
              </div>

              <div className="prose prose-lg max-w-none text-[#0b132a]">
                <p className={cn(theme.p, "text-[18px] leading-relaxed mb-6 font-medium text-gray-800")}>
                  <span className="font-bold text-primary">Key Takeaway:</span> Most standard ERPs flop in Tirupur because they expect a factory to run in a neat, straight line. But knitwear manufacturing is anything but linear. Off-the-shelf software simply isn’t built to handle daily shop-floor realities like converting yarn in kilos to fabric in meters and finished garments in pieces, balancing outside job-work challans, or factoring in fabric shrinkage and endless size-color combinations.
                </p>
                
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Walk into any knitwear manufacturing unit in Tirupur, and you will see that it does not operate like a typical assembly-line factory. Yarn moves through knitting, dyeing, compacting, printing, cutting, and stitching stages often split across multiple independent vendors and outside job-work units before an order is packed and shipped. Add fluctuating fabric shrinkage, intricate size- and color-wise costing, and strict buyer compliance mandates, and it becomes clear why knitwear manufacturing follows a completely different rhythm from standard discrete manufacturing.
                </p>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  This is exactly where most generic ERP systems struggle. They're built for straight forward, linear manufacturing, not for the batch-wise, job-work-heavy, multi-stage production that defines Tirupur's knitwear sector, one of India's largest knitwear export clusters. Understanding why these systems fail and what an industry-specific alternative looks like can save a knitwear unit years of wasted implementation effort.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-6")}>Why Generic ERP Software Fails Textile and Garment Businesses</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Most ERP platforms available in the market are built as general-purpose systems, designed to serve everything from retail chains to distribution companies to discrete manufacturing. They're not wrong tools, they're just the wrong fit for knitwear.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  A generic ERP is usually designed around simple manufacturing processes and often assumes that:
                </p>

                <ul className="space-y-4 mb-8 mt-2">
                  {[
                    "One raw material is converted into one finished product through a fixed set of production stages",
                    "Inventory is managed using a single unit of measure throughout the process",
                    "All production activities take place in-house, under one roof",
                    "Product costing remains fixed once the item is created"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  None of these assumptions hold in a Tirupur knitwear unit. Fabric is measured in kilograms at the knitting stage, then tracked in metres after processing, and finally counted in pieces once garments are cut and stitched. A generic system forces this reality into a rigid structure it was never designed to hold, and something eventually breaks — usually inventory accuracy or costing precision.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Common ERP Implementation Problems in Knitwear Manufacturing</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Ask any knitwear unit that has implemented a generic ERP, and you’ll often see the same pattern. The system works well initially with basic transactions, but as real-world production complexity grows job work, multiple processes, size and colour variations, shrinkage, and changing costs the gaps in the system quickly become difficult to manage.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Some of the most common implementation problems include:
                </p>

                <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li>Endless customisation requests just to track basic processes like job-work dyeing or sub-contracted embroidery</li>
                  <li>Manual workarounds in spreadsheets because the system can't handle multi-stage conversions</li>
                  <li>Disconnected departments, where production, inventory, and accounts work with different sets of data instead of one connected source of truth</li>
                  <li>Costing errors, which often become visible only after an order has been completed or shipped, when correcting them is already too late</li>
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  The result goes beyond frustration, it gradually reduces trust in the ERP. Teams start relying on Excel and WhatsApp to manage critical information, while the ERP ends up being used mainly as a billing and accounting tool.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Missing Features: What Off-the-Shelf ERP Can't Handle in Garment Production</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  The gap isn't about the ERP being "bad" software. It's about missing features that knitwear manufacturing simply cannot function without.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Here's what's usually absent in a generic system:
                </p>

                <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li><strong>Sub-contracting management:</strong> Tracking fabric or garments sent out for dyeing, printing, or embroidery, and reconciling what comes back</li>
                  <li><strong>Multi-UOM conversion:</strong> Moving seamlessly between kilograms, metres, dozens, and pieces across different production stages</li>
                  <li><strong>Size and colour-wise inventory and costing:</strong> A single style can have a dozen size-colour combinations, each needing separate tracking</li>
                  <li><strong>Shrinkage and wastage accounting:</strong> Fabric loss during processing directly affects true cost, and generic systems rarely factor it in.</li>
                  <li><strong>Order-wise profitability tracking:</strong> Knowing whether a specific export order was actually profitable, not just the business as a whole</li>
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  Without these, decision-makers are left estimating rather than knowing. In an industry running on thin margins and tight buyer timelines, estimation simply isn’t good enough.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>The Real Cost of Using the Wrong ERP System</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  The financial damage from a mismatched ERP rarely shows up as a single line item, which is exactly why it goes unnoticed for so long. It shows up as small leaks across the business:
                </p>

                <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li>The high cost of fabric procurement stems from the inability to accurately track material consumption and wastage.</li>
                  <li>Shipments are delayed as production progress cannot be monitored in real time throughout all stages.</li>
                  <li>Additionally, pricing decisions are often inaccurate due to outdated or incomplete cost information.</li>
                  <li>Duplicate data entry across departments, wasting valuable time every day</li>
                  <li>Low user adoption, meaning the "system of record" is really just one of several conflicting records</li>
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  Add these up over a year, and the cost of the wrong ERP often exceeds what a properly implemented, industry-specific system would have cost in the first place not just in software fees, but in missed opportunities and strained buyer relationships.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>What Industry-Specific Textile ERP Software Offers Instead</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  A <Link href="https://www.pinnaclesystems.co.in/textile-erp-software" className="text-primary hover:underline font-semibold" rel="index, follow">textile ERP software</Link> built specifically for this sector starts from a different premise: it's designed around how textile and knitwear units actually operate, not adapted after the fact.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  That means the system is designed to natively handle:
                </p>

                <ul className="space-y-4 mb-8 mt-2">
                  {[
                    "Multi-stage production tracking, from yarn through knitting, processing, and finishing to the final garment",
                    "Automatic unit conversions between kg, metres, and pieces without relying on manual calculations",
                    "Job-work and outsourced process management, with complete material movement and process traceability",
                    "Size, colour, and style-wise costing and inventory",
                    "Real-time visibility into order status, from cutting to packing to dispatch"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  Instead of making a knitwear business change the way it works to fit the software, an industry-specific ERP is designed to fit the business. That small difference can have a big impact on whether the system becomes part of everyday operations or ends up being left aside after a year.
                </p>

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>How to Choose the Right ERP for a Knitwear Unit in Tirupur</h2>
                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  Choosing an <Link href="https://apparelresources.com/technology-news/manufacturing-tech/erp-solutions-for-a-typical-garment-industry/" className="text-primary hover:underline font-semibold" rel="index, follow">ERP for knitwear industry Tirupur</Link> units isn't about picking the platform with the longest feature list or the most recognisable brand name. It's about matching the software to the specific way knitwear production actually flows on the ground.
                </p>

                <p className={cn(theme.p, "mb-6 text-gray-600")}>
                  A few practical questions can help you determine whether an ERP is genuinely suited to your knitwear operations:
                </p>

                <ul className="space-y-3 mb-6 ml-5 list-disc text-gray-700 marker:text-primary">
                  <li>Does it handle job-work and subcontracting natively, with proper material tracking, process visibility, and reconciliation—without relying on costly custom development?</li>
                  <li>Can it manage multiple units of measure—such as kg, metres, and pieces—throughout the same production cycle?</li>
                  <li>Does it support size- and colour-wise costing out of the box?</li>
                  <li>Has it been implemented in other textile or garment units, ideally in Tirupur or a comparable cluster?</li>
                  <li>Can the team actually see themselves using it daily, or does it demand a complete change in how they already work?</li>
                </ul>

                <p className={cn(theme.p, "mb-12 text-gray-600")}>
                  A <Link href="https://www.pinnaclesystems.co.in/garment-erp-software" className="text-primary hover:underline font-semibold" rel="index, follow">garment ERP software</Link> that's purpose-built for this industry answers "yes" to these questions by default, because it was designed with exactly this kind of production complexity in mind — not retrofitted to accommodate it after launch.
                </p>

                <div className="bg-[#0b132a] text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px]"></div>
                  <p className="font-medium leading-relaxed relative z-10 text-[16px]">
                    <span className="text-primary font-bold">Conclusion:</span> Generic ERP systems aren't poorly built, they're simply built for a different kind of business. Tirupur's knitwear units operate with a level of production complexity, job-work dependency, and costing precision that off-the-shelf software wasn't designed to handle. No amount of customisation fully closes that gap. For knitwear manufacturers evaluating ERP options, the more important question isn’t “Which ERP has the most features?” but “Which ERP is designed around the way my business actually operates?” That distinction can make the difference between a system your team confidently adopts and one that eventually gets sidelined.
                  </p>
                </div>

                <hr className="my-12 border-gray-200" />

                <h2 className={cn(theme.h2, "text-[28px] md:text-[32px] text-navy-900 mt-12 mb-8")}>Frequently Asked Questions</h2>

                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Why do generic ERP systems fail in the knitwear industry?</h3>
                    <p className="text-gray-600">Generic ERP systems are built for linear, single-stage manufacturing. Knitwear production involves multiple stages — knitting, dyeing, cutting, stitching — often with job-work vendors in between, along with size, colour, and unit-of-measure changes that generic systems aren't designed to track accurately.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">What features should a knitwear unit look for in an ERP?</h3>
                    <p className="text-gray-600">A knitwear unit should look for native job-work and sub-contracting tracking, multi-UOM conversion (kg to metres to pieces), size- and colour-wise costing, shrinkage accounting, and order-wise profitability visibility — features most off-the-shelf ERPs don't include by default.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Is a textile-specific ERP more expensive than a generic ERP?</h3>
                    <p className="text-gray-600">Not necessarily. While the upfront cost can be similar, a generic ERP often ends up costing more over time through customisation fees, workarounds, and the hidden losses from inaccurate costing and inventory — expenses a purpose-built textile ERP is designed to avoid.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Can a generic ERP be customised to work for garment manufacturing?</h3>
                    <p className="text-gray-600">It can be customised to a degree, but core limitations like multi-stage unit conversion and job-work tracking are usually structural, not cosmetic. Heavy customisation tends to create a fragile, expensive system that still falls short of what an industry-built ERP offers natively.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">How is job-work tracked differently in a textile ERP?</h3>
                    <p className="text-gray-600">A textile ERP tracks material sent to a job-work vendor, monitors what's due back, and reconciles quantity and quality on return — all within the same system. In a generic ERP, this is typically managed manually outside the software, in spreadsheets or registers.</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-navy-900 mb-2">Why is Tirupur's knitwear industry a special case for ERP selection?</h3>
                    <p className="text-gray-600">Tirupur is one of India's largest knitwear export clusters, with production spread across knitting, processing, and garmenting units that frequently rely on job-work. This distributed, multi-stage structure demands ERP capabilities that most general-purpose systems were never built to handle.</p>
                  </div>
                </div>

                <hr className="my-12 border-gray-200" />
                
                {/* Embedded CTA */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 rounded-r-2xl mt-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Ready to scale your knitwear business?</h3>
                  <p className="text-gray-600 mb-6">See how Pinnacle ERP simplifies production complexity and ensures accuracy.</p>
                  <Link href="?contact=true" scroll={false} className={cn(theme.buttonPrimary, "px-6 py-3 text-sm")}>
                    Book a Free Demo
                  </Link>
                </div>

              </div>
            </article>

          </div>
        </div>
      </section>

      <div className="bg-[#11192F]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <Footer />
        </div>
      </div>
    </main>
  );
}
