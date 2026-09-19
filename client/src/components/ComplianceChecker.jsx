import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, ShieldAlert, ArrowRight, Clock, FileCheck, Shield, Sparkles, Building2, AlertTriangle, Layers } from 'lucide-react';

export default function ComplianceChecker({ onOpenQuote }) {
  const [capacity, setCapacity] = useState('150');
  const [plantType, setPlantType] = useState('Industrial Rooftop Captive');
  const [voltageLevel, setVoltageLevel] = useState('11 kV (HT Supply)');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const evaluateCompliance = (cap, type, vLevel) => {
    const val = parseFloat(cap) || 0;
    if (val <= 10) {
      return {
        category: "Low Voltage Micro Solar (Up to 10 kW)",
        ceigRequirement: "Exempt from physical CEIG officer visit in most states (DISCOM self-certification tier).",
        ceCertRequired: "Chartered Engineer stability certification recommended for factory sheds & mounting structures.",
        voltage: vLevel || "415V LT",
        feederType: "LT Grid Connection",
        inspectionType: "DISCOM Inspector Self-Declaration",
        documents: [
          "DISCOM Approved Net-Metering Single Line Diagram (SLD)",
          "Earthing Pit Resistance Test Certificate (< 5 Ohms)",
          "Inverter Anti-Islanding & Type Test Certificate",
          "Factory Roof Structural Stability Undertaking"
        ],
        feesEstimate: "Nominal DISCOM Application & Inspection Fee (~ ₹1,500 - ₹3,000)",
        timeline: "3 - 7 Working Days"
      };
    } else if (val <= 100) {
      return {
        category: "Commercial & Industrial Solar (11 kW to 100 kW)",
        ceigRequirement: "Mandatory CEIG drawing approval & electrical safety inspection prior to grid synchronization.",
        ceCertRequired: "Mandatory Chartered Engineer Stamped Single Line Diagram (SLD) & Structural Load Stability Certificate.",
        voltage: vLevel || "11 kV HT",
        feederType: "Dedicated LT / 11kV Feeder",
        inspectionType: "Mandatory CEIG Field Safety Officer Site Inspection",
        documents: [
          "Chartered Engineer Stamped Electrical SLD with Cable Sizing",
          "CEIG Safety Application, Inspection Form & Govt Treasury Challan",
          "Dual Earthing Pit Verification & Megger Resistance Report",
          "Lightning Protection (LA) Radius Coverage & Risk Assessment Report",
          "Structural Stability & Wind Load Certificate (Up to 150 km/h)"
        ],
        feesEstimate: "State Govt Inspection Fee + CEIG Statutory Treasury Challan",
        timeline: "7 - 14 Working Days"
      };
    } else {
      return {
        category: "High Voltage (HT) / MW-Scale Solar Plant (> 100 kW to MW Scale)",
        ceigRequirement: "Mandatory statutory CEIG drawing approval, HT breaker safety clearance, CT/PT calibration, and physical site audit.",
        ceCertRequired: "Mandatory Chartered Engineer Substation Nexus, HT Transformer BDV Safety, and Complete MEP Structural Audit.",
        voltage: vLevel || "33 kV / 132 kV HT",
        feederType: "Express HT Feeder / Substation Bay",
        inspectionType: "Chief Electrical Inspector (CEIG) Statutory Board Audit",
        documents: [
          "Comprehensive SLD with HT VCB Breaker & Protection Relay Settings",
          "CEIG Pre-Commissioning Electrical Safety Clearance Certificate",
          "Transformer Oil Breakdown Voltage (BDV) & Tan Delta Test Report",
          "Plant Structural Stability, Seismic & Wind Load Compliance Certificate",
          "Grid Interconnection Feasibility & Relay Co-ordination Study"
        ],
        feesEstimate: "Statutory CEIG Slab-based Fee + HT Metering Bay Verification",
        timeline: "14 - 21 Working Days"
      };
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Fetch live calculations from backend API
      const res = await fetch('/api/tools/ceig-readiness', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plantCapacityKw: capacity,
          installationType: plantType,
          connectionVoltage: voltageLevel
        })
      });
      const apiData = await res.json();
      
      if (apiData.success) {
        const localDetails = evaluateCompliance(capacity, plantType, voltageLevel);
        setResult({
          ...localDetails,
          category: apiData.data.approvalCategory || localDetails.category,
          timeline: apiData.data.processingTimeline || localDetails.timeline,
          backendCertificates: apiData.data.requiredCertificates
        });
      } else {
        setResult(evaluateCompliance(capacity, plantType, voltageLevel));
      }
    } catch (err) {
      setResult(evaluateCompliance(capacity, plantType, voltageLevel));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setResult(evaluateCompliance(capacity, plantType, voltageLevel));
  }, []);

  return (
    <section id="solar-checker" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <Zap size={15} />
            <span>Solar & Industrial Electrical Safety</span>
          </div>
          <h2 className="section-title">
            CEIG Solar & <span className="gradient-text">Statutory Clearance Guide</span>
          </h2>
          <p className="section-description">
            Quickly determine mandatory regulatory approvals, CEIG inspection prerequisites, electrical drawing compliance, and Chartered Engineer certification requirements for your solar plant.
          </p>
        </div>

        <div 
          className="glass-card"
          style={{
            maxWidth: '1050px',
            margin: '0 auto',
            padding: '32px'
          }}
        >
          <form onSubmit={handleCheck} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
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
                min="1"
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

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Grid Connection Voltage</label>
              <select 
                className="form-control"
                value={voltageLevel}
                onChange={(e) => setVoltageLevel(e.target.value)}
              >
                <option value="415V LT Supply">415V 3-Phase LT Supply</option>
                <option value="11 kV (HT Supply)">11 kV HT Supply</option>
                <option value="33 kV (EHT Supply)">33 kV EHT Supply</option>
                <option value="132 kV Substation Bay">132 kV Grid Substation</option>
              </select>
            </div>

            <div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={loading}
                style={{ width: '100%', height: '48px', justifyContent: 'center' }}
              >
                {loading ? <Sparkles size={18} className="spin-slow" /> : <Zap size={18} />}
                <span>Calculate Mandatory Clearances</span>
              </button>
            </div>
          </form>

          {/* Result Card */}
          {result && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 33, 74, 0.75) 0%, rgba(7, 14, 30, 0.9) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              borderRadius: 'var(--radius-lg)',
              padding: '32px'
            }}>
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span className="section-badge gold" style={{ padding: '3px 10px', fontSize: '0.72rem' }}>
                      <Layers size={13} />
                      STATUTORY CEIG MATRIX
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                      Voltage: {result.voltage}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.45rem', color: '#ffffff' }}>
                    {result.category}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.84rem',
                  color: '#fbbf24',
                  fontWeight: 600
                }}>
                  <Clock size={16} />
                  <span>Estimated Clearance Timeline: {result.timeline}</span>
                </div>
              </div>

              {/* Grid 2-col info cards */}
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
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#38bdf8', fontWeight: 700, marginBottom: '8px' }}>
                    <Zap size={16} />
                    <span>CEIG Statutory Inspection Rule:</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                    {result.ceigRequirement}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#fbbf24', fontWeight: 700, marginBottom: '8px' }}>
                    <Shield size={16} />
                    <span>Chartered Engineer Certification Scope:</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                    {result.ceCertRequired}
                  </p>
                </div>
              </div>

              {/* Document Package Section */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.84rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  Mandatory Submission Package (CEIG & DISCOM Dossier):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                  {result.documents.map((doc, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px 14px',
                      fontSize: '0.86rem',
                      color: '#e2e8f0',
                      lineHeight: 1.45
                    }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Callout & Modal trigger */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px dashed rgba(255, 255, 255, 0.12)'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  💡 Need CEIG drawing approval or Chartered Engineer stamped SLD for your solar plant?
                </div>

                <button
                  onClick={() => onOpenQuote('Chartered Engineer Services')}
                  className="btn btn-gold"
                  style={{ padding: '12px 26px', fontSize: '0.9rem' }}
                >
                  <FileCheck size={17} />
                  <span>Request CEIG Drawing Approval &amp; SLD</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
