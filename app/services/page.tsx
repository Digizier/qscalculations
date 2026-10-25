import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Briefcase,
  FileSpreadsheet,
  Calculator,
  FileSearch,
  Scale,
  FolderTree,
  TrendingUp,
  CreditCard,
  FileEdit,
  Activity,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Building2,
  Check
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/services";
import WhatsAppForm from "@/components/WhatsAppForm";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, BASE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Professional Construction Cost & Quantity Surveying Consultancy Services | Karachi",
  description:
    "Expert BOQ preparation, tender bidding evaluation, cost breakdown structures, earned value management, and subcontractor billing verification across Pakistan.",
  alternates: {
    canonical: "https://costcalculations.org/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Services & Consultancy", url: `${BASE_URL}/services` },
  ]);

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Quantity Surveying & Cost Consultancy Services",
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.shortDesc,
        provider: {
          "@type": "ProfessionalService",
          name: "Cost & Calculation's",
          url: BASE_URL,
        },
      },
    })),
  };

  const iconMap: { [key: string]: React.ReactNode } = {
    FileSpreadsheet: <FileSpreadsheet className="w-7 h-7 text-[#1464C0]" />,
    Calculator: <Calculator className="w-7 h-7 text-[#1464C0]" />,
    FileSearch: <FileSearch className="w-7 h-7 text-[#1464C0]" />,
    Scale: <Scale className="w-7 h-7 text-[#1464C0]" />,
    FolderTree: <FolderTree className="w-7 h-7 text-[#1464C0]" />,
    TrendingUp: <TrendingUp className="w-7 h-7 text-[#1464C0]" />,
    CreditCard: <CreditCard className="w-7 h-7 text-[#1464C0]" />,
    FileEdit: <FileEdit className="w-7 h-7 text-[#1464C0]" />,
    Activity: <Activity className="w-7 h-7 text-[#1464C0]" />,
    BarChart3: <BarChart3 className="w-7 h-7 text-[#1464C0]" />,
  };

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceListSchema} />
      {/* Header Banner */}
      <section className="bg-[#0B1F3A] text-white py-8 sm:py-12 md:py-16 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#FF8A00]/20 text-[#FF8A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#FF8A00]/40">
            <Building2 className="w-4 h-4" />
            <span>Commercial &amp; Technical Consultancy</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Quantity Surveying &amp; Cost Management Services
          </h1>
          <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
            Professional estimation, tender documentation analysis, budget auditing, and subcontractor claim verification for contractors, project owners, architects, and developers.
          </p>
        </div>
      </section>

      {/* Overview Note */}
      <section className="bg-[#F4F7FB] py-5 sm:py-7 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <strong>Training vs. Professional Consultancy:</strong> While our training programs empower engineers with practical calculation skills, our consultancy division acts as your dedicated commercial partner—handling live project takeoffs, tender bids, and site billing verification with guaranteed mathematical rigor.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8 sm:py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 md:space-y-10">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-xs hover:shadow-md transition-shadow scroll-mt-24"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  {iconMap[service.iconName] || <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#1464C0]" />}
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#FF8A00] uppercase tracking-wider">
                    Consultancy Service 0{index + 1}
                  </span>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#0B1F3A] mt-0.5 sm:mt-1">
                    {service.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                    Ideal for: {service.targetClients}
                  </p>
                </div>
              </div>

              <a
                href="#quote-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#0B1F3A] hover:bg-[#1464C0] text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-colors shadow-xs shrink-0"
              >
                <span>Request Service Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed my-3.5 sm:my-5">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 pt-1">
              {/* Scope of Work */}
              <div className="bg-[#F4F7FB] p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-100 space-y-2.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1464C0]" />
                  <span>Scope of Work</span>
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  {service.scopeOfWork.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="bg-white p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border border-gray-200 space-y-2.5">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B1F3A] uppercase tracking-wider flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-[#FF8A00]" />
                  <span>What You Receive (Deliverables)</span>
                </h3>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Quotation Request Form */}
      <section id="quote-form" className="py-8 sm:py-12 md:py-16 bg-[#F4F7FB] border-t border-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-10 space-y-1.5 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A]">
              Request a Project Consultancy Quote
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Share your project drawings or BOQ requirements. We will review the scope and provide a formal service proposal.
            </p>
          </div>

          <WhatsAppForm
            defaultEnquiryType="BOQ Preparation"
            defaultCourseOrService="Bill of Quantities (BOQ) Preparation"
          />
        </div>
      </section>
    </div>
  );
}
