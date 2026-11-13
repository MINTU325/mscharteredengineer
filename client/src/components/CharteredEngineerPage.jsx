import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  PhoneCall,
  Phone,
  ShieldCheck,
  FileCheck2,
  Cpu,
  Building2,
  Factory,
  Scale,
  Anchor,
  Clock,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Search,
  Check,
  Layers,
  ArrowRight
} from 'lucide-react';

const CE_SERVICES = [
  {
    id: 'dgft-advance-epcg',
    category: 'dgft',
    title: 'DGFT Advance Authorisation & EPCG Certification',
    standard: 'Foreign Trade Policy 2023 · HBP Para 4.11 / 5.04',
    badge: 'DGFT & Commerce',
    badgeColor: '#38bdf8',
    summary: 'Statutory verification and Nexus certification for imported capital goods, duty exemption schemes, and Standard Input Output Norms (SION).',
    deliverables: [
      'Appendix 4E & 4K certification for Advance Authorisation duty-free inputs',
      'Appendix 5B Nexus certification for EPCG capital goods imports',
      'Fixation of SION norms and raw material consumption audits',
      'Export obligation discharge verification & redemption support'
    ]
  },
  {
    id: 'customs-second-hand',
    category: 'customs',
    title: 'Customs Clearance for Second-Hand Machinery',
    standard: 'Customs Act 1962 · Valuation Rules Section 14 · CBIC Circulars',
    badge: 'Customs & Port',
    badgeColor: '#f59e0b',
    summary: 'Comprehensive residual life assessment, present depreciated replacement value, and condition certification for imported second-hand capital goods.',
    deliverables: [
      'Physical inspection of imported machinery at major ports & ICDs',
      'Determination of residual useful life and year of manufacture verification',
      'Appraisal of CIF/FOB value and depreciated replacement value',
      'Issuance of CBIC-compliant Chartered Engineer Inspection Certificate'
    ]
  },
  {
    id: 'plant-machinery-valuation',
    category: 'banking',
    title: 'Plant & Machinery Valuation for Banks & NBFCs',
    standard: 'Companies Act 2013 · SARFAESI Act 2002 · IBC (Insolvency)',
    badge: 'Banking & NBFC',
    badgeColor: '#10b981',
    summary: 'Certified engineering valuation of industrial plants, machinery, and equipment for bank loan collateral, asset classification, and insolvency proceedings.',
    deliverables: [
      'Fair Market Value (FMV), Realizable Value & Liquidation Value appraisal',
      'Assessment of heavy machinery, production lines, and tooling assets',
      'Technical obsolescence and remaining economic life analysis',
      'Empanelled engineer documentation accepted by nationalized & private banks'
    ]
  },
  {
    id: 'ceig-solar-approval',
    category: 'ceig',
    title: 'CEIG & Solar Power Plant SLD Approvals',
    standard: 'CEA Regulations 2010 · Central Electricity Authority Norms',
    badge: 'CEIG & Electrical',
    badgeColor: '#38bdf8',
    summary: 'Mandatory Chief Electrical Inspector to Government (CEIG) drawing vetting, Single Line Diagram (SLD) approval, and safety clearance for solar MW & HT setups.',
    deliverables: [
      'HT/LT electrical single line diagram vetting & statutory seal',
      'Solar ground-mounted and rooftop power plant layout validation',
      'Earth pit resistance, transformer substation & fault-level verification',
      'Complete end-to-end liaison and statutory approval documentation'
    ]
  },
  {
    id: 'factory-structural-stability',
    category: 'factory',
    title: 'Factory Structural Stability & Safety Certification',
    standard: 'Factories Act 1948 · State Factory Rules (Form 1A)',
    badge: 'Safety & Audit',
    badgeColor: '#f97316',
    summary: 'Statutory structural stability certificate (Form 1A / Form 2) for industrial buildings, warehouses, cranes, and heavy gantry installations.',
    deliverables: [
      'Non-destructive testing (NDT), rebound hammer, and ultrasonic tests',
      'Structural integrity appraisal for PEB buildings and RCC factory sheds',
      'Crane gantry girder load capacity and deflection assessment',
      'Issuance of statutory Form 1A certificate for Factory Inspectorate (DISH)'
    ]
  },
  {
    id: 'moefcc-recycling-capacity',
    category: 'dgft',
    title: 'MOEFCC & CPCB Industrial Capacity Certification',
    standard: 'MOEFCC Guidelines · EPR & Plastic/E-Waste/Rubber Norms',
    badge: 'CPCB & Pollution',
    badgeColor: '#10b981',
    summary: 'Installed capacity and operational efficiency certification for manufacturing units, plastic recycling, waste tyre pyrolysis, and e-waste recyclers.',
    deliverables: [
      'Verification of plant installed capacity against operational parameters',
      'Input-output mass balance and yield calculation for EPR registration',
      'CPCB / SPCB consent compliance validation and engineering verification',
      'Statutory capacity certificate for Extended Producer Responsibility (EPR)'
    ]
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'customs', label: 'Customs & Port Clearance' },
  { id: 'dgft', label: 'DGFT & EPCG Schemes' },
  { id: 'banking', label: 'Bank & Asset Valuation' },
  { id: 'ceig', label: 'CEIG & Solar Approvals' },
  { id: 'factory', label: 'Factory Safety & Form 1A' }
];

