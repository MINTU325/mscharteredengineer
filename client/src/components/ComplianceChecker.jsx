import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle2, ShieldAlert, ArrowRight, Clock, FileCheck, Shield, Sparkles, Building2, AlertTriangle, Layers } from 'lucide-react';

const SOLAR_PRESETS = [
  { label: '10 kW Rooftop LT', cap: '10', type: 'Industrial Rooftop Captive', voltage: '415V LT Supply' },
  { label: '50 kW Commercial', cap: '50', type: 'Commercial Complex', voltage: '415V LT Supply' },
  { label: '150 kW Factory HT', cap: '150', type: 'Industrial Rooftop Captive', voltage: '11 kV (HT Supply)' },
  { label: '1 MW Ground Open-Access', cap: '1000', type: 'Ground Mounted MW Solar', voltage: '33 kV (EHT Supply)' }
];

export default function ComplianceChecker({ onOpenQuote, lightMode = false }) {
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

  const handleApplyPreset = (p) => {
    setCapacity(p.cap);
    setPlantType(p.type);
    setVoltageLevel(p.voltage);
    setResult(evaluateCompliance(p.cap, p.type, p.voltage));
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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
    <section 
      id="solar-checker" 
      className="section" 
      style={{ 
        background: lightMode ? 'transparent' : 'transparent', 
        borderTop: lightMode ? 'none' : '1px solid rgba(255,255,255,0.06)', 
        padding: lightMode ? '16px 0 32px 0' : '52px 0',
        color: lightMode ? '#0f172a' : '#f8fafc'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '24px' }}>
          <div 
            className="section-badge" 
            style={{
              background: lightMode ? '#eff6ff' : 'rgba(245, 158, 11, 0.12)',
              border: `1px solid ${lightMode ? '#bfdbfe' : 'rgba(245, 158, 11, 0.35)'}`,
              color: lightMode ? '#1d4ed8' : '#fbbf24',
              borderRadius: '9999px',
              padding: '5px 14px',
              fontSize: '0.80rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Zap size={15} />
            <span>Solar &amp; Industrial Electrical Safety</span>
          </div>
          <h2 
            className="section-title"
            style={{
              color: lightMode ? '#0f172a' : '#ffffff',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              lineHeight: 1.25,
              marginTop: '8px'
            }}
          >
            CEIG Solar &amp; <span style={{ color: lightMode ? '#0284c7' : '#38bdf8' }}>Statutory Clearance Guide</span>
          </h2>
          <p 
            className="section-description"
            style={{
              color: lightMode ? '#475569' : '#cbd5e1',
              fontSize: '0.96rem',
              lineHeight: 1.6,
              maxWidth: '740px',
              margin: '0 auto'
            }}
          >
            Quickly determine mandatory regulatory approvals, CEIG inspection prerequisites, electrical drawing compliance, and Chartered Engineer certification requirements for your solar plant.
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '26px'
        }}>
          <span style={{ fontSize: '0.80rem', fontWeight: 700, color: lightMode ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '4px' }}>
            ⚡ Solar Presets:
          </span>
          {SOLAR_PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPreset(p)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.80rem',
                fontWeight: 600,
                cursor: 'pointer',
                background: lightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.06)',
                border: lightMode ? '1px solid #cbd5e1' : '1px solid rgba(255, 255, 255, 0.15)',
                color: lightMode ? '#1e293b' : '#e2e8f0',
                boxShadow: lightMode ? '0 2px 6px rgba(0, 0, 0, 0.04)' : 'none',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0284c7';
                e.currentTarget.style.color = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.color = lightMode ? '#1e293b' : '#e2e8f0';
              }}
            >
              <span>{p.label}</span>
            </button>
          ))}
        </div>

        {/* Main Card */}
        <div 
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: 'clamp(20px, 3.5vw, 36px)',
            background: lightMode ? '#ffffff' : 'rgba(15, 26, 54, 0.75)',
            border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.1)'}`,
            borderRadius: '20px',
            boxShadow: lightMode ? '0 10px 30px rgba(15, 23, 42, 0.05)' : '0 10px 30px rgba(0, 0, 0, 0.35)',
            boxSizing: 'border-box'
          }}
        >
          <form onSubmit={handleCheck} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px',
            alignItems: 'end',
            marginBottom: '28px'
          }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                Solar Plant Capacity (kW)
              </label>
              <input 
                type="number" 
                className="form-control"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="e.g. 150"
                min="1"
                required
                style={{
                  background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                  color: lightMode ? '#0f172a' : '#ffffff'
                }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                Installation Type
              </label>
              <select 
                className="form-control"
                value={plantType}
                onChange={(e) => setPlantType(e.target.value)}
                style={{
                  background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                  color: lightMode ? '#0f172a' : '#ffffff'
                }}
              >
                <option value="Industrial Rooftop Captive">Industrial Factory Rooftop (Captive)</option>
                <option value="Commercial Complex">Commercial Mall / Institutional Building</option>
                <option value="Ground Mounted MW Solar">Ground-Mounted Open Access / MW Solar</option>
                <option value="Agricultural Solar Pump">Solar Agri Pump / Distributed</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                Grid Connection Voltage
              </label>
              <select 
                className="form-control"
                value={voltageLevel}
                onChange={(e) => setVoltageLevel(e.target.value)}
                style={{
                  background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                  color: lightMode ? '#0f172a' : '#ffffff'
                }}
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
                className="btn btn-primary ceig-submit-btn" 
                disabled={loading}
                style={{ width: '100%', height: '48px', justifyContent: 'center', fontWeight: 700 }}
              >
                {loading ? <Sparkles size={18} className="spin-slow" /> : <Zap size={18} />}
                <span>Calculate Mandatory Clearances</span>
              </button>
            </div>
          </form>

          {/* Result Card */}
          {result && (
            <div style={{
              background: lightMode ? '#f8fafc' : 'linear-gradient(135deg, rgba(16, 33, 74, 0.75) 0%, rgba(7, 14, 30, 0.9) 100%)',
              border: `1px solid ${lightMode ? '#bfdbfe' : 'rgba(59, 130, 246, 0.35)'}`,
              borderRadius: '16px',
              padding: 'clamp(20px, 3vw, 28px)',
              boxShadow: lightMode ? '0 6px 20px rgba(37, 99, 235, 0.06)' : 'none'
            }}>
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '22px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <span 
                      style={{
                        padding: '3px 10px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        borderRadius: '9999px',
                        background: lightMode ? '#eff6ff' : 'rgba(245, 158, 11, 0.15)',
                        border: `1px solid ${lightMode ? '#bfdbfe' : 'rgba(245, 158, 11, 0.35)'}`,
                        color: lightMode ? '#1d4ed8' : '#fbbf24',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <Layers size={13} />
                      STATUTORY CEIG MATRIX
                    </span>
                    <span style={{ fontSize: '0.80rem', color: lightMode ? '#1e40af' : '#93c5fd', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      Voltage: {result.voltage}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', color: lightMode ? '#0f172a' : '#ffffff', fontWeight: 800, margin: 0 }}>
                    {result.category}
                  </h3>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: lightMode ? '#fffbeb' : 'rgba(245, 158, 11, 0.15)',
                  border: `1px solid ${lightMode ? '#fde68a' : 'rgba(245, 158, 11, 0.35)'}`,
                  padding: '7px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  color: lightMode ? '#b45309' : '#fbbf24',
                  fontWeight: 700
                }}>
                  <Clock size={16} />
                  <span>Clearance Timeline: {result.timeline}</span>
                </div>
              </div>

              {/* Grid 2-col info cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                marginBottom: '22px'
              }}>
                <div style={{
                  background: lightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '12px',
                  padding: '18px',
                  boxShadow: lightMode ? '0 2px 8px rgba(0, 0, 0, 0.03)' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: lightMode ? '#0284c7' : '#38bdf8', fontWeight: 700, marginBottom: '8px' }}>
                    <Zap size={16} />
                    <span>CEIG Statutory Inspection Rule:</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: lightMode ? '#334155' : '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                    {result.ceigRequirement}
                  </p>
                </div>

                <div style={{
                  background: lightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '12px',
                  padding: '18px',
                  boxShadow: lightMode ? '0 2px 8px rgba(0, 0, 0, 0.03)' : 'none'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: lightMode ? '#b45309' : '#fbbf24', fontWeight: 700, marginBottom: '8px' }}>
                    <Shield size={16} />
                    <span>Chartered Engineer Certification Scope:</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: lightMode ? '#334155' : '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                    {result.ceCertRequired}
                  </p>
                </div>
              </div>

              {/* Document Package Section */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', color: lightMode ? '#475569' : '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Mandatory Submission Package (CEIG &amp; DISCOM Dossier):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                  {result.documents.map((doc, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      background: lightMode ? '#ffffff' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.05)'}`,
                      borderRadius: '10px',
                      padding: '12px 14px',
                      fontSize: '0.85rem',
                      color: lightMode ? '#1e293b' : '#e2e8f0',
                      lineHeight: 1.45,
                      boxShadow: lightMode ? '0 2px 4px rgba(0, 0, 0, 0.02)' : 'none'
                    }}>
                      <CheckCircle2 size={16} color="#15803d" style={{ flexShrink: 0, marginTop: '2px' }} />
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
                paddingTop: '18px',
                borderTop: `1px dashed ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.12)'}`
              }}>
                <div style={{ fontSize: '0.85rem', color: lightMode ? '#475569' : '#94a3b8' }}>
                  💡 Need CEIG drawing approval or Chartered Engineer stamped SLD for your solar plant?
                </div>

                <button
                  onClick={() => onOpenQuote('Chartered Engineer Services')}
                  className="btn btn-gold"
                  style={{ padding: '9px 18px', fontSize: '0.84rem', borderRadius: '10px' }}
                >
                  <FileCheck size={15} />
                  <span>Request CEIG Drawing Approval &amp; SLD</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
