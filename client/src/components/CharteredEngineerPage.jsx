import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, FileText, PhoneCall, ChevronRight, ShieldCheck, FileCheck2, Cpu } from 'lucide-react';

export default function CharteredEngineerPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Chartered Engineer in India | DGFT, Customs & CEIG | MS Chartered Engineers';
  }, []);

  return (
    <div className="chartered-engineer-page" style={{ background: '#f8fafc', paddingBottom: '60px' }}>
      {/* ── Top Hero / Pillar Banner ── */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '60px 20px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '9999px',
              padding: '6px 16px',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '24px'
            }}
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
          
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            Government Certified <span style={{ color: '#fbbf24' }}>Chartered Engineer in India</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.7, maxWidth: '800px', marginBottom: '30px' }}>
            MS Chartered Engineers (IIT Roorkee) provides statutory engineering certifications accepted by DGFT, Customs, Central Excise, Banks, and Government Authorities across Pan-India. Led by Er. Mukesh Singh, Corporate Member (MIE) of The Institution of Engineers (India).
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => onOpenQuote('Chartered Engineer Certification (IEI MIE)')} className="btn btn-gold" style={{ padding: '12px 24px' }}>
              Request CE Certificate
            </button>
            <a href="tel:+919158658885" className="btn btn-outline" style={{ padding: '12px 24px', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <PhoneCall size={18} style={{ marginRight: '8px' }} /> Call +91 91586 58885
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Content Area (Pillar Page Layout) ── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Section 1: What is it? */}
        <section>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800, marginBottom: '16px' }}>What is a Chartered Engineer (CE) Certificate?</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '16px' }}>
            A Chartered Engineer Certificate is an official, statutory document issued by a qualified technical expert who has been awarded the prestigious "Chartered Engineer" (CEng) designation by the <strong>Institution of Engineers (India)</strong>. This certification acts as an impartial technical validation for industrial machinery, production processes, and engineering assets.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>
            Whether you are importing second-hand machinery, applying for government subsidies, or fulfilling export obligations under Foreign Trade Policy (FTP), a valid CE Certificate is mandatory for clearing customs and securing DGFT approvals in India.
          </p>
        </section>

        {/* Section 2: Core Services Grid */}
        <section>
          <h2 style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800, marginBottom: '24px' }}>Our Core Chartered Engineer Services in India</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ background: '#fef3c7', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#d97706' }}>
                <FileCheck2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>DGFT Advance Authorisation & EPCG</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Statutory certifications for Appendix 4E/4K input-output norms, EPCG Scheme Nexus verification, and SION fixation under the Ministry of Commerce.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ background: '#e0f2fe', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#0284c7' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Customs & Second-Hand Machinery</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Appraising residual useful life, present market value, and condition of used capital goods for customs clearance at all major Indian ports.
              </p>
            </div>

            <div style={{ background: '#fff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
              <div style={{ background: '#dcfce7', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: '#16a34a' }}>
                <Cpu size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>CEIG Solar Drawing Approvals</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Mandatory Chief Electrical Inspector to Government (CEIG) clearance for solar power plants, SLD approvals, and electrical safety certificates.
              </p>
            </div>

          </div>
        </section>

        {/* Section 3: Why choose MS Chartered Engineers? */}
        <section style={{ background: '#ffffff', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: 800, marginBottom: '20px' }}>Why Choose MS Chartered Engineers?</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="#16a34a" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#0f172a' }}>Pan-India Authority:</strong>
                <span style={{ color: '#475569', marginLeft: '6px' }}>Headquartered in Jaipur, we operate across Delhi NCR, Mumbai, Ahmedabad, Bengaluru, and all major industrial corridors.</span>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="#16a34a" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#0f172a' }}>Premium Credentials:</strong>
                <span style={{ color: '#475569', marginLeft: '6px' }}>Led by Er. Mukesh Singh, B.Tech from IIT Roorkee, ensuring the highest level of technical competence.</span>
              </div>
            </li>
            <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <CheckCircle2 color="#16a34a" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#0f172a' }}>Fast 24-48h Turnaround:</strong>
                <span style={{ color: '#475569', marginLeft: '6px' }}>We understand the urgency of customs clearance and export deadlines. We deliver fast, accurate, and legally robust reports.</span>
              </div>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
