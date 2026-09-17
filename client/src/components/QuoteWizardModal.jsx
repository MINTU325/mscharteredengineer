import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function QuoteWizardModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: initialService || 'Valuation Services',
    subCategory: 'Machinery Valuation & Certification',
    location: 'Jaipur, Rajasthan',
    estimatedAssetValue: '₹50 Lakhs - ₹2 Crores',
    urgency: 'Immediate (Within 3-5 Days)',
    projectScope: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
        data: formData
      });
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  const serviceOptions = [
    { name: "Engineering Certification", sub: ["Mechanical Works Certification", "Machinery Installation / Nexus Certificate", "Second-Hand Machinery Import Certificate", "Customs / DGFT Endorsement"] },
    { name: "Valuation Services", sub: ["New & Old Machinery Valuation", "Asset Valuation & Balance Sheet Certification", "Remaining Useful Life (RUL) Assessment", "Valuation for Bank Hypothecation / CC Limit"] },
    { name: "Project Consultancy & DPR", sub: ["Detailed Project Report (DPR) Preparation", "Bank Loan Viability & Cash Flow Modeling", "Site Inspection & Techno-Economic Viability", "EPR Advisory & Plastic Waste Compliance"] },
    { name: "Structural & Industrial Services", sub: ["Factory & Warehouse Structural Stability Certificate", "Plant Safety & Heavy Equipment Foundation Audit", "Plant Capacity & Utilization Certification", "Factory Act Compliance Support"] },
    { name: "Energy & Environmental Services", sub: ["CEIG Certificate for Solar Power Projects", "Electrical SLD Stamping & MEP Review", "Rain Water Harvesting Engineering Design", "Environmental Audit & Green Energy Advisory"] },
    { name: "Regulatory & Business Support", sub: ["EPCG / Advance Authorization Stamped Certificate", "Company Registration / GST Statutory Filings", "China Visa Consultation & Liaison", "Technical Language Translation Services"] }
  ];

  const currentSubs = serviceOptions.find(s => s.name === formData.service)?.sub || [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Step Indicator Header (Steps 1 to 3) */}
        {step < 4 && (
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
                placeholder="e.g. Valuation of 3 CNC machines for bank term loan renewal / CEIG drawing approval for 200kW solar plant."
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button 
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
                onClick={() => setStep(1)} 
                className="btn btn-outline"
                style={{ padding: '12px 22px' }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button 
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

        {/* Step 4: Success Message */}
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
              Consultation Request Received!
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

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 28px auto' }}>
              Thank you, <strong>{formData.name}</strong>. Our Chartered Engineer will review your requirements for <strong>{formData.service}</strong> and reach out within 24 business hours.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a 
                href={`https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20have%20submitted%20inquiry%20${submittedData?.inquiryId}%20for%20${encodeURIComponent(formData.service)}.`}
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
