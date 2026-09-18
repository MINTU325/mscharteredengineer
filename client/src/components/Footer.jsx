import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Award, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040914',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '64px',
      paddingBottom: '32px',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '32px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="gear-icon-wrapper" style={{ background: 'transparent', border: 'none', width: '40px', height: '40px' }}>
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50,4
                           L 56,15 A 32,32 0 0,1 67,19 L 77,10
                           L 86,19 L 77,29 A 32,32 0 0,1 81,40 L 92,44
                           L 92,56 L 81,60 A 32,32 0 0,1 77,71 L 86,81
                           L 77,90 L 67,81 A 32,32 0 0,1 56,85 L 50,96
                           L 40,96 L 44,85 A 32,32 0 0,1 33,81 L 23,90
                           L 14,81 L 23,71 A 32,32 0 0,1 19,60 L 8,56
                           L 8,44 L 19,40 A 32,32 0 0,1 23,29 L 14,19
                           L 23,10 L 33,19 A 32,32 0 0,1 44,15 L 40,4
                           Z" fill="#0A3C6E" />
                  <circle cx="50" cy="50" r="28" fill="none" stroke="#FFFFFF" strokeWidth="5" />
                  <text x="50" y="63" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="36" fill="#FFFFFF" textAnchor="middle">MS</text>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  MS CHARTERED <span style={{ color: '#38bdf8' }}>ENGINEERS</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Valuers & Technical Consultancy
                </div>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              &ldquo;Engineering Valuation Consultancy for a Stronger Tomorrow.&rdquo; From assessment to growth: delivering certified Chartered Engineer excellence.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: 'var(--radius-sm)',
              color: '#fbbf24',
              fontSize: '0.78rem'
            }}>
              <Award size={14} />
              <span>CEng (India) MIE — Institution of Engineers (India)</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Practice Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Assets Valuation Services (Banking, Insurance, M&amp;A, Taxation)</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Chartered Engineer Certificates (DGFT, CBIC, MSME, MoFPI)</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>FSSAI Compliance — License, Renewal, Hygiene Audit</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Asset Componentization &amp; Advisory Services</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Equipment Effectiveness &amp; Process Capability Analysis</a></li>
              <li><a href="#services" style={{ color: '#cbd5e1' }}>Impairment Study, Liquidation &amp; Balance Useful Life</a></li>
            </ul>
          </div>

          {/* Col 3: Statutory Credentials */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Statutory Recognition
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Chartered Engineer (India)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Institution of Engineers (India) Member</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Mechanical Engineering Division</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Accepted by Banks, Customs & DGFT</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Companies Act 2013 Compliance</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Jaipur Headquarters
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Jaipur, RAJASTHAN - 302019, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="tel:+919158658885" style={{ color: '#ffffff', fontWeight: 600 }}>+91 91586 58885</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="mailto:ms.charteredengineer@gmail.com" style={{ color: '#cbd5e1' }}>ms.charteredengineer@gmail.com</a>
              </div>

              <button 
                onClick={() => onOpenQuote()}
                className="btn btn-gold"
                style={{ padding: '8px 16px', fontSize: '0.82rem', marginTop: '6px' }}
              >
                Book Chartered Engineer Visit
              </button>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginBottom: '24px' }} />

        {/* Disclaimer & Bottom Line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong>MS Chartered Engineers, Valuers & Technical Consultancy Services</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Pan India Practice &bull; Decades of Professional Excellence</span>
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
