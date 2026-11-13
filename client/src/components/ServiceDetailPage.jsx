import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Clock,
  Building2,
  Landmark,
  Scale,
  Award,
  PhoneCall,
  MessageSquare,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Cpu,
  Zap,
  HardHat,
  Eye,
  Layers,
  HelpCircle,
  FolderCheck,
  Compass,
  Hammer,
  Factory,
  Sun,
  Share2,
  Check
} from 'lucide-react';
import { getServiceDetails, SERVICES_DETAILS_DATA } from '../data/servicesDetailsData';

// Map icon names from data to actual Lucide components
const ICON_MAP = {
  Building2,
  Landmark,
  Scale,
  Briefcase: Landmark,
  Award,
  Cpu,
  HardHat,
  Eye,
  ShieldCheck,
  FlaskConical: Scale,
  Compass,
  Hammer,
  Zap,
  Factory,
  Sun,
  FileCheck2
};

export default function ServiceDetailPage({
  slug,
  onOpenQuote,
  onNavigateHome,
  onNavigateService
}) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const service = getServiceDetails(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (service) {
      document.title = `${service.title} | KS Chartered Engineers`;
    }
  }, [slug, service]);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => prev === idx ? null : idx);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    if (onNavigateService) {
      onNavigateService(path);
    } else {
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
              onClick={() => navigateTo('/services')}
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

  const IconComponent = ICON_MAP[service.iconName] || Award;
  const accentColor = service.badgeColor || '#38bdf8';

  // Get 4 other related services for the sidebar
  const otherServices = Object.values(SERVICES_DETAILS_DATA)
    .filter(s => s.code !== service.code)
    .slice(0, 5);

  return (
    <div style={{ background: '#07080d', color: '#f1f5f9', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Top Breadcrumb & Actions Bar */}
      <div style={{ background: '#0d1017', borderBottom: '1px solid rgba(255, 255, 255, 0.07)', padding: '14px 20px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#94a3b8' }}>
            <button
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '0.84rem', textDecoration: 'underline' }}
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigateTo('/services')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, fontSize: '0.84rem', textDecoration: 'underline' }}
            >
              Services
            </button>
            <span>/</span>
            <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{service.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={handleShare}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cbd5e1',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              <Share2 size={13} />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => navigateTo('/services')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'none',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#cbd5e1',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={13} /> All Services
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section style={{
        background: 'linear-gradient(180deg, #0d1017 0%, #07080d 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '48px 20px 40px'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Top Pill Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: accentColor,
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}40`,
              padding: '4px 10px',
              borderRadius: '6px'
            }}>
              {service.categoryBadge || service.category}
            </span>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.74rem',
              fontWeight: 600,
              color: '#f59e0b',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '4px 10px',
              borderRadius: '6px'
            }}>
              <Clock size={12} />
              <span>Turnaround: {service.turnaround}</span>
            </span>

            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontSize: '0.74rem',
              fontWeight: 600,
              color: '#10b981',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '4px 10px',
              borderRadius: '6px'
            }}>
              <ShieldCheck size={12} />
              <span>100% Statutory Acceptance</span>
            </span>
          </div>

          {/* Service Title */}
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
            fontWeight: 800,
            lineHeight: 1.25,
            color: '#ffffff',
            marginBottom: '16px',
            maxWidth: '980px'
          }}>
            {service.title}
          </h1>

          {/* Summary */}
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.65,
            color: '#94a3b8',
            maxWidth: '920px',
            marginBottom: '24px'
          }}>
            {service.summary}
          </p>

          {/* Statutory Mandate Callout Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            color: '#cbd5e1',
            marginBottom: '28px'
          }}>
            <Scale size={16} color={accentColor} />
            <span><strong>Governing Framework:</strong> {service.statutoryAct}</span>
          </div>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <button
              onClick={() => onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround })}
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '0.94rem',
                fontWeight: 700,
                borderRadius: '8px'
              }}
            >
              <span>Request Valuation / Quote</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20need%20assistance%20regarding%20"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                color: '#22c55e',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Chief Engineer</span>
            </a>

            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} />
              <span>+91 91586 58885</span>
            </a>
          </div>

        </div>
      </section>

      {/* Main Content Layout (2 Columns: Main 8 cols + Sticky Sidebar 4 cols) */}
      <div style={{ maxWidth: '1240px', margin: '40px auto 0', padding: '0 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 360px',
          gap: '36px',
          alignItems: 'start'
        }}>

          {/* LEFT COLUMN: Deep Documentation & Specifications */}
          <div>

            {/* SECTION 1: Why This Matters & Strategic Importance */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px',
              marginBottom: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <ShieldCheck size={20} color={accentColor} />
                Overview &amp; Regulatory Importance
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#cbd5e1', marginBottom: '20px' }}>
                {service.whyMatters}
              </p>

              {/* 3 Pillar Highlights from User's Ref */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                background: '#0a0c12',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '16px'
              }}>
                {service.keyHighlights.map((hl, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10b981',
                      flexShrink: 0
                    }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#e2e8f0' }}>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: Detailed Scope of Deliverables */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px',
              marginBottom: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FileCheck2 size={20} color={accentColor} />
                Scope of Work &amp; Technical Deliverables
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '20px' }}>
                Every report and certificate is prepared strictly as per prescribed statutory guidelines and accepted across all relevant authorities.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '10px'
              }}>
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}
                  >
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: `${accentColor}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accentColor,
                      flexShrink: 0,
                      marginTop: '1px'
                    }}>
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: 5-Step Execution Methodology */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px',
              marginBottom: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Layers size={20} color={accentColor} />
                5-Step Execution &amp; Certification Methodology
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '22px' }}>
                Systematic engineering procedure guaranteeing auditable, zero-rejection submissions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {service.methodology.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start',
                      padding: '16px',
                      borderRadius: '8px',
                      background: '#0a0c12',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      position: 'relative'
                    }}
                  >
                    <div style={{
                      fontFamily: 'monospace',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      color: accentColor,
                      background: `${accentColor}18`,
                      border: `1px solid ${accentColor}30`,
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {m.step}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>
                        {m.title}
                      </h3>
                      <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: Mandatory Documents Required Checklist */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px',
              marginBottom: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <FolderCheck size={20} color="#f59e0b" />
                Mandatory Client Documents Required
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '18px' }}>
                Keep these documents accessible to fast-track your valuation or certification report within 24–48 hours:
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '10px'
              }}>
                {service.documentsRequired.map((doc, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: 'rgba(245, 158, 11, 0.06)',
                      border: '1px solid rgba(245, 158, 11, 0.18)'
                    }}
                  >
                    <FileText size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.86rem', color: '#e2e8f0', fontWeight: 500 }}>
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: Industries & Client Sectors Served */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px',
              marginBottom: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Factory size={20} color={accentColor} />
                Industries &amp; Client Segments Served
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.industriesServed.map((ind, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '6px 12px',
                      borderRadius: '6px'
                    }}
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* SECTION 6: Frequently Asked Questions (Accordion) */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <HelpCircle size={20} color={accentColor} />
                Frequently Asked Technical &amp; Legal Questions
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '20px' }}>
                Common clarifications regarding statutory requirements, turnarounds, and authority approvals:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {service.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        background: isOpen ? '#0a0c12' : 'rgba(255, 255, 255, 0.02)',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          padding: '16px 18px',
                          background: 'none',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          textAlign: 'left',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp size={18} color={accentColor} /> : <ChevronDown size={18} color="#94a3b8" />}
                      </button>

                      {isOpen && (
                        <div style={{ padding: '0 18px 18px', fontSize: '0.88rem', lineHeight: 1.6, color: '#94a3b8' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Sticky Lead Card & Signatory Info */}
          <div style={{ position: 'sticky', top: '90px' }}>

            {/* Request Consultation Card */}
            <div style={{
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderTop: `3px solid ${accentColor}`,
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '20px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#10b981',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '10px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                Direct Lead Engineer Desk
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Consult Er. Mukesh Singh
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
                Need statutory clearance, bankable valuation, or technical stability certificate? Get instant guidance.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround })}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <FileText size={16} /> Request Official Proposal
                </button>

                <a
                  href={`https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20need%20inquiry%20regarding%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: '#22c55e18',
                    border: '1px solid #22c55e40',
                    color: '#22c55e',
                    padding: '11px',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={16} /> WhatsApp Inquiry
                </a>

                <a
                  href="tel:+919158658885"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0',
                    padding: '11px',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <PhoneCall size={15} /> +91 91586 58885
                </a>
              </div>
            </div>

            {/* Lead Signatory Credentials Card */}
            <div style={{
              background: '#0d1017',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                  fontWeight: 800,
                  fontSize: '1rem'
                }}>
                  MS
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    Er. Mukesh Singh
                  </h4>
                  <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>
                    B.Tech Mechanical (IIT Roorkee)
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={13} color="#f59e0b" />
                  <span>Chartered Engineer (CEng) &amp; MIE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={13} color="#10b981" />
                  <span>Government Approved Registered Valuer</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Landmark size={13} color="#38bdf8" />
                  <span>Empaneled with Leading Commercial Banks</span>
                </div>
              </div>
            </div>

            {/* Related Services Links */}
            <div style={{
              background: '#0d1017',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Related Engineering Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {otherServices.map((rel) => (
                  <button
                    key={rel.code}
                    onClick={() => navigateTo(`/services/${rel.code}`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      padding: '8px 6px',
                      color: '#cbd5e1',
                      fontSize: '0.84rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#38bdf8'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#cbd5e1'; }}
                  >
                    <span>{rel.title}</span>
                    <ArrowRight size={13} color="#64748b" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Full-Width CTA Banner */}
      <div style={{
        maxWidth: '1240px',
        margin: '60px auto 0',
        padding: '0 20px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #11141c 0%, #1a202c 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '36px 30px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Need Official Statutory Clearance or Valuation in Rajasthan / NCR?
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', margin: 0, maxWidth: '650px' }}>
              Direct consultation with IIT Roorkee qualified Chartered Engineers. Bankable, legally admissible reports guaranteed within 24–48 hours.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote(service.title, { category: service.category, turnaround: service.turnaround })}
              className="btn btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.92rem', fontWeight: 700, borderRadius: '8px' }}
            >
              Get Free Quote
            </button>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} /> Call Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
