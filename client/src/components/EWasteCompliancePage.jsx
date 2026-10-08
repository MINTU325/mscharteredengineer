import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  PhoneCall,
  Phone,
  ChevronRight,
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
  ArrowUpRight
} from 'lucide-react';

export default function EWasteCompliancePage({ onNavigateHome, onOpenQuote }) {
  // FAQ accordion state (single or multiple)
  const [openFaq, setOpenFaq] = useState(0);

  // Lead Form State
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    city: '',
    businessType: 'Manufacturer',
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
      alert('Please fill all mandatory fields (Name, Company, and Mobile Number).');
      return;
    }
    setSubmitting(true);

    // Build WhatsApp message link for immediate submission
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
      // Open WhatsApp in new tab for direct consultation
      window.open(`https://wa.me/919158658885?text=${waText}`, '_blank');
    }, 400);
  };

  const faqs = [
    {
      q: 'What is E-Waste Annual Return Filing?',
      a: 'E-Waste Annual Return Filing is a mandatory statutory reporting activity under the E-Waste (Management) Rules, 2022 (notified by MoEFCC and administered via CPCB). Covered entities must report production, sales, imports, E-Waste channelization, and EPR certificate fulfillment for each financial year through the designated CPCB E-Waste EPR portal, subject to applicable rules, CPCB requirements, and portal updates.'
    },
    {
      q: 'Who needs to file an E-Waste annual return?',
      a: 'Entities categorized under the E-Waste (Management) Rules, 2022—including manufacturers of covered Electrical and Electronic Equipment (EEE), producers/brand owners, importers, refurbishers, and registered recyclers—are generally required to submit periodic returns as prescribed by CPCB.'
    },
    {
      q: 'Is E-Waste EPR registration mandatory?',
      a: 'Yes, entities falling under the covered producer, manufacturer, refurbisher, or recycler definitions must register on the Central Pollution Control Board (CPCB) E-Waste EPR portal before placing covered electrical and electronic equipment in the Indian market or carrying out processing, subject to applicable guidelines.'
    },
    {
      q: 'What is the CPCB E-Waste EPR Portal?',
      a: 'The CPCB E-Waste EPR Portal (eprewastecpcb.in) is the official centralized digital platform set up by the Central Pollution Control Board for online registration, EPR target generation, credit transactions, and submission of quarterly and annual compliance returns.'
    },
    {
      q: 'What documents are required for E-Waste compliance?',
      a: 'Commonly required records include company KYC (PAN, GST, CIN), authorized signatory details, list of EEE products with codes, sales/import invoices, Bill of Entry for importers, channelization manifests, EPR credit transfer certificates (where applicable), and previous return filings. The exact checklist depends on your entity category.'
    },
    {
      q: 'Can you help with CPCB E-Waste EPR registration?',
      a: 'Yes. MS Chartered Engineers provides professional technical consultancy to assist businesses in reviewing eligibility, organizing product classifications, compiling supporting documents, and navigating the procedural requirements for CPCB EPR registration.'
    },
    {
      q: 'Can you help with annual and quarterly returns?',
      a: 'Yes. We assist clients with collating sales, production, import, and channelization figures, cross-verifying data consistency across invoices, and preparing the required documentation for timely annual and quarterly filing.'
    },
    {
      q: 'Do importers need E-Waste compliance?',
      a: 'Yes. Importers of covered electrical and electronic equipment are treated as "Producers" under the E-Waste (Management) Rules, 2022. They require CPCB EPR registration and must fulfill Extended Producer Responsibility targets and file periodic returns.'
    },
    {
      q: 'Do manufacturers need E-Waste EPR compliance?',
      a: 'Yes. Manufacturers producing covered electrical and electronic equipment must register on the portal, maintain manufacturing and waste generation records, and submit annual returns documenting E-Waste generation and handover to authorized recyclers.'
    },
    {
      q: 'Do refurbishers have E-Waste compliance obligations?',
      a: 'Yes. Refurbishers must register on the CPCB portal, report quantities of used electronic items received, refurbished, and residual E-Waste generated and sent for recycling.'
    },
    {
      q: 'Do recyclers need to file returns?',
      a: 'Yes. Registered recyclers must report quantities of E-Waste received, end-of-life materials recycled, end products recovered, and EPR certificates generated and transferred on the CPCB portal.'
    },
    {
      q: 'What information is required for annual return filing?',
      a: 'Key data includes itemized quantities of EEE placed on the market, sales data per category, import volumes, E-Waste collected/channelized, recycling certificates acquired, and supporting purchase/sale ledgers.'
    },
    {
      q: 'Can you provide Pan-India E-Waste compliance assistance?',
      a: 'Yes. Headquartered in Jaipur, Rajasthan, MS Chartered Engineers delivers professional technical consultancy and documentation assistance to industrial clients, brand owners, importers, and MSMEs across all Indian states and Union Territories.'
    },
    {
      q: 'How long does the filing process take?',
      a: 'The timeline depends on the completeness of client records, reconciliation complexity, CPCB portal responsiveness, and whether prior registration or amendments are pending. We recommend initiating review well ahead of statutory deadlines.'
    },
    {
      q: 'What happens if I miss an applicable return deadline?',
      a: 'Under the E-Waste (Management) Rules, 2022, delayed or missed filings may invite regulatory scrutiny, deficiency notices, portal blocking, or Environmental Compensation (EC) under CPCB guidelines. We recommend reviewing compliance status immediately.'
    },
    {
      q: 'Can MS CHARTERED ENGINEERS guarantee CPCB approval?',
      a: 'No. Regulatory approval, registration grant, and verification decisions rest solely with the Central Pollution Control Board (CPCB) and competent state authorities. MS Chartered Engineers provides professional technical consultancy, data structuring, and procedural assistance.'
    }
  ];

  const servicesList = [
    {
      title: 'E-Waste Compliance Assessment',
      desc: 'Comprehensive review of your business activities, product portfolio, and supply chain role to identify applicable E-Waste obligations under the E-Waste (Management) Rules, 2022.',
      icon: ClipboardCheck
    },
    {
      title: 'CPCB E-Waste EPR Registration Assistance',
      desc: 'End-to-end guidance in organizing documentation, company credentials, product mapping, and technical specifications required for CPCB portal registration.',
      icon: ShieldCheck
    },
    {
      title: 'Annual Return Filing Assistance',
      desc: 'Systematic compilation, validation, and preparation of annual return datasets including sales, imports, production, and channelization records.',
      icon: FileCheck2
    },
    {
      title: 'Quarterly Return Filing Assistance',
      desc: 'Structured quarterly reporting support to maintain continuous compliance records on the CPCB portal and avoid last-minute filing bottlenecks.',
      icon: RefreshCw
    },
    {
      title: 'EPR Compliance Assistance',
      desc: 'Technical advisory on understanding Extended Producer Responsibility targets, credit reconciliation, and documentation of environmentally sound management.',
      icon: Scale
    },
    {
      title: 'E-Waste Data Compilation',
      desc: 'Meticulous data aggregation from sales ledgers, import bills of entry, ERP systems, and warehouse records into CPCB-compatible formats.',
      icon: Layers
    },
    {
      title: 'Documentation Support',
      desc: 'Drafting and organizing statutory declarations, authorized signatory authorizations, technical product briefs, and self-declaration forms.',
      icon: FileText
    },
    {
      title: 'Channelization & Recycling Documentation',
      desc: 'Assistance in reviewing and verifying recycling certificates, manifests, and agreements with registered recyclers to ensure auditable trail.',
      icon: Factory
    },
    {
      title: 'Pre-Filing Compliance Review',
      desc: 'Thorough scrutiny of return drafts to flag data discrepancies, unit mismatches, or missing documentation prior to official submission.',
      icon: AlertTriangle
    },
    {
      title: 'Post-Filing Support & Record Retention',
      desc: 'Assistance with organizing filing acknowledgments, responding to portal queries or clarifications, subject to the agreed scope of engagement.',
      icon: BookOpen
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      desc: 'We understand your business model, product line, manufacturing or import volumes, and existing compliance posture.'
    },
    {
      step: '02',
      title: 'Eligibility Assessment',
      desc: 'Determine your applicable category (Manufacturer, Producer, Importer, Refurbisher, or Recycler) and specific EPR obligations.'
    },
    {
      step: '03',
      title: 'Data & Document Collection',
      desc: 'Gather required business KYC, sales figures, import bills of entry, and E-Waste channelization records via a structured checklist.'
    },
    {
      step: '04',
      title: 'Data Verification',
      desc: 'Cross-examine product categories, EEE codes, weight metrics, and supporting recycler certificates to identify any gaps.'
    },
    {
      step: '05',
      title: 'Return Preparation',
      desc: 'Format and structure the return dataset strictly in accordance with current CPCB reporting formats and portal schemas.'
    },
    {
      step: '06',
      title: 'Portal / Filing Assistance',
      desc: 'Provide hands-on assistance for smooth data entry, document upload, and submission on the official CPCB EPR portal.'
    },
    {
      step: '07',
      title: 'Filing Record & Follow-Up',
      desc: 'Deliver complete filing acknowledgments, maintain archival audit records, and assist with any routine portal clarifications.'
    }
  ];

  const cities = [
    'Jaipur', 'Rajasthan', 'Delhi', 'Gurgaon / Gurugram', 'Noida',
    'Mumbai', 'Pune', 'Ahmedabad', 'Bengaluru', 'Hyderabad',
    'Chennai', 'Kolkata', 'Indore', 'Bhopal', 'Chandigarh',
    'Lucknow', 'Kanpur', 'Surat', 'Vadodara', 'Udaipur', 'Jodhpur', 'Kota'
  ];

  return (
    <div className="e-waste-page" style={{ background: '#070e1e', color: '#f8fafc', minHeight: '100vh', paddingBottom: '70px' }}>
      
      {/* ── Breadcrumb & Back Navigation ── */}
      <div style={{ background: '#0b1736', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#94a3b8' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#38bdf8', textDecoration: 'none' }}>Home</a>
            <span>/</span>
            <a href="/services" style={{ color: '#38bdf8', textDecoration: 'none' }}>Services</a>
            <span>/</span>
            <span style={{ color: '#fbbf24' }}>E-Waste Annual Return Filing</span>
          </div>

          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9999px',
              padding: '5px 14px',
              color: '#e2e8f0',
              fontSize: '0.80rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={13} /> Back to Home
          </button>
        </div>
      </div>

      {/* ── Page Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #070e1e 0%, #0f1f42 50%, #09132b 100%)',
        padding: '60px 20px 80px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.12)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '9999px', padding: '6px 16px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: 700, marginBottom: '22px' }}>
            <Cpu size={14} /> E-Waste (Management) Rules, 2022 | CPCB EPR Framework
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '20px',
            color: '#ffffff'
          }}>
            E-Waste Annual Return Filing &amp; <span style={{ color: '#38bdf8' }}>EPR Compliance Services</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: '#cbd5e1',
            lineHeight: 1.7,
            maxWidth: '860px',
            marginBottom: '32px'
          }}>
            Professional technical consultancy and assistance for applicable E-Waste compliance, documentation, annual return filing, and EPR-related requirements under the official Central Pollution Control Board (CPCB) regulatory framework.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '28px' }}>
            <a
              href="#compliance-form"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 26px',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #185adb 0%, #1e40af 100%)',
                color: '#fff',
                textDecoration: 'none'
              }}
            >
              Get Compliance Assistance <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onOpenQuote('E-Waste Annual Return Filing & EPR')}
              className="btn btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 24px',
                fontSize: '0.95rem',
                fontWeight: 700,
                borderRadius: '8px',
                background: '#f59e0b',
                color: '#070e1e',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <FileCheck2 size={16} /> Request a Consultation
            </button>

            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 22px',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#e2e8f0',
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} color="#10b981" /> Call +91 91586 58885
            </a>

            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance.%20Please%20help%20me%20understand%20the%20applicable%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '13px 22px',
                fontSize: '0.95rem',
                fontWeight: 600,
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34d399',
                textDecoration: 'none'
              }}
            >
              <span>💬 WhatsApp Us</span>
            </a>
          </div>

          {/* Quick Badges */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px', fontSize: '0.85rem', color: '#94a3b8' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#fbbf24" /> Valuers &amp; Technical Consultancy
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={16} color="#38bdf8" /> Central HQ: Jaipur, Rajasthan (302019)
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#10b981" /> Pan-India Consultancy Practice
            </span>
          </div>
        </div>
      </section>

      {/* ── Trust / Value Statement ── */}
      <section style={{ padding: '60px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0a142c' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Statutory Diligence &amp; Precision
          </span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', fontWeight: 800, marginTop: '10px', marginBottom: '18px', color: '#ffffff' }}>
            Stay Compliant. File Accurately. Reduce Compliance Stress.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.8, marginBottom: '20px' }}>
            Businesses manufacturing, importing, selling, refurbishing, or recycling electrical and electronic equipment covered under the E-Waste framework have specific statutory duties under the <strong>E-Waste (Management) Rules, 2022</strong>.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '24px' }}>
            <strong>MS CHARTERED ENGINEERS</strong> operates as an independent technical consultancy firm assisting clients to understand their exact category-specific obligations, organize and cross-reconcile operational records, prepare structured compliance datasets, and complete submission through the applicable CPCB EPR portal processes. 
            <em style={{ display: 'block', marginTop: '10px', color: '#64748b', fontSize: '0.88rem' }}>
              *Note: Filing compliance returns demonstrates procedural adherence, subject to applicable rules, CPCB requirements, and portal updates. Professional assistance helps ensure systematic data integrity and audit readiness.
            </em>
          </p>
        </div>
      </section>

      {/* ── What is E-Waste Annual Return Filing? ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto 50px' }}>
            <span style={{ color: '#38bdf8', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Regulatory Framework Explained
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', marginBottom: '18px', color: '#ffffff' }}>
              What is E-Waste Annual Return Filing?
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#cbd5e1', lineHeight: 1.8 }}>
              E-Waste Annual Return Filing is a mandatory statutory disclosure requirement notified under the <strong>E-Waste (Management) Rules, 2022</strong> (effective from 1 April 2023). Under this regulatory regime, covered commercial and industrial entities must maintain precise records and report their annual lifecycle data to the Central Pollution Control Board (CPCB).
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#38bdf8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Cpu size={20} /> EEE Category &amp; Equipment
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Reporting of electrical and electronic equipment covered under Schedules I &amp; II, categorized by specific EEE product codes, quantities, and net weight.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#fbbf24', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Factory size={20} /> Production, Sales &amp; Imports
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Financial-year volume disclosures cross-verified against commercial invoices, Bills of Entry (BOE), GST e-way bills, and production ledgers.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#10b981', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <RefreshCw size={20} /> Channelization &amp; Recycling
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Complete accounting of end-of-life equipment channelized through registered recyclers, manifest verification, and material recovery disclosures.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#f43f5e', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Scale size={20} /> EPR Targets &amp; Certificate Reconciliation
              </div>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Verification and settlement of Extended Producer Responsibility certificates generated, procured, and transferred on the online CPCB portal.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <p style={{ fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic', marginBottom: '18px' }}>
              Exact reporting fields and required disclosures vary by entity role (Manufacturer, Producer, Refurbisher, or Recycler) and prevailing CPCB guidelines.
            </p>
            <a href="#compliance-form" className="btn btn-outline" style={{ padding: '10px 22px', fontSize: '0.88rem', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)' }}>
              Check What Data Your Category Requires →
            </a>
          </div>
        </div>
      </section>

      {/* ── Who May Need This Service? ── */}
      <section style={{ padding: '70px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Applicability Scope
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Who Needs E-Waste Compliance?
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '10px' }}>
              The E-Waste (Management) Rules, 2022 apply to entities across the consumer, commercial, and industrial electronics supply chain:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Manufacturers of Covered EEE',
                desc: 'Entities with manufacturing facilities in India producing electrical and electronic equipment listed in Schedule I.'
              },
              {
                title: 'Producers & Brand Owners',
                desc: 'Domestic brand owners placing branded electrical/electronic products into the Indian market for sale.'
              },
              {
                title: 'Importers of Electrical/Electronic Goods',
                desc: 'Businesses importing finished electronic products, sub-assemblies, or covered IT & telecommunication hardware.'
              },
              {
                title: 'Refurbishers of Electronic Equipment',
                desc: 'Commercial refurbishers repairing, extending life, or reselling pre-owned covered equipment.'
              },
              {
                title: 'Registered Recyclers',
                desc: 'Authorized recycling facilities dismantling and recovering valuable materials from end-of-life electronic waste.'
              },
              {
                title: 'Businesses with EPR Obligations',
                desc: 'Enterprises required to meet specific annual Extended Producer Responsibility recycling targets on the CPCB portal.'
              },
              {
                title: 'Enterprises Organizing Return Data',
                desc: 'Corporates needing professional data compilation from scattered ERP, supply chain, and billing databases.'
              },
              {
                title: 'Firms Seeking Documentation Support',
                desc: 'Businesses preparing for internal ISO, ESG, client vendor audits, or statutory regulatory verification.'
              },
              {
                title: 'CPCB E-Waste Portal Navigation',
                desc: 'Commercial entities requiring ongoing hands-on procedural guidance on the official government portal.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 26, 54, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '20px 22px',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start'
                }}
              >
                <div style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  color: '#38bdf8',
                  borderRadius: '8px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Eligibility Check Highlight Box ── */}
          <div style={{
            maxWidth: '920px',
            margin: '50px auto 0',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(15, 26, 54, 0.95) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.45)',
            borderRadius: '14px',
            padding: '34px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#fbbf24',
              fontWeight: 800,
              fontSize: '1.15rem'
            }}>
              <HelpCircle size={22} /> Not sure whether your business needs E-Waste Annual Return Filing?
            </div>
            <p style={{ fontSize: '0.98rem', color: '#e2e8f0', lineHeight: 1.7, maxWidth: '780px' }}>
              Don&apos;t guess your compliance requirements. Our engineering and compliance team can review your business activity, equipment category, role, and available transaction records to help you identify applicable E-Waste statutory obligations.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="#compliance-form"
                className="btn btn-gold"
                style={{
                  padding: '12px 26px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  borderRadius: '8px',
                  background: '#f59e0b',
                  color: '#070e1e',
                  textDecoration: 'none'
                }}
              >
                Check My Compliance Requirement →
              </a>
              <a
                href="tel:+919158658885"
                className="btn btn-outline"
                style={{
                  padding: '12px 22px',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none'
                }}
              >
                Direct Call: +91 91586 58885
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our 10 Dedicated Services ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px' }}>
            <span style={{ color: '#38bdf8', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Scope of Professional Services
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Our E-Waste Compliance Services
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '10px' }}>
              Comprehensive consultancy, data validation, and portal documentation assistance for Indian and international enterprises:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {servicesList.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 26, 54, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '12px',
                    padding: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s ease, border-color 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      color: '#38bdf8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <IconComp size={22} />
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                      Service {idx + 1}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>
                      {svc.title}
                    </h3>
                    <p style={{ fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.6 }}>
                      {svc.desc}
                    </p>
                  </div>
                  <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <a
                      href="#compliance-form"
                      style={{
                        color: '#38bdf8',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      Inquire for this Service <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CPCB E-Waste EPR Registration Assistance Section ── */}
      <section style={{ padding: '60px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Gateway to Legal Market Access
              </span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, marginTop: '8px', marginBottom: '16px', color: '#ffffff' }}>
                CPCB E-Waste EPR Registration Assistance
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '16px' }}>
                Under the revised framework, obtaining Extended Producer Responsibility (EPR) registration on the CPCB portal is an essential precursor before businesses can legally import, manufacture, or distribute covered electronic hardware across India.
              </p>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                Our team provides advisory support in assembling required corporate charters, verifying authorized signatory credentials, defining product classifications according to CPCB schedules, and preparing the technical documentation needed during application processing.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#compliance-form" className="btn btn-primary" style={{ padding: '11px 22px', fontSize: '0.9rem', color: '#fff' }}>
                  Start EPR Registration Review
                </a>
                <a href="tel:+919158658885" className="btn btn-outline" style={{ padding: '11px 20px', fontSize: '0.9rem', color: '#cbd5e1', borderColor: 'rgba(255,255,255,0.2)' }}>
                  Speak to Technical Consultant
                </a>
              </div>
            </div>

            <div style={{ background: 'rgba(15, 26, 54, 0.85)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '28px' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#38bdf8', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} /> Crucial EPR Registration Essentials
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Company Legal Identification (PAN, GSTIN, CIN, IEC for Importers)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Authorized Representative Declaration &amp; Board Authorization</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Accurate EEE Product Mapping as per Schedules of Rules 2022</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Quantified Sales / Import Historical Baseline where applicable</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Pollution Control Board CTE/CTO for Manufacturing Facilities</span>
                </li>
              </ul>
              <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px dashed rgba(255,255,255,0.1)', fontSize: '0.78rem', color: '#64748b' }}>
                *Registration approvals are granted by CPCB pursuant to their verification protocols.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Process ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Systematic Methodology
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Our 7-Step E-Waste Annual Return Filing Process
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '10px' }}>
              A disciplined, auditable workflow designed to minimize compliance burden and maximize reporting accuracy:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {processSteps.map((st, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 26, 54, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '24px',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '1.7rem',
                  fontWeight: 900,
                  color: 'rgba(56, 189, 248, 0.25)',
                  lineHeight: 1,
                  marginBottom: '10px',
                  fontFamily: 'monospace'
                }}>
                  {st.step}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {st.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href="#compliance-form" className="btn btn-gold" style={{ padding: '12px 28px', fontWeight: 700, fontSize: '0.92rem' }}>
              Initiate Step 1 — Schedule Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* ── Documents Checklist & Information Required ── */}
      <section style={{ padding: '70px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 46px' }}>
            <span style={{ color: '#38bdf8', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Document Preparation Checklist
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Documents &amp; Information Required for Compliance
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#cbd5e1', marginTop: '10px' }}>
              Depending on your entity category and applicable requirements, the following information/documents may be required:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {/* Box 1 */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} /> 1. Corporate Identity &amp; Registrations
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li>• Company / LLP / Firm Legal Name</li>
                <li>• Registered Office &amp; Factory Address Proof</li>
                <li>• Permanent Account Number (PAN) Card</li>
                <li>• GSTIN Registration Certificate</li>
                <li>• CIN / LLPIN / Incorporation Certificate</li>
                <li>• Importer-Exporter Code (IEC) for Importers</li>
                <li>• Authorized Signatory Photo ID &amp; Board Resolution</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} /> 2. Product &amp; EEE Specifications
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li>• List of Electrical &amp; Electronic Equipment (EEE)</li>
                <li>• Applicable CPCB Schedule I &amp; II EEE Category Codes</li>
                <li>• Technical specification sheets / Product manuals</li>
                <li>• Net weight breakdown per product unit</li>
                <li>• Brand names / Trademarks registered or marketed</li>
                <li>• Bill of Materials (BOM) where relevant</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#10b981', fontWeight: 700, fontSize: '1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} /> 3. Commercial &amp; Sales Data
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li>• Annual sales volume data (unit-wise and weight-wise)</li>
                <li>• Production registers / Manufacturing excise records</li>
                <li>• Import Bill of Entry (BOE) records for the financial year</li>
                <li>• Representative commercial sales invoices</li>
                <li>• Purchase invoices for components / refurbished units</li>
                <li>• Interstate stock transfers / warehouse dispatches</li>
              </ul>
            </div>

            {/* Box 4 */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ color: '#f43f5e', fontWeight: 700, fontSize: '1rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <RefreshCw size={18} /> 4. E-Waste &amp; Recycler Records
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li>• E-Waste generation quantities for the reporting year</li>
                <li>• Agreements with CPCB registered recyclers / refurbishers</li>
                <li>• Waste disposal manifests (Form 6 waste manifests)</li>
                <li>• Certificates of Recycling issued by authorized facilities</li>
                <li>• EPR credit procurement records / portal transaction IDs</li>
                <li>• Prior annual return acknowledgment receipts (if any)</li>
              </ul>
            </div>
          </div>

          <div style={{
            maxWidth: '850px',
            margin: '30px auto 0',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#94a3b8',
            background: 'rgba(255,255,255,0.03)',
            padding: '14px 20px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <strong>Important:</strong> The exact document checklist will be confirmed after reviewing your specific business category, supply chain role, and compliance scope. Not every document listed above is required for every entity.
          </div>
        </div>
      </section>

      {/* ── What Information Do We Need From You? (Cards) ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 46px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Client Onboarding Checklist
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              What Information Do We Need From You?
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '10px' }}>
              To initiate your E-Waste compliance review efficiently, please organize these 5 data clusters:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Company Information',
                icon: Building2,
                items: ['Legal Entity Name', 'Registered Office Address', 'Key Contact Person & Phone', 'PAN, GSTIN & CIN / LLPIN']
              },
              {
                title: 'Business Information',
                icon: Factory,
                items: ['Nature of operations', 'Manufacturer / Producer / Recycler', 'Products handled & brands', 'EEE category classification']
              },
              {
                title: 'Financial & Commercial',
                icon: FileText,
                items: ['Annual Sales Volumes', 'Annual Import Quantities', 'Domestic Production Totals', 'Sample Invoices / BOE']
              },
              {
                title: 'E-Waste Lifecycle',
                icon: RefreshCw,
                items: ['Quantities generated', 'Channelization records', 'Registered recycler details', 'Material recovery manifests']
              },
              {
                title: 'Previous Compliance',
                icon: ClipboardCheck,
                items: ['Existing CPCB portal credentials', 'Past annual/quarterly returns', 'EPR certificates transferred', 'Prior regulatory notices']
              }
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 26, 54, 0.75)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '22px 18px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ color: '#38bdf8', marginBottom: '12px' }}>
                    <CardIcon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
                    {card.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: '#94a3b8' }}>
                    {card.items.map((it, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ color: '#fbbf24' }}>•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose MS CHARTERED ENGINEERS? ── */}
      <section style={{ padding: '70px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 48px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Why Partner With Us
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Why Choose MS CHARTERED ENGINEERS?
            </h2>
            <p style={{ fontSize: '1rem', color: '#cbd5e1', marginTop: '10px' }}>
              A technical consultancy firm built on rigor, auditable precision, and pan-India reach:
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              { title: 'Professional Technical Consultancy', desc: 'Engineering-led scrutiny by seasoned technocrats ensuring sound compliance interpretation.' },
              { title: 'Compliance-Focused Approach', desc: 'Rigorous alignment with E-Waste Rules 2022 and CPCB procedural notifications.' },
              { title: 'Structured Documentation', desc: 'Standardized filing packs with indexed audit-ready verification records.' },
              { title: 'Data Verification Before Filing', desc: 'Multi-layer internal checks of quantities, units, and categories prior to submission.' },
              { title: 'Client-Specific Assessment', desc: 'Custom tailored solutions designed specifically for your exact supply chain role.' },
              { title: 'Pan-India Service', desc: 'Serving enterprises across all Indian states and Union Territories seamlessly.' },
              { title: 'Clear Communication', desc: 'Direct, transparent reporting without confusing jargon or hidden clauses.' },
              { title: 'Practical Compliance Assistance', desc: 'Actionable solutions for real-world ERP and warehouse data challenges.' },
              { title: 'Transparent Process', desc: 'Defined milestones, clear scoping, and accountable turnaround schedules.' },
              { title: 'Ongoing Support', desc: 'Dependable follow-up support for portal clarifications based on agreed scope.' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 26, 54, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '20px'
                }}
              >
                <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 700, fontSize: '0.96rem' }}>
                  <CheckCircle2 size={18} />
                  <span>{item.title}</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits & Risks Section ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
            
            {/* Benefits */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(16, 185, 129, 0.25)', borderRadius: '14px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#34d399', fontWeight: 800, fontSize: '1.2rem', marginBottom: '16px' }}>
                <CheckCircle2 size={24} /> Benefits of Timely E-Waste Compliance
              </div>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '18px' }}>
                Timely and accurate compliance can help reduce the operational risks associated with missed or incorrect reporting, subject to applicable law and regulatory action:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Better regulatory preparedness and audit readiness</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Organized compliance records and archival safety</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Reduced risk of missed statutory reporting deadlines</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Robust documentation for ISO, ESG, and vendor qualifications</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Streamlined internal tracking of product lifecycle metrics</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Clear understanding of Extended Producer Responsibility targets</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#34d399' }}>✓</span> Support for environmentally sound, authorized e-waste recycling</li>
              </ul>
            </div>

            {/* Risks */}
            <div style={{ background: 'rgba(15, 26, 54, 0.75)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: '14px', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fb7185', fontWeight: 800, fontSize: '1.2rem', marginBottom: '16px' }}>
                <AlertTriangle size={24} /> Why Timely Compliance Matters
              </div>
              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '18px' }}>
                The E-Waste (Management) Rules, 2022 provide strict statutory consequences for non-compliance. Under CPCB guidelines, defaulting entities face potential administrative and financial exposure:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#94a3b8' }}>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Issuance of show-cause regulatory notices by CPCB / SPCB</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Levying of Environmental Compensation (EC) pursuant to CPCB guidelines</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Revocation, suspension, or blocking of CPCB portal registrations</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Impediments to customs import clearances for non-compliant importers</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Supply chain complications and reputational risk with enterprise clients</li>
                <li style={{ display: 'flex', gap: '8px' }}><span style={{ color: '#fb7185' }}>⚠</span> Statutory legal action under the Environment (Protection) Act, 1986</li>
              </ul>
              <div style={{ marginTop: '20px' }}>
                <a href="#compliance-form" style={{ color: '#fb7185', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Check Your Compliance Status Now →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pan-India Service Areas ── */}
      <section style={{ padding: '60px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Geographic Coverage
          </span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.2rem)', fontWeight: 800, marginTop: '8px', marginBottom: '14px', color: '#ffffff' }}>
            E-Waste Compliance Services Across India
          </h2>
          <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto 24px' }}>
            Headquartered in <strong>Jaipur, Rajasthan (PIN: 302019)</strong>, MS CHARTERED ENGINEERS delivers technical consultancy and regulatory assistance to industrial manufacturers, electronics importers, brand producers, and recyclers nationwide.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '880px', margin: '0 auto 24px' }}>
            {cities.map((city, idx) => (
              <span
                key={idx}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  color: '#94a3b8'
                }}
              >
                {city}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Remote digital consultancy with physical documentation and audit support accessible across all major industrial clusters and special economic zones (SEZs).
          </p>
        </div>
      </section>

      {/* ── FAQ Section (Accordion) ── */}
      <section style={{ padding: '70px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              E-Waste Return &amp; EPR Compliance FAQs
            </h2>
            <p style={{ fontSize: '0.96rem', color: '#cbd5e1', marginTop: '8px' }}>
              Authoritative answers to common questions on CPCB portal compliance, deadlines, and documentation:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 26, 54, 0.75)',
                    border: isOpen ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      background: 'none',
                      border: 'none',
                      color: '#ffffff',
                      textAlign: 'left',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      color: isOpen ? '#38bdf8' : '#94a3b8'
                    }}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 22px 18px', fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.7, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '14px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
              Have a specific question about your entity’s EEE category?
            </p>
            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20have%20a%20question%20regarding%20E-Waste%20Compliance%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none' }}
            >
              Ask on WhatsApp: +91 91586 58885 →
            </a>
          </div>
        </div>
      </section>

      {/* ── Lead Generation Form Section ── */}
      <section id="compliance-form" style={{ padding: '70px 20px', background: '#0a142c', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ color: '#fbbf24', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Start Your Evaluation
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, marginTop: '8px', color: '#ffffff' }}>
              Check Your E-Waste Compliance Requirement
            </h2>
            <p style={{ fontSize: '0.96rem', color: '#cbd5e1', marginTop: '8px' }}>
              Fill out this confidential enquiry form. Our technical consultancy team will review your business details and provide structured guidance.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 26, 54, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '14px',
            padding: '36px 30px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.45)'
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ fontSize: '0.96rem', color: '#cbd5e1', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 20px' }}>
                  Thank you for submitting your details. Our compliance team has received your information and a WhatsApp conversation has been opened with our senior consultant.
                </p>
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+919158658885" className="btn btn-primary" style={{ padding: '10px 20px', color: '#fff' }}>
                    <Phone size={14} style={{ marginRight: '6px' }} /> Call Principal Consultant
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
                        businessType: 'Manufacturer',
                        eeeCategory: '',
                        currentRegistration: 'Not Sure',
                        serviceRequired: 'Annual Return Filing',
                        financialYear: 'FY 2024-25',
                        message: '',
                        consent: true
                      });
                    }}
                    className="btn btn-outline"
                    style={{ padding: '10px 18px', color: '#cbd5e1' }}
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                  
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Apex Electronics Pvt Ltd"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Mobile Number (WhatsApp) *
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
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      City / State *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="e.g. Jaipur, Rajasthan"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Producer">Producer / Brand Owner</option>
                      <option value="Importer">Importer</option>
                      <option value="Refurbisher">Refurbisher</option>
                      <option value="Recycler">Recycler</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* EEE Category */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      E-Waste / EEE Category
                    </label>
                    <input
                      type="text"
                      name="eeeCategory"
                      placeholder="e.g. IT & Telecommunication, Consumer Electronics"
                      value={formData.eeeCategory}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Service Required *
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Annual Return Filing">Annual Return Filing</option>
                      <option value="EPR Registration Assistance">CPCB EPR Registration Assistance</option>
                      <option value="Quarterly Return Filing">Quarterly Return Filing</option>
                      <option value="Compliance Assessment">Compliance &amp; Eligibility Assessment</option>
                      <option value="Documentation Support">Documentation &amp; Channelization Support</option>
                      <option value="Other">Other / Full Compliance Package</option>
                    </select>
                  </div>

                  {/* Financial Year */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                      Financial Year *
                    </label>
                    <select
                      name="financialYear"
                      value={formData.financialYear}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        background: 'rgba(7, 14, 30, 0.7)',
                        border: '1px solid rgba(255,255,255,0.14)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option value="FY 2024-25">FY 2024-25 (Current Period)</option>
                      <option value="FY 2023-24">FY 2023-24 (Prior Period)</option>
                      <option value="FY 2022-23">FY 2022-23 (Transitional)</option>
                      <option value="Multiple FYs">Multiple Years / Backlog Review</option>
                    </select>
                  </div>

                </div>

                {/* Current Registration Radio */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '8px' }}>
                    Do you have an active CPCB E-Waste EPR Registration?
                  </label>
                  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.88rem', color: '#cbd5e1' }}>
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
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '6px' }}>
                    Message / Specific Requirement (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Provide details such as equipment type, quantities, or previous CPCB notices if any..."
                    value={formData.message}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      background: 'rgba(7, 14, 30, 0.7)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Consent Checkbox */}
                <div style={{ marginBottom: '22px' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.82rem', color: '#94a3b8' }}>
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      style={{ marginTop: '2px' }}
                    />
                    <span>
                      I agree to be contacted regarding my E-Waste compliance enquiry by MS CHARTERED ENGINEERS via phone, email, or WhatsApp.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #185adb 0%, #1e40af 100%)',
                    color: '#fff',
                    border: 'none',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Send size={16} />
                  <span>{submitting ? 'Processing Details...' : 'Get Compliance Assistance'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Internal Linking Hub ── */}
      <section style={{ padding: '50px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.78rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
            Integrated Technical Practice
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
            Explore Related Statutory &amp; Engineering Services
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              { href: '/', label: 'Homepage Overview' },
              { href: '/chartered-engineer', label: 'Chartered Engineer in India' },
              { href: '/machinery-valuation', label: 'Plant & Machinery Valuation' },
              { href: '/safety-energy-audits', label: 'Safety & Energy Audits' },
              { href: '/fssai', label: 'FSSAI Food Safety Compliance' },
              { href: '/autocad-drafting', label: 'AutoCAD 2D Electrical Drafting' },
              { href: '/tools', label: 'Valuation & Solar Calculators' },
              { href: '/credentials', label: 'IEI & Institutional Credentials' },
              { href: '/contact', label: 'Contact Jaipur Head Office' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '6px',
                  padding: '7px 14px',
                  color: '#38bdf8',
                  fontSize: '0.84rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Strong CTA Section ── */}
      <section style={{
        padding: '70px 20px',
        background: 'linear-gradient(135deg, #0b1736 0%, #10214a 100%)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Need Help With E-Waste Annual Return Filing?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '32px' }}>
            Let <strong>MS CHARTERED ENGINEERS</strong> help you understand your applicable E-Waste compliance requirements, organize the required lifecycle records, and assist with the applicable filing process under the CPCB framework.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#compliance-form"
              className="btn btn-primary"
              style={{
                padding: '13px 28px',
                fontSize: '0.96rem',
                fontWeight: 700,
                color: '#fff',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #185adb 0%, #1e40af 100%)',
                textDecoration: 'none'
              }}
            >
              Get Compliance Assistance
            </a>

            <a
              href="tel:+919158658885"
              className="btn btn-outline"
              style={{
                padding: '13px 24px',
                fontSize: '0.96rem',
                fontWeight: 600,
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.3)',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              <Phone size={16} style={{ marginRight: '6px' }} /> Call +91 91586 58885
            </a>

            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance.%20Please%20help%20me%20understand%20the%20applicable%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                padding: '13px 24px',
                fontSize: '0.96rem',
                fontWeight: 700,
                background: '#10b981',
                color: '#040914',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              WhatsApp Us
            </a>
          </div>

          <div style={{ marginTop: '36px', fontSize: '0.85rem', color: '#94a3b8' }}>
            <strong>MS CHARTERED ENGINEERS</strong> — Valuers &amp; Technical Consultancy<br />
            Jaipur Central HQ (302019) | Pan-India Technical Practice<br />
            Direct Phone: <a href="tel:+919158658885" style={{ color: '#38bdf8' }}>+91 91586 58885</a> | Email: <a href="mailto:ms.charteredengineer@gmail.com" style={{ color: '#38bdf8' }}>ms.charteredengineer@gmail.com</a>
          </div>
        </div>
      </section>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance.%20Please%20help%20me%20understand%20the%20applicable%20requirements."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us for E-Waste Compliance Consultation"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#25d366',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          zIndex: 999,
          fontWeight: 700,
          fontSize: '0.92rem',
          textDecoration: 'none',
          transition: 'transform 0.2s ease'
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>💬</span>
        <span>WhatsApp Consultant</span>
      </a>

    </div>
  );
}
