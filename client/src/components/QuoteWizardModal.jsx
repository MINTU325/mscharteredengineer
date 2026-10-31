import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, Send, Sparkles, 
  Phone, MessageSquare, FileText, CheckCircle, Zap, 
  Landmark, Laptop, ShieldCheck, ChevronDown, Check, Hammer
} from 'lucide-react';

export const ELECTRICAL_SERVICE_SUB_OPTIONS = [
  "High Voltage Circuit Breaker Testing Services",
  "Transformer Testing Services (Routine & Diagnostic)",
  "Numerical & Protection Relay Testing & Calibration",
  "Earth Pit & Soil Resistivity Testing Services",
  "BDV Test Kits & Electrical Calibration Service",
  "Power & Distribution Transformer Installation",
  "HT Panel & Switchgear Installation Services",
  "Electrical Substation Installation & Erection (11kV to 132kV)",
  "Chemical Earthing & Lightning Arrester Installation",
  "Diesel Generator (DG Set) & Synchronizing Panel Erection",
  "Power & Distribution Transformer Overhauling & Maintenance",
  "Comprehensive & Non-Comprehensive Electrical AMC Services",
  "HT & LT Switchgear Servicing & Retrofitting",
  "Ultra-High Vacuum Transformer Oil Filtration & Dehydration",
  "On-Load Tap Changer (OLTC) Servicing, Spares & Overhauling",
  "HT & LT Heavy Duty Cable Laying Services",
  "HT Cable Heat/Cold Shrink Jointing & Termination Services",
  "Fire Retardant Cable Coating & Fire Barrier Paint",
  "Comprehensive Electrical Safety Audit & Compliance",
  "Infrared Thermography & Thermal Hotspot Inspection",
  "Third-Party Electrical Inspection & CEIG Approval Liaison",
  "Turnkey HT/LT Electrical Contracting & Industrial Works",
  "11kV / 33kV Overhead Transmission Line Erection Services",
  "Industrial Transformer Rental Services (100 kVA to 5000 kVA)"
];

