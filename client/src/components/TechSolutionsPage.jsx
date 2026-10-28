import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  HelpCircle,
  Layers,
  Lock,
  Mail,
  MessageSquare,
  Phone,
  PhoneCall,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Wand2,
  Workflow,
  Zap,
  Home,
  Send,
  Play,
  Check,
  Copy,
  Download,
  FileSpreadsheet,
  Flame,
  Gift,
  RefreshCw,
  Sliders,
  ShieldAlert
} from 'lucide-react';

export default function TechSolutionsPage({ onOpenQuote, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('build'); // 'build', 'run', 'evolve'
  const [activeTechFilter, setActiveTechFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState(null);

  // ── MS Bulk WhatsApp Messenger Offer State ──
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [monthlyMsgs, setMonthlyMsgs] = useState(2000);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'AI-Native Engineering & Software Solutions | KS Chartered Engineers Tech';

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

    updateOrCreateMeta('description', 'AI-Native Engineering Partner & KS Bulk WhatsApp Messenger by KS Chartered Engineers. Build, Run, and Evolve enterprise platforms, custom software, agentic AI, and zero-cost WhatsApp automation.');
    updateOrCreateMeta('keywords', 'AI engineering, KS Bulk Messenger, bulk WhatsApp software, zero API cost WhatsApp, custom software, ERP solutions, Jaipur, India');
    updateOrCreateMeta('og:title', 'AI-Native Engineering & KS Bulk Messenger | KS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'Deploy KS Bulk WhatsApp Messenger with 50% Launch Offer. Unlimited WhatsApp reach with Excel import and anti-ban protection.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/tech-products', true);

    // Auto-scroll if hash or route is bulk-messenger
    if (window.location.hash === '#bulk-messenger' || window.location.pathname.includes('bulk-messenger')) {
      setTimeout(() => {
        const el = document.getElementById('bulk-messenger');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  }, []);

  const samplePrompts = [
    '🔥 MS Bulk WhatsApp Messenger (50% Launch Offer)',
    'Build an autonomous valuation & audit AI agent',
    'Modernize our legacy desktop ERP to Cloud SaaS',
    'Develop a multi-vendor E-Commerce marketplace'
  ];

  const handleAskAi = (query) => {
    const textToSearch = query || aiPrompt;
    if (!textToSearch.trim()) return;

    if (textToSearch.toLowerCase().includes('bulk') || textToSearch.toLowerCase().includes('whatsapp') || textToSearch.toLowerCase().includes('messenger') || textToSearch.toLowerCase().includes('offer')) {
      setAiResponse({
        recommendation: 'MS Bulk WhatsApp Messenger™ (Launch Offer: 50% OFF)',
        architecture: 'Local Node.js/Puppeteer desktop automation engine with 0% Meta per-message fees, dynamic Excel tag interpolation, automated visiting card attachment, and humanized anti-ban jitter algorithm.',
        timeline: 'Special Launch Offer available below • Only ₹1,999 (Code: MSTECH50)'
      });
      setTimeout(() => {
        const el = document.getElementById('bulk-messenger');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else if (textToSearch.toLowerCase().includes('valuation') || textToSearch.toLowerCase().includes('audit')) {
      setAiResponse({
        recommendation: 'MS Valuation & Compliance Cloud Suite',
        architecture: 'FastAPI + Next.js + Vector DB (Pinecone) for automated statutory IS report generation with 100% DISH/CEIG compliance.',
        timeline: 'Production ready in 2–4 weeks'
      });
    } else if (textToSearch.toLowerCase().includes('ecommerce') || textToSearch.toLowerCase().includes('e-commerce') || textToSearch.toLowerCase().includes('kala')) {
      setAiResponse({
        recommendation: 'Kala E-Commerce Platform Architecture',
        architecture: 'Microservices with Node.js/Go, Redis cache, automated inventory indexing, and seamless multi-channel checkout.',
        timeline: 'MVP in 3 weeks, full scale in 6 weeks'
      });
    } else if (textToSearch.toLowerCase().includes('erp') || textToSearch.toLowerCase().includes('legacy') || textToSearch.toLowerCase().includes('modern')) {
      setAiResponse({
        recommendation: 'Enterprise Cloud ERP & AutonomousOps',
        architecture: 'Incremental migration from desktop/SQL to AWS/PostgreSQL with role-based access, automated audit logs, and zero downtime.',
        timeline: 'Sprint-by-sprint rollout with guaranteed continuity'
      });
    } else {
      setAiResponse({
        recommendation: 'Custom AI-Native Engineering Workflow',
        architecture: 'Agentic AI orchestration using LangChain & Claude/GPT-4o APIs, coupled with custom responsive frontend & enterprise security.',
        timeline: 'Prototype in 48 hours • Production in 3-5 weeks'
      });
    }
  };

  const handleCopyCoupon = () => {
    try {
      navigator.clipboard?.writeText('MSTECH50');
      setCopiedCoupon(true);
      setTimeout(() => setCopiedCoupon(false), 2500);
    } catch {
      setCopiedCoupon(true);
      setTimeout(() => setCopiedCoupon(false), 2500);
    }
  };

  // Technologies list
  const techStack = [
    { name: 'React & Next.js', category: 'frontend', desc: 'Server-side rendering, sub-second loads' },
    { name: 'TypeScript', category: 'frontend', desc: 'Type-safe enterprise applications' },
    { name: 'Tailwind & Vanilla CSS', category: 'frontend', desc: 'Ultra-fast, responsive styling' },
    { name: 'Node.js & Express', category: 'backend', desc: 'High-throughput event-driven APIs' },
    { name: 'Python & FastAPI', category: 'backend', desc: 'High-performance AI model serving' },
    { name: 'Go (Golang)', category: 'backend', desc: 'Ultra low-latency microservices' },
    { name: 'OpenAI & Claude 3.5', category: 'ai', desc: 'State-of-the-art cognitive reasoning' },
    { name: 'LangChain & LlamaIndex', category: 'ai', desc: 'Agentic orchestration & RAG pipelines' },
    { name: 'Pinecone & pgvector', category: 'ai', desc: 'High-dimensional semantic memory' },
    { name: 'AWS & Google Cloud', category: 'cloud', desc: 'Scalable multi-region cloud hosting' },
    { name: 'Docker & Kubernetes', category: 'cloud', desc: 'Containerized deployment & auto-scaling' },
    { name: 'PostgreSQL & Redis', category: 'cloud', desc: 'ACID compliant data & microsecond caching' }
  ];

  const filteredTech = activeTechFilter === 'all'
    ? techStack
    : techStack.filter((t) => t.category === activeTechFilter);

  // FAQs
  const faqs = [
    {
      q: 'How does AI-Native Engineering differ from traditional software development?',
      a: 'Traditional development relies on manual boilerplate coding, lengthy sprint reviews, and separate handoffs between design, dev, and QA. In our AI-native workflow, engineers work with autonomous code intelligence (Claude Code, Cursor, automated test synthesis), allowing us to ship production-grade code 4–7X faster while maintaining enterprise-level test coverage and zero technical debt.'
    },
    {
      q: 'Who owns the intellectual property (IP) and source code of the developed systems?',
      a: 'You do — 100%. Upon milestone completion and settlement, all source code, architecture blueprints, database schemas, and AI prompts belong exclusively to your business. We never reuse your proprietary algorithms or data.'
    },
    {
      q: 'Can you modernize our existing legacy software or ERP without breaking our operations?',
      a: 'Yes. We specialize in incremental legacy modernization. Rather than risking a disruptive "big bang" rewrite, we decouple key business logic, build modern cloud APIs around your core database, and gradually transition workflows into an intuitive cloud and mobile interface with zero downtime.'
    },
    {
      q: 'How do you safeguard enterprise data privacy when using generative AI and LLMs?',
      a: 'We adhere to zero-data-retention agreements and enterprise-tier private API endpoints. Your company documents and proprietary data are never used to train public LLM models. Vector search runs in your private encrypted namespace with strict role-based access control (RBAC).'
    },
    {
      q: 'What is your typical turnaround time for an enterprise MVP vs full product launch?',
      a: 'A functional, interactive prototype or MVP is delivered in 2 to 3 weeks. A complete enterprise-grade production platform (including cloud setup, CI/CD pipeline, and user testing) is typically deployed in 6 to 10 weeks, backed by weekly deployable builds.'
    }
  ];

  return (
    <div className="tech-page-container" style={{ background: '#070b14', color: '#f8fafc', minHeight: '100vh', overflowX: 'hidden', width: '100%' }}>
      
      {/* ── SPECIAL LAUNCH OFFER TOP PROMO BANNER ── */}
      <div className="tech-promo-banner">
        <div className="container tech-promo-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              background: '#22c55e',
              color: '#052e16',
              fontWeight: 900,
              fontSize: '0.72rem',
              padding: '2px 8px',
              borderRadius: '999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Flame size={12} color="#052e16" />
              LAUNCH OFFER • 50% OFF
            </span>
            <span style={{ fontWeight: 600, fontSize: '0.86rem' }}>
              <strong>MS Bulk WhatsApp Messenger™</strong> — Zero API Cost, Dynamic Excel Tags &amp; Anti-Ban Throttling.
            </span>
            <span style={{ color: '#86efac', fontSize: '0.82rem' }}>
              Only ₹1,999 <span style={{ textDecoration: 'line-through', color: '#94a3b8' }}>₹4,999</span> with coupon <code style={{ background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px', color: '#fef08a' }}>MSTECH50</code>
            </span>
          </div>
          <div className="tech-promo-actions">
            <button
              onClick={() => {
                const el = document.getElementById('bulk-messenger');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                background: '#ffffff',
                color: '#15803d',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontWeight: 800,
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <span>View 50% Offer</span>
              <ArrowRight size={13} />
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=919158658885&text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20claim%20the%2050%25%20Launch%20Offer%20(₹1%2C999)%20for%20MS%20Bulk%20WhatsApp%20Messenger%20(Coupon%3A%20MSTECH50)."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.78rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <MessageSquare size={13} />
              <span>Claim Offer</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB NAVIGATION ── */}
      <div style={{ background: '#0a101d', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', padding: '12px 20px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: '#94a3b8' }}>
          <button
            onClick={onNavigateHome}
            style={{ background: 'transparent', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
          >
            <Home size={14} /> Home
          </button>
          <span>/</span>
          <span style={{ color: '#cbd5e1' }}>Technology Division</span>
          <span>/</span>
          <span style={{ color: '#3b82f6', fontWeight: 600 }}>AI-Native Engineering &amp; Software</span>
        </div>
      </div>

      {/* ── 1. HERO BANNER (THE NINEHERTZ STYLE) ── */}
      <section
        className="tech-hero-section"
        style={{
          position: 'relative',
          padding: '70px 20px 80px',
          background: 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(37, 99, 235, 0.22) 0%, rgba(7, 11, 20, 0.98) 75%)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(59, 130, 246, 0.2)'
        }}
      >
        <div className="container" style={{ maxWidth: '1080px', margin: '0 auto' }}>
          {/* Top Pill Kicker */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37, 99, 235, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              padding: '6px 20px',
              borderRadius: '9999px',
              fontSize: '0.80rem',
              fontWeight: 800,
              color: '#60a5fa',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} color="#3b82f6" />
            <span>AI-NATIVE ENGINEERING PARTNER</span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 auto 20px',
              letterSpacing: '-0.02em'
            }}
          >
            Build, Run, and Evolve with AI <br />
            <span style={{ color: '#3b82f6', textShadow: '0 0 40px rgba(59, 130, 246, 0.4)' }}>
              Without Losing Control
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.98rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              maxWidth: '820px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Eliminate vendor fragmentation. We combine world-class software product engineering, agentic AI workflows, and cloud scalability to deliver systems 4–7X faster with guaranteed business outcomes.
          </p>

          {/* ── Interactive Ask AI Search Bar (NineHertz Feature) ── */}
          <div className="tech-ai-search-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '4px' }}>
              <Bot size={20} color="#3b82f6" />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase' }}>
                Ask AI:
              </span>
            </div>
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleAskAi(); }}
              placeholder="e.g. MS Bulk WhatsApp Messenger, or migrate ERP..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '0.94rem'
              }}
            />
            <button
              onClick={() => handleAskAi()}
              style={{
                background: '#2563eb',
                border: 'none',
                color: '#ffffff',
                padding: '9px 18px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Explore Solution</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Quick sample prompt chips */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
            {samplePrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => { setAiPrompt(p); handleAskAi(p); }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '0.74rem',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#38bdf8'; e.currentTarget.style.borderColor = '#38bdf8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Dynamic AI Architecture Response Card */}
          {aiResponse && (
            <div
              style={{
                maxWidth: '740px',
                margin: '0 auto 36px',
                background: 'rgba(30, 41, 59, 0.95)',
                border: '1px solid #3b82f6',
                borderRadius: '14px',
                padding: '20px 24px',
                textAlign: 'left',
                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.25)',
                animation: 'fadeIn 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase' }}>
                  AI Engineering Recommendation
                </span>
                <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  {aiResponse.timeline}
                </span>
              </div>
              <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>
                {aiResponse.recommendation}
              </h4>
              <p style={{ color: '#cbd5e1', fontSize: '0.90rem', lineHeight: 1.55, marginBottom: '14px' }}>
                {aiResponse.architecture}
              </p>
              <button
                onClick={() => onOpenQuote(`AI Scoping: ${aiResponse.recommendation}`, { query: aiPrompt })}
                className="btn btn-gold"
                style={{ padding: '8px 18px', fontSize: '0.84rem' }}
              >
                <span>Request Detailed Technical Blueprint</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* Call to action buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '34px' }}>
            <button
              onClick={() => onOpenQuote('Strategy Call - AI Native Engineering')}
              style={{
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '30px',
                padding: '14px 32px',
                fontWeight: 800,
                fontSize: '0.96rem',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.45)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Book a Strategy Call</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="tel:+919158658885"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '30px',
                padding: '14px 26px',
                fontWeight: 700,
                fontSize: '0.94rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Phone size={15} color="#38bdf8" />
              <span>Talk to Tech Lead</span>
            </a>
          </div>

          {/* Trust points bar */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.84rem',
              color: '#94a3b8'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#3b82f6" />
              <span>Trusted by 100+ Enterprise &amp; Digital Natives</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#3b82f6" />
              <span>Build → Run → Evolve (AI-Native Framework)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#3b82f6" />
              <span>4-7X Velocity • Enterprise Security • Zero Handoffs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE AI-NATIVE ENGINEERING DIFFERENCE (4-GRID CARDS) ── */}
      <section className="tech-section" style={{ background: '#090f1d', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              OUTBUILD THE MARKET
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              AI-Native Engineering Difference
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              Not just faster. Not just cheaper. Fundamentally different engineering architecture from Day One.
            </p>
          </div>

          <div className="tech-cards-grid">
            {/* Card 1 */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '0.72rem', color: '#60a5fa', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                AI-NATIVE FROM DAY ONE
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 4px' }}>
                AI-Native Mode
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginBottom: '16px' }}>AI Mode Activated</div>
              <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 0 16px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                AI-augmented engineering is our standard. Using Claude Code, Cursor, and automated synthesis, we achieve 4–7× faster velocity while retaining 100% human verification.
              </p>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                PROPRIETARY FRAMEWORK
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 4px' }}>
                Zero Handoffs
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginBottom: '16px' }}>One Partner, Entire Journey</div>
              <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 0 16px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                We Build, Run, and Evolve your systems with the same senior team. No vendor switching. No knowledge loss. Your software velocity compounds continuously.
              </p>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                MEASURABLE OUTCOMES
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 4px' }}>
                Outcome-Based
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginBottom: '16px' }}>Deliver as Promised</div>
              <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 0 16px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Weekly production deployments and clear sprint milestone guarantees. Fixed commitments with zero surprise billing or endless project scope delays.
              </p>
            </div>

            {/* Card 4 */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '16px',
                padding: '28px',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: '0.72rem', color: '#a855f7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                REAL-TIME VISIBILITY
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, margin: '8px 0 4px' }}>
                Live Transparency
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginBottom: '16px' }}>See What You Pay For</div>
              <hr style={{ border: 'none', height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '0 0 16px' }} />
              <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Live client dashboards tracking pull requests, velocity metrics, test coverage, and cloud infrastructure costs. Total clarity at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. END-TO-END PARTNERSHIP: BUILD • RUN • EVOLVE (NINEHERTZ ARCHITECTURE) ── */}
      <section className="tech-section" style={{ background: '#070d18', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              END-TO-END PARTNERSHIP
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              <span style={{ color: '#3b82f6' }}>Build. Run. Evolve.</span> — One Partner, Zero Hand-offs
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              From initial MVP to AI transformation, we manage the entire software lifecycle.
            </p>

            {/* Tab Buttons */}
            <div className="tech-tabs-row">
              {['build', 'run', 'evolve'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? '#2563eb' : 'rgba(255, 255, 255, 0.06)',
                    color: activeTab === tab ? '#ffffff' : '#94a3b8',
                    border: `1px solid ${activeTab === tab ? '#3b82f6' : 'rgba(255, 255, 255, 0.12)'}`,
                    padding: '8px 24px',
                    borderRadius: '24px',
                    fontWeight: 700,
                    fontSize: '0.90rem',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    boxShadow: activeTab === tab ? '0 4px 14px rgba(37, 99, 235, 0.4)' : 'none'
                  }}
                >
                  {tab === 'build' && '01. Build (Engineering)'}
                  {tab === 'run' && '02. Run (Cloud & Ops)'}
                  {tab === 'evolve' && '03. Evolve (AI Growth)'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'build' && (
            <div className="tech-cards-grid">
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', marginBottom: '14px' }}>
                  <BrainCircuit size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>AI Engineering</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <li>✓ Agentic AI &amp; Autonomous Workflows</li>
                  <li>✓ Custom Enterprise LLM &amp; Chatbot Development</li>
                  <li>✓ Retrieval-Augmented Generation (RAG) Pipelines</li>
                  <li>✓ AI Integration with Existing Enterprise CRMs</li>
                </ul>
                <button onClick={() => onOpenQuote('AI Engineering Inquiry')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                  Inquire AI Engineering
                </button>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '14px' }}>
                  <Code2 size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Product Engineering</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <li>✓ Modern Web Applications (Next.js, React, Node.js)</li>
                  <li>✓ Mobile App Development (React Native, Flutter, Android)</li>
                  <li>✓ Enterprise SaaS Platforms &amp; Multi-Tenant Systems</li>
                  <li>✓ High-Performance REST &amp; GraphQL Microservices</li>
                </ul>
                <button onClick={() => onOpenQuote('Product Engineering Inquiry')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                  Inquire Product Engineering
                </button>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f59e0b', marginBottom: '14px' }}>
                  <Cpu size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Industrial IoT &amp; Automation</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
                  <li>✓ Factory Machine Telemetry &amp; Remote Asset Monitoring</li>
                  <li>✓ SCADA, PLC &amp; Sensor Data Cloud Ingestion</li>
                  <li>✓ Automated Predictive Maintenance Alerts</li>
                  <li>✓ Real-Time Industrial Floor Dashboards</li>
                </ul>
                <button onClick={() => onOpenQuote('IoT & Automation Inquiry')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.82rem' }}>
                  Inquire IoT &amp; Automation
                </button>
              </div>
            </div>
          )}

          {activeTab === 'run' && (
            <div className="tech-cards-grid">
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', marginBottom: '14px' }}>
                  <Cloud size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>Cloud Architecture &amp; SRE</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Multi-region AWS &amp; Azure architecture with zero-downtime CI/CD pipelines, Kubernetes container orchestration, and automated disaster recovery.
                </p>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>✓ 99.98% Guaranteed Uptime SLA</div>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#10b981', marginBottom: '14px' }}>
                  <Workflow size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>AutonomousOps</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Intelligent agents handling operational workflows, customer query follow-ups, and alert triaging 24/7 with zero bottlenecks.
                </p>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>✓ 24/7 Automated Observability</div>
              </div>
            </div>
          )}

          {activeTab === 'evolve' && (
            <div className="tech-cards-grid">
              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38bdf8', marginBottom: '14px' }}>
                  <TrendingUp size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>AI Operating Model</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Transform your internal workforce into an AI-augmented team. We help set up your internal AI Center of Excellence (CoE) and governance policies.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a855f7', marginBottom: '14px' }}>
                  <Lock size={22} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>AI Governance &amp; Security</h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  Continuous audit against prompt injection, data leaks, and compliance regulations. Comprehensive security reports and access controls.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. WHAT WE HELP YOU ACHIEVE (BENTO-GRID) ── */}
      <section className="tech-section" style={{ background: '#090f1e', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              FROM VISION TO EXECUTION
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              What We Help You Achieve
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              We bridge the gap between ambitious digital goals and real-world execution.
            </p>
          </div>

          <div className="tech-cards-grid">
            <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Zap size={22} color="#3b82f6" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                Enable 'AI Mode' for Your Business
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#60a5fa', marginBottom: '12px', fontStyle: 'italic' }}>
                "Your systems that think, solve, and guide."
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                AI Mode transforms static portals into intelligent agents that understand visitor intent, solve queries instantly, and route leads in real-time.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Rocket size={22} color="#10b981" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                From Prototype to Production AI
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#34d399', marginBottom: '12px', fontStyle: 'italic' }}>
                "Bring your concept. We ship the first version rapidly."
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Agentic workflows combined with battle-tested architectures turn requirements into working software without months of waiting.
              </p>
            </div>

            <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Server size={22} color="#f59e0b" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '6px' }}>
                Turn Legacy into Modern
              </h3>
              <div style={{ fontSize: '0.80rem', color: '#fbbf24', marginBottom: '12px', fontStyle: 'italic' }}>
                "Keep your core data. Re-imagine your workflow."
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                We refactor desktop databases, Excel workflows, and old tools into high-speed modern cloud platforms without disruptive downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PRE-BUILT AI SYSTEMS: SIGNATURE AI SOLUTIONS (ADVANCED LUXE DESIGN) ── */}
      <section style={{
        padding: '100px 20px',
        background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(37, 99, 235, 0.18), transparent 70%), radial-gradient(circle at 15% 45%, rgba(249, 115, 22, 0.07), transparent 45%), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.08), transparent 45%), #060b16',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle grid pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 56px' }}>
            {/* High-tech Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1))',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)',
              marginBottom: '16px',
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#38bdf8',
                boxShadow: '0 0 10px #38bdf8'
              }} />
              <span style={{
                fontSize: '0.80rem',
                color: '#93c5fd',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif"
              }}>
                PRE-BUILT AI SYSTEMS • KS CHARTERED TECH
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #ffffff 40%, #bfdbfe 85%, #60a5fa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Signature AI Solutions
            </h2>
            <p style={{
              color: '#94a3b8',
              fontSize: '1.08rem',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Production-tested intelligent systems engineered by KS Chartered Engineers to accelerate enterprise operations with zero technical debt.
            </p>
          </div>

          {/* Row 1: Cards 01, 02, 03 */}
          <div className="tech-cards-grid" style={{ marginBottom: '28px' }}>
            {/* Card 01 - AI Mode Activation (Amber & Sunset Neon) */}
            <div
              style={{
                background: 'linear-gradient(155deg, rgba(20, 26, 43, 0.88) 0%, rgba(13, 18, 32, 0.96) 100%)',
                border: '1px solid rgba(251, 146, 60, 0.28)',
                borderRadius: '26px',
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.7)';
                e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(251, 146, 60, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(251, 146, 60, 0.28)';
                e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '130px', height: '130px', background: 'radial-gradient(circle at top right, rgba(251, 146, 60, 0.18), transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#fb923c',
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.18), rgba(249, 115, 22, 0.08))',
                  border: '1px solid rgba(251, 146, 60, 0.35)',
                  borderRadius: '999px',
                  padding: '4px 14px',
                  marginBottom: '16px',
                  letterSpacing: '0.06em',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  01 • AI INTERFACE
                </div>

                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em'
                }}>
                  AI Mode Activation
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Add an AI-powered interface to any product, website, or enterprise platform.
                </p>

                {/* Framed Graphic Viewport */}
                <div style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '16px',
                  padding: '16px',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px 0 22px',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <img
                    src="/images/tech/ask-ai-mode.webp"
                    alt="AI Mode Activation"
                    style={{ maxWidth: '100%', maxHeight: '165px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>

              <div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0 0 16px 0' }} />
                <div style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  CAPABILITIES:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Conversational interfaces',
                    'AI copilots',
                    'Intelligent search'
                  ].map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M11.6776 6.57931C11.7762 6.5191 11.8578 6.43455 11.9143 6.33375C11.9709 6.23296 12.0006 6.11932 12.0006 6.00374C12.0006 5.88815 11.9709 5.77451 11.9143 5.67372C11.8578 5.57293 11.7762 5.48837 11.6776 5.42816C10.6374 4.79766 9.67699 4.04415 8.81708 3.1839C7.95771 2.32411 7.20502 1.36395 6.57527 0.324149C6.51525 0.22537 6.43085 0.143678 6.33017 0.0869149C6.22948 0.0301515 6.1159 0.000222565 6.00031 1.23655e-06C5.88473 -0.000220092 5.77103 0.0292736 5.67013 0.085651C5.56923 0.142028 5.48452 0.223397 5.42412 0.321944C4.79047 1.35892 4.03614 2.31715 3.17692 3.17656C2.31736 4.03595 1.35898 4.79044 0.321823 5.42424C0.223287 5.48466 0.141937 5.56939 0.0855811 5.6703C0.0292251 5.77122 -0.000244394 5.88492 1.5266e-06 6.0005C0.000247447 6.11609 0.0302006 6.22967 0.0869855 6.33034C0.14377 6.43101 0.22548 6.5154 0.324272 6.57539C1.36126 7.20321 2.31902 7.95341 3.17692 8.80985C4.03971 9.67137 4.79516 10.6341 5.42681 11.677C5.48702 11.7756 5.57158 11.8571 5.67237 11.9137C5.77317 11.9703 5.88681 12 6.00239 12C6.11797 12 6.23161 11.9703 6.33241 11.9137C6.4332 11.8571 6.51776 11.7756 6.57797 11.677C7.8447 9.59358 9.59371 7.84525 11.6776 6.57931Z" fill="#FB923C"/>
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, rgba(251, 146, 60, 0.18), rgba(234, 88, 12, 0.08))',
                    border: '1px solid rgba(251, 146, 60, 0.35)',
                    color: '#fdba74',
                    fontStyle: 'italic',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}>
                    Make every click smarter.
                  </div>
                  <button
                    onClick={() => onOpenQuote('AI Mode Activation Inquiry')}
                    style={{
                      background: 'linear-gradient(135deg, #f97316, #ea580c)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: "'Outfit', sans-serif",
                      boxShadow: '0 4px 14px rgba(234, 88, 12, 0.4)'
                    }}
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </div>

            {/* Card 02 - Marketing Studio (Emerald & Mint Neon) */}
            <div
              style={{
                background: 'linear-gradient(155deg, rgba(20, 26, 43, 0.88) 0%, rgba(13, 18, 32, 0.96) 100%)',
                border: '1px solid rgba(52, 211, 153, 0.28)',
                borderRadius: '26px',
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.7)';
                e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.28)';
                e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '130px', height: '130px', background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#34d399',
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18), rgba(5, 150, 105, 0.08))',
                  border: '1px solid rgba(52, 211, 153, 0.35)',
                  borderRadius: '999px',
                  padding: '4px 14px',
                  marginBottom: '16px',
                  letterSpacing: '0.06em',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  02 • GROWTH ENGINE
                </div>

                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em'
                }}>
                  Marketing Studio
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Launch AI-driven campaigns that target, personalize, and convert autonomously.
                </p>

                {/* Framed Graphic Viewport */}
                <div style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '16px',
                  padding: '16px',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px 0 22px',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <img
                    src="/images/tech/Agent-Workforce.webp"
                    alt="Marketing Studio"
                    style={{ maxWidth: '100%', maxHeight: '165px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>

              <div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0 0 16px 0' }} />
                <div style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  CAPABILITIES:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'AI Spend Sentry',
                    'AI Compliance Agent',
                    'Omnichannel routing'
                  ].map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M11.6776 6.57931C11.7762 6.5191 11.8578 6.43455 11.9143 6.33375C11.9709 6.23296 12.0006 6.11932 12.0006 6.00374C12.0006 5.88815 11.9709 5.77451 11.9143 5.67372C11.8578 5.57293 11.7762 5.48837 11.6776 5.42816C10.6374 4.79766 9.67699 4.04415 8.81708 3.1839C7.95771 2.32411 7.20502 1.36395 6.57527 0.324149C6.51525 0.22537 6.43085 0.143678 6.33017 0.0869149C6.22948 0.0301515 6.1159 0.000222565 6.00031 1.23655e-06C5.88473 -0.000220092 5.77103 0.0292736 5.67013 0.085651C5.56923 0.142028 5.48452 0.223397 5.42412 0.321944C4.79047 1.35892 4.03614 2.31715 3.17692 3.17656C2.31736 4.03595 1.35898 4.79044 0.321823 5.42424C0.223287 5.48466 0.141937 5.56939 0.0855811 5.6703C0.0292251 5.77122 -0.000244394 5.88492 1.5266e-06 6.0005C0.000247447 6.11609 0.0302006 6.22967 0.0869855 6.33034C0.14377 6.43101 0.22548 6.5154 0.324272 6.57539C1.36126 7.20321 2.31902 7.95341 3.17692 8.80985C4.03971 9.67137 4.79516 10.6341 5.42681 11.677C5.48702 11.7756 5.57158 11.8571 5.67237 11.9137C5.77317 11.9703 5.88681 12 6.00239 12C6.11797 12 6.23161 11.9703 6.33241 11.9137C6.4332 11.8571 6.51776 11.7756 6.57797 11.677C7.8447 9.59358 9.59371 7.84525 11.6776 6.57931Z" fill="#32BD65"/>
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.18), rgba(5, 150, 105, 0.08))',
                    border: '1px solid rgba(52, 211, 153, 0.35)',
                    color: '#6ee7b7',
                    fontStyle: 'italic',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}>
                    Marketing on autopilot.
                  </div>
                  <button
                    onClick={() => onOpenQuote('Marketing Studio Inquiry')}
                    style={{
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: "'Outfit', sans-serif",
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
                    }}
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </div>

            {/* Card 03 - AI Modernization (Sapphire & Cyan Neon) */}
            <div
              style={{
                background: 'linear-gradient(155deg, rgba(20, 26, 43, 0.88) 0%, rgba(13, 18, 32, 0.96) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.28)',
                borderRadius: '26px',
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.7)';
                e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.28)';
                e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '130px', height: '130px', background: 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(2, 132, 199, 0.08))',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '999px',
                  padding: '4px 14px',
                  marginBottom: '16px',
                  letterSpacing: '0.06em',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  03 • LEGACY CORE
                </div>

                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em'
                }}>
                  AI Modernization
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Upgrade existing systems with AI without rebuilding your entire core infrastructure.
                </p>

                {/* Framed Graphic Viewport */}
                <div style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '16px',
                  padding: '16px',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px 0 22px',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <img
                    src="/images/tech/AI-Modernization.webp"
                    alt="AI Modernization"
                    style={{ maxWidth: '100%', maxHeight: '165px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>

              <div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0 0 16px 0' }} />
                <div style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  CAPABILITIES:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'AI copilots for legacy',
                    'AI data layers',
                    'Automation APIs'
                  ].map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M11.6776 6.57931C11.7762 6.5191 11.8578 6.43455 11.9143 6.33375C11.9709 6.23296 12.0006 6.11932 12.0006 6.00374C12.0006 5.88815 11.9709 5.77451 11.9143 5.67372C11.8578 5.57293 11.7762 5.48837 11.6776 5.42816C10.6374 4.79766 9.67699 4.04415 8.81708 3.1839C7.95771 2.32411 7.20502 1.36395 6.57527 0.324149C6.51525 0.22537 6.43085 0.143678 6.33017 0.0869149C6.22948 0.0301515 6.1159 0.000222565 6.00031 1.23655e-06C5.88473 -0.000220092 5.77103 0.0292736 5.67013 0.085651C5.56923 0.142028 5.48452 0.223397 5.42412 0.321944C4.79047 1.35892 4.03614 2.31715 3.17692 3.17656C2.31736 4.03595 1.35898 4.79044 0.321823 5.42424C0.223287 5.48466 0.141937 5.56939 0.0855811 5.6703C0.0292251 5.77122 -0.000244394 5.88492 1.5266e-06 6.0005C0.000247447 6.11609 0.0302006 6.22967 0.0869855 6.33034C0.14377 6.43101 0.22548 6.5154 0.324272 6.57539C1.36126 7.20321 2.31902 7.95341 3.17692 8.80985C4.03971 9.67137 4.79516 10.6341 5.42681 11.677C5.48702 11.7756 5.57158 11.8571 5.67237 11.9137C5.77317 11.9703 5.88681 12 6.00239 12C6.11797 12 6.23161 11.9703 6.33241 11.9137C6.4332 11.8571 6.51776 11.7756 6.57797 11.677C7.8447 9.59358 9.59371 7.84525 11.6776 6.57931Z" fill="#38BDF8"/>
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.18), rgba(2, 132, 199, 0.08))',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#7dd3fc',
                    fontStyle: 'italic',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}>
                    New intelligence, same systems.
                  </div>
                  <button
                    onClick={() => onOpenQuote('AI Modernization Inquiry')}
                    style={{
                      background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: "'Outfit', sans-serif",
                      boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)'
                    }}
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Card 04 (AutonomousOps) + Card 05 (MS-Nexus AI OS Core Platform) */}
          <div className="tech-cards-grid">
            {/* Card 04 - AutonomousOps (Hyper Violet & Amethyst Glow) */}
            <div
              style={{
                background: 'linear-gradient(155deg, rgba(20, 26, 43, 0.88) 0%, rgba(13, 18, 32, 0.96) 100%)',
                border: '1px solid rgba(168, 85, 247, 0.32)',
                borderRadius: '26px',
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.75)';
                e.currentTarget.style.boxShadow = '0 20px 45px -10px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.32)';
                e.currentTarget.style.boxShadow = '0 12px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '130px', height: '130px', background: 'radial-gradient(circle at top right, rgba(168, 85, 247, 0.2), transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: '#c084fc',
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.18), rgba(126, 34, 206, 0.08))',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  borderRadius: '999px',
                  padding: '4px 14px',
                  marginBottom: '16px',
                  letterSpacing: '0.06em',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  04 • AUTONOMOUS SRE
                </div>

                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: "'Outfit', sans-serif",
                  margin: '0 0 10px',
                  letterSpacing: '-0.02em'
                }}>
                  AutonomousOps
                </h3>
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  Self-managing operations that monitor, decide, and act independently.
                </p>

                {/* Framed Graphic Viewport */}
                <div style={{
                  background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                  borderRadius: '16px',
                  padding: '16px',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px 0 22px',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <img
                    src="/images/tech/AI-Product-Launchpad.webp"
                    alt="AutonomousOps"
                    style={{ maxWidth: '100%', maxHeight: '165px', objectFit: 'contain', display: 'block' }}
                  />
                </div>
              </div>

              <div>
                <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0 0 16px 0' }} />
                <div style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  color: '#e2e8f0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  CAPABILITIES:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Self-Healing System Design',
                    'AI-Driven Incident Detection'
                  ].map((cap, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#cbd5e1', fontSize: '0.88rem', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M11.6776 6.57931C11.7762 6.5191 11.8578 6.43455 11.9143 6.33375C11.9709 6.23296 12.0006 6.11932 12.0006 6.00374C12.0006 5.88815 11.9709 5.77451 11.9143 5.67372C11.8578 5.57293 11.7762 5.48837 11.6776 5.42816C10.6374 4.79766 9.67699 4.04415 8.81708 3.1839C7.95771 2.32411 7.20502 1.36395 6.57527 0.324149C6.51525 0.22537 6.43085 0.143678 6.33017 0.0869149C6.22948 0.0301515 6.1159 0.000222565 6.00031 1.23655e-06C5.88473 -0.000220092 5.77103 0.0292736 5.67013 0.085651C5.56923 0.142028 5.48452 0.223397 5.42412 0.321944C4.79047 1.35892 4.03614 2.31715 3.17692 3.17656C2.31736 4.03595 1.35898 4.79044 0.321823 5.42424C0.223287 5.48466 0.141937 5.56939 0.0855811 5.6703C0.0292251 5.77122 -0.000244394 5.88492 1.5266e-06 6.0005C0.000247447 6.11609 0.0302006 6.22967 0.0869855 6.33034C0.14377 6.43101 0.22548 6.5154 0.324272 6.57539C1.36126 7.20321 2.31902 7.95341 3.17692 8.80985C4.03971 9.67137 4.79516 10.6341 5.42681 11.677C5.48702 11.7756 5.57158 11.8571 5.67237 11.9137C5.77317 11.9703 5.88681 12 6.00239 12C6.11797 12 6.23161 11.9703 6.33241 11.9137C6.4332 11.8571 6.51776 11.7756 6.57797 11.677C7.8447 9.59358 9.59371 7.84525 11.6776 6.57931Z" fill="#A855F7"/>
                      </svg>
                      {cap}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.18), rgba(126, 34, 206, 0.08))',
                    border: '1px solid rgba(168, 85, 247, 0.35)',
                    color: '#d8b4fe',
                    fontStyle: 'italic',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontSize: '0.84rem',
                    fontWeight: 600
                  }}>
                    Operations without operators.
                  </div>
                  <button
                    onClick={() => onOpenQuote('AutonomousOps Inquiry')}
                    style={{
                      background: 'linear-gradient(135deg, #9333ea, #7e22ce)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      fontFamily: "'Outfit', sans-serif",
                      boxShadow: '0 4px 14px rgba(147, 51, 234, 0.4)'
                    }}
                  >
                    Deploy
                  </button>
                </div>
              </div>
            </div>

            {/* Card 05 • FLAGSHIP PLATFORM (MS-Nexus AI OS - Brand New Logo & Styling) */}
            <div
              className="tech-card-span-2 tech-card-responsive"
              style={{
                background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 16, 30, 0.98) 100%)',
                border: '1px solid rgba(56, 189, 248, 0.38)',
                borderRadius: '26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px -10px rgba(56, 189, 248, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.38)';
                e.currentTarget.style.boxShadow = '0 20px 45px -5px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16), transparent 70%)', pointerEvents: 'none' }} />

              <div>
                {/* Header with Custom MS Tech Logo */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '18px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    color: '#38bdf8',
                    background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(59, 130, 246, 0.08))',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    borderRadius: '999px',
                    padding: '4px 14px',
                    letterSpacing: '0.06em',
                    fontFamily: "'Outfit', sans-serif"
                  }}>
                    <Cpu size={13} color="#38bdf8" />
                    05 • FLAGSHIP PLATFORM
                  </div>

                  <button
                    onClick={() => onOpenQuote('MS-Nexus AI Core Platform Architecture Demo')}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#38bdf8',
                      fontSize: '0.90rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: "'Outfit', sans-serif",
                      padding: 0
                    }}
                  >
                    <span>Deploy MS-Nexus Platform</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

                {/* Custom Brand Identity / Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '10px 0 12px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '13px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 24px rgba(6, 182, 212, 0.55)',
                    flexShrink: 0
                  }}>
                    {/* Bespoke MS Neural Core Vector Icon */}
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 6L7 9V15L12 18L17 15V9L12 6Z" fill="rgba(255,255,255,0.25)" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2.5" fill="#38bdf8" />
                      <circle cx="12" cy="6" r="1.5" fill="#ffffff" />
                      <circle cx="17" cy="15" r="1.5" fill="#ffffff" />
                      <circle cx="7" cy="15" r="1.5" fill="#ffffff" />
                    </svg>
                  </div>
                  <div>
                    <h3 style={{
                      color: '#ffffff',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      fontFamily: "'Outfit', sans-serif",
                      margin: 0,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.2
                    }}>
                      MS-Nexus AI Core™
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Next-Gen Cognitive Operating Platform
                    </div>
                  </div>
                </div>

                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  margin: '0 0 22px',
                  maxWidth: '720px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif"
                }}>
                  The proprietary AI multi-agent orchestration engine powering custom solutions for KS Chartered Engineers tech clients. Turn raw business workflows into autonomous high-speed agents.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '0 0 20px 0' }} />

                {/* 2-Column High-Tech Capabilities Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '14px 28px', marginBottom: '22px' }}>
                  {[
                    { title: 'Agent orchestration', color: '#34d399' },
                    { title: 'Workflow automation', color: '#38bdf8' },
                    { title: 'AI infrastructure', color: '#a78bfa' },
                    { title: 'Prompt pipelines', color: '#f472b6' },
                    { title: 'Model routing', color: '#fb923c' }
                  ].map((cap, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e2e8f0', fontSize: '0.90rem', fontWeight: 500, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M11.6776 6.57931C11.7762 6.5191 11.8578 6.43455 11.9143 6.33375C11.9709 6.23296 12.0006 6.11932 12.0006 6.00374C12.0006 5.88815 11.9709 5.77451 11.9143 5.67372C11.8578 5.57293 11.7762 5.48837 11.6776 5.42816C10.6374 4.79766 9.67699 4.04415 8.81708 3.1839C7.95771 2.32411 7.20502 1.36395 6.57527 0.324149C6.51525 0.22537 6.43085 0.143678 6.33017 0.0869149C6.22948 0.0301515 6.1159 0.000222565 6.00031 1.23655e-06C5.88473 -0.000220092 5.77103 0.0292736 5.67013 0.085651C5.56923 0.142028 5.48452 0.223397 5.42412 0.321944C4.79047 1.35892 4.03614 2.31715 3.17692 3.17656C2.31736 4.03595 1.35898 4.79044 0.321823 5.42424C0.223287 5.48466 0.141937 5.56939 0.0855811 5.6703C0.0292251 5.77122 -0.000244394 5.88492 1.5266e-06 6.0005C0.000247447 6.11609 0.0302006 6.22967 0.0869855 6.33034C0.14377 6.43101 0.22548 6.5154 0.324272 6.57539C1.36126 7.20321 2.31902 7.95341 3.17692 8.80985C4.03971 9.67137 4.79516 10.6341 5.42681 11.677C5.48702 11.7756 5.57158 11.8571 5.67237 11.9137C5.77317 11.9703 5.88681 12 6.00239 12C6.11797 12 6.23161 11.9703 6.33241 11.9137C6.4332 11.8571 6.51776 11.7756 6.57797 11.677C7.8447 9.59358 9.59371 7.84525 11.6776 6.57931Z" fill={cap.color} />
                      </svg>
                      <span>{cap.title}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px', flexWrap: 'wrap', marginBottom: '22px' }}>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.18), rgba(59, 130, 246, 0.08))',
                    border: '1px solid rgba(56, 189, 248, 0.35)',
                    color: '#7dd3fc',
                    fontStyle: 'italic',
                    borderRadius: '8px',
                    padding: '8px 18px',
                    fontSize: '0.86rem',
                    fontWeight: 600
                  }}>
                    One engine powering it all.
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      onClick={() => onOpenQuote('MS-Nexus Platform Demo')}
                      style={{
                        background: 'linear-gradient(135deg, #2563eb, #0284c7)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '9px 18px',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        fontFamily: "'Outfit', sans-serif",
                        boxShadow: '0 4px 16px rgba(37, 99, 235, 0.45)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      Request Platform Access <ArrowRight size={13} />
                    </button>
                    <button
                      onClick={() => onOpenQuote('MS-Nexus Architecture Whitepaper')}
                      style={{
                        background: 'rgba(255, 255, 255, 0.06)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        borderRadius: '8px',
                        padding: '9px 16px',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: "'Outfit', sans-serif"
                      }}
                    >
                      Architecture Specs
                    </button>
                  </div>
                </div>
              </div>

              {/* Framed Graphic Viewport - High-Tech Terminal Window */}
              <div style={{
                background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
                borderRadius: '18px',
                padding: '16px',
                boxShadow: '0 12px 32px -6px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src="/images/tech/toPromptAI.webp"
                  alt="MS-Nexus AI Core Interface"
                  style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FLAGSHIP SOFTWARE PRODUCTS SHOWCASE ── */}
      <section className="tech-section" style={{ background: '#070c16', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              PROVEN PLATFORMS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              Our Shipped Products &amp; Platforms
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              Production software built and operated by our engineering team for enterprise clients and industrial firms.
            </p>
          </div>

          <div className="tech-cards-grid">
            {/* Product 1 */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', padding: '3px 10px', borderRadius: '4px', fontWeight: 800 }}>
                  E-COMMERCE SUITE
                </span>
                <ShoppingBag size={20} color="#3b82f6" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
                Kala E-Commerce Platform
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Multi-vendor retail &amp; wholesale marketplace platform with automated inventory synchronization, lightning-fast search, and multi-gateway checkout.
              </p>
              <div style={{ color: '#cbd5e1', fontSize: '0.80rem', marginBottom: '20px' }}>
                Stack: Node.js, Next.js, Redis, Razorpay, ElasticSearch
              </div>
              <button onClick={() => onOpenQuote('Kala E-Commerce Demo')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.84rem' }}>
                Request Live Demo
              </button>
            </div>

            {/* Product 2 */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 10px', borderRadius: '4px', fontWeight: 800 }}>
                  VALUATION AUTOMATION
                </span>
                <ShieldCheck size={20} color="#10b981" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
                MS Valuation Cloud Suite
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Comprehensive cloud system for Chartered Engineers &amp; Valuers. Stamped digital stability certificate generation, depreciated replacement cost audit, and bank mortgage reports.
              </p>
              <div style={{ color: '#cbd5e1', fontSize: '0.80rem', marginBottom: '20px' }}>
                Stack: Python FastAPI, React, PostgreSQL, PDF Engine
              </div>
              <button onClick={() => onOpenQuote('MS Valuation Suite Demo')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.84rem' }}>
                Explore Valuation Suite
              </button>
            </div>

            {/* Product 3 */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '3px 10px', borderRadius: '4px', fontWeight: 800 }}>
                  AGENTIC BOT
                </span>
                <Bot size={20} color="#f59e0b" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
                Enterprise AI Assistant &amp; Bot
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Omnichannel customer engagement agent connected to WhatsApp Cloud API and Web chat. Handles automated quotations, document scanning, and CRM lead capture.
              </p>
              <div style={{ color: '#cbd5e1', fontSize: '0.80rem', marginBottom: '20px' }}>
                Stack: OpenAI GPT-4o / Claude 3.5, Pinecone, Webhooks
              </div>
              <button onClick={() => onOpenQuote('Enterprise AI Bot Demo')} className="btn btn-outline" style={{ width: '100%', fontSize: '0.84rem' }}>
                Deploy Custom Bot
              </button>
            </div>

            {/* Product 4 - MS Bulk WhatsApp Messenger */}
            <div style={{ background: 'rgba(15, 23, 42, 0.85)', border: '1px solid rgba(34, 197, 94, 0.45)', borderRadius: '16px', padding: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#052e16', padding: '4px 14px', fontSize: '0.70rem', fontWeight: 900, borderBottomLeftRadius: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                🔥 50% OFF OFFER
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ fontSize: '0.72rem', background: 'rgba(34, 197, 94, 0.15)', color: '#4ade80', padding: '3px 10px', borderRadius: '4px', fontWeight: 800 }}>
                  WHATSAPP AUTOMATION
                </span>
                <MessageSquare size={20} color="#22c55e" />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>
                MS Bulk WhatsApp Messenger™
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                Automated 1-on-1 personalized WhatsApp outreach engine. Direct Excel database import, dynamic tags, auto-visiting card attachment, and humanized anti-ban protection with 0% Meta per-message fees.
              </p>
              <div style={{ color: '#cbd5e1', fontSize: '0.80rem', marginBottom: '20px' }}>
                Stack: Node.js, WhatsApp-Web.js, Puppeteer, XLSX, LocalAuth
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('bulk-messenger');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-gold"
                  style={{ width: '100%', fontSize: '0.84rem', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <Flame size={14} />
                  <span>View 50% Launch Offer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6.5. MS BULK WHATSAPP MESSENGER — 50% LAUNCH OFFER & PLATFORM OVERVIEW ── */}
      <section
        id="bulk-messenger"
        className="tech-section"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 10%, rgba(22, 101, 52, 0.25) 0%, rgba(7, 13, 24, 0.98) 75%)',
          borderBottom: '1px solid rgba(34, 197, 94, 0.25)',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(74, 222, 128, 0.4)',
                padding: '6px 18px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#4ade80',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <Flame size={14} color="#22c55e" />
              <span>EXCLUSIVE 50% LAUNCH OFFER • 0% PER-MESSAGE META FEES</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '16px',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}
            >
              MS Bulk WhatsApp Messenger™ <br />
              <span style={{ color: '#22c55e', textShadow: '0 0 35px rgba(34, 197, 94, 0.45)' }}>
                High-Velocity WhatsApp Outreach &amp; Special Offer
              </span>
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.65, margin: '0 auto 24px' }}>
              Connect with thousands of Chartered Accountants, industrial clients, and corporate leads directly on WhatsApp with personalized messaging, Excel imports, visiting cards, and intelligent anti-ban humanized pacing.
            </p>
          </div>

          {/* ── HIGH-CONVERTING LAUNCH OFFER BANNER BOX (OFFER LGA DIYA) ── */}
          <div
            className="tech-launch-offer-box"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 83, 45, 0.4) 0%, rgba(15, 23, 42, 0.95) 50%, rgba(6, 78, 59, 0.45) 100%)',
              border: '2px solid rgba(74, 222, 128, 0.6)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: 0, right: 0, width: '250px', height: '250px', background: 'radial-gradient(circle at top right, rgba(74, 222, 128, 0.2), transparent 70%)', pointerEvents: 'none' }} />

            <div className="tech-offer-grid">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#22c55e', color: '#052e16', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '14px' }}>
                  <Gift size={14} />
                  SPECIAL LAUNCH CELEBRATION OFFER
                </div>
                <h3 style={{ color: '#ffffff', fontSize: '1.9rem', fontWeight: 900, margin: '0 0 10px', lineHeight: 1.25 }}>
                  Get Lifetime Access at <span style={{ color: '#4ade80' }}>50% OFF</span>
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Say goodbye to expensive Meta WhatsApp API charges (₹0.85 per chat). Run your own high-converting local bulk campaigns directly from your PC or laptop.
                </p>

                {/* Offer features bullet grid */}
                <div className="tech-feature-bullets">
                  {[
                    'Zero recurring per-message cost (100% Free)',
                    'Smart Anti-Ban Humanizer (15-35s jitter)',
                    'Dynamic Excel Placeholders ({Name}, {Company})',
                    'Auto-attach Visiting Card & PDF Brochure',
                    'Complete desktop script + Guided setup',
                    '1-on-1 assistance by IIT Roorkee Engineers'
                  ].map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.86rem' }}>
                      <CheckCircle2 size={15} color="#22c55e" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Coupon Action Box */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(74, 222, 128, 0.35)',
                  borderRadius: '18px',
                  padding: '26px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ fontSize: '0.80rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  Limited Time Launch Price
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '1.3rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 600 }}>
                    ₹4,999
                  </span>
                  <span style={{ fontSize: '2.4rem', color: '#22c55e', fontWeight: 900 }}>
                    ₹1,999
                  </span>
                  <span style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', padding: '3px 8px', borderRadius: '6px', fontSize: '0.74rem', fontWeight: 800 }}>
                    SAVE ₹3,000
                  </span>
                </div>

                {/* Coupon Code Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(0, 0, 0, 0.45)',
                    border: '1px dashed #22c55e',
                    borderRadius: '10px',
                    padding: '8px 14px',
                    marginBottom: '18px'
                  }}
                >
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Coupon Code:</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 900, color: '#fef08a', letterSpacing: '0.08em' }}>MSTECH50</div>
                  </div>
                  <button
                    onClick={handleCopyCoupon}
                    style={{
                      background: copiedCoupon ? '#22c55e' : 'rgba(255, 255, 255, 0.1)',
                      color: copiedCoupon ? '#052e16' : '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    {copiedCoupon ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedCoupon ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Claim Offer WhatsApp Button */}
                <a
                  href={`https://api.whatsapp.com/send?phone=919158658885&text=${encodeURIComponent(
                    'Hello Mukesh Sir, I tested the MS Bulk WhatsApp Messenger on your Tech page. I want to claim the Launch Offer (₹1,999 with Coupon MSTECH50) for my business. Please share details and setup instructions!'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '13px 20px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    fontSize: '0.96rem',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(34, 197, 94, 0.45)',
                    marginBottom: '10px',
                    transition: 'transform 0.2s'
                  }}
                >
                  <MessageSquare size={17} />
                  <span>Claim 50% Off via WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuote('MS Bulk Messenger - Launch Offer Special', { coupon: 'MSTECH50', price: '₹1,999' })}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#cbd5e1',
                    width: '100%',
                    padding: '9px 16px',
                    borderRadius: '10px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Request Official Invoice &amp; Bank Transfer Details
                </button>
              </div>
            </div>
          </div>

          {/* ── VISUAL PRODUCT DASHBOARD & CAPABILITIES (LIVE TESTER REMOVED) ── */}
          <div style={{ marginBottom: '50px' }}>
            {/* Visual Dashboard Banner */}
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(34, 197, 94, 0.35)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(34, 197, 94, 0.15)',
                marginBottom: '32px',
                background: '#0a0f1d',
                position: 'relative'
              }}
            >
              <img
                src="/images/tech/ms-bulk-messenger.jpg"
                alt="MS Bulk WhatsApp Messenger Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }}
              />
              <div className="tech-banner-overlay">
                <div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                    DESKTOP AUTOMATION PLATFORM
                  </div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
                    MS Bulk WhatsApp Outreach &amp; Campaign Management Engine
                  </h3>
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href="/data/sample_contacts.csv"
                    download="MS_Bulk_Messenger_Sample_Contacts.csv"
                    style={{
                      background: 'rgba(255, 255, 255, 0.12)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      color: '#ffffff',
                      borderRadius: '10px',
                      padding: '10px 18px',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <Download size={14} />
                    <span>Download Sample Excel</span>
                  </a>

                  <a
                    href="https://api.whatsapp.com/send?phone=919158658885&text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20claim%20the%2050%25%20Launch%20Offer%20for%20MS%20Bulk%20WhatsApp%20Messenger%20(Coupon%3A%20MSTECH50)."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                      color: '#ffffff',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 15px rgba(34, 197, 94, 0.45)'
                    }}
                  >
                    <MessageSquare size={14} />
                    <span>Claim Offer (₹1,999)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="tech-cards-grid">
              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(34, 197, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <ShieldCheck size={22} color="#22c55e" />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px' }}>
                  Anti-Ban Humanizer
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Intelligent 15s–35s randomized delays and human-like typing jitter prevent WhatsApp rate limits and number blocking.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <FileSpreadsheet size={22} color="#38bdf8" />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px' }}>
                  Excel Database Import
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Directly load your client contacts from `.xlsx` or `.csv`. Automatically replaces dynamic tags like {'{Name}'} and {'{Company}'}.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(245, 158, 11, 0.25)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Gift size={22} color="#fbbf24" />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px' }}>
                  Auto-Attach Visiting Card &amp; PDF
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Sends visiting cards, statutory credentials, PDF brochures, and company profiles alongside every WhatsApp message automatically.
                </p>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                  <Lock size={22} color="#c084fc" />
                </div>
                <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 8px' }}>
                  100% Privacy &amp; Zero Meta Fees
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  Runs completely on your local computer. Your client numbers stay 100% private with ₹0 per-message recurring bills.
                </p>
              </div>
            </div>
          </div>

          {/* ── ROI & COST SAVINGS CALCULATOR (META API VS MS BULK MESSENGER) ── */}
          <div
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
              GUARANTEED RETURN ON INVESTMENT
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px' }}>
              How Much Money Will You Save Every Month?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.90rem', maxWidth: '620px', margin: '0 auto 24px' }}>
              Meta WhatsApp Business Cloud API charges ₹0.85 per conversation plus recurring monthly portal subscriptions. With MS Bulk Messenger, you pay ₹0 per message.
            </p>

            {/* Slider */}
            <div style={{ maxWidth: '520px', margin: '0 auto 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px' }}>
                <span>Monthly Client Database:</span>
                <strong style={{ color: '#22c55e', fontSize: '1rem' }}>{monthlyMsgs.toLocaleString()} Contacts</strong>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="500"
                value={monthlyMsgs}
                onChange={(e) => setMonthlyMsgs(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', accentColor: '#22c55e' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.70rem', color: '#64748b', marginTop: '4px' }}>
                <span>500 msgs</span>
                <span>5,000 msgs</span>
                <span>10,000 msgs</span>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="tech-cards-grid" style={{ maxWidth: '780px', margin: '0 auto 24px' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase' }}>Meta Cloud API Cost</div>
                <div style={{ fontSize: '1.4rem', color: '#ef4444', fontWeight: 900, margin: '6px 0' }}>
                  ₹{Math.round(monthlyMsgs * 0.85).toLocaleString()}/mo
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>₹{Math.round(monthlyMsgs * 0.85 * 12).toLocaleString()} per year</div>
              </div>

              <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22c55e', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase' }}>MS Bulk Messenger</div>
                <div style={{ fontSize: '1.4rem', color: '#22c55e', fontWeight: 900, margin: '6px 0' }}>
                  ₹0/mo forever
                </div>
                <div style={{ fontSize: '0.74rem', color: '#86efac' }}>Only ₹1,999 One-Time Setup</div>
              </div>

              <div style={{ background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: '12px', padding: '16px' }}>
                <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>Your Net Annual Savings</div>
                <div style={{ fontSize: '1.4rem', color: '#38bdf8', fontWeight: 900, margin: '6px 0' }}>
                  ₹{Math.round(monthlyMsgs * 0.85 * 12 - 1999).toLocaleString()}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#93c5fd' }}>Saved in Year 1</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://api.whatsapp.com/send?phone=919158658885&text=Hello%20Mukesh%20Sir%2C%20I%20want%20to%20order%20MS%20Bulk%20WhatsApp%20Messenger%20with%2050%25%20Launch%20Offer%20(Code%3A%20MSTECH50)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ padding: '12px 28px', fontSize: '0.90rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Flame size={16} />
                <span>Claim Offer at ₹1,999 Today</span>
              </a>
              <button
                onClick={() => onOpenQuote('MS Bulk Messenger Deployment Assistance')}
                className="btn btn-outline"
                style={{ padding: '12px 22px', fontSize: '0.90rem' }}
              >
                <span>Talk to Tech Lead (+91 91586 58885)</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── 6. TECHNOLOGY STACK & TOOLING ── */}
      <section className="tech-section" style={{ background: '#090e1b', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              MODERN TOOLING
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', fontWeight: 900, color: '#ffffff', marginBottom: '14px' }}>
              Our Technology Stack
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6 }}>
              Battle-tested frameworks and high-performance cloud architectures.
            </p>

            {/* Tech filter tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '22px' }}>
              {['all', 'frontend', 'backend', 'ai', 'cloud'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTechFilter(cat)}
                  style={{
                    background: activeTechFilter === cat ? '#2563eb' : 'rgba(255, 255, 255, 0.05)',
                    border: `1px solid ${activeTechFilter === cat ? '#3b82f6' : 'rgba(255, 255, 255, 0.12)'}`,
                    color: activeTechFilter === cat ? '#ffffff' : '#94a3b8',
                    padding: '6px 18px',
                    borderRadius: '20px',
                    fontWeight: 700,
                    fontSize: '0.80rem',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {filteredTech.map((tech, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'border-color 0.2s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}
              >
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px' }}>
                  {tech.name}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ACCORDION SECTION ── */}
      <section className="tech-section" style={{ background: '#070b14', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              QUESTIONS &amp; CLARIFICATIONS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', fontWeight: 900, color: '#ffffff', marginBottom: '12px' }}>
              Frequently Asked <span style={{ color: '#3b82f6' }}>Questions</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem' }}>
              Clear answers regarding IP rights, timelines, data privacy, and engineering process.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderLeft: openFaq === idx ? '4px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}
              >
                <button
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
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    color="#3b82f6"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 22px 20px', color: '#cbd5e1', fontSize: '0.90rem', lineHeight: 1.65, borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. STRATEGIC DISCOVERY CONSULTATION BANNER ── */}
      <section
        className="tech-section"
        style={{
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.18) 0%, rgba(7, 11, 20, 0.98) 100%)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.9rem)', fontWeight: 900, color: '#ffffff', marginBottom: '16px' }}>
            Ready to Build Your AI-Native Advantage?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.65, marginBottom: '32px' }}>
            Book a complimentary 30-minute architecture scoping session with our senior engineering team. We'll outline feasibility, tech stack, and deliver a fixed-timeline development plan.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Technical Architecture Scoping Session')}
              style={{
                background: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '30px',
                padding: '14px 32px',
                fontWeight: 800,
                fontSize: '0.96rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.5)'
              }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20want%20to%20discuss%20an%20AI%20or%20Software%20development%20project."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 26px', fontSize: '0.94rem' }}
            >
              <MessageSquare size={16} />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Note: Global Navbar and Footer are rendered by App.jsx as standard; no extra header/footer added per user instruction. */}
    </div>
  );
}
