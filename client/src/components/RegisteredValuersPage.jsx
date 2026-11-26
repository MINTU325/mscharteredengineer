import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  PhoneCall,
  MessageSquare,
  Building2,
  Landmark,
  Scale,
  Award,
  Search,
  ExternalLink,
  MapPin,
  Mail,
  Globe,
  Briefcase,
  Layers,
  Clock,
  TrendingUp,
  FileCheck2,
  Check,
  ChevronDown,
  Table,
  LayoutGrid,
  Sparkles,
  ArrowRight,
  Filter,
  Cpu
} from 'lucide-react';

// ── 1. Interactive Slider Showcase Data ─────────────────────────────────────
const VALUATION_SLIDES = [
  {
    id: 1,
    image: '/seo/plant-machinery-asset-valuation-india.jpg',
    badge: 'IBBI Registered Valuers · Plant & Machinery Asset Class',
    title: 'Plant, Machinery & Industrial Factory Valuations',
    subtitle: 'Physical technical inspection, balance useful life (RUL) estimation, and Fair Market Value (FMV) assessment for manufacturing plants, heavy machinery, and industrial utilities under Companies Act 2013 & IndAS 16.',
    highlight: 'Statutory Bank & Customs Accepted',
    tag: 'Plant & Machinery',
    serviceKey: 'Immovable Asset – Book Value Valuation',
    pill: 'Factories & Machinery',
    statPillar: 'Companies Act 2013 · IndAS 16'
  },
  {
    id: 2,
    image: '/corridors/mumbai_pune_hero.jpg',
    badge: 'IBBI Registered Valuers · Securities & Financial Assets',
    title: 'Corporate M&A, DCF & Share Transfer Valuations',
    subtitle: 'Statutory Discounted Cash Flow (DCF), Net Asset Value (NAV), and PE multiple appraisals for FDI/FEMA compliance, Section 247, rights issues, and company mergers under NCLT.',
    highlight: '100% RoC & RBI Compliant',
    tag: 'Corporate & M&A',
    serviceKey: 'Share Transfer Valuation (DCF Method)',
    pill: 'DCF & Share Transfer',
    statPillar: 'Rule 11UA(2) & FEMA Standards'
  },
  {
    id: 3,
    image: '/corridors/chemical_refinery_plant.jpg',
    badge: 'Section 34 AB Wealth Tax Act · CBDT Approved',
    title: 'Capital Gains 50C & 2001 Fair Market Valuation',
    subtitle: 'Government-approved valuation reports for capital gains tax indexation as on 01-04-2001, defending Section 50C circle rate disputes before Assessing Officers & Income Tax Appellate Tribunal (ITAT).',
    highlight: '100% Tax Dept Acceptance',
    tag: 'Income Tax & Capital Gains',
    serviceKey: 'Capital Gain Valuation',
    pill: 'Tax & Section 50C',
    statPillar: 'Income Tax Act 1961 (Sec 50C, 54, 55)'
  },
  {
    id: 4,
    image: '/projects/architectural/luxury-classical-villa.webp',
    badge: 'Commercial Banks & NBFCs Empanelled · SARFAESI Standards',
    title: 'Bank Mortgage & Secured Lending Valuations',
    subtitle: 'Comprehensive dual-methodology appraisals establishing Fair Market Value (FMV), Realizable Value, and Forced Sale Value (FSV) for industrial estates, commercial complexes, and prime real estate.',
    highlight: '24–48 Hours Turnaround',
    tag: 'Banking & Mortgage',
    serviceKey: 'Investment Valuation',
    pill: 'Bank Loan & FSV',
    statPillar: 'SARFAESI Act & RBI Prudent Norms'
  },
  {
    id: 5,
    image: '/projects/architectural/glass-pavilion-terrace.webp',
    badge: 'Commercial Real Estate & Hospitality Valuations',
    title: 'Hotels, Resorts, Malls & Institutional Valuations',
    subtitle: 'Income capitalization of net operating yields (NOI), replacement cost method, and DCF hospitality projections for hotels, luxury resorts, cinemas, and educational campuses across India.',
    highlight: 'Income Capitalization Approach',
    tag: 'Hospitality & Commercial',
    serviceKey: 'Hotel / Resort / Institutional / Cinema Valuation',
    pill: 'Hotels & Resorts',
    statPillar: 'Income Capitalization Approach'
  }
];

