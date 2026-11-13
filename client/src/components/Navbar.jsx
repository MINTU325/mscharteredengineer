import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Briefcase, 
  BookOpen, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Building2,
  Landmark,
  Scale,
  FileCheck2,
  Cpu,
  Zap,
  Users,
  Award,
  GraduationCap,
  CheckCircle2,
  HelpCircle,
  Smartphone,
  ExternalLink,
  Coins,
  Wrench,
  Sun
} from 'lucide-react';
import LinkedinIcon from './LinkedinIcon';
import LanguageToggle from './LanguageToggle';

export default function Navbar({ onOpenQuote, onToggleAdmin, isAdminOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [valuationSubmenuOpen, setValuationSubmenuOpen] = useState(false);
  const [mobileValuationOpen, setMobileValuationOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Sync current pathname for active states
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nav-item-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Close drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // LinkedIn-style scroll listener with accumulated delta:
  // - Scrolling down (accumulated diff > 10, scrollY > 80): nav bar hides
  // - Scrolling up (accumulated diff < -8): nav bar appears
  // - Near top (scrollY <= 60): nav bar always visible
  useEffect(() => {
    let ticking = false;
    lastScrollY.current = Math.max(0, window.pageYOffset || document.documentElement?.scrollTop || window.scrollY || 0);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, window.pageYOffset || document.documentElement?.scrollTop || window.scrollY || 0);
          const diff = currentScrollY - lastScrollY.current;

          // If mobile drawer is open, keep navbar visible
          if (mobileMenuOpen) {
            setNavVisible(true);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          // Near top of page: always visible
          if (currentScrollY <= 50) {
            setNavVisible(true);
            lastScrollY.current = currentScrollY;
          } else if (diff > 8 && currentScrollY > 70) {
            // Downward scroll -> auto-hide navbar
            setNavVisible(false);
            lastScrollY.current = currentScrollY;
          } else if (diff < -5) {
            // Upward scroll -> immediately show navbar and stick
            setNavVisible(true);
            lastScrollY.current = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

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
            <a href="tel:+919158658885" className="top-bar-item" style={{ color: '#ffffff', fontWeight: 600 }}>
              <Phone size={14} color="#10b981" />
              <span>+91 91586 58885</span>
            </a>
            <a href="mailto:ms.charteredengineer@gmail.com" className="top-bar-item">
              <Mail size={14} color="#38bdf8" />
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
      <div className="container navbar-container">
        <div className="navbar-inner">
          {/* Brand Identity */}
          <a href="/" className="brand-logo" aria-label="KS Chartered Engineers – Homepage">
            <div className="gear-icon-wrapper" style={{ background: 'transparent', border: 'none' }}>
              <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
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
                <text x="50" y="60.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="28" fill="#ffffff" textAnchor="middle" letterSpacing="1">KS</text>
              </svg>
            </div>
            <div>
              <div className="brand-title">KS CHARTERED <span>ENGINEERS</span></div>
              <div className="brand-subtitle">Valuers &amp; Technical Services</div>
            </div>
          </a>

          {/* Desktop Nav Links (Option 1: Streamlined 6 Items with Elegant Dropdowns) */}
          <nav className="nav-container">
            <ul className="nav-links">
              
              {/* 1. Services Dropdown */}
              <li 
                className="nav-item-dropdown" 
                onMouseEnter={() => setActiveDropdown('services')} 
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`nav-link nav-dropdown-trigger ${activeDropdown === 'services' || currentPath.includes('/service') || currentPath.includes('/valuation') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  aria-expanded={activeDropdown === 'services'}
                >
                  <span>Services</span>
                  <ChevronDown size={10} className={`dropdown-chevron ${activeDropdown === 'services' ? 'rotate' : ''}`} />
                </button>
                <div className={`nav-dropdown-menu ${activeDropdown === 'services' ? 'open' : ''}`} style={{ minWidth: '340px' }}>
                  {/* 1. Chartered Engineers & Valuations (Parent Group with Sub-Services) */}
                  <div 
                    className="nav-sub-dropdown"
                    onMouseEnter={() => setValuationSubmenuOpen(true)}
                    onMouseLeave={() => setValuationSubmenuOpen(false)}
                  >
                    <div 
                      className="nav-dropdown-item parent-item" 
                      onClick={() => setValuationSubmenuOpen(!valuationSubmenuOpen)}
                      style={{ cursor: 'pointer', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '11px' }}>
                        <FileCheck2 size={16} color="#38bdf8" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title" style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span>Chartered Engineers &amp; Valuations</span>
                            <span style={{ fontSize: '0.62rem', background: 'rgba(56, 189, 248, 0.18)', color: '#38bdf8', padding: '1px 5px', borderRadius: '4px', fontWeight: 800 }}>6 SERVICES</span>
                          </div>
                          <div className="dropdown-item-desc">Asset appraisals, bank loans, DGFT &amp; statutory audit</div>
                        </div>
                      </div>
                      <ChevronRight size={14} color="#38bdf8" className={`sub-chevron ${valuationSubmenuOpen ? 'open' : ''}`} style={{ flexShrink: 0, marginLeft: '6px' }} />
                    </div>

                    {/* Flyout Sub-Service Menu */}
                    <div className={`nav-sub-menu ${valuationSubmenuOpen ? 'sub-menu--open' : ''}`}>
                      <a href="/property-valuation" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <Building2 size={15} color="#0284c7" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">Property &amp; Land Valuation</div>
                          <div className="dropdown-item-desc">Immovable real estate &amp; land appraisals</div>
                        </div>
                      </a>
                      <a href="/bank-valuation" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <Landmark size={15} color="#d97706" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">Bank &amp; Mortgage Valuation</div>
                          <div className="dropdown-item-desc">FMV &amp; FSV for home loans &amp; project finance</div>
                        </div>
                      </a>
                      <a href="/tax-valuation" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <Scale size={15} color="#059669" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">Capital Gains Tax &amp; 2001 FMV</div>
                          <div className="dropdown-item-desc">Section 50C &amp; ITAT dispute defense</div>
                        </div>
                      </a>
                      <a href="/chartered-engineer" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <FileCheck2 size={15} color="#7c3aed" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">Chartered Engineer &amp; DGFT</div>
                          <div className="dropdown-item-desc">Advance Authorisation, EPCG &amp; customs</div>
                        </div>
                      </a>
                      <a href="/machinery-valuation" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <Cpu size={15} color="#f59e0b" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">Plant &amp; Machinery Valuation</div>
                          <div className="dropdown-item-desc">Depreciated Replacement Cost (DRC) audit</div>
                        </div>
                      </a>
                      <a href="/ibc-valuation" onClick={handleDropdownItemClick} className="nav-dropdown-item sub-item">
                        <ShieldCheck size={15} color="#a855f7" className="dropdown-item-icon" />
                        <div>
                          <div className="dropdown-item-title">IBC / NCLT Corporate Valuation</div>
                          <div className="dropdown-item-desc">CIRP liquidation &amp; solvency reports</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* 2. Electrical & Substation Services */}
                  <a href="/electrical-services" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Zap size={16} color="#f59e0b" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title" style={{ color: '#f59e0b', fontWeight: 600 }}>
                        <span>Electrical &amp; Substation Services</span>
                      </div>
                      <div className="dropdown-item-desc">Testing, Transformers, Panels, HT/LT &amp; AMC</div>
                    </div>
                  </a>

                  {/* 4. Fabrication & Tin Shed Works */}
                  <a href="/fabrication-services" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Wrench size={16} color="#f97316" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title" style={{ color: '#f97316', fontWeight: 600 }}>
                        <span>Fabrication &amp; PEB Shed Works</span>
                      </div>
                      <div className="dropdown-item-desc">Industrial Chimneys, PEB Sheds, MS &amp; Glass Railings</div>
                    </div>
                  </a>

                  {/* 5. Solar Structural Analysis */}
                  <a href="/solar-structural-analysis" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Sun size={16} color="#fbbf24" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title" style={{ color: '#fbbf24', fontWeight: 600 }}>
                        <span>Solar Structural Analysis</span>
                      </div>
                      <div className="dropdown-item-desc">MMS Foundation, Wind Load IS 875 &amp; Rooftop Safety Audit</div>
                    </div>
                  </a>

                  <div className="dropdown-divider" />
                  <a href="/services" onClick={handleDropdownItemClick} className="nav-dropdown-footer-link">
                    <span>Explore All 15 Engineering Services</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </li>

              {/* 2. Solar Structural Analysis (Direct Highlight Link) */}
              <li>
                <a 
                  href="/solar-structural-analysis" 
                  className={`nav-link ${currentPath === '/solar-structural-analysis' ? 'active' : ''}`}
                  style={{ color: '#fbbf24', fontWeight: 600 }}
                >
                  <span>Solar Structural Analysis</span>
                </a>
              </li>

              {/* 3. IT (Direct Highlight Link) */}
              <li>
                <a 
                  href="/tech-products" 
                  className={`nav-link ${currentPath === '/tech-products' ? 'active' : ''}`}
                  style={{ color: '#06b6d4', fontWeight: 600 }}
                >
                  <span>IT</span>
                </a>
              </li>

              {/* 3. Subsidies & Loans Dropdown */}
              <li 
                className="nav-item-dropdown" 
                onMouseEnter={() => setActiveDropdown('subsidies')} 
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`nav-link nav-dropdown-trigger ${activeDropdown === 'subsidies' || currentPath.includes('/subsidies') || currentPath.includes('/business-loan') ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === 'subsidies' ? null : 'subsidies')}
                  aria-expanded={activeDropdown === 'subsidies'}
                  style={{ color: '#10b981', fontWeight: 700 }}
                >
                  <span>Subsidies</span>
                  <ChevronDown size={10} className={`dropdown-chevron ${activeDropdown === 'subsidies' ? 'rotate' : ''}`} />
                </button>
                <div className={`nav-dropdown-menu ${activeDropdown === 'subsidies' ? 'open' : ''}`} style={{ minWidth: '340px' }}>
                  <a href="/government-subsidies" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Coins size={16} color="#10b981" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title" style={{ color: '#10b981' }}>Government Subsidies</div>
                      <div className="dropdown-item-desc">RIPS 2024, PMEGP, MSME, Textile &amp; Capital Grants</div>
                    </div>
                  </a>
                  <a href="/business-loans" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Landmark size={16} color="#38bdf8" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title" style={{ color: '#38bdf8' }}>Business Loans</div>
                      <div className="dropdown-item-desc">CGTMSE Collateral-Free, Term Loans &amp; Machinery Finance</div>
                    </div>
                  </a>
                  <div className="dropdown-divider" />
                  <a href="/government-subsidies" onClick={handleDropdownItemClick} className="nav-dropdown-footer-link">
                    <span>Explore 26+ Subsidies &amp; DPR Services</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </li>

              {/* 3. About Dropdown */}
              <li 
                className="nav-item-dropdown" 
                onMouseEnter={() => setActiveDropdown('about')} 
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`nav-link nav-dropdown-trigger ${activeDropdown === 'about' || currentPath === '/who-we-serve' || currentPath === '/credentials' || currentPath === '/founder' ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                  aria-expanded={activeDropdown === 'about'}
                >
                  <span>About</span>
                  <ChevronDown size={10} className={`dropdown-chevron ${activeDropdown === 'about' ? 'rotate' : ''}`} />
                </button>
                <div className={`nav-dropdown-menu ${activeDropdown === 'about' ? 'open' : ''}`} style={{ minWidth: '300px' }}>
                  <a href="/who-we-serve" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Users size={16} color="#38bdf8" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title">Who We Serve</div>
                      <div className="dropdown-item-desc">Banks, CAs, Advocates, Builders &amp; MSMEs</div>
                    </div>
                  </a>
                  <a href="/credentials" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <Award size={16} color="#fbbf24" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title">Statutory Credentials</div>
                      <div className="dropdown-item-desc">Institution of Engineers (India) &amp; Approvals</div>
                    </div>
                  </a>
                  <a href="/founder" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <GraduationCap size={16} color="#10b981" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title">Core Team &amp; Leadership</div>
                      <div className="dropdown-item-desc">IIT Roorkee mechanical engineering alumni</div>
                    </div>
                  </a>
                </div>
              </li>

              {/* 5. Insights Dropdown */}
              <li 
                className="nav-item-dropdown" 
                onMouseEnter={() => setActiveDropdown('insights')} 
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`nav-link nav-dropdown-trigger ${activeDropdown === 'insights' || currentPath.startsWith('/blog') || currentPath === '/faq' ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(activeDropdown === 'insights' ? null : 'insights')}
                  aria-expanded={activeDropdown === 'insights'}
                >
                  <span>Insights</span>
                  <ChevronDown size={10} className={`dropdown-chevron ${activeDropdown === 'insights' ? 'rotate' : ''}`} />
                </button>
                <div className={`nav-dropdown-menu ${activeDropdown === 'insights' ? 'open' : ''}`} style={{ minWidth: '280px' }}>
                  <a href="/blog" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <BookOpen size={16} color="#38bdf8" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title">Technical Blog &amp; Guides</div>
                      <div className="dropdown-item-desc">Regulatory circulars, IndAS &amp; DGFT</div>
                    </div>
                  </a>
                  <a href="/faq" onClick={handleDropdownItemClick} className="nav-dropdown-item">
                    <HelpCircle size={16} color="#fbbf24" className="dropdown-item-icon" />
                    <div>
                      <div className="dropdown-item-title">Frequently Asked Questions</div>
                      <div className="dropdown-item-desc">Direct answers to valuation questions</div>
                    </div>
                  </a>
                </div>
              </li>

              {/* 6. Contact Link */}
              <li>
                <a href="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`}>
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Action CTAs — Desktop only; on mobile these hide and appear in hamburger drawer */}
          <div className="navbar-actions">
            {/* 🌐 One-Click English/Hindi Language Switcher */}
            <LanguageToggle />

            {/* Desktop-only: Request Quote button */}
            <button onClick={() => onOpenQuote()} className="btn btn-primary nav-btn desktop-nav-action" style={{ borderRadius: '6px', background: '#F58220', borderColor: '#F58220', fontWeight: 600 }}>
              <span>Request Quote</span>
              <ArrowRight size={12} />
            </button>

            {/* Hamburger Toggle — always visible on mobile */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           MOBILE HAMBURGER DRAWER
           Clean & Structured with Category Dividers
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer-links">
          
          <div style={{ padding: '4px 14px', fontSize: '0.72rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Core Engineering &amp; Valuation
          </div>
          {/* Mobile Chartered Engineers & Valuations Accordion */}
          <button
            onClick={() => setMobileValuationOpen(!mobileValuationOpen)}
            className="mobile-drawer-link"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              color: '#38bdf8',
              fontWeight: 600,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileCheck2 size={16} color="#38bdf8" />
              <span>Chartered Engineers &amp; Valuations</span>
            </span>
            <ChevronDown size={14} style={{ transform: mobileValuationOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
          </button>
          {mobileValuationOpen && (
            <div style={{ paddingLeft: '14px', borderLeft: '2px solid rgba(56, 189, 248, 0.3)', margin: '4px 0 6px 14px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <a href="/property-valuation" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={14} color="#38bdf8" />
                <span>Property &amp; Land Valuation</span>
              </a>
              <a href="/bank-valuation" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Landmark size={14} color="#f59e0b" />
                <span>Bank &amp; Mortgage Valuation</span>
              </a>
              <a href="/tax-valuation" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scale size={14} color="#10b981" />
                <span>Capital Gains Tax &amp; 2001 FMV</span>
              </a>
              <a href="/chartered-engineer" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileCheck2 size={14} color="#a855f7" />
                <span>Chartered Engineer &amp; DGFT</span>
              </a>
              <a href="/machinery-valuation" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={14} color="#f59e0b" />
                <span>Plant &amp; Machinery Valuation</span>
              </a>
              <a href="/ibc-valuation" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} color="#38bdf8" />
                <span>IBC &amp; NCLT Corporate Valuation</span>
              </a>
            </div>
          )}
          <a href="/electrical-services" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#f59e0b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={16} color="#f59e0b" />
            <span>Electrical &amp; Substation Services</span>
            <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', fontSize: '0.62rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 700, marginLeft: 'auto' }}>NEW</span>
          </a>
          <a href="/fabrication-services" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#f97316', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wrench size={16} color="#f97316" />
            <span>Fabrication &amp; PEB Shed Works</span>
            <span style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#fb923c', fontSize: '0.62rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 700, marginLeft: 'auto' }}>NEW</span>
          </a>
          <a href="/solar-structural-analysis" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#fbbf24', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sun size={16} color="#fbbf24" />
            <span>Solar Structural Analysis</span>
            <span style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fde047', fontSize: '0.62rem', padding: '1px 6px', borderRadius: '4px', fontWeight: 700, marginLeft: 'auto' }}>NEW</span>
          </a>
          <a href="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ArrowRight size={15} color="#94a3b8" />
            <span>All 15 Practice Areas</span>
          </a>

          <div style={{ padding: '12px 14px 4px', fontSize: '0.72rem', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Technology &amp; Software
          </div>
          <a href="/tech-products" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#06b6d4', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={16} color="#06b6d4" />
            <span>IT Solutions</span>
          </a>

          <div style={{ padding: '12px 14px 4px', fontSize: '0.72rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Subsidies &amp; Business Loans
          </div>
          <a href="/government-subsidies" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Coins size={16} color="#10b981" />
            <span>Government Subsidies &amp; Grants</span>
          </a>
          <a href="/business-loans" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Landmark size={16} color="#38bdf8" />
            <span>Business &amp; Machinery Loans</span>
          </a>

          <div style={{ padding: '12px 14px 4px', fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            About Company &amp; Credentials
          </div>
          <a href="/who-we-serve" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={16} color="#a78bfa" />
            <span>Who We Serve</span>
          </a>
          <a href="/credentials" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="#fbbf24" />
            <span>Credentials &amp; IEI</span>
          </a>
          <a href="/founder" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={16} color="#10b981" />
            <span>Core Team (IIT Roorkee)</span>
          </a>

          <div style={{ padding: '12px 14px 4px', fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Support &amp; Insights
          </div>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={16} color="#38bdf8" />
            <span>Insights &amp; Blog Guides</span>
          </a>
          <a href="/faq" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={16} color="#fbbf24" />
            <span>FAQs &amp; Help Desk</span>
          </a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-drawer-link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} color="#f59e0b" />
            <span>Contact Jaipur HQ</span>
          </a>
        </div>

        <div className="mobile-drawer-divider" />

        {/* ── CTA Buttons ── */}
        <div className="mobile-drawer-ctas">
          <LanguageToggle isMobile={true} onToggleCallback={() => setMobileMenuOpen(false)} />

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
            className="btn btn-primary mobile-cta-btn"
            style={{ borderRadius: '8px', background: '#F58220', borderColor: '#F58220', fontWeight: 600 }}
          >
            <ArrowRight size={18} />
            <span>Request Quote / Valuation</span>
          </button>
        </div>
      </div>
    </header>
    <div className="header-spacer" aria-hidden="true" />
    </>
  );
}
