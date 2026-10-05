import React, { useState, useEffect } from 'react';
import { Calculator, ArrowRight, CheckCircle, AlertCircle, RefreshCw, FileText, Sparkles } from 'lucide-react';

const PRESETS = [
  { label: 'CNC Machine (₹25L)', cost: '2500000', age: '4', life: '15', type: 'CNC & Heavy Engineering Machinery', maint: 'Good', usage: '2-Shift' },
  { label: 'Textile Loom (₹40L)', cost: '4000000', age: '5', life: '15', type: 'Textile, Spinning & Garment Machinery', maint: 'Excellent', usage: '2-Shift' },
  { label: 'Pharma Reactor (₹85L)', cost: '8500000', age: '3', life: '20', type: 'Chemical, Pharmaceutical & Process Plant', maint: 'Excellent', usage: 'Continuous 3-Shift' },
  { label: 'Earthmover / JCB (₹55L)', cost: '5500000', age: '6', life: '12', type: 'Earthmoving & Construction Equipment', maint: 'Fair', usage: 'Single Shift (8 hrs/day)' }
];

export default function ValuationCalculator({ onOpenQuote, lightMode = false }) {
  const [formData, setFormData] = useState({
    assetType: 'CNC & Heavy Engineering Machinery',
    originalCost: '2500000',
    assetAgeYears: '4',
    expectedTotalLifeYears: '15',
    maintenanceCondition: 'Good',
    usageIntensity: '2-Shift'
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateLocally = (data) => {
    const cost = parseFloat(data.originalCost) || 0;
    const age = parseFloat(data.assetAgeYears) || 0;
    const totalLife = parseFloat(data.expectedTotalLifeYears) || 15;

    let conditionFactor = 1.0;
    if (data.maintenanceCondition === 'Excellent') conditionFactor = 1.15;
    else if (data.maintenanceCondition === 'Good') conditionFactor = 1.0;
    else if (data.maintenanceCondition === 'Fair') conditionFactor = 0.85;
    else if (data.maintenanceCondition === 'Poor') conditionFactor = 0.65;

    let intensityPenalty = 0;
    if (data.usageIntensity === 'Continuous 3-Shift') intensityPenalty = 0.15;
    else if (data.usageIntensity === '2-Shift') intensityPenalty = 0.08;

    const effectiveElapsedLife = age * (1 + intensityPenalty) / conditionFactor;
    const calculatedRUL = Math.max(1, Math.round((totalLife - effectiveElapsedLife) * conditionFactor * 10) / 10);

    const salvageValue = cost * 0.05;
    const annualSLMDepr = (cost - salvageValue) / totalLife;
    const slmCurrentValue = Math.max(salvageValue, cost - (annualSLMDepr * age));
    const wdvRate = 0.15;
    const wdvCurrentValue = Math.max(salvageValue, cost * Math.pow((1 - wdvRate), age));

    const minVal = Math.round(Math.min(slmCurrentValue, wdvCurrentValue) * conditionFactor);
    const maxVal = Math.round(Math.max(slmCurrentValue, wdvCurrentValue) * (conditionFactor * 1.08));

    return {
      assetType: data.assetType,
      originalCost: cost,
      assetAge: age,
      estimatedRUL: `${calculatedRUL} Years`,
      fairMarketValueRange: {
        min: minVal,
        max: maxVal,
        display: `₹ ${minVal.toLocaleString('en-IN')} - ₹ ${maxVal.toLocaleString('en-IN')}`
      },
      slmDepreciatedValue: Math.round(slmCurrentValue),
      wdvDepreciatedValue: Math.round(wdvCurrentValue),
      recommendedAction: calculatedRUL <= 3 
        ? 'Formal RUL extension certification required before annual banking credit review.'
        : 'Qualifies for Chartered Engineer Valuation Certificate for Bank Hypothecation & Asset Nexus.',
      statutoryStandards: 'Compliant with Companies Act 2013, Schedule II & IBBI registered valuer methodology.'
    };
  };

  const handleApplyPreset = (p) => {
    const updated = {
      assetType: p.type,
      originalCost: p.cost,
      assetAgeYears: p.age,
      expectedTotalLifeYears: p.life,
      maintenanceCondition: p.maint,
      usageIntensity: p.usage
    };
    setFormData(updated);
    setResult(calculateLocally(updated));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/tools/valuation-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success && data.data) {
        setResult(data.data);
      } else {
        setResult(calculateLocally(formData));
      }
    } catch (err) {
      setResult(calculateLocally(formData));
    } finally {
      setLoading(false);
    }
  };

  const handleGetStampedReport = () => {
    if (!result) return;
    onOpenQuote('Assets Valuation Services', {
      isValuationReport: true,
      subCategory: 'Official Stamped Machinery Valuation Report',
      assetType: formData.assetType,
      originalCost: formData.originalCost,
      assetAgeYears: formData.assetAgeYears,
      expectedTotalLifeYears: formData.expectedTotalLifeYears,
      maintenanceCondition: formData.maintenanceCondition,
      usageIntensity: formData.usageIntensity,
      estimatedRUL: result.estimatedRUL,
      fairMarketValueRange: result.fairMarketValueRange?.display,
      wdvDepreciatedValue: result.wdvDepreciatedValue,
      slmDepreciatedValue: result.slmDepreciatedValue,
      recommendedAction: result.recommendedAction,
      estimatedAssetValue: result.fairMarketValueRange?.display || `₹ ${parseFloat(formData.originalCost || 0).toLocaleString('en-IN')}`
    });
  };

  useEffect(() => {
    setResult(calculateLocally(formData));
  }, []);

  return (
    <section 
      id="calculator" 
      className="section" 
      style={{ 
        background: lightMode ? 'transparent' : '#080f24', 
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
            <Calculator size={15} />
            <span>Smart Engineering Estimation Engine</span>
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
            Interactive Machinery &amp; <span style={{ color: lightMode ? '#1d4ed8' : '#f59e0b' }}>Asset Valuation Tool</span>
          </h2>
          <p 
            className="section-description"
            style={{
              color: lightMode ? '#475569' : '#cbd5e1',
              fontSize: '0.96rem',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            Calculate Remaining Useful Life (RUL), straight-line &amp; written-down depreciation, and fair market estimates aligned with <strong>Companies Act 2013</strong> norms.
          </p>
        </div>

        {/* Quick Dynamic Preset Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '26px'
        }}>
          <span style={{ fontSize: '0.80rem', fontWeight: 700, color: lightMode ? '#64748b' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '4px' }}>
            ⚡ Quick Presets:
          </span>
          {PRESETS.map((p, idx) => (
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
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.color = '#1d4ed8';
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

        <div className="calculator-grid" style={{ alignItems: 'start' }}>
          {/* Input Form Card */}
          <div 
            style={{
              background: lightMode ? '#ffffff' : 'rgba(15, 26, 54, 0.75)',
              border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '20px',
              padding: 'clamp(20px, 3.2vw, 32px)',
              boxShadow: lightMode ? '0 10px 30px rgba(15, 23, 42, 0.05)' : '0 10px 30px rgba(0, 0, 0, 0.35)',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', color: lightMode ? '#0f172a' : '#ffffff', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Asset Parameters</span>
              </h3>
              <span style={{ fontSize: '0.74rem', color: lightMode ? '#2563eb' : '#38bdf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Schedule II Norms
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                  Asset / Machinery Category
                </label>
                <select 
                  className="form-control"
                  value={formData.assetType}
                  onChange={(e) => setFormData({...formData, assetType: e.target.value})}
                  style={{
                    background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                    border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                    color: lightMode ? '#0f172a' : '#ffffff'
                  }}
                >
                  <option value="CNC & Heavy Engineering Machinery">CNC & Heavy Engineering Machinery</option>
                  <option value="Textile, Spinning & Garment Machinery">Textile, Spinning & Garment Machinery</option>
                  <option value="Chemical, Pharmaceutical & Process Plant">Chemical, Pharmaceutical & Process Plant</option>
                  <option value="Earthmoving & Construction Equipment">Earthmoving & Construction Equipment</option>
                  <option value="Solar PV & High Voltage Electrical Setup">Solar PV & High Voltage Electrical Setup</option>
                  <option value="Commercial Fleet & Industrial Vehicles">Commercial Fleet & Industrial Vehicles</option>
                  <option value="General Factory Plant & Equipment">General Factory Plant & Equipment</option>
                </select>
              </div>

              <div className="form-row-2col" style={{ gap: '14px', marginBottom: '18px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                    Original Cost (₹)
                  </label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.originalCost}
                    onChange={(e) => setFormData({...formData, originalCost: e.target.value})}
                    placeholder="e.g. 2500000"
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
                    Asset Age (Years)
                  </label>
                  <input 
                    type="number" 
                    step="0.5"
                    className="form-control"
                    value={formData.assetAgeYears}
                    onChange={(e) => setFormData({...formData, assetAgeYears: e.target.value})}
                    placeholder="e.g. 4"
                    required
                    style={{
                      background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                      color: lightMode ? '#0f172a' : '#ffffff'
                    }}
                  />
                </div>
              </div>

              <div className="form-row-2col" style={{ gap: '14px', marginBottom: '18px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                    Expected Life (Years)
                  </label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.expectedTotalLifeYears}
                    onChange={(e) => setFormData({...formData, expectedTotalLifeYears: e.target.value})}
                    placeholder="Default: 15"
                    style={{
                      background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                      color: lightMode ? '#0f172a' : '#ffffff'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                    Maintenance Status
                  </label>
                  <select 
                    className="form-control"
                    value={formData.maintenanceCondition}
                    onChange={(e) => setFormData({...formData, maintenanceCondition: e.target.value})}
                    style={{
                      background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                      color: lightMode ? '#0f172a' : '#ffffff'
                    }}
                  >
                    <option value="Excellent">Excellent (OEM Serviced)</option>
                    <option value="Good">Good (Routine Maintenance)</option>
                    <option value="Fair">Fair (Standard Wear & Tear)</option>
                    <option value="Poor">Poor (Deferred Maintenance)</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '22px' }}>
                <label className="form-label" style={{ color: lightMode ? '#334155' : '#e2e8f0', fontWeight: 600, fontSize: '0.86rem', marginBottom: '6px' }}>
                  Operating Duty Cycle
                </label>
                <select 
                  className="form-control"
                  value={formData.usageIntensity}
                  onChange={(e) => setFormData({...formData, usageIntensity: e.target.value})}
                  style={{
                    background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.06)',
                    border: `1px solid ${lightMode ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)'}`,
                    color: lightMode ? '#0f172a' : '#ffffff'
                  }}
                >
                  <option value="Single Shift (8 hrs/day)">Single Shift (8 hrs/day)</option>
                  <option value="2-Shift (16 hrs/day)">2-Shift (16 hrs/day)</option>
                  <option value="Continuous 3-Shift (24 hrs/day)">Continuous 3-Shift (24 hrs/day)</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
                style={{ width: '100%', padding: '13px', fontSize: '0.94rem', fontWeight: 700 }}
              >
                {loading ? <RefreshCw size={18} className="spin-slow" /> : <Calculator size={18} />}
                <span>Recalculate Valuation Benchmark</span>
              </button>
            </form>
          </div>

          {/* Realtime Output Result Card */}
          {result && (
            <div 
              style={{
                background: lightMode ? '#ffffff' : 'rgba(15, 26, 54, 0.75)',
                border: `1px solid ${lightMode ? '#bfdbfe' : 'rgba(245, 158, 11, 0.35)'}`,
                borderRadius: '20px',
                padding: 'clamp(20px, 3.2vw, 32px)',
                boxShadow: lightMode ? '0 12px 36px rgba(37, 99, 235, 0.08)' : '0 10px 30px rgba(0, 0, 0, 0.35)',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: lightMode ? '#b45309' : 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                    Technical Assessment Output
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: lightMode ? '#0f172a' : '#ffffff', fontWeight: 800, marginTop: '2px', margin: 0 }}>
                    Estimated Valuation Summary
                  </h3>
                </div>
                <span style={{
                  padding: '4px 12px',
                  background: lightMode ? '#eff6ff' : 'rgba(245, 158, 11, 0.15)',
                  border: `1px solid ${lightMode ? '#bfdbfe' : 'rgba(245, 158, 11, 0.3)'}`,
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  color: lightMode ? '#1d4ed8' : '#fbbf24',
                  fontWeight: 700
                }}>
                  Pre-Audit Benchmark
                </span>
              </div>

              {/* Fair Market Value Big Box */}
              <div style={{
                background: lightMode ? 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' : 'linear-gradient(135deg, rgba(24, 90, 219, 0.25) 0%, rgba(11, 23, 54, 0.4) 100%)',
                border: `1px solid ${lightMode ? '#93c5fd' : 'rgba(59, 130, 246, 0.4)'}`,
                borderRadius: '16px',
                padding: '24px 18px',
                marginBottom: '20px',
                textAlign: 'center',
                boxShadow: lightMode ? '0 4px 16px rgba(37, 99, 235, 0.08)' : 'none'
              }}>
                <div style={{ fontSize: '0.82rem', color: lightMode ? '#1e40af' : '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '6px' }}>
                  Estimated Fair Market Value (FMV)
                </div>
                <div style={{
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                  fontWeight: 900,
                  color: lightMode ? '#0f172a' : '#ffffff',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {result.fairMarketValueRange?.display}
                </div>
                <div style={{ fontSize: '0.80rem', color: lightMode ? '#475569' : '#cbd5e1', marginTop: '6px' }}>
                  Based on physical condition, usage cycle, and secondary machinery indices.
                </div>
              </div>

              {/* Breakdown Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  background: lightMode ? '#f8fafc' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${lightMode ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '12px',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.74rem', color: lightMode ? '#64748b' : '#94a3b8', fontWeight: 600 }}>Remaining Useful Life (RUL)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: lightMode ? '#0284c7' : '#38bdf8', marginTop: '2px' }}>
                    {result.estimatedRUL}
                  </div>
                </div>

                <div style={{
                  background: lightMode ? '#fffbeb' : 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${lightMode ? '#fde68a' : 'rgba(255, 255, 255, 0.08)'}`,
                  borderRadius: '12px',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.74rem', color: lightMode ? '#92400e' : '#94a3b8', fontWeight: 600 }}>WDV Book Value Approx</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: lightMode ? '#b45309' : '#fbbf24', marginTop: '2px' }}>
                    ₹ {result.wdvDepreciatedValue?.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Engineering Recommendation Note */}
              <div style={{
                background: lightMode ? '#f0fdf4' : 'rgba(16, 185, 129, 0.08)',
                border: `1px solid ${lightMode ? '#bbf7d0' : 'rgba(16, 185, 129, 0.25)'}`,
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={18} color="#15803d" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.86rem', color: lightMode ? '#166534' : '#e2e8f0', fontWeight: 700 }}>Technical Observation:</div>
                    <div style={{ fontSize: '0.82rem', color: lightMode ? '#15803d' : '#94a3b8', marginTop: '2px', lineHeight: 1.5 }}>{result.recommendedAction}</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleGetStampedReport}
                className="btn btn-gold"
                style={{ width: '100%', padding: '13px', fontSize: '0.94rem', fontWeight: 700, borderRadius: '12px' }}
              >
                <FileText size={18} />
                <span>Get Stamped Valuation Report</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
