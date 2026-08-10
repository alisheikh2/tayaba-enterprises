'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Mail, Send, CheckCircle2, FileUp, AlertCircle, FileText, X } from 'lucide-react';

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvFileError, setCvFileError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Photocopier Technician / Engineer',
    message: ''
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvFileError('');
    const file = e.target.files?.[0];
    if (!file) {
      setCvFile(null);
      return;
    }

    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValidExtension = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValidExtension) {
      setCvFileError('Invalid file type. Only PDF or Word documents (.pdf, .doc, .docx) are accepted.');
      setCvFile(null);
      e.target.value = '';
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setCvFileError('File size exceeds 5MB limit. Please upload a smaller file.');
      setCvFile(null);
      e.target.value = '';
      return;
    }

    setCvFile(file);
  };

  const removeFile = () => {
    setCvFile(null);
    setCvFileError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (cvFileError) {
      return;
    }

    setSubmitting(true);

    try {
      let uploadedCvUrl = '';
      let uploadedCvName = '';

      if (cvFile) {
        const uploadData = new FormData();
        uploadData.append('file', cvFile);

        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });

        if (uploadRes.ok) {
          const uploadJson = await uploadRes.json();
          uploadedCvUrl = uploadJson.url;
          uploadedCvName = uploadJson.originalName || cvFile.name;
        } else {
          const errData = await uploadRes.json().catch(() => ({}));
          throw new Error(errData.error || 'Failed to upload CV file. Please try again.');
        }
      }

      let fullMessage = `Position Applied For: ${formData.position}\n\n${formData.message}`;
      if (uploadedCvUrl) {
        fullMessage += `\n\n--- ATTACHED CV ---\nFile: ${uploadedCvName}\nURL: ${uploadedCvUrl}`;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'career',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: fullMessage,
        }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(data.error || 'Failed to send your application. Please try again.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner — 100% Responsive for Mobile (375px) & Desktop */}
        <div className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 sm:mb-10 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-green" /> Join Our Team
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-3 sm:mt-4 mb-3 sm:mb-4 leading-tight">
              Careers at Tayaba Enterprises
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Build your career with Karachi&apos;s established photocopier and printing solutions firm. We are always seeking talented technicians, sales executives, and administrative professionals.
            </p>

            <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-900/60 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-brand-green" /> Direct CV Email:
              </span>
              <a href="mailto:tayaba_enterprises@yahoo.com" className="text-emerald-300 underline font-semibold hover:text-white transition break-all">
                tayaba_enterprises@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Online Career Application
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
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
                onClick={() => {
                  setSubmitted(false);
                  setCvFile(null);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: 'Photocopier Technician / Engineer',
                    message: ''
                  });
                }}
                className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green-hover transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="applicant-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hassan Ahmed"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label htmlFor="applicant-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
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
                  <label htmlFor="applicant-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    id="applicant-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300-XXXXXXX"
                    className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                  />
                </div>

                <div>
                  <label htmlFor="applicant-position" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Position Applied For *
                  </label>
                  <select
                    id="applicant-position"
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

              {/* CV File Upload Field */}
              <div>
                <label htmlFor="cv-file-input" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Upload Curriculum Vitae (CV / Resume) — PDF or Word (Max 5MB)
                </label>
                
                <div className="mt-1">
                  {!cvFile ? (
                    <label 
                      htmlFor="cv-file-input" 
                      className="border-2 border-dashed border-gray-300 hover:border-brand-green bg-slate-50 hover:bg-emerald-50/50 rounded-lg p-5 text-center flex flex-col items-center justify-center cursor-pointer transition"
                    >
                      <FileUp className="w-8 h-8 text-brand-green mb-1" />
                      <span className="text-sm font-semibold text-gray-800">
                        Click to select CV file (PDF, DOC, DOCX)
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        Maximum file size: 5MB
                      </span>
                      <input
                        id="cv-file-input"
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3.5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <FileText className="w-6 h-6 text-brand-green flex-shrink-0" />
                        <div className="truncate">
                          <p className="text-xs font-bold text-emerald-950 truncate">
                            {cvFile.name}
                          </p>
                          <p className="text-[11px] text-emerald-700">
                            {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1 text-emerald-800 hover:text-rose-700 hover:bg-rose-50 rounded transition flex-shrink-0"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {cvFileError && (
                    <div className="mt-2 text-xs font-semibold text-rose-700 flex items-center gap-1.5 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{cvFileError}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="applicant-message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Cover Note / Experience Details
                </label>
                <textarea
                  id="applicant-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your experience with Canon, Konica, Ricoh machines or relevant work history..."
                  className="w-full bg-slate-50 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>

              {submitError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Uploading & Submitting Application...' : 'Submit Job Application'}</span>
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
