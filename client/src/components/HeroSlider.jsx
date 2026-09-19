import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/slides/slide1.webp',
    badge: '🏆 IEI Recognized | Government Approved Valuer',
    title: 'Assets',
    titleHighlight: 'Valuation Services',
    subtitle:
      'We impart the expert Valuers\' services required for commercial & corporate governance obligations — machinery, plant, property & equipment.',
    tag: 'CERTIFIED VALUATION EXPERT',
    accent: 'gold',
    cta: 'Request Valuation Report',
    ctaService: 'Assets Valuation Services',
    stats: [
      { value: 'Banks', label: 'Empanelled' },
      { value: 'IBBI', label: 'Valuation Standards' },
      { value: 'Pan', label: 'India Service' },
    ],
    gradient: 'linear-gradient(105deg, rgba(7,14,30,0.92) 0%, rgba(11,23,54,0.75) 50%, rgba(7,14,30,0.4) 100%)',
  },
  {
    id: 2,
    image: '/slides/slide2.webp',
    badge: '📋 IEI Chartered Engineer (India) — CEng (INDIA) MIE',
    title: 'Chartered',
    titleHighlight: 'Engineer Services',
    subtitle:
      'We are an Independent Engineer certified & authorized by the prestigious Institution of Engineers (India) to attest/certify different types of Government Declarations / Compliances.',
    tag: 'INSTITUTION OF ENGINEERS (INDIA)',
    accent: 'cyan',
    cta: 'Request Certification',
    ctaService: 'Chartered Engineer Services',
    stats: [
      { value: 'IEI', label: 'Corporate Member' },
      { value: 'Govt.', label: 'Recognized Body' },
      { value: 'DGFT', label: 'Customs Approved' },
    ],
    gradient: 'linear-gradient(105deg, rgba(7,14,30,0.90) 0%, rgba(6,26,70,0.72) 55%, rgba(7,14,30,0.35) 100%)',
  },
  {
    id: 3,
    image: '/slides/slide3.webp',
    badge: '🍽️ FSSAI Expert Consultants | Food Business Advisory',
    title: 'FSSAI',
    titleHighlight: 'Compliance Services',
    subtitle:
      'We as Expert Consultants offer advisory services to the Food Business Operators (FBOs) to comply with the different Mandatory Compliances of FSSAI.',
    tag: 'FSSAI COMPLIANCE ADVISORY',
    accent: 'emerald',
    cta: 'Get FSSAI Compliance Help',
    ctaService: 'FSSAI Compliance Services',
    stats: [
      { value: 'FBO', label: 'Advisory Support' },
      { value: 'FSSAI', label: 'Mandatory Compliance' },
      { value: 'Expert', label: 'Consultants' },
    ],
    gradient: 'linear-gradient(105deg, rgba(7,14,30,0.88) 0%, rgba(5,30,15,0.72) 55%, rgba(7,14,30,0.35) 100%)',
  },
  {
    id: 4,
    image: '/slides/slide4.webp',
    badge: '📊 Strategic Business & Asset Advisory',
    title: 'Other Advisory',
    titleHighlight: 'Services',
    subtitle:
      'We also provide Advisory Service for Asset Componentization as well as Productivity & Profitability Enhancement for industrial and commercial businesses.',
    tag: 'PRODUCTIVITY & PROFITABILITY',
    accent: 'orange',
    cta: 'Explore Advisory Services',
    ctaService: 'Advisory Services',
    stats: [
      { value: 'Asset', label: 'Componentization' },
      { value: 'Productivity', label: 'Enhancement' },
      { value: 'Business', label: 'Growth Advisory' },
    ],
    gradient: 'linear-gradient(105deg, rgba(7,14,30,0.88) 0%, rgba(20,10,5,0.70) 55%, rgba(7,14,30,0.3) 100%)',
  },
];


const ACCENT_COLORS = {
  gold:    { primary: '#f59e0b', glow: 'rgba(245,158,11,0.5)',  light: '#fbbf24' },
  cyan:    { primary: '#06b6d4', glow: 'rgba(6,182,212,0.5)',   light: '#22d3ee' },
  orange:  { primary: '#f97316', glow: 'rgba(249,115,22,0.5)',  light: '#fb923c' },
  emerald: { primary: '#10b981', glow: 'rgba(16,185,129,0.5)',  light: '#34d399' },
};

const AUTOPLAY_DELAY = 5500;

