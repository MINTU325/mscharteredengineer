const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const inquiryController = require('./controllers/inquiryController');
const toolsController = require('./controllers/toolsController');

const app = express();
const PORT = process.env.PORT || 5000;

// Security & SEO Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check API
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'KS Chartered Engineers, Valuers & Technical Services API',
    headquarters: 'Jaipur, Rajasthan',
    founder: 'Mukesh Singh, CEng (India) MIE, IIT Roorkee',
    contact: '+91 91586 58885',
    timestamp: new Date().toISOString()
  });
});

// Statistics API
app.get('/api/stats', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      completedValuations: "1,200+",
      dprProjectsFinanced: "₹650+ Cr",
      solarCeigClearances: "450+ MW",
      clientSatisfaction: "99.4%",
      activeCorporateClients: "380+",
      yearsOfExcellence: "10+"
    }
  });
});

// Admin Authentication Endpoint
app.post('/api/admin/verify', (req, res) => {
  const { password } = req.body;
  const adminSecret = process.env.ADMIN_PASSWORD || 'psrlms0707';

  if (password === adminSecret) {
    return res.status(200).json({
      success: true,
      message: 'Authentication successful',
      token: 'admin-auth-' + Date.now()
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Incorrect Admin Passkey. Access Denied.'
    });
  }
});

// Admin Authorization Middleware
const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.replace(/^Bearer\s+/i, '');
  const adminSecret = process.env.ADMIN_PASSWORD || 'psrlms0707';

  if (token && (token.startsWith('admin-auth-') || token === adminSecret)) {
    return next();
  }
  return res.status(401).json({ success: false, message: 'Unauthorized. Admin credentials required.' });
};

// Inquiries & Leads Endpoints
app.get('/api/inquiries', requireAdminAuth, inquiryController.getInquiries);
app.post('/api/inquiries', inquiryController.createInquiry);
app.patch('/api/inquiries/:id', requireAdminAuth, inquiryController.updateInquiryStatus);
app.delete('/api/inquiries/:id', requireAdminAuth, inquiryController.deleteInquiry);

const fs = require('fs');

// Smart Engineering Tools Endpoints
app.post('/api/tools/valuation-estimate', toolsController.calculateValuationEstimate);
app.post('/api/tools/ceig-readiness', toolsController.checkCeigReadiness);

