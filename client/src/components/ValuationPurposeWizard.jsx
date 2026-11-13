import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  Clock,
  FileText,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  FileCheck,
  Building,
  Landmark,
  Calculator,
  Scale,
  Factory,
  Compass,
  AlertCircle,
  Check
} from 'lucide-react';

export const PURPOSE_PRESETS = [
  {
    id: 'home-loan',
    category: 'Banking & Financial',
    title: 'Home Loan & Housing Finance Valuation',
    shortName: 'Home Loan',
    icon: Landmark,
    accentColor: '#38bdf8',
    serviceCategory: 'Bank & Mortgage Valuation',
    suitableFor: 'Prospective home buyers, apartment/flat purchasers, and individuals applying for residential housing loans.',
    turnaround: '24 to 48 Hours',
    acceptedBy: 'Commercial Banks, Nationalized Banks, Housing Finance Companies (HFCs) & NBFCs across India.',
    methodology: 'Market Comparison Approach & Physical Site Dimension Verification',
    documents: [
      'Copy of Registered Title Deed / Sale Deed / Conveyance Deed',
      'Approved Building Plan / Map by Local Development Authority (e.g. JDA / Municipal Corp)',
      'Previous Chain Deeds (Past 13–30 years if applicable)',
      'Latest Property Tax Receipt / House Tax Challan',
      'Allotment Letter / Possession Certificate (for society/builder flats)',
      'Client / Borrower Photo ID & Site Contact Person Details'
    ]
  },
  {
    id: 'lap-mortgage',
    category: 'Banking & Financial',
    title: 'Loan Against Property (LAP) & Mortgage Security',
    shortName: 'Loan Against Property (LAP)',
    icon: Building,
    accentColor: '#38bdf8',
    serviceCategory: 'Bank & Mortgage Valuation',
    suitableFor: 'Business owners, traders, and property owners mortgaging commercial, residential, or industrial assets for working capital.',
    turnaround: '24 to 48 Hours',
    acceptedBy: 'Nationalized Banks, Private Sector Banks, NBFCs & Financial Institutions for Collateral Security.',
    methodology: 'Fair Market Value (FMV), Realizable Value (RV) & Distress / Forced Sale Value (FSV)',
    documents: [
      'Original / Certified Copy of Sale Deed / Lease Deed',
      'Pattanamah / Registry with complete land chain',
      'Approved Sanction Plan & Construction Permission',
      'Electricity Bill / Water Bill for occupancy verification',
      'Property Tax & Mutation (Namantaran) extract',
      'Bank Term Sheet / Valuation Requisition Letter (if issued)'
    ]
  },
  {
    id: 'capital-gain',
    category: 'Statutory & Tax',
    title: 'Capital Gains Tax Exemption Valuation (Sec 50C / 54)',
    shortName: 'Capital Gains Tax',
    icon: Calculator,
    accentColor: '#f59e0b',
    serviceCategory: 'Statutory & Tax Valuation',
    suitableFor: 'Property sellers looking to compute accurate capital gains, dispute circle rate mismatch under Sec 50C, or claim reinvestment exemptions under Sec 54.',
    turnaround: '2 to 3 Business Days',
    acceptedBy: 'Income Tax Department (CBDT), Assessing Officers (AO), CIT (Appeals) & Tax Tribunals (ITAT).',
    methodology: 'Indexed Cost of Acquisition, Historic Land Rates & Standardized CPWD Cost Inflation Analysis',
    documents: [
      'Sale Deed of Property sold & Date of Transfer',
      'Purchase / Acquisition Deed of Seller',
      'Details of Cost of Improvement (Renovation bills, receipts, building permissions)',
      'Stamp Duty valuation rate / DLC rate certificate on date of transfer',
      'New Property Purchase / Construction Proof (for Section 54/54F claims)'
    ]
  },
  {
    id: 'fmv-2001',
    category: 'Statutory & Tax',
    title: 'Fair Market Value (FMV) as on 01-04-2001',
    shortName: 'FMV as on 01-04-2001',
    icon: Scale,
    accentColor: '#f59e0b',
    serviceCategory: 'Statutory & Tax Valuation',
    suitableFor: 'Owners selling ancestral or inherited properties acquired prior to 1st April 2001 to substitute fair market value for purchase price.',
    turnaround: '2 to 3 Business Days',
    acceptedBy: 'Income Tax Assessing Officers, CAs for Tax Returns & ITAT Appellate Authorities.',
    methodology: 'Reverse Historic Rate Synthesis based on 2001 Circle Rates & Archived Sub-Registrar transactions (capped at 2001 Stamp Duty Value)',
    documents: [
      'Ancestral Acquisition Document / Patta / Will / Succession Deed',
      'Municipal / Gram Panchayat records confirming construction existed prior to 01-04-2001',
      'Old Electric Connection date / Water Connection records',
      'Circle Rate / DLC Rate applicable in 2001 for the specific locality',
      'Current Registered Sale Agreement / Intended Transfer Deed'
    ]
  },
  {
    id: 'plant-machinery',
    category: 'Plant & Industrial',
    title: 'Plant, Machinery & Industrial Asset Appraisal',
    shortName: 'Plant & Machinery',
    icon: Factory,
    accentColor: '#10b981',
    serviceCategory: 'Plant & Machinery Valuation',
    suitableFor: 'Industrial manufacturing units, export factories, chemical processing plants, and food processing lines.',
    turnaround: '3 to 5 Business Days',
    acceptedBy: 'Consortium Banks, NBFCs, Customs Authorities & Statutory Auditors.',
    methodology: 'Depreciated Replacement Cost (DRC) Method, Technical Residual Life & Wear/Tear Observation',
    documents: [
      'Original Purchase Invoices / Bills of Entry (for imported machinery)',
      'Machinery Nameplate Details (Make, Model, Year, Serial No, Capacity)',
      'Maintenance Logbooks & Major Overhaul Records',
      'Factory Layout Blueprint / Machine Installation Plan',
      'Previous Asset Register / Fixed Asset Schedule'
    ]
  },
  {
    id: 'chartered-engineer',
    category: 'Chartered Engineer',
    title: 'Chartered Engineer Certificate (DGFT / Customs / CEIG)',
    shortName: 'Chartered Engineer',
    icon: Compass,
    accentColor: '#38bdf8',
    serviceCategory: 'Chartered Engineer Certification',
    suitableFor: 'Exporters, importers, EPC contractors, solar power developers, and industrial manufacturers.',
    turnaround: '24 to 48 Hours',
    acceptedBy: 'Directorate General of Foreign Trade (DGFT), Customs at All Major Ports, CEIG & Ministry of Commerce.',
    methodology: 'Statutory Engineering Assessment as Corporate Member (MIE) of Institution of Engineers (India)',
    documents: [
      'Proforma Invoice / Commercial Invoice of Equipment',
      'Bill of Lading / Airway Bill (for imported machinery)',
      'Single Line Diagram (SLD) / Electrical Layout (for CEIG clearance)',
      'Technical Catalogue / OEM Specifications Sheet',
      'DGFT Application Reference / EPCG License copy (if applicable)'
    ]
  },
  {
    id: 'court-probate',
    category: 'Legal & Dispute',
    title: 'Court Probate, Partition & Succession Valuation',
    shortName: 'Court & Probate',
    icon: Scale,
    accentColor: '#f97316',
    serviceCategory: 'Evidentiary Court Valuation',
    suitableFor: 'Litigants, family members, succession heirs, and legal counsels presenting evidence in Civil/High Courts.',
    turnaround: '3 to 5 Business Days',
    acceptedBy: 'Hon’ble District Courts, High Courts, Revenue Courts & Sub-Registrar Offices.',
    methodology: 'Independent Legal-Grade Evidence Valuation with Boundary Demarcation and Architectural Plinth Audit',
    documents: [
      'Certified Copy of Will / Trust Deed / Partition Claim',
      'Court Case Number & Title (Plaintiff vs Defendant)',
      'Original Chain of Property Title Documents',
      'Site Measurement / Amin demarcation map',
      'Family Tree / Succession Certificate Copy'
    ]
  },
  {
    id: 'visa-valuation',
    category: 'Legal & Dispute',
    title: 'Visa & Immigration Financial Net Worth Valuation',
    shortName: 'Visa & Immigration',
    icon: FileText,
    accentColor: '#38bdf8',
    serviceCategory: 'Special Purpose Valuation',
    suitableFor: 'Students and immigration applicants applying for study, tourist, investor, or PR visas for Canada, USA, UK, Australia & Europe.',
    turnaround: '24 Hours Express',
    acceptedBy: 'Embassies, High Commissions, Consulates & Visa Processing Centers worldwide.',
    methodology: 'Comprehensive Asset Net Worth Report detailing Land, Building, and Liquid Equivalent Assets',
    documents: [
      'Property Registry / Allotment Letters of Applicant or Sponsoring Parents',
      'Circle Rate / DLC Rate Certificate for the Area',
      'Applicant Passport Copy & Visa Application File Number',
      'Relationship Proof if property is held in parents’ or family members’ names',
      'Latest Property Tax or Utility Bills'
    ]
  }
];