export const DEPARTMENTS = {
  electrical: {
    id: 'electrical',
    name: 'Electrical & Substation Engineering Services',
    shortName: 'Electrical & Substation',
    badgeText: '⚡ Electrical & Substation Engineering Division',
    themeColor: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.12)',
    accentBorder: 'rgba(245, 158, 11, 0.3)',
    icon: Zap,
    defaultPurpose: 'Site Testing, Installation & Commissioning',
    scaleLabel: 'Substation Voltage / Project Scale',
    scaleOptions: [
      '11 kV Industrial Substation',
      '33 kV Substation & Overhead Transmission',
      '66 kV / 132 kV Grid Substation',
      'LT 415V Panel & Factory Power Distribution',
      'Transformer AMC / Oil Filtration & Testing',
      'Turnkey Testing & Commissioning Works'
    ],
    scopePlaceholder: 'e.g. 33kV VCB relay testing, 2000 kVA transformer oil filtration, or plant safety audit at Sitapura industrial area.',
    services: ELECTRICAL_SERVICE_SUB_OPTIONS
  },
  subsidies: {
    id: 'subsidies',
    name: 'Government Subsidies & Grants',
    shortName: 'Government Subsidies',
    badgeText: '🏛️ Central & State Government Subsidies & Grants Division',
    themeColor: '#10b981',
    accentBg: 'rgba(16, 185, 129, 0.12)',
    accentBorder: 'rgba(16, 185, 129, 0.3)',
    icon: Landmark,
    defaultPurpose: 'Government Subsidy Claim & DPR Preparation',
    scaleLabel: 'Proposed Project / Investment Scale',
    scaleOptions: [
      'Under ₹25 Lakhs (Micro Enterprise)',
      '₹25 Lakhs - ₹1 Crore (Small Enterprise)',
      '₹1 Crore - ₹5 Crores (Medium Enterprise)',
      '₹5 Crores - ₹25 Crores (Large Scale Project)',
      'Above ₹25 Crores (Mega / Ultra-Mega Project)'
    ],
    scopePlaceholder: 'e.g. Setting up a food processing unit in Jaipur under PM-FME / RIPS 2024, need bankable DPR and subsidy claim support.',
    services: [
      'RIPS 2024 (Rajasthan Investment Promotion Scheme - Capital & Interest Subsidy)',
      'PMEGP (Prime Minister Employment Generation Programme - Up to 35% Subsidy)',
      'Dr. B.R. Ambedkar Dalit & Tribal Enterprise Scheme (Up to ₹2 Cr Subsidy)',
      'VYUPY / Mukhyamantri Laghu Udyog Protsahan Yojana (MLUPY)',
      'PM-FME (Food Processing Units Capital Subsidy - Up to ₹10 Lakhs)',
      'Ministry of Textiles GREAT Scheme (Up to ₹50 Lakhs Grant)',
      'NABARD & National Horticulture Board (NHB) Cold Chain / Agri Grants',
      'PM Kusum & Solar Power Plant State Capital Subsidies',
      'MSME ZED / LEAN Certification & Technology Upgradation Subsidy',
      'Central Capital Investment Subsidy (CCIS) & State Industrial Policy',
      'Custom DPR & TEV Study for Government Subsidy Claim'
    ]
  },
  loans: {
    id: 'loans',
    name: 'Business, MSME & Machinery Loans',
    shortName: 'Business & Machinery Loans',
    badgeText: '💼 Industrial Finance, Banking & Machinery Loans Division',
    themeColor: '#0284c7',
    accentBg: 'rgba(2, 132, 199, 0.12)',
    accentBorder: 'rgba(2, 132, 199, 0.3)',
    icon: FileText,
    defaultPurpose: 'Bank Loan Sanction & TEV Study',
    scaleLabel: 'Required Loan / Funding Amount',
    scaleOptions: [
      '₹10 Lakhs - ₹50 Lakhs (Micro / Small Loan)',
      '₹50 Lakhs - ₹2 Crores (CGTMSE / Plant Loan)',
      '₹2 Crores - ₹5 Crores (Collateral-Free / Machinery Loan)',
      '₹5 Crores - ₹25 Crores (Project Term Finance)',
      'Above ₹25 Crores (Consortium / Large Industrial Project)'
    ],
    scopePlaceholder: 'e.g. Need ₹2.5 Cr machinery term loan + ₹50 Lakhs CC limit for automated manufacturing line with TEV DPR.',
    services: [
      'CGTMSE Collateral-Free MSME Loan (Up to ₹5 Cr)',
      'Industrial Plant & Machinery Finance',
      'Industrial Long-Term Project Finance',
      'Bankable TEV Study & Detailed Project Report (DPR)',
      'Working Capital Limits (Cash Credit / Overdraft)',
      'Loan Against Property (LAP - Industrial / Commercial)',
      'PMEGP Bank Loan with Subsidy Linkage',
      'Greenfield / Brownfield Project Debt Syndication'
    ]
  },
  tech: {
    id: 'tech',
    name: 'IT, AI & Software Development',
    shortName: 'IT & Software Solutions',
    badgeText: '💻 MS Tech Labs — AI, Enterprise Software & Mobile Apps',
    themeColor: '#a855f7',
    accentBg: 'rgba(168, 85, 247, 0.12)',
    accentBorder: 'rgba(168, 85, 247, 0.3)',
    icon: Laptop,
    defaultPurpose: 'Software Engineering & Custom Development',
    scaleLabel: 'Target Platform / Project Scope',
    scaleOptions: [
      'Mobile Application (Native Android & iOS)',
      'Enterprise ERP / Web Platform',
      'AI Agent / Chatbot Automation',
      'Custom SaaS Product Development',
      'Consultation & MVP Architecture'
    ],
    scopePlaceholder: 'e.g. Custom ERP and Android app for industrial inventory, dispatch tracking and field technician reporting.',
    services: [
      'AI Integration & Intelligent Chatbots (RAG Agents)',
      'Custom Business ERP & CRM Software',
      'Native Android Mobile App Development',
      'Native iOS Mobile App Development',
      'Cross-Platform Mobile App (Flutter / React Native)',
      'Full-Stack Web Application & Cloud SaaS',
      'E-Commerce Web Portal & Mobile App',
      'Cloud Infrastructure, DevOps & API Integrations',
      'UI/UX Design & Product Prototyping'
    ]
  },
  valuation: {
    id: 'valuation',
    name: 'Chartered Engineer & Assets Valuation Services',
    shortName: 'Chartered Engineer & Valuation',
    badgeText: '📜 Chartered Engineer & Approved Assets Valuation Division',
    themeColor: '#d4a843',
    accentBg: 'rgba(212, 168, 67, 0.12)',
    accentBorder: 'rgba(212, 168, 67, 0.3)',
    icon: ShieldCheck,
    defaultPurpose: 'Bank Loan & Hypothecation',
    scaleLabel: 'Approximate Asset / Plant Valuation Scale',
    scaleOptions: [
      'Under ₹25 Lakhs',
      '₹25 Lakhs - ₹1 Crore',
      '₹1 Crore - ₹5 Crores',
      '₹5 Crores - ₹25 Crores',
      'Above ₹25 Crores (Large Industrial / Plant Scale)'
    ],
    scopePlaceholder: 'e.g. Plant and machinery valuation for SBI term loan / Customs CE certificate for imported machine.',
    services: [
      'Plant & Machinery Valuation (FMV, FSV, WDV)',
      'Land & Building / Commercial Property Valuation',
      'Bank Loan & Mortgage Valuation (Nationalised / Private Banks)',
      'DGFT Advance Authorisation & EPCG Certification',
      'Customs Import Used Machinery Valuation & Inspection',
      'Income Tax 2001 Fair Market Valuation & Capital Gains',
      'IBC 2016 & NCLT Insolvency Valuation',
      'Remaining Useful Life (RLA) Assessment of Machinery',
      'Chartered Electrical Safety Engineer (CESE) & BEE Energy Audit',
      'AutoCAD 2D Electrical Drafting & Single Line Diagrams (SLD)',
      'FSSAI Food Safety & Regulatory Compliance',
      'Technical Advisory & IndAS 16 Asset Componentization',
      'Third-Party Audit & Inspection Services (PDI, CLS, DUPRO)'
    ]
  },
  fabrication: {
    id: 'fabrication',
    name: 'Heavy Industrial & Architectural Fabrication Works',
    shortName: 'Industrial Fabrication',
    badgeText: '🏗️ Industrial Fabrication & PEB Shed Division',
    themeColor: '#f59e0b',
    accentBg: 'rgba(245, 158, 11, 0.12)',
    accentBorder: 'rgba(245, 158, 11, 0.3)',
    icon: Hammer,
    defaultPurpose: 'Turnkey Supply, Fabrication & On-Site Erection',
    scaleLabel: 'Fabrication Tonnage / Shed Area Scale',
    scaleOptions: [
      'Under 5 MT / Small Workshop Shed (Under 1,500 sq.ft)',
      '5 MT - 20 MT / Medium Industrial Shed (1,500 - 5,000 sq.ft)',
      '20 MT - 50 MT / Large Factory Shed / Chimney Stack',
      '50 MT - 150 MT / Heavy PEB Warehouse & Structural Framework',
      'Above 150 MT / Large Turnkey Industrial Plant Project'
    ],
    scopePlaceholder: 'e.g. 30m industrial exhaust chimney stack with scaffolding / 5,000 sq.ft factory PEB shed at Sitapura industrial area.',
    services: [
      'Industrial Steel Chimneys & Boiler Exhaust Stacks (Self-Supporting / Guyed)',
      'Factory PEB Shed & Industrial Warehouse Fabrication',
      'Heavy Iron Fabrication Work (Motorized Sliding Gates, Shutters & Grills)',
      'Industrial Flue Gas Ducting, Breeching & Silencers',
      'Structural Steel Framework, Overhead Crane Gantry & Mezzanine Floors',
      'Circular Walkway Platforms, Caged Ladders & Spiral Staircases',
      'Stainless Steel (SS 304/316) & Toughened Glass Balcony / Stair Railings',
      'Aluminium Architectural Glazing, Structural Facades & Partitions',
      'High-Tensile Invisible Safety Grills & Mosquito Mesh Solutions',
      'Custom Industrial Heavy Equipment Base Frames & Skids'
    ]
  }
};

