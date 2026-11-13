import React, { useState, useMemo } from 'react';
import {
  Calculator,
  FileCheck2,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Building2,
  Landmark,
  Scale,
  Cpu,
  Zap,
  HardHat,
  Eye,
  Award,
  Layers,
  Search,
  X,
  RotateCcw,
  Clock,
  FileText,
  FileSpreadsheet,
  Compass,
  FlaskConical,
  Hammer,
  Factory,
  Sun,
} from 'lucide-react';

const servicesData = [
  {
    id: '01',
    code: 'property-land-valuation',
    title: 'Property & Land Valuation',
    category: 'Property & Real Estate',
    icon: Building2,
    badgeColor: '#38bdf8',
    turnaround: '24–48 Hours',
    acceptedBy: 'All Banks, Registrars & Courts',
    description:
      'Statutory and commercial valuation of residential, commercial, industrial, and agricultural properties across Jaipur and Pan-India. Evaluated as per IBBI standards, CPWD schedules, and state circle rates.',
    deliverables: [
      'Residential Property Valuation (Bungalows, Independent Villas, Flats & Apartments)',
      'Commercial Real Estate Appraisals (Retail Malls, Office Buildings, Commercial Plots)',
      'Industrial Land & Factory Valuation (GIDC, RIICO, Warehouses, Logistics Hubs)',
      'Agricultural & Farmhouse Land Appraisals (DLC verification & land conversion status)',
      'High-Rise Apartments, Flats & Penthouse Fair Market Appraisals',
      'Plotted Developments, Sub-divided Land & Unbuilt Land Parcel Valuation',
      'Institutional Assets (Hotels, Hospitals, Private Colleges & University Campuses)',
      'Land & Building Combined Appraisals with Plinth Area Rate Analysis',
    ],
    documents: ['Registry / Sale Deed / Patta Copy', 'Approved Building Sanction Map', 'Latest Mutation / Jamabandi', 'Site Photographs & Boundaries'],
    highlight:
      'Conducted strictly as per IBBI Valuation Standards, CPWD Plinth Area Rates, and State DLC / Circle Rates.',
  },
  {
    id: '02',
    code: 'bank-mortgage-valuation',
    title: 'Bank & Mortgage Valuation',
    category: 'Banking & Finance',
    icon: Landmark,
    badgeColor: '#f59e0b',
    turnaround: '24–48 Hours',
    acceptedBy: 'Scheduled Commercial Banks & NBFCs',
    description:
      'Bankable Fair Market Value (FMV), Realizable Value (RV), and Forced Sale Value (FSV) reports for mortgage loans, Loan Against Property (LAP), project finance, and NPA resolution.',
    deliverables: [
      'Home Loan & Housing Finance Valuation for Nationalized & Private Commercial Banks',
      'Loan Against Property (LAP) & Commercial Collateral Security Appraisals',
      'Consortium Project Finance & Industrial Term Loan Collateral Valuations',
      'NBFC Empaneled & Pre-Sanction Property Technical Appraisals',
      'Distressed Asset, Auction Reserve Price & SARFAESI Security Valuation',
      'Periodic Portfolio Revaluation & Collateral Asset Verification for Lenders',
      'Stage-wise Construction Milestone Verification for Loan Drawdowns',
      'Technical Due Diligence & Title Alignment for Banking Approvals',
    ],
    documents: ['Chain of Title Deeds (13–30 Years)', 'Bank Loan Application / Reference', 'Sanctioned Map / Layout Plan', 'Property Tax Receipts'],
    highlight:
      'Dual valuation methodology (FMV + FSV) compliant with RBI Lending Guidelines & Bank Empanelment Standards.',
  },
  {
    id: '03',
    code: 'statutory-tax-valuation',
    title: 'Statutory & Capital Gains Tax Valuation',
    category: 'Tax & Corporate Legal',
    icon: Scale,
    badgeColor: '#10b981',
    turnaround: '24–48 Hours',
    acceptedBy: 'Income Tax Dept, ITAT & CBDT',
    description:
      'Registered Valuer reports for Income Tax scrutiny, Capital Gains Tax calculation (Section 50C, 54, 54EC), Fair Market Value as on 01-04-2001 for indexation benefit, and stamp duty disputes.',
    deliverables: [
      'Fair Market Value (FMV) as on 01-04-2001 for Ancestral & Inherited Property Indexation',
      'Section 50C / 43CA / 56(2)(x) Stamp Duty Value vs. Actual Consideration Defense Reports',
      'Capital Gains Exemption Reinvestment Appraisals (Section 54, 54F, 54EC)',
      'Income Tax Scrutiny, Search & Seizure Assessment Defense Valuation Reports',
      'Stamp Duty & Circle Rate Dispute Resolution for Sub-Registrar Offices',
      'Family Settlement, Partition Deed & Gift Deed Asset Appraisals',
      'Estate Tax & Probate Asset Appraisals for Legal Beneficiaries',
    ],
    documents: ['Title Deed prior to 2001 (if available)', 'Sub-Registrar Order / Notice', 'Current Circle Rate Sheet', 'Copy of Sale Agreement / Registry'],
    highlight:
      'Statutory compliance under Income Tax Act 1961 Section 55A and CBDT valuation notifications.',
  },
  {
    id: '04',
    code: 'ibc-nclt-corporate-valuation',
    title: 'IBC / NCLT / Corporate Valuation',
    category: 'Tax & Corporate Legal',
    icon: Briefcase,
    badgeColor: '#a78bfa',
    turnaround: '3–5 Working Days',
    acceptedBy: 'NCLT Benches, RPs & Committee of Creditors',
    description:
      'High-stakes asset appraisals under the Insolvency and Bankruptcy Code (IBC 2016) for Resolution Professionals (RPs), Committee of Creditors (CoC), and NCLT corporate restructuring.',
    deliverables: [
      'Fair Value and Liquidation Value calculation under IBBI (CIRP) Regulations 2016',
      'Asset Verification and Physical Reconciliation for Resolution Applicants',
      'Orderly Liquidation Value (OLV) and Forced Sale Value (FSV) Determination',
      'Corporate Restructuring, Mergers & Demergers Asset Swap Appraisals',
      'Financial Reporting under IndAS 16 (PPE), IndAS 36 (Impairment) & IndAS 113',
      'Asset Componentization & Remaining Useful Life Schedule II Compliance',
      'Expert Witness Testimony in NCLT & Commercial Dispute Tribunals',
    ],
    documents: ['CIRP Order / NCLT Notice', 'Audited Balance Sheets (Last 3 Yrs)', 'Fixed Asset Register (FAR)', 'Site Ownership Records'],
    highlight:
      'Strict adherence to IBBI Valuation Standards 2018 and Companies Act 2013 registered valuer provisions.',
  },
  {
    id: '05',
    code: 'chartered-engineer-certification',
    title: 'Chartered Engineer Certification (IEI MIE)',
    category: 'Chartered Engineering & DGFT',
    icon: FileCheck2,
    badgeColor: '#0284c7',
    turnaround: '24–48 Hours',
    acceptedBy: 'DGFT, CBIC Customs & Central Ministries',
    description:
      'Government-authorized Chartered Engineer certification by Corporate Member MIE of The Institution of Engineers (India) for DGFT schemes, Customs clearance, and Central Ministry subsidies.',
    deliverables: [
      'DGFT Advance Authorisation — Duty-free Import of Inputs & Raw Material Nexus (Appendix 4E / 4K)',
      'EPCG Scheme Nexus Certification for Capital Goods Import (Appendix 5A / 5B)',
      'Customs / CBIC — Second-Hand Plant & Machinery Import Appraisal & Residual Life',
      'MoFPI Grant-in-Aid Certification for Food Parks, Cold Chain & Agro Processing (PMKSY)',
      'Central & State MSME Investment Subsidy Certification for Plant & Machinery',
      'Useful Life of Assets Certification differing from Companies Act 2013 Schedule II',
      'SION Norms Fixation (Appendix 4A) & Duty Drawback Rate Fixation (Appendix 7E)',
      'Verification of Technical Documents & Vendor Credentials for PSU / Central Tenders',
    ],
    documents: ['Bill of Entry / Proforma Invoice', 'Machinery Technical Catalog & Specs', 'Manufacturing Process Flowchart', 'Import Export Code (IEC)'],
    highlight:
      'Attested by Corporate Member MIE (India) of The Institution of Engineers (India) with statutory pan-India validity.',
  },
  {
    id: '06',
    code: 'plant-machinery-valuation',
    title: 'Plant & Machinery Valuation',
    category: 'Industrial, Safety & Energy',
    icon: Cpu,
    badgeColor: '#ea580c',
    turnaround: '48–72 Hours',
    acceptedBy: 'Banks, Insolvency RPs, Insurance & Tax',
    description:
      'Technical and economic valuation of plant, machinery, heavy equipment, and industrial infrastructure using Depreciated Replacement Cost (DRC) and income methodologies.',
    deliverables: [
      'Industrial Plant & Complete Manufacturing Facility Comprehensive Appraisals',
      'Heavy Fabrication, CNC Machinery, Rolling Mills & Foundry Equipment Valuations',
      'Electrical Substation, Transformers, Switchgear & DG Sets Appraisals',
      'Textile Mills, Chemical Processing Units & Pharma Infrastructure Appraisals',
      'Balance Useful Life Calculation & Remaining Life Assessment (RLA)',
      'Scrap, Salvage & Dismantling Realization Assessment',
      'Insurance Reinstatement Value (RIV) as Surveyor and Loss Assessor',
    ],
    documents: ['Machinery Purchase Invoices / Bills', 'Fixed Asset Register (FAR)', 'Maintenance & Log Books', 'Nameplate Photos & Capacity Specs'],
    highlight:
      'Quantitative Depreciated Replacement Cost (DRC) & Balance Useful Life verification by certified mechanical engineering experts.',
  },
  {
    id: '07',
    code: 'construction-cost-verification',
    title: 'Project Cost & Construction Verification',
    category: 'Property & Real Estate',
    icon: HardHat,
    badgeColor: '#14b8a6',
    turnaround: '24–48 Hours',
    acceptedBy: 'Banks, Housing Finance & RERA',
    description:
      'Independent engineering verification of construction expenditure, physical progress monitoring, and stage-wise drawdown certification for financial institutions and builders.',
    deliverables: [
      'Stage-wise Construction Certification for Bank Loan Tranche Disbursements',
      'Bill of Quantities (BOQ) Audit & Construction Cost Estimation',
      'Cost-to-Complete Verification for Incomplete & Stalled Real Estate Projects',
      'Technical Due Diligence & Physical Milestone Audits for Real Estate Developments',
      'Building Completion Verification as per Approved Architectural Blueprints',
      'Contractor Bill Reconciliation & Measurement Book (MB) Validation',
    ],
    documents: ['Approved Sanction Plans', 'Structural Blueprints', 'Contractor BOQs & Invoices', 'Stage-wise Construction Photos'],
    highlight:
      'Physical site measurements verified with CPWD/PWD specifications and geo-tagged photographic evidence.',
  },
  {
    id: '08',
    code: 'property-inspection-due-diligence',
    title: 'Property Inspection & Technical Due Diligence',
    category: 'Property & Real Estate',
    icon: Eye,
    badgeColor: '#6366f1',
    turnaround: '24–48 Hours',
    acceptedBy: 'Property Buyers, Corporates & Law Firms',
    description:
      'Unbiased structural, architectural, and quality inspection of residential and commercial properties before purchase, handover, or corporate lease commitment.',
    deliverables: [
      'Pre-Purchase Independent Property Inspection & Defect Identification',
      'Structural Observation & Crack/Seepage Vulnerability Assessment',
      'Construction Quality Verification & Finish Specification Audit',
      'Carpet Area, Super Built-up Area & Floor Area Ratio (FAR) Physical Verification',
      'Electrical, Plumbing & Mechanical Installation Functional Health Check',
      'Comprehensive High-Resolution Photographic Inspection Dossier',
    ],
    documents: ['Builder Floor Plan / Layout Map', 'Agreement to Sell / Brochure', 'Possession Notice (if applicable)'],
    highlight:
      'Objective, non-destructive visual examination eliminating latent construction defects and legal boundary surprises.',
  },
  {
    id: '09',
    code: 'jda-local-authority-services',
    title: 'JDA & Local Authority Technical Reports',
    category: 'Regulatory & Compliance',
    icon: Layers,
    badgeColor: '#ec4899',
    turnaround: '48–72 Hours',
    acceptedBy: 'JDA, Nagar Nigam, RIICO & Town Planning',
    description:
      'Technical certificates and documentation guidance for Jaipur Development Authority (JDA), Nagar Nigam, RIICO, and local municipal bodies across Rajasthan.',
    deliverables: [
      'JDA Building Completion Technical Reports & Inspection Dossiers',
      'Local Authority Regularization & Setback Verification Certificates',
      'Building Height, FAR & Ground Coverage Compliance Assessment',
      'RIICO Industrial Plot Building Construction Milestone Certification',
      'Fire NOC & Architectural Safety Observation Documentation',
      'Site Boundary & Physical Dimension Confirmation Reports',
    ],
    documents: ['JDA Lease Deed / Patta Copy', 'Approved Building Map', 'Site Dimension Plan', 'Construction Site Photos'],
    highlight:
      'Tailored strictly to Rajasthan Urban Building Bye-laws and JDA development control regulations.',
  },
  {
    id: '10',
    code: 'special-purpose-valuation',
    title: 'Special Purpose Valuation (Court, Litigation & Visa)',
    category: 'Tax & Corporate Legal',
    icon: Award,
    badgeColor: '#d97706',
    turnaround: '24–48 Hours',
    acceptedBy: 'High Courts, District Courts & Foreign Consulates',
    description:
      'Legally defensible valuation certificates for High Court / Civil Court proceedings, family probate, divorce settlements, and foreign visa financial net worth proof.',
    deliverables: [
      'Civil Court Litigation & Expert Witness Valuation Reports',
      'Family Asset Partition, Succession & Will Probate Asset Assessment',
      'Visa & Immigration Financial Net Worth Asset Certification (Canada, USA, UK, Australia)',
      'Insurance Reinstatement Value Certification as Licensed Surveyor',
      'Land Acquisition Compensation Claim & Highway Widening Objections',
      'Solvency Certificate Asset Valuation for Government Tenders & Contracts',
    ],
    documents: ['Property Ownership Proofs', 'Court Case Reference / Notice', 'Passport Copy (for Visa Net Worth)', 'Valuation Requisition'],
    highlight:
      'Affidavit-backed, evidentiary valuation reports formatted for formal judicial scrutiny and international consulates.',
  },
  {
    id: '11',
    code: 'safety-energy-audits',
    title: 'Industrial Safety & Energy Audits',
    category: 'Industrial, Safety & Energy',
    icon: Zap,
    badgeColor: '#f97316',
    turnaround: '3–5 Working Days',
    acceptedBy: 'CEIG, DISCOMs, BEE & DISH',
    description:
      'Statutory electrical safety inspections, energy efficiency audits, and plant safety examinations authorized under CEA regulations, BEE, and Factories Act 1948.',
    deliverables: [
      'Chartered Electrical Safety Engineer (CESE) — Statutory HT/LT Installation Certification',
      'CEIG Solar Rooftop & Captive Solar Power Plant Electrical Clearance Inspection',
      'BEE Certified Energy Manager — Mandatory & Voluntary Industrial Energy Audits',
      'Factories Act 1948 Competent Person Inspection (Pressure Vessels, Cranes, Lifts, Hoists)',
      'Thermography Inspection — Infrared Thermal Scanning of Switchgear & Transformers',
      'Earthing Resistance Verification & Earth Pit Network Audit',
      'National Safety Council of India (NSCI / NSAT) Safety Audit & EHS Compliances',
    ],
    documents: ['Single Line Diagram (SLD)', 'Electricity Bills (Last 12 Months)', 'Connected Load List & Transformer Specs', 'Equipment Test Certificates'],
    highlight:
      'Dual authorization as Chartered Electrical Safety Engineer (CESE) and BEE Certified Energy Manager.',
  },
  {
    id: '12',
    code: 'fssai-compliance-services',
    title: 'FSSAI Regulatory Advisory',
    category: 'Regulatory & Compliance',
    icon: ShieldCheck,
    badgeColor: '#10b981',
    turnaround: '24–48 Hours',
    acceptedBy: 'FSSAI & Ministry of Food Processing (MoFPI)',
    description:
      'Comprehensive regulatory advisory for Food Business Operators (FBOs) covering mandatory licensing, hygiene auditing, and MoFPI subsidy technical project appraisal.',
    deliverables: [
      'New Central & State FSSAI License Filing, Renewal & Modification',
      'FSSAI Annual Returns (Form D1 / D2) & Mandatory Statutory Declarations',
      'Revocation of Suspended FSSAI Licenses & Appeal Processing',
      'FSSAI Authorized Food Safety Training & Third-Party Hygiene Audits',
      'MoFPI Grant-in-Aid Detailed Project Report (DPR) & Equipment Appraisal',
      'Advisory for Food Manufacturing, Cold Storage, Meat Processing, Dairy & E-commerce',
    ],
    documents: ['Manufacturing Unit Layout Plan', 'List of Directors / Partners', 'Machinery List with Horsepower', 'Water Test Report'],
    highlight:
      'Complete statutory coverage under Section 31(1) & 31(2) of the Food Safety and Standards Act 2006.',
  },
  {
    id: '13',
    code: 'autocad-electrical-drafting',
    title: 'AutoCAD 2D Electrical Drafting Services',
    category: 'Industrial, Safety & Energy',
    icon: Compass,
    badgeColor: '#0284c7',
    turnaround: '24–48 Hours',
    acceptedBy: 'Consultants, Contractors, DISCOMs & Industrial Plants',
    description:
      'Professional preparation, drafting, and modification of AutoCAD 2D electrical engineering drawings, single line diagrams (SLD), panel schematics, and equipment layouts compliant with Indian Standards (IS), National Electrical Code (NEC), and local DISCOM norms.',
    deliverables: [
      'Electrical Layout Drawings (Residential, Commercial & Industrial Facilities)',
      'Single Line Diagrams (SLD) for HT/LT Electrical Substation & Power Distribution',
      'LT/HT Panel Drawings (General Arrangement, Schematic, Wiring & Busbar Sizing)',
      'Cable Routing, Conduit Layout & Comprehensive Cable Schedule Preparation',
      'Lighting & Power Layout Design with Lux Calculation & Fixture Schedules',
      'Electrical Equipment Layout (Transformers, DG Sets, VFD Panels, HT Breakers & UPS)',
      'PDF/JPG to AutoCAD (DWG) Accurate Vector Conversion & Legacy Redrafting',
      'Existing Drawing Modification, As-Built Revision Control & Mark-up Incorporation',
      'BOQ-related Drawing Support, Bill of Materials (BOM) & Equipment Sizing Schedules',
    ],
    documents: [
      'Architectural Floor Plans / Layout Blueprints (DWG / PDF / Image)',
      'Load List / Connected Power Schedule & Voltage Levels',
      'Equipment Technical Specifications & Single Line Sketches',
      'Existing Drawings for Modification / As-Built Redrafting',
    ],
    highlight:
      'Drafted strictly as per Indian Electricity Rules, CEA regulations, IS/IEC drafting standards, and tender BOQ specifications.',
  },
  {
    id: '14',
    code: 'third-party-audit-inspection',
    title: 'Third-Party Audit & Inspection Services',
    category: 'Regulatory & Compliance',
    icon: FlaskConical,
    badgeColor: '#1d4ed8',
    turnaround: '24–48 Hours',
    acceptedBy: 'Buyers, Importers, Corporates, Retail Chains & Export Houses',
    description:
      'Independent third-party inspection (TPI), quality audits, supplier qualification, and statutory compliance verification for manufacturing facilities, factories, export consignments, and procurement supply chains pan-India.',
    deliverables: [
      'Pre-Dispatch Inspection (PDI) — Finished product quality, quantity, packaging & specifications verification',
      'Compliance Verification — Statutory, environmental, factory safety & regulatory standards compliance',
      'Hygiene & Sanitation Audits — Cleanliness protocols, sanitation systems & food/pharma GMP audits',
      'Plant Infrastructure Inspection — Physical manufacturing setup, machinery conditions & utility health check',
      'Documentation & Systems Inspection — Technical SOPs, quality manual, calibration logs & ISO records',
      'Supplier Survey & Vendor Qualification — Supplier capability assessment, financial & production capacity audit',
      'Detailed Factory Audit (DFA) — Comprehensive technical, manufacturing process & structural safety evaluation',
      'During Production Inspection (DUPRO) — In-line production quality check & early-stage defect prevention',
      'Container Loading Supervision (CLS) — Proper stowage, quantity count, seal verification & container integrity',
    ],
    documents: [
      'Purchase Order (PO) / Proforma Invoice & Technical Specifications',
      'Inspection Test Plan (ITP) / Quality Assurance Plan (QAP)',
      'Factory / Plant Site Address & Contact Person Details',
      'Packaging, Labeling & Container Loading Specifications',
    ],
    highlight:
      'Unbiased, comprehensive engineering inspection reports with high-resolution photographic evidence and statutory engineer seal.',
  },
  {
    id: '15',
    code: 'fabrication-services',
    title: 'Industrial Fabrication, PEB Shed & Iron Works',
    category: 'Industrial, Safety & Energy',
    icon: Hammer,
    badgeColor: '#f59e0b',
    turnaround: 'Turnkey Supply & Erection',
    acceptedBy: 'Factories, Industrial Plants, Warehouses & Commercial Buildings',
    description:
      'Certified engineering fabrication, precision welding, and turnkey on-site erection: Self-supporting industrial steel chimneys & boiler exhaust stacks, factory tin sheds, PEB industrial warehouses, heavy iron fabrication, and architectural metal/glass railing solutions.',
    deliverables: [
      'Industrial Steel Chimneys & Boiler Exhaust Stacks (Self-Supporting / Guyed, 15m to 45m+)',
      'Factory PEB Shed & Industrial Warehouse Fabrication (Tata Bluescope / JSW Sheeting)',
      'Heavy Iron Fabrication Work — Motorized Industrial Sliding Gates, Shutters & Security Grills',
      'Flue Gas Ducting, Industrial Breeching, Silencers & Heavy Process Piping Networks',
      'Structural Steel Framework, Overhead Crane Gantry Girders & Mezzanine Floors',
      'Circular Walkway Platforms, Caged Ladders & Spiral Fire Escape Staircases',
      'Stainless Steel (SS 304/316) & Toughened Glass Balcony / Staircase Railings',
      'Aluminium Architectural Glazing, Structural Facades & Soundproof UPVC Partitions',
      'High-Tensile Invisible Safety Grills & Retractable Insect Screen Solutions',
    ],
    documents: [
      'Architectural Site Layout / Structural General Arrangement (GA) Drawing',
      'Required Shed Dimensions / Chimney Height & Diameter Specifications',
      'Site Location, Soil Bearing Condition & Electrical Power Availability',
      'Material Grade & Coating Preferences (IS 2062 MS, SS 304, Galvanized)',
    ],
    highlight:
      'Designed and supervised by IIT Roorkee structural engineers with full AWS D1.1 certified welding and stamped stability certification.',
  },
  {
    id: '16',
    code: 'ceig-approval-consultancy',
    title: 'CEIG Approval & Statutory Electrical Inspection',
    category: 'Regulatory & Compliance',
    icon: ShieldCheck,
    badgeColor: '#38bdf8',
    turnaround: 'Fast-Track Liaisoning',
    acceptedBy: 'Chief Electrical Inspector to Government (CEIG Rajasthan & Central CEI)',
    description:
      'Complete statutory liaisoning, single-line drawing approval, site inspection coordination, and energization/charging certificates under Central Electricity Authority (Measures Relating to Safety and Electric Supply) Regulations 2023 for 11kV/33kV substations, transformers, high-capacity DG sets, and mega-watt solar rooftop/ground plants.',
    deliverables: [
      'CEIG Drawing Approval & Technical Scrutiny (Single Line Diagram & Substation General Arrangement)',
      'Safety Inspection Coordination with Office of Chief Electrical Inspector to Government',
      'Statutory Energization & Charging Permission under CEA Safety Regulations 2023',
      'High-Capacity Diesel Generator (DG Set) Installation Approval & CEIG Registration',
      'MW-Scale Solar Rooftop & Ground-Mounted Solar Plant Pre-Commissioning Approval',
      'HT Substation (11kV / 33kV / 132kV) Energization Clearances & Earthing Reports',
      'Periodic CEIG Safety Re-inspection & Compliance Rectification Reports',
      'Transformer, CT/PT & Relay Test Certificates Preparation for Inspectorate Audits',
    ],
    documents: [
      'Sanctioned Electrical Drawing & SLD (DWG/PDF)',
      'Equipment Test Certificates & Purchase Invoices',
      'Site Earthing Pit Resistance Reports & Earth Mesh Layout',
      'DISCOM Load Sanction / Feasibility Letter',
    ],
    highlight:
      '100% statutory approval track record across RIICO industrial zones, Discoms (JVVNL, JdVVNL, AVVNL), and national CEIG offices.',
  },
  {
    id: '17',
    code: 'electrical-contractor-license',
    title: 'Electrical Contractor License Consultancy',
    category: 'Regulatory & Compliance',
    icon: Award,
    badgeColor: '#f59e0b',
    turnaround: 'End-to-End Application',
    acceptedBy: 'Energy Department & Electrical Inspectorate, Rajasthan',
    description:
      "End-to-end documentation, application processing, and technical representation for obtaining new Class 'A', 'B', 'C', and 'D' Electrical Contractor Licenses, supervisor competency permits, wireman licenses, and periodic renewals under Rajasthan Electrical Inspectorate rules.",
    deliverables: [
      'Class A Electrical Contractor License Application (EHV / HT / LT Unlimited Voltage)',
      'Class B, C & D Contractor Licensing for Commercial & Residential Electrification',
      'Electrical Supervisor Competency Certificate Documentation & Exam Filing',
      'Wireman Permit Application, Character Verification & Document Attestation',
      'Testing Equipment Sizing, NABL Calibration Verification & Lab Mandate File',
      'License Renewal, Address Change & Competency Staff Addition/Replacement',
      'Bank Solvency Certificate & Financial Guarantee Documentation Support',
      'Pre-Audit Scrutiny of Electrical Equipment Kit (Megger, Earth Tester, Tong Tester)',
    ],
    documents: [
      'Staff Educational & Engineering Degree Certificates',
      'Equipment Calibration Certificates (NABL accredited laboratory)',
      'Bank Solvency & Proof of Registered Commercial Office',
      'Experience Logbooks & Previous Work Orders',
    ],
    highlight:
      'Comprehensive guidance ensuring error-free documentation and prompt license grant from the Electrical Inspectorate.',
  },
  {
    id: '18',
    code: 'ht-consumer-grievance',
    title: 'HT Consumer Grievance & Regulatory Consultancy',
    category: 'Regulatory & Compliance',
    icon: Scale,
    badgeColor: '#10b981',
    turnaround: 'Case-to-Case Scrutiny',
    acceptedBy: 'RERC, CGRF, Electricity Ombudsman & DISCOMs',
    description:
      'Specialized techno-legal consultancy defending High Tension (HT) and industrial electricity consumers in disputes with DISCOMs (JVVNL, JdVVNL, AVVNL). Representation before the Consumer Grievance Redressal Forum (CGRF), Electricity Ombudsman, and Rajasthan Electricity Regulatory Commission (RERC) for erroneous billing, unauthorized penalty reversals, and tariff rectifications.',
    deliverables: [
      'Industrial Power Bill Technical Audit & Erroneous Tariff Scrutiny',
      'Excess Contract Demand (MDI) Penalty Dispute Defense & Waiver Petitions',
      'Fuel Surcharge & Regulatory Surcharge Overcharge Recovery Claims',
      'Defective TOD Meter & Meter Reading Discrepancy Forensic Analysis',
      'Representation before Consumer Grievance Redressal Forum (CGRF - Circle & Zonal)',
      'Appeals & Petitions before Electricity Ombudsman (Rajasthan)',
      'RERC Tariff Regulations Interpretation & Industrial Consumer Defense',
      'Delayed Connection Interest & Recovery of Excess Security Deposit / ACD',
    ],
    documents: [
      'Past 12–24 Months Electricity Bills',
      'DISCOM Agreement & Sanction Letter',
      'Dispute Notice / Assessment Order from DISCOM',
      'Meter Data Download (MRI/MDAS Log) if available',
    ],
    highlight:
      'Helped industrial clients recover lakhs of rupees in illegal surcharge adjustments and wrongful billing penalties.',
  },
  {
    id: '19',
    code: 'fire-safety-audit',
    title: 'Fire Safety Audit & Fire NOC Consultancy',
    category: 'Industrial, Safety & Energy',
    icon: ShieldCheck,
    badgeColor: '#ef4444',
    turnaround: '3–5 Working Days',
    acceptedBy: 'Directorate of Fire Services, RIICO, Municipal Corporations & Factories Directorate',
    description:
      'Statutory Fire Safety Audits, Fire Risk Assessments, and turnkey Fire Department NOC (Provisional & Final) clearance consultancy as per National Building Code of India (NBC 2016 Part 4), IS 14489, and State Fire Prevention Acts for factories, warehouses, hotels, high-rises, and industrial sheds.',
    deliverables: [
      'Comprehensive Fire Safety Audit & Gap Analysis Report (IS 14489 / NBC 2016)',
      'Provisional & Final Fire NOC Consultancy from Municipal Fire Department',
      'Fire Hydrant, Wet Riser & Automatic Sprinkler Hydraulic Pressure Testing',
      'Fire Detection & Alarm System (Smoke / Heat / Beam Detector) Health Check',
      'Emergency Evacuation Plans, Fire Escape Signage & Exit Width Calculations',
      'Industrial Storage Fire Risk Assessment (Chemical, Textile, Engineering & Oil)',
      'Passive Fire Protection Evaluation (Fire Doors, Fire Barrier Coatings & Compartmentation)',
      'Annual Fire NOC Renewal & Mock Drill Training Certification',
    ],
    documents: [
      'Approved Architectural Site Plan & Elevation Blueprints',
      'Fire Fighting System Layout Drawing',
      'Building Completion / Occupancy Certificate',
      'Water Storage Tank Capacity Details',
    ],
    highlight:
      'Ensures full compliance with Factory Act, insurance underwriting norms, and local fire authority licensing guidelines.',
  },
  {
    id: '20',
    code: 'power-quality-analysis',
    title: 'Power Quality Analysis, Harmonics & APFC Optimization',
    category: 'Industrial, Safety & Energy',
    icon: Zap,
    badgeColor: '#06b6d4',
    turnaround: '2–3 Working Days',
    acceptedBy: 'Industrial Units, DISCOMs & Electrical Utilities',
    description:
      'Advanced power quality measurement, Total Harmonic Distortion (THD) profiling as per IEEE 519 standards, and customized Automatic Power Factor Correction (APFC) engineering to eliminate DISCOM kVAh penalties, protect sensitive electronics, and secure DISCOM power factor rebate incentives.',
    deliverables: [
      'Class A Power Quality Analyzer On-Site Logging (Voltage, Current, Frequency & Unbalance)',
      'Harmonics Audit & IEEE 519 Total Harmonic Distortion (THDv & THDi) Analysis',
      'Transient, Sags, Swells & Voltage Flicker Identification in Industrial Grids',
      'Active & Passive Harmonic Filter Design, Sizing & Tuning Calculation',
      'APFC Panel Sizing & Real-time Power Factor Optimization (Maintaining 0.99 PF)',
      'Elimination of DISCOM Low Power Factor Penalties & kVAh Billing Surprises',
      'Transformer Overheating & Neutral Overcurrent Mitigation Engineering',
      'Detailed Energy Loss & Carbon Footprint Reduction Recommendations',
    ],
    documents: [
      'Latest 6 Months Detailed Electricity Bills (kVAh / kWh details)',
      'Single Line Diagram (SLD) & Connected Load Schedule',
      'Transformer & DG Rating Plates',
      'Existing APFC Panel Ratings & Capacitor Steps',
    ],
    highlight:
      'Direct savings on electricity bills by transforming low-PF penalties into lucrative 1%–2% monthly bill discounts.',
  },
  {
    id: '21',
    code: 'plant-capacity-certificate',
    title: 'Plant Production Capacity Certification',
    category: 'Chartered Engineering & DGFT',
    icon: Factory,
    badgeColor: '#d97706',
    turnaround: '24–48 Hours',
    acceptedBy: 'State Pollution Control Board (RSPCB/CPCB), DIC, MSME & Customs',
    description:
      'Statutory Chartered Engineer certificate verifying installed manufacturing capacity, machine throughput rating, bottleneck process analysis, and production capability for State Pollution Control Boards (Consent to Establish/Operate - CTE/CTO), District Industries Centre (DIC), and central ministries.',
    deliverables: [
      'Installed vs. Rated Manufacturing Capacity Engineering Computation',
      'Machine-by-Machine Throughput & Process Bottleneck Technical Audit',
      'Statutory Certificate for RSPCB / CPCB Consent to Establish (CTE) & Operate (CTO)',
      'District Industries Centre (DIC) Capital Subsidy Capacity Attestation',
      'Ministry of Commerce & Customs Duty Remission / Export Obligation Certification',
      'Raw Material to Finished Goods Mass Balance & Waste Ratio Validation',
      'Technical Feasibility & Capacity Verification for Bank Working Capital',
      'Comprehensive Photographic Site Inspection Report with Chartered Engineer Seal',
    ],
    documents: [
      'Plant & Machinery Invoices & Technical Specifications',
      'Manufacturing Flowchart & Raw Material Input-Output Ratio',
      'Electricity Connected Load Sanction',
      'Existing Pollution Board Consent (if applicable)',
    ],
    highlight:
      'Legally attested by Corporate Member of IEI (Chartered Engineer India) for seamless statutory acceptance.',
  },
  {
    id: '22',
    code: 'solar-consultancy-net-metering',
    title: 'PM Surya Ghar & Solar Rooftop Net-Metering Consultancy',
    category: 'Industrial, Safety & Energy',
    icon: Sun,
    badgeColor: '#eab308',
    turnaround: '24–48 Hours',
    acceptedBy: 'National Portal for Rooftop Solar, DISCOMs & MNRE',
    description:
      'Comprehensive technical consultancy for PM Surya Ghar Muft Bijli Yojana vendor registration, DISCOM net-metering feasibility, plant capacity sizing, and subsidy release documentation across Rajasthan and pan-India.',
    deliverables: [
      'PM Surya Ghar National Portal Solar EPC Vendor Empanelment & Onboarding',
      'DISCOM (JVVNL, JdVVNL, AVVNL) Net-Metering Feasibility & Application Liaison',
      'Solar PV Plant Capacity Sizing & Yield Estimation (PVsyst Simulation)',
      'Grid Interconnection Study, Bi-directional Meter Testing & Synchronization',
      'Central Government Subsidy Release Follow-up & Documentation Filing',
      'Industrial & Commercial CAPEX/RESCO Net-Metering Compliance Audits',
      'Solar Inverter, ACDB/DCDB & Array Earthing Pre-Commissioning Inspection',
      'Structural Stability Certificate & Wind Load Attestation for Rooftops',
    ],
    documents: [
      'Latest Electricity Bill & CA Number',
      'Aadhaar / PAN & Property Ownership Proof',
      'Vendor GST & Bank Account Details',
      'Proposed Solar PV Array Layout & Inverter Specs',
    ],
    highlight:
      'One-stop technical bridge between solar installers, consumers, and electrical DISCOMs.',
  },
];

