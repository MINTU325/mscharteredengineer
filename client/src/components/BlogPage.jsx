import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, ArrowRight, Calendar, Clock, UserCheck, 
  Share2, CheckCircle2, ChevronRight, FileText, Shield, 
  Zap, Wrench, Sun, Award, ArrowLeft, Copy, Check, MessageSquare, Phone
} from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'dgft-advance-authorisation-guide',
    slug: 'dgft-advance-authorisation-guide',
    title: 'DGFT Advance Authorisation & EPCG: Complete Chartered Engineer Certification Guide (2026)',
    excerpt: 'Step-by-step statutory process for exporters to obtain duty-free raw material import licenses, Appendix 4K certification, and EPCG nexus verification under Foreign Trade Policy (FTP) 2023.',
    category: 'DGFT & Foreign Trade',
    icon: Shield,
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Mukesh Singh, CEng (India) MIE',
    authorRole: 'IIT Roorkee Alumni | Chartered Engineer',
    tags: ['DGFT', 'Advance Authorisation', 'Appendix 4K', 'EPCG Scheme', 'Customs Duty Exemption'],
    keyTakeaways: [
      'Appendix 4K certification is mandatory for raw material inputs not covered under Standard Input-Output Norms (SION).',
      'Chartered Engineers verify the manufacturing process, wastage norms, and bill of materials (BOM).',
      'Timely certification prevents costly customs delays and export obligation non-compliance penalties.'
    ],
    content: `
### 1. Introduction: The Role of a Chartered Engineer in DGFT
Under the **Foreign Trade Policy (FTP) 2023** formulated by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry, Indian exporters are eligible to import duty-free raw materials and capital machinery to boost export competitiveness. 

However, to prevent misuse of customs duty exemptions, the DGFT mandates technical validation by an **empaneled Corporate Member of the Institution of Engineers (India) — Chartered Engineer (CEng)**.

---

### 2. When is a Chartered Engineer Certificate Mandatory?
1. **Ad-hoc Norms Fixation (Appendix 4K):** When standard input-output norms (SION) do not exist for your export product, a Chartered Engineer must certify the actual consumption ratio and process waste.
2. **EPCG Scheme Nexus Certificate:** Verifying that imported capital goods (machinery, testing equipment) are directly required for manufacturing the export product.
3. **Second-Hand Machinery Import:** Certifying the residual useful life, fair market valuation, and refurbished status of imported used capital equipment for Customs valuation.
4. **Duty Drawback & Clubbing of Authorisations:** Certifying accountability of raw materials across multiple export orders.

---

### 3. Step-by-Step Verification Procedure
* **Step 1 — Technical Process Review:** The Chartered Engineer inspects the manufacturing flow-chart, technical drawings, and batch yield reports.
* **Step 2 — Bill of Materials (BOM) & Wastage Calculation:** Scientific determination of stoichiometric consumption, invisible losses, recoverable scraps, and non-recoverable wastes.
* **Step 3 — Factory Inspection:** On-site verification of machine production capacity and input-to-output conversion ratios.
* **Step 4 — Issuance of Stamped Certificate:** Formal issuance of the statutory Certificate with official IEI corporate membership credentials and registration seal.

---

### 4. Mandatory Documents Checklist for Exporters
* Copy of IEC (Import Export Code) & GST Registration.
* Technical specifications / datasheets of raw materials and finished export goods.
* Production flow diagram detailing all manufacturing steps.
* Purchase invoices of raw materials and export shipping bills/invoices.
* Proposed consumption norm sheet with justification for scrap percentage.

> **Need Rapid Assistance?** MS Chartered Engineers provides certified DGFT Appendix 4K and EPCG certificates with 24–48 hour turnaround across Jaipur and Pan-India.
    `
  },
  {
    id: 'plant-machinery-valuation-bank-loans',
    slug: 'plant-machinery-valuation-bank-loans',
    title: 'Plant & Machinery Valuation for Bank Finance & IndAS 16: Complete Methodology Guide',
    excerpt: 'Detailed analysis of valuation methodologies (Cost, Market, and Income Approaches) used for Consortium Bank Loans, Stamp Duty, Impairment testing, and Asset Componentization.',
    category: 'Asset Valuation',
    icon: Award,
    date: 'September 2026',
    readTime: '8 min read',
    author: 'Mukesh Singh, CEng (India) MIE',
    authorRole: 'Registered Valuer | IIT Roorkee',
    tags: ['Machinery Valuation', 'Bank Loans', 'IndAS 16', 'Fair Market Value', 'Depreciated Replacement Cost'],
    keyTakeaways: [
      'Depreciated Replacement Cost (DRC) is the globally accepted standard for industrial machinery collateral.',
      'IndAS 16 requires componentization of major plant assets with distinct useful life cycles.',
      'Valuation reports must comply with IBBI and Companies Act 2013 statutory frameworks.'
    ],
    content: `
### 1. The Critical Importance of Machinery Valuation
Plant and Machinery assets constitute the single largest capital investment for manufacturing, mining, chemical, and engineering industries. For commercial banks, NBFCs, and financial institutions, accurately evaluating these assets as secondary collateral is critical to mitigate non-performing asset (NPA) risks.

---

### 2. Core Valuation Methodologies
1. **The Cost Approach (Depreciated Replacement Cost - DRC):**
   * Computes the Gross Current Replacement Cost (GCRC) of acquiring a new equivalent machine.
   * Deducts physical deterioration (wear and tear), functional obsolescence (technological changes), and economic obsolescence (market factors).
2. **The Market Approach (Comparable Sales Method):**
   * Benchmarks asset value against recent verified secondary market transactions of identical make and model.
3. **The Income Approach (Discounted Cash Flow - DCF):**
   * Used for specialized revenue-generating industrial plants (e.g., captive power plants, cement plants) based on projected net cash flows.

---

### 3. IndAS 16 Componentization & Impairment Review
Under Indian Accounting Standard 16 (**IndAS 16**), companies must split complex industrial machinery into distinct components if their cost is significant in relation to the total asset cost and their useful lives differ.
* **Component Splitting:** Separating boiler drums, turbine rotors, and electrical panels from the main structure.
* **Impairment Study (IndAS 36):** Determining if the recoverable amount of cash-generating units (CGUs) has fallen below their balance sheet carrying value.

---

### 4. What Bankers Look for in a Chartered Engineer Valuation Report
* Physical verification proof with serial number plates and timestamped photos.
* Technological obsolescence assessment and availability of OEM spare parts.
* Balance Economic Useful Life calculation.
* Distressed Sale Value (Liquidation Value) alongside Fair Market Value (FMV).
    `
  },
  {
    id: 'chartered-electrical-safety-engineer-cese-audits',
    slug: 'chartered-electrical-safety-engineer-cese-audits',
    title: 'Chartered Electrical Safety Engineer (CESE) & BEE Energy Audits under CEA Regulations',
    excerpt: 'Mandatory statutory electrical inspections, CEA Regulations compliance, infrared thermography, and BEE energy conservation protocols for industrial and commercial power consumers.',
    category: 'Electrical & Energy Audits',
    icon: Zap,
    date: 'September 2026',
    readTime: '7 min read',
    author: 'Mukesh Singh, CEng (India) MIE',
    authorRole: 'CESE & BEE Certified Energy Manager',
    tags: ['CESE', 'Electrical Safety', 'BEE Energy Audit', 'CEA Regulations', 'Thermography'],
    keyTakeaways: [
      'CEA Regulations 2023 make periodic electrical inspections mandatory for installations above 250V.',
      'Certified Electrical Safety Engineers (CESE) help industries detect fire hazards and avoid statutory penalties.',
      'BEE Energy Audits identify 15% to 30% reduction in specific energy consumption (SEC).'
    ],
    content: `
### 1. Regulatory Mandate: Central Electricity Authority (CEA) Regulations
According to Regulation 30 & 43 of the **Central Electricity Authority (Measures Relating to Safety and Electric Supply) Regulations**, all electrical installations (HT substations, transformers, switchgears, DG sets, and industrial switchboards) must undergo periodic safety inspections.

State Electrical Inspectorates (CEIG) empower authorized **Chartered Electrical Safety Engineers (CESE)** to inspect installations up to specified voltage levels and issue compliance clearance certificates.

---

### 2. High-Risk Electrical Hazards Detected in Audits
* **Thermal Hotspots:** Loose busbar connections and overloaded breaker contacts detected via Infrared Thermography imaging before insulation breakdown causes electrical fires.
* **Earthing Grid Inadequacy:** Measuring earth electrode resistance to ensure fault currents trip protective circuit breakers within 100 milliseconds.
* **Harmonic Distortion:** Mitigating power factor penalties and transformer heating caused by non-linear VFD and inverter loads.
* **Transformer Oil Dielectric Strength:** Testing breakdown voltage (BDV) and moisture content in power transformers.

---

### 3. BEE Industrial Energy Audits
Conducted by accredited **Bureau of Energy Efficiency (BEE)** Energy Managers:
* **Electrical Load Profiling:** Maximum Demand (MD) optimization and power factor penalty elimination.
* **Thermal System Efficiency:** Boiler blowdown heat recovery, steam trap surveys, and flue gas oxygen analysis.
* **Motor & Pump Optimization:** Upgrading to IE3/IE4 super-premium efficiency electric motors.
* **Compressed Air Leak Auditing:** Ultrasonic detection of air leaks that consume up to 25% of compressor power.
    `
  },
  {
    id: 'factories-act-1948-boilers-competent-person-certification',
    slug: 'factories-act-1948-boilers-competent-person-certification',
    title: 'Factories Act 1948: Mandatory Competent Person Certification for Boilers & Lifting Tackles',
    excerpt: 'Statutory compliance requirements under Section 28, 29, and 31 of the Factories Act 1948 for industrial cranes, hoists, pressure vessels, and steam boilers.',
    category: 'Industrial Safety & Boilers',
    icon: Wrench,
    date: 'September 2026',
    readTime: '6 min read',
    author: 'Mukesh Singh, CEng (India) MIE',
    authorRole: 'Competent Person — Factories & Boilers',
    tags: ['Factories Act 1948', 'Competent Person', 'Boiler Inspection', 'EOT Cranes', 'Pressure Vessels'],
    keyTakeaways: [
      'Annual examination of hoists, lifts, and EOT cranes is legally mandatory under Section 28 & 29.',
      'Pressure vessels and plant equipment must undergo hydrostatic pressure testing under Section 31.',
      'Approved Competent Persons issue statutory Form 8, 9, 10, and 11 certificates required during Factory Inspector audits.'
    ],
    content: `
### 1. Statutory Framework: The Factories Act, 1948
To safeguard human life in factories and industrial manufacturing plants, the **Factories Act, 1948** and respective State Factory Rules mandate periodic technical examination of high-hazard mechanical machinery by an authorized **Competent Person**.

Operating plant machinery without valid statutory fitness certificates can lead to immediate factory closure notices and severe legal liability for factory managers.

---

### 2. Key Sections & Mandatory Inspections
1. **Section 28 — Hoists and Lifts:**
   * Thorough examination of all mechanical cages, guide rails, safety clutches, and wire ropes every 6 months.
2. **Section 29 — Lifting Machinery, Cranes, Chains & Tackles:**
   * Annual proof load testing of overhead EOT cranes, mobile cranes, slings, shackles, and chain pulley blocks.
   * Non-destructive testing (NDT) of crane hooks and welds to detect fatigue micro-cracks.
3. **Section 31 — Pressure Plant & Pressure Vessels:**
   * Hydrostatic and hydraulic testing of air receivers, reaction vessels, heat exchangers, and steam pipelines to 1.5x operating pressure every 12 to 24 months.

---

### 3. Prescribed Statutory Certificate Forms
* **Form 8:** Certificate of examination of hoists and lifts.
* **Form 9:** Report of examination of lifting machinery and gear.
* **Form 10:** Report of examination and test of pressure plant and vessels.
* **Form 11:** Gantry girder alignment and crane rail deflection test reports.
    `
  },
  {
    id: 'solar-ceig-drawing-approval-guide',
    slug: 'solar-ceig-drawing-approval-guide',
    title: 'Solar CEIG Compliance & Drawing Approval: Essential Checklist for MW & Rooftop Projects',
    excerpt: 'Detailed statutory pathway to secure Chief Electrical Inspector to Government (CEIG) electrical stability approvals and grid synchronization clearances for solar power plants.',
    category: 'Solar & Renewable Energy',
    icon: Sun,
    date: 'September 2026',
    readTime: '5 min read',
    author: 'Mukesh Singh, CEng (India) MIE',
    authorRole: '450+ MW Cleared | IIT Roorkee',
    tags: ['CEIG Approval', 'Solar Power Plant', 'Single Line Diagram', 'Grid Synchronization', 'Electrical Safety'],
    keyTakeaways: [
      'CEIG statutory clearance is mandatory before charging any commercial or industrial solar installation in India.',
      'Single Line Diagrams (SLD), earthing pit matrix, and relay coordination must be stamped by a Chartered Engineer.',
      'Over 450+ MW of solar projects cleared with 100% first-time approval compliance.'
    ],
    content: `
### 1. What is CEIG Approval in Solar Power Projects?
The **Chief Electrical Inspector to Government (CEIG)** approval is the statutory certificate granted by the state government's electrical inspection authority verifying that a solar power plant conforms strictly to the **Central Electricity Authority (Safety & Electric Supply) Regulations** and **Indian Electricity Rules**.

Without CEIG clearance:
* State DISCOMs will refuse net-metering or gross-metering synchronization.
* Insurance policies will not honor claims in the event of electrical fire or equipment burnout.

---

### 2. Mandatory Technical Drawings Requiring Chartered Engineer Validation
* **Single Line Diagram (SLD):** Showing PV array strings, string inverters / central inverters, ACDB, HT switchgear, transformer protection, and grid export meters.
* **Earthing System Layout:** Calculation of earth fault loop impedance, chemical earth electrode grid, and dedicated lightning arrestor (LA) protection radius.
* **Protection Relay Coordination:** Numerical relay curves for overcurrent, earth fault, reverse power, and anti-islanding protection.
* **Structural Stability Certification:** Ensuring rooftop shed load-bearing capacity and ground-mount pile pullout safety under gale wind conditions.

---

### 3. Typical Approval Timeline & Pitfalls to Avoid
Securing CEIG clearance typically takes 10 to 20 days. Common rejection reasons include inadequate distance between inverter transformer yards, missing dual-earth rings, and improperly calculated fault level capacities.
    `
  }
];

