import React from 'react';
import { Award, GraduationCap, Mail, Phone, CheckCircle2 } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function FounderProfile({ onOpenQuote }) {
  return (
    <section id="founder" style={{ padding: '48px 0', background: '#07080d', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 32px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            color: '#38bdf8',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '12px'
          }}>
            <GraduationCap size={14} />
            <span>Leadership &amp; Technical Governance</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
            color: '#ffffff',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '10px'
          }}>
            Core Team &amp; <span style={{ color: '#38bdf8' }}>Leadership</span>
          </h2>
          <p style={{ color: '#a3a9b8', fontSize: '0.94rem', lineHeight: 1.6 }}>
            Headed by elite IIT engineering alumni and Chartered Engineers committed to regulatory integrity and technical excellence.
          </p>
        </div>

        <div 
          style={{
            maxWidth: '1020px',
            margin: '0 auto',
            borderRadius: '8px',
            background: '#11141c',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            padding: '32px 36px'
          }}
        >
          <div className="founder-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 280px) 1fr', gap: '36px', alignItems: 'center' }}>
            {/* Left: Emblem Logo & Leader Title */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#1a1e28',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 16px',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                maxWidth: '240px'
              }}>
                <svg width="88" height="88" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
                  
                  {/* Gear rings */}
                  <g className="spin-ring" style={{ transformOrigin: '50px 50px' }}>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#founderBlueGear)" strokeWidth="7" strokeDasharray="14 9" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="url(#founderGoldRing)" strokeWidth="2.5" opacity="0.9" />
                  </g>

                  {/* Core Monogram */}
                  <circle cx="50" cy="50" r="26" fill="#07080d" stroke="#ffffff" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="21" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <text x="50" y="60.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" fill="#ffffff" textAnchor="middle" letterSpacing="1">KS</text>
                </svg>

                <div>
                  <div style={{ fontSize: '0.80rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff' }}>
                    KS CHARTERED ENGINEERS
                  </div>
                  <div style={{ fontSize: '0.66rem', color: '#F58220', fontWeight: 700, letterSpacing: '0.04em', marginTop: '2px' }}>
                    Valuers &amp; Technical Services
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, marginBottom: '2px' }}>
                  Mukesh Singh
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#38bdf8', fontWeight: 700 }}>
                  CEng (INDIA) MIE
                </div>
                <div style={{ fontSize: '0.82rem', color: '#fbbf24', fontWeight: 600, marginTop: '2px' }}>
                  B.Tech (Mechanical), IIT Roorkee
                </div>
                <div style={{ fontSize: '0.78rem', color: '#a3a9b8', marginTop: '4px', lineHeight: 1.4 }}>
                  Principal Consultant &amp; Registered Valuer
                </div>
              </div>
            </div>

            {/* Right: Qualifications, Rigor & Contact */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: 'rgba(56, 189, 248, 0.10)',
                border: '1px solid rgba(56, 189, 248, 0.22)',
                borderRadius: '6px',
                fontSize: '0.76rem',
                color: '#38bdf8',
                fontWeight: 600,
                marginBottom: '14px'
              }}>
                <Award size={14} color="#fbbf24" />
                <span>Corporate Member of IEI (Institution of Engineers India)</span>
              </div>

              <h4 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 800, marginBottom: '12px' }}>
                Engineering Rigor, Regulatory Trust
              </h4>

              <p style={{ color: '#a3a9b8', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Mukesh Singh brings extensive industrial experience in technical valuation, engineering machinery appraisals, energy compliance, and project feasibility. Recognized as a <strong style={{ color: '#ffffff' }}>Chartered Engineer (India) MIE</strong> by the <strong style={{ color: '#ffffff' }}>Institution of Engineers (India)</strong>, he oversees every valuation and statutory certificate with unmatched analytical precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Chartered Engineer (India)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Corporate Member of IEI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Valuation &amp; Certification Expert</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Pan-India Statutory Practice</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                <a href="tel:+919158658885" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.84rem', borderRadius: '6px', borderColor: 'rgba(255, 255, 255, 0.15)', color: '#10b981' }}>
                  <Phone size={15} color="#10b981" />
                  <span>+91 91586 58885</span>
                </a>
                <a href="mailto:ms.charteredengineer@gmail.com" className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.84rem', borderRadius: '6px', borderColor: 'rgba(255, 255, 255, 0.15)', color: '#fbbf24' }}>
                  <Mail size={15} color="#fbbf24" />
                  <span>Email Principal Engineer</span>
                </a>
                <a 
                  href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline" 
                  style={{ padding: '9px 18px', fontSize: '0.84rem', borderRadius: '6px', borderColor: 'rgba(255, 255, 255, 0.15)', color: '#38bdf8' }}
                >
                  <LinkedinIcon size={15} color="#38bdf8" />
                  <span>LinkedIn Profile</span>
                </a>
                <button 
                  onClick={() => onOpenQuote()} 
                  className="btn btn-primary" 
                  style={{ 
                    padding: '9px 20px', 
                    fontSize: '0.84rem', 
                    background: '#F58220', 
                    borderColor: '#F58220', 
                    borderRadius: '6px', 
                    color: '#ffffff',
                    fontWeight: 600 
                  }}
                >
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
