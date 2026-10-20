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
  Home
} from 'lucide-react';

export default function TechSolutionsPage({ onOpenQuote, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('build'); // 'build', 'run', 'evolve'
  const [activeTechFilter, setActiveTechFilter] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'AI-Native Engineering & Software Solutions | MS Chartered Engineers Tech';

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

    updateOrCreateMeta('description', 'AI-Native Engineering Partner by MS Chartered Engineers. Build, Run, and Evolve enterprise platforms, custom software, agentic AI, and cloud architectures with 4-7X velocity.');
    updateOrCreateMeta('keywords', 'AI engineering, software development company, agentic AI, custom software, ERP solutions, cloud migration, Jaipur, India, The NineHertz style tech');
    updateOrCreateMeta('og:title', 'AI-Native Engineering Partner | MS Chartered Engineers', true);
    updateOrCreateMeta('og:description', 'Build, Run, and Evolve with AI-Without Losing Control. Turnkey product engineering and enterprise AI workflows.', true);
    updateOrCreateMeta('og:url', 'https://www.mscharteredengineer.com/tech-products', true);
  }, []);

  const samplePrompts = [
    'Build an autonomous valuation & audit AI agent',
    'Modernize our legacy desktop ERP to Cloud SaaS',
    'Develop a multi-vendor E-Commerce marketplace',
    'Automate factory sensor telemetry with IoT & SCADA'
  ];

  const handleAskAi = (query) => {
    const textToSearch = query || aiPrompt;
    if (!textToSearch.trim()) return;

    if (textToSearch.toLowerCase().includes('valuation') || textToSearch.toLowerCase().includes('audit')) {
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
    <div style={{ background: '#070b14', color: '#f8fafc', minHeight: '100vh', overflowX: 'hidden' }}>
      
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
              fontSize: 'clamp(2.3rem, 5vw, 4.2rem)',
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
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              maxWidth: '820px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Eliminate vendor fragmentation. We combine world-class software product engineering, agentic AI workflows, and cloud scalability to deliver systems 4–7X faster with guaranteed business outcomes.
          </p>

          {/* ── Interactive Ask AI Search Bar (NineHertz Feature) ── */}
          <div
            style={{
              maxWidth: '680px',
              margin: '0 auto 24px',
              background: 'rgba(15, 23, 42, 0.95)',
              border: '1px solid rgba(59, 130, 246, 0.45)',
              borderRadius: '16px',
              padding: '8px 12px',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '8px' }}>
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
              placeholder="e.g. Build an autonomous valuation bot, or migrate our ERP..."
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
      <section style={{ padding: '80px 20px', background: '#090f1d', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
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
      <section style={{ padding: '84px 20px', background: '#070d18', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
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
      <section style={{ padding: '80px 20px', background: '#090f1e', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
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

      {/* ── 5. FLAGSHIP SOFTWARE PRODUCTS SHOWCASE ── */}
      <section style={{ padding: '80px 20px', background: '#070c16', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px' }}>
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
          </div>
        </div>
      </section>

      {/* ── 6. TECHNOLOGY STACK & TOOLING ── */}
      <section style={{ padding: '80px 20px', background: '#090e1b', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
      <section style={{ padding: '80px 20px', background: '#070b14', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
        style={{
          padding: '70px 20px',
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
