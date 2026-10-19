import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageSquare,
  HelpCircle,
  Wrench,
  Search,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Factory,
  Hammer,
  Award,
  Layers,
  Sparkles,
  Eye,
  ExternalLink
} from 'lucide-react';

export default function FabricationServicesPage({ onOpenQuote, onNavigateHome }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState('All');
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [currentAboutSlide, setCurrentAboutSlide] = useState(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  const aboutSlides = [
    {
      image: '/fabrication/factory-tin-shed-peb-warehouse.jpg',
      alt: 'Factory Tin Shed & PEB Warehouse',
      badge: 'Turnkey Industrial Sheds',
      badgeColor: '#38bdf8',
      title: 'PEB Warehouses & Tin Sheds',
      desc: 'JSW / Tata Bluescope Galvalume Roofing'
    },
    {
      image: '/fabrication/structural-steel-tower-erection.jpg',
      alt: 'On-site Structural Stability Audit',
      badge: 'Engineering & Audit',
      badgeColor: '#10b981',
      title: 'Structural Stability Certification',
      desc: '100% DISH & CEIG Regulatory Approvals'
    },
    {
      image: '/fabrication/heavy-iron-fabrication-sliding-gate.jpg',
      alt: 'Heavy Iron Fabrication & Sliding Gate',
      badge: 'Heavy Metal Framing',
      badgeColor: '#f97316',
      title: 'Heavy Iron Gates & Platforms',
      desc: 'Precision Sliding & Industrial Gantries'
    },
    {
      image: '/fabrication/industrial-chimney-stack-fabrication.jpg',
      alt: 'Industrial Steel Chimney Fabrication',
      badge: 'Industrial Chimneys',
      badgeColor: '#eab308',
      title: 'Self-Supporting Steel Chimneys',
      desc: 'IS 6533 Standard with CPCB Sampling Ports'
    },
    {
      image: '/fabrication/heavy-industrial-ducting-support.jpg',
      alt: 'Heavy Industrial Ducting & Trestles',
      badge: 'Industrial Ducting & Stacks',
      badgeColor: '#38bdf8',
      title: 'Boiler Flue Gas Ducting',
      desc: 'High-Temperature Expansion Joints & Trestles'
    },
    {
      image: '/fabrication/architectural-glass-railing-facade.jpg',
      alt: 'Architectural Glass & Railing Facade',
      badge: 'Architectural Railings',
      badgeColor: '#a855f7',
      title: 'Toughened Glass & SS Works',
      desc: 'SS 304/316 Balconies & Commercial Railings'
    }
  ];

  // Auto-play slider effect (pauses on hover)
  useEffect(() => {
    if (isSliderHovered) return;
    const interval = setInterval(() => {
      setCurrentAboutSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [isSliderHovered, aboutSlides.length]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Expert Valuers & Premium Fabrication Services | MS Chartered Engineers';

    const updateOrCreateMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOrCreateMeta('description', 'Expert Valuers & Premium Fabrication Services by MS Chartered Engineers. Precision-engineered Iron and Tin Shed structures supervised by IIT Roorkee alumni Chartered Engineers.');
    updateOrCreateMeta('keywords', 'Iron fabrication, tin shed fabrication, industrial sheds, PEB warehouse, valuation technical consultancy, industrial chimneys, structural stability certificate, Jaipur');
    updateOrCreateMeta('og:title', 'Expert Valuers & Premium Fabrication Services | MS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'Precision-engineered Iron and Tin Shed structures supervised by Chartered Engineers. Stamped structural stability certificates.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/fabrication-services', true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Gallery items matching user request
  const galleryItems = [
    {
      id: 1,
      title: 'Factory Tin Shed & PEB Warehouse',
      category: 'Tin Sheds',
      subtitle: 'Clear-span industrial warehouse with JSW Galvalume roofing',
      image: '/fabrication/factory-tin-shed-peb-warehouse.jpg',
      specs: '28,000 Sq.Ft | Tata Bluescope 0.50mm | IS 2062 Grade Steel'
    },
    {
      id: 2,
      title: 'Heavy Iron Fabrication & Sliding Gate',
      category: 'Iron Works',
      subtitle: 'Automated cantilever sliding gate & structural framing',
      image: '/fabrication/heavy-iron-fabrication-sliding-gate.jpg',
      specs: '42 Ft Clear Span | Motorized Cantilever | Anti-Sag Truss'
    },
    {
      id: 3,
      title: 'Industrial Chimney Stack Fabrication',
      category: 'Chimneys',
      subtitle: '30-meter self-supporting steel chimney stack with ladder cage',
      image: '/fabrication/industrial-chimney-stack-fabrication.jpg',
      specs: '30m Height | IS 6533 Standard | CPCB Emission Port'
    },
    {
      id: 4,
      title: 'Structural Steel Tower & Framework',
      category: 'Valuation & Technical',
      subtitle: 'Heavy industrial tower framing & load assessment',
      image: '/fabrication/structural-steel-tower-erection.jpg',
      specs: '100% UT Tested Welds | Stamped Stability Certificate'
    },
    {
      id: 5,
      title: 'Architectural Glass & MS Railings',
      category: 'Iron Works',
      subtitle: 'Toughened glass & stainless/mild steel architectural railing',
      image: '/fabrication/architectural-glass-railing-facade.jpg',
      specs: '12mm Toughened Glass | SS 304 Grade Post Base'
    },
    {
      id: 6,
      title: 'Heavy Industrial Ducting & Support',
      category: 'Chimneys',
      subtitle: 'Large-bore boiler flue gas ducting and trestle supports',
      image: '/fabrication/heavy-industrial-ducting-support.jpg',
      specs: '1,800mm Diameter MS Ducting | Thermal Expansion Joints'
    },
    {
      id: 7,
      title: 'Boiler Stack Foundation & Base',
      category: 'Valuation & Technical',
      subtitle: 'Precision anchor bolt cluster and heavy base plate rigging',
      image: '/fabrication/boiler-stack-foundation-base.jpg',
      specs: 'M35 Concrete Anchor Embedment | 40mm Base Plate'
    },
    {
      id: 8,
      title: 'Spiral Inspection Platform & Safety Cage',
      category: 'Iron Works',
      subtitle: 'OSHA compliant industrial ladder cage and access walkways',
      image: '/fabrication/spiral-ladder-inspection-platform.jpg',
      specs: 'Galvanized Chequered Plate | Fall Arrest Safety Rail'
    }
  ];

  const filteredGallery = activeGalleryFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeGalleryFilter);

  // FAQ Categories & List
  const faqCategories = ['All', 'Tin Sheds & PEB', 'Chimneys & Exhaust', 'Iron Works', 'Certification & Safety'];

  const faqs = [
    {
      category: 'Chimneys & Exhaust',
      q: 'What types of industrial chimneys and exhaust stacks do you fabricate?',
      a: 'We fabricate self-supporting, guy-wired, and tower-supported industrial steel chimneys ranging from 15 meters to over 45 meters in height. Every chimney is designed in accordance with IS 6533 (Code of practice for design of steel chimneys), accounting for seismic forces, dynamic wind oscillations, and flue gas temperatures. We also integrate CPCB-compliant emission sampling ports, ladders with safety fall cages, aviation warning lights, and lightning arresters.'
    },
    {
      category: 'Tin Sheds & PEB',
      q: 'What materials and sheets are used for factory tin sheds and PEB structures?',
      a: 'We use certified IS 2062 Grade structural steel (tubular hollow sections, angles, channels, and built-up I-sections) for the primary trusses and columns. For roofing and side cladding, we deploy premium 0.45mm–0.50mm high-tensile color-coated Galvalume/Zincalume sheets from trusted brands such as Tata Bluescope, JSW Steel, and Jindal, backed by a 15–20 year corrosion warranty.'
    },
    {
      category: 'Certification & Safety',
      q: 'Do you provide structural stability and Chartered Engineer inspection certificates for sheds and chimneys?',
      a: 'Yes, absolutely. Because our core firm is headed by Er. Mukesh Singh (B.Tech IIT Roorkee, Chartered Engineer IEI), every fabrication project undergoes structural design verification. We issue official stamped Structural Stability Certificates, Wind Load Compliance reports, and weld inspection documentation needed for DISH (Factories Act), CEIG, and local municipality approvals.'
    },
    {
      category: 'Iron Works',
      q: 'What heavy iron and mild steel (MS) fabrication works do you execute?',
      a: 'Our iron fabrication division specializes in heavy motorized cantilever sliding gates (up to 40+ ft span), gear-operated heavy-duty industrial rolling shutters, structural steel mezzanine floors, overhead crane gantry girders (up to 35 MT capacity), emergency fire escape stairwells, equipment skids, and factory perimeter boundary security grills.'
    },
    {
      category: 'Tin Sheds & PEB',
      q: 'How do you price fabrication projects and what is the typical turnaround?',
      a: 'For industrial chimneys, sheds, and iron fabrication, pricing is quoted on a per-kilogram (per MT) or per-square-foot basis depending on steel grade, tonnage, and on-site erection complexity. Turnkey small sheds (2,000–5,000 sq.ft) are delivered in 15–25 days, while heavy chimney stacks and large PEB warehouses take 30–60 days from drawing approval.'
    },
    {
      category: 'Certification & Safety',
      q: 'What welding standards and NDT quality inspection tests are conducted?',
      a: 'All shop and on-site welding is carried out by qualified welders adhering strictly to AWS D1.1 (Structural Welding Code – Steel) and ASME Section IX. Depending on project criticality, weld joints undergo Non-Destructive Testing (NDT) including Ultrasonic Testing (UT), Dye Penetrant Testing (DPT), and Radiographic Testing (RT) to ensure zero defect execution.'
    },
    {
      category: 'Tin Sheds & PEB',
      q: 'Can you design and erect sheds in high wind velocity zones across Rajasthan?',
      a: 'Yes. Rajasthan has varying wind zones ranging from 44 m/s to 47 m/s (Zone 4) as per IS 875 (Part 3). Our IIT Roorkee structural engineers run precise dynamic wind analysis and terrain roughness calculations, specifying reinforced tubular trusses, robust anchor bolt embedment depths, and high-strength sag rods to ensure complete storm safety.'
    },
    {
      category: 'Chimneys & Exhaust',
      q: 'Do you provide turnkey industrial flue gas ducting and boiler breeching?',
      a: 'Yes. Along with vertical chimney stacks, we fabricate and install large-bore mild steel ducting (up to 2,500mm diameter), transition breeching, flexible expansion bellows, manual/motorized draft dampers, and heavy support trestles connecting boilers, furnaces, and incinerators to the stack.'
    },
    {
      category: 'Iron Works',
      q: 'What architectural glass and aluminium fabrication work do you provide?',
      a: 'Our architectural division specializes in high-spec commercial and residential works: SS 304/316 grade glass balcony and staircase railings, structural glazing, modern aluminium curtain walls, soundproof UPVC windows and doors, frameless toughened glass partitions, and modern invisible safety grills.'
    },
    {
      category: 'Certification & Safety',
      q: 'How do I request a site inspection or get an official quotation?',
      a: 'You can simply call our direct fabrication engineering desk at +91 91586 58885 or click "Request Fabrication Quote". Our senior engineering team will schedule a site visit in Jaipur, Sitapura, Vishwakarma, Bhiwadi, or any industrial zone across Rajasthan within 24 to 48 hours.'
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: '#0a101d', color: '#f8fafc', minHeight: '100vh' }}>
      
      {/* ── 1. HEADER (STICKY NAVIGATION) ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(10, 22, 44, 0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.2)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          {/* Left: Company Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#cbd5e1',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '0.80rem',
                cursor: 'pointer'
              }}
              title="Return to MS Chartered Engineers Homepage"
            >
              <ArrowLeft size={13} /> Home
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/logo.png"
                alt="MS Chartered Engineers Logo"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.src = '/logo.svg'; }}
              />
              <div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: '#ffffff', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                  MS CHARTERED ENGINEERS
                </div>
                <div style={{ fontSize: '0.68rem', color: '#f59e0b', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Valuers &amp; Technical Consultancy
                </div>
              </div>
            </div>
          </div>

          {/* Center Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '0.86rem',
              fontWeight: 600
            }}
          >
            <button
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '6px 4px' }}
            >
              Contact
            </button>
          </nav>

          {/* Right: Call Now & Get Quote Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#0c4483',
                color: '#ffffff',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                padding: '7px 16px',
                borderRadius: '24px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(12, 68, 131, 0.4)'
              }}
            >
              <PhoneCall size={14} color="#38bdf8" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => onOpenQuote('Fabrication Services Inquiry', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '7px 16px', fontSize: '0.84rem', borderRadius: '24px' }}
            >
              <Wrench size={13} />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── 2. HERO SECTION (FIRST FOLD) ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '78vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'linear-gradient(180deg, rgba(10, 16, 29, 0.78) 0%, rgba(10, 22, 44, 0.94) 100%), url(/fabrication/factory-tin-shed-peb-warehouse.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '80px 20px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Top Pill Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(12, 68, 131, 0.65)',
              border: '1px solid rgba(56, 189, 248, 0.5)',
              padding: '6px 18px',
              borderRadius: '9999px',
              fontSize: '0.80rem',
              fontWeight: 800,
              color: '#38bdf8',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '22px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            }}
          >
            <ShieldCheck size={16} color="#38bdf8" />
            <span>Chartered Engineer Supervised Fabrication &amp; Valuations</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#ffffff',
              margin: '0 auto 20px',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.6)'
            }}
          >
            Expert Valuers &amp; <span style={{ color: '#f59e0b', textShadow: '0 0 30px rgba(245, 158, 11, 0.35)' }}>Premium Fabrication</span> Services
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.3rem)',
              color: '#e2e8f0',
              lineHeight: 1.6,
              maxWidth: '820px',
              margin: '0 auto 34px',
              fontWeight: 400
            }}
          >
            Precision-engineered Iron and Tin Shed structures supervised by Chartered Engineers. We combine certified structural valuation with heavy turnkey metal fabrication across Rajasthan &amp; Pan-India.
          </p>

          {/* Call-to-Action Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '40px'
            }}
          >
            <button
              onClick={() => scrollToSection('services')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#0c4483',
                fontWeight: 800,
                fontSize: '0.96rem',
                padding: '14px 30px',
                borderRadius: '30px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore Services</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => onOpenQuote('Fabrication Services Inquiry', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.96rem',
                padding: '14px 32px',
                borderRadius: '30px',
                boxShadow: '0 4px 25px rgba(245, 158, 11, 0.45)'
              }}
            >
              <Wrench size={16} />
              <span>Get a Quote</span>
            </button>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                padding: '14px 26px',
                borderRadius: '30px',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <Phone size={15} color="#38bdf8" />
              <span>+91 91586 58885</span>
            </a>
          </div>

          {/* Badges / Trust points */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '0.84rem',
              color: '#cbd5e1'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>IIT Roorkee Alumnus Led</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>IS 2062 Certified Structural Steel</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>Stamped Structural Stability Certificates</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span>Turnkey On-Site Erection</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT US SECTION (SIDE-BY-SIDE LAYOUT) ── */}
      <section
        id="about"
        style={{
          padding: '80px 20px',
          background: '#070d18',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '48px',
              alignItems: 'center'
            }}
          >
            {/* Left Side: Professional Engineer & Project Showcase Slider */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setIsSliderHovered(true)}
              onMouseLeave={() => setIsSliderHovered(false)}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '440px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  background: 'linear-gradient(180deg, #0c4483 0%, #070d18 100%)'
                }}
              >
                {/* Images with smooth fade & scale transitions */}
                {aboutSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: currentAboutSlide === idx ? 1 : 0,
                      transform: currentAboutSlide === idx ? 'scale(1)' : 'scale(1.04)',
                      transition: 'opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: currentAboutSlide === idx ? 'auto' : 'none'
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        display: 'block'
                      }}
                    />
                    {/* Dark gradient for text legibility */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(7, 13, 24, 0.8) 100%)'
                      }}
                    />
                  </div>
                ))}

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={() => setCurrentAboutSlide((prev) => (prev - 1 + aboutSlides.length) % aboutSlides.length)}
                  aria-label="Previous Slide"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#0c4483'; e.currentTarget.style.borderColor = '#38bdf8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'; }}
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={() => setCurrentAboutSlide((prev) => (prev + 1) % aboutSlides.length)}
                  aria-label="Next Slide"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(6px)',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#0c4483'; e.currentTarget.style.borderColor = '#38bdf8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'; }}
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots indicator at the bottom center of the image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(10, 16, 29, 0.75)',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  {aboutSlides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setCurrentAboutSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      style={{
                        width: currentAboutSlide === dotIdx ? '22px' : '7px',
                        height: '7px',
                        borderRadius: '4px',
                        background: currentAboutSlide === dotIdx ? '#38bdf8' : 'rgba(255, 255, 255, 0.4)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic Floating Highlight Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-22px',
                  right: '18px',
                  zIndex: 12,
                  background: 'rgba(12, 68, 131, 0.95)',
                  border: '1px solid rgba(56, 189, 248, 0.5)',
                  borderRadius: '12px',
                  padding: '12px 18px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  maxWidth: '280px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div
                  style={{
                    fontSize: '0.70rem',
                    color: aboutSlides[currentAboutSlide].badgeColor,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  {aboutSlides[currentAboutSlide].badge}
                </div>
                <div style={{ fontWeight: 800, color: '#ffffff', fontSize: '0.94rem', marginTop: '2px', lineHeight: 1.25 }}>
                  {aboutSlides[currentAboutSlide].title}
                </div>
                <div style={{ fontSize: '0.76rem', color: '#cbd5e1', marginTop: '2px' }}>
                  {aboutSlides[currentAboutSlide].desc}
                </div>
              </div>
            </div>

            {/* Right Side: Company Description & Trust Focus */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#38bdf8',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                <Building2 size={15} />
                <span>About MS Chartered Engineers</span>
              </div>

              <h2
                style={{
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.22,
                  marginBottom: '10px'
                }}
              >
                Engineered for Strength. <span style={{ color: '#38bdf8' }}>Certified for Safety.</span>
              </h2>

              <div
                style={{
                  fontSize: '1rem',
                  color: '#f59e0b',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  marginBottom: '20px'
                }}
              >
                Valuers &amp; Technical Consultancy
              </div>

              <p
                style={{
                  color: '#cbd5e1',
                  fontSize: '0.98rem',
                  lineHeight: 1.7,
                  marginBottom: '18px'
                }}
              >
                At <strong>MS Chartered Engineers</strong>, we bridge the vital gap between heavy structural fabrication and certified statutory engineering. Founded and directed by an IIT Roorkee graduate and registered Chartered Engineer (IEI), we deliver end-to-end solutions — from initial structural calculations and wind analysis to shop fabrication, site erection, and stamped structural stability certification.
              </p>

              <p
                style={{
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.65,
                  marginBottom: '28px'
                }}
              >
                Whether it is a 50,000 sq.ft industrial tin shed, a 35-meter industrial chimney stack, or heavy motorized iron gates, our clients trust us because every weld, connection, and truss is verified against Bureau of Indian Standards (IS 2062, IS 800, IS 875, IS 6533).
              </p>

              {/* 4 Quick Stat / Metric Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px',
                  marginBottom: '32px'
                }}
              >
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '16px'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#f59e0b', lineHeight: 1 }}>25+</div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px', fontWeight: 600 }}>Years Technical Experience</div>
                </div>
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '16px'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8', lineHeight: 1 }}>1,200+</div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px', fontWeight: 600 }}>Projects &amp; Audits Completed</div>
                </div>
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '16px'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10b981', lineHeight: 1 }}>100%</div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px', fontWeight: 600 }}>Stamped Stability Pass Rate</div>
                </div>
                <div
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    padding: '16px'
                  }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a855f7', lineHeight: 1 }}>IIT</div>
                  <div style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '6px', fontWeight: 600 }}>Roorkee Technical Pedigree</div>
                </div>
              </div>

              {/* Consultation Link */}
              <button
                onClick={() => onOpenQuote('Consultation Inquiry', { department: 'fabrication' })}
                className="btn btn-gold"
                style={{ padding: '12px 28px', fontSize: '0.90rem' }}
              >
                <span>Request Engineer Consultation</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES SECTION (GRID LAYOUT) ── */}
      <section
        id="services"
        style={{
          padding: '84px 20px',
          background: '#0c1424',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1220px', margin: '0 auto' }}>
          {/* Section Heading */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(12, 68, 131, 0.4)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                padding: '6px 18px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#38bdf8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <Wrench size={15} color="#38bdf8" />
              <span>Core Services</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '16px'
              }}
            >
              Comprehensive Engineering &amp; <span style={{ color: '#f59e0b' }}>Fabrication Services</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65 }}>
              Expert metal fabrication supervised by licensed Chartered Engineers. Built strictly according to IS standards with turnkey erection and certified documentation.
            </p>
          </div>

          {/* Grid Layout: 3 Primary Requested Services + 1 Specialty */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '28px'
            }}
          >
            {/* SERVICE 1: Iron Fabrication Work */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#f59e0b';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(245, 158, 11, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/fabrication/heavy-iron-fabrication-sliding-gate.jpg"
                  alt="Iron Fabrication Work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(10, 16, 29, 0.85)',
                    border: '1px solid #f59e0b',
                    color: '#f59e0b',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  Heavy Metal Framing
                </div>
              </div>
              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  Iron Fabrication Work
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Heavy structural framing, industrial gates, platforms, crane gantry girders, factory mezzanine decks, and structural steel staircases designed for maximum load capacity.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#f59e0b" />
                    <span>Heavy Cantilever &amp; Track Sliding Gates (up to 40+ ft)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#f59e0b" />
                    <span>Overhead Crane Gantry Girders &amp; Runways (up to 35 MT)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#f59e0b" />
                    <span>Industrial Mezzanines &amp; Fire Escape Stairwells</span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => onOpenQuote('Iron Fabrication Inquiry', { service: 'Iron Fabrication Work' })}
                    style={{
                      width: '100%',
                      padding: '11px 18px',
                      background: 'rgba(245, 158, 11, 0.12)',
                      border: '1px solid #f59e0b',
                      color: '#f59e0b',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Inquire About Iron Fabrication</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICE 2: Tin Shed Fabrication Work */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#38bdf8';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(56, 189, 248, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/fabrication/factory-tin-shed-peb-warehouse.jpg"
                  alt="Tin Shed Fabrication Work"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(10, 16, 29, 0.85)',
                    border: '1px solid #38bdf8',
                    color: '#38bdf8',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  Industrial Sheds &amp; PEB
                </div>
              </div>
              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  Tin Shed Fabrication Work
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Industrial sheds, warehouse roofing, and Pre-Engineered Building (PEB) structures built with premium Galvalume &amp; Zincalume sheets designed for 47 m/s wind safety.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#38bdf8" />
                    <span>Clear-Span Factory Sheds &amp; Warehouses (2k–100k+ sq.ft)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#38bdf8" />
                    <span>Tata Bluescope / JSW 0.50mm Anti-Corrosion Sheets</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#38bdf8" />
                    <span>Full Wind Load Calculations (IS 875 Part 3)</span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => onOpenQuote('Tin Shed Inquiry', { service: 'Tin Shed Fabrication Work' })}
                    style={{
                      width: '100%',
                      padding: '11px 18px',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid #38bdf8',
                      color: '#38bdf8',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Inquire About Tin Sheds</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* SERVICE 3: Valuation & Technical Consultancy */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(16, 185, 129, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div style={{ height: '230px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src="/fabrication/structural-steel-tower-erection.jpg"
                  alt="Valuation & Technical Consultancy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(10, 16, 29, 0.85)',
                    border: '1px solid #10b981',
                    color: '#10b981',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    textTransform: 'uppercase'
                  }}
                >
                  Chartered Engineering
                </div>
              </div>
              <div style={{ padding: '26px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  Valuation &amp; Technical Consultancy
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Certified engineering audits, structural stability assessments, plant &amp; machinery valuations, and official Chartered Engineer documentation for statutory bodies.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#10b981" />
                    <span>DISH (Factories Act) Structural Stability Certificates</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#10b981" />
                    <span>Plant, Machinery &amp; Industrial Asset Valuations</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#10b981" />
                    <span>Non-Destructive Testing (UT, DPT) Weld Inspections</span>
                  </div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => onOpenQuote('Valuation Inquiry', { service: 'Valuation & Technical Consultancy' })}
                    style={{
                      width: '100%',
                      padding: '11px 18px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid #10b981',
                      color: '#10b981',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Inquire About Valuation &amp; Audit</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PROJECT GALLERY: "EXPLORE OUR WORK" ── */}
      <section
        id="gallery"
        style={{
          padding: '84px 20px',
          background: '#070d18',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '1220px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(12, 68, 131, 0.4)',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                padding: '6px 18px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#38bdf8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <Layers size={15} color="#38bdf8" />
              <span>Project Portfolio</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '14px'
              }}
            >
              Explore Our <span style={{ color: '#38bdf8' }}>Work</span>
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65 }}>
              Showcasing recent turnkey fabrication, PEB warehouse roofing, heavy iron works, and industrial chimneys executed across Rajasthan.
            </p>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginTop: '26px'
              }}
            >
              {['All', 'Tin Sheds', 'Iron Works', 'Chimneys', 'Valuation & Technical'].map((cat) => {
                const isActive = activeGalleryFilter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveGalleryFilter(cat)}
                    style={{
                      background: isActive ? '#0c4483' : 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.12)'}`,
                      color: isActive ? '#ffffff' : '#94a3b8',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      padding: '7px 18px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(12, 68, 131, 0.4)' : 'none'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry / Grid Gallery */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '22px'
            }}
          >
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImage(item)}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <div
                    style={{
                      fontSize: '0.70rem',
                      color: '#38bdf8',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '4px'
                    }}
                  >
                    {item.category}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.80rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '8px' }}>
                    {item.subtitle}
                  </p>
                  <div style={{ fontSize: '0.74rem', color: '#f59e0b', fontWeight: 600 }}>
                    {item.specs}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal Lightbox */}
      {selectedGalleryImage && (
        <div
          onClick={() => setSelectedGalleryImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(5, 10, 20, 0.9)',
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
              maxWidth: '800px',
              width: '100%',
              background: '#0f172a',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
            }}
          >
            <img
              src={selectedGalleryImage.image}
              alt={selectedGalleryImage.title}
              style={{ width: '100%', maxHeight: '460px', objectFit: 'cover' }}
            />
            <div style={{ padding: '22px 26px' }}>
              <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase' }}>
                {selectedGalleryImage.category}
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 800, margin: '6px 0' }}>
                {selectedGalleryImage.title}
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.90rem', marginBottom: '12px' }}>
                {selectedGalleryImage.subtitle}
              </p>
              <div style={{ color: '#f59e0b', fontSize: '0.82rem', fontWeight: 600, marginBottom: '18px' }}>
                Specifications: {selectedGalleryImage.specs}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const title = selectedGalleryImage.title;
                    setSelectedGalleryImage(null);
                    onOpenQuote(`Inquiry: ${title}`, { service: title });
                  }}
                  className="btn btn-gold"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  <Wrench size={14} /> Request Quote for Similar Project
                </button>
                <button
                  onClick={() => setSelectedGalleryImage(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '8px 18px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 6. CONTACT & CONSULTATION BANNER (DIRECTLY ABOVE FAQ) ── */}
      <section
        id="contact"
        style={{
          padding: '64px 20px',
          background: 'linear-gradient(135deg, rgba(12, 68, 131, 0.4) 0%, rgba(7, 13, 24, 0.95) 100%)',
          borderBottom: '1px solid rgba(56, 189, 248, 0.2)'
        }}
      >
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#f59e0b',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '10px'
                }}
              >
                Direct Fabrication Desk
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
                Ready to Start Your Project?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '22px' }}>
                Connect directly with our IIT Roorkee structural engineering desk for on-site measurement, structural feasibility analysis, and stamped certifications in Jaipur &amp; across Rajasthan.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} color="#38bdf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Phone / Direct Helpline</div>
                    <a href="tel:+919158658885" style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>+91 91586 58885</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                    <a href="mailto:ms.charteredengineer@gmail.com" style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}>ms.charteredengineer@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#f8fafc' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Globe size={18} color="#f59e0b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600 }}>Official Website</div>
                    <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>www.mscharteredengineer.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(15, 23, 42, 0.95)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '16px',
                padding: '32px',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5)',
                textAlign: 'center'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Request Turnkey Quotation
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '22px', lineHeight: 1.6 }}>
                Submit project specifications for PEB sheds, heavy gates, structural steel framing, or stability audit.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => onOpenQuote('Fabrication & Shed Project Inquiry', { department: 'fabrication' })}
                  className="btn btn-gold"
                  style={{ width: '100%', padding: '12px', fontSize: '0.94rem' }}
                >
                  <Wrench size={15} /> Request Official Quote
                </button>
                <a
                  href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20want%20to%20discuss%20an%20industrial%20fabrication%20or%20tin%20shed%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', padding: '12px', fontSize: '0.94rem' }}
                >
                  <MessageSquare size={15} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION (KEPT INTACT AS REQUESTED) ── */}
      <section
        id="faq"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245, 158, 11, 0.15) 0%, rgba(7, 13, 24, 0.98) 75%)',
          padding: '64px 20px 42px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.35)',
              borderRadius: '9999px',
              padding: '6px 18px',
              color: '#fbbf24',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px'
            }}
          >
            <HelpCircle size={15} color="#f59e0b" />
            <span>Industrial Fabrication &amp; Tin Shed Knowledge Base</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: '#ffffff',
              margin: '0 auto 16px',
              letterSpacing: '-0.02em'
            }}
          >
            Frequently Asked <span style={{ color: '#f59e0b' }}>Questions</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.96rem, 1.8vw, 1.12rem)',
              color: '#cbd5e1',
              lineHeight: 1.68,
              maxWidth: '780px',
              margin: '0 auto 28px'
            }}
          >
            Clear engineering answers regarding factory tin sheds, PEB industrial warehouses, heavy iron fabrication, industrial steel chimneys, and official Chartered Engineer structural stability certificates.
          </p>

          {/* Search Bar */}
          <div
            style={{
              position: 'relative',
              maxWidth: '560px',
              margin: '0 auto 24px'
            }}
          >
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. tin shed, chimney, cost, welding, certificate)..."
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '9999px',
                padding: '12px 18px 12px 46px',
                color: '#ffffff',
                fontSize: '0.92rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#f59e0b'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'; }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
            {faqCategories.map((cat) => {
              const isActive = activeFaqCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFaqCategory(cat)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${isActive ? '#f59e0b' : 'rgba(255, 255, 255, 0.12)'}`,
                    color: isActive ? '#000000' : '#cbd5e1',
                    fontWeight: 700,
                    fontSize: '0.80rem',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion Section ── */}
      <section style={{ padding: '44px 20px 70px', background: '#0a1220' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          {filteredFaqs.length === 0 ? (
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '40px 24px',
                textAlign: 'center'
              }}
            >
              <HelpCircle size={36} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>No Questions Found</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.90rem', marginBottom: '20px' }}>
                We couldn't find an FAQ matching "{searchQuery}". Feel free to speak directly with our structural engineering team.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFaqCategory('All'); }}
                className="btn btn-outline"
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderLeft: openFaq === idx ? '4px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: openFaq === idx ? '0 8px 24px rgba(245, 158, 11, 0.12)' : 'none'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '14px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: '0.70rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(245, 158, 11, 0.12)',
                          color: '#fbbf24',
                          fontWeight: 700,
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {faq.category}
                      </span>
                      <span>{faq.q}</span>
                    </div>
                    <ChevronDown
                      size={18}
                      color="#f59e0b"
                      style={{
                        transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>
                  {openFaq === idx && (
                    <div
                      style={{
                        padding: '0 22px 20px',
                        color: '#cbd5e1',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        paddingTop: '14px'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Note: Per user instruction: "footer add mt krna already hi sb ddetails faq ke upr wala data only"
          We deliberately do NOT render a duplicate footer here because the global App.jsx renders the universal Footer component! */}
    </div>
  );
}
