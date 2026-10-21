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
      <section className="bg-[#0B1F3A] text-white py-14 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FF8A00]/40">
            <MessageCircle className="w-4 h-4" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Cost &amp; Calculation&apos;s
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Have questions about upcoming course batches or need a quotation for BOQ preparation? Send an enquiry directly to our official WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
                Official Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mt-1 mb-3">
                Let&apos;s Discuss Your Training or Project
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We respond promptly to all student and client inquiries. WhatsApp is our fastest channel for sharing drawing sets and answering batch queries.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20have%20an%20enquiry%20regarding%20Quantity%20Surveying%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-green-50/60 border border-green-200 hover:border-green-400 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wider">
                    WhatsApp (Fastest Response)
                  </span>
                  <p className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    0307-2963487
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Click to open chat directly with our course advisor.
                  </p>
                </div>
              </a>

              {/* Phone Call Card */}
              <a
                href="tel:03072963487"
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#F4F7FB] border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-[#FF8A00]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Direct Mobile Support
                  </span>
                  <p className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    0307-2963487
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Available Monday to Saturday for calls &amp; guidance.
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Official Email
                  </span>
                  <p className="text-base font-bold text-[#0B1F3A] mt-0.5">
                    info@qscalculations.com
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    For corporate proposals &amp; large drawing sets.
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF8A00] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Training Hub
                  </span>
                  <p className="text-sm font-bold text-[#0B1F3A] mt-0.5">
                    Lahore, Punjab, Pakistan
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Online interactive system serving students across Pakistan and overseas.
                  </p>
                </div>
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
      <section className="py-14 bg-[#F4F7FB] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Common queries regarding our admissions and consultancy process</p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-sm text-[#0B1F3A] mb-1">
                How do online classes take place?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our classes are conducted through practical screen-sharing sessions where we open actual construction drawings, demonstrate live quantity measurements in Excel, and review student calculation sheets with direct 1-on-1 feedback.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-sm text-[#0B1F3A] mb-1">
                Is this training suitable for DAE civil diploma holders?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, absolutely. A large portion of our students are DAE civil graduates and site supervisors aiming to transition from strenuous site work to office-based estimation, billing, and tender management roles.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-gray-200">
              <h3 className="font-bold text-sm text-[#0B1F3A] mb-1">
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
