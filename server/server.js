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

// Serve static client build in production if built
const clientDist = path.join(__dirname, '..', 'client', 'dist');
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api')) return next();
    res.sendFile(path.join(clientDist, 'index.html'));
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
