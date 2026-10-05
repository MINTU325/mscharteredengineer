import React, { useState, useMemo, useEffect } from 'react';
import { 
  HelpCircle, Search, ChevronDown, ChevronUp, ShieldCheck, 
  Phone, MessageSquare, ArrowLeft, CheckCircle2, Award, 
  FileCheck2, Building2, Sun, Scale, ExternalLink
} from 'lucide-react';

function parseInlineLinks(text) {
  if (!text) return '';
  const parts = [];
  const regex = /\*\*\[(.*?)\]\((.*?)\)\*\*|\[\*\*(.*?)\*\*\]\((.*?)\)|\[(.*?)\]\((.*?)\)|\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1] || match[3] || match[5];
    const linkHref = match[2] || match[4] || match[6];
    const isBoldLink = Boolean(match[1] || match[3]);
    const normalBold = match[7];

    if (linkText && linkHref) {
      parts.push(
        <a
          key={`lnk-${match.index}`}
          href={linkHref}
          style={{
            color: '#1d4ed8',
            fontWeight: isBoldLink ? 700 : 600,
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#b45309')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#1d4ed8')}
        >
          {linkText}
        </a>
      );
    } else if (normalBold !== undefined) {
      parts.push(<strong key={`bld-${match.index}`} style={{ color: '#0f172a' }}>{normalBold}</strong>);
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
}

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'chartered-engineer', label: 'Chartered Engineer & DGFT', icon: FileCheck2 },
  { id: 'valuation', label: 'Asset & Machinery Valuation', icon: Building2 },
  { id: 'solar-safety', label: 'CEIG Solar & Electrical Safety', icon: Sun },
  { id: 'fssai', label: 'FSSAI Food Compliance', icon: ShieldCheck },
];

