export interface CourseTopic {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  badge: string;
  targetAudience: string[];
  learningOutcomes: string[];
  modules: {
    number: string;
    title: string;
    topics: string[];
  }[];
  prerequisites: string[];
  softwareCovered: string[];
  keyHighlights: string[];
}

export const COURSES: Course[] = [
  {
    id: "qs-estimation-mastery",
    slug: "quantity-surveying-cost-estimation",
    title: "Professional Quantity Surveying & Cost Estimation",
    subtitle: "Complete Practical Training from Architectural Blueprints to Final Cost Valuation",
    shortDescription: "Master practical building measurements, concrete/steel takeoffs, rate analysis, and construction cost estimation based on real Pakistani and international drawings.",
    badge: "Core Master Track",
    targetAudience: [
      "Civil Engineering Students & Fresh Graduates (B.Sc / B.E)",
      "Diploma of Associate Engineer (DAE Civil) Holders",
      "Site Supervisors and Site Engineers seeking office estimation roles",
      "Contractors & Builders wanting accurate project pricing",
      "Professionals preparing for Gulf / Middle East QS careers"
    ],
    learningOutcomes: [
      "Perform thorough quantity takeoff from architectural, structural, and MEP engineering drawings",
      "Calculate exact quantities for earthwork, concrete, formwork, brickwork, plaster, tiles, and steel rebar",
      "Develop comprehensive unit rate analysis considering current market material, labor, and plant costs",
      "Analyze tender documentation to identify financial risks and high-impact cost items",
      "Formulate accurate project cost estimates for residential, commercial, and industrial construction",
      "Prepare for job interviews with real project portfolio calculations"
    ],
    modules: [
      {
        number: "Module 01",
        title: "Drawing Interpretation & Construction Measurement Basics",
        topics: [
          "Understanding Architectural, Structural, and Working Drawings",
          "Units of Measurement, Conversion Standards & Pakistani Market Norms",
          "Standard Method of Measurement (POMI & NRM fundamentals)",
          "Site layout, grid lines, and excavation boundary calculations"
        ]
      },
      {
        number: "Module 02",
        title: "Substructure & Superstructure Quantity Takeoff",
        topics: [
          "Excavation, backfilling, compaction, and foundation footing calculations",
          "Plain Cement Concrete (P.C.C) and Reinforced Cement Concrete (R.C.C) estimation",
          "Brick masonry, damp-proof course (DPC), and lintel band measurements",
          "Bar Bending Schedule (BBS) for beams, columns, footings, and slabs"
        ]
      },
      {
        number: "Module 03",
        title: "Finishing & MEP Item Quantities",
        topics: [
          "Internal and external plaster, paint, distemper, and weather-sheet quantification",
          "Flooring: marble, porcelain tile, screed, and skirting takeoffs",
          "Woodwork, aluminum windows, steel doors, and glazing calculations",
          "Sanitary, plumbing, and basic electrical provision calculations"
        ]
      },
      {
        number: "Module 04",
        title: "Material Rate Analysis & Final Cost Estimation",
        topics: [
          "Labor output constants and daily productivity metrics",
          "Material market rate analysis (Cement, Sand, Crush, Rebar, Bricks, Tiles)",
          "Contractor profit, overheads, contingency, and tax calculations",
          "Final bill preparation and tender pricing strategy"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of civil engineering or construction drawings",
      "Familiarity with basic computer operations (MS Excel)"
    ],
    softwareCovered: ["Microsoft Excel (Advanced Templates)", "AutoCAD (Measurement/Takeoff Tools)", "PlanSwift Overview"],
    keyHighlights: [
      "100% Practical Calculations on Real Drawings",
      "Live Excel Spreadsheet Templates provided",
      "Direct Guidance from Experienced Quantity Surveyors",
      "Certificate of Training Completion awarded upon evaluation"
    ]
  },
  {
    id: "boq-tender-mastery",
    slug: "boq-preparation-tender-analysis",
    title: "Comprehensive BOQ Preparation & Tender Analysis",
    subtitle: "End-to-End Bill of Quantities Formulation and Contractor Bid Evaluation",
    shortDescription: "Learn how to formulate professional, error-free Bill of Quantities (BOQ) and analyze client tender documentation to safeguard project profitability.",
    badge: "Most In-Demand",
    targetAudience: [
      "Junior Quantity Surveyors aiming for senior procurement roles",
      "Tendering & Estimation Engineers in contracting firms",
      "Consulting Engineers preparing client tender packages",
      "Subcontractors submitting bids for government and private projects"
    ],
    learningOutcomes: [
      "Follow standard international and local guidelines to structure clean BOQ formats",
      "Dissect tender documents to spot ambiguities, omissions, and risk clauses",
      "Prepare item descriptions that avoid disputes and scope creep during execution",
      "Conduct supplier and subcontractor rate negotiation based on volume benchmarks",
      "Formulate competitive tender bids with balanced markup structures",
      "Build dynamic automated Excel templates for instantaneous recalculations"
    ],
    modules: [
      {
        number: "Module 01",
        title: "Tender Documentation Anatomy & Review Process",
        topics: [
          "Dissecting Invitation to Bid (ITB), Instructions to Bidders, and General Conditions",
          "Identifying key cost drivers, special conditions, and penalty clauses",
          "Pre-bid queries preparation and site visit cost evaluation",
          "Risk identification in lump-sum, unit-rate, and cost-plus contracts"
        ]
      },
      {
        number: "Module 02",
        title: "Bill of Quantities (BOQ) Structuring & Item Coding",
        topics: [
          "Standard Item Work Breakdowns (Demolition, Civil, Finishes, External Works)",
          "Drafting unambiguous item descriptions according to technical specifications",
          "Cross-referencing BOQ items against architectural and structural drawing sets",
          "Eliminating arithmetic and measurement discrepancies before submission"
        ]
      },
      {
        number: "Module 03",
        title: "Subcontractor & Supplier Quotation Analysis",
        topics: [
          "Preparing RFQ (Request for Quotation) packages for vendors",
          "Comparing subcontractor bids on an apples-to-apples baseline",
          "Effective negotiation strategies with cement, steel, and MEP vendors",
          "Incorporating logistics, loading/unloading, and wastage factors"
        ]
      },
      {
        number: "Module 04",
        title: "Tender Submission & Bid Finalization",
        topics: [
          "Unbalanced bidding vs front-loading techniques in unit-rate contracts",
          "Tender security, bank guarantees, and bid bond calculation",
          "Compiling the final commercial and technical bid package",
          "Post-tender clarification meetings and negotiation protocols"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of construction materials and measurement units",
      "Experience with Microsoft Excel"
    ],
    softwareCovered: ["MS Excel (Automated BOQ Sheets)", "Adobe Acrobat Pro (Markup & Measurement)", "AutoCAD"],
    keyHighlights: [
      "Real Pakistani & International BOQ formats",
      "Vendor quotation comparison sheets included",
      "Practical Tender submission simulations",
      "Direct instructor Q&A on WhatsApp"
    ]
  },
  {
    id: "cost-control-evm",
    slug: "construction-cost-control-evm",
    title: "Construction Cost Control, EVM & CBS Management",
    subtitle: "Keep Projects within Budget through Earned Value Management and Cost Breakdown Structures",
    shortDescription: "Learn how to implement Cost Breakdown Structure (CBS), track project expenditure, apply Earned Value Management (EVM), and perform financial variance analysis.",
    badge: "Advanced Engineering",
    targetAudience: [
      "Project Managers, Resident Engineers & Planning Engineers",
      "Mid-level Quantity Surveyors transitioning to Project Controls",
      "Construction Company Directors tracking financial health",
      "Cost Engineers seeking Earned Value Management certification skills"
    ],
    learningOutcomes: [
      "Establish robust Cost Breakdown Structures (CBS) aligned with Work Breakdown Structures (WBS)",
      "Track baseline budgets versus actual committed project expenditures",
      "Calculate PV (Planned Value), EV (Earned Value), and AC (Actual Cost) accurately",
      "Determine Schedule Variance (SV), Cost Variance (CV), SPI, and CPI metrics",
      "Forecast Estimate at Completion (EAC) and Estimate to Complete (ETC)",
      "Implement corrective measures when construction expenditure exceeds budget thresholds"
    ],
    modules: [
      {
        number: "Module 01",
        title: "Cost Breakdown Structure (CBS) Architecture",
        topics: [
          "Aligning the Project WBS with the Financial CBS",
          "Defining cost codes for direct materials, direct labor, equipment, and overheads",
          "Setting up the initial baseline budget and cost control ledger",
          "Tracking committed costs vs actual cash outflow on site"
        ]
      },
      {
        number: "Module 02",
        title: "Earned Value Management System (EVM) in Construction",
        topics: [
          "Fundamentals of EVM: Planned Value (PV), Earned Value (EV), Actual Cost (AC)",
          "Calculating Schedule Variance (SV) and Cost Variance (CV)",
          "Schedule Performance Index (SPI) and Cost Performance Index (CPI) analysis",
          "Determining whether a project is ahead/behind schedule or over/under budget"
        ]
      },
      {
        number: "Module 03",
        title: "Cost Forecasting & Trend Analysis",
        topics: [
          "Calculating Estimate at Completion (EAC) under varying project conditions",
          "Estimate to Complete (ETC) and Variance at Completion (VAC)",
          "To-Complete Performance Index (TCPI) requirements to meet the budget",
          "Early warning indicators of project cash-flow distress"
        ]
      },
      {
        number: "Module 04",
        title: "Executive Cost Control Reports & Dashboarding",
        topics: [
          "Building weekly and monthly cost tracking dashboards in Excel",
          "Presenting cost variance insights to clients, directors, and lenders",
          "Implementing cost mitigation measures on active site operations",
          "Audit trails for budget revisions and reallocation requests"
        ]
      }
    ],
    prerequisites: [
      "Basic understanding of project scheduling and financial fundamentals",
      "Comfort with formulas in Excel"
    ],
    softwareCovered: ["MS Excel (EVM Calculation Models)", "MS Project (Basic Integration)", "PowerBI Concepts"],
    keyHighlights: [
      "Practical EVM formulas applied to real building projects",
      "Ready-to-use Cost Control Dashboard templates",
      "Variance analysis case studies",
      "Verified completion certificate included"
    ]
  },
  {
    id: "subcontractor-claims-mis",
    slug: "subcontractor-claims-mis-reporting",
    title: "Subcontractor Claims, Payment Verification & MIS Reporting",
    subtitle: "Master Interim Payment Certificates (IPC), Variations, Site Progress & Executive MIS Reports",
    shortDescription: "Learn how to validate subcontractor bills, calculate architect certificates, manage project variations (CRF reports), conduct site audits, and produce executive MIS reports.",
    badge: "Field & Management",
    targetAudience: [
      "Site Quantity Surveyors managing daily contractor bills",
      "Contract Administrators and Commercial Managers",
      "Consultant QS handling Interim Payment Certificates (IPC)",
      "Civil Engineers managing site visits, progress monitoring, and reporting"
    ],
    learningOutcomes: [
      "Verify and audit subcontractor invoices against on-site executed quantities",
      "Calculate Interim Payment Certificates (IPCs) with retentions, advances, and deductions",
      "Generate detailed Change Request Forms (CRF) and variation claims for extra works",
      "Coordinate site visits to physically cross-check work milestones and photographic records",
      "Produce comprehensive Management Information System (MIS) reports for stakeholders",
      "Protect project interests during dispute resolution and final account settlements"
    ],
    modules: [
      {
        number: "Module 01",
        title: "Subcontractor Billing & Interim Payment Certificates (IPC)",
        topics: [
          "Joint site measurement procedures and verification standards",
          "Preparing and certifying Interim Payment Certificates (IPC)",
          "Handling Mobilization Advance recovery, Retention Money, and tax withholding",
          "Calculating architect and consultant fee certificates"
        ]
      },
      {
        number: "Module 02",
        title: "Variation Management & Change Request Forms (CRF)",
        topics: [
          "Identifying deviations between contract drawings and site execution",
          "Preparing formal Change Request Forms (CRF) with detailed rate buildup",
          "Quantifying additional items, omitted items, and substituted specifications",
          "Securing timely client approval for scope changes and budget adjustments"
        ]
      },
      {
        number: "Module 03",
        title: "Site Progress Monitoring & Physical Audits",
        topics: [
          "Conducting structured weekly site visits and quality-quantity audits",
          "Recording physical percentage completion versus billing claims",
          "Preventing over-billing, front-loading, and phantom claims by contractors",
          "Daily site progress logs, photographic documentation, and diary records"
        ]
      },
      {
        number: "Module 04",
        title: "Management Information System (MIS) Reporting & Closeout",
        topics: [
          "Designing weekly and monthly MIS reports for executive management",
          "Summarizing financial commitments, pending claims, and cash-flow projections",
          "Defects Liability Period (DLP) retention release procedures",
          "Final Account reconciliation and contractual dispute settlement"
        ]
      }
    ],
    prerequisites: [
      "Experience with site operations or general construction workflows",
      "Basic understanding of contract terms"
    ],
    softwareCovered: ["MS Excel (IPC & CRF Templates)", "MIS Reporting Layouts", "Documentation Portals"],
    keyHighlights: [
      "Real IPC & Subcontractor billing spreadsheets",
      "Official Change Request Form (CRF) formats",
      "Live site audit checklists",
      "Direct mentoring from seasoned industry professionals"
    ]
  }
];

export const CORE_SKILLS = [
  {
    title: "Bill of Quantities (BOQ)",
    description: "Prepare structured, itemized BOQs following standard measurement rules for residential, commercial, and infrastructure projects.",
    icon: "FileSpreadsheet"
  },
  {
    title: "Tender Documentation Analysis",
    description: "Review tender drawings, specifications, and contract clauses to pinpoint hidden costs, ambiguities, and financial risks.",
    icon: "FileSearch"
  },
  {
    title: "Cost Estimation & Rate Analysis",
    description: "Build comprehensive unit rate calculations incorporating direct labor, materials, equipment, overheads, and profit margins.",
    icon: "Calculator"
  },
  {
    title: "Subcontractor & Supplier Negotiation",
    description: "Negotiate procurement rates effectively using volume benchmarks and transparent scope matrices.",
    icon: "Handshake"
  },
  {
    title: "Variations & Change Request Forms (CRF)",
    description: "Document, quantify, and justify project variations and extra items to protect project budgets throughout the lifecycle.",
    icon: "FileEdit"
  },
  {
    title: "Subcontractor & Architect Payments",
    description: "Certify accurate Interim Payment Certificates (IPCs), manage retention money, mobilization advances, and statutory deductions.",
    icon: "CreditCard"
  },
  {
    title: "Site Monitoring & M.I.S. Reports",
    description: "Conduct physical site progress inspections, verify milestones, and compile Management Information System (MIS) reports.",
    icon: "Activity"
  },
  {
    title: "Cost Breakdown Structure (CBS)",
    description: "Organize project expenditure into hierarchical cost codes aligned with WBS for transparent financial auditing.",
    icon: "FolderTree"
  },
  {
    title: "Earned Value Management (EVM)",
    description: "Apply PV, EV, AC, CV, SV, CPI, and SPI metrics to monitor performance and forecast Estimate at Completion (EAC).",
    icon: "TrendingUp"
  },
  {
    title: "Cost Variance & Details Analysis",
    description: "Perform granular variance analysis between estimated and actual site expenditures to prevent project cost overruns.",
    icon: "BarChart3"
  },
  {
    title: "Subcontractor Claim Validation",
    description: "Audit claims against contract agreements, specifications, and actual site measurements to ensure compliance.",
    icon: "ShieldAlert"
  },
  {
    title: "Construction Cost Control",
    description: "Implement proactive budgetary controls, procurement limits, and material wastage tracking on active jobsites.",
    icon: "Scale"
  }
];
