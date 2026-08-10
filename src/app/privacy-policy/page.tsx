import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Tayaba Enterprises Karachi',
  description: 'Tayaba Enterprises Privacy Policy detailing how we handle client data, inquiry submissions, and job application resumes.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
            <ShieldCheck className="w-4 h-4 text-brand-green" /> Legal &amp; Data Protection
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base">
            Effective Date: January 1, 2026 • Tayaba Enterprises (Karachi, Pakistan)
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6 text-gray-700 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Overview</h2>
            <p>
              Tayaba Enterprises (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operating in Karachi, Pakistan since 2003, is committed to safeguarding the privacy of our corporate clients, individual website visitors, and job applicants. This Privacy Policy outlines our procedures regarding the collection, use, and disclosure of personal data submitted via our website (<code className="text-xs bg-slate-100 p-1 rounded">tayaba-enterprises.vercel.app</code>).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Information We Collect</h2>
            <p>We collect information voluntarily provided by visitors when submitting website forms:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Contact &amp; Quotation Inquiries:</strong> Name, email address, phone number, company name, and project message details.</li>
              <li><strong>Career Applications:</strong> Name, contact details, position applied for, cover letter, and uploaded Curriculum Vitae (CV/resume files in PDF or Word format).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. How We Use Your Information</h2>
            <p>Your information is used solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>To evaluate and respond to photocopier rental, machine purchase, or digital printing quotation requests.</li>
              <li>To contact candidates regarding career opportunities and job interviews.</li>
              <li>To fulfill service-level agreement (SLA) commitments for corporate client partners.</li>
            </ul>
            <p className="mt-2 font-semibold text-brand-navy">
              We do NOT sell, lease, rent, or trade client or applicant data to third-party marketing companies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Data Storage &amp; Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to protect all submitted data and files against unauthorized access, loss, or misuse. Admin access to inquiry databases is restricted behind authenticated login credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">5. Your Rights &amp; Inquiries</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal contact data or uploaded resume from our database at any time.
            </p>
            <p className="mt-2">
              For any privacy inquiries or data requests, please contact our Karachi office directly:
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
