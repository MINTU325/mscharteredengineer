import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Credentials from './components/Credentials';
import ServicesTeaser from './components/ServicesTeaser';
import ServicesPage from './components/ServicesPage';
import WhyChooseUs from './components/WhyChooseUs';
import FounderProfile from './components/FounderProfile';
import PanIndiaPresence from './components/PanIndiaPresence';
import Footer from './components/Footer';
import QuoteWizardModal from './components/QuoteWizardModal';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginModal from './components/AdminLoginModal';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import ValuationPurposeWizard from './components/ValuationPurposeWizard';
import WhoWeServe from './components/WhoWeServe';
import OurProcess from './components/OurProcess';
import ToolsPage from './components/ToolsPage';
import { MessageSquare, PhoneCall } from 'lucide-react';

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
        if (config.id === 'faq' || config.id === 'home' || config.id === 'blog' || config.id === 'services' || config.id === 'tools') {
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
      } else if (pathname.startsWith('/blog/')) {
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
        if (config || cleanPath.startsWith('/blog') || cleanPath.startsWith('/insights')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentRoute(cleanPath);
          if (config) {
            document.title = config.title;
          }
          if (config && (config.id === 'faq' || config.id === 'home' || config.id === 'blog' || config.id === 'services' || config.id === 'tools')) {
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
    currentRoute === '/chartered-engineer' || 
    currentRoute === '/safety-energy-audits' || 
    currentRoute === '/fssai' || 
    currentRoute === '/advisory';

  const isToolsRoute =
    currentRoute === '/tools' ||
    currentRoute === '/calculator' ||
    currentRoute === '/valuation-calculator' ||
    currentRoute === '/solar-checker';

  return (
    <div className="app-container">
      {/* Top Sticky Navbar */}
      <Navbar 
        onOpenQuote={handleOpenQuote}
        onToggleAdmin={handleToggleAdmin}
        isAdminOpen={isAdminOpen}
      />

      {/* Main View: Admin Portal OR Services Page OR Tools Page OR Blog Page OR FAQ Page OR Main Home Page */}
      {isAdminOpen ? (
        <AdminDashboard 
          onClose={() => setIsAdminOpen(false)} 
          onLogout={handleLogout}
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
          <Credentials />
          <ValuationPurposeWizard onOpenQuote={handleOpenQuote} />
          <WhoWeServe onOpenQuote={handleOpenQuote} />
          <ServicesTeaser onOpenQuote={handleOpenQuote} />
          <OurProcess onOpenQuote={handleOpenQuote} />
          <WhyChooseUs onOpenQuote={handleOpenQuote} />
          <FounderProfile onOpenQuote={handleOpenQuote} />
          <PanIndiaPresence onOpenQuote={handleOpenQuote} />
        </main>
      )}

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Interactive Quotation / Lead Wizard Modal */}
      <QuoteWizardModal 
        isOpen={isQuoteOpen}
        onClose={() => {
          setIsQuoteOpen(false);
          setQuotePrefill(null);
        }}
        initialService={selectedService}
        prefillData={quotePrefill}
      />

      {/* Admin Login & Security Modal */}
      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

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
