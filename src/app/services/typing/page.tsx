import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Keyboard, CheckCircle2, ArrowRight, ShieldCheck, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Urdu & English Document Typing Services Karachi | Tayaba Enterprises",
  description: "Professional English and InPage Urdu typing services in DHA Karachi. Legal petitions, court affidavits, corporate agreements, and official government correspondence.",
};

export default function TypingServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
              <Keyboard className="w-4 h-4 text-brand-green" /> Document Composing Desk
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              English &amp; InPage Urdu Typing Services
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Meticulous document composing, legal petition formatting, and bilingual composing by experienced typists in Karachi.
            </p>
          </div>
        </AnimatedSection>

        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm space-y-10 mb-10">
          
          <AnimatedSection direction="up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Error-Free Legal &amp; Administrative Document Composing
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Drafting official legal documents, court affidavits, government tender submissions, and formal corporate agreements requires absolute typographic precision. At <strong>Tayaba Enterprises</strong>, our composing specialists possess decades of experience in composing documents in both English and Urdu (using InPage and Unicode fonts).
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  We assist individual clients, legal practitioners, real estate agencies, and corporate firms in composing, proofreading, and properly formatting official letters, power of attorney drafts, lease deeds, academic manuscripts, and professional resumes (CVs).
                </p>
              </div>

              <div className="md:col-span-5 relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <Image
                  src="/images/services/typing.jpg"
                  alt="Professional Legal & Urdu Typing Service Karachi"
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
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Legal &amp; Judicial Composing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Expert formatting of court petitions, legal notices, sworn affidavits on stamp paper, sale agreements, and arbitration filings conforming to High Court and District Court standards.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" /> Urdu Nasta&apos;liq Composing
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Flawless Urdu typing utilizing standard InPage Nasta&apos;liq typography for official government letters, press releases, Urdu literature, and community announcements.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>

        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg">
            <div>
              <h3 className="text-xl font-bold">Need Urgent Typing or Composing?</h3>
              <p className="text-slate-300 text-sm">Visit our DHA Phase 7 office or send handwritten drafts for prompt composing.</p>
            </div>
            <Link
              href="/contact-us"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Contact Composing Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
