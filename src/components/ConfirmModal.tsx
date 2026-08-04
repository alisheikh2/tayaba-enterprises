'use client';

import React, { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: 'danger' | 'brand';
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * Tayaba Enterprises branded confirmation dialog.
 * Replaces the native browser confirm()/alert() popup (the plain
 * "localhost:3000 says" window) with a centered, responsive,
 * animated modal styled in the site's official brand colors.
 */
export default function ConfirmModal({
  open,
  title = 'Please Confirm',
  message,
  confirmLabel = 'Yes, Continue',
  cancelLabel = 'Cancel',
  tone = 'danger',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  const [shouldRender, setShouldRender] = useState(open);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setClosing(false);
    } else if (shouldRender) {
      setClosing(true);
      const t = setTimeout(() => setShouldRender(false), 180);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onCancel]);

  if (!shouldRender) return null;

  const accent = tone === 'danger' ? 'rose' : 'brand-green';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="te-confirm-modal-title"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm te-animate-backdrop`}
        onClick={onCancel}
      />

      {/* Modal Panel — always centered, fully responsive */}
      <div
        className={`relative w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200
          mx-auto text-center overflow-hidden
          ${closing ? 'te-animate-modal-out' : 'te-animate-modal-in'}`}
      >
        {/* Brand accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-navy via-brand-green to-brand-navy" />

        <button
          onClick={onCancel}
          aria-label="Close dialog"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 sm:px-8 pt-8 pb-7 flex flex-col items-center">
          <div
            className={`te-animate-icon-pop w-14 h-14 rounded-full flex items-center justify-center mb-4
              ${tone === 'danger' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-brand-green'}`}
          >
            <AlertTriangle className="w-7 h-7" />
          </div>

          <h2
            id="te-confirm-modal-title"
            className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2"
          >
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-7 max-w-xs sm:max-w-sm mx-auto">
            {message}
          </p>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-3 w-full">
            <button
              onClick={onCancel}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {cancelLabel}
            </button>
            <button
              onClick={onConfirm}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-bold text-white shadow-lg transition-all transform hover:-translate-y-0.5
                ${tone === 'danger'
                  ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-900/20'
                  : 'bg-brand-green hover:bg-brand-green-hover shadow-emerald-900/20'}`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>

        {/* Tayaba Enterprises footer tag */}
        <div className="bg-gray-50 border-t border-gray-100 py-2.5">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">
            Tayaba Enterprises &middot; Admin Panel
          </span>
        </div>
      </div>
    </div>
  );
}
