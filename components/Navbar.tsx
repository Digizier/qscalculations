"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses & Training", href: "/courses" },
    { label: "Services & Consultancy", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-gray-100">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 shrink-0 transition-transform group-hover:scale-105" style={{ position: "relative" }}>
              <Image
                src="/images/logo.png"
                alt="Cost & Calculation's Logo"
                width={56}
                height={56}
                className="object-contain w-10 h-10 sm:w-14 sm:h-14"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-xl md:text-2xl text-[#0B1F3A] tracking-tight leading-tight">
                Cost &amp; Calculation<span className="text-[#FF8A00]">&apos;s</span>
              </span>
              <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-normal hidden xs:inline">
                Quantity Surveying &amp; Estimation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-[#1464C0] bg-blue-50/70"
                    : "text-[#1F2937] hover:text-[#1464C0] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:03072963487"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0B1F3A] hover:text-[#1464C0] px-3 py-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>0307-2963487</span>
            </a>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/923072963487?text=Hello%20Cost%20%26%20Calculation%27s%2C%20I%20would%20like%20to%20enquire%20about%20your%20training%20and%20consultancy%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Contact"
              className="p-2 text-[#25D366] hover:bg-green-50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-[#0B1F3A] hover:bg-gray-100 rounded-lg transition-colors focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#FF8A00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                isActive(link.href)
                  ? "bg-blue-50 text-[#1464C0] font-bold"
                  : "text-[#1F2937] hover:bg-gray-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-sm py-3 rounded-lg shadow-sm"
            >
              Explore All Courses
            </Link>
            <a
              href="tel:03072963487"
              className="w-full flex items-center justify-center gap-2 bg-[#0B1F3A] text-white font-bold text-sm py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#FF8A00]" />
              <span>Call: 0307-2963487</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
