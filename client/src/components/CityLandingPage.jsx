import React, { useEffect } from 'react';
import {
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  FileText,
  Award,
  Cpu,
  Layers,
  Factory,
  Camera,
  Check,
  Zap
} from 'lucide-react';
import { PAN_INDIA_CITIES } from '../data/cityHubData';

export default function CityLandingPage({ cityData, onOpenQuote, onNavigateHome, onSelectCity }) {
  useEffect(() => {
    if (cityData) {
      document.title = cityData.seoTitle;
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [cityData]);

  if (!cityData) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h2>City Practice Area Not Found</h2>
        <button onClick={onNavigateHome} className="btn btn-primary" style={{ marginTop: '20px' }}>
          &larr; Back to Home
        </button>
      </div>
    );
  }

  // Schema.org Localized Structured Data
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "name": `MS Chartered Engineers - ${cityData.cityName}`,
    "url": `https://www.mscharteredengineer.com/${cityData.slug}`,
    "image": cityData.heroImage ? `https://www.mscharteredengineer.com${cityData.heroImage}` : undefined,
    "description": cityData.seoMeta,
    "telephone": "+919158658885",
    "email": "ms.charteredengineer@gmail.com",
    "priceRange": "₹₹",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": cityData.cityName
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Er. Mukesh Singh",
      "alumniOf": "IIT Roorkee",
      "jobTitle": "Chartered Engineer (India) MIE & Government Approved Valuer"
    }
  };

  return (
    <div
      className="city-landing-page"
      style={{
        background: 'radial-gradient(circle at 10% 8%, rgba(217, 119, 6, 0.05) 0%, transparent 40%), linear-gradient(180deg, #F4F0E8 0%, #FAF8F5 45%, #F4F0E8 100%)',
        minHeight: '100vh',
        paddingTop: '24px',
        paddingBottom: '44px',
        color: '#0f172a'
      }}
    >
      {/* Inject localized JSON-LD schema into head */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />

      <div className="container">
        {/* Top Breadcrumbs & Back Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '12px 0',
            marginBottom: '18px',
            borderBottom: '1px solid #E8E2D8'
          }}
        >
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #E8E2D8',
              borderRadius: '9999px',
              padding: '6px 16px',
              color: '#0f172a',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={15} />
            <span>&larr; Back to Home</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#64748b' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#64748b' }}>Pan-India Corridors</span>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a', fontWeight: 600 }}>{cityData.cityName}</span>
          </div>
        </div>

        {/* ── High-Impact Hero Banner with Real Photo Showcase ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #07172c 0%, #0c2340 55%, #183354 100%)',
            borderRadius: '24px',
            padding: 'clamp(24px, 3.8vw, 42px) clamp(20px, 3.2vw, 38px)',
            color: '#ffffff',
            marginBottom: '28px',
            boxShadow: '0 20px 40px -12px rgba(7, 23, 44, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '32px',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Left Column: Text, Value Prop, CTAs */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 14px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '9999px',
                  color: '#fbbf24',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  marginBottom: '14px'
                }}
              >
                <Sparkles size={14} />
                <span>{cityData.tagline}</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(1.75rem, 3.4vw, 2.7rem)',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '14px',
                  color: '#ffffff'
                }}
              >
                Chartered Engineer in <span style={{ color: '#fbbf24' }}>{cityData.cityName}</span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(0.90rem, 1.5vw, 1.02rem)',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  marginBottom: '20px'
                }}
              >
                {cityData.heroDescription}
              </p>

              {/* Quick Service Metrics */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '22px'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '7px 14px',
                    fontSize: '0.82rem',
                    color: '#e2e8f0'
                  }}
                >
                  <Clock size={15} color="#fbbf24" />
                  <span>{cityData.turnaround}</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '7px 14px',
                    fontSize: '0.82rem',
                    color: '#e2e8f0'
                  }}
                >
                  <Award size={15} color="#38bdf8" />
                  <span>Er. Mukesh Singh (IIT Roorkee, IEI MIE)</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '10px',
                    padding: '7px 14px',
                    fontSize: '0.82rem',
                    color: '#e2e8f0'
                  }}
                >
                  <MapPin size={15} color="#34d399" />
                  <span>{cityData.centralHQDistance}</span>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => onOpenQuote('Assets Valuation Services', { city: cityData.cityName })}
                  className="btn btn-gold"
                  style={{ padding: '11px 24px', fontSize: '0.92rem', fontWeight: 700 }}
                >
                  Request Quotation for {cityData.cityName}
                </button>

                <a
                  href="tel:+919158658885"
                  className="btn btn-outline"
                  style={{
                    padding: '10px 20px',
                    fontSize: '0.90rem',
                    borderColor: 'rgba(255, 255, 255, 0.35)',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <PhoneCall size={15} color="#34d399" />
                  <span>Call: +91 91586 58885</span>
                </a>

                <a
                  href={`https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20am%20inquiring%20regarding%20Chartered%20Engineer%20services%20in%20${encodeURIComponent(cityData.cityName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(37, 211, 102, 0.15)',
                    border: '1px solid rgba(37, 211, 102, 0.4)',
                    color: '#ffffff',
                    fontSize: '0.90rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={15} color="#25D366" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Real Image of Corridor */}
            {cityData.heroImage && (
              <div
                style={{
                  background: 'rgba(10, 25, 47, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.35)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image Top Bar */}
                <div
                  style={{
                    padding: '10px 16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.74rem',
                    color: '#94a3b8'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        display: 'inline-block',
                        boxShadow: '0 0 8px #10b981'
                      }}
                    />
                    <span style={{ color: '#ffffff', fontWeight: 700, letterSpacing: '0.04em' }}>
                      ACTIVE PRACTICE CORRIDOR
                    </span>
                  </div>
                  <span style={{ color: '#fbbf24', fontWeight: 600 }}>24–48h Site Inspection</span>
                </div>

                {/* Real Image Container */}
                <div style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={cityData.heroImage}
                    alt={cityData.heroImageAlt || cityData.cityName}
                    loading="eager"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(7, 23, 44, 0.05) 0%, rgba(7, 23, 44, 0.65) 100%)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '14px',
                      right: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)'
                    }}
                  >
                    <MapPin size={15} color="#fbbf24" style={{ flexShrink: 0 }} />
                    <span>{cityData.heroImageCaption || cityData.cityName}</span>
                  </div>
                </div>

                {/* Quick Trust Highlights */}
                <div
                  style={{
                    padding: '12px 16px',
                    background: 'rgba(15, 23, 42, 0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontSize: '0.78rem',
                    color: '#cbd5e1'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>On-site physical inspection across all industrial zones</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={13} color="#10b981" />
                    <span>DGFT Udyog Bhawan, Customs &amp; Bank Consortium Approved</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Founder Verification Strip ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #FAF8F5 100%)',
            border: '1px solid #E8E2D8',
            borderRadius: '20px',
            padding: '18px 24px',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="/mukesh-singh-founder.webp"
              alt="Er. Mukesh Singh - IIT Roorkee Alumni"
              style={{
                width: '62px',
                height: '62px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid #fbbf24',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.25)',
                flexShrink: 0
              }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Er. Mukesh Singh
                </h3>
                <span style={{ fontSize: '0.70rem', padding: '2px 8px', borderRadius: '9999px', background: '#dbeafe', color: '#1e40af', fontWeight: 700 }}>
                  B.Tech (IIT Roorkee)
                </span>
                <span style={{ fontSize: '0.70rem', padding: '2px 8px', borderRadius: '9999px', background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>
                  IEI MIE Chartered Engineer
                </span>
              </div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.82rem', color: '#64748b' }}>
                Lead Signatory for {cityData.cityName} · Empanelled with Nationalized Banks, DGFT &amp; Registered Valuer IBBI.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href="tel:+919158658885"
              className="btn btn-outline"
              style={{ padding: '8px 16px', fontSize: '0.84rem', borderColor: '#0f172a', color: '#0f172a' }}
            >
              <PhoneCall size={14} style={{ marginRight: '6px' }} />
              Direct Call
            </a>
            <button
              onClick={() => onOpenQuote('Consultation with Er. Mukesh Singh', { city: cityData.cityName })}
              className="btn btn-gold"
              style={{ padding: '8px 18px', fontSize: '0.84rem', fontWeight: 700 }}
            >
              Book Site Visit
            </button>
          </div>
        </div>

        {/* ── Real Inspection Showcase & Plant Gallery ── */}
        {cityData.gallery && cityData.gallery.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 22px auto' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  background: '#fef3c7',
                  border: '1px solid #fde68a',
                  borderRadius: '9999px',
                  color: '#b45309',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  marginBottom: '8px'
                }}
              >
                <Camera size={14} />
                <span>VERIFIED ON-SITE FIELD INSPECTIONS</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: '#0f172a', fontWeight: 800, margin: '0 0 6px 0' }}>
                Plant, Machinery &amp; Infrastructure Inspected in <span style={{ color: '#b45309' }}>{cityData.cityName}</span>
              </h2>
              <p style={{ color: '#475569', fontSize: '0.94rem', margin: 0 }}>
                Authentic photographic records of statutory engineering appraisals, customs clearance &amp; industrial assets across the {cityData.state} corridor.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '20px'
              }}
            >
              {cityData.gallery.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E2D8',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div style={{ position: 'relative', height: '190px', overflow: 'hidden', background: '#0a192f' }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(6px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fbbf24',
                        fontSize: '0.70rem',
                        fontWeight: 800,
                        letterSpacing: '0.05em',
                        padding: '4px 10px',
                        borderRadius: '9999px'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 800, marginBottom: '8px' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenQuote(item.title, { city: cityData.cityName })}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        marginTop: '16px',
                        background: 'transparent',
                        border: 'none',
                        color: '#B45309',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span>Request Valuation in {cityData.cityName}</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Two Column Regional Grid: Industrial Clusters & Statutory Recognition ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '28px'
          }}
        >
          {/* Industrial Clusters Served */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E8E2D8',
              borderRadius: '20px',
              padding: '24px 28px',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  background: '#EFF6FF',
                  border: '1px solid #BFDBFE',
                  borderRadius: '10px',
                  padding: '8px',
                  color: '#1D4ED8'
                }}
              >
                <Factory size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: 800, margin: 0 }}>
                  Industrial Zones &amp; Clusters Served
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>Rapid on-site physical inspection coverage</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cityData.industrialClusters.map((cluster, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{cluster}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Statutory Acceptance & Authorities */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid #E8E2D8',
              borderRadius: '20px',
              padding: '24px 28px',
              boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div
                style={{
                  background: '#FFFBEB',
                  border: '1px solid #FDE68A',
                  borderRadius: '10px',
                  padding: '8px',
                  color: '#B45309'
                }}
              >
                <Landmark size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: 800, margin: 0 }}>
                  Statutory Bodies &amp; Legal Authorities
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#64748B' }}>100% acceptance for legal &amp; banking compliance</span>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cityData.statutoryAuthorities.map((auth, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                  <ShieldCheck size={16} color="#B45309" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{auth}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Specialized Practice Areas for this Corridor ── */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 20px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '9999px',
                color: '#1d4ed8',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '8px'
              }}
            >
              <Cpu size={14} />
              <span>CORE STATUTORY &amp; ENGINEERING SERVICES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: '#0f172a', fontWeight: 800, margin: '0 0 6px 0' }}>
              Services Provided in <span style={{ color: '#b45309' }}>{cityData.cityName}</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.94rem', margin: 0 }}>
              Tailored specifically to the regulatory, banking, and industrial profile of the {cityData.state} corridor.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '18px'
            }}
          >
            {cityData.practiceAreas.map((pa, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E2D8',
                  borderRadius: '18px',
                  padding: '22px',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#EFF6FF',
                      border: '1px solid #BFDBFE',
                      color: '#1E40AF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px',
                      fontWeight: 800,
                      fontSize: '0.88rem'
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 800, marginBottom: '8px' }}>
                    {pa.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                    {pa.desc}
                  </p>
                </div>

                <button
                  onClick={() => onOpenQuote(pa.title, { city: cityData.cityName })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#B45309',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <span>Request Valuation Report</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ── Equipment & Plant Types Evaluated ── */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E8E2D8',
            borderRadius: '20px',
            padding: '24px 28px',
            marginBottom: '32px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <Layers size={18} color="#B45309" />
            <h3 style={{ fontSize: '1.15rem', color: '#0F172A', fontWeight: 800, margin: 0 }}>
              Typical Machinery &amp; Industrial Equipment Evaluated in {cityData.cityName}
            </h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {cityData.equipmentHandled.map((eq, i) => (
              <div
                key={i}
                style={{
                  background: '#F4F0E8',
                  border: '1px solid #E8E2D8',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontSize: '0.82rem',
                  color: '#334155',
                  fontWeight: 600
                }}
              >
                ⚙️ {eq}
              </div>
            ))}
          </div>
        </div>

        {/* ── Other Pan-India Corridors Switcher (SEO Hub Links) ── */}
        <div
          style={{
            background: '#FFFFFF',
            border: '1px solid #E8E2D8',
            borderRadius: '20px',
            padding: '24px 28px',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.03)'
          }}
        >
          <span style={{ fontSize: '0.78rem', color: '#B45309', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            PAN-INDIA PRACTICE NETWORK
          </span>
          <h3 style={{ fontSize: '1.25rem', color: '#0F172A', fontWeight: 800, margin: '4px 0 14px 0' }}>
            Explore Our Other Regional Engineering Corridors
          </h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {PAN_INDIA_CITIES.map((c) => {
              const isCurrent = c.slug === cityData.slug;
              return (
                <button
                  key={c.slug}
                  onClick={() => onSelectCity(c.slug)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    background: isCurrent ? '#0F172A' : '#FAF8F5',
                    border: isCurrent ? '1px solid #0F172A' : '1px solid #E8E2D8',
                    color: isCurrent ? '#FFFFFF' : '#334155',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: isCurrent ? 'default' : 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <MapPin size={13} color={isCurrent ? '#FBBF24' : '#1E40AF'} />
                  <span>{c.cityName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
