import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HardHat,
  MessageCircle,
  FileSpreadsheet,
  Building,
  Target,
  ArrowRight,
  BookOpen
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us & Engineering Training Philosophy | Cost & Calculation's",
  description:
    "Learn about Cost & Calculation's, our online engineering training system, instructor background, and authentic certificate of completion.",
  alternates: {
    canonical: "https://costcalculations.org/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "About Us", url: `${BASE_URL}/about` },
  ]);

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      {/* Header Banner */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-16 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF8A00]/40">
            <ShieldCheck className="w-4 h-4" />
            <span>Engineering Excellence &amp; Education</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            About Cost &amp; Calculation&apos;s
          </h1>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
            Dedicated to empowering civil engineers, diploma holders, and contractors with practical calculation methods, transparent BOQs, and bulletproof cost controls.
          </p>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1464C0]">
              <Target className="w-4 h-4 text-[#FF8A00]" />
              <span>Our Purpose &amp; Mission</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Why We Focus on Practical Construction Math, Not Abstract Theory
            </h2>

            <p className="text-gray-700 text-xs sm:text-base leading-relaxed">
              In Pakistan and the Gulf construction markets, the role of a <strong>Quantity Surveyor</strong> is critical. Every cubic foot of concrete, ton of steel rebar, square foot of plaster, and variation claim directly impacts the company’s profit margins.
            </p>

            <p className="text-gray-700 text-xs sm:text-base leading-relaxed">
              Yet, many engineering graduates and DAE civil students enter the job market without ever having prepared a full, itemized Bill of Quantities (BOQ) or analyzed a real tender document. <strong>Cost &amp; Calculation&apos;s</strong> was founded to bridge this exact industry gap.
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F7FB] border border-gray-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700">
                  <strong>Drawing-Driven:</strong> Every calculation is extracted directly from active architectural, structural, and MEP drawing sets.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F7FB] border border-gray-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700">
                  <strong>Contract-Compliant:</strong> Learn to read the fine print in tender conditions, avoid contractor penalties, and validate subcontractor claims.
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F4F7FB] border border-gray-100">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700">
                  <strong>Practical Tools:</strong> Master Microsoft Excel templates, Bar Bending Schedules (BBS), and standardized measurement formats.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative" style={{ position: "relative" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200 aspect-4/3" style={{ position: "relative" }}>
              <Image
                src="/images/online-student-mentorship.jpg"
                alt="Practical Online Engineering Training & Quantity Surveying Studies"
                fill
                sizes="(max-width: 1024px) 100vw, 550px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructor & Guidance Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F4F7FB] border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-gray-200 shadow-sm sm:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-[#1464C0] shadow-md mb-3 bg-gray-100" style={{ position: "relative" }}>
                  <Image
                    src="/images/site-inspection.jpg"
                    alt="Lead Quantity Surveying Instructor"
                    fill
                    sizes="(max-width: 640px) 112px, 144px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">Lead Instructor &amp; QS</h3>
                <p className="text-[11px] sm:text-xs text-[#FF8A00] font-bold uppercase tracking-wider">
                  Cost &amp; Calculation&apos;s
                </p>
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0B1F3A] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    <span>1-on-1 Drawing Guidance</span>
                  </span>
                </div>
              </div>

              <div className="md:col-span-8 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1464C0] uppercase tracking-wider">
                  <HardHat className="w-4 h-4 text-[#FF8A00]" />
                  <span>Real Field Experience</span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#0B1F3A]">
                  Direct Mentorship from Practicing Industry Professionals
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Our training is led by seasoned quantity surveyors and civil engineers with extensive hands-on experience in building estimation, BOQ formulation, subcontractor billing management, and site variation claims across commercial and residential projects in Pakistan.
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  We do not believe in automated, impersonal video libraries where students get stuck. Every student is connected directly with the instructor via WhatsApp to review their calculation sheets, correct takeoff errors, and discuss live site problems.
                </p>
                <div className="pt-1 flex flex-wrap gap-2 sm:gap-2.5">
                  <span className="text-[11px] sm:text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                    &bull; 100% Practical Drawing Takeoffs
                  </span>
                  <span className="text-[11px] sm:text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                    &bull; Automated Excel Templates Provided
                  </span>
                  <span className="text-[11px] sm:text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium">
                    &bull; Real Tender Documents Dissected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE SECTION */}
      <section id="certificate-section" className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
            <Award className="w-4 h-4" />
            <span>Formal Training Credential</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Certificate of Training Completion
          </h2>
          <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
            Demonstrate your practical competence to prospective employers in Pakistan and overseas. Below is an interactive preview of the certificate awarded upon project submission.
          </p>
        </div>

        {/* Official Certificate Image Display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-[#0B1F3A] bg-[#FCFDFE] p-2 sm:p-4">
            <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-xl border border-amber-500/30 bg-white shadow-inner" style={{ position: "relative" }}>
              <Image
                src="/images/certificate-sample.jpg"
                alt="Official Certificate of Training Completion - Cost & Calculation's"
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-contain"
                priority
              />
            </div>
            {/* Action & Verification bar below certificate */}
            <div className="mt-3 sm:mt-4 pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 sm:px-4 text-xs">
              <div className="flex items-center gap-2 text-gray-600 text-center sm:text-left">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                <span>
                  <strong>Official Verifiable Format:</strong> Includes Candidate Name, Course ID, Official Gold Seal &amp; Instructor Signatures.
                </span>
              </div>
              <a
                href="/images/certificate-sample.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold px-4 py-2 rounded-lg transition-colors shrink-0 shadow-xs"
              >
                <span>View Full Resolution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Certificate Validation Criteria */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-10 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200">
          <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-2.5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#1464C0]" />
            <span>Certificate Award Criteria:</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0]"></span>
              <span>Complete measurement of a full residential or commercial drawing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0]"></span>
              <span>Accurate Bar Bending Schedule (BBS) calculations for RCC members</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0]"></span>
              <span>Preparation of an itemized Bill of Quantities (BOQ) with rate analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0]"></span>
              <span>Subcontractor Interim Payment Certificate (IPC) simulation</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Begin Your Quantity Surveying Training?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto">
            Contact us today on WhatsApp at <strong>0307-2963487</strong> to reserve your seat in the upcoming batch.
          </p>
          <div className="pt-1 sm:pt-2">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20to%20enroll%20in%20your%20training%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
