import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  PhoneCall,
  Phone,
  MessageSquare,
  HelpCircle,
  Wrench,
  Search,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Factory,
  Hammer
} from 'lucide-react';

export default function FabricationServicesPage({ onOpenQuote, onNavigateHome }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Industrial Fabrication & Tin Shed FAQs | MS Chartered Engineers';

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

    updateOrCreateMeta('description', 'Frequently asked questions regarding heavy industrial fabrication, factory tin sheds, PEB warehouses, industrial chimneys, iron fabrication, and structural stability certification in Jaipur & Rajasthan.');
    updateOrCreateMeta('keywords', 'fabrication FAQ, tin shed FAQ, industrial chimney FAQ, PEB warehouse queries, iron fabrication questions, structural stability certificate');
    updateOrCreateMeta('og:title', 'Industrial Fabrication & Tin Shed FAQs | MS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'Frequently asked questions regarding industrial fabrication, factory tin sheds, PEB buildings, and structural engineering certification.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/fabrication-services', true);
  }, []);

  const categories = ['All', 'Tin Sheds & PEB', 'Chimneys & Exhaust', 'Iron Works', 'Certification & Safety'];

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
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: '#070d18', color: '#f8fafc', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* ── Top Header Navigation ── */}
      <div style={{
        background: 'rgba(15, 23, 42, 0.95)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '14px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
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
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                cursor: 'pointer'
              }}
            >
              <ArrowLeft size={14} /> Back to Home
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: '#94a3b8' }}>
              <a href="/services" style={{ color: '#38bdf8', textDecoration: 'none' }}>Services</a>
              <ChevronRight size={12} />
              <span style={{ color: '#f1f5f9', fontWeight: 600 }}>Fabrication &amp; Tin Shed FAQs</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
              Fabrication Desk: <strong style={{ color: '#f59e0b' }}>+91 91586 58885</strong>
            </span>
            <button
              onClick={() => onOpenQuote('Fabrication Services Inquiry', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '7px 16px', fontSize: '0.82rem' }}
            >
              <Wrench size={13} />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── FAQ Hero Header ── */}
      <section style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245, 158, 11, 0.18) 0%, rgba(7, 13, 24, 0.95) 75%)',
        padding: '54px 20px 42px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{
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
          }}>
            <HelpCircle size={15} color="#f59e0b" />
            <span>Industrial Fabrication &amp; Tin Shed Knowledge Base</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.2,
            color: '#ffffff',
            margin: '0 auto 16px',
            letterSpacing: '-0.02em'
          }}>
            Frequently Asked <span style={{ color: '#f59e0b' }}>Questions</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.96rem, 1.8vw, 1.12rem)',
            color: '#cbd5e1',
            lineHeight: 1.68,
            maxWidth: '780px',
            margin: '0 auto 28px'
          }}>
            Clear engineering answers regarding factory tin sheds, PEB industrial warehouses, heavy iron fabrication, industrial steel chimneys, and official Chartered Engineer structural stability certificates.
          </p>

          {/* Search Bar */}
          <div style={{
            position: 'relative',
            maxWidth: '560px',
            margin: '0 auto 24px'
          }}>
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
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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
      <section style={{ padding: '54px 20px', background: '#0a1220' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '40px 24px',
              textAlign: 'center'
            }}>
              <HelpCircle size={36} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>No Questions Found</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.90rem', marginBottom: '20px' }}>
                We couldn't find an FAQ matching "{searchQuery}". Feel free to speak directly with our structural engineering team.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
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
                      <span style={{
                        fontSize: '0.70rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(245, 158, 11, 0.12)',
                        color: '#fbbf24',
                        fontWeight: 700,
                        whiteSpace: 'nowrap'
                      }}>
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
                    <div style={{
                      padding: '0 22px 20px',
                      color: '#cbd5e1',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '14px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom Call To Action ── */}
      <section style={{
        padding: '54px 20px',
        background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(2, 132, 199, 0.1) 100%)',
        borderTop: '1px solid rgba(245, 158, 11, 0.25)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Still Have Questions or Need a Custom Quote?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '0.98rem', marginBottom: '26px', lineHeight: 1.65 }}>
            Connect directly with Er. Mukesh Singh (IIT Roorkee, Corporate Member IEI) and our senior engineering team for on-site measurement, design drawings, and stamped structural stability certification.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Fabrication Services Inquiry', { department: 'fabrication' })}
              className="btn btn-gold"
              style={{ padding: '12px 28px', fontSize: '0.94rem' }}
            >
              <Wrench size={16} />
              <span>Request Turnkey Quote</span>
            </button>
            <a
              href="tel:+919158658885"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                color: '#0f172a',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} color="#0f172a" />
              <span>Call +91 91586 58885</span>
            </a>
            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20have%20a%20question%20regarding%20industrial%20fabrication%20and%20tin%20sheds."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '12px 24px', fontSize: '0.94rem' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
