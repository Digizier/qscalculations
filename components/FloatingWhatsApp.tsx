"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-18 md:bottom-8 right-4 md:right-8 z-40 flex items-center gap-3">
      {/* Optional dismissible quick tooltip for desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#0B1F3A] border border-gray-200 px-3 py-2 rounded-xl shadow-lg text-xs font-semibold animate-bounce duration-1000">
          <span>Need Help? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close Tooltip"
            className="text-gray-400 hover:text-gray-600 focus:outline-hidden"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20have%20an%20enquiry%20regarding%20Quantity%20Surveying%20courses%20or%20consultancy."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 pulse-whatsapp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="sr-only">Chat on WhatsApp (0307-2963487)</span>
      </a>
    </div>
  );
}
