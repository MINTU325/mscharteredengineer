import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Smartphone, Globe, Layers, Rocket, Building2 } from 'lucide-react';

export default function TexelGroupSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('engineering'); // 'engineering' or 'tech'

  const engineeringServices = [
    {
      id: 'structural-design',
      title: 'STRUCTURAL DESIGN ENGINEERING',
      serviceName: 'Structural Design Engineering',
      desc: 'Advanced structural analysis, RCC & steel design, seismic resistance modeling, and peer review for industrial, commercial & residential structures.',
      icon: (
        // Interlocking dual gears matching the screenshot
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
        </svg>
      )
    },
    {
      id: 'bim-design',
      title: 'INTEGRATED DESIGN & BIM',
      serviceName: 'Integrated Design & BIM',
      desc: '3D/4D Building Information Modeling (BIM), AutoCAD 2D drafting, MEP spatial coordination, digital twins, and Clash Detection for turnkey execution.',
      icon: (
        // Organic leaf matching the screenshot
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C5.79 12.87 9 9.5 17 8z"/>
        </svg>
      )
    },
    {
      id: 'project-management',
      title: 'CONSTRUCTION AND PROJECT MANAGEMENT',
      serviceName: 'Construction & Project Management',
      desc: 'End-to-end Project Management Consultancy (PMC), techno-commercial audits, contractor supervision, timeline governance, and statutory bill vetting.',
      icon: (
        // Lifebuoy / Helm steering wheel matching the screenshot
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8zm0-13a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"/>
          <path d="M11 4h2v3h-2zm0 13h2v3h-2zM4 11h3v2H4zm13 0h3v2h-3z"/>
        </svg>
      )
    },
    {
      id: 'structural-rehab',
      title: 'STRUCTURAL REHABILITATION & CONDITIONAL ASSESSMENT',
      serviceName: 'Structural Rehabilitation & Condition Assessment',
      desc: 'Non-Destructive Testing (NDT), structural integrity evaluations, distress investigation, seismic retrofitting, and aging infrastructure health assessments.',
      icon: (
        // Lightbulb matching the screenshot
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-1.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      )
    }
  ];

  const techServices = [
    {
      id: 'android-development',
      title: 'MOBILE & ANDROID APP DEVELOPMENT',
      serviceName: 'Custom Android App Development',
      desc: 'Native Android (Kotlin/Java) & Flutter cross-platform applications with offline-first Room database, biometric security, API sync, and Google Play Store deployment.',
      icon: <Smartphone size={24} />
    },
    {
      id: 'web-platforms',
      title: 'FULL-STACK WEB & CLOUD PLATFORMS',
      serviceName: 'Full-Stack Web Application / SaaS',
      desc: 'High-speed, scalable web applications, business portals, and client dashboards engineered with React.js, Next.js, Node.js, and high Google PageSpeed scores.',
      icon: <Globe size={24} />
    },
    {
      id: 'custom-erp',
      title: 'CUSTOM SOFTWARE & ENTERPRISE ERP',
      serviceName: 'Custom Business ERP / CRM Software',
      desc: 'Tailored ERP systems, automated billing software, CRM pipelines, and digital compliance engines replacing paper trails with real-time analytics.',
      icon: <Layers size={24} />
    },
    {
      id: 'digital-products',
      title: 'DIGITAL PRODUCTS & E-COMMERCE SUITES',
      serviceName: 'E-Commerce Platform & Mobile App',
      desc: 'Turnkey e-commerce engines, proprietary asset valuation SaaS, industrial compliance ERPs, and field inspection mobile tools ready for deployment.',
      icon: <Rocket size={24} />
    }
  ];

  const activeServices = activeTab === 'engineering' ? engineeringServices : techServices;

  const handleDepartmentClick = (dept) => {
    if (onOpenQuote) {
      onOpenQuote(dept.serviceName);
    }
  };

  return (
    <section 
      id="ms-group" 
      className="texel-section"
      aria-label="Welcome to MS Group - Our Services & Technology"
    >
      <div className="texel-container">
        
        {/* Top Header & Intro Block */}
        <div className="texel-header">
          <h2 className="texel-main-title">
            Welcome to MS Group
          </h2>

          {/* Green Divider Bar */}
          <div className="texel-divider" aria-hidden="true">
            <span className="texel-divider-line" />
            <span className="texel-divider-bar" />
            <span className="texel-divider-line" />
          </div>

          <p className="texel-description">
            An integrated engineering consultancy &amp; technology solutions group delivering reliable solutions for today’s physical structures, digital ecosystems, and tomorrow's challenges. Built on strong fundamentals and evolving technologies, we support projects from assessment to delivery.
          </p>
        </div>

        {/* Section Title: OUR SERVICES */}
        <div className="texel-departments-header">
          <h3 className="texel-sub-title">
            OUR SERVICES
          </h3>

          {/* Green Divider Bar */}
          <div className="texel-divider" aria-hidden="true">
            <span className="texel-divider-line" />
            <span className="texel-divider-bar" />
            <span className="texel-divider-line" />
          </div>

          {/* Dual Category Tabs */}
          <div style={{
            display: 'inline-flex',
            background: '#FFFFFF',
            border: '1px solid #E8E2D8',
            borderRadius: '9999px',
            padding: '4px',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
            marginTop: '12px'
          }}>
            <button
              onClick={() => setActiveTab('engineering')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'engineering' ? '#10B981' : 'transparent',
                color: activeTab === 'engineering' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Building2 size={15} />
              <span>Core Engineering</span>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '9999px',
                border: 'none',
                background: activeTab === 'tech' ? '#10B981' : 'transparent',
                color: activeTab === 'tech' ? '#FFFFFF' : '#475569',
                fontWeight: 700,
                fontSize: '0.84rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Smartphone size={15} />
              <span>IT, Apps &amp; Software</span>
            </button>
          </div>
        </div>

        {/* Department / Services List Grid */}
        <div className="texel-departments-list">
          {activeServices.map((dept) => (
            <div 
              key={dept.id}
              className="texel-dept-card"
              onClick={() => handleDepartmentClick(dept)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleDepartmentClick(dept);
                }
              }}
              aria-label={`Consultation for ${dept.title}`}
            >
              {/* Left Badge: Green with folded ribbon dog-ear */}
              <div className="texel-badge-wrapper">
                <div className="texel-badge">
                  {dept.icon}
                  {/* Folded dog-ear corner under bottom-left */}
                  <span className="texel-badge-fold" />
                </div>
              </div>

              {/* Service Title & Micro-details */}
              <div className="texel-dept-content">
                <h4 className="texel-dept-title">
                  {dept.title}
                </h4>
                <p className="texel-dept-desc">
                  {dept.desc}
                </p>
              </div>

              {/* Action indicator on hover */}
              <div className="texel-dept-action" aria-hidden="true">
                <span className="texel-action-text">Inquire</span>
                <ArrowRight size={18} className="texel-action-arrow" />
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Link to Full IT & Digital Solutions Page */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <a
            href="/tech-products"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              background: '#FFFFFF',
              border: '1.5px solid #10B981',
              borderRadius: '9999px',
              color: '#047857',
              fontSize: '0.88rem',
              fontWeight: 700,
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.12)',
              transition: 'all 0.22s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#10B981';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.style.color = '#047857';
            }}
          >
            <span>Explore Our Full IT, Android Apps &amp; Products Division</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
