import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  Check,
  ChevronRight,
  Laptop,
  Award,
  HelpCircle,
  ShieldCheck,
  BookOpen
} from "lucide-react";
import { COURSES, Course } from "@/data/courses";
import WhatsAppForm from "@/components/WhatsAppForm";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | Cost & Calculation's`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-[#F4F7FB] border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#0B1F3A]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/courses" className="hover:text-[#0B1F3A]">
              Courses &amp; Training
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B1F3A] font-semibold">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Course Hero Banner */}
      <section className="bg-[#0B1F3A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#FF8A00]/40">
              <GraduationCap className="w-4 h-4" />
              <span>{course.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 italic">
              {course.subtitle}
            </p>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
              {course.shortDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/923072963487?text=${encodeURIComponent(
                  `Hello Cost & Calculation's, I am interested in enrolling in: ${course.title}. Please provide batch timings and fee details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire for This Course on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Learning Outcomes */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0B1F3A] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#1464C0]" />
                <span>What You Will Master in This Course</span>
              </h2>
              <p className="text-sm text-gray-600">
                This curriculum focuses 100% on practical calculations required on active civil engineering and contracting jobsites:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-700 font-medium">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Module Breakdown */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0B1F3A] flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-[#1464C0]" />
                <span>Detailed Course Modules &amp; Syllabus</span>
              </h2>

              <div className="space-y-4">
                {course.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="bg-white rounded-2xl border border-gray-200 p-6 shadow-2xs hover:border-[#1464C0] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
                        {mod.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">
                      {mod.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-600">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0] shrink-0 mt-1.5"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0B1F3A]">
                Who Should Enroll in This Course?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4F7FB] border border-gray-200 text-xs sm:text-sm text-gray-700 font-medium flex items-center gap-2.5"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF8A00] shrink-0"></div>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites & Software */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <h3 className="text-base font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1464C0]" />
                  <span>Prerequisites</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {course.prerequisites.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <h3 className="text-base font-bold text-[#0B1F3A] mb-3 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-[#1464C0]" />
                  <span>Tools &amp; Software Covered</span>
                </h3>
                <ul className="space-y-2 text-xs text-gray-600">
                  {course.softwareCovered.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive WhatsApp Form */}
            <div className="pt-6">
              <WhatsAppForm
                defaultCourseOrService={course.title}
                defaultEnquiryType="Course Information"
              />
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Facts Card */}
            <div className="bg-[#F4F7FB] rounded-2xl border border-gray-200 p-6 space-y-5 sticky top-28">
              <h3 className="text-lg font-bold text-[#0B1F3A] pb-3 border-b border-gray-200">
                Course Summary
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="block text-gray-500 text-xs">Training Track:</span>
                  <span className="font-bold text-[#0B1F3A]">{course.badge}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs">Learning Mode:</span>
                  <span className="font-bold text-[#0B1F3A]">Online Training System (Nationwide &amp; Gulf)</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs">Language of Instruction:</span>
                  <span className="font-bold text-[#0B1F3A]">Urdu / English (Technical Terms)</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs">Calculations Basis:</span>
                  <span className="font-bold text-[#0B1F3A]">Real Architectural &amp; Structural Drawings</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs">Certification:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1 mt-0.5">
                    <Award className="w-4 h-4" />
                    <span>Certificate of Training Completion</span>
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 text-xs">Mentor Support:</span>
                  <span className="font-bold text-[#0B1F3A]">Direct 1-on-1 WhatsApp Access</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2.5">
                <a
                  href={`https://wa.me/923072963487?text=${encodeURIComponent(
                    `Hello Cost & Calculation's, I want to get the fee and admission details for: ${course.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <a
                  href="tel:03072963487"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0B1F3A] border border-gray-300 font-bold text-sm py-3 px-4 rounded-xl transition-colors"
                >
                  <span>Call: 0307-2963487</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
