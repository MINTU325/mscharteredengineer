import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Award, 
  ArrowUp, 
  BookOpen, 
  Building2, 
  Landmark, 
  Factory, 
  Cpu, 
  Zap, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.84rem',
    lineHeight: 1.5,
    transition: 'color 0.2s ease',
    display: 'block',
    padding: '2px 0',
  };

  const hoverLink = (e, enter) => {
    e.currentTarget.style.color = enter ? '#e2e8f0' : '#94a3b8';
  };

  return (
    <footer style={{
      background: '#040914',
      borderTop: '1px solid rgba(255, 255, 255, 0.07)',
      paddingTop: '56px',
      paddingBottom: '28px',
      color: '#94a3b8',
      fontSize: '0.9rem'
    }}>
      <div className="container">

        {/* ─── Main 4-Column Grid ─── */}
        <div
          className="footer-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr 1fr 230px',
            gap: '40px',
            marginBottom: '44px',
            alignItems: 'start'
          }}
        >

          {/* ── Col 1: Brand ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
                <text x="50" y="60.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" fill="#ffffff" textAnchor="middle" letterSpacing="1">MS</text>
              </svg>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                  MS CHARTERED <span style={{ color: '#38bdf8' }}>ENGINEERS</span>
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Valuers & Technical Consultancy
                </div>
              </div>
            </div>

            <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '14px' }}>
              Certified Chartered Engineer &amp; Registered Valuer practice led by Er. Mukesh Singh (IIT Roorkee, MIE).
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '5px 10px',
              background: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: '6px',
              color: '#fbbf24',
              fontSize: '0.75rem',
              marginBottom: '10px'
            }}>
              <Award size={13} />
              <span>CEng (India) MIE — IEI</span>
            </div>

            <a
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.25)',
                borderRadius: '6px',
                color: '#fbbf24',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
              aria-label="Knowledge Hub and Engineering Blog"
            >
              <BookOpen size={13} />
              <span>Knowledge Hub &amp; Blog</span>
            </a>
          </div>

          {/* ── Col 2: Practice Areas (2-column sub-grid) ── */}
          <div>
            <h4 style={{ fontSize: '0.75rem', color: '#ffffff', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Our Practice Areas
            </h4>
            <div className="footer-services-subgrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
              {[
                { href: '/property-valuation', label: 'Property & Land Valuation' },
                { href: '/bank-valuation', label: 'Bank & Mortgage Valuation' },
                { href: '/tax-valuation', label: 'Capital Gains Tax (50C)' },
                { href: '/chartered-engineer', label: 'Chartered Engineer & DGFT' },
                { href: '/machinery-valuation', label: 'Plant & Machinery Valuation' },
                { href: '/ibc-valuation', label: 'IBC 2016 & NCLT Valuation' },
                { href: '/safety-energy-audits', label: 'CESE & Energy Audits' },
                { href: '/fssai', label: 'FSSAI Compliance' },
                { href: '/autocad-drafting', label: 'AutoCAD 2D Drafting' },
                { href: '/advisory', label: 'IndAS 16 Advisory' },
                { href: '/calculator', label: 'Valuation Calculator' },
                { href: '/solar-checker', label: 'Solar CEIG Checker' },
                { href: '/tools', label: 'All Tools' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  style={linkStyle}
                  onMouseEnter={(e) => hoverLink(e, true)}
                  onMouseLeave={(e) => hoverLink(e, false)}
                >
                  {label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px dashed rgba(255,255,255,0.07)', display: 'flex', gap: '16px' }}>
              <a href="/services" style={{ color: '#fbbf24', fontSize: '0.80rem', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                All 13 Services <ArrowRight size={12} />
              </a>
              <a href="/faq" style={{ color: '#38bdf8', fontSize: '0.80rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                FAQ <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* ── Col 3: Credentials + Quick Links ── */}
          <div>
            <h4 style={{ fontSize: '0.75rem', color: '#ffffff', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Statutory Recognition
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '18px' }}>
              {[
                { label: 'Chartered Engineer (India) — IEI', color: '#38bdf8', href: '/credentials' },
                { label: 'Chartered Electrical Safety Engineer (CESE)', color: '#f97316', href: '/safety-energy-audits' },
                { label: 'Certified Energy Manager — BEE', color: '#f59e0b', href: '/safety-energy-audits' },
                { label: 'Competent Person — Factories & Boilers', color: '#10b981', href: '/safety-energy-audits' },
                { label: 'NSCI / NSAT Safety Auditor', color: '#38bdf8', href: '/safety-energy-audits' },
                { label: 'DGFT, Customs, Banks & IBC/NCLT', color: '#38bdf8', href: '/credentials' },
              ].map(({ label, color, href }) => (
                <a key={label} href={href} style={{ ...linkStyle, display: 'flex', alignItems: 'flex-start', gap: '7px' }}
                  onMouseEnter={(e) => hoverLink(e, true)}
                  onMouseLeave={(e) => hoverLink(e, false)}
                >
                  <ShieldCheck size={14} color={color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
            <a href="/founder" style={{ color: '#fbbf24', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.80rem', fontWeight: 600, paddingTop: '6px', borderTop: '1px dashed rgba(255,255,255,0.07)', width: '100%' }}>
              <Award size={14} color="#fbbf24" />
              Core Team — IIT Roorkee Leadership →
            </a>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h4 style={{ fontSize: '0.75rem', color: '#ffffff', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              Jaipur Headquarters
            </h4>

            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              style={{ fontStyle: 'normal', display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '0.84rem' }}
            >
              <meta itemProp="name" content="MS Chartered Engineers (IIT Roorkee)" />
              <meta itemProp="url" content="https://www.mscharteredengineer.com/" />

              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>
                  MS Chartered Engineers
                  <span style={{ color: '#f59e0b', fontSize: '0.78rem', fontWeight: 600, marginLeft: '5px' }}>(IIT Roorkee)</span>
                </div>
                <div style={{ color: '#64748b', fontSize: '0.75rem', marginTop: '2px' }}>Expert in Plant & Asset Valuation</div>
              </div>

              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={15} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <a
                    href="https://maps.app.goo.gl/3ZJmQFkrpLZEU3Ao6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.82rem', lineHeight: 1.5 }}
                  >
                    <span itemProp="addressLocality">Jaipur</span>,{' '}
                    <span itemProp="addressRegion">Rajasthan</span> -{' '}
                    <span itemProp="postalCode">302019</span>,{' '}
                    <span itemProp="addressCountry">India</span>
                    <span style={{ display: 'block', fontSize: '0.72rem', color: '#f59e0b', marginTop: '2px' }}>
                      📍 View on Google Maps →
                    </span>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#10b981" style={{ flexShrink: 0 }} />
                <a href="tel:+919158658885" itemProp="telephone" style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  +91 91586 58885
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                <a href="mailto:ms.charteredengineer@gmail.com" itemProp="email" style={{ color: '#94a3b8', fontSize: '0.80rem', textDecoration: 'none', wordBreak: 'break-all' }}>
                  ms.charteredengineer@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LinkedinIcon size={15} color="#0077b5" style={{ flexShrink: 0 }} />
                <a
                  href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  itemProp="sameAs"
                  style={{ color: '#38bdf8', fontWeight: 600, fontSize: '0.80rem', textDecoration: 'none' }}
                >
                  Official LinkedIn Page →
                </a>
              </div>

              <button
                onClick={() => onOpenQuote()}
                className="btn btn-gold"
                style={{ padding: '9px 16px', fontSize: '0.82rem', marginTop: '4px', width: '100%' }}
                aria-label="Book a Chartered Engineer Visit"
              >
                Book Chartered Engineer Visit
              </button>
            </address>
          </div>
        </div>

        {/* ─── Pan-India Corridors Hub ─── */}
        <div className="pan-india-corridors-hub">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
            paddingBottom: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
              <span className="corridor-live-beacon">
                <span className="beacon-ping"></span>
                <span className="beacon-dot"></span>
              </span>
              <span style={{ color: '#ffffff', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Pan-India Chartered Engineer Practice Corridors
              </span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              padding: '3px 10px', borderRadius: '9999px',
              background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)',
              color: '#fbbf24', fontSize: '0.70rem', fontWeight: 600
            }}>
              <Zap size={11} color="#fbbf24" />
              <span>24–48h Site Inspection Across India</span>
            </div>
          </div>

          <div className="corridor-grid">
            {[
              { href: '/chartered-engineer-delhi', title: 'Chartered Engineer Delhi-NCR', locations: 'Delhi · Gurugram · Noida · Faridabad', icon: <Landmark size={14} />, hq: false },
              { href: '/chartered-engineer-mumbai', title: 'Chartered Engineer Mumbai & Pune', locations: 'Mumbai · Pune · JNPT · Chakan MIDC', icon: <Factory size={14} />, hq: false },
              { href: '/chartered-engineer-ahmedabad', title: 'Chartered Engineer Gujarat', locations: 'Ahmedabad · Surat · Vadodara · Mundra', icon: <Building2 size={14} />, hq: false },
              { href: '/chartered-engineer-jaipur', title: 'Chartered Engineer Jaipur', locations: 'Jaipur · Bhiwadi · Neemrana · Kota', icon: <Award size={14} />, hq: true },
              { href: '/chartered-engineer-bangalore', title: 'Chartered Engineer South Hub', locations: 'Bengaluru · Chennai · Hyderabad', icon: <Cpu size={14} />, hq: false },
              { href: '/chartered-engineer-indore', title: 'Chartered Engineer Central India', locations: 'Indore · Pithampur · Bhopal · Raipur', icon: <Zap size={14} />, hq: false },
            ].map(({ href, title, locations, icon, hq }) => (
              <a key={href} href={href} className={`corridor-card-link${hq ? ' hq-featured-card' : ''}`} title={title}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, flex: 1 }}>
                  <div className="card-icon-box">{icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ color: '#ffffff', fontSize: '0.82rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {title}
                      {hq && <span style={{ fontSize: '0.58rem', padding: '1px 5px', borderRadius: '4px', background: 'rgba(245,158,11,0.2)', color: '#fbbf24', fontWeight: 800 }}>HQ</span>}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {locations}
                    </div>
                  </div>
                </div>
                <ArrowRight size={12} color={hq ? '#fbbf24' : '#38bdf8'} className="arrow-icon" />
              </a>
            ))}
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.07)', margin: '20px 0' }} />

        {/* ─── SEO Footer Nav ─── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          gap: '6px 12px', marginBottom: '18px', fontSize: '0.75rem', color: '#475569'
        }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/services', label: '13 Services', highlight: 'gold' },
            { href: '/purpose-selector', label: 'Purpose Selector', highlight: 'gold' },
            { href: '/who-we-serve', label: 'Who We Serve', highlight: 'blue' },
            { href: '/process', label: '8-Step Process' },
            { href: '/property-valuation', label: 'Property Valuation' },
            { href: '/bank-valuation', label: 'Bank Valuation' },
            { href: '/tax-valuation', label: 'Capital Gains 50C' },
            { href: '/chartered-engineer', label: 'Chartered Engineer', highlight: 'blue' },
            { href: '/chartered-engineer-delhi', label: 'Delhi-NCR' },
            { href: '/chartered-engineer-mumbai', label: 'Mumbai-Pune' },
            { href: '/chartered-engineer-ahmedabad', label: 'Gujarat' },
            { href: '/chartered-engineer-bangalore', label: 'Bengaluru' },
            { href: '/chartered-engineer-indore', label: 'Indore' },
            { href: '/machinery-valuation', label: 'Machinery Valuation' },
            { href: '/safety-energy-audits', label: 'CESE Safety' },
            { href: '/autocad-drafting', label: 'AutoCAD Drafting', highlight: 'blue' },
            { href: '/fssai', label: 'FSSAI' },
            { href: '/calculator', label: 'Calculator' },
            { href: '/solar-checker', label: 'CEIG Checker' },
            { href: '/credentials', label: 'Credentials' },
            { href: '/founder', label: 'Core Team' },
            { href: '/blog', label: 'Blog' },
            { href: '/faq', label: 'FAQ', highlight: 'gold' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label, highlight }, i, arr) => (
            <React.Fragment key={href}>
              <a href={href} style={{
                color: highlight === 'gold' ? '#fbbf24' : highlight === 'blue' ? '#38bdf8' : '#475569',
                textDecoration: 'none',
                fontWeight: highlight ? 600 : 400,
              }}>
                {label}
              </a>
              {i < arr.length - 1 && <span style={{ color: '#1e293b' }}>·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* ─── Bottom Bar ─── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px', fontSize: '0.76rem', color: '#334155'
        }}>
          <div>
            © {new Date().getFullYear()} <strong style={{ color: '#475569' }}>MS Chartered Engineers, Valuers & Technical Consultancy</strong>. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Pan-India Practice · 15+ Years Excellence</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#ffffff', cursor: 'pointer'
              }}
              title="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
