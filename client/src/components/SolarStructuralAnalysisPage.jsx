import React, { useEffect } from 'react';
import { ArrowLeft, Sun, ShieldCheck, PhoneCall } from 'lucide-react';

export default function SolarStructuralAnalysisPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Solar Structural Analysis | KS Chartered Engineers (IIT Roorkee)';
  }, []);

  return (
    <div className="solar-structural-analysis-page" style={{ background: '#040914', color: '#f1f5f9', minHeight: '80vh', paddingBottom: '80px' }}>
      {/* ── Top Hero Header ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0a1224 0%, #0f172a 100%)',
        borderBottom: '1px solid #1e293b',
        padding: '50px 20px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <button
            onClick={() => {
              if (typeof onNavigateHome === 'function') onNavigateHome();
              else window.location.href = '/';
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '9999px',
              padding: '6px 16px',
              color: '#e2e8f0',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            <ArrowLeft size={14} /> Back to Home
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '4px 12px', borderRadius: '20px', color: '#fbbf24', fontSize: '0.78rem', fontWeight: 700, marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Sun size={14} />
            <span>KS Engineering Consultancy</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 14px 0', lineHeight: 1.25 }}>
            Solar Structural <span style={{ color: '#fbbf24' }}>Analysis</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '750px', margin: 0 }}>
            Statutory structural stability certifications, wind load analysis (IS 875 Part 3), MMS foundation appraisals, and rooftop solar load safety audits by IIT Roorkee alumni Chartered Engineers.
          </p>
        </div>
      </div>

      {/* ── Blank Canvas Content Area (Ready for upcoming content) ── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{
          background: '#0a1224',
          border: '1px dashed #334155',
          borderRadius: '16px',
          minHeight: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '40px 20px'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'rgba(251, 191, 36, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Sun size={28} color="#fbbf24" />
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 8px 0' }}>
            Solar Structural Analysis
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '500px', margin: '0 0 24px 0', lineHeight: 1.6 }}>
            Technical specifications, STAAD.Pro structural modeling, wind simulation data, and case studies will be updated here.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => {
                if (typeof onOpenQuote === 'function') {
                  onOpenQuote('Solar Structural Stability & Wind Load Certification');
                } else {
                  window.location.href = '/contact';
                }
              }}
              style={{
                background: '#fbbf24',
                color: '#040914',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.90rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Inquire for Solar Structural Audit
            </button>
            <a
              href="tel:+919158658885"
              style={{
                background: 'transparent',
                color: '#e2e8f0',
                border: '1px solid #334155',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.90rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <PhoneCall size={16} color="#fbbf24" />
              <span>Call +91 91586 58885</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
