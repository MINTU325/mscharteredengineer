import React from 'react';
import { Award, CheckCircle, Shield, FileCheck, Scale, Landmark, Building, Zap, Flame, ShieldAlert } from 'lucide-react';

export default function Credentials() {
  const recognizedEntities = [
    { name: "Commercial & Nationalized Banks", desc: "Approved for machinery hypothecation & asset valuation" },
    { name: "Customs & Central Excise", desc: "Import-export appraisal, machinery nexus & DIFT compliance" },
    { name: "Directorate General of Foreign Trade (DGFT)", desc: "Advance Authorisation, EPCG scheme & capital goods audit" },
    { name: "Bureau of Energy Efficiency (BEE)", desc: "Certified Energy Manager & statutory energy conservation audits" },
    { name: "Electrical Inspectorate / CEIG", desc: "Chartered Electrical Safety Engineer (CESE) & HT/LT safety audits" },
    { name: "Directorate of Factories & Boilers", desc: "Competent Person under Factories Act 1948 (vessels, cranes & safety)" },
    { name: "National Safety Council of India (NSCI)", desc: "NSAT authorized comprehensive industrial safety & EHS audits" },
    { name: "Courts & Insolvency (IBC/NCLT)", desc: "Statutory liquidation value & fair market value assessment" }
  ];

  return (
    <section id="credentials" className="section" style={{ background: 'rgba(11, 23, 54, 0.65)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '48px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-badge gold">
            <Award size={15} />
            <span>RECOGNITION | TRUST | PROFESSIONAL EXCELLENCE</span>
          </div>
          <h2 className="section-title">
            Our <span className="gold-gradient-text">Statutory Credentials</span>
          </h2>
          <p className="section-description">
            Certified engineering expertise backed by the <strong>Institution of Engineers (India)</strong>, BEE, CEIG, and registered statutory authorities.
          </p>
        </div>

        {/* Credential Seal Card */}
        <div 
          className="glass-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto 32px auto',
            background: 'linear-gradient(135deg, rgba(16, 33, 74, 0.9) 0%, rgba(10, 20, 48, 0.9) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), inset 0 0 40px rgba(245, 158, 11, 0.05)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* Seal / Badge Graphic */}
            <div style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{
                width: '180px',
                height: '180px',
                margin: '0 auto',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(24, 90, 219, 0.15) 70%)',
                border: '3px dashed rgba(245, 158, 11, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Shield size={46} color="#f59e0b" style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.05em' }}>
                  CHARTERED
                </div>
                <div style={{ fontSize: '0.72rem', color: '#fbbf24', fontWeight: 600 }}>
                  ENGINEER (INDIA)
                </div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '4px' }}>
                  IEI MECHANICAL
                </div>
              </div>
              <div style={{ marginTop: '16px', fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 600 }}>
                Corporate Member of IEI (India)
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Established under Royal Charter 1935
              </div>
            </div>

            {/* Credential Points */}
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '16px' }}>
                Nationally Recognized Authority
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', marginBottom: '20px', lineHeight: 1.6 }}>
                &ldquo;Certified engineering expertise backed by the Institution of Engineers (India). Our certifications and statutory audit reports are officially accepted across government ministries, DISCOMs, customs hubs, and banking consortiums.&rdquo;
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>Chartered Engineer (India) — IEI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>Chartered Electrical Safety Engineer (CESE)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>Certified Energy Manager — BEE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>Competent Person — Factories & Boilers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>NSCI / NSAT Authorized Safety Auditor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" />
                  <span style={{ fontSize: '0.88rem', color: '#e2e8f0' }}>B.Tech Mechanical, IIT Roorkee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accepted Authorities Grid */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Statutory Acceptance & Regulatory Validity
          </h4>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px'
        }}>
          {recognizedEntities.map((entity, idx) => (
            <div key={idx} className="glass-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  background: 'rgba(24, 90, 219, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '10px',
                  padding: '10px',
                  color: '#38bdf8',
                  flexShrink: 0
                }}>
                  {idx === 0 && <Landmark size={22} />}
                  {idx === 1 && <FileCheck size={22} />}
                  {idx === 2 && <Shield size={22} />}
                  {idx === 3 && <Zap size={22} />}
                  {idx === 4 && <ShieldAlert size={22} />}
                  {idx === 5 && <Building size={22} />}
                  {idx === 6 && <Award size={22} />}
                  {idx === 7 && <Scale size={22} />}
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '4px' }}>{entity.name}</h5>
                  <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5 }}>{entity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
