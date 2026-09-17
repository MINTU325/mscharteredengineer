import React, { useState } from 'react';
import { Zap, CheckCircle2, ShieldAlert, ArrowRight, Clock, FileCheck } from 'lucide-react';

export default function ComplianceChecker({ onOpenQuote }) {
  const [capacity, setCapacity] = useState('150');
  const [plantType, setPlantType] = useState('Industrial Rooftop Captive');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const evaluateCompliance = (cap) => {
    const val = parseFloat(cap) || 0;
    if (val <= 10) {
      return {
        category: "Low Voltage Micro Solar (Up to 10 kW)",
        ceigRequirement: "Exempt from physical CEIG officer visit in most states (DISCOM self-certification).",
        ceCertRequired: "Chartered Engineer stability certification recommended for factory sheds.",
        documents: [
          "DISCOM Approved Net-Metering Drawing",
          "Earthing Resistance Test Certificate",
          "Inverter Anti-Islanding Protection Certificate"
        ],
        timeline: "3 - 7 Working Days"
      };
    } else if (val <= 100) {
      return {
        category: "Commercial & Industrial Solar (11 kW to 100 kW)",
        ceigRequirement: "Mandatory CEIG drawing approval & electrical safety inspection prior to grid synchronization.",
        ceCertRequired: "Mandatory Chartered Engineer Stamped Single Line Diagram (SLD) & Structural Stability Certificate.",
        documents: [
          "Chartered Engineer Stamped Electrical SLD",
          "CEIG Safety Application & Challan",
          "Dual Earthing Pit Verification & Megger Test Report",
          "Lightning Protection (LA) Radius Coverage Certificate"
        ],
        timeline: "7 - 14 Working Days"
      };
    } else {
      return {
        category: "High Voltage (HT) / MW-Scale Solar Plant (> 100 kW)",
        ceigRequirement: "Mandatory statutory CEIG drawing approval, HT breaker safety clearance, and site physical audit.",
        ceCertRequired: "Mandatory Chartered Engineer Plant & Substation Nexus, Transformer Safety and Structural Audit.",
        documents: [
          "Comprehensive SLD with HT Breaker & Relay Settings",
          "CEIG Pre-Commissioning Safety Clearance Certificate",
          "Transformer Oil Breakdown Voltage (BDV) Report",
          "Plant Structural Stability & Wind Load Compliance Certificate"
        ],
        timeline: "14 - 21 Working Days"
      };
    }
  };

  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setResult(evaluateCompliance(capacity));
      setLoading(false);
    }, 200);
  };

  React.useEffect(() => {
    setResult(evaluateCompliance(capacity));
  }, []);

  return (
    <section id="solar-checker" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Zap size={15} />
            <span>Solar & Industrial Electrical Safety</span>
          </div>
          <h2 className="section-title">
            CEIG Solar & <span className="gradient-text">Statutory Clearance Guide</span>
          </h2>
          <p className="section-description">
            Quickly determine mandatory regulatory approvals, CEIG inspection prerequisites, and Chartered Engineer electrical drawing compliance for your solar plant.
          </p>
        </div>

        <div 
          className="glass-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <form onSubmit={handleCheck} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            alignItems: 'end',
            marginBottom: '32px'
          }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Solar Plant Capacity (kW)</label>
              <input 
                type="number" 
                className="form-control"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="e.g. 150"
                required
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Installation Type</label>
              <select 
                className="form-control"
                value={plantType}
                onChange={(e) => setPlantType(e.target.value)}
              >
                <option value="Industrial Rooftop Captive">Industrial Factory Rooftop (Captive)</option>
                <option value="Commercial Complex">Commercial Mall / Institutional Building</option>
                <option value="Ground Mounted MW Solar">Ground-Mounted Open Access / MW Solar</option>
                <option value="Agricultural Solar Pump">Solar Agri Pump / Distributed</option>
              </select>
            </div>

            <div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '48px' }}>
                <Zap size={16} />
                <span>Check Mandatory Approvals</span>
              </button>
            </div>
          </form>

          {/* Result Card */}
          {result && (
            <div style={{
              background: 'rgba(16, 33, 74, 0.6)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    Compliance Tier
                  </span>
                  <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginTop: '4px' }}>
                    {result.category}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  color: '#fbbf24',
                  fontWeight: 600
                }}>
                  <Clock size={16} />
                  <span>Estimated Time: {result.timeline}</span>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginBottom: '24px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600, marginBottom: '6px' }}>
                    ⚡ CEIG Statutory Clearance Status
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {result.ceigRequirement}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px'
                }}>
                  <div style={{ fontSize: '0.82rem', color: '#f59e0b', fontWeight: 600, marginBottom: '6px' }}>
                    📜 Chartered Engineer Role
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    {result.ceCertRequired}
                  </p>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Mandatory Submission Package:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px', marginBottom: '24px' }}>
                  {result.documents.map((doc, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#e2e8f0' }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => onOpenQuote('CEIG Solar Clearance & SLD')}
                  className="btn btn-gold"
                  style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                >
                  <FileCheck size={16} />
                  <span>Request CEIG Drawing Preparation & Liaison</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