const FAQ_ITEMS = [
  {
    id: 'ce-01',
    category: 'chartered-engineer',
    question: 'Who is a Chartered Engineer (CEng) in India and what are their statutory powers?',
    answer: `A Chartered Engineer in India is a corporate member (Fellow / Member) of the prestigious **[Institution of Engineers (India) — IEI](/credentials)**, chartered under the Royal Charter of 1935.
    
Statutory authorities including the **[Directorate General of Foreign Trade (DGFT)](/chartered-engineer)**, **[CBIC Customs & Central Excise](/chartered-engineer)**, Ministry of Food Processing Industries (MoFPI), Ministry of Environment, Forest & Climate Change (MoEF), State Electricity Boards, and Courts of Law authorize Chartered Engineers to inspect, evaluate, and issue formal technical certificates with statutory evidentiary value across India.`
  },
  {
    id: 'ce-02',
    category: 'chartered-engineer',
    question: 'Why do exporters and importers require a Chartered Engineer Certificate in Jaipur / Rajasthan?',
    answer: `Exporters and manufacturers require **[Chartered Engineer Certificates in Jaipur](/chartered-engineer)** for:
1. **[DGFT Advance Authorisation (Appendix 4K)](/chartered-engineer):** Mandatory nexus certification determining exact input-to-output consumption norms and process wastage for duty-free raw material imports.
2. **[EPCG Scheme Nexus Verification](/chartered-engineer):** Certifying that imported capital machinery directly contributes to export production.
3. **[Customs Clearance of Second-Hand Machinery](/valuation):** Certifying fair market value, residual useful life (minimum 5-10 years), and condition for customs tariff valuation.
4. **[EOU / SEZ Procurement & SION Fixation](/chartered-engineer):** Certification for Export Oriented Units under CBIC regulations.`
  },
  {
    id: 'ce-03',
    category: 'chartered-engineer',
    question: 'How fast can MS Chartered Engineers issue a Chartered Engineer Certificate in Jaipur?',
    answer: `At **[MS Chartered Engineers in Jaipur](/)**, we provide expedited turnaround within **24 to 48 hours** for standard **[DGFT Appendix 4K Certificates](/chartered-engineer)**, customs machinery valuations, and EPCG certifications upon receiving the complete technical documentation and bill of materials (BOM). Emergency customs clearance services are also supported across Jaipur, Rajasthan, and nationwide.`
  },
  {
    id: 'ce-04',
    category: 'chartered-engineer',
    question: 'What documents are required to obtain a Chartered Engineer Certificate for DGFT / Customs?',
    answer: `The primary documents needed for a **[Chartered Engineer Certificate](/chartered-engineer)** include:
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
    answer: `**[Plant & Machinery Valuation](/valuation)** is a scientific appraisal determining Fair Market Value (FMV), Realizable Value, and Orderly/Forced Liquidation Value as per Companies Act 2013, Income Tax Act 1961, and IBBI Valuation Standards.
    
Led by **[Mukesh Singh, IIT Roorkee Alumni](/founder)**, our valuation reports are accepted by major public sector banks, private commercial banks, NBFCs, and financial institutions for mortgage loans, collateral security, and consortium lending across Jaipur and Pan-India. You can also estimate machinery depreciation with our **[Online Valuation Calculator](/calculator)**.`
  },
  {
    id: 'val-prop-01',
    category: 'valuation',
    question: 'How is Property & Land Valuation conducted in Jaipur for Residential, Commercial & Industrial Assets?',
    answer: `At **[MS Chartered Engineers in Jaipur](/property-valuation)**, property valuation is conducted through physical site inspection and dual assessment:
1. **DLC / Circle Rate Benchmark:** Verified against the latest Rajasthan Sub-Registrar / IGRS portal rates.
2. **Fair Market Value (FMV):** Evaluated using the Sales Comparison (Direct Market) Approach, CPWD Plinth Area construction rates, and local registry transaction history across Jaipur (Mansarovar, Vaishali Nagar, Jagatpura, Sitapura, Malviya Nagar, RIICO zones).
3. **Statutory Acceptance:** Our reports adhere to IBBI valuation standards and are accepted by commercial banks, tax authorities, and civil courts across Rajasthan.`
  },
  {
    id: 'val-tax-01',
    category: 'valuation',
    question: 'What is Capital Gains Tax Valuation under Section 50C and Fair Market Value as on 01-04-2001?',
    answer: `When selling property acquired before April 1, 2001, taxpayers can substitute the original purchase cost with the **[Fair Market Value as on 01-04-2001](/tax-valuation)** (capped at stamp duty / circle rate) for indexation benefit under Section 55(2)(b).

Additionally, under **Section 50C / 43CA / 56(2)(x)** of the Income Tax Act 1961, if the registered consideration is lower than the circle rate, a Government Registered Valuer report provides admissible technical evidence before the Assessing Officer (AO), CIT(Appeals), or ITAT. Contact **[MS Chartered Engineers](/tax-valuation)** for Section 50C defense reports.`
  },
  {
    id: 'val-bank-01',
    category: 'valuation',
    question: 'What is the difference between Fair Market Value (FMV) and Forced Sale Value (FSV) in Bank Valuation?',
    answer: `In **[Bank Mortgage Valuation](/bank-valuation)**:
* **Fair Market Value (FMV):** The estimated price an asset would sell for in an open, competitive market between willing parties with reasonable time for negotiation.
* **Realizable Value (RV):** The realistic price achievable under prevailing localized market conditions.
* **Forced Sale Value (FSV) / Distress Value:** The estimated amount realized when the seller is under financial or statutory duress to liquidate within an abbreviated timeline (typically 15% to 30% below FMV).
Banks and NBFCs require both FMV and FSV for loan-to-value (LTV) underwriting, LAP sanctions, and SARFAESI reserve price fixation.`
  },
  {
    id: 'ce-proc-01',
    category: 'chartered-engineer',
    question: 'What is the 8-Step Valuation and Chartered Engineer certification process at MS Chartered Engineers?',
    answer: `Our transparent **[8-Step Valuation Process](/process)** ensures complete auditability and quick delivery:
1. **Purpose Assessment & Scrutiny** (15 mins)
2. **Document Completeness Review** (Title deed, sanctioned map, BOM, purchase invoice)
3. **Upfront Transparent Quotation** (Fixed fees, committed timelines)
4. **Physical Site & Technical Inspection** (Physical measurements & geo-tagged site photographs)
5. **Regulatory & Market Analysis** (DLC rates, CPWD plinth schedules, IndAS 16 / DGFT norms)
6. **Statutory Computation & Draft Review** (FMV, FSV, or duty consumption calculation)
7. **Quality Audit & Peer Verification** (Internal peer review)
8. **Final Stamped Report & Pan-India Dispatch** (Digital PDF + hard copy delivery within 24–48 hours).`
  },
  {
    id: 'val-02',
    category: 'valuation',
    question: 'What is Componentization of assets under IndAS 16 (PPE)?',
    answer: `Under IndAS 16 (Property, Plant and Equipment) and Schedule II of the Companies Act 2013, industrial assets must be segregated into significant components having substantially different useful lives. 
    
Our specialized **[Technical Advisory & Asset Componentization Services](/advisory)** conduct detailed technical inspections of manufacturing plants to separate base frames, motors, electronic controls, and high-wear tooling, providing compliant depreciation schedules for statutory audits.`
  },
  {
    id: 'val-03',
    category: 'valuation',
    question: 'Do you provide valuation reports for IBC (Insolvency & Bankruptcy) and NCLT proceedings?',
    answer: `Yes, we provide specialized valuations under our **[Assets Valuation Services](/valuation)** for Resolution Professionals (RPs), Committee of Creditors (CoC), and Liquidators under the Insolvency and Bankruptcy Code (IBC) 2016, determining Fair Value and Liquidation Value adhering strictly to IBBI regulations.`
  },
  {
    id: 'sol-01',
    category: 'solar-safety',
    question: 'What is CEIG Solar Drawing Approval and why is it mandatory in Rajasthan?',
    answer: `Under Central Electricity Authority (CEA) Regulations and the Indian Electricity Rules, any rooftop or ground-mounted solar power plant connecting to the electrical grid requires prior drawing approval and statutory inspection by the **Chief Electrical Inspector to Government (CEIG)**.
    
Check your solar installation readiness with our free **[CEIG Solar Compliance Checker](/solar-checker)**. Our authorized **[Chartered Electrical Safety Engineers (CESE)](/safety-energy-audits)** prepare Single Line Diagrams (SLD), earthing layout drawings, relay coordination studies, and ensure 100% regulatory clearance.`
  },
  {
    id: 'sol-02',
    category: 'solar-safety',
    question: 'What statutory industrial safety audits does your team perform?',
    answer: `Under our **[Industrial Safety & Energy Audits](/safety-energy-audits)** practice, we conduct:
1. **[Chartered Electrical Safety Engineer (CESE) Audits](/safety-energy-audits)** under CEA Regulations 2010.
2. **[BEE Certified Energy Audits](/safety-energy-audits)** under the Energy Conservation Act 2001.
3. **[Factories & Boilers Competency Certification](/safety-energy-audits)** under the Factories Act 1948 (testing of pressure vessels, cranes, lifting tackles).
4. **[NSCI / NSAT Authorized Safety Audits](/safety-energy-audits)** (fire load assessment, HAZOP, and industrial risk mitigation).`
  },
  {
    id: 'fssai-01',
    category: 'fssai',
    question: 'Which Food Business Operators (FBOs) require FSSAI Central vs State License?',
    answer: `* **FSSAI Central License:** Mandatory for large food manufacturers (turnover > ₹20 Crores/year), 100% Export Oriented Units (EOUs), importers, proprietary food manufacturers, and businesses operating across multiple states.
* **FSSAI State License:** Required for medium-scale manufacturers, hotels (3-star & 4-star), restaurants, and distributors (turnover ₹12 Lakhs to ₹20 Crores/year).
* **FSSAI Registration:** Required for small food handlers and petty retailers (turnover up to ₹12 Lakhs/year).
    
Our dedicated **[FSSAI Compliance Services](/fssai)** team handles new applications, annual returns (Form D1/D2), and statutory audit compliance.`
  },
  {
    id: 'fssai-02',
    category: 'fssai',
    question: 'Can you handle FSSAI license suspension revocation and annual return filings?',
    answer: `Yes, our regulatory team at **[MS Chartered Engineers](/fssai)** assists food businesses in preparing statutory responses, corrective action reports (CAPA), hygiene audits, and filing appeals before the Designated Officer (DO) / Central Licensing Authority to revoke suspended FSSAI licenses.`
  },
  {
    id: 'gen-01',
    category: 'chartered-engineer',
    question: 'Can MS Chartered Engineers serve clients located outside Jaipur, Rajasthan?',
    answer: `Yes, absolutely. **[MS Chartered Engineers](/)** has an established **[Pan-India Practice](/credentials)** with 15+ years of operational experience. We regularly serve corporate, banking, industrial, and exporter clients across Delhi-NCR, Mumbai, Ahmedabad, Bengaluru, Chennai, Hyderabad, and Kolkata for **[Chartered Engineer Certification](/chartered-engineer)** and **[Machinery Valuation](/valuation)**.`
  }
];

export default function FAQPage({ onOpenQuote, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState(() => new Set(['ce-01', 'ce-02']));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

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
    <div id="faq" style={{ background: '#f8fafc', color: '#334155', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
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
              "text": item.answer.replace(/\[(.*?)\]\(.*?\)/g, '$1').replace(/\*\*/g, '').replace(/\n/g, ' ')
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
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              color: '#1d4ed8',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1d4ed8'; e.currentTarget.style.background = '#eff6ff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#ffffff'; }}
          >
            <ArrowLeft size={16} />
            <span>&larr; Back to Homepage</span>
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#64748b' }}>
            <span>Home</span>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Frequently Asked Questions</span>
          </div>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '999px',
            color: '#1d4ed8',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px',
            boxShadow: '0 2px 6px rgba(37, 99, 235, 0.08)'
          }}>
            <HelpCircle size={15} />
            <span>Statutory Knowledge &amp; Regulatory Help Desk</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#0f172a', fontWeight: 800, lineHeight: 1.2, marginBottom: '16px' }}>
            Frequently Asked <span style={{ background: 'linear-gradient(135deg, #1e40af 0%, #0284c7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
          </h1>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: '#475569', marginBottom: '28px' }}>
            Authoritative answers on <strong>Chartered Engineer certification</strong>, <strong>DGFT Advance Authorisation</strong>, <strong>Bank Plant &amp; Machinery Valuation</strong>, <strong>CEIG Solar approvals</strong>, and <strong>FSSAI statutory compliance</strong> in Jaipur &amp; Pan-India.
          </p>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            <Search size={20} color="#1d4ed8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. DGFT, customs, valuation, timeline)..."
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                borderRadius: '12px',
                color: '#0f172a',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#1d4ed8'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(29, 78, 216, 0.15)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(15, 23, 42, 0.06)'; }}
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
                  color: '#64748b',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontWeight: 600
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
                  background: isSelected ? '#1e40af' : '#ffffff',
                  border: `1px solid ${isSelected ? '#1e40af' : '#e2e8f0'}`,
                  color: isSelected ? '#ffffff' : '#475569',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '0 2px 8px rgba(30, 64, 175, 0.25)' : '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} color={isSelected ? '#ffffff' : '#1d4ed8'} />
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
          color: '#64748b'
        }}>
          <span>Showing <strong style={{ color: '#0f172a' }}>{filteredFaqs.length}</strong> statutory questions</span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={expandAll}
              style={{ background: 'transparent', border: 'none', color: '#1d4ed8', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem' }}
            >
              Expand All
            </button>
            <span>|</span>
            <button
              onClick={collapseAll}
              style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '0.82rem' }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '12px', border: '1px dashed #cbd5e1', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <HelpCircle size={40} color="#f59e0b" style={{ margin: '0 auto 16px auto' }} />
              <h3 style={{ color: '#0f172a', marginBottom: '8px' }}>No exact matching questions found</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
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
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.25)'
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
                    background: '#ffffff',
                    border: `1px solid ${isOpen ? '#93c5fd' : '#e2e8f0'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 8px 24px rgba(37, 99, 235, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.04)'
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
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      color: isOpen ? '#1e40af' : '#0f172a',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'background 0.2s ease, color 0.2s ease'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isOpen ? '#1e40af' : '#f1f5f9',
                        color: isOpen ? '#ffffff' : '#64748b',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </span>
                      <span style={{ color: isOpen ? '#1e40af' : '#0f172a' }}>{faq.question}</span>
                    </span>

                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: isOpen ? '#eff6ff' : '#f8fafc',
                      color: isOpen ? '#1e40af' : '#64748b',
                      flexShrink: 0
                    }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '16px 22px 22px 62px',
                      fontSize: '0.94rem',
                      lineHeight: 1.75,
                      color: '#334155',
                      borderTop: '1px solid #e2e8f0',
                      background: '#ffffff'
                    }}>
                      {faq.answer.split('\n\n').map((paragraph, pIdx) => (
                        <p key={pIdx} style={{ marginBottom: pIdx === faq.answer.split('\n\n').length - 1 ? 0 : '12px' }}>
                          {paragraph.split('\n').map((line, lIdx) => {
                            if (line.startsWith('* ') || line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
                              return (
                                <span key={lIdx} style={{ display: 'block', paddingLeft: '8px', margin: '6px 0', color: '#334155' }}>
                                  {parseInlineLinks(line)}
                                </span>
                              );
                            }
                            return (
                              <span key={lIdx} style={{ display: 'block', color: '#334155' }}>
                                {parseInlineLinks(line)}
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
          padding: '38px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          border: '1px solid #3b82f6',
          borderRadius: '16px',
          textAlign: 'center',
          boxShadow: '0 14px 36px rgba(15, 23, 42, 0.16)'
        }}>
          <h3 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 800, marginBottom: '10px' }}>
            Still Have a Statutory or Technical Question?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
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
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
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
