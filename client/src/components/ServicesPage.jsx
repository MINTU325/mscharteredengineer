import React, { useEffect } from 'react';
import { 
  ArrowLeft, ShieldCheck, PhoneCall, 
  MessageSquare, FileText, CheckCircle2, ChevronRight,
  Building2, Landmark, Scale, FileCheck2, Cpu
} from 'lucide-react';
import ServicesGrid from './ServicesGrid';

const SERVICE_HIGHLIGHT_STATS = [
  { color: '#0284c7', value: '24–48 Hours', label: 'Fast-track Delivery' },
  { color: '#10b981', value: '100% Acceptance', label: 'Banks, Tax & Courts' },
  { color: '#f59e0b', value: 'Dual Methodology', label: 'FMV + Forced Sale Value' },
  { color: '#0284c7', value: 'Jaipur HQ', label: 'Pan-India Jurisdiction' },
];

export default function ServicesPage({ onOpenQuote, onNavigateHome, onNavigateService, currentRoute = '/services' }) {
  // Ensure the page scrolls to top on navigation, or to the specific service card if applicable
  useEffect(() => {
    if (currentRoute === '/services' || currentRoute === '/services/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } else {
      // If navigated to a specific service sub-route, attempt to scroll to that card
      const serviceIdMap = {
        '/property-valuation': 'property-land-valuation',
        '/bank-valuation': 'bank-mortgage-valuation',
        '/tax-valuation': 'statutory-tax-valuation',
        '/ibc-valuation': 'ibc-nclt-corporate-valuation',
        '/machinery-valuation': 'plant-machinery-valuation',
        '/valuation': 'plant-machinery-valuation',
        '/assets-valuation': 'plant-machinery-valuation',
        '/chartered-engineer': 'chartered-engineer-certification',
        '/safety-energy-audits': 'safety-energy-audits',
        '/fssai': 'fssai-compliance-services',
        '/advisory': 'plant-machinery-valuation',
        '/autocad-drafting': 'autocad-electrical-drafting',
        '/autocad-electrical-drafting': 'autocad-electrical-drafting',
        '/inspection-services': 'third-party-audit-inspection',
        '/third-party-inspection': 'third-party-audit-inspection',
        '/audit-services': 'third-party-audit-inspection',
        '/fabrication': 'fabrication-services',
        '/tin-shed': 'fabrication-services',
        '/iron-fabrication': 'fabrication-services',
        '/ceig-approval': 'ceig-approval-consultancy',
        '/ceig-approval-consultancy': 'ceig-approval-consultancy',
        '/ceig': 'ceig-approval-consultancy',
        '/electrical-contractor-license': 'electrical-contractor-license',
        '/contractor-license': 'electrical-contractor-license',
        '/ht-consumer-grievance': 'ht-consumer-grievance',
        '/fire-safety-audit': 'fire-safety-audit',
        '/power-quality-analysis': 'power-quality-analysis',
        '/plant-capacity-certificate': 'plant-capacity-certificate',
        '/pm-surya-ghar': 'solar-consultancy-net-metering',
        '/solar-consultancy': 'solar-consultancy-net-metering'
      };

      const targetId = serviceIdMap[currentRoute];
      if (targetId) {
        const scrollToElement = () => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.transition = 'border-color 0.4s ease';
            el.style.borderColor = '#38bdf8';
            setTimeout(() => {
              el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }, 3000);
            return true;
          }
          return false;
        };

        if (!scrollToElement()) {
          setTimeout(scrollToElement, 150);
          setTimeout(scrollToElement, 400);
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }
  }, [currentRoute]);

  return (
    <div className="services-page" style={{
      background: '#f8fafc',
      color: '#0f172a',
      minHeight: '100vh',
      paddingTop: '20px',
      paddingBottom: '60px'
    }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Breadcrumb & Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '12px 0 20px',
          marginBottom: '20px',
          borderBottom: '1px solid #e2e8f0'
        }}>
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#eef0f5';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a3a9b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#7a8296' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#475569', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a', fontWeight: 500 }}>Services We Offer</span>
          </div>
        </div>

        {/* Dedicated Services Header Banner */}
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '36px 32px',
          marginBottom: '32px',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '880px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '6px',
              color: '#0284c7',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              marginBottom: '16px'
            }}>
              <ShieldCheck size={13} />
              <span>15 COMPREHENSIVE STATUTORY &amp; ENGINEERING PRACTICE AREAS</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: '14px',
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}>
              Engineering, Valuation &amp; <span style={{ color: '#0284c7' }}>Statutory Audit Services</span>
            </h1>

            <p style={{
              fontSize: '1.02rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '24px',
              maxWidth: '820px'
            }}>
              Certified Chartered Engineer &amp; Government Approved Registered Valuer practice led by <strong>Er. Mukesh Singh (B.Tech IIT Roorkee, Corporate Member IEI)</strong>. Accepted across Scheduled Commercial Banks, Income Tax Department (CBDT), NCLT Benches, DGFT, and Central Ministries Pan-India.
            </p>

            {/* Quick Stat Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '24px'
            }}>
              {SERVICE_HIGHLIGHT_STATS.map((stat, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '0.82rem',
                  color: '#cbd5e1'
                }}>
                  <span style={{ color: stat.color, fontWeight: 600 }}>{stat.value}</span>
                  <span style={{ color: '#7a8296' }}>·</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Direct CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <button
                onClick={() => onOpenQuote('General Valuation Inquiry')}
                style={{
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Request Custom Quotation
              </button>

              <a
                href="tel:+919158658885"
                style={{
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#1a1e28'}
                onMouseLeave={e => e.currentTarget.style.background = '#11141c'}
              >
                <PhoneCall size={15} style={{ color: '#0284c7' }} />
                <span>Call: +91 91586 58885</span>
              </a>

              <a
                href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20am%20reviewing%20your%20services%20page%20and%20need%20a%20statutory%20valuation%20or%20Chartered%20Engineer%20certificate."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#1a1e28'}
                onMouseLeave={e => e.currentTarget.style.background = '#11141c'}
              >
                <MessageSquare size={15} style={{ color: '#10b981' }} />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Services Grid (All 15 Practice Areas) ── */}
        <ServicesGrid onOpenQuote={onOpenQuote} onNavigateService={onNavigateService} />

        {/* ── Bottom Purpose Helper Banner ── */}
        <div style={{
          marginTop: '40px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '28px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#0284c7',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '8px'
            }}>
              <FileText size={14} />
              <span>Interactive Discovery</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: 600, marginBottom: '6px' }}>
              Unsure which valuation report fits your legal or financial requirement?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              Use our 1-minute <strong>Valuation Purpose Selector</strong> to discover your exact document checklist, turnaround time, and statutory report format.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/purpose-selector"
              style={{
                background: '#f1f5f9',
                color: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Open Purpose Selector &rarr;
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
