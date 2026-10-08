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
    service: 'MS Chartered Engineers & Technical Consultancy API',
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
  const adminSecret = process.env.ADMIN_PASSWORD || 'ms@admin2026';

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

// Inquiries & Leads Endpoints
app.get('/api/inquiries', inquiryController.getInquiries);
app.post('/api/inquiries', inquiryController.createInquiry);
app.patch('/api/inquiries/:id', inquiryController.updateInquiryStatus);
app.delete('/api/inquiries/:id', inquiryController.deleteInquiry);

const fs = require('fs');

// Smart Engineering Tools Endpoints
app.post('/api/tools/valuation-estimate', toolsController.calculateValuationEstimate);
app.post('/api/tools/ceig-readiness', toolsController.checkCeigReadiness);

// Route Meta for Dynamic SEO & Social Sharing Crawlers
const ROUTE_META = {
  '/e-waste-annual-return-filing': {
    title: 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers',
    description: 'CPCB E-Waste Annual Return Filing (Form 3) & EPR Compliance Services by senior Chartered Engineers (IIT Roorkee alumni). 100% auditable annual filings, Schedule I EEE codes, customs BOE reconciliation & Pan-India support. Call +91 91586 58885.',
    keywords: 'E-Waste Annual Return Filing, e waste annual return filing, E-Waste EPR compliance, E-Waste compliance consultant, E-Waste return filing consultant, CPCB E-Waste EPR registration, CPCB E-Waste annual return, E-Waste EPR consultant, EPR compliance consultant, E-Waste compliance services',
    canonical: 'https://www.mscharteredengineer.com/e-waste-annual-return-filing',
    ogImage: 'https://www.mscharteredengineer.com/slides/slide3.webp'
  },
  '/autocad-drafting': {
    title: 'AutoCAD 2D Electrical Drafting Services | SLD & Panel Drawings | MS Chartered Engineers',
    description: 'Professional AutoCAD 2D electrical drafting services for industrial plants, MEP consultants, and EPC contractors. Preparation and revision of Single Line Diagrams (SLD), LT/HT panel layouts, cable schedules, and DWG conversions.',
    keywords: 'AutoCAD 2D Electrical Drafting Services, electrical drafting services, AutoCAD electrical drafting, single line diagram AutoCAD, SLD drawing services, LT HT panel drafting, cable routing AutoCAD, electrical layout drawing services',
    canonical: 'https://www.mscharteredengineer.com/autocad-drafting',
    ogImage: 'https://www.mscharteredengineer.com/og-image.png'
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

    if (meta && fs.existsSync(path.join(clientDist, 'index.html'))) {
      fs.readFile(path.join(clientDist, 'index.html'), 'utf8', (err, html) => {
        if (err) return res.sendFile(path.join(clientDist, 'index.html'));
        let modifiedHtml = html;
        if (meta.title) {
          modifiedHtml = modifiedHtml.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);
          modifiedHtml = modifiedHtml.replace(/<meta name="title" content=".*?" \/>/i, `<meta name="title" content="${meta.title}" />`);
        }
        if (meta.description) {
          modifiedHtml = modifiedHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${meta.description}" />`);
        }
        if (meta.keywords) {
          modifiedHtml = modifiedHtml.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${meta.keywords}" />`);
        }
        if (meta.canonical) {
          modifiedHtml = modifiedHtml.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${meta.canonical}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${meta.canonical}" />`);
        }
        if (meta.title) {
          modifiedHtml = modifiedHtml.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${meta.title}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${meta.title}" />`);
        }
        if (meta.description) {
          modifiedHtml = modifiedHtml.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${meta.description}" />`);
          modifiedHtml = modifiedHtml.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${meta.description}" />`);
        }
        if (meta.ogImage) {
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
  console.log(`MS Chartered Engineers API Server running on port ${PORT}`);
  console.log(`Jaipur, Rajasthan | Pan India Engineering Valuation`);
  console.log(`====================================================`);
});
