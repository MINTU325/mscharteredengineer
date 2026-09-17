import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Menu, X, ArrowRight, LayoutDashboard } from 'lucide-react';

export default function Navbar({ onOpenQuote, onToggleAdmin, isAdminOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-wrapper">
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
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container">
        <div className="navbar-inner">
          {/* Brand Identity */}
          <a href="#" className="brand-logo">
            <div className="gear-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="spin-slow">
                <path d="M50 15L56 22H68V34L75 40L68 46V58H56L50 65L44 58H32V46L25 40L32 34V22H44L50 15Z" fill="#3b82f6" opacity="0.3"/>
                <circle cx="50" cy="50" r="38" stroke="#38bdf8" strokeWidth="6" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="22" fill="#185adb" />
                <path d="M50 36V64M36 50H64" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <span style={{ position: 'absolute', fontSize: '10px', fontWeight: '800', letterSpacing: '0.5px' }}>MS</span>
            </div>
            <div>
              <div className="brand-title">MS CHARTERED <span>ENGINEERS</span></div>
              <div className="brand-subtitle">Valuers & Technical Consultancy</div>
            </div>
          </a>

          {/* Desktop Nav Links (Centered & Aligned) */}
          <nav className="nav-container">
            <ul className="nav-links">
              <li><a href="#services" className="nav-link">Services</a></li>
              <li><a href="#credentials" className="nav-link">Credentials</a></li>
              <li><a href="#calculator" className="nav-link">Valuation Tool</a></li>
              <li><a href="#solar-checker" className="nav-link">CEIG Checker</a></li>
              <li><a href="#founder" className="nav-link">Core Team</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          {/* Action CTAs (On desktop: visible in navbar; On mobile: cleanly accessible inside hamburger) */}
          <div className="navbar-actions">
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

            <button onClick={() => onOpenQuote()} className="btn btn-primary nav-btn desktop-nav-action">
              <span>Request Quote</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Accessible on mobile) */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(7, 14, 30, 0.98)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          animation: 'fadeIn 0.2s ease'
        }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>Services We Offer</a>
          <a href="#credentials" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>Credentials & IEI</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>Valuation Calculator</a>
          <a href="#solar-checker" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>CEIG Solar Checker</a>
          <a href="#founder" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>Core Team (IIT Roorkee)</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, padding: '4px 0' }}>Contact Jaipur HQ</a>
          
          <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
          
          {/* Action CTAs inside mobile hamburger menu */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Request Quote Button */}
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', height: '46px', fontSize: '0.95rem' }}
            >
              <span>Request Quote / Valuation</span>
              <ArrowRight size={16} />
            </button>

            {/* Portal Button */}
            <button
              onClick={() => { setMobileMenuOpen(false); onToggleAdmin(); }}
              className="btn btn-outline"
              style={{
                width: '100%',
                justifyContent: 'center',
                height: '46px',
                fontSize: '0.92rem',
                borderColor: isAdminOpen ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)',
                color: isAdminOpen ? 'var(--accent-gold)' : '#ffffff',
                background: isAdminOpen ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.04)'
              }}
            >
              <LayoutDashboard size={16} color={isAdminOpen ? '#f59e0b' : '#38bdf8'} />
              <span>{isAdminOpen ? 'Switch to Website View' : 'Admin Lead Portal'}</span>
            </button>

            {/* Direct Call Button */}
            <a 
              href="tel:+919158658885" 
              className="btn btn-gold" 
              style={{ width: '100%', justifyContent: 'center', height: '46px', fontSize: '0.92rem' }}
            >
              <Phone size={16} />
              <span>Call +91 91586 58885</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
