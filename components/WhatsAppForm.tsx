"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle } from "lucide-react";
import { COURSES } from "@/data/courses";
import { SERVICES } from "@/data/services";

interface WhatsAppFormProps {
  defaultCourseOrService?: string;
  defaultEnquiryType?: string;
}

export default function WhatsAppForm({
  defaultCourseOrService = "",
  defaultEnquiryType = "Course Information",
}: WhatsAppFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [enquiryType, setEnquiryType] = useState(defaultEnquiryType);
  const [courseOrService, setCourseOrService] = useState(defaultCourseOrService);
  const [experienceLevel, setExperienceLevel] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your WhatsApp / mobile number.";
    } else if (phone.trim().length < 10) {
      newErrors.phone = "Please enter a valid 11-digit phone number (e.g. 03072963487).";
    }

    if (!enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (!courseOrService) {
      newErrors.courseOrService = "Please select a course or service of interest.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Build the formatted WhatsApp message
    const formattedMessage = `Hello Cost & Calculation's Team,

*NEW WEBSITE ENQUIRY*

*Name:* ${fullName.trim()}
*Phone:* ${phone.trim()}
*Email:* ${email.trim() || "Not provided"}
*Enquiry Type:* ${enquiryType}
*Course / Service:* ${courseOrService}
*Experience Level:* ${experienceLevel || "Not specified"}

*Message:*
${message.trim() || "I am interested in learning more about your training or consultancy services. Please share the relevant details."}

Thank you.`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/923072963487?text=${encodedText}`;

    setIsSubmitted(true);

    // Short timeout to give visual feedback before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10">
      <div className="mb-6 pb-6 border-b border-gray-100 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-[#25D366] shrink-0">
          <MessageCircle className="w-6 h-6 fill-current" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0B1F3A]">Quick WhatsApp Enquiry Form</h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Fill in your details below to generate an instant enquiry sent directly to our official WhatsApp.
          </p>
        </div>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-bold">Opening WhatsApp...</p>
            <p className="text-xs text-green-700 mt-1">
              Your details have been compiled. When WhatsApp opens, simply press the <strong>Send</strong> button to deliver your enquiry directly to <strong>0307-2963487</strong>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Muhammad Ali"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-colors ${
              errors.fullName
                ? "border-red-400 bg-red-50/30 focus:border-red-500"
                : "border-gray-300 focus:border-[#1464C0] bg-white"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
              WhatsApp / Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. 03072963487"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-colors ${
                errors.phone
                  ? "border-red-400 bg-red-50/30 focus:border-red-500"
                : "border-gray-300 focus:border-[#1464C0] bg-white"
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Address (Optional) */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
              Email Address <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="e.g. yourname@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-[#1464C0] focus:outline-hidden transition-colors bg-white"
            />
          </div>
        </div>

        {/* Enquiry Type & Experience */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
              Enquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              value={enquiryType}
              onChange={(e) => setEnquiryType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-[#1464C0] focus:outline-hidden transition-colors bg-white"
            >
              <option value="Course Information">Course Information</option>
              <option value="Training Enquiry">Training Enquiry</option>
              <option value="BOQ Preparation">BOQ Preparation Service</option>
              <option value="Cost Estimation">Cost Estimation Service</option>
              <option value="Construction Consultancy">Construction Consultancy</option>
              <option value="Other">Other Enquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
              Experience Level <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <select
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-[#1464C0] focus:outline-hidden transition-colors bg-white"
            >
              <option value="">Select your background...</option>
              <option value="Student / DAE Civil">Student / DAE Civil</option>
              <option value="Fresh Graduate Engineer (B.Sc / B.E)">Fresh Graduate Engineer (B.Sc / B.E)</option>
              <option value="Site Supervisor / Site Engineer">Site Supervisor / Site Engineer</option>
              <option value="Practicing Quantity Surveyor">Practicing Quantity Surveyor</option>
              <option value="Contractor / Builder / Developer">Contractor / Builder / Developer</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Course or Service Selection */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
            Course or Service of Interest <span className="text-red-500">*</span>
          </label>
          <select
            value={courseOrService}
            onChange={(e) => setCourseOrService(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-hidden transition-colors bg-white ${
              errors.courseOrService
                ? "border-red-400 bg-red-50/30 focus:border-red-500"
                : "border-gray-300 focus:border-[#1464C0]"
            }`}
          >
            <option value="">Select a Course or Service...</option>
            <optgroup label="Training Courses">
              {COURSES.map((c) => (
                <option key={c.id} value={c.title}>
                  Course: {c.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="Consultancy Services">
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  Service: {s.title}
                </option>
              ))}
            </optgroup>
            <option value="Custom Quantity Surveying Request">Custom Quantity Surveying Request</option>
          </select>
          {errors.courseOrService && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.courseOrService}</span>
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs sm:text-sm font-bold text-[#0B1F3A] mb-1.5">
            Your Message / Specific Query <span className="text-gray-400 font-normal">(Optional)</span>
          </label>
          <textarea
            rows={3}
            placeholder="Please write any specific questions regarding batch timings, course outline, fee, or project requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-[#1464C0] focus:outline-hidden transition-colors bg-white resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-[#FF8A00] hover:bg-[#E07800] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-98 disabled:opacity-70 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? "Generating WhatsApp Message..." : "Send Enquiry on WhatsApp"}</span>
          </button>
          <p className="text-center text-xs text-gray-500 mt-2.5">
            Safe &amp; Direct: Clicking will open your WhatsApp application with your enquiry pre-filled.
          </p>
        </div>
      </form>
    </div>
  );
}