export default function HeroSlider({ onOpenQuote }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const total = SLIDES.length;

  const goTo = useCallback((index, dir = 'next') => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setProgress(0);
    startTimeRef.current = Date.now();
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 620);
  }, [animating]);

  const goNext = useCallback(() => {
    goTo((current + 1) % total, 'next');
  }, [current, goTo, total]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total, 'prev');
  }, [current, goTo, total]);

  // Progress bar tick
  useEffect(() => {
    if (isPaused) return;
    startTimeRef.current = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / AUTOPLAY_DELAY) * 100, 100));
    }, 50);
    return () => clearInterval(progressRef.current);
  }, [current, isPaused]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setTimeout(goNext, AUTOPLAY_DELAY);
    return () => clearTimeout(intervalRef.current);
  }, [current, isPaused, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft')  goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  // Touch/swipe support
  const onTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd   = (e) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) delta > 0 ? goNext() : goPrev();
    setTouchStart(null);
  };

  const slide = SLIDES[current];
  const color = ACCENT_COLORS[slide.accent];

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Hero Service Slider"
    >
      {/* ── Background Images ── */}
      {SLIDES.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={`MS Chartered Engineers Service ${i + 1}`}
          loading={i === 0 ? "eager" : "lazy"}
          fetchpriority={i === 0 ? "high" : "auto"}
          className={`hs-bg ${i === current ? 'hs-bg--active' : ''} ${
            animating && i === current
              ? direction === 'next' ? 'hs-bg--enter-next' : 'hs-bg--enter-prev'
              : ''
          }`}
          aria-hidden={i !== current}
        />
      ))}

      {/* ── Dark Gradient Overlay ── */}
      <div className="hs-overlay" style={{ background: slide.gradient }} />

      {/* ── Decorative grid lines ── */}
      <div className="hs-grid-lines" />

      {/* ── Content ── */}
      <div className="hs-content">
        <div className="hs-inner">
          {/* Badge */}
          <div
            className={`hs-badge ${animating ? 'hs-anim--out' : 'hs-anim--in'}`}
            style={{ borderColor: color.primary, color: color.light }}
          >
            <span
              className="hs-badge-dot"
              style={{ background: color.primary, boxShadow: `0 0 8px ${color.glow}` }}
            />
            {slide.badge}
          </div>

          {/* Title — h2 here; canonical H1 is in the Hero section below */}
          <h2 className={`hs-title ${animating ? 'hs-anim--out' : 'hs-anim--in'}`} style={{ '--delay': '0.08s' }}>
            {slide.title}{' '}
            <span className="hs-title-hl" style={{ color: color.light, textShadow: `0 0 40px ${color.glow}` }}>
              {slide.titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className={`hs-subtitle ${animating ? 'hs-anim--out' : 'hs-anim--in'}`} style={{ '--delay': '0.16s' }}>
            {slide.subtitle}
          </p>

          {/* Stats row */}
          <div className={`hs-stats ${animating ? 'hs-anim--out' : 'hs-anim--in'}`} style={{ '--delay': '0.24s' }}>
            {slide.stats.map((st, i) => (
              <div key={i} className="hs-stat">
                <span className="hs-stat-value" style={{ color: color.light }}>{st.value}</span>
                <span className="hs-stat-label">{st.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className={`hs-ctas ${animating ? 'hs-anim--out' : 'hs-anim--in'}`} style={{ '--delay': '0.32s' }}>
            <button
              className="hs-cta-primary"
              style={{
                background: `linear-gradient(135deg, ${color.primary}, ${color.light})`,
                boxShadow: `0 6px 28px ${color.glow}`,
              }}
              onClick={() => onOpenQuote(slide.ctaService)}
            >
              <span>{slide.cta}</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="tel:+919158658885"
              className="hs-cta-secondary"
            >
              <Phone size={16} />
              <span>+91 91586 58885</span>
            </a>
          </div>

          {/* Tag ribbon */}
          <div
            className={`hs-tag ${animating ? 'hs-anim--out' : 'hs-anim--in'}`}
            style={{ '--delay': '0.40s', background: `${color.primary}22`, borderColor: color.primary, color: color.light }}
          >
            {slide.tag}
          </div>
        </div>
      </div>

      {/* ── Left / Right Arrows ── */}
      <button className="hs-arrow hs-arrow--left" onClick={goPrev} aria-label="Previous slide">
        <ChevronLeft size={28} />
      </button>
      <button className="hs-arrow hs-arrow--right" onClick={goNext} aria-label="Next slide">
        <ChevronRight size={28} />
      </button>

      {/* ── RIGHT SIDE: Unique Vertical Service Navigator ── */}
      <div className="hs-sidenav">
        {SLIDES.map((s, i) => {
          const isActive = i === current;
          const slideColor = ACCENT_COLORS[s.accent];
          return (
            <button
              key={s.id}
              className={`hs-sidenav-item ${isActive ? 'hs-sidenav-item--active' : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Go to ${s.titleHighlight}`}
            >
              {/* Animated left border line */}
              <span
                className="hs-sidenav-line"
                style={{
                  background: isActive ? slideColor.primary : 'rgba(255,255,255,0.15)',
                  boxShadow: isActive ? `0 0 8px ${slideColor.glow}` : 'none',
                }}
              >
                {/* Progress fill on active line */}
                {isActive && (
                  <span
                    className="hs-sidenav-line-fill"
                    style={{
                      height: `${progress}%`,
                      background: slideColor.light,
                    }}
                  />
                )}
              </span>

              {/* Number + Label */}
              <span className="hs-sidenav-label">
                <span
                  className="hs-sidenav-num"
                  style={{ color: isActive ? slideColor.light : 'rgba(255,255,255,0.3)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="hs-sidenav-title"
                  style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.45)' }}
                >
                  {s.titleHighlight}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Bottom Progress Bar ── */}
      <div className="hs-progress-track">
        <div
          className="hs-progress-fill"
          style={{
            width: `${isPaused ? progress : progress}%`,
            background: `linear-gradient(90deg, ${color.primary}, ${color.light})`,
            boxShadow: `0 0 12px ${color.glow}`,
          }}
        />
      </div>

      {/* ── Pause indicator ── */}
      {isPaused && (
        <div className="hs-paused-badge">⏸ Paused</div>
      )}
    </section>
  );
}
