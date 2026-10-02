import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Award, ArrowUp, BookOpen, HelpCircle } from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040914',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '64px',
      paddingBottom: '32px',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '32px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="gear-icon-wrapper" style={{ background: 'transparent', border: 'none', width: '40px', height: '40px' }}>
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="blueGearFoot" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#1e40af" />
                    </linearGradient>
                  </defs>
                  <g className="spin-ring" style={{ transformOrigin: '50px 50px' }}>
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#blueGearFoot)" strokeWidth="7" strokeDasharray="14 9" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="url(#blueGearFoot)" strokeWidth="3" opacity="0.9" />
                  </g>
                  <circle cx="50" cy="50" r="26" fill="#040914" stroke="#ffffff" strokeWidth="3" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                  <text x="50" y="60.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" fill="#ffffff" textAnchor="middle" letterSpacing="1">MS</text>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
                  MS CHARTERED <span style={{ color: '#38bdf8' }}>ENGINEERS</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Valuers & Technical Consultancy
                </div>
              </div>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
              &ldquo;Engineering Valuation Consultancy for a Stronger Tomorrow.&rdquo; From assessment to growth: delivering certified Chartered Engineer excellence.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              borderRadius: 'var(--radius-sm)',
              color: '#fbbf24',
              fontSize: '0.78rem'
            }}>
              <Award size={14} />
              <span>CEng (India) MIE — Institution of Engineers (India)</span>
            </div>

            <div style={{ marginTop: '12px' }}>
              <a
                href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 14px',
                  background: 'rgba(10, 102, 194, 0.15)',
                  border: '1px solid rgba(10, 102, 194, 0.4)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label="MS Chartered Engineers on LinkedIn"
              >
                <LinkedinIcon size={15} color="#38bdf8" />
                <span>LinkedIn Company Profile</span>
              </a>
            </div>

            <div style={{ marginTop: '10px' }}>
              <a
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 14px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fbbf24',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Knowledge Hub and Engineering Blog"
              >
                <BookOpen size={15} color="#fbbf24" />
                <span>Technical Knowledge Hub &amp; Blog</span>
              </a>
            </div>

            <div style={{ marginTop: '10px' }}>
              <a
                href="/faq"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#38bdf8',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <HelpCircle size={15} color="#38bdf8" />
                <span>Statutory FAQs &amp; Help Desk &rarr;</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Practice Areas
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li><a href="/valuation" style={{ color: '#cbd5e1' }}>Assets Valuation Services (Banking, IndAS 16, M&amp;A)</a></li>
              <li><a href="/chartered-engineer" style={{ color: '#cbd5e1' }}>DGFT Advance Authorisation &amp; CE Certificates</a></li>
              <li><a href="/safety-energy-audits" style={{ color: '#cbd5e1' }}>Chartered Electrical Safety Engineer (CESE) Audits</a></li>
              <li><a href="/safety-energy-audits" style={{ color: '#cbd5e1' }}>BEE Certified Energy Audits &amp; Conservation</a></li>
              <li><a href="/safety-energy-audits" style={{ color: '#cbd5e1' }}>Factories &amp; Boilers Competency Certification</a></li>
              <li><a href="/fssai" style={{ color: '#cbd5e1' }}>FSSAI Compliance — Central &amp; State Licensing</a></li>
              <li><a href="/advisory" style={{ color: '#cbd5e1' }}>Asset Componentization &amp; Advisory Services</a></li>
              <li style={{ paddingTop: '6px', borderTop: '1px dashed rgba(255, 255, 255, 0.1)' }}>
                <a href="/blog" style={{ color: '#38bdf8', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>📚 Regulatory Insights &amp; Blog Articles</span>
                  <span>&rarr;</span>
                </a>
              </li>
              <li style={{ paddingTop: '2px' }}>
                <a href="/faq" style={{ color: '#fbbf24', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <span>❓ Frequently Asked Questions (FAQ)</span>
                  <span>&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Credentials */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Statutory Recognition
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>Chartered Engineer (India) — IEI</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#f97316" />
                <span>Chartered Electrical Safety Engineer (CESE)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#f59e0b" />
                <span>Certified Energy Manager — BEE</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                <span>Competent Person — Factories &amp; Boilers</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>NSCI / NSAT Authorized Safety Auditor</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#38bdf8" />
                <span>DGFT, Customs, Banks &amp; IBC/NCLT</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Jaipur Headquarters
            </h4>
            
            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}
            >
              <meta itemProp="name" content="MS Chartered Engineers (IIT Roorkee)" />
              <meta itemProp="description" content="MS Chartered Engineers (IIT Roorkee). Expert in Plant & Asset Valuation, Jaipur, Rajasthan - 302019" />
              <meta itemProp="url" content="https://www.mscharteredengineer.com/" />
              
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.96rem' }}>
                  MS Chartered Engineers <span style={{ color: '#f59e0b', fontSize: '0.84rem', fontWeight: 600 }}>(IIT Roorkee)</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.80rem', marginTop: '2px', fontWeight: 500 }}>
                  Expert in Plant &amp; Asset Valuation
                </div>
              </div>

              <div
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
              >
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <a
                    href="https://maps.app.goo.gl/3ZJmQFkrpLZEU3Ao6"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View MS Chartered Engineers on Google Maps"
                    style={{ color: '#cbd5e1', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
                  >
                    <span itemProp="addressLocality">Jaipur</span>,{' '}
                    <span itemProp="addressRegion">Rajasthan</span> -{' '}
                    <span itemProp="postalCode">302019</span>,{' '}
                    <span itemProp="addressCountry">India</span>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#f59e0b', marginTop: '3px' }}>
                      📍 View on Google Maps &rarr;
                    </span>
                  </a>
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="tel:+919158658885" itemProp="telephone" style={{ color: '#ffffff', fontWeight: 600 }}>+91 91586 58885</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="mailto:ms.charteredengineer@gmail.com" itemProp="email" style={{ color: '#cbd5e1' }}>ms.charteredengineer@gmail.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <LinkedinIcon size={18} color="#0077b5" style={{ flexShrink: 0 }} />
                <a 
                  href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  itemProp="sameAs" 
                  style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.84rem' }}
                >
                  Official LinkedIn Page &rarr;
                </a>
              </div>

              <button 
                onClick={() => onOpenQuote()}
                className="btn btn-gold"
                style={{ padding: '8px 16px', fontSize: '0.82rem', marginTop: '6px' }}
                aria-label="Book a Chartered Engineer Visit"
              >
                Book Chartered Engineer Visit
              </button>
            </address>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.08)', marginBottom: '20px' }} />

        {/* Quick Internal SEO Navigation */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px 16px',
          marginBottom: '20px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <a href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a>
          <span>&bull;</span>
          <a href="/chartered-engineer" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>Chartered Engineer in Jaipur</a>
          <span>&bull;</span>
          <a href="/valuation" style={{ color: '#94a3b8', textDecoration: 'none' }}>Plant &amp; Machinery Valuation</a>
          <span>&bull;</span>
          <a href="/safety-energy-audits" style={{ color: '#94a3b8', textDecoration: 'none' }}>CESE Electrical Safety Audits</a>
          <span>&bull;</span>
          <a href="/fssai" style={{ color: '#94a3b8', textDecoration: 'none' }}>FSSAI Compliance</a>
          <span>&bull;</span>
          <a href="/blog" style={{ color: '#94a3b8', textDecoration: 'none' }}>Regulatory Insights &amp; Blog</a>
          <span>&bull;</span>
          <a href="/faq" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 700 }}>Frequently Asked Questions (FAQ)</a>
          <span>&bull;</span>
          <a href="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Jaipur Office</a>
        </div>

        {/* Disclaimer & Bottom Line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong>MS Chartered Engineers, Valuers & Technical Consultancy Services</strong>. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Pan India Practice &bull; Decades of Professional Excellence</span>
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer'
              }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
