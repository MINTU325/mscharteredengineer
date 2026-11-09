import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Sun, 
  ShieldCheck, 
  PhoneCall, 
  Wind, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Building2, 
  FileCheck2, 
  Award, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  FileText,
  Compass,
  Check
} from 'lucide-react';

export default function SolarStructuralAnalysisPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Solar Structural Engineer Report & Stability Analysis | KS Chartered Engineers (IIT Roorkee)';
  }, []);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('commercial');

  const faqs = [
    {
      q: 'Why is a Solar Structural Engineer Report legally required?',
      a: 'Building inspectorates, DISCOMs (electricity boards for net-metering), and Chief Electrical Inspector to Government (CEIG) mandate a stamped structural stability certificate by a licensed Chartered Structural Engineer. Solar panels act like aerofoils/wings during high wind storms; without an engineering report calculating uplift and dead loads, installations risk roof collapse, joint failure, or permit cancellation.'
    },
    {
      q: 'What is the difference between Residential and Commercial (C&I) structural audits?',
      a: 'For residential rooftops (typically under 15 kW), structural evaluation is done on the planned layout to confirm that roof rafters, purlins, or RCC slabs can handle the added 12-20 kg/m² load. For Commercial & Industrial plants (50 kW to Multi-MW), a two-phase assessment is standard: Phase 1 determines the reserve load-bearing capacity of the PEB/factory roof before layout finalization, and Phase 2 runs 3D finite element wind analysis (IS 875 Part 3 / STAAD.Pro) on the final array.'
    },
    {
      q: 'What happens if our building roof does not pass the initial structural capacity test?',
      a: 'If demand-to-capacity ratio (DCR) exceeds 1.0, our IIT Roorkee structural engineers do not simply reject the project. We provide actionable retrofit & reinforcement engineering solutions—such as purlin bridging, rafter sistering, ballast weight redistribution, or relocating modules away from high-vortex roof corner zones.'
    },
    {
      q: 'Which statutory Indian & International engineering standards do you follow?',
      a: 'We calculate all structural forces strictly adhering to: IS 875 Part 1 (Dead Loads), IS 875 Part 2 (Live & Maintenance Loads), IS 875 Part 3:2015 (Wind Loads & Peak Suction Coefficients), IS 800:2007 (General Construction in Steel / MMS), IS 456:2000 (Plain & Reinforced Concrete), alongside ASCE 7-16 / IBC standards for multinational export EPC compliance.'
    },
    {
      q: 'How fast can KS Chartered Engineers issue the stamped stability certificate?',
      a: 'Preliminary roof feasibility reviews are completed within 24 hours. Full stamped calculation packages, STAAD.Pro analysis reports, and Chartered Engineer Stability Certificates are typically delivered within 2 to 4 working days upon receiving architectural roof drawings, module layout, and site photos.'
    }
  ];

  return (
    <div className="solar-structural-analysis-page" style={{ background: '#040914', color: '#f1f5f9', minHeight: '100vh', paddingBottom: '90px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* ── Top Hero Header ── */}
      <div style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.15) 0%, rgba(10, 18, 36, 0.95) 60%, #040914 100%)',
        borderBottom: '1px solid #1e293b',
        padding: '50px 20px 60px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          {/* Breadcrumb / Back button */}
          <button
            onClick={() => {
              if (typeof onNavigateHome === 'function') onNavigateHome();
              else window.location.href = '/';
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '9999px',
              padding: '6px 16px',
              color: '#e2e8f0',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '24px',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={14} /> Back to Home
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(251, 191, 36, 0.12)', border: '1px solid rgba(251, 191, 36, 0.3)', padding: '5px 14px', borderRadius: '20px', color: '#fbbf24', fontSize: '0.80rem', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <Sun size={15} />
            <span>Statutory Solar Engineering Consultancy</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
            Solar Structural Engineer <span style={{ color: '#fbbf24' }}>Report</span> &amp; Stability Analysis
          </h1>

          <p style={{ fontSize: '1.12rem', color: '#94a3b8', lineHeight: 1.75, maxWidth: '820px', margin: '0 0 28px 0' }}>
            Comprehensive structural engineering feasibility, 3D wind uplift calculations (IS 875 Part 3), roof framing load path verification, and Chartered Engineer stamped certificates for DISCOM net-metering &amp; CEIG statutory clearances. Certified by IIT Roorkee alumni structural engineers.
          </p>

          {/* Quick Trust Badges */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <Award size={15} color="#fbbf24" />
              <span>IEI &amp; Chartered Engineer Stamp</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <Wind size={15} color="#38bdf8" />
              <span>IS 875 Part 3 &amp; ASCE 7-16 Wind Analysis</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <Building2 size={15} color="#10b981" />
              <span>RCC Slabs, PEB Sheds &amp; Ground Mounts</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #334155', padding: '6px 14px', borderRadius: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <Zap size={15} color="#f59e0b" />
              <span>100% CEIG &amp; DISCOM Acceptance</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (typeof onOpenQuote === 'function') {
                  onOpenQuote('Solar Structural Stability & Wind Load Certification');
                } else {
                  window.location.href = '/contact';
                }
              }}
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                color: '#040914',
                border: 'none',
                borderRadius: '10px',
                padding: '13px 26px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(245, 158, 11, 0.3)'
              }}
            >
              <span>Request Stamped Structural Report</span>
              <ArrowRight size={17} />
            </button>
            <a
              href="tel:+919158658885"
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                color: '#ffffff',
                border: '1px solid #334155',
                borderRadius: '10px',
                padding: '13px 24px',
                fontSize: '0.98rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <PhoneCall size={17} color="#fbbf24" />
              <span>Talk to Senior Structural Engineer</span>
            </a>
          </div>

        </div>
      </div>

      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '50px 20px 0' }}>

        {/* ── Section 1: What is a Solar Structural Engineer Report? ── */}
        <section style={{ marginBottom: '65px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '35px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                <FileText size={15} />
                <span>Core Purpose &amp; Engineering Scope</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 16px 0', lineHeight: 1.3 }}>
                What is a Solar Structural Engineer Report?
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1rem', marginBottom: '14px' }}>
                A <strong>Solar Structural Engineer Report</strong> is a legally certified technical assessment conducted and stamped by a licensed Professional / Chartered Structural Engineer. It verifies that a building's roof, rafters, purlins, structural steel frames, or ground foundations can safely support the additional weight and dynamic aerodynamic forces of a photovoltaic (PV) solar system.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1rem', marginBottom: '20px' }}>
                While PV modules add a modest static dead weight (typically <strong>12 to 25 kg/m²</strong> or 2.5 to 4.5 psf), their inclined installation creates immense <strong>aerodynamic wind uplift forces</strong>. Under high-speed storms, solar arrays act like aircraft wings, generating upward suction forces that can detach rafters, pull out roof anchors, or deform PEB purlins if not engineered to IS 875 Part 3 standards.
              </p>
              <div style={{ background: '#0a1224', borderLeft: '4px solid #fbbf24', padding: '14px 18px', borderRadius: '0 10px 10px 0' }}>
                <p style={{ margin: 0, color: '#e2e8f0', fontSize: '0.92rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                  "A stamped structural report translates building geometry, age, member sections, and localized wind velocity into certified mathematical models, guaranteeing structural safety for 25+ years."
                </p>
              </div>
            </div>

            {/* SVG Engineering Diagram 1: Free Body Diagram of Forces on Solar Panel */}
            <div style={{ background: '#0b1329', border: '1px solid #1e293b', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Technical Diagram 1.0
                </span>
                <span style={{ fontSize: '0.72rem', color: '#64748b', background: '#1e293b', padding: '3px 8px', borderRadius: '4px' }}>
                  IS 875 / ASCE 7 Vector Model
                </span>
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0 0 16px 0' }}>
                Solar Array Aerodynamic &amp; Structural Force Vectors
              </h3>
              
              <svg viewBox="0 0 440 240" style={{ width: '100%', height: 'auto', background: '#070d1e', borderRadius: '10px', border: '1px solid #1e293b' }}>
                {/* Grid Lines */}
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                  </pattern>
                  <marker id="arrowRed" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#ef4444" />
                  </marker>
                  <marker id="arrowBlue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#38bdf8" />
                  </marker>
                  <marker id="arrowGreen" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#10b981" />
                  </marker>
                  <marker id="arrowYellow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                    <polygon points="0 0, 7 3.5, 0 7" fill="#fbbf24" />
                  </marker>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />

                {/* Roof Base Line */}
                <line x1="30" y1="190" x2="410" y2="190" stroke="#475569" strokeWidth="3" strokeDasharray="6 3" />
                <text x="40" y="210" fill="#64748b" fontSize="11" fontWeight="600">Roof Substructure (RCC / Purlin Level)</text>

                {/* Solar Module (Tilted) */}
                <polygon points="120,175 320,95 325,103 125,183" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
                
                {/* Racking Legs / Standoffs */}
                <line x1="140" y1="172" x2="140" y2="190" stroke="#94a3b8" strokeWidth="4" />
                <line x1="300" y1="108" x2="300" y2="190" stroke="#94a3b8" strokeWidth="4" />
                <circle cx="140" cy="190" r="4" fill="#fbbf24" />
                <circle cx="300" cy="190" r="4" fill="#fbbf24" />

                {/* Force 1: Wind Uplift (Suction Wu) - RED */}
                <line x1="220" y1="135" x2="180" y2="45" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowRed)" />
                <text x="120" y="42" fill="#ef4444" fontSize="12" fontWeight="700">Wind Uplift (Wu)</text>
                <text x="120" y="55" fill="#fca5a5" fontSize="9">IS 875-Pt 3 Peak Suction</text>

                {/* Force 2: Dead Load (Gravity Wd) - GREEN */}
                <line x1="220" y1="135" x2="220" y2="185" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowGreen)" />
                <text x="228" y="170" fill="#10b981" fontSize="11" fontWeight="700">Dead Load (D)</text>
                <text x="228" y="181" fill="#6ee7b7" fontSize="9">Modules + MMS (15 kg/m²)</text>

                {/* Force 3: Wind Downward Pressure - BLUE */}
                <line x1="280" y1="35" x2="245" y2="110" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
                <text x="290" y="40" fill="#38bdf8" fontSize="11" fontWeight="700">Wind Pressure</text>

                {/* Reaction Forces at Anchor Footing - YELLOW */}
                <line x1="300" y1="190" x2="300" y2="225" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowYellow)" />
                <line x1="140" y1="190" x2="140" y2="225" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowYellow)" />
                <text x="310" y="215" fill="#fbbf24" fontSize="10" fontWeight="600">Reaction Ry</text>
              </svg>

              <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', textAlign: 'center' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', padding: '6px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#f87171', fontWeight: 700 }}>Peak Suction</div>
                  <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800 }}>-1.8 to -2.4 kN/m²</div>
                </div>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '6px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700 }}>Dead Weight</div>
                  <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800 }}>+0.15 to +0.25 kN/m²</div>
                </div>
                <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.25)', padding: '6px', borderRadius: '6px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#fcd34d', fontWeight: 700 }}>Anchor Safety</div>
                  <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800 }}>FOS &gt; 1.5</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 2: When Do You Need a Solar Structural Report? ── */}
        <section style={{ marginBottom: '65px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 35px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              <AlertTriangle size={15} />
              <span>Statutory Compliance Triggers</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 12px 0' }}>
              When Do You Need a Solar Structural Report?
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.98rem' }}>
              You cannot safely assume any roof or metal shed can withstand solar loading without verified calculations. The following scenarios legally require a formal stamped report:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', transition: 'border-color 0.2s ease' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Building2 size={22} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0' }}>
                Commercial &amp; Industrial Sheds
              </h3>
              <p style={{ fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Factory PEB sheds, curved tin sheets, and warehouses installing 20 kW to 2+ MW arrays. Discoms &amp; factories inspectorate mandate CE certification prior to net-metering.
              </p>
            </div>

            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', transition: 'border-color 0.2s ease' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Wind size={22} color="#ef4444" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0' }}>
                High Wind &amp; Coastal Belts
              </h3>
              <p style={{ fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Regions in Wind Zones IV, V, and VI (wind speed 44 m/s to 55 m/s like Rajasthan deserts, Gujarat &amp; Coastal belts). Racking must be tested for aerodynamic vortex suction.
              </p>
            </div>

            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', transition: 'border-color 0.2s ease' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Layers size={22} color="#fbbf24" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0' }}>
                Older or Pre-2005 Buildings
              </h3>
              <p style={{ fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Properties built 15+ years ago with potential rebar corrosion, hairline micro-cracks in RCC, or weathered timber/cold-formed purlins that need residual capacity verification.
              </p>
            </div>

            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '24px', transition: 'border-color 0.2s ease' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ShieldCheck size={22} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0' }}>
                CEIG &amp; Subsidy Approvals
              </h3>
              <p style={{ fontSize: '0.90rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Statutory clearance by Chief Electrical Inspector to Government (CEIG) &amp; Central/State solar subsidy release (MNRE / RUVNL) requiring an authorized Chartered Engineer seal.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 3: Detailed Technical Load Path Diagram ── */}
        <section style={{ marginBottom: '65px', background: '#080e1e', border: '1px solid #1e293b', borderRadius: '16px', padding: '32px' }}>
          <div style={{ maxWidth: '850px', margin: '0 auto 28px', textAlign: 'center' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Technical Diagram 2.0 • Structural Engineering Details
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#ffffff', margin: '8px 0 10px' }}>
              Transverse Cross-Section &amp; Continuous Load Path
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              How our structural calculations verify every junction: from module aluminum frames down through clamps, rails, L-brackets, fastener pull-out resistance, purlins, and main building columns.
            </p>
          </div>

          {/* SVG Diagram 2: Transverse Cross-Section */}
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <svg viewBox="0 0 680 280" style={{ width: '100%', height: 'auto', background: '#050a17', borderRadius: '12px', border: '1px solid #1e293b' }}>
              {/* Module Glass / Frame */}
              <rect x="60" y="40" width="260" height="14" rx="2" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
              <rect x="340" y="40" width="260" height="14" rx="2" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
              <text x="120" y="32" fill="#93c5fd" fontSize="11" fontWeight="600">Solar PV Module (Dead Wt: 22 kg)</text>
              <text x="400" y="32" fill="#93c5fd" fontSize="11" fontWeight="600">Adjacent PV Module</text>

              {/* Mid-Clamp */}
              <rect x="318" y="32" width="24" height="26" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" rx="2" />
              <line x1="330" y1="22" x2="330" y2="32" stroke="#fbbf24" strokeWidth="2" />
              <text x="348" y="24" fill="#fbbf24" fontSize="10" fontWeight="700">Mid-Clamp (Anodized Al 6063)</text>

              {/* Aluminum Mounting Rail */}
              <rect x="80" y="54" width="500" height="22" fill="#334155" stroke="#64748b" strokeWidth="1.5" rx="2" />
              <text x="250" y="69" fill="#e2e8f0" fontSize="11" fontWeight="700">Aluminium Mounting Rail (MMS)</text>

              {/* L-Feet / Standoff Brackets */}
              <polygon points="160,76 190,76 190,115 160,115" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
              <polygon points="460,76 490,76 490,115 460,115" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
              <text x="90" y="105" fill="#cbd5e1" fontSize="10" fontWeight="600">L-Foot Standoff</text>
              <text x="500" y="105" fill="#cbd5e1" fontSize="10" fontWeight="600">L-Foot Standoff</text>

              {/* EPDM Waterproofing Gasket */}
              <rect x="155" y="115" width="40" height="5" fill="#10b981" />
              <rect x="455" y="115" width="40" height="5" fill="#10b981" />
              <text x="100" y="128" fill="#34d399" fontSize="9">EPDM Gasket (Leak Prevention)</text>

              {/* Fasteners / Lag Screws into Purlin */}
              <line x1="175" y1="115" x2="175" y2="165" stroke="#ef4444" strokeWidth="3" strokeDasharray="3 2" />
              <line x1="475" y1="115" x2="475" y2="165" stroke="#ef4444" strokeWidth="3" strokeDasharray="3 2" />
              <text x="185" y="145" fill="#f87171" fontSize="10" fontWeight="700">Withdrawal Check (Tension)</text>

              {/* Roof Metal Sheet Profile */}
              <path d="M 40,120 L 140,120 L 155,115 L 195,115 L 210,120 L 440,120 L 455,115 L 495,115 L 510,120 L 640,120" fill="none" stroke="#64748b" strokeWidth="3" />
              <text x="530" y="138" fill="#94a3b8" fontSize="10">0.5mm Metal Roof Profile</text>

              {/* Cold-Formed Z/C Purlin */}
              <rect x="135" y="165" width="80" height="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="145" y="189" fill="#38bdf8" fontSize="10" fontWeight="700">C/Z Purlin</text>
              
              <rect x="435" y="165" width="80" height="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <text x="445" y="189" fill="#38bdf8" fontSize="10" fontWeight="700">C/Z Purlin</text>

              {/* Main Structural Rafter (PEB / I-Beam) */}
              <rect x="40" y="225" width="600" height="28" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" rx="3" />
              <text x="235" y="243" fill="#fbbf24" fontSize="12" fontWeight="800">Primary Steel Rafter / Truss Portal Frame (IS 800)</text>

              {/* Load Path Indicator Lines */}
              <line x1="175" y1="205" x2="175" y2="225" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
              <line x1="475" y1="205" x2="475" y2="225" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
              <text x="290" y="218" fill="#10b981" fontSize="10" fontWeight="600">✓ Continuous Load Transfer Path</text>
            </svg>
          </div>
        </section>

        {/* ── Section 4: What Does a Comprehensive Report Include? ── */}
        <section style={{ marginBottom: '65px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 35px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fbbf24', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              <FileCheck2 size={15} />
              <span>Deliverables Breakdown</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 12px 0' }}>
              What Does Our Solar Structural Report Include?
            </h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.98rem' }}>
              Every structural stability dossier issued by KS Chartered Engineers includes 6 rigorous analytical pillars:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '22px' }}>
            
            {/* Pillar 1 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>1</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Dead Load &amp; Weight Analysis</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Exact mathematical summation of solar panels, aluminum/GI mounting structures, inverters, walkways, and cabling trays. We calculate pressure distribution across each square meter of the roof deck.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>2</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Wind Uplift &amp; Suction (IS 875 Pt 3)</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Site-specific wind pressure evaluation considering basic wind velocity (Vb), terrain category factors (k1, k2, k3, k4), roof slope tilt, and corner aerodynamic vortex suction coefficients (Cpe - Cpi).
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>3</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Member Capacity &amp; DCR Calculations</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Bending moment, shear stress, and deflection checks on existing rafters, purlins, and slabs. We deliver exact Demand-to-Capacity Ratios (DCR); values below 1.0 certify safe structural operation.
              </p>
            </div>

            {/* Pillar 4 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>4</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Fastener Pull-Out &amp; Anchorage Audit</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Withdrawal and shear capacity tests for mechanical fasteners, chemical anchors (Hilti/Fischer), and self-drilling screws penetrating metal decks, preventing tear-out during cyclonic storms.
              </p>
            </div>

            {/* Pillar 5 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>5</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Ground Mount &amp; Foundation Engineering</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                For ground-mount solar farms, we evaluate soil-bearing capacity (SBC), pile depth penetration, ballast concrete pad dimensions, and resistance against overturning and sliding moments.
              </p>
            </div>

            {/* Pillar 6 */}
            <div style={{ background: '#0a1224', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>6</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>Statutory Stamped Certificate &amp; Seal</h3>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                Official Chartered Engineer certificate bearing the Institution of Engineers (India) membership seal, registration credentials, and legal sign-off accepted by DISCOMs, CEIG, and banks.
              </p>
            </div>

          </div>
        </section>

        {/* ── Section 5: Residential vs. Commercial Workflow ── */}
        <section style={{ marginBottom: '65px', background: '#0a1224', border: '1px solid #1e293b', borderRadius: '16px', padding: '35px 25px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 30px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Project-Specific Engineering Methodology
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#ffffff', margin: '8px 0 10px' }}>
              Residential vs. Commercial (C&amp;I) Assessment Approach
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: '0 0 24px 0' }}>
              Exactus Energy and global structural standards distinguish between residential and commercial projects. Select your project profile below:
            </p>

            {/* Toggle Tabs */}
            <div style={{ display: 'inline-flex', background: '#050a17', padding: '4px', borderRadius: '10px', border: '1px solid #1e293b' }}>
              <button
                onClick={() => setActiveTab('commercial')}
                style={{
                  background: activeTab === 'commercial' ? '#fbbf24' : 'transparent',
                  color: activeTab === 'commercial' ? '#040914' : '#94a3b8',
                  border: 'none',
                  borderRadius: '7px',
                  padding: '8px 20px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Commercial &amp; Industrial (50 kW – 5 MW)
              </button>
              <button
                onClick={() => setActiveTab('residential')}
                style={{
                  background: activeTab === 'residential' ? '#fbbf24' : 'transparent',
                  color: activeTab === 'residential' ? '#040914' : '#94a3b8',
                  border: 'none',
                  borderRadius: '7px',
                  padding: '8px 20px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Residential Rooftops (3 kW – 50 kW)
              </button>
            </div>
          </div>

          {activeTab === 'commercial' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STAGE 1: PRE-LAYOUT CAPACITY AUDIT</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>Reserve Load-Bearing Evaluation</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Before solar EPCs finalize panel placement, our engineers review original structural fabrication drawings (PEB portal frames, columns, and purlin gauge) to determine the exact reserve dead and live load capacity (kN/m²).
                </p>
              </div>

              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STAGE 2: POST-LAYOUT 3D FEA MODELING</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>STAAD.Pro &amp; Wind Simulation</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Once the array layout is mapped, we create a 3D finite element model testing edge/corner suction vortices, walkway dead weights, cable tray routings, and thermal expansion joints.
                </p>
              </div>

              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STAGE 3: STATUTORY CEIG CLEARANCE</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>Formal Chartered Engineer Stamp</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Deliver stamped structural stability certificate, calculations annexure, and engineering drawing sheets required by CEIG electrical inspectorate, DISCOM, and corporate project financers.
                </p>
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STEP 1: ROOF FRAMING &amp; SLAB CHECK</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>Rafter &amp; RCC Slab Assessment</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Review of residential roof type (RCC slab, pitched clay tile, or metal shingle). We verify joist spacing, slab thickness, and water drainage slope to confirm safe support for flush or ballasted systems.
                </p>
              </div>

              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STEP 2: AERODYNAMIC UPLIFT VERIFICATION</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>Wind Safety &amp; Anchoring</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Verification that residential mounting clamps and lag screws will not tear away under local cyclonic or monsoon wind gusts, with EPDM water-tightness sealing to prevent household roof leaks.
                </p>
              </div>

              <div style={{ background: '#050a17', border: '1px solid #1e293b', borderRadius: '12px', padding: '22px' }}>
                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '0.92rem', marginBottom: '8px' }}>STEP 3: 24-HOUR FAST-TRACK CERTIFICATE</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '0 0 8px 0' }}>Turnkey Stamped Letter</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Quick delivery of the official stamped stability report needed for municipal building permits, net-metering connection with local power discoms, and PM Surya Ghar subsidy disbursement.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ── Section 6: Real-World Case Study / Proof ── */}
        <section style={{ marginBottom: '65px' }}>
          <div style={{ background: 'linear-gradient(135deg, #091226 0%, #0d1a38 100%)', border: '1px solid #1e293b', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'center' }}>
              <div style={{ padding: '36px 30px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  <CheckCircle2 size={15} />
                  <span>Verified Project Certification</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.3 }}>
                  1.2 MW Industrial Rooftop Solar Stability Certification
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '16px' }}>
                  A heavy engineering automotive components plant in Rajasthan needed net-metering approval for a 1,200 kW solar array across 3 pre-engineered steel buildings. The local discom required an urgent structural integrity certificate to ensure 47 m/s wind safety.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '22px' }}>
                  <div style={{ background: '#050a17', padding: '10px 14px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Wind Velocity Tested</div>
                    <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>47 m/s (169 km/h)</div>
                  </div>
                  <div style={{ background: '#050a17', padding: '10px 14px', borderRadius: '8px', border: '1px solid #1e293b' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Capacity Approved</div>
                    <div style={{ fontSize: '1rem', color: '#10b981', fontWeight: 700 }}>1,200 kWp (100% Pass)</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (typeof onOpenQuote === 'function') {
                      onOpenQuote('Solar Structural Stability & Wind Load Certification');
                    } else {
                      window.location.href = '/contact';
                    }
                  }}
                  style={{
                    background: '#fbbf24',
                    color: '#040914',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              <div style={{ height: '100%', minHeight: '300px', position: 'relative', background: '#060d1f' }}>
                <img
                  src="/blog/solar-ceig.webp"
                  alt="Solar Structural Inspection & CEIG Certification"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '320px', filter: 'brightness(0.9)' }}
                  loading="lazy"
                />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', background: 'rgba(4, 9, 20, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '10px 14px', borderRadius: '8px' }}>
                  <div style={{ color: '#fbbf24', fontSize: '0.78rem', fontWeight: 700 }}>On-Site Structural Inspection</div>
                  <div style={{ color: '#e2e8f0', fontSize: '0.82rem' }}>Purlin deflection testing &amp; weld visual audit by KS Chartered Engineers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: Frequently Asked Questions ── */}
        <section style={{ marginBottom: '65px' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 35px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Frequently Asked Questions
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.3vw, 2rem)', fontWeight: 800, color: '#ffffff', margin: '8px 0 10px' }}>
              Answers to Solar Structural Engineering Inquiries
            </h2>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#0a1224',
                    border: '1px solid #1e293b',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease'
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
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="#fbbf24" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 20px 18px', color: '#94a3b8', fontSize: '0.90rem', lineHeight: 1.65, borderTop: '1px solid #131e33' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 8: Final CTA Card ── */}
        <section style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(251, 191, 36, 0.12) 0%, rgba(10, 18, 36, 0.9) 70%, #040914 100%)',
          border: '1px solid #334155',
          borderRadius: '18px',
          padding: '45px 25px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(251, 191, 36, 0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Sun size={28} color="#fbbf24" />
            </div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', fontWeight: 800, color: '#ffffff', margin: '0 0 12px 0' }}>
              Get Your Solar Structural Stability Report Today
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.65, margin: '0 0 28px 0' }}>
              Fast-track your DISCOM net-metering, CEIG safety certificates, and project approvals with certified structural calculations by IIT Roorkee alumni Chartered Engineers.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  if (typeof onOpenQuote === 'function') {
                    onOpenQuote('Solar Structural Stability & Wind Load Certification');
                  } else {
                    window.location.href = '/contact';
                  }
                }}
                style={{
                  background: '#fbbf24',
                  color: '#040914',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '13px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(245, 158, 11, 0.3)'
                }}
              >
                <span>Request Quotation &amp; Feasibility Review</span>
                <ArrowRight size={17} />
              </button>
              <a
                href="https://wa.me/919158658885?text=Hello%20KS%20Chartered%20Engineers,%20I%20need%20a%20Solar%20Structural%20Engineer%20Report%20and%20Stability%20Certificate."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '10px',
                  padding: '13px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
