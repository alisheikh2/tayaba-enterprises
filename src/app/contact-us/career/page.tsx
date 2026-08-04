'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Mail, Send, CheckCircle2, FileUp } from 'lucide-react';

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Photocopier Technician / Engineer',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'career',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Position Applied For: ${formData.position}\n\n${formData.message}`,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to send your application. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 lg:p-12 mb-10 shadow-xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-4">
            <Briefcase className="w-4 h-4 text-brand-green" /> Join Our Team
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Careers at Tayaba Enterprises
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Build your career with Karachi&apos;s established photocopier and printing solutions firm. We are always seeking talented technicians, sales executives, and administrative professionals.
          </p>
          
          <div className="mt-6 bg-white/10 p-4 rounded-xl max-w-xl mx-auto border border-white/15">
            <div className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">Direct CV Submission</div>
            <div className="text-emerald-300 font-extrabold text-lg flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Send your CV to <a href="mailto:tayaba_enterprises@yahoo.com" className="underline hover:text-white">tayaba_enterprises@yahoo.com</a> for current openings</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Online Career Application
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Submit your details below for current and future vacancies in our Karachi office.
          </p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
              <h3 className="text-xl font-bold">Application Received!</h3>
              <p className="text-sm text-emerald-800">
                Thank you for your interest in Tayaba Enterprises. Our HR department will review your resume and contact short-listed candidates.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green-hover transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hassan Ahmed"
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
                    placeholder="hassan@example.com"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-XXXXXXX"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Position Applied For *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    <option value="Photocopier Technician / Engineer">Photocopier Technician / Engineer</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="Accountant / Finance Manager">Accountant / Finance Manager</option>
                    <option value="InPage Urdu / English Typist">InPage Urdu / English Typist</option>
                    <option value="Front Desk Receptionist">Front Desk Receptionist</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Upload Curriculum Vitae (CV / Resume)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-slate-50 text-center text-xs text-gray-500 hover:border-brand-green transition cursor-pointer flex items-center justify-center gap-2">
                  <FileUp className="w-5 h-5 text-brand-green" />
                  <span>PDF or Word format (You can also email directly to tayaba_enterprises@yahoo.com)</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Cover Note / Experience Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your experience with Canon, Konica, Ricoh machines or relevant work history..."
                  className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>

              {submitError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold p-3 rounded-lg">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Sending...' : 'Submit Job Application'}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