export function detectDepartment(currentRoute, initialService, prefillData) {
  // 1. Explicit prefill tags
  if (prefillData?.department && DEPARTMENTS[prefillData.department]) {
    return prefillData.department;
  }
  if (prefillData?.isFabrication) return 'fabrication';
  if (prefillData?.isElectrical) return 'electrical';
  if (prefillData?.isSubsidies) return 'subsidies';
  if (prefillData?.isLoans) return 'loans';
  if (prefillData?.isTech) return 'tech';

  // 2. Check route
  const route = (currentRoute || window.location?.pathname || '').toLowerCase().replace(/\/$/, '');
  if (route === '/fabrication-services' || route === '/fabrication' || route === '/tin-shed' || route === '/iron-fabrication' || route === '/tin-shed-fabrication') return 'fabrication';
  if (route === '/electrical-services' || route === '/substation-services') return 'electrical';
  if (route === '/government-subsidies' || route === '/subsidies') return 'subsidies';
  if (route === '/business-loans' || route === '/business-loan' || route === '/loans') return 'loans';
  if (route === '/tech-products' || route === '/tech' || route === '/software-products' || route === '/it-solutions') return 'tech';
  if (route === '/chartered-engineer' || route === '/services' || route === '/valuation' || route === '/property-valuation' || route === '/bank-valuation' || route === '/tax-valuation' || route === '/ibc-valuation' || route === '/machinery-valuation') return 'valuation';

  // 3. Check service name / prefill text keywords
  const textToSearch = `${initialService || ''} ${prefillData?.title || ''} ${prefillData?.category || ''}`.toLowerCase();
  
  if (textToSearch.includes('fabrication') || textToSearch.includes('tin shed') || textToSearch.includes('iron') || textToSearch.includes('chimney') || textToSearch.includes('exhaust stack') || textToSearch.includes('peb shed') || textToSearch.includes('breeching') || textToSearch.includes('railing')) {
    return 'fabrication';
  }
  if (textToSearch.includes('electrical') || textToSearch.includes('substation') || textToSearch.includes('transformer') || textToSearch.includes('breaker') || textToSearch.includes('relay') || textToSearch.includes('earthing') || textToSearch.includes('switchgear')) {
    return 'electrical';
  }
  if (textToSearch.includes('subsidy') || textToSearch.includes('subsidies') || textToSearch.includes('rips') || textToSearch.includes('pmegp') || textToSearch.includes('ambedkar') || textToSearch.includes('grant') || textToSearch.includes('vyupy') || textToSearch.includes('pm-fme')) {
    return 'subsidies';
  }
  if (textToSearch.includes('loan') || textToSearch.includes('cgtmse') || textToSearch.includes('working capital') || textToSearch.includes('finance') || textToSearch.includes('tev study') || textToSearch.includes('dpr')) {
    return 'loans';
  }
  if (textToSearch.includes('app') || textToSearch.includes('software') || textToSearch.includes('ai integration') || textToSearch.includes('erp') || textToSearch.includes('saas') || textToSearch.includes('tech product')) {
    return 'tech';
  }

  // Default to valuation
  return 'valuation';
}

