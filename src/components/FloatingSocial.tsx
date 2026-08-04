'use client';

import React from 'react';
import { Mail, MessageCircle, Facebook, PhoneCall } from 'lucide-react';

export default function FloatingSocial() {
  const whatsappUrl = "https://wa.me/923340367336?text=Hi,%20I'm%20interested%20in%20your%20printing/photocopier%20services";
  const emailUrl = "mailto:tayaba_enterprises@yahoo.com";
  const facebookUrl = "https://facebook.com/tayabaEnterprises";

  return (
    <>
      {/* Fixed Left Sidebar Social Icons */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1 shadow-lg group">
        {/* WhatsApp Icon */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5c] text-white p-3 rounded-r-lg transition-all duration-300 flex items-center gap-3 w-12 hover:w-44 overflow-hidden group/item shadow-md"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 flex-shrink-0" />
          <span className="font-semibold text-xs whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
            Chat on WhatsApp
          </span>
        </a>

        {/* Email Icon */}
        <a
          href={emailUrl}
          className="bg-brand-navy hover:bg-brand-navy-dark text-white p-3 rounded-r-lg transition-all duration-300 flex items-center gap-3 w-12 hover:w-40 overflow-hidden group/item shadow-md"
          title="Send Email"
          aria-label="Send Email"
        >
          <Mail className="w-6 h-6 flex-shrink-0" />
          <span className="font-semibold text-xs whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
            Email Us
          </span>
        </a>

        {/* Facebook Icon */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] hover:bg-[#166fe5] text-white p-3 rounded-r-lg transition-all duration-300 flex items-center gap-3 w-12 hover:w-40 overflow-hidden group/item shadow-md"
          title="Visit Facebook Page"
          aria-label="Visit Facebook Page"
        >
          <Facebook className="w-6 h-6 flex-shrink-0" />
          <span className="font-semibold text-xs whitespace-nowrap opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
            Facebook
          </span>
        </a>
      </div>

      {/* Floating Bottom-Right WhatsApp Quick Button (Mobile & Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5c] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 border-2 border-white animate-bounce"
          aria-label="Quick WhatsApp Contact"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="hidden md:inline font-bold text-sm pr-1">WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}
