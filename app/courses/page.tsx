import React from "react";
import Link from "next/link";
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
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Practical Quantity Surveying & BOQ Courses | Batch 2026 Enrollments",
  description:
    "Comprehensive practical training in Quantity Surveying, BOQ Preparation, Construction Cost Estimation, EVM, and Subcontractor Billing based on real Pakistani blueprints.",
  alternates: {
    canonical: "https://costcalculations.org/courses",
  },
};

export default function CoursesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Courses & Training", url: `${BASE_URL}/courses` },
  ]);

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quantity Surveying Courses & Training Programs",
    itemListElement: COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: c.title,
        description: c.shortDescription,
        url: `${BASE_URL}/courses/${c.slug}`,
        provider: {
          "@type": "EducationalOrganization",
          name: "Cost & Calculation's",
          sameAs: BASE_URL,
        },
      },
    })),
  };

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseListSchema} />
      {/* Page Header */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-16 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-[#FF8A00]/20 text-[#FF8A00] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF8A00]/40">
            <GraduationCap className="w-4 h-4" />
            <span>Professional Training Programs</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
            Quantity Surveying &amp; Estimation Courses
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Gain practical, job-ready capabilities in Bill of Quantities (BOQ) preparation, rate analysis, tender evaluations, and project cost control using real-world construction drawings.
          </p>
        </div>
      </section>

      {/* Target Audience Bar - 2 Columns on Mobile! */}
      <section className="bg-[#F4F7FB] py-6 sm:py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            <div className="flex items-start gap-2.5 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">DAE &amp; B.Sc Civil</h2>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-2">Fresh graduates seeking estimation &amp; office QS roles.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FF8A00] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">Site Supervisors</h2>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-2">Field supervisors transitioning into commercial &amp; billing.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1464C0] flex items-center justify-center shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">Builders &amp; Contractors</h2>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-2">Accurately price tender bids and avoid cost leaks.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 sm:p-4 bg-white rounded-xl border border-gray-200 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-green-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">Gulf Aspirants</h2>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 line-clamp-2">Engineers preparing for UAE, KSA &amp; Qatar QS jobs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses List */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-10">
        {COURSES.map((course, index) => (
          <div
            key={course.id}
            id={course.slug}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow overflow-hidden scroll-mt-24"
          >
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-block bg-[#0B1F3A] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Track 0{index + 1}: {course.badge}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#1464C0] bg-blue-50 px-2.5 py-0.5 rounded-md">
                  4 In-Depth Practical Modules
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#0B1F3A] mb-1">
                {course.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3 italic">
                {course.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                {course.shortDescription}
              </p>

              {/* Modules Grid - 2 cols on tablet & desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-4 sm:my-6">
                {course.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#F4F7FB] border border-gray-100 space-y-1.5"
                  >
                    <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">
                      {mod.number}
                    </span>
                    <h3 className="font-bold text-xs sm:text-sm text-[#0B1F3A]">
                      {mod.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-gray-600 pt-1">
                      {mod.topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Actions - Single clear action button */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 text-center sm:text-left">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Real project drawing sets &amp; automated Excel templates included</span>
                </div>

                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-xl transition-colors shadow-2xs"
                >
                  <span>View Full Syllabus &amp; Enroll</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Direct Guidance CTA */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Unsure Which Course Matches Your Experience?
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto">
            Send your educational degree and current role on WhatsApp. Our instructor will recommend the ideal learning track.
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20guidance%20on%20which%20Quantity%20Surveying%20course%20suits%20my%20career%20goals."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md"
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
