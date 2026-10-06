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
];

// Quick search suggestion chips
const QUICK_SUGGESTIONS = [
  { label: 'AutoCAD Drafting', query: 'AutoCAD', icon: '📐' },
  { label: 'Property Valuation', query: 'Property', icon: '🏢' },
  { label: 'Bank Loan (FMV/FSV)', query: 'Bank', icon: '🏛️' },
  { label: 'Capital Gains (2001 FMV)', query: 'Capital Gains', icon: '⚖️' },
  { label: 'DGFT Advance Auth', query: 'Advance Authorisation', icon: '⚡' },
  { label: 'Plant & Machinery', query: 'Machinery', icon: '⚙️' },
  { label: 'IBC / NCLT CIRP', query: 'IBC', icon: '💼' },
  { label: 'CEIG Solar & CESE', query: 'CESE', icon: '☀️' },
  { label: 'JDA Completion', query: 'JDA', icon: '📐' },
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

export default function ServicesGrid({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

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
    <section id="services" className="section section-light" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-badge">
            <Sparkles size={15} />
            <span>12 Comprehensive Engineering &amp; Valuation Verticals</span>
          </div>
          <h2 className="section-title">
            Services <span className="gradient-text">We Offer</span>
          </h2>
          <p className="section-description">
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
              className="services-search-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--radius-full)',
                padding: '6px 12px 6px 18px',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <Search size={20} color="#1d4ed8" style={{ flexShrink: 0, marginRight: '10px' }} />
              <input
                type="text"
                className="services-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 13 services (e.g. AutoCAD Drafting, Property, Bank Loan, Capital Gains 50C, DGFT, Machinery)..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.94rem',
                  fontFamily: 'inherit',
                  padding: '8px 0',
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
                    borderRadius: 'var(--radius-full)',
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
                      background: isSelected ? '#1e40af' : '#ffffff',
                      border: `1px solid ${isSelected ? '#1e40af' : '#cbd5e1'}`,
                      borderRadius: 'var(--radius-full)',
                      padding: '4px 11px',
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      color: isSelected ? '#ffffff' : '#475569',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{chip.icon}</span>
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
                className={`service-filter-chip ${activeFilter === cat ? 'active' : ''}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)',
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
            const hasActiveSearch = Boolean(searchQuery.trim());
            // Auto-expand card if user searched so matching bullet points are visible
            const isExpanded = hasActiveSearch || expandedId === service.id;
            const previewItems = hasActiveSearch ? service.deliverables : service.deliverables.slice(0, 4);
            const extraItems = hasActiveSearch ? [] : service.deliverables.slice(4);

            return (
              <div
                key={service.id}
                id={service.code}
                className="glass-card service-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${service.badgeColor}`,
                  boxShadow: hasActiveSearch ? `0 10px 30px ${service.badgeColor}22` : undefined,
                  transition: 'all 0.3s ease',
                  padding: '24px 22px',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
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

                <div>
                  {/* Card Header: Icon + Number */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${service.badgeColor}18`,
                        border: `1px solid ${service.badgeColor}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.badgeColor,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <span
                      className="service-card-num"
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        color: '#64748b',
                      }}
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* Category tag */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: service.badgeColor,
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title" style={{ fontSize: '1.22rem', marginBottom: '8px', lineHeight: 1.35 }}>
                    {highlightText(service.title, searchQuery)}
                  </h3>

                  {/* Badges: Turnaround + Acceptance */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#e2e8f0',
                      }}
                    >
                      <Clock size={11} color="#f59e0b" />
                      <span>{service.turnaround}</span>
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: `${service.badgeColor}12`,
                        border: `1px solid ${service.badgeColor}30`,
                        color: service.badgeColor,
                      }}
                    >
                      <span>🏛️ {service.acceptedBy}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="service-card-desc"
                    style={{
                      fontSize: '0.86rem',
                      marginBottom: '16px',
                      lineHeight: 1.6,
                      color: '#cbd5e1',
                    }}
                  >
                    {highlightText(service.description, searchQuery)}
                  </p>

                  {/* Sub-services / Scope of Services */}
                  <div style={{ marginBottom: '8px' }}>
                    <div
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '8px',
                      }}
                    >
                      Scope of Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: 0, padding: 0 }}>
                      {previewItems.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.82rem',
                            lineHeight: 1.48,
                          }}
                        >
                          <Check size={14} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span className="service-deliverable-item">{highlightText(item, searchQuery)}</span>
                        </li>
                      ))}

                      {/* Expandable extra items (when not actively searching) */}
                      {!hasActiveSearch && isExpanded &&
                        extraItems.map((item, i) => (
                          <li
                            key={`extra-${i}`}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '8px',
                              fontSize: '0.82rem',
                              lineHeight: 1.48,
                            }}
                          >
                            <Check size={14} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span className="service-deliverable-item">{highlightText(item, searchQuery)}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Show more / less toggle (hidden during active search) */}
                    {!hasActiveSearch && extraItems.length > 0 && (
                      <button
                        onClick={() => toggleExpand(service.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginTop: '10px',
                          background: 'none',
                          border: 'none',
                          color: service.badgeColor,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          padding: '4px 0',
                          transition: 'opacity 0.2s ease',
                        }}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={14} /> Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={14} /> +{extraItems.length} More Deliverables
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div style={{ marginTop: '18px' }}>
                  <button
                    onClick={() => onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround })}
                    className="service-request-btn"
                    title={`Request Quote and fill inquiry for ${service.title}`}
                    type="button"
                  >
                    <span className="service-request-btn-content">
                      <FileCheck2 size={15} className="service-request-btn-icon" />
                      <span>Request Quote / Inquiry</span>
                    </span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
