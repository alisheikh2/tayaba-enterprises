import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  TrendingUp,
  Wrench, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: "Why Choose Tayaba Enterprises | Photocopier & Printing Excellence Karachi",
  description: "Discover why top organizations in Pakistan choose Tayaba Enterprises for photocopier sales, leasing, and printing services. Over 23 years of proven reliability in Karachi.",
};

export default function WhyChooseUsSubPage() {
  const points = [
    {
      title: "23+ Years of Established Market Trust (Est. 2003)",
      desc: "Operating continuously in Karachi since 2003, Tayaba Enterprises has navigated decades of commercial printing evolution. Our long-standing tenure guarantees stability, reliable parts supply, and total financial transparency.",
      icon: Clock
    },
    {
      title: "Comprehensive Brand Coverage (Canon, Konica, Ricoh, Sharp, Xerox)",
      desc: "Unlike single-brand vendors, we maintain comprehensive parts and technical expertise across all major global photocopier manufacturers. This allows us to recommend the precise machine model tailored to your workload.",
      icon: Award
    },
    {
      title: "Flexible Copier Rental & Leasing Contracts",
      desc: "Avoid heavy capital expenditures with our customizable monthly lease plans. Enjoy zero maintenance anxiety—our monthly rental packages include free toner supply, scheduled preventative service, and rapid breakdown replacement.",
      icon: TrendingUp
    },
    {
      title: "Certified On-Site Maintenance Engineers",
      desc: "Our team of skilled field technicians is stationed strategically in Karachi to ensure swift on-site response times. We resolve technical issues promptly to keep your office printing operations running smoothly.",
      icon: Wrench
    },
    {
      title: "100% Genuine Toners & OEM Spare Parts",
      desc: "We strictly utilize high-grade original toner formulations and genuine manufacturer replacement drums and rollers. This preserves print clarity, prevents machine jams, and delivers immaculate document quality.",
      icon: ShieldCheck
    },
    {
      title: "Proven Track Record with Pakistan's Tier-1 Entities",
      desc: "Our client roster includes national energy titans (PSO, NRL, PARCO, SSGC), top regulatory bodies (NAB), multinational industrial leaders (Siemens), and leading universities (Bahria, Dow, FUUAST, Jinnah).",
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
              <Award className="w-4 h-4 text-emerald-400" /> Why Partner With Us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              Why Choose Tayaba Enterprises?
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When high-volume document productivity, crisp print clarity, and uninterrupted copier uptime are essential to your organization, Tayaba Enterprises is Karachi&apos;s most dependable choice.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Commitment Card */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 border border-blue-900/50">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Ready to Upgrade Your Office Printing Infrastructure?
            </h2>
            <p className="text-slate-300 text-sm lg:text-base">
              Speak directly with our sales executives or request a customized machine rental quotation for your Karachi office.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link
              href="/contact-us/request-quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base px-6 py-3.5 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>Request A Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