// Quick search suggestion chips
const QUICK_SUGGESTIONS = [
  { label: 'CEIG Approval', query: 'CEIG' },
  { label: 'Electrical Contractor License', query: 'Contractor License' },
  { label: 'HT Consumer Grievance', query: 'Grievance' },
  { label: 'Fire Safety Audit', query: 'Fire' },
  { label: 'Power Quality & APFC', query: 'Harmonics' },
  { label: 'Plant Capacity Certificate', query: 'Plant Capacity' },
  { label: 'PM Surya Ghar Solar', query: 'Surya Ghar' },
  { label: 'Fabrication & PEB Shed', query: 'Fabrication' },
  { label: 'Property Valuation', query: 'Property' },
  { label: 'Bank Loan (FMV/FSV)', query: 'Bank' },
  { label: 'DGFT Advance Auth', query: 'Advance Authorisation' },
  { label: 'AutoCAD Drafting', query: 'AutoCAD' },
];

// Sector categories for clean filtering
const CATEGORIES = [
  'All',
  'Property & Real Estate',
  'Banking & Finance',
  'Tax & Corporate Legal',
  'Chartered Engineering & DGFT',
  'Industrial, Safety & Energy',
  'Regulatory & Compliance',
];

const CATEGORY_BADGES = {
  'property-land-valuation': 'VALUATION & APPRAISAL',
  'bank-mortgage-valuation': 'BANKING & FINANCE',
  'statutory-tax-valuation': 'TAX & COMPLIANCE',
  'ibc-nclt-corporate-valuation': 'IBC & NCLT VALUATION',
  'chartered-engineer-certification': 'CERTIFICATION',
  'plant-machinery-valuation': 'VALUATION & APPRAISAL',
  'construction-cost-verification': 'PROJECT AUDIT',
  'property-inspection-due-diligence': 'DUE DILIGENCE',
  'jda-local-authority-services': 'REGULATORY SUPPORT',
  'special-purpose-valuation': 'LEGAL & VISA',
  'safety-energy-audits': 'AUDIT & COMPLIANCE',
  'fssai-compliance-services': 'REGULATORY SUPPORT',
  'autocad-electrical-drafting': 'ENGINEERING SERVICES',
  'third-party-audit-inspection': 'TESTING & INSPECTION',
  'fabrication-services': 'ENGINEERING SERVICES',
  'ceig-approval-consultancy': 'AUDIT & COMPLIANCE',
  'electrical-contractor-license': 'LICENSING & ADVISORY',
  'ht-consumer-grievance': 'UTILITY ADVISORY',
  'fire-safety-audit': 'AUDIT & COMPLIANCE',
  'power-quality-analysis': 'TESTING & INSPECTION',
  'plant-capacity-certificate': 'CERTIFICATION',
  'solar-consultancy-net-metering': 'SOLAR & RENEWABLE'
};

