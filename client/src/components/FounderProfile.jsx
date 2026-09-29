import React from 'react';
import { Award, GraduationCap, ShieldCheck, Mail, Phone, ExternalLink, CheckCircle2, Landmark } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function FounderProfile({ onOpenQuote }) {
  return (
    <section id="founder" className="section section-light">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>Leadership &amp; Technical Governance</span>
          </div>
          <h2 className="section-title">
            Core Team &amp; <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-description">
            Headed by elite IIT engineering alumni and Chartered Engineers committed to regulatory integrity and technical excellence.
          </p>
        </div>

        <div 
          className="glass-card founder-card"
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            overflow: 'hidden',
            padding: '36px'
          }}
        >
          <div className="founder-grid">
            {/* Left: Real Humanized Founder Portrait & Badges */}
            <div style={{ textAlign: 'center' }}>
              {/* Official Company Emblem Logo */}
              <div className="founder-logo-wrapper">
                <div className="founder-logo-glow" />
                
                <div className="founder-logo-svg-box">
                  <svg width="108" height="108" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="founderBlueGear" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                      </linearGradient>
                      <linearGradient id="founderGoldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    
                    {/* ROTATING BLUE & GOLD GEAR RING */}
                    <g className="spin-ring" style={{ transformOrigin: '50px 50px' }}>
                      <circle cx="50" cy="50" r="42" fill="none" stroke="url(#founderBlueGear)" strokeWidth="7" strokeDasharray="14 9" strokeLinecap="round" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="url(#founderGoldRing)" strokeWidth="2.5" opacity="0.9" />
                    </g>

                    {/* CORE SEAL & MONOGRAM */}
                    <circle cx="50" cy="50" r="26" fill="#070e1e" stroke="#ffffff" strokeWidth="2.5" />
                    <circle cx="50" cy="50" r="21" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <text x="50" y="60.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" fill="#ffffff" textAnchor="middle" letterSpacing="1">MS</text>
                  </svg>
                </div>

                <div className="founder-logo-badge">
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>
                    MS CHARTERED ENGINEERS
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.04em', marginTop: '2px' }}>
                    Valuers &amp; Technical Consultancy
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: 800, marginBottom: '2px' }}>
                  Mukesh Singh
                </h3>
                <div style={{ fontSize: '0.88rem', color: '#1d4ed8', fontWeight: 700 }}>
                  CEng (INDIA) MIE
                </div>
                <div style={{ fontSize: '0.84rem', color: '#d97706', fontWeight: 700, marginTop: '2px' }}>
                  B.Tech (Mechanical), IIT Roorkee
                </div>
                <div style={{ fontSize: '0.80rem', color: '#64748b', marginTop: '4px', lineHeight: 1.4 }}>
                  Principal Consultant &amp; Registered Valuer
                </div>
              </div>
            </div>

            {/* Right: Qualifications, Rigor & Contact */}
            <div className="founder-content-light">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                color: '#1d4ed8',
                fontWeight: 600,
                marginBottom: '14px'
              }}>
                <Award size={14} color="#d97706" />
                Corporate Member of IEI (Institution of Engineers India)
              </div>

              <h4 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800, marginBottom: '12px' }}>
                Engineering Rigor, Regulatory Trust
              </h4>

              <p style={{ color: '#334155', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Mukesh Singh brings extensive industrial experience in technical valuation, engineering machinery appraisals, energy compliance, and project feasibility. Recognized as a <strong>Chartered Engineer (India) MIE</strong> by the <strong>Institution of Engineers (India)</strong>, he oversees every valuation and statutory certificate with unmatched analytical precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                <div className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#1e293b', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Chartered Engineer (India)</span>
                </div>
                <div className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#1e293b', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Corporate Member of IEI</span>
                </div>
                <div className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#1e293b', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Valuation &amp; Certification Expert</span>
                </div>
                <div className="checklist-item" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#1e293b', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Pan-India Statutory Practice</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <a href="tel:+919158658885" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.86rem' }}>
                  <Phone size={15} color="#10b981" />
                  <span>+91 91586 58885</span>
                </a>
                <a href="mailto:ms.charteredengineer@gmail.com" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.86rem' }}>
                  <Mail size={15} color="#d97706" />
                  <span>Email Principal Engineer</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  style={{ padding: '9px 18px', fontSize: '0.86rem', color: '#0284c7' }}
                >
                  <LinkedinIcon size={15} color="#0284c7" />
                  <span>LinkedIn Profile</span>
                </a>
                <button onClick={() => onOpenQuote()} className="btn btn-gold" style={{ padding: '9px 20px', fontSize: '0.86rem' }}>
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
