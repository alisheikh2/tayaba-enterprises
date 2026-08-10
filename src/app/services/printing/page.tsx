import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FileText, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Digital Laser Printing Services Karachi | Tayaba Enterprises",
  description: "High-resolution digital laser printing services in DHA Karachi. Printing corporate reports, brochures, booklets, and technical documents with vibrant color accuracy.",
};

export default function PrintingServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 shadow-sm">
              <FileText className="w-4 h-4 text-emerald-400" /> Digital Printing Unit
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Digital Laser Printing Services in Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              High-precision digital laser printing for corporate publications, technical documents, marketing collateral, and official papers.
            </p>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Vivid Digital Printing for Enterprise Requirements
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong>Tayaba Enterprises</strong> offers digital laser printing that fills the gap between quick office desktop printing and expensive offset runs. Our heavy-duty digital laser printers render rich CMYK colors and deep black density, making your corporate reports, business proposals, brochures, and training materials stand out.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Whether you require 50 executive annual report copies or 5,000 promotional flyers, our facility handles variable data printing, double-sided duplexing, and specialized media substrates including matte cardstock, textured paper, and glossy photo paper.
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/printing.jpg"
                  alt="Digital Laser Printing Service Karachi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Corporate Collateral Printing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Executive business proposals, annual reports, company profiles, product catalogs, and presentation folders printed with exact brand color fidelity.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Complete Document Binding &amp; Finishing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Professional post-print finishing options including comb binding, spiral wire binding, thermal tape binding, corner stapling, and precision trimming.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg border border-blue-900/50">
            <div>
              <h3 className="text-xl font-bold">Have a Digital Printing Order?</h3>
              <p className="text-slate-300 text-sm">Send us your PDF file for immediate print quote processing.</p>
            </div>
            <Link
              href="/contact-us/request-quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Request Print Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
