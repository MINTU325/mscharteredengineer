import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Activity, 
  Cpu, 
  AlertTriangle, 
  Building2, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Layers, 
  Clock, 
  Award, 
  FileText, 
  Check, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Flame,
  Gauge,
  SlidersHorizontal,
  Home,
  X
} from 'lucide-react';
import { SERVICE_CATEGORIES, ELECTRICAL_SERVICES_LIST } from '../data/electricalServicesData';

export default function ElectricalServicesPage({ onOpenQuote, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const lastScrollY = useRef(0);

  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;

  // Sync window width for accurate desktop/mobile responsive rendering
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync with Navbar scroll hide/show state
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY.current;

          if (currentScrollY <= 60) {
            setNavVisible(true);
          } else if (diff > 8) {
            // Scrolling down -> Navbar is hidden, HUD moves to top: 0
            setNavVisible(false);
          } else if (diff < -8) {
            // Scrolling up -> Navbar is visible, HUD moves below Navbar
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
  }, []);

  // Compute exact sticky top offset
  // Mobile navbar (.navbar-inner) is 56px, top-bar is hidden.
  // Desktop navbar is ~100px (top-bar ~36px + navbar 64px).
  const stickyTop = navVisible ? (isMobile ? '56px' : '100px') : '0px';

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.category-hud-container')) {
        setCategoryDropdownOpen(false);
      }
    };
    if (categoryDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [categoryDropdownOpen]);

  // Pre-calculate item counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: ELECTRICAL_SERVICES_LIST.length };
    ELECTRICAL_SERVICES_LIST.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter services by category and search query
  const filteredServices = useMemo(() => {
    return ELECTRICAL_SERVICES_LIST.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.standards.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // WhatsApp click handler
  const handleWhatsAppInquiry = (serviceName) => {
    const message = encodeURIComponent(`Hello MS Chartered Engineers, I am interested in your "${serviceName}". Please share details and quotation.`);
    window.open(`https://wa.me/919158658885?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const selectedCategoryObj = SERVICE_CATEGORIES.find(c => c.id === selectedCategory);

  const faqs = [
    {
      q: 'How frequently should industrial transformer oil filtration be carried out?',
      a: 'As per IS 1866 and CBIP guidelines, transformer oil should be tested annually for Breakdown Voltage (BDV) and moisture content. If the BDV falls below 40 kV (for 11kV/33kV transformers) or moisture exceeds 20 ppm, high-vacuum filtration is mandatory to prevent internal flashover and coil breakdown.'
    },
    {
      q: 'What instruments and standards do you follow for High Voltage Circuit Breaker testing?',
      a: 'We use calibrated digital contact resistance meters (100A/200A), high-speed multi-channel circuit breaker timing analyzers, and 80kV AC Hi-Pot test sets complying with IEC 62271-100 and IS 13118 standards. Full timing, bounce, and dynamic resistance reports are issued.'
    },
    {
      q: 'Can you assist in statutory CEIG approval for new substation installations?',
      a: 'Yes. Being Corporate Members of the Institution of Engineers (India) and registered Chartered Engineers, we prepare compliant Single Line Diagrams (SLD), verify earthing step/touch potential, perform pre-commissioning tests, and represent filings for Chief Electrical Inspector to Government (CEIG) energization clearance.'
    },
    {
      q: 'Do you offer emergency mobile transformer oil filtration and repair support?',
      a: 'Yes. Our specialized mobile high-vacuum oil dehydration plants (up to 6000 LPH) can be deployed directly to your factory or substation across Rajasthan, Delhi NCR, Gujarat, and neighboring states on rapid turnaround notice.'
    }
  ];

  return (
    <div 
      className="electrical-services-page" 
      style={{ 
        background: '#040914', 
        color: '#e2e8f0', 
        minHeight: '100vh', 
        paddingBottom: isMobile ? '100px' : '80px',
        overflowX: 'hidden',
        width: '100%'
      }}
    >
      
      {/* ── BREADCRUMB & HERO SECTION ── */}
      <section style={{ 
        position: 'relative', 
        padding: isMobile ? '75px 16px 36px' : '120px 20px 56px', 
        background: 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, rgba(4, 9, 20, 0.95) 70%)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: 0 }}>
          
          {/* Breadcrumb */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            fontSize: isMobile ? '0.78rem' : '0.85rem', 
            color: '#94a3b8', 
            marginBottom: '16px',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={onNavigateHome} 
              style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={13} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#cbd5e1' }}>Services</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Electrical &amp; Substation Engineering</span>
          </div>

          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '5px 12px', 
            borderRadius: '9999px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            border: '1px solid rgba(56, 189, 248, 0.25)', 
            color: '#38bdf8', 
            fontSize: isMobile ? '0.75rem' : '0.82rem', 
            fontWeight: 700, 
            letterSpacing: '0.04em', 
            textTransform: 'uppercase', 
            marginBottom: '16px' 
          }}>
            <Zap size={13} />
            Class-A Turnkey Electrical &amp; Testing Division
          </div>

          <h1 style={{ 
            fontSize: isMobile ? '1.85rem' : 'clamp(2rem, 4.5vw, 3.4rem)', 
            fontWeight: 900, 
            lineHeight: 1.18, 
            color: '#ffffff', 
            letterSpacing: '-0.02em', 
            maxWidth: '980px', 
            marginBottom: '16px' 
          }}>
            High Voltage Testing, Transformer Services &amp; <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Substation Engineering</span>
          </h1>

          <p style={{ 
            fontSize: isMobile ? '0.92rem' : 'clamp(1rem, 1.8vw, 1.18rem)', 
            color: '#94a3b8', 
            maxWidth: '850px', 
            lineHeight: 1.55, 
            marginBottom: isMobile ? '24px' : '36px' 
          }}>
            Comprehensive on-site testing for Circuit Breakers, Power Transformers, Relays, and Earth Pits up to 220kV. Turnkey 11kV/33kV substation erection, high-vacuum oil filtration, cable jointing, and statutory CEA safety audits by certified Chartered Engineers.
          </p>

          {/* Quick CTA Actions */}
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row', 
            gap: isMobile ? '10px' : '14px', 
            alignItems: isMobile ? 'stretch' : 'center',
            width: '100%'
          }}>
            <button 
              onClick={() => onOpenQuote('Electrical & Substation Engineering Services', { isElectrical: true, title: 'Electrical & Substation Engineering Services' })}
              className="btn btn-primary"
              style={{ 
                padding: isMobile ? '12px 18px' : '13px 28px', 
                fontSize: '0.92rem', 
                fontWeight: 700, 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(2, 132, 199, 0.35)',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <span>Request Testing / Service Quote</span>
              <ArrowRight size={15} />
            </button>

            <a 
              href="tel:+919158658885" 
              className="btn"
              style={{ 
                padding: isMobile ? '11px 16px' : '13px 22px', 
                fontSize: '0.90rem', 
                fontWeight: 600, 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '8px',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <Phone size={15} color="#10b981" />
              <span>Talk to Chief Engineer (+91 91586 58885)</span>
            </a>

            <button 
              onClick={() => handleWhatsAppInquiry('Substation & Electrical Services')}
              style={{ 
                padding: isMobile ? '11px 16px' : '13px 20px', 
                fontSize: '0.90rem', 
                fontWeight: 600, 
                background: 'rgba(16, 185, 129, 0.12)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <MessageSquare size={15} />
              <span>Instant WhatsApp Query</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
            gap: isMobile ? '10px' : '16px', 
            marginTop: isMobile ? '28px' : '44px', 
            padding: isMobile ? '14px' : '20px', 
            borderRadius: '12px', 
            background: 'rgba(15, 23, 42, 0.65)', 
            border: '1px solid rgba(56, 189, 248, 0.12)' 
          }}>
            <div>
              <div style={{ fontSize: isMobile ? '1.35rem' : '1.6rem', fontWeight: 900, color: '#38bdf8' }}>1500+</div>
              <div style={{ fontSize: isMobile ? '0.74rem' : '0.85rem', color: '#94a3b8' }}>Transformers Tested</div>
            </div>
            <div>
              <div style={{ fontSize: isMobile ? '1.35rem' : '1.6rem', fontWeight: 900, color: '#10b981' }}>&gt; 70 kV</div>
              <div style={{ fontSize: isMobile ? '0.74rem' : '0.85rem', color: '#94a3b8' }}>Oil BDV Restored</div>
            </div>
            <div>
              <div style={{ fontSize: isMobile ? '1.35rem' : '1.6rem', fontWeight: 900, color: '#fbbf24' }}>24x7</div>
              <div style={{ fontSize: isMobile ? '0.74rem' : '0.85rem', color: '#94a3b8' }}>Emergency Dispatch</div>
            </div>
            <div>
              <div style={{ fontSize: isMobile ? '1.35rem' : '1.6rem', fontWeight: 900, color: '#a78bfa' }}>100% CEA</div>
              <div style={{ fontSize: isMobile ? '0.74rem' : '0.85rem', color: '#94a3b8' }}>CEIG Compliance</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FUTURISTIC CYBER-HUD CONTROL STRIP (FULLY RESPONSIVE & AUTO-DOCKING) ── */}
      <section style={{ 
        position: 'sticky', 
        top: stickyTop, 
        zIndex: 990, 
        padding: isMobile ? '6px 12px' : '8px 20px', 
        background: 'rgba(5, 11, 24, 0.94)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.18)',
        boxShadow: navVisible ? '0 4px 16px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 15px rgba(2, 132, 199, 0.15)',
        transition: 'top 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
        willChange: 'top'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: 0 }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '8px' : '12px',
            width: '100%'
          }}>
            
            {/* 1. Left: Cyber Search Bar */}
            <div style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              flex: '1', 
              minWidth: isMobile ? '120px' : '220px',
              maxWidth: isMobile ? 'none' : '340px'
            }}>
              <Search 
                size={13} 
                style={{ 
                  position: 'absolute', 
                  left: '10px', 
                  color: searchQuery ? '#38bdf8' : '#64748b', 
                  pointerEvents: 'none',
                  transition: 'color 0.2s ease'
                }} 
              />
              <input 
                type="text"
                placeholder={isMobile ? "Search services..." : "Search 24+ services (e.g. breaker, BDV)..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  height: '32px',
                  padding: '0 24px 0 28px',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.95)',
                  border: searchQuery ? '1px solid #38bdf8' : '1px solid rgba(56, 189, 248, 0.22)',
                  color: '#ffffff',
                  fontSize: isMobile ? '0.78rem' : '0.82rem',
                  outline: 'none',
                  boxShadow: searchQuery ? '0 0 10px rgba(56, 189, 248, 0.25)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '6px',
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Clear search"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* 2. Center: Quick Micro HUD Chips (Visible on desktop/tablet only > 860px) */}
            {windowWidth > 860 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'testing', label: '⚡ Testing' },
                  { id: 'installation', label: '🔧 Substation' },
                  { id: 'filtration', label: '🛢️ Oil BDV' },
                  { id: 'safety', label: '🛡️ Safety Audit' }
                ].map(chip => {
                  const isSelected = selectedCategory === chip.id;
                  return (
                    <button
                      key={chip.id}
                      onClick={() => setSelectedCategory(chip.id)}
                      style={{
                        height: '28px',
                        padding: '0 10px',
                        borderRadius: '14px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                        background: isSelected ? 'rgba(2, 132, 199, 0.35)' : 'rgba(15, 23, 42, 0.6)',
                        color: isSelected ? '#38bdf8' : '#94a3b8',
                        boxShadow: isSelected ? '0 0 8px rgba(56, 189, 248, 0.25)' : 'none',
                        transition: 'all 0.18s ease',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* 3. Right: Futuristic Category HUD Popover Dropdown + Live Count */}
            <div className="category-hud-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
              
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                style={{
                  height: '32px',
                  padding: isMobile ? '0 9px' : '0 12px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#ffffff',
                  fontSize: isMobile ? '0.74rem' : '0.80rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  whiteSpace: 'nowrap'
                }}
              >
                <SlidersHorizontal size={12} color="#38bdf8" />
                <span style={{ 
                  color: '#38bdf8', 
                  maxWidth: isMobile ? '80px' : '160px', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  whiteSpace: 'nowrap' 
                }}>
                  {selectedCategoryObj?.name || 'All'}
                </span>
                <ChevronDown size={12} color="#38bdf8" style={{ transform: categoryDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }} />
              </button>

              {/* Glowing Live Results Pill */}
              <div style={{
                height: '32px',
                padding: isMobile ? '0 7px' : '0 10px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: isMobile ? '0.70rem' : '0.74rem',
                color: '#34d399',
                fontWeight: 600,
                fontFamily: 'monospace',
                whiteSpace: 'nowrap'
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981', display: 'inline-block' }} />
                <span>{filteredServices.length} {isMobile ? '' : 'LIVE'}</span>
              </div>

              {/* Futuristic Cyber Dropdown Menu Popover */}
              {categoryDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '38px',
                  right: 0,
                  width: isMobile ? 'min(280px, calc(100vw - 28px))' : '280px',
                  background: 'rgba(8, 14, 28, 0.98)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '12px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(2, 132, 199, 0.2)',
                  padding: '8px',
                  zIndex: 1001
                }}>
                  <div style={{ padding: '6px 10px 8px', fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    Filter By Discipline ({SERVICE_CATEGORIES.length})
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '6px', maxHeight: '280px', overflowY: 'auto' }}>
                    {SERVICE_CATEGORIES.map(cat => {
                      const isSelected = selectedCategory === cat.id;
                      const count = categoryCounts[cat.id] || 0;
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            setCategoryDropdownOpen(false);
                          }}
                          style={{
                            width: '100%',
                            padding: '8px 10px',
                            borderRadius: '6px',
                            background: isSelected ? 'rgba(2, 132, 199, 0.25)' : 'transparent',
                            border: isSelected ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid transparent',
                            color: isSelected ? '#38bdf8' : '#cbd5e1',
                            fontSize: '0.80rem',
                            fontWeight: isSelected ? 700 : 500,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ 
                              width: '5px', 
                              height: '5px', 
                              borderRadius: '50%', 
                              background: isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)',
                              boxShadow: isSelected ? '0 0 6px #38bdf8' : 'none'
                            }} />
                            <span>{cat.name}</span>
                          </div>
                          <span style={{ 
                            fontSize: '0.70rem', 
                            padding: '1px 5px', 
                            borderRadius: '8px', 
                            background: isSelected ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                            color: isSelected ? '#38bdf8' : '#94a3b8',
                            fontFamily: 'monospace'
                          }}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── SERVICES GRID (FULLY RESPONSIVE 1-COL ON MOBILE, 2-3 COL ON DESKTOP) ── */}
      <section style={{ padding: isMobile ? '32px 14px' : '60px 20px', width: '100%' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: 0 }}>
          
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: isMobile ? '40px 14px' : '60px 20px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.15)' }}>
              <AlertTriangle size={32} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ color: '#ffffff', marginBottom: '8px', fontSize: '1.1rem' }}>No matching engineering services found</h3>
              <p style={{ color: '#94a3b8', marginBottom: '16px', fontSize: '0.85rem' }}>Try searching for another keyword or select "All Services".</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile 
                ? '1fr' 
                : (windowWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
              gap: isMobile ? '18px' : '26px',
              width: '100%'
            }}>
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(56, 189, 248, 0.14)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                    position: 'relative',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(2, 132, 199, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.14)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  {/* Service Image with Badges */}
                  <div style={{ position: 'relative', width: '100%', height: isMobile ? '170px' : '205px', overflow: 'hidden', background: '#0a101f' }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        filter: 'brightness(0.92)'
                      }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    
                    {/* Dark gradient overlay for contrast */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)' }} />

                    {/* Top Badges */}
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px' }}>
                      <span style={{ 
                        padding: '3px 8px', 
                        borderRadius: '5px', 
                        fontSize: '0.70rem', 
                        fontWeight: 700, 
                        background: service.badgeColor || '#0284c7', 
                        color: '#ffffff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                      }}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Standards tag */}
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                        fontSize: '0.70rem', 
                        color: '#38bdf8', 
                        background: 'rgba(4, 9, 20, 0.85)', 
                        padding: '2px 7px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        fontFamily: 'monospace'
                      }}>
                        {service.standards}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: isMobile ? '16px' : '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: isMobile ? '1.10rem' : '1.20rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, marginBottom: '8px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px' }}>
                      {service.shortDesc}
                    </p>

                    {/* Feature bullets */}
                    <div style={{ marginBottom: '16px', flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Scope &amp; Deliverables:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {service.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', fontSize: '0.80rem', color: '#e2e8f0', lineHeight: 1.35 }}>
                            <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable For */}
                    <div style={{ padding: '8px 10px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '16px', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <strong style={{ color: '#cbd5e1' }}>Suitable for: </strong>{service.suitableFor}
                    </div>

                    {/* Card CTAs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px', marginTop: 'auto' }}>
                      <button 
                        onClick={() => onOpenQuote(service.title, { isElectrical: true, ...service })}
                        className="btn btn-primary"
                        style={{ 
                          padding: '9px 12px', 
                          fontSize: '0.84rem', 
                          fontWeight: 700, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '6px',
                          borderRadius: '6px'
                        }}
                      >
                        <span>Book Service</span>
                        <ArrowRight size={13} />
                      </button>

                      <button 
                        onClick={() => handleWhatsAppInquiry(service.title)}
                        title="Chat on WhatsApp"
                        style={{ 
                          padding: '9px 11px', 
                          background: 'rgba(16, 185, 129, 0.12)', 
                          border: '1px solid rgba(16, 185, 129, 0.25)', 
                          borderRadius: '6px', 
                          color: '#34d399', 
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <MessageSquare size={15} />
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ── TECHNICAL STANDARDS & CALIBRATED INSTRUMENTS ── */}
      <section style={{ padding: isMobile ? '36px 14px' : '56px 20px', background: 'rgba(10, 16, 31, 0.8)', borderTop: '1px solid rgba(56, 189, 248, 0.1)', borderBottom: '1px solid rgba(56, 189, 248, 0.1)', width: '100%' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: 0 }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Gauge size={13} />
              Testing Infrastructure
            </div>
            <h2 style={{ fontSize: isMobile ? '1.45rem' : 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
              Advanced Testing Instruments &amp; Quality Rigor
            </h2>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.86rem' : '0.96rem', lineHeight: 1.55 }}>
              All tests are executed using NABL-calibrated precision instrumentation complying strictly with Indian Electricity Rules, Central Electricity Authority (CEA) norms, and international IEC/IEEE standards.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: isMobile ? '14px' : '20px' 
          }}>
            <div style={{ padding: isMobile ? '16px' : '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Cpu size={22} color="#38bdf8" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.0rem', marginBottom: '6px' }}>High-Speed Breaker Analyzers</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>Multi-channel digital timing and contact resistance meters measuring contact bounce and millisecond operating sequences.</p>
            </div>

            <div style={{ padding: isMobile ? '16px' : '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Flame size={22} color="#ea580c" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.0rem', marginBottom: '6px' }}>FLIR Infrared Thermography</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>High-resolution radiometric thermal cameras detecting hot joints, unbalanced load, and loose terminations under live operation.</p>
            </div>

            <div style={{ padding: isMobile ? '16px' : '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Activity size={22} color="#10b981" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.0rem', marginBottom: '6px' }}>100kV Automatic BDV Kits</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>Microprocessor controlled transformer oil breakdown voltage test sets adhering to IS 6792 / IEC 60156 standards.</p>
            </div>

            <div style={{ padding: isMobile ? '16px' : '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <ShieldCheck size={22} color="#a78bfa" style={{ marginBottom: '10px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.0rem', marginBottom: '6px' }}>CEIG &amp; DISCOM Liasioning</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>Chartered Engineer certification and complete statutory clearance handling for Chief Electrical Inspector approval.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section style={{ padding: isMobile ? '36px 14px' : '56px 20px', width: '100%' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: 0 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 style={{ fontSize: isMobile ? '1.45rem' : 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.84rem' : '0.94rem' }}>
              Essential insights on industrial electrical maintenance, testing cycles, and regulatory clearances.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{ 
                    borderRadius: '8px', 
                    background: 'rgba(15, 23, 42, 0.7)', 
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: isMobile ? '12px 14px' : '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: isMobile ? '0.88rem' : '0.98rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '10px'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={16} color="#38bdf8" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: isMobile ? '0 14px 14px' : '0 20px 18px', color: '#94a3b8', fontSize: '0.84rem', lineHeight: 1.55, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '10px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── HIGH-CONVERSION CTA FOOTER BANNER ── */}
      <section style={{ padding: isMobile ? '10px 14px 0' : '20px 20px 0', width: '100%' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: 0 }}>
          <div style={{ 
            padding: isMobile ? '24px 16px' : '40px 32px', 
            borderRadius: '14px', 
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            justifyContent: 'space-between',
            gap: '18px'
          }}>
            <div>
              <h3 style={{ fontSize: isMobile ? '1.25rem' : 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                Need Substation Testing, Overhauling or Contracting?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.84rem' : '0.95rem', maxWidth: '650px', lineHeight: 1.45 }}>
                Connect directly with our IIT Roorkee alumni Chartered Engineers for prompt mobilization, technical feasibility, and customized quotation across India.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : 'auto' }}>
              <button 
                onClick={() => onOpenQuote('Turnkey Electrical & Substation Inquiry', { isElectrical: true, title: 'Turnkey Electrical & Substation Inquiry' })}
                className="btn btn-primary"
                style={{ 
                  padding: isMobile ? '11px 18px' : '12px 24px', 
                  fontSize: '0.90rem', 
                  fontWeight: 700,
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Request Fast Quote</span>
                <ArrowRight size={14} />
              </button>

              <a 
                href="tel:+919158658885" 
                className="btn"
                style={{ 
                  padding: isMobile ? '11px 16px' : '12px 20px', 
                  fontSize: '0.90rem', 
                  fontWeight: 600, 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  width: isMobile ? '100%' : 'auto',
                  justifyContent: 'center',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Phone size={14} color="#10b981" />
                <span>+91 91586 58885</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
