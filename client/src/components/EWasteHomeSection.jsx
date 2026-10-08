import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sliders, ExternalLink, Leaf, PhoneCall } from 'lucide-react';

export default function EWasteHomeSection() {
  return (
    <section
      id="ewaste-section"
      style={{
        padding: '50px 20px',
        background: 'linear-gradient(180deg, #f0fdf4 0%, #f8fafc 100%)',
        borderTop: '1px solid #d1fae5',
        borderBottom: '1px solid #e2e8f0',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid #a7f3d0',
            boxShadow: '0 12px 35px -8px rgba(5, 150, 105, 0.12), 0 2px 8px rgba(0,0,0,0.03)',
            padding: '36px 30px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Heading & Details */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '9999px',
                padding: '4px 12px',
                color: '#065f46',
                fontSize: '0.76rem',
                fontWeight: 800,
                marginBottom: '14px',
                letterSpacing: '0.04em'
              }}
            >
              <Leaf size={14} color="#059669" />
              <span>CPCB STATUTORY COMPLIANCE · MOEFCC E-WASTE RULES 2022</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.25,
                marginBottom: '12px',
                letterSpacing: '-0.02em'
              }}
            >
              E-Waste Annual Return Filing &amp;{' '}
              <span style={{ color: '#059669' }}>EPR Compliance</span>
            </h2>

            <p
              style={{
                fontSize: '0.94rem',
                color: '#475569',
                lineHeight: 1.65,
                marginBottom: '20px'
              }}
            >
              Mandatory statutory disclosures on the official CPCB portal (eprewastecpcb.in). We audit sales ledgers, customs Bill of Entry weights, and Form 6 manifests for Importers, Brand Owners, and Manufacturers with Chartered Engineer attestation.
            </p>

            {/* Role Pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '24px'
              }}
            >
              {[
                '🚢 Importers & Brand Producers',
                '🏭 Domestic Manufacturers',
                '🔧 Refurbishers',
                '♻️ Registered Recyclers'
              ].map((role, i) => (
                <span
                  key={i}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    padding: '5px 10px',
                    borderRadius: '6px'
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="/e-waste-annual-return-filing"
                style={{
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  color: '#ffffff',
                  padding: '12px 22px',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.90rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(5, 150, 105, 0.35)',
                  transition: 'all 0.15s ease'
                }}
              >
                <span>Open E-Waste Compliance Portal</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/e-waste-annual-return-filing#quick-checker"
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  padding: '12px 18px',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.90rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sliders size={15} color="#059669" />
                <span>30-Sec Self-Audit Tool</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry & Highlights Card */}
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #e2e8f0',
                paddingBottom: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'inline-block',
                    boxShadow: '0 0 6px #10b981'
                  }}
                />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#047857', fontFamily: 'monospace' }}>
                  CPCB EPR PORTAL COMPLIANCE
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.70rem',
                  background: '#fef3c7',
                  color: '#92400e',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px'
                }}
              >
                DEADLINE: 30TH JUNE
              </span>
            </div>

            {/* Metric items */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.70rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Coverage</div>
                <div style={{ fontSize: '0.96rem', color: '#0284c7', fontWeight: 800 }}>106+ EEE Codes</div>
              </div>

              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.70rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Audit Lead</div>
                <div style={{ fontSize: '0.96rem', color: '#059669', fontWeight: 800 }}>IIT Roorkee / IEI</div>
              </div>
            </div>

            {/* Checklist points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              {[
                'Annual Return (Form 3) filing & quarterly ledger reconciliation',
                'Customs Bill of Entry (BOE) import weight verification',
                'EPR credit calculation & CPCB portal deficiency responses'
              ].map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Fast WhatsApp Help Line */}
            <div
              style={{
                marginTop: '6px',
                padding: '10px 14px',
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '0.80rem', color: '#065f46', fontWeight: 700 }}>
                Need immediate CPCB consultation?
              </span>
              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#059669',
                  fontSize: '0.80rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>WhatsApp Desk</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
