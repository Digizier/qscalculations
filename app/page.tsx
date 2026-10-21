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
import { SERVICES } from "@/data/services";

export default function HomePage() {
  const iconMap: { [key: string]: React.ReactNode } = {
    FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-[#1464C0]" />,
    FileSearch: <FileSearch className="w-6 h-6 text-[#1464C0]" />,
    Calculator: <Calculator className="w-6 h-6 text-[#1464C0]" />,
    Handshake: <Handshake className="w-6 h-6 text-[#1464C0]" />,
    FileEdit: <FileEdit className="w-6 h-6 text-[#1464C0]" />,
    CreditCard: <CreditCard className="w-6 h-6 text-[#1464C0]" />,
    Activity: <Activity className="w-6 h-6 text-[#1464C0]" />,
    FolderTree: <FolderTree className="w-6 h-6 text-[#1464C0]" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-[#1464C0]" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-[#1464C0]" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#1464C0]" />,
    Scale: <Scale className="w-6 h-6 text-[#1464C0]" />,
  };

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0B1F3A] to-[#112a4d] text-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Tag Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 border border-[#FF8A00]/40 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] animate-pulse"></span>
                <span>Online Engineering Training &amp; Consulting</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Master Quantity Surveying &amp;{" "}
                <span className="text-[#FF8A00]">Cost Estimation</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Develop practical, job-ready skills in Bill of Quantities (BOQ) preparation, tender documentation analysis, construction cost estimation, and project cost control based on real building plans.
              </p>

              {/* Key Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                  <span>Real Architectural &amp; Structural Drawings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                  <span>Tender Bidding &amp; Subcontractor Claims</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                  <span>Earned Value Management (EVM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                  <span>Direct 1-on-1 Guidance via WhatsApp</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <a
                  href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20to%20get%20information%20about%20your%20Quantity%20Surveying%20training%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Contact phone note */}
              <div className="pt-2 text-xs text-gray-300">
                Call for Admissions:{" "}
                <a href="tel:03072963487" className="text-white font-bold underline hover:text-[#FF8A00]">
                  0307-2963487
                </a>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-white/5 aspect-4/3 sm:aspect-16/11">
                <Image
                  src="/images/hero-quantity-surveying.jpg"
                  alt="Quantity Surveying and Cost Estimation Training"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                {/* Floating Overlay Badge on Desktop */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B1F3A]/90 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white text-xs sm:text-sm flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FF8A00] flex items-center justify-center text-white shrink-0">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Cost &amp; Calculation&apos;s</p>
                      <p className="text-gray-300 text-xs">Practical BOQ &amp; Estimation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-[#25D366] text-white font-bold px-2 py-0.5 rounded-sm text-[11px]">
                      Live Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & CREDIBILITY BAR */}
      <section className="bg-white border-b border-gray-100 py-8 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#0B1F3A]">13+</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Core Practical Topics</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#1464C0]">100%</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Drawing-Based Calculations</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#FF8A00]">BOQ &amp; EVM</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Industry Standard Models</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-600">WhatsApp</span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Direct Mentor Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-16 md:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-4/3">
                <Image
                  src="/images/boq-estimation.jpg"
                  alt="Bill of Quantities Preparation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1464C0]">
                <HardHat className="w-4 h-4 text-[#FF8A00]" />
                <span>Professional Engineering Education</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
                Bridging the Gap Between Engineering Theory and Real Construction Sites
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                In the construction industry, precision calculations mean the difference between project profitability and catastrophic financial loss. Traditional academic curricula often focus purely on theoretical concepts, leaving engineers and diploma holders unprepared for active tender bidding, site measurements, and subcontractor claim verifications.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                <strong>Cost &amp; Calculation&apos;s</strong> was established to provide direct, calculation-focused training and technical consultancy. We guide students, fresh civil engineers (B.Sc / DAE), site supervisors, and contractors through the exact methods required to prepare a professional Bill of Quantities (BOQ), formulate accurate unit rate analyses, and execute Earned Value Management (EVM) for complex construction projects.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#1464C0] font-bold text-sm hover:underline"
                >
                  <span>Learn more about our training philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              <span>Curriculum &amp; Training Programs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Comprehensive Quantity Surveying Programs
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore our structured training tracks designed specifically for civil engineering professionals, DAE students, and commercial contractors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200 hover:border-[#1464C0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 sm:p-8">
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-block bg-blue-50 text-[#1464C0] text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                      {course.badge}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">4 Core Modules</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] group-hover:text-[#1464C0] transition-colors mb-2">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4 italic">
                    {course.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    <p className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                      Key Competencies Covered:
                    </p>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {course.learningOutcomes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full sm:w-1/2 text-center bg-[#0B1F3A] hover:bg-[#1464C0] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
                  >
                    View Details
                  </Link>

                  <a
                    href={`https://wa.me/923072963487?text=${encodeURIComponent(
                      `Hello Cost & Calculation's, I am interested in enrolling in or learning more about: ${course.title}. Please share the batch timings and fee details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 text-center inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold py-3 px-4 rounded-xl transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Enquiry</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF8A00] hover:text-[#E07800] transition-colors"
            >
              <span>Explore all course modules &amp; full syllabus breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CORE 13 SKILLS MATRIX SECTION */}
      <section className="py-16 md:py-24 bg-[#0B1F3A] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              <span>Complete Practical Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              13 Core Skills Taught in Our Engineering System
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Every topic is derived directly from field experience and practical construction workflows—giving you the skills required by top contracting and consulting firms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SKILLS.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-[#FF8A00]/50 rounded-xl p-6 transition-all hover:bg-white/10 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#FF8A00] group-hover:scale-110 transition-transform">
                    {iconMap[skill.icon] || <CheckCircle2 className="w-5 h-5 text-[#FF8A00]" />}
                  </div>
                  <span className="text-xs font-mono text-gray-400">SKILL #{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF8A00] transition-colors">
                  {skill.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* WhatsApp Direct Action Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-white/10 border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white">Have questions about specific topics?</h4>
              <p className="text-xs text-gray-300">Talk directly with our lead instructor regarding module prerequisites or specialized custom batches.</p>
            </div>
            <a
              href="https://wa.me/923072963487?text=Hello%2C%20I%20have%20questions%20about%20the%2013%20core%20skills%20taught%20in%20your%20Quantity%20Surveying%20training."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Instructor on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES & CONSULTANCY PREVIEW */}
      <section className="py-16 md:py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1464C0]">
                <Building2 className="w-4 h-4 text-[#FF8A00]" />
                <span>Professional Engineering Consultancy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
                Accurate Construction Cost Consultancy for Contractors &amp; Owners
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                In addition to educational training, <strong>Cost &amp; Calculation&apos;s</strong> delivers professional estimation and quantity surveying services to construction businesses, architects, and private builders across Pakistan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Pre-Tender Estimation</h4>
                  <p className="text-xs text-gray-500">Comprehensive BOQ preparation, rate analysis, and competitive tender bidding evaluation.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Site Progress &amp; IPC</h4>
                  <p className="text-xs text-gray-500">Subcontractor bill auditing, variation reporting (CRF), and Interim Payment Certificates.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore All 10 Consultancy Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-4/3">
                <Image
                  src="/images/site-inspection.jpg"
                  alt="On-Site Construction Inspection and Cost Control"
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
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1464C0] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 bg-white/10 text-[#FF8A00] px-3.5 py-1 rounded-full text-xs font-bold uppercase">
                  <Award className="w-4 h-4" />
                  <span>Verified Practical Recognition</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Earn a Certificate of Training Completion
                </h2>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
                  Upon successfully submitting your practical project calculations, Bar Bending Schedules, and complete BOQ assignments, you will be awarded an official Certificate of Training Completion from Cost &amp; Calculation&apos;s.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/about#certificate-section"
                    className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
                  >
                    <span>Preview Certificate Sample</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-white/10 border-4 border-dashed border-[#FF8A00]/60 p-4 flex flex-col items-center justify-center text-center">
                  <Award className="w-12 h-12 text-[#FF8A00] mb-2" />
                  <span className="text-xs font-extrabold uppercase text-white tracking-wider">
                    Official Training Seal
                  </span>
                  <span className="text-[10px] text-gray-300 mt-1">Verified Competence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL WHATSAPP CALL TO ACTION */}
      <section className="py-16 md:py-20 bg-[#F4F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-[#25D366] mx-auto shadow-inner">
            <MessageCircle className="w-8 h-8 fill-current" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
            Ready to Advance Your Quantity Surveying Career?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Contact us on WhatsApp to discuss current course batches, admission criteria, or to request professional BOQ preparation services for your construction project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20am%20ready%20to%20enroll%20in%20Quantity%20Surveying%20training.%20Please%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Message Us: 0307-2963487</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Use Enquiry Form</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
