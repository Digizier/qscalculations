import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
  metadataBase: new URL("https://qscalculations.com"),
  title: {
    default: "Cost & Calculation's | Online Quantity Surveying & Cost Estimation Course",
    template: "%s | Cost & Calculation's",
  },
  description:
    "Online Engineering Training System & Consulting for Quantity Surveying, BOQ Preparation, Construction Cost Estimation, Tender Analysis, EVM, and Cost Control. WhatsApp 0307-2963487.",
  keywords: [
    "Quantity Surveyor Course in Lahore",
    "Quantity Surveyor Course in Rawalpindi Islamabad",
    "Online Quantity Surveying Course Pakistan",
    "BOQ Preparation Training",
    "Construction Cost Estimation",
    "Earned Value Management EVM",
    "Cost Breakdown Structure CBS",
    "Subcontractor Claims and Payments",
    "Quantity Surveying Consultancy Pakistan"
  ],
  authors: [{ name: "Cost & Calculation's" }],
  creator: "Cost & Calculation's",
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
    url: "https://qscalculations.com",
    siteName: "Cost & Calculation's",
    title: "Cost & Calculation's | Professional Quantity Surveying & Cost Estimation Training",
    description: "Learn practical BOQ preparation, construction cost estimation, tender analysis, and cost control from real drawings. WhatsApp 0307-2963487.",
    images: [
      {
        url: "/images/og-share-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Cost & Calculation's Official Brand Banner & Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost & Calculation's | Professional Quantity Surveying & Cost Estimation Training",
    description: "Learn practical BOQ preparation, construction cost estimation, tender analysis, and cost control from real drawings. WhatsApp 0307-2963487.",
    images: ["/images/og-share-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
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
