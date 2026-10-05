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
  AlertCircle
} from 'lucide-react';

export const PURPOSE_PRESETS = [
  {
    id: 'home-loan',
    category: 'Banking & Financial',
    title: 'Home Loan & Housing Finance Valuation',
    shortName: 'Home Loan',
    icon: Landmark,
    accentColor: '#1e40af',
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
    accentColor: '#0369a1',
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
    accentColor: '#b45309',
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
    accentColor: '#92400e',
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
    title: 'Plant & Machinery Valuation / Industrial Equipment',
    shortName: 'Plant & Machinery',
    icon: Factory,
    accentColor: '#047857',
    serviceCategory: 'Plant & Machinery Valuation',
    suitableFor: 'Manufacturing units, MSMEs, factories, and commercial banks evaluating machinery for hypothecation, balance sheet, or disposal.',
    turnaround: '48 to 72 Hours (based on scale)',
    acceptedBy: 'Consortium Banks, Financial Institutions, Insurance Companies, IBC Liquidators & Chartered Accountants.',
    methodology: 'Depreciated Replacement Cost (DRC), Remaining Useful Life (RUL) & Salvage/Scrap Realization',
    documents: [
      'List of Plant & Machinery with Serial Nos., Make, Model & Year of Manufacturing',
      'Original Purchase Invoices / Bills of Entry for Imported Machinery',
      'Fixed Asset Register (FAR) with historical capitalized costs',
      'Maintenance logs, overhaul records & operating hours',
      'Equipment Layout & Electrical Single Line Diagram (SLD)'
    ]
  },
  {
    id: 'dgft-customs',
    category: 'Chartered Engineer',
    title: 'Chartered Engineer Certificate (DGFT, EPCG & Customs)',
    shortName: 'DGFT & Customs CE',
    icon: FileCheck,
    accentColor: '#1d4ed8',
    serviceCategory: 'Chartered Engineer Certification',
    suitableFor: 'Importers, exporters, and manufacturers seeking customs duty exemptions, Advance Authorisation nexus, or second-hand machinery imports.',
    turnaround: '24 to 48 Hours Express',
    acceptedBy: 'Directorate General of Foreign Trade (DGFT), Customs Appraising Officers & CBIC Ports across India.',
    methodology: 'Technical Nexus Assessment, Balance Useful Life Appraisal & Residual Value Estimation (IEI MIE Certified)',
    documents: [
      'Commercial Invoice & Packing List of Equipment',
      'Bill of Lading / Airway Bill (BL/AWB)',
      'Photographs of Machinery (showing manufacturer nameplate, serial number & rating)',
      'Catalogue / Technical Specifications & Process Flow Chart',
      'Import-Export Code (IEC) & Company PAN / GST Certificate'
    ]
  },
  {
    id: 'court-partition',
    category: 'Legal & Dispute',
    title: 'Court Valuation, Family Partition & Dispute Resolution',
    shortName: 'Court & Partition',
    icon: Scale,
    accentColor: '#7c2d12',
    serviceCategory: 'Special Purpose Valuation',
    suitableFor: 'Litigants, advocates, and families requiring unassailable, independent valuation reports for partition suits, probate, or court deposit.',
    turnaround: '3 to 4 Business Days',
    acceptedBy: 'High Courts, District Courts, Revenue Courts & Arbitration Panels across India.',
    methodology: 'Statutory Fair Market Value backed by physical survey, boundary verification & photographic evidence',
    documents: [
      'Copy of Court Plaint / Written Statement or Suit Number (if filed)',
      'Title Deeds, Partition Maps, or Family Settlement Agreement',
      'Revenue records (Jamabandi, Khasra Map, Trace)',
      'Encumbrance Certificate / Non-encumbrance verification',
      'Details of disputing parties and property possession status'
    ]
  },
  {
    id: 'ibc-nclt',
    category: 'Corporate & IBC',
    title: 'IBC / NCLT Insolvency & Liquidation Valuation',
    shortName: 'IBC / NCLT Insolvency',
    icon: ShieldCheck,
    accentColor: '#4338ca',
    serviceCategory: 'IBC / NCLT / Corporate Valuation',
    suitableFor: 'Resolution Professionals (RPs), Liquidators, Committee of Creditors (CoC) and corporate restructuring bodies.',
    turnaround: '5 to 7 Business Days',
    acceptedBy: 'National Company Law Tribunal (NCLT), Insolvency & Bankruptcy Board of India (IBBI) & Banks.',
    methodology: 'Fair Value (FV) & Liquidation Value (LV) in accordance with IBBI Valuation Standards & IBC 2016',
    documents: [
      'NCLT Admission Order / Appointment Order of RP or Liquidator',
      'Audited Financial Statements & Fixed Asset Register as of Insolvency Commencement Date (ICD)',
      'Title deeds of land & buildings, factory layouts & lease contracts',
      'Machinery inventory & asset physical verification registers',
      'Details of encumbrances, hypothecations, and ongoing disputes'
    ]
  },
  {
    id: 'project-cost',
    category: 'Project & Construction',
    title: 'Project Cost & Construction Progress Certification',
    shortName: 'Project Cost Certificate',
    icon: Compass,
    accentColor: '#0f766e',
    serviceCategory: 'Project & Construction Services',
    suitableFor: 'Builders, industrial developers, and entrepreneurs seeking bank loan disbursements, MoFPI subsidies, or MSME grant verification.',
    turnaround: '2 to 3 Business Days',
    acceptedBy: 'Project Finance Banks, State Financial Corporations (RFC), MoFPI, MSME Ministries & Subsidy Authorities.',
    methodology: 'Item-rate CPWD/PWD Analysis, Stage-wise Bill of Quantities (BOQ) Audit & Physical Progress Inspection',
    documents: [
      'Detailed Project Report (DPR) / Approved Techno-Economic Feasibility Report',
      'Architectural Layouts, Structural Drawings & Sanctioned Building Maps',
      'Contractor Work Orders, Invoices & Running Account (RA) Bills',
      'Expenditure Incurred Certificate certified by Chartered Accountant',
      'Photographic evidence of civil construction progress on-site'
    ]
  },
  {
    id: 'visa-valuation',
    category: 'Legal & Dispute',
    title: 'Visa & Immigration Financial Net Worth Valuation',
    shortName: 'Visa & Immigration',
    icon: FileText,
    accentColor: '#0284c7',
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

  const categories = ['All', 'Banking & Financial', 'Statutory & Tax', 'Plant & Industrial', 'Chartered Engineer', 'Legal & Dispute', 'Corporate & IBC'];

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
      `Hello MS Chartered Engineers, I need a valuation/certificate for: "${activePurpose.title}". I would like to discuss documents and inspection in Jaipur/Rajasthan.`
    );
    window.open(`https://wa.me/919158658885?text=${text}`, '_blank');
  };

  return (
    <section id="purpose-selector" style={{ padding: '30px 0', background: '#F4F0E8', borderBottom: '1px solid #E8E2D8' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 18px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            borderRadius: '9999px',
            color: '#065f46',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '8px'
          }}>
            <HelpCircle size={14} />
            <span>INTERACTIVE PURPOSE SELECTOR</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
            What is the <span style={{ color: '#b45309' }}>Purpose</span> of Your Valuation?
          </h2>
          <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.55 }}>
            Select your specific requirement below to instantly view <strong>required documents</strong>, <strong>turnaround time</strong>, and <strong>statutory acceptance</strong>.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '18px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                border: selectedTab === cat ? '1px solid #0f172a' : '1px solid #cbd5e1',
                background: selectedTab === cat ? '#0f172a' : '#ffffff',
                color: selectedTab === cat ? '#ffffff' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
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
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
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
                      gap: '14px',
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #0f172a' : '1px solid #E8E2D8',
                      background: isSelected ? '#ffffff' : '#FAF8F5',
                      boxShadow: isSelected ? '0 6px 20px rgba(15, 23, 42, 0.08)' : 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: isSelected ? '#0f172a' : '#f1f5f9',
                      color: isSelected ? '#fbbf24' : '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Icon size={20} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.94rem', fontWeight: isSelected ? 700 : 600, color: isSelected ? '#0f172a' : '#334155' }}>
                        {preset.title}
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>⏱️ {preset.turnaround}</span>
                        <span>•</span>
                        <span style={{ color: '#b45309', fontWeight: 600 }}>{preset.serviceCategory}</span>
                      </div>
                    </div>

                    <ArrowRight size={16} color={isSelected ? '#0f172a' : '#cbd5e1'} style={{ flexShrink: 0 }} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep-Dive Guidance Card */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
            padding: '28px',
            position: 'sticky',
            top: '20px'
          }}>
            {/* Header with Icon */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', paddingBottom: '18px', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                color: '#1d4ed8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ActiveIcon size={24} />
              </div>

              <div>
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: '#b45309',
                  background: '#fef3c7',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  marginBottom: '4px'
                }}>
                  {activePurpose.serviceCategory}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 800, lineHeight: 1.3 }}>
                  {activePurpose.title}
                </h3>
              </div>
            </div>

            {/* Quick Summary Pill Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              margin: '18px 0',
              padding: '12px',
              background: '#FAF8F5',
              borderRadius: '10px',
              border: '1px solid #E8E2D8'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Estimated Turnaround</div>
                <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <Clock size={15} color="#059669" />
                  <span>{activePurpose.turnaround}</span>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Inspection Required</div>
                <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <CheckCircle2 size={15} color="#1d4ed8" />
                  <span>On-Site Physical Audit</span>
                </div>
              </div>
            </div>

            {/* Who is it for & Acceptance */}
            <div style={{ marginBottom: '18px', fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
              <p style={{ marginBottom: '8px' }}>
                <strong style={{ color: '#0f172a' }}>Target Applicability:</strong> {activePurpose.suitableFor}
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#0f172a' }}>Statutory Acceptance:</strong> {activePurpose.acceptedBy}
              </p>
            </div>

            {/* Documents Checklist Box */}
            <div style={{ marginBottom: '22px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FileText size={16} color="#b45309" />
                <span>Documents Required for this Valuation:</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {activePurpose.documents.map((doc, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#334155', lineHeight: 1.45 }}>
                    <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
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
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '8px',
              fontSize: '0.78rem',
              color: '#92400e',
              marginBottom: '20px'
            }}>
              <AlertCircle size={15} style={{ flexShrink: 0 }} />
              <span><strong>Methodology:</strong> {activePurpose.methodology}</span>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              <button
                onClick={handleLaunchQuote}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  background: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.15)'
                }}
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={handleWhatsApp}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 18px',
                  background: '#25D366',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)'
                }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp Query</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
