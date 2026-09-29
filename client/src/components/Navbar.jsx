import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Briefcase, 
  Calculator, 
  BookOpen, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  LayoutDashboard 
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';

export default function Navbar({ onOpenQuote, onToggleAdmin, isAdminOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const lastScrollY = useRef(0);

  // Sync current pathname for active states
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // LinkedIn-style scroll listener:
  // - Swiping up to read down (diff > 8): nav bar hides
  // - Swiping down to go up (diff < -8): nav bar appears
  // - Near top (scrollY <= 60): nav bar always visible
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY.current;

          // If mobile drawer is open, keep navbar visible
          if (mobileMenuOpen) {
            setNavVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          if (currentScrollY <= 60) {
            setNavVisible(true);
          } else if (diff > 8) {
            // Scrolling down into content -> hide navbar
            setNavVisible(false);
          } else if (diff < -8) {
            // Scrolling up towards top -> show navbar
            setNavVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`header-wrapper ${navVisible ? 'header-wrapper--visible' : 'header-wrapper--hidden'}`}>
        {/* Top Notification & Credential Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <ShieldCheck size={14} color="#f59e0b" />
              <span>Chartered Engineer (India) | Corporate Member of IEI</span>
            </span>
            <span className="top-bar-item">
              <MapPin size={14} color="#38bdf8" />
              <span>HQ: Jaipur, Rajasthan - 302019 | Pan-India Practice</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+919158658885" className="top-bar-item">
              <Phone size={14} color="#10b981" />
              <span>+91 91586 58885</span>
            </a>
            <a href="mailto:ms.charteredengineer@gmail.com" className="top-bar-item">
              <Mail size={14} color="#f59e0b" />
              <span>ms.charteredengineer@gmail.com</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-bar-item"
              title="Official LinkedIn Company Page"
              style={{ color: '#38bdf8' }}
            >
              <LinkedinIcon size={14} color="#0077b5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Identity */}
          <a href="/" className="brand-logo" aria-label="MS Chartered Engineers – Homepage">
            <div className="gear-icon-wrapper" style={{ background: 'transparent', border: 'none' }}>
              <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueGear" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                
                {/* ROTATING BLUE GEAR RING */}
                <g className="spin-ring" style={{ transformOrigin: '50px 50px' }}>
                  {/* Outer mechanical teeth */}
                  <circle cx="50" cy="50" r="42" fill="none" stroke="url(#blueGear)" strokeWidth="7" strokeDasharray="14 9" strokeLinecap="round" />
                  {/* Inner structural ring */}
                  <circle cx="50" cy="50" r="35" fill="none" stroke="url(#blueGear)" strokeWidth="3" opacity="0.9" />
                </g>

                {/* STATIC INNER ELEMENTS */}
                <circle cx="50" cy="50" r="26" fill="#040914" stroke="#ffffff" strokeWidth="3" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                <text x="50" y="60.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" fill="#ffffff" textAnchor="middle" letterSpacing="1">MS</text>
              </svg>
            </div>
            <div>
              <div className="brand-title">MS CHARTERED <span>ENGINEERS</span></div>
              <div className="brand-subtitle">Valuers & Technical Consultancy</div>
            </div>
          </a>

          {/* Desktop Nav Links (Centered & Aligned) */}
          <nav className="nav-container">
            <ul className="nav-links">
              <li><a href="/services" className="nav-link">Services</a></li>
              <li><a href="/credentials" className="nav-link">Credentials</a></li>
              <li><a href="/calculator" className="nav-link">Calculator</a></li>
              <li><a href="/solar-checker" className="nav-link">CEIG Solar</a></li>
              <li><a href="/founder" className="nav-link">Team</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
              <li><a href="/blog" className="nav-link" style={{ color: '#38bdf8', fontWeight: 600 }}>Blog</a></li>
            </ul>
          </nav>

          {/* Action CTAs — Desktop only; on mobile these hide and appear in hamburger drawer */}
          <div className="navbar-actions">
            {/* Desktop-only: Portal button */}
            <button
              onClick={onToggleAdmin}
              className="btn btn-outline nav-btn desktop-nav-action"
              style={{
                borderColor: isAdminOpen ? 'var(--accent-gold)' : 'rgba(255,255,255,0.18)',
                color: isAdminOpen ? 'var(--accent-gold)' : '#e2e8f0',
                background: isAdminOpen ? 'rgba(245, 158, 11, 0.12)' : 'rgba(255, 255, 255, 0.04)'
              }}
              title="Toggle Client Inquiries Admin Portal"
            >
              <LayoutDashboard size={15} />
              <span>{isAdminOpen ? 'Website' : 'Portal'}</span>
            </button>

            {/* Desktop-only: Request Quote button */}
            <button onClick={() => onOpenQuote()} className="btn btn-primary nav-btn desktop-nav-action">
              <span>Request Quote</span>
              <ArrowRight size={15} />
            </button>

            {/* Hamburger Toggle — always visible on mobile */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           MOBILE HAMBURGER DRAWER
           Shows on ≤1024px screens only
           Contains: Nav links + Portal + Request Quote + Call
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
        {/* Navigation Links */}
        <div className="mobile-drawer-links">
          <a href="/services"       onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">🔩 Services We Offer</a>
          <a href="/credentials"    onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">🏅 Credentials &amp; IEI</a>
          <a href="/calculator"     onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">🧮 Valuation Calculator</a>
          <a href="/solar-checker"  onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">☀️ CEIG Solar Checker</a>
          <a href="/founder"        onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">👤 Core Team (IIT Roorkee)</a>
          <a href="/contact"        onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link">📍 Contact Jaipur HQ</a>
          <a href="/blog"           onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#fbbf24', fontWeight: 600 }}>📚 Insights &amp; Blog Guides</a>
          <a href="https://www.linkedin.com/company/ms-chartered-engineers-valuers-technical-consultancy" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#38bdf8' }}>💼 LinkedIn Company Page</a>
        </div>

        <div className="mobile-drawer-divider" />

        {/* ── CTA Buttons ── */}
        <div className="mobile-drawer-ctas">
          {/* 1. Request Quote */}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
            className="btn btn-primary mobile-cta-btn"
          >
            <ArrowRight size={18} />
            <span>Request Quote / Valuation</span>
          </button>

          {/* 2. Admin Portal */}
          <button
            onClick={() => { setMobileMenuOpen(false); onToggleAdmin(); }}
            className="btn btn-outline mobile-cta-btn"
            style={{
              borderColor: isAdminOpen ? 'var(--accent-gold)' : 'rgba(255,255,255,0.25)',
              color:       isAdminOpen ? 'var(--accent-gold)' : '#e2e8f0',
              background:  isAdminOpen ? 'rgba(245,158,11,0.15)' : 'rgba(255,255,255,0.05)'
            }}
          >
            <LayoutDashboard size={18} color={isAdminOpen ? '#f59e0b' : '#38bdf8'} />
            <span>{isAdminOpen ? 'Back to Website' : 'Admin Lead Portal'}</span>
          </button>

          {/* 3. Direct Call */}
          <a
            href="tel:+919158658885"
            className="btn btn-gold mobile-cta-btn"
          >
            <Phone size={18} />
            <span>Call +91 91586 58885</span>
          </a>
        </div>
      </div>
    </header>

    {/* LinkedIn-Style Mobile Bottom Navigation View */}
    <nav 
      className={`mobile-bottom-nav ${navVisible ? 'mobile-bottom-nav--visible' : 'mobile-bottom-nav--hidden'}`}
      aria-label="Mobile Bottom Navigation"
    >
      <a 
        href="/" 
        className={`bottom-nav-item ${currentPath === '/' ? 'active' : ''}`}
      >
        <Home size={20} />
        <span>Home</span>
      </a>
      <a 
        href="/services" 
        className={`bottom-nav-item ${currentPath.startsWith('/services') ? 'active' : ''}`}
      >
        <Briefcase size={20} />
        <span>Services</span>
      </a>
      <a 
        href="/calculator" 
        className={`bottom-nav-item ${currentPath.startsWith('/calculator') ? 'active' : ''}`}
      >
        <Calculator size={20} />
        <span>Calculator</span>
      </a>
      <a 
        href="/blog" 
        className={`bottom-nav-item ${currentPath.startsWith('/blog') ? 'active' : ''}`}
      >
        <BookOpen size={20} />
        <span>Blog</span>
      </a>
      <button 
        onClick={onOpenQuote} 
        className="bottom-nav-item bottom-nav-quote-btn"
        type="button"
      >
        <Send size={20} />
        <span>Quote</span>
      </button>
    </nav>
  </>
  );
}
