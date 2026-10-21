import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cost & Calculation's",
  description:
    "Terms & Conditions governing training courses and consultancy services provided by Cost & Calculation's (QSCalculations.com).",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1464C0] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3 mb-6 sm:mb-8 pb-6 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-gray-500">
            Effective Date: January 2026 &bull; Domain: QSCalculations.com
          </p>
        </div>

        <div className="prose prose-sm sm:prose-base text-gray-700 max-w-none space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">1. Agreement to Terms</h2>
            <p>
              By accessing and using <strong>QSCalculations.com</strong> or enrolling in courses and consultancy services offered by <strong>Cost &amp; Calculation&apos;s</strong>, you agree to comply with and be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">2. Educational Training Services</h2>
            <p>
              Our courses are practical engineering and vocational training programs focused on Quantity Surveying, BOQ Preparation, Tender Analysis, and Project Cost Control.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Course materials, Excel calculation templates, and drawing sets provided during training are for individual student learning purposes.</li>
              <li>Completion certificates are awarded based on verified fulfillment of coursework assignments and calculation evaluations.</li>
              <li>We do not guarantee third-party job placements or external licensing; training is designed to build practical professional capability.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">3. Professional Consultancy Services</h2>
            <p>
              For commercial clients engaging our services for Bill of Quantities (BOQ) preparation, Tender Bidding, or Subcontractor Billing:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Estimates and takeoffs are calculated with utmost engineering diligence based strictly on drawings, specifications, and data provided by the client.</li>
              <li>Any changes or revisions in architectural or structural drawing sets post-commencement are treated as variations subject to mutual scope adjustments.</li>
              <li>All project drawings, confidential rate calculations, and proprietary client documents are treated with absolute professional confidentiality.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">4. Intellectual Property</h2>
            <p>
              The branding, logo, visual layout, and proprietary calculation templates on this website are the intellectual property of <strong>Cost &amp; Calculation&apos;s</strong>. Unauthorized reproduction or commercial distribution without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">5. Governing Law &amp; Inquiries</h2>
            <p>
              These terms are governed by the laws of Pakistan. For any contractual queries or clarification, please reach us directly via WhatsApp at <strong>0307-2963487</strong> or email <a href="mailto:costcalculations2026@gmail.com" className="font-bold underline text-[#1464C0]">costcalculations2026@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
