import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Scan, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Document Scanning & OCR Archiving Services Karachi | Tayaba Enterprises",
  description: "High-speed document scanning and text-searchable OCR conversion services in DHA Karachi. Convert physical paper archives into secure PDF, TIFF, or JPEG files.",
};

export default function ScanningServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
              <Scan className="w-4 h-4 text-brand-green" /> Digitization Hub
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Document Scanning &amp; Archiving Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              High-speed optical scanning, OCR keyword indexing, and secure digital archive conversion for physical document repositories in Karachi.
            </p>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Seamless Physical-to-Digital Document Archiving
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Physical document files consume valuable office real estate and are vulnerable to fire, moisture, and misplacement. <strong>Tayaba Enterprises</strong> provides commercial document scanning solutions that transform bulky paper records into streamlined, searchable digital PDF assets.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Using high-resolution duplex feed scanners, we process thousands of document pages daily. Our Optical Character Recognition (OCR) technology embeds searchable text layers within generated PDFs, allowing your staff to locate specific keywords, contract clauses, or invoice numbers instantly.
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/scanning.jpg"
                  alt="High Speed Document Scanning Service Karachi"
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
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> High-Speed Duplex Batch Scanning
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Automated double-sided scanning at up to 600 DPI resolution with automatic blank page removal, page rotation, and edge deskewing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Searchable OCR &amp; Custom Indexing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Text-searchable PDF file compilation formatted according to your firm&apos;s custom folder taxonomy for easy cloud or server integration.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Have an Archive to Digitized?</h3>
              <p className="text-slate-300 text-sm">We offer bulk scanning packages with secure handling protocols.</p>
            </div>
            <Link
              href="/contact-us/request-quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Request Scanning Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
