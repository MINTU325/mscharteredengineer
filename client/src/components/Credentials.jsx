import React from 'react';
import { Award, CheckCircle, Shield, FileCheck, Scale, Landmark, Building, Zap, Flame, ShieldAlert } from 'lucide-react';

export default function Credentials() {
  const recognizedEntities = [
    { name: "Commercial & Nationalized Banks", desc: "Approved for machinery hypothecation & asset valuation" },
    { name: "Income Tax Department & CBDT", desc: "Capital gains 50C, Fair Market Value as on 01-04-2001 & ITAT appeals" },
    { name: "Customs & Central Excise", desc: "Import-export appraisal, machinery nexus & DGFT compliance" },
    { name: "Directorate General of Foreign Trade (DGFT)", desc: "Advance Authorisation, EPCG scheme & capital goods audit" },
    { name: "Bureau of Energy Efficiency (BEE)", desc: "Certified Energy Manager & statutory energy conservation audits" },
    { name: "Electrical Inspectorate / CEIG", desc: "Chartered Electrical Safety Engineer (CESE) & HT/LT safety audits" },
    { name: "Directorate of Factories & Boilers", desc: "Competent Person under Factories Act 1948 (vessels, cranes & safety)" },
    { name: "Courts & Insolvency (IBC/NCLT)", desc: "Statutory liquidation value & fair market value assessment" }
  ];

  return (
    <section id="credentials" className="section" style={{ background: '#FAF8F5', borderTop: '1px solid #E8E2D8', borderBottom: '1px solid #E8E2D8', padding: '30px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '16px', textAlign: 'center' }}>
          <div 
            className="section-badge"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: '9999px',
              color: '#B45309',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '6px'
            }}
          >
            <Award size={14} />
            <span>RECOGNITION | TRUST | PROFESSIONAL EXCELLENCE</span>
          </div>
          <h2 className="section-title" style={{ color: '#0F172A', fontSize: 'clamp(1.7rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '2px', marginBottom: '6px' }}>
            Our <span style={{ color: '#B45309' }}>Statutory Credentials</span>
          </h2>
          <p className="section-description" style={{ color: '#475569', fontSize: '0.94rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.55 }}>
            Certified engineering expertise backed by the <strong>Institution of Engineers (India)</strong>, BEE, CEIG, and registered statutory authorities.
          </p>
        </div>

        {/* Credential Seal Card */}
        <div 
          style={{
            maxWidth: '1000px',
            margin: '0 auto 20px auto',
            background: '#FFFFFF',
            border: '1px solid #E8E2D8',
            borderRadius: '20px',
            padding: 'clamp(20px, 3vw, 28px)',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)'
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
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.04) 70%)',
                border: '3px dashed #D97706',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <Shield size={44} color="#D97706" style={{ marginBottom: '6px' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#0F172A', letterSpacing: '0.05em' }}>
                  CHARTERED
                </div>
                <div style={{ fontSize: '0.74rem', color: '#B45309', fontWeight: 800 }}>
                  ENGINEER (INDIA)
                </div>
                <div style={{ fontSize: '0.66rem', color: '#64748b', marginTop: '4px', fontWeight: 600 }}>
                  IEI MECHANICAL
                </div>
              </div>
              <div style={{ marginTop: '16px', fontSize: '0.94rem', color: '#0F172A', fontWeight: 700 }}>
                Corporate Member of IEI (India)
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                Established under Royal Charter 1935
              </div>
            </div>

            {/* Credential Points */}
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#0F172A', fontWeight: 800, marginBottom: '12px' }}>
                Nationally Recognized Authority
              </h3>
              <p style={{ color: '#475569', fontSize: '0.94rem', marginBottom: '20px', lineHeight: 1.6 }}>
                &ldquo;Certified engineering expertise backed by the Institution of Engineers (India). Our certifications and statutory audit reports are officially accepted across government ministries, DISCOMs, customs hubs, and banking consortiums.&rdquo;
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>Chartered Engineer (India) — IEI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>Chartered Electrical Safety Engineer (CESE)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>Certified Energy Manager — BEE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>Competent Person — Factories &amp; Boilers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>NSCI / NSAT Authorized Safety Auditor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" />
                  <span style={{ fontSize: '0.88rem', color: '#1E293B', fontWeight: 600 }}>B.Tech Mechanical, IIT Roorkee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accepted Authorities Grid */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.90rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800 }}>
            Statutory Acceptance &amp; Regulatory Validity
          </h4>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px'
        }}>
          {recognizedEntities.map((entity, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8E2D8',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '10px',
                  padding: '10px',
                  color: '#1D4ED8',
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
                  <h5 style={{ fontSize: '0.96rem', color: '#0F172A', fontWeight: 700, marginBottom: '4px' }}>{entity.name}</h5>
                  <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>{entity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
