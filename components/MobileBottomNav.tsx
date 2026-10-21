"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, Briefcase, Phone, MessageCircle } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)] px-2 py-1.5 safe-area-inset-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-all ${
            isActive("/") && pathname === "/"
              ? "text-[#1464C0] font-bold"
              : "text-gray-600 hover:text-[#0B1F3A]"
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Home</span>
        </Link>

        <Link
          href="/courses"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-all ${
            isActive("/courses")
              ? "text-[#1464C0] font-bold"
              : "text-gray-600 hover:text-[#0B1F3A]"
          }`}
        >
          <GraduationCap className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Courses</span>
        </Link>

        <Link
          href="/services"
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-all ${
            isActive("/services")
              ? "text-[#1464C0] font-bold"
              : "text-gray-600 hover:text-[#0B1F3A]"
          }`}
        >
          <Briefcase className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-tight">Services</span>
        </Link>

        <a
          href="tel:03072963487"
          className="flex flex-col items-center justify-center py-1 px-2.5 text-gray-700 hover:text-[#FF8A00] transition-all"
        >
          <Phone className="w-5 h-5 mb-0.5 text-[#0B1F3A]" />
          <span className="text-[10px] tracking-tight">Call</span>
        </a>

        <a
          href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20want%20to%20enquire%20about%20your%20Quantity%20Surveying%20training%20and%20consultancy."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 bg-[#25D366] text-white rounded-xl shadow-xs active:scale-95 transition-all"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 fill-current" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