// Route Meta for Dynamic SEO & Social Sharing Crawlers
const ROUTE_META = {
  '/tech-products': {
    title: 'KS Tech Labs — AI Solutions, Mobile Apps & Enterprise Software Products | KS Group',
    description: 'Explore proprietary AI agents, RAG chatbots, native Android & iOS mobile applications, custom ERP software, and cloud SaaS products developed by KS Tech Labs (IIT Roorkee alumni). Call +91 91586 58885.',
    keywords: 'AI agent development, RAG chatbot, WhatsApp AI chatbot, enterprise software products, Android app development Jaipur India, custom ERP software, IT software company, KS Tech Labs, SaaS development, software development company Jaipur',
    canonical: 'https://www.mscharteredengineer.com/tech-products',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/government-subsidies': {
    title: 'Government Subsidies & Grants 2024-25 | RIPS, PMEGP & MSME | KS Chartered Engineers',
    description: 'Statutory Chartered Engineer Attestation, Net Worth Verification & Bankable DPR for 26+ Government Subsidies including RIPS 2024, PMEGP, MoFPI, Solar & MSME schemes. Call +91 91586 58885.',
    keywords: 'government subsidies India, RIPS 2024 subsidy, PMEGP subsidy, MSME subsidies Rajasthan, capital investment subsidy, textile subsidy, food processing subsidy, chartered engineer certificate for subsidy',
    canonical: 'https://www.mscharteredengineer.com/government-subsidies',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/business-loans': {
    title: 'Business & Machinery Project Loans | CGTMSE & Term Finance | KS Chartered Engineers',
    description: 'Fast-track your bank loan approvals with Chartered Engineer Techno-Economic Viability (TEV) studies, machinery valuations, and bankable Detailed Project Reports (DPR). Call +91 91586 58885.',
    keywords: 'business loans India, machinery loans, CGTMSE loan, TEV study chartered engineer, detailed project report DPR, industrial term loan, bank collateral valuation',
    canonical: 'https://www.mscharteredengineer.com/business-loans',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/e-waste-annual-return-filing': {
    title: 'E-Waste Annual Return Filing & EPR Compliance | KS Chartered Engineers',
    description: 'CPCB E-Waste Annual Return Filing (Form 3) & EPR Compliance Services by senior Chartered Engineers (IIT Roorkee alumni). 100% auditable annual filings, Schedule I EEE codes, customs BOE reconciliation & Pan-India support. Call +91 91586 58885.',
    keywords: 'E-Waste Annual Return Filing, e waste annual return filing, E-Waste EPR compliance, E-Waste compliance consultant, E-Waste return filing consultant, CPCB E-Waste EPR registration, CPCB E-Waste annual return, E-Waste EPR consultant, EPR compliance consultant, E-Waste compliance services',
    canonical: 'https://www.mscharteredengineer.com/e-waste-annual-return-filing',
    ogImage: 'https://www.mscharteredengineer.com/slides/slide3.webp'
  },
  '/autocad-drafting': {
    title: 'AutoCAD 2D Electrical Drafting Services | SLD & Panel Drawings | KS Chartered Engineers',
    description: 'Professional AutoCAD 2D electrical drafting services for industrial plants, MEP consultants, and EPC contractors. Preparation and revision of Single Line Diagrams (SLD), LT/HT panel layouts, cable schedules, and DWG conversions.',
    keywords: 'AutoCAD 2D Electrical Drafting Services, electrical drafting services, AutoCAD electrical drafting, single line diagram AutoCAD, SLD drawing services, LT HT panel drafting, cable routing AutoCAD, electrical layout drawing services',
    canonical: 'https://www.mscharteredengineer.com/autocad-drafting',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/solar-structural-analysis': {
    title: 'Solar Structural Analysis | KS Chartered Engineers (IIT Roorkee)',
    description: 'Statutory structural stability certifications, wind load analysis (IS 875 Part 3), MMS design and rooftop solar load safety audits by IIT Roorkee alumni Chartered Engineers.',
    keywords: 'Solar Structural Analysis, solar wind load analysis IS 875, solar MMS structural stability certificate, rooftop solar structural audit, solar chartered engineer stability report Jaipur India',
    canonical: 'https://www.mscharteredengineer.com/solar-structural-analysis',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/ceig-approval': {
    title: 'CEIG Approval & Statutory Electrical Inspection | KS Chartered Engineers',
    description: 'Statutory Chief Electrical Inspector to Government (CEIG) drawing approvals, substation safety inspection, and energization permissions under CEA Regulations 2023.',
    keywords: 'CEIG Approval Rajasthan, CEIG consultant Jaipur, CEIG electrical inspection, substation energization certificate, solar CEIG approval',
    canonical: 'https://www.mscharteredengineer.com/ceig-approval',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/electrical-contractor-license': {
    title: 'Electrical Contractor License Consultancy (Class A, B, C, D) | Rajasthan CEIG',
    description: 'Expert advisory for Class A, B, C, D Electrical Contractor License, supervisor competency certificates, and wireman permits from Rajasthan Electrical Inspectorate.',
    keywords: 'Electrical Contractor License Rajasthan, Class A electrical license Jaipur, electrical supervisor certificate, wireman license Rajasthan',
    canonical: 'https://www.mscharteredengineer.com/electrical-contractor-license',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/ht-consumer-grievance': {
    title: 'HT Consumer Grievance & Regulatory Consultancy (RERC / Ombudsman) | KS Group',
    description: 'Techno-legal dispute representation for industrial and HT electricity consumers against DISCOM wrongful billing, excess MDI penalty, and fuel surcharge recoveries before CGRF, RERC & Ombudsman.',
    keywords: 'HT Consumer Grievance, RERC electricity dispute, Electricity Ombudsman Rajasthan, DISCOM bill penalty refund, JVVNL tariff dispute',
    canonical: 'https://www.mscharteredengineer.com/ht-consumer-grievance',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/fire-safety-audit': {
    title: 'Fire Safety Audit & Fire NOC Consultancy (NBC 2016) | KS Chartered Engineers',
    description: 'Statutory Fire Safety Audits, IS 14489 compliance, fire hydrant and sprinkler hydraulic testing, and turnkey Fire Department NOC clearance for factories and commercial high-rises.',
    keywords: 'Fire Safety Audit Jaipur, Fire NOC Rajasthan, NBC 2016 fire audit, factory fire safety inspection, industrial fire NOC consultant',
    canonical: 'https://www.mscharteredengineer.com/fire-safety-audit',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/power-quality-analysis': {
    title: 'Power Quality Analysis, Harmonics (IEEE 519) & APFC Optimization | KS Group',
    description: 'Class A power quality logging, IEEE 519 harmonics audit, and APFC optimization to eliminate DISCOM kVAh penalties and gain power factor rebate discounts.',
    keywords: 'Power Quality Analysis, Harmonics audit IEEE 519, APFC panel sizing, kVAh penalty reduction, DISCOM power factor incentive Jaipur',
    canonical: 'https://www.mscharteredengineer.com/power-quality-analysis',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/plant-capacity-certificate': {
    title: 'Plant Production Capacity Certification (RSPCB / DIC / MSME) | Chartered Engineer',
    description: 'Statutory production capacity computation, machine throughput audit, and Chartered Engineer certificate for RSPCB CTE/CTO, DIC subsidies, and customs duty remission.',
    keywords: 'Plant Capacity Certificate, Chartered Engineer production capacity, RSPCB CTE CTO capacity certificate, DIC machinery capacity valuation',
    canonical: 'https://www.mscharteredengineer.com/plant-capacity-certificate',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  },
  '/solar-consultancy': {
    title: 'PM Surya Ghar & Solar Rooftop Net-Metering Consultancy | KS Chartered Engineers',
    description: 'PM Surya Ghar vendor portal empanelment, DISCOM net-metering feasibility, bi-directional meter coordination, and solar rooftop subsidy documentation across Rajasthan.',
    keywords: 'PM Surya Ghar vendor registration, rooftop solar consultancy, net metering liaisoning Jaipur, DISCOM solar feasibility Rajasthan',
    canonical: 'https://www.mscharteredengineer.com/solar-consultancy',
    ogImage: 'https://www.mscharteredengineer.com/og-image-ks.png?v=2'
  }
};

