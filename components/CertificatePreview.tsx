"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, ShieldCheck, Printer, CheckCircle2 } from "lucide-react";

export default function CertificatePreview() {
  const [recipientName, setRecipientName] = useState("Engr. Muhammad Hamza");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Interactive Customizer Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="certName" className="text-xs sm:text-sm font-bold text-[#0B1F3A] shrink-0">
            Preview Your Name:
          </label>
          <input
            id="certName"
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            placeholder="Type your name here..."
            className="w-full sm:w-64 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:border-[#1464C0] focus:outline-hidden"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Authentic Pakistani Professional Training Format</span>
          <button
            onClick={handlePrint}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-[#0B1F3A] font-semibold rounded-lg text-xs transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Sample</span>
          </button>
        </div>
      </div>

      {/* The Certificate Frame */}
      <div className="relative bg-[#FCFDFE] p-4 sm:p-8 md:p-12 rounded-2xl shadow-2xl border-8 border-double border-[#0B1F3A] text-center overflow-hidden">
        {/* Ornate Inner Border */}
        <div className="border-2 border-[#FF8A00]/40 p-6 sm:p-10 md:p-12 rounded-xl relative">
          {/* Subtle Watermark Logo in background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <div className="relative w-96 h-96" style={{ position: "relative" }}>
              <Image
                src="/images/logo.png"
                alt="Watermark"
                fill
                sizes="384px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Top Header */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <div className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase font-bold text-gray-500">
              <ShieldCheck className="w-4 h-4 text-[#1464C0]" />
              <span>Online Engineering Training System &bull; Professional Competence</span>
              <ShieldCheck className="w-4 h-4 text-[#1464C0]" />
            </div>

            {/* Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 my-2" style={{ position: "relative" }}>
              <Image
                src="/images/logo.png"
                alt="Cost & Calculation's Official Seal"
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1F3A] tracking-tight">
              Cost &amp; Calculation<span className="text-[#FF8A00]">&apos;s</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
              Training &amp; Consulting in Quantity Surveying, BOQ Preparation &amp; Construction Cost Management
            </p>
          </div>

          {/* Certificate Title Banner */}
          <div className="my-6">
            <div className="inline-block bg-[#0B1F3A] text-white px-6 py-2 rounded-md shadow-sm">
              <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase text-[#FF8A00]">
                Certificate of Training Completion
              </h3>
            </div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-2 font-semibold">
              This is to certify that
            </p>
          </div>

          {/* Recipient Name */}
          <div className="my-6">
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B1F3A] border-b-2 border-gray-300 inline-block px-8 pb-2 min-w-[280px]">
              {recipientName || "Candidate Name"}
            </p>
          </div>

          {/* Description of Course Completion */}
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed my-4">
            has successfully completed all prescribed practical coursework, drawing interpretations, and valuation exercises for the professional training program in:
          </p>

          <div className="my-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1464C0]">
              Quantity Surveying, BOQ Preparation &amp; Construction Cost Estimation
            </h4>
          </div>

          {/* Verified Modules List */}
          <div className="max-w-3xl mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-left bg-gray-50/80 p-4 rounded-lg border border-gray-200 text-xs text-gray-700">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Bill of Quantities (BOQ)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Tender Document Analysis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Unit Rate Analysis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Cost Breakdown Structure (CBS)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Earned Value Management (EVM)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Subcontractor Claims &amp; IPC</span>
            </div>
          </div>

          {/* Bottom Row: Official Seal & Signatures */}
          <div className="mt-10 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 items-end gap-6 text-center">
            {/* Left Signature */}
            <div className="flex flex-col items-center">
              <div className="font-serif italic text-lg sm:text-xl text-[#0B1F3A] font-bold mb-1">
                Engr. Lead QS
              </div>
              <div className="w-36 h-0.5 bg-gray-400 mb-1"></div>
              <span className="text-xs font-bold text-gray-700">Course Instructor</span>
              <span className="text-[10px] text-gray-500">Lead Quantity Surveyor</span>
            </div>

            {/* Center Embossed Seal */}
            <div className="flex flex-col items-center justify-center my-2 sm:my-0">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 p-1 shadow-lg flex items-center justify-center border-2 border-amber-600">
                <div className="w-full h-full rounded-full border border-dashed border-amber-800 flex flex-col items-center justify-center text-center p-1">
                  <Award className="w-6 h-6 text-amber-900 mb-0.5" />
                  <span className="text-[7px] font-extrabold uppercase text-amber-950 tracking-tighter leading-tight">
                    COST &amp; CALCULATION&apos;S
                  </span>
                  <span className="text-[6px] font-bold text-amber-900">
                    OFFICIAL SEAL
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 mt-2 font-mono">
                Reg ID: CC-QS-PK-2026-SAMPLE
              </span>
            </div>

            {/* Right Signature */}
            <div className="flex flex-col items-center">
              <div className="font-serif italic text-lg sm:text-xl text-[#0B1F3A] font-bold mb-1">
                Authorized Signatory
              </div>
              <div className="w-36 h-0.5 bg-gray-400 mb-1"></div>
              <span className="text-xs font-bold text-gray-700">Director of Training</span>
              <span className="text-[10px] text-gray-500">Cost &amp; Calculation&apos;s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
