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
    <section id="contact" className="section" style={{ background: 'rgba(7, 14, 30, 0.7)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <Globe size={15} />
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
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(24, 90, 219, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#38bdf8'
              }}>
                <MapPin size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>Central Headquarters</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--accent-gold)' }}>Jaipur, Rajasthan - 302019</div>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Our Jaipur office coordinates on-site technical audits, statutory documentation, DGFT and customs liaisons, and bankable DPR engineering throughout Rajasthan and North India.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              <a 
                href="tel:+919158658885" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Direct Telephone Helpline</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>+91 91586 58885</div>
                </div>
              </a>

              <a 
                href="mailto:ms.charteredengineer@gmail.com" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '12px 16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Official Statutory Correspondence</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>ms.charteredengineer@gmail.com</div>
                </div>
              </a>
            </div>

            <button 
              onClick={() => onOpenQuote()}
              className="btn btn-gold"
              style={{ width: '100%', padding: '14px' }}
            >
              <span>Schedule On-Site Inspection</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Interactive Pan-India Regional Coverage */}
          <div className="glass-card gold-accent">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  Active Operational Corridors
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginTop: '2px' }}>
                  Pan-India Field Inspections
                </h3>
              </div>
              <span style={{
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#93c5fd',
                fontWeight: 600
              }}>
                All India Acceptance
              </span>
            </div>

            {/* Zone Selector Tabs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {zones.map((z) => (
                <button
                  key={z.name}
                  onClick={() => setActiveZone(z.name)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeZone === z.name ? 'var(--accent-gold)' : 'rgba(255,255,255,0.08)',
                    background: activeZone === z.name ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.02)',
                    color: activeZone === z.name ? '#fbbf24' : '#94a3b8',
                    transition: 'var(--transition)'
                  }}
                >
                  {z.name}
                </button>
              ))}
            </div>

            {/* Selected Zone Content */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>
                Operational Scope:
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '16px' }}>
                {currentZoneData.specialty}
              </p>

              <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                Key Industrial Hubs Covered:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentZoneData.coverage.map((city, cIdx) => (
                  <span 
                    key={cIdx} 
                    style={{
                      padding: '5px 12px',
                      background: 'rgba(24, 90, 219, 0.15)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.78rem',
                      color: '#e2e8f0'
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
              padding: '12px 16px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 'var(--radius-md)'
            }}>
              <Shield size={20} color="#10b981" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                Chartered Engineer site visit mobilization within <strong>24 to 48 hours</strong> across all Tier-1 and Tier-2 industrial zones.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
