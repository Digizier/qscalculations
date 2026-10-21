import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileSpreadsheet,
  Calculator,
  HardHat,
  TrendingUp,
  Award,
  ShieldCheck,
  Building2,
  FileSearch,
  Scale,
  FolderTree,
  CreditCard,
  FileEdit,
  Activity,
  BarChart3,
  ShieldAlert,
  Handshake,
  Check
} from "lucide-react";
import { COURSES, CORE_SKILLS } from "@/data/courses";

export default function HomePage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    FileSearch: <FileSearch className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    Calculator: <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    Handshake: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    FileEdit: <FileEdit className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    CreditCard: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    Activity: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    FolderTree: <FolderTree className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    BarChart3: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
    Scale: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF8A00]" />,
  };

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0B1F3A] to-[#112a4d] text-white pt-10 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 overflow-hidden">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              {/* Top Tag Badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#FF8A00]/20 border border-[#FF8A00]/40 text-[#FF8A00] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] animate-pulse"></span>
                <span>Online Engineering Training &amp; Consulting</span>
              </div>

              {/* Main Heading - Bold, High-Contrast & Fully Visible */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight" style={{ color: "#FFFFFF" }}>
                <span className="text-white" style={{ color: "#FFFFFF" }}>Master Quantity Surveying &amp;</span>{" "}
                <span className="text-[#FF8A00] block sm:inline" style={{ color: "#FF8A00" }}>Cost Estimation</span>
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Develop practical, job-ready skills in Bill of Quantities (BOQ) preparation, tender documentation analysis, construction cost estimation, and project cost control based on real building plans.
              </p>

              {/* Key Bullet Highlights - 2 Columns on Mobile! */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0 text-[11px] sm:text-xs text-gray-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                  <span className="line-clamp-1">Real Project Drawings</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                  <span className="line-clamp-1">Tender Bidding &amp; IPC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                  <span className="line-clamp-1">EVM &amp; CBS Systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                  <span className="line-clamp-1">Direct Mentor Support</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20to%20get%20information%20about%20your%20Quantity%20Surveying%20training%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Contact phone note */}
              <div className="pt-1 text-[11px] sm:text-xs text-gray-300">
                Call for Admissions:{" "}
                <a href="tel:03072963487" className="text-white font-bold underline hover:text-[#FF8A00]">
                  0307-2963487
                </a>
              </div>
            </div>

            {/* Right Visual Frame - User's Authentic Group Study Image */}
            <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 bg-white/5 aspect-16/11 sm:aspect-4/3" style={{ position: "relative" }}>
                <Image
                  src="/images/qs-banner-group.jpg"
                  alt="Quantity Surveying Practice and Practical BOQ Training - Cost & Calculation's"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & CREDIBILITY BAR - 2 cols on mobile, 4 on desktop */}
      <section className="bg-white border-b border-gray-100 py-4 sm:py-6 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-center">
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A]">13+</span>
              <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Practical Topics</span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1464C0]">100%</span>
              <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Drawing Calculations</span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FF8A00]">BOQ &amp; EVM</span>
              <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Standard Formats</span>
            </div>
            <div className="p-2.5 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600">1-on-1</span>
              <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Mentor Guidance</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-16/10 sm:aspect-4/3 max-h-[260px] sm:max-h-none" style={{ position: "relative" }}>
                <Image
                  src="/images/boq-estimation.jpg"
                  alt="Bill of Quantities Preparation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1464C0]">
                <HardHat className="w-4 h-4 text-[#FF8A00]" />
                <span>Professional Engineering Education</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Bridging the Gap Between Engineering Theory and Real Construction Sites
              </h2>

              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                In the construction industry, precision calculations mean the difference between project profitability and catastrophic financial loss. Traditional academic curricula often focus purely on theoretical concepts, leaving engineers and diploma holders unprepared for active tender bidding, site measurements, and subcontractor claim verifications.
              </p>

              <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                <strong>Cost &amp; Calculation&apos;s</strong> was established to provide direct, calculation-focused training and technical consultancy. We guide students, fresh civil engineers (B.Sc / DAE), site supervisors, and contractors through the exact methods required to prepare a professional Bill of Quantities (BOQ), formulate accurate unit rate analyses, and execute Earned Value Management (EVM) for complex construction projects.
              </p>

              <div className="pt-1">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-[#1464C0] font-bold text-xs sm:text-sm hover:underline"
                >
                  <span>Learn more about our training philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              <span>Curriculum &amp; Training Programs</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Comprehensive Quantity Surveying Programs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Explore our structured training tracks designed specifically for civil engineering professionals, DAE students, and commercial contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#1464C0] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-4 sm:p-6">
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block bg-blue-50 text-[#1464C0] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-blue-200">
                      {course.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">4 Core Modules</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A] group-hover:text-[#1464C0] transition-colors mb-1">
                    {course.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium mb-3 italic">
                    {course.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {course.shortDescription}
                  </p>

                  {/* Key Highlights - 2 Columns on Mobile! */}
                  <div className="border-t border-gray-100 pt-3">
                    <p className="text-[10px] font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                      Key Competencies Covered:
                    </p>
                    <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-600">
                      {course.learningOutcomes.slice(0, 4).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer - Single clear, high-contrast action button */}
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full text-center bg-[#0B1F3A] hover:bg-[#1464C0] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5"
                  >
                    <span>View Course Details &amp; Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF8A00] hover:text-[#E07800] transition-colors"
            >
              <span>Explore all course modules &amp; full syllabus breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE 13 SKILLS MATRIX SECTION - 2 Columns on Mobile! */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#0B1F3A] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              <span>Complete Practical Curriculum</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              13 Core Skills Taught in Our System
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              Directly derived from field experience and practical construction workflows in Pakistan and the Gulf.
            </p>
          </div>

          {/* 2-Column Grid on Mobile for compact space saving! */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 md:gap-6">
            {CORE_SKILLS.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-[#FF8A00]/50 rounded-xl p-3 sm:p-4 md:p-5 transition-all hover:bg-white/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {iconMap[skill.icon] || <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />}
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">#{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-1 group-hover:text-[#FF8A00] transition-colors leading-tight">
                    {skill.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-300 leading-snug line-clamp-3 sm:line-clamp-none">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES & CONSULTANCY PREVIEW */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1464C0]">
                <Building2 className="w-4 h-4 text-[#FF8A00]" />
                <span>Professional Engineering Consultancy</span>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
                Accurate Construction Cost Consultancy for Contractors &amp; Owners
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                In addition to educational training, <strong>Cost &amp; Calculation&apos;s</strong> delivers professional estimation and quantity surveying services to construction businesses, architects, and private builders across Pakistan.
              </p>

              {/* 2-Column on Mobile */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1">
                <div className="p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-1">Pre-Tender Estimation</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">BOQ preparation, rate analysis, and competitive tender bidding evaluation.</p>
                </div>
                <div className="p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B1F3A] mb-1">Site Progress &amp; IPC</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-snug">Subcontractor bill auditing, variation reporting (CRF), and payment certificates.</p>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors shadow-2xs"
                >
                  <span>Explore All 10 Consultancy Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative" style={{ position: "relative" }}>
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 aspect-16/10 sm:aspect-4/3 max-h-[280px] sm:max-h-none" style={{ position: "relative" }}>
                <Image
                  src="/images/online-student-mentorship.jpg"
                  alt="Online Engineering Student Mentorship & Drawing Calculation - Cost & Calculation's"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE TEASER SECTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1464C0] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-6 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#FF8A00] px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Verified Practical Recognition</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Earn a Certificate of Training Completion
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  Upon successfully submitting your practical project calculations, Bar Bending Schedules (BBS), and complete BOQ assignments, you will be awarded an official, verifiable Certificate of Training Completion from <strong>Cost &amp; Calculation&apos;s</strong>.
                </p>
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <Link
                    href="/about#certificate-section"
                    className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
                  >
                    <span>View Certificate Full Size</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20to%20know%20more%20about%20the%20training%20certificate."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Certificate Image Preview Frame */}
              <div className="lg:col-span-6 flex justify-center">
                <Link
                  href="/about#certificate-section"
                  className="block relative w-full max-w-lg rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-400/40 bg-[#FCFDFE] p-1.5 sm:p-2.5 group transition-transform hover:scale-[1.02]"
                  style={{ position: "relative" }}
                >
                  <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden rounded-lg bg-white" style={{ position: "relative" }}>
                    <Image
                      src="/images/certificate-sample.jpg"
                      alt="Official Cost & Calculation's Certificate of Training Completion"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-contain"
                    />
                  </div>
                  <span className="block text-center text-[10px] sm:text-xs text-[#0B1F3A] font-bold mt-1.5 group-hover:text-[#1464C0]">
                    Official Seal &amp; Instructor Signatures &bull; Click to View &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#F4F7FB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#25D366] mx-auto shadow-2xs">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
            Ready to Advance Your Quantity Surveying Career?
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Contact us to discuss current course batches, admission criteria, or to request professional BOQ preparation services for your construction project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20am%20ready%20to%20enroll%20in%20Quantity%20Surveying%20training.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Message Us on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all"
            >
              <span>Use Enquiry Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
