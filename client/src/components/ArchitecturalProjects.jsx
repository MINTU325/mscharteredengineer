import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, HardHat, FileText, CheckCircle2, ShieldCheck, 
  MapPin, Eye, X, ChevronLeft, ChevronRight, PhoneCall, 
  Sparkles, Filter, Award, Briefcase, Calendar, Download, ArrowLeft
} from 'lucide-react';

export default function ArchitecturalProjects({ onOpenQuote, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'engineering' | 'architectural'
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Project Portfolio & Engineering Gallery | KS Chartered Engineers';
  }, []);

  // Engineering Machinery & Industrial Certification Projects (from Salasar Realtech & CEng records)
  const engineeringProjects = useMemo(() => [
    {
      id: 'eng-1',
      title: 'Brother High-Speed Stitching Line',
      subtitle: '40 Nos Industrial Sewing Machine Setup Inspection & Capacity Audit',
      category: 'engineering',
      categoryLabel: 'Machinery Certification',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹18,70,000',
      specs: 'Brother Industrial Direct-Drive Sewing Automation Line',
      image: '/projects/engineering/image2.webp',
      description: 'Physical site verification of new machinery serial numbers, invoice reconciliation, running condition test, and mechanical capability certification for institutional banking compliance.'
    },
    {
      id: 'eng-2',
      title: 'Precision CAD Pattern & Cutting Station',
      subtitle: 'Automated Fabric Digitizing & Precision Grading Machine Suite',
      category: 'engineering',
      categoryLabel: 'CAD & Tech Verification',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹4,02,500',
      specs: 'Studio Next CAD Digitizer & CNC Pattern Cutter System',
      image: '/projects/engineering/image3.webp',
      description: 'Verified technical specifications against OEM dispatch bills. Certified accurate dimensional calibration and software controller sync for export-ready apparel manufacturing.'
    },
    {
      id: 'eng-3',
      title: 'Industrial Vacuum Finishing & Steam Generator',
      subtitle: 'Ergonomic Vacuum De-humidified Garment Pressing Tables',
      category: 'engineering',
      categoryLabel: 'Utility & Plant Setup',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹1,31,000',
      specs: 'Integrated Vacuum Table with Automated Steam Generation Boiler',
      image: '/projects/engineering/image4.webp',
      description: 'CEng mechanical safety inspection, electrical earthing verification, pressure test validation, and operating condition verification for high-pressure boiler equipment.'
    },
    {
      id: 'eng-4',
      title: '6-Head Computerized Multi-Color Embroidery Unit',
      subtitle: 'Heavy Industrial Multi-Needle Automated Embroidery Plant',
      category: 'engineering',
      categoryLabel: 'Industrial Machinery',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹19,15,000',
      specs: 'Baba Textiles Heavy Duty High-RPM Computerized Embroidery System',
      image: '/projects/engineering/image5.webp',
      description: 'Full-line commissioning assessment, frame vibration tolerance testing, motor load audit, and independent Chartered Engineer Annexure 2.4 valuation certification.'
    },
    {
      id: 'eng-5',
      title: 'JACK Lockstitch High-Speed Sewing Assembly',
      subtitle: 'Energy-Efficient Direct Drive Automated Lockstitch Units',
      category: 'engineering',
      categoryLabel: 'Assembly Line',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹5,50,100',
      specs: 'JACK F5 Direct Drive Auto-Lubricating Industrial Seam Stitcher',
      image: '/projects/engineering/image6.webp',
      description: 'Batch verification of serial plates against vendor invoices, energy efficiency verification, and line synchronization audit for plant commissioning subsidy claim.'
    },
    {
      id: 'eng-6',
      title: 'Fabric Sorting & Pattern Matching Inspection Table',
      subtitle: 'Heavy-Duty Anti-Static Flatness Inspection Table Suite',
      category: 'engineering',
      categoryLabel: 'Quality Control Bench',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹3,76,250',
      specs: 'Modular Steel Frame with Laminated Anti-Friction Top Surface',
      image: '/projects/engineering/image7.webp',
      description: 'Structural integrity check of heavy steel assembly frames, load-bearing assessment, and workflow alignment verification with statutory project engineering report.'
    },
    {
      id: 'eng-7',
      title: 'JACK E3 Ultra-Fast Overlock Machine Fleet',
      subtitle: 'Multi-Thread High-Speed Safety Seaming & Overlock Units',
      category: 'engineering',
      categoryLabel: 'High-Speed Stitching',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹4,83,000',
      specs: '6-Thread Overlock/Flatlock Dual Differential Feed Automation',
      image: '/projects/engineering/image8.webp',
      description: 'On-site trial run inspection, RPM calibration, operator safety shield compliance, and Chartered Engineer verification under Ministry capital investment norms.'
    },
    {
      id: 'eng-8',
      title: 'FF-450 Continuous Belt Thermal Fusing Machine',
      subtitle: 'Microprocessor Controlled High-Pressure Interlining Fusing Line',
      category: 'engineering',
      categoryLabel: 'Thermal Processing',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹1,70,000',
      specs: 'Future Fusing Continuous Heat-Resistant Teflon Belt System',
      image: '/projects/engineering/image9.webp',
      description: 'Thermal heat profile inspection, heating coil resistance check, roller pressure uniformity testing, and certification for industrial manufacturing operation.'
    },
    {
      id: 'eng-9',
      title: 'Bruce High-Speed Auto-Trimmer Lockstitch',
      subtitle: 'Precision Thread Trimming Direct Drive Sewing Workstations',
      category: 'engineering',
      categoryLabel: 'Automated Workstation',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹4,72,500',
      specs: 'Automated Foot Lifter & Reverse Feed Electronic Controller',
      image: '/projects/engineering/image10.webp',
      description: 'Comprehensive physical verification of machines in active running state, invoice audit, and certification by Chartered Engineer (IEI Membership 1831229).'
    },
    {
      id: 'eng-10',
      title: 'Precision Craft Hand Embroidery Station',
      subtitle: 'Artisanal Embroidery Stand with Vibration-Damped Table Mount',
      category: 'engineering',
      categoryLabel: 'Artisan Equipment',
      client: 'M/s Shree Salasar Realtech Pvt. Ltd.',
      location: 'Sitapura Industrial Area, Jaipur, Rajasthan',
      value: '₹1,41,500',
      specs: 'Heavy Cast Metal Needle Head with Adjustable Speed Controller',
      image: '/projects/engineering/image11.webp',
      description: 'Verification of specialized artisan apparel machinery as part of the total ₹92.87 Lakh plant asset verification report for bank term lending.'
    }
  ], []);

  // Architectural, Structural & Turnkey Civil Projects
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

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (activeTab === 'engineering') return engineeringProjects;
    if (activeTab === 'architectural') return architecturalProjects;
    return [...architecturalProjects, ...engineeringProjects];
  }, [activeTab, architecturalProjects, engineeringProjects]);

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
            Engineering &amp; <span style={{ color: '#60a5fa' }}>Architectural Projects</span> Gallery
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            maxWidth: '850px',
            marginBottom: '32px'
          }}>
            Explore our real-world execution across <strong>Industrial Plant &amp; Machinery Valuation (Chartered Engineer Certification)</strong> and <strong>Architectural, Structural &amp; Turnkey Projects</strong> led by Er. Mukesh Singh, CEng (India), MIE (IIT Roorkee).
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

      {/* 2. SPOTLIGHT CASE STUDY: SHREE SALASAR REALTECH PVT LTD */}
      <section style={{ padding: '40px 20px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
          borderRadius: '18px',
          border: '2px solid #bbf7d0',
          padding: '28px 32px',
          boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.1)',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#059669', color: '#ffffff', padding: '10px', borderRadius: '12px' }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, color: '#059669' }}>
                  FEATURED CHARTERED ENGINEER CERTIFICATE CASE STUDY (ANNEXURE 2.4)
                </span>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '4px 0 0' }}>
                  Plant &amp; Technology Machinery Valuation: M/s Shree Salasar Realtech Pvt. Ltd.
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
              <FileText size={16} /> Request CE Certificate
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '18px',
            fontSize: '0.9rem',
            color: '#334155',
            background: 'rgba(255, 255, 255, 0.85)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid #d1fae5'
          }}>
            <div>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Unit &amp; Site Location:</strong>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Plot No. H1-74, Industrial Area, Sitapura, Sanganer, Jaipur, Rajasthan - 302022</span>
              </div>
            </div>

            <div>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Scope of Chartered Engineer Audit:</strong>
              <span>Physical site inspection, invoice reconciliation, unique serial number verification, capacity benchmarking &amp; running condition certification.</span>
            </div>

            <div>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Certified Plant Machinery Value:</strong>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#047857' }}>₹92,87,168 (₹92.87 Lakhs)</span>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Excluding Taxes, Freight &amp; Insurance</div>
            </div>

            <div>
              <strong style={{ color: '#0f172a', display: 'block', marginBottom: '4px' }}>Certifying Authority:</strong>
              <span>Er. Mukesh Singh, CEng (India), MIE, B.Tech Mech (IIT Roorkee) • Membership No. 1831229</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER TABS */}
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
                backgroundColor: activeTab === 'all' ? '#1e3a8a' : '#ffffff',
                color: activeTab === 'all' ? '#ffffff' : '#475569',
                boxShadow: activeTab === 'all' ? '0 4px 12px rgba(30, 58, 138, 0.25)' : 'none',
                borderBottom: activeTab === 'all' ? 'none' : '1px solid #cbd5e1'
              }}
            >
              <Filter size={16} /> All Portfolio ({architecturalProjects.length + engineeringProjects.length})
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
              <HardHat size={16} /> 1. Engineering &amp; Machinery Work ({engineeringProjects.length})
            </button>

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
              <Building2 size={16} /> 2. Architectural &amp; Structural Work ({architecturalProjects.length})
            </button>
          </div>

          <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
            Showing <strong>{filteredProjects.length}</strong> real verified execution projects
          </div>
        </div>
      </section>

      {/* 4. GALLERY GRID */}
      <section style={{ maxWidth: '1200px', margin: '20px auto 60px', padding: '0 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {filteredProjects.map((project) => {
            const isEng = project.category === 'engineering';
            return (
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
                <div style={{ position: 'relative', height: '240px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
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
                    backgroundColor: isEng ? '#059669' : '#2563eb',
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

                  {/* Value / Location pill */}
                  {project.value && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#34d399',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      border: '1px solid rgba(52, 211, 153, 0.3)'
                    }}>
                      {project.value}
                    </div>
                  )}

                  {/* Zoom hint overlay on hover */}
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
                      <strong style={{ color: '#0f172a' }}>Specs:</strong> {project.specs}
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
                        background: isEng ? '#059669' : '#1e3a8a',
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
            );
          })}
        </div>
      </section>

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

      {/* 6. LIGHTBOX MODAL */}
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
                  backgroundColor: lightboxItem.category === 'engineering' ? '#059669' : '#2563eb',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {lightboxItem.categoryLabel}
                </span>

                {lightboxItem.value && (
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669' }}>
                    Certified Valuation: {lightboxItem.value}
                  </span>
                )}
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
