import React, { useState } from 'react';
import {
  Landmark,
  Calculator,
  Scale,
  Building2,
  Factory,
  Briefcase,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  PhoneCall,
  Check,
  Users
} from 'lucide-react';

export const CLIENT_PERSONAS = [
  {
    id: 'banks-nbfcs',
    name: 'Banks & NBFCs',
    badge: 'Institutional Lending',
    icon: Landmark,
    accentColor: '#38bdf8',
    headline: 'Bankable Collateral Security & Mortgage Valuation',
    description: 'We deliver objective, unassailable valuation reports adhering to IBBI Standards, SARFAESI Act, and lending risk parameters for retail, MSME, and consortium loans.',
    servicesList: [
      'Home Loan & Loan Against Property (LAP) Valuations',
      'Mortgage Collateral Security & Revaluation Assessments',
      'Distress / Forced Sale Value (FSV) & Realizable Value (RV)',
      'NPA Resolution & SARFAESI Auction Reserve Price Appraisal',
      'Project Finance Stage-wise Construction Disbursement Inspection'
    ],
    highlightQuote: 'Reports prepared in standardized banking formats accepted across all nationalized and private financial institutions.'
  },
  {
    id: 'chartered-accountants',
    name: 'Chartered Accountants',
    badge: 'Taxation & Audit',
    icon: Calculator,
    accentColor: '#f59e0b',
    headline: 'Capital Gains, 2001 FMV & IndAS 16 Advisory',
    description: 'Partnering with CAs and tax advisors to provide technically documented valuations defensible before Assessing Officers, CIT (Appeals), and statutory balance sheet auditors.',
    servicesList: [
      'Fair Market Value (FMV) as on 01-04-2001 for Ancestral Properties',
      'Capital Gains Exemption under Section 50C, 54 & 54EC',
      'Asset Componentization & Useful Life Scheduling (IndAS 16 / Schedule II)',
      'Direct Tax Scrutiny & Circle Rate / Stamp Duty Dispute Reports',
      'Impairment Testing & Balance Sheet Fair Valuation'
    ],
    highlightQuote: 'Indexed acquisition costs and CPWD inflation indexes supported by historic archived DLC circle rates.'
  },
  {
    id: 'advocates-lawyers',
    name: 'Advocates & Law Firms',
    badge: 'Litigation & Court',
    icon: Scale,
    accentColor: '#f97316',
    headline: 'Evidentiary Court Valuation & Dispute Settlement',
    description: 'Independent, court-acceptable valuation reports providing authoritative expert testimony in partition suits, succession probate, and property disputes.',
    servicesList: [
      'Civil Court & High Court Evidentiary Property Valuation',
      'Family Partition, Settlement & Heritage Property Division',
      'Probate of Wills & Succession Duty Valuation',
      'Divorce & Marital Property Settlement Appraisals',
      'Arbitration, Land Acquisition & Compensation Support'
    ],
    highlightQuote: 'Field survey-backed reports with high-resolution photographic logs and boundary demarcation verification.'
  },
  {
    id: 'builders-developers',
    name: 'Builders & Developers',
    badge: 'Real Estate & Infrastructure',
    icon: Building2,
    accentColor: '#38bdf8',
    headline: 'Construction Progress & Project Cost Certificates',
    description: 'Supporting real estate developers and infrastructure contractors with independent Chartered Engineer certifications for project financing and local authority clearances.',
    servicesList: [
      'Chartered Engineer Project Cost & Estimation Certificates',
      'Stage-wise Construction Progress Reports for Bank Drawdowns',
      'Cost-to-Complete Audit for Consortium Financiers',
      'JDA & Local Authority Completion Report Documentation',
      'AutoCAD 2D Electrical Layouts, SLDs & Panel Drawings',
      'Technical Due Diligence & Pre-Acquisition Site Verification'
    ],
    highlightQuote: 'Strict adherence to CPWD item rates and sanctioned architectural blueprints for transparent progress audits.'
  },
  {
    id: 'industries-msmes',
    name: 'Industries & MSMEs',
    badge: 'Manufacturing & Export',
    icon: Factory,
    accentColor: '#10b981',
    headline: 'Plant & Machinery, DGFT EPCG & Customs Clearance',
    description: 'Empowering manufacturing plants, factories, and export units with statutory certifications to claim duty exemptions, customs clearances, and government grants.',
    servicesList: [
      'DGFT Advance Authorisation & EPCG Nexus Certificates (Appendix 4K/5A)',
      'Customs Second-Hand Machinery Import Appraisal & Residual Life',
      'Complete Plant & Machinery Valuation for Bank Hypothecation',
      'MoFPI & MSME Capital Investment Subsidy Certifications',
      'Chartered Electrical Safety (CESE) & BEE Energy Audits',
      'AutoCAD 2D SLD & Substation Equipment Layouts'
    ],
    highlightQuote: 'Official Corporate Members of Institution of Engineers (India) [CEng MIE] authorized across Central Ministries.'
  },
  {
    id: 'insolvency-rps',
    name: 'Insolvency Professionals',
    badge: 'IBC 2016 & NCLT',
    icon: ShieldCheck,
    accentColor: '#a855f7',
    headline: 'Statutory CIRP & Liquidation Asset Valuations',
    description: 'Providing Resolution Professionals (RPs) and Liquidators with rigorous Fair Value and Liquidation Value appraisals compliant with IBBI regulations.',
    servicesList: [
      'Fair Value (FV) & Liquidation Value (LV) under IBC 2016',
      'Corporate Debtor Fixed Asset Physical Verification',
      'Plant, Machinery & Factory Inventory Reconciliation',
      'Secured Creditor Realizable Value Distribution Studies',
      'Presentation-Ready Reports for Committee of Creditors (CoC)'
    ],
    highlightQuote: 'Delivering comprehensive valuation methodology as mandated by Regulation 35 of the IBBI (CIRP) Regulations.'
  },
  {
    id: 'property-owners',
    name: 'Property Owners & Buyers',
    badge: 'Individual Clients',
    icon: UserCheck,
    accentColor: '#38bdf8',
    headline: 'Independent Market Price & Visa Net Worth Reports',
    description: 'Protecting individual property owners, buyers, and immigration applicants with objective valuation reports free from commercial bias.',
    servicesList: [
      'Independent Fair Market Appraisal before Property Purchase/Sale',
      'Visa & Immigration Net Worth Valuation for Embassies worldwide',
      'Pre-Purchase Building Inspection & Structural Observation',
      'Property Measurement, Boundary Verification & Mutation Assistance',
      'Stamp Duty Rate & DLC Valuation Consultation'
    ],
    highlightQuote: 'Trusted by over 3,500+ individual property owners across Rajasthan and North India for honest, rapid assessments.'
  }
];

