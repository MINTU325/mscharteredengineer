import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Building2, 
  FileText, 
  Compass, 
  Zap, 
  TrendingUp,
  MessageSquare
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const [stats, setStats] = useState({
    completedValuations: "1,200+",
    dprProjectsFinanced: "₹650+ Cr",
    solarCeigClearances: "450+ MW",
    clientSatisfaction: "99.4%"
  });

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setStats(data.data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" style={{ paddingTop: '50px', paddingBottom: '70px', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Heading & Authority */}
          <div>
            <div className="section-badge gold">
              <Award size={15} />
              <span>Nationally Recognized Engineering Authority</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              lineHeight: 1.15,
              marginBottom: '20px',
              fontWeight: 800
            }}>
              Chartered Engineers, <br />
              <span className="gradient-text">Valuers & Technical</span> <br />
              <span className="gold-gradient-text">Consultancy Services</span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '580px'
            }}>
              Backed by <strong>IIT Roorkee alumni credentials</strong> and the <strong>Institution of Engineers (India)</strong>. We deliver statutory Chartered Engineer certifications, machinery valuations, CEIG solar clearances, and bankable DPRs for business expansion and fundraising.
            </p>

            {/* Credential Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '36px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(24, 90, 219, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                color: '#93c5fd'
              }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>CEng (India) MIE Certified</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                color: '#fde047'
              }}>
                <Award size={16} color="#f59e0b" />
                <span>B.Tech Mechanical, IIT Roorkee</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '8px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                color: '#86efac'
              }}>
                <CheckCircle2 size={16} color="#10b981" />
                <span>Customs / Banks / DGFT Approved</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenQuote()} 
                className="btn btn-primary"
                style={{ padding: '15px 32px', fontSize: '1rem' }}
              >
                <span>Request Formal Certification</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="#calculator" 
                className="btn btn-outline"
                style={{ padding: '15px 28px', fontSize: '0.98rem' }}
              >
                <Calculator size={18} color="#38bdf8" />
                <span>Smart Valuation Tool</span>
              </a>

              <a 
                href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20need%20technical%20consultancy%20or%20valuation%20services."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '15px 24px', fontSize: '0.95rem' }}
              >
                <MessageSquare size={18} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Authority Showcase Card */}
          <div style={{ position: 'relative' }}>
            {/* Subtle background glow */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'radial-gradient(circle, rgba(24, 90, 219, 0.25) 0%, transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0
            }} />

            <div className="glass-card gold-accent" style={{ zIndex: 1, padding: '36px' }}>
              {/* Header inside card */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-gold)' }}>
                    Statutory Credential Profile
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                    MS Chartered Engineers
                  </div>
                </div>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  color: '#34d399',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Active Pan-India Practice
                </div>
              </div>

              {/* 4 Stat Highlights in 2x2 Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '28px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '6px' }}>
                    <TrendingUp size={18} />
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Valuations</span>
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {stats.completedValuations}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Machinery & Asset Audits</div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', marginBottom: '6px' }}>
                    <FileText size={18} />
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>DPR Financed</span>
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                    {stats.dprProjectsFinanced}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Project Loan Reports</div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '6px' }}>
                    <Zap size={18} />
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solar CEIG</span>
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-heading)' }}>
                    {stats.solarCeigClearances}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Electrical Approvals</div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a78bfa', marginBottom: '6px' }}>
                    <CheckCircle2 size={18} />
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Success Rate</span>
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#c4b5fd', fontFamily: 'var(--font-heading)' }}>
                    {stats.clientSatisfaction}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Statutory Acceptance</div>
                </div>
              </div>

              {/* Quick Inquiry Callout */}
              <div style={{
                background: 'rgba(24, 90, 219, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}>
                <div style={{ fontSize: '0.86rem', color: '#e2e8f0' }}>
                  <strong>Need Fast Turnaround?</strong> <br />
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Express 48-hour inspection & report dispatch.</span>
                </div>
                <button 
                  onClick={() => onOpenQuote('Express Valuation')} 
                  className="btn btn-gold" 
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  Book Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
