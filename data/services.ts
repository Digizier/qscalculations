export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scopeOfWork: string[];
  deliverables: string[];
  targetClients: string;
  iconName: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "boq-preparation",
    title: "Bill of Quantities (BOQ) Preparation",
    shortDesc: "Accurate, itemized, and transparent Bills of Quantities for architectural, structural, and finishing works.",
    fullDesc: "We prepare comprehensive, standardized Bills of Quantities (BOQ) from architectural drawings, structural layouts, and MEP blueprints. Our takeoff process ensures every single item—from bulk earthwork and reinforced concrete to specialized architectural finishes—is measured with precision to avoid contractor disputes and post-award surprises.",
    scopeOfWork: [
      "Digital quantity takeoff using high-precision calculation protocols",
      "Drafting clear, standardized item descriptions aligned with technical specifications",
      "Itemized schedules for Civil, Structural, Finishing, and External infrastructure works",
      "Incorporating standard wastage, lap lengths, and compaction factors"
    ],
    deliverables: [
      "Detailed Excel Measurement Sheets with formulas intact",
      "Itemized, Unpriced Tender BOQ for contractor bidding",
      "Priced Confidential Engineer's Estimate for budget benchmarking",
      "Material Takeoff Summary (Rebar, Cement, Sand, Aggregates, Bricks)"
    ],
    targetClients: "Architects, Project Developers, General Contractors, and Private Property Owners.",
    iconName: "FileSpreadsheet"
  },
  {
    id: "cost-estimation",
    title: "Construction Cost Estimation & Rate Analysis",
    shortDesc: "Market-calibrated unit rate analysis and total project budget forecasting prior to ground-breaking.",
    fullDesc: "Our estimation service provides owners, builders, and developers with realistic, data-driven financial projections. We conduct detailed rate analyses based on current regional market prices of materials, local labor output norms, specialized equipment hire, contractor overheads, and contingencies.",
    scopeOfWork: [
      "Granular unit rate buildup for each BOQ item",
      "Regional market surveys for raw materials (Steel, Cement, Brick, Sand, Finishes)",
      "Productivity analysis of masonry, bar-bending, shuttering, and carpentry crews",
      "Risk contingency allocation and escalation factor modeling"
    ],
    deliverables: [
      "Comprehensive Preliminary & Detailed Cost Estimates",
      "Rate Analysis Breakdown Sheets for all major construction items",
      "Cash Flow Requirement Schedule mapped to construction milestones",
      "Value Engineering Recommendations to reduce expenditure without compromising quality"
    ],
    targetClients: "Commercial Developers, Builders, Financial Institutions, and Private House Builders.",
    iconName: "Calculator"
  },
  {
    id: "tender-analysis",
    title: "Tender Documentation & Bid Analysis",
    shortDesc: "Critical evaluation of tender packages, contractor bid comparisons, and procurement risk mitigation.",
    fullDesc: "We assist clients in reviewing tender packages before issuing them to bidders, as well as scrutinizing incoming contractor bids. We identify hidden loopholes, unbalanced rates, front-loading, arithmetic mistakes, and discrepancies between specifications and drawings to ensure you select the best-value contractor.",
    scopeOfWork: [
      "Technical and commercial vetting of tender documents and contracts",
      "Formulation of bidder pre-qualification criteria and tender queries",
      "Comparative statement analysis of contractor quotations on a like-for-like baseline",
      "Identification of front-loaded rates, abnormal unit prices, and commercial exclusions"
    ],
    deliverables: [
      "Comparative Tender Bid Evaluation Matrix in Excel",
      "Commercial Risk Assessment & Tender Audit Report",
      "Contractor Recommendation and Negotiation Strategy Brief",
      "Pre-contract Clarification & Addendum Documentation"
    ],
    targetClients: "Employers, Project Management Consultants, and Tendering Contracting Firms.",
    iconName: "FileSearch"
  },
  {
    id: "cost-control",
    title: "Construction Cost Control & Budget Auditing",
    shortDesc: "Proactive budget monitoring to prevent cost overruns and maintain healthy project margins.",
    fullDesc: "Controlling costs during construction requires vigilant oversight of site expenditures, material orders, and subcontractor billings. We implement strict budget tracking procedures to identify cost overruns before they escalate into financial emergencies.",
    scopeOfWork: [
      "Establishing baseline budgets and monthly spend ceilings",
      "Tracking committed expenditures, purchase orders, and site requisitions",
      "Monitoring material consumption vs theoretical quantities to curb on-site theft and wastage",
      "Periodic financial health audits of ongoing construction sites"
    ],
    deliverables: [
      "Monthly Cost Control & Budget Variance Audit Reports",
      "Material Wastage and Reconciliation Statements",
      "Cost Trend Forecasting & Early Warning Bulletins",
      "Actionable cost mitigation recommendations for site management"
    ],
    targetClients: "Construction Companies, Property Investors, and Project Directors.",
    iconName: "Scale"
  },
  {
    id: "cbs-development",
    title: "Cost Breakdown Structure (CBS) Development",
    shortDesc: "Hierarchical cost coding systems that align project tasks with clear accounting ledgers.",
    fullDesc: "A well-structured Cost Breakdown Structure (CBS) allows companies to categorize, allocate, and track costs with surgical precision. We build custom CBS systems tailored to your company's operational hierarchy, connecting directly with your Work Breakdown Structure (WBS).",
    scopeOfWork: [
      "Designing multi-level cost code systems (Project > Discipline > Work Package > Cost Item)",
      "Mapping direct materials, direct labor, subcontracts, equipment, and indirect site overheads",
      "Standardizing cost coding across all company projects for historical benchmark data",
      "Training client site staff and accounting teams on proper cost allocation"
    ],
    deliverables: [
      "Customized Company Cost Breakdown Structure (CBS) Handbook",
      "Integrated WBS-CBS Matrix for ongoing projects",
      "Standardized Cost Code Dictionary and Data Entry Guidelines",
      "Ready-to-use Excel / ERP cost allocation template sheets"
    ],
    targetClients: "Contracting Enterprises, Engineering Consultancies, and Growing Construction Firms.",
    iconName: "FolderTree"
  },
  {
    id: "evm-management",
    title: "Earned Value Management (EVM) Implementation",
    shortDesc: "Integrating project scope, schedule, and cost metrics for rigorous performance analysis.",
    fullDesc: "Earned Value Management (EVM) is the gold standard for measuring objective project performance. We calculate Planned Value (PV), Earned Value (EV), and Actual Cost (AC) to deliver undeniable clarity on whether your project is ahead or behind schedule and under or over budget.",
    scopeOfWork: [
      "Establishing project performance measurement baselines (PMB)",
      "Periodic determination of work completed to compute true Earned Value",
      "Calculating Cost Variance (CV), Schedule Variance (SV), CPI, and SPI indices",
      "Forecasting Estimate at Completion (EAC) and Estimate to Complete (ETC)"
    ],
    deliverables: [
      "Monthly Executive EVM Performance Dashboard",
      "Cost & Schedule Index (CPI / SPI) Trend Curves",
      "Estimate at Completion (EAC) Forecast Reports under multiple scenarios",
      "Corrective Action Directives for recovery schedules"
    ],
    targetClients: "Large-Scale Contractors, Infrastructure Developers, and Corporate Project Owners.",
    iconName: "TrendingUp"
  },
  {
    id: "subcontractor-claims",
    title: "Subcontractor Claims & Payment Verification",
    shortDesc: "Impartial certification of Interim Payment Certificates (IPCs) and contract compliance.",
    fullDesc: "Handling subcontractor invoices requires meticulous checking of actual site measurements against contractual agreements. We independently verify billing claims, enforce deduction clauses, and prepare transparent payment certificates that eliminate disputes between contractors and subcontractors.",
    scopeOfWork: [
      "Physical cross-verification of subcontractor measurement sheets on site",
      "Verification of contract rates, billable stages, and quality sign-offs",
      "Calculation of statutory tax deductions, advance recovery, and retention money",
      "Auditing subcontractor delay claims, extension of time (EOT), and rate enhancements"
    ],
    deliverables: [
      "Certified Interim Payment Certificates (IPCs) and Architect Certificates",
      "Subcontractor Account Ledgers and Payment Reconciliation Statements",
      "Claim Audit Assessment Reports with legal and technical rationales",
      "Final Account Settlement Certificates"
    ],
    targetClients: "Main Contractors, Developers, Commercial Managers, and Subcontracting Companies.",
    iconName: "CreditCard"
  },
  {
    id: "crf-reporting",
    title: "Change Request Form (CRF) & Variation Reports",
    shortDesc: "Systematic documentation and monetary assessment of design modifications and site extras.",
    fullDesc: "Variations and scope changes are the leading causes of budget disputes in construction. We establish a formal Change Request Form (CRF) protocol to record, evaluate, and price every addition, omission, or substitution as soon as it arises, ensuring you never perform unpaid work.",
    scopeOfWork: [
      "Reviewing Architect/Engineer site instructions and revisions",
      "Formulating comprehensive Change Request Forms (CRF) with detailed cost and time impact",
      "Quantifying added or omitted items and building defensible star rates for novel items",
      "Negotiating variation approvals with clients and consultant representatives"
    ],
    deliverables: [
      "Official Change Request Form (CRF) Dossiers with supporting takeoffs",
      "Live Variation Tracking Register logging all submitted and approved changes",
      "Star Rate Buildup Calculations for non-BOQ items",
      "Contractual Variation Claim Justification Letters"
    ],
    targetClients: "Contractors, Subcontractors, Consultant Engineers, and Property Owners.",
    iconName: "FileEdit"
  },
  {
    id: "mis-reporting",
    title: "M.I.S. Reports & Site Progress Monitoring",
    shortDesc: "Executive Management Information System reporting with photographic verification.",
    fullDesc: "Senior management needs succinct, reliable data to make critical decisions. We conduct scheduled site visits, physically inspect progress against planned milestones, and compile executive MIS reports that bridge the gap between jobsite realities and boardroom visibility.",
    scopeOfWork: [
      "Conducting physical site audits and progress verification walkthroughs",
      "Collecting daily/weekly site logs, labor counts, equipment usage, and photographic evidence",
      "Aggregating physical, financial, procurement, and safety progress data",
      "Synthesizing complex multi-disciplinary data into clear executive summaries"
    ],
    deliverables: [
      "Weekly and Monthly Executive MIS Progress Dashboards",
      "High-Resolution Photographic Site Progress Reports",
      "Key Milestone Tracking and Critical Path Risk Overviews",
      "Labor Productivity and Resource Deployment Assessments"
    ],
    targetClients: "Company CEOs, Managing Directors, Overseas Pakistani Investors, and Lenders.",
    iconName: "Activity"
  },
  {
    id: "cost-variance",
    title: "Cost Variance & Financial Risk Analysis",
    shortDesc: "Granular discrepancy evaluation to identify root causes of financial variances.",
    fullDesc: "When site expenditure diverges from estimates, immediate diagnosis is essential. We perform granular cost variance analysis across material rates, labor hours, plant utilization, and scope changes to isolate the root cause and provide clear corrective action.",
    scopeOfWork: [
      "Deep-dive comparison between tender estimates, baseline budgets, and actual costs",
      "Dissecting variance components: Price Variance vs Quantity/Usage Variance",
      "Analyzing subcontractor over-expenditures and wastage leakage",
      "Formulating risk remediation plans to protect the project's bottom-line"
    ],
    deliverables: [
      "Comprehensive Cost Variance Forensic Audit Report",
      "Root Cause Analysis Matrix with financial impact quantification",
      "Financial Risk Heatmap for remaining project milestones",
      "Immediate Recovery & Spend Optimization Protocol"
    ],
    targetClients: "Contractors, Financial Controllers, Project Sponsors, and Turnaround Teams.",
    iconName: "BarChart3"
  }
];
