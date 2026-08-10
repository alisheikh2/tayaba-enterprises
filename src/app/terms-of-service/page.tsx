import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Tayaba Enterprises Karachi',
  description: 'Terms and Conditions governing photocopier machine rentals, sales, digital printing services, and website use for Tayaba Enterprises.',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
            <FileCheck className="w-4 h-4 text-brand-green" /> Legal Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Effective Date: January 1, 2026 • Tayaba Enterprises (Karachi, Pakistan)
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6 text-gray-700 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website or engaging Tayaba Enterprises for photocopier sales, equipment lease, digital printing, or maintenance services in Pakistan, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Services &amp; Quotations</h2>
            <p>
              Quotations provided via this website, email, or official letterhead remain valid for 15 calendar days from the date of issue unless otherwise specified. All commercial orders, equipment rental contracts, and SLA agreements are formalized upon execution of a written purchase order or signed lease agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Photocopier Rental &amp; Lease Terms</h2>
            <p>
              For monthly photocopier rentals and corporate machine lease contracts:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Tayaba Enterprises supplies tested commercial equipment, original consumables, and on-site engineering maintenance.</li>
              <li>Clients are responsible for providing appropriate electrical surge protection and standard operating paper stock.</li>
              <li>Machine relocation or tampering without prior authorization from Tayaba Enterprises technical staff is strictly prohibited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Intellectual Property</h2>
            <p>
              All trademarks, machine brand names, and logos displayed on this website (such as Canon, Konica Minolta, Ricoh, Sharp, and Xerox) belong to their respective corporate owners. Tayaba Enterprises uses these marks strictly to denote compatible equipment sales, rental inventory, and technical service support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal disputes arising shall be subject to the exclusive jurisdiction of the competent courts in Karachi, Sindh.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">6. Contact Information</h2>
            <p>
              For formal inquiries regarding service contracts or legal registration (NTN: 1783680-8 | Sales Tax No: 01-01-8500-332-37):
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-gray-200">
              <p className="font-bold text-gray-900">Tayaba Enterprises — Head Office</p>
              <p>1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, Phase-VII, DHA, Karachi – 75500</p>
              <p>Email: <a href="mailto:tayaba_enterprises@yahoo.com" className="text-brand-navy underline font-medium">tayaba_enterprises@yahoo.com</a></p>
              <p>Phone: 021-35897614-15 | Cell: +92 334 0367336</p>
            </div>
          </section>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-1.5 text-brand-green font-bold hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Home Page
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
