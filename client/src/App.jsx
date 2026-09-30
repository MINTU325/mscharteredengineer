import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Credentials from './components/Credentials';
import ServicesGrid from './components/ServicesGrid';
import ValuationCalculator from './components/ValuationCalculator';
import ComplianceChecker from './components/ComplianceChecker';
import WhyChooseUs from './components/WhyChooseUs';
import FounderProfile from './components/FounderProfile';
import PanIndiaPresence from './components/PanIndiaPresence';
import Footer from './components/Footer';
import QuoteWizardModal from './components/QuoteWizardModal';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginModal from './components/AdminLoginModal';
import BlogPage from './components/BlogPage';
import FAQPage from './components/FAQPage';
import { MessageSquare, PhoneCall } from 'lucide-react';

const ROUTE_CONFIG = {
  '/': { id: 'home', title: 'Chartered Engineer in Jaipur | MS Chartered Engineers & Valuers (Pan-India)' },
  '/services': { id: 'services', title: 'Services We Offer | MS Chartered Engineers' },
  '/valuation': { id: 'valuation', title: 'Assets Valuation Services | MS Chartered Engineers' },
  '/assets-valuation': { id: 'valuation', title: 'Assets Valuation Services | MS Chartered Engineers' },
  '/chartered-engineer': { id: 'chartered-engineer', title: 'Chartered Engineer Certificate Jaipur | DGFT, Customs & Machinery | MS Chartered Engineers' },
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
        if (config.id && config.id !== 'home' && config.id !== 'blog') {
          setTimeout(() => {
            const el = document.getElementById(config.id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 350);
        } else if (config.id === 'home' || config.id === 'blog') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (pathname.startsWith('/blog/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
          if (config && config.id && config.id !== 'home' && config.id !== 'blog') {
            setTimeout(() => {
              const el = document.getElementById(config.id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className="app-container">
      {/* Top Sticky Navbar */}
      <Navbar 
        onOpenQuote={handleOpenQuote}
        onToggleAdmin={handleToggleAdmin}
        isAdminOpen={isAdminOpen}
      />

      {/* Main View: Admin Portal OR Blog Page OR Main Corporate Presentation */}
      {isAdminOpen ? (
        <AdminDashboard 
          onClose={() => setIsAdminOpen(false)} 
          onLogout={handleLogout}
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
          <ServicesGrid onOpenQuote={handleOpenQuote} />
          <ValuationCalculator onOpenQuote={handleOpenQuote} />
          <ComplianceChecker onOpenQuote={handleOpenQuote} />
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
