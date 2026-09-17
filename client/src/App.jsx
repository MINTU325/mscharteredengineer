import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Valuation Services');
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('ms_admin_auth') === 'true';
  });
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenQuote = (serviceName = 'Valuation Services') => {
    setSelectedService(serviceName);
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

      {/* Main View: Admin Portal OR Main Corporate Presentation */}
      {isAdminOpen ? (
        <AdminDashboard 
          onClose={() => setIsAdminOpen(false)} 
          onLogout={handleLogout}
        />
      ) : (
        <main>
          <Hero onOpenQuote={handleOpenQuote} />
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
        onClose={() => setIsQuoteOpen(false)}
        initialService={selectedService}
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
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageSquare size={28} />
      </a>
    </div>
  );
}
