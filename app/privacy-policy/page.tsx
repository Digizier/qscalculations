import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Cost & Calculation's",
  description:
    "Privacy Policy for Cost & Calculation's (QSCalculations.com). Learn how we protect student and client information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1464C0] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4 mb-10 pb-8 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency &amp; Trust</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: January 2026 &bull; Domain: QSCalculations.com
          </p>
        </div>

        <div className="prose prose-sm sm:prose-base text-gray-700 max-w-none space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">1. Introduction</h2>
            <p>
              At <strong>Cost &amp; Calculation&apos;s</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operating the website <strong>https://QSCalculations.com</strong>, we are committed to respecting and protecting the privacy of our website visitors, students, and consultancy clients. This Privacy Policy outlines what information we collect, how it is used, and how your data is safeguarded.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">2. Information We Collect</h2>
            <p>
              We do not require user account registration, login credentials, or credit card information on this website. The information we may collect includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                <strong>Direct Enquiries:</strong> When you use our enquiry form or contact us via WhatsApp, you provide your name, phone number, email address, experience level, and message content.
              </li>
              <li>
                <strong>Project Drawings:</strong> For consultancy services, drawings and project documents shared via WhatsApp or email remain strictly confidential.
              </li>
              <li>
                <strong>Standard Web Metrics:</strong> Non-personally identifiable server logs such as browser type, referring URL, and page request counts.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">3. How Your Information Is Used</h2>
            <p>
              Any information you provide is utilized solely for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Responding directly to your course enrollment queries or consultancy requests.</li>
              <li>Providing batch schedules, calculation templates, and certification validation.</li>
              <li>Preparing project cost proposals and Bill of Quantities (BOQ) deliverables.</li>
            </ul>
            <p className="font-semibold text-gray-800">
              We never sell, rent, or trade your personal or business information to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">4. WhatsApp Communication</h2>
            <p>
              Our website links directly to WhatsApp (wa.me) for fast, transparent communication. When you click WhatsApp links or submit an enquiry, your message is transferred to the official WhatsApp application under WhatsApp&apos;s end-to-end encrypted protocol.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-[#0B1F3A]">5. Contact Us Regarding Privacy</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our administrative team via WhatsApp or telephone at <strong>0307-2963487</strong> or via email at <strong>info@qscalculations.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
