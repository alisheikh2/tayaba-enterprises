'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, CheckCircle2, Shield, ArrowRight, Award } from 'lucide-react';

interface ClientItem {
  id: string;
  name: string;
  logo: string;
  category: string;
  displayOrder: number;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<ClientItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClients() {
      try {
        const res = await fetch('/api/clients');
        if (res.ok) {
          const data = await res.json();
          setClients(data);
        }
      } catch (err) {
        console.error('Error loading clients:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchClients();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
              Enterprise Trust &amp; Partnerships
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              Trusted By Leading Organizations Across Pakistan
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tayaba Enterprises is proud to power document photocopier infrastructure, high-volume digital printing, and technical support for Pakistan&apos;s most prominent corporations, public institutions, and universities.
            </p>
          </div>
        </div>

        {/* 12 Required Organizations Logo Grid */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-sm mb-12">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              Our Esteemed Corporate &amp; Institutional Clients
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Serving industrial leaders, national energy refineries, regulatory bureaus, and higher education centers across Karachi and Pakistan.
            </p>
          </div>

          {loading ? (
            <div className="py-12 text-center text-gray-500 font-semibold">
              Loading client partners logo grid...
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((client) => (
                <div 
                  key={client.id}
                  className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-36 group hover:-translate-y-1"
                >
                  <div className="relative w-full h-20 flex items-center justify-center p-2">
                    <Image 
                      src={client.logo} 
                      alt={`${client.name} Official Logo`}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center mt-2 w-full pt-2 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-800 line-clamp-1 group-hover:text-brand-navy transition-colors">
                      {client.name}
                    </span>
                    <span className="text-[10px] text-gray-500 block truncate">
                      {client.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              <span>Full SLA Maintenance &amp; Equipment Leasing Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              <span>High-Security Document Handling Protocols</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              <span>Dedicated On-Site Engineering Teams</span>
            </div>
          </div>

        </div>

        {/* Client Sectors Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-brand-green flex items-center justify-center font-bold mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Energy &amp; Industrial Majors</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Providing heavy-duty digital copier fleets, site-office rentals, and original toner logistics to Siemens, Pakistan State Oil (PSO), National Refinery Limited (NRL), SSGC, and PARCO.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-brand-navy flex items-center justify-center font-bold mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Government &amp; Regulatory Bureaus</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Supporting strict confidentiality and high-volume document replication for national institutions like the National Accountability Bureau (NAB) and National Investment Trust (NIT).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">Higher Education &amp; Universities</h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Handling examination printing, academic thesis publishing, and library scanning for Bahria University, Dow University of Health Sciences, Jinnah University, and Federal Urdu University.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold">Join Pakistan&apos;s Leading Entities</h3>
            <p className="text-slate-300 text-sm mt-1">Upgrade your corporate photocopying and printing infrastructure today with Tayaba Enterprises.</p>
          </div>
          <Link
            href="/contact-us/request-quote"
            className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow transition flex items-center gap-2 flex-shrink-0"
          >
            <span>Become a Client Partner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
