import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Truck, 
  Wrench, 
  Sparkles, 
  Clock, 
  Settings, 
  Award, 
  Factory, 
  Sun, 
  Layers, 
  Box, 
  FileText,
  Check
} from 'lucide-react';

export default function SolarStructuralAnalysisPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Precast Concrete Moulds & Solar Fencing Moulds | KS Fabrication';
  }, []);

  // ── Top Hero Slider State ──
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      title: "Precision Engineered Concrete Moulds for Stronger Infrastructure",
      subtitle: "Reliable, Durable and Easy-to-Use Moulds for Solar Fencing, Precast Concrete and Industrial Construction.",
      tagline: "KS Fabrication • Industrial Manufacturing",
      image: "/corridors/auto_welding_robots.webp",
      badge: "Heavy Duty Mild Steel & Aluminium"
    },
    {
      title: "Engineered Precast Moulds for Mega Solar Power Plants",
      subtitle: "Heavy-Duty RCC Fencing Pole Moulds & Boundary Wall Systems protecting 500+ MW solar installations across India.",
      tagline: "Solar Farm Boundary Fencing Solutions",
      image: "/corridors/solar_pv_plant.webp",
      badge: "Zero-Maintenance Security Fencing"
    },
    {
      title: "High-Compaction Vibration Tables & Custom Precast Moulds",
      subtitle: "Mirror-smooth concrete finish, zero honeycombing, high daily casting output with 2000+ repeat mould life.",
      tagline: "Turnkey Precast Machinery & Equipment",
      image: "/corridors/machinery_cnc_center.webp",
      badge: "Direct Factory Pricing • All-India Transport"
    }
  ];

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // ── Product Categories Data ──
  const products = [
    {
      id: "boundary-wall-mould",
      name: "Boundary Wall Mould",
      badge: "Bestseller for Precast Plants",
      image: "/fabrication/heavy-iron-fabrication-sliding-gate.webp",
      shortDesc: "Heavy-gauge 3mm to 5mm MS sheet boundary wall panel mould with interlocking channels and reinforcement rib design for high daily casting output.",
      features: [
        "Modular lengths: 6ft, 7ft & 8ft panels (1ft / 1.5ft height)",
        "Precision laser-cut interlocking male-female joints",
        "High-finish smooth surface with quick wedge locking",
        "Rigid outer stiffeners preventing mould bulging"
      ],
      whatsappMsg: "Hello KS Fabrication, I am interested in Boundary Wall Moulds. Please share price, sizes, and transport details."
    },
    {
      id: "aluminium-mould",
      name: "Aluminium Mould",
      badge: "Ultra Lightweight & Smooth",
      image: "/corridors/machinery_cnc_center.webp",
      shortDesc: "High-grade extruded aluminium alloy mould ensuring zero rust, mirror-smooth concrete face finish, and effortless manual demoulding.",
      features: [
        "60% lighter than steel — easy manual shifting",
        "100% rustproof — no concrete staining or pitting",
        "2,000+ repeat casting cycle life",
        "Sharp corner edges with zero slurry leakage"
      ],
      whatsappMsg: "Hello KS Fabrication, I want to inquire about Aluminium Precast Concrete Moulds. Please share technical specs and pricing."
    },
    {
      id: "fencing-pole-mould",
      name: "RCC Fencing Pole Mould",
      badge: "Solar Boundary Essential",
      image: "/fabrication/structural-steel-tower-erection.webp",
      shortDesc: "Precision-fabricated fencing pole mould with pre-machined pin holes for barbed wire, razor wire, and chain link fencing fasteners.",
      features: [
        "Straight pole & Y-Arm / L-Arm curved security designs",
        "Heights: 7ft, 8ft, 9ft & 10ft (4x4 inch & 5x5 inch section)",
        "Pre-engineered wire hole spacers for perfect alignment",
        "Tapered profile for rapid, damage-free demoulding"
      ],
      whatsappMsg: "Hello KS Fabrication, I need quotation for RCC Fencing Pole Moulds for a solar farm / boundary project."
    },
    {
      id: "h-pole-mould",
      name: "H-Pole Mould (Slotted Column)",
      badge: "Heavy Structural Load",
      image: "/fabrication/boiler-stack-foundation-base.webp",
      shortDesc: "Precision slotted H-shape column mould engineered for seamless sliding and interlocking of precast concrete boundary wall slabs.",
      features: [
        "Double-sided precision grooves for slab insertion",
        "Lengths: 8ft, 9ft, 10ft & 12ft standard casting columns",
        "Reinforced base plate anchor & heavy outer gussets",
        "High structural rigidity under heavy table vibration"
      ],
      whatsappMsg: "Hello KS Fabrication, I need quotation for H-Pole Moulds (Slotted Columns) for boundary wall manufacturing."
    },
    {
      id: "vibrator-machine",
      name: "Concrete Vibrator Machine",
      badge: "High Density Compaction",
      image: "/corridors/hydraulic_forging_press.webp",
      shortDesc: "Industrial concrete vibration table and heavy-duty plate vibrator equipment ensuring zero air voids, honeycombing prevention, and maximum concrete strength.",
      features: [
        "2 HP & 3 HP 100% copper-wound continuous rating motor",
        "Heavy-duty spring isolated steel table frame",
        "Adjustable centrifugal force for optimal compaction",
        "Operates smoothly with high daily mould turnaround"
      ],
      whatsappMsg: "Hello KS Fabrication, I want details and price for Concrete Vibrator Table / Machine."
    },
    {
      id: "custom-moulds",
      name: "All Types of Custom Concrete Moulds",
      badge: "Bespoke Engineering",
      image: "/fabrication/heavy-industrial-ducting-support.webp",
      shortDesc: "Custom-tailored concrete moulds engineered as per your exact CAD drawings for U-drains, box culverts, tree guards, flower pots, and architectural precast.",
      features: [
        "100% custom sizing as per client CAD / architectural drawings",
        "High-grade IS 2062 mild steel plate construction",
        "3D structural design preview before fabrication starts",
        "All-India secure transport & dispatch support"
      ],
      whatsappMsg: "Hello KS Fabrication, I have custom concrete mould requirements as per my drawings. Please connect with me."
    }
  ];

  // ── Gallery Data & Filters ──
  const [galleryFilter, setGalleryFilter] = useState('all');
  const galleryItems = [
    { title: "Boundary Wall Mould Batch", category: "moulds", image: "/fabrication/heavy-iron-fabrication-sliding-gate.webp", desc: "Heavy MS boundary wall mould ready for dispatch" },
    { title: "Solar Power Plant Fencing", category: "solar", image: "/corridors/solar_pv_plant.webp", desc: "Completed RCC pole & boundary wall solar farm perimeter" },
    { title: "Precision CNC Machine Shop", category: "factory", image: "/corridors/machinery_cnc_center.webp", desc: "Automated milling & drilling of aluminium mould dies" },
    { title: "Automated Welding & Assembly", category: "factory", image: "/corridors/auto_welding_robots.webp", desc: "Robotic & MIG welding of structural H-pole moulds" },
    { title: "H-Column Slotted Precast Mould", category: "moulds", image: "/fabrication/boiler-stack-foundation-base.webp", desc: "Heavy-duty slotted column mould for sliding concrete panels" },
    { title: "Industrial Precast Shed Works", category: "solar", image: "/fabrication/factory-tin-shed-peb-warehouse.webp", desc: "Turnkey precast boundary enclosure for industrial substation" },
    { title: "Heavy Hydraulic Bending", category: "factory", image: "/corridors/hydraulic_forging_press.webp", desc: "CNC press brake bending of 4mm & 5mm mould steel plates" },
    { title: "Custom Heavy Ducting Mould", category: "moulds", image: "/fabrication/heavy-industrial-ducting-support.webp", desc: "Specialized precast box culvert and drain channel mould" }
  ];

  const filteredGallery = galleryFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  // ── FAQ Accordion ──
  const [activeFaq, setActiveFaq] = useState(null);
  const faqs = [
    {
      q: "What steel grade and plate thickness do you use for boundary wall moulds?",
      a: "We use prime IS 2062 Grade mild steel (MS) plates in 3.15 mm, 4 mm, and 5 mm thickness depending on the mould design. Outer framework and ribs are reinforced with heavy structural angles and channels to withstand continuous compaction from vibrator machines without bending."
    },
    {
      q: "What is the key difference between Aluminium Moulds and MS Moulds?",
      a: "Aluminium moulds are 60% lighter, making manual demoulding fast without cranes or heavy labour. Aluminium also produces a glass-smooth mirror finish without any rust stains on concrete. Mild steel (MS) moulds are heavier, exceptionally rigid, and more cost-effective for large-volume industrial casting plants."
    },
    {
      q: "Can you manufacture moulds according to our custom dimensions and CAD drawings?",
      a: "Yes! We specialize in custom precast moulds. You can share your CAD drawing, PDF, or sample photos. Our engineering team reviews the dimensional tolerances and interlocking channels before laser cutting and fabrication."
    },
    {
      q: "What are your payment terms and delivery timeline across India?",
      a: "Our standard payment terms are 50% Advance with order confirmation and 50% Balance payment upon completion prior to dispatch. Standard moulds are typically dispatched within 7 to 12 days across India via reliable road transport."
    },
    {
      q: "Why are precast boundary walls and RCC poles preferred for solar power plants?",
      a: "Solar power plants span vast rural areas requiring rapid perimeter installation. Precast concrete walls and RCC H-poles provide theft-proof, cattle-proof security with 50+ years of lifespan, zero maintenance, and complete resistance to harsh weather and cyclonic wind speeds."
    },
    {
      q: "Do you supply concrete vibrator tables along with the moulds?",
      a: "Yes, we manufacture high-frequency vibrating tables (2 HP / 3 HP) engineered specifically for precast boundary panels, fencing poles, and pavers to eliminate all air voids and deliver high compressive strength concrete."
    }
  ];

  // ── Direct Enquiry Form State ──
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    product: 'Boundary Wall Mould',
    quantity: '1 to 5 Moulds (Starter Pack)',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState('');
  const [formError, setFormError] = useState('');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name.trim()) {
      setFormError('Please enter your full name or company name.');
      return;
    }
    const cleanPhone = enquiryForm.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit WhatsApp / mobile number.');
      return;
    }
    setFormError('');
    setFormSubmitting(true);

    const waText = 
