import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Printer, 
  FileText, 
  Keyboard, 
  Scan, 
  ShieldCheck, 
  Send, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Zap,
  Building2,
  Clock,
  Layers
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

export const metadata = {
  title: "Printing & Photocopier Services Karachi | Tayaba Enterprises",
  description: "Explore commercial photocopying, digital laser printing, Urdu/English legal typing, OCR document scanning, laminating, and fax services by Tayaba Enterprises in Karachi.",
};

export default function ServicesMainPage() {
  const serviceList = [
    {
      slug: "photocopying",
      title: "Photocopying Services",
      tagline: "High-Volume Monochrome & Full Color Duplication",
      img: "/images/services/photocopying.jpg",
      desc: "Our commercial photocopying unit is outfitted with enterprise digital copiers from Canon, Konica Minolta, and Ricoh capable of producing thousands of crisp document duplicates per hour. We handle everything from standard A4/A3 office copying to complex double-sided legal brief collations, booklet binding, and oversized blueprint reproduction with razor-sharp text clarity and rich tonal contrast.",
      highlights: ["High-speed 90+ ppm production copiers", "Automated document feeding & duplexing", "Enlargement & reduction scaling (25% to 400%)", "Legal, A4, A3 & architectural paper sizes"]
    },
    {
      slug: "printing",
      title: "Printing Services",
      tagline: "High-Resolution Digital & Laser Printing Solutions",
      img: "/images/services/printing.jpg",
      desc: "Tayaba Enterprises provides top-tier digital laser printing services tailored for corporate presentation packages, promotional brochures, official manuals, and academic research papers. Supporting various media weights from standard 80gsm bond to heavy 300gsm cardstock, we ensure accurate color matching and immaculate finishing.",
      highlights: ["Vivid CMYK color laser accuracy", "Custom cardstock & glossy paper stock", "Heavy-volume corporate reports & tenders", "Fast turnaround for walk-in & bulk orders"]
    },
    {
      slug: "typing",
      title: "Typing Services",
      tagline: "Professional English & InPage Urdu Composing",
      img: "/images/services/typing.jpg",
      desc: "Our dedicated composing desk offers professional document typing in English and Urdu. Senior typists compose legal affidavits, judicial petitions, corporate agreements, official government correspondence, CVs, and academic manuscripts with strict adherence to legal formatting norms and error-free orthography.",
      highlights: ["Bilingual composing (English & InPage Urdu)", "Legal petition & court affidavit formatting", "Official government tender documentation", "Strict confidentiality & quick document delivery"]
    },
    {
      slug: "scanning",
      title: "Scanning Services",
      tagline: "Document Digitization & Optical Character Recognition",
      img: "/images/services/scanning.jpg",
      desc: "Transition your organization into a paperless digital workflow with our high-speed document scanning solutions. We convert physical paper archives, invoices, contract repositories, and historical records into text-searchable, indexable PDF files protected with enterprise encryption.",
      highlights: ["High-resolution multi-page PDF generation", "Searchable OCR text extraction", "Duplex batch scanning for file archives", "Secure cloud or USB storage export"]
    },
    {
      slug: "laminating",
      title: "Laminating Services",
      tagline: "Durable Thermal Encapsulation & Document Protection",
      img: "/images/services/laminating.jpg",
      desc: "Protect vital documents against environmental wear, moisture, spills, and handling tears with our professional laminating services. Utilizing heavy-duty thermal press laminators, we coat certificates, identity badges, reference charts, and instructional posters with clear protective film.",
      highlights: ["Hot & cold press encapsulation", "Pouch lamination from ID size to A3", "UV resistant non-yellowing film", "Waterproof and tear-proof protection"]
    },
    {
      slug: "fax",
      title: "Fax Services",
      tagline: "Real-Time Facsimile Transmission & Receipt",
      img: "/images/services/fax.jpg",
      desc: "For institutions requiring verified facsimile transmission, Tayaba Enterprises operates dedicated high-speed fax lines. Send or receive urgent legal notices, banking confirmations, and official letters with instant transmission verification printouts.",
      highlights: ["Local & international fax transmission", "Dedicated receiving line with notification", "Instant delivery verification receipt", "Secure document handling"]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <AnimatedSection direction="down">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl">
            <div className="max-w-3xl">
              <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
                <Layers className="w-4 h-4 text-emerald-400" /> Full Services Portfolio
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
                Comprehensive Printing &amp; Document Solutions
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Equipped with industrial photocopiers and digital finishing gear, Tayaba Enterprises caters to all corporate, commercial, and individual document requirements in Karachi.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Services List */}
        <div className="space-y-10 mb-16">
          {serviceList.map((svc, idx) => (
            <AnimatedSection key={svc.slug} direction="up" delay={idx * 100}>
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Service Image */}
                <div className="lg:col-span-4 relative h-60 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-gray-200">
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs font-bold text-white bg-brand-navy/90 backdrop-blur-md px-2.5 py-1 rounded">
                      {svc.tagline}
                    </span>
                  </div>
                </div>

                {/* Service Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {svc.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {svc.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-gray-500">Available at DHA Phase 7 Branch • Fast Turnaround</span>
                    <Link
                      href={`/services/${svc.slug}`}
                      className="bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow transition flex items-center gap-2"
                    >
                      <span>Read Complete Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote Banner */}
        <AnimatedSection direction="up">
          <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6 border border-blue-900/50">
            <div>
              <h3 className="text-2xl font-bold">Have a Bulk Printing or Scanning Job?</h3>
              <p className="text-slate-300 text-sm mt-1">Get discounted rates for large volume corporate printing contracts.</p>
            </div>
            <Link
              href="/contact-us/request-quote"
              className="bg-brand-green hover:bg-brand-green-hover text-white font-extrabold px-6 py-3.5 rounded-lg shadow transition flex-shrink-0"
            >
              Request Custom Quotation
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
