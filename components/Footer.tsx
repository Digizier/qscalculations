import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { COURSES } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-10 sm:pt-14 pb-24 lg:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 sm:pb-12 border-b border-gray-800/80">
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0 bg-white/10 rounded-lg p-1" style={{ position: "relative" }}>
                <Image
                  src="/images/logo.png"
                  alt="Cost & Calculation's"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  Cost &amp; Calculation<span className="text-[#FF8A00]">&apos;s</span>
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  Engineering Technology &amp; Training
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Online Engineering Training System specializing in practical Quantity Surveying, BOQ Preparation, Construction Cost Estimation, and EVM Cost Control.
            </p>
          </div>

          {/* Col 2 & 3: 2-Column Mobile Grid for Courses & Services */}
          <div className="md:col-span-2 lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-6">
            {/* Courses Column */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                Courses
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                {COURSES.map((course) => (
                  <li key={course.id}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:text-[#FF8A00] transition-colors flex items-start gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-[#FF8A00] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{course.title}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/courses"
                    className="inline-block pt-1 text-[#FF8A00] font-semibold text-xs hover:underline"
                  >
                    All Modules &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-3 flex items-center gap-1.5 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
                Consultancy
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="/services#boq-preparation" className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>BOQ Preparation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#cost-estimation" className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Cost Estimation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#cost-control" className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>CBS Management</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#evm-management" className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>EVM Systems</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services#subcontractor-claims" className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Subcontractor IPC</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="inline-block pt-1 text-[#FF8A00] font-semibold text-xs hover:underline">
                    All Services &rarr;
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-white mb-3 flex items-center gap-1.5 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
              Direct Inquiries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Call / Support</span>
                  <a href="tel:03072963487" className="font-semibold text-white hover:text-[#FF8A00]">
                    0307-2963487
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">WhatsApp</span>
                  <a
                    href="https://wa.me/923072963487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#25D366]"
                  >
                    0307-2963487
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Email</span>
                  <a href="mailto:info@qscalculations.com" className="hover:text-[#FF8A00] truncate block max-w-[150px] sm:max-w-none">
                    info@qscalculations.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Location</span>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400 text-center sm:text-left">
          <p>
            &copy; 2026 Cost &amp; Calculation&apos;s (QSCalculations.com). All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
