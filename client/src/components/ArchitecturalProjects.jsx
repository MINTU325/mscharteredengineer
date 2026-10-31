import React, { useState, useEffect, useMemo } from 'react';
import { 
  Eye, X, PhoneCall, Sparkles, ArrowLeft
} from 'lucide-react';

export default function ArchitecturalProjects({ onOpenQuote, onNavigateHome }) {
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Architectural Projects Gallery | KS Chartered Engineers';
  }, []);

  // Architectural, Structural & Turnkey Execution Projects
  const architecturalProjects = useMemo(() => [
    {
      id: 'arch-1',
      title: 'Heritage Arched Portico & Jali Colonnade Facade',
      image: '/projects/architectural/heritage-facade-jali.webp'
    },
    {
      id: 'arch-2',
      title: 'Grand Neo-Classical Luxury Villa & Palace Residence',
      image: '/projects/architectural/luxury-classical-villa.webp'
    },
    {
      id: 'arch-3',
      title: 'Modern Rooftop Steel & Glass Conservatory Pavilion',
      image: '/projects/architectural/glass-pavilion-terrace.webp'
    },
    {
      id: 'arch-4',
      title: 'Contemporary Minimalist Villa - Front Elevation & Screen',
      image: '/projects/architectural/modern-minimalist-residence-front.webp'
    },
    {
      id: 'arch-5',
      title: 'Sustainable Villa - Terracotta Jali & Solar Shading Fins',
      image: '/projects/architectural/modern-minimalist-residence-side.webp'
    }
  ], []);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        color: '#ffffff',
        padding: '50px 20px 45px',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', fontSize: '0.9rem' }}>
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
            <span style={{ color: '#93c5fd', fontWeight: 500 }}>Architectural Projects Gallery</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.2)', border: '1px solid rgba(147, 197, 253, 0.3)', padding: '6px 16px', borderRadius: '50px', marginBottom: '14px' }}>
            <Sparkles size={16} color="#fbbf24" />
            <span style={{ fontSize: '0.82rem', color: '#e0f2fe', fontWeight: 600, letterSpacing: '0.5px' }}>
              REAL SITE EXECUTION SHOWCASE • IIT ROORKEE CHARTERED ENGINEERS
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '10px',
            maxWidth: '900px'
          }}>
            Architectural &amp; Structural <span style={{ color: '#60a5fa' }}>Projects Gallery</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            color: '#cbd5e1',
            lineHeight: 1.5,
            maxWidth: '750px',
            margin: 0
          }}>
            Real-world photographic execution across luxury residential villas, heritage jali facades, rooftop glass conservatories, and modern architecture.
          </p>
        </div>
      </section>

      {/* 2. PHOTO GALLERY GRID (Clean Images Only) */}
      <section style={{ maxWidth: '1200px', margin: '40px auto 60px', padding: '0 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {architecturalProjects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#0f172a',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                height: '320px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid #e2e8f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.16)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.08)';
              }}
              onClick={() => setLightboxItem(project)}
            >
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
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              />

              {/* Tap to expand hint overlay */}
              <div style={{
                position: 'absolute',
                bottom: '14px',
                right: '14px',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(4px)',
                color: '#ffffff',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                pointerEvents: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>
                <Eye size={15} /> Tap to expand
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALL TO ACTION STRIP */}
      <section style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        padding: '50px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '14px' }}>
            Need Architectural or Structural Consultancy?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px' }}>
            We provide EPC turnkey structural designs, architectural planning, and engineering site supervision across India.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote ? onOpenQuote('Architectural & Structural Project Consultation') : (window.location.href = 'tel:+919158658885')}
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
              Request Project Proposal
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

      {/* 4. LIGHTBOX MODAL (Pure Fullscreen Photo View) */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.94)',
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
              background: '#020617',
              borderRadius: '16px',
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '92vh',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
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
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#dc2626'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)'; }}
            >
              <X size={22} />
            </button>

            {/* High-Res Image Display */}
            <div style={{ textAlign: 'center', maxHeight: '82vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617' }}>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                style={{
                  maxHeight: '82vh',
                  width: 'auto',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* Simple Bottom Action Bar */}
            <div style={{
              padding: '12px 20px',
              backgroundColor: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                KS Chartered Engineers • Architectural Showcase
              </span>
              <button
                onClick={() => {
                  setLightboxItem(null);
                  if (onOpenQuote) {
                    onOpenQuote('Architectural Project Consultation');
                  } else {
                    window.location.href = 'tel:+919158658885';
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#2563eb',
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
      )}

    </div>
  );
}
