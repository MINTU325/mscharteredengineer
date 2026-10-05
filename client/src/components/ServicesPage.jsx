import React, { useEffect } from 'react';
import { 
  ArrowLeft, ShieldCheck, Sparkles, PhoneCall, 
  MessageSquare, FileText, CheckCircle2, ChevronRight,
  Building2, Landmark, Scale, FileCheck2, Cpu
} from 'lucide-react';
import ServicesGrid from './ServicesGrid';

export default function ServicesPage({ onOpenQuote, onNavigateHome, currentRoute = '/services' }) {
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
        '/advisory': 'plant-machinery-valuation'
      };

      const targetId = serviceIdMap[currentRoute];
      if (targetId) {
        const scrollToElement = () => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
            el.style.borderColor = '#f59e0b';
            el.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.4)';
            setTimeout(() => {
              el.style.boxShadow = '';
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
      background: 'radial-gradient(circle at 10% 8%, rgba(217, 119, 6, 0.05) 0%, transparent 40%), linear-gradient(180deg, #F4F0E8 0%, #FAF8F5 45%, #F4F0E8 100%)',
      minHeight: '100vh',
      paddingTop: '24px',
      paddingBottom: '36px'
    }}>
      <div className="container">
        {/* Top Breadcrumb & Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px 0',
          marginBottom: '20px',
          borderBottom: '1px solid #E8E2D8'
        }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #E8E2D8',
              borderRadius: '9999px',
              padding: '8px 18px',
              color: '#0f172a',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#1d4ed8';
              e.currentTarget.style.color = '#1d4ed8';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E8E2D8';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <ArrowLeft size={16} />
            <span>&larr; Back to Home</span>
          </button>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748b' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Services We Offer</span>
          </div>
        </div>

        {/* Dedicated Services Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #0d2847 60%, #1e3a5f 100%)',
          borderRadius: '24px',
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)',
          color: '#ffffff',
          marginBottom: '24px',
          boxShadow: '0 20px 40px -15px rgba(10, 25, 47, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Subtle background glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '880px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '9999px',
              color: '#fbbf24',
              fontSize: '0.80rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '16px'
            }}>
              <Sparkles size={14} />
              <span>12 COMPREHENSIVE STATUTORY &amp; COMMERCIAL PRACTICE AREAS</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '16px',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Engineering, Valuation &amp; <span style={{ color: '#fbbf24' }}>Statutory Audit Services</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.96rem, 1.8vw, 1.12rem)',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '28px',
              maxWidth: '820px'
            }}>
              Certified Chartered Engineer &amp; Government Approved Registered Valuer practice led by <strong>Er. Mukesh Singh (B.Tech IIT Roorkee, Corporate Member IEI)</strong>. Accepted across Scheduled Commercial Banks, Income Tax Department (CBDT), NCLT Benches, DGFT, and Central Ministries Pan-India.
            </p>

            {/* Quick Stat Pill Highlights */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '28px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '8px 14px',
                fontSize: '0.84rem',
                color: '#e2e8f0'
              }}>
                <span style={{ color: '#fbbf24', fontWeight: 800 }}>⚡ 24–48 Hours</span>
                <span>Fast-track Delivery</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '8px 14px',
                fontSize: '0.84rem',
                color: '#e2e8f0'
              }}>
                <span style={{ color: '#38bdf8', fontWeight: 800 }}>🏛️ 100% Acceptance</span>
                <span>Banks, Tax &amp; Courts</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '8px 14px',
                fontSize: '0.84rem',
                color: '#e2e8f0'
              }}>
                <span style={{ color: '#34d399', fontWeight: 800 }}>⚖️ Dual Methodology</span>
                <span>FMV + Forced Sale Value</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '8px 14px',
                fontSize: '0.84rem',
                color: '#e2e8f0'
              }}>
                <span style={{ color: '#fbbf24', fontWeight: 800 }}>📍 Jaipur HQ</span>
                <span>Pan-India Jurisdiction</span>
              </div>
            </div>

            {/* Direct CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
              <button
                onClick={() => onOpenQuote('General Valuation Inquiry')}
                className="btn btn-gold"
                style={{ padding: '12px 26px', fontSize: '0.94rem', fontWeight: 700 }}
              >
                Request Custom Quotation
              </button>

              <a
                href="tel:+919158658885"
                className="btn btn-outline"
                style={{
                  padding: '11px 22px',
                  fontSize: '0.92rem',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  color: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <PhoneCall size={16} color="#34d399" />
                <span>Call: +91 91586 58885</span>
              </a>

              <a
                href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20am%20reviewing%20your%20services%20page%20and%20need%20a%20statutory%20valuation%20or%20Chartered%20Engineer%20certificate."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 20px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(37, 211, 102, 0.15)',
                  border: '1px solid rgba(37, 211, 102, 0.4)',
                  color: '#ffffff',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={16} color="#25D366" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Services Grid (All 12 Practice Areas) ── */}
        <ServicesGrid onOpenQuote={onOpenQuote} />

        {/* ── Bottom Purpose Helper Banner ── */}
        <div style={{
          marginTop: '24px',
          background: '#ffffff',
          border: '1px solid #E8E2D8',
          borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#b45309',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <FileText size={15} />
              <span>Interactive Discovery</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800, marginBottom: '8px' }}>
              Unsure which valuation report fits your legal or financial requirement?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
              Use our 1-minute <strong>Valuation Purpose Selector</strong> to discover your exact document checklist, turnaround time, and statutory report format.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/purpose-selector"
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              Open Purpose Selector &rarr;
            </a>
            <a
              href="/process"
              className="btn btn-outline"
              style={{ padding: '12px 22px', fontSize: '0.92rem', color: '#0f172a', borderColor: '#E8E2D8' }}
            >
              View 8-Step Process
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
