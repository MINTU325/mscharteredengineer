import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, AlertCircle, RefreshCw, FileText } from 'lucide-react';

export default function ValuationCalculator({ onOpenQuote }) {
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
        // Fallback to client calculations if server is unavailable
        setResult(calculateLocally(formData));
      }
    } catch (err) {
      setResult(calculateLocally(formData));
    } finally {
      setLoading(false);
    }
  };

  // Run initial calculation once
  React.useEffect(() => {
    setResult(calculateLocally(formData));
  }, []);

  return (
    <section id="calculator" className="section" style={{ background: 'rgba(7, 14, 30, 0.6)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <Calculator size={15} />
            <span>Smart Engineering Estimation Engine</span>
          </div>
          <h2 className="section-title">
            Interactive Machinery & <span className="gold-gradient-text">Asset Valuation Tool</span>
          </h2>
          <p className="section-description">
            Calculate Remaining Useful Life (RUL), straight-line & written-down depreciation, and fair market estimates aligned with <strong>Companies Act 2013</strong> norms.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '36px',
          alignItems: 'start'
        }}>
          {/* Input Form Card */}
          <div className="glass-card" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>Asset Parameters</span>
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Asset / Machinery Category</label>
                <select 
                  className="form-control"
                  value={formData.assetType}
                  onChange={(e) => setFormData({...formData, assetType: e.target.value})}
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Original Cost (₹)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.originalCost}
                    onChange={(e) => setFormData({...formData, originalCost: e.target.value})}
                    placeholder="e.g. 2500000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Asset Age (Years)</label>
                  <input 
                    type="number" 
                    step="0.5"
                    className="form-control"
                    value={formData.assetAgeYears}
                    onChange={(e) => setFormData({...formData, assetAgeYears: e.target.value})}
                    placeholder="e.g. 4"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Expected Life (Years)</label>
                  <input 
                    type="number" 
                    className="form-control"
                    value={formData.expectedTotalLifeYears}
                    onChange={(e) => setFormData({...formData, expectedTotalLifeYears: e.target.value})}
                    placeholder="Default: 15"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Maintenance Status</label>
                  <select 
                    className="form-control"
                    value={formData.maintenanceCondition}
                    onChange={(e) => setFormData({...formData, maintenanceCondition: e.target.value})}
                  >
                    <option value="Excellent">Excellent (OEM Serviced)</option>
                    <option value="Good">Good (Routine Maintenance)</option>
                    <option value="Fair">Fair (Standard Wear & Tear)</option>
                    <option value="Poor">Poor (Deferred Maintenance)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Operating Duty Cycle</label>
                <select 
                  className="form-control"
                  value={formData.usageIntensity}
                  onChange={(e) => setFormData({...formData, usageIntensity: e.target.value})}
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
                style={{ width: '100%', marginTop: '10px' }}
              >
                {loading ? <RefreshCw size={18} className="spin-slow" /> : <Calculator size={18} />}
                <span>Recalculate Valuation Benchmark</span>
              </button>
            </form>
          </div>

          {/* Realtime Output Result Card */}
          {result && (
            <div className="glass-card gold-accent" style={{ padding: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                    Technical Assessment Output
                  </span>
                  <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginTop: '2px' }}>
                    Estimated Valuation Summary
                  </h3>
                </div>
                <span style={{
                  padding: '5px 12px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  color: '#fbbf24',
                  fontWeight: 600
                }}>
                  Pre-Audit Estimate
                </span>
              </div>

              {/* Fair Market Value Big Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(24, 90, 219, 0.25) 0%, rgba(11, 23, 54, 0.4) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                marginBottom: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Chartered Engineer Estimated Fair Market Value
                </div>
                <div style={{
                  fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {result.fairMarketValueRange?.display}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '4px' }}>
                  Based on physical condition, usage cycle, and secondary machinery indices.
                </div>
              </div>

              {/* Breakdown Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '14px',
                marginBottom: '24px'
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Remaining Useful Life (RUL)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#38bdf8', marginTop: '2px' }}>
                    {result.estimatedRUL}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px'
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>WDV Book Value Approx</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fbbf24', marginTop: '2px' }}>
                    ₹ {result.wdvDepreciatedValue?.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Engineering Recommendation Note */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '26px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 600 }}>Technical Observation:</div>
                    <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '2px' }}>{result.recommendedAction}</div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => onOpenQuote('Official Machinery Valuation Certificate')}
                className="btn btn-gold"
                style={{ width: '100%', padding: '14px', fontSize: '0.96rem' }}
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