export default function QuoteWizardModal({ isOpen, onClose, initialService, prefillData, currentRoute }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState('');
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);

  const isValuationFlow = Boolean(prefillData?.isValuationReport);

  const [activeDept, setActiveDept] = useState(() => 
    detectDepartment(currentRoute, initialService, prefillData)
  );

  const currentDeptConfig = DEPARTMENTS[activeDept] || DEPARTMENTS.valuation;
  const DeptIcon = currentDeptConfig.icon;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: currentDeptConfig.name,
    subCategory: currentDeptConfig.services[0],
    location: 'Jaipur, Rajasthan',
    estimatedAssetValue: currentDeptConfig.scaleOptions[1] || currentDeptConfig.scaleOptions[0],
    urgency: 'Immediate (Within 48-72 Hours Express)',
    projectScope: '',
    purpose: currentDeptConfig.defaultPurpose,
    notes: ''
  });

  // Re-sync on modal open or context changes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setError('');
      setSubmittedData(null);
      setShowDeptDropdown(false);

      if (prefillData?.isValuationReport) {
        setActiveDept('valuation');
        setFormData(prev => ({
          ...prev,
          service: 'Chartered Engineer & Assets Valuation Services',
          subCategory: 'Official Stamped Machinery Valuation Report',
          estimatedAssetValue: prefillData.fairMarketValueRange || `₹ ${Number(prefillData.originalCost || 0).toLocaleString('en-IN')}`,
          urgency: 'Immediate (Within 48-72 Hours Express)',
          location: prev.location || 'Jaipur, Rajasthan',
          purpose: 'Bank Loan & Hypothecation',
          notes: ''
        }));
      } else {
        const resolvedDept = detectDepartment(currentRoute, initialService, prefillData);
        setActiveDept(resolvedDept);
        const deptConfig = DEPARTMENTS[resolvedDept] || DEPARTMENTS.valuation;

        // Find best matching service in that department
        let matchedSub = deptConfig.services[0];
        const searchTarget = (initialService || prefillData?.title || '').toLowerCase();
        
        if (searchTarget) {
          const found = deptConfig.services.find(s => {
            const sLower = s.toLowerCase();
            return sLower.includes(searchTarget) || searchTarget.includes(sLower.slice(0, 15));
          });
          if (found) matchedSub = found;
        }

        setFormData(prev => ({
          ...prev,
          service: deptConfig.name,
          subCategory: matchedSub,
          projectScope: prefillData?.shortDesc || (searchTarget && searchTarget !== matchedSub.toLowerCase() ? `Inquiry regarding ${initialService}` : ''),
          purpose: deptConfig.defaultPurpose,
          estimatedAssetValue: deptConfig.scaleOptions[1] || deptConfig.scaleOptions[0]
        }));
      }
    }
  }, [isOpen, initialService, prefillData, currentRoute]);

  const handleDepartmentChange = (newDeptKey) => {
    if (!DEPARTMENTS[newDeptKey]) return;
    setActiveDept(newDeptKey);
    const newConfig = DEPARTMENTS[newDeptKey];
    setFormData(prev => ({
      ...prev,
      service: newConfig.name,
      subCategory: newConfig.services[0],
      purpose: newConfig.defaultPurpose,
      estimatedAssetValue: newConfig.scaleOptions[1] || newConfig.scaleOptions[0]
    }));
    setShowDeptDropdown(false);
  };

  if (!isOpen) return null;

  const generateWhatsAppMessage = (inquiryRef) => {
    if (isValuationFlow && prefillData) {
      return (
`🔔 *New Stamped Valuation Report Request - KS Chartered Engineers*
━━━━━━━━━━━━━━━━━━━━━━
🆔 *Ref ID:* ${inquiryRef}
👤 *Client Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
🏢 *Company / Firm:* ${formData.company || 'Individual / Proprietor'}
📧 *Email Address:* ${formData.email || 'N/A'}
📍 *Site Location:* ${formData.location || 'Jaipur, Rajasthan'}

🏭 *Machinery / Asset:* ${prefillData.assetType}
💰 *Original Purchase Cost:* ₹${Number(prefillData.originalCost || 0).toLocaleString('en-IN')}
⏳ *Asset Age:* ${prefillData.assetAgeYears} Years (Remaining Life: ${prefillData.estimatedRUL})
📊 *Estimated Fair Market Value:* ${prefillData.fairMarketValueRange}
📋 *Purpose of Valuation:* ${formData.purpose || 'Bank Loan & Hypothecation'}
⏱️ *Required Timeline:* ${formData.urgency || 'Immediate'}
${formData.notes ? `📝 *Client Notes:* ${formData.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
_Directly sent via mscharteredengineer.com_`
      );
    }

    const deptTag = currentDeptConfig.badgeText.split(' ')[0] || '🔔';

    return (
`${deptTag} *New ${currentDeptConfig.shortName} Inquiry - KS Chartered Engineers*
━━━━━━━━━━━━━━━━━━━━━━
🆔 *Ref ID:* ${inquiryRef}
👤 *Client Name:* ${formData.name}
📞 *Phone Number:* ${formData.phone}
🏢 *Company / Factory:* ${formData.company || 'Direct Client'}
📧 *Email Address:* ${formData.email || 'N/A'}
📍 *Location / Site:* ${formData.location || 'Pan India'}

📋 *Service Required:* ${formData.subCategory}
🏛️ *Division:* ${currentDeptConfig.name}
📊 *${currentDeptConfig.scaleLabel}:* ${formData.estimatedAssetValue}
⏱️ *Timeline:* ${formData.urgency || 'Standard'}
${formData.projectScope ? `📝 *Requirement Notes:* ${formData.projectScope}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
_Directly sent via mscharteredengineer.com_`
    );
  };

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
      service: currentDeptConfig.name,
      subCategory: finalSubCategory,
      location: formData.location || 'Pan India',
      estimatedAssetValue: finalAssetValue,
      urgency: formData.urgency,
      projectScope: finalScope || `Consultation request for ${finalSubCategory} under ${currentDeptConfig.shortName}.`
    };

    let inqId = "INQ-" + Math.floor(100000 + Math.random() * 900000);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        inqId = data.inquiryId || inqId;
        setSubmittedData(data);
        setStep(4);
      } else {
        setError(data.message || 'Error submitting request. Please try again.');
        return;
      }
    } catch (err) {
      // Offline fallback
      setSubmittedData({
        inquiryId: inqId,
        data: payload
      });
      setStep(4);
    } finally {
      setLoading(false);
    }

    // Direct WhatsApp Auto-Launch
    const waText = encodeURIComponent(generateWhatsAppMessage(inqId));
    const waUrl = `https://wa.me/919158658885?text=${waText}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 250);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
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
                  <ShieldCheck size={13} />
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

            {prefillData && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(24, 90, 219, 0.18) 0%, rgba(15, 26, 54, 0.7) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.35)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                marginBottom: '22px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px' }}>
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
        {/* CASE B: DYNAMIC CONTEXTUAL 3-STEP CONSULTATION WIZARD        */}
        {/* ============================================================ */}
        {!isValuationFlow && step < 4 && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              {/* Dynamic Header & Switcher */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                <span 
                  className="section-badge" 
                  style={{ 
                    marginBottom: 0, 
                    padding: '5px 14px', 
                    fontSize: '0.78rem',
                    background: currentDeptConfig.accentBg,
                    border: `1px solid ${currentDeptConfig.accentBorder}`,
                    color: currentDeptConfig.themeColor,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <DeptIcon size={14} color={currentDeptConfig.themeColor} />
                  <span>{currentDeptConfig.badgeText}</span>
                </span>

                {/* Minimal Department Switcher for complete flexibility */}
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onClick={() => setShowDeptDropdown(!showDeptDropdown)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#94a3b8',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Change Division</span>
                    <ChevronDown size={12} />
                  </button>

                  {showDeptDropdown && (
                    <div style={{
                      position: 'absolute',
                      right: 0,
                      top: '100%',
                      marginTop: '6px',
                      background: '#0d1829',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
                      zIndex: 100,
                      minWidth: '260px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ padding: '8px 12px', fontSize: '0.70rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        Select Department
                      </div>
                      {Object.keys(DEPARTMENTS).map((deptKey) => {
                        const d = DEPARTMENTS[deptKey];
                        const isSelected = deptKey === activeDept;
                        return (
                          <div
                            key={deptKey}
                            onClick={() => handleDepartmentChange(deptKey)}
                            style={{
                              padding: '10px 14px',
                              fontSize: '0.82rem',
                              color: isSelected ? d.themeColor : '#cbd5e1',
                              background: isSelected ? 'rgba(255,255,255,0.06)' : 'transparent',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              borderBottom: '1px solid rgba(255,255,255,0.03)'
                            }}
                            onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                            onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.background = 'transparent'; }}
                          >
                            <span>{d.shortName}</span>
                            {isSelected && <Check size={14} color={d.themeColor} />}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '4px 0' }}>
                {step === 1 && `Select ${currentDeptConfig.shortName} Service`}
                {step === 2 && "Location & Project Scale"}
                {step === 3 && "Contact Details & Direct Booking"}
              </h3>

              {/* Progress bar */}
              <div style={{
                width: '100%',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-full)',
                marginTop: '14px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${(step / 3) * 100}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, #185adb, ${currentDeptConfig.themeColor})`,
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

            {/* Step 1: Dynamic Department Service Selection */}
            {step === 1 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Active Division</label>
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: currentDeptConfig.accentBg,
                    border: `1px solid ${currentDeptConfig.accentBorder}`,
                    color: currentDeptConfig.themeColor,
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <DeptIcon size={16} color={currentDeptConfig.themeColor} />
                    <span>{currentDeptConfig.name}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Specific Service Required ({currentDeptConfig.services.length} Options) *
                  </label>
                  <select
                    className="form-control"
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                    style={{ fontSize: '0.90rem', padding: '11px 14px' }}
                  >
                    {currentDeptConfig.services.map((sub, sIdx) => (
                      <option key={sIdx} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Requirement Brief / Specific Remarks (Optional)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder={currentDeptConfig.scopePlaceholder}
                    style={{ fontSize: '0.88rem' }}
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

            {/* Step 2: Location & Dynamic Scale Options */}
            {step === 2 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Plant / Site / Office Location (City, State) *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan / Bhiwadi / Neemrana / Delhi NCR"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{currentDeptConfig.scaleLabel}</label>
                  <select
                    className="form-control"
                    value={formData.estimatedAssetValue}
                    onChange={(e) => setFormData({ ...formData, estimatedAssetValue: e.target.value })}
                  >
                    {currentDeptConfig.scaleOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Timeline / Urgency</label>
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
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company / Factory / Proprietorship</label>
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
                    <label className="form-label">Email Address (Optional)</label>
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
                        <span>Submit Booking Request</span>
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
              {isValuationFlow ? 'Stamped Report Request Received!' : 'Booking Request Received!'}
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

            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 20px auto' }}>
              {isValuationFlow ? (
                <>
                  Thank you, <strong>{formData.name}</strong>. Your assessment details have been registered. A WhatsApp chat with our Chief Chartered Engineer has opened automatically with your details.
                </>
              ) : (
                <>
                  Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.subCategory || formData.service}</strong> has been registered under our <strong>{currentDeptConfig.shortName}</strong> division. WhatsApp has opened automatically to connect with our engineering team.
                </>
              )}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
              <a
                href={`https://wa.me/919158658885?text=${encodeURIComponent(
                  generateWhatsAppMessage(submittedData?.inquiryId || 'INQ-REF')
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <MessageSquare size={18} />
                <span>Open WhatsApp Chat Again</span>
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
