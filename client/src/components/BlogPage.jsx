import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, Search, ArrowRight, Calendar, Clock, UserCheck, 
  Share2, CheckCircle2, ChevronRight, FileText, Shield, 
  Zap, Wrench, Sun, Award, ArrowLeft, Copy, Check, MessageSquare, Phone
} from 'lucide-react';

export const BLOG_POSTS = [
  {
    id: 'dgft-advance-authorisation-guide',
    slug: 'dgft-advance-authorisation-guide',
    title: 'DGFT Advance Authorisation & EPCG: Complete Chartered Engineer Certification Guide (2026)',
    excerpt: 'Step-by-step statutory process for exporters to obtain duty-free raw material import licenses, Appendix 4K certification, and EPCG nexus verification under Foreign Trade Policy (FTP) 2023.',
    category: 'DGFT & Foreign Trade',
    image: '/blog/dgft-engineer.webp',
    imageAlt: 'Indian Chartered Engineer verifying export manufacturing compliance in factory',
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
    image: '/blog/valuation-machinery.webp',
    imageAlt: 'Senior Indian Valuation Engineer inspecting industrial CNC machinery and production lines',
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
    image: '/blog/electrical-cese.webp',
    imageAlt: 'Indian Electrical Safety Engineer conducting thermal imaging audit on HT substation panel',
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
    image: '/blog/boilers-inspection.webp',
    imageAlt: 'Competent Person Safety Engineer inspecting industrial steam boiler and EOT crane',
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
    image: '/blog/solar-ceig.webp',
    imageAlt: 'Indian Solar Engineer reviewing single line diagram drawings at utility-scale solar farm',
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

export default function BlogPage({ initialSlug, onOpenQuote, onNavigateHome }) {
  const [selectedSlug, setSelectedSlug] = useState(initialSlug || null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copied, setCopied] = useState(false);

  // Sync state if initialSlug prop changes
  useEffect(() => {
    if (initialSlug) {
      setSelectedSlug(initialSlug);
    }
  }, [initialSlug]);

  const categories = ['All', 'DGFT & Foreign Trade', 'Asset Valuation', 'Electrical & Energy Audits', 'Industrial Safety & Boilers', 'Solar & Renewable Energy'];

  const activeArticle = useMemo(() => {
    if (!selectedSlug) return null;
    return BLOG_POSTS.find(p => p.slug === selectedSlug || p.id === selectedSlug) || null;
  }, [selectedSlug]);

  // Update page title when viewing an article
  useEffect(() => {
    if (activeArticle) {
      document.title = `${activeArticle.title} | MS Chartered Engineers`;
    } else {
      document.title = 'Technical Insights, Regulatory Guides & Blog | MS Chartered Engineers';
    }
  }, [activeArticle]);

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

  const handleOpenArticle = (post) => {
    setSelectedSlug(post.slug);
    window.history.pushState({}, '', `/blog/${post.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHub = () => {
    setSelectedSlug(null);
    window.history.pushState({}, '', '/blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="blog-page-container" style={{ minHeight: '85vh', background: 'var(--bg-dark)', paddingTop: '32px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* ──────────────────────────────────────────────────────────
            BREADCRUMB BAR (Home > Technical Knowledge Hub > [Blog Title])
            ────────────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          <a 
            href="/" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (onNavigateHome) onNavigateHome(); 
              else {
                window.history.pushState({}, '', '/');
                window.location.href = '/';
              }
            }} 
            className="blog-breadcrumb-link"
          >
            Home
          </a>
          
          <ChevronRight size={13} color="#64748b" style={{ flexShrink: 0 }} />
          
          {activeArticle ? (
            <>
              <button 
                onClick={handleBackToHub} 
                className="blog-breadcrumb-btn"
              >
                Technical Knowledge Hub
              </button>
              <ChevronRight size={13} color="#64748b" style={{ flexShrink: 0 }} />
              <span className="blog-breadcrumb-current" title={activeArticle.title}>
                {activeArticle.title}
              </span>
            </>
          ) : (
            <span className="blog-breadcrumb-current">
              Technical Knowledge Hub &amp; Blog
            </span>
          )}
        </nav>

        {/* ──────────────────────────────────────────────────────────
            VIEW 1: FULL-PAGE ARTICLE VIEW (When an article is open)
            ────────────────────────────────────────────────────────── */}
        {activeArticle ? (
          <div className="article-full-page">
            {/* Top Back & Share Actions */}
            <div className="article-top-bar">
              <button
                onClick={handleBackToHub}
                className="btn btn-outline article-top-btn"
              >
                <ArrowLeft size={16} />
                <span>&larr; Back to All Guides</span>
              </button>

              <button
                onClick={handleShare}
                className="btn btn-outline article-top-btn"
                style={{ color: copied ? '#10b981' : '#38bdf8' }}
              >
                {copied ? <Check size={16} color="#10b981" /> : <Share2 size={16} />}
                <span>{copied ? 'Citation Link Copied!' : 'Share / Copy Citation'}</span>
              </button>
            </div>

            {/* Article Main Card */}
            <article className="glass-card article-main-card">
              
              {/* Humanized Hero Cover Image */}
              <div className="article-cover-wrapper">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.imageAlt || activeArticle.title}
                  className="article-cover-img"
                  loading="eager"
                />
                <div className="article-cover-overlay">
                  <span className="article-category-badge">
                    {activeArticle.category}
                  </span>

                  <h1 className="article-main-title">
                    {activeArticle.title}
                  </h1>

                  {/* Author Byline Strip */}
                  <div className="article-byline-strip">
                    <span className="article-byline-item">
                      <UserCheck size={14} color="#38bdf8" />
                      <span>{activeArticle.author}</span>
                    </span>
                    <span className="article-byline-bullet">&bull;</span>
                    <span className="article-byline-item byline-gold">
                      {activeArticle.authorRole}
                    </span>
                    <span className="article-byline-bullet">&bull;</span>
                    <span className="article-byline-item">
                      <Calendar size={13} />
                      <span>{activeArticle.date}</span>
                    </span>
                    <span className="article-byline-bullet">&bull;</span>
                    <span className="article-byline-item">
                      <Clock size={13} />
                      <span>{activeArticle.readTime}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Article Body Content */}
              <div className="article-body-container">
                {/* Key Takeaways Box */}
                <div className="article-takeaways-box">
                  <div className="article-takeaways-heading">
                    Executive Takeaways &amp; Regulatory Essentials
                  </div>
                  <ul className="article-takeaways-list">
                    {activeArticle.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="article-takeaways-item">
                        <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Markdown text body */}
                <div className="article-markdown-body">
                  {activeArticle.content}
                </div>

                {/* Tags */}
                <div className="article-tags-wrap">
                  {activeArticle.tags.map((t) => (
                    <span key={t} className="article-tag-pill">
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Action CTA Banner */}
                <div className="article-cta-box">
                  <div className="article-cta-content">
                    <h3 className="article-cta-title">
                      Require Statutory Certification or Valuation for this Requirement?
                    </h3>
                    <p className="article-cta-desc">
                      Directly certified by <strong>Mukesh Singh, IIT Roorkee alumni</strong>. Valid for DGFT, Customs, Commercial Banks, NCLT, and State Electrical Inspectorates across India.
                    </p>
                  </div>

                  <div className="article-cta-actions">
                    <button
                      onClick={() => onOpenQuote(activeArticle.category)}
                      className="btn btn-gold article-cta-btn"
                    >
                      Request Quotation
                    </button>
                    <a
                      href={`https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20am%20inquiring%20about%20${encodeURIComponent(activeArticle.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-whatsapp article-cta-btn article-cta-whatsapp"
                    >
                      <MessageSquare size={16} style={{ flexShrink: 0 }} />
                      <span>WhatsApp Principal Engineer</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Articles Section */}
            <div className="article-related-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700 }}>
                  Explore Other Technical Guides
                </h3>
                <button
                  onClick={handleBackToHub}
                  style={{ background: 'none', border: 'none', color: '#38bdf8', fontSize: '0.86rem', fontWeight: 600, cursor: 'pointer' }}
                >
                  View All Guides &rarr;
                </button>
              </div>

              <div className="article-related-grid">
                {BLOG_POSTS.filter(p => p.id !== activeArticle.id).slice(0, 3).map((post) => (
                  <div
                    key={post.id}
                    className="glass-card"
                    onClick={() => handleOpenArticle(post)}
                    style={{ padding: '0', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div style={{ width: '100%', height: '140px', overflow: 'hidden' }}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        loading="lazy"
                      />
                    </div>
                    <div style={{ padding: '16px' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <h4 style={{ fontSize: '0.98rem', color: '#ffffff', marginTop: '4px', lineHeight: 1.35, minHeight: '42px' }}>
                        {post.title}
                      </h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontSize: '0.76rem', color: '#94a3b8' }}>
                        <span>{post.readTime}</span>
                        <span style={{ color: '#38bdf8', fontWeight: 600 }}>Read Article &rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ──────────────────────────────────────────────────────────
              VIEW 2: TECHNICAL KNOWLEDGE HUB (Grid View of all 5 blogs)
              ────────────────────────────────────────────────────────── */
          <div className="blog-hub-grid-view">
            {/* Hero Banner Header */}
            <div className="glass-card blog-hub-hero">
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

              <h1 className="blog-hub-title">
                Chartered Engineering, Valuation &amp; <span className="gold-gradient-text">Statutory Compliance</span> Articles
              </h1>

              <p className="blog-hub-desc">
                Practical statutory guides, technical inspection checklists, DGFT procedures, and asset valuation methodologies compiled by verified corporate members of the <strong>Institution of Engineers (India)</strong> and IIT Roorkee alumni.
              </p>

              {/* Quick Search & Filters Bar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ position: 'relative', maxWidth: '600px', width: '100%' }}>
                  <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    className="form-control"
                    style={{ paddingLeft: '46px', height: '46px', fontSize: '0.92rem', width: '100%', boxSizing: 'border-box' }}
                    placeholder="Search articles (DGFT, IndAS 16, CESE, Boilers, Solar)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Category Filter Chips */}
                <div className="blog-filter-chips">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`blog-filter-chip ${selectedCategory === cat ? 'active' : ''}`}
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
            </div>

            {/* Blog Posts Grid with Humanized Images */}
            <div className="blog-posts-grid">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="glass-card"
                  onClick={() => handleOpenArticle(post)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  {/* Humanized Card Image */}
                  <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#0a101f' }}>
                    <img 
                      src={post.image} 
                      alt={post.imageAlt || post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(4, 9, 20, 0.85)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '4px 10px',
                      color: '#38bdf8',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      textTransform: 'uppercase'
                    }}>
                      {post.category}
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '3px 8px',
                      color: '#ffffff',
                      fontSize: '0.72rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>By {post.author.split(',')[0]}</span>
                      <span>&bull;</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, lineHeight: 1.35, marginBottom: '10px' }}>
                      {post.title}
                    </h2>

                    <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.55, marginBottom: '18px', flexGrow: 1 }}>
                      {post.excerpt}
                    </p>

                    {/* Key Takeaway Bullet Preview */}
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '10px 12px',
                      marginBottom: '16px',
                      fontSize: '0.8rem',
                      color: '#cbd5e1',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px'
                    }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{post.keyTakeaways[0]}</span>
                    </div>

                    {/* Footer CTA */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '12px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                        Full Statutory Guide
                      </span>
                      <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.84rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Read Guide <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Lead Consultation Strip */}
            <div className="glass-card gold-accent blog-bottom-strip">
              <h3 className="blog-bottom-title">
                Need Certified Chartered Engineer or Plant &amp; Machinery Valuation?
              </h3>
              <p className="blog-bottom-desc">
                Led by <strong>Mukesh Singh (B.Tech Mechanical Engineering, IIT Roorkee)</strong>. Providing approved reports for Banks, DGFT, Customs, State CEIG, and Industries across India.
              </p>

              <div className="blog-bottom-actions">
                <button
                  onClick={() => onOpenQuote('Chartered Engineer Certification')}
                  className="btn btn-gold blog-bottom-btn"
                >
                  <span>Request Priority Quote</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="tel:+919158658885"
                  className="btn btn-outline blog-bottom-btn"
                >
                  <Phone size={16} color="#10b981" />
                  <span>Direct Call +91 91586 58885</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