export default function BlogPage({ onOpenQuote, onNavigateHome }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedSlug, setCopiedSlug] = useState(null);

  const categories = ['All', 'DGFT & Foreign Trade', 'Asset Valuation', 'Electrical & Energy Audits', 'Industrial Safety & Boilers', 'Solar & Renewable Energy'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(tag => tag.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleShare = (post, e) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blog#${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedSlug(post.slug);
      setTimeout(() => setCopiedSlug(null), 2500);
    }
  };

  return (
    <div className="blog-page-container" style={{ minHeight: '85vh', background: 'var(--bg-dark)', paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '28px' }}>
          <a href="/" onClick={(e) => { e.preventDefault(); if (onNavigateHome) onNavigateHome(); else window.location.href = '/'; }} style={{ color: '#38bdf8', textDecoration: 'none' }}>
            Home
          </a>
          <ChevronRight size={14} />
          <span style={{ color: '#ffffff', fontWeight: 600 }}>Technical Knowledge Hub &amp; Blog</span>
        </div>

        {/* Hero Banner Header */}
        <div className="glass-card" style={{ padding: '40px 32px', marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '240px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div className="section-badge gold" style={{ marginBottom: '14px' }}>
            <BookOpen size={14} />
            <span>Official Engineering &amp; Regulatory Insights</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: '#ffffff', fontWeight: 800, marginBottom: '14px', lineHeight: 1.25 }}>
            Chartered Engineering, Valuation &amp; <span className="gold-gradient-text">Statutory Compliance</span> Articles
          </h1>

          <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '780px', lineHeight: 1.6, marginBottom: '24px' }}>
            Practical statutory guides, technical inspection checklists, DGFT procedures, and asset valuation methodologies compiled by verified corporate members of the <strong>Institution of Engineers (India)</strong> and IIT Roorkee alumni.
          </p>

          {/* Quick Search & Filters Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', maxWidth: '600px' }}>
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="form-control"
                style={{ paddingLeft: '46px', height: '48px', fontSize: '0.92rem' }}
                placeholder="Search articles by keyword (e.g. DGFT, IndAS 16, CESE, Boilers, Solar)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.1)',
                    background: selectedCategory === cat ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    color: selectedCategory === cat ? '#fbbf24' : '#cbd5e1',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
            Showing <strong>{filteredPosts.length}</strong> authoritative engineering guides
          </span>
          {copiedSlug && (
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'rgba(16, 185, 129, 0.2)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              borderRadius: 'var(--radius-sm)',
              color: '#34d399',
              fontSize: '0.78rem'
            }}>
              <Check size={14} />
              <span>Backlink URL copied to clipboard!</span>
            </span>
          )}
        </div>

        {/* Blog Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {filteredPosts.map((post) => {
            const PostIcon = post.icon;
            return (
              <article
                key={post.id}
                className="glass-card"
                onClick={() => setActiveArticle(post)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '28px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  borderTop: '3px solid #38bdf8'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                {/* Meta Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 10px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#38bdf8',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    <PostIcon size={13} />
                    <span>{post.category}</span>
                  </span>

                  <button
                    onClick={(e) => handleShare(post, e)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title="Copy Citation Backlink"
                  >
                    <Share2 size={16} />
                  </button>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.35, marginBottom: '12px' }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '18px', flexGrow: 1 }}>
                  {post.excerpt}
                </p>

                {/* Key Takeaway Bullet Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 14px',
                  marginBottom: '18px',
                  fontSize: '0.8rem',
                  color: '#94a3b8'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#e2e8f0' }}>{post.keyTakeaways[0]}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '0.78rem',
                  color: '#94a3b8'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>

                  <span style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Read Guide <ArrowRight size={13} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Lead Magnet Box: Instant Consultation & Citation Box */}
        <div className="glass-card gold-accent" style={{ padding: '36px', textAlign: 'center', position: 'relative' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '10px' }}>
            Need Official Chartered Engineer Certification or Stamped Valuation Report?
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.92rem', maxWidth: '680px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
            Consult directly with <strong>Mukesh Singh (B.Tech Mechanical Engineering, IIT Roorkee)</strong>. Fast 24–48 hour dispatch for DGFT Advance Authorisation, Bank Valuations, CESE Audits, and Factories Act Certifications.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Chartered Engineer Certification')}
              className="btn btn-gold"
              style={{ padding: '12px 28px', fontSize: '0.92rem' }}
            >
              <span>Request Priority Quotation</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919158658885"
              className="btn btn-outline"
              style={{ padding: '12px 24px', fontSize: '0.92rem' }}
            >
              <Phone size={16} color="#10b981" />
              <span>Call +91 91586 58885</span>
            </a>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────
          ARTICLE FULL READER MODAL
          ────────────────────────────────────────────────────────── */}
      {activeArticle && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveArticle(null)}
          style={{ padding: '20px', zIndex: 2000 }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              maxWidth: '820px', 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              padding: '36px',
              textAlign: 'left'
            }}
          >
            {/* Modal Navigation Top */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <button
                onClick={() => setActiveArticle(null)}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ArrowLeft size={14} />
                <span>Back to Articles</span>
              </button>

              <button
                onClick={(e) => handleShare(activeArticle, e)}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                title="Copy Article Citation Link"
              >
                <Share2 size={14} />
                <span>Share / Copy Citation</span>
              </button>
            </div>

            {/* Category & Title */}
            <div style={{ marginBottom: '14px' }}>
              <span style={{
                fontSize: '0.78rem',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                {activeArticle.category}
              </span>
              <h1 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#ffffff', fontWeight: 800, marginTop: '6px', lineHeight: 1.3 }}>
                {activeArticle.title}
              </h1>
            </div>

            {/* Author Byline */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '24px',
              fontSize: '0.82rem',
              color: '#94a3b8'
            }}>
              <UserCheck size={18} color="#38bdf8" />
              <div>
                <span style={{ color: '#ffffff', fontWeight: 600 }}>By {activeArticle.author}</span>
                <span style={{ margin: '0 8px' }}>&bull;</span>
                <span>{activeArticle.authorRole}</span>
                <span style={{ margin: '0 8px' }}>&bull;</span>
                <span>{activeArticle.date}</span>
              </div>
            </div>

            {/* Article Content Rendered */}
            <div 
              style={{
                color: '#cbd5e1',
                fontSize: '0.94rem',
                lineHeight: 1.7,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '28px',
                marginBottom: '28px',
                whiteSpace: 'pre-line'
              }}
            >
              {activeArticle.content}
            </div>

            {/* Article Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {activeArticle.tags.map((t) => (
                <span key={t} style={{
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.76rem',
                  color: '#93c5fd'
                }}>
                  #{t}
                </span>
              ))}
            </div>

            {/* Reader Modal Bottom CTA */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 64, 175, 0.25) 0%, rgba(245, 158, 11, 0.15) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  Have questions about this regulatory requirement?
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '2px' }}>
                  Our Chartered Engineers provide authoritative, compliant reports recognized across India.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenQuote(activeArticle.category);
                  }}
                  className="btn btn-gold"
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  Request Consultation
                </button>
                <a
                  href={`https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20read%20your%20article%20on%20${encodeURIComponent(activeArticle.title)}%20and%20need%20assistance.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  <MessageSquare size={14} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
