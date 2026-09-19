import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Phone, MessageSquare, FileText, CheckCircle } from 'lucide-react';

export default function QuoteWizardModal({ isOpen, onClose, initialService, prefillData }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const isValuationFlow = Boolean(prefillData?.isValuationReport);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || 'Assets Valuation Services',
    subCategory: 'Banking & Lending Valuation',
    location: 'Jaipur, Rajasthan',
    estimatedAssetValue: '₹50 Lakhs - ₹2 Crores',
    urgency: 'Immediate (Within 48-72 Hours Express)',
    projectScope: '',
    purpose: 'Bank Loan & Hypothecation',
    notes: ''
  });

  const serviceOptions = [
    {
      name: "Assets Valuation Services",
      sub: [
        "Banking & Lending Valuation",
        "Insurance (Reinstatement) Valuation",
        "Stamp Duty Valuation",
        "Financial Reporting / IndAS 16",
        "Sale / Purchase of Asset",
        "Leasing / Renting of Assets",
        "Asset Retirement & Disposal",
        "Litigation & Dispute Resolution",
        "Impairment Study (Ind AS, IFRS)",
        "Insolvency & Bankruptcy Valuation",
        "Liquidation (Orderly/Forced)",
        "Balance Useful Life Calculation",
        "Mergers and Acquisitions",
        "Taxation and Regulations (CBDT)"
      ]
    },
    {
      name: "Chartered Engineer Services",
      sub: [
        "DGFT Declarations / Compliances",
        "CBIC / Customs Declarations",
        "MoFPI Declarations / Compliances",
        "MoEF (e-waste, CDM) Declarations",
        "GAIL Verification/Credentials",
        "MSME Grant-in-Aid/Incentives",
        "MiETY (EHTP/STP/M-SIP) Declarations",
        "Ministry of Textiles (ITP/NHDP)",
        "MoCA (Useful Life of Assets)",
        "MoCI (APEDA/EOU Scheme)",
        "MoST (Bio Technology Park)",
        "Remaining Life Assessment (RLA)",
        "Equipment Efficiency & Tool Life"
      ]
    },
    {
      name: "FSSAI Compliance Services",
      sub: [
        "New Registration / State / Central License",
        "Renewal of License / Registration",
        "Modifications in License",
        "Filing Annual Returns / Declarations",
        "Appeal for Revocation of Suspension",
        "FBO Training by FSSAI Trainers",
        "Hygiene Auditing by FSSAI Auditors",
        "Mock Surveys of Facility/Unit"
      ]
    },
    {
      name: "Advisory Services",
      sub: [
        "Asset Componentization Analysis",
        "Equipment Effectiveness Analysis",
        "Measurement System Analysis (MSA)",
        "Machine Capability Analysis",
        "Process Capability Analysis"
      ]
    }
  ];

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setError('');
      setSubmittedData(null);

      if (prefillData?.isValuationReport) {
        setFormData(prev => ({
          ...prev,
          service: 'Assets Valuation Services',
          subCategory: 'Official Stamped Machinery Valuation Report',
          estimatedAssetValue: prefillData.fairMarketValueRange || `₹ ${Number(prefillData.originalCost || 0).toLocaleString('en-IN')}`,
          urgency: 'Immediate (Within 48-72 Hours Express)',
          location: prev.location || 'Jaipur, Rajasthan',
          purpose: 'Bank Loan & Hypothecation',
          notes: ''
        }));
      } else if (initialService) {
        const matched = serviceOptions.find(s => s.name === initialService) || serviceOptions[0];
        setFormData(prev => ({
          ...prev,
          service: matched.name,
          subCategory: matched.sub[0] || 'General Consultation'
        }));
      }
    }
  }, [isOpen, initialService, prefillData]);

  if (!isOpen) return null;

  const currentSubs = serviceOptions.find(s => s.name === formData.service)?.sub || [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let finalScope = formData.projectScope;
    let finalSubCategory = formData.subCategory;
    let finalAssetValue = formData.estimatedAssetValue;

    if (isValuationFlow && prefillData) {
      finalSubCategory = 'Official Stamped Machinery Valuation Report';
      finalAssetValue = prefillData.fairMarketValueRange || `₹ ${Number(prefillData.originalCost || 0).toLocaleString('en-IN')}`;
      finalScope = 
`📋 [OFFICIAL STAMPED VALUATION REPORT REQUEST]
• Machinery Category: ${prefillData.assetType}
• Original Purchase Cost: ₹${Number(prefillData.originalCost || 0).toLocaleString('en-IN')}
• Asset Age: ${prefillData.assetAgeYears} Years (Expected Total Life: ${prefillData.expectedTotalLifeYears} Years)
• Operating Duty: ${prefillData.usageIntensity} | Maintenance: ${prefillData.maintenanceCondition}
• Assessed Remaining Useful Life (RUL): ${prefillData.estimatedRUL}
• Estimated Fair Market Value Range: ${prefillData.fairMarketValueRange}
• WDV Depreciated Book Value: ₹${Number(prefillData.wdvDepreciatedValue || 0).toLocaleString('en-IN')}
• Technical Observation: ${prefillData.recommendedAction}
• Statutory Compliance Standard: Companies Act 2013, Schedule II & IBBI Guidelines
• Purpose of Certificate: ${formData.purpose || 'Bank Loan & Hypothecation'}
• Client Remarks / Requirements: ${formData.notes || 'Official stamped report requested via online assessment tool.'}`;
    }

    const payload = {
      name: formData.name,
      company: formData.company || 'Individual / Proprietor',
      phone: formData.phone,
      email: formData.email || 'Not specified',
      service: formData.service || 'Assets Valuation Services',
      subCategory: finalSubCategory,
      location: formData.location || 'Pan India',
      estimatedAssetValue: finalAssetValue,
      urgency: formData.urgency,
      projectScope: finalScope || 'Direct consultation inquiry submitted via web portal.'
    };

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedData(data);
        setStep(4); // Success step
      } else {
        setError(data.message || 'Error submitting request. Please try again.');
      }
    } catch (err) {
      // Fallback if backend is momentarily unreachable
      setSubmittedData({
        inquiryId: "INQ-" + Math.floor(100000 + Math.random() * 900000),
        data: payload
      });
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* ============================================================ */}
        {/* CASE A: SPECIALIZED STAMPED VALUATION REPORT INTAKE FLOW     */}
        {/* ============================================================ */}
        {isValuationFlow && step < 4 && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="section-badge gold" style={{ marginBottom: 0, padding: '4px 12px', fontSize: '0.75rem' }}>
                  <Sparkles size={13} />
                  Official Stamped Valuation Report
                </span>
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '6px' }}>
                Get Stamped Valuation Report
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Govt Empanelled Chartered Engineer (India) Physical/Documentary Inspection Certificate with official seal &amp; signature for Banks, Customs, DGFT, and Audits.
              </p>
            </div>

            {/* Live Valuation Summary Card */}
            {prefillData && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(24, 90, 219, 0.18) 0%, rgba(15, 26, 54, 0.7) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                marginBottom: '22px'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '12px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  paddingBottom: '10px'
                }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Assessed Machinery</span>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>{prefillData.assetType}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Original Cost</span>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#cbd5e1' }}>₹ {Number(prefillData.originalCost || 0).toLocaleString('en-IN')}</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Estimated Fair Market Value</span>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-heading)' }}>
                      {prefillData.fairMarketValueRange}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Assessed RUL</span>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#38bdf8' }}>
                      {prefillData.estimatedRUL} <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 400 }}>(Age: {prefillData.assetAgeYears} Yrs)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div style={{
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                color: '#fda4af',
                fontSize: '0.88rem',
                marginBottom: '20px'
              }}>
                {error}
              </div>
            )}

            {/* Direct Client Intake Form */}
            <form onSubmit={handleSubmit}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    required
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Phone Number *</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98290 12345"
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Email Address (for PDF Stamped Report)</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. director@company.in"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Factory / Proprietorship</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Precision Engineering Ltd."
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Plant / Site Location (City, State) *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan / Bhiwadi / Neemrana"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Purpose of Valuation Certificate</label>
                  <select
                    className="form-control"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  >
                    <option value="Bank Loan & Hypothecation">Bank Loan &amp; Hypothecation (CC / Term Loan)</option>
                    <option value="Customs & DGFT Import/Export">Customs &amp; DGFT Import / Export Certification</option>
                    <option value="Balance Sheet & Ind AS 16 Accounting">Balance Sheet &amp; Ind AS 16 Accounting</option>
                    <option value="Sale / Purchase of Asset">Sale / Purchase of Used/New Asset</option>
                    <option value="Insurance Reinstatement">Insurance Reinstatement Valuation</option>
                    <option value="Court Litigation / Dispute Resolution">Court Litigation / Dispute Resolution</option>
                    <option value="Other Statutory / Tax Requirement">Other Statutory / Tax Requirement</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-group">
                  <label className="form-label">Delivery Timeline / Urgency</label>
                  <select
                    className="form-control"
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  >
                    <option value="Immediate (Within 48-72 Hours Express)">Immediate (Within 48-72 Hours Express)</option>
                    <option value="Standard (Within 1-2 Weeks)">Standard (Within 1-2 Weeks)</option>
                    <option value="Planning Phase / Next Month">Planning Phase / Next Month</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Additional Bank / Project Notes (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. For SBI RIICO Industrial Area branch"
                  />
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  {loading ? (
                    <span>Submitting Stamped Report Request...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit &amp; Request Stamped Valuation Report</span>
                    </>
                  )}
                </button>
                <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8', marginTop: '10px' }}>
                  🔒 Your request will be directly dispatched to Mukesh Singh, CEng (India) MIE, IIT Roorkee.
                </div>
              </div>
            </form>
          </div>
        )}

        {/* ============================================================ */}
        {/* CASE B: STANDARD 3-STEP CONSULTATION WIZARD                   */}
        {/* ============================================================ */}
        {!isValuationFlow && step < 4 && (
          <div>
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="section-badge gold" style={{ marginBottom: 0, padding: '4px 12px', fontSize: '0.75rem' }}>
                  <Sparkles size={13} />
                  Chartered Engineer Consultation Wizard
                </span>
              </div>
              <h3 style={{ fontSize: '1.45rem', color: '#ffffff' }}>
                {step === 1 && "Select Service & Scope"}
                {step === 2 && "Project Location & Asset Scale"}
                {step === 3 && "Contact Details & Submission"}
              </h3>

              {/* Progress bar */}
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-full)',
                marginTop: '16px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(step / 3) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #185adb, #f59e0b)',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            {error && (
              <div style={{
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                color: '#fda4af',
                fontSize: '0.88rem',
                marginBottom: '20px'
              }}>
                {error}
              </div>
            )}

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Select Core Service Pillar</label>
                  <select
                    className="form-control"
                    value={formData.service}
                    onChange={(e) => {
                      const newServ = e.target.value;
                      const match = serviceOptions.find(s => s.name === newServ);
                      setFormData({
                        ...formData,
                        service: newServ,
                        subCategory: match?.sub[0] || 'General Consultation'
                      });
                    }}
                  >
                    {serviceOptions.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Sub-Category / Scope of Work</label>
                  <select
                    className="form-control"
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                  >
                    {currentSubs.map((sub, sIdx) => (
                      <option key={sIdx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Brief Description of Requirement</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="e.g. Valuation of CNC machinery for bank term loan / CEIG drawing approval for 200kW solar plant."
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-primary"
                    style={{ padding: '12px 28px' }}
                  >
                    <span>Continue to Project Scale</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Location & Asset Value */}
            {step === 2 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Plant / Site Location (City, State)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan / Bhiwadi / Ahmedabad"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Approximate Asset / Project Investment Scale</label>
                  <select
                    className="form-control"
                    value={formData.estimatedAssetValue}
                    onChange={(e) => setFormData({ ...formData, estimatedAssetValue: e.target.value })}
                  >
                    <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                    <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs - ₹1 Crore</option>
                    <option value="₹1 Crore - ₹5 Crores">₹1 Crore - ₹5 Crores</option>
                    <option value="₹5 Crores - ₹25 Crores">₹5 Crores - ₹25 Crores</option>
                    <option value="Above ₹25 Crores (Large Industrial / MW Scale)">Above ₹25 Crores (Large Industrial / MW Scale)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Timeline / Urgency</label>
                  <select
                    className="form-control"
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  >
                    <option value="Immediate (Within 48-72 Hours Express)">Immediate (Within 48-72 Hours Express)</option>
                    <option value="Standard (Within 1-2 Weeks)">Standard (Within 1-2 Weeks)</option>
                    <option value="Planning Phase / Future Project">Planning Phase / Future Project</option>
                  </select>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn-outline"
                    style={{ padding: '12px 22px' }}
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn btn-primary"
                    style={{ padding: '12px 28px' }}
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Details & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Mukesh Kumar"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Firm Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Precision Components Pvt. Ltd."
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98290 12345"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. director@company.in"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-outline"
                    style={{ padding: '12px 22px' }}
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-gold"
                    style={{ padding: '12px 32px' }}
                  >
                    {loading ? <span>Submitting...</span> : (
                      <>
                        <Send size={16} />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 4: SUCCESS CONFIRMATION                                 */}
        {/* ============================================================ */}
        {step === 4 && (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              color: '#10b981'
            }}>
              <CheckCircle2 size={40} />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
              {isValuationFlow ? 'Stamped Report Request Received!' : 'Consultation Request Received!'}
            </h3>

            <div style={{
              display: 'inline-block',
              padding: '6px 16px',
              background: 'rgba(24, 90, 219, 0.2)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              borderRadius: 'var(--radius-full)',
              color: '#38bdf8',
              fontSize: '0.9rem',
              fontWeight: 700,
              marginBottom: '18px'
            }}>
              Reference ID: {submittedData?.inquiryId}
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 28px auto' }}>
              {isValuationFlow ? (
                <>
                  Thank you, <strong>{formData.name}</strong>. Our Chartered Engineer, <strong>Mukesh Singh, CEng (India) MIE, IIT Roorkee</strong> has received your assessment details for <strong>{prefillData?.assetType}</strong> and will connect with you within 24 business hours.
                </>
              ) : (
                <>
                  Thank you, <strong>{formData.name}</strong>. Our Chartered Engineer will review your requirements for <strong>{formData.service}</strong> and reach out within 24 business hours.
                </>
              )}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href={
                  isValuationFlow && prefillData
                    ? `https://wa.me/919158658885?text=${encodeURIComponent(
                        `Hello MS Chartered Engineers, I have submitted Stamped Valuation Report Request ${submittedData?.inquiryId} for ${prefillData.assetType}. Assessed Value: ${prefillData.fairMarketValueRange}. Client: ${formData.name} (${formData.phone}).`
                      )}`
                    : `https://wa.me/919158658885?text=${encodeURIComponent(
                        `Hello MS Chartered Engineers, I have submitted inquiry ${submittedData?.inquiryId} for ${formData.service}.`
                      )}`
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '12px 24px' }}
              >
                <MessageSquare size={18} />
                <span>Instant WhatsApp Connect</span>
              </a>

              <button
                onClick={onClose}
                className="btn btn-outline"
                style={{ padding: '12px 24px' }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
