'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Send, CheckCircle2, ShieldCheck, PhoneCall } from 'lucide-react';

export default function RequestQuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Photocopier Rental / Lease',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
            <FileText className="w-4 h-4 text-brand-green" /> Immediate Quotation Desk
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Request A Free Quotation
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Get customized corporate pricing for photocopier machine purchases, monthly copier lease contracts, bulk digital printing, or archiving services in Karachi.
          </p>
        </div>

        {/* Dedicated Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Quotation Request Form
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Please fill out your business details and requirements below. Our commercial sales manager will respond with an official estimate within 24 hours.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
              <h3 className="text-xl font-bold">Quotation Request Sent!</h3>
              <p className="text-sm text-emerald-800">
                Thank you, {formData.name}! Your request for {formData.service} has been received. Our sales team will email/call you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green-hover transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dilshad Ahmed"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Organization / Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Siemens / PSO / Private Office"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0321-XXXXXXX"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="dilshad@company.com"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Service / Product Needed *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                >
                  <option value="Photocopier Rental / Lease">Photocopier Machine Rental / Lease Contract</option>
                  <option value="Photocopier Machine Purchase">Photocopier Machine Purchase (Canon, Konica, Ricoh, Sharp, Xerox)</option>
                  <option value="Photocopying Services">Bulk Commercial Photocopying Services</option>
                  <option value="Digital Printing Services">Digital Laser Printing Services</option>
                  <option value="Document Scanning & Archiving">Document Scanning &amp; OCR Archiving</option>
                  <option value="Typing & Composing">Urdu / English Legal Document Typing</option>
                  <option value="Laminating & Binding">Laminating &amp; Document Binding</option>
                  <option value="Fax Services">Facsimile Transmission Services</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Project Details / Monthly Print Volume *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify paper sizes (A4/A3/Legal), expected monthly copy volume, or specific machine model preferences..."
                  className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quotation Request</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
