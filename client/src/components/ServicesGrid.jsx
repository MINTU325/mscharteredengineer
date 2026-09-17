import React, { useState } from 'react';
import { 
  FileCheck2, 
  Calculator, 
  LineChart, 
  Building2, 
  Sun, 
  Briefcase, 
  ArrowRight, 
  Check, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const servicesData = [
  {
    id: "01",
    code: "certification",
    title: "Engineering Certification",
    category: "Statutory Compliance",
    icon: FileCheck2,
    badgeColor: "#38bdf8",
    description: "Official Chartered Engineer certifications recognized by government ministries, customs authorities, banks, and regulatory bodies.",
    deliverables: [
      "Chartered Engineer certification for Mechanical Engineering works",
      "Machinery Installation / Nexus Certificate",
      "Export & Import Certificate (Second-Hand Machinery / Capital Goods)",
      "Customs / DGFT / Port Clearance Certificate"
    ],
    highlight: "Essential for EPCG export-obligation fulfillment & customs duty concessions."
  },
  {
    id: "02",
    code: "valuation",
    title: "Valuation Services",
    category: "Banking & Financial",
    icon: Calculator,
    badgeColor: "#f59e0b",
    description: "Certified plant & machinery asset valuations for bank hypothecation, balance sheet auditing, mergers, and insolvency resolution.",
    deliverables: [
      "New & Old Machinery Physical Inspection & Fair Market Valuation",
      "Comprehensive Asset Valuation and Stamped Certification",
      "Remaining Useful Life (RUL) Assessment for Machinery & Plants",
      "Valuation for Commercial Banks, NBFCs, and Statutory Compliance"
    ],
    highlight: "Adhering to Companies Act 2013 & IBBI Registered Valuer valuation benchmarks."
  },
  {
    id: "03",
    code: "project-dpr",
    title: "Project Consultancy & DPR",
    category: "Feasibility & Financing",
    icon: LineChart,
    badgeColor: "#10b981",
    description: "Comprehensive techno-economic viability studies and bankable project reports for raising capital, subsidies, and term loans.",
    deliverables: [
      "Detailed Project Report (DPR) Preparation for Industrial Plants",
      "Project ROI / Financial Viability & Cash Flow Modeling",
      "Site Visit & Techno-Commercial Feasibility Reports",
      "EPR (Extended Producer Responsibility) Consultancy Services",
      "Technical and Financial End-to-End Project Advisory"
    ],
    highlight: "Engineered to satisfy bank credit committees and SIDBI/state subsidy standards."
  },
  {
    id: "04",
    code: "structural",
    title: "Structural & Industrial Services",
    category: "Plant Safety & Audit",
    icon: Building2,
    badgeColor: "#818cf8",
    description: "Ensuring structural integrity, worker safety, factory act compliance, and optimal plant capacity utilization.",
    deliverables: [
      "Structural Stability Assessment and Stamped Certification",
      "Periodic Inspection of Industrial Buildings, Factories and Warehouses",
      "Plant Capacity & Production Utilization Assessment & Certification",
      "Factory Act Safety & Industrial Environmental Compliance Support"
    ],
    highlight: "Mandatory compliance for factory license renewal, fire insurance & safety audits."
  },
  {
    id: "05",
    code: "energy-environmental",
    title: "Energy & Environmental Services",
    category: "Clean Tech & SLD",
    icon: Sun,
    badgeColor: "#f43f5e",
    description: "Complete electrical safety clearance and sustainability engineering for solar power projects and industrial setups.",
    deliverables: [
      "CEIG Certificate for Solar Projects (Drawing Approval & Inspection)",
      "Environmental Engineering Consultancy & Green Audits",
      "Industrial Rain Water Harvesting (RWH) Design & Project Clearance",
      "Electrical Single Line Diagrams (SLD) / MEP Validation",
      "Sustainability and Green Energy Transformation Advisory"
    ],
    highlight: "Fast-track CEIG inspection liaison for solar installations from 50kW to MW scale."
  },
  {
    id: "06",
    code: "regulatory",
    title: "Regulatory & Business Support",
    category: "Corporate Advisory",
    icon: Briefcase,
    badgeColor: "#06b6d4",
    description: "End-to-end corporate statutory support, international liaison, visa assistance, and technology transfer documentation.",
    deliverables: [
      "Company Registration Services, MSME, & GST Statutory Support",
      "Statutory Certification & Government Portal Filings",
      "EPCG / Advance License Technical Certificates for DGFT",
      "China Business Visa Services & Machinery Import Support",
      "Technical Language Translation Services (Chinese / European to English)",
      "Comprehensive Statutory and Regulatory Advisory"
    ],
    highlight: "Global industrial exposure facilitating international machinery sourcing."
  }
];

export default function ServicesGrid({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Statutory Compliance', 'Banking & Financial', 'Feasibility & Financing', 'Plant Safety & Audit', 'Clean Tech & SLD', 'Corporate Advisory'];

  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={15} />
            <span>Comprehensive Solutions For Your Business Growth</span>
          </div>
          <h2 className="section-title">
            Services <span className="gradient-text">We Offer</span>
          </h2>
          <p className="section-description">
            From technical appraisal and statutory valuation to solar clearances and foreign trade compliance, we provide end-to-end chartered engineering expertise.
          </p>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginTop: '32px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--primary-light)' : 'rgba(255,255,255,0.1)',
                  background: activeFilter === cat ? 'rgba(24, 90, 219, 0.25)' : 'rgba(255,255,255,0.03)',
                  color: activeFilter === cat ? '#ffffff' : 'var(--text-muted)',
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '28px'
        }}>
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${service.badgeColor}`
                }}
              >
                <div>
                  {/* Card Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px'
                  }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: `rgba(${service.badgeColor === '#f59e0b' ? '245, 158, 11' : '24, 90, 219'}, 0.15)`,
                      border: `1px solid ${service.badgeColor}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.badgeColor
                    }}>
                      <Icon size={26} />
                    </div>

                    <span style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(255,255,255,0.2)'
                    }}>
                      {service.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: service.badgeColor,
                    fontWeight: 600,
                    marginBottom: '6px'
                  }}>
                    {service.category}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: '#ffffff' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', marginBottom: '20px', lineHeight: 1.6 }}>
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                      Scope of Certification:
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.deliverables.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#e2e8f0' }}>
                          <Check size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer & Action */}
                <div>
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px dashed rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '10px 14px',
                    fontSize: '0.8rem',
                    color: '#fbbf24',
                    marginBottom: '18px'
                  }}>
                    💡 {service.highlight}
                  </div>

                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="btn btn-outline"
                    style={{
                      width: '100%',
                      justifyContent: 'space-between',
                      padding: '12px 20px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <span>Request {service.title}</span>
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
