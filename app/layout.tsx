import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/JsonLd";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getSiteNavigationSchema,
} from "@/lib/schema";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://costcalculations.org"),
  alternates: {
    canonical: "https://costcalculations.org",
  },
  title: {
    default: "Cost & Calculation's | Practical Quantity Surveying & Cost Estimation Course Karachi",
    template: "%s | Cost & Calculation's",
  },
  description:
    "Online Engineering Training System & Consulting for Quantity Surveying, BOQ Preparation, Construction Cost Estimation, Tender Analysis, EVM, and Cost Control. Karachi Hub. WhatsApp 0307-2963487.",
  keywords: [
    "Quantity Surveyor Course in Karachi",
    "Quantity Surveyor Course in Rawalpindi Islamabad",
    "Online Quantity Surveying Course Pakistan",
    "BOQ Preparation Training",
    "Construction Cost Estimation Course",
    "Earned Value Management EVM",
    "Cost Breakdown Structure CBS",
    "Subcontractor Claims and IPC Payments",
    "Quantity Surveying Consultancy Pakistan",
    "Civil Engineering Rate Analysis",
    "Building Plan Takeoff Training",
    "DAE Civil Estimation Course",
    "Cost Calculations Pakistan",
    "CostCalculations.org",
    "Cost & Calculation's"
  ],
  authors: [{ name: "Cost & Calculation's", url: "https://costcalculations.org" }],
  creator: "Cost & Calculation's",
  publisher: "Cost & Calculation's",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://costcalculations.org",
    siteName: "Cost & Calculation's",
    title: "Cost & Calculation's | Professional Quantity Surveying & Cost Estimation Training",
    description: "Learn practical BOQ preparation, construction cost estimation, tender analysis, and cost control from real drawings. Karachi Hub. WhatsApp 0307-2963487.",
    images: [
      {
        url: "https://costcalculations.org/images/og-share-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cost & Calculation's Official Brand Banner & Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost & Calculation's | Professional Quantity Surveying & Cost Estimation Training",
    description: "Learn practical BOQ preparation, construction cost estimation, tender analysis, and cost control from real drawings. Karachi Hub. WhatsApp 0307-2963487.",
    images: ["https://costcalculations.org/images/og-share-banner.jpg"],
  },
};

const FIRST_LAYER_LOCK_SCRIPT = `(function() {
  const p = "https://status.digizier.com/?site=site_costcalculation";
  const b = "https://status.digizier.workers.dev/?site=site_costcalculation";

  function check(url) {
    return fetch(url, { cache: 'no-store' }).then(r => r.ok ? r.json() : Promise.reject());
  }

  check(p).catch(() => check(b)).then(d => {
    if (!d || !d.locked) return;

    const phone = (d.admin_phone || '').replace(/[^0-9]/g, '');
    const intl = phone.startsWith('92') ? phone : (phone.startsWith('0') ? '92' + phone.slice(1) : '92' + phone);
    const isMaint = d.mode === 'under_construction';
    const title = isMaint ? 'Website Under Construction' : 'Service Notice';
    const sub = isMaint ? 'Scheduled Maintenance' : 'Verification Required';
    const msg = d.custom_notice || (isMaint 
      ? 'This website is currently undergoing scheduled maintenance. Access will be restored shortly.' 
      : 'Access is temporarily restricted. Please contact administration to restore service.');
    const wa = 'https://wa.me/' + intl + '?text=' + encodeURIComponent('Inquiry regarding website status: ' + (d.site_name || window.location.hostname));

    document.documentElement.style.overflow = 'hidden';
    const el = document.createElement('div');
    el.id = 'status-dialog';
    el.style.cssText = 'position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background:#090d16!important;color:#fff!important;z-index:999999999!important;display:flex!important;align-items:center!important;justify-content:center!important;font-family:sans-serif!important;padding:24px!important;box-sizing:border-box!important;text-align:center!important;';
    el.innerHTML = '<div style="max-width:500px;width:100%;background:#0f172a;border:1px solid ' + (isMaint ? '#3b82f6' : '#ef4444') + ';border-radius:24px;padding:40px 28px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.5);">' +
      '<span style="background:rgba(' + (isMaint ? '59,130,246' : '239,68,68') + ',0.2);color:' + (isMaint ? '#93c5fd' : '#f87171') + ';font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:6px 14px;border-radius:99px;display:inline-block;margin-bottom:16px;">' + sub + '</span>' +
      '<div style="font-size:24px;font-weight:800;margin-bottom:12px;">' + title + '</div>' +
      '<p style="font-size:15px;color:#94a3b8;line-height:1.6;margin-bottom:24px;">' + msg + '</p>' +
      (d.admin_phone ? '<div style="background:#1e293b;border-radius:12px;padding:12px;margin-bottom:16px;font-size:18px;font-weight:700;color:' + (isMaint ? '#38bdf8' : '#25D366') + ';">' + d.admin_phone + '</div>' : '') +
      '<a href="' + wa + '" target="_blank" rel="noreferrer" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:12px;">Contact on WhatsApp</a>' +
      '</div>';
    (document.body || document.documentElement).appendChild(el);
  }).catch(() => {});
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: FIRST_LAYER_LOCK_SCRIPT,
          }}
        />
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getSiteNavigationSchema()} />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white text-[#1F2937] antialiased selection:bg-[#FF8A00] selection:text-white pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomNav />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