`🏗️ *NEW PRODUCT ENQUIRY • KS FABRICATION*
━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${enquiryForm.name.trim()}
📱 *WhatsApp Number:* ${cleanPhone}
📍 *Location / City:* ${enquiryForm.city.trim() || 'Not specified'}
📦 *Product Required:* ${enquiryForm.product}
🔢 *Quantity / Scale:* ${enquiryForm.quantity}
${enquiryForm.email.trim() ? `✉️ *Email:* ${enquiryForm.email.trim()}\n` : ''}${enquiryForm.message.trim() ? `📝 *Requirements:* ${enquiryForm.message.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━
_Inquiry sent via KS Fabrication Official Website_`;

    const generatedUrl = `https://wa.me/919158658885?text=${encodeURIComponent(waText)}`;
    setWhatsAppUrl(generatedUrl);

    // Record inquiry to backend
    fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: enquiryForm.name.trim(),
        phone: cleanPhone,
        email: enquiryForm.email.trim(),
        service: `Moulds: ${enquiryForm.product} (${enquiryForm.quantity})`,
        location: enquiryForm.city.trim() || 'India',
        projectScope: `Product: ${enquiryForm.product}. Quantity: ${enquiryForm.quantity}. Note: ${enquiryForm.message.trim()}`
      })
    }).catch(() => {});

    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(true);
      window.open(generatedUrl, '_blank');
    }, 350);
  };

  const handleQuickProductWhatsApp = (prodName, customMsg) => {
    const waText = customMsg || `Hello KS Fabrication, I am interested in ${prodName}. Please share catalogue, price, and delivery timeline.`;
    window.open(`https://wa.me/919158658885?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div style={{ background: '#0b0d14', color: '#f1f5f9', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', minHeight: '100vh', paddingBottom: '70px', overflowX: 'hidden' }}>
      
      {/* ── Scoped Mobile Responsive CSS Rules ── */}
      <style>{`
        @media (max-width: 900px) {
          .ks-nav-arrow {
            display: none !important;
          }
          .ks-hero-content {
            padding: 48px 16px 60px !important;
          }
          .ks-hero-title {
            font-size: 2.1rem !important;
            line-height: 1.2 !important;
          }
        }
        @media (max-width: 640px) {
          .ks-hero-title {
            font-size: 1.72rem !important;
            margin-bottom: 14px !important;
          }
          .ks-hero-subtitle {
            font-size: 0.95rem !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
          }
          .ks-hero-ctas {
            flex-direction: column !important;
            width: 100% !important;
            gap: 10px !important;
          }
          .ks-hero-ctas > * {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }
          .ks-hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
            margin-top: 24px !important;
            padding-top: 18px !important;
          }
          .ks-hero-stats > div > div:first-child {
            font-size: 1.4rem !important;
          }
          .ks-product-actions {
            flex-direction: column !important;
            gap: 8px !important;
          }
          .ks-product-actions > * {
            width: 100% !important;
          }
          .ks-gallery-filter {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .ks-gallery-filter button {
            padding: 6px 12px !important;
            font-size: 0.78rem !important;
          }
          .ks-padded-card {
            padding: 24px 16px !important;
          }
          .ks-floating-pill {
            display: none !important;
          }
          .ks-floating-wrap {
            bottom: 16px !important;
            right: 16px !important;
          }
        }
      `}</style>

      {/* ── 1. HERO SECTION WITH DYNAMIC SLIDER ── */}
      <section id="hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '560px', background: '#07080d' }}>
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              style={{
                position: isActive ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 0.7s ease-in-out',
                display: isActive ? 'block' : 'none'
              }}
            >
              {/* Slide Background Image with Gradient Overlay */}
              <div style={{
                position: 'relative',
                minHeight: '560px',
                backgroundImage: `linear-gradient(90deg, rgba(11, 13, 20, 0.96) 0%, rgba(11, 13, 20, 0.85) 50%, rgba(11, 13, 20, 0.6) 100%), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center'
              }}>
                <div className="ks-hero-content" style={{ maxWidth: '1240px', margin: '0 auto', padding: '70px 20px', width: '100%' }}>
                  <div style={{ maxWidth: '780px' }}>
                    
                    {/* Clean Industry Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 130, 32, 0.1)', border: '1px solid rgba(245, 130, 32, 0.3)', padding: '5px 12px', borderRadius: '6px', color: '#F58220', fontSize: '0.80rem', fontWeight: 600, marginBottom: '18px' }}>
                      <Factory size={14} />
                      <span>{slide.tagline}</span>
                    </div>

                    <h1 className="ks-hero-title" style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3.4rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.18, letterSpacing: '-0.01em' }}>
                      {slide.title}
                    </h1>

                    <p className="ks-hero-subtitle" style={{ fontSize: '1.08rem', color: '#a3a9b8', lineHeight: 1.65, margin: '0 0 24px 0', maxWidth: '700px' }}>
                      {slide.subtitle}
                    </p>

                    {/* Live Workshop Availability Marker */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '6px 12px', borderRadius: '6px', color: '#34d399', fontSize: '0.82rem', fontWeight: 600, marginBottom: '28px' }}>
                      <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                      <span>Jaipur Workshop Floor Active: Dispatch &amp; Custom CAD Fabrication Open</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="ks-hero-ctas" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <button
                        onClick={() => scrollToSection('products')}
                        style={{
                          background: '#F58220',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '12px 24px',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <span>Explore Products</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        onClick={() => scrollToSection('enquiry-form')}
                        style={{
                          background: 'rgba(255, 255, 255, 0.06)',
                          color: '#ffffff',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '8px',
                          padding: '12px 22px',
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          cursor: 'pointer'
                        }}
                      >
                        Get Free Quotation
                      </button>

                      <a
                        href="https://wa.me/919158658885?text=Hello%20KS%20Fabrication,%20I%20want%20to%20inquire%20about%20Concrete%20Boundary%20Wall%20and%20Solar%20Fencing%20Moulds."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#10b981',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '10px',
                          padding: '14px 24px',
                          fontSize: '1rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          boxShadow: '0 4px 18px rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        <MessageSquare size={18} />
                        <span>WhatsApp Us</span>
                      </a>
                    </div>

                    {/* Trust Statistics / Micro-Metrics Strip inside Hero */}
                    <div className="ks-hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '16px', marginTop: '35px', paddingTop: '25px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                      <div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 600, color: '#F58220', lineHeight: 1 }}>500+</div>
                        <div style={{ fontSize: '0.80rem', color: '#a3a9b8', marginTop: '4px' }}>Mould Sets Delivered</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 600, color: '#38bdf8', lineHeight: 1 }}>IS 2062</div>
                        <div style={{ fontSize: '0.80rem', color: '#a3a9b8', marginTop: '4px' }}>Certified Prime MS Steel</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 600, color: '#10b981', lineHeight: 1 }}>100%</div>
                        <div style={{ fontSize: '0.80rem', color: '#a3a9b8', marginTop: '4px' }}>Slurry Leakproof Guarantee</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 600, color: '#fbbf24', lineHeight: 1 }}>Pan-India</div>
                        <div style={{ fontSize: '0.80rem', color: '#a3a9b8', marginTop: '4px' }}>Fast Safe Transport</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slider Controls (Prev / Next & Dots) */}
        <button
          className="ks-nav-arrow"
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(16, 36, 58, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="ks-nav-arrow"
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'rgba(16, 36, 58, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicator Dots */}
        <div style={{ position: 'absolute', bottom: '22px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentSlide ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentSlide ? '#F58220' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </section>

      {/* ── BRAND VALUE PROPOSITION / TRUST STRIP ── */}
      <section style={{ background: '#11141c', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '18px 20px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={28} color="#F58220" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>Strong • Durable • Easy to Use</div>
              <div style={{ color: '#7a8296', fontSize: '0.78rem' }}>Heavy IS 2062 MS &amp; Aluminium</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Truck size={28} color="#F58220" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>All-India Safe Transport</div>
              <div style={{ color: '#7a8296', fontSize: '0.78rem' }}>Fast dispatch across every state</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={28} color="#F58220" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>Direct Factory Pricing</div>
              <div style={{ color: '#7a8296', fontSize: '0.78rem' }}>No middlemen • Max profitability</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Box size={28} color="#F58220" />
            <div>
              <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>Transparent Terms</div>
              <div style={{ color: '#7a8296', fontSize: '0.78rem' }}>50% Advance • 50% on Completion</div>
            </div>
          </div>

        </div>
      </section>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>

        {/* ── TECHNICAL LEADERSHIP & WORKSHOP CRAFTSMANSHIP (HUMANISED TRUST) ── */}
        <section style={{ padding: '60px 0 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(11, 13, 20, 0.95) 0%, rgba(13, 27, 44, 0.98) 100%)',
            border: '1px solid rgba(245, 130, 32, 0.35)',
            borderRadius: '20px',
            padding: '36px 30px',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '32px', alignItems: 'center' }}>
              
              {/* Leader Credentials */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: 'rgba(245, 130, 32, 0.15)',
                  border: '1px solid rgba(245, 130, 32, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={28} color="#F58220" />
                </div>

                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.15)', padding: '3px 10px', borderRadius: '6px', color: '#38bdf8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '6px' }}>
                    <span>Technical Leadership</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>
                    Er. Mukesh Singh
                  </h3>
                  <div style={{ color: '#F58220', fontSize: '0.85rem', fontWeight: 700 }}>
                    Principal Technical Advisor • IIT Roorkee Alumnus
                  </div>
                  <div style={{ color: '#7a8296', fontSize: '0.78rem', marginTop: '2px' }}>
                    Chartered Engineer (India) • Corporate Member IEI
                  </div>
                </div>
              </div>

              {/* Personal Engineer Quote & Assurance */}
              <div style={{ borderLeft: '2px solid rgba(245, 130, 32, 0.3)', paddingLeft: '24px' }}>
                <p style={{ color: '#e2e8f0', fontSize: '0.96rem', lineHeight: 1.65, fontStyle: 'italic', margin: '0 0 14px 0' }}>
                  "We treat every precast mould not as simple metal, but as an engine of daily production profitability. Our reinforced stiffeners and CNC laser alignment eliminate bulging and joint leakage, giving contractors 2,000+ flawless castings with zero headache."
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <a
                    href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20need%20direct%20technical%20guidance%20for%20our%20precast%20mould%20and%20solar%20fencing%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#10b981',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <MessageSquare size={15} />
                    <span>Chat with Technical Advisor on WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919158658885"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      padding: '8px 14px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <Phone size={15} color="#F58220" />
                    <span>Call Workshop Desk</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. ABOUT COMPANY SECTION ── */}
        <section id="about" style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                <Factory size={15} />
                <span>About KS Fabrication</span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 18px 0', lineHeight: 1.25 }}>
                Specialized Manufacturers of High-Precision Precast Concrete &amp; Solar Moulds
              </h2>

              <p style={{ color: '#a3a9b8', fontSize: '1.02rem', lineHeight: 1.75, marginBottom: '16px' }}>
                <strong>KS Fabrication</strong> is a premier Indian engineering and fabrication firm specializing in the precision manufacture of <strong>Precast Concrete Moulds, RCC Fencing Pole Moulds, Boundary Wall Moulds, and Concrete Vibration Equipment</strong>.
              </p>

              <p style={{ color: '#7a8296', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Engineered for solar EPC companies, infrastructure contractors, and commercial precast plants, our moulds are crafted using heavy-gauge mild steel (MS) and aircraft-grade aluminium. With laser-guided dimensional accuracy and reinforced stiffening ribs, our moulds deliver mirror-finish concrete panels, rapid demoulding, and extreme structural durability under thousands of repeat casting cycles.
              </p>

              <div className="ks-two-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '14px', marginBottom: '28px' }}>
                <div style={{ background: '#11141c', padding: '14px', borderRadius: '10px', borderLeft: '4px solid #F58220' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>Precision CNC Sizing</div>
                  <div style={{ color: '#7a8296', fontSize: '0.82rem' }}>Zero slurry leakage &amp; clean joints</div>
                </div>
                <div style={{ background: '#11141c', padding: '14px', borderRadius: '10px', borderLeft: '4px solid #F58220' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem' }}>Extreme Durability</div>
                  <div style={{ color: '#7a8296', fontSize: '0.82rem' }}>IS 2062 Grade Steel Plate</div>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                style={{
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Connect with Our Manufacturing Team</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Visual Factory Image Card */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                position: 'relative'
              }}>
                <img
                  src="/fabrication/factory-tin-shed-peb-warehouse.webp"
                  alt="KS Fabrication Mould Manufacturing Factory"
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(11, 13, 20, 0.95) 0%, rgba(11, 13, 20, 0.4) 70%, transparent 100%)',
                  padding: '24px'
                }}>
                  <div style={{ color: '#F58220', fontSize: '0.80rem', fontWeight: 600, textTransform: 'uppercase' }}>Factory Infrastructure</div>
                  <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700 }}>Heavy Duty Mould Fabrication &amp; Assembly Bay</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 3. PRODUCTS SECTION (6 FEATURED CATEGORIES) ── */}
        <section id="products" style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 45px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Box size={15} />
              <span>Engineered Products</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Precast Concrete Moulds &amp; Equipment
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              Heavy-duty steel, aluminium, and composite concrete moulds manufactured to stringent industrial standards for high daily production and long operational lifespan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '26px' }}>
            {products.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#11141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, border-color 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
              >
                {/* Product Image */}
                <div style={{ position: 'relative', height: '220px', background: '#07080d', overflow: 'hidden' }}>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: '#F58220',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {prod.badge}
                  </div>
                </div>

                {/* Product Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>
                    {prod.name}
                  </h3>

                  <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '16px' }}>
                    {prod.shortDesc}
                  </p>

                  <div style={{ marginBottom: '22px', flex: 1 }}>
                    <div style={{ fontSize: '0.78rem', color: '#F58220', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Technical Features:
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '18px', color: '#a3a9b8', fontSize: '0.86rem', lineHeight: 1.6 }}>
                      {prod.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ marginBottom: '4px' }}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="ks-product-actions" style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => handleQuickProductWhatsApp(prod.name, prod.whatsappMsg)}
                      style={{
                        flex: 1,
                        background: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '11px 16px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      <MessageSquare size={16} />
                      <span>Enquire on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => {
                        setEnquiryForm({ ...enquiryForm, product: prod.name });
                        scrollToSection('enquiry-form');
                      }}
                      style={{
                        background: 'transparent',
                        color: '#F58220',
                        border: '1px solid #F58220',
                        borderRadius: '8px',
                        padding: '11px 16px',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Get Quote
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ── 4. WHY CHOOSE US SECTION ── */}
        <section style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 45px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <ShieldCheck size={15} />
              <span>Competitive Advantage</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Why Choose KS Fabrication?
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              Over 10+ years of dedicated structural steel &amp; precision precast mould fabrication experience serving clients nationwide.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '22px' }}>
            
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Strong &amp; Durable Products</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                Fabricated with prime certified steel plates and heavy reinforcement gussets that resist high pressure and intense vibration without deformation.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Settings size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Precision Engineering</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                Computer-controlled laser cutting and CNC press bending guarantee millimeter-accurate joint tolerances and 100% slurry leak prevention.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Easy to Use &amp; Demould</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                Engineered with ergonomic wedge locking and smooth release angles, enabling faster demoulding and higher daily concrete output with less labour.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Award size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Quality Manufacturing</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                Every mould batch undergoes test casting, weld penetrant inspection, and diagonal squareness verification before dispatch.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Layers size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Custom Mould Solutions</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                From standard 7ft poles to custom drainage culverts, we tailor dimensions, textures, and reinforcement to match your project specifications.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Truck size={26} color="#F58220" />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0' }}>Reliable Logistics &amp; Support</h3>
              <p style={{ color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, margin: 0 }}>
                Safe wooden batten packaging and trusted transport partner tie-ups ensuring damage-free delivery to plant sites across every Indian state.
              </p>
            </div>

          </div>
        </section>

        {/* ── 5. MANUFACTURING PROCESS (STEP-BY-STEP) ── */}
        <section id="process" style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 45px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Wrench size={15} />
              <span>Step-by-Step Workflow</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Our 4-Stage Manufacturing Process
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              How raw heavy steel plates are transformed into high-precision precast moulds ready for production.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px', position: 'relative' }}>
            
            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F58220', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1rem', marginBottom: '14px' }}>
                1
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>CAD Design &amp; Sizing</h3>
              <p style={{ color: '#7a8296', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Detailed 3D modelling of interlocking grooves, wall draft angles, and structural stiffener placements based on concrete casting load calculations.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F58220', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1rem', marginBottom: '14px' }}>
                2
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>Mould Manufacturing</h3>
              <p style={{ color: '#7a8296', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                High-precision laser plate cutting, heavy hydraulic CNC press brake folding, and automated MIG welding of reinforcing ribs.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F58220', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1rem', marginBottom: '14px' }}>
                3
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>Quality Inspection</h3>
              <p style={{ color: '#7a8296', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Rigorous testing of internal surface flatness, weld joint continuity, diagonal tolerance checks, and test casting verification.
              </p>
            </div>

            <div style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '24px', position: 'relative' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F58220', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '1rem', marginBottom: '14px' }}>
                4
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>All-India Delivery</h3>
              <p style={{ color: '#7a8296', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Protective anti-rust oil coating, heavy strapped wooden batten packaging, and door-step dispatch via commercial freight to your plant.
              </p>
            </div>

          </div>
        </section>

        {/* ── 6. SOLAR FENCING SOLUTIONS SECTION ── */}
        <section id="solar-fencing" style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{
            background: 'linear-gradient(135deg, #10243A 0%, #0d1e30 100%)',
            border: '1px solid rgba(245, 130, 32, 0.3)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', alignItems: 'center' }}>
              
              <div className="ks-padded-card" style={{ padding: '45px 35px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  <Sun size={16} />
                  <span>Solar EPC &amp; Power Plant Solutions</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.25 }}>
                  Engineered Boundary Fencing for Solar Power Plants
                </h2>

                <p style={{ color: '#a3a9b8', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Solar power parks located across desert and rural expanses (Rajasthan, Gujarat, MP, Maharashtra) face severe challenges from cattle grazing, unauthorized trespass, dust accumulation, and cyclonic wind shear.
                </p>

                <p style={{ color: '#7a8296', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>
                  Our specialized <strong>RCC Fencing Pole Moulds</strong> and <strong>Precast H-Column Boundary Wall Moulds</strong> allow solar EPC contractors to cast perimeter security walls locally on-site at a fraction of traditional brick masonry cost, saving weeks of project timeline.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="#F58220" />
                    <span>Withstands cyclonic winds up to 170 km/h (IS 875 Part 3 compliant)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="#F58220" />
                    <span>50+ Years lifespan with zero maintenance, painting, or termite issues</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={18} color="#F58220" />
                    <span>Fast installation: Up to 500 meters of boundary erected per day</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setEnquiryForm({ ...enquiryForm, product: 'RCC Fencing Pole Mould (Solar)' });
                    scrollToSection('enquiry-form');
                  }}
                  style={{
                    background: '#F58220',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 26px',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>Request Solar Fencing Mould Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Solar Plant Image */}
              <div style={{ height: '100%', minHeight: '360px', position: 'relative' }}>
                <img
                  src="/corridors/solar_pv_plant.webp"
                  alt="Solar Power Plant Boundary Fencing with RCC Poles"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '380px' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(11, 13, 20, 0.90)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '12px 16px',
                  borderRadius: '10px'
                }}>
                  <div style={{ color: '#F58220', fontSize: '0.80rem', fontWeight: 600 }}>Field Proven in 500+ MW Installations</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.85rem' }}>Heavy-duty precast boundary fencing safeguarding solar assets</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 7. PROJECT GALLERY SECTION ── */}
        <section id="gallery" style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 35px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Layers size={15} />
              <span>Visual Showcase</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Factory &amp; Project Gallery
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', margin: '0 0 24px 0' }}>
              Real manufacturing bay photographs, precision mould dies, and completed boundary fencing projects across India.
            </p>

            {/* Gallery Category Filter Buttons */}
            <div className="ks-gallery-filter" style={{ display: 'inline-flex', background: '#11141c', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)', maxWidth: '100%', overflowX: 'auto' }}>
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'moulds', label: 'Concrete Moulds' },
                { id: 'solar', label: 'Solar & Fencing' },
                { id: 'factory', label: 'Factory & Machines' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  style={{
                    background: galleryFilter === tab.id ? '#F58220' : 'transparent',
                    color: galleryFilter === tab.id ? '#ffffff' : '#94a3b8',
                    border: 'none',
                    borderRadius: '7px',
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '20px' }}>
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#11141c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden', background: '#07080d' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '1rem', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ color: '#7a8296', fontSize: '0.82rem' }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ── 8. FAQ SECTION ── */}
        <section style={{ padding: '75px 0 60px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <FileText size={15} />
              <span>Questions &amp; Answers</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', margin: 0 }}>
              Find quick answers regarding mould materials, custom orders, vibration machines, and delivery logistics.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#11141c',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      textAlign: 'left',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="#F58220" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 18px', color: '#7a8296', fontSize: '0.90rem', lineHeight: 1.65, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>

        {/* ── 9. CONTACT & ENQUIRY SECTION (DIRECT FORM & WHATSAPP) ── */}
        <section id="contact" style={{ padding: '75px 0 30px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#F58220', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <Phone size={15} />
              <span>Get in Touch</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', fontWeight: 600, color: '#ffffff', margin: '0 0 12px 0' }}>
              Contact KS Fabrication
            </h2>
            <p style={{ color: '#7a8296', fontSize: '1rem', margin: 0 }}>
              Speak directly with our mould fabrication specialists or submit the enquiry form below for an instant quotation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '30px' }}>
            
            {/* Left Column: Direct Contact Info & Google Maps */}
            <div>
              <div className="ks-padded-card" style={{ background: '#11141c', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '30px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 20px 0' }}>
                  Factory &amp; Head Office Details
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={20} color="#F58220" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.80rem', color: '#7a8296', fontWeight: 700, textTransform: 'uppercase' }}>Phone &amp; Mobile Support</div>
                      <a href="tel:+919158658885" style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>+91 91586 58885</a>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Mon – Sat, 9:00 AM – 7:30 PM</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MessageSquare size={20} color="#10b981" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.80rem', color: '#7a8296', fontWeight: 700, textTransform: 'uppercase' }}>WhatsApp Direct Chat</div>
                      <a href="https://wa.me/919158658885" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none' }}>+91 91586 58885</a>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Instant replies for price lists &amp; photos</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={20} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.80rem', color: '#7a8296', fontWeight: 700, textTransform: 'uppercase' }}>Business Email</div>
                      <a href="mailto:ms.charteredengineer@gmail.com" style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>ms.charteredengineer@gmail.com</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(245, 130, 32, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={20} color="#F58220" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.80rem', color: '#7a8296', fontWeight: 700, textTransform: 'uppercase' }}>Manufacturing Works &amp; Yard</div>
                      <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem', lineHeight: 1.5 }}>
                        Industrial Fabrication Area, Jaipur, Rajasthan 302019 • Pan-India Transport Available
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Embedded Google Maps Location */}
              <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', height: '240px' }}>
                <iframe
                  title="KS Fabrication Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.2384974786!2d75.71981882488828!3d26.88514168067425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Direct Fill Product Enquiry Form */}
            <div id="enquiry-form">
              <div className="ks-padded-card" style={{
                background: '#11141c',
                border: '1px solid rgba(245, 130, 32, 0.3)',
                borderRadius: '16px',
                padding: '34px 28px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ color: '#F58220', fontSize: '0.80rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Quick Price Quotation Form
                  </div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#ffffff', margin: '4px 0 6px 0' }}>
                    Request Mould Price &amp; Transport Estimate
                  </h3>
                  <p style={{ color: '#7a8296', fontSize: '0.88rem', margin: 0 }}>
                    Fill out the form below. On submission, details will automatically be delivered to our WhatsApp team for fast response.
                  </p>
                </div>

                {formSuccess ? (
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '12px', padding: '28px 20px', textAlign: 'center' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                      <Check size={28} color="#10b981" />
                    </div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                      Enquiry Generated Successfully!
                    </h4>
                    <p style={{ color: '#a3a9b8', fontSize: '0.90rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      Your enquiry message has been prepared for WhatsApp. Click below to start chatting directly:
                    </p>
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 24px',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)'
                      }}
                    >
                      <MessageSquare size={17} />
                      <span>Open WhatsApp Chat Now</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    
                    {formError && (
                      <div style={{ background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.35)', color: '#fca5a5', padding: '10px 14px', borderRadius: '8px', fontSize: '0.86rem' }}>
                        {formError}
                      </div>
                    )}

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                          Your Name / Company <span style={{ color: '#F58220' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Patel"
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                          style={{
                            width: '100%',
                            background: '#07080d',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '8px',
                            padding: '11px 12px',
                            color: '#ffffff',
                            fontSize: '0.90rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                          WhatsApp / Phone Number <span style={{ color: '#F58220' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98290 12345"
                          value={enquiryForm.phone}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                          style={{
                            width: '100%',
                            background: '#07080d',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '8px',
                            padding: '11px 12px',
                            color: '#ffffff',
                            fontSize: '0.90rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                          Select Product Category
                        </label>
                        <select
                          value={enquiryForm.product}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, product: e.target.value })}
                          style={{
                            width: '100%',
                            background: '#07080d',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '8px',
                            padding: '11px 12px',
                            color: '#ffffff',
                            fontSize: '0.90rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="Boundary Wall Mould">Boundary Wall Mould</option>
                          <option value="Aluminium Mould">Aluminium Mould</option>
                          <option value="RCC Fencing Pole Mould">RCC Fencing Pole Mould</option>
                          <option value="H-Pole Mould (Slotted Column)">H-Pole Mould (Slotted Column)</option>
                          <option value="Concrete Vibrator Machine">Concrete Vibrator Machine</option>
                          <option value="Custom Precast Concrete Moulds">Custom Precast Concrete Moulds</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                          Required Quantity / Order Size
                        </label>
                        <select
                          value={enquiryForm.quantity}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, quantity: e.target.value })}
                          style={{
                            width: '100%',
                            background: '#07080d',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '8px',
                            padding: '11px 12px',
                            color: '#ffffff',
                            fontSize: '0.90rem',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="1 to 5 Moulds (Starter Pack)">1 to 5 Moulds (Starter Pack)</option>
                          <option value="5 to 15 Moulds (Medium Project)">5 to 15 Moulds (Medium Project)</option>
                          <option value="15 to 50 Moulds (Commercial Plant)">15 to 50 Moulds (Commercial Plant)</option>
                          <option value="50+ Moulds (Mega Solar / Infrastructure EPC)">50+ Moulds (Mega Solar / Infrastructure EPC)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                        Delivery City &amp; State
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Jodhpur, Rajasthan"
                        value={enquiryForm.city}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#07080d',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '8px',
                          padding: '11px 12px',
                          color: '#ffffff',
                          fontSize: '0.90rem',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#a3a9b8', marginBottom: '6px' }}>
                        Special Requirements / Dimensions (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Need 8ft boundary wall panels with 10 H-poles for a 5 MW solar site."
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        style={{
                          width: '100%',
                          background: '#07080d',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          color: '#ffffff',
                          fontSize: '0.90rem',
                          outline: 'none',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      style={{
                        width: '100%',
                        background: '#F58220',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px',
                        fontSize: '0.96rem',
                        fontWeight: 600,
                        cursor: formSubmitting ? 'wait' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        marginTop: '6px'
                      }}
                    >
                      <Send size={16} />
                      <span>{formSubmitting ? 'Preparing WhatsApp Message...' : 'Submit & Connect on WhatsApp'}</span>
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748b', fontSize: '0.78rem' }}>
                      <ShieldCheck size={13} color="#F58220" />
                      <span>Direct connection with KS Fabrication sales team • Fast response</span>
                    </div>

                  </form>
                )}
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* ── 10. FOOTER ── */}
      <footer style={{ background: '#11141c', borderTop: '1px solid rgba(255, 255, 255, 0.1)', marginTop: '60px', padding: '45px 20px 25px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '30px', marginBottom: '35px' }}>
          
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
              KS <span style={{ color: '#F58220' }}>FABRICATION</span>
            </div>
            <p style={{ color: '#7a8296', fontSize: '0.85rem', lineHeight: 1.65, margin: '0 0 14px 0' }}>
              Specialized Indian industrial manufacturer of Precast Concrete Moulds, Aluminium Moulds, RCC Fencing Pole Moulds, and Concrete Vibration Equipment.
            </p>
            <div style={{ color: '#F58220', fontWeight: 700, fontSize: '0.82rem' }}>
              Strong • Durable • Easy to Use
            </div>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>Product Range</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: '#7a8296' }}>
              <span>• Boundary Wall Mould</span>
              <span>• Aluminium Mould</span>
              <span>• RCC Fencing Pole Mould</span>
              <span>• H-Pole Mould (Slotted Column)</span>
              <span>• Concrete Vibrator Machine</span>
              <span>• Custom Precast Moulds</span>
            </div>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>Target Industries</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: '#7a8296' }}>
              <span>• Solar EPC Companies</span>
              <span>• Solar Power Plant Contractors</span>
              <span>• Precast Concrete Manufacturers</span>
              <span>• Construction &amp; Highway Builders</span>
              <span>• Industrial Fencing Contractors</span>
            </div>
          </div>

          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '12px' }}>Contact &amp; Orders</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: '#7a8296' }}>
              <div>📞 <strong style={{ color: '#ffffff' }}>+91 91586 58885</strong></div>
              <div>💬 WhatsApp Support Available 24/7</div>
              <div>🚚 All-India Transport Dispatch</div>
              <div>📦 50% Advance • 50% on Completion</div>
            </div>
          </div>

        </div>

        <div style={{ maxWidth: '1240px', margin: '0 auto', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.78rem', color: '#64748b' }}>
          <div>© {new Date().getFullYear()} KS Fabrication. All Rights Reserved.</div>
          <div>Precast Concrete Moulds &amp; Solar Fencing Solutions</div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON WITH HUMAN LIVE STATUS ── */}
      <div className="ks-floating-wrap" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
        
        {/* Floating Workshop Desk Status */}
        <div className="ks-floating-pill" style={{
          background: '#11141c',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '6px',
          padding: '5px 10px',
          fontSize: '0.76rem',
          color: '#a3a9b8',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
          <span>Workshop Desk Online</span>
        </div>

        <a
          href="https://wa.me/919158658885?text=Hello%20KS%20Fabrication,%20I%20am%20interested%20in%20Precast%20Concrete%20and%20Solar%20Fencing%20Moulds."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transition: 'background-color 0.15s ease'
          }}
        >
          <MessageSquare size={24} />
        </a>
      </div>

    </div>
  );
}
