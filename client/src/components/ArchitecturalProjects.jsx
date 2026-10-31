import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, HardHat, FileText, CheckCircle2, ShieldCheck, 
  MapPin, Eye, X, ChevronLeft, ChevronRight, PhoneCall, 
  Sparkles, Filter, Award, Briefcase, Calendar, Download, ArrowLeft, Check
} from 'lucide-react';

export default function ArchitecturalProjects({ onOpenQuote, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('architectural'); // 'architectural' | 'engineering' | 'all'
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Architectural Projects Gallery & Engineering Audits | KS Chartered Engineers';
  }, []);

  // Architectural, Structural & Turnkey Civil Projects (With real WebP photos)
  const architecturalProjects = useMemo(() => [
    {
      id: 'arch-1',
      title: 'Heritage Arched Portico & Jali Colonnade Facade',
      subtitle: 'Traditional Rajasthan Sandstone Style Archway with Decorative CNC Jali Work',
      category: 'architectural',
      categoryLabel: 'Heritage & Facade Architecture',
      client: 'Commercial & Hospitality Landmark',
      location: 'Jaipur Road Corridor, Rajasthan',
      specs: 'Hand-Finished Red Sandstone Aesthetic, Precision Steel Sub-frame & Structural Masonry',
      image: '/projects/architectural/heritage-facade-jali.webp',
      description: 'Architectural planning, structural stability calculations for cantilevered arches, turnkey execution oversight, and custom parametric jali pattern detailing.'
    },
    {
      id: 'arch-2',
      title: 'Grand Neo-Classical Luxury Villa & Palace Residence',
      subtitle: 'Multi-Storey RCC Framed Estate with Corinthian Portico & Arched Classical Openings',
      category: 'architectural',
      categoryLabel: 'Luxury Residential Architecture',
      client: 'Private High-Net-Worth Client',
      location: 'Jaipur NCR, Rajasthan',
      specs: 'Seismic Zone III Compliant RCC Frame, High-Ceiling Vaults & Architectural Moulding',
      image: '/projects/architectural/luxury-classical-villa.webp',
      description: 'Comprehensive architectural drawings, structural engineering load calculation (STAAD.Pro), beam-column grid layout, site supervision, and structural condition audit.'
    },
    {
      id: 'arch-3',
      title: 'Modern Rooftop Steel & Glass Conservatory Pavilion',
      subtitle: 'Architectural Glass House Lounge with Precision Engineered Steel Framework',
      category: 'architectural',
      categoryLabel: 'Structural Steel & Glass Architecture',
      client: 'Exclusive Penthouse Suite',
      location: 'Urban Sky Lounge, Rajasthan',
      specs: 'Hollow Structural Steel (HSS) Skeleton, High-Performance Toughened DGU Glass & Retractable Louvers',
      image: '/projects/architectural/glass-pavilion-terrace.webp',
      description: 'Architectural concept and structural load analysis for rooftop wind velocity resistance. Waterproofing detailing, thermal barrier integration, and panoramic 360-degree glass envelope.'
    },
    {
      id: 'arch-4',
      title: 'Contemporary Minimalist Villa - Front Elevation & Screen',
      subtitle: 'Geometric Concrete Volumes with Precision CNC Perforated Security Boundary',
      category: 'architectural',
      categoryLabel: 'Contemporary Residential Design',
      client: 'Modern Urban Bungalow Project',
      location: 'Prime Residential Enclave, Jaipur',
      specs: 'Exposed Textured Concrete, Custom Parametric Metal Screening & Integrated Xeriscape Landscape',
      image: '/projects/architectural/modern-minimalist-residence-front.webp',
      description: 'Modern aesthetic elevation design integrating natural privacy screens, daylight optimization, rainwater harvesting coordination, and turnkey project management.'
    },
    {
      id: 'arch-5',
      title: 'Sustainable Villa - Terracotta Jali & Solar Shading Fins',
      subtitle: 'Bioclimatic Residential Design featuring Terracotta Brick Lattice & Vertical Fins',
      category: 'architectural',
      categoryLabel: 'Sustainable & Bioclimatic Architecture',
      client: 'Eco-Luxury Residence',
      location: 'Jaipur Eco-City Project',
      specs: 'Terracotta Screened Terrace Cube, Aerodynamic Vertical Fins & Cross-Ventilation Atrium',
      image: '/projects/architectural/modern-minimalist-residence-side.webp',
      description: 'Passive climate responsive design utilizing traditional jali principles for thermal cooling. Delivered complete working drawings, MEP coordination, and site quality control.'
    }
  ], []);

  // Engineering Plant & Machinery Audit Data (From Chartered Engineer Certificate - No Photos)
  const machineryAuditData = useMemo(() => [
    { sr: 1, name: 'JK F5 Sewing Machine - Set 1', cost: '₹5,50,100', supplier: 'Galaxy International', invoice: 'GI/2025-26/4786', date: '07 Jan 2026' },
    { sr: 2, name: 'JK F5 Sewing Machine - Set 2', cost: '₹3,26,918', supplier: 'Galaxy International', invoice: 'GI/2025-26/4835', date: '10 Jan 2026' },
    { sr: 3, name: 'CAD Machine (Pattern & Grading)', cost: '₹4,02,500', supplier: 'Studio Next Technology', invoice: 'SNT-25-26/2206', date: '23 Mar 2026' },
    { sr: 4, name: 'Machine Center Table & Pipe Table', cost: '₹3,76,250', supplier: 'Anand Furnishers Pvt. Ltd.', invoice: 'AFPL/2026/012', date: '03 Apr 2026' },
    { sr: 5, name: 'Zoje 7100 High-Speed & Overlock Machine', cost: '₹3,21,500', supplier: 'Stitch Apparels', invoice: 'STI/25-26/3', date: '04 Apr 2026' },
    { sr: 6, name: 'Washing, Drying & Hydro-Extractor Machine', cost: '₹6,80,000', supplier: 'Pragati Enterprises', invoice: 'PE/26-27/6', date: '06 Apr 2026' },
    { sr: 7, name: 'Steam Press Generator (Vacuum)', cost: '₹1,31,000', supplier: 'Galaxy International', invoice: 'GI/2026-27/126', date: '10 Apr 2026' },
    { sr: 8, name: 'Zig-Zag Machine (Ralson)', cost: '₹56,500', supplier: 'Galaxy International', invoice: 'GI/2026-27/229', date: '16 Apr 2026' },
    { sr: 9, name: 'Industrial Air Compressor', cost: '₹10,200', supplier: 'Muskan Machinery Centre', invoice: '15', date: '18 Apr 2026' },
    { sr: 10, name: '6-Thread Overlock Machine with DD Motor', cost: '₹73,000', supplier: 'Guruji Sales Corporation', invoice: 'GSC/26-27/30', date: '20 Apr 2026' },
    { sr: 11, name: 'Brother Model Sewing Machine Line (40 Nos.)', cost: '₹18,70,000', supplier: 'Unique Engineers', invoice: 'UE/26-27/18', date: '22 Apr 2026' },
    { sr: 12, name: 'Overlock/Flatlock Machine M932-355', cost: '₹4,83,000', supplier: 'Unique Engineers', invoice: 'UE/26-27/20', date: '25 Apr 2026' },
    { sr: 13, name: 'Double-Needle Split Bar Machine', cost: '₹99,500', supplier: 'Unique Engineers', invoice: 'UE/26-27/23', date: '30 Apr 2026' },
    { sr: 14, name: 'FF-450 Fusing Machine (Future Fusing)', cost: '₹1,70,000', supplier: 'Pragati Enterprises', invoice: 'PE/26-27/63', date: '30 Apr 2026' },
    { sr: 15, name: 'JK Edge Cutter Sewing Machine', cost: '₹1,41,500', supplier: 'Galaxy International', invoice: 'GI/2026-27/533', date: '02 May 2026' },
    { sr: 16, name: 'Machine Centre Table - Additional', cost: '₹1,35,000', supplier: 'Anand Furnishers Pvt. Ltd.', invoice: 'AFPL/2026/156', date: '26 May 2026' },
    { sr: 17, name: 'Computerised Embroidery Machine - Unit 1', cost: '₹4,35,000', supplier: 'Baba Textiles Machinery Pvt. Ltd.', invoice: 'BTMDL/26-27/1165', date: '27 Jun 2026' },
    { sr: 18, name: 'Computerised Embroidery Machine - Unit 2', cost: '₹19,15,000', supplier: 'Baba Textiles Machinery Pvt. Ltd.', invoice: 'BTMDL/26-27/1700', date: '30 Jul 2026' },
    { sr: 19, name: 'B-10 Auto-Trimmer Industrial Machine', cost: '₹4,72,500', supplier: 'Shyam International', invoice: '303', date: '07 Aug 2026' },
    { sr: 20, name: 'ZJ-9513 Industrial Sewing Machine', cost: '₹6,37,700', supplier: 'Galaxy International', invoice: 'GI/2026-27/2227', date: '10 Aug 2026' },
  ], []);

  const totalCertifiedValue = '₹92,87,168';

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        color: '#ffffff',
        padding: '70px 20px 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb / Back button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', fontSize: '0.9rem' }}>
            <button
              onClick={() => onNavigateHome ? onNavigateHome() : (window.location.href = '/')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#e2e8f0',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; }}
            >
              <ArrowLeft size={16} /> Home
            </button>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>/</span>
            <span style={{ color: '#93c5fd', fontWeight: 500 }}>Portfolio &amp; Project Gallery</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(147, 197, 253, 0.3)', padding: '6px 16px', borderRadius: '50px', marginBottom: '16px' }}>
            <Sparkles size={16} color="#fbbf24" />
            <span style={{ fontSize: '0.85rem', color: '#e0f2fe', fontWeight: 600, letterSpacing: '0.5px' }}>
              OFFICIAL WORK SHOWCASE • IIT ROORKEE CHARTERED ENGINEERS
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '18px',
            maxWidth: '900px'
          }}>
            Architectural Projects &amp; <span style={{ color: '#60a5fa' }}>Engineering Audits</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '850px',
            marginBottom: '32px'
          }}>
            Explore our real-world execution across <strong>Architectural &amp; Structural Projects</strong> (Luxury Villas, Rooftop Conservatories, Heritage Jali Facades) and <strong>Chartered Engineer Plant &amp; Machinery Valuation Audits</strong> led by Er. Mukesh Singh, CEng (India), MIE (IIT Roorkee).
          </p>

          {/* Quick Metrics Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            maxWidth: '950px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>₹92.87 Lakhs</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Single Certified Plant Machinery Audit</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4ade80' }}>100% Verified</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>On-Site Inspection &amp; Bank Approved</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fbbf24' }}>Heritage to Modern</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Villas, Conservatories &amp; Jali Facades</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)', padding: '16px 20px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#c084fc' }}>IEI Certified</div>
              <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Reg No. 1831229 • IIT Roorkee</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section style={{ maxWidth: '1200px', margin: '30px auto 10px', padding: '0 20px' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '16px'
        }}>
          {/* Tab buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('architectural')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeTab === 'architectural' ? '#2563eb' : '#ffffff',
                color: activeTab === 'architectural' ? '#ffffff' : '#475569',
                boxShadow: activeTab === 'architectural' ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
                borderBottom: activeTab === 'architectural' ? 'none' : '1px solid #cbd5e1'
              }}
            >
              <Building2 size={16} /> Architectural Projects Gallery ({architecturalProjects.length})
            </button>

            <button
              onClick={() => setActiveTab('engineering')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeTab === 'engineering' ? '#059669' : '#ffffff',
                color: activeTab === 'engineering' ? '#ffffff' : '#475569',
                boxShadow: activeTab === 'engineering' ? '0 4px 12px rgba(5, 150, 105, 0.25)' : 'none',
                borderBottom: activeTab === 'engineering' ? 'none' : '1px solid #cbd5e1'
              }}
            >
              <HardHat size={16} /> Engineering Work &amp; Machinery Certification (Audit Sheet)
            </button>

            <button
              onClick={() => setActiveTab('all')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                borderRadius: '10px',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: activeTab === 'all' ? '#0f172a' : '#ffffff',
                color: activeTab === 'all' ? '#ffffff' : '#475569',
                boxShadow: activeTab === 'all' ? '0 4px 12px rgba(15, 23, 42, 0.25)' : 'none',
                borderBottom: activeTab === 'all' ? 'none' : '1px solid #cbd5e1'
              }}
            >
              <Filter size={16} /> All Sections
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Verified IIT Roorkee Chartered Engineering &amp; Architectural Portfolio
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL GALLERY (Shown on 'architectural' and 'all' tabs) */}
      {(activeTab === 'architectural' || activeTab === 'all') && (
        <section style={{ maxWidth: '1200px', margin: '20px auto 40px', padding: '0 20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '1px' }}>
              REAL SITE EXECUTION SHOWCASE
            </span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
              Architectural &amp; Structural Project Gallery
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: '6px 0 0' }}>
              High-resolution photo portfolio of luxury villas, heritage jali facades, rooftop glass conservatories, and modern residences.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px'
          }}>
            {architecturalProjects.map((project) => (
              <div
                key={project.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.09)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.04)';
                }}
                onClick={() => setLightboxItem(project)}
              >
                {/* Image Container with WebP and Lazy Loading */}
                <div style={{ position: 'relative', height: '250px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />

                  {/* Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
                  }}>
                    {project.categoryLabel}
                  </div>

                  {/* Zoom hint overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    color: '#ffffff',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    pointerEvents: 'none'
                  }}>
                    <Eye size={14} /> Tap to expand
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 14px', lineHeight: 1.4 }}>
                    {project.subtitle}
                  </p>

                  <div style={{ fontSize: '0.82rem', color: '#334155', background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '14px' }}>
                    <div style={{ marginBottom: '4px' }}>
                      <strong style={{ color: '#0f172a' }}>Location:</strong> {project.location}
                    </div>
                    <div>
                      <strong style={{ color: '#0f172a' }}>Specifications:</strong> {project.specs}
                    </div>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: '0 0 16px', flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxItem(project);
                      }}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        background: '#ffffff',
                        color: '#0f172a',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      <Eye size={15} /> View Image
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenQuote) {
                          onOpenQuote(`Enquiry for ${project.title}`);
                        } else {
                          window.location.href = 'tel:+919158658885';
                        }
                      }}
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: 'none',
                        background: '#1e3a8a',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      <PhoneCall size={14} /> Consult
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. ENGINEERING WORK: CHARTERED ENGINEER CERTIFICATION CASE STUDY & AUDIT DATA (NO PHOTOS) */}
      {(activeTab === 'engineering' || activeTab === 'all') && (
        <section style={{ maxWidth: '1200px', margin: '20px auto 60px', padding: '0 20px' }}>
          
          {/* Certificate Overview Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
            borderRadius: '18px',
            border: '2px solid #bbf7d0',
            padding: '28px 32px',
            boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.1)',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#059669', color: '#ffffff', padding: '12px', borderRadius: '12px' }}>
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#059669' }}>
                    1. OFFICIAL ENGINEERING WORK &bull; CHARTERED ENGINEER (MECHANICAL) CERTIFICATE
                  </span>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
                    Plant &amp; Technology Machinery Valuation Audit: M/s Shree Salasar Realtech Pvt. Ltd.
                  </h2>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote ? onOpenQuote('Chartered Engineer Plant & Machinery Valuation Certificate') : (window.location.href = 'tel:+919158658885')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(5, 150, 105, 0.25)'
                }}
              >
                <FileText size={16} /> Request Machinery Audit
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px',
              fontSize: '0.9rem',
              color: '#334155',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #d1fae5',
              marginBottom: '20px'
            }}>
              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Unit &amp; Plant Location:</strong>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                  <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Plot No. H1-74, Industrial Area, Sitapura, Sanganer, Jaipur, Rajasthan - 302022</span>
                </div>
              </div>

              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Scope of Inspection:</strong>
                <span>Physical site visit, verification of technology/machinery specifications against invoices, running condition certification, and Annexure 2.4 sign-off.</span>
              </div>

              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Total Certified Plant Value:</strong>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#047857' }}>{totalCertifiedValue}</span>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Excluding Taxes, Freight &amp; Insurance</div>
              </div>

              <div>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Lead Chartered Engineer:</strong>
                <span>Er. Mukesh Singh, CEng (India), MIE (IIT Roorkee)<br />Membership No.: 1831229</span>
              </div>
            </div>

            {/* Certification Clause Quote */}
            <div style={{ background: '#ecfdf5', padding: '14px 18px', borderRadius: '10px', borderLeft: '4px solid #059669', fontSize: '0.85rem', color: '#065f46', lineHeight: 1.6 }}>
              <em>"I Er. Mukesh Singh visited the site and verified the specifications of the technology/machinery acquired for the project with details in the invoices. Based on this, I certify that the machinery brought to site are new, match invoice specifications, and are established in running condition."</em>
            </div>
          </div>

          {/* Complete Verified Machinery Audit Table (No Photos) */}
          <div style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: '#f8fafc' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>
                  Certified Plant &amp; Machinery Audit Schedule (20 Items)
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>
                  Detailed itemized verification schedule certified under Institutional &amp; Banking Norms.
                </p>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#dcfce7', color: '#166534', padding: '6px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700 }}>
                <Check size={16} /> All 20 Units In Running Condition
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f1f5f9', color: '#334155', borderBottom: '2px solid #e2e8f0' }}>
                    <th style={{ padding: '12px 16px', fontWeight: 700, width: '60px' }}>Sr.</th>
                    <th style={{ padding: '12px 16px', fontWeight: 700 }}>Name of Machinery / Component</th>
                    <th style={{ padding: '12px 16px', fontWeight: 700, width: '130px' }}>Basic Cost (₹)</th>
                    <th style={{ padding: '12px 16px', fontWeight: 700 }}>Supplier / Manufacturer</th>
                    <th style={{ padding: '12px 16px', fontWeight: 700, width: '150px' }}>Invoice Ref</th>
                    <th style={{ padding: '12px 16px', fontWeight: 700, width: '120px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {machineryAuditData.map((item, idx) => (
                    <tr 
                      key={item.sr}
                      style={{ 
                        borderBottom: '1px solid #f1f5f9',
                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa'
                      }}
                    >
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#64748b' }}>{item.sr}</td>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#0f172a' }}>{item.name}</td>
                      <td style={{ padding: '12px 16px', fontWeight: 700, color: '#059669' }}>{item.cost}</td>
                      <td style={{ padding: '12px 16px', color: '#475569' }}>{item.supplier}</td>
                      <td style={{ padding: '12px 16px', color: '#64748b', fontSize: '0.82rem' }}>{item.invoice}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          backgroundColor: '#ecfdf5',
                          color: '#047857',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 600
                        }}>
                          <CheckCircle2 size={13} /> Verified
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#f0fdf4', borderTop: '2px solid #86efac' }}>
                    <td colSpan={2} style={{ padding: '14px 16px', fontWeight: 800, color: '#0f172a', textAlign: 'right' }}>
                      TOTAL CERTIFIED BASIC COST:
                    </td>
                    <td style={{ padding: '14px 16px', fontWeight: 800, fontSize: '1.05rem', color: '#047857' }}>
                      {totalCertifiedValue}
                    </td>
                    <td colSpan={3} style={{ padding: '14px 16px', fontSize: '0.82rem', color: '#166534', fontWeight: 600 }}>
                      Excludes Taxes, Freight &amp; Insurance • Full Running Condition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. CALL TO ACTION STRIP */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '14px' }}>
            Need Chartered Engineer Certification or Architectural Consultancy?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
            We provide physical plant machinery valuation certificates, IndAS 16 audits, EPC turnkey structural designs, and architectural site supervision across India.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote ? onOpenQuote('Chartered Engineer Certification Consultation') : (window.location.href = 'tel:+919158658885')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                padding: '12px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)'
              }}
            >
              <FileText size={18} /> Request Project Proposal
            </button>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#059669',
                color: '#ffffff',
                textDecoration: 'none',
                padding: '12px 28px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(5, 150, 105, 0.35)'
              }}
            >
              <PhoneCall size={18} /> Call +91 91586 58885
            </a>
          </div>
        </div>
      </section>

      {/* 6. LIGHTBOX MODAL (For Architectural Project Photos) */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              position: 'relative'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(15, 23, 42, 0.8)',
                color: '#ffffff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* High-Res Image Display */}
            <div style={{ backgroundColor: '#020617', textAlign: 'center', maxHeight: '520px', overflow: 'hidden' }}>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                style={{
                  maxHeight: '520px',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'inline-block'
                }}
              />
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
                <span style={{
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {lightboxItem.categoryLabel}
                </span>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
                {lightboxItem.title}
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: '0 0 16px' }}>
                {lightboxItem.subtitle}
              </p>

              <div style={{ background: '#f8fafc', padding: '14px 18px', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '18px', fontSize: '0.88rem' }}>
                <div style={{ marginBottom: '6px' }}>
                  <strong>Client / Landmark:</strong> {lightboxItem.client}
                </div>
                <div style={{ marginBottom: '6px' }}>
                  <strong>Location:</strong> {lightboxItem.location}
                </div>
                <div>
                  <strong>Specifications:</strong> {lightboxItem.specs}
                </div>
              </div>

              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.6, marginBottom: '22px' }}>
                {lightboxItem.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setLightboxItem(null)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#f1f5f9',
                    color: '#334155',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = lightboxItem.title;
                    setLightboxItem(null);
                    if (onOpenQuote) {
                      onOpenQuote(`Enquiry for ${title}`);
                    } else {
                      window.location.href = 'tel:+919158658885';
                    }
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#2563eb',
                    color: '#ffffff',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <PhoneCall size={16} /> Consult on this Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
