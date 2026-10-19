import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Phone,
  MessageSquare,
  Sparkles,
  Building2,
  Factory,
  Layers,
  Wrench,
  Hammer,
  Eye,
  Award,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  FileText,
  Sliders,
  Maximize2
} from 'lucide-react';

export default function FabricationServicesPage({ onOpenQuote, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('chimney');
  const [selectedImage, setSelectedImage] = useState(null);
  const [calcState, setCalcState] = useState({
    type: 'tin-shed',
    areaOrWeight: '3000',
    specification: 'standard'
  });
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Industrial Fabrication, Tin Shed & Iron Works | MS Chartered Engineers';

    const updateOrCreateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('description', 'Heavy industrial fabrication, factory tin shed erection, iron fabrication, industrial chimney & exhaust stacks, and architectural SS glass railings in Jaipur & Pan-India by IIT Roorkee engineers. Call +91 91586 58885.');
    updateOrCreateMeta('keywords', 'industrial fabrication, tin shed fabrication, iron fabrication work, industrial chimney fabrication, PEB shed manufacturer, factory shed fabrication, boiler chimney erection, glass railing fabrication, aluminium facade');
    updateOrCreateMeta('og:title', 'Industrial Fabrication, Tin Shed & Iron Works | MS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'Heavy industrial fabrication, factory tin shed erection, iron fabrication, industrial chimney & exhaust stacks, and architectural SS glass railings in Jaipur & Pan-India.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/fabrication-services', true);
  }, []);

  // Real completed project images uploaded by client
  const realProjects = [
    {
      id: 'proj-1',
      title: '30m Self-Supporting Industrial Chimney & Exhaust Stack',
      category: 'Heavy Industrial Fabrication',
      tag: 'COMPLETED & ERECTED',
      src: '/fabrication/industrial-chimney-stack-fabrication.jpg',
      specs: 'IS 2062 Grade Steel • 30m Height • Flange Jointed • Heat-Resistant Coating',
      desc: 'Complete turnkey fabrication and crane erection of a self-supporting heavy steel exhaust chimney with aerodynamic structural scaffolding, foundation anchor cage, and CEIG/Pollution Control Board compliant sampling ports.'
    },
    {
      id: 'proj-2',
      title: 'Structural Steel Tower Framework & Safety Cage Ladder',
      category: 'Structural Tower & Access',
      tag: 'ERECTION ON-SITE',
      src: '/fabrication/structural-steel-tower-erection.jpg',
      specs: 'Lattice Structural Frame • Safety Caged Ladder • Rest Platforms • High-Tensile Bolted',
      desc: 'Heavy-duty structural lattice tower engineered for extreme wind resistance, featuring vertical safety-caged inspection ladders, intermediate rest landings, and rigid tie-backs to plant building.'
    },
    {
      id: 'proj-3',
      title: 'Industrial Flue Gas Ducting & Steel Support Gantry',
      category: 'Industrial Ducting & Piping',
      tag: 'PLANT INFRASTRUCTURE',
      src: '/fabrication/heavy-industrial-ducting-support.jpg',
      specs: 'Large-Bore Mild Steel • Expansion Bellows • Heavy Gantry Beams • Damper Housing',
      desc: 'Fabrication and leak-proof welding of large diameter flue gas breeching ducting connecting factory boilers and emission control units to vertical stack on heavy structural steel trestles.'
    },
    {
      id: 'proj-4',
      title: 'Circular Inspection Walkways & Spiral Staircase Gallery',
      category: 'Platforms & Safety Gallerias',
      tag: 'TURNKEY SAFETY',
      src: '/fabrication/spiral-ladder-inspection-platform.jpg',
      specs: '360° Circular Platform • Anti-Skid Chequered Grating • Continuous Handrails',
      desc: 'Precision curved circular service galleries and access platforms engineered as per OSHA & Indian Factory Rules for maintenance staff, emission sampling, and structural monitoring.'
    },
    {
      id: 'proj-5',
      title: 'Heavy Base Ring Flange, Anchoring & Cleanout Manhole',
      category: 'Foundation & Breeching',
      tag: 'HEAVY ENGINEERING',
      src: '/fabrication/boiler-stack-foundation-base.jpg',
      specs: '28mm Gusseted Base Flange • High-Tensile Anchor Studs • Bolted Cleanout Door',
      desc: 'Heavy-gauge reinforced base ring with radial stiffener gussets anchored onto RCC foundation block, featuring industrial access manhole with high-temperature gasket seal.'
    }
  ];

  // 4 Core Fabrication Divisions
  const divisions = {
    chimney: {
      title: 'Industrial Chimneys & Exhaust Stacks',
      badge: 'HEAVY INDUSTRIAL DIVISION',
      desc: 'Turnkey fabrication, welding, and erection of self-supporting and guy-wired industrial chimneys, boiler exhaust stacks, incinerator stacks, and dust extraction piping.',
      features: [
        'Self-supporting industrial steel chimneys (15m to 45m+ height)',
        'Guyed & multi-flue steel chimneys with dynamic wind damping',
        'Large-bore flue gas ducting, dampers, breeching & silencers',
        'Boiler exhaust stacks with sampling port holes as per CPCB norms',
        'Internal refractory lining & heat-resistant polyurethane/aluminium coating',
        'Circular inspection platforms, aviation warning lights & lightning arresters'
      ],
      idealFor: 'Power Plants, Cement, Chemical, Foundries, Rolling Mills, Food & Textile Units'
    },
    tinShed: {
      title: 'Factory Tin Shed & PEB Industrial Roofing',
      badge: 'INDUSTRIAL SHED & PEB',
      desc: 'Complete turnkey design, fabrication, and erection of industrial factory sheds, Pre-Engineered Building (PEB) warehouses, workshop sheds, and heavy godowns.',
      features: [
        'Factory tin sheds with tubular & angle iron structural trusses',
        'PEB (Pre-Engineered Building) heavy clear-span industrial structures',
        'Tata Bluescope & JSW color-coated Galvalume / Zincalume roofing sheets',
        'Curved arch sheds, gable roof sheds & multi-span industrial warehouses',
        'Polycarbonate day-lighting skylights & wind-driven turbo ventilators',
        'Complete heavy rainwater gutter, downpipe & eave trim drainage systems'
      ],
      idealFor: 'Industrial Warehouses, Manufacturing Workshops, Rice Mills, Godowns & Logistics Hubs'
    },
    ironWork: {
      title: 'Heavy Iron & Mild Steel (MS) Fabrication',
      badge: 'STRUCTURAL MS & IRON',
      desc: 'Custom heavy iron fabrication work, structural steel mezzanine floors, industrial rolling shutters, motorized heavy gates, and factory security fencing.',
      features: [
        'Heavy industrial motorized sliding, swinging & cantilever factory gates',
        'Gear-operated & motorized heavy duty industrial rolling shutters',
        'Structural steel mezzanine floors, catwalks, trench covers & pipe racks',
        'Emergency fire escape staircases & spiral steel access ladders',
        'Heavy duty MS boundary security grills, compound railings & barriers',
        'Overhead crane gantry girders, monorails & heavy machine base frames'
      ],
      idealFor: 'Factories, Commercial Complexes, Industrial Plots, RIICO Areas & Sub-stations'
    },
    architectural: {
      title: 'Architectural, Glass & Aluminium Fabrication',
      badge: 'ARCHITECTURAL DIVISION',
      desc: 'Premium modern metal, glass, and aluminium solutions inspired by contemporary architectural standards for corporate offices, commercial showrooms, and residences.',
      features: [
        'Stainless Steel (SS 304/316) & Toughened Glass Balcony / Staircase Railings',
        'Structural glazing, modern aluminium curtain walls & composite panel facades',
        'UPVC & thermal-break aluminium soundproof sliding, casement & bi-fold systems',
        'Frameless toughened glass partitions, acoustic meeting cubicles & shower cabins',
        'High-tensile stainless steel invisible safety grills for high-rise balconies',
        'Retractable German magnetic mosquito mesh & insect protection screens'
      ],
      idealFor: 'Corporate Offices, Commercial Showrooms, Modern Residences & High-Rise Buildings'
    }
  };

  const faqs = [
    {
      q: 'What types of industrial chimneys and exhaust stacks do you fabricate?',
      a: 'We fabricate self-supporting, guy-wired, and tower-supported industrial steel chimneys ranging from 15 meters to over 45 meters in height. Every chimney is designed in accordance with IS 6533 (Code of practice for design of steel chimneys), accounting for seismic forces, dynamic wind oscillations, and flue gas temperature. We also integrate CPCB-compliant sampling ports, ladders with safety cages, aviation lights, and lightning protection.'
    },
    {
      q: 'What materials and sheets are used for factory tin sheds and PEB structures?',
      a: 'We use certified IS 2062 Grade structural steel (tubular hollow sections, angles, channels, and built-up I-sections) for the primary trusses and columns. For roofing and side cladding, we deploy premium 0.45mm–0.50mm high-tensile color-coated Galvalume/Zincalume sheets from trusted brands such as Tata Bluescope, JSW Steel, and Jindal, backed by a 15–20 year corrosion warranty.'
    },
    {
      q: 'Do you provide structural stability and Chartered Engineer inspection certificates for sheds and chimneys?',
      a: 'Yes, absolutely. Because our core firm is headed by Er. Mukesh Singh (B.Tech IIT Roorkee, Chartered Engineer IEI), every fabrication project undergoes structural design verification. We issue official stamped Structural Stability Certificates, Wind Load Compliance reports, and weld inspection documentation needed for DISH (Factories Act), CEIG, and local municipality approvals.'
    },
    {
      q: 'What architectural glass and aluminium fabrication work do you execute?',
      a: 'Our architectural division specializes in high-spec commercial and residential works: SS 304/316 grade glass railings, structural glazing and aluminium facades, soundproof UPVC windows and doors, frameless toughened glass partitions, and modern invisible safety grills (similar to Jabba Studio specifications).'
    },
    {
      q: 'How do you quote for fabrication projects and what is the typical turnaround?',
      a: 'For industrial chimneys, sheds, and iron fabrication, pricing is quoted on a per-kilogram (per MT) or per-square-foot basis depending on steel grade, tonnage, and on-site erection complexity. Turnkey small sheds (2,000–5,000 sq.ft) are delivered in 15–25 days, while heavy chimney stacks and large PEB warehouses take 30–60 days from drawing approval.'
    }
  ];

  return (
    <div style={{ background: '#070d18', color: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* ── Top Header Navigation ── */}
      <div style={{
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '12px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#cbd5e1',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#94a3b8' }}>
              <a href="/services" style={{ color: '#38bdf8', textDecoration: 'none' }}>Services</a>
              <ChevronRight size={12} />
              <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Fabrication Works</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.80rem', color: '#94a3b8' }}>
              Fabrication Desk: <strong style={{ color: '#f59e0b' }}>+91 91586 58885</strong>
            </span>
            <button
              onClick={() => onOpenQuote('Heavy Industrial & Architectural Fabrication Works', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '7px 16px', fontSize: '0.82rem' }}
            >
              <Wrench size={13} />
              <span>Get Fabrication Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245, 158, 11, 0.18) 0%, rgba(7, 13, 24, 0.95) 75%)',
        padding: '60px 20px 48px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '9999px',
            padding: '6px 18px',
            color: '#fbbf24',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px'
          }}>
            <Factory size={14} color="#f59e0b" />
            <span>Heavy Industrial, Tin Shed &amp; Precision Metal Engineering</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            color: '#ffffff',
            maxWidth: '960px',
            margin: '0 auto 20px',
            letterSpacing: '-0.02em'
          }}>
            Heavy Industrial Fabrication, Tin Sheds &amp; <span style={{ color: '#f59e0b' }}>Structural Engineering</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.98rem, 1.8vw, 1.15rem)',
            color: '#cbd5e1',
            lineHeight: 1.7,
            maxWidth: '820px',
            margin: '0 auto 32px'
          }}>
            Combining certified <strong>IIT Roorkee structural engineering</strong> with turnkey heavy metal fabrication: self-supporting industrial chimneys &amp; boiler exhaust stacks, factory tin sheds, PEB warehouses, heavy iron fabrication, and modern architectural glass &amp; aluminium facades.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            maxWidth: '920px',
            margin: '0 auto 36px'
          }}>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', backdropFilter: 'blur(6px)' }}>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Certified Material</div>
              <div style={{ fontSize: '1.15rem', color: '#f59e0b', fontWeight: 800, marginTop: '4px' }}>IS 2062 Grade Steel</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', backdropFilter: 'blur(6px)' }}>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Welding Standards</div>
              <div style={{ fontSize: '1.15rem', color: '#38bdf8', fontWeight: 800, marginTop: '4px' }}>AWS D1.1 / ASME IX</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', backdropFilter: 'blur(6px)' }}>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Engineering Oversight</div>
              <div style={{ fontSize: '1.15rem', color: '#10b981', fontWeight: 800, marginTop: '4px' }}>IIT Roorkee / IEI MIE</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px', backdropFilter: 'blur(6px)' }}>
              <div style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Execution Scope</div>
              <div style={{ fontSize: '1.15rem', color: '#e2e8f0', fontWeight: 800, marginTop: '4px' }}>Turnkey Supply &amp; Erection</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Heavy Industrial & Architectural Fabrication Works', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '14px 32px', fontSize: '0.98rem' }}
            >
              <Wrench size={18} />
              <span>Book Fabrication Consultation</span>
            </button>
            <a
              href="#project-gallery"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: '#ffffff',
                padding: '14px 26px',
                fontSize: '0.96rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <Eye size={16} />
              <span>View Completed Projects</span>
            </a>
            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20am%20inquiring%20about%20industrial%20fabrication%20and%20tin%20shed%20works."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 26px', fontSize: '0.96rem' }}
            >
              <MessageSquare size={17} />
              <span>WhatsApp Chief Engineer</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Featured On-Site Completed Projects Gallery ── */}
      <section id="project-gallery" style={{ padding: '64px 20px 50px', background: '#0a1220' }}>
        <div className="container" style={{ maxWidth: '1220px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              <Award size={14} color="#38bdf8" />
              <span>Proof of Precision Execution</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Recent Industrial Projects Executed On-Site
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', maxWidth: '720px', margin: '10px auto 0' }}>
              Real photographic evidence of industrial chimney fabrication, 30m tower scaffolding erection, boiler breeching ducting, and circular inspection galleries executed by our team.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px'
          }}>
            {realProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, border-color 0.25s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '260px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#030712'
                  }}
                  onClick={() => setSelectedImage(proj)}
                >
                  <img
                    src={proj.src}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    color: '#fbbf24',
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '4px',
                    letterSpacing: '0.04em'
                  }}>
                    {proj.tag}
                  </span>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.65)',
                    color: '#ffffff',
                    padding: '6px',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem'
                  }}>
                    <Maximize2 size={13} /> Click to View
                  </div>
                </div>

                <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                      {proj.category}
                    </div>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.35, marginBottom: '8px' }}>
                      {proj.title}
                    </h3>
                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.74rem',
                      color: '#fbbf24',
                      fontWeight: 600,
                      marginBottom: '10px'
                    }}>
                      ⚙️ {proj.specs}
                    </div>
                    <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, margin: 0 }}>
                      {proj.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <CheckCircle2 size={14} /> Full On-Site Erection
                    </span>
                    <button
                      onClick={() => onOpenQuote(proj.title, { department: 'fabrication', shortDesc: `Inquiry for ${proj.title}` })}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#f59e0b',
                        fontWeight: 700,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: 0
                      }}
                    >
                      <span>Inquire Now</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Core Fabrication Divisions ── */}
      <section style={{ padding: '64px 20px', background: '#070d18' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#f59e0b',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '10px'
            }}>
              <Hammer size={14} color="#f59e0b" />
              <span>Comprehensive Structural Capabilities</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              Explore Our 4 Fabrication Pillars
            </h2>
          </div>

          {/* Tab Selector Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '32px'
          }}>
            {[
              { id: 'chimney', label: 'Industrial Chimneys & Stacks', icon: Factory },
              { id: 'tinShed', label: 'Factory Tin Shed & PEB', icon: Building2 },
              { id: 'ironWork', label: 'Heavy Iron & MS Fabrication', icon: Wrench },
              { id: 'architectural', label: 'Architectural, Glass & Aluminium', icon: Sparkles }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.12)'}`,
                    color: isActive ? '#000000' : '#cbd5e1',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <TabIcon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card */}
          {divisions[activeTab] && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.7) 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '20px',
              padding: 'clamp(24px, 4vw, 42px)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <span style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#fbbf24',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  letterSpacing: '0.06em'
                }}>
                  {divisions[activeTab].badge}
                </span>

                <span style={{ fontSize: '0.84rem', color: '#94a3b8' }}>
                  Industrial Grade Execution • 100% On-Site Safety Standards
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                {divisions[activeTab].title}
              </h3>
              <p style={{ fontSize: '1.02rem', color: '#cbd5e1', lineHeight: 1.65, maxWidth: '880px', marginBottom: '28px' }}>
                {divisions[activeTab].desc}
              </p>

              {/* Scope Points */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px',
                marginBottom: '28px'
              }}>
                {divisions[activeTab].features.map((feat, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#e2e8f0', fontSize: '0.88rem', lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{
                background: 'rgba(2, 132, 199, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '10px',
                padding: '12px 18px',
                marginBottom: '26px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#38bdf8',
                fontSize: '0.86rem'
              }}>
                <Factory size={16} />
                <span><strong>Industry Applications:</strong> {divisions[activeTab].idealFor}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                <button
                  onClick={() => onOpenQuote(divisions[activeTab].title, { department: 'fabrication' })}
                  className="btn btn-gold"
                  style={{ padding: '12px 28px', fontSize: '0.94rem' }}
                >
                  <Wrench size={16} />
                  <span>Request Custom Estimation</span>
                </button>
                <a
                  href="tel:+919158658885"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '11px 22px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: 600
                  }}
                >
                  <PhoneCall size={15} color="#10b981" />
                  <span>Call +91 91586 58885</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Interactive Fabrication Cost & Specification Estimator ── */}
      <section style={{ padding: '60px 20px', background: '#0a1220', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#10b981', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Instant Preliminary Planning
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
              Fabrication Project Scope Estimator
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              Select your fabrication category and scale to prepare a formal engineering review.
            </p>
          </div>

          <div style={{
            background: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: 'clamp(20px, 3.5vw, 36px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.5)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px' }}>
                  Project Type
                </label>
                <select
                  value={calcState.type}
                  onChange={(e) => setCalcState({ ...calcState, type: e.target.value })}
                  className="form-control"
                  style={{ background: '#030712', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '12px' }}
                >
                  <option value="chimney">Industrial Chimney / Boiler Exhaust Stack</option>
                  <option value="tin-shed">Factory Tin Shed / Industrial PEB Warehouse</option>
                  <option value="iron-work">Heavy Iron Fabrication &amp; Gates/Shutters</option>
                  <option value="ducting">Flue Gas Ducting &amp; Industrial Piping</option>
                  <option value="architectural">SS &amp; Toughened Glass Railings / Facades</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px' }}>
                  Approximate Scale / Area / Tonnage
                </label>
                <select
                  value={calcState.areaOrWeight}
                  onChange={(e) => setCalcState({ ...calcState, areaOrWeight: e.target.value })}
                  className="form-control"
                  style={{ background: '#030712', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '12px' }}
                >
                  <option value="small">Small Scale (Under 5 MT / Under 1,500 Sq.Ft)</option>
                  <option value="3000">Medium Scale (5 MT to 20 MT / 1,500 – 5,000 Sq.Ft)</option>
                  <option value="large">Heavy Industrial (20 MT to 50 MT / 5,000 – 15,000 Sq.Ft)</option>
                  <option value="mega">Large Turnkey Plant (Above 50 MT / 15,000+ Sq.Ft)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '8px' }}>
                  Material &amp; Coating Specification
                </label>
                <select
                  value={calcState.specification}
                  onChange={(e) => setCalcState({ ...calcState, specification: e.target.value })}
                  className="form-control"
                  style={{ background: '#030712', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', padding: '12px' }}
                >
                  <option value="standard">IS 2062 MS + Dual Coat Red Oxide &amp; Synthetic Enamel</option>
                  <option value="heavy">High Heat Aluminium Paint / Heat-Resistant Coating (Chimney)</option>
                  <option value="galvanized">Hot-Dip Galvanized (IS 4759 Anti-Corrosive Spec)</option>
                  <option value="architectural">SS 304/316 Mirror/Matt + 12mm Toughened Glass</option>
                </select>
              </div>
            </div>

            <div style={{
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#fbbf24', textTransform: 'uppercase', fontWeight: 700 }}>
                  Estimated Turnkey Execution
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                  Design, Fabrication &amp; Erection with Engineer Certificate
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  Includes structural drawing, welding inspection, and on-site crane erection.
                </div>
              </div>

              <button
                onClick={() => onOpenQuote('Heavy Industrial & Architectural Fabrication Works', {
                  department: 'fabrication',
                  shortDesc: `Estimator Inquiry: Type=${calcState.type}, Scale=${calcState.areaOrWeight}, Spec=${calcState.specification}`
                })}
                className="btn btn-gold"
                style={{ padding: '12px 24px', fontSize: '0.92rem' }}
              >
                <span>Book Free Site Inspection &amp; Detailed BOQ</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Compliance & Quality Control ── */}
      <section style={{ padding: '60px 20px', background: '#070d18' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Engineering Rigor
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
              Quality Standards &amp; Inspection Protocols
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '0.74rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase' }}>WELDING INTEGRITY</div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '6px 0 8px' }}>AWS D1.1 &amp; IS 816 Certified</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                Certified SMAW, MIG/CO2, and TIG welding performed by coded welders with full penetration butt welds on chimney flanges and critical truss joints.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase' }}>NDT INSPECTION</div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '6px 0 8px' }}>DPT &amp; Ultrasonic Testing (UT)</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                100% visual inspection and non-destructive dye penetrant / ultrasonic testing of base plate and ducting seams to ensure zero porosity or crack defects.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '0.74rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>CORROSION PROTECTION</div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '6px 0 8px' }}>Sandblasting &amp; Epoxy Coating</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                Surface preparation up to Sa 2.5 cleanliness, zinc phosphate rust-inhibiting primers, heat-resistant topcoats, and hot-dip galvanizing for long lifespan.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '0.74rem', color: '#a855f7', fontWeight: 800, textTransform: 'uppercase' }}>SAFETY &amp; COMPLIANCE</div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', margin: '6px 0 8px' }}>CPCB &amp; Factory Rules Aligned</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                Safety cages, rest platforms, double handrails, fire-escape stairwells, and sampling ports strictly compliant with OSHA and Rajasthan Factory Rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section style={{ padding: '60px 20px', background: '#0a1220' }}>
        <div className="container" style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ color: '#f59e0b', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Common Queries
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '6px' }}>
              Frequently Asked Questions on Fabrication
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '0.98rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    color="#f59e0b"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 18px', color: '#cbd5e1', fontSize: '0.90rem', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom Call To Action ── */}
      <section style={{
        padding: '50px 20px',
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(2, 132, 199, 0.1) 100%)',
        borderTop: '1px solid rgba(245, 158, 11, 0.25)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Ready to Begin Your Fabrication Project?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', marginBottom: '26px', lineHeight: 1.6 }}>
            Connect directly with Er. Mukesh Singh (IIT Roorkee, Chartered Engineer) and our senior structural fabrication team for on-site measurement, design drawings, and competitive estimation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Heavy Industrial & Architectural Fabrication Works', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '14px 32px', fontSize: '0.96rem' }}
            >
              <Wrench size={18} />
              <span>Request Turnkey Quote</span>
            </button>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#0f172a',
                padding: '14px 26px',
                borderRadius: '8px',
                fontSize: '0.96rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} color="#0f172a" />
              <span>Call +91 91586 58885</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox Modal for Real Completed Projects ── */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              maxWidth: '820px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)'
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            <div style={{ maxHeight: '65vh', overflow: 'hidden', background: '#000000', textAlign: 'center' }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{ width: '100%', maxHeight: '65vh', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '22px 26px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.74rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase' }}>
                  {selectedImage.category}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#10b981', fontWeight: 700 }}>
                  ✓ {selectedImage.tag}
                </span>
              </div>
              <h3 style={{ fontSize: '1.28rem', color: '#ffffff', fontWeight: 800, marginBottom: '8px' }}>
                {selectedImage.title}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                {selectedImage.desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '14px' }}>
                <span style={{ fontSize: '0.80rem', color: '#94a3b8' }}>
                  Specification: <strong style={{ color: '#fbbf24' }}>{selectedImage.specs}</strong>
                </span>
                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    onOpenQuote(title, { department: 'fabrication', shortDesc: `Inquiry for ${title}` });
                  }}
                  className="btn btn-gold"
                  style={{ padding: '8px 18px', fontSize: '0.84rem' }}
                >
                  <Wrench size={14} />
                  <span>Request Similar Project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