// Serve static client build in production if built
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api')) return next();
    const cleanPath = req.path.replace(/\/$/, '') || '/';
    const meta = ROUTE_META[cleanPath];

    if (fs.existsSync(path.join(clientDist, 'index.html'))) {
      fs.readFile(path.join(clientDist, 'index.html'), 'utf8', (err, html) => {
        if (err) return res.sendFile(path.join(clientDist, 'index.html'));
        let modifiedHtml = html;
        if (meta && meta.title) {
          modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);
          modifiedHtml = modifiedHtml.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${meta.title}" />`);
        }
        if (meta && meta.description) {
          modifiedHtml = modifiedHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${meta.description}" />`);
        }
        if (meta && meta.keywords) {
          modifiedHtml = modifiedHtml.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${meta.keywords}" />`);
        }

        // Canonical URL resolution for all indexable pages & aliases
        const aliasCanonicalMap = {
          '/assets-valuation': '/valuation',
          '/autocad-electrical-drafting': '/autocad-drafting',
          '/faqs': '/faq',
          '/insights': '/blog',
          '/valuation-calculator': '/calculator',
        };
        const targetClean = aliasCanonicalMap[cleanPath] || cleanPath;
        const pageCanonical = (meta && meta.canonical) || (targetClean === '/' ? 'https://www.mscharteredengineer.com/' : `https://www.mscharteredengineer.com${targetClean}`);
        modifiedHtml = modifiedHtml.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${pageCanonical}" />`);
        modifiedHtml = modifiedHtml.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${pageCanonical}" />`);

        if (meta && meta.title) {
          modifiedHtml = modifiedHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${meta.title}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${meta.title}" />`);
        }
        if (meta && meta.description) {
          modifiedHtml = modifiedHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${meta.description}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${meta.description}" />`);
        }
        if (meta && meta.ogImage) {
          modifiedHtml = modifiedHtml.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${meta.ogImage}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${meta.ogImage}" />`);
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.send(modifiedHtml);
      });
    } else {
      res.sendFile(path.join(clientDist, 'index.html'));
    }
  });
}

// Fallback error handler
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`KS Chartered Engineers API Server running on port ${PORT}`);
  console.log(`Jaipur, Rajasthan | Pan India Engineering Valuation`);
  console.log(`====================================================`);
});
