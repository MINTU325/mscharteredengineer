import React, { useState } from 'react';
import { 
  ArrowLeft, Sparkles, Building2, Eye, X, PhoneCall, 
  MessageSquare, Layers, ShieldCheck, ChevronRight, Maximize2 
} from 'lucide-react';

// Dynamic import of user images from assets if present
const importedImages = import.meta.glob('../assets/architectural/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
const userUploadedList = Object.entries(importedImages).map(([path, url], index) => {
  const fileName = path.split('/').pop().replace(/\.[^/.]+$/, '');
  return {
    id: `custom-${index}`,
    title: fileName.replace(/[-_]/g, ' ').toUpperCase(),
    category: 'Custom Projects',
    image: url,
    desc: 'Custom architectural engineering and fabrication showcase.'
  };
});

const DEFAULT_PROJECTS = [
  {
    id: 'arch-1',
    title: 'Architectural Glass & Aluminium Facade',
    category: 'Commercial & Elevation',
    image: '/fabrication/architectural-glass-railing-facade.jpg',
    desc: 'Frameless glass railings, structural glazing, spider glazing & ACP facade cladding for commercial headquarters.',
    tags: ['Glass Facade', 'Curtain Wall', 'Modern Architecture']
  },
  {
    id: 'arch-2',
    title: 'Factory Tin Shed & PEB Warehouse',
    category: 'Industrial & PEB',
    image: '/fabrication/factory-tin-shed-peb-warehouse.jpg',
    desc: 'Heavy-span pre-engineered building (PEB) design, curved roofing sheets, turbo ventilation & structural engineering.',
    tags: ['PEB Building', 'Industrial Shed', 'Structural Design']
  },
  {
    id: 'arch-3',
    title: 'Heavy Structural Steel Tower & Platforms',
    category: 'Steel & Structural',
    image: '/fabrication/structural-steel-tower-erection.jpg',
    desc: 'Structural steel framing, mezzanine flooring, heavy girder installations, and high-altitude service gantries.',
    tags: ['Heavy Steel', 'Mezzanine', 'Girders']
  },
  {
    id: 'arch-4',
    title: 'Precision Robotic Welding & Automation Bay',
    category: 'Industrial & PEB',
    image: '/corridors/auto_welding_robots.jpg',
    desc: 'Turnkey industrial bay layout architecture with automated safety zones, robotic gantry support & crane clearance.',
    tags: ['Robotic Bay', 'Plant Layout', 'Factory Automation']
  },
  {
    id: 'arch-5',
    title: 'Industrial Chimney & Flue Gas Ducting System',
    category: 'Steel & Structural',
    image: '/fabrication/industrial-chimney-stack-fabrication.jpg',
    desc: 'Self-supporting industrial stack fabrication, aerodynamic vortex strakes, guyed wire anchor foundations & CPCB compliance.',
    tags: ['CPCB Stack', 'Flue Ducting', 'Heavy Fab']
  },
  {
    id: 'arch-6',
    title: 'Commercial HQ & Infrastructure Corridor',
    category: 'Commercial & Elevation',
    image: '/corridors/jaipur_hq_hero.jpg',
    desc: 'Integrated architectural design, municipal master plan compliance, structural stability audit & 2D/3D drafting.',
    tags: ['RIICO Approved', 'Master Plan', 'Commercial Hub']
  }
];

export default function ArchitecturalProjects({ onOpenQuote, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const allProjects = [...userUploadedList, ...DEFAULT_PROJECTS];
  const categories = ['All', 'Industrial & PEB', 'Commercial & Elevation', 'Steel & Structural', ...(userUploadedList.length > 0 ? ['Custom Projects'] : [])];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div style={{
      background: 'radial-gradient(circle at 10% 8%, rgba(217, 119, 6, 0.05) 0%, transparent 40%), linear-gradient(180deg, #F4F0E8 0%, #FAF8F5 45%, #F4F0E8 100%)',
      minHeight: '100vh',
      paddingTop: '24px',
      paddingBottom: '48px'
    }}>
      <div className="container">
        
        {/* Top Breadcrumb & Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px 0',
          marginBottom: '20px',
          borderBottom: '1px solid #E8E2D8'
        }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #E8E2D8',
              borderRadius: '9999px',
              padding: '8px 18px',
              color: '#0f172a',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={16} />
            <span>&larr; Back to Home</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748b' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#64748b', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Architectural Projects Catalog</span>
          </div>
        </div>

        {/* Hero Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0a192f 0%, #0d2847 60%, #1e3a5f 100%)',
          borderRadius: '24px',
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)',
          color: '#ffffff',
          marginBottom: '32px',
          boxShadow: '0 20px 40px -15px rgba(10, 25, 47, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '880px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '9999px',
              color: '#fbbf24',
              fontSize: '0.80rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '16px'
            }}>
              <Sparkles size={14} />
              <span>ARCHITECTURAL, STRUCTURAL &amp; INDUSTRIAL DESIGNS</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '16px',
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}>
              Architectural &amp; <span style={{ color: '#fbbf24' }}>Structural Projects Gallery</span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.96rem, 1.8vw, 1.12rem)',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '24px',
              maxWidth: '820px'
            }}>
              Explore our comprehensive portfolio of architectural layouts, pre-engineered buildings (PEB), structural steel erections, modern glass &amp; ACP facade elevations, and industrial manufacturing plants certified by <strong>IIT Roorkee alumni Chartered Engineers</strong>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                onClick={() => onOpenQuote && onOpenQuote('Architectural & Structural Project')}
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#040914',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)'
                }}
              >
                <MessageSquare size={16} />
                <span>Get Quotation for Your Project</span>
              </button>

              <a
                href="tel:+919158658885"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <PhoneCall size={16} color="#38bdf8" />
                <span>Direct Engineer Call: +91 91586 58885</span>
              </a>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '32px'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: activeCategory === cat ? '1px solid #1e40af' : '1px solid #E2E8F0',
                background: activeCategory === cat ? '#1e40af' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#334155',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(30, 64, 175, 0.25)' : '0 1px 3px rgba(0,0,0,0.04)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid #E8E2D8',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '240px', 
                  overflow: 'hidden', 
                  cursor: 'pointer',
                  background: '#040914' 
                }}
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1.0)'; }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(0,0,0,0.65)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Maximize2 size={13} />
                  <span>Preview</span>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#fbbf24',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}>
                  {project.category}
                </div>
              </div>

              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.4 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px', flexGrow: 1 }}>
                  {project.desc}
                </p>

                {project.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {project.tags.map((t) => (
                      <span key={t} style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <button
                    onClick={() => setSelectedImage(project)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      background: '#ffffff',
                      color: '#1e293b',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <Eye size={14} />
                    <span>View Photo</span>
                  </button>

                  <button
                    onClick={() => onOpenQuote && onOpenQuote(project.title)}
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: 'none',
                      background: '#1e40af',
                      color: '#ffffff',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    <span>Enquire</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(4, 9, 20, 0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              background: '#0a192f',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{
                width: '100%',
                maxHeight: '65vh',
                objectFit: 'contain',
                background: '#040914',
                display: 'block'
              }}
            />

            <div style={{ padding: '24px', color: '#ffffff' }}>
              <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                {selectedImage.category}
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>
                {selectedImage.title}
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedImage.desc}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button
                  onClick={() => setSelectedImage(null)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    background: 'transparent',
                    color: '#e2e8f0',
                    cursor: 'pointer',
                    fontSize: '0.88rem'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    if (onOpenQuote) onOpenQuote(title);
                  }}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#040914',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.88rem'
                  }}
                >
                  Request Consultation For This Work
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
