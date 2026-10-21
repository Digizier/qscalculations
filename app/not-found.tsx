import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, GraduationCap, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF8A00] font-black text-3xl mx-auto shadow-inner">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            The page you are looking for doesn&apos;t exist, was moved, or the link has expired.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 bg-[#F4F7FB] hover:bg-gray-200 text-[#0B1F3A] font-bold text-sm py-3 px-6 rounded-xl transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-[#FF8A00]" />
            <span>Browse All Courses</span>
          </Link>

          <a
            href="https://wa.me/923072963487?text=Hello%2C%20I%20got%20lost%20on%20your%20website%20and%20need%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#25D366] hover:underline pt-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Need Help? Chat on WhatsApp: 0307-2963487</span>
          </a>
        </div>
      </div>
    </div>
  );
}
