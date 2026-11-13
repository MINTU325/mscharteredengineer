import React from 'react';
import { Award, CheckCircle2, Shield, FileCheck, Scale, Landmark, Building, Zap, ShieldAlert, Check } from 'lucide-react';

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
    <section id="credentials" style={{ background: '#f1f5f9', backgroundImage: 'radial-gradient(#cbd5e1 1.2px, transparent 1.2px)', backgroundSize: '24px 24px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '42px 0' }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '6px',
              color: '#0284c7',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              marginBottom: '10px'
            }}
          >
            <Award size={13} />
            <span>ACCREDITATION &amp; STATUTORY VALIDITY</span>
          </div>

          <h2 style={{ color: '#0f172a', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            Our Statutory <span style={{ color: '#0284c7' }}>Credentials</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Certified engineering expertise backed by the <strong>Institution of Engineers (India)</strong>, BEE, CEIG, and registered statutory authorities.
          </p>
        </div>

        {/* Credential Seal Card */}
        <div 
          style={{
            maxWidth: '1080px',
            margin: '0 auto 28px auto',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '32px 28px'
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
                width: '170px',
                height: '170px',
                margin: '0 auto',
                borderRadius: '50%',
                background: '#f8fafc',
                border: '2px solid rgba(56, 189, 248, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={38} style={{ color: '#0284c7', marginBottom: '6px' }} />
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f172a', letterSpacing: '0.04em' }}>
                  CHARTERED
                </div>
                <div style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 600 }}>
                  ENGINEER (INDIA)
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '3px', fontWeight: 500 }}>
                  IEI MECHANICAL · MIE
                </div>
              </div>
              <div style={{ marginTop: '14px', fontSize: '0.92rem', color: '#0f172a', fontWeight: 600 }}>
                Corporate Member of IEI (India)
              </div>
              <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                Established under Royal Charter 1935
              </div>
            </div>

            {/* Credential Points */}
            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: 600, margin: '0 0 10px 0' }}>
                Nationally Recognized Authority
              </h3>
              <p style={{ color: '#475569', fontSize: '0.92rem', margin: '0 0 20px 0', lineHeight: 1.6 }}>
                Certified engineering expertise backed by the Institution of Engineers (India). Our certifications and statutory audit reports are officially accepted across government ministries, DISCOMs, customs hubs, and banking consortiums.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>Chartered Engineer (India) — IEI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>Chartered Electrical Safety Engineer (CESE)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>Certified Energy Manager — BEE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>Competent Person — Factories &amp; Boilers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>NSCI / NSAT Authorized Safety Auditor</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#1e293b', fontWeight: 600 }}>B.Tech Mechanical, IIT Roorkee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accepted Authorities Grid */}
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <h4 style={{ fontSize: '0.80rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, margin: 0 }}>
            Statutory Acceptance &amp; Regulatory Validity
          </h4>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '14px'
        }}>
          {recognizedEntities.map((entity, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px',
                transition: 'border-color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#e2e8f0'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '8px',
                  color: '#0284c7',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {idx === 0 && <Landmark size={18} />}
                  {idx === 1 && <FileCheck size={18} />}
                  {idx === 2 && <Shield size={18} />}
                  {idx === 3 && <Zap size={18} />}
                  {idx === 4 && <ShieldAlert size={18} />}
                  {idx === 5 && <Building size={18} />}
                  {idx === 6 && <Award size={18} />}
                  {idx === 7 && <Scale size={18} />}
                </div>
                <div>
                  <h5 style={{ fontSize: '0.90rem', color: '#0f172a', fontWeight: 600, margin: '0 0 4px 0' }}>{entity.name}</h5>
                  <p style={{ fontSize: '0.80rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>{entity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
