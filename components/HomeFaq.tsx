"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HOMEPAGE_FAQS, getFaqSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = getFaqSchema(HOMEPAGE_FAQS);

  return (
    <section className="py-10 sm:py-14 md:py-18 bg-[#F8FAFC] border-t border-gray-200 relative">
      {/* Inject FAQPage Schema for Google Rich Snippets & AEO */}
      <JsonLd data={faqSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FF8A00]/15 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF8A00]/30">
            <HelpCircle className="w-4 h-4" />
            <span>Answers &amp; Verification</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Everything you need to know about course admissions, live online classes, drawing takeoffs, and verified certificates.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {HOMEPAGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl sm:rounded-2xl bg-white border border-gray-200 transition-all shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-xs sm:text-sm md:text-base text-[#0B1F3A] hover:text-[#1464C0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start gap-2.5">
                    <span className="text-[#FF8A00] font-black shrink-0">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-orange-50 text-[#FF8A00] rotate-180" : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAFAFA]">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">
              Have a specific question about upcoming batches?
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Chat directly with our lead instructor on WhatsApp for quick guidance.
            </p>
          </div>
          <a
            href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20have%20a%20question%20regarding%20Quantity%20Surveying%20course%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
