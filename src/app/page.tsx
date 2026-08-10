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
  CheckCircle2, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Zap,
  Building2,
  Clock,
  Shield,
  Wrench,
  Boxes,
  Users
} from 'lucide-react';
import clientsData from '@/data/clientsData.json';
import AnimatedSection from '@/components/AnimatedSection';
import Testimonials from '@/components/Testimonials';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
  title: "Tayaba Enterprises | Karachi's Trusted Photocopier & Printing Solutions Partner",
  description: "Established in 2003 in DHA Karachi, Tayaba Enterprises provides high-speed photocopier machine rentals, sales, digital printing, scanning, typing, laminating, and fax solutions.",
};

export default function HomePage() {
  const getInitials = (orgName: string) => {
    if (!orgName) return 'TE';
    const parts = orgName.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 3).toUpperCase();
    return parts.map(p => p[0]).join('').substring(0, 3).toUpperCase();
  };

  const services = [
    {
      id: "photocopying",
      title: "Photocopying Services",
      desc: "Commercial monochrome and full-color document duplication. Engineered for high-volume corporate contracts, legal files, and engineering drawings with crisp contrast.",
      icon: Printer,
      link: "/services/photocopying",
      img: "/images/services/photocopying.jpg",
      bg: "bg-blue-50 text-brand-navy"
    },
    {
      id: "printing",
      title: "Printing Services",
      desc: "High-resolution digital laser printing for corporate proposals, brochures, booklets, and technical reports. Supports custom paper weights up to 300gsm and glossy finishes.",
      icon: FileText,
      link: "/services/printing",
      img: "/images/services/printing.jpg",
      bg: "bg-emerald-50 text-brand-green"
    },
    {
      id: "typing",
      title: "Typing Services",
      desc: "Meticulous legal petition composing, official correspondence, and court affidavit drafting in English and InPage Urdu performed by senior commercial typists.",
      icon: Keyboard,
      link: "/services/typing",
      img: "/images/services/typing.jpg",
      bg: "bg-purple-50 text-purple-700"
    },
    {
      id: "scanning",
      title: "Scanning Services",
      desc: "High-speed OCR optical document scanning. Convert bulky physical paper archives into secure, text-searchable PDF files for corporate server and cloud storage.",
      icon: Scan,
      link: "/services/scanning",
      img: "/images/services/scanning.jpg",
      bg: "bg-amber-50 text-amber-700"
    },
    {
      id: "laminating",
      title: "Laminating Services",
      desc: "Thermal and cold document encapsulation providing waterproof, tear-resistant protection for important certificates, identity cards, badges, and operational charts.",
      icon: ShieldCheck,
      link: "/services/laminating",
      img: "/images/services/laminating.jpg",
      bg: "bg-cyan-50 text-cyan-700"
    },
    {
      id: "fax",
      title: "Fax Services",
      desc: "Dependable real-time local and international facsimile transmission and incoming reception with verified delivery confirmation logs for legal and banking compliance.",
      icon: Send,
      link: "/services/fax",
      img: "/images/services/fax.jpg",
      bg: "bg-rose-50 text-rose-700"
    }
  ];

  const machineBrands = [
    { name: "Canon", tagline: "imageRUNNER ADVANCE Series", desc: "Industry-leading digital multifunction copiers renowned for optical precision, vibrant color science, and heavy-duty daily endurance." },
    { name: "Konica Minolta", tagline: "bizhub Production Copiers", desc: "High-speed digital production copiers built for enterprise print hubs, universities, and commercial document centers." },
    { name: "Ricoh", tagline: "Aficio Digital Multifunction", desc: "Eco-friendly, energy-efficient digital copiers delivering ultra-low cost-per-page operation and silent performance." },
    { name: "Sharp", tagline: "MX High-Performance Copiers", desc: "Intuitive touchscreen multifunction copiers designed for seamless corporate workflow automation and document security." },
    { name: "Xerox", tagline: "WorkCentre & VersaLink", desc: "Pioneering document hardware providing sharp monochrome and vivid color outputs across continuous workload demands." }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH RICH BACKGROUND & USER-FRIENDLY TEXT */}
      <section className="relative bg-slate-950 text-white min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-slate-800">
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Commercial Photocopier & Printing Hub Karachi"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/65" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <AnimatedSection direction="up" delay={200}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                <span className="text-white block">Karachi&apos;s Trusted Photocopier &amp;</span>
                <span className="text-emerald-400 block mt-1">Printing Solutions Partner</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal">
                Providing dependable photocopier machine sales, flexible monthly rentals, and high-volume printing services across Karachi since 2003. Fast service turnaround, genuine toners, and dedicated field engineers when you need them most.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact-us/request-quote"
                  className="bg-brand-green hover:bg-brand-green-hover text-white text-base font-bold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/services"
                  className="bg-white/15 hover:bg-white/25 text-white text-base font-semibold px-6 py-3.5 rounded-lg backdrop-blur-md border border-white/25 transition flex items-center gap-2"
                >
                  <span>Explore All Services</span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-300 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>23+ Years Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Original Toners &amp; Parts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>On-Site Engineer Support</span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="bg-brand-navy text-white py-8 border-y border-blue-900/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400">
                  <AnimatedCounter end={2003} />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Year Established</div>
              </div>
              <div className="p-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={12} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Enterprise Clients</div>
              </div>
              <div className="p-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-emerald-400">
                  <AnimatedCounter end={5} suffix=" Top" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Copier Brands</div>
              </div>
              <div className="p-2 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-3xl lg:text-4xl font-extrabold text-white">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold mt-1">Client Satisfaction</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW SECTION */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest bg-emerald-100/90 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
                Comprehensive Document &amp; Printing Solutions
              </h2>
              <p className="text-gray-600 text-base lg:text-lg">
                Tayaba Enterprises delivers complete commercial office printing management, heavy-duty photocopier rentals, precision legal typing, scanning, laminating, and fax transmission.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              return (
                <AnimatedSection key={svc.id} direction="up" delay={index * 100}>
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 h-full">
                    <div>
                      {/* Image Header */}
                      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={svc.img}
                          alt={svc.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-4">
                          <span className="text-xs font-bold text-white bg-brand-navy/90 backdrop-blur-md px-2.5 py-1 rounded">
                            {svc.title}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className={`w-12 h-12 rounded-xl ${svc.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-navy transition-colors">
                          {svc.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <Link 
                        href={svc.link} 
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-green hover:text-brand-green-hover transition group-hover:translate-x-1"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. TRUST-BUILDING SHOWCASE SECTION WITH REAL PHOTOS */}
      <section className="py-16 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest bg-emerald-100/90 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
                Built On Trust &amp; Technical Excellence
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-3">
                Why Karachi&apos;s Leading Organizations Rely On Us
              </h2>
              <p className="text-gray-600 text-base mt-2">
                Over 23 years of hands-on experience, certified maintenance technicians, and complete inventory of genuine copier parts in Karachi.
              </p>
            </div>
          </AnimatedSection>

          {/* 3 High-Impact Trust Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            <AnimatedSection direction="up" delay={100}>
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative h-52 w-full">
                  <Image
                    src="/images/technician.jpg"
                    alt="On-site Certified Photocopier Engineer Repair Service"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-sm flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-emerald-400" /> Factory Trained Technicians
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Dedicated Field Engineering</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Our Karachi maintenance team responds rapidly to on-site service calls, performing preventative maintenance and instant repairs to ensure zero office downtime.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative h-52 w-full">
                  <Image
                    src="/images/warehouse.jpg"
                    alt="Ready Commercial Photocopier Machine Inventory"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-sm flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-emerald-400" /> Ready Machine Inventory
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Commercial Sales &amp; Leasing</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Heavy-duty digital copiers ready for immediate deployment in Karachi offices. Flexible monthly lease plans with all maintenance and toner included.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative h-52 w-full">
                  <Image
                    src="/images/toner.jpg"
                    alt="Genuine Canon Konica Ricoh Toner Inventory"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-bold text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Genuine Consumables
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Original Toners &amp; Drums</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    We strictly use genuine manufacturer toners and drums to guarantee clear, smudge-free print outputs and protect your machine hardware long-term.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </section>

      {/* 5. AUTO-PLAYING 5-STAR TESTIMONIALS SECTION */}
      <Testimonials />

      {/* 6. MACHINE BRANDS SECTION */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection direction="up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <span className="text-emerald-300 font-bold text-xs uppercase tracking-widest bg-emerald-950/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm">
                  Business Partners &amp; Brands
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-3">
                  Commercial Photocopier Brands We Sales &amp; Lease
                </h2>
              </div>

              <Link 
                href="/machine-brands"
                className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline"
              >
                <span>View All Brands &amp; Models</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {machineBrands.map((b, idx) => (
              <AnimatedSection key={idx} direction="up" delay={idx * 100}>
                <div className="bg-slate-800/90 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight">
                      {b.name}
                    </h3>
                    <div className="text-xs text-emerald-400 font-bold mb-3">{b.tagline}</div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700/80 text-[11px] text-slate-400 font-semibold flex items-center justify-between">
                    <span>Sales &amp; Rentals</span>
                    <span className="text-emerald-400">Available</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CLIENTS LOGO STRIP SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatedSection direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-emerald-900 font-bold text-xs uppercase tracking-widest bg-emerald-100/90 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2">
                Our Esteemed Clients
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                Trusted By Leading Organizations Across Pakistan
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                We take pride in powering document infrastructure for Pakistan&apos;s leading corporations, universities, and public institutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clientsData.slice(0, 12).map((client) => (
                <div 
                  key={client.id}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center h-28 group relative"
                >
                  <div className="relative w-full h-16 flex items-center justify-center">
                    {client.logo ? (
                      <Image 
                        src={client.logo} 
                        alt={`${client.name} Logo`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                      />
                    ) : (
                      <div className="w-12 h-10 rounded-lg bg-emerald-100 text-brand-green flex items-center justify-center font-extrabold text-xs border border-emerald-200">
                        {getInitials(client.name)}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-gray-700 text-center line-clamp-1 mt-1">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="text-center mt-10">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition"
            >
              <span>View Full Clients Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="bg-brand-navy text-white py-16 border-t border-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Need a Photocopier Machine or Printing Services in Karachi?
            </h2>
            <p className="text-slate-300 text-base lg:text-lg max-w-2xl mx-auto mb-8">
              Contact Tayaba Enterprises today for a customized corporate quotation, machine leasing plans, or immediate printing service inquiries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us/request-quote"
                className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg transition"
              >
                Request A Free Quote
              </Link>
              <a
                href="tel:02135897614"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-6 py-3.5 rounded-lg border border-white/20 transition flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-emerald-400" />
                <span>Call: 021-35897614-15</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
