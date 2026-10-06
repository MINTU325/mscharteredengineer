import React from 'react';
import { 
  Building2, Landmark, Scale, FileCheck2, 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck 
} from 'lucide-react';

const HIGHLIGHT_SERVICES = [
  {
    icon: Building2,
    color: '#0284c7',
    title: 'Property & Land Valuation',
    tag: 'Real Estate & Land',
    accepted: 'All Banks, Registrars & Courts',
    desc: 'Fair market value appraisals of residential bungalows, commercial buildings, industrial warehouses, and agricultural land parcels.',
    route: '/property-valuation'
  },
  {
    icon: Landmark,
    color: '#d97706',
    title: 'Bank & Mortgage Valuation',
    tag: 'Banking & Finance',
    accepted: 'Scheduled Commercial Banks & NBFCs',
    desc: 'Dual valuation methodology (FMV + FSV) for home loans, Loan Against Property (LAP), consortium finance, and NPA resolution.',
    route: '/bank-valuation'
  },
  {
    icon: Scale,
    color: '#059669',
    title: 'Capital Gains Tax Valuation',
    tag: 'Income Tax & CBDT',
    accepted: 'Income Tax Dept, ITAT & CBDT',
    desc: 'Section 50C / 43CA / 56(2)(x) circle rate dispute defense and Fair Market Value as on 01-04-2001 for indexation benefit.',
    route: '/tax-valuation'
  },
  {
    icon: FileCheck2,
    color: '#7c3aed',
    title: 'Chartered Engineer & DGFT',
    tag: 'Foreign Trade & Customs',
    accepted: 'DGFT, CBIC Customs & Central Ministries',
    desc: 'Statutory certification for DGFT Advance Authorisation (Appendix 4K), EPCG nexus verification, and customs second-hand machinery.',
    route: '/chartered-engineer'
  }
];

export default function ServicesTeaser({ onOpenQuote }) {
  return (
    <section id="services-preview" style={{ padding: '30px 0', background: '#F4F0E8', borderBottom: '1px solid #E8E2D8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 18px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '9999px',
            color: '#1d4ed8',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} />
            <span>12 STATUTORY &amp; COMMERCIAL PRACTICE AREAS</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
            color: '#0f172a',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '8px'
          }}>
            Our Specialized <span style={{ color: '#b45309' }}>Engineering &amp; Valuation Services</span>
          </h2>

          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.55 }}>
            Bankable valuations, statutory government certifications, and technical engineering audits delivered with 24–48 hour turnaround across Jaipur and Pan-India.
          </p>
        </div>

        {/* 4 Featured Preview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
          marginBottom: '20px'
        }}>
          {HIGHLIGHT_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href="/services"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 20px',
                  background: '#ffffff',
                  border: '1px solid #E8E2D8',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.25s ease',
                  borderTop: `4px solid ${item.color}`,
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.03)';
                  e.currentTarget.style.borderColor = '#E8E2D8';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}>
                      <Icon size={22} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: item.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.14rem', color: '#0f172a', fontWeight: 700, marginBottom: '8px', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <div style={{
                    fontSize: '0.74rem',
                    color: '#64748b',
                    fontWeight: 600,
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>🏛️ {item.accepted}</span>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '18px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  color: item.color
                }}>
                  <span>View Details &amp; Deliverables</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Central Master CTA to Open New Dedicated Services Page */}
        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0a192f 0%, #1e3a5f 100%)',
          borderRadius: '18px',
          padding: '28px 24px',
          color: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'left', maxWidth: '620px' }}>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800, marginBottom: '6px' }}>
              Explore All 13 Statutory &amp; Engineering Practice Areas
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0 }}>
              Including AutoCAD 2D Electrical Drafting, Plant &amp; Machinery, IBC/NCLT, Industrial Safety &amp; Boilers, CEIG Solar Approvals, and FSSAI Compliance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/services"
              className="btn btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 24px',
                fontSize: '0.90rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <span>View All 13 Services &rarr;</span>
            </a>
            <button
              onClick={() => onOpenQuote('General Inquiry')}
              className="btn btn-outline"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: '#ffffff',
                padding: '11px 20px',
                fontSize: '0.90rem'
              }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
