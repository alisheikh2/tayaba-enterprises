'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X 
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveDesktopDropdown(null);
      (document.activeElement as HTMLElement)?.blur();
    }
  };

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md transition-all duration-200">
      {/* Main Navigation Bar — Starts immediately with Logo & Navigation */}
      <nav className={`bg-white transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'py-2 shadow-lg' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Prominent Header Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Tayaba Enterprises Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-2xl sm:text-3xl text-brand-navy tracking-tight leading-none group-hover:text-brand-green transition-colors">
                Tayaba Enterprises
              </span>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <span>Copier Solution</span>
                <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">Since 2003</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* 1. Home */}
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* 2. About Us (+ dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDesktopDropdown('about')}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
              onFocus={() => setActiveDesktopDropdown('about')}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveDesktopDropdown(null);
                }
              }}
              onKeyDown={handleKeyDown}
            >
              <Link 
                href="/about-us" 
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === 'about'}
                className={`px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/about-us') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
                }`}
              >
                About Us
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200" />
              </Link>
              
              <div 
                className={`absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden py-1 ${
                  activeDesktopDropdown === 'about'
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible'
                }`}
              >
                <Link 
                  href="/about-us" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Company Overview & Team
                </Link>
                <Link 
                  href="/about-us/why-choose-us" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green"
                >
                  Why Choose Tayaba Enterprises
                </Link>
              </div>
            </div>

            {/* 3. Services (+ dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDesktopDropdown('services')}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
              onFocus={() => setActiveDesktopDropdown('services')}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveDesktopDropdown(null);
                }
              }}
              onKeyDown={handleKeyDown}
            >
              <Link 
                href="/services" 
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === 'services'}
                className={`px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/services') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200" />
              </Link>

              <div 
                className={`absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden py-1 ${
                  activeDesktopDropdown === 'services'
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible'
                }`}
              >
                <Link 
                  href="/services" 
                  className="block px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-100 hover:text-brand-green focus:text-brand-green"
                >
                  All Printing & Copier Services
                </Link>
                <Link 
                  href="/services/photocopying" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Photocopying Services
                </Link>
                <Link 
                  href="/services/printing" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Printing Services
                </Link>
                <Link 
                  href="/services/typing" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Typing Services
                </Link>
                <Link 
                  href="/services/scanning" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Scanning Services
                </Link>
                <Link 
                  href="/services/laminating" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Laminating Services
                </Link>
                <Link 
                  href="/services/fax" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green"
                >
                  Fax Services
                </Link>
              </div>
            </div>

            {/* 4. Machine Brands */}
            <Link 
              href="/machine-brands" 
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/machine-brands') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
              }`}
            >
              Machine Brands
            </Link>

            {/* 5. Clients */}
            <Link 
              href="/clients" 
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive('/clients') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
              }`}
            >
              Clients
            </Link>

            {/* 6. Contact Us (+ dropdown) */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDesktopDropdown('contact')}
              onMouseLeave={() => setActiveDesktopDropdown(null)}
              onFocus={() => setActiveDesktopDropdown('contact')}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveDesktopDropdown(null);
                }
              }}
              onKeyDown={handleKeyDown}
            >
              <Link 
                href="/contact-us" 
                aria-haspopup="true"
                aria-expanded={activeDesktopDropdown === 'contact'}
                className={`px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith('/contact-us') ? 'text-brand-green bg-emerald-50' : 'text-gray-700 hover:text-brand-navy hover:bg-gray-50'
                }`}
              >
                Contact Us
                <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 group-focus-within:rotate-180 transition-transform duration-200" />
              </Link>

              <div 
                className={`absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-200 z-50 overflow-hidden py-1 ${
                  activeDesktopDropdown === 'contact'
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible'
                }`}
              >
                <Link 
                  href="/contact-us" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Contact Information
                </Link>
                <Link 
                  href="/contact-us/career" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green border-b border-gray-50"
                >
                  Career
                </Link>
                <Link 
                  href="/contact-us/request-quote" 
                  className="block px-4 py-2.5 text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-brand-green focus:bg-emerald-50 focus:text-brand-green"
                >
                  Request A Quote
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact-us/request-quote" 
              className="ml-3 bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-5 py-2.5 rounded-lg transition shadow-sm hover:shadow inline-flex items-center justify-center gap-1.5 whitespace-nowrap flex-shrink-0"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
            
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green"
            >
              Home
            </Link>

            {/* 2. About Us */}
            <div>
              <div className="flex justify-between items-center">
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green flex-1"
                >
                  About Us
                </Link>
                <button 
                  onClick={() => toggleDropdown('about')}
                  className="p-2 text-gray-500 hover:text-brand-navy"
                  aria-label="Toggle About Us Menu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {openDropdown === 'about' && (
                <div className="pl-6 space-y-1 my-1 border-l-2 border-brand-green/30 ml-3">
                  <Link
                    href="/about-us/why-choose-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Why Choose Tayaba Enterprises
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Services */}
            <div>
              <div className="flex justify-between items-center">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green flex-1"
                >
                  Services
                </Link>
                <button 
                  onClick={() => toggleDropdown('services')}
                  className="p-2 text-gray-500 hover:text-brand-navy"
                  aria-label="Toggle Services Menu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {openDropdown === 'services' && (
                <div className="pl-6 space-y-1.5 my-1 border-l-2 border-brand-green/30 ml-3">
                  <Link
                    href="/services/photocopying"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Photocopying Services
                  </Link>
                  <Link
                    href="/services/printing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Printing Services
                  </Link>
                  <Link
                    href="/services/typing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Typing Services
                  </Link>
                  <Link
                    href="/services/scanning"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Scanning Services
                  </Link>
                  <Link
                    href="/services/laminating"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Laminating Services
                  </Link>
                  <Link
                    href="/services/fax"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Fax Services
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Machine Brands */}
            <Link
              href="/machine-brands"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green"
            >
              Machine Brands
            </Link>

            {/* 5. Clients */}
            <Link
              href="/clients"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green"
            >
              Clients
            </Link>

            {/* 6. Contact Us */}
            <div>
              <div className="flex justify-between items-center">
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-emerald-50 hover:text-brand-green flex-1"
                >
                  Contact Us
                </Link>
                <button 
                  onClick={() => toggleDropdown('contact')}
                  className="p-2 text-gray-500 hover:text-brand-navy"
                  aria-label="Toggle Contact Us Menu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'contact' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {openDropdown === 'contact' && (
                <div className="pl-6 space-y-1 my-1 border-l-2 border-brand-green/30 ml-3">
                  <Link
                    href="/contact-us/career"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Career
                  </Link>
                  <Link
                    href="/contact-us/request-quote"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-1 text-sm font-medium text-gray-600 hover:text-brand-green"
                  >
                    Request A Quote
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                href="/contact-us/request-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-brand-green hover:bg-brand-green-hover text-white font-bold px-4 py-2.5 rounded-md shadow"
              >
                Request a Free Quote
              </Link>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}
