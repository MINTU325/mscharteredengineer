import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Shield, Building, Compass, ArrowRight } from 'lucide-react';

export default function PanIndiaPresence({ onOpenQuote }) {
  const [activeZone, setActiveZone] = useState('North & Rajasthan');

  const zones = [
    {
      name: "North & Rajasthan",
      hq: "Jaipur Central HQ (PIN: 302019)",
      coverage: ["Jaipur", "Bhiwadi Industrial Area", "Neemrana Japanese Zone", "Kota", "Jodhpur", "Udaipur", "Delhi NCR", "Gurugram", "Faridabad"],
      specialty: "Solar CEIG clearings, textile mills, auto ancillary plants & industrial warehouse structural certifications."
    },
    {
      name: "West India (Gujarat & Maharashtra)",
      hq: "Regional Liaison Desk",
      coverage: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Mumbai MMR", "Pune Chakan Belt", "Nashik", "Nagpur"],
      specialty: "Heavy CNC machinery valuation, port customs import certifications, chemical and pharmaceutical DPRs."
    },
    {
      name: "Central & East India",
      hq: "Regional Project Operations",
      coverage: ["Indore", "Bhopal", "Pithampur SEZ", "Raipur", "Kolkata", "Jamshedpur", "Bhubaneswar"],
      specialty: "Mining & mineral processing equipment, steel plants, power installations, and bank asset appraisal."
    },
    {
      name: "South India Hub",
      hq: "Southern Operations Liaison",
      coverage: ["Bengaluru", "Chennai", "Hyderabad", "Coimbatore", "Visakhapatnam"],
      specialty: "High-tech manufacturing, export unit nexus certification, and green energy audits."
    }
  ];

  const currentZoneData = zones.find(z => z.name === activeZone) || zones[0];

  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '16px' }}>
          <div className="section-badge gold">
            <Globe size={14} />
            <span>PAN INDIA PRESENCE | JAIPUR HEADQUARTERS</span>
          </div>
          <h2 className="section-title">
            Nationwide Reach, <span className="gold-gradient-text">Local Precision</span>
          </h2>
          <p className="section-description">
            Headquartered in Jaipur, Rajasthan (302019) with extensive chartered engineering field inspections and statutory practice across all Indian industrial corridors.
          </p>
        </div>

        <div className="presence-grid">
          {/* Left Column: Official Headquarters Card */}
          <div className="glass-card presence-card" style={{ background: '#ffffff', border: '1px solid #E8E2D8', boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1d4ed8'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>
                  MS Chartered Engineers <span style={{ fontSize: '0.85rem', color: '#1d4ed8', fontWeight: 600 }}>(IIT Roorkee)</span>
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#b45309', fontWeight: 700 }}>
                  Expert in Plant &amp; Asset Valuation | Jaipur, Rajasthan - 302019
                </div>
              </div>
            </div>

            <p style={{ color: '#475569', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '22px' }}>
              Our Jaipur office coordinates on-site technical audits, statutory documentation, DGFT and customs liaisons, and bankable DPR engineering throughout Rajasthan and North India.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <a 
                href="tel:+919158658885" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>Direct Telephone Helpline</div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a' }}>+91 91586 58885</div>
                </div>
              </a>

              <a 
                href="mailto:ms.charteredengineer@gmail.com" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>Official Statutory Correspondence</div>
                  <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#0f172a' }}>ms.charteredengineer@gmail.com</div>
                </div>
              </a>
            </div>

            <button 
              onClick={() => onOpenQuote()}
              className="btn btn-gold"
              style={{ width: '100%', padding: '12px', fontSize: '0.90rem', justifyContent: 'center' }}
            >
              <span>Schedule On-Site Inspection</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Interactive Pan-India Regional Coverage */}
          <div className="glass-card presence-card" style={{ background: '#ffffff', border: '1px solid #E8E2D8', boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                  Active Operational Corridors
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 800, marginTop: '2px' }}>
                  Pan-India Field Inspections
                </h3>
              </div>
              <span style={{
                fontSize: '0.74rem',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: '#eff6ff',
                color: '#1d4ed8',
                fontWeight: 700,
                border: '1px solid #bfdbfe'
              }}>
                All India Acceptance
              </span>
            </div>

            {/* Zone Selector Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
              {zones.map((z) => (
                <button
                  key={z.name}
                  onClick={() => setActiveZone(z.name)}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.80rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeZone === z.name ? '#1e40af' : '#cbd5e1',
                    background: activeZone === z.name ? '#1e40af' : '#ffffff',
                    color: activeZone === z.name ? '#ffffff' : '#475569',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    transition: 'var(--transition)'
                  }}
                >
                  {z.name}
                </button>
              ))}
            </div>

            {/* Selected Zone Content */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 'var(--radius-md)',
              padding: '18px',
              marginBottom: '16px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '0.80rem', color: '#1d4ed8', fontWeight: 700, marginBottom: '6px' }}>
                Operational Scope:
              </div>
              <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.6, marginBottom: '14px' }}>
                {currentZoneData.specialty}
              </p>

              <div style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '8px' }}>
                Key Industrial Hubs Covered:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {currentZoneData.coverage.map((city, cIdx) => (
                  <span 
                    key={cIdx} 
                    style={{
                      padding: '4px 10px',
                      background: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.76rem',
                      color: '#1e40af',
                      fontWeight: 500
                    }}
                  >
                    📍 {city}
                  </span>
                ))}
              </div>
            </div>

            {/* National Dispatch Promise */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '11px 14px',
              background: '#ecfdf5',
              border: '1px solid #a7f3d0',
              borderRadius: 'var(--radius-md)'
            }}>
              <Shield size={18} color="#059669" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.80rem', color: '#065f46', lineHeight: 1.45 }}>
                Chartered Engineer site visit mobilization within <strong>24 to 48 hours</strong> across all Tier-1 and Tier-2 industrial zones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
