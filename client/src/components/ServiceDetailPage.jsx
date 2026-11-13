import React, { useState, useEffect } from 'react';
import {
  Zap,
  Boxes,
  Wrench,
  Warehouse,
  HeartPulse,
  Users,
  AlertTriangle,
  Server,
  ShieldAlert,
  Flame,
  Unlink,
  Cpu,
  Wind,
  ShieldCheck,
  Droplet,
  CloudRain,
  Gauge,
  Bell,
  Eye,
  Lightbulb,
  DoorOpen,
  Link,
  Scale,
  Layers,
  Cog,
  Volume2,
  Lock,
  CheckCircle,
  Calendar,
  Building,
  Building2,
  Landmark,
  TrendingUp,
  HardHat,
  FileText,
  FileCheck2,
  FileSpreadsheet,
  Compass,
  Sun,
  Award,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  MessageSquare,
  Share2,
  Camera,
  Laptop,
  GraduationCap,
  Factory,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { getServiceDetails, SERVICES_DETAILS_DATA } from '../data/servicesDetailsData';

const ICON_MAP = {
  Zap,
  Boxes,
  Wrench,
  Warehouse,
  HeartPulse,
  Users,
  AlertTriangle,
  Server,
  ShieldAlert,
  Flame,
  Unlink,
  Cpu,
  Wind,
  ShieldCheck,
  Droplet,
  CloudRain,
  Gauge,
  Bell,
  Eye,
  Lightbulb,
  DoorOpen,
  Link,
  Scale,
  Layers,
  Cog,
  Volume2,
  Lock,
  CheckCircle,
  Calendar,
  Building,
  Building2,
  Landmark,
  TrendingUp,
  HardHat,
  FileText,
  FileCheck2,
  FileSpreadsheet,
  Compass,
  Sun,
  Award,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  MessageSquare,
  Share2,
  Camera,
  Laptop,
  GraduationCap,
  Factory,
  ChevronUp,
  ChevronDown
};

export default function ServiceDetailPage({
  slug,
  onOpenQuote,
  onNavigateHome,
  onNavigateService
}) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({});

  const service = getServiceDetails(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (service) {
      document.title = `${service.fullTitle || service.heroTitle} | KS Chartered Engineers`;
    }
  }, [slug, service]);

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const navigateTo = (path, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.history.pushState({}, '', path);
    if (onNavigateService) {
      onNavigateService(path);
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const renderIcon = (name, size = 24, color = '#f5b81b') => {
    if (!name) return <CheckCircle size={size} color={color} />;
    const Component = ICON_MAP[name] || Award;
    return <Component size={size} color={color} />;
  };

  if (!service) {
    return (
      <div style={{ minHeight: '70vh', background: '#07080d', color: '#f1f5f9', padding: '100px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#ef4444' }}>
            <FileText size={32} />
          </div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '12px' }}>Service Not Found</h1>
          <p style={{ color: '#94a3b8', marginBottom: '28px', lineHeight: 1.6 }}>
            The requested service documentation could not be found or may have been updated.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={(e) => navigateTo('/services', e)}
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px' }}
            >
              <ArrowLeft size={16} /> View All Services
            </button>
            <button
              onClick={onNavigateHome}
              className="btn btn-secondary"
              style={{ padding: '10px 20px', borderRadius: '8px' }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get related services
  const relatedServices = (service.relatedSlugs || [])
    .map(s => SERVICES_DETAILS_DATA[s])
    .filter(Boolean);

  const fallbackRelated = Object.values(SERVICES_DETAILS_DATA)
    .filter(s => s.code !== service.code)
    .slice(0, 4);

  const displayRelated = relatedServices.length > 0 ? relatedServices : fallbackRelated;

  return (
    <div className="ske-service-detail-page" style={{ background: '#07080d', color: '#eef0f5', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* Scoped CSS Styles matching Shree Kalyan Layout & responsive grid */}
      <style>{`
        .ske-top-breadcrumb {
          background: #0d1017;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 20px;
          font-size: 13px;
          color: #94a3b8;
        }
        .ske-service-hero {
          background: linear-gradient(180deg, #0d121c 0%, #07080d 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 48px 20px 42px;
        }
        .ske-category-tag {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #f5b81b;
          background: rgba(245, 184, 27, 0.12);
          border: 1px solid rgba(245, 184, 27, 0.3);
          padding: 4px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
        }
        .ske-hero-title {
          font-size: clamp(2rem, 4.5vw, 2.9rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          line-height: 1.22;
        }
        .ske-hero-subtitle {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #94a3b8;
          max-width: 880px;
          margin: 0;
        }
        .ske-content-container {
          max-width: 1040px;
          margin: 0 auto;
          padding: 45px 20px 70px;
        }
        .ske-main-h1 {
          font-size: clamp(1.6rem, 3.2vw, 2.2rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: left;
          border-bottom: 3px solid #f5b81b;
          padding-bottom: 14px;
          line-height: 1.3;
        }
        .ske-lead-p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 36px;
        }
        .ske-section-h2 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 45px;
          margin-bottom: 20px;
          text-align: left;
          border-left: 5px solid #f5b81b;
          padding-left: 16px;
          line-height: 1.35;
        }
        .ske-body-p {
          font-size: 0.98rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 22px;
        }
        .ske-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin: 24px 0 35px;
        }
        .ske-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0 35px;
        }
        .ske-card {
          background: #11141c;
          padding: 22px 18px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
        }
        .ske-card:hover {
          transform: translateY(-4px);
          border-color: #f5b81b;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .ske-card-icon {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justifyContent: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(245, 184, 27, 0.1);
        }
        .ske-card h6 {
          font-size: 0.94rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 6px;
          line-height: 1.35;
        }
        .ske-card p {
          font-size: 0.82rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.48;
          text-align: center;
        }
        .ske-deliverable-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 28px;
          background: #11141c;
          padding: 28px 32px;
          border-radius: 14px;
          margin: 24px 0 35px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          list-style: none;
        }
        .ske-deliverable-grid li {
          position: relative;
          padding-left: 28px;
          font-size: 0.94rem;
          color: #e2e8f0;
          line-height: 1.5;
        }
        .ske-deliverable-grid li::before {
          content: "✓";
          color: #f5b81b;
          font-weight: 800;
          font-size: 1.1rem;
          position: absolute;
          left: 0;
          top: -1px;
        }
        .ske-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0 35px;
        }
        .ske-stat-card {
          background: #11141c;
          padding: 24px 16px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
        }
        .ske-stat-card:hover {
          transform: translateY(-3px);
          border-color: #f5b81b;
        }
        .ske-stat-card .number {
          font-size: 1.9rem;
          font-weight: 800;
          color: #38bdf8;
          line-height: 1.2;
          margin: 6px 0 4px;
        }
        .ske-stat-card .label {
          font-size: 0.84rem;
          color: #94a3b8;
          font-weight: 600;
        }
        .ske-faq-item {
          background: #11141c;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          padding: 18px 22px;
          margin-bottom: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .ske-faq-item:hover {
          border-color: #f5b81b;
        }
        .ske-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.02rem;
          font-weight: 700;
          color: #ffffff;
        }
        .ske-faq-a {
          margin-top: 10px;
          font-size: 0.92rem;
          line-height: 1.65;
          color: #94a3b8;
        }
        .ske-cta-section {
          background: linear-gradient(135deg, #0b172a 0%, #111c33 100%);
          border: 1px solid rgba(245, 184, 27, 0.3);
          padding: 44px 36px;
          border-radius: 16px;
          text-align: center;
          margin: 45px 0 35px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);
        }
        .ske-cta-section h2 {
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .ske-cta-section p {
          font-size: 1.02rem;
          color: #cbd5e1;
          max-width: 750px;
          margin: 0 auto 24px;
          line-height: 1.65;
        }
        .ske-cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .ske-btn-primary {
          background: #f5b81b;
          color: #07080d;
          border: 2px solid #f5b81b;
          border-radius: 999px;
          padding: 12px 32px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ske-btn-primary:hover {
          background: #e0a50b;
          border-color: #e0a50b;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(245, 184, 27, 0.35);
        }
        .ske-btn-whatsapp {
          background: #25D366;
          color: #ffffff;
          border: 2px solid #25D366;
          border-radius: 999px;
          padding: 12px 30px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .ske-btn-whatsapp:hover {
          background: #1da851;
          border-color: #1da851;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
        }
        .ske-regulatory-box {
          background: #11141c;
          border-left: 5px solid #38bdf8;
          padding: 22px 28px;
          margin: 35px 0;
          border-radius: 0 10px 10px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .ske-regulatory-box h4 {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .ske-regulatory-box ul {
          margin: 0;
          padding-left: 20px;
          font-size: 0.92rem;
          line-height: 1.8;
          color: #cbd5e1;
        }
        .ske-regulatory-box li strong {
          color: #38bdf8;
        }
        .ske-related-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 24px 0;
        }
        .ske-rel-card {
          background: #11141c;
          padding: 20px 16px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ske-rel-card:hover {
          transform: translateY(-4px);
          border-color: #f5b81b;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
        }
        .ske-rel-card h6 {
          font-weight: 700;
          color: #ffffff;
          font-size: 0.92rem;
          margin: 8px 0 6px;
          min-height: 2.6em;
          display: flex;
          align-items: center;
          justifyContent: center;
        }
        .ske-rel-card .learn-more {
          font-size: 0.84rem;
          color: #38bdf8;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        @media (max-width: 992px) {
          .ske-grid-3, .ske-grid-4, .ske-stats-grid, .ske-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ske-grid-3, .ske-grid-4, .ske-stats-grid, .ske-related-grid, .ske-deliverable-grid {
            grid-template-columns: 1fr;
          }
          .ske-content-container {
            padding: 30px 16px 50px;
          }
          .ske-cta-section {
            padding: 30px 20px;
          }
        }
      `}</style>

      {/* Top Breadcrumb & Share Navigation */}
      <div className="ske-top-breadcrumb">
        <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
            <span>/</span>
            <a href="/services" onClick={(e) => navigateTo('/services', e)} style={{ color: '#94a3b8', textDecoration: 'none' }}>Services</a>
            <span>/</span>
            <span style={{ color: '#f5b81b', fontWeight: 600 }}>{service.heroTitle}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '5px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              <Share2 size={12} />
              <span>{copiedLink ? 'Link Copied!' : 'Share Page'}</span>
            </button>

            <a
              href="/services"
              onClick={(e) => navigateTo('/services', e)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#cbd5e1',
                padding: '5px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={12} /> Back to Services
            </a>
          </div>
        </div>
      </div>

      {/* Top Hero Header */}
      <section className="ske-service-hero">
        <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
          <span className="ske-category-tag">{service.categoryTag}</span>
          <h1 className="ske-hero-title">{service.heroTitle}</h1>
          <p className="ske-hero-subtitle">{service.heroSubtitle}</p>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="ske-content-container">
        
        {/* Full Service Title */}
        <h1 className="ske-main-h1">{service.fullTitle}</h1>
        <p className="ske-lead-p">{service.lead}</p>

        {/* Section 1: What is a [Service Title]? */}
        <h2 className="ske-section-h2">{service.whatIsHeading}</h2>
        <p className="ske-body-p">{service.whatIs}</p>

        {/* Section 2: Core Assessment Pillars (6 Cards - grid-3) */}
        {service.grid3Cards && service.grid3Cards.length > 0 && (
          <>
            <h2 className="ske-section-h2">{service.grid3Heading}</h2>
            <div className="ske-grid-3">
              {service.grid3Cards.map((c, i) => (
                <div key={i} className="ske-card">
                  <div className="ske-card-icon">
                    {renderIcon(c.icon, 24, '#f5b81b')}
                  </div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Section 3: Technical Hazards / Checks (8 Cards - grid-4) */}
        {service.grid4ACards && service.grid4ACards.length > 0 && (
          <>
            <h2 className="ske-section-h2">{service.grid4AHeading}</h2>
            <div className="ske-grid-4">
              {service.grid4ACards.map((c, i) => (
                <div key={i} className="ske-card">
                  <div className="ske-card-icon" style={{ background: 'rgba(56, 189, 248, 0.1)' }}>
                    {renderIcon(c.icon, 22, '#38bdf8')}
                  </div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Section 4: Equipment / Systems Evaluated (8 Cards - grid-4) */}
        {service.grid4BCards && service.grid4BCards.length > 0 && (
          <>
            <h2 className="ske-section-h2">{service.grid4BHeading}</h2>
            <div className="ske-grid-4">
              {service.grid4BCards.map((c, i) => (
                <div key={i} className="ske-card">
                  <div className="ske-card-icon" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
                    {renderIcon(c.icon, 22, '#10b981')}
                  </div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Section 5: Diagnostic / Testing Methods (8 Cards - grid-4) */}
        {service.grid4CCards && service.grid4CCards.length > 0 && (
          <>
            <h2 className="ske-section-h2">{service.grid4CHeading}</h2>
            {service.grid4CSubtitle && <p className="ske-body-p">{service.grid4CSubtitle}</p>}
            <div className="ske-grid-4">
              {service.grid4CCards.map((c, i) => (
                <div key={i} className="ske-card">
                  <div className="ske-card-icon" style={{ background: 'rgba(236, 72, 153, 0.1)' }}>
                    {renderIcon(c.icon, 22, '#ec4899')}
                  </div>
                  <h6>{c.title}</h6>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Section 6: Deliverables (2-Column Checkmark Grid) */}
        {service.deliverables && service.deliverables.length > 0 && (
          <>
            <h2 className="ske-section-h2">{service.heroTitle} Deliverables</h2>
            <ul className="ske-deliverable-grid">
              {service.deliverables.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {/* Section 7: Industries We Serve (8 Cards - grid-4) */}
        {service.industries && service.industries.length > 0 && (
          <>
            <h2 className="ske-section-h2">Industries We Serve</h2>
            <div className="ske-grid-4">
              {service.industries.map((ind, i) => (
                <div key={i} className="ske-card" style={{ padding: '16px 12px' }}>
                  <div className="ske-card-icon" style={{ width: '42px', height: '42px', marginBottom: '8px' }}>
                    {renderIcon(ind.icon, 20, '#f5b81b')}
                  </div>
                  <h6 style={{ fontSize: '0.88rem', margin: 0 }}>{ind.name}</h6>
                </div>
              ))}
            </div>
          </>
        )}



        {/* Section 9: Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <>
            <h2 className="ske-section-h2">Frequently Asked Questions</h2>
            <div>
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqs[idx] !== false; // open by default or toggleable
                return (
                  <div key={idx} className="ske-faq-item" onClick={() => toggleFaq(idx)}>
                    <div className="ske-faq-q">
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp size={18} color="#f5b81b" /> : <ChevronDown size={18} color="#94a3b8" />}
                    </div>
                    {isOpen && (
                      <div className="ske-faq-a">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Section 10: High-Impact Call-to-Action Section */}
        <div className="ske-cta-section">
          <h2>{service.ctaTitle}</h2>
          <p>{service.ctaDesc}</p>
          <div className="ske-cta-buttons">
            <button
              onClick={() => onOpenQuote(service.heroTitle, { category: service.categoryTag })}
              className="ske-btn-primary"
            >
              <FileText size={16} /> Request {service.heroTitle}
            </button>

            <a
              href={`https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20am%20interested%20in%20${encodeURIComponent(service.heroTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ske-btn-whatsapp"
            >
              <MessageSquare size={16} /> WhatsApp an Expert
            </a>

            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#ffffff',
                border: '2px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '999px',
                padding: '12px 28px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <PhoneCall size={16} /> +91 91586 58885
            </a>
          </div>
        </div>

        {/* Section 11: Current Regulatory Framework Box */}
        {service.regulatoryActs && service.regulatoryActs.length > 0 && (
          <div className="ske-regulatory-box">
            <h4>
              <Scale size={20} color="#38bdf8" />
              <span>{service.regulatoryHeading || 'Current Regulatory Framework'}</span>
            </h4>
            <ul>
              {service.regulatoryActs.map((act, i) => (
                <li key={i}>
                  <strong>{act.title}</strong> {act.desc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section 12: Related Services Grid (Clickable to switch page) */}
        <h2 className="ske-section-h2">Related Services</h2>
        <div className="ske-related-grid">
          {displayRelated.map((rel) => (
            <a
              key={rel.code}
              href={`/services/${rel.code}`}
              onClick={(e) => navigateTo(`/services/${rel.code}`, e)}
              className="ske-rel-card"
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                <ShieldCheck size={22} color="#38bdf8" />
              </div>
              <h6>{rel.heroTitle || rel.title}</h6>
              <span className="learn-more">
                <span>Learn More</span>
                <ArrowRight size={13} />
              </span>
            </a>
          ))}
        </div>

      </main>

    </div>
  );
}
