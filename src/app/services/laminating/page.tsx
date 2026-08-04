import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Document Laminating Services Karachi | Tayaba Enterprises",
  description: "Durable thermal and pouch document laminating services in Karachi. Waterproof and tear-resistant protection for certificates, ID cards, badges, and operational charts.",
};

export default function LaminatingServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Document Protection Unit
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Document Laminating Services in Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Thermal and cold press document lamination providing waterproof, spill-resistant, and tamper-proof protection for essential papers.
            </p>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Long-Lasting Protective Document Encapsulation
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Important certificates, official diplomas, employee ID passes, reference instruction charts, and frequently handled operational guides degrade quickly without protective shielding. <strong>Tayaba Enterprises</strong> utilizes high-grade thermal press lamination machines to encapsulate paper documents inside crystal-clear protective film.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Our lamination process uses non-yellowing, UV-resistant polyester film in various gauge thicknesses (from 75 microns to 250 microns). This ensures sealed edges that resist water penetration, grease stains, tearing, and fading.
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/laminating.jpg"
                  alt="Thermal Document Laminating Service Karachi"
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
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Pouch &amp; Roll Lamination
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Supports all document formats from small credit-card sized badges and driving licenses up to A4, A3, and custom poster dimensions.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Matte &amp; Gloss Finishes
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Choose between high-clarity gloss film for rich color vibrancy or non-glare matte film for easy reading under harsh overhead lighting.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Need Walk-in Laminating Services?</h3>
              <p className="text-slate-300 text-sm">Visit our Jami Commercial Street office in DHA Phase VII, Karachi.</p>
            </div>
            <Link
              href="/contact-us"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Location &amp; Contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
