import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { COURSES } from "@/data/courses";

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-24 lg:pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 bg-white/10 rounded-lg p-1" style={{ position: "relative" }}>
                <Image
                  src="/images/logo.png"
                  alt="Cost & Calculation's"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  Cost &amp; Calculation<span className="text-[#FF8A00]">&apos;s</span>
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  Engineering Technology &amp; Training
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Online Engineering Training System specializing in professional Quantity Surveying, BOQ Preparation, Construction Cost Estimation, and Cost Control.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20want%20to%20enquire%20about%20your%20training%20and%20consultancy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors w-fit"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quick WhatsApp: 0307-2963487</span>
              </a>
            </div>
          </div>

          {/* Col 2: Training Courses */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]"></span>
              Professional Courses
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="hover:text-[#FF8A00] transition-colors flex items-start gap-2"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF8A00] shrink-0 mt-1" />
                    <span className="line-clamp-1">{course.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/courses"
                  className="inline-block pt-2 text-[#FF8A00] font-semibold text-xs hover:underline"
                >
                  View All Modules &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Consultancy & Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]"></span>
              Consultancy Services
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/services#boq-preparation" className="hover:text-[#FF8A00] transition-colors flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>BOQ Preparation &amp; Takeoff</span>
                </Link>
              </li>
              <li>
                <Link href="/services#cost-estimation" className="hover:text-[#FF8A00] transition-colors flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Tender Cost Estimation</span>
                </Link>
              </li>
              <li>
                <Link href="/services#cost-control" className="hover:text-[#FF8A00] transition-colors flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cost Breakdown Structure (CBS)</span>
                </Link>
              </li>
              <li>
                <Link href="/services#evm-management" className="hover:text-[#FF8A00] transition-colors flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Earned Value Management (EVM)</span>
                </Link>
              </li>
              <li>
                <Link href="/services#subcontractor-claims" className="hover:text-[#FF8A00] transition-colors flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Subcontractor Bill Verification</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-block pt-2 text-[#FF8A00] font-semibold text-xs hover:underline">
                  All 10 Consultancy Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]"></span>
              Direct Inquiries
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FF8A00] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-400">Mobile &amp; Support:</span>
                  <a href="tel:03072963487" className="font-semibold text-white hover:text-[#FF8A00]">
                    0307-2963487
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-400">WhatsApp Official:</span>
                  <a
                    href="https://wa.me/923072963487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-[#25D366]"
                  >
                    +92 307 2963487
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#FF8A00] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-400">Email:</span>
                  <a href="mailto:info@qscalculations.com" className="hover:text-[#FF8A00]">
                    info@qscalculations.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF8A00] shrink-0 mt-1" />
                <div>
                  <span className="block text-xs text-gray-400">Location:</span>
                  <span>Lahore, Pakistan &amp; Online System</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Cost &amp; Calculation&apos;s (QSCalculations.com). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
