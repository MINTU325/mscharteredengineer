import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  PhoneCall,
  Phone,
  ShieldCheck,
  FileCheck2,
  Cpu,
  AlertTriangle,
  HelpCircle,
  Building2,
  RefreshCw,
  Layers,
  ClipboardCheck,
  Send,
  Check,
  ChevronDown,
  MapPin,
  Mail,
  Scale,
  Factory,
  Sparkles,
  ExternalLink,
  BookOpen,
  Clock,
  Activity,
  Sliders,
  ShieldAlert,
  Award,
  Recycle,
  Leaf
} from 'lucide-react';

export default function EWasteCompliancePage({ onNavigateHome, onOpenQuote }) {
  // Active role tab for the Compliance Matrix
  const [activeRole, setActiveRole] = useState('importers');

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Quick Eligibility Checker state
  const [checkerState, setCheckerState] = useState({
    businessRole: 'importer',
    dealsInEEE: 'yes',
    hasRegistration: 'no'
  });

  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    city: '',
    businessType: 'Importer',
    eeeCategory: '',
    currentRegistration: 'Not Sure',
    serviceRequired: 'Annual Return Filing',
    financialYear: 'FY 2024-25',
    message: '',
    consent: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers';

    const updateOrCreateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('description', 'CPCB E-Waste Annual Return Filing (Form 3) & EPR Compliance Services by senior Chartered Engineers (IIT Roorkee alumni). 100% auditable annual filings, Schedule I EEE codes, customs BOE reconciliation & Pan-India support. Call +91 91586 58885.');
    updateOrCreateMeta('keywords', 'E-Waste Annual Return Filing, e waste annual return filing, E-Waste EPR compliance, E-Waste compliance consultant, E-Waste return filing consultant, CPCB E-Waste EPR registration, CPCB E-Waste annual return, E-Waste EPR consultant, EPR compliance consultant, E-Waste compliance services');
    updateOrCreateMeta('og:title', 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'CPCB E-Waste Annual Return Filing (Form 3) & EPR Compliance Services by senior Chartered Engineers (IIT Roorkee). Auditable sales ledgers, import BOE verification & Pan-India practice.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/e-waste-annual-return-filing', true);
    updateOrCreateMeta('twitter:title', 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers');
    updateOrCreateMeta('twitter:description', 'CPCB E-Waste Annual Return Filing (Form 3) & EPR Compliance Services by senior Chartered Engineers (IIT Roorkee). Auditable filings, BOE reconciliation & Pan-India practice.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.mscharteredengineer.com/e-waste-annual-return-filing');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber || !formData.companyName) {
      alert('Please fill mandatory fields (Name, Company, and Mobile Number).');
      return;
    }
    setSubmitting(true);

    const waText = encodeURIComponent(
      `*New E-Waste Compliance Inquiry*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Company:* ${formData.companyName}\n` +
      `*Mobile:* ${formData.mobileNumber}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*City:* ${formData.city || 'N/A'}\n` +
      `*Business Type:* ${formData.businessType}\n` +
      `*EEE Category:* ${formData.eeeCategory || 'N/A'}\n` +
      `*Current Registration:* ${formData.currentRegistration}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Financial Year:* ${formData.financialYear}\n` +
      `*Message:* ${formData.message || 'Need professional compliance review'}`
    );

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      window.open(`https://wa.me/919158658885?text=${waText}`, '_blank');
    }, 350);
  };

  // Role Matrix Data
  const roleData = {
    importers: {
      title: 'Importers & Brand Producers',
      badge: 'PRODUCER UNDER RULES 2022',
      summary: 'Businesses importing finished electronic goods, components, or branded equipment into the Indian Customs territory.',
      obligations: [
        'Mandatory CPCB EPR Portal registration before filing import Bills of Entry (BOE)',
        'Extended Producer Responsibility (EPR) target calculation based on historical import weight',
        'Procurement & reconciliation of valid EPR recycling credits on the official CPCB portal',
        'Submission of Annual Return (Form 3) and periodic quarterly data updates'
      ],
      keyDocs: ['Import Invoices & Bill of Entry (BOE)', 'Importer-Exporter Code (IEC)', 'Schedule I EEE Code Mapping', 'EPR Credit Transfer Proofs'],
      riskAlert: 'Non-compliant importers risk customs clearance holds, portal suspension, and CPCB Environmental Compensation.'
    },
    manufacturers: {
      title: 'Domestic Equipment Manufacturers',
      badge: 'MANUFACTURER CATEGORY',
      summary: 'Facilities manufacturing electrical & electronic equipment (EEE) or domestic sub-assemblies inside India.',
      obligations: [
        'CPCB E-Waste Portal registration with State PCB CTE/CTO consent validation',
        'Itemized manufacturing output recording and net equipment weight tracking',
        'Mandatory channelization of manufacturing scrap and end-of-life units to registered recyclers',
        'Annual return filing documenting domestic dispatch vs factory scrap disposal'
      ],
      keyDocs: ['Factory License & SPCB CTE/CTO', 'Production Ledgers & Excise Registers', 'Form 6 Waste Manifests', 'Authorized Recycler Certificates'],
      riskAlert: 'Failure to account for factory electronic scrap can trigger SPCB inspection notices and penalties.'
    },
    refurbishers: {
      title: 'Commercial Refurbishers',
      badge: 'CIRCULAR ECONOMY ENTITY',
      summary: 'Firms repairing, overhauling, upgrading, or preparing second-hand electrical goods for resale.',
      obligations: [
        'Online registration on the CPCB E-Waste portal as an authorized refurbisher',
        'Maintenance of incoming e-waste / used equipment intake registers',
        'Accurate reporting of extended equipment lifespan and refurbished resale volumes',
        'Residual non-repairable scrap handover to CPCB registered recyclers with manifests'
      ],
      keyDocs: ['Refurbishment Facility Consent (CTO)', 'Inward Equipment Invoices', 'Outward Refurbished Sales Bills', 'Recycler Handover Manifests'],
      riskAlert: 'Unregistered refurbishing of commercial electronics is strictly prohibited under Rule 9 of E-Waste Rules 2022.'
    },
    recyclers: {
      title: 'Registered Recyclers & Dismantlers',
      badge: 'AUTHORIZED RECYCLING UNIT',
      summary: 'Facilities legally licensed to dismantle, extract, and recycle precious/ferrous materials from e-waste.',
      obligations: [
        'SPCB Authorization & CPCB EPR Portal Recycler Verification',
        'Real-time logging of e-waste received, dismantled, and material fractions recovered',
        'Generation of digital EPR certificates on the CPCB portal based on recovery capacity',
        'Auditable annual return submission detailing certificate transfers to producers'
      ],
      keyDocs: ['SPCB Authorization under Rule 11', 'Mass Balance Recovery Flowcharts', 'Pollution Control Monitoring Logs', 'Portal Credit Generation Logs'],
      riskAlert: 'Issuing fictitious recycling credits without physical material recovery leads to immediate criminal & CPCB sanctions.'
    }
  };

  const servicesList = [
    {
      num: '01',
      tag: 'SCOPING & ELIGIBILITY',
      title: 'E-Waste Compliance Assessment',
      desc: 'Technical audit of your products, HS codes, and commercial role to map exact legal liabilities under the E-Waste Rules 2022.',
      icon: ClipboardCheck
    },
    {
      num: '02',
      tag: 'MARKET ACCESS',
      title: 'CPCB E-Waste EPR Registration',
      desc: 'End-to-end guidance in assembling company KYC, board authorizations, EEE schedule mapping, and portal dossier clearance.',
      icon: ShieldCheck
    },
    {
      num: '03',
      tag: 'STATUTORY FILING',
      title: 'Annual Return Filing (Form 3)',
      desc: 'Rigorous compilation, mathematical verification, and portal upload of annual sales, import, and channelization datasets.',
      icon: FileCheck2
    },
    {
      num: '04',
      tag: 'PERIODIC AUDIT',
      title: 'Quarterly Return Maintenance',
      desc: 'Quarter-by-quarter tracking of commercial volumes to prevent year-end data scrambling and avoid portal defaults.',
      icon: RefreshCw
    },
    {
      num: '05',
      tag: 'EPR TARGETS',
      title: 'EPR Target & Credit Advisory',
      desc: 'Mathematical estimation of recycling targets based on CPCB average equipment life tables and credit reconciliation.',
      icon: Scale
    },
    {
      num: '06',
      tag: 'DATA HARMONIZATION',
      title: 'E-Waste Data Compilation',
      desc: 'Consolidating ERP entries, customs bills of entry, and multi-warehouse manifests into standardized CPCB upload schemas.',
      icon: Layers
    },
    {
      num: '07',
      tag: 'STATUTORY ATTESTATION',
      title: 'Documentation & Affidavit Support',
      desc: 'Drafting statutory self-declarations, technical product specifications, RoHS declarations, and authorized signatory mandates.',
      icon: FileText
    },
    {
      num: '08',
      tag: 'MANIFEST VERIFICATION',
      title: 'Channelization & Recycler Audit',
      desc: 'Verifying that recycler tie-ups hold active SPCB authorizations and that Form 6 manifests are auditable and legal.',
      icon: Factory
    },
    {
      num: '09',
      tag: 'DISCREPANCY REMOVAL',
      title: 'Pre-Filing Compliance Review',
      desc: 'Chartered Engineer review to identify unit mismatches (Kg vs Metric Ton), EEE code misalignments, or calculation errors.',
      icon: AlertTriangle
    },
    {
      num: '10',
      tag: 'AUDIT DEFENSE',
      title: 'Post-Filing Query Defense',
      desc: 'Technical assistance in archiving acknowledged returns and responding to routine CPCB / SPCB departmental clarifications.',
      icon: BookOpen
    }
  ];

  const processSteps = [
    {
      step: '01',
      phase: 'DISCOVERY',
      title: 'Initial Scrutiny',
      duration: 'Day 1',
      desc: 'We review your business model, import records, product catalogues, and existing CPCB portal credentials.'
    },
    {
      step: '02',
      phase: 'CLASSIFICATION',
      title: 'EEE Code Mapping',
      duration: 'Day 1–2',
      desc: 'Map every product model to its exact CPCB Schedule I & II code and ascertain statutory average life expectancy.'
    },
    {
      step: '03',
      phase: 'CONSOLIDATION',
      title: 'Data Collection',
      duration: 'Day 2–3',
      desc: 'Extract sales ledgers, customs Bill of Entry weights, and recycler disposal manifests into a unified ledger.'
    },
    {
      step: '04',
      phase: 'ENGINEERING AUDIT',
      title: 'Data Cross-Audit',
      duration: 'Day 3',
      desc: 'Our engineers reconcile net product weights, cross-check GST figures, and verify EPR credit math.'
    },
    {
      step: '05',
      phase: 'COMPILATION',
      title: 'Return Dossier Assembly',
      duration: 'Day 3–4',
      desc: 'Format disclosures into the mandatory CPCB XML/portal format with required declarations and annexures.'
    },
    {
      step: '06',
      phase: 'SUBMISSION',
      title: 'Portal Filing Assistance',
      duration: 'Day 4–5',
      desc: 'Assist your authorized signatory with seamless portal data entry, OTP verification, and final submission.'
    },
    {
      step: '07',
      phase: 'ARCHIVAL',
      title: 'Stamped Audit Trail',
      duration: 'Immediate',
      desc: 'Deliver digital filing acknowledgment, secure archive bundle, and audit readiness checklist for your records.'
    }
  ];

  const faqs = [
    {
      q: 'What is E-Waste Annual Return Filing?',
      a: 'E-Waste Annual Return Filing is a mandatory statutory disclosure under Rule 13(1) of the E-Waste (Management) Rules, 2022. All registered producers, manufacturers, refurbishers, and recyclers must report their annualized equipment placed on market, waste generated, and recycling targets achieved on the official CPCB EPR portal (eprewastecpcb.in).'
    },
    {
      q: 'Who is categorized as a "Producer" under E-Waste Rules 2022?',
      a: 'Under Rule 3(1)(t), a "Producer" includes any entity that manufactures and sells covered EEE under its own brand, sells under its own brand components manufactured by others, or IMPORTS electrical and electronic equipment into India for commercial distribution.'
    },
    {
      q: 'Is CPCB E-Waste EPR Registration compulsory for importers?',
      a: 'Yes, absolutely. Indian Customs requires valid CPCB EPR registration before clearing imported electrical/electronic equipment. Without active CPCB registration, import consignments face port detention or seizure.'
    },
    {
      q: 'What is the official deadline for filing the E-Waste Annual Return?',
      a: 'Under the standard regulatory calendar, annual returns for the preceding financial year are due on the CPCB portal by 30th June (or as extended by official CPCB circulars). We strongly recommend beginning data reconciliation at least 30 days prior to avoid portal server congestion.'
    },
    {
      q: 'What are the risks of missing the filing deadline?',
      a: 'Defaulting entities face show-cause notices from CPCB/SPCB, potential blocking of their EPR portal account (halting ongoing import clearances), and the levying of Environmental Compensation (EC) under the polluter-pays principle as codified in CPCB guidelines.'
    },
    {
      q: 'Can MS CHARTERED ENGINEERS guarantee approval or zero penalty?',
      a: 'No ethical consultancy can promise "guaranteed government approval" or "100% penalty immunity." Statutory approval is solely at the discretion of the Central Pollution Control Board. As an independent Chartered Engineering and Technical Consultancy firm, our role is to ensure your calculations are mathematically rigorous, fully documented, and strictly aligned with official rules.'
    },
    {
      q: 'What documents are required for filing an annual return?',
      a: 'Key requirements include: Company PAN, GSTIN & IEC; Schedule I EEE model list with net weights; financial year sales/import quantity ledgers; Bill of Entry (BOE) copies; Form 6 recycling manifests; and details of EPR credits acquired on the CPCB portal.'
    },
    {
      q: 'How are EPR recycling targets calculated?',
      a: 'EPR targets are computed based on the quantity (by weight) of EEE placed on the market in previous years, adjusted by the statutory average life expectancy specified by CPCB for that specific product category.'
    },
    {
      q: 'Does an enterprise with multiple branches across India need multiple filings?',
      a: 'No. CPCB E-Waste EPR registration and annual return filing are centralized under a single corporate entity identification (PAN & GSTIN), covering all national imports, factories, and sales corridors.'
    },
    {
      q: 'Can you help resolve CPCB portal deficiency notices?',
      a: 'Yes. Our technical team assists clients in reviewing the specific query raised by the CPCB scrutiny officer, identifying data or documentation gaps, preparing technical clarifications, and uploading re-verified documents.'
    },
    {
      q: 'Are solar photo-voltaic (PV) modules covered under E-Waste Rules 2022?',
      a: 'Yes! The 2022 Rules explicitly added Solar Photo-Voltaic Modules / Panels / Cells to the regulatory scope. Solar developers and importers must maintain inventory and submit periodic returns.'
    },
    {
      q: 'What is the role of a Chartered Engineer in E-Waste compliance?',
      a: 'Chartered Engineers provide independent engineering validation: verifying equipment weight ratios, auditing bills of materials (BOM), assessing factory electronic scrap generation benchmarks, and ensuring technical consistency between factory registers and portal disclosures.'
    },
    {
      q: 'How long does the return preparation process take?',
      a: 'When client sales and import ledgers are organized, our team typically compiles and validates the return within 3 to 5 business days.'
    },
    {
      q: 'Do registered recyclers also have return filing requirements?',
      a: 'Yes. Recyclers must file annual returns on the CPCB portal demonstrating quantities of e-waste received, materials recovered, and the exact EPR certificates generated and transferred to producers.'
    },
    {
      q: 'Can MS CHARTERED ENGINEERS assist clients outside Rajasthan?',
      a: 'Yes. We are headquartered in Jaipur with an established Pan-India practice. We handle CPCB E-Waste consultancy for clients across Delhi-NCR, Mumbai, Bengaluru, Chennai, Ahmedabad, Hyderabad, and all Indian industrial clusters.'
    },
    {
      q: 'How do we get started with MS CHARTERED ENGINEERS?',
      a: 'Simply call our direct office line at +91 91586 58885, reach out via WhatsApp, or submit the consultation form below. A senior technical consultant will review your business role within 2 hours.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.mscharteredengineer.com/e-waste-annual-return-filing#service",
    "name": "E-Waste Annual Return Filing & EPR Compliance Services",
    "provider": {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "name": "MS Chartered Engineers",
      "url": "https://www.mscharteredengineer.com/",
      "telephone": "+919158658885"
    },
    "description": "Statutory E-Waste Annual Return Filing (Form 3) and CPCB EPR Compliance Services by senior Chartered Engineers (IIT Roorkee alumni). End-to-end guidance for Importers, Brand Owners, Domestic Manufacturers and Recyclers across India.",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "CPCB E-Waste Statutory Consultancy & EPR Compliance",
    "url": "https://www.mscharteredengineer.com/e-waste-annual-return-filing"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mscharteredengineer.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.mscharteredengineer.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "E-Waste Annual Return Filing & EPR Compliance",
        "item": "https://www.mscharteredengineer.com/e-waste-annual-return-filing"
      }
    ]
  };

  return (
    <div
      className="e-waste-dashboard-page"
      style={{
        background: '#faf7f2',
        color: '#1a2e1a',
        minHeight: '100vh',
        paddingBottom: '80px',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      {/* ── JSON-LD Structured Data for Google Rich Results ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Top Executive Statutory Telemetry Bar (DWMPL Dark Forest Theme) ── */}
      <div
        style={{
          background: '#0d1a0e',
          borderBottom: '1px solid rgba(109, 184, 122, 0.25)',
          padding: '10px 20px',
          fontSize: '0.82rem',
          color: '#e2ede4',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            maxWidth: '1240px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
                background: 'rgba(109, 184, 122, 0.15)',
                color: '#6db87a',
                border: '1px solid rgba(109, 184, 122, 0.35)',
                padding: '3px 12px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.76rem'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#6db87a',
                  display: 'inline-block',
                  boxShadow: '0 0 8px #6db87a'
                }}
              />
              CPCB EPR v2022 PORTAL · STATUTORY STATUS: ACTIVE
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ color: '#c5d8c8', fontSize: '0.78rem' }}>
              MoEFCC Gazette: <strong style={{ color: '#d4a843' }}>G.S.R. 814(E)</strong>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ color: '#c5d8c8', fontSize: '0.78rem' }}>
              Statutory Cycle: <strong style={{ color: '#a8d5b5' }}>FY 2024–25 Active</strong>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ color: '#c5d8c8', fontSize: '0.80rem' }}>
              Compliance Desk: <a href="tel:+919158658885" style={{ color: '#6db87a', textDecoration: 'none', fontWeight: 700 }}>+91 91586 58885</a>
            </span>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '6px',
                padding: '4px 12px',
                color: '#e2ede4',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
            >
              <ArrowLeft size={13} /> Exit to Portal Home
            </button>
          </div>
        </div>
      </div>

      {/* ── Executive Hero Section (DWMPL Dark Forest Radial & Facility Image) ── */}
      <section
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 25%, #233e24 0%, #152716 60%, #0a130a 100%)',
          padding: '60px 20px 54px',
          borderBottom: '1px solid rgba(109, 184, 122, 0.2)',
          position: 'relative',
          color: '#ffffff'
        }}
      >
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '44px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Authoritative Copy with Gold Eyebrow & Leaf Green Accents */}
            <div>
              {/* DWMPL Gold Eyebrow */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#d4a843',
                  fontSize: '0.80rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px'
                }}
              >
                <span style={{ height: '1px', width: '24px', background: '#d4a843', display: 'inline-block' }} />
                <span>E-WASTE (MANAGEMENT) RULES, 2022 COMPLIANCE</span>
                <span style={{ height: '1px', width: '24px', background: '#d4a843', display: 'inline-block' }} />
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3.3rem)',
                  fontWeight: 800,
                  lineHeight: 1.16,
                  marginBottom: '18px',
                  letterSpacing: '-0.025em',
                  color: '#ffffff'
                }}
              >
                E-Waste Annual Return Filing &amp;{' '}
                <span
                  style={{
                    color: '#6db87a',
                    fontStyle: 'italic',
                    fontWeight: 800
                  }}
                >
                  CPCB EPR Compliance
                </span>
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#d1e3d4',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                  maxWidth: '620px'
                }}
              >
                Navigating the Central Pollution Control Board (CPCB) portal doesn’t have to be a legal headache. Our senior Chartered Engineers audit your sales ledgers, customs Bill of Entry data, and recycling manifests—ensuring 100% auditable annual filings and zero regulatory surprises.
              </p>

              {/* Trust Metric Chips in Dark Forest Glass */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '12px',
                  marginBottom: '32px'
                }}
              >
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(109, 184, 122, 0.3)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <div style={{ fontSize: '0.70rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                    Governing Law
                  </div>
                  <div style={{ fontSize: '1.02rem', color: '#d4a843', fontWeight: 800, marginTop: '2px' }}>
                    E-Waste Rules 2022
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(109, 184, 122, 0.3)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <div style={{ fontSize: '0.70rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                    Product Coverage
                  </div>
                  <div style={{ fontSize: '1.02rem', color: '#6db87a', fontWeight: 800, marginTop: '2px' }}>
                    106+ EEE Codes
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(109, 184, 122, 0.3)',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  <div style={{ fontSize: '0.70rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                    Engineering Audit
                  </div>
                  <div style={{ fontSize: '1.02rem', color: '#a8d5b5', fontWeight: 800, marginTop: '2px' }}>
                    IIT Roorkee / IEI
                  </div>
                </div>
              </div>

              {/* Action Buttons in DWMPL Rounded Pill Styles */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="#compliance-console"
                  style={{
                    background: 'linear-gradient(135deg, #6db87a 0%, #4fa85c 100%)',
                    color: '#0a170b',
                    padding: '14px 28px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '0.94rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 24px rgba(109, 184, 122, 0.35)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>Book Compliance Audit</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance.%20Please%20help%20me%20understand%20the%20applicable%20requirements."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(109, 184, 122, 0.4)',
                    color: '#e2ede4',
                    padding: '14px 24px',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.94rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Leaf size={16} color="#6db87a" />
                  <span>WhatsApp Consultant</span>
                </a>

                <a
                  href="tel:+919158658885"
                  style={{
                    background: 'transparent',
                    color: '#ffffff',
                    padding: '13px 20px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <PhoneCall size={15} color="#d4a843" />
                  <span>+91 91586 58885</span>
                </a>
              </div>
            </div>

            {/* Right Column: DWMPL-Inspired High-Tech Facility Showcase Card */}
            <div>
              <div
                style={{
                  background: 'rgba(20, 36, 21, 0.85)',
                  border: '1.5px solid rgba(109, 184, 122, 0.35)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 50px rgba(0, 0, 0, 0.45)',
                  position: 'relative',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Real E-Waste Recycling Facility Image */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src="/seo/ewaste-recycling-facility.jpg"
                    alt="CPCB E-Waste Recycling and Inspection Facility"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(10, 20, 11, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#6db87a',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      border: '1px solid rgba(109, 184, 122, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span
                      style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: '#10b981',
                        display: 'inline-block',
                        boxShadow: '0 0 6px #10b981'
                      }}
                    />
                    CPCB REGISTERED FACILITY AUDIT · FORM 3 VERIFIED
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: '#d4a843',
                      color: '#0b160c',
                      fontSize: '0.70rem',
                      fontWeight: 800,
                      padding: '4px 9px',
                      borderRadius: '4px'
                    }}
                  >
                    STATUTORY TRACEABILITY
                  </div>
                </div>

                {/* Dashboard Widget Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(109, 184, 122, 0.2)',
                      borderRadius: '8px',
                      padding: '10px 14px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 600 }}>
                        Filing Jurisdiction
                      </div>
                      <div style={{ fontSize: '0.90rem', color: '#ffffff', fontWeight: 700 }}>
                        MoEFCC / CPCB Central Registry
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        color: '#6db87a',
                        background: 'rgba(109, 184, 122, 0.15)',
                        border: '1px solid rgba(109, 184, 122, 0.3)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                        fontWeight: 700
                      }}
                    >
                      PAN-INDIA
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(109, 184, 122, 0.2)',
                      borderRadius: '8px',
                      padding: '10px 14px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 600 }}>
                        Statutory Annual Deadline
                      </div>
                      <div style={{ fontSize: '0.90rem', color: '#f59e0b', fontWeight: 800 }}>
                        30th June (Subject to CPCB circulars)
                      </div>
                    </div>
                    <Clock size={16} color="#d4a843" />
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(109, 184, 122, 0.2)',
                      borderRadius: '8px',
                      padding: '10px 14px'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.68rem', color: '#9cbca0', textTransform: 'uppercase', fontWeight: 600 }}>
                        Scrutiny Protocol
                      </div>
                      <div style={{ fontSize: '0.90rem', color: '#ffffff', fontWeight: 700 }}>
                        Chartered Engineer Cross-Verification
                      </div>
                    </div>
                    <ShieldCheck size={16} color="#6db87a" />
                  </div>

                  {/* Fast Action */}
                  <div
                    style={{
                      marginTop: '4px',
                      padding: '12px',
                      background: 'rgba(109, 184, 122, 0.1)',
                      border: '1.5px dashed rgba(109, 184, 122, 0.35)',
                      borderRadius: '8px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '0.80rem', color: '#cbe0cf', marginBottom: '6px', fontWeight: 500 }}>
                      Unverified recycler manifests or customs weight mismatches?
                    </div>
                    <a
                      href="#quick-checker"
                      style={{
                        color: '#6db87a',
                        fontSize: '0.84rem',
                        fontWeight: 800,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Run 30-Second Self Eligibility Check <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DWMPL-Inspired 4-Column Stats Strip ── */}
        <div
          style={{
            maxWidth: '1240px',
            margin: '48px auto 0',
            padding: '20px 24px',
            background: 'rgba(11, 22, 12, 0.85)',
            border: '1px solid rgba(109, 184, 122, 0.25)',
            borderRadius: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
          }}
        >
          <div style={{ borderRight: '1px solid rgba(109, 184, 122, 0.2)', paddingRight: '16px' }}>
            <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#6db87a' }}>
              106+
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a6c5ab', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginTop: '2px' }}>
              Schedule I EEE Codes
            </div>
            <div style={{ fontSize: '0.74rem', color: '#76927a', marginTop: '3px' }}>
              IT, Telecom, Consumer &amp; Solar
            </div>
          </div>

          <div style={{ borderRight: '1px solid rgba(109, 184, 122, 0.2)', paddingRight: '16px' }}>
            <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#d4a843' }}>
              30th June
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a6c5ab', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginTop: '2px' }}>
              Annual Filing Cutoff
            </div>
            <div style={{ fontSize: '0.74rem', color: '#76927a', marginTop: '3px' }}>
              Pre-filing audit avoids port halts
            </div>
          </div>

          <div style={{ borderRight: '1px solid rgba(109, 184, 122, 0.2)', paddingRight: '16px' }}>
            <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#6db87a' }}>
              100% Pan-India
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a6c5ab', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginTop: '2px' }}>
              Customs BOE Audit
            </div>
            <div style={{ fontSize: '0.74rem', color: '#76927a', marginTop: '3px' }}>
              All ports, ICDs &amp; SEZs covered
            </div>
          </div>

          <div>
            <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff' }}>
              IIT Roorkee
            </div>
            <div style={{ fontSize: '0.78rem', color: '#a6c5ab', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, marginTop: '2px' }}>
              IEI Chartered Engineers
            </div>
            <div style={{ fontSize: '0.74rem', color: '#76927a', marginTop: '3px' }}>
              Statutory technical validation
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Role-Based Compliance Console (Tabs) ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Targeted Regulatory Scrutiny
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              Select Your Business Category
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '6px' }}>
              Statutory requirements differ completely depending on your position in the electronics supply chain:
            </p>
          </div>

          {/* Segmented Control Bar */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              background: '#f1f5f9',
              padding: '6px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '28px',
              overflowX: 'auto'
            }}
          >
            {[
              { id: 'importers', label: 'Importers & Brand Owners', icon: '🚢' },
              { id: 'manufacturers', label: 'Domestic Manufacturers', icon: '🏭' },
              { id: 'refurbishers', label: 'Refurbishers', icon: '🔧' },
              { id: 'recyclers', label: 'Registered Recyclers', icon: '♻️' }
            ].map((tab) => {
              const isSelected = activeRole === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveRole(tab.id)}
                  style={{
                    flex: 1,
                    minWidth: '180px',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    background: isSelected
                      ? 'linear-gradient(135deg, #059669 0%, #047857 100%)'
                      : 'transparent',
                    color: isSelected ? '#ffffff' : '#475569',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: isSelected ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Role Detail Console Card */}
          <div
            style={{
              background: '#f8fafc',
              border: '1.5px solid #a7f3d0',
              borderRadius: '14px',
              padding: '32px',
              boxShadow: '0 10px 30px rgba(6, 95, 70, 0.06)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '14px',
                marginBottom: '20px'
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.70rem',
                    background: '#fef3c7',
                    color: '#92400e',
                    border: '1px solid #fde68a',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontWeight: 800,
                    fontFamily: 'monospace'
                  }}
                >
                  {roleData[activeRole].badge}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '8px' }}>
                  {roleData[activeRole].title}
                </h3>
              </div>

              <a
                href="#compliance-console"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    businessType: roleData[activeRole].title.split(' ')[0]
                  }))
                }
                style={{
                  background: '#ecfdf5',
                  border: '1.5px solid #a7f3d0',
                  color: '#065f46',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                File for this Category →
              </a>
            </div>

            <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.6, marginBottom: '24px' }}>
              {roleData[activeRole].summary}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}
            >
              {/* Obligations */}
              <div
                style={{
                  background: '#ffffff',
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: '#065f46',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Recycle size={15} color="#059669" /> Mandatory Statutory Duties:
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: '#334155'
                  }}
                >
                  {roleData[activeRole].obligations.map((ob, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <Check size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{ob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Records */}
              <div
                style={{
                  background: '#ffffff',
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: '#0284c7',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FileText size={15} color="#0284c7" /> Auditable Documentation Required:
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: '#334155'
                  }}
                >
                  {roleData[activeRole].keyDocs.map((doc, i) => (
                    <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <FileCheck2 size={16} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: '16px',
                    padding: '10px 12px',
                    background: '#fff1f2',
                    border: '1px solid #fecdd3',
                    borderRadius: '6px',
                    fontSize: '0.80rem',
                    color: '#9f1239',
                    fontWeight: 500
                  }}
                >
                  <ShieldAlert size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                  {roleData[activeRole].riskAlert}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DWMPL-Inspired High-Tech Facility & Engineering Audit Showcase ── */}
      <section style={{ padding: '68px 20px', background: '#f5f0e8', borderBottom: '1px solid #e5dfd5' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#006235',
                fontSize: '0.80rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                background: 'rgba(0, 98, 53, 0.08)',
                border: '1px solid rgba(0, 98, 53, 0.2)',
                padding: '6px 16px',
                borderRadius: '9999px',
                marginBottom: '12px'
              }}
            >
              <Leaf size={14} color="#006235" />
              <span>RECYCLING INFRASTRUCTURE &amp; FIELD SCRUTINY</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                fontWeight: 800,
                color: '#162916',
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              End-to-End E-Waste Verification &amp; Statutory Traceability
            </h2>
            <p
              style={{
                fontSize: '0.98rem',
                color: '#4d5e4f',
                maxWidth: '780px',
                margin: '12px auto 0',
                lineHeight: 1.65
              }}
            >
              Bridging the gap between factory assembly lines, customs cargo ICDs, authorized recycling infrastructure, and the official CPCB portal.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '30px'
            }}
          >
            {/* Card 1: PCB & Circular Component Recycling */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5dfd5',
                boxShadow: '0 8px 30px rgba(22, 39, 22, 0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src="/seo/ewaste-circuit-recycling.jpg"
                  alt="E-Waste Circuit Board and PCB Sustainable Recycling"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(22, 41, 22, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#6db87a',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(109, 184, 122, 0.3)',
                    fontFamily: 'monospace'
                  }}
                >
                  SCHEDULE I RECOVERY MATRIX
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '14px',
                    background: '#d4a843',
                    color: '#112211',
                    fontSize: '0.70rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  GOLD / COPPER / REE
                </div>
              </div>
              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#162916', marginBottom: '10px' }}>
                    Authorized Channelization &amp; EPR Credit Procurement
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#4a5b4c', lineHeight: 1.6, marginBottom: '18px' }}>
                    We assist producers in validating official Form 6 hazardous waste manifests and reconciling EPR recycling certificates transferred by authorized recyclers on the CPCB portal. Every gram of plastic, gold, copper, and iron is matched against statutory targets to prevent penalty assessments.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      PCB Component Segregation
                    </span>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      CPCB Portal Certificate Transfer
                    </span>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      Hazardous Unit Manifests
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #f0eae1' }}>
                  <a
                    href="#compliance-console"
                    style={{
                      color: '#006235',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Audit Your Recycler Certificates <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Chartered Engineer Verification & Warehouse Inspection */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #e5dfd5',
                boxShadow: '0 8px 30px rgba(22, 39, 22, 0.06)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src="/seo/ewaste-audit-engineer.jpg"
                  alt="Chartered Engineer conducting e-waste warehouse inventory compliance audit"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(22, 41, 22, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#6db87a',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid rgba(109, 184, 122, 0.3)',
                    fontFamily: 'monospace'
                  }}
                >
                  INDEPENDENT FIELD AUDIT
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '14px',
                    background: '#006235',
                    color: '#ffffff',
                    fontSize: '0.70rem',
                    fontWeight: 800,
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}
                >
                  IIT ROORKEE / IEI CHARTERED ENGINEER
                </div>
              </div>
              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#162916', marginBottom: '10px' }}>
                    Customs BOE Reconciliation &amp; Net Weight Schedules
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#4a5b4c', lineHeight: 1.6, marginBottom: '18px' }}>
                    Statutory filings fail when customs Bill of Entry (BOE) import gross weights differ from portal product category weights. Our Chartered Engineers verify Bills of Materials (BOM), conduct physical packaging audits, and issue independent engineering certificates accepted by banks, customs, and environmental tribunals.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      Customs BOE Cross-Matching
                    </span>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      Average Product Life Expectancy
                    </span>
                    <span style={{ fontSize: '0.74rem', background: '#f5f0e8', color: '#1b3b1c', padding: '4px 10px', borderRadius: '4px', fontWeight: 700 }}>
                      Independent Engineer Certificate
                    </span>
                  </div>
                </div>
                <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid #f0eae1' }}>
                  <a
                    href="#compliance-console"
                    style={{
                      color: '#006235',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Request Customs BOE Reconciliation <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 Dedicated Services Command Grid ── */}
      <section style={{ padding: '64px 20px', background: '#faf7f2', borderBottom: '1px solid #e5dfd5' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Full Technical Suite
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              Our 10 E-Waste Compliance Practice Modules
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '6px' }}>
              Modular technical consultancy structured for audit-readiness and legal certainty:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px'
            }}
          >
            {servicesList.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#059669';
                    e.currentTarget.style.boxShadow = '0 10px 24px -4px rgba(5, 150, 105, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '14px'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.70rem',
                          color: '#047857',
                          fontWeight: 800,
                          fontFamily: 'monospace'
                        }}
                      >
                        MODULE {svc.num}
                      </span>
                      <span
                        style={{
                          fontSize: '0.66rem',
                          color: '#0369a1',
                          background: '#e0f2fe',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}
                      >
                        {svc.tag}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          background: '#ecfdf5',
                          color: '#059669',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <IconComp size={19} />
                      </div>
                      <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
                        {svc.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                      {svc.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '16px', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                    <a
                      href="#compliance-console"
                      onClick={() => setFormData((prev) => ({ ...prev, serviceRequired: svc.title }))}
                      style={{
                        color: '#059669',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>Inquire module</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7-Step Auditable Workflow (Horizontal Dashboard Timeline) ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '38px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Standard Operating Procedure
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              7-Step Auditable Compliance Workflow
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#475569', marginTop: '6px' }}>
              From initial product mapping to final portal filing acknowledgment:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px'
            }}
          >
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '16px 14px',
                  position: 'relative',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      color: '#059669',
                      fontFamily: 'monospace'
                    }}
                  >
                    {st.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      background: '#e2e8f0',
                      color: '#475569',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 700
                    }}
                  >
                    {st.duration}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: '#0284c7',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}
                >
                  {st.phase}
                </div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <span
              style={{
                fontSize: '0.84rem',
                color: '#047857',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                padding: '6px 16px',
                borderRadius: '9999px',
                fontWeight: 600,
                display: 'inline-block'
              }}
            >
              ⚡ Typical turnaround: 3–5 working days upon receiving complete sales/import datasets.
            </span>
          </div>
        </div>
      </section>

      {/* ── Interactive 30-Second Self-Audit Checker ── */}
      <section
        id="quick-checker"
        style={{ padding: '64px 20px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}
      >
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div
            style={{
              background: '#ffffff',
              border: '2px solid #059669',
              borderRadius: '16px',
              padding: '34px',
              boxShadow: '0 20px 40px -10px rgba(5, 150, 105, 0.12)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#047857',
                fontWeight: 800,
                fontSize: '1.2rem',
                marginBottom: '8px'
              }}
            >
              <Sliders size={22} color="#059669" />
              <span>Interactive Self-Audit: Do You Have E-Waste Liability?</span>
            </div>
            <p style={{ fontSize: '0.94rem', color: '#475569', marginBottom: '22px' }}>
              Check your exposure under the E-Waste (Management) Rules, 2022 in 3 simple selections:
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px',
                marginBottom: '24px'
              }}
            >
              {/* Question 1 */}
              <div>
                <label style={{ display: 'block', fontSize: '0.80rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }}>
                  1. Your Commercial Activity
                </label>
                <select
                  value={checkerState.businessRole}
                  onChange={(e) => setCheckerState((prev) => ({ ...prev, businessRole: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                >
                  <option value="importer">Importer of Electronics / Components</option>
                  <option value="brand_producer">Domestic Brand Producer / Assembler</option>
                  <option value="manufacturer">Industrial EEE Manufacturer</option>
                  <option value="refurbisher">Refurbisher / Reseller of Used IT</option>
                </select>
              </div>

              {/* Question 2 */}
              <div>
                <label style={{ display: 'block', fontSize: '0.80rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }}>
                  2. Products in Schedule I / II?
                </label>
                <select
                  value={checkerState.dealsInEEE}
                  onChange={(e) => setCheckerState((prev) => ({ ...prev, dealsInEEE: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                >
                  <option value="yes">Yes (IT, Telecom, Consumer, Solar, Medical)</option>
                  <option value="not_sure">Not Sure / Mixed Product Catalog</option>
                </select>
              </div>

              {/* Question 3 */}
              <div>
                <label style={{ display: 'block', fontSize: '0.80rem', color: '#334155', fontWeight: 700, marginBottom: '6px' }}>
                  3. Active CPCB Registration?
                </label>
                <select
                  value={checkerState.hasRegistration}
                  onChange={(e) => setCheckerState((prev) => ({ ...prev, hasRegistration: e.target.value }))}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    color: '#0f172a',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    outline: 'none'
                  }}
                >
                  <option value="no">No active registration yet</option>
                  <option value="yes">Registered, but return pending</option>
                  <option value="not_sure">Uncertain / Legacy registration</option>
                </select>
              </div>
            </div>

            {/* Dynamic Result Box */}
            <div
              style={{
                background: '#ecfdf5',
                border: '1.5px solid #a7f3d0',
                borderRadius: '10px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '14px'
              }}
            >
              <div>
                <div
                  style={{
                    color: '#065f46',
                    fontWeight: 800,
                    fontSize: '0.98rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Activity size={17} color="#059669" /> AUDIT STATUS: COMPLIANCE MANDATORY
                </div>
                <div style={{ fontSize: '0.86rem', color: '#334155', marginTop: '4px' }}>
                  {checkerState.businessRole === 'importer'
                    ? 'As an Importer, you require CPCB EPR Registration to clear customs, plus mandatory Annual Return Form 3 filing.'
                    : 'Your business qualifies under the E-Waste framework. Mandatory annual reporting and recycler manifest audit apply.'}
                </div>
              </div>

              <a
                href="#compliance-console"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  color: '#ffffff',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)'
                }}
              >
                Resolve This Requirement →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Document Vault Matrix (No Messy Boxes) ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Auditable Records
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              The 4 Essential Documentation Clusters
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#475569', marginTop: '6px' }}>
              Organize these documents; our engineering team handles verification and portal translation:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px'
            }}
          >
            {[
              {
                title: 'Corporate Dossier',
                icon: Building2,
                color: '#0284c7',
                items: ['Company PAN, GSTIN & CIN', 'IEC for Importers', 'Board Authorization Letter', 'Authorized Person KYC']
              },
              {
                title: 'Equipment & Weights',
                icon: Cpu,
                color: '#d97706',
                items: ['Schedule I / II EEE Codes', 'Model-wise Net Unit Weight', 'BOM for Component Kits', 'Brand Authorization']
              },
              {
                title: 'Transaction Ledgers',
                icon: FileText,
                color: '#059669',
                items: ['Annual Sales Weight Totals', 'Import Bills of Entry (BOE)', 'Interstate Transfer Registers', 'Sample Commercial Invoices']
              },
              {
                title: 'Recycling Manifests',
                icon: RefreshCw,
                color: '#e11d48',
                items: ['Form 6 Waste Manifests', 'Certified Recycler SPCB CTO', 'CPCB EPR Credit Portal IDs', 'Prior Acknowledged Returns']
              }
            ].map((col, idx) => {
              const ColIcon = col.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '22px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: col.color,
                      fontWeight: 800,
                      fontSize: '0.94rem',
                      marginBottom: '14px'
                    }}
                  >
                    <ColIcon size={19} />
                    <span>{col.title}</span>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.86rem',
                      color: '#334155'
                    }}
                  >
                    {col.items.map((it, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#059669', fontWeight: 'bold' }}>✓</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '22px', fontSize: '0.82rem', color: '#64748b' }}>
            *Note: Exact checklist is tailored to your business category after initial technical scoping.
          </div>
        </div>
      </section>

      {/* ── Why MS CHARTERED ENGINEERS (Executive Dossier) ── */}
      <section style={{ padding: '64px 20px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Engineering Governance
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              Why Work With MS CHARTERED ENGINEERS?
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#475569', marginTop: '6px' }}>
              We are not brokers or telemarketing agencies; we are statutory engineering consultants:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '18px'
            }}
          >
            {[
              {
                title: 'Senior Engineering Scrutiny',
                desc: 'Technical leadership by IIT Roorkee alumni and Corporate Member of the Institution of Engineers India (CEng MIE).'
              },
              {
                title: 'Data Audited Down to the Kilogram',
                desc: 'We cross-reconcile product net weight against sales numbers to prevent CPCB algorithmic mismatch flags.'
              },
              {
                title: 'No Fake Promises or Gimmicks',
                desc: 'We do not sell fraudulent "guaranteed penalty protection." We deliver auditable, rigorous compliance that stands scrutiny.'
              },
              {
                title: 'Direct Pan-India Practice',
                desc: 'Central headquarters in Jaipur (PIN 302019) servicing clients across Delhi-NCR, Gujarat, Maharashtra, Karnataka, and Tamil Nadu.'
              },
              {
                title: 'Audit-Proof Archival Dossier',
                desc: 'You receive complete stamped computation sheets, portal acknowledgments, and an annual record binder.'
              },
              {
                title: 'Post-Filing Query Defense',
                desc: 'If CPCB portal scrutiny officers request technical clarification on weights or HSN codes, we draft the engineering response.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#047857',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    marginBottom: '8px'
                  }}
                >
                  <CheckCircle2 size={17} color="#059669" />
                  <span>{card.title}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section (Clean Accordion) ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                color: '#059669',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Regulatory Clarity
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
                fontWeight: 800,
                marginTop: '8px',
                color: '#0f172a'
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '0.94rem', color: '#475569', marginTop: '6px' }}>
              Clear answers regarding E-Waste Rules 2022, CPCB portals, and filing obligations:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: isOpen ? '1.5px solid #059669' : '1px solid #e2e8f0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: isOpen ? '0 4px 12px rgba(5, 150, 105, 0.08)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'none',
                      border: 'none',
                      color: '#0f172a',
                      textAlign: 'left',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: isOpen ? '#059669' : '#64748b',
                        flexShrink: 0
                      }}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 16px',
                        fontSize: '0.88rem',
                        color: '#475569',
                        lineHeight: 1.65,
                        borderTop: '1px solid #e2e8f0',
                        paddingTop: '12px'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive Lead Generation Console Form (DWMPL Forest Theme) ── */}
      <section
        id="compliance-console"
        style={{
          padding: '80px 20px',
          background: 'radial-gradient(ellipse 90% 70% at 50% 25%, #233e24 0%, #152716 60%, #0a130a 100%)',
          borderBottom: '1px solid rgba(109, 184, 122, 0.2)',
          color: '#ffffff'
        }}
      >
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#d4a843',
                fontSize: '0.80rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}
            >
              <span style={{ height: '1px', width: '24px', background: '#d4a843', display: 'inline-block' }} />
              <span>DIRECT STATUTORY SCRUTINY</span>
              <span style={{ height: '1px', width: '24px', background: '#d4a843', display: 'inline-block' }} />
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                fontWeight: 800,
                marginTop: '4px',
                color: '#ffffff'
              }}
            >
              Initiate Your E-Waste <span style={{ color: '#6db87a', fontStyle: 'italic' }}>Compliance Review</span>
            </h2>
            <p style={{ fontSize: '0.98rem', color: '#cbe0cf', marginTop: '10px', maxWidth: '640px', margin: '10px auto 0' }}>
              Fill in your commercial details. A senior technical consultant will review your scope within 2 business hours.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(20, 36, 21, 0.92)',
              border: '1.5px solid rgba(109, 184, 122, 0.35)',
              borderRadius: '20px',
              padding: '36px 32px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    background: '#ecfdf5',
                    color: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  Compliance Request Queued
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 20px' }}>
                  Your details have been registered. A WhatsApp chat with our technical desk has opened for direct document exchange.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href="tel:+919158658885"
                    style={{
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      color: '#fff',
                      padding: '11px 20px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Phone size={14} /> Call Lead Engineer
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        mobileNumber: '',
                        email: '',
                        city: '',
                        businessType: 'Importer',
                        eeeCategory: '',
                        currentRegistration: 'Not Sure',
                        serviceRequired: 'Annual Return Filing',
                        financialYear: 'FY 2024-25',
                        message: '',
                        consent: true
                      });
                    }}
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      padding: '11px 18px',
                      borderRadius: '6px',
                      color: '#334155',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer'
                    }}
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                    marginBottom: '16px'
                  }}
                >
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Vikram Singhal"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Precision Tech India Ltd"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Mobile (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="compliance@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      City / State *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Jaipur / Delhi / Mumbai"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Importer">Importer of Electronic Goods</option>
                      <option value="Producer">Producer / Brand Owner</option>
                      <option value="Manufacturer">Domestic Manufacturer</option>
                      <option value="Refurbisher">Refurbisher</option>
                      <option value="Recycler">Recycler</option>
                      <option value="Other">Other / Solar Developer</option>
                    </select>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Service Required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Annual Return Filing">Annual Return Filing (Form 3)</option>
                      <option value="EPR Registration Assistance">CPCB EPR Portal Registration</option>
                      <option value="Quarterly Return Filing">Quarterly Return Maintenance</option>
                      <option value="Compliance Assessment">Full Scoping &amp; Eligibility Audit</option>
                      <option value="Recycler Manifest Verification">Recycler Manifest Verification</option>
                      <option value="Other">Other Query / Multi-Year Backlog</option>
                    </select>
                  </div>

                  {/* Financial Year */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                      Financial Year *
                    </label>
                    <select
                      name="financialYear"
                      value={formData.financialYear}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#f8fafc',
                        border: '1.5px solid #cbd5e1',
                        borderRadius: '6px',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="FY 2024-25">FY 2024-25 (Current)</option>
                      <option value="FY 2023-24">FY 2023-24</option>
                      <option value="Multiple FYs">Multiple Years Backlog</option>
                    </select>
                  </div>
                </div>

                {/* Radio CPCB Registration */}
                <div style={{ marginBottom: '16px', background: '#f8fafc', padding: '12px 14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                    Do you currently have an active CPCB E-Waste Registration?
                  </label>
                  <div style={{ display: 'flex', gap: '22px', fontSize: '0.86rem', color: '#1e293b' }}>
                    {['Yes', 'No', 'Not Sure'].map((val) => (
                      <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="currentRegistration"
                          value={val}
                          checked={formData.currentRegistration === val}
                          onChange={handleInputChange}
                        />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.80rem', fontWeight: 700, color: '#334155', marginBottom: '5px' }}>
                    Brief Requirement / Product Details (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="e.g. Importing consumer electronics, need EPR target calculation and return filing..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: '#f8fafc',
                      border: '1.5px solid #cbd5e1',
                      borderRadius: '6px',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Consent */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.80rem', color: '#475569' }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      style={{ marginTop: '2px' }}
                    />
                    <span>
                      I authorize MS CHARTERED ENGINEERS to review my compliance details and connect via phone or WhatsApp.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #6db87a 0%, #4fa85c 100%)',
                    color: '#09150a',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 8px 25px rgba(109, 184, 122, 0.4)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <Send size={17} />
                  <span>{submitting ? 'Connecting...' : 'Request Compliance Audit Review'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Executive Seal & Final Advisory Banner (DWMPL Warm Sand & Forest Green) ── */}
      <section style={{ padding: '56px 20px', background: '#f5f0e8', borderTop: '1px solid #e5dfd5', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#006235',
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              background: 'rgba(0,98,53,0.08)',
              padding: '6px 14px',
              borderRadius: '9999px'
            }}
          >
            <ShieldCheck size={18} color="#006235" /> MS CHARTERED ENGINEERS · VALUERS &amp; TECHNICAL CONSULTANCY
          </div>
          <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#162916', marginBottom: '10px' }}>
            Auditable Precision for Indian &amp; Global Industry
          </h3>
          <p style={{ fontSize: '0.90rem', color: '#4d5e4f', lineHeight: 1.65, maxWidth: '640px', margin: '0 auto 22px' }}>
            Headquarters: Jaipur, Rajasthan – 302019 | Serving manufacturing units, ICD cargo depots, and SEZ import corridors nationwide.
          </p>
          <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.90rem' }}>
            <a href="tel:+919158658885" style={{ color: '#006235', textDecoration: 'none', fontWeight: 700 }}>
              Direct: +91 91586 58885
            </a>
            <span style={{ color: '#c5bfb4' }}>•</span>
            <a href="mailto:ms.charteredengineer@gmail.com" style={{ color: '#006235', textDecoration: 'none', fontWeight: 700 }}>
              ms.charteredengineer@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Floating Executive WhatsApp Button ── */}
      <a
        href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance.%20Please%20help%20me%20understand%20the%20applicable%20requirements."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Senior Engineer"
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          background: 'linear-gradient(135deg, #6db87a 0%, #4fa85c 100%)',
          color: '#09150a',
          borderRadius: '9999px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 8px 24px rgba(109, 184, 122, 0.45)',
          zIndex: 999,
          fontWeight: 800,
          fontSize: '0.90rem',
          textDecoration: 'none'
        }}
      >
        <span>💬</span>
        <span>WhatsApp Consultant</span>
      </a>
    </div>
  );
}
