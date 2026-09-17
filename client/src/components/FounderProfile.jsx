import React from 'react';
import { Award, GraduationCap, ShieldCheck, Mail, Phone, ExternalLink, CheckCircle2, Landmark } from 'lucide-react';

export default function FounderProfile({ onOpenQuote }) {
  return (
    <section id="founder" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>Leadership & Technical Governance</span>
          </div>
          <h2 className="section-title">
            Core Team & <span className="gradient-text">Leadership</span>
          </h2>
          <p className="section-description">
            Headed by elite IIT engineering alumni and Chartered Engineers committed to regulatory integrity and technical excellence.
          </p>
        </div>

        <div 
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(16, 33, 74, 0.75) 0%, rgba(8, 16, 38, 0.85) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            borderRadius: 'var(--radius-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle background gear */}
          <div style={{
            position: 'absolute',
            right: '-60px',
            bottom: '-60px',
            opacity: 0.05,
            pointerEvents: 'none'
          }}>
            <svg width="340" height="340" viewBox="0 0 100 100" fill="white">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="8" strokeDasharray="10 6" />
            </svg>
          </div>

          <div className="founder-grid">
            {/* Left: Founder Avatar / Seal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '210px',
                height: '210px',
                margin: '0 auto',
                borderRadius: '28px',
                background: 'linear-gradient(135deg, #185adb 0%, #0b1736 100%)',
                border: '3px solid rgba(245, 158, 11, 0.5)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(24, 90, 219, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  fontSize: '3.8rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '2px'
                }}>
                  MS
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-gold)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginTop: '4px'
                }}>
                  IIT Roorkee Alumnus
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  background: 'rgba(245, 158, 11, 0.9)',
                  color: '#070e1e',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  padding: '4px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}>
                  CEng (India) MIE
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 800, marginBottom: '4px' }}>
                  Mukesh Singh
                </h3>
                <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 600 }}>
                  CEng (INDIA) MIE
                </div>
                <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600, marginTop: '2px' }}>
                  B.Tech (Mechanical), IIT Roorkee
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '6px' }}>
                  Principal Consultant & Registered Valuer
                </div>
              </div>
            </div>

            {/* Right: Qualifications & Background */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 12px',
                background: 'rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                color: '#93c5fd',
                marginBottom: '16px'
              }}>
                <Award size={14} color="#f59e0b" />
                Corporate Member of IEI (Institution of Engineers India)
              </div>

              <h4 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '14px' }}>
                Engineering Rigor, Regulatory Trust
              </h4>

              <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Mukesh Singh brings over 10 years of intensive industrial experience in technical valuation, engineering machinery appraisals, energy compliance, and project feasibility. Armed with an engineering foundation from <strong>IIT Roorkee</strong> and recognition from the <strong>Institution of Engineers (India)</strong>, he oversees every valuation and statutory certificate with unmatched analytical precision.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>B.Tech Mechanical, IIT Roorkee</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Chartered Engineer (India)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>Corporate Member of IEI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>10+ Yrs Industrial Evaluation</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <a href="tel:+919158658885" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
                  <Phone size={15} color="#10b981" />
                  <span>+91 91586 58885</span>
                </a>
                <a href="mailto:ms.charteredengineer@gmail.com" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
                  <Mail size={15} color="#f59e0b" />
                  <span>Email Principal Engineer</span>
                </a>
                <button onClick={() => onOpenQuote()} className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '0.88rem' }}>
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
