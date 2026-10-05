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
  Sparkles
} from 'lucide-react';

export const CLIENT_PERSONAS = [
  {
    id: 'banks-nbfcs',
    name: 'Banks & NBFCs',
    badge: 'Institutional Lending',
    icon: Landmark,
    accentColor: '#1e40af',
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
    accentColor: '#b45309',
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
    accentColor: '#7c2d12',
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
    accentColor: '#0f766e',
    headline: 'Construction Progress & Project Cost Certificates',
    description: 'Supporting real estate developers and infrastructure contractors with independent Chartered Engineer certifications for project financing and local authority clearances.',
    servicesList: [
      'Chartered Engineer Project Cost & Estimation Certificates',
      'Stage-wise Construction Progress Reports for Bank Drawdowns',
      'Cost-to-Complete Audit for Consortium Financiers',
      'JDA & Local Authority Completion Report Documentation',
      'Technical Due Diligence & Pre-Acquisition Site Verification'
    ],
    highlightQuote: 'Strict adherence to CPWD item rates and sanctioned architectural blueprints for transparent progress audits.'
  },
  {
    id: 'industries-msmes',
    name: 'Industries & MSMEs',
    badge: 'Manufacturing & Export',
    icon: Factory,
    accentColor: '#047857',
    headline: 'Plant & Machinery, DGFT EPCG & Customs Clearance',
    description: 'Empowering manufacturing plants, factories, and export units with statutory certifications to claim duty exemptions, customs clearances, and government grants.',
    servicesList: [
      'DGFT Advance Authorisation & EPCG Nexus Certificates (Appendix 4K/5A)',
      'Customs Second-Hand Machinery Import Appraisal & Residual Life',
      'Complete Plant & Machinery Valuation for Bank Hypothecation',
      'MoFPI & MSME Capital Investment Subsidy Certifications',
      'Chartered Electrical Safety (CESE) & BEE Energy Audits'
    ],
    highlightQuote: 'Official Corporate Members of Institution of Engineers (India) [CEng MIE] authorized across Central Ministries.'
  },
  {
    id: 'insolvency-rps',
    name: 'Insolvency Professionals',
    badge: 'IBC 2016 & NCLT',
    icon: ShieldCheck,
    accentColor: '#4338ca',
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
    accentColor: '#0284c7',
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
      `Hello MS Chartered Engineers, I represent: "${activePersona.name}". I would like to consult regarding ${activePersona.headline} in Jaipur/Pan-India.`
    );
    window.open(`https://wa.me/919158658885?text=${text}`, '_blank');
  };

  return (
    <section id="who-we-serve" style={{ padding: '30px 0', background: '#FAF8F5', borderBottom: '1px solid #E8E2D8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 18px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '9999px',
            color: '#1d4ed8',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}>
            <Sparkles size={14} />
            <span>CLIENT-CENTERED ARCHITECTURE</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
            Who We <span style={{ color: '#b45309' }}>Serve</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.55 }}>
            Purpose-engineered valuation, technical audits, and statutory certifications tailored specifically for institutional, corporate, and individual clients.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '18px'
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
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.86rem',
                  fontWeight: isSelected ? 700 : 600,
                  border: isSelected ? '1px solid #0f172a' : '1px solid #E8E2D8',
                  background: isSelected ? '#0f172a' : '#ffffff',
                  color: isSelected ? '#fbbf24' : '#334155',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 4px 12px rgba(15, 23, 42, 0.12)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} />
                <span>{persona.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Persona Deep-Dive Display Card */}
        <div className="who-we-serve-card">
          <div className="who-we-serve-grid">
            {/* Left Column: Context & Deliverables */}
            <div className="who-we-serve-col">
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: activePersona.accentColor,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '10px'
              }}>
                <PersonaIcon size={14} />
                <span>{activePersona.badge}</span>
              </div>

              <h3 className="who-we-serve-headline">
                {activePersona.headline}
              </h3>

              <p className="who-we-serve-desc">
                {activePersona.description}
              </p>

              <div 
                className="who-we-serve-quote-box"
                style={{ borderLeft: `4px solid ${activePersona.accentColor}` }}
              >
                <strong>Why Institutional Clients Rely on Us:</strong> {activePersona.highlightQuote}
              </div>
            </div>

            {/* Right Column: Key Deliverables List & CTAs */}
            <div className="who-we-serve-col">
              <div className="who-we-serve-deliverables-card">
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                  Specialized Services for {activePersona.name}:
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activePersona.servicesList.map((service, sIdx) => (
                    <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#334155', lineHeight: 1.45 }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ wordBreak: 'break-word' }}>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="who-we-serve-cta-grid">
                  <button
                    onClick={handleLaunchEnquiry}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '11px 16px',
                      background: '#0f172a',
                      color: '#ffffff',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
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
                      gap: '8px',
                      padding: '11px 16px',
                      background: '#25D366',
                      color: '#ffffff',
                      borderRadius: '10px',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                  >
                    <PhoneCall size={14} />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
