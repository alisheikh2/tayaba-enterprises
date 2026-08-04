'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  MessageCircle, 
  Facebook, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-12 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-4 mb-4">
              Contact Tayaba Enterprises
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Reach out to our Karachi office for copier sales, monthly machine leasing inquiries, bulk printing orders, or immediate technical support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Official Head Office
            </h2>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-bold mb-0.5">Address:</strong>
                  1st Floor, Plot No. 4-E/II, Jami Commercial Street No.06, Phase-VII, DHA, Karachi – 75500, Sindh, Pakistan
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-bold mb-0.5">Telephone Lines:</strong>
                  <div>Landline: 021-35897614-15</div>
                  <div>Fax: 021-35897611</div>
                  <div className="mt-1 font-semibold text-brand-navy">
                    Cell: +92 333 2638640 | +92 334 0367336
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-bold mb-0.5">Email Address:</strong>
                  <a href="mailto:tayaba_enterprises@yahoo.com" className="text-brand-navy font-semibold hover:underline">
                    tayaba_enterprises@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <div>
                  <strong className="block text-gray-900 font-bold mb-0.5">Operating Hours:</strong>
                  Monday to Saturday: 9:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            {/* Quick Social Buttons */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a
                href="https://wa.me/923340367336?text=Hi,%20I'm%20interested%20in%20your%20printing/photocopier%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 334 0367336)</span>
              </a>

              <a
                href="https://facebook.com/tayabaEnterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow transition"
              >
                <Facebook className="w-4 h-4" />
                <span>Follow on Facebook (/tayabaEnterprises)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
                <h3 className="text-xl font-bold">Thank You for Contacting Tayaba Enterprises!</h3>
                <p className="text-sm text-emerald-800">
                  Your message has been received. Our team will review your inquiry and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green-hover transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Yameen"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0334-XXXXXXX"
                      className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Message / Inquiries *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please specify your photocopying, printing, or machine rental requirements..."
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Embedded Google Map */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-brand-green" />
            <h3 className="text-lg font-bold text-gray-900">
              Interactive Location Map — Jami Commercial Area, Phase VII, DHA, Karachi
            </h3>
          </div>
          <div className="w-full h-80 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Tayaba Enterprises Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.503463802951!2d67.0628227150035!3d24.8193859840733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c5e3f438a29%3A0x2479e0a0f023a9a1!2sJami%20Commercial%20St%2011%2C%20Phase%207%20Jami%20Commercial%20Area%20Defence%20V%20DHA%2C%20Karachi%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2spk!4v1691000000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
