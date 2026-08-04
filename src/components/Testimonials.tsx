'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Building } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  location: string;
  serviceUsed: string;
  rating: number;
  comment: string;
  date: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Engr. Tariq Mehmood",
      role: "Facility Operations Manager",
      organization: "Corporate Energy Firm",
      location: "DHA Phase VII, Karachi",
      serviceUsed: "Photocopier Machine Lease & Maintenance",
      rating: 5,
      comment: "We leased three Konica Minolta bizhub high-speed copiers from Tayaba Enterprises for our Karachi Regional Office. Their monthly rental contract is completely transparent with no hidden charges. Whenever a toner replacement or routine checkup is needed, their field engineer arrives within 2 hours. Exceptional reliability!",
      date: "July 2026"
    },
    {
      id: 2,
      name: "Advocate Farooq Siddiqui",
      role: "Senior Legal Consultant",
      organization: "Karachi High Court Bar Practice",
      location: "Karachi",
      serviceUsed: "Urdu/English Legal Petition Composing & Printing",
      rating: 5,
      comment: "Getting court petitions and sworn affidavits composed in InPage Urdu and printed on official stamp paper requires absolute typographic accuracy. Tayaba Enterprises' composing desk at Jami Commercial Street has been our trusted partner for over 8 years. Fast, confidential, and error-free legal typing every time.",
      date: "June 2026"
    },
    {
      id: 3,
      name: "Dr. Samar Raza",
      role: "Department Administrator",
      organization: "Leading Health Sciences University",
      location: "Karachi",
      serviceUsed: "High-Volume Digital Exam Printing & Collation",
      rating: 5,
      comment: "During our semester examination period, we required over 45,000 multi-page examination papers printed, collated, and stapled under strict confidentiality. Tayaba Enterprises handled the entire high-volume digital printing job overnight with zero security breaches and perfect page order.",
      date: "May 2026"
    },
    {
      id: 4,
      name: "Syed Shahzeb Hassan",
      role: "Head of Procurement",
      organization: "Industrial Machinery Manufacturer",
      location: "SITE Area, Karachi",
      serviceUsed: "Canon Photocopier Purchase & Annual Maintenance",
      rating: 5,
      comment: "We purchased a refurbished Canon imageRUNNER ADVANCE heavy-duty photocopier from Tayaba Enterprises in 2021. Their post-sales warranty and genuine toner supply have kept our office printing running continuously without a single major breakdown. Highly recommended for corporate equipment sales!",
      date: "April 2026"
    },
    {
      id: 5,
      name: "Ms. Ayesha Khan",
      role: "Administrative Officer",
      organization: "Financial Advisory Services Firm",
      location: "DHA Karachi",
      serviceUsed: "OCR Document Scanning & Archive Digitization",
      rating: 5,
      comment: "We converted 15 years of physical financial paper archives into text-searchable OCR PDFs using Tayaba Enterprises' high-speed scanning service. Their staff handled sensitive audit files with total confidentiality and delivered structured digital cloud folders ahead of our deadline.",
      date: "March 2026"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      className="py-16 bg-gradient-to-b from-slate-900 to-brand-navy text-white overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3">
            What Our Valued Clients Say
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Real feedback from Karachi corporate operational managers, legal advocates, and university administrators.
          </p>
        </div>

        {/* Animated Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/90 rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-2xl relative transition-all duration-500 min-h-[320px] flex flex-col justify-between">
            
            {/* Top Quote & Rating */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-300 ml-2">5.0 / 5.0 Verified Client</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-brand-green bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.serviceUsed}</span>
                </div>
              </div>

              {/* Review Text */}
              <div className="relative pl-6 sm:pl-8 border-l-4 border-brand-green mb-8">
                <Quote className="w-8 h-8 text-brand-green/30 absolute -top-3 -left-3 -z-10" />
                <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic">
                  &ldquo;{current.comment}&rdquo;
                </p>
              </div>
            </div>

            {/* Author Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-slate-700/80 gap-4">
              <div>
                <div className="font-extrabold text-white text-lg">{current.name}</div>
                <div className="text-xs text-brand-green font-bold">
                  {current.role} • <span className="text-slate-300 font-normal">{current.organization} ({current.location})</span>
                </div>
              </div>

              {/* Navigation Controls & Auto-play Indicator */}
              <div className="flex items-center gap-3 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-slate-700/80 hover:bg-brand-green text-white transition border border-slate-600 focus:outline-none"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? 'w-8 bg-brand-green' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-slate-700/80 hover:bg-brand-green text-white transition border border-slate-600 focus:outline-none"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

          <div className="text-center text-xs text-slate-400 mt-4">
          </div>
        </div>

      </div>
    </section>
  );
}
