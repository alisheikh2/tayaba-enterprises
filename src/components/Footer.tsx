import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Upper Footer: Main Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full p-1 flex-shrink-0">
                <Image 
                  src="/images/logo.png" 
                  alt="Tayaba Enterprises Logo" 
                  fill 
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  Tayaba Enterprises
                </h3>
                <p className="text-xs text-brand-green font-bold uppercase tracking-wider">
                  Copier Solution • Est. 2003
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Karachi&apos;s premier photocopier machine sales, rental, and professional printing solutions company. Providing dependable enterprise document technology across Pakistan since 2003.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                Sales, Lease &amp; Flexible Rental Contracts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                Original Toners &amp; Spare Parts Supply
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                Dedicated On-Site Technical Engineers
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/about-us/why-choose-us" className="hover:text-white transition flex items-center gap-2 pl-3 text-xs text-slate-400">
                  <span>└</span> Why Choose Tayaba Enterprises
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> Services
                </Link>
              </li>
              <li>
                <Link href="/machine-brands" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> Machine Brands
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> Clients
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition flex items-center gap-2">
                  <span className="text-brand-green">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us/career" className="hover:text-white transition flex items-center gap-2 pl-3 text-xs text-slate-400">
                  <span>└</span> Career
                </Link>
              </li>
              <li>
                <Link href="/contact-us/request-quote" className="hover:text-white transition flex items-center gap-2 pl-3 text-xs text-slate-400">
                  <span>└</span> Request A Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">
              Services Portfolio
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/photocopying" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Photocopying Services
                </Link>
              </li>
              <li>
                <Link href="/services/printing" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Digital Printing Services
                </Link>
              </li>
              <li>
                <Link href="/services/typing" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Professional Typing Services
                </Link>
              </li>
              <li>
                <Link href="/services/scanning" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Document Scanning Services
                </Link>
              </li>
              <li>
                <Link href="/services/laminating" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Laminating Services
                </Link>
              </li>
              <li>
                <Link href="/services/fax" className="hover:text-white transition flex items-center gap-2">
                  <Printer className="w-3.5 h-3.5 text-brand-green" /> Fax Services
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                Supported Brands
              </h5>
              <div className="text-xs text-slate-400 flex flex-wrap gap-1.5">
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Canon</span>
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Konica Minolta</span>
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Ricoh</span>
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Sharp</span>
                <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Xerox</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Legal Registration */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base mb-4 pb-2 border-b border-slate-800">
              Karachi Office
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, Phase-VII, DHA, Karachi – 75500
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green flex-shrink-0" />
                <div>
                  <div>021-35897614-15</div>
                  <div className="text-xs text-slate-400">Cell: +92 333 2638640 | +92 334 0367336</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0" />
                <a href="mailto:tayaba_enterprises@yahoo.com" className="hover:text-white transition underline">
                  tayaba_enterprises@yahoo.com
                </a>
              </div>
            </div>

            {/* Legal Information Box */}
            <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700/60 text-xs space-y-1.5 mt-4">
              <div className="font-bold text-white flex items-center gap-1.5 text-slate-200">
                <Shield className="w-3.5 h-3.5 text-brand-green" /> Legal &amp; Banking Details
              </div>
              <div className="text-slate-300"><strong>NTN:</strong> 1783680-8</div>
              <div className="text-slate-300"><strong>Sales Tax No:</strong> 01-01-8500-332-37</div>
              <div className="text-slate-300"><strong>SRB No:</strong> S1783680-8</div>
              <div className="text-slate-300"><strong>Bankers:</strong> Muslim Commercial Bank, Bank Al Habib</div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-950 py-4 px-4 text-xs text-slate-500 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            © 2003 - 2026 <strong className="text-slate-300">Tayaba Enterprises</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-of-service" className="hover:text-white transition">Terms &amp; Conditions</Link>
            <span>•</span>
            <span>DHA Phase-VII, Karachi, Pakistan</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
