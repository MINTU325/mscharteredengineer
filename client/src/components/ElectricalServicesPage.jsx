import React, { useState, useMemo } from 'react';
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

  // Close dropdown on outside click
  React.useEffect(() => {
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
    <div className="electrical-services-page" style={{ background: '#040914', color: '#e2e8f0', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* ── BREADCRUMB & HERO SECTION ── */}
      <section style={{ 
        position: 'relative', 
        padding: '130px 20px 60px', 
        background: 'radial-gradient(ellipse at top, rgba(14, 165, 233, 0.15) 0%, rgba(4, 9, 20, 0.95) 70%)',
        borderBottom: '1px solid rgba(56, 189, 248, 0.15)'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '20px' }}>
            <button 
              onClick={onNavigateHome} 
              style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#cbd5e1' }}>Services</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Electrical &amp; Substation Engineering</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '20px' }}>
            <Zap size={14} className="spin-slow" />
            Class-A Turnkey Electrical &amp; Testing Division
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, color: '#ffffff', letterSpacing: '-0.02em', maxWidth: '980px', marginBottom: '20px' }}>
            High Voltage Testing, Transformer Services &amp; <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Substation Engineering</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.18rem)', color: '#94a3b8', maxWidth: '850px', lineHeight: 1.6, marginBottom: '36px' }}>
            Comprehensive on-site testing for Circuit Breakers, Power Transformers, Relays, and Earth Pits up to 220kV. Turnkey 11kV/33kV substation erection, high-vacuum oil filtration, cable jointing, and statutory CEA safety audits by certified Chartered Engineers.
          </p>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <button 
              onClick={() => onOpenQuote('Electrical & Substation Engineering Services')}
              className="btn btn-primary"
              style={{ 
                padding: '13px 28px', 
                fontSize: '0.96rem', 
                fontWeight: 700, 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(2, 132, 199, 0.35)'
              }}
            >
              <span>Request Testing / Service Quote</span>
              <ArrowRight size={16} />
            </button>

            <a 
              href="tel:+919158658885" 
              className="btn"
              style={{ 
                padding: '13px 22px', 
                fontSize: '0.96rem', 
                fontWeight: 600, 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px'
              }}
            >
              <Phone size={16} color="#10b981" />
              <span>Talk to Chief Engineer (+91 91586 58885)</span>
            </a>

            <button 
              onClick={() => handleWhatsAppInquiry('Substation & Electrical Services')}
              style={{ 
                padding: '13px 20px', 
                fontSize: '0.96rem', 
                fontWeight: 600, 
                background: 'rgba(16, 185, 129, 0.12)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#34d399',
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <MessageSquare size={16} />
              <span>Instant WhatsApp Query</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px', 
            marginTop: '48px', 
            padding: '20px', 
            borderRadius: '12px', 
            background: 'rgba(15, 23, 42, 0.65)', 
            border: '1px solid rgba(56, 189, 248, 0.12)' 
          }}>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>1500+</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Transformers &amp; Breakers Tested</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10b981' }}>&gt; 70 kV</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Guaranteed Oil BDV Restoration</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fbbf24' }}>24x7</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Emergency Breakdown Mobilization</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a78bfa' }}>100% CEA</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Statutory &amp; CEIG Inspection Reports</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FUTURISTIC CYBER-HUD CONTROL STRIP (ULTRA-COMPACT & ZERO SPACE) ── */}
      <section style={{ 
        position: 'sticky', 
        top: '64px', 
        zIndex: 35, 
        padding: '8px 20px', 
        background: 'rgba(4, 9, 20, 0.88)', 
        backdropFilter: 'blur(16px)', 
        borderBottom: '1px solid rgba(56, 189, 248, 0.16)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
      }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            
            {/* 1. Left: Cyber Search Bar */}
            <div style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              minWidth: '240px', 
              flex: '1', 
              maxWidth: '380px' 
            }}>
              <Search 
                size={15} 
                style={{ 
                  position: 'absolute', 
                  left: '12px', 
                  color: searchQuery ? '#38bdf8' : '#64748b', 
                  pointerEvents: 'none',
                  transition: 'color 0.2s ease'
                }} 
              />
              <input 
                type="text"
                placeholder="Search 24+ services (e.g. breaker, BDV, cable)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  height: '38px',
                  padding: '0 32px 0 34px',
                  borderRadius: '20px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: searchQuery ? '1px solid #38bdf8' : '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#ffffff',
                  fontSize: '0.84rem',
                  outline: 'none',
                  boxShadow: searchQuery ? '0 0 12px rgba(56, 189, 248, 0.2)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '0.78rem',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* 2. Center: Quick Micro HUD Chips (Zero Scrollbar) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
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
                      height: '30px',
                      padding: '0 11px',
                      borderRadius: '15px',
                      fontSize: '0.76rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isSelected ? 'rgba(2, 132, 199, 0.35)' : 'rgba(15, 23, 42, 0.6)',
                      color: isSelected ? '#38bdf8' : '#94a3b8',
                      boxShadow: isSelected ? '0 0 10px rgba(56, 189, 248, 0.3)' : 'none',
                      transition: 'all 0.18s ease'
                    }}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            {/* 3. Right: Futuristic Category HUD Popover Dropdown */}
            <div className="category-hud-container" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
              
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                style={{
                  height: '36px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#ffffff',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                }}
              >
                <SlidersHorizontal size={13} color="#38bdf8" />
                <span style={{ color: '#cbd5e1' }}>Category:</span>
                <span style={{ color: '#38bdf8' }}>
                  {SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.name || 'All'}
                </span>
                <ChevronDown size={14} color="#38bdf8" style={{ transform: categoryDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
              </button>

              {/* Glowing Live Results Pill */}
              <div style={{
                height: '36px',
                padding: '0 12px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.78rem',
                color: '#34d399',
                fontWeight: 600,
                fontFamily: 'monospace'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981', display: 'inline-block' }} />
                <span>{filteredServices.length} LIVE</span>
              </div>

              {/* Futuristic Cyber Dropdown Menu */}
              {categoryDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '44px',
                  right: 0,
                  width: '280px',
                  background: 'rgba(8, 14, 28, 0.96)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  borderRadius: '12px',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(2, 132, 199, 0.15)',
                  padding: '8px',
                  zIndex: 50
                }}>
                  <div style={{ padding: '6px 10px 8px', fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    Filter By Discipline ({SERVICE_CATEGORIES.length})
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '6px', maxHeight: '320px', overflowY: 'auto' }}>
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
                            fontSize: '0.82rem',
                            fontWeight: isSelected ? 700 : 500,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ 
                              width: '6px', 
                              height: '6px', 
                              borderRadius: '50%', 
                              background: isSelected ? '#38bdf8' : 'rgba(255, 255, 255, 0.2)',
                              boxShadow: isSelected ? '0 0 6px #38bdf8' : 'none'
                            }} />
                            <span>{cat.name}</span>
                          </div>
                          <span style={{ 
                            fontSize: '0.72rem', 
                            padding: '1px 6px', 
                            borderRadius: '10px', 
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

      {/* ── SERVICES GRID (WITH REALISTIC IMAGES) ── */}
      <section style={{ padding: '60px 20px' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'rgba(15, 23, 42, 0.4)', borderRadius: '12px', border: '1px dashed rgba(255, 255, 255, 0.15)' }}>
              <AlertTriangle size={36} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ color: '#ffffff', marginBottom: '8px' }}>No matching engineering services found</h3>
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Try searching for another keyword or select "All Services".</p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn btn-primary"
                style={{ padding: '8px 18px', fontSize: '0.88rem' }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
              gap: '28px' 
            }}>
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  style={{
                    background: 'rgba(15, 23, 42, 0.65)',
                    border: '1px solid rgba(56, 189, 248, 0.14)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(2, 132, 199, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.14)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Service Image with Badges */}
                  <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#0a101f' }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        transition: 'transform 0.4s ease',
                        filter: 'brightness(0.92)'
                      }}
                      onError={(e) => {
                        // Fallback image in case of network block
                        e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    
                    {/* Dark gradient overlay for contrast */}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)' }} />

                    {/* Top Badges */}
                    <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                      <span style={{ 
                        padding: '4px 10px', 
                        borderRadius: '6px', 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        background: service.badgeColor || '#0284c7', 
                        color: '#ffffff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                      }}>
                        {service.badge}
                      </span>
                    </div>

                    {/* Standards tag */}
                    <div style={{ position: 'absolute', bottom: '12px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ 
                        fontSize: '0.74rem', 
                        color: '#38bdf8', 
                        background: 'rgba(4, 9, 20, 0.85)', 
                        padding: '3px 8px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        fontFamily: 'monospace'
                      }}>
                        {service.standards}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.22rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.35, marginBottom: '10px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.55, marginBottom: '18px' }}>
                      {service.shortDesc}
                    </p>

                    {/* Feature bullets */}
                    <div style={{ marginBottom: '20px', flex: 1 }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Scope &amp; Deliverables:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {service.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#e2e8f0', lineHeight: 1.4 }}>
                            <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Suitable For */}
                    <div style={{ padding: '10px 12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', marginBottom: '18px', fontSize: '0.78rem', color: '#94a3b8' }}>
                      <strong style={{ color: '#cbd5e1' }}>Suitable for: </strong>{service.suitableFor}
                    </div>

                    {/* Card CTAs */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px', marginTop: 'auto' }}>
                      <button 
                        onClick={() => onOpenQuote(service.title, service)}
                        className="btn btn-primary"
                        style={{ 
                          padding: '10px 14px', 
                          fontSize: '0.86rem', 
                          fontWeight: 700, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          gap: '6px',
                          borderRadius: '8px'
                        }}
                      >
                        <span>Book Service</span>
                        <ArrowRight size={14} />
                      </button>

                      <button 
                        onClick={() => handleWhatsAppInquiry(service.title)}
                        title="Chat on WhatsApp"
                        style={{ 
                          padding: '10px 12px', 
                          background: 'rgba(16, 185, 129, 0.12)', 
                          border: '1px solid rgba(16, 185, 129, 0.25)', 
                          borderRadius: '8px', 
                          color: '#34d399', 
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <MessageSquare size={16} />
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
      <section style={{ padding: '60px 20px', background: 'rgba(10, 16, 31, 0.8)', borderTop: '1px solid rgba(56, 189, 248, 0.1)', borderBottom: '1px solid rgba(56, 189, 248, 0.1)' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              <Gauge size={14} />
              Testing Infrastructure
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
              Advanced Testing Instruments &amp; Quality Rigor
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.6 }}>
              All tests are executed using NABL-calibrated precision instrumentation complying strictly with Indian Electricity Rules, Central Electricity Authority (CEA) norms, and international IEC/IEEE standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Cpu size={24} color="#38bdf8" style={{ marginBottom: '12px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '8px' }}>High-Speed Breaker Analyzers</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Multi-channel digital timing and contact resistance meters measuring contact bounce and millisecond operating sequences.</p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Flame size={24} color="#ea580c" style={{ marginBottom: '12px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '8px' }}>FLIR Infrared Thermography</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>High-resolution radiometric thermal cameras detecting hot joints, unbalanced load, and loose terminations under live operation.</p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <Activity size={24} color="#10b981" style={{ marginBottom: '12px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '8px' }}>100kV Automatic BDV Kits</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Microprocessor controlled transformer oil breakdown voltage test sets adhering to IS 6792 / IEC 60156 standards.</p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(56, 189, 248, 0.12)' }}>
              <ShieldCheck size={24} color="#a78bfa" style={{ marginBottom: '12px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '8px' }}>CEIG &amp; DISCOM Liasioning</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>Chartered Engineer certification and complete statutory clearance handling for Chief Electrical Inspector approval.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ── */}
      <section style={{ padding: '60px 20px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.94rem' }}>
              Essential insights on industrial electrical maintenance, testing cycles, and regulatory clearances.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{ 
                    borderRadius: '10px', 
                    background: 'rgba(15, 23, 42, 0.7)', 
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '0.98rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '12px'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} color="#38bdf8" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', flexShrink: 0 }} />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 20px 18px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px' }}>
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
      <section style={{ padding: '20px 20px 0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ 
            padding: '40px 32px', 
            borderRadius: '16px', 
            background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Need Substation Testing, Overhauling or Turnkey Contracting?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '650px', lineHeight: 1.5 }}>
                Connect directly with our IIT Roorkee alumni Chartered Engineers for prompt mobilization, technical feasibility, and customized quotation across India.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenQuote('Turnkey Electrical & Substation Inquiry')}
                className="btn btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.94rem', fontWeight: 700 }}
              >
                <span>Request Fast Quote</span>
                <ArrowRight size={15} />
              </button>

              <a 
                href="tel:+919158658885" 
                className="btn"
                style={{ 
                  padding: '12px 20px', 
                  fontSize: '0.94rem', 
                  fontWeight: 600, 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff'
                }}
              >
                <Phone size={15} color="#10b981" />
                <span>+91 91586 58885</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
