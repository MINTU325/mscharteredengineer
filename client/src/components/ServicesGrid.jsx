import React, { useState, useMemo } from 'react';
import {
  Calculator,
  FileCheck2,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Building2,
  Scale,
  LineChart,
  Cpu,
  Zap,
  ShieldAlert,
  Search,
  X,
  RotateCcw,
} from 'lucide-react';

export const servicesData = [
  {
    id: '01',
    code: 'valuation',
    title: 'Assets Valuation Services',
    category: 'Banking, Legal & Financial',
    icon: Calculator,
    badgeColor: '#f59e0b',
    description:
      'Asset valuation and reconciliation are an essential part of many transactions. We impart the expert Valuers\' services to your business which is required for its commercial and corporate governance obligations. We conduct valuation of Plant & Machinery as per Companies Act 2013, Income Tax Act 1961 and general purpose valuations.',
    deliverables: [
      'Banking & Lending — Valuation of assets for mortgage or auctioning of collateral security',
      'Insurance — Reinstatement Valuation as Surveyor and Loss Assessor',
      'Stamp Duty — Valuation for transfer of ownership and legal documentation',
      'Financial Reporting — Balance sheet, Fair value, IndAS 16 (PPE), Componentization, Impairment Analysis',
      'Sale / Purchase of Asset — Market value & fair value appraisal of used/new assets',
      'Leasing / Renting of Assets — Specialized valuation for leased and rented assets',
      'Asset Retirement & Disposal — Scrap value, salvage value & componentization assessment',
      'Litigation, Dispute Resolution & Arbitrations — Expert opinion in the Court of Law',
      'Impairment Study — Re-assessment under Ind AS, IFRS or US GAAP',
      'Insolvency & Bankruptcy — Valuation as per Insolvency & Bankruptcy Code 2016',
      'Liquidation — Market value, Orderly & Forced liquidation value assessment',
      'Balance Useful Life Calculation — Estimation of extended useful life of assets',
      'Mergers and Acquisitions — Company valuation using different valuation approaches',
      'Taxation & Regulations — Valuation under direct tax laws (CBDT / Ministry of Finance)',
    ],
    highlight:
      'Valuation conducted as per Companies Act 2013, Income Tax Act 1961, IBBI Standards & IndAS 16.',
  },
  {
    id: '02',
    code: 'chartered-engineer',
    title: 'Chartered Engineer Services',
    category: 'Government Certifications & Compliances',
    icon: FileCheck2,
    badgeColor: '#38bdf8',
    description:
      'Chartered Engineer is an Independent Engineer certified and authorized by the prestigious Institution of Engineers (India) to attest / certify different types of Government Declarations / Compliances across multiple Central Government Ministries and Authorities.',
    deliverables: [
      'DGFT Advance Authorisation — Chartered Engineer Certificate for Duty-Free Import of Inputs & Raw Material Nexus (Appendix 4E / 4K)',
      'DGFT Compliances — EPCG Nexus (Appendix 5A), SION Fixation (Appendix 4A), Self-Ratification Scheme, Duty Drawback Rate Fixation (Appendix 7E, 2Q)',
      'CBIC / Customs — EOU Investment Certificate, Served from India Scheme (General Exemption 42), Duty Credit Entitlement',
      'MoFPI — Grant-in-Aid for Food Testing Labs, Abattoirs, HACCP/ISO 22000/FSSC/BRC, PMKSY (CEFPPC)',
      'MoEF — Assessment of Imported EEA as e-waste, CDM Project Certification',
      'GAIL & PSUs — Verification of Technical Documents & Credentials for Bidding',
      'MSME — Grant-in-Aid for Plant & Machinery under Central & State Investment Promotion Schemes',
      'MiETY — EHTP/STP Scheme, Modified Special Incentive Package (M-SIP)',
      'Ministry of Textiles — Integrated Textile Park (ITP), National Handicrafts Development Program (NHDP)',
      'MoCA — Useful Life of Assets if different from Companies Act 2013, Schedule II',
      'MoCI — APEDA Agriculture Export Promotion, EOU Scheme Setup Certificate',
      'MoST — Bio Technology Park (BTP) Setup Certification',
      'Other Engineering Services — Remaining Life Assessment (RLA), Equipment Efficiency, Tool Life Estimation',
    ],
    highlight:
      'Certified & authorized by Institution of Engineers (India) — Corporate Member MIE & Approved Valuer.',
  },
  {
    id: '03',
    code: 'fssai',
    title: 'FSSAI Compliance Services',
    category: 'Food Safety & Regulatory Advisory',
    icon: ShieldCheck,
    badgeColor: '#10b981',
    description:
      'As per Section 31(1) & 31(2) of FSS Act, 2006 every Food Business Operator (FBO) in the country is required to be Licensed / Registered under FSSAI. We as Expert Consultants offer advisory services to Food Business Operators (FBOs) to comply with the different Mandatory Compliances of FSSAI.',
    deliverables: [
      'Applying for New Registration / State License / Central License',
      'Filing for Renewal of Registration / State License / Central License',
      'Filing for Modifications in Registration / State License / Central License',
      'Filing Annual Returns (Form D1 / D2) and Declarations',
      'Appealing for Revocation of FSSAI Suspended Licenses / Registrations',
      'FBO Training by FSSAI Trained and Authorized Food Safety Trainers',
      'Hygiene Auditing by FSSAI Authorized Hygiene Auditors',
      'Mock Surveys before Authority\'s inspection & addressing shortcomings in the system',
      'Advisory for: Dairy units, Vegetable oil units, Slaughter/Meat processing, Food Manufacturing, Hotels, Restaurants, Caterers, Importers/Exporters, E-commerce FBOs',
    ],
    highlight:
      'Covers all FBO categories: Manufacturing, Retail, Hospitality, Transport, Import/Export & E-commerce.',
  },
  {
    id: '04',
    code: 'advisory',
    title: 'Advisory Services',
    category: 'Productivity & Profitability Enhancement',
    icon: Briefcase,
    badgeColor: '#a78bfa',
    description:
      'We provide specialized Advisory Services for Asset Componentization as well as Productivity & Profitability Enhancement. Our quantitative, data-driven approach helps industrial enterprises identify pitfalls in manufacturing systems and achieve sustainable growth.',
    deliverables: [
      'Asset Componentization Analysis — Identifying components with substantially different useful lives as per Companies Act 2013 & IFRS (IndAS 16)',
      'Equipment Effectiveness Analysis — Robust quantitative approach to explore pitfalls in manufacturing & improve productivity',
      'Measurement System Analysis (MSA) — Determining how much measurement process variation contributes to overall process variability',
      'Machine Capability Analysis — Assessing whether the manufacturing process reliably produces characteristic values within tolerance limits',
      'Process Capability Analysis — Predicting whether a manufacturing process can repeatably produce parts meeting specifications',
    ],
    highlight:
      'Data-driven advisory for Asset Componentization, OEE, MSA, Machine & Process Capability Studies.',
  },
  {
    id: '05',
    code: 'safety-energy-audits',
    title: 'Industrial Safety & Energy Audits',
    category: 'Safety, Energy & Statutory Audits',
    icon: Zap,
    badgeColor: '#f97316',
    description:
      'Comprehensive statutory electrical safety, energy efficiency, and industrial health & safety audits authorized under Central Electricity Authority (CEA) Regulations, Bureau of Energy Efficiency (BEE), Factories Act 1948, and National Safety Council of India (NSCI).',
    deliverables: [
      'Chartered Electrical Safety Engineer (CESE) — Statutory inspection, load flow study & certification for HT/LT electrical installations',
      'Electrical Safety Inspection & Auditing — Mandatory audits as per CEA (Safety and Electric Supply) Regulations 2010',
      'Certified Energy Manager, BEE — Mandatory & voluntary energy audits, PAT scheme compliance & thermal/electrical energy conservation',
      'Certificate of Competency, Factories & Boilers — Periodic statutory testing of pressure vessels, lifting machines, cranes & safety gears (Factories Act 1948)',
      'National Safety Council of India (NSCI / NSAT) — Comprehensive industrial safety audit, HAZOP, fire safety & EHS compliance',
      'Thermography & Earthing Audits — Infrared thermal imaging of switchboards, transformers, and earth pit resistance verification',
    ],
    highlight:
      'Authorized CESE, BEE Certified Energy Manager, Competent Person (Factories & Boilers) & NSCI/NSAT Safety Auditor.',
  },
];

