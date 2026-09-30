import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, Search, ChevronDown, ChevronUp, ShieldCheck, 
  Phone, MessageSquare, ArrowLeft, CheckCircle2, Award, 
  FileCheck2, Building2, Sun, Scale, ExternalLink
} from 'lucide-react';

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'chartered-engineer', label: 'Chartered Engineer & DGFT', icon: FileCheck2 },
  { id: 'valuation', label: 'Asset & Machinery Valuation', icon: Building2 },
  { id: 'solar-safety', label: 'CEIG Solar & Electrical Safety', icon: Sun },
  { id: 'fssai', label: 'FSSAI Food Compliance', icon: ShieldCheck },
];

export const FAQ_ITEMS = [
  {
    id: 'ce-01',
    category: 'chartered-engineer',
    question: 'Who is a Chartered Engineer (CEng) in India and what are their statutory powers?',
    answer: `A Chartered Engineer in India is a corporate member (Fellow / Member) of the prestigious **Institution of Engineers (India) — IEI**, chartered under the Royal Charter of 1935.
    
Statutory authorities including the **Directorate General of Foreign Trade (DGFT)**, **CBIC (Customs & Central Excise)**, Ministry of Food Processing Industries (MoFPI), Ministry of Environment, Forest & Climate Change (MoEF), State Electricity Boards, and Courts of Law authorize Chartered Engineers to inspect, evaluate, and issue formal technical certificates with statutory evidentiary value across India.`
  },
  {
    id: 'ce-02',
    category: 'chartered-engineer',
    question: 'Why do exporters and importers require a Chartered Engineer Certificate in Jaipur / Rajasthan?',
    answer: `Exporters and manufacturers require Chartered Engineer Certificates for:
1. **DGFT Advance Authorisation (Appendix 4K):** Mandatory nexus certification determining exact input-to-output consumption norms and process wastage for duty-free raw material imports.
2. **EPCG Scheme Nexus Verification:** Certifying that imported capital machinery directly contributes to export production.
3. **Customs Clearance of Second-Hand Machinery:** Certifying fair market value, residual useful life (minimum 5-10 years), and condition for customs tariff valuation.
4. **EOU / SEZ Procurement & SION Fixation:** Certification for Export Oriented Units under CBIC regulations.`
  },
  {
    id: 'ce-03',
    category: 'chartered-engineer',
    question: 'How fast can MS Chartered Engineers issue a Chartered Engineer Certificate?',
    answer: `We provide expedited turnaround within **24 to 48 hours** for standard DGFT Appendix 4K, customs valuation, and EPCG certifications upon receiving the complete technical documentation and bill of materials (BOM). Emergency customs clearance services are also supported across Jaipur, Rajasthan, and nationwide.`
  },
  {
    id: 'ce-04',
    category: 'chartered-engineer',
    question: 'What documents are required to obtain a Chartered Engineer Certificate for DGFT / Customs?',
    answer: `The primary documents needed include:
* Copy of IEC (Import Export Code) & GST Certificate.
* Proforma Invoice / Commercial Purchase Invoice of imported goods or machinery.
* Technical datasheets, machine specifications, and catalog.
* Manufacturing process flow diagram and Bill of Materials (BOM).
* For used machinery: Country of origin, year of manufacture, and refurbishment history.`
  },
  {
    id: 'val-01',
    category: 'valuation',
    question: 'What is Plant & Machinery Valuation and which banks accept your reports in Jaipur?',
    answer: `Plant & Machinery Valuation is a scientific appraisal determining Fair Market Value (FMV), Realizable Value, and Orderly/Forced Liquidation Value as per Companies Act 2013, Income Tax Act 1961, and IBBI Valuation Standards.
    
Led by Mukesh Singh (B.Tech Mechanical, IIT Roorkee), our valuation reports are accepted by major public sector banks, private commercial banks, NBFCs, and financial institutions for mortgage loans, collateral security, and consortium lending across Jaipur and Pan-India.`
  },
  {
    id: 'val-02',
    category: 'valuation',
    question: 'What is Componentization of assets under IndAS 16 (PPE)?',
    answer: `Under IndAS 16 (Property, Plant and Equipment) and Schedule II of the Companies Act 2013, industrial assets must be segregated into significant components having substantially different useful lives. 
    
MS Chartered Engineers conducts detailed technical inspections of manufacturing plants to separate base frames, motors, electronic controls, and high-wear tooling, providing compliant depreciation schedules for audit and balance sheet finalization.`
  },
  {
    id: 'val-03',
    category: 'valuation',
    question: 'Do you provide valuation reports for IBC (Insolvency & Bankruptcy) and NCLT proceedings?',
    answer: `Yes, we provide specialized valuations under the Insolvency and Bankruptcy Code (IBC) 2016 for Resolution Professionals (RPs), Committee of Creditors (CoC), and Liquidators, determining Fair Value and Liquidation Value adhering strictly to IBBI regulations.`
  },
  {
    id: 'sol-01',
    category: 'solar-safety',
    question: 'What is CEIG Solar Drawing Approval and why is it mandatory in Rajasthan?',
    answer: `Under Central Electricity Authority (CEA) Regulations and the Indian Electricity Rules, any rooftop or ground-mounted solar power plant (typically >10 kW to multi-megawatt) connecting to the electrical grid requires prior drawing approval and statutory inspection by the **Chief Electrical Inspector to Government (CEIG)**.
    
Our authorized Chartered Electrical Safety Engineers (CESE) prepare Single Line Diagrams (SLD), earthing layout drawings, relay coordination studies, and ensure 100% regulatory approval with the Electrical Inspectorate.`
  },
  {
    id: 'sol-02',
    category: 'solar-safety',
    question: 'What statutory industrial safety audits does your team perform?',
    answer: `We conduct:
1. **Chartered Electrical Safety Engineer (CESE) Audits** under CEA Regulations 2010.
2. **BEE Certified Energy Audits** under the Energy Conservation Act 2001.
3. **Factories & Boilers Competency Certification** under the Factories Act 1948 (testing of pressure vessels, cranes, lifting tackles).
4. **NSCI / NSAT Authorized Safety Audits** (fire load assessment, HAZOP, and industrial risk mitigation).`
  },
  {
    id: 'fssai-01',
    category: 'fssai',
    question: 'Which Food Business Operators (FBOs) require FSSAI Central vs State License?',
    answer: `* **FSSAI Central License:** Mandatory for large food manufacturers (turnover > ₹20 Crores/year), 100% Export Oriented Units (EOUs), importers, proprietary food manufacturers, and businesses operating across multiple states.
* **FSSAI State License:** Required for medium-scale manufacturers, hotels (3-star & 4-star), restaurants, and distributors (turnover ₹12 Lakhs to ₹20 Crores/year).
* **FSSAI Registration:** Required for small food handlers and petty retailers (turnover up to ₹12 Lakhs/year).
    
MS Chartered Engineers handles new applications, annual returns (Form D1/D2), and statutory audit compliance.`
  },
  {
    id: 'fssai-02',
    category: 'fssai',
    question: 'Can you handle FSSAI license suspension revocation and annual return filings?',
    answer: `Yes, our regulatory team assists food businesses in preparing statutory responses, corrective action reports (CAPA), hygiene audits, and filing appeals before the Designated Officer (DO) / Central Licensing Authority to revoke suspended FSSAI licenses.`
  },
  {
    id: 'gen-01',
    category: 'chartered-engineer',
    question: 'Can MS Chartered Engineers serve clients located outside Jaipur, Rajasthan?',
    answer: `Yes, absolutely. MS Chartered Engineers has an established **Pan-India practice** with 15+ years of operational experience. We regularly serve corporate, banking, industrial, and exporter clients across Delhi-NCR, Mumbai, Ahmedabad, Bengaluru, Chennai, Hyderabad, and Kolkata.`
  }
];

