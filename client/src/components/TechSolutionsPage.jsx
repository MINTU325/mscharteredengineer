import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ExternalLink, 
  Terminal, 
  Server, 
  Rocket, 
  Layout, 
  ShoppingBag, 
  FileSpreadsheet, 
  ClipboardCheck, 
  PhoneCall, 
  MessageSquare,
  Home,
  Bot,
  BrainCircuit,
  Send,
  Zap,
  MessageSquareCode
} from 'lucide-react';

export default function TechSolutionsPage({ onOpenQuote, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // Interactive AI Chatbot Simulator State
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Hello! I am MS SmartBot AI, an intelligent conversational agent. I help businesses automate customer support, answer queries from company documents via RAG, and connect directly to WhatsApp Cloud API. Try clicking a quick prompt or ask me anything!'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const samplePrompts = [
    'How can an AI Chatbot automate my business inquiries?',
    'Can you integrate AI with WhatsApp & our CRM?',
    'How does RAG keep company documents private & secure?',
    'What is the typical development timeline & cost?'
  ];

  const handleSendQuery = (customText) => {
    const textToSend = typeof customText === 'string' ? customText : chatInput;
    if (!textToSend.trim()) return;

    setChatMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setChatInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = "We engineer custom AI Chatbots & LLM integrations aligned with your exact business processes. We handle prompt engineering, fine-tuning, RAG semantic search, and multi-channel deployment.";
      const lower = textToSend.toLowerCase();

      if (lower.includes('whatsapp') || lower.includes('crm') || lower.includes('erp')) {
        reply = "Yes, absolutely! We connect OpenAI GPT-4o and Anthropic Claude directly to the official Meta WhatsApp Cloud API and your CRM/ERP. Incoming customer leads are automatically qualified, tickets are logged, and sales managers receive instant alerts.";
      } else if (lower.includes('rag') || lower.includes('private') || lower.includes('secure') || lower.includes('document')) {
        reply = "Our RAG (Retrieval-Augmented Generation) pipeline indexes your confidential PDFs, technical catalogs, and policies into a private vector database (Pinecone/pgvector). The AI only answers from verified company data with zero hallucinations, and your data is never used to train public models.";
      } else if (lower.includes('timeline') || lower.includes('cost') || lower.includes('price')) {
        reply = "A functioning custom AI Chatbot prototype is typically delivered in 7-10 business days. Production deployment with WhatsApp Cloud API, custom guardrails, and CRM integrations takes 2-3 weeks. Click 'Build Your App / AI Bot' to get a customized proposal!";
      } else if (lower.includes('business') || lower.includes('automate') || lower.includes('benefit')) {
        reply = "Our AI chatbot solutions typically deflect 80%+ of repetitive customer calls and emails, operate 24/7 with instant sub-second response times, and double lead conversion by engaging site visitors the moment they land.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsBotTyping(false);
    }, 600);
  };

  const techServices = [
    {
      id: 'ai-chatbots',
      icon: Bot,
      title: 'Enterprise AI Integration & Intelligent Chatbots',
      badge: 'OpenAI, Claude & Custom RAG',
      accentColor: '#8b5cf6',
      desc: 'Next-generation Conversational AI agents, RAG (Retrieval-Augmented Generation) trained on your private corporate documents, and automated multi-channel messaging (WhatsApp & Web). We connect LLMs to your private business data, ERPs, and APIs with ironclad security and zero hallucinations.',
      highlights: [
        'Custom Knowledge-Base Chatbots (RAG over PDFs, Docs & ERPs)',
        '24/7 Automated WhatsApp Cloud API & Web Chatbot Assistants',
        'OpenAI GPT-4o, Anthropic Claude & Llama 3 API Integrations',
        'Automated Customer Lead Capture, FAQ Answering & Ticket Deflection',
        'Vector Databases (Pinecone / ChromaDB / pgvector) & Embeddings',
        'AI Workflow Automation & Voice / Conversational IVR Systems'
      ],
      serviceName: 'AI Integration & Chatbot Development'
    },
    {
      id: 'android-apps',
      icon: Smartphone,
      title: 'Android & Mobile App Development',
      badge: 'Native & Cross-Platform',
      accentColor: '#10b981',
      desc: 'High-performance Android applications built with Kotlin, Jetpack Compose, and Flutter. From responsive UI/UX to offline SQLite sync, biometric authentication, and Google Play Store deployment.',
      highlights: [
        'Custom Native Android Apps (Kotlin / Java)',
        'Cross-Platform Mobile Apps (Flutter / React Native)',
        'Offline-First Local Storage & Real-time Cloud Sync',
        'Secure Payment Gateways (UPI, Razorpay, Stripe)',
        'Play Store Optimization & Continuous Release Cycles'
      ],
      serviceName: 'Custom Android App Development'
    },
    {
      id: 'web-platforms',
      icon: Globe,
      title: 'Full-Stack Web & Cloud Platforms',
      badge: 'Next.js, React & Node',
      accentColor: '#06b6d4',
      desc: 'Modern, ultra-fast web applications, business portals, and client dashboards. Built with clean component-driven architecture, high Google PageSpeed scores, and enterprise-grade SEO.',
      highlights: [
        'Single Page Applications (SPA) & SSR with Next.js & React',
        'Robust REST & GraphQL APIs with Node.js & Python FastAPI',
        'Role-Based Admin Dashboards & Multi-Tenant Systems',
        'Automated CI/CD Pipelines & Cloud Hosting on AWS/GCP',
        'Ultra-Low Latency & High Security SSL/OAuth 2.0'
      ],
      serviceName: 'Full-Stack Web Application / SaaS'
    },
    {
      id: 'custom-erp',
      icon: Layers,
      title: 'Custom Software & Enterprise ERP',
      badge: 'Business Automation',
      accentColor: '#3b82f6',
      desc: 'Tailored enterprise software designed to replace complex spreadsheets with automated workflows, real-time analytics, inventory management, and digital audit readiness.',
      highlights: [
        'End-to-End Business ERP & Billing Automation',
        'Inventory, Warehouse & Supply Chain Tracking',
        'Customer Relationship Management (CRM) Portals',
        'Automated PDF Document & Certificate Generation',
        'Role-Permission Access & Audit Logs'
      ],
      serviceName: 'Custom Business ERP / CRM Software'
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingBag,
      title: 'E-Commerce Engines & Digital Stores',
      badge: 'Omnichannel Commerce',
      accentColor: '#f59e0b',
      desc: 'Turnkey e-commerce ecosystems including headless web storefronts, Android buyer apps, merchant seller portals, automated order dispatch, and live shipment tracking.',
      highlights: [
        'Mobile-First E-Commerce Web & Android Apps',
        'Real-Time Inventory & Multi-Variant Catalog Management',
        'Integrated Cart, Coupon Engine & Checkout Optimization',
        'Order Dispatch, Tracking & Invoice Management',
        'Analytics Dashboard with Customer Lifetime Insights'
      ],
      serviceName: 'E-Commerce Platform & Mobile App'
    }
  ];

  const digitalProducts = [
    {
      id: 'enterprise-ai-bot',
      category: 'ai',
      title: 'SmartBot AI — Enterprise Conversational Agent',
      subtitle: 'RAG-Powered Multi-Channel Chatbot & WhatsApp AI Assistant',
      icon: Bot,
      badge: 'Live AI Engine',
      badgeColor: '#8b5cf6',
      description: 'An enterprise conversational AI chatbot trained on internal corporate documents, technical specifications, and product catalogs. Automatically resolves 85%+ of client questions 24/7, captures qualified leads, and integrates with WhatsApp and CRM.',
      features: [
        'RAG semantic search with vector embeddings & instant citations',
        'Dual-channel sync: Floating website widget & WhatsApp Cloud API',
        'Auto-qualifies customer leads & sends instant email/SMS alerts to sales',
        'Custom guardrails to eliminate hallucinations & ensure compliance'
      ],
      techStack: ['OpenAI GPT-4o', 'LangChain', 'FastAPI (Python)', 'Pinecone Vector DB', 'React', 'WhatsApp Cloud API']
    },
    {
      id: 'kala-ecom',
      category: 'ecommerce',
      title: 'Kala E-Commerce Engine',
      subtitle: 'Modern Omnichannel B2C & B2B Retail Platform',
      icon: ShoppingBag,
      badge: 'Live Product Suite',
      badgeColor: '#10b981',
      description: 'A high-converting, lightning-fast digital retail suite featuring a customer-facing responsive web store, native Android mobile app, and unified merchant admin dashboard.',
      features: [
        'Blazing-fast product search with instant live filtering',
        'Seamless UPI & card checkout with abandoned cart recovery',
        'Real-time automated inventory reconciliation & low-stock alerts',
        'Native Android customer shopping app on Google Play'
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Android SDK']
    },
    {
      id: 'ms-valuation-suite',
      category: 'enterprise',
      title: 'MS Asset & Valuation Cloud Suite',
      subtitle: 'Statutory Plant, Machinery & Property Appraisal SaaS',
      icon: FileSpreadsheet,
      badge: 'Proprietary Software',
      badgeColor: '#06b6d4',
      description: 'An internal and client-facing engineering SaaS platform that calculates Depreciated Replacement Cost (DRC), IndAS 16 component useful life, and generates bank-ready appraisal documents.',
      features: [
        'Depreciated Replacement Cost (DRC) calculation engine',
        'Instant bankable PDF valuation report generator with QR validation',
        'DLC circle rate and CPWD cost index database lookup',
        'Multi-stage loan underwriting & review workflow'
      ],
      techStack: ['React', 'Vite', 'Node.js', 'PostgreSQL', 'PDFKit', 'Docker']
    },
    {
      id: 'smart-industrial-erp',
      category: 'industrial',
      title: 'Smart Compliance & Safety ERP',
      subtitle: 'Industrial Auditing & Statutory Schedule Management',
      icon: ClipboardCheck,
      badge: 'Enterprise Tool',
      badgeColor: '#f59e0b',
      description: 'Comprehensive workflow software for manufacturing units and power plants to monitor CEIG solar approvals, electrical safety audits, Factories Act certifications, and energy logs.',
      features: [
        'Automated expiration alerts for factory statutory licenses',
        'Checklist-driven mobile inspection with on-site photo proofs',
        'Centralized repository for government NOCs & certificates',
        'Executive compliance readiness index & risk scoring'
      ],
      techStack: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'AWS S3']
    },
    {
      id: 'mobile-field-inspector',
      category: 'mobile',
      title: 'Field Inspector Mobile App',
      subtitle: 'GPS-Tagged On-Site Technical Audit Android App',
      icon: Smartphone,
      badge: 'Mobile App',
      badgeColor: '#8b5cf6',
      description: 'A dedicated Android mobile app built for field valuation engineers and site supervisors to capture geo-tagged asset images, record equipment serials, and sync data offline.',
      features: [
        'Offline data capture with automatic cloud synchronization',
        'GPS-watermarked camera photo capture for physical verification',
        'Digital client e-signature capture at site inspection',
        'Instant sync with central valuation cloud portal'
      ],
      techStack: ['Android Kotlin', 'Jetpack Compose', 'Room Database', 'Firebase', 'REST API']
    }
  ];

  const techStackIcons = [
    { name: 'OpenAI & Claude APIs', category: 'Generative AI', desc: 'LLM agents & prompt engineering' },
    { name: 'LangChain & LlamaIndex', category: 'AI Orchestration', desc: 'RAG & semantic retrieval' },
    { name: 'Pinecone & pgvector', category: 'Vector DB', desc: 'Embeddings & fast vector search' },
    { name: 'Python FastAPI & Ollama', category: 'AI Backend', desc: 'Secure APIs & local LLM inference' },
    { name: 'Android / Kotlin', category: 'Mobile', desc: 'Native high-speed apps' },
    { name: 'Flutter', category: 'Mobile', desc: 'Cross-platform iOS & Android' },
    { name: 'React.js / Next.js', category: 'Frontend', desc: 'Modern responsive web' },
    { name: 'Node.js / Express', category: 'Backend', desc: 'Scalable microservices' },
    { name: 'PostgreSQL & MongoDB', category: 'Databases', desc: 'Secure reliable storage' },
    { name: 'AWS & Cloudflare', category: 'Infrastructure', desc: 'Global CDN & high availability' },
    { name: 'Docker & CI/CD', category: 'DevOps', desc: 'Automated reliable deployments' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? digitalProducts 
    : digitalProducts.filter(p => p.category === activeCategory);

  return (
    <div className="tech-solutions-page" style={{ background: '#FAF8F5', minHeight: '100vh', paddingBottom: '70px' }}>
      
      {/* ── Breadcrumb & Back Bar ── */}
      <div style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#94a3b8' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#f8fafc', fontWeight: 600 }}>MS Tech Labs &amp; Software Products</span>
          </div>
          <button 
            onClick={() => onOpenQuote('Custom Android App Development')}
            style={{
              background: '#10b981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={14} /> Build Your App / Software
          </button>
        </div>
      </div>

      {/* ── Hero Section (Deep Tech Aesthetic) ── */}
      <section style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), linear-gradient(135deg, #070e1e 0%, #0c1a3d 100%)',
        color: '#ffffff',
        padding: '60px 0 55px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            borderRadius: '9999px',
            padding: '6px 16px',
            color: '#34d399',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '18px'
          }}>
            <Terminal size={15} />
            <span>MS TECH LABS &bull; DIGITAL INNOVATION &amp; SOFTWARE DIVISION</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '18px',
            color: '#f8fafc'
          }}>
            Engineering Next-Gen <span style={{ color: '#10b981' }}>Mobile Apps</span>, <br />
            <span style={{ color: '#38bdf8' }}>Web Platforms</span> &amp; <span style={{ color: '#a855f7' }}>Enterprise AI Chatbots</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.12rem)',
            color: '#cbd5e1',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto 28px auto'
          }}>
            Combining rigorous <strong>IIT Roorkee analytical engineering fundamentals</strong> with modern full-stack web, native Android mobile development, and enterprise SaaS products. We engineer high-performance digital tools from concept to scale.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Custom Android App Development')}
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.35)'
              }}
            >
              <span>Start Your Tech Project</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#products"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '14px 26px',
                fontSize: '0.98rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Explore Our Products</span>
              <Layout size={18} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '44px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>100%</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Native &amp; Custom Code</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8' }}>99.9%</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Cloud Architecture Uptime</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b' }}>Full-Stack</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Android, Web &amp; ERP</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a855f7' }}>IIT Roorkee</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Engineering Governance</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Services Division Grid ── */}
      <section style={{ padding: '50px 0 30px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '8px'
            }}>
              Our Core <span style={{ color: '#10b981' }}>Technology Services</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
              From initial wireframes and mobile UI/UX to cloud deployment and scalable databases, we deliver reliable and production-ready digital solutions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '22px'
          }}>
            {techServices.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E2D8',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        background: `${service.accentColor}15`,
                        border: `1px solid ${service.accentColor}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.accentColor
                      }}>
                        <Icon size={26} />
                      </div>
                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: service.accentColor,
                        background: `${service.accentColor}12`,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: `1px solid ${service.accentColor}25`
                      }}>
                        {service.badge}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.90rem', color: '#475569', lineHeight: 1.55, marginBottom: '18px' }}>
                      {service.desc}
                    </p>

                    <div style={{ borderTop: '1px solid #F1ECE1', paddingTop: '14px', marginBottom: '18px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                        Key Capabilities:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {service.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                            <CheckCircle2 size={16} color={service.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenQuote(service.serviceName)}
                    style={{
                      width: '100%',
                      background: '#FAF8F5',
                      border: `1px solid ${service.accentColor}40`,
                      color: '#0F172A',
                      borderRadius: '10px',
                      padding: '10px 16px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = service.accentColor;
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FAF8F5';
                      e.currentTarget.style.color = '#0F172A';
                    }}
                  >
                    <span>Request Proposal for this Service</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Featured Digital Products Showcase ── */}
      <section id="products" style={{ padding: '40px 0 50px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: '#ECFDF5',
              border: '1px solid #A7F3D0',
              borderRadius: '9999px',
              color: '#047857',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '10px'
            }}>
              <Rocket size={14} />
              <span>PROPRIETARY TECH &amp; CLIENT DELIVERABLES</span>
            </div>
            
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '8px'
            }}>
              Featured <span style={{ color: '#10b981' }}>Software Products</span> &amp; Applications
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Explore our in-house enterprise suites, mobile applications, and retail platforms built for modern performance and scale.
            </p>

            {/* Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '18px' }}>
              {[
                { id: 'all', label: 'All Products' },
                { id: 'ai', label: '🤖 AI & Chatbots' },
                { id: 'ecommerce', label: 'E-Commerce Engines' },
                { id: 'enterprise', label: 'Enterprise SaaS' },
                { id: 'mobile', label: 'Android Mobile Apps' },
                { id: 'industrial', label: 'Industrial Compliance' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid',
                    cursor: 'pointer',
                    background: activeCategory === tab.id ? '#10b981' : '#FFFFFF',
                    color: activeCategory === tab.id ? '#FFFFFF' : '#475569',
                    borderColor: activeCategory === tab.id ? '#10b981' : '#E2E8F0',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E8E2D8',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ padding: '26px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        background: '#F0FDF4',
                        border: '1px solid #BBF7D0',
                        color: '#059669',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={24} />
                      </div>
                      <span style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: product.badgeColor,
                        background: `${product.badgeColor}15`,
                        border: `1px solid ${product.badgeColor}35`,
                        padding: '4px 10px',
                        borderRadius: '9999px'
                      }}>
                        {product.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                      {product.title}
                    </h3>
                    <div style={{ fontSize: '0.84rem', color: '#10b981', fontWeight: 700, marginBottom: '12px' }}>
                      {product.subtitle}
                    </div>

                    <p style={{ fontSize: '0.90rem', color: '#475569', lineHeight: 1.55, marginBottom: '16px' }}>
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div style={{ marginBottom: '18px' }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Core Features:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {product.features.map((f, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#334155' }}>
                            <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {product.techStack.map((tech, i) => (
                        <span key={i} style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '6px',
                          padding: '2px 8px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: '#475569'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    padding: '16px 26px',
                    background: '#FAF8F5',
                    borderTop: '1px solid #E8E2D8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.84rem', color: '#64748B', fontWeight: 600 }}>Custom Deployment Ready</span>
                    <button
                      onClick={() => onOpenQuote(`Product Demo / Customization: ${product.title}`)}
                      style={{
                        background: '#10b981',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '8px 16px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Inquire / Demo</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Interactive Live AI Chatbot Simulator Section ── */}
      <section id="ai-demo" style={{
        background: 'linear-gradient(180deg, #FAF8F5 0%, #F3F0E6 50%, #FAF8F5 100%)',
        padding: '55px 0 65px 0',
        borderTop: '1px solid #E8E2D8',
        borderBottom: '1px solid #E8E2D8'
      }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 34px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              background: '#F3E8FF',
              border: '1px solid #D8B4FE',
              borderRadius: '9999px',
              color: '#7E22CE',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}>
              <BrainCircuit size={14} />
              <span>LIVE INTERACTIVE AI DEMO</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '8px'
            }}>
              Test Our <span style={{ color: '#8B5CF6' }}>AI Chatbot &amp; Conversational Agent</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
              Interact with our live simulation below. We build custom RAG-powered chatbots trained exclusively on your private company documents, FAQs, and product catalogs with zero hallucinations.
            </p>
          </div>

          {/* Interactive Chat Console Window */}
          <div style={{
            maxWidth: '820px',
            margin: '0 auto',
            background: '#0F172A',
            border: '1.5px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 45px -10px rgba(139, 92, 246, 0.25)'
          }}>
            {/* Console Header Bar */}
            <div style={{
              background: 'linear-gradient(90deg, #1E1B4B 0%, #0F172A 100%)',
              padding: '14px 20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  <Bot size={22} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#F8FAFC' }}>MS SmartBot AI</span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Powered by OpenAI GPT-4o &amp; Claude RAG Engine</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.70rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34D399',
                  fontWeight: 700
                }}>
                  WhatsApp API Ready
                </span>
                <span style={{
                  fontSize: '0.70rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  color: '#C084FC',
                  fontWeight: 700
                }}>
                  Zero Hallucination
                </span>
              </div>
            </div>

            {/* Chat Thread Messages Box */}
            <div style={{
              height: '320px',
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: '#0B1120'
            }}>
              {chatMessages.map((msg, idx) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      alignSelf: isBot ? 'flex-start' : 'flex-end',
                      maxWidth: '85%'
                    }}
                  >
                    {isBot && (
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: '#8B5CF6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}>
                        <Bot size={16} />
                      </div>
                    )}
                    <div style={{
                      background: isBot ? '#1E293B' : 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                      color: '#F8FAFC',
                      padding: '12px 16px',
                      borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      border: isBot ? '1px solid rgba(255,255,255,0.08)' : 'none'
                    }}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {isBotTyping && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: '#8B5CF6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    flexShrink: 0
                  }}>
                    <Bot size={16} />
                  </div>
                  <div style={{
                    background: '#1E293B',
                    color: '#94A3B8',
                    padding: '8px 14px',
                    borderRadius: '4px 14px 14px 14px',
                    fontSize: '0.82rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span>Thinking</span>
                    <span style={{ animation: 'pulse 1s infinite' }}>...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestion Prompts */}
            <div style={{
              background: '#0F172A',
              padding: '12px 18px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginRight: '4px' }}>
                Try Asking:
              </span>
              {samplePrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(q)}
                  style={{
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    color: '#C084FC',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
                    e.currentTarget.style.borderColor = '#8B5CF6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  }}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuery();
              }}
              style={{
                background: '#0B1120',
                padding: '12px 18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type any question about our AI chatbots or enterprise integration..."
                style={{
                  flex: 1,
                  background: '#1E293B',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Send</span>
                <Send size={15} />
              </button>
            </form>

            {/* Bottom Callout in Console */}
            <div style={{
              background: '#0B0F19',
              padding: '12px 20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <span style={{ fontSize: '0.80rem', color: '#94A3B8' }}>
                Need a custom AI Chatbot connected to your company database &amp; WhatsApp?
              </span>
              <button
                onClick={() => onOpenQuote('AI Integration & Chatbot Development')}
                style={{
                  background: '#8B5CF6',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '0.80rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={13} />
                <span>Build Your Custom AI Bot</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Modern Tech Stack Badges ── */}
      <section style={{
        background: '#0F172A',
        color: '#ffffff',
        padding: '48px 0',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '6px'
            }}>
              Engineered with <span style={{ color: '#38bdf8' }}>Modern Production Stacks</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
              We write clean, modular, and maintainable code adhering to industry standards and modern architectures.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px'
          }}>
            {techStackIcons.map((stack, i) => (
              <div 
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Code2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#f8fafc' }}>{stack.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{stack.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Build CTA Card ── */}
      <section style={{ padding: '50px 0 20px 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #070e1e 0%, #0f2444 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '24px',
            padding: ' clamp(30px, 4vw, 44px)',
            color: '#ffffff',
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(15, 23, 42, 0.12)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '12px'
            }}>
              Have an Idea for an <span style={{ color: '#10b981' }}>Android App</span>, <br />
              <span style={{ color: '#38bdf8' }}>Web Platform</span>, or <span style={{ color: '#f59e0b' }}>Custom ERP</span>?
            </h2>
            <p style={{
              fontSize: '0.98rem',
              color: '#cbd5e1',
              maxWidth: '650px',
              margin: '0 auto 26px auto',
              lineHeight: 1.6
            }}>
              Talk directly with our technical engineering team. We provide free initial architecture scoping, wireframe consultation, and competitive fixed-price development estimates.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onOpenQuote('Custom Android App Development')}
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                }}
              >
                <span>Request Technical Consultation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20Group,%20I%20am%20interested%20in%20Software/App%20Development."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
