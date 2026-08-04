import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Printer, CheckCircle2, ArrowRight, ShieldCheck, Clock, FileText, Sparkles, Building2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Commercial Photocopying Services Karachi | Tayaba Enterprises",
  description: "High-speed monochrome and color photocopying services in Karachi. Specializing in high-volume corporate document duplication, legal briefs, and oversized copying.",
};

export default function PhotocopyingServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
              <Printer className="w-4 h-4 text-brand-green" /> High-Volume Duplication Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Commercial Photocopying Services in Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Fast, crisp, and heavy-volume commercial photocopying powered by production-grade Canon, Konica Minolta, and Ricoh digital equipment in DHA Phase VII, Karachi.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content with Images */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Enterprise-Grade Photocopying for Karachi Businesses
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  In today&apos;s fast-paced corporate and legal sector in Karachi, accurate and prompt document copying is crucial. At <strong>Tayaba Enterprises</strong>, we operate a commercial copying center equipped with industrial digital photocopiers processing over 90 pages per minute.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  From single urgent copies for walk-in clients to multi-box corporate document duplication for court trials, corporate audits, or tender submissions, we maintain strict quality control. Our machines support all standard paper weights (70gsm to 120gsm bond paper) and sizes including A4, A3, Legal, and Letter.
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/photocopying.jpg"
                  alt="Commercial Photocopying Service Karachi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Detailed Features Grid */}
          <AnimatedSection direction="up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> High-Speed Monochrome (B&amp;W) Duplication
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Razor-sharp black text and clean grayscale reproduction optimized for heavy legal court briefs, accounting ledger audits, corporate manuals, and educational notes.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Full-Color Laser Photocopying
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Vivid color matching for marketing presentations, architectural blueprints, engineering site plans, and graphic-heavy corporate proposals using genuine OEM toners.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Technical Options */}
          <AnimatedSection direction="up" delay={300}>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Technical Capabilities &amp; Document Finishing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Automatic Single-Pass Duplex Double-Sided Copying</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Enlargement &amp; Reduction Scaling (25% to 400%)</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Automatic Stapling, Hole Punching &amp; Booklet Collation</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>Comb, Spiral, Wire-O &amp; Thermal Tape Binding Options</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* CTA */}
        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Require High-Volume Photocopying?</h3>
              <p className="text-slate-300 text-sm">Contact our Karachi sales desk for corporate discounted rates.</p>
            </div>
            <Link
              href="/contact-us/request-quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Request A Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
