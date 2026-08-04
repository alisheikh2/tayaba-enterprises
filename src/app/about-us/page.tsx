import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Award, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  Landmark, 
  UserCheck, 
  Briefcase, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: "About Us | Tayaba Enterprises Karachi - Photocopier Solutions Since 2003",
  description: "Learn about Tayaba Enterprises, Karachi's leading photocopier machine and printing solutions provider established in 2003 in DHA Phase VII. Meet our executive team and legal credentials.",
};

export default function AboutUsPage() {
  const teamMembers = [
    { name: "Mr. Muhammad Yameen", role: "Chief Executive Officer (CEO)", initial: "MY" },
    { name: "Mr. Abu Talib", role: "General Manager", initial: "AT" },
    { name: "Mr. Dilshad", role: "Account Manager", initial: "MD" },
    { name: "Mr. Hassan", role: "Sales Executive", initial: "MH" },
    { name: "Mr. Ahsan", role: "Sales Executive", initial: "MA" },
    { name: "Mrs. Rukhsana", role: "Front Desk & Receptionist", initial: "MR" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header Header Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4 border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-brand-green" />
              <span>DHA Phase VII, Karachi • Established 2003</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              About Tayaba Enterprises
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Two decades of excellence in delivering photocopier machines, digital printing systems, toner supplies, and document processing to Karachi&apos;s corporate, academic, and government leaders.
            </p>
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-gray-200 space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                Company Profile
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3">
                Karachi&apos;s Premier Document Hardware &amp; Printing Hub
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed text-base">
              Founded in 2003 and strategically headquartered at 1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, Phase-VII, DHA, Karachi, <strong>Tayaba Enterprises</strong> has built an unmatched reputation as a premier supplier of commercial photocopier machines, digital multifunction printers, and document workflow solutions across Sindh and broader Pakistan.
            </p>

            <p className="text-gray-700 leading-relaxed text-base">
              We specialize in importing, selling, leasing, and servicing top-tier digital photocopier brands including <strong>Canon, Konica Minolta, Ricoh, Sharp, and Xerox</strong>. In addition to hardware supply, our state-of-the-art service facility offers high-speed commercial photocopying, color laser printing, professional typing, document scanning, laminating, and fax transmission.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-sm font-semibold text-gray-800">
              <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-2 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> 23+ Years Active Market Presence
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-2 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Registered Government Contractor
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-full border border-blue-900">
            <div>
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4" /> Core Mission
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Empowering Enterprises with Frictionless Document Workflow
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Our objective is to eliminate document processing bottlenecks for our client organizations through ultra-reliable printing machinery, original consumable supplies, transparent leasing terms, and immediate technician support.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link 
                href="/about-us/why-choose-us"
                className="inline-flex items-center justify-between w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-5 py-3 rounded-lg transition"
              >
                <span>Discover &quot;Why Choose Tayaba Enterprises&quot;</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
              Leadership &amp; Staff
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Our Professional Management Team
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Dedicated professionals committed to upholding high service standards, prompt customer support, and financial integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-brand-navy text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow">
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <div className="text-xs font-bold text-brand-green uppercase tracking-wide mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">Tayaba Enterprises Karachi</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Corporate Registration Information Block */}
        <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-4 border-b border-gray-100">
            <div>
              <span className="text-brand-navy font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                Compliance &amp; Verification
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mt-2 flex items-center gap-2">
                <FileCheck className="w-6 h-6 text-brand-green" /> Legal &amp; Statutory Registration
              </h2>
            </div>
            <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-200">
              Verified Taxpayer &amp; Corporate Entity
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-1">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">National Tax Number (NTN)</div>
              <div className="text-xl font-mono font-extrabold text-brand-navy">1783680-8</div>
              <div className="text-xs text-gray-600">Registered with Federal Board of Revenue (FBR)</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-1">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Sales Tax Registration No.</div>
              <div className="text-xl font-mono font-extrabold text-brand-navy">01-01-8500-332-37</div>
              <div className="text-xs text-gray-600">Active Sales Tax Payee</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-1">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">SRB Registration No.</div>
              <div className="text-xl font-mono font-extrabold text-brand-navy">S1783680-8</div>
              <div className="text-xs text-gray-600">Sindh Revenue Board Registered</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-1 md:col-span-2 lg:col-span-2">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Official Banking Partners</div>
              <div className="text-lg font-bold text-gray-900 flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-brand-green" /> Muslim Commercial Bank (MCB)
                </span>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-brand-green" /> Bank Al Habib
                </span>
              </div>
              <div className="text-xs text-gray-600">Corporate accounts maintained in good standing since inception.</div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-1">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Year Established</div>
              <div className="text-xl font-extrabold text-brand-green">2003</div>
              <div className="text-xs text-gray-600">Headquartered in DHA Phase VII, Karachi</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