export default function WhoWeServe({ onOpenQuote }) {
  const [activePersonaId, setActivePersonaId] = useState('banks-nbfcs');

  const activePersona = CLIENT_PERSONAS.find((p) => p.id === activePersonaId) || CLIENT_PERSONAS[0];
  const PersonaIcon = activePersona.icon;

  const handleLaunchEnquiry = () => {
    if (onOpenQuote) {
      onOpenQuote('Assets Valuation Services', {
        purpose: `${activePersona.name} Consultation`,
        notes: `Client Segment: ${activePersona.name}. Primary Interest: ${activePersona.headline}.`,
        urgency: 'Immediate'
      });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello KS Chartered Engineers, I represent: "${activePersona.name}". I would like to consult regarding ${activePersona.headline} in Jaipur/Pan-India.`
    );
    window.open(`https://wa.me/919158658885?text=${text}`, '_blank');
  };

  return (
    <section id="who-we-serve" style={{ padding: '36px 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 24px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            background: '#eff6ff',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            color: '#0284c7',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            marginBottom: '10px'
          }}>
            <Users size={13} />
            <span>CLIENT-CENTERED PRACTICE</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#0f172a', fontWeight: 600, lineHeight: 1.25, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            Who We <span style={{ color: '#0284c7' }}>Serve</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
            Purpose-engineered valuation, technical audits, and statutory certifications tailored specifically for institutional, corporate, and individual clients.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {CLIENT_PERSONAS.map((persona) => {
            const isSelected = persona.id === activePersonaId;
            const Icon = persona.icon;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersonaId(persona.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontSize: '0.84rem',
                  fontWeight: isSelected ? 600 : 500,
                  border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? '#38bdf8' : '#11141c',
                  color: isSelected ? '#07080d' : '#a3a9b8',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={e => {
                  if (!isSelected) {
                    e.currentTarget.style.color = '#eef0f5';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isSelected) {
                    e.currentTarget.style.color = '#a3a9b8';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
              >
                <Icon size={14} />
                <span>{persona.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Persona Deep-Dive Display Card */}
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '32px 28px',
          maxWidth: '1080px',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Left Column: Context & Deliverables */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: activePersona.accentColor,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '12px'
              }}>
                <PersonaIcon size={13} />
                <span>{activePersona.badge}</span>
              </div>

              <h3 style={{
                fontSize: '1.35rem',
                color: '#0f172a',
                fontWeight: 600,
                lineHeight: 1.3,
                margin: '0 0 12px 0'
              }}>
                {activePersona.headline}
              </h3>

              <p style={{
                color: '#475569',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                margin: '0 0 20px 0'
              }}>
                {activePersona.description}
              </p>

              <div style={{
                background: '#f1f5f9',
                padding: '14px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderLeft: `3px solid ${activePersona.accentColor}`,
                fontSize: '0.84rem',
                color: '#cbd5e1',
                lineHeight: 1.55
              }}>
                <strong style={{ color: '#0f172a' }}>Why Institutional Clients Rely on Us:</strong> {activePersona.highlightQuote}
              </div>
            </div>

            {/* Right Column: Key Deliverables List & CTAs */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '24px'
            }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#7a8296', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                Specialized Services for {activePersona.name}:
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 22px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activePersona.servicesList.map((service, sIdx) => (
                  <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                    <Check size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <button
                  onClick={handleLaunchEnquiry}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    background: '#F58220',
                    color: '#0f172a',
                    borderRadius: '8px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.15s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span>Request Engagement</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  onClick={handleWhatsApp}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '10px 14px',
                    background: '#f1f5f9',
                    color: '#0f172a',
                    borderRadius: '8px',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#232938'}
                  onMouseLeave={e => e.currentTarget.style.background = '#1a1e28'}
                >
                  <PhoneCall size={14} style={{ color: '#10b981' }} />
                  <span>Direct WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