// ── 2. All 13 Core Valuation Services Specified by User ─────────────────────
const VALUATION_SERVICES_DATA = [
  {
    id: '01',
    title: 'Capital Gain Valuation',
    category: 'Taxation & CBDT',
    turnaround: '24–48 Hours',
    actCompliance: 'Income Tax Act 1961 (Sec 50C, 54, 55)',
    description: 'Statutory Fair Market Value (FMV) assessment as on 01-04-2001 for ancestral and long-held real estate assets, establishing lawful cost of acquisition for indexation benefits and defending Section 50C stamp duty circle rate disputes.',
    deliverables: [
      'Fair Market Value as on 01-04-2001 valuation report',
      'Circle rate (DLC) vs actual market comparison study',
      'Cost of Improvement indexation schedules',
      'Expert justification for ITAT / CIT appeals'
    ],
    documentsRequired: ['Sale Deed / Title Document', 'Property Photographs & Site Plan', 'Revenue Map / Khasra Girdawari', 'DLC Rate extracts (if available)']
  },
  {
    id: '02',
    title: 'Income-tax Valuation',
    category: 'Taxation & CBDT',
    turnaround: '24–48 Hours',
    actCompliance: 'CBDT Rules & Section 56(2)(x)',
    description: 'Authorized registered valuation reports for tax assessment scrutiny, penalty defense, Section 43CA / 56(2)(x) undervaluation inquiries, and transfer pricing appraisals for domestic and corporate transactions.',
    deliverables: [
      'Statutory Income Tax compliant valuation report',
      'Section 56(2)(x) and Section 43CA analysis',
      'CPWD rate schedule cost assessment',
      'Valuer affidavit for Assessing Officer (AO)'
    ],
    documentsRequired: ['AO Scrutiny Notice / Reference copy', 'Ownership deeds & approved drawings', 'Ledger extracts of asset investment', 'PAN & identity proofs']
  },
  {
    id: '03',
    title: 'Visa / Embassy Valuation',
    category: 'Legal & Immigration',
    turnaround: '24 Hours Express',
    actCompliance: 'Embassy & Foreign Consulates Protocol',
    description: 'Comprehensive Financial Net Worth and Immovable Property Valuation Certificate required for student visas (USA, UK, Canada, Australia, Europe), work permits, tourist visitor visas, and permanent residency (PR) petitions.',
    deliverables: [
      'Official Embassy-compliant Net Worth Certificate',
      'Immovable real estate valuation schedule',
      'CA / Wealth tax approved stamp and sign',
      'Currency conversion annexure (USD, CAD, GBP, EUR)'
    ],
    documentsRequired: ['Title deeds of applicant / parents / sponsors', 'Municipal house tax or electricity bill', 'Passport copy of primary visa applicant', 'Family relationship tree (if sponsor)']
  },
  {
    id: '04',
    title: 'Family Partition Valuation',
    category: 'Civil & Settlement',
    turnaround: '2–3 Days',
    actCompliance: 'Hindu Succession Act & Indian Registration Act',
    description: 'Equitable and neutral appraisal of undivided ancestral properties, residential estates, agricultural holdings, and commercial spaces to ensure transparent, fair, and legally sound asset division among family members.',
    deliverables: [
      'Equalization valuation report for family settlement',
      'Lot-by-lot valuation matrix and shares breakdown',
      'Drafting annexure for registered partition deed',
      'Site inspection condition and depreciation report'
    ],
    documentsRequired: ['Ancestral title chain & Will (if any)', 'Family tree certificate / pedigree', 'Revenue records / Jamabandi', 'Existing site measurement drawings']
  },
  {
    id: '05',
    title: 'Investment Valuation',
    category: 'Commercial & M&A',
    turnaround: '3–5 Days',
    actCompliance: 'International Valuation Standards (IVS)',
    description: 'Rigorous investment appraisal for prospective property acquisitions, real estate private equity, seed equity funding, Joint Developments (JDA), and return on investment (ROI) risk modeling.',
    deliverables: [
      'Highest and Best Use (HBU) valuation analysis',
      'Discounted Cash Flow (DCF) yield projections',
      'Capitalization rate & rental yield modeling',
      'Investment feasibility & downside risk assessment'
    ],
    documentsRequired: ['Project master plan / layout draft', 'Historical lease income & tenant roll', 'Estimated development cost budget', 'Zoning & Master Plan land use norms']
  },
  {
    id: '06',
    title: 'Court Case / Litigation Valuation',
    category: 'Judicial & Dispute',
    turnaround: '3–5 Days',
    actCompliance: 'Code of Civil Procedure (CPC) 1908',
    description: 'Expert witness and formal court commissioner valuation reports submitted in Civil Courts, High Courts, District Forums, and Supreme Court proceedings for property disputes, land acquisition compensation, and damages.',
    deliverables: [
      'Judicially admissible valuation appraisal report',
      'Deposition-ready technical calculation sheet',
      'Historical market trend & comparable sale deeds',
      'Court commissioner inquiry answers'
    ],
    documentsRequired: ['Plaint / Written Statement copy', 'Case details & Court order copy (if appointed)', 'Historical registered sale transactions', 'Government survey or acquisition notice']
  },
  {
    id: '07',
    title: 'Rental Valuation',
    category: 'Commercial & Tenancy',
    turnaround: '24–48 Hours',
    actCompliance: 'State Rent Control Acts & CPWD Norms',
    description: 'Fair market rental assessments and Reasonable Rent Certificates required by Government Departments, Public Sector Undertakings (PSUs), Nationalized Banks, and Multinational Corporations for leased premises.',
    deliverables: [
      'Standard Rent / Fair Market Rent Certificate',
      'Locality prevailing per sq.ft rental comparative',
      'Building depreciation & fixture amenity valuation',
      'Government lease sanction compliance note'
    ],
    documentsRequired: ['Premises lease proposal / existing lease deed', 'Carpet area and super built-up area plans', 'Municipal assessment tax receipt', 'Tenant department requisition letter']
  },
  {
    id: '08',
    title: 'IBC Valuation',
    category: 'Insolvency & Corporate',
    turnaround: '3–7 Days',
    actCompliance: 'Insolvency and Bankruptcy Code (IBC 2016)',
    description: 'Mandatory statutory valuation conducted by IBBI Registered Valuers under CIRP (Corporate Insolvency Resolution Process) and Liquidation Regulations to determine Fair Value and Liquidation Value of distressed corporate debtors.',
    deliverables: [
      'Regulation 35 compliant Fair Value report',
      'Regulation 35 compliant Liquidation Value report',
      'Physical asset verification & geo-tagged survey',
      'Comprehensive Resolution Professional (RP) dossier'
    ],
    documentsRequired: ['NCLT Admission Order copy', 'Asset register & Fixed asset ledgers', 'Title deeds & hypothecation records', 'Resolution Professional (RP) engagement mandate']
  },
  {
    id: '09',
    title: 'Companies Act Valuation',
    category: 'Corporate Governance',
    turnaround: '3–5 Days',
    actCompliance: 'Section 247 of Companies Act 2013',
    description: 'Statutory valuation by IBBI Registered Valuer for preferential share allotment, rights issues, employee stock options (ESOPs), sweat equity, reduction of capital, and non-cash asset consideration under MCA regulations.',
    deliverables: [
      'Section 247 statutory valuation certificate',
      'Net Asset Value (NAV) & PECM equity valuation',
      'Board of Directors / Audit Committee briefing report',
      'ROC / MCA filing compliance annexure'
    ],
    documentsRequired: ['Audited Financial Statements (Last 3 Years)', 'Provisional Balance Sheet & Trial Balance', 'Capital structure & Memorandum of Association', 'Proposed issue / transaction board resolution']
  },
  {
    id: '10',
    title: 'Share Transfer Valuation (DCF Method)',
    category: 'Securities & Finance',
    turnaround: '3–5 Days',
    actCompliance: 'Rule 11UA(2) Income Tax & FEMA',
    description: 'Discounted Cash Flow (DCF) equity share valuation mandatory for transfer of unlisted equity shares between residents and non-residents under FEMA Regulations and Rule 11UA of Income Tax Rules to avoid Section 56(2)(viib) angel tax.',
    deliverables: [
      'Rule 11UA(2) certified DCF Valuation Report',
      'Free Cash Flow to Firm (FCFF/FCFE) financial model',
      'Weighted Average Cost of Capital (WACC) computations',
      'FEMA compliant pricing guideline certificate'
    ],
    documentsRequired: ['Projected Financial Statements (5–10 years)', 'Audited Balance Sheets with Auditor Notes', 'Key business assumptions and revenue contracts', 'Shareholding pattern before & after transfer']
  },
  {
    id: '11',
    title: 'Company Merger & Amalgamation Valuation (DCF Method)',
    category: 'Corporate Restructuring',
    turnaround: '5–7 Days',
    actCompliance: 'Companies Act 2013 (Sec 230–232) & NCLT',
    description: 'Rigorous independent valuation for corporate mergers, demergers, and amalgamations to determine fair Share Exchange Ratio (Swap Ratio) using multi-criteria approaches (DCF, Market Price, Net Asset Value) for NCLT court schemes.',
    deliverables: [
      'Independent Fair Share Exchange Ratio (Swap Ratio) Report',
      'Combined DCF and Market Multiples Model',
      'NCLT Scheme of Arrangement valuation annexure',
      'Shareholders and Creditors presentation deck'
    ],
    documentsRequired: ['Draft Scheme of Amalgamation / Arrangement', 'Audited financials of transferor & transferee entities', 'Future projected cash flows & synergies forecast', 'Board approvals & valuation committee charters']
  },
  {
    id: '12',
    title: 'Hotel / Resort / Institutional / Cinema Valuation',
    category: 'Specialized Commercial',
    turnaround: '4–7 Days',
    actCompliance: 'Income Capitalization & DRC Methods',
    description: 'Specialized commercial property valuation for hospitality resorts, 3/4/5-star hotels, multi-screen multiplexes, single-screen cinemas, universities, private colleges, and multi-specialty hospitals Pan-India.',
    deliverables: [
      'Operating Hospitality / Commercial Valuation Report',
      'RevPAR, ADR, and occupancy rate cash flow models',
      'Plant, machinery, HVAC & civil structure appraisal',
      'Statutory licensing & municipal approval audit'
    ],
    documentsRequired: ['Approved building plans & fire NOC', 'Star category / FSSAI / Tourism licenses', 'Historical 3-year P&L (Room, F&B, Box Office)', 'Property ownership / land conversion lease order']
  },
  {
    id: '13',
    title: 'Immovable Asset – Book Value Valuation',
    category: 'Accounting & Balance Sheet',
    turnaround: '3–5 Days',
    actCompliance: 'Ind AS 16 / AS 10 (Property, Plant & Equipment)',
    description: 'Technical valuation of immovable land, factory buildings, corporate towers, and civil infrastructure for balance sheet capitalization, asset revaluation reserves, remaining useful life assessment, and component accounting.',
    deliverables: [
      'Ind AS 16 Revaluation Model valuation report',
      'Depreciated Replacement Cost (DRC) civil appraisal',
      'Component-level asset breakdown & useful life schedule',
      'Statutory auditor review defense documentation'
    ],
    documentsRequired: ['Fixed Asset Register (FAR) with historical cost', 'As-built civil & structural drawings', 'Physical verification site access', 'Auditor accounting policy guideline']
  }
];

