import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  HelpCircle
} from "lucide-react";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Contact Us & WhatsApp Inquiries | Cost & Calculation's",
  description:
    "Get in touch with Cost & Calculation's for Quantity Surveying courses, BOQ preparation, and construction cost consultancy. WhatsApp 0307-2963487.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-16 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF8A00]/40">
            <MessageCircle className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Contact Cost &amp; Calculation&apos;s
          </h1>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
            Have questions about upcoming course batches or need a quotation for BOQ preparation? Send an enquiry directly to our official WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className="text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
                Official Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-0.5 sm:mt-1 mb-2 sm:mb-3">
                Let&apos;s Discuss Your Training or Project
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We respond promptly to all student and client inquiries. WhatsApp is our fastest channel for sharing drawing sets and answering batch queries.
              </p>
            </div>

            {/* Direct Cards - 2-Column Mobile Grid! */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20have%20an%20enquiry%20regarding%20Quantity%20Surveying%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-green-50/60 border border-green-200 hover:border-green-400 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform mb-2">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-green-700 uppercase tracking-wider block">
                    WhatsApp
                  </span>
                  <p className="text-xs sm:text-lg font-bold text-[#0B1F3A] mt-0.5">
                    0307-2963487
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 hidden sm:block">
                  Fastest response &amp; drawing share.
                </p>
              </a>

              {/* Phone Call Card */}
              <a
                href="tel:03072963487"
                className="flex flex-col justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F4F7FB] border border-gray-200 hover:border-blue-300 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform mb-2">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Phone Call
                  </span>
                  <p className="text-xs sm:text-lg font-bold text-[#0B1F3A] mt-0.5">
                    0307-2963487
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 hidden sm:block">
                  Mon to Sat direct guidance.
                </p>
              </a>

              {/* Email Card */}
              <a
                href="mailto:costcalculations2026@gmail.com"
                className="flex flex-col justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <p className="text-[11px] sm:text-sm font-bold text-[#0B1F3A] mt-0.5 truncate group-hover:text-[#1464C0]" title="costcalculations2026@gmail.com">
                    costcalculations2026@gmail.com
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 hidden sm:block">
                  For formal proposals &amp; RFPs.
                </p>
              </a>

              {/* Location Card */}
              <div className="flex flex-col justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200">
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-orange-50 text-[#FF8A00] flex items-center justify-center shrink-0 mb-2">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block">
                    Hub
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0B1F3A] mt-0.5">
                    Lahore, Pakistan
                  </p>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1 hidden sm:block">
                  Online classes nationwide &amp; Gulf.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <WhatsAppForm defaultEnquiryType="Course Information" />
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F4F7FB] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Common queries regarding our admissions and consultancy process</p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-1">
                How do online classes take place?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our classes are conducted through practical screen-sharing sessions where we open actual construction drawings, demonstrate live quantity measurements in Excel, and review student calculation sheets with direct 1-on-1 feedback.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-1">
                Is this training suitable for DAE civil diploma holders?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, absolutely. A large portion of our students are DAE civil graduates and site supervisors aiming to transition from strenuous site work to office-based estimation, billing, and tender management roles.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-1">
                How can I hire your team for BOQ preparation for my private project?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Simply message us on WhatsApp with your architectural and structural PDF drawing sets. We will review the drawings and send you a formal quotation and turnaround timeline within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
