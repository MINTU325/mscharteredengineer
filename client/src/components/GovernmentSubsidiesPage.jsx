import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  TrendingUp, 
  Coins, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Sliders, 
  ShieldCheck, 
  Home, 
  Briefcase, 
  Layers, 
  Landmark, 
  Clock, 
  FileCheck2, 
  BadgePercent,
  Calculator,
  MessageSquare,
  HelpCircle,
  PhoneCall,
  Check
} from 'lucide-react';

export default function GovernmentSubsidiesPage({ onOpenQuote, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ─── Interactive Subsidy Calculator State ───
  const [calcIndustry, setCalcIndustry] = useState('manufacturing');
  const [calcInvestment, setCalcInvestment] = useState(50); // Lakhs
  const [isSpecialCategory, setIsSpecialCategory] = useState(false); // SC/ST/Women/Rural

  // Estimated Subsidy Calculation
  let estimatedPercentage = 25;
  let interestSubvention = 6;
  if (calcIndustry === 'manufacturing') {
    estimatedPercentage = isSpecialCategory ? 35 : 25;
    interestSubvention = isSpecialCategory ? 8 : 6;
  } else if (calcIndustry === 'textile') {
    estimatedPercentage = isSpecialCategory ? 40 : 30;
    interestSubvention = 7;
  } else if (calcIndustry === 'agri') {
    estimatedPercentage = isSpecialCategory ? 35 : 25;
    interestSubvention = 6;
  } else if (calcIndustry === 'service') {
    estimatedPercentage = isSpecialCategory ? 20 : 15;
    interestSubvention = 5;
  }

  const estimatedGrantLakhs = ((calcInvestment * estimatedPercentage) / 100).toFixed(2);

  const subsidySchemes = [
    {
      id: 'rips-2024',
      category: 'rajasthan',
      title: 'RIPS 2024 (Rajasthan Investment Promotion Scheme)',
      authority: 'Government of Rajasthan · BIP & Industries Dept',
      badge: 'State Flagship Scheme',
      badgeColor: '#10b981',
      subsidyHighlight: 'Upto 25% Capital Subsidy & 100% Tax Relief',
      desc: 'The latest investment promotion policy designed to accelerate industrialization in Rajasthan. Offers substantial capital asset creation incentives, 100% electricity duty exemption for 7 years, and up to 75% SGST reimbursement.',
      benefits: [
        'Capital Subsidy: Upto 25% of Eligible Fixed Capital Investment (EFCI)',
        'Employment Generation Subsidy: 50% - 75% reimbursement of EPF/ESI',
        '100% Exemption from Electricity Duty, Mandi Fee, and Land Tax for 7-10 years',
        'Special focus on Green Energy, EV manufacturing, and IT/Robotics clusters'
      ],
      eligibility: 'New or expanding industrial units investing in Rajasthan with Chartered Engineer TEV validation.'
    },
    {
      id: 'pmegp',
      category: 'msme',
      title: 'PMEGP (Prime Minister Employment Generation Programme)',
      authority: 'Ministry of MSME · KVIC National Nodal Agency',
      badge: 'High-Demand Central Scheme',
      badgeColor: '#38bdf8',
      subsidyHighlight: '15% to 35% Margin Money Capital Subsidy',
      desc: 'Credit-linked capital subsidy scheme implemented through KVIC, DIC, and scheduled commercial banks. Subsidies are routed directly to the entrepreneur’s bank account to establish new micro-enterprises.',
      benefits: [
        'Manufacturing Projects: Subsidy on project cost up to ₹50 Lakhs',
        'Service Projects: Subsidy on project cost up to ₹20 Lakhs',
        'Rural Areas: 25% subsidy (General) / 35% subsidy (Special Categories)',
        'Urban Areas: 15% subsidy (General) / 25% subsidy (Special Categories)'
      ],
      eligibility: 'Individuals aged 18+, SHGs, Co-operative Societies. Minimum 8th class pass for projects above ₹10L.'
    },
    {
      id: 'rips-2022',
      category: 'rajasthan',
      title: 'RIPS 2022 (Rajasthan Investment Promotion Scheme)',
      authority: 'Government of Rajasthan · Nivesh Sanvardhan',
      badge: 'State Industry Grant',
      badgeColor: '#10b981',
      subsidyHighlight: 'Interest Subvention & SGST Reimbursement',
      desc: 'Comprehensive incentive framework providing long-term fiscal support for manufacturing, agro-processing, healthcare, and infrastructure development across Rajasthan.',
      benefits: [
        'Interest Subvention: Up to 5% - 8% on term loan for 5 years',
        '75% Reimbursement of Net SGST for 7 years',
        'Stamp Duty Exemption: 100% exemption on purchase/lease of land',
        'Special package for Sunrise sectors and backward industrial areas'
      ],
      eligibility: 'Manufacturing and service enterprises undertaking new or modernization investments in Rajasthan.'
    },
    {
      id: 'bhimrao-ambedkar',
      category: 'rajasthan',
      title: 'Dr. Bhimrao Ambedkar Dalit Adivasi Udyam Protsahan 2022',
      authority: 'Government of Rajasthan · DIC Rajasthan',
      badge: 'Empowerment Grant',
      badgeColor: '#a855f7',
      subsidyHighlight: '25% Margin Money + 9% Interest Subsidy',
      desc: 'Pioneering Rajasthan state initiative for economic mainstreaming of Scheduled Caste (SC) and Scheduled Tribe (ST) entrepreneurs, offering non-refundable margin money and low-interest credit.',
      benefits: [
        'Margin Money Grant: 25% of project cost (up to ₹25 Lakhs) for projects up to ₹1 Crore',
        'Interest Subvention: 9% on loans up to ₹25 Lakhs; 7% on loans up to ₹5 Crores',
        '100% SGST reimbursement and land allotment concessions in RIICO areas',
        'Free incubation and handholding by Chartered Engineers & CAs'
      ],
      eligibility: 'SC/ST native entrepreneurs of Rajasthan establishing manufacturing, service, or retail ventures.'
    },
    {
      id: 'vyupy-scheme',
      category: 'rajasthan',
      title: 'VYUPY (Vishwakarma Yuva Udyami Protsahan Yojana)',
      authority: 'Government of Rajasthan · Industries & Commerce',
      badge: 'Youth Enterprise',
      badgeColor: '#f59e0b',
      subsidyHighlight: '8% Interest Subsidy on Loans up to ₹5 Lakhs',
      desc: 'Targeted state scheme for youth aged 18–45 to facilitate self-employment and micro-business setup without heavy collateral or prohibitive interest burdens.',
      benefits: [
        '8% Interest Subvention on loans up to ₹5 Lakhs for 5 years',
        'Simplified one-page DIC registration & direct bank disbursement',
        'Covers modern tools, workshop machinery, and initial stock capital',
        'Priority processing through Rajasthan Single Window Clearance'
      ],
      eligibility: 'Youth aged 18–45 resident in Rajasthan planning new micro or small business establishments.'
    },
    {
      id: 'textile-great',
      category: 'textile_agri',
      title: 'Textile GREAT Scheme (Grant for Technical Textiles)',
      authority: 'Ministry of Textiles · National Technical Textiles Mission',
      badge: 'Sector Mega Grant',
      badgeColor: '#38bdf8',
      subsidyHighlight: 'Grant-in-Aid Upto ₹50 Lakhs (100% Grant)',
      desc: 'Grant for Research and Entrepreneurship across Aspiring Innovators in Technical Textiles (GREAT). Provides financial aid up to ₹50 Lakhs for 18 months to support innovation, prototypes, and technical textile products.',
      benefits: [
        '100% Grant-in-aid up to ₹50 Lakhs without equity dilution',
        'Covers prototype building, laboratory certification, and field validation',
        'Mentorship access through premier technological research associations',
        'Fast-track patent filing & commercial trial support'
      ],
      eligibility: 'Innovators, MSMEs, textile manufacturers, and engineering startups in agro-tech, geo-tech, or med-tech textiles.'
    },
    {
      id: 'pmegp-2nd-loan',
      category: 'msme',
      title: '2nd Loan for PMEGP & MUDRA Unit Upgradation',
      authority: 'Ministry of MSME · KVIC / Nationalized Banks',
      badge: 'Expansion Subsidy',
      badgeColor: '#38bdf8',
      subsidyHighlight: 'Upto ₹1 Crore Loan + 15%-20% Capital Subsidy',
      desc: 'Exclusive central expansion scheme for existing, profit-making PMEGP and MUDRA units to scale production capacity, acquire advanced automated machinery, and expand market footprint.',
      benefits: [
        'Loan Amount: Up to ₹1 Crore for Manufacturing; up to ₹25 Lakhs for Services',
        'Capital Subsidy: 15% (General category) / 20% (Special categories)',
        'Eligible for units that have repaid their 1st PMEGP/Mudra loan smoothly',
        'Requires Chartered Engineer project appraisal and machinery valuation report'
      ],
      eligibility: 'Existing PMEGP/MUDRA units showing operational profitability for the past 3 consecutive financial years.'
    },
    {
      id: 'startup-seed-fund',
      category: 'startup_artisan',
      title: 'Startup India Seed Fund Scheme (SISFS)',
      authority: 'DPIIT · Ministry of Commerce & Industry',
      badge: 'Startup Early Stage',
      badgeColor: '#a855f7',
      subsidyHighlight: 'Up to ₹20L Grant + ₹50L Debt/Convertible',
      desc: 'Flagship central government fund providing financial support to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
      benefits: [
        'Up to ₹20 Lakhs grant for validation of proof of concept & prototype testing',
        'Up to ₹50 Lakhs investment for market-entry commercialization via debt/debentures',
        'Disbursed through recognized incubators across India',
        'No early collateral requirement; simple milestone-based disbursement'
      ],
      eligibility: 'DPIIT recognized startups incorporated not more than 2 years ago with innovative tech/business model.'
    },
    {
      id: 'agri-business-grant',
      category: 'textile_agri',
      title: 'Agri-Business & Food Processing Infrastructure Grants',
      authority: 'MoFPI · PM Kisan SAMPADA Yojana / NABARD',
      badge: 'Agro Capital Grant',
      badgeColor: '#10b981',
      subsidyHighlight: '25% - 35% Capital Investment Subsidy',
      desc: 'Central capital grants for setting up modern cold storage, pack houses, agro-processing clusters, sort-grade facilities, and supply chain logistics.',
      benefits: [
        '35% Capital Subsidy in general areas; up to 50% in hilly/difficult regions',
        'Maximum grant up to ₹5 Crores to ₹10 Crores for integrated agro-processing clusters',
        'Concessional interest rate loans under NABARD Food Processing Fund',
        'Chartered Engineer inspection report mandatory for civil and plant cost claim'
      ],
      eligibility: 'Farmers producer organizations (FPOs), private agri-processors, corporate food businesses, and MSMEs.'
    },
    {
      id: 'cgtmse-subsidy',
      category: 'msme',
      title: 'CGTMSE (Credit Guarantee Fund Trust for MSEs)',
      authority: 'Ministry of MSME & SIDBI',
      badge: 'Collateral-Free Credit',
      badgeColor: '#10b981',
      subsidyHighlight: 'Collateral-Free Loans up to ₹5 Crores',
      desc: 'Enables micro and small enterprises to access bank credit without third-party guarantee or tangible collateral. The trust guarantees up to 85% of the default risk to the lending bank.',
      benefits: [
        'Guarantee coverage up to ₹500 Lakhs (₹5 Crores) per borrower',
        'Guarantee extent: 85% for micro-enterprises and women/SC-ST borrowers',
        'Annual guarantee fee subsidized under state & central MSME promotional schemes',
        'Direct integration with all nationalized, private, and regional rural banks'
      ],
      eligibility: 'New and existing Micro and Small Enterprises in manufacturing and service sectors.'
    },
    {
      id: 'msme-zed',
      category: 'msme',
      title: 'MSME Sustainable (ZED) Certification Scheme',
      authority: 'Ministry of MSME · Quality Council of India',
      badge: 'Zero Defect Zero Effect',
      badgeColor: '#10b981',
      subsidyHighlight: 'Up to 80% Subsidy on Audit & Certification',
      desc: 'Encourages manufacturers to achieve global quality benchmarks with zero environmental defect. The government heavily subsidizes certification fees, consulting costs, and technology upgrades.',
      benefits: [
        'Bronze, Silver & Gold ZED Certification subsidies: 80% (Micro), 60% (Small), 50% (Medium)',
        'Additional 10% subsidy for Women/SC/ST owned MSMEs and NER units',
        'Concessional bank loan interest rates and processing fee waivers for ZED units',
        '₹5 Lakhs grant for handholding and consultancy'
      ],
      eligibility: 'Udyam registered MSMEs with valid manufacturing units in India.'
    },
    {
      id: 'msme-lean',
      category: 'msme',
      title: 'MSME Competitive (LEAN) Scheme',
      authority: 'Ministry of MSME · Productivity & Quality Council',
      badge: 'Operational Excellence',
      badgeColor: '#f59e0b',
      subsidyHighlight: 'Up to 90% Government Contribution',
      desc: 'Support for MSMEs to implement Lean manufacturing tools (5S, Kaizen, Kanban, VSM) to reduce waste, increase productivity, and improve shop-floor efficiency.',
      benefits: [
        'Basic, Intermediate & Advanced Lean implementation handholding',
        '90% subsidy on consultant fees for Basic Level',
        'Reduces manufacturing defects and raw material wastage',
        'Fast-track implementation through qualified lean consultants'
      ],
      eligibility: 'All manufacturing MSMEs with valid Udyam Registration.'
    }
  ];

  const filteredSchemes = subsidySchemes.filter((scheme) => {
    const matchCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchSearch =
      searchQuery === '' ||
      scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ background: '#0b0d14', color: '#eef0f5', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* ── Breadcrumb & Top Bar ── */}
      <div style={{ background: '#07080d', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#7a8296' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0, fontSize: '0.85rem' }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#eef0f5', fontWeight: 500 }}>Government Subsidies &amp; Grants Advisory</span>
          </div>

          <span style={{
            fontSize: '0.72rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#10b981',
            padding: '3px 10px',
            borderRadius: '6px',
            fontWeight: 600
          }}>
            Chartered Engineer Certified DPR
          </span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        background: '#07080d',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '48px 20px 40px'
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '6px',
            padding: '4px 12px',
            color: '#10b981',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            marginBottom: '16px'
          }}>
            <Coins size={14} />
            <span>STATUTORY GOVERNMENT SUBSIDY &amp; CAPITAL INCENTIVES ADVISORY</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 600,
            lineHeight: 1.18,
            marginBottom: '16px',
            color: '#eef0f5',
            letterSpacing: '-0.02em'
          }}>
            Unlock Up to <span style={{ color: '#10b981' }}>35% Capital Subsidy</span> &amp; <br />
            <span style={{ color: '#38bdf8' }}>Government Grants</span> for Your Industry
          </h1>

          <p style={{
            fontSize: '1.02rem',
            color: '#a3a9b8',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto 28px auto'
          }}>
            End-to-end guidance from scheme identification to <strong>Chartered Engineer machinery verification</strong>, bankable Detailed Project Reports (DPR), and direct treasury disbursement under Central &amp; Rajasthan State policies.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={() => onOpenQuote('Government Subsidy Advisory (RIPS / PMEGP)')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Apply for Government Subsidy</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#subsidy-calculator"
              style={{
                background: '#11141c',
                color: '#eef0f5',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '8px',
                padding: '12px 22px',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Instant Subsidy Estimator</span>
              <Calculator size={16} style={{ color: '#38bdf8' }} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginTop: '36px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10b981', marginBottom: '2px' }}>25+ Schemes</div>
              <div style={{ fontSize: '0.78rem', color: '#a3a9b8' }}>State &amp; Central Covered</div>
            </div>
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#38bdf8', marginBottom: '2px' }}>Upto 35%</div>
              <div style={{ fontSize: '0.78rem', color: '#a3a9b8' }}>Direct Capital Margin Money</div>
            </div>
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f59e0b', marginBottom: '2px' }}>100% Certified</div>
              <div style={{ fontSize: '0.78rem', color: '#a3a9b8' }}>Chartered Engineer Attestation</div>
            </div>
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#a855f7', marginBottom: '2px' }}>₹50L+ Grants</div>
              <div style={{ fontSize: '0.78rem', color: '#a3a9b8' }}>Textile &amp; Startup Grants</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Interactive Subsidy Calculator Section ── */}
      <section id="subsidy-calculator" style={{ padding: '40px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#11141c',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '28px 24px'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
            <Calculator size={18} />
            <span style={{ fontSize: '0.80rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Interactive Estimator</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 600, color: '#eef0f5', margin: '0 0 6px 0' }}>
            Estimate Your Eligible Government Subsidy &amp; Grant
          </h2>
          <p style={{ fontSize: '0.90rem', color: '#a3a9b8', margin: '0 0 24px 0' }}>
            Select your industrial category and estimated capital expenditure to see your potential subsidy payout.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'center' }}>
            
            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 500, color: '#cbd5e1', marginBottom: '6px' }}>
                  Industrial / Business Sector:
                </label>
                <select
                  value={calcIndustry}
                  onChange={(e) => setCalcIndustry(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    background: '#1a1e28',
                    fontSize: '0.90rem',
                    fontWeight: 500,
                    color: '#eef0f5',
                    outline: 'none'
                  }}
                >
                  <option value="manufacturing" style={{ background: '#1a1e28', color: '#eef0f5' }}>General Manufacturing / Engineering</option>
                  <option value="textile" style={{ background: '#1a1e28', color: '#eef0f5' }}>Textiles, Apparel &amp; Garments (GREAT/RIPS)</option>
                  <option value="agri" style={{ background: '#1a1e28', color: '#eef0f5' }}>Agro-Processing &amp; Cold Storage (MoFPI)</option>
                  <option value="service" style={{ background: '#1a1e28', color: '#eef0f5' }}>Service Sector / IT / Logistics</option>
                </select>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 500, color: '#cbd5e1' }}>
                    Proposed Capital Investment (Plant &amp; Machinery):
                  </label>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#10b981' }}>₹{calcInvestment} Lakhs</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={calcInvestment}
                  onChange={(e) => setCalcInvestment(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#7a8296', marginTop: '2px' }}>
                  <span>₹10 Lakhs</span>
                  <span>₹2.5 Crores</span>
                  <span>₹5 Crores</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', background: '#1a1e28', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <input
                  type="checkbox"
                  id="specialCategory"
                  checked={isSpecialCategory}
                  onChange={(e) => setIsSpecialCategory(e.target.checked)}
                  style={{ width: '16px', height: '16px', accentColor: '#10b981', cursor: 'pointer' }}
                />
                <label htmlFor="specialCategory" style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 500, cursor: 'pointer' }}>
                  SC/ST, Woman, Minority or Rural Area Entrepreneur (+10% Extra Subsidy)
                </label>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div style={{ background: '#07080d', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#eef0f5', borderRadius: '10px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#7a8296', textTransform: 'uppercase', fontWeight: 600 }}>
                  Estimated Capital Subsidy ({estimatedPercentage}%):
                </div>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 600, color: '#10b981', lineHeight: 1.1, marginTop: '4px' }}>
                  ₹{estimatedGrantLakhs} Lakhs*
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                <span style={{ color: '#a3a9b8' }}>Interest Subvention:</span>
                <span style={{ fontWeight: 600, color: '#38bdf8' }}>{interestSubvention}% per annum</span>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#7a8296', lineHeight: 1.4 }}>
                *Subject to scheme guidelines (RIPS 2024 / PMEGP / MOFPI) and Chartered Engineer TEV validation.
              </div>

              <button
                onClick={() => onOpenQuote(`Government Subsidy Claim (₹${calcInvestment}L Investment - ${calcIndustry})`)}
                style={{
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 16px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>Apply with Chartered Engineer DPR</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── Schemes Explorer & Filter Grid ── */}
      <section style={{ padding: '10px 20px 40px', maxWidth: '1120px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '0.80rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
              Schemes Directory
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 600, color: '#eef0f5', margin: 0 }}>
              Explore Government Subsidy Schemes
            </h2>
          </div>

          {/* Search Input Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search size={16} color="#7a8296" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search scheme (RIPS, PMEGP, ZED)..."
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#11141c',
                color: '#eef0f5',
                fontSize: '0.90rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {[
            { id: 'all', label: 'All Schemes' },
            { id: 'rajasthan', label: 'Rajasthan State (RIPS)' },
            { id: 'msme', label: 'Central MSME & PMEGP' },
            { id: 'textile_agri', label: 'Textile & Agri Grants' },
            { id: 'startup_artisan', label: 'Startups & Artisans' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: selectedCategory === tab.id ? 600 : 500,
                border: selectedCategory === tab.id ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                background: selectedCategory === tab.id ? '#10b981' : '#11141c',
                color: selectedCategory === tab.id ? '#07080d' : '#a3a9b8',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scheme Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '20px'
        }}>
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              style={{
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: scheme.badgeColor,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    {scheme.badge}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#7a8296' }}>Statutory Scheme</span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                  {scheme.title}
                </h3>
                <div style={{ fontSize: '0.76rem', color: '#7a8296', marginBottom: '12px' }}>
                  {scheme.authority}
                </div>

                {/* Highlight pill */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <BadgePercent size={15} style={{ color: '#10b981' }} />
                  <span>{scheme.subsidyHighlight}</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#a3a9b8', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                  {scheme.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 600, color: '#7a8296', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                    Key Scheme Highlights:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {scheme.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                        <Check size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '8px 10px', background: '#1a1e28', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.74rem', color: '#a3a9b8', marginBottom: '16px' }}>
                  <strong style={{ color: '#eef0f5' }}>Eligibility:</strong> {scheme.eligibility}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(`Government Subsidy Claim: ${scheme.title}`)}
                style={{
                  width: '100%',
                  background: '#1a1e28',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#eef0f5',
                  borderRadius: '6px',
                  padding: '9px 14px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#232938';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1a1e28';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <span>Inquire / Get Scheme Consultation</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </section>

      {/* ── Why Chartered Engineer Attestation Matters for Subsidies ── */}
      <section style={{ padding: '32px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#07080d',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '32px 24px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Statutory Compliance &amp; Verification
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 600, color: '#eef0f5', margin: '8px 0 8px 0' }}>
              Why Chartered Engineer Certification is Mandatory
            </h2>
            <p style={{ color: '#a3a9b8', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              Government departments and commercial lenders mandate rigorous technical inspection and capacity certificates by an empanelled Chartered Engineer before subsidy disbursement.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '20px', borderRadius: '8px', background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <FileCheck2 size={24} style={{ color: '#10b981', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 6px 0' }}>Plant &amp; Machinery Valuation</h3>
              <p style={{ fontSize: '0.84rem', color: '#a3a9b8', lineHeight: 1.55, margin: 0 }}>
                Statutory physical verification of newly installed plant and machinery, customs duty invoices, and indigenous fabrication costs.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <TrendingUp size={24} style={{ color: '#38bdf8', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 6px 0' }}>Bankable DPR &amp; TEV Study</h3>
              <p style={{ fontSize: '0.84rem', color: '#a3a9b8', lineHeight: 1.55, margin: 0 }}>
                Techno-Economic Viability (TEV) study with DSCR, IRR, sensitivity modeling, and cash flow forecasts formatted for state single-window approvals.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <ShieldCheck size={24} style={{ color: '#a855f7', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 6px 0' }}>Subsidy Claim Endorsement</h3>
              <p style={{ fontSize: '0.84rem', color: '#a3a9b8', lineHeight: 1.55, margin: 0 }}>
                Official Chartered Engineer utilization certificate confirming that funds were exclusively invested in the sanctioned plant and equipment.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <Landmark size={24} style={{ color: '#f59e0b', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 6px 0' }}>Institutional Liaison</h3>
              <p style={{ fontSize: '0.84rem', color: '#a3a9b8', lineHeight: 1.55, margin: 0 }}>
                Direct coordination with District Industries Centre (DIC), RIICO, KVIC, and financing banks for expedited verification and zero audit objections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing Consultation Card ── */}
      <section style={{ padding: '10px 20px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#07080d',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          padding: '32px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#10b981', fontWeight: 600, marginBottom: '6px' }}>
              Free Scheme Eligibility Audit
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#eef0f5', margin: '0 0 8px 0' }}>
              Ready to Claim Your Government Subsidy?
            </h3>
            <p style={{ color: '#a3a9b8', fontSize: '0.92rem', margin: 0, maxWidth: '640px', lineHeight: 1.6 }}>
              Speak with our senior Chartered Engineers and subsidy specialists. We verify your scheme eligibility in 24 hours with zero upfront consulting obligation.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Government Subsidy Advisory (RIPS / PMEGP)')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Request Subsidy Audit
            </button>
            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20Group,%20I%20am%20interested%20in%20Government%20Subsidy%20Advisory%20(RIPS/PMEGP)."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#1a1e28',
                color: '#eef0f5',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare size={16} style={{ color: '#10b981' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
