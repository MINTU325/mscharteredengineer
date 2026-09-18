import React, { useState } from 'react';
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
      'DGFT — EPCG Nexus, SION Fixation, Advanced Authorization, Self Ratification, Drawback Rate (Appendix 5A, 4A, 4E, 4K, 7E, 2Q)',
      'CBIC / Customs — EOU Investment Certificate, Served from India Scheme (General Exemption 42), Duty Credit Entitlement',
      'MoFPI — Grant-in-Aid for Food Testing Labs, Abattoirs, HACCP/ISO 22000/FSSC/BRC, PMKSY (CEFPPC)',
      'MoEF — Assessment of Imported EEA as e-waste, CDM Project Certification',
      'GAIL — Verification of Documents/Credentials for Bidding purposes',
      'MSME — Grant-in-Aid for Plant & Machinery under Investment Promotion Schemes (Central & State)',
      'MiETY — EHTP/STP Scheme, Modified Special Incentive Package (M-SIP)',
      'Ministry of Textiles — Integrated Textile Park (ITP), National Handicrafts Development Program (NHDP)',
      'MoCA — Useful Life of Assets if different from Companies Act 2013, Schedule II',
      'MoCI — APEDA Agriculture Export Promotion, EOU Scheme Setup Certificate',
      'MoST — Bio Technology Park (BTP) Setup Certification',
      'Other Services — Remaining Life Assessment (RLA), Equipment Efficiency, Tool Life Estimation',
    ],
    highlight:
      'Certified & authorized by Institution of Engineers (India) — Corporate Member MIE.',
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
];

// Category filter options matching the 4 real services
const CATEGORIES = ['All', 'Banking, Legal & Financial', 'Government Certifications & Compliances', 'Food Safety & Regulatory Advisory', 'Productivity & Profitability Enhancement'];

export default function ServicesGrid({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filteredServices =
    activeFilter === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} />
            <span>Comprehensive Professional Services</span>
          </div>
          <h2 className="section-title">
            Services <span className="gradient-text">We Offer</span>
          </h2>
          <p className="section-description">
            From statutory asset valuation and government certifications to FSSAI compliance
            advisory and productivity enhancement — end-to-end chartered engineering expertise.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor:
                    activeFilter === cat
                      ? 'var(--primary-light)'
                      : 'rgba(255,255,255,0.1)',
                  background:
                    activeFilter === cat
                      ? 'rgba(24, 90, 219, 0.25)'
                      : 'rgba(255,255,255,0.03)',
                  color: activeFilter === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            const previewItems = service.deliverables.slice(0, 4);
            const extraItems = service.deliverables.slice(4);

            return (
              <div
                key={service.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${service.badgeColor}`,
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
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        color: 'rgba(255,255,255,0.18)',
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
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#ffffff' }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#cbd5e1',
                      marginBottom: '20px',
                      lineHeight: 1.65,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Sub-services list — always show first 4 */}
                  <div style={{ marginBottom: '8px' }}>
                    <div
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        color: '#94a3b8',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '10px',
                      }}
                    >
                      Scope of Services:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                      {previewItems.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '9px',
                            fontSize: '0.84rem',
                            color: '#e2e8f0',
                            lineHeight: 1.5,
                          }}
                        >
                          <Check size={15} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </li>
                      ))}

                      {/* Expandable extra items */}
                      {isExpanded &&
                        extraItems.map((item, i) => (
                          <li
                            key={`extra-${i}`}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '9px',
                              fontSize: '0.84rem',
                              color: '#e2e8f0',
                              lineHeight: 1.5,
                            }}
                          >
                            <Check size={15} color={service.badgeColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                    </ul>

                    {/* Show more / less toggle */}
                    {extraItems.length > 0 && (
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
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px dashed rgba(255,255,255,0.1)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 14px',
                      fontSize: '0.8rem',
                      color: '#fbbf24',
                      marginBottom: '16px',
                    }}
                  >
                    💡 {service.highlight}
                  </div>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      padding: '12px 20px',
                      fontSize: '0.88rem',
                    }}
                  >
                    <span>Enquire — {service.title}</span>
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
