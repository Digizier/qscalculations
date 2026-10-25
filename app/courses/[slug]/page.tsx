import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Check,
  ChevronRight,
  Laptop,
  Award,
  ShieldCheck,
  BookOpen
} from "lucide-react";
import { COURSES } from "@/data/courses";
import WhatsAppForm from "@/components/WhatsAppForm";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema, getBreadcrumbSchema, BASE_URL } from "@/lib/schema";

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
    alternates: {
      canonical: `${BASE_URL}/courses/${course.slug}`,
    },
    openGraph: {
      title: `${course.title} | Cost & Calculation's`,
      description: course.shortDescription,
      url: `${BASE_URL}/courses/${course.slug}`,
      images: [
        {
          url: `${BASE_URL}/images/og-share-banner.jpg`,
          width: 1200,
          height: 630,
          alt: `${course.title} - Cost & Calculation's`,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Courses", url: `${BASE_URL}/courses` },
    { name: course.title, url: `${BASE_URL}/courses/${course.slug}` },
  ]);

  const courseSchema = getCourseSchema(course);

  return (
    <div className="bg-white min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={courseSchema} />
      {/* Breadcrumbs */}
      <div className="bg-[#F4F7FB] border-b border-gray-200 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#0B1F3A]">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/courses" className="hover:text-[#0B1F3A]">
              Courses
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#0B1F3A] font-semibold truncate max-w-[200px] sm:max-w-none">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Course Hero Banner */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#FF8A00]/20 text-[#FF8A00] px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-[#FF8A00]/40">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{course.badge}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-300 italic">
              {course.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pt-1">
              {course.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-10">
            {/* Learning Outcomes - 2 Columns on Mobile! */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#1464C0]" />
                <span>What You Will Master</span>
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-gray-700 font-medium leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Module Breakdown */}
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1464C0]" />
                <span>Modules &amp; Syllabus</span>
              </h2>

              <div className="space-y-3">
                {course.modules.map((mod) => (
                  <div
                    key={mod.number}
                    className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-2xs hover:border-[#1464C0] transition-colors"
                  >
                    <span className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-wider">
                      {mod.number}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A] mb-2">
                      {mod.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-gray-600">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1464C0] shrink-0 mt-1.5"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience - 2 Columns on Mobile! */}
            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-[#0B1F3A]">
                Who Should Enroll?
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {course.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#F4F7FB] border border-gray-200 text-[11px] sm:text-xs text-gray-700 font-medium flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] shrink-0"></div>
                    <span className="line-clamp-2">{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites & Software - 2 Columns on Mobile! */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1464C0]" />
                  <span>Prerequisites</span>
                </h3>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-600">
                  {course.prerequisites.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] mb-2 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-[#1464C0]" />
                  <span>Tools Covered</span>
                </h3>
                <ul className="space-y-1.5 text-[11px] sm:text-xs text-gray-600">
                  {course.softwareCovered.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive WhatsApp Form */}
            <div className="pt-4">
              <WhatsAppForm
                defaultCourseOrService={course.title}
                defaultEnquiryType="Course Information"
              />
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#F4F7FB] rounded-2xl border border-gray-200 p-4 sm:p-5 space-y-4 sticky top-24">
              <h3 className="text-base font-bold text-[#0B1F3A] pb-2 border-b border-gray-200">
                Course Summary
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 text-xs">
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Track:</span>
                  <span className="font-bold text-[#0B1F3A]">{course.badge}</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Mode:</span>
                  <span className="font-bold text-[#0B1F3A]">Online Practical</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Language:</span>
                  <span className="font-bold text-[#0B1F3A]">Urdu / English</span>
                </div>
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase tracking-wider">Certification:</span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Included</span>
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200 space-y-2">
                <a
                  href={`https://wa.me/923072963487?text=${encodeURIComponent(
                    `Hello Cost & Calculation's, I want to get the fee and admission details for: ${course.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire for This Course</span>
                </a>

                <a
                  href="tel:03072963487"
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0B1F3A] border border-gray-300 font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-colors"
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