const FAQS = [
  {
    q: 'What is a Chartered Engineer (CE) Certificate and who issues it in India?',
    a: 'A Chartered Engineer Certificate is a statutory engineering document issued by an engineer recognized by The Institution of Engineers (India) [IEI], established by Royal Charter in 1935. Corporate Members holding the MIE or FIE credential are authorized by the Government of India, CBIC, and DGFT to certify machinery valuation, technical specifications, and industrial safety compliance.'
  },
  {
    q: 'Why is a Chartered Engineer Certificate mandatory for customs clearance of second-hand machinery?',
    a: 'Under the Indian Customs Act (Section 14) and DGFT Foreign Trade Policy, all imported second-hand capital goods, equipment, and production lines must have their residual operational life, replacement value, and current market value assessed by an independent Chartered Engineer. Customs authorities use this report to determine fair assessed duties and verify that the equipment is not e-waste or prohibited scrap.'
  },
  {
    q: 'How does KS Chartered Engineers support DGFT Advance Authorisation and EPCG schemes?',
    a: 'Under the DGFT EPCG (Export Promotion Capital Goods) scheme, capital goods can be imported at zero customs duty subject to an export obligation. KS Chartered Engineers issues Appendix 5B Nexus certificates proving that the imported machinery directly links to export production. For Advance Authorisation, we provide Appendix 4E and 4K certificates establishing input-output consumption norms (SION).'
  },
  {
    q: 'What is the standard turnaround time for receiving a Chartered Engineer Report?',
    a: 'For urgent port clearance (JNPT, Mundra, ICD Tughlakabad, Jaipur ICD) and DGFT applications, draft reports and calculations are delivered within 24 to 48 hours of physical inspection and document receipt. Final signed and stamped physical documents with digital copies are issued immediately.'
  },
  {
    q: 'Which ports, ICDs, and states do you cover for physical inspection?',
    a: 'KS Chartered Engineers operates pan-India with key hubs in Rajasthan (Jaipur, Jodhpur, Bhiwadi), Delhi NCR, Gujarat (Mundra, Kandla, Ahmedabad), Maharashtra (JNPT, Mumbai, Pune), and major Inland Container Depots (ICDs) across North and West India.'
  }
];