export default function ServicesGrid({ onOpenQuote, onNavigateService }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const handleNavigate = (code, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const targetUrl = `/services/${code}`;
    window.history.pushState({}, '', targetUrl);
    if (onNavigateService) {
      onNavigateService(targetUrl);
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Keyword highlighting helper
  const highlightText = (text, query) => {
    if (!query || !query.trim() || typeof text !== 'string') return text;
    const cleanQuery = query.trim();
    const regex = new RegExp(`(${cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          style={{
            background: 'rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontWeight: 700,
            padding: '1px 4px',
            borderRadius: '4px',
          }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Filter services by category AND real-time search query
  const filteredServices = useMemo(() => {
    let list = servicesData;

    if (activeFilter !== 'All') {
      list = list.filter((s) => s.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((s) => {
        const inTitle = s.title.toLowerCase().includes(q);
        const inCat = s.category.toLowerCase().includes(q);
        const inDesc = s.description.toLowerCase().includes(q);
        const inHighlight = s.highlight.toLowerCase().includes(q);
        const inDeliverables = s.deliverables.some((d) => d.toLowerCase().includes(q));
        const inAccepted = s.acceptedBy?.toLowerCase().includes(q);
        const inDocs = s.documents?.some((doc) => doc.toLowerCase().includes(q));
        return inTitle || inCat || inDesc || inHighlight || inDeliverables || inAccepted || inDocs;
      });
    }

    return list;
  }, [activeFilter, searchQuery]);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleChipClick = (query) => {
    if (searchQuery.toLowerCase() === query.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(query);
      setActiveFilter('All');
    }
  };

  return (
    <section id="services" style={{ position: 'relative', background: '#0b0d14', color: '#eef0f5', padding: '16px 0 32px' }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div className="section-header" style={{ marginBottom: '28px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            marginBottom: '12px'
          }}>
            <ShieldCheck size={14} />
            <span>15 STATUTORY &amp; VALUATION VERTICALS</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 600, color: '#eef0f5', margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            Services <span style={{ color: '#38bdf8' }}>We Offer</span>
          </h2>
          <p style={{ color: '#a3a9b8', fontSize: '0.98rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            From statutory asset valuation, bank mortgage appraisals, and capital gains tax reports to DGFT Chartered Engineer certification, CESE electrical safety, and industrial plant valuation.
          </p>

          {/* 🔍 Interactive Floating Search Bar */}
          <div
            style={{
              maxWidth: '680px',
              margin: '28px auto 0 auto',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '6px 14px',
              }}
            >
              <Search size={18} color="#38bdf8" style={{ flexShrink: 0, marginRight: '10px' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 15 services (e.g. AutoCAD Drafting, Property, Bank Loan, Capital Gains 50C, DGFT, Machinery)..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.92rem',
                  fontFamily: 'inherit',
                  color: '#eef0f5',
                  padding: '6px 0',
                }}
                aria-label="Search services and statutory compliances"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    marginRight: '8px',
                    flexShrink: 0,
                  }}
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
              {searchQuery && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: filteredServices.length > 0 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: filteredServices.length > 0 ? '#34d399' : '#f87171',
                    border: `1px solid ${filteredServices.length > 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {filteredServices.length} {filteredServices.length === 1 ? 'Match' : 'Matches'}
                </span>
              )}
            </div>

            {/* Quick 1-Tap Search Suggestion Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                marginTop: '14px',
              }}
            >
              <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Popular:</span>
              {QUICK_SUGGESTIONS.map((chip, idx) => {
                const isSelected = searchQuery.toLowerCase() === chip.query.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query)}
                    style={{
                      background: isSelected ? '#38bdf8' : '#11141c',
                      border: `1px solid ${isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '6px',
                      padding: '4px 11px',
                      fontSize: '0.74rem',
                      fontWeight: isSelected ? 600 : 500,
                      color: isSelected ? '#07080d' : '#a3a9b8',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sector Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '22px',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: activeFilter === cat ? 600 : 500,
                  cursor: 'pointer',
                  background: activeFilter === cat ? '#38bdf8' : '#11141c',
                  border: activeFilter === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  color: activeFilter === cat ? '#07080d' : '#a3a9b8',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State when 0 services match search */}
        {filteredServices.length === 0 && (
          <div
            className="glass-card"
            style={{
              maxWidth: '620px',
              margin: '30px auto',
              textAlign: 'center',
              padding: '40px 24px',
              border: '1px dashed rgba(245, 158, 11, 0.4)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                margin: '0 auto 16px auto',
                borderRadius: '50%',
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
              }}
            >
              <Search size={26} />
            </div>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
              No services found for &ldquo;{searchQuery}&rdquo;
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
              Looking for a custom statutory compliance, government clearance, or technical audit? Our corporate Chartered Engineers provide tailored engineering solutions across all ministries.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={clearSearch} className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
                <RotateCcw size={15} />
                <span>Reset Search</span>
              </button>
              <button onClick={() => onOpenQuote('Custom Inquiry', { notes: `User searched for: ${searchQuery}` })} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
                <span>Request Custom Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Services Grid (12 Verticals) */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const categoryBadge = CATEGORY_BADGES[service.code] || service.category.toUpperCase();

            return (
              <div
                key={service.id}
                id={service.code}
                onClick={(e) => handleNavigate(service.code, e)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: '#11141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '36px 24px 28px',
                  borderRadius: '16px',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.45)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
                }}
              >
                {/* Route alias anchors for seamless deep-linking */}
                {service.code === 'chartered-engineer-certification' && <span id="chartered-engineer" style={{ position: 'absolute', top: '-85px' }} />}
                {service.code === 'plant-machinery-valuation' && (
                  <>
                    <span id="machinery-valuation" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="valuation" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="assets-valuation" style={{ position: 'absolute', top: '-85px' }} />
                  </>
                )}
                {service.code === 'fssai-compliance-services' && <span id="fssai" style={{ position: 'absolute', top: '-85px' }} />}
                {service.code === 'autocad-electrical-drafting' && (
                  <>
                    <span id="autocad-drafting" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="autocad-electrical-drafting" style={{ position: 'absolute', top: '-85px' }} />
                  </>
                )}
                {service.code === 'third-party-audit-inspection' && (
                  <>
                    <span id="third-party-inspection" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="inspection-services" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="audit-inspection" style={{ position: 'absolute', top: '-85px' }} />
                  </>
                )}
                {service.code === 'fabrication-services' && (
                  <>
                    <span id="fabrication" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="tin-shed" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="iron-fabrication" style={{ position: 'absolute', top: '-85px' }} />
                    <span id="tin-shed-fabrication" style={{ position: 'absolute', top: '-85px' }} />
                  </>
                )}

                {/* Circular Top Icon (as in user screenshot) */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: `${service.badgeColor}18`,
                    border: `1px solid ${service.badgeColor}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: service.badgeColor,
                    marginBottom: '16px',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <Icon size={26} />
                </div>

                {/* Category Pill Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: service.badgeColor,
                    background: `${service.badgeColor}14`,
                    border: `1px solid ${service.badgeColor}30`,
                    padding: '3px 12px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    marginBottom: '12px',
                  }}
                >
                  {categoryBadge}
                </div>

                {/* Service Title */}
                <h3
                  className="service-card-title"
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '18px',
                    lineHeight: 1.35,
                    minHeight: '2.7em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {highlightText(service.title, searchQuery)}
                </h3>

                {/* 3 Green Checkmark Highlights (matching Shree Kalyan layout) */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '9px',
                    width: '100%',
                    maxWidth: '235px',
                    margin: '0 auto 24px',
                    textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>Engineering Consultancy</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>Technical Documentation</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.86rem', color: '#cbd5e1' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#10b981',
                        flexShrink: 0,
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>Regulatory Support</span>
                  </div>
                </div>

                {/* Card Action Links: Learn More -> and Request Quote */}
                <div style={{ width: '100%', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={`/services/${service.code}`}
                    onClick={(e) => handleNavigate(service.code, e)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      color: '#38bdf8',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#60a5fa'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#38bdf8'; }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround });
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = '#94a3b8';
                    }}
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}        </div>
      </div>
    </section>
  );
}