// Icon mapping for 13 valuation services
const SERVICE_ICONS = {
  '01': Scale,
  '02': FileText,
  '03': Globe,
  '04': Building2,
  '05': TrendingUp,
  '06': Landmark,
  '07': Clock,
  '08': ShieldCheck,
  '09': FileCheck2,
  '10': Briefcase,
  '11': Layers,
  '12': Award,
  '13': Cpu
};

export default function RegisteredValuersPage({ onOpenQuote, onNavigateHome }) {
  // Slider State & Enhanced Auto-play
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const slideTimerRef = useRef(null);
  const touchStartXRef = useRef(null);

  // Auto-play slider with clean interval
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % VALUATION_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + VALUATION_SLIDES.length) % VALUATION_SLIDES.length);
  }, []);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - endX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  // Dynamic Card Expansion State (Key: service.id, Value: boolean)
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Registered Valuers | Section 34 AB & IBBI Valuations | KS Chartered Engineers';
  }, []);

  useEffect(() => {
    if (isSliderPaused) return;
    slideTimerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(slideTimerRef.current);
  }, [nextSlide, isSliderPaused]);

  // Categories
  const categories = ['All', 'Taxation & CBDT', 'Banking & Mortgage', 'Corporate Governance', 'Legal & Immigration', 'Commercial & M&A'];

  // Filtered Services
  const filteredServices = useMemo(() => {
    return VALUATION_SERVICES_DATA.filter((service) => {
      const matchesCategory = selectedCategory === 'All' || service.category.includes(selectedCategory);
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.actCompliance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // FAQs
  const faqs = [
    {
      q: 'Who is an IBBI Registered Valuer and when is their report mandatory?',
      a: 'An IBBI Registered Valuer is certified under Section 247 of the Companies Act, 2013 by the Insolvency and Bankruptcy Board of India. Their valuation report is legally mandatory for CIRP/Liquidation under the IBC Code 2016, preferential share allotments, corporate mergers/amalgamations under NCLT, and reduction of share capital.'
    },
    {
      q: 'What is the significance of Section 34 AB under the Wealth Tax Act?',
      a: 'Valuers approved under Section 34 AB of the Wealth Tax Act 1957 are formally recognized by the Chief Commissioner of Income Tax and Central Board of Direct Taxes (CBDT). Their valuation certificates carry statutory evidentiary weight before the Income Tax Department, Assessing Officers, and the Income Tax Appellate Tribunal (ITAT) for Section 50C circle rate disputes, Section 54 capital gains, and Fair Market Value as on 01-04-2001.'
    },
    {
      q: 'How does DCF (Discounted Cash Flow) Valuation work for share transfers and mergers?',
      a: 'Under Rule 11UA(2) of the Income Tax Rules and FEMA Regulations, unlisted equity shares must be valued using the Discounted Cash Flow (DCF) method by an approved valuer or merchant banker. We project the company\'s Free Cash Flows (FCFF/FCFE) for 5 to 10 years, apply an empirically calculated Weighted Average Cost of Capital (WACC), and add the terminal value to establish the genuine fair enterprise value.'
    },
    {
      q: 'What documents are required to determine Fair Market Value as on 01-04-2001?',
      a: 'To compute the cost of acquisition for ancestral properties, we require the registered title deed/partition deed, location map, property photographs, municipal boundary details, and historical DLC/circle rate registers. Our report establishes both land and depreciated structure value as per CPWD cost index schedules as on 1st April 2001.'
    },
    {
      q: 'Can these valuation certificates be submitted to Foreign Embassies for Visas?',
      a: 'Yes, 100%. Our Net Worth Certificates and Immovable Property Valuation Reports are prepared strictly as per foreign consulate guidelines and accepted by US, UK, Canada, Australia, and European Schengen visa authorities to demonstrate solid financial ties and funding capability.'
    }
  ];

  return (
    <div className="registered-valuers-page rv-page-container" style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '70px' }}>
      
      {/* ── RESPONSIVE MOBILE-FIRST CSS RULES & SLIDER MOTION ── */}
      <style>{`
        @keyframes rvFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rv-sticky-mobile-bar {
          display: none;
        }

        /* Enhanced Slider Cross-fade & Ken Burns Animation */
        .rv-slide-item {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.75s ease;
          z-index: 1;
        }
        .rv-slide-item.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }
        .rv-slide-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          transform: scale(1.05);
          transition: transform 6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .rv-slide-item.active .rv-slide-img {
          transform: scale(1.0);
        }
        @keyframes rvProgressAnim {
          from { width: 0%; }
          to { width: 100%; }
        }
        .rv-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #f59e0b, #38bdf8);
          animation: rvProgressAnim 5.5s linear infinite;
        }
        .rv-progress-paused .rv-progress-fill {
          animation-play-state: paused;
        }

        /* Mobile Responsive (< 768px) */
        @media (max-width: 768px) {
          .rv-page-container {
            padding-bottom: 85px !important;
          }
          .rv-sticky-mobile-bar {
            display: flex !important;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            padding: 10px 14px;
            gap: 10px;
            box-shadow: 0 -4px 16px rgba(15, 23, 42, 0.08);
            z-index: 999;
          }
          .rv-slider-box {
            min-height: 400px !important;
          }
          .rv-slide-img {
            height: 400px !important;
          }
          .rv-gradient-mask {
            background: linear-gradient(180deg, rgba(11, 19, 43, 0.75) 0%, rgba(11, 19, 43, 0.95) 75%) !important;
          }
          .rv-slide-overlay {
            padding: 24px 18px !important;
          }
          .rv-slide-title {
            font-size: 1.25rem !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
          }
          .rv-slide-subtitle {
            font-size: 0.82rem !important;
            line-height: 1.45 !important;
            margin-bottom: 12px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .rv-pill-tabs {
            overflow-x: auto;
            flex-wrap: nowrap !important;
            padding-bottom: 6px;
            scrollbar-width: none;
          }
          .rv-pill-tabs::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
      
      {/* ── TOP BREADCRUMB & JURISDICTION BAR ── */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 0' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '6px 12px',
              color: '#334155',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={14} />
            <span>Home</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.80rem', color: '#64748b' }}>
            <span>Statutory Practice: <strong>Sec 34 AB &amp; IBBI</strong></span>
            <span>·</span>
            <span>Chartered Engineer (India)</span>
            <span>·</span>
            <span style={{ color: '#0284c7', fontWeight: 600 }}>Pan-India Jurisdictions</span>
          </div>
        </div>
      </div>

      {/* ── HERO BANNER: USER OPENING TEXT ── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '44px 0 36px' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '880px' }}>
            
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 12px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              color: '#0284c7',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}>
              <ShieldCheck size={14} />
              <span>Registered Valuers | Independent &amp; Compliant Reports</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '16px'
            }}>
              Accurate, Reliable &amp; Compliant <br />
              <span style={{ color: '#0284c7' }}>Statutory Valuation Services</span>
            </h1>

            <p style={{
              fontSize: '1.08rem',
              color: '#475569',
              lineHeight: 1.7,
              marginBottom: '26px'
            }}>
              If you are planning to <strong>buy, sell, invest, take a loan</strong>, or need valuation for <strong>legal or taxation purposes</strong>, we would be glad to assist you with accurate, reliable, and compliant valuation services.
            </p>

            {/* Credential Seals Row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <CheckCircle2 size={16} color="#16a34a" />
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                  Approved under Section 34 AB – Wealth Tax Act
                </span>
              </div>

              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <CheckCircle2 size={16} color="#16a34a" />
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#1e293b' }}>
                  IBBI Registered Valuer (Under Companies Act, 2013)
                </span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                type="button"
                onClick={() => onOpenQuote('Capital Gain Valuation', { category: 'Registered Valuers' })}
                style={{
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '12px 24px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Request Valuation Quote</span>
              </button>

              <a
                href="https://wa.me/919158658885?text=Hello%20Er.%20KS,%20I%20need%20a%20Registered%20Valuer%20statutory%20report%20for%20my%20property%20/%20assets."
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#10b981',
                  color: '#ffffff',
                  borderRadius: '6px',
                  padding: '12px 20px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Valuer Desk</span>
              </a>

              <a
                href="tel:+919158658885"
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  borderRadius: '6px',
                  padding: '12px 18px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <PhoneCall size={16} color="#0284c7" />
                <span>+91 91586 58885</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE SLIDER SHOWCASE SECTION ── */}
      <section 
        style={{ padding: '36px 0', background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}
        onMouseEnter={() => setIsSliderPaused(true)}
        onMouseLeave={() => setIsSliderPaused(false)}
      >
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Slider Header & Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                ⭐ REAL SITE AUDITS &amp; CORE VALUATION DOMAINS
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', margin: '3px 0 0', letterSpacing: '-0.02em' }}>
                Featured Statutory Practice Areas
              </h2>
            </div>

            {/* Slider Controls & Slide Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span style={{ color: '#0284c7' }}>{String(currentSlide + 1).padStart(2, '0')}</span>
                <span style={{ color: '#94a3b8' }}>/</span>
                <span>{String(VALUATION_SLIDES.length).padStart(2, '0')}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#334155',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0284c7'; e.currentTarget.style.color = '#0284c7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#334155'; }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#334155',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#0284c7'; e.currentTarget.style.color = '#0284c7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.color = '#334155'; }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Domain Quick-Jump Pill Tabs */}
          <div className="rv-pill-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
            {VALUATION_SLIDES.map((slide, idx) => {
              const isSelected = currentSlide === idx;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  style={{
                    padding: '7px 15px',
                    borderRadius: '30px',
                    fontSize: '0.80rem',
                    fontWeight: isSelected ? 700 : 500,
                    background: isSelected ? '#0284c7' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#475569',
                    border: `1px solid ${isSelected ? '#0284c7' : '#cbd5e1'}`,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: isSelected ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isSelected ? '#ffffff' : '#94a3b8'
                  }} />
                  <span>{slide.pill}</span>
                </button>
              );
            })}
          </div>

          {/* Enhanced Cinematic Slider Shell */}
          <div
            className="rv-slider-box"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #cbd5e1',
              background: '#090e1a',
              minHeight: '440px',
              boxShadow: '0 16px 40px rgba(15, 23, 42, 0.14)'
            }}
          >
            {/* Subtle Top Progress Fill */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.1)', zIndex: 10 }}>
              <div
                key={currentSlide}
                className={`rv-progress-fill ${isSliderPaused ? 'rv-progress-paused' : ''}`}
              />
            </div>

            {/* Stacked Cross-fading Slides */}
            {VALUATION_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`rv-slide-item ${isActive ? 'active' : ''}`}
                >
                  {/* Real Authentic Photograph */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rv-slide-img"
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '440px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: 'contrast(1.05) brightness(0.92)'
                    }}
                  />

                  {/* Asymmetric Studio Gradient Mask (Vibrant real photo on right, crisp dark text on left) */}
                  <div
                    className="rv-gradient-mask"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, rgba(11, 19, 43, 0.96) 0%, rgba(11, 19, 43, 0.88) 38%, rgba(11, 19, 43, 0.45) 68%, rgba(11, 19, 43, 0.15) 100%)'
                    }}
                  />

                  {/* Overlay Content Card */}
                  <div className="rv-slide-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '38px 46px',
                    maxWidth: '780px',
                    zIndex: 3
                  }}>
                    {/* Badge */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      padding: '5px 12px',
                      background: 'rgba(245, 158, 11, 0.18)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(245, 158, 11, 0.4)',
                      borderRadius: '6px',
                      color: '#f59e0b',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '12px',
                      width: 'fit-content'
                    }}>
                      <Award size={14} />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Title */}
                    <h3 className="rv-slide-title" style={{
                      fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      lineHeight: 1.22,
                      letterSpacing: '-0.02em',
                      marginBottom: '12px'
                    }}>
                      {slide.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="rv-slide-subtitle" style={{
                      color: '#cbd5e1',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      marginBottom: '16px',
                      maxWidth: '680px'
                    }}>
                      {slide.subtitle}
                    </p>

                    {/* Statutory Pillar Tag */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '20px',
                      fontSize: '0.80rem',
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.12)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      width: 'fit-content'
                    }}>
                      <ShieldCheck size={14} />
                      <span>{slide.statPillar} · {slide.highlight}</span>
                    </div>

                    {/* Dual Action Buttons */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => onOpenQuote(slide.serviceKey, { category: 'Registered Valuers' })}
                        style={{
                          background: '#F58220',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '11px 22px',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 14px rgba(245, 130, 32, 0.35)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span>Request Official Valuation Report</span>
                        <ArrowRight size={15} />
                      </button>

                      <a
                        href={`https://wa.me/919158658885?text=Hello%20Er.%20KS,%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(slide.serviceKey)}.`}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          background: '#10b981',
                          color: '#ffffff',
                          borderRadius: '8px',
                          padding: '11px 18px',
                          fontSize: '0.88rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <MessageSquare size={16} />
                        <span>WhatsApp Valuer Desk</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Slide Dots at Bottom Right */}
            <div style={{
              position: 'absolute',
              bottom: '18px',
              right: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 5
            }}>
              {VALUATION_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: idx === currentSlide ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === currentSlide ? '#f59e0b' : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. COMPLETE 13 VALUATION SERVICES DIRECTORY (COMPACT CARDS GRID) ── */}
      <section style={{ padding: '48px 0 54px', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 30px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              color: '#0284c7',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '10px'
            }}>
              <Award size={13} />
              <span>Independent &amp; Compliant Reports</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '10px', letterSpacing: '-0.02em' }}>
              Our Valuation Services (13 Practice Areas)
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
              Statutory valuation reports approved under <strong>Section 34 AB Wealth Tax Act</strong> &amp; <strong>IBBI (Companies Act 2013)</strong>. Click <strong>Read More</strong> for deliverables or <strong>Direct Quote</strong> for instant filing.
            </p>
          </div>

          {/* Interactive Filter Toolbar: Categories + Instant Search */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '14px 18px',
            marginBottom: '26px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '0.80rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isSelected ? '1px solid #0284c7' : '1px solid #cbd5e1',
                      background: isSelected ? '#0284c7' : '#ffffff',
                      color: isSelected ? '#ffffff' : '#334155',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Fast Search Input */}
            <div style={{ position: 'relative', minWidth: '220px', flex: '1', maxWidth: '300px' }}>
              <Search size={14} color="#94a3b8" style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search practice areas, acts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '7px 10px 7px 32px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.84rem',
                  color: '#0f172a',
                  background: '#ffffff'
                }}
              />
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════════
              DYNAMIC COMPACT CARDS GRID (13 SERVICES WITH READ MORE + DIRECT QUOTE)
             ═════════════════════════════════════════════════════════════════════ */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '18px',
            alignItems: 'start'
          }}>
            {filteredServices.map((service) => {
              const Icon = SERVICE_ICONS[service.id] || FileText;
              const isExpanded = !!expandedCards[service.id];

              return (
                <div
                  key={service.id}
                  style={{
                    background: '#ffffff',
                    border: isExpanded ? '1px solid #0284c7' : '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isExpanded ? '0 6px 18px rgba(2, 132, 199, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    {/* Top Meta: Category Badge + SLA */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{
                        fontSize: '0.70rem',
                        fontWeight: 700,
                        color: '#0284c7',
                        background: '#eff6ff',
                        border: '1px solid #bfdbfe',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        {service.category}
                      </span>

                      <span style={{
                        fontSize: '0.70rem',
                        fontWeight: 600,
                        color: '#16a34a',
                        background: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px'
                      }}>
                        <Clock size={11} />
                        <span>{service.turnaround}</span>
                      </span>
                    </div>

                    {/* Title with Icon */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        background: '#f0f9ff',
                        border: '1px solid #bae6fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0284c7',
                        flexShrink: 0,
                        marginTop: '1px'
                      }}>
                        <Icon size={16} />
                      </div>

                      <h3 style={{
                        fontSize: '1.04rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        margin: 0,
                        lineHeight: 1.35
                      }}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Governing Law / Act Line */}
                    <div style={{ fontSize: '0.74rem', color: '#475569', fontWeight: 600, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <ShieldCheck size={13} color="#16a34a" />
                      <span>{service.actCompliance}</span>
                    </div>

                    {/* Short Description */}
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      margin: '0 0 14px',
                      display: isExpanded ? 'block' : '-webkit-box',
                      WebkitLineClamp: isExpanded ? 'unset' : 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: isExpanded ? 'visible' : 'hidden'
                    }}>
                      {service.description}
                    </p>

                    {/* Expandable Details Drawer (Smooth in-card drop) */}
                    {isExpanded && (
                      <div style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '12px 14px',
                        marginBottom: '14px',
                        animation: 'fadeIn 0.2s ease-in'
                      }}>
                        {/* Deliverables */}
                        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', marginBottom: '6px' }}>
                          Certified Deliverables:
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {service.deliverables.map((item, dIdx) => (
                            <li key={dIdx} style={{ fontSize: '0.78rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                              <Check size={12} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Documents */}
                        <div style={{ fontSize: '0.70rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                          Required Documents:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                          {service.documentsRequired.map((doc, docIdx) => (
                            <span key={docIdx} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '2px 6px', borderRadius: '4px', fontSize: '0.70rem', color: '#475569' }}>
                              ✓ {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Compact Card Action Footer (Read More + Direct Quote) */}
                  <div style={{
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px'
                  }}>
                    {/* Read More / Read Less Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleCardExpand(service.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: isExpanded ? '#eff6ff' : '#f8fafc',
                        border: isExpanded ? '1px solid #bfdbfe' : '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '6px 11px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: isExpanded ? '#0284c7' : '#475569',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                      <ChevronDown
                        size={13}
                        style={{
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }}
                      />
                    </button>

                    {/* Direct Quote Button */}
                    <button
                      type="button"
                      onClick={() => onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: '#F58220',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '6px',
                        padding: '7px 14px',
                        fontSize: '0.80rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(245, 130, 32, 0.25)',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#e06f12'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#F58220'; }}
                    >
                      <span>Direct Quote</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 5. PROFESSIONAL DETAILS & REGISTRATION MATRIX ── */}
      <section style={{ padding: '48px 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '36px 32px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              
              {/* Left Column: Certifications & Registration */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#0284c7',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '8px'
                }}>
                  <Award size={14} />
                  <span>Statutory Authority</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 16px' }}>
                  Certifications &amp; Registration
                </h3>

                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Our valuation reports carry nationwide statutory validity across Civil Courts, Income Tax Authorities (CBDT), Banks, and the Insolvency and Bankruptcy Board of India.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #0284c7',
                    borderRadius: '8px',
                    padding: '14px 16px'
                  }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                      Approved under Section 34 AB – Wealth Tax Act
                    </div>
                    <div style={{ fontSize: '0.80rem', color: '#64748b', marginTop: '3px' }}>
                      Approved by Chief Commissioner of Income Tax / CBDT for Capital Gains &amp; direct taxation valuation.
                    </div>
                  </div>

                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #10b981',
                    borderRadius: '8px',
                    padding: '14px 16px'
                  }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                      IBBI Registered Valuer (Under Companies Act, 2013)
                    </div>
                    <div style={{ fontSize: '0.80rem', color: '#64748b', marginTop: '3px' }}>
                      Registered under Section 247 of the Companies Act 2013 with Insolvency and Bankruptcy Board of India.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Professional Details & Direct Channels */}
              <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '24px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#16a34a',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  marginBottom: '8px'
                }}>
                  <Briefcase size={14} />
                  <span>Principal Appraiser</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                  Professional Details
                </h3>

                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0284c7', marginBottom: '2px' }}>
                  Chartered Engineer
                </div>
                <div style={{ fontSize: '0.92rem', color: '#475569', fontWeight: 600, marginBottom: '20px' }}>
                  Civil Engineer | Master of Valuation
                </div>

                {/* Direct Contact Matrix */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <PhoneCall size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Phone / WhatsApp</div>
                      <a href="tel:+919158658885" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', textDecoration: 'none' }}>+91 91586 58885</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Head Office &amp; Hub</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>Jaipur (302019) · Pan-India</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <Globe size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Official Website</div>
                      <a href="https://www.mscharteredengineer.com" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none' }}>www.mscharteredengineer.com</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '6px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7' }}>
                      <Mail size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Direct Email</div>
                      <a href="mailto:ms.charteredengineer@gmail.com" style={{ fontSize: '0.84rem', fontWeight: 600, color: '#0f172a', textDecoration: 'none' }}>ms.charteredengineer@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Closing Tagline */}
                <div style={{
                  marginTop: '24px',
                  padding: '12px 18px',
                  background: '#f8fafc',
                  border: '1px dashed #cbd5e1',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  color: '#0f172a'
                }}>
                  &ldquo;Valuation you can trust. Decisions you can rely.&rdquo;
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section style={{ padding: '48px 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
              Statutory Insights
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, color: '#0f172a' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    cursor: 'pointer',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    color="#64748b"
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: '0 20px 18px', fontSize: '0.90rem', color: '#475569', lineHeight: 1.65, borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. FINAL INQUIRY CALL-TO-ACTION ── */}
      <section style={{ padding: '48px 0', background: '#0f172a', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '6px',
            color: '#38bdf8',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            <ShieldCheck size={14} />
            <span>Fast-Track Statutory Delivery</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.25 }}>
            Need a Formal Valuation Certificate?
          </h2>

          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65, maxWidth: '680px', margin: '0 auto 28px' }}>
            Connect directly with <strong>Er. KS</strong>, Chartered Engineer &amp; IBBI Registered Valuer. Get a transparent quote, document checklist, and 24–48 hour delivery guarantee.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <button
              type="button"
              onClick={() => onOpenQuote('Capital Gain Valuation', { category: 'Registered Valuers' })}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '13px 28px',
                fontSize: '0.94rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Get Statutory Valuation Quote
            </button>

            <a
              href="https://wa.me/919158658885?text=Hello%20Er.%20KS,%20I%20need%20a%20Registered%20Valuer%20consultation%20for%20my%20case."
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#10b981',
                color: '#ffffff',
                borderRadius: '6px',
                padding: '13px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── MOBILE STICKY FLOATING BOTTOM BAR (< 900px) ── */}
      <div className="rv-sticky-mobile-bar">
        <a
          href="https://wa.me/919158658885?text=Hello%20Er.%20KS,%20I%20need%20a%20Registered%20Valuer%20statutory%20report%20for%20my%20property%20/%20assets."
          target="_blank"
          rel="noreferrer"
          style={{
            flex: '1',
            background: '#10b981',
            color: '#ffffff',
            borderRadius: '8px',
            padding: '12px 14px',
            fontSize: '0.86rem',
            fontWeight: 700,
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <MessageSquare size={16} />
          <span>WhatsApp Valuer</span>
        </a>

        <button
          type="button"
          onClick={() => onOpenQuote('Registered Valuer Valuation', { category: 'Registered Valuers' })}
          style={{
            flex: '1',
            background: '#F58220',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '12px 14px',
            fontSize: '0.86rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          <span>Request Quote</span>
          <ArrowRight size={14} />
        </button>
      </div>

    </div>
  );
}