export default function FAQPage({ onOpenQuote, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState(() => new Set(['ce-01', 'ce-02']));

  const toggleAccordion = (id) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(FAQ_ITEMS.map(i => i.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div style={{ background: '#040914', color: '#cbd5e1', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      {/* Schema.org FAQPage structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQ_ITEMS.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer.replace(/\*\*/g, '').replace(/\n/g, ' ')
            }
          }))
        })
      }} />

      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '8px',
              color: '#38bdf8',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            <span>&larr; Back to Homepage</span>
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
            <span>Home</span>
            <span>&gt;</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Frequently Asked Questions</span>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            borderRadius: '999px',
            color: '#fbbf24',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
          }}>
            <HelpCircle size={15} />
            <span>Statutory Knowledge &amp; Regulatory Help Desk</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#ffffff', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
            Frequently Asked <span style={{ color: '#38bdf8' }}>Questions</span>
          </h1>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#94a3b8', marginBottom: '28px' }}>
            Authoritative answers on <strong>Chartered Engineer certification</strong>, <strong>DGFT Advance Authorisation</strong>, <strong>Bank Plant &amp; Machinery Valuation</strong>, <strong>CEIG Solar approvals</strong>, and <strong>FSSAI statutory compliance</strong> in Jaipur &amp; Pan-India.
          </p>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            <Search size={20} color="#38bdf8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. DGFT, customs, valuation, timeline)..."
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                color: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {FAQ_CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 18px',
                  borderRadius: '30px',
                  background: isSelected ? '#185adb' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: isSelected ? '#ffffff' : '#cbd5e1',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} color={isSelected ? '#ffffff' : '#38bdf8'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Controls Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '860px',
          margin: '0 auto 16px auto',
          fontSize: '0.86rem',
          color: '#94a3b8'
        }}>
          <span>Showing <strong>{filteredFaqs.length}</strong> statutory questions</span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={expandAll}
              style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem' }}
            >
              Expand All
            </button>
            <span>|</span>
            <button
              onClick={collapseAll}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.82rem' }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(15, 23, 42, 0.5)', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.1)' }}>
              <HelpCircle size={40} color="#f59e0b" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ color: '#ffffff', marginBottom: '8px' }}>No exact matching questions found</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px' }}>
                Need specific guidance on your compliance case? Speak directly with our Chartered Engineer team.
              </p>
              <button
                onClick={() => onOpenQuote('Chartered Engineer Services')}
                style={{
                  padding: '10px 20px',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#000000',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Ask Our Chartered Engineers Directly
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  style={{
                    background: isOpen ? 'rgba(11, 27, 61, 0.65)' : 'rgba(15, 23, 42, 0.45)',
                    border: `1px solid ${isOpen ? 'rgba(56, 189, 248, 0.35)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 10px 24px rgba(0, 0, 0, 0.25)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'transparent',
                      border: 'none',
                      color: isOpen ? '#ffffff' : '#e2e8f0',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        background: isOpen ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)',
                        color: isOpen ? '#040914' : '#94a3b8',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </span>
                      <span>{faq.question}</span>
                    </span>

                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: isOpen ? '#38bdf8' : '#94a3b8',
                      flexShrink: 0
                    }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 22px 22px 58px',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      color: '#cbd5e1',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '16px'
                    }}>
                      {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} style={{ marginBottom: pIdx === faq.answer.split('\n\n').length - 1 ? 0 : '12px' }}>
                          {paragraph.split('\n').map((line, lIdx) => {
                            if (line.startsWith('* ') || line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
                              return (
                                <span key={lIdx} style={{ display: 'block', paddingLeft: '8px', margin: '4px 0' }}>
                                  {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                                </span>
                              );
                            }
                            return (
                              <span key={lIdx} style={{ display: 'block' }}>
                                {line.replace(/\*\*(.*?)\*\*/g, '$1')}
                              </span>
                            );
                          })}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA Box */}
        <div style={{
          maxWidth: '860px',
          margin: '50px auto 0 auto',
          padding: '36px',
          background: 'linear-gradient(135deg, rgba(11,27,61,0.9) 0%, rgba(4,9,20,0.95) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
        }}>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800, marginBottom: '10px' }}>
            Still Have a Statutory or Technical Question?
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
            Our corporate team led by <strong>Mukesh Singh, Chartered Engineer (India) MIE</strong>, is available for direct consultation regarding DGFT, Customs, Banking Valuation, and CEIG approvals.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Chartered Engineer Services')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                border: 'none',
                borderRadius: '8px',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.92rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.3)'
              }}
            >
              <FileCheck2 size={18} />
              <span>Request Formal Quotation</span>
            </button>

            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20have%20a%20statutory%20compliance%20question."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#25D366',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none'
              }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Consultation</span>
            </a>

            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.92rem',
                textDecoration: 'none'
              }}
            >
              <Phone size={18} color="#38bdf8" />
              <span>+91 91586 58885</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