// Quick search suggestion chips
const QUICK_SUGGESTIONS = [
  { label: 'Advance Authorisation', query: 'Advance Authorisation', icon: '⚡' },
  { label: 'CESE Electrical Safety', query: 'CESE', icon: '🛡️' },
  { label: 'BEE Energy Audit', query: 'Energy Manager', icon: '🌱' },
  { label: 'Bank Loan Valuation', query: 'Banking', icon: '🏛️' },
  { label: 'Factories & Boilers', query: 'Boilers', icon: '⚙️' },
  { label: 'FSSAI License', query: 'FSSAI', icon: '🍽️' },
  { label: 'IndAS 16 Componentization', query: 'Componentization', icon: '📊' },
];

// Category filter options matching all 5 services
const CATEGORIES = [
  'All',
  'Banking, Legal & Financial',
  'Government Certifications & Compliances',
  'Food Safety & Regulatory Advisory',
  'Productivity & Profitability Enhancement',
  'Safety, Energy & Statutory Audits',
];

export default function ServicesGrid({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  // Keyword highlighting helper
  const highlightText = (text, query) => {
    if (!query || !query.trim() || typeof text !== 'string') return text;
    const cleanQuery = query.trim();
    const regex = new RegExp(`(${cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark
          key={i}
          style={{
            background: 'rgba(245, 158, 11, 0.35)',
            color: '#fbbf24',
            fontWeight: 700,
            padding: '1px 4px',
            borderRadius: '4px',
          }}
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  // Filter services by category AND real-time search query
  const filteredServices = useMemo(() => {
    let list = servicesData;

    if (activeFilter !== 'All') {
      list = list.filter((s) => s.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((s) => {
        const inTitle = s.title.toLowerCase().includes(q);
        const inCat = s.category.toLowerCase().includes(q);
        const inDesc = s.description.toLowerCase().includes(q);
        const inHighlight = s.highlight.toLowerCase().includes(q);
        const inDeliverables = s.deliverables.some((d) => d.toLowerCase().includes(q));
        return inTitle || inCat || inDesc || inHighlight || inDeliverables;
      });
    }

    return list;
  }, [activeFilter, searchQuery]);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleChipClick = (query) => {
    if (searchQuery.toLowerCase() === query.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(query);
      setActiveFilter('All');
    }
  };

  return (
    <section id="services" className="section section-light" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-badge">
            <Sparkles size={15} />
            <span>Comprehensive Professional Services</span>
          </div>
          <h2 className="section-title">
            Services <span className="gradient-text">We Offer</span>
          </h2>
          <p className="section-description">
            From statutory asset valuation and government certifications to FSSAI compliance
            advisory, CESE electrical safety, and BEE energy audits — end-to-end chartered engineering expertise.
          </p>

          {/* 🔍 Interactive Floating Search Bar */}
          <div
            style={{
              maxWidth: '680px',
              margin: '28px auto 0 auto',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <div
              className="services-search-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 'var(--radius-full)',
                padding: '6px 12px 6px 18px',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <Search size={20} color="#1d4ed8" style={{ flexShrink: 0, marginRight: '10px' }} />
              <input
                type="text"
                className="services-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 50+ services (e.g. Advance Authorisation, CESE, BEE, Bank Loan, Solar)..."
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.94rem',
                  fontFamily: 'inherit',
                  padding: '8px 0',
                }}
                aria-label="Search services and statutory compliances"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    marginRight: '8px',
                    flexShrink: 0,
                  }}
                  title="Clear search"
                >
                  <X size={15} />
                </button>
              )}
              {searchQuery && (
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    background: filteredServices.length > 0 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                    color: filteredServices.length > 0 ? '#34d399' : '#f87171',
                    border: `1px solid ${filteredServices.length > 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {filteredServices.length} {filteredServices.length === 1 ? 'Match' : 'Matches'}
                </span>
              )}
            </div>

            {/* Quick 1-Tap Search Suggestion Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                marginTop: '14px',
              }}
            >
              <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600 }}>Popular:</span>
              {QUICK_SUGGESTIONS.map((chip, idx) => {
                const isSelected = searchQuery.toLowerCase() === chip.query.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => handleChipClick(chip.query)}
                    style={{
                      background: isSelected ? '#1e40af' : '#ffffff',
                      border: `1px solid ${isSelected ? '#1e40af' : '#cbd5e1'}`,
                      borderRadius: 'var(--radius-full)',
                      padding: '4px 11px',
                      fontSize: '0.74rem',
                      fontWeight: 500,
                      color: isSelected ? '#ffffff' : '#475569',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{chip.icon}</span>
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '22px',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                }}
                className={`service-filter-chip ${activeFilter === cat ? 'active' : ''}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State when 0 services match search */}
        {filteredServices.length === 0 && (
          <div
            className="glass-card"
            style={{
              maxWidth: '620px',
              margin: '30px auto',
              textAlign: 'center',
              padding: '40px 24px',
              border: '1px dashed rgba(245, 158, 11, 0.4)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                margin: '0 auto 16px auto',
                borderRadius: '50%',
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
              }}
            >
              <Search size={26} />
            </div>
            <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '8px' }}>
              No services found for &ldquo;{searchQuery}&rdquo;
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
              Looking for a custom statutory compliance, government clearance, or technical audit? Our corporate Chartered Engineers provide tailored engineering solutions across all ministries.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={clearSearch} className="btn btn-outline" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
                <RotateCcw size={15} />
                <span>Reset Search</span>
              </button>
              <button onClick={() => onOpenQuote('Custom Inquiry', { notes: `User searched for: ${searchQuery}` })} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
                <span>Request Custom Consultation</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const hasActiveSearch = Boolean(searchQuery.trim());
            // Auto-expand card if user searched so matching bullet points are visible
            const isExpanded = hasActiveSearch || expandedId === service.id;
            const previewItems = hasActiveSearch ? service.deliverables : service.deliverables.slice(0, 4);
            const extraItems = hasActiveSearch ? [] : service.deliverables.slice(4);

            return (
              <div
                key={service.id}
                id={service.code}
                className="glass-card service-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${service.badgeColor}`,
                  boxShadow: hasActiveSearch ? `0 10px 30px ${service.badgeColor}22` : undefined,
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  {/* Card Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px',
                    }}
                  >
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '14px',
                        background: `${service.badgeColor}18`,
                        border: `1px solid ${service.badgeColor}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.badgeColor,
                      }}
                    >
                      <Icon size={26} />
                    </div>
                    <span
                      className="service-card-num"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {service.id}
                    </span>
                  </div>

                  {/* Category tag */}
                  <div
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: service.badgeColor,
                      fontWeight: 600,
                      marginBottom: '6px',
                    }}
                  >
                    {service.category}
                  </div>

                  {/* Title */}
                  <h3 className="service-card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>
                    {highlightText(service.title, searchQuery)}
                  </h3>

                  {/* Description */}
                  <p
                    className="service-card-desc"
                    style={{
                      fontSize: '0.88rem',
                      marginBottom: '18px',
                      lineHeight: 1.65,
                    }}
                  >
                    {highlightText(service.description, searchQuery)}
                  </p>

                  {/* Sub-services list */}
                  <div style={{ marginBottom: '8px' }}>
                    <div
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '10px',
                      }}
                    >
                      Scope of Services:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', margin: 0, padding: 0 }}>
                      {previewItems.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '9px',
                            fontSize: '0.84rem',
                            lineHeight: 1.5,
                          }}
                        >
                          <Check size={15} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span className="service-deliverable-item">{highlightText(item, searchQuery)}</span>
                        </li>
                      ))}

                      {/* Expandable extra items (when not actively searching) */}
                      {!hasActiveSearch && isExpanded &&
                        extraItems.map((item, i) => (
                          <li
                            key={`extra-${i}`}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '9px',
                              fontSize: '0.84rem',
                              lineHeight: 1.5,
                            }}
                          >
                            <Check size={15} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span className="service-deliverable-item">{highlightText(item, searchQuery)}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Show more / less toggle (hidden during active search) */}
                    {!hasActiveSearch && extraItems.length > 0 && (
                      <button
                        onClick={() => toggleExpand(service.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginTop: '10px',
                          background: 'none',
                          border: 'none',
                          color: service.badgeColor,
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          padding: '4px 0',
                          transition: 'opacity 0.2s ease',
                        }}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={15} /> Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown size={15} /> +{extraItems.length} More Services
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div style={{ marginTop: '20px' }}>
                  <div
                    className="service-highlight-box"
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      fontSize: '0.8rem',
                      marginBottom: '16px',
                    }}
                  >
                    💡 {highlightText(service.highlight, searchQuery)}
                  </div>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="service-request-btn"
                    title={`Request Quote and fill inquiry for ${service.title}`}
                    type="button"
                  >
                    <span className="service-request-btn-content">
                      <FileCheck2 size={16} className="service-request-btn-icon" />
                      <span>Request Quote / Fill Inquiry</span>
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
