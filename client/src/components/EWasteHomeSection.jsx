import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Leaf } from 'lucide-react';

export default function EWasteHomeSection() {
  return (
    <section id="ewaste-section" className="ewaste-home-section">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div className="ewaste-home-card">
          
          {/* Left Column: Heading & Details */}
          <div className="ewaste-left-col">
            <div className="ewaste-badge">
              <Leaf size={14} color="#059669" style={{ flexShrink: 0 }} />
              <span>CPCB STATUTORY COMPLIANCE &bull; MOEFCC E-WASTE RULES 2022</span>
            </div>

            <h2 className="ewaste-title">
              E-Waste Annual Return Filing &amp;{' '}
              <span style={{ color: '#059669' }}>EPR Compliance</span>
            </h2>

            <p className="ewaste-desc">
              Mandatory statutory disclosures on the official CPCB portal (eprewastecpcb.in). We audit sales ledgers, customs Bill of Entry weights, and Form 6 manifests for Importers, Brand Owners, and Manufacturers with Chartered Engineer attestation.
            </p>

            {/* Role Pills */}
            <div className="ewaste-role-pills">
              {[
                '🚢 Importers & Brand Producers',
                '🏭 Domestic Manufacturers',
                '🔧 Refurbishers',
                '♻️ Registered Recyclers'
              ].map((role, i) => (
                <span key={i} className="ewaste-role-pill">
                  {role}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="ewaste-ctas">
              <a href="/e-waste-annual-return-filing" className="ewaste-btn-primary">
                <span>Open E-Waste Compliance Portal</span>
                <ArrowRight size={16} style={{ flexShrink: 0 }} />
              </a>

              <a href="/e-waste-annual-return-filing#quick-checker" className="ewaste-btn-secondary">
                <Sliders size={15} color="#059669" style={{ flexShrink: 0 }} />
                <span>30-Sec Self-Audit Tool</span>
              </a>
            </div>
          </div>

          {/* Right Column: Telemetry & Highlights Card */}
          <div className="ewaste-telemetry-card">
            <div className="ewaste-telemetry-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    display: 'inline-block',
                    boxShadow: '0 0 6px #10b981',
                    flexShrink: 0
                  }}
                />
                <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#047857', fontFamily: 'monospace' }}>
                  CPCB EPR PORTAL COMPLIANCE
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  background: '#fef3c7',
                  color: '#92400e',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap'
                }}
              >
                DEADLINE: 30TH JUNE
              </span>
            </div>

            {/* Metric items */}
            <div className="ewaste-metric-grid">
              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Coverage</div>
                <div style={{ fontSize: '0.94rem', color: '#0284c7', fontWeight: 800 }}>106+ EEE Codes</div>
              </div>

              <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Audit Lead</div>
                <div style={{ fontSize: '0.94rem', color: '#059669', fontWeight: 800 }}>IIT Roorkee / IEI</div>
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
                  <span style={{ lineHeight: 1.45 }}>{pt}</span>
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
              <span style={{ fontSize: '0.78rem', color: '#065f46', fontWeight: 700 }}>
                Need immediate CPCB consultation?
              </span>
              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20CHARTERED%20ENGINEERS%2C%20I%20need%20assistance%20with%20E-Waste%20Annual%20Return%20Filing%20%2F%20EPR%20Compliance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#059669',
                  fontSize: '0.78rem',
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
