import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
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
  PhoneCall
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
      authority: 'Government of Rajasthan • BIP & Industries Dept',
      badge: 'State Flagship Scheme',
      badgeColor: '#059669',
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
      authority: 'Ministry of MSME • KVIC National Nodal Agency',
      badge: 'High-Demand Central Scheme',
      badgeColor: '#2563eb',
      subsidyHighlight: '15% to 35% Margin Money Capital Subsidy',
      desc: 'Credit-linked capital subsidy scheme implemented through KVIC, DIC, and scheduled commercial banks. Subsidies are routed directly to the entrepreneur’s bank account to establish new micro-enterprises.',
      benefits: [
        'Manufacturing Projects: Subsidy on project cost up to ₹50 Lakhs',
        'Service Projects: Subsidy on project cost up to ₹20 Lakhs',
        'Rural Areas: 25% subsidy (General) / 35% subsidy (SC/ST/OBC/Women/Ex-Servicemen)',
        'Urban Areas: 15% subsidy (General) / 25% subsidy (Special Categories)'
      ],
      eligibility: 'Individuals aged 18+, SHGs, Co-operative Societies. Minimum 8th class pass for projects above ₹10L.'
    },
    {
      id: 'rips-2022',
      category: 'rajasthan',
      title: 'RIPS 2022 (Rajasthan Investment Promotion Scheme)',
      authority: 'Government of Rajasthan • Nivesh Sanvardhan',
      badge: 'State Industry Grant',
      badgeColor: '#059669',
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
      authority: 'Government of Rajasthan • DIC Rajasthan',
      badge: 'Empowerment Grant',
      badgeColor: '#7c3aed',
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
      authority: 'Government of Rajasthan • Industries & Commerce',
      badge: 'Youth Enterprise',
      badgeColor: '#d97706',
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
      authority: 'Ministry of Textiles • National Technical Textiles Mission',
      badge: 'Sector Mega Grant',
      badgeColor: '#0284c7',
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
      authority: 'Ministry of MSME • KVIC / Nationalized Banks',
      badge: 'Expansion Subsidy',
      badgeColor: '#2563eb',
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
      authority: 'DPIIT • Ministry of Commerce & Industry',
      badge: 'Startup Early Stage',
      badgeColor: '#8b5cf6',
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
      authority: 'MoFPI • PM Kisan SAMPADA Yojana / NABARD',
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
      badgeColor: '#059669',
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
      authority: 'Ministry of MSME • Quality Council of India',
      badge: 'Zero Defect Zero Effect',
      badgeColor: '#059669',
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
      authority: 'Ministry of MSME • Productivity & Quality Council',
      badge: 'Operational Excellence',
      badgeColor: '#d97706',
      subsidyHighlight: 'Up to 90% Government Contribution',
      desc: 'Assists MSMEs in reducing operational waste, increasing manufacturing productivity, and optimizing inventory control through expert 5S, Kaizen, and Lean implementations.',
      benefits: [
        '90% Government contribution towards consultant implementation fees',
        'Available for individual manufacturing MSMEs or clusters',
        'Direct cost reduction of 15%-25% in rejection rates and turnaround time',
        'Certified Lean Champion credentials for internal factory engineers'
      ],
      eligibility: 'Udyam registered manufacturing MSMEs aiming to eliminate manufacturing bottlenecks.'
    },
    {
      id: 'pm-vishwakarma',
      category: 'startup_artisan',
      title: 'PM Vishwakarma Scheme',
      authority: 'Ministry of MSME, Skill Development & Finance',
      badge: 'Artisan Welfare',
      badgeColor: '#b45309',
      subsidyHighlight: '₹15,000 Tool Grant + 5% Collateral-Free Loan',
      desc: 'Comprehensive central welfare scheme for traditional artisans and craftspeople across 18 family-based trades, providing modern toolkits, skill stipends, and subsidized credit.',
      benefits: [
        '₹15,000 Toolkit Incentive provided via e-vouchers for purchasing modern equipment',
        'Collateral-free credit: ₹1 Lakh (1st tranche) & ₹2 Lakhs (2nd tranche) at flat 5% interest rate',
        'Daily stipend of ₹500 during basic and advanced skill training',
        'Digital transaction incentive up to ₹100 per month for UPI transactions'
      ],
      eligibility: 'Artisans engaged in 18 notified traditional trades (carpenters, blacksmiths, goldsmiths, sculptors, etc.).'
    },
    {
      id: 'msme-innovative',
      category: 'msme',
      title: 'MSME Innovative Scheme (Incubation, Design & IPR)',
      authority: 'Ministry of MSME • Innovation Division',
      badge: 'Patents & R&D',
      badgeColor: '#7c3aed',
      subsidyHighlight: '₹15L Incubation Grant + ₹5L Patent Filing Subsidy',
      desc: 'Holistic scheme uniting Incubation, Design intervention, and Intellectual Property Rights (IPR) protection to foster commercialization of innovative product ideas.',
      benefits: [
        'Up to ₹15 Lakhs grant per approved idea for developing commercial prototypes',
        'Up to ₹1 Crore financial assistance for purchasing specialized plant machinery in incubators',
        'Reimbursement of Patent Filing fees: Up to ₹1 Lakh (Domestic) / ₹5 Lakhs (International)',
        'Up to ₹40 Lakhs design project assistance for hiring professional industrial designers'
      ],
      eligibility: 'Students, innovators, startups, and existing MSMEs with novel product or engineering concepts.'
    },
    {
      id: 'ramp-scheme',
      category: 'msme',
      title: 'RAMP (Raising and Accelerating MSME Performance)',
      authority: 'Ministry of MSME • World Bank Supported',
      badge: 'Scale & Export Support',
      badgeColor: '#2563eb',
      subsidyHighlight: 'Strategic Investment Plan & Export Grants',
      desc: 'A flagship initiative assisted by the World Bank with a budget of ₹6,062 Crores to enhance MSME competitiveness, technology adoption, green transitions, and market access.',
      benefits: [
        'Direct state-level Strategic Investment Plan (SIP) grants for cluster modernization',
        'Subsidized green technology adoption, energy audits, and carbon footprint reduction',
        'Accelerated delayed payment resolution and formalization incentives',
        'Capacity building programs for high-growth export-ready manufacturing units'
      ],
      eligibility: 'Operational MSMEs looking to scale into national supply chains and export corridors.'
    },
    {
      id: 'treds-discounting',
      category: 'msme',
      title: 'TReDS (Trade Receivables Discounting System)',
      authority: 'Reserve Bank of India (RBI) & Ministry of MSME',
      badge: 'Working Capital',
      badgeColor: '#059669',
      subsidyHighlight: 'Instant Invoice Cash Without Collateral',
      desc: 'Institutional electronic exchange for discounting trade receivables of MSMEs against corporate buyers, PSUs, and government departments through competitive multi-bank auction.',
      benefits: [
        'Up to 90%-95% invoice amount credited within 24–48 hours of invoice acceptance',
        'Financing is Without Recourse: The financier cannot recover funds from the MSME if buyer defaults',
        'Competitive bidding among multiple banks and NBFCs ensures lowest possible interest rates',
        'Preserves your existing bank credit limits for actual manufacturing operations'
      ],
      eligibility: 'All MSME sellers supplying goods or services to large corporates, CPSEs, or state government undertakings.'
    }
  ];

  const filteredSchemes = subsidySchemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          scheme.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          scheme.subsidyHighlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="government-subsidies-page" style={{ background: '#FAF8F5', minHeight: '100vh', paddingBottom: '70px', color: '#0F172A' }}>
      
      {/* ── SEO JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.mscharteredengineer.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Government Subsidies & Grants",
                    "item": "https://www.mscharteredengineer.com/government-subsidies"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Government Subsidies & Industrial Grants Advisory",
                "url": "https://www.mscharteredengineer.com/government-subsidies",
                "provider": {
                  "@type": "ProfessionalService",
                  "name": "KS Chartered Engineers",
                  "telephone": "+919158658885",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jaipur",
                    "addressRegion": "Rajasthan",
                    "postalCode": "302019",
                    "addressCountry": "IN"
                  }
                },
                "description": "Chartered Engineer statutory certification, Net Worth certificates, and bankable DPR for RIPS 2024, PMEGP, Ambedkar Scheme, PM-FME, and Central/State industrial capital subsidies.",
                "areaServed": "India"
              }
            ]
          })
        }}
      />

      {/* ── Breadcrumb & Top Bar ── */}
      <div style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#94A3B8' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#38BDF8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#F8FAFC', fontWeight: 600 }}>Government Subsidies &amp; Grants Advisory</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.74rem', background: '#10B981', color: '#FFFFFF', padding: '3px 10px', borderRadius: '9999px', fontWeight: 700 }}>
              Chartered Engineer Certified DPR
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), linear-gradient(135deg, #070E1E 0%, #0C1A3D 100%)',
        color: '#FFFFFF',
        padding: '65px 0 55px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '9999px',
            padding: '6px 16px',
            color: '#34D399',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '18px'
          }}>
            <Coins size={15} />
            <span>STATUTORY GOVERNMENT SUBSIDY &amp; CAPITAL INCENTIVES ADVISORY</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '18px',
            color: '#F8FAFC'
          }}>
            Unlock Up to <span style={{ color: '#10B981' }}>35% Capital Subsidy</span> &amp; <br />
            <span style={{ color: '#38BDF8' }}>Government Grants</span> for Your Industry
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.12rem)',
            color: '#CBD5E1',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto 28px auto'
          }}>
            End-to-end guidance from scheme identification to <strong>Chartered Engineer machinery verification</strong>, bankable Detailed Project Reports (DPR), and direct treasury disbursement under Central &amp; Rajasthan State policies.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Government Subsidy Advisory (RIPS / PMEGP)')}
              style={{
                background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)'
              }}
            >
              <span>Apply for Government Subsidy</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#subsidy-calculator"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '0.98rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Instant Subsidy Estimator</span>
              <Calculator size={18} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '44px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981' }}>25+ Schemes</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>State &amp; Central Covered</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8' }}>Upto 35%</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Direct Capital Margin Money</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B' }}>100% Certified</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Chartered Engineer Attestation</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#A855F7' }}>₹50L+ Grants</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Textile &amp; Startup Grants</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Interactive Subsidy Calculator Section ── */}
      <section id="subsidy-calculator" style={{ padding: '50px 0', background: '#F1ECE1', borderBottom: '1px solid #E2D9C8' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #059669', padding: ' clamp(24px, 4vw, 36px)', boxShadow: '0 12px 30px rgba(5, 150, 105, 0.08)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#059669' }}>
              <Calculator size={20} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interactive Estimator</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
              Estimate Your Eligible Government Subsidy &amp; Grant
            </h2>
            <p style={{ fontSize: '0.90rem', color: '#475569', marginBottom: '24px' }}>
              Select your industrial category and estimated capital expenditure to see your potential subsidy payout.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
              
              {/* Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E293B', marginBottom: '6px' }}>
                    Industrial / Business Sector:
                  </label>
                  <select
                    value={calcIndustry}
                    onChange={(e) => setCalcIndustry(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #CBD5E1', background: '#F8FAFC', fontSize: '0.90rem', fontWeight: 600, color: '#0F172A' }}
                  >
                    <option value="manufacturing">General Manufacturing / Engineering</option>
                    <option value="textile">Textiles, Apparel &amp; Garments (GREAT/RIPS)</option>
                    <option value="agri">Agro-Processing &amp; Cold Storage (MoFPI)</option>
                    <option value="service">Service Sector / IT / Logistics</option>
                  </select>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>
                      Proposed Capital Investment (Plant &amp; Machinery):
                    </label>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#059669' }}>₹{calcInvestment} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={calcInvestment}
                    onChange={(e) => setCalcInvestment(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    <span>₹10 Lakhs</span>
                    <span>₹2.5 Crores</span>
                    <span>₹5 Crores</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', background: '#ECFDF5', borderRadius: '8px', border: '1px solid #A7F3D0' }}>
                  <input
                    type="checkbox"
                    id="specialCategory"
                    checked={isSpecialCategory}
                    onChange={(e) => setIsSpecialCategory(e.target.checked)}
                    style={{ width: '16px', height: '16px', accentColor: '#059669', cursor: 'pointer' }}
                  />
                  <label htmlFor="specialCategory" style={{ fontSize: '0.82rem', color: '#065F46', fontWeight: 600, cursor: 'pointer' }}>
                    SC/ST, Woman, Minority or Rural Area Entrepreneur (+10% Extra Subsidy)
                  </label>
                </div>
              </div>

              {/* Calculated Result Card */}
              <div style={{ background: '#0F172A', color: '#FFFFFF', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>
                    Estimated Capital Subsidy ({estimatedPercentage}%):
                  </div>
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#34D399', lineHeight: 1.1, marginTop: '4px' }}>
                    ₹{estimatedGrantLakhs} Lakhs*
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: '#94A3B8' }}>Interest Subvention:</span>
                  <span style={{ fontWeight: 800, color: '#38BDF8' }}>{interestSubvention}% per annum</span>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.4 }}>
                  *Subject to scheme guidelines (RIPS 2024 / PMEGP / MOFPI) and Chartered Engineer TEV validation.
                </div>

                <button
                  onClick={() => onOpenQuote(`Government Subsidy Claim (₹${calcInvestment}L Investment - ${calcIndustry})`)}
                  style={{
                    background: '#10B981',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Apply with Chartered Engineer DPR</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Schemes Explorer & Filter Grid ── */}
      <section style={{ padding: '60px 0 40px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '8px'
            }}>
              Explore All <span style={{ color: '#059669' }}>Government Subsidy Schemes</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Comprehensive assistance for application filing, technical documentation, Chartered Engineer certificates, and government follow-ups.
            </p>

            {/* Search Input Bar */}
            <div style={{ position: 'relative', maxWidth: '480px', margin: '20px auto 16px auto' }}>
              <Search size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scheme (e.g. RIPS, PMEGP, Textile, ZED, Ambedkar)..."
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '9999px',
                  border: '1.5px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontSize: '0.90rem',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Schemes (16+)' },
                { id: 'rajasthan', label: '🏛️ Rajasthan State (RIPS)' },
                { id: 'msme', label: '🏭 Central MSME & PMEGP' },
                { id: 'textile_agri', label: '🌾 Textile & Agri Grants' },
                { id: 'startup_artisan', label: '🚀 Startups & Artisans' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid',
                    cursor: 'pointer',
                    background: selectedCategory === tab.id ? '#059669' : '#FFFFFF',
                    color: selectedCategory === tab.id ? '#FFFFFF' : '#475569',
                    borderColor: selectedCategory === tab.id ? '#059669' : '#CBD5E1',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedCategory === tab.id ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scheme Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '22px'
          }}>
            {filteredSchemes.map((scheme) => (
              <div
                key={scheme.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E2D8',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.22s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: scheme.badgeColor,
                      background: `${scheme.badgeColor}15`,
                      border: `1px solid ${scheme.badgeColor}35`,
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      {scheme.badge}
                    </span>
                    <span style={{ fontSize: '0.70rem', color: '#64748B', fontWeight: 600 }}>Statutory Scheme</span>
                  </div>

                  <h3 style={{ fontSize: '1.20rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px', lineHeight: 1.3 }}>
                    {scheme.title}
                  </h3>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', fontWeight: 600, marginBottom: '12px' }}>
                    {scheme.authority}
                  </div>

                  {/* Highlight pill */}
                  <div style={{
                    background: '#ECFDF5',
                    border: '1px solid #A7F3D0',
                    color: '#065F46',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <BadgePercent size={16} color="#059669" />
                    <span>{scheme.subsidyHighlight}</span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, marginBottom: '14px' }}>
                    {scheme.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #F1ECE1', paddingTop: '12px', marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Scheme Highlights:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {scheme.benefits.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.82rem', color: '#334155' }}>
                          <CheckCircle2 size={14} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ padding: '8px 10px', background: '#FAF8F5', borderRadius: '6px', border: '1px solid #E8E2D8', fontSize: '0.74rem', color: '#64748B', marginBottom: '16px' }}>
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(`Government Subsidy Claim: ${scheme.title}`)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Inquire / Get Scheme Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Why Chartered Engineer Attestation Matters for Subsidies ── */}
      <section style={{ padding: '50px 0', background: '#FFFFFF', borderTop: '1px solid #E8E2D8', borderBottom: '1px solid #E8E2D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Statutory Compliance &amp; Verification
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
              Why Chartered Engineer Certification is <span style={{ color: '#059669' }}>Mandatory</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginTop: '6px' }}>
              Unlike regular loan agents, government departments and banks mandate rigorous technical validation by an authorized Chartered Engineer before subsidy release.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <FileCheck2 size={28} color="#059669" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Plant &amp; Machinery Valuation</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Statutory physical verification of newly installed plant and machinery, customs duty invoices, and indigenous fabrication costs.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <TrendingUp size={28} color="#0284C7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Bankable DPR &amp; TEV Study</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Techno-Economic Viability (TEV) study with DSCR, IRR, sensitivity modeling, and cash flow forecasts formatted for state single-window approvals.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <ShieldCheck size={28} color="#7C3AED" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Subsidy Claim Endorsement</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Official Chartered Engineer utilization certificate confirming that funds were exclusively invested in the sanctioned plant and equipment.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <Landmark size={28} color="#D97706" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Institutional Liaison</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Direct coordination with District Industries Centre (DIC), RIICO, KVIC, and financing banks for expedited verification and zero audit objections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA Card ── */}
      <section style={{ padding: '50px 0 20px 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #070E1E 0%, #064E3B 100%)',
            border: '1.5px solid #10B981',
            borderRadius: '24px',
            padding: ' clamp(28px, 4vw, 42px)',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(5, 150, 105, 0.2)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '12px'
            }}>
              Ready to Claim Your <span style={{ color: '#34D399' }}>Government Subsidy</span>?
            </h2>
            <p style={{
              fontSize: '0.96rem',
              color: '#CBD5E1',
              maxWidth: '650px',
              margin: '0 auto 24px auto',
              lineHeight: 1.6
            }}>
              Speak with our senior Chartered Engineers and subsidy specialists. We verify your scheme eligibility in 24 hours with zero upfront consulting obligation.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onOpenQuote('Government Subsidy Advisory (RIPS / PMEGP)')}
                style={{
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                }}
              >
                <span>Request Subsidy Eligibility Audit</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20Group,%20I%20am%20interested%20in%20Government%20Subsidy%20Advisory%20(RIPS/PMEGP)."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#F8FAFC',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
