import React from 'react';
import { 
  Building2, Landmark, Scale, FileCheck2, 
  ArrowRight, ShieldCheck 
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
    color: '#f59e0b',
    title: 'Bank & Mortgage Valuation',
    tag: 'Banking & Finance',
    accepted: 'Scheduled Commercial Banks & NBFCs',
    desc: 'Dual valuation methodology (FMV + FSV) for home loans, Loan Against Property (LAP), consortium finance, and NPA resolution.',
    route: '/bank-valuation'
  },
  {
    icon: Scale,
    color: '#10b981',
    title: 'Capital Gains Tax Valuation',
    tag: 'Income Tax & CBDT',
    accepted: 'Income Tax Dept, ITAT & CBDT',
    desc: 'Section 50C / 43CA / 56(2)(x) circle rate dispute defense and Fair Market Value as on 01-04-2001 for indexation benefit.',
    route: '/tax-valuation'
  },
  {
    icon: FileCheck2,
    color: '#a78bfa',
    title: 'Chartered Engineer & DGFT',
    tag: 'Foreign Trade & Customs',
    accepted: 'DGFT, CBIC Customs & Central Ministries',
    desc: 'Statutory certification for DGFT Advance Authorisation (Appendix 4K), EPCG nexus verification, and customs second-hand machinery.',
    route: '/chartered-engineer'
  }
];

export default function ServicesTeaser({ onOpenQuote }) {
  return (
    <section id="services-preview" style={{ padding: '48px 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 32px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#eff6ff',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            color: '#0284c7',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '12px'
          }}>
            <ShieldCheck size={14} />
            <span>15 Statutory &amp; Commercial Practice Areas</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
            color: '#0f172a',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '10px'
          }}>
            Our Specialized <span style={{ color: '#0284c7' }}>Engineering &amp; Valuation Services</span>
          </h2>

          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
            Bankable valuations, statutory government certifications, and technical engineering audits delivered with 24–48 hour turnaround across Jaipur and Pan-India.
          </p>
        </div>

        {/* 4 Featured Preview Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          {HIGHLIGHT_SERVICES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.route}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '22px 20px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  borderTop: `3px solid ${item.color}`,
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.borderTopColor = item.color;
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(15, 23, 42, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.borderTopColor = item.color;
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.04)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '6px',
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}33`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.color
                    }}>
                      <Icon size={20} />
                    </div>
                    <span style={{
                      fontSize: '0.70rem',
                      fontWeight: 700,
                      color: item.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em'
                    }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.12rem', color: '#0f172a', fontWeight: 700, marginBottom: '8px', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>

                  <div style={{
                    fontSize: '0.74rem',
                    color: '#475569',
                    fontWeight: 600,
                    marginBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Landmark size={13} color={item.color} style={{ flexShrink: 0 }} />
                    <span>{item.accepted}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: '18px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: item.color
                }}>
                  <span>View Details &amp; Deliverables</span>
                  <ArrowRight size={13} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Central Master CTA to Open New Dedicated Services Page */}
        <div style={{
          textAlign: 'center',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '24px 28px',
          color: '#0f172a',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'left', maxWidth: '640px' }}>
            <h4 style={{ fontSize: '1.18rem', color: '#0f172a', fontWeight: 800, marginBottom: '6px' }}>
              Explore All 15 Statutory &amp; Engineering Practice Areas
            </h4>
            <p style={{ fontSize: '0.86rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
              Including Industrial Fabrication &amp; PEB Sheds, Electrical Substations, AutoCAD 2D Drafting, Plant &amp; Machinery, IBC/NCLT, and Industrial Safety &amp; Boilers.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="/services"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                fontSize: '0.86rem',
                fontWeight: 600,
                textDecoration: 'none',
                background: '#F58220',
                borderColor: '#F58220',
                borderRadius: '6px'
              }}
            >
              <span>View All 15 Services &rarr;</span>
            </a>
            <button
              onClick={() => onOpenQuote('General Inquiry')}
              className="btn btn-outline"
              style={{
                borderColor: 'rgba(255,255,255,0.18)',
                color: '#0f172a',
                padding: '10px 20px',
                fontSize: '0.86rem',
                borderRadius: '6px'
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
