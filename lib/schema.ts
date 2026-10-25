/**
 * Structured Data (JSON-LD) Schemas for Cost & Calculation's
 * Optimized for Google Rich Snippets, Sitelinks, AEO (ChatGPT, Gemini, Perplexity), and GEO.
 */

export const BASE_URL = "https://costcalculations.org";

export const HOMEPAGE_FAQS = [
  {
    question: "What is Quantity Surveying & Cost Estimation, and who is this course for?",
    answer: "Quantity Surveying (QS) is the professional engineering discipline managing all financial, contractual, and measurement aspects of construction projects—from initial blueprint takeoffs to Bill of Quantities (BOQ) preparation, rate analysis, tender bidding, and final accounts. Our practical courses are specifically tailored for Civil Engineers (B.Sc / B.E), Diploma of Associate Engineer (DAE Civil) holders, site supervisors, and contractors seeking office-based estimation, billing, and Gulf (UAE, Saudi Arabia, Qatar) career advancement."
  },
  {
    question: "How are online classes and blueprint drawing takeoffs conducted?",
    answer: "Classes are conducted online via live interactive screen-sharing sessions. Students work directly with real architectural, structural, and MEP engineering drawings from actual residential, commercial, and industrial building projects. We perform step-by-step measurements, concrete/steel calculations, and Excel takeoff templates with direct 1-on-1 instructor mentorship."
  },
  {
    question: "Do students receive a verified Certificate of Training Completion?",
    answer: "Yes. Upon completing all drawing exercises, rate analysis tests, and submission of the final project BOQ, students receive an official Certificate of Training Completion from Cost & Calculation's (Karachi Hub). Every certificate carries a unique institutional Credential ID, verifiable online at CostCalculations.org, along with official signatures and embossed training seal."
  },
  {
    question: "Is this training suitable for DAE Civil diploma holders and site supervisors?",
    answer: "Yes, absolutely. Over 60% of our enrolled candidates are DAE Civil graduates and site supervisors transitioning from difficult physical site work to high-paying office estimation, planning, tender bidding, and consultant roles across Pakistan and the Middle East."
  },
  {
    question: "What software, spreadsheets, and estimation tools are covered in training?",
    answer: "Students learn professional Microsoft Excel BOQ and CBS modeling, formula automation, Bar Bending Schedule (BBS) generators, AutoCAD digital measurement takeoff, and digital takeoff methodologies used by leading contractors and engineering consulting firms."
  },
  {
    question: "What is Earned Value Management (EVM) and why is it essential?",
    answer: "Earned Value Management (EVM) is a globally recognized project management methodology that integrates project scope, schedule, and cost. In our training, engineers learn how to calculate Planned Value (PV), Earned Value (EV), Actual Cost (AC), Cost Variance (CV), and Schedule Variance (SV) to prevent budget overruns and guarantee project profitability."
  },
  {
    question: "How can contractors and property developers hire Cost & Calculation's for consultancy?",
    answer: "We provide comprehensive construction cost consultancy including architectural BOQ preparation, tender bidding documentation, unit rate buildup, subcontractor claim verification, and Interim Payment Certificate (IPC) auditing. Contact our Karachi office via WhatsApp at +92 307 2963487 or email costcalculations2026@gmail.com with your drawings for a 24-hour quotation."
  },
  {
    question: "Are class recordings and reference Excel sheets provided?",
    answer: "Yes. All enrolled students receive lifetime access to class recordings, real project architectural/structural PDF drawings, fully automated Excel BOQ calculation templates, and ongoing instructor mentorship via our dedicated student WhatsApp group."
  }
];

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "ProfessionalService"],
    "@id": `${BASE_URL}/#organization`,
    name: "Cost & Calculation's",
    alternateName: [
      "Cost Calculations Pakistan",
      "CostCalculations.org",
      "Cost & Calculation's Quantity Surveying",
      "Cost & Calculation's Engineering Training Hub"
    ],
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    image: `${BASE_URL}/images/og-share-banner.jpg`,
    description: "Online Engineering Training System & Consulting for Quantity Surveying, BOQ Preparation, Construction Cost Estimation, Tender Analysis, EVM, and Subcontractor Billing.",
    telephone: "+923072963487",
    email: "costcalculations2026@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.8607,
      longitude: 67.0011
    },
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Oman" }
    ],
    sameAs: [
      "https://wa.me/923072963487",
      BASE_URL
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "21:00"
      }
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Cost & Calculation's",
    alternateName: "CostCalculations.org",
    url: BASE_URL,
    publisher: {
      "@id": `${BASE_URL}/#organization`
    },
    inLanguage: "en-PK"
  };
}

/**
 * SiteNavigationElement schema enables Google to display Category Sitelinks
 * beneath the primary search result.
 */
export function getSiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#sitelinks`,
    name: "Main Categories & Sitelinks",
    description: "Primary training programs, consultancy services, and institutional verification pages of Cost & Calculation's.",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Courses & Training Programs",
        description: "Practical engineering training in Quantity Surveying, BOQ Preparation, Construction Cost Estimation, EVM, and Subcontractor Billing.",
        url: `${BASE_URL}/courses`
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Services & Consultancy",
        description: "Professional BOQ preparation, tender bidding evaluation, cost breakdown structures (CBS), and subcontractor billing verification.",
        url: `${BASE_URL}/services`
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "About Us & Verified Certification",
        description: "Our practical training philosophy, lead instructor credentials, and institutional Certificate of Training Completion showcase.",
        url: `${BASE_URL}/about`
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Contact Us & Admissions",
        description: "Direct WhatsApp support, course batch schedule inquiries, and quotation requests for private consultancy.",
        url: `${BASE_URL}/contact`
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Quantity Surveying & Cost Estimation Course",
        description: "Core master track covering structural drawing takeoffs, concrete/steel calculations, and unit rate analysis.",
        url: `${BASE_URL}/courses/quantity-surveying-cost-estimation`
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "BOQ Preparation & Tender Analysis Course",
        description: "Comprehensive Bill of Quantities development, item rate buildup, and tender documentation analysis.",
        url: `${BASE_URL}/courses/boq-preparation-tender-analysis`
      }
    ]
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function getFaqSchema(faqs = HOMEPAGE_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer
      }
    }))
  };
}

export function getCourseSchema(course: {
  title: string;
  subtitle: string;
  shortDescription: string;
  slug: string;
  learningOutcomes: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: "Cost & Calculation's",
      sameAs: BASE_URL
    },
    educationalCredentialAwarded: "Certificate of Training Completion",
    courseMode: "online",
    inLanguage: "en-PK",
    url: `${BASE_URL}/courses/${course.slug}`,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Person",
        name: "Lead Quantity Surveyor & Cost Consultant"
      }
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      availability: "https://schema.org/InStock",
      priceCurrency: "PKR"
    }
  };
}
