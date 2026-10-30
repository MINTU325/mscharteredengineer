import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import LazySection from './components/LazySection';
// Code-split heavy sub-pages & modals to minimize initial bundle size and maximize Core Web Vitals
import { getCityBySlug, PAN_INDIA_CITIES } from './data/cityHubData';
import { MessageSquare, PhoneCall, Lock } from 'lucide-react';
const Credentials = lazy(() => import('./components/Credentials'));
const ArchitecturalProjects = lazy(() => import('./components/ArchitecturalProjects'));
const TexelGroupSection = lazy(() => import('./components/TexelGroupSection'));
const ServicesTeaser = lazy(() => import('./components/ServicesTeaser'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const FounderProfile = lazy(() => import('./components/FounderProfile'));
const PanIndiaPresence = lazy(() => import('./components/PanIndiaPresence'));
const Footer = lazy(() => import('./components/Footer'));
const ValuationPurposeWizard = lazy(() => import('./components/ValuationPurposeWizard'));
const WhoWeServe = lazy(() => import('./components/WhoWeServe'));
const OurProcess = lazy(() => import('./components/OurProcess'));
const EWasteHomeSection = lazy(() => import('./components/EWasteHomeSection'));

// Code-split heavy sub-pages & modals to minimize initial bundle size and maximize Core Web Vitals
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const ToolsPage = lazy(() => import('./components/ToolsPage'));
const CityLandingPage = lazy(() => import('./components/CityLandingPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const AdminLoginModal = lazy(() => import('./components/AdminLoginModal'));
const QuoteWizardModal = lazy(() => import('./components/QuoteWizardModal'));
const CharteredEngineerPage = lazy(() => import('./components/CharteredEngineerPage'));
const EWasteCompliancePage = lazy(() => import('./components/EWasteCompliancePage'));
const TechSolutionsPage = lazy(() => import('./components/TechSolutionsPage'));
const GovernmentSubsidiesPage = lazy(() => import('./components/GovernmentSubsidiesPage'));
const BusinessLoansPage = lazy(() => import('./components/BusinessLoansPage'));
const ElectricalServicesPage = lazy(() => import('./components/ElectricalServicesPage'));
const FabricationServicesPage = lazy(() => import('./components/FabricationServicesPage'));

const ROUTE_CONFIG = {
  '/': { id: 'home', title: 'Chartered Engineer in Jaipur & India | KS Chartered Engineers (IIT Roorkee)' },
  '/fabrication-services': { 
    id: 'fabrication-services', 
    title: 'Industrial Fabrication, Tin Shed & Iron Work Services | KS Group (IIT Roorkee)',
    description: 'Turnkey Industrial Chimney Fabrication, Flue Gas Ducting, Heavy Iron & MS Structural Works, Factory Tin Sheds, PEB Buildings, and Architectural Glass & Aluminium Works by IIT Roorkee Engineers. Call +91 91586 58885.'
  },
  '/fabrication': { 
    id: 'fabrication-services', 
    title: 'Industrial Fabrication, Tin Shed & Iron Work Services | KS Group (IIT Roorkee)',
    description: 'Turnkey Industrial Chimney Fabrication, Flue Gas Ducting, Heavy Iron & MS Structural Works, Factory Tin Sheds, PEB Buildings, and Architectural Glass & Aluminium Works by IIT Roorkee Engineers. Call +91 91586 58885.'
  },
  '/tin-shed-fabrication': { 
    id: 'fabrication-services', 
    title: 'Factory Tin Shed & PEB Industrial Shed Fabrication | KS Group',
    description: 'Heavy duty factory tin shed fabrication, warehouse roofing, PEB pre-engineered buildings, curved sheets, and turbo ventilator installations with structural engineering certification.'
  },
  '/iron-fabrication': { 
    id: 'fabrication-services', 
    title: 'Heavy Iron & MS Fabrication Services | KS Group',
    description: 'Custom heavy iron and mild steel fabrication, structural beams, columns, mezzanine floors, safety spiral staircases, and heavy machinery base frames.'
  },
  '/electrical-services': { 
    id: 'electrical-services', 
    title: 'High Voltage Testing, Transformer Services & Substation Engineering | KS Chartered Engineers',
    description: 'Turnkey 11kV to 132kV Substation Erection, High Voltage Breaker Testing, Power Transformer Overhauling, High-Vacuum Oil Filtration, Cable Jointing and CEA Safety Audits by IIT Roorkee alumni Chartered Engineers.'
  },
  '/substation-services': { 
    id: 'electrical-services', 
    title: 'High Voltage Testing, Transformer Services & Substation Engineering | MS Chartered Engineers',
    description: 'Turnkey 11kV to 132kV Substation Erection, High Voltage Breaker Testing, Power Transformer Overhauling, High-Vacuum Oil Filtration, Cable Jointing and CEA Safety Audits by IIT Roorkee alumni Chartered Engineers.'
  },
  '/e-waste-annual-return-filing': { id: 'e-waste-compliance', title: 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers' },
  '/e-waste-annual-return-filing/': { id: 'e-waste-compliance', title: 'E-Waste Annual Return Filing & EPR Compliance | MS Chartered Engineers' },
  '/tools': { id: 'tools', title: 'Interactive Engineering & Valuation Tools | MS Chartered Engineers' },
  '/purpose-selector': { id: 'purpose-selector', title: 'Valuation Purpose Selector | MS Chartered Engineers' },
  '/who-we-serve': { id: 'who-we-serve', title: 'Who We Serve | Banks, CAs, Advocates, Builders & MSMEs | MS Chartered Engineers' },
  '/services': { id: 'services', title: 'Services We Offer | MS Chartered Engineers' },
  '/process': { id: 'process', title: '8-Step Valuation & Certification Process | MS Chartered Engineers' },
  '/property-valuation': { id: 'property-land-valuation', title: 'Property & Land Valuation Services | MS Chartered Engineers' },
  '/bank-valuation': { id: 'bank-mortgage-valuation', title: 'Bank Loan & Mortgage Valuation (FMV & FSV) | MS Chartered Engineers' },
  '/tax-valuation': { id: 'statutory-tax-valuation', title: 'Capital Gains & 2001 Fair Market Valuation | MS Chartered Engineers' },
  '/ibc-valuation': { id: 'ibc-nclt-corporate-valuation', title: 'IBC 2016 & NCLT Asset Valuation | MS Chartered Engineers' },
  '/machinery-valuation': { id: 'plant-machinery-valuation', title: 'Plant & Machinery Valuation | MS Chartered Engineers' },
  '/valuation': { id: 'valuation', title: 'Assets Valuation Services | MS Chartered Engineers' },
  '/assets-valuation': { id: 'valuation', title: 'Assets Valuation Services | MS Chartered Engineers' },
  '/chartered-engineer': { id: 'chartered-engineer', title: 'Chartered Engineer in Jaipur & India | DGFT, Customs & Machinery | MS Chartered Engineers' },
  '/safety-energy-audits': { id: 'safety-energy-audits', title: 'Industrial Safety & BEE Energy Audits | MS Chartered Engineers' },
  '/fssai': { id: 'fssai', title: 'FSSAI Compliance Services | MS Chartered Engineers' },
  '/advisory': { id: 'advisory', title: 'Technical Advisory & IndAS 16 | MS Chartered Engineers' },
  '/autocad-drafting': { id: 'autocad-electrical-drafting', title: 'AutoCAD 2D Electrical Drafting Services | SLD & Panel Drawings | MS Chartered Engineers' },
  '/autocad-electrical-drafting': { id: 'autocad-electrical-drafting', title: 'AutoCAD 2D Electrical Drafting Services | SLD & Panel Drawings | MS Chartered Engineers' },
  '/third-party-inspection': { id: 'third-party-audit-inspection', title: 'Third-Party Audit & Inspection Services (PDI, CLS, DUPRO) | MS Chartered Engineers' },
  '/inspection-services': { id: 'third-party-audit-inspection', title: 'Third-Party Audit & Inspection Services (PDI, CLS, DUPRO) | MS Chartered Engineers' },
  '/calculator': { id: 'calculator', title: 'Plant & Machinery Valuation Calculator | MS Chartered Engineers' },
  '/valuation-calculator': { id: 'calculator', title: 'Plant & Machinery Valuation Calculator | MS Chartered Engineers' },
  '/solar-checker': { id: 'solar-checker', title: 'Solar CEIG Compliance Checker | MS Chartered Engineers' },
  '/credentials': { id: 'credentials', title: 'Statutory Credentials & IEI Recognition | MS Chartered Engineers' },
  '/founder': { id: 'founder', title: 'Core Team & Leadership — IIT Roorkee | MS Chartered Engineers' },
  '/contact': { id: 'contact', title: 'Contact Us — Jaipur Head Office | MS Chartered Engineers' },
  '/blog': { id: 'blog', title: 'Technical Insights, Regulatory Guides & Blog | MS Chartered Engineers' },
  '/insights': { id: 'blog', title: 'Technical Insights, Regulatory Guides & Blog | MS Chartered Engineers' },
  '/faq': { id: 'faq', title: 'Frequently Asked Questions (FAQ) | Chartered Engineer & Valuers | MS Chartered Engineers' },
  '/faqs': { id: 'faq', title: 'Frequently Asked Questions (FAQ) | Chartered Engineer & Valuers | KS Chartered Engineers' },
  '/pan-india': { id: 'city-hub', title: 'Chartered Engineer Pan-India Corridors & Industrial Practice Hubs | KS Chartered Engineers' },
  '/chartered-engineer-delhi': { id: 'city-hub', title: 'Chartered Engineer Delhi NCR, Gurgaon & Noida | DGFT & Customs Valuer' },
  '/chartered-engineer-mumbai': { id: 'city-hub', title: 'Chartered Engineer Mumbai & Pune | JNPT Customs, EPCG & Plant Valuation' },
  '/chartered-engineer-ahmedabad': { id: 'city-hub', title: 'Chartered Engineer Ahmedabad, Gujarat & Surat | GIDC Industrial Valuer' },
  '/chartered-engineer-jaipur': { id: 'city-hub', title: 'Chartered Engineer Jaipur & Rajasthan | IIT Roorkee HQ | RIICO Approved' },
  '/chartered-engineer-bangalore': { id: 'city-hub', title: 'Chartered Engineer Bangalore, Chennai & Hyderabad | Tech & Industrial SEZ Valuer' },
  '/chartered-engineer-indore': { id: 'city-hub', title: 'Chartered Engineer Indore, Pithampur & Central India | Industrial Valuer' },
  '/ks-group': { id: 'ms-group', title: 'KS Group | Integrated Engineering Consultancy & Departments' },
  '/ms-group': { id: 'ms-group', title: 'KS Group | Integrated Engineering Consultancy & Departments' },
  '/texel-group': { id: 'ms-group', title: 'KS Group | Integrated Engineering Consultancy & Departments' },
  '/departments': { id: 'ms-group', title: 'Our Engineering Departments | KS Group' },
  '/tech-products': { 
    id: 'tech-products', 
    title: 'KS Tech Labs — AI Solutions, Mobile Apps & Enterprise Software Products | KS Group',
    description: 'Explore proprietary AI agents, RAG chatbots, native Android & iOS mobile applications, custom ERP software, and cloud SaaS products developed by KS Tech Labs (IIT Roorkee alumni). Call +91 91586 58885.'
  },
  '/tech': { 
    id: 'tech-products', 
    title: 'KS Tech Labs — AI Solutions, Mobile Apps & Enterprise Software Products | KS Group',
    description: 'Explore proprietary AI agents, RAG chatbots, native Android & iOS mobile applications, custom ERP software, and cloud SaaS products developed by KS Tech Labs (IIT Roorkee alumni). Call +91 91586 58885.'
  },
  '/software-products': { 
    id: 'tech-products', 
    title: 'KS Tech Labs — AI Solutions, Mobile Apps & Enterprise Software Products | KS Group',
    description: 'Explore proprietary AI agents, RAG chatbots, native Android & iOS mobile applications, custom ERP software, and cloud SaaS products developed by KS Tech Labs (IIT Roorkee alumni). Call +91 91586 58885.'
  },
  '/it-solutions': { 
    id: 'tech-products', 
    title: 'KS Tech Labs — AI Solutions, Mobile Apps & Enterprise Software Products | KS Group',
    description: 'Explore proprietary AI agents, RAG chatbots, native Android & iOS mobile applications, custom ERP software, and cloud SaaS products developed by KS Tech Labs (IIT Roorkee alumni). Call +91 91586 58885.'
  },
  '/bulk-messenger': { 
    id: 'tech-products', 
    title: 'KS Bulk WhatsApp Messenger | Live Testing Lab & 50% Launch Offer | KS Tech Labs',
    description: 'Test KS Bulk WhatsApp Messenger live. Send personalized WhatsApp messages with Excel import, anti-ban humanized delay, and get 50% launch discount.'
  },
  '/whatsapp-bulk-messenger': { 
    id: 'tech-products', 
    title: 'KS Bulk WhatsApp Messenger | Live Testing Lab & 50% Launch Offer | KS Tech Labs',
    description: 'Test KS Bulk WhatsApp Messenger live. Send personalized WhatsApp messages with Excel import, anti-ban humanized delay, and get 50% launch discount.'
  },
  '/government-subsidies': { 
    id: 'government-subsidies', 
    title: 'Central & State Government Subsidies & Grants 2024-25 | KS Group',
    description: 'Apply for Central & State Government Subsidies: Rajasthan RIPS 2024, PMEGP, Ambedkar Scheme, PM-FME, Textile GREAT & Solar grants with Chartered Engineer DPR & TEV study.'
  },
  '/subsidies': { 
    id: 'government-subsidies', 
    title: 'Central & State Government Subsidies & Grants 2024-25 | KS Group',
    description: 'Apply for Central & State Government Subsidies: Rajasthan RIPS 2024, PMEGP, Ambedkar Scheme, PM-FME, Textile GREAT & Solar grants with Chartered Engineer DPR & TEV study.'
  },
  '/business-loans': { 
    id: 'business-loans', 
    title: 'Business, MSME & Machinery Loans | CGTMSE & Term Finance | KS Group',
    description: 'Get Business Loans, Machinery Finance, CGTMSE Collateral-Free Loans up to ₹5 Cr & Working Capital with Bankable TEV Study & DPR by IIT Roorkee Engineers.'
  },
  '/business-loan': { 
    id: 'business-loans', 
    title: 'Business, MSME & Machinery Loans | CGTMSE & Term Finance | KS Group',
    description: 'Get Business Loans, Machinery Finance, CGTMSE Collateral-Free Loans up to ₹5 Cr & Working Capital with Bankable TEV Study & DPR by IIT Roorkee Engineers.'
  },
  '/loans': { 
    id: 'business-loans', 
    title: 'Business, MSME & Machinery Loans | CGTMSE & Term Finance | KS Group',
    description: 'Get Business Loans, Machinery Finance, CGTMSE Collateral-Free Loans up to ₹5 Cr & Working Capital with Bankable TEV Study & DPR by IIT Roorkee Engineers.'
  },
  '/admin': { 
    id: 'admin', 
    title: 'Admin Control Center & Lead Management | KS Group',
    description: 'Internal Administrative Console & Lead Management Engine.'
  },
  '/projects': { 
    id: 'projects', 
    title: 'Architectural Projects Gallery | KS Chartered Engineers',
    description: 'Explore our portfolio of architectural, structural and industrial engineering projects.'
  },
  '/architectural-projects': { 
    id: 'projects', 
    title: 'Architectural Projects Gallery | KS Chartered Engineers',
    description: 'Explore our portfolio of architectural, structural and industrial engineering projects.'
  },
};

const updateSeoMeta = (config, pathname) => {
  if (!config) return;
  if (config.title) document.title = config.title;

  if (config.description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.description);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', config.description);
  }

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && config.title) ogTitle.setAttribute('content', config.title);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', `https://www.mscharteredengineer.com${pathname === '/' ? '' : pathname}`);
};

const FULL_PAGE_IDS = new Set([
  'home', 'admin', 'projects', 'faq', 'blog', 'services', 'tools', 'city-hub',
  'e-waste-compliance', 'chartered-engineer', 'tech-products',
  'government-subsidies', 'business-loans', 'electrical-services', 'fabrication-services'
]);

const SERVICES_ROUTES = new Set([
  '/services', '/property-valuation', '/bank-valuation', '/tax-valuation',
  '/ibc-valuation', '/machinery-valuation', '/valuation', '/assets-valuation',
  '/safety-energy-audits', '/fssai', '/advisory', '/autocad-drafting',
  '/autocad-electrical-drafting', '/third-party-inspection', '/inspection-services'
]);

const TOOLS_ROUTES = new Set([
  '/tools', '/calculator', '/valuation-calculator', '/solar-checker'
]);

const ALIAS_CANONICAL_MAP = {
  '/assets-valuation': '/valuation',
  '/autocad-electrical-drafting': '/autocad-drafting',
  '/faqs': '/faq',
  '/insights': '/blog',
  '/valuation-calculator': '/calculator',
};

const scrollToRouteTarget = (config) => {
  if (!config) return;
  if (!config.id || FULL_PAGE_IDS.has(config.id)) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return;
  }
  const el = document.getElementById(config.id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    setTimeout(() => {
      document.getElementById(config.id)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }
};

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [quotePrefill, setQuotePrefill] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('ms_admin_auth') === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => window.location.pathname.replace(/\/$/, '') || '/');

  // Handle direct clean URL navigation on initial load & browser Back/Forward
  useEffect(() => {
    const handleRoute = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      setCurrentRoute(pathname);
      const config = ROUTE_CONFIG[pathname];
      if (pathname === '/admin') {
        if (sessionStorage.getItem('ms_admin_auth') === 'true') {
          setIsAdminOpen(true);
        } else {
          setIsLoginModalOpen(true);
        }
      }
      if (config) {
        updateSeoMeta(config, pathname);
        scrollToRouteTarget(config);
      } else if (pathname.startsWith('/blog/') || pathname.startsWith('/chartered-engineer-')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);

    // Intercept internal routing links to provide seamless SPA navigation while keeping real HTML hrefs for Googlebot
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//') && !anchor.getAttribute('target')) {
        const cleanPath = href.replace(/\/$/, '') || '/';
        const config = ROUTE_CONFIG[cleanPath];
        if (config || cleanPath === '/admin' || cleanPath.startsWith('/blog') || cleanPath.startsWith('/insights') || cleanPath.startsWith('/chartered-engineer-') || cleanPath === '/pan-india') {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentRoute(cleanPath);
          if (cleanPath === '/admin') {
            if (sessionStorage.getItem('ms_admin_auth') === 'true') {
              setIsAdminOpen(true);
            } else {
              setIsLoginModalOpen(true);
            }
          }
          if (config) {
            updateSeoMeta(config, cleanPath);
            scrollToRouteTarget(config);
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => {
      window.removeEventListener('popstate', handleRoute);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Synchronize document canonical tag with active route for search engine indexation
  useEffect(() => {
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag && !currentRoute.startsWith('/blog/')) {
      const aliasCanonicalMap = {
        '/assets-valuation': '/valuation',
        '/autocad-electrical-drafting': '/autocad-drafting',
        '/faqs': '/faq',
        '/insights': '/blog',
        '/valuation-calculator': '/calculator',
      };
      const cleanTarget = aliasCanonicalMap[currentRoute] || currentRoute;
      const canonicalUrl = cleanTarget === '/' ? 'https://www.mscharteredengineer.com/' : `https://www.mscharteredengineer.com${cleanTarget}`;
      canonicalTag.setAttribute('href', canonicalUrl);
    }
  }, [currentRoute]);

  const handleOpenQuote = (serviceName = null, prefillData = null) => {
    setSelectedService(serviceName);
    setQuotePrefill(prefillData);
    setIsQuoteOpen(true);
  };

  const handleToggleAdmin = () => {
    if (isAdminOpen) {
      setIsAdminOpen(false);
    } else {
      if (isAdminAuthenticated) {
        setIsAdminOpen(true);
      } else {
        setIsLoginModalOpen(true);
      }
    }
  };

  const handleLoginSuccess = () => {
    setIsAdminAuthenticated(true);
    setIsLoginModalOpen(false);
    setIsAdminOpen(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ms_admin_auth');
    sessionStorage.removeItem('ms_admin_token');
    setIsAdminAuthenticated(false);
    setIsAdminOpen(false);
    if (currentRoute === '/admin') {
      window.history.pushState({}, '', '/');
      setCurrentRoute('/');
      document.title = ROUTE_CONFIG['/'].title;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isServicesRoute = SERVICES_ROUTES.has(currentRoute);
  const isToolsRoute = TOOLS_ROUTES.has(currentRoute);

  const isCityRoute = currentRoute.startsWith('/chartered-engineer-') || currentRoute === '/pan-india';
  const citySlug = currentRoute === '/pan-india' ? 'chartered-engineer-jaipur' : currentRoute.replace(/^\//, '');
  const activeCityData = getCityBySlug(citySlug);

  const handleNavigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute('/');
    document.title = ROUTE_CONFIG['/']?.title || 'KS Chartered Engineers';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentConfig = ROUTE_CONFIG[currentRoute];
  const routeId = currentConfig?.id;

  // Dynamic route page renderer - replaces fragile 180-line nested ternaries
  const renderCurrentPage = () => {
    if (isAdminOpen || (currentRoute === '/admin' && isAdminAuthenticated)) {
      return (
        <AdminDashboard 
          onClose={() => {
            setIsAdminOpen(false);
            if (currentRoute === '/admin') {
              handleNavigateHome();
            }
          }} 
          onLogout={handleLogout}
        />
      );
    }
    if (currentRoute === '/admin' && !isAdminAuthenticated) {
      return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', padding: '60px 20px' }}>
          <div className="glass-card" style={{ maxWidth: '440px', width: '100%', padding: '40px 30px', textAlign: 'center', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#f59e0b' }}>
              <Lock size={32} />
            </div>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '10px' }}>Admin Control Center</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '28px', lineHeight: '1.6' }}>
              Please enter your administrator passkey to access client consultation requests and website inquiries.
            </p>
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className="btn btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '1rem', fontWeight: '600' }}
            >
              Enter Admin Passkey
            </button>
          </div>
        </div>
      );
    }

    if (routeId === 'chartered-engineer') {
      return <CharteredEngineerPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'e-waste-compliance' || currentRoute.startsWith('/e-waste-annual-return-filing')) {
      return <EWasteCompliancePage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'tech-products') {
      return <TechSolutionsPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'government-subsidies') {
      return <GovernmentSubsidiesPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'business-loans') {
      return <BusinessLoansPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'electrical-services') {
      return <ElectricalServicesPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'fabrication-services') {
      return <FabricationServicesPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'projects') {
      return <ArchitecturalProjects onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (isServicesRoute) {
      return <ServicesPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} currentRoute={currentRoute} />;
    }
    if (isToolsRoute) {
      return <ToolsPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} currentRoute={currentRoute} />;
    }
    if (isCityRoute) {
      return (
        <CityLandingPage 
          cityData={activeCityData}
          onOpenQuote={handleOpenQuote}
          onNavigateHome={handleNavigateHome}
          onSelectCity={(slug) => {
            const nextPath = '/' + slug;
            window.history.pushState({}, '', nextPath);
            setCurrentRoute(nextPath);
            const cfg = ROUTE_CONFIG[nextPath];
            if (cfg) document.title = cfg.title;
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
        />
      );
    }
    if (routeId === 'faq') {
      return <FAQPage onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }
    if (routeId === 'blog' || currentRoute.startsWith('/blog') || currentRoute.startsWith('/insights')) {
      const initialSlug = currentRoute.startsWith('/blog/') 
        ? currentRoute.replace('/blog/', '') 
        : currentRoute.startsWith('/insights/') 
          ? currentRoute.replace('/insights/', '') 
          : null;
      return <BlogPage initialSlug={initialSlug} onOpenQuote={handleOpenQuote} onNavigateHome={handleNavigateHome} />;
    }

    return (
      <main>
        <HeroSlider onOpenQuote={handleOpenQuote} />
        <LazySection minHeight="420px"><TexelGroupSection onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="400px"><Credentials /></LazySection>
        <LazySection minHeight="300px"><EWasteHomeSection /></LazySection>
        <LazySection minHeight="500px"><ValuationPurposeWizard onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="500px"><WhoWeServe onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="500px"><ServicesTeaser onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="500px"><OurProcess onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="500px"><WhyChooseUs onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="400px"><FounderProfile onOpenQuote={handleOpenQuote} /></LazySection>
        <LazySection minHeight="400px"><PanIndiaPresence onOpenQuote={handleOpenQuote} /></LazySection>
      </main>
    );
  };

  return (
    <div className="app-container">
      {/* Top Sticky Navbar */}
      <Navbar 
        onOpenQuote={handleOpenQuote}
      />

      {/* Main View: Admin Portal OR Services Page OR Tools Page OR Blog Page OR FAQ Page OR City Landing Page OR Main Home Page */}
      <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}>
        {renderCurrentPage()}
      </Suspense>

      {/* Footer */}
      <LazySection minHeight="400px"><Footer onOpenQuote={handleOpenQuote} /></LazySection>

      {/* Interactive Quotation / Lead Wizard Modal */}
      {isQuoteOpen && (
        <Suspense fallback={null}>
          <QuoteWizardModal 
            isOpen={isQuoteOpen}
            onClose={() => {
              setIsQuoteOpen(false);
              setQuotePrefill(null);
            }}
            initialService={selectedService}
            prefillData={quotePrefill}
            currentRoute={currentRoute}
          />
        </Suspense>
      )}

      {/* Admin Login & Security Modal */}
      {isLoginModalOpen && (
        <Suspense fallback={null}>
          <AdminLoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
            onLoginSuccess={handleLoginSuccess}
          />
        </Suspense>
      )}

      {/* Floating Action Button: WhatsApp Quick Connect */}
      <a 
        href="https://wa.me/919158658885?text=Hello%20MS%20Chartered%20Engineers,%20I%20would%20like%20to%20consult%20regarding%20Chartered%20Engineer%20services."
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp-btn"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          zIndex: 1500,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          cursor: 'pointer'
        }}
        title="Chat on WhatsApp (+91 91586 58885)"
        aria-label="Chat on WhatsApp with MS Chartered Engineers"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
}
