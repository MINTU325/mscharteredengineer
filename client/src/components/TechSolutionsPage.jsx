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
  MessageSquareCode,
  Calculator,
  Copy,
  Check,
  Play,
  Volume2,
  Lock,
  FileText,
  Sliders,
  TrendingUp,
  BarChart3,
  Workflow,
  RefreshCw,
  Wand2
} from 'lucide-react';

export default function TechSolutionsPage({ onOpenQuote, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');

  // ─── 1. Interactive Pipeline Visualizer State ───
  const [selectedPipelineStep, setSelectedPipelineStep] = useState(2); // default: RAG Retrieval

  const pipelineSteps = [
    {
      id: 0,
      title: '01. Ingestion',
      badge: 'Multi-Channel',
      subtitle: 'Omni-channel Input',
      desc: 'Accepts live customer inputs from Web Chat Widgets, WhatsApp Cloud API, Telegram, Android Apps, or raw PDF/Excel document uploads.',
      metrics: 'Latency: < 15ms • Protocol: Webhooks / SSE',
      security: 'TLS 1.3 encryption & rate-limiting protection'
    },
    {
      id: 1,
      title: '02. Guardrails',
      badge: 'PII & Security',
      subtitle: 'Intent & Masking',
      desc: 'Sanitizes input, strips sensitive PII (PAN, Aadhaar, card numbers), classifies intent, and rejects prompt injection or jailbreak attempts.',
      metrics: 'Latency: ~25ms • Guardrail Pass Rate: 99.9%',
      security: 'Strict regex filters & prompt firewall'
    },
    {
      id: 2,
      title: '03. RAG Search',
      badge: 'Vector DB',
      subtitle: 'Semantic Retrieval',
      desc: 'Generates high-dimensional vector embeddings and queries a private Pinecone/pgvector database for exact company document citations.',
      metrics: 'Latency: ~45ms • Cosine Similarity: > 0.88',
      security: 'Isolated client namespace, zero public model training'
    },
    {
      id: 3,
      title: '04. LLM Reasoning',
      badge: 'Cognitive Brain',
      subtitle: 'Generative Synthesis',
      desc: 'Feeds context-injected prompts into OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, or local Llama 3 for accurate, human-like answers.',
      metrics: 'Latency: ~180ms • Hallucination Rate: 0.0%',
      security: 'Constrained system prompt with mandatory source citing'
    },
    {
      id: 4,
      title: '05. Execution',
      badge: 'Automation',
      subtitle: 'Action & Dispatch',
      desc: 'Dispatches instant reply to WhatsApp/Web, triggers ERP webhooks, updates CRM leads, or generates downloadable verified PDF reports.',
      metrics: 'Latency: < 40ms • Webhook Delivery: 99.99%',
      security: 'Signed HMAC payloads & automated audit trail'
    }
  ];

  // ─── 2. Multi-Persona Live AI Agent Studio State ───
  const [studioPersona, setStudioPersona] = useState('sales'); // 'sales', 'rag', 'whatsapp'
  const [copiedCode, setCopiedCode] = useState(false);

  // Chat conversation threads for each persona
  const [chatThreads, setChatThreads] = useState({
    sales: [
      { sender: 'bot', text: 'Hello! I am MS SalesAI Agent. Looking to automate your business inquiries, build a custom mobile app, or deploy an enterprise AI chatbot? What is your primary objective?' }
    ],
    rag: [
      { sender: 'bot', text: 'Document RAG Inspector initialized. I have indexed your corporate policies, technical specifications, and balance sheets into our private vector database. Ask me any precise query!' }
    ],
    whatsapp: [
      { sender: 'bot', text: '👋 Namaste! Welcome to MS Group WhatsApp Concierge. How can our technical & AI engineering desk assist you today?' }
    ]
  });

  const [studioInput, setStudioInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const personaPrompts = {
    sales: [
      'What is the estimated cost & timeline to build an AI chatbot?',
      'Can you integrate this with our custom ERP and sales team?',
      'How does your AI automate customer lead capture?'
    ],
    rag: [
      'What is the statutory depreciation rate for industrial solar plants under IndAS 16?',
      'Show citation for Section 50C capital gains tax valuation guidelines.',
      'How do you prevent the AI from hallucinating on financial reports?'
    ],
    whatsapp: [
      'I want to connect our business catalog to WhatsApp automated ordering.',
      'Can this send automated WhatsApp payment receipts and invoice PDFs?',
      'How many simultaneous chats can the WhatsApp bot handle?'
    ]
  };

  const handleSendStudioMessage = (customText) => {
    const textToSend = typeof customText === 'string' ? customText : studioInput;
    if (!textToSend.trim()) return;

    setChatThreads(prev => ({
      ...prev,
      [studioPersona]: [...prev[studioPersona], { sender: 'user', text: textToSend }]
    }));
    setStudioInput('');
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = "Our engineering team designs custom AI architectures specifically mapped to your workflow. We handle everything from vector database embeddings to production deployment.";
      const lower = textToSend.toLowerCase();

      if (studioPersona === 'sales') {
        if (lower.includes('cost') || lower.includes('timeline') || lower.includes('time')) {
          reply = "Turnkey AI Chatbot prototypes are ready in 7-10 days. Full enterprise production deployment with WhatsApp Cloud API, CRM webhooks, and custom vector search takes 2-3 weeks with fixed milestone pricing.";
        } else if (lower.includes('erp') || lower.includes('integrate') || lower.includes('sales')) {
          reply = "Yes! We connect webhooks to Salesforce, SAP, Zoho, HubSpot, or custom SQL databases. When a high-intent lead chats, the bot qualifies their budget and automatically pushes a lead record into your CRM.";
        } else if (lower.includes('lead') || lower.includes('automate')) {
          reply = "The bot actively asks qualifying questions (project type, company size, timeline), captures verified WhatsApp & email contacts, and deflects 80%+ of repetitive tier-1 support queries.";
        }
      } else if (studioPersona === 'rag') {
        if (lower.includes('solar') || lower.includes('depreciation') || lower.includes('indas')) {
          reply = "[Citation: Technical Audit Manual Doc #42, Page 18] Under IndAS 16 component accounting, industrial solar PV modules follow a 25-year economic life cycle with Straight Line Method (SLM) salvage value fixed at 5%.";
        } else if (lower.includes('50c') || lower.includes('tax') || lower.includes('capital gains')) {
          reply = "[Citation: CBDT Circular & ITAT Appraisal Rules, Section 50C] Fair Market Value is determined by comparing DLC circle rates with registered Stamp Duty authority values as of 1st April 2001.";
        } else {
          reply = "[Verified Source: Enterprise Knowledge Base] RAG performs cosine similarity searches over your private embeddings. If information is not in the source documents, the AI strictly states 'Information not found in verified documents' rather than hallucinating.";
        }
      } else if (studioPersona === 'whatsapp') {
        if (lower.includes('catalog') || lower.includes('order')) {
          reply = "✅ Our WhatsApp Cloud API engine renders native product catalogs, interactive multi-select buttons, and automated UPI payment links directly inside the WhatsApp conversation window.";
        } else if (lower.includes('invoice') || lower.includes('receipt') || lower.includes('pdf')) {
          reply = "📄 Yes! Our Node.js/Python backend dynamically compiles PDF bills with QR codes and dispatches them via WhatsApp media messages in under 2 seconds.";
        } else {
          reply = "⚡ Meta WhatsApp Cloud API handles over 10,000+ concurrent conversations with sub-second latency and zero queuing delay.";
        }
      }

      setChatThreads(prev => ({
        ...prev,
        [studioPersona]: [...prev[studioPersona], { sender: 'bot', text: reply }]
      }));
      setIsBotTyping(false);
    }, 650);
  };

  // ─── 3. Interactive AI ROI Calculator State ───
  const [monthlyTickets, setMonthlyTickets] = useState(2500);
  const [supportAgents, setSupportAgents] = useState(4);
  const [agentSalary, setAgentSalary] = useState(25000); // INR per month

  const deflectedTickets = Math.round(monthlyTickets * 0.80);
  const hoursSavedPerMonth = Math.round((deflectedTickets * 12) / 60); // 12 mins per ticket
  const totalMonthlyPayroll = supportAgents * agentSalary;
  const estimatedAnnualSavingsLakhs = ((totalMonthlyPayroll * 0.70 * 12) / 100000).toFixed(1);

  // ─── 4. Developer Terminal Code State ───
  const [selectedApiLang, setSelectedApiLang] = useState('python');

  const codeSnippets = {
    python: `# Install: pip install langchain openai pinecone-client fastapi
from fastapi import FastAPI
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Pinecone

app = FastAPI(title="MS Enterprise AI Agent API")
llm = ChatOpenAI(model="gpt-4o", temperature=0.1)

@app.post("/api/v1/chat-rag")
async def enterprise_query(user_query: str, client_id: str):
    # Isolated private vector search with RAG
    vectorstore = Pinecone.from_existing_index("ms-client-knowledge", OpenAIEmbeddings())
    context_docs = vectorstore.similarity_search(user_query, k=4, filter={"tenant": client_id})
    
    # Synthesize verified response with zero hallucinations
    response = llm.invoke(f"Context: {context_docs}\\n\\nQuestion: {user_query}")
    return {"reply": response.content, "verified_citations": len(context_docs)}`,

    node: `// Modern TypeScript / Node.js Express Pipeline
import express from 'express';
import { OpenAI } from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const pinecone = new Pinecone();

app.post('/api/v1/chat-rag', async (req, res) => {
  const { query, tenantId } = req.body;
  
  // 1. Semantic Vector Match
  const index = pinecone.Index('ms-client-knowledge');
  const queryEmbedding = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: query
  });
  
  // 2. Query isolated private namespace
  const matches = await index.namespace(tenantId).query({
    vector: queryEmbedding.data[0].embedding,
    topK: 4,
    includeMetadata: true
  });
  
  res.json({ status: 'success', matches: matches.matches.length });
});`,

    curl: `# Direct Enterprise cURL Webhook Invocation
curl -X POST "https://api.msgroup.tech/v1/agent/query" \\
  -H "Authorization: Bearer ms_live_sec_9941a0b82f" \\
  -H "Content-Type: application/json" \\
  -d '{
    "channel": "whatsapp_cloud_api",
    "customer_phone": "+919876543210",
    "query": "What is the timeline for asset valuation?",
    "guardrails": { "strict_rag": true, "max_tokens": 300 }
  }'`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[selectedApiLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // ─── 5. Core Services Array ───
  const techServices = [
    {
      id: 'ai-chatbots',
      icon: Bot,
      title: 'Enterprise AI Agents & WhatsApp Chatbots',
      badge: 'OpenAI, Claude & Custom RAG',
      accentColor: '#8B5CF6',
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
      accentColor: '#10B981',
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
      accentColor: '#06B6D4',
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
      accentColor: '#3B82F6',
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
      accentColor: '#F59E0B',
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

  // ─── 6. Digital Products Array ───
  const digitalProducts = [
    {
      id: 'enterprise-ai-bot',
      category: 'ai',
      title: 'SmartBot AI — Enterprise Conversational Agent',
      subtitle: 'RAG-Powered Multi-Channel Chatbot & WhatsApp AI Assistant',
      icon: Bot,
      badge: 'Live AI Engine',
      badgeColor: '#8B5CF6',
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
      badgeColor: '#10B981',
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
      badgeColor: '#06B6D4',
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
      badgeColor: '#F59E0B',
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
      badgeColor: '#8B5CF6',
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
    { name: 'OpenAI GPT-4o & Claude 3.5', category: 'Generative AI', desc: 'Reasoning agents & prompt engineering' },
    { name: 'LangChain & LlamaIndex', category: 'AI Orchestration', desc: 'RAG pipelines & memory management' },
    { name: 'Pinecone & pgvector', category: 'Vector DB', desc: 'Embeddings & sub-50ms vector search' },
    { name: 'Python FastAPI & Ollama', category: 'AI Backend', desc: 'Secure APIs & local private LLM inference' },
    { name: 'Android / Kotlin', category: 'Mobile', desc: 'Native high-speed mobile apps' },
    { name: 'Flutter', category: 'Mobile', desc: 'Cross-platform iOS & Android applications' },
    { name: 'React.js & Next.js', category: 'Frontend', desc: 'Ultra-fast server-rendered web portals' },
    { name: 'Node.js & Express', category: 'Backend', desc: 'High-throughput microservices architecture' },
    { name: 'PostgreSQL & MongoDB', category: 'Databases', desc: 'ACID compliant & flexible cloud storage' },
    { name: 'AWS & Cloudflare', category: 'Infrastructure', desc: 'Global edge CDN & 99.99% availability' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? digitalProducts 
    : digitalProducts.filter(p => p.category === activeCategory);

  return (
    <div className="tech-solutions-page" style={{ background: '#070D1B', color: '#F8FAFC', minHeight: '100vh', paddingBottom: '70px', overflowX: 'hidden' }}>
      
      {/* ── SEO JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.mscharteredengineer.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "MS Tech Labs Software & AI",
                    "item": "https://www.mscharteredengineer.com/tech-products"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "MS Tech Labs — AI Solutions & Mobile Software Engineering",
                "url": "https://www.mscharteredengineer.com/tech-products",
                "provider": {
                  "@type": "Organization",
                  "name": "MS Tech Labs (MS Group)",
                  "telephone": "+919158658885",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Jaipur",
                    "addressRegion": "Rajasthan",
                    "postalCode": "302019",
                    "addressCountry": "IN"
                  }
                },
                "description": "Enterprise AI integration, custom conversational chatbots, Android/iOS mobile application development, full-stack cloud SaaS platforms, and custom business ERP software.",
                "areaServed": "India"
              }
            ]
          })
        }}
      />

      {/* ── Breadcrumb & Top Bar ── */}
      <div style={{ background: 'rgba(11, 20, 38, 0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 0', position: 'sticky', top: 0, zIndex: 900 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#94A3B8' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#38BDF8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#F8FAFC', fontWeight: 600 }}>MS Tech Labs &bull; AI &amp; Software Products</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.74rem', color: '#34D399', fontWeight: 700 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 6px #10B981' }} />
              <span>AI Pipeline: ACTIVE</span>
            </div>

            <button 
              onClick={() => onOpenQuote('AI Integration & Chatbot Development')}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(139, 92, 246, 0.35)'
              }}
            >
              <Sparkles size={14} /> Build Your AI / App
            </button>
          </div>
        </div>
      </div>

      {/* ── Hero Section (Ultra-Modern AI Cybernetic Aesthetic) ── */}
      <section style={{
        background: 'radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.22) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.18) 0%, transparent 50%), linear-gradient(135deg, #050B14 0%, #0A1324 50%, #0F1D38 100%)',
        color: '#FFFFFF',
        padding: '65px 0 60px 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(139, 92, 246, 0.15)',
            border: '1px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '9999px',
            padding: '6px 18px',
            color: '#C084FC',
            fontSize: '0.82rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            marginBottom: '20px',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)'
          }}>
            <BrainCircuit size={15} />
            <span>MS TECH LABS &bull; AUTONOMOUS AI &amp; NEXT-GEN SOFTWARE</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 4.8vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 1.18,
            marginBottom: '20px',
            color: '#F8FAFC',
            letterSpacing: '-0.02em'
          }}>
            Engineering <span style={{ background: 'linear-gradient(135deg, #C084FC 0%, #8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Autonomous AI Agents</span>, <br />
            <span style={{ color: '#38BDF8' }}>Intelligent Chatbots</span> &amp; <span style={{ color: '#10B981' }}>Scalable Software</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: '#94A3B8',
            lineHeight: 1.65,
            maxWidth: '780px',
            margin: '0 auto 30px auto'
          }}>
            We fuse <strong>IIT Roorkee analytical engineering fundamentals</strong> with state-of-the-art Generative AI, RAG over enterprise data, native Android apps, and high-throughput cloud microservices.
          </p>

          {/* Quick Hero CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('AI Integration & Chatbot Development')}
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.45)'
              }}
            >
              <span>Deploy Custom AI Agent</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#ai-studio"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '14px 26px',
                fontSize: '0.98rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Test Live AI Studio</span>
              <Bot size={18} color="#8B5CF6" />
            </a>

            <a
              href="#roi-calculator"
              style={{
                background: 'rgba(16, 185, 129, 0.10)',
                color: '#34D399',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '12px',
                padding: '14px 22px',
                fontSize: '0.98rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Calculate AI ROI</span>
              <Calculator size={18} />
            </a>
          </div>

          {/* Live System Telemetry Stat Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '45px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#C084FC' }}>99.8%</div>
              <div style={{ fontSize: '0.80rem', color: '#94A3B8', fontWeight: 600 }}>Zero-Hallucination Guardrails</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#38BDF8' }}>&lt; 250ms</div>
              <div style={{ fontSize: '0.80rem', color: '#94A3B8', fontWeight: 600 }}>Sub-Second RAG Latency</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10B981' }}>80%+</div>
              <div style={{ fontSize: '0.80rem', color: '#94A3B8', fontWeight: 600 }}>Support Ticket Deflection</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F59E0B' }}>100% Isolated</div>
              <div style={{ fontSize: '0.80rem', color: '#94A3B8', fontWeight: 600 }}>Private Enterprise Data Security</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 1: Interactive AI Architecture Pipeline Visualizer ── */}
      <section style={{ padding: '60px 0 50px 0', background: '#091122', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '9999px',
              color: '#38BDF8',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}>
              <Workflow size={14} />
              <span>PRODUCTION ARCHITECTURE</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              How Our <span style={{ color: '#38BDF8' }}>Enterprise AI Pipeline</span> Works
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Click on any stage below to inspect how user messages are tokenized, sanitized, enriched with private RAG vector context, and converted into automated actions.
            </p>
          </div>

          {/* Interactive Pipeline Bar (Clickable Nodes) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '12px',
            marginBottom: '24px'
          }}>
            {pipelineSteps.map((step) => {
              const isActive = selectedPipelineStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedPipelineStep(step.id)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #1E1B4B 0%, #0F172A 100%)' : 'rgba(255, 255, 255, 0.03)',
                    border: isActive ? '2px solid #8B5CF6' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '14px',
                    padding: '16px 14px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isActive ? '0 8px 24px rgba(139, 92, 246, 0.3)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 800, color: isActive ? '#C084FC' : '#94A3B8' }}>{step.title}</span>
                    <span style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: isActive ? '#8B5CF6' : 'rgba(255,255,255,0.06)',
                      color: '#FFFFFF'
                    }}>
                      {step.badge}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>{step.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Inspector Card */}
          <div style={{
            background: 'linear-gradient(135deg, #0B132B 0%, #0F1A3A 100%)',
            border: '1.5px solid rgba(139, 92, 246, 0.35)',
            borderRadius: '16px',
            padding: '26px 28px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.80rem', fontWeight: 800, color: '#8B5CF6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Stage Deep Dive:
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F8FAFC' }}>
                  {pipelineSteps[selectedPipelineStep].title} — {pipelineSteps[selectedPipelineStep].subtitle}
                </span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '14px' }}>
                {pipelineSteps[selectedPipelineStep].desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#38BDF8' }}>
                  <Zap size={14} />
                  <span>{pipelineSteps[selectedPipelineStep].metrics}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#34D399' }}>
                  <ShieldCheck size={14} />
                  <span>{pipelineSteps[selectedPipelineStep].security}</span>
                </div>
              </div>
            </div>

            <div style={{
              background: '#060B14',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '16px',
              fontFamily: 'monospace',
              fontSize: '0.78rem',
              color: '#38BDF8',
              lineHeight: 1.6
            }}>
              <div style={{ color: '#64748B', marginBottom: '6px' }}>// Execution Log Trace</div>
              <div>&gt; [INIT] {pipelineSteps[selectedPipelineStep].subtitle} handshake verified.</div>
              <div>&gt; [METRIC] {pipelineSteps[selectedPipelineStep].metrics}</div>
              <div style={{ color: '#34D399' }}>&gt; [STATUS] Zero-Data Leakage Protocol: ENFORCED</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Multi-Persona Live AI Agent Studio (3-in-1 Interactive Simulator) ── */}
      <section id="ai-studio" style={{ padding: '60px 0 70px 0', background: '#070D1B' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '9999px',
              color: '#C084FC',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}>
              <Wand2 size={14} />
              <span>LIVE INTERACTIVE AGENT STUDIO</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              Experience Our <span style={{ color: '#8B5CF6' }}>Autonomous AI Agents</span> in Real-Time
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Switch between our 3 live agent personas: test automated sales qualification, inspect corporate document RAG citation, or simulate live WhatsApp Cloud API messaging.
            </p>

            {/* Persona Switcher Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
              {[
                { id: 'sales', label: '💼 Enterprise Sales Bot', desc: 'Auto-qualifies leads & quotes' },
                { id: 'rag', label: '📑 Corporate Document RAG', desc: 'Cites manuals with zero-hallucination' },
                { id: 'whatsapp', label: '📱 WhatsApp Business Bot', desc: 'Meta Cloud API simulator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStudioPersona(tab.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    border: '1px solid',
                    cursor: 'pointer',
                    background: studioPersona === tab.id ? '#8B5CF6' : 'rgba(255, 255, 255, 0.04)',
                    color: studioPersona === tab.id ? '#FFFFFF' : '#94A3B8',
                    borderColor: studioPersona === tab.id ? '#8B5CF6' : 'rgba(255, 255, 255, 0.12)',
                    transition: 'all 0.2s ease',
                    boxShadow: studioPersona === tab.id ? '0 4px 14px rgba(139, 92, 246, 0.35)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chat Console Window */}
          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: '#0B1120',
            border: '1.5px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px -10px rgba(139, 92, 246, 0.25)'
          }}>
            {/* Console Header Bar */}
            <div style={{
              background: studioPersona === 'whatsapp' ? 'linear-gradient(90deg, #064E3B 0%, #0F172A 100%)' : 'linear-gradient(90deg, #1E1B4B 0%, #0F172A 100%)',
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
                  background: studioPersona === 'whatsapp' ? '#10B981' : 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}>
                  {studioPersona === 'whatsapp' ? <MessageSquare size={20} /> : <Bot size={22} />}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.94rem', fontWeight: 800, color: '#F8FAFC' }}>
                      {studioPersona === 'sales' && 'MS Sales & Lead Qualifier Agent'}
                      {studioPersona === 'rag' && 'Corporate Document RAG Inspector'}
                      {studioPersona === 'whatsapp' && 'MS Group WhatsApp Cloud Verified Desk'}
                    </span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981' }} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                    {studioPersona === 'sales' && 'GPT-4o Reasoning Core & CRM Webhook Sync'}
                    {studioPersona === 'rag' && 'Vector Cosine Similarity & Mandatory Source Citations'}
                    {studioPersona === 'whatsapp' && 'Meta Cloud API v20.0 • E2E Encryption'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontSize: '0.70rem',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34D399',
                  fontWeight: 700
                }}>
                  Latency: 180ms
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
                  Active Persona
                </span>
              </div>
            </div>

            {/* Chat Thread Messages Box */}
            <div style={{
              height: '340px',
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: studioPersona === 'whatsapp' ? '#071510' : '#070D1A'
            }}>
              {chatThreads[studioPersona].map((msg, idx) => {
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
                        background: studioPersona === 'whatsapp' ? '#059669' : '#8B5CF6',
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
                      background: isBot 
                        ? (studioPersona === 'whatsapp' ? '#0D281E' : '#1E293B') 
                        : (studioPersona === 'whatsapp' ? '#059669' : 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'),
                      color: '#F8FAFC',
                      padding: '12px 16px',
                      borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
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
                    background: studioPersona === 'whatsapp' ? '#059669' : '#8B5CF6',
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
                    <span>Agent is generating verified response</span>
                    <span style={{ animation: 'pulse 1s infinite' }}>...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestion Prompts */}
            <div style={{
              background: '#0B1120',
              padding: '12px 18px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              alignItems: 'center'
            }}>
              <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginRight: '4px' }}>
                Quick Prompts:
              </span>
              {personaPrompts[studioPersona].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendStudioMessage(q)}
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
                handleSendStudioMessage();
              }}
              style={{
                background: '#070D1A',
                padding: '12px 18px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <input
                type="text"
                value={studioInput}
                onChange={(e) => setStudioInput(e.target.value)}
                placeholder={`Ask ${studioPersona === 'sales' ? 'about AI integration & budget...' : studioPersona === 'rag' ? 'from internal documents & specs...' : 'a question as a WhatsApp customer...'}`}
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
                  background: studioPersona === 'whatsapp' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
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
              background: '#050912',
              padding: '12px 20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <span style={{ fontSize: '0.80rem', color: '#94A3B8' }}>
                Want an autonomous AI agent integrated with your company WhatsApp &amp; ERP?
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
                <span>Build This Agent for Your Business</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 3: Interactive AI ROI & Operational Cost-Savings Calculator ── */}
      <section id="roi-calculator" style={{ padding: '60px 0 65px 0', background: '#091122', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '9999px',
              color: '#34D399',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}>
              <TrendingUp size={14} />
              <span>FINANCIAL ROI ENGINE</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              Calculate Your <span style={{ color: '#10B981' }}>Annual Cost Savings</span> with AI Automation
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Adjust the sliders to simulate how much time and operational payroll your company can reclaim by deflecting repetitive support inquiries to an autonomous AI agent.
            </p>
          </div>

          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #0B132B 0%, #0F1D38 100%)',
            border: '1.5px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '20px',
            padding: ' clamp(24px, 4vw, 36px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* Left Sliders Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>Monthly Customer Inquiries / Calls:</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#38BDF8' }}>{monthlyTickets.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={monthlyTickets}
                  onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38BDF8', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>Dedicated Support / Operations Reps:</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#10B981' }}>{supportAgents} Reps</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={supportAgents}
                  onChange={(e) => setSupportAgents(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#F8FAFC' }}>Average Monthly Cost per Rep:</span>
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#F59E0B' }}>₹{agentSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="60000"
                  step="2500"
                  value={agentSalary}
                  onChange={(e) => setAgentSalary(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#F59E0B', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Right Calculated Results Box */}
            <div style={{
              background: 'rgba(5, 11, 20, 0.75)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  Projected Annual Cost Savings:
                </div>
                <div style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: 900, color: '#34D399', lineHeight: 1.1, marginTop: '4px' }}>
                  ₹{estimatedAnnualSavingsLakhs} Lakhs <span style={{ fontSize: '0.90rem', color: '#94A3B8', fontWeight: 600 }}>/ Year</span>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>AI Auto-Deflection</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38BDF8' }}>{deflectedTickets.toLocaleString()} / mo</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>Staff Hours Saved</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#C084FC' }}>{hoursSavedPerMonth.toLocaleString()} hrs / mo</div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote('AI Integration & Chatbot Development')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 18px',
                  fontSize: '0.90rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 16px rgba(16, 185, 129, 0.4)'
                }}
              >
                <span>Automate With Custom AI Agent</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: Core Technology Services Grid ── */}
      <section style={{ padding: '60px 0 40px 0', background: '#070D1B' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 36px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              Our Core <span style={{ color: '#10B981' }}>Technology Services</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.6 }}>
              From initial wireframes and mobile UI/UX to cloud deployment, scalable databases, and enterprise AI integrations.
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
                    background: 'rgba(15, 26, 54, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
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
                        background: `${service.accentColor}18`,
                        border: `1px solid ${service.accentColor}40`,
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
                        background: `${service.accentColor}15`,
                        padding: '4px 10px',
                        borderRadius: '9999px',
                        border: `1px solid ${service.accentColor}30`
                      }}>
                        {service.badge}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#F8FAFC',
                      marginBottom: '10px',
                      lineHeight: 1.3
                    }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.90rem', color: '#94A3B8', lineHeight: 1.55, marginBottom: '18px' }}>
                      {service.desc}
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '14px', marginBottom: '18px' }}>
                      <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                        Key Capabilities:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {service.highlights.map((h, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#CBD5E1' }}>
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
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${service.accentColor}50`,
                      color: '#F8FAFC',
                      borderRadius: '10px',
                      padding: '11px 16px',
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
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.color = '#F8FAFC';
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

      {/* ── Section 5: Developer & Enterprise API Terminal Playground ── */}
      <section style={{ padding: '50px 0 60px 0', background: '#091122', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 30px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.35)',
              borderRadius: '9999px',
              color: '#C084FC',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}>
              <Terminal size={14} />
              <span>DEVELOPER-FIRST API INTEGRATION</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              Integrate in <span style={{ color: '#8B5CF6' }}>Under 3 Minutes</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem' }}>
              Connect our private RAG AI endpoints to your mobile app, web dashboard, or backend with standard HTTP webhooks and SDKs.
            </p>
          </div>

          <div style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: '#040810',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Terminal Header */}
            <div style={{
              background: '#0B1220',
              padding: '12px 18px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                <span style={{ fontSize: '0.80rem', color: '#94A3B8', fontFamily: 'monospace', marginLeft: '6px' }}>ms-agent-sdk</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {['python', 'node', 'curl'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedApiLang(lang)}
                    style={{
                      background: selectedApiLang === lang ? '#8B5CF6' : 'rgba(255, 255, 255, 0.06)',
                      color: selectedApiLang === lang ? '#FFFFFF' : '#94A3B8',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textTransform: 'uppercase'
                    }}
                  >
                    {lang === 'node' ? 'Node.js' : lang}
                  </button>
                ))}

                <button
                  onClick={handleCopyCode}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#F8FAFC',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.74rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {copiedCode ? <Check size={12} color="#10B981" /> : <Copy size={12} />}
                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Code Display */}
            <pre style={{
              padding: '20px',
              margin: 0,
              fontSize: '0.84rem',
              fontFamily: 'Consolas, Monaco, "JetBrains Mono", monospace',
              color: '#38BDF8',
              lineHeight: 1.6,
              overflowX: 'auto',
              maxHeight: '380px'
            }}>
              <code>{codeSnippets[selectedApiLang]}</code>
            </pre>
          </div>

        </div>
      </section>

      {/* ── Section 6: Featured Software Products Showcase ── */}
      <section id="products" style={{ padding: '60px 0 65px 0', background: '#070D1B' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: '9999px',
              color: '#34D399',
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
              color: '#F8FAFC',
              marginBottom: '8px'
            }}>
              Featured <span style={{ color: '#10B981' }}>Software Products</span> &amp; Applications
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.96rem', lineHeight: 1.6 }}>
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
                    background: activeCategory === tab.id ? '#10B981' : 'rgba(255, 255, 255, 0.04)',
                    color: activeCategory === tab.id ? '#FFFFFF' : '#94A3B8',
                    borderColor: activeCategory === tab.id ? '#10B981' : 'rgba(255, 255, 255, 0.12)',
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
                    background: 'rgba(15, 26, 54, 0.70)',
                    border: '1px solid rgba(255, 255, 255, 0.09)',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
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
                        background: `${product.badgeColor}18`,
                        border: `1px solid ${product.badgeColor}35`,
                        color: product.badgeColor,
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

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '4px' }}>
                      {product.title}
                    </h3>
                    <div style={{ fontSize: '0.84rem', color: '#38BDF8', fontWeight: 700, marginBottom: '12px' }}>
                      {product.subtitle}
                    </div>

                    <p style={{ fontSize: '0.90rem', color: '#94A3B8', lineHeight: 1.55, marginBottom: '16px' }}>
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div style={{ marginBottom: '18px' }}>
                      <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                        Core Features:
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {product.features.map((f, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#CBD5E1' }}>
                            <CheckCircle2 size={15} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {product.techStack.map((tech, i) => (
                        <span key={i} style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '6px',
                          padding: '2px 8px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: '#CBD5E1'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    padding: '16px 26px',
                    background: 'rgba(5, 10, 20, 0.65)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '0.84rem', color: '#94A3B8', fontWeight: 600 }}>Custom Deployment Ready</span>
                    <button
                      onClick={() => onOpenQuote(`Product Demo / Customization: ${product.title}`)}
                      style={{
                        background: '#10B981',
                        color: '#FFFFFF',
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

      {/* ── Section 7: Modern Tech Stack Badges ── */}
      <section style={{
        background: '#091122',
        color: '#FFFFFF',
        padding: '50px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 30px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '6px'
            }}>
              Engineered with <span style={{ color: '#38BDF8' }}>Modern Production Stacks</span>
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem' }}>
              We write clean, modular, and maintainable code adhering to industry standards and modern microservices architectures.
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
                  background: 'rgba(255, 255, 255, 0.03)',
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
                  color: '#34D399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Code2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#F8FAFC' }}>{stack.name}</div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8' }}>{stack.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to Build CTA Card ── */}
      <section style={{ padding: '60px 0 20px 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '940px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #091329 0%, #131E3D 100%)',
            border: '1.5px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '24px',
            padding: ' clamp(32px, 5vw, 48px)',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '14px'
            }}>
              Ready to Automate with <span style={{ color: '#8B5CF6' }}>Custom AI Agents</span>, <br />
              <span style={{ color: '#10B981' }}>Android Apps</span>, or <span style={{ color: '#38BDF8' }}>Cloud Platforms</span>?
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#94A3B8',
              maxWidth: '680px',
              margin: '0 auto 28px auto',
              lineHeight: 1.6
            }}>
              Connect directly with our engineering team. We provide free initial architecture scoping, wireframe consultation, and fixed-milestone development estimates.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onOpenQuote('AI Integration & Chatbot Development')}
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(139, 92, 246, 0.45)'
                }}
              >
                <span>Request AI Architecture Consultation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20Group,%20I%20am%20interested%20in%20AI%20Chatbot%20and%20Software%20Development."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(37, 211, 102, 0.15)',
                  color: '#25D366',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
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
                <span>Chat with Tech Lead on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