export default function CharteredEngineerPage({ onNavigateHome, onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Chartered Engineer in India | DGFT, Customs & CEIG | KS Chartered Engineers';
  }, []);

  const filteredServices = useMemo(() => {
    return CE_SERVICES.filter(service => {
      const matchCat = selectedCategory === 'all' || service.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.deliverables.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* ── Pillar Page Hero Section ── */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '48px 20px 40px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          
          {/* Top Breadcrumb / Return */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '6px 14px',
                color: '#475569',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#eef0f5';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#a3a9b8';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <ArrowLeft size={14} /> Back to Home
            </button>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '6px',
              padding: '4px 10px',
              color: '#0284c7',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.03em'
            }}>
              <Award size={13} /> THE INSTITUTION OF ENGINEERS (INDIA) · MIE CHARTERED ENGINEER
            </span>
          </div>

          {/* Heading and Summary */}
          <div style={{ maxWidth: '880px' }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#0f172a',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              Government Certified <span style={{ color: '#0284c7' }}>Chartered Engineer</span> in India
            </h1>
            <p style={{
              fontSize: '1.05rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: '0 0 28px 0',
              fontWeight: 400
            }}>
              KS Chartered Engineers provides statutory technical certifications accepted by DGFT, Indian Customs, Central Excise, Banks, and State Electricity Inspectorates (CEIG). Headed by Er. Mukesh Singh, Corporate Member (MIE) of The Institution of Engineers (India) with engineering credentials from IIT Roorkee.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '36px' }}>
              <button
                onClick={() => onOpenQuote('Chartered Engineer Certification (IEI MIE)')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <FileText size={16} /> Request CE Certificate
              </button>

              <a
                href="tel:+919158658885"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#1a1e28'}
                onMouseLeave={e => e.currentTarget.style.background = '#11141c'}
              >
                <PhoneCall size={16} style={{ color: '#0284c7' }} /> +91 91586 58885
              </a>

              <span style={{ fontSize: '0.85rem', color: '#7a8296', marginLeft: '4px' }}>
                Quick 24–48h draft inspection report
              </span>
            </div>
          </div>

          {/* 4-Item Metric Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px',
            marginTop: '12px'
          }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#7a8296', marginBottom: '6px' }}>Statutory Authority</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>IEI MIE Corporate</div>
              <div style={{ fontSize: '0.82rem', color: '#475569' }}>Empanelled under Royal Charter & Ministry of Commerce</div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#7a8296', marginBottom: '6px' }}>Turnaround</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>24 to 48 Hours</div>
              <div style={{ fontSize: '0.82rem', color: '#475569' }}>Urgent customs appraisal and provisional draft delivery</div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#7a8296', marginBottom: '6px' }}>Port & ICD Coverage</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>Pan-India Seaports</div>
              <div style={{ fontSize: '0.82rem', color: '#475569' }}>JNPT, Mundra, Hazira, Chennai, ICD Concor Jaipur</div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#7a8296', marginBottom: '6px' }}>Reports Delivered</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#10b981', marginBottom: '4px' }}>1,200+ Reports</div>
              <div style={{ fontSize: '0.82rem', color: '#475569' }}>100% acceptance across banks, DGFT & customs</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Main Container ── */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '40px 20px 0' }}>
        
        {/* Section: Statutory Scope Overview */}
        <section style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '28px',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', marginBottom: '10px' }}>
            <Scale size={18} />
            <span style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Statutory Significance
            </span>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', margin: '0 0 12px 0' }}>
            What is a Chartered Engineer (CE) Certificate?
          </h2>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.98rem', margin: '0 0 16px 0' }}>
            A Chartered Engineer Certificate is a legally recognized, statutory engineering appraisal issued by a technical professional awarded Corporate Membership (MIE / FIE) by <strong>The Institution of Engineers (India)</strong>. Chartered Engineers are legally empowered under Section 4 of the IEI Charter and recognized by the Government of India, the Ministry of Commerce & Industry (DGFT), the Central Board of Indirect Taxes and Customs (CBIC), and financial regulatory authorities.
          </p>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.98rem', margin: 0 }}>
            Whether an enterprise is importing second-hand industrial machinery through seaports, discharging export obligations under EPCG / Advance Authorisation, obtaining bank credit for industrial assets, or securing CEIG safety approvals for solar power plants, a valid Chartered Engineer Certificate provides the statutory technical verification required by government departments.
          </p>
        </section>

        {/* Section: Core Services Directory */}
        <section style={{ marginBottom: '48px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                Core Capabilities
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                Chartered Engineer Services in India
              </h2>
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#7a8296' }} />
              <input
                type="text"
                placeholder="Search DGFT, Customs, CEIG, Valuation..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '9px 12px 9px 36px',
                  color: '#0f172a',
                  fontSize: '0.9rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    background: isActive ? '#38bdf8' : '#11141c',
                    color: isActive ? '#07080d' : '#a3a9b8',
                    border: isActive ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '6px',
                    padding: '6px 14px',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#eef0f5';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#a3a9b8';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px'
          }}>
            {filteredServices.map(service => (
              <div
                key={service.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '4px',
                      padding: '3px 8px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: service.badgeColor,
                      letterSpacing: '0.02em'
                    }}>
                      {service.badge}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#7a8296', textAlign: 'right' }}>
                      {service.standard}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    margin: '0 0 10px 0',
                    lineHeight: 1.35
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    color: '#475569',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    margin: '0 0 16px 0'
                  }}>
                    {service.summary}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', marginBottom: '18px' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#7a8296', marginBottom: '8px' }}>
                      Key Scope & Deliverables
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                          <Check size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => onOpenQuote(`${service.title} (CE Inquiry)`)}
                    style={{
                      flex: 1,
                      background: '#f1f5f9',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      color: '#0f172a',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'background 0.15s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#232938';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#1a1e28';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    }}
                  >
                    Get Certificate <ArrowRight size={14} />
                  </button>

                  <a
                    href="tel:+919158658885"
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      color: '#0284c7',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                    title="Call directly"
                  >
                    <Phone size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 20px', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <p style={{ color: '#475569', margin: '0 0 12px 0' }}>No certification services match your search terms.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                style={{
                  background: '#f1f5f9',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  color: '#0f172a',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        {/* Section: 4-Step Statutory Workflow */}
        <section style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '32px 28px',
          marginBottom: '48px'
        }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
            Operational Process
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', margin: '0 0 24px 0' }}>
            Statutory Certification Workflow
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>STEP 01</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>Document Review</div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Verification of invoices, packing lists, Bill of Lading, SLDs, and prior customs / scheme filings.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>STEP 02</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>On-Site Inspection</div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Physical audit at port, ICD warehouse, or industrial factory plant. Assessment of machine condition & serials.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>STEP 03</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>Technical Valuation</div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Engineering calculation of residual life, replacement cost, depreciation tables, and SION input balance.
              </p>
            </div>

            <div style={{ borderLeft: '2px solid #38bdf8', paddingLeft: '16px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0284c7', marginBottom: '4px' }}>STEP 04</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', marginBottom: '6px' }}>Stamped Certification</div>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Issue of formal Chartered Engineer seal and signed report in physical + digital format for customs / DGFT clearance.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions */}
        <section style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
            Compliance & Guidelines
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0f172a', margin: '0 0 20px 0' }}>
            Frequently Asked Questions on CE Certification
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: isOpen ? '#38bdf8' : '#eef0f5' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} style={{ color: '#0284c7', flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: '#7a8296', flexShrink: 0 }} />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 20px 18px',
                      color: '#475569',
                      fontSize: '0.9rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{ paddingTop: '12px' }}>{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section: Direct Engineer Contact Card */}
        <section style={{
          background: '#f8fafc',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          padding: '32px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#0284c7', fontWeight: 600, marginBottom: '6px' }}>
              Direct Engineering Consultation
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0f172a', margin: '0 0 8px 0' }}>
              Speak with Er. Mukesh Singh, MIE Chartered Engineer
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', margin: '0 0 16px 0', maxWidth: '640px', lineHeight: 1.6 }}>
              Need urgent port clearance at JNPT / Mundra or an emergency DGFT EPCG filing? We offer expedited on-site inspection and rapid certificate dispatch across all Indian commercial ports and industrial corridors.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} style={{ color: '#0284c7' }} /> +91 91586 58885
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} style={{ color: '#0284c7' }} /> ms.charteredengineer@gmail.com
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={14} style={{ color: '#0284c7' }} /> Jaipur, Rajasthan · Pan-India Dispatch
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Urgent Chartered Engineer Assessment')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Initiate Assessment
            </button>
            <a
              href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20need%20a%20Chartered%20Engineer%20Certificate%20for%20Customs%20/%20DGFT."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#f1f5f9',
                color: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
