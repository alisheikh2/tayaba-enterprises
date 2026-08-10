import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Wrench, 
  Zap
} from 'lucide-react';

export const metadata = {
  title: "Photocopier Brands For Sale & Rent | Canon, Konica Minolta, Ricoh, Sharp, Xerox Karachi",
  description: "Tayaba Enterprises imports, sells, leases, and services commercial photocopier machines from Canon, Konica Minolta, Ricoh, Sharp, and Xerox in Karachi, Pakistan.",
};

export default function MachineBrandsPage() {
  const brands = [
    {
      id: "canon",
      name: "Canon Photocopiers",
      series: "imageRUNNER & imageRUNNER ADVANCE Series",
      image: "/images/copier-1.jpg",
      desc: "Canon is globally celebrated for pioneering optical imaging accuracy and durable paper handling mechanisms. The imageRUNNER ADVANCE lineup delivers vibrant full-color printing, robust security encryption, intuitive touchscreen interfaces, and minimal energy consumption. Excellent for law firms, accounting practices, and corporate headquarters seeking pristine document rendering.",
      features: [
        "Vivid Canon original toner color science",
        "High-capacity 3,000+ sheet paper cassettes",
        "Single-pass duplex ADF scanning up to 270 ipm",
        "Encrypted hard drive & user authentication"
      ],
      suitableFor: "Law Firms, Banks, Corporate Offices"
    },
    {
      id: "konica-minolta",
      name: "Konica Minolta Bizhub",
      series: "bizhub C & Monochrome Production Series",
      image: "/images/copier-2.jpg",
      desc: "Konica Minolta's bizhub series is the benchmark for high-speed digital print production and commercial copying. Built with heavy-duty steel chassis and Simitri HD polymerized toner technology, bizhub multifunction copiers maintain high clarity across massive continuous print runs. Ideal for commercial copy centers, universities, and large engineering departments.",
      features: [
        "Simitri HD polymerized toner for micro-fine detail",
        "Empowerment workflow apps & mobile cloud printing",
        "Support for heavy cardstock up to 300gsm",
        "Modular inline booklet finishing & stapling"
      ],
      suitableFor: "Universities, Commercial Print Hubs, Tenders"
    },
    {
      id: "ricoh",
      name: "Ricoh Aficio Copiers",
      series: "Aficio MP & IM Intelligent Series",
      image: "/images/copier-3.jpg",
      desc: "Ricoh digital copiers are world-renowned for operational cost efficiency, minimal maintenance overhead, and rapid warm-up response. Featuring Always Current Technology (ACT) firmware and energy-saving fused rollers, Ricoh Aficio copiers lower long-term cost-per-page while offering silent, reliable document duplication.",
      features: [
        "Ultra-low cost-per-page operation",
        "Smart Operation Panel with Android OS integration",
        "Rapid 15-second warm-up time from sleep mode",
        "Eco-friendly low TEC energy consumption"
      ],
      suitableFor: "Government Offices, Logistics, Energy Sector"
    },
    {
      id: "sharp",
      name: "Sharp Photocopiers",
      series: "Sharp MX Series Multifunction Systems",
      image: "/images/sharp-mx-series.jpg",
      desc: "Sharp MX series digital photocopiers combine sleek ergonomic design with effortless touchscreen control. Designed to streamline office document collaboration, Sharp machines feature retractable keyboards, wireless LAN connectivity, micro-fine toner technology, and integrated multi-layered network defense security.",
      features: [
        "Retractable QWERTY keyboard for quick scanning index",
        "Sharp OSA (Open Systems Architecture) integration",
        "Micro-fine toner for crisp fine lines and small text",
        "Real-time preview and multi-page editing"
      ],
      suitableFor: "Executive Suites, Financial Institutions"
    },
    {
      id: "xerox",
      name: "Xerox WorkCentre",
      series: "Xerox WorkCentre & VersaLink Technology",
      image: "/images/xerox-workcentre.jpg",
      desc: "As the inventor of modern xerography, Xerox sets the standard for enterprise document management. Xerox WorkCentre and VersaLink copiers feature ConnectKey technology, enabling secure mobile printing, cloud app repository access, and vibrant EA toner performance across high-volume office workloads.",
      features: [
        "Xerox ConnectKey cloud application library",
        "Emulsion Aggregation (EA) toner technology",
        "Strict compliance with Cisco & McAfee security standards",
        "Consistent heavy-duty duty cycle endurance"
      ],
      suitableFor: "Multinational Enterprises, Oil & Gas Majors"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
              <Zap className="w-4 h-4 text-emerald-400" /> Business Partners &amp; Machine Inventory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              World-Class Photocopier Machine Brands
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tayaba Enterprises imports, supplies, leases, and services premium digital photocopiers from world-renowned Japanese and American manufacturers across Karachi and Pakistan.
            </p>
          </div>
        </div>

        {/* Options Banner */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border-r border-gray-100 last:border-0">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-brand-green mx-auto flex items-center justify-center font-bold mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Direct Sales</h3>
            <p className="text-xs text-gray-600">Brand new and refurbished commercial copiers with full warranty coverage.</p>
          </div>

          <div className="p-4 border-r border-gray-100 last:border-0">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-brand-navy mx-auto flex items-center justify-center font-bold mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Corporate Lease &amp; Rental</h3>
            <p className="text-xs text-gray-600">Custom monthly rental packages including free toner and on-site servicing.</p>
          </div>

          <div className="p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center font-bold mb-3">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">Parts &amp; Consumables</h3>
            <p className="text-xs text-gray-600">Original toner bottles, drum units, upper rollers, and spare components.</p>
          </div>
        </div>

        {/* Brand Showcase List */}
        <div className="space-y-10 mb-16">
          {brands.map((b) => (
            <div 
              key={b.id}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-4 relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100 border border-gray-200">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xl font-extrabold">{b.name}</div>
                  <div className="text-xs text-emerald-400 font-semibold">{b.series}</div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-bold text-brand-navy bg-blue-50 px-2.5 py-1 rounded">
                    Recommended for: {b.suitableFor}
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-2">
                    {b.name} Solutions
                  </h2>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {b.desc}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Key Technology Features:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
                    {b.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    Available for: <strong className="text-gray-800">Sale, Monthly Rent &amp; Annual Maintenance Contract (AMC)</strong>
                  </div>
                  <Link
                    href="/contact-us/request-quote"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow transition flex items-center gap-1.5"
                  >
                    <span>Request Quote for {b.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Quote Callout */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 text-center shadow-xl border border-blue-900/50">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
            Not Sure Which Photocopier Brand Fits Your Monthly Workload?
          </h2>
          <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto mb-8">
            Our technical sales consultants will analyze your monthly print volume, paper size requirements, and budget to recommend the optimal machine.
          </p>
          <Link
            href="/contact-us/request-quote"
            className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg transition"
          >
            <span>Speak With a Copier Specialist</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
