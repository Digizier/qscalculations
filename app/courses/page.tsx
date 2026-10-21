import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  Check,
  Users,
  Compass,
  Laptop
} from "lucide-react";
import { COURSES } from "@/data/courses";

export const metadata: Metadata = {
  title: "Quantity Surveying Courses & Training Programs",
  description:
    "Comprehensive practical training in Quantity Surveying, BOQ Preparation, Construction Cost Estimation, EVM, and Subcontractor Billing based on real Pakistani blueprints.",
};

export default function CoursesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#FF8A00]/40">
            <GraduationCap className="w-4 h-4" />
            <span>Professional Training Programs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Online Quantity Surveying &amp; Cost Estimation Training
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Gain practical, job-ready capabilities in Bill of Quantities (BOQ) preparation, rate analysis, tender evaluations, and project cost control using real-world construction drawings.
          </p>
        </div>
      </section>

      {/* Target Audience Bar */}
      <section className="bg-[#F4F7FB] py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-sm text-[#0B1F3A]">DAE Civil &amp; B.Sc Civil</h2>
                <p className="text-xs text-gray-500 mt-1">Fresh graduates seeking high-paying estimation &amp; office QS jobs.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#FF8A00] flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-sm text-[#0B1F3A]">Site Supervisors</h2>
                <p className="text-xs text-gray-500 mt-1">Field supervisors transitioning into commercial and billing roles.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-sm text-[#0B1F3A]">Contractors &amp; Builders</h2>
                <p className="text-xs text-gray-500 mt-1">Accurately price tender bids and prevent site cost overruns.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-green-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-sm text-[#0B1F3A]">Gulf Aspirants</h2>
                <p className="text-xs text-gray-500 mt-1">Engineers preparing for Middle East (UAE, KSA, Qatar) QS roles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses List */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        {COURSES.map((course, index) => (
          <div
            key={course.id}
            id={course.slug}
            className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow overflow-hidden scroll-mt-28"
          >
            <div className="p-6 sm:p-10 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="inline-block bg-[#0B1F3A] text-white text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Track 0{index + 1}: {course.badge}
                </span>
                <span className="text-xs font-semibold text-[#1464C0] bg-blue-50 px-3 py-1 rounded-md">
                  4 In-Depth Practical Modules
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-2">
                {course.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-500 font-medium mb-6 italic">
                {course.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                {course.shortDescription}
              </p>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {course.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="p-5 rounded-2xl bg-[#F4F7FB] border border-gray-100 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
                        {mod.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-[#0B1F3A]">
                      {mod.title}
                    </h3>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {mod.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real project drawing sets &amp; automated Excel templates included</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Full Syllabus &amp; FAQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/923072963487?text=${encodeURIComponent(
                      `Hello Cost & Calculation's, I am interested in admission for: ${course.title}. Please provide batch timings, prerequisites, and fee schedule.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Direct Admission CTA */}
      <section className="bg-[#0B1F3A] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Unsure Which Course Matches Your Experience?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Send your background details (educational degree and current role) on WhatsApp. Our instructor will recommend the ideal learning track.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20guidance%20on%20which%20Quantity%20Surveying%20course%20suits%20my%20career%20goals."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Free Course Guidance on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
