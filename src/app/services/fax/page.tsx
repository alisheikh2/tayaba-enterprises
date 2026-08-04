import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Facsimile Transmission & Fax Services Karachi | Tayaba Enterprises",
  description: "Real-time local and international fax sending and receiving services in DHA Karachi. Immediate receipt verification reports for official legal and banking correspondence.",
};

export default function FaxServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
              <Send className="w-4 h-4 text-brand-green" /> Telecommunication Unit
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Fax Services in Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reliable real-time facsimile transmission and incoming fax reception with verified transmission receipts for legal and banking compliance.
            </p>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Dependable Local &amp; International Facsimile Service
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Despite the growth of digital email, numerous legal institutions, financial clearinghouses, government ministries, and international trade corporations strictly require verified facsimile transmissions for official record validation. <strong>Tayaba Enterprises</strong> operates dedicated landline fax terminals (Fax No: 021-35897611) to facilitate seamless sending and receiving.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Every outgoing fax transmission is accompanied by an automated transmission verification log detailing date, time, destination fax number, page count, and connection handshake confirmation.
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/fax.jpg"
                  alt="Official Facsimile Fax Transmission Service Karachi"
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
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Outgoing Fax Transmission
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Send urgent legal notices, banking instructions, customs declarations, and official letters anywhere across Pakistan or internationally with instant confirmation receipts.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Incoming Fax Reception
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Receive confidential incoming faxes at our official Karachi line (021-35897611) with prompt client notification and secure print delivery.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Official Fax Line: 021-35897611</h3>
              <p className="text-slate-300 text-sm">Stationed at 1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, DHA Phase-VII, Karachi.</p>
            </div>
            <Link
              href="/contact-us"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Contact Information</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
