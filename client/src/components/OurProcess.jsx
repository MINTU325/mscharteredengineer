import React, { useRef } from 'react';
import {
  FileText,
  FileCheck2,
  Calculator,
  Compass,
  LineChart,
  Scale,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Clock,
  Sparkles,
  PhoneCall,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Valuation Purpose',
    subtitle: 'Step 1: Initial Discovery',
    time: 'Day 1 • 15 Mins',
    icon: FileText,
    color: '#0284c7',
    description:
      'Contact us via Website, Call, or WhatsApp specifying your exact purpose — Home Loan, Capital Gains 50C, DGFT EPCG, Court Partition, or Plant & Machinery.',
    checklist: ['State statutory purpose', 'Share location & asset type', 'Define urgency / deadline']
  },
  {
    step: '02',
    title: 'Document Checklist & Scrutiny',
    subtitle: 'Step 2: Legal Paperwork',
    time: 'Day 1 • Within 2 Hours',
    icon: FileCheck2,
    color: '#d97706',
    description:
      'We provide a tailored checklist of required documents (Registry, Sanction Map, Jamabandi, Purchase Bills, or Bill of Entry) and conduct an initial completeness review.',
    checklist: ['Title deed & Patta review', 'Sanctioned layout plan check', 'Encumbrance / tax receipt check']
  },
  {
    step: '03',
    title: 'Upfront Transparent Quote',
    subtitle: 'Step 3: Commercial Clarity',
    time: 'Day 1 • Written Quote',
    icon: Calculator,
    color: '#059669',
    description:
      'Receive a formal written quotation with complete scope of work, turnaround time, and statutory acceptance guarantee. Zero hidden costs or surprise fees.',
    checklist: ['Fixed, transparent fees', 'Committed turnaround time', 'Formal mandate confirmation']
  },
  {
    step: '04',
    title: 'Physical Site & Technical Inspection',
    subtitle: 'Step 4: Field Engineering',
    time: 'Day 1–2 • Scheduled Visit',
    icon: Compass,
    color: '#7c3aed',
    description:
      'Our qualified engineer conducts a physical site visit to inspect boundaries, construction quality, physical measurements, plinth area, and machinery condition with geo-tagged photos.',
    checklist: ['Geo-tagged site photography', 'Physical dimensional checks', 'Structural & equipment health audit']
  },
  {
    step: '05',
    title: 'Market & Regulatory Research',
    subtitle: 'Step 5: Data Analysis',
    time: 'Day 2 • Analytical Audit',
    icon: LineChart,
    color: '#0369a1',
    description:
      'In-depth cross-referencing of local DLC/Circle rates, recent registered transaction benchmarks, CPWD plinth area schedule rates, or DGFT/SION guidelines.',
    checklist: ['State DLC & circle rate verification', 'Local market transaction comparables', 'CPWD construction schedule rates']
  },
  {
    step: '06',
    title: 'Statutory Valuation Computation',
    subtitle: 'Step 6: Engineering Math',
    time: 'Day 2 • Computational Modeling',
    icon: Scale,
    color: '#ea580c',
    description:
      'Application of recognized valuation methods: Land & Building Method, Depreciated Replacement Cost (DRC), Discounted Cash Flow (DCF), or Fair Market vs Forced Sale calculation.',
    checklist: ['Land & Building method', 'Depreciated Replacement Cost (DRC)', 'Dual FMV & FSV determination']
  },
  {
    step: '07',
    title: 'Draft Report Review & Audit',
    subtitle: 'Step 7: Quality Assurance',
    time: 'Day 2–3 • Quality Check',
    icon: CheckCircle2,
    color: '#0d9488',
    description:
      'Internal peer-review by senior Chartered Engineers (IIT Roorkee alumni) and registered valuers to eliminate typographical errors, boundary mismatches, or calculation gaps.',
    checklist: ['Senior valuer peer review', 'Draft preview shared with client', 'Client clarification resolution']
  },
  {
    step: '08',
    title: 'Certified Report Delivery',
    subtitle: 'Step 8: Final Statutory Issuance',
    time: '24–48 Hours Total Delivery',
    icon: ShieldCheck,
    color: '#b45309',
    description:
      'Dispatch of authorized, stamped digital PDF with QR code verification + physical hard copies dispatched pan-India. Fully accepted across all banks, ITAT, NCLT, and DGFT.',
    checklist: ['Official IEI / Valuer rubber stamp', 'High-res color photo annexures', 'Digital PDF + Hard copy courier']
  }
];

export default function OurProcess({ onOpenQuote }) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="process" style={{ padding: '30px 0', background: '#FAF8F5', borderBottom: '1px solid #E8E2D8', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 18px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '9999px',
            color: '#166534',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} />
            <span>TRANSPARENT &amp; AUDITABLE WORKFLOW</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
            Our 8-Step <span style={{ color: '#b45309' }}>Valuation &amp; Certification Process</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.55 }}>
            From initial purpose assessment to on-site physical measurement, statutory computation, and final stamped report delivery — a transparent, bankable, and time-bound workflow.
          </p>
        </div>

        {/* Process Timeline Controls & Track Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '14px',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '0 4px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#0f172a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Sequential Lifecycle
            </span>
            <span style={{
              fontSize: '0.74rem',
              background: '#eff6ff',
              color: '#1d4ed8',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontWeight: 700,
              border: '1px solid #bfdbfe'
            }}>
              Step 01 &rarr; Step 08
            </span>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>
              Horizontal Scroll &rarr;
            </span>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll process backward"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#1e293b',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#1e293b';
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll process forward"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#1e293b',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.color = '#1e293b';
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Process Steps Horizontal Track */}
        <div
          ref={trackRef}
          className="horizontal-process-track"
          style={{
            marginBottom: '36px'
          }}
        >
          {PROCESS_STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="process-step-card"
                style={{
                  padding: '24px 20px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${item.color}`,
                  background: '#ffffff',
                  border: '1px solid #E8E2D8',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                  position: 'relative',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Top Bar with Step Number and Time */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '14px'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: `1px solid ${item.color}35`,
                        boxShadow: `0 2px 8px ${item.color}18`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        color: '#94a3b8'
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Subtitle & Time badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                      flexWrap: 'wrap',
                      gap: '4px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: item.color,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: '#475569',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontWeight: 600
                      }}
                    >
                      <Clock size={11} color={item.color} />
                      {item.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 700,
                      color: '#0f172a',
                      marginBottom: '10px',
                      lineHeight: 1.35
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#475569',
                      lineHeight: 1.55,
                      marginBottom: '0'
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Assurance Banner */}
        <div
          style={{
            padding: '24px 28px',
            borderRadius: '20px',
            background: '#F4F0E8',
            border: '1px solid #E8E2D8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)'
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <ShieldCheck size={20} color="#b45309" />
              <h4 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 800, margin: 0 }}>
                Need an Emergency / Expedited Valuation Report?
              </h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: '#475569', margin: 0, lineHeight: 1.55 }}>
              For time-sensitive bank loan sanctions, ITAT tax appeals, court filing deadlines, or customs port clearances, we offer fast-track <strong>24-hour turnaround</strong> with direct senior engineer deployment across Rajasthan and Pan-India.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '9999px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              <PhoneCall size={15} color="#059669" />
              <span>Direct Call: +91 91586 58885</span>
            </a>
            <button
              onClick={() => onOpenQuote('Fast-Track 24h Valuation Request')}
              className="btn btn-gold"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <span>Initiate Fast-Track Valuation</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