export default function ValuationPurposeWizard({ onOpenQuote }) {
  const [selectedPurposeId, setSelectedPurposeId] = useState('home-loan');
  const [selectedTab, setSelectedTab] = useState('All');

  const categories = ['All', 'Banking & Financial', 'Statutory & Tax', 'Plant & Industrial', 'Chartered Engineer', 'Legal & Dispute'];

  const filteredPresets = selectedTab === 'All'
    ? PURPOSE_PRESETS
    : PURPOSE_PRESETS.filter((p) => p.category === selectedTab);

  const activePurpose = PURPOSE_PRESETS.find((p) => p.id === selectedPurposeId) || PURPOSE_PRESETS[0];
  const ActiveIcon = activePurpose.icon;

  const handleLaunchQuote = () => {
    if (onOpenQuote) {
      onOpenQuote(activePurpose.serviceCategory, {
        purpose: activePurpose.title,
        notes: `Selected Purpose: ${activePurpose.title}. Turnaround Expected: ${activePurpose.turnaround}. Accepted by: ${activePurpose.acceptedBy}.`,
        urgency: activePurpose.turnaround
      });
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello KS Chartered Engineers, I need a valuation/certificate for: "${activePurpose.title}". I would like to discuss documents and inspection in Jaipur/Rajasthan.`
    );
    window.open(`https://wa.me/919158658885?text=${text}`, '_blank');
  };

  return (
    <section id="purpose-selector" style={{ padding: '36px 0', background: '#0b0d14', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 24px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 10px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            marginBottom: '10px'
          }}>
            <HelpCircle size={13} />
            <span>INTERACTIVE PURPOSE SELECTOR</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#eef0f5', fontWeight: 600, lineHeight: 1.25, margin: '0 0 10px 0', letterSpacing: '-0.02em' }}>
            What is the <span style={{ color: '#38bdf8' }}>Purpose</span> of Your Valuation?
          </h2>
          <p style={{ color: '#a3a9b8', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
            Select your specific requirement below to instantly view <strong>required documents</strong>, <strong>turnaround time</strong>, and <strong>statutory acceptance</strong>.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: selectedTab === cat ? 600 : 500,
                border: selectedTab === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                background: selectedTab === cat ? '#38bdf8' : '#11141c',
                color: selectedTab === cat ? '#07080d' : '#a3a9b8',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Interactive Workspace */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          {/* Left Column: Purpose Cards List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#7a8296', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
              Select Valuation Purpose ({filteredPresets.length} Options)
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '560px', overflowY: 'auto', paddingRight: '4px' }}>
              {filteredPresets.map((preset) => {
                const isSelected = preset.id === selectedPurposeId;
                const Icon = preset.icon;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setSelectedPurposeId(preset.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isSelected ? '#1a1e28' : '#11141c',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      width: '100%'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '6px',
                      background: isSelected ? 'rgba(56, 189, 248, 0.15)' : '#07080d',
                      color: isSelected ? '#38bdf8' : '#7a8296',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={18} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.90rem', fontWeight: isSelected ? 600 : 500, color: isSelected ? '#eef0f5' : '#cbd5e1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {preset.title}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: '#7a8296', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                          <Clock size={11} style={{ color: '#38bdf8' }} /> {preset.turnaround}
                        </span>
                        <span>·</span>
                        <span style={{ color: '#f59e0b', fontWeight: 500 }}>{preset.serviceCategory}</span>
                      </div>
                    </div>

                    <ArrowRight size={14} color={isSelected ? '#38bdf8' : '#7a8296'} style={{ flexShrink: 0 }} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Guidance Card */}
          <div style={{
            background: '#11141c',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            position: 'sticky',
            top: '20px'
          }}>
            {/* Header with Icon */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: '#1a1e28',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ActiveIcon size={22} />
              </div>

              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.70rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  color: '#f59e0b',
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginBottom: '4px'
                }}>
                  {activePurpose.serviceCategory}
                </span>
                <h3 style={{ fontSize: '1.2rem', color: '#eef0f5', fontWeight: 600, lineHeight: 1.3, margin: 0 }}>
                  {activePurpose.title}
                </h3>
              </div>
            </div>

            {/* Quick Summary Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              margin: '16px 0',
              padding: '12px',
              background: '#07080d',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div>
                <div style={{ fontSize: '0.70rem', color: '#7a8296', textTransform: 'uppercase', fontWeight: 600 }}>Estimated Turnaround</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <Clock size={13} style={{ color: '#10b981' }} />
                  <span>{activePurpose.turnaround}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.70rem', color: '#7a8296', textTransform: 'uppercase', fontWeight: 600 }}>Inspection Required</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <CheckCircle2 size={13} style={{ color: '#38bdf8' }} />
                  <span>On-Site Physical Audit</span>
                </div>
              </div>
            </div>

            {/* Who is it for & Acceptance */}
            <div style={{ marginBottom: '16px', fontSize: '0.84rem', color: '#a3a9b8', lineHeight: 1.55 }}>
              <p style={{ margin: '0 0 6px 0' }}>
                <strong style={{ color: '#eef0f5' }}>Target Applicability:</strong> {activePurpose.suitableFor}
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#eef0f5' }}>Statutory Acceptance:</strong> {activePurpose.acceptedBy}
              </p>
            </div>

            {/* Documents Checklist Box */}
            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '0.76rem', fontWeight: 600, color: '#7a8296', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={14} style={{ color: '#38bdf8' }} />
                <span>Documents Required for this Valuation:</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activePurpose.documents.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.80rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                    <Check size={13} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology Note */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 12px',
              background: '#1a1e28',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '6px',
              fontSize: '0.78rem',
              color: '#cbd5e1',
              marginBottom: '18px'
            }}>
              <AlertCircle size={14} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <span><strong style={{ color: '#eef0f5' }}>Methodology:</strong> {activePurpose.methodology}</span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
              <button
                onClick={handleLaunchQuote}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  background: '#F58220',
                  color: '#ffffff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'opacity 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.92'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span>Request Quotation</span>
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
                  background: '#1a1e28',
                  color: '#eef0f5',
                  borderRadius: '8px',
                  fontWeight: 500,
                  fontSize: '0.86rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#232938'}
                onMouseLeave={e => e.currentTarget.style.background = '#1a1e28'}
              >
                <MessageCircle size={14} style={{ color: '#10b981' }} />
                <span>WhatsApp Query</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
