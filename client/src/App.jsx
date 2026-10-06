import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import LazySection from './components/LazySection';
// Code-split heavy sub-pages & modals to minimize initial bundle size and maximize Core Web Vitals
import { getCityBySlug, PAN_INDIA_CITIES } from './data/cityHubData';
import { MessageSquare, PhoneCall } from 'lucide-react';
const Credentials = lazy(() => import('./components/Credentials'));
const ServicesTeaser = lazy(() => import('./components/ServicesTeaser'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const FounderProfile = lazy(() => import('./components/FounderProfile'));
const PanIndiaPresence = lazy(() => import('./components/PanIndiaPresence'));
const Footer = lazy(() => import('./components/Footer'));
const ValuationPurposeWizard = lazy(() => import('./components/ValuationPurposeWizard'));
const WhoWeServe = lazy(() => import('./components/WhoWeServe'));
const OurProcess = lazy(() => import('./components/OurProcess'));

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

const ROUTE_CONFIG = {
  '/': { id: 'home', title: 'Chartered Engineer in Jaipur & India | MS Chartered Engineers (IIT Roorkee)' },
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
  '/calculator': { id: 'calculator', title: 'Plant & Machinery Valuation Calculator | MS Chartered Engineers' },
  '/valuation-calculator': { id: 'calculator', title: 'Plant & Machinery Valuation Calculator | MS Chartered Engineers' },
  '/solar-checker': { id: 'solar-checker', title: 'Solar CEIG Compliance Checker | MS Chartered Engineers' },
  '/credentials': { id: 'credentials', title: 'Statutory Credentials & IEI Recognition | MS Chartered Engineers' },
  '/founder': { id: 'founder', title: 'Core Team & Leadership — IIT Roorkee | MS Chartered Engineers' },
  '/contact': { id: 'contact', title: 'Contact Us — Jaipur Head Office | MS Chartered Engineers' },
  '/blog': { id: 'blog', title: 'Technical Insights, Regulatory Guides & Blog | MS Chartered Engineers' },
  '/insights': { id: 'blog', title: 'Technical Insights, Regulatory Guides & Blog | MS Chartered Engineers' },
  '/faq': { id: 'faq', title: 'Frequently Asked Questions (FAQ) | Chartered Engineer & Valuers | MS Chartered Engineers' },
  '/faqs': { id: 'faq', title: 'Frequently Asked Questions (FAQ) | Chartered Engineer & Valuers | MS Chartered Engineers' },
  '/pan-india': { id: 'city-hub', title: 'Chartered Engineer Pan-India Corridors & Industrial Practice Hubs | MS Chartered Engineers' },
  '/chartered-engineer-delhi': { id: 'city-hub', title: 'Chartered Engineer Delhi NCR, Gurgaon & Noida | DGFT & Customs Valuer' },
  '/chartered-engineer-mumbai': { id: 'city-hub', title: 'Chartered Engineer Mumbai & Pune | JNPT Customs, EPCG & Plant Valuation' },
  '/chartered-engineer-ahmedabad': { id: 'city-hub', title: 'Chartered Engineer Ahmedabad, Gujarat & Surat | GIDC Industrial Valuer' },
  '/chartered-engineer-jaipur': { id: 'city-hub', title: 'Chartered Engineer Jaipur & Rajasthan | IIT Roorkee HQ | RIICO Approved' },
  '/chartered-engineer-bangalore': { id: 'city-hub', title: 'Chartered Engineer Bangalore, Chennai & Hyderabad | Tech & Industrial SEZ Valuer' },
  '/chartered-engineer-indore': { id: 'city-hub', title: 'Chartered Engineer Indore, Pithampur & Central India | Industrial Valuer' },
};

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Assets Valuation Services');
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
      if (config) {
        document.title = config.title;
        if (config.id === 'faq' || config.id === 'home' || config.id === 'blog' || config.id === 'services' || config.id === 'tools' || config.id === 'city-hub') {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } else if (config.id) {
          const scrollToTarget = () => {
            const el = document.getElementById(config.id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              return true;
            }
            return false;
          };
          if (!scrollToTarget()) {
            setTimeout(scrollToTarget, 100);
            setTimeout(scrollToTarget, 300);
            setTimeout(scrollToTarget, 600);
          }
        }
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
        if (config || cleanPath.startsWith('/blog') || cleanPath.startsWith('/insights') || cleanPath.startsWith('/chartered-engineer-') || cleanPath === '/pan-india') {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentRoute(cleanPath);
          if (config) {
            document.title = config.title;
          }
          if (config && (config.id === 'faq' || config.id === 'home' || config.id === 'blog' || config.id === 'services' || config.id === 'tools' || config.id === 'city-hub')) {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          } else if (config && config.id) {
            const scrollToTarget = () => {
              const el = document.getElementById(config.id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return true;
              }
              return false;
            };
            if (!scrollToTarget()) {
              setTimeout(scrollToTarget, 100);
              setTimeout(scrollToTarget, 300);
              setTimeout(scrollToTarget, 600);
            }
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

  const handleOpenQuote = (serviceName = 'Assets Valuation Services', prefillData = null) => {
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
    setIsAdminAuthenticated(false);
    setIsAdminOpen(false);
  };

  const isServicesRoute = 
    currentRoute === '/services' || 
    currentRoute === '/property-valuation' || 
    currentRoute === '/bank-valuation' || 
    currentRoute === '/tax-valuation' || 
    currentRoute === '/ibc-valuation' || 
    currentRoute === '/machinery-valuation' || 
    currentRoute === '/valuation' || 
    currentRoute === '/assets-valuation' || 
    currentRoute === '/safety-energy-audits' || 
    currentRoute === '/fssai' || 
    currentRoute === '/advisory' ||
    currentRoute === '/autocad-drafting' ||
    currentRoute === '/autocad-electrical-drafting';

  const isToolsRoute =
    currentRoute === '/tools' ||
    currentRoute === '/calculator' ||
    currentRoute === '/valuation-calculator' ||
    currentRoute === '/solar-checker';

  const isCityRoute = currentRoute.startsWith('/chartered-engineer-') || currentRoute === '/pan-india';
  const citySlug = currentRoute === '/pan-india' ? 'chartered-engineer-jaipur' : currentRoute.replace(/^\//, '');
  const activeCityData = getCityBySlug(citySlug);

  return (
    <div className="app-container">
      {/* Top Sticky Navbar */}
      <Navbar 
        onOpenQuote={handleOpenQuote}
        onToggleAdmin={handleToggleAdmin}
        isAdminOpen={isAdminOpen}
      />

      {/* Main View: Admin Portal OR Services Page OR Tools Page OR Blog Page OR FAQ Page OR City Landing Page OR Main Home Page */}
      <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />}>
        {isAdminOpen ? (
          <AdminDashboard 
            onClose={() => setIsAdminOpen(false)} 
            onLogout={handleLogout}
          />
        ) : currentRoute === '/chartered-engineer' ? (
          <CharteredEngineerPage 
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : isServicesRoute ? (
          <ServicesPage 
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currentRoute={currentRoute}
          />
        ) : isToolsRoute ? (
          <ToolsPage 
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            currentRoute={currentRoute}
          />
        ) : isCityRoute ? (
          <CityLandingPage 
            cityData={activeCityData}
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCity={(slug) => {
              const nextPath = `/${slug}`;
              window.history.pushState({}, '', nextPath);
              setCurrentRoute(nextPath);
              const config = ROUTE_CONFIG[nextPath];
              if (config) {
                document.title = config.title;
              }
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }}
          />
        ) : currentRoute === '/faq' || currentRoute === '/faqs' ? (
          <FAQPage 
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : currentRoute === '/blog' || currentRoute === '/insights' || currentRoute.startsWith('/blog/') || currentRoute.startsWith('/insights/') ? (
          <BlogPage 
            initialSlug={
              currentRoute.startsWith('/blog/') 
                ? currentRoute.replace('/blog/', '') 
                : currentRoute.startsWith('/insights/') 
                  ? currentRoute.replace('/insights/', '') 
                  : null
            }
            onOpenQuote={handleOpenQuote}
            onNavigateHome={() => {
              window.history.pushState({}, '', '/');
              setCurrentRoute('/');
              document.title = ROUTE_CONFIG['/'].title;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <main>
            {/* ── Advanced Hero Slider (full-width, top of page) ── */}
            <HeroSlider onOpenQuote={handleOpenQuote} />
            <LazySection minHeight="400px"><Credentials /></LazySection>
            <LazySection minHeight="500px"><ValuationPurposeWizard onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="500px"><WhoWeServe onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="500px"><ServicesTeaser onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="500px"><OurProcess onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="500px"><WhyChooseUs onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="400px"><FounderProfile onOpenQuote={handleOpenQuote} /></LazySection>
            <LazySection minHeight="400px"><PanIndiaPresence onOpenQuote={handleOpenQuote} /></LazySection>
          </main>
        )}
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
