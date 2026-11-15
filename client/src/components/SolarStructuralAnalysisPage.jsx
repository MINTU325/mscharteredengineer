import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  ShieldCheck, 
  Award, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Building2, 
  Wind, 
  Layers, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Clock, 
  FileCheck, 
  Gauge, 
  Home,
  Zap,
  HardHat,
  Send
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function SolarStructuralAnalysisPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Solar Structural Stability Analysis & MMS Certification | KS Chartered Engineers';
    if (window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('rooftop');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plantCapacity: '100 kWp',
    installationType: 'RCC Roof',
    city: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onOpenQuote) {
      onOpenQuote(`Solar Structural Stability Analysis (${formData.plantCapacity} - ${formData.installationType})`, {
        ...formData,
        serviceType: 'Solar Structural Stability Analysis'
      });
    }
    setFormSubmitted(true);
  };

  const services = [
    {
      id: 'rooftop',
      title: 'Rooftop Solar Structural Stability & Building Load Audit',
      badge: 'Mandatory for DISCOM Net-Metering & CEIG',
      icon: <Building2 size={24} color="#0284c7" />,
      shortDesc: 'Comprehensive dead load, live load, and wind uplift assessment for RCC slabs, industrial shed PEB structures, and curved roofs. Format-B structural certificate issued with Chartered Engineer stamp.',
      deliverables: [
        'Building dead load & solar PV payload structural capacity calculation',
        'Wind uplift force evaluation as per IS 875 (Part 3: 2015)',
        'Purlin, truss, column, and rafter stress checks on STAAD.Pro',
        'Official Form-B / Annexure Stability Certificate signed & sealed by Chartered Engineer (IEI MIE)'
      ],
      idealFor: 'Commercial factories, industrial tin sheds, hospitals, educational institutions, residential societies.'
    },
    {
      id: 'mms',
      title: 'Ground-Mount MMS Structural Analysis & 3D FEA Design',
      badge: 'Utility & C&I Solar Farms',
      icon: <Sun size={24} color="#d97706" />,
      shortDesc: '3D finite element structural analysis of Module Mounting Structures (MMS) across fixed-tilt, seasonal-tilt, and single-axis trackers. Optimized for minimum steel weight while resisting 150–180 km/h wind gusts.',
      deliverables: [
        '3D STAAD.Pro FEA modeling and stress concentration contour maps',
        'Cold-formed steel profile optimization (POSMAC, Galvalume, HDG)',
        'Fastener torque, bolt shear, and slotted hole connection verification',
        'Detailed fabrication drawings with bill of quantities (BOQ)'
      ],
      idealFor: 'Solar EPC contractors, developers, utility-scale IPPs, and module mounting structure manufacturers.'
    },
    {
      id: 'foundation',
      title: 'Solar Foundation, Piling & Geotechnical Interaction',
      badge: 'Pull-out & Uplift Safety',
      icon: <Layers size={24} color="#059669" />,
      shortDesc: 'Engineering analysis and design of solar foundations tailored to local soil parameters. Comprehensive verification of bored cast-in-situ concrete piles, rammed steel posts, helical screws, and ballast blocks.',
      deliverables: [
        'Geotechnical report review and soil bearing capacity validation',
        'Pile compression, pull-out (uplift), and lateral load calculations',
        'Factor of safety (FoS) certification under maximum cyclonic wind',
        'Ballast foundation sliding and overturning safety analysis'
      ],
      idealFor: 'Ground-mount solar parks, canal-top installations, rocky terrain solar projects.'
    },
    {
      id: 'peer-review',
      title: 'Third-Party Design Vetting & EPC Peer Review',
      badge: 'Bankability & Lender Due Diligence',
      icon: <FileCheck size={24} color="#7c3aed" />,
      shortDesc: 'Independent technical due diligence and peer review of solar structural designs submitted by EPC contractors. Ensures compliance with Bureau of Indian Standards and bank financing criteria.',
      deliverables: [
        'Design check of structural member utilization ratios (< 0.90 target)',
        'Corrosion protection audit (HDG micron thickness & salt-spray rating)',
        'Risk assessment report for project lenders and insurance underwriters',
        'Formal Chartered Engineer vetting endorsement letter'
      ],
      idealFor: 'Banks, NBFCs, equity investors, solar asset owners, and independent power producers.'
    }
  ];

  const standards = [
    {
      code: 'IS 875 (Part 3: 2015)',
      title: 'Design Loads (Other Than Earthquake) For Buildings and Structures - Wind Loads',
      desc: 'Determination of basic wind speeds (Vb), design wind speed (Vz), terrain category factors (k1, k2, k3, k4), and local aerodynamic pressure coefficients.'
    },
    {
      code: 'IS 800:2007',
      title: 'General Construction in Steel — Code of Practice',
      desc: 'Limit state design philosophy for hot-rolled structural steel sections, member bucking checks, weld stresses, and serviceability deflection limits.'
    },
    {
      code: 'IS 801:1975',
      title: 'Code of Practice for Use of Cold-Formed Light Gauge Steel Members',
      desc: 'Structural design and effective section modulus calculation for cold-rolled steel purlins, channels, and hat-sections deployed in solar MMS.'
    },
    {
      code: 'IS 1893 (Part 1: 2016)',
      title: 'Criteria for Earthquake Resistant Design of Structures',
      desc: 'Seismic zone coefficient assessment and dynamic horizontal acceleration analysis for critical solar power infrastructure.'
    },
    {
      code: 'IS 456:2000',
      title: 'Plain and Reinforced Concrete — Code of Practice',
      desc: 'Design of RCC pile foundations, pedestals, and ballast weight sizing to prevent uplift and overturning.'
    },
    {
      code: 'MNRE Guidelines',
      title: 'Ministry of New & Renewable Energy Quality Standards',
      desc: 'Statutory compliance benchmarks for grid-connected rooftop solar PV systems and PM Surya Ghar Muft Bijli Yojana.'
    }
  ];

  const faqs = [
    {
      q: 'Why is a Chartered Engineer Structural Stability Certificate mandatory for rooftop solar in India?',
      a: 'State electricity distribution companies (DISCOMs such as JVVNL, AVVNL, JDVVNL, MSEDCL, DHBVN, BSES, etc.) and Chief Electrical Inspectorates (CEIG) mandate that before erecting solar panels on a building or industrial shed roof, a certified Chartered Engineer (Civil/Structural) must inspect and certify that the structure can safely withstand the dead weight of panels, mounting frames, and extreme wind uplift forces without risk of structural failure or roof collapse.'
    },
    {
      q: 'What wind speed and aerodynamic parameters do you verify the solar structure against?',
      a: 'We evaluate structural stability strictly in accordance with IS 875 (Part 3: 2015). Basic wind speeds typically range from 39 m/s to 50 m/s (approx. 140 km/h to 180 km/h) depending on the regional wind zone, building height, terrain category (Category 1 to 4), cyclonic risk factor (k4), and topography. Both downward wind pressure and upward suction forces are rigorously simulated.'
    },
    {
      q: 'Can you certify solar installations on older industrial tin sheds or PEB buildings?',
      a: 'Yes. We conduct a detailed engineering assessment of existing PEB trusses, purlin spacing, sheet gauge, and corrosion levels. If needed, we provide engineered retrofitting or purlin-reinforcement recommendations to ensure the shed meets statutory safety standards before issuing the final Chartered Engineer certificate.'
    },
    {
      q: 'What deliverables are included in a Solar Structural Stability report?',
      a: 'Our report package includes: (1) 3D STAAD.Pro finite element stress and deflection model, (2) Member utilization check calculations, (3) Foundation / anchoring pull-out calculations, (4) Stamped and sealed Chartered Engineer Stability Certificate on official letterhead (Format-B / CEIG prescribed format), and (5) Corporate Member of IEI registration verification with digital QR code.'
    },
    {
      q: 'How quickly can we obtain a Solar Structural Stability Certificate for our project?',
      a: 'For commercial and industrial rooftop projects up to 500 kWp, preliminary reports and certificates are typically delivered within 24 to 48 hours following document review and site inspection. Large ground-mount solar parks (5 MW to 100+ MW) are completed in 3 to 5 business days.'
    },
    {
      q: 'Is your Chartered Engineer certification accepted by all DISCOMs, CEIG, and Nationalized Banks?',
      a: 'Yes. As a Chartered Engineer (India) MIE corporate member of the Institution of Engineers (India) and an alumnus of IIT Roorkee, Er. KS’s statutory certifications and structural audit reports are recognized and accepted by all state DISCOMs across India, CEIG departments, MNRE empanelment portals, and major financial institutions.'
    }
  ];

  return (
    <div className="solar-structural-page" style={{ background: '#edf2f7', minHeight: '100vh', color: '#0f172a' }}>
      
      {/* ── BREADCRUMB & HERO SECTION ── */}
      <section style={{ 
        position: 'relative', 
        padding: '110px 20px 48px', 
        background: '#ffffff',
        borderBottom: '1px solid #cbd5e1'
      }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            fontSize: '0.84rem', 
            color: '#64748b', 
            marginBottom: '20px' 
          }}>
            <button 
              onClick={onNavigateHome} 
              style={{ background: 'transparent', border: 'none', color: '#0284c7', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0, fontWeight: 600 }}
            >
              <Home size={14} /> Home
            </button>
            <span style={{ color: '#94a3b8' }}>/</span>
            <span style={{ color: '#64748b' }}>Technical Services</span>
            <span style={{ color: '#94a3b8' }}>/</span>
            <span style={{ color: '#0284c7', fontWeight: 600 }}>Solar Structural Analysis</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 12px',
            borderRadius: '6px',
            background: 'rgba(2, 132, 199, 0.08)',
            border: '1px solid rgba(2, 132, 199, 0.25)',
            color: '#0284c7',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '16px'
          }} data-aos="fade-up">
            <Sun size={15} color="#d97706" />
            <span>Chartered Engineer (Civil &amp; Structural) • IIT Roorkee Alumni</span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2rem, 4.2vw, 3.2rem)', 
            fontWeight: 800, 
            lineHeight: 1.2, 
            color: '#0f172a', 
            letterSpacing: '-0.02em', 
            maxWidth: '1000px', 
            marginBottom: '16px' 
          }} data-aos="fade-up" data-aos-delay="80">
            Solar Structural Stability Analysis &amp; <span style={{ color: '#0284c7' }}>MMS Wind Load Certification</span>
          </h1>

          <p style={{ 
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', 
            color: '#334155', 
            maxWidth: '880px', 
            lineHeight: 1.65, 
            marginBottom: '28px',
            fontWeight: 500
          }} data-aos="fade-up" data-aos-delay="140">
            Comprehensive building structural audits, 3D STAAD.Pro finite element analysis, wind load feasibility (IS 875 Part 3), module mounting structure (MMS) design verification, and statutory DISCOM / CEIG stability certificates issued with Chartered Engineer seal across India.
          </p>

          {/* Key Metrics Chips */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '32px'
          }} data-aos="fade-up" data-aos-delay="180">
            {[
              { icon: <ShieldCheck size={16} color="#059669" />, label: 'IS 875 (Part 3) & IS 800 Compliant' },
              { icon: <Clock size={16} color="#d97706" />, label: '24–48h Statutory Stability Certificates' },
              { icon: <FileCheck size={16} color="#0284c7" />, label: 'DISCOM & CEIG Approved Format-B' },
              { icon: <Award size={16} color="#7c3aed" />, label: '500+ MW Solar Projects Vetted' }
            ].map((chip, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '0.84rem',
                  color: '#0f172a',
                  fontWeight: 600,
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
              >
                {chip.icon}
                <span>{chip.label}</span>
              </div>
            ))}
          </div>

          {/* Quick CTA Actions */}
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '12px', 
            alignItems: 'center'
          }} data-aos="fade-up" data-aos-delay="220">
            <button 
              onClick={() => onOpenQuote('Solar Structural Stability Analysis', { service: 'Solar Structural Stability Analysis' })}
              className="btn btn-primary"
              style={{ 
                padding: '13px 26px', 
                fontSize: '0.94rem', 
                fontWeight: 700, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px',
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(245, 130, 32, 0.28)'
              }}
            >
              <span>Request Structural Stability Audit</span>
              <ArrowRight size={16} />
            </button>

            <a 
              href="tel:+919158658885" 
              style={{ 
                padding: '12px 22px', 
                fontSize: '0.92rem', 
                fontWeight: 600, 
                background: '#ffffff', 
                border: '1.5px solid #cbd5e1', 
                color: '#0f172a',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              <Phone size={15} color="#0284c7" />
              <span>Call: +91 91586 58885</span>
            </a>

            <a 
              href="https://wa.me/919158658885?text=Hello%20Er.%20KS,%20I%20need%20a%20Solar%20Structural%20Stability%20Certificate%20and%20MMS%20Analysis." 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '12px 22px', 
                fontSize: '0.92rem', 
                fontWeight: 600, 
                background: '#25D366', 
                border: 'none', 
                color: '#ffffff',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
            >
              <WhatsAppIcon size={16} color="#ffffff" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── CORE ENGINEERING SERVICES TABS ── */}
      <section style={{ padding: '56px 20px', background: '#edf2f7' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }} data-aos="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Gauge size={14} />
              <span>ENGINEERING DIVISIONS &amp; SCOPE OF WORK</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
              Specialized Solar Structural Engineering
            </h2>
            <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
              End-to-end structural vetting, simulation, and statutory sign-offs for rooftop solar, utility-scale solar parks, and C&amp;I installations.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {services.map((srv, idx) => (
              <div 
                key={srv.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ padding: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                      {srv.icon}
                    </div>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 700, 
                      padding: '4px 10px', 
                      borderRadius: '6px', 
                      background: 'rgba(2, 132, 199, 0.08)', 
                      color: '#0284c7', 
                      border: '1px solid rgba(2, 132, 199, 0.2)' 
                    }}>
                      {srv.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', lineHeight: 1.35 }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.90rem', color: '#334155', lineHeight: 1.6, marginBottom: '16px' }}>
                    {srv.shortDesc}
                  </p>

                  <div style={{ marginBottom: '18px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Deliverables:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {srv.deliverables.map((item, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#1e293b' }}>
                          <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontStyle: 'italic' }}>
                    Ideal for: {srv.idealFor}
                  </span>
                  <button
                    onClick={() => onOpenQuote(srv.title, { service: srv.title })}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'transparent',
                      border: 'none',
                      color: '#d97706',
                      fontWeight: 700,
                      fontSize: '0.86rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>Request Audit</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ENGINEERING CODES & COMPLIANCE STANDARDS ── */}
      <section style={{ padding: '56px 20px', background: '#ffffff', borderTop: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }} data-aos="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <ShieldCheck size={14} />
              <span>BUREAU OF INDIAN STANDARDS (BIS) COMPLIANCE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
              Design Codes &amp; Structural Norms Followed
            </h2>
            <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
              Every solar stability assessment, wind load simulation, and MMS design conforms to statutory Indian Standards.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '20px'
          }}>
            {standards.map((std, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '20px 22px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)'
                }}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div style={{ 
                  display: 'inline-block',
                  fontSize: '0.76rem', 
                  fontWeight: 800, 
                  color: '#0284c7', 
                  background: '#e0f2fe', 
                  padding: '3px 8px', 
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}>
                  {std.code}
                </div>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.4 }}>
                  {std.title}
                </h4>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  {std.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4-STEP CERTIFICATION WORKFLOW ── */}
      <section style={{ padding: '56px 20px', background: '#edf2f7', borderBottom: '1px solid #cbd5e1' }}>
        <div className="container" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 36px' }} data-aos="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#d97706', fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Sparkles size={14} />
              <span>RAPID 24–48 HOUR CERTIFICATION WORKFLOW</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
              How We Certify Your Solar Structure
            </h2>
            <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
              Rigorous, transparent, and streamlined engineering process ensuring zero DISCOM or CEIG rejections.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '18px'
          }}>
            {[
              {
                step: '01',
                title: 'Data & Drawing Intake',
                desc: 'Client provides architectural roof layout, existing structural framing drawings, solar PV panel layout, and proposed MMS configuration.'
              },
              {
                step: '02',
                title: 'STAAD.Pro 3D Simulation',
                desc: 'Creation of 3D mathematical space frame model. Simulation of dead load, live load, and wind suction up to 180 km/h wind gusts under IS 875 (Part 3).'
              },
              {
                step: '03',
                title: 'On-Site Physical Audit',
                desc: 'Verification of roof slab health, concrete compressive strength via rebound hammer, purlin gauge thickness, and anchor bolt holding capacity.'
              },
              {
                step: '04',
                title: 'Stamped Certificate',
                desc: 'Issuance of the formal Chartered Engineer Stability Certificate (Format-B) with official IEI seal, membership number, and digital QR verification.'
              }
            ].map((st, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '24px 20px',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  position: 'relative'
                }}
                data-aos="fade-up"
                data-aos-delay={sIdx * 80}
              >
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#e2e8f0',
                  lineHeight: 1,
                  marginBottom: '12px'
                }}>
                  {st.step}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INTERACTIVE QUOTATION & AUDIT INQUIRY ── */}
      <section style={{ padding: '60px 20px', background: '#ffffff', borderBottom: '1px solid #cbd5e1' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          
          <div style={{
            background: '#edf2f7',
            border: '1px solid #cbd5e1',
            borderRadius: '14px',
            padding: 'clamp(24px, 4vw, 40px)',
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)'
          }} data-aos="fade-up">
            
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                <FileText size={14} />
                <span>DIRECT TECHNICAL DESK</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 8px 0' }}>
                Request Solar Structural Stability Audit &amp; Quote
              </h3>
              <p style={{ color: '#334155', fontSize: '0.94rem', margin: 0 }}>
                Speak directly with IIT Roorkee Chartered Engineers. Get instant fee estimates and document checklists for DISCOM &amp; CEIG submissions.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: '10px',
                padding: '28px',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={44} color="#059669" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#065f46', marginBottom: '8px' }}>
                  Inquiry Received Successfully!
                </h4>
                <p style={{ color: '#047857', fontSize: '0.92rem', maxWidth: '540px', margin: '0 auto 16px' }}>
                  Our Principal Engineer Er. KS will review your project details and contact you within 2 business hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-outline"
                  style={{ borderColor: '#059669', color: '#059669', padding: '8px 18px', fontSize: '0.86rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Your Full Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Phone / Mobile Number *
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Plant Capacity (kWp / MWp) *
                    </label>
                    <select
                      name="plantCapacity"
                      value={formData.plantCapacity}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="Up to 50 kWp (Residential / Small C&I)">Up to 50 kWp (Residential / Small C&amp;I)</option>
                      <option value="50 kWp to 250 kWp (Commercial / Industrial)">50 kWp to 250 kWp (Commercial / Industrial)</option>
                      <option value="250 kWp to 1 MWp (Factory / Warehouse)">250 kWp to 1 MWp (Factory / Warehouse)</option>
                      <option value="1 MWp to 10 MWp (Large C&I / Open Access)">1 MWp to 10 MWp (Large C&amp;I / Open Access)</option>
                      <option value="10+ MWp (Utility Scale Solar Farm)">10+ MWp (Utility Scale Solar Farm)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Installation Structure Type *
                    </label>
                    <select
                      name="installationType"
                      value={formData.installationType}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    >
                      <option value="RCC Flat Roof (Ballasted / Chemical Anchor)">RCC Flat Roof (Ballasted / Chemical Anchor)</option>
                      <option value="Industrial Tin Shed / PEB Trapezoidal Roof">Industrial Tin Shed / PEB Trapezoidal Roof</option>
                      <option value="Ground Mount Fixed Tilt Structure">Ground Mount Fixed Tilt Structure</option>
                      <option value="Single Axis Tracker System">Single Axis Tracker System</option>
                      <option value="Solar Carport / Elevated Structure">Solar Carport / Elevated Structure</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Site City / Location
                    </label>
                    <input 
                      type="text"
                      name="city"
                      placeholder="e.g. Jaipur, Neemrana, Pune, Ahmedabad"
                      value={formData.city}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="contact@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        fontSize: '0.92rem',
                        color: '#0f172a',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Project Notes &amp; Specific Requirements
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Provide details such as DISCOM authority (e.g. JVVNL), shed age, wind zone, or urgent submission deadlines..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      background: '#ffffff',
                      fontSize: '0.92rem',
                      color: '#0f172a',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '14px 28px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    background: '#F58220',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 14px rgba(245, 130, 32, 0.3)',
                    marginTop: '8px'
                  }}
                >
                  <Send size={16} />
                  <span>Submit Structural Audit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (100% RELEVANT & ACCURATE) ── */}
      <section style={{ padding: '60px 20px', background: '#edf2f7', borderBottom: '1px solid #cbd5e1' }}>
        <div className="container" style={{ maxWidth: '880px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }} data-aos="fade-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <FileText size={15} />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#334155', fontSize: '0.98rem', margin: 0, fontWeight: 500 }}>
              Clear answers regarding solar structural stability certification, DISCOM rules, wind load testing, and turnaround times.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)'
                  }}
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      background: isOpen ? '#f8fafc' : '#ffffff',
                      border: 'none',
                      color: '#0f172a',
                      textAlign: 'left',
                      fontSize: '1.0rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <span style={{ color: isOpen ? '#0284c7' : '#0f172a' }}>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="#0284c7" /> : <ChevronDown size={18} color="#64748b" />}
                  </button>

                  {isOpen && (
                    <div style={{ 
                      padding: '0 22px 20px', 
                      background: '#f8fafc', 
                      color: '#334155', 
                      fontSize: '0.90rem', 
                      lineHeight: 1.65, 
                      borderTop: '1px solid #e2e8f0', 
                      paddingTop: '12px' 
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── FOUNDER TRUST & SIGN-OFF BANNER ── */}
      <section style={{ padding: '44px 20px', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '980px', margin: '0 auto' }}>
          
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid #cbd5e1',
            borderRadius: '12px',
            padding: '24px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)'
          }} data-aos="fade-up">
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img
                src="/mukesh-singh-founder.webp"
                alt="Er. KS - IIT Roorkee"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #0284c7',
                  boxShadow: '0 4px 12px rgba(2, 132, 199, 0.2)',
                  flexShrink: 0
                }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Er. KS
                  </h3>
                  <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: '#dbeafe', color: '#1e40af', fontWeight: 700 }}>
                    B.Tech (IIT Roorkee)
                  </span>
                  <span style={{ fontSize: '0.72rem', padding: '2px 8px', borderRadius: '4px', background: '#fef3c7', color: '#92400e', fontWeight: 700 }}>
                    CEng (India) MIE
                  </span>
                </div>
                <p style={{ margin: '4px 0 0 0', fontSize: '0.84rem', color: '#475569' }}>
                  Chartered Engineer (Institution of Engineers India) · Registered Valuer IBBI · Empanelled with Nationalized Banks &amp; DISCOMs.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="tel:+919158658885"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  background: '#ffffff',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '8px',
                  color: '#0f172a',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Phone size={14} color="#0284c7" />
                <span>+91 91586 58885</span>
              </a>

              <button
                onClick={() => onOpenQuote('Solar Structural Stability Consultation', { service: 'Solar Structural Stability Consultation' })}
                style={{
                  padding: '10px 20px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Book Site Inspection
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
