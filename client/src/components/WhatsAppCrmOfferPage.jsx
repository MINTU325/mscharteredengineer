import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Download,
  Share2,
  Copy,
  Check,
  Clock,
  Users,
  FileSpreadsheet,
  FileText,
  MessageSquare,
  Lock,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Phone,
  Laptop,
  CheckCheck,
  Building2,
  Award,
  AlertTriangle
} from 'lucide-react';

export default function WhatsAppCrmOfferPage({ onNavigateHome }) {
  // Active screenshot tab: 'broadcast' | 'contacts' | 'inbox' | 'device'
  const [activeTab, setActiveTab] = useState('broadcast');

  // Shares tracking (saved in localStorage)
  const [sharesCount, setSharesCount] = useState(() => {
    return parseInt(localStorage.getItem('wa_crm_shares') || '0', 10);
  });
  const [utrNumber, setUtrNumber] = useState(() => {
    return localStorage.getItem('wa_crm_utr') || '';
  });
  const [isUtrSubmitted, setIsUtrSubmitted] = useState(() => {
    return localStorage.getItem('wa_crm_paid') === 'true';
  });
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const upiId = '6377595128@ibl';
  const payeeName = 'loki';
  const supportPhone = '+91 93515 39420';
  const cleanPhone = '9351539420';
  const offerPrice = '100';
  const originalPrice = '4,999';
  const shareTarget = 3;

  const isUnlocked = isUtrSubmitted || sharesCount >= shareTarget;

  // Handle WhatsApp Share
  const handleShareOnWhatsApp = () => {
    const newCount = Math.min(sharesCount + 1, shareTarget);
    setSharesCount(newCount);
    localStorage.setItem('wa_crm_shares', String(newCount));

    const shareUrl = 'https://www.mscharteredengineer.com/whatsapp-crm';
    const promoMessage = encodeURIComponent(
      `Namaste! Agar aapko PC se WhatsApp par bulk messages bhejne hain, Excel se contacts import karne hain aur automatic PDF quotation banana hai, to SumanTech ka WhatsApp CRM software check kijiye.\n\nDiwali offer me sirf ₹100 me Lifetime access mil raha hai (koi monthly subscription nahi):\n👉 ${shareUrl}\n\nHelp & Info: +91 93515 39420`
    );

    window.open(`https://api.whatsapp.com/send?text=${promoMessage}`, '_blank');
  };

  // Handle UTR Submit
  const handleUtrSubmit = (e) => {
    e.preventDefault();
    if (!utrNumber.trim() || utrNumber.trim().length < 6) {
      alert('Kripya apna 12-digit UPI UTR / Transaction ID daaliye');
      return;
    }
    setIsUtrSubmitted(true);
    localStorage.setItem('wa_crm_paid', 'true');
    localStorage.setItem('wa_crm_utr', utrNumber.trim());
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const copyOfferLink = () => {
    navigator.clipboard.writeText('https://www.mscharteredengineer.com/whatsapp-crm');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const scrollToPayment = () => {
    const el = document.getElementById('payment-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Real Screenshots data
  const screenshots = {
    broadcast: {
      title: 'Broadcast Campaign Dashboard',
      subtitle: 'Safe humanized timing, message editor, live progress bar aur activity log.',
      img: '/images/crm-screenshots/crm-broadcast-dashboard.png',
      features: [
        'Har message ke beech 15-25 seconds ka random gap (Anti-Ban Safe Timing)',
        'Excel contacts me se dynamic name aur company name auto-fill',
        'Real-time live progress: Kitne message sent hue aur kitne pending hain',
        'Emergency Pause aur Stop button kisi bhi waqt rokne ke liye'
      ]
    },
    contacts: {
      title: 'Client Contacts Directory & Excel Upload',
      subtitle: 'Apni Excel (.xlsx, .csv) sheet seedhe upload karein aur contacts manage karein.',
      img: '/images/crm-screenshots/crm-contacts.png',
      features: [
        '1-Click Excel upload — 5,000 se 10,000 numbers ek sath import',
        'Duplicate aur invalid mobile numbers automatically hat jaate hain',
        'Tags lagane ki suvidha (e.g. CA, Builder, Client, Hot Lead)',
        'DND Blacklist: Jin clients ne mana kiya unko message nahi jayega'
      ]
    },
    inbox: {
      title: 'Live 1-on-1 Chat Inbox on PC',
      subtitle: 'Mobile uthaye bina apne laptop se client ke replies dekhein aur chat karein.',
      img: '/images/crm-screenshots/crm-live-inbox.png',
      features: [
        'Poori chat history aapke laptop screen par live dikhti hai',
        'Quick reply templates taaki common sawalo ke jawab 1 second me de sakein',
        'Human takeover: Jab aap manual chat karenge, to bot automatically pause ho jayega',
        'Unread badge aur client search bar'
      ]
    },
    device: {
      title: 'WhatsApp Device Manager & Connection',
      subtitle: 'Official WhatsApp Multi-Device session — ek baar scan karein, hamesha connected rahein.',
      img: '/images/crm-screenshots/crm-device-manager.png',
      features: [
        'PhonePe aur SBI verified session (+91 93515 39420)',
        'Session aapke laptop me permanently save rehta hai — baar-baar scan nahi karna padta',
        '100% Localhost security: Sara data aapke computer me rehta hai, kisi third-party cloud par nahi',
        'Live connection status aur latency ping'
      ]
    }
  };

  return (
    <div style={{ background: '#070d18', color: '#f1f5f9', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', lineHeight: '1.6' }}>

      {/* ─── HUMANIZED CLEAN TOPBAR ─── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#0a1222',
        borderBottom: '1px solid #1e293b',
        padding: '12px 20px'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '18px'
            }}>
              S
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.2px' }}>
                SumanTech <span style={{ color: '#10b981' }}>WhatsApp CRM</span>
              </div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                Windows Desktop Edition • By KS Chartered Engineers
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#e2e8f0',
                fontSize: '13px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} color="#10b981" />
              <span>Helpline: {supportPhone}</span>
            </a>

            <button
              onClick={scrollToPayment}
              style={{
                background: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '13px',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Get License for ₹100
            </button>
          </div>

        </div>
      </header>

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>

        {/* ─── HERO SECTION ─── */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 44px auto' }}>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '5px 14px',
            borderRadius: '20px',
            color: '#34d399',
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '18px'
          }}>
            <span>Diwali Special One-Time Offer • ₹100 Lifetime Access</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
            fontWeight: '800',
            lineHeight: 1.25,
            color: '#ffffff',
            margin: '0 0 16px 0',
            letterSpacing: '-0.5px'
          }}>
            Apne Windows PC se WhatsApp Marketing karein — <span style={{ color: '#10b981' }}>Bina kisi Monthly Fee ke</span>
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            lineHeight: '1.7',
            margin: '0 0 24px 0'
          }}>
            Excel sheet upload kijiye, safe humanized timing ke sath clients ko message bhejiye, official PDF quotation banaiye aur 24/7 client inquiries manage kijiye. Software aapke apne laptop par chalta hai — koi cloud subscription nahi, pura customer data 100% private.
          </p>

          {/* Clean Humanized Pricing Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            background: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            padding: '12px 24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700' }}>Lifetime Single License</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '28px', fontWeight: '900', color: '#10b981' }}>₹{offerPrice}</span>
                <span style={{ fontSize: '14px', color: '#64748b', textDecoration: 'line-through' }}>₹{originalPrice}</span>
                <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '600' }}>(Ek baar pay karein, hamesha use karein)</span>
              </div>
            </div>

            <div style={{ height: '32px', width: '1px', background: '#334155' }} />

            <div style={{ textAlign: 'left', fontSize: '12px', color: '#cbd5e1' }}>
              <div>✅ 15 Free Trial Messages Test ke liye</div>
              <div>✅ Lifetime Unlimited Key ₹100 me</div>
            </div>
          </div>

        </div>

        {/* ─── ACTUAL SCREENSHOTS SHOWCASE (REAL SOFTWARE PREVIEW) ─── */}
        <div style={{
          background: '#0b1329',
          border: '1px solid #1e293b',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '50px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0' }}>
              Software ka Actual Interface Dekhiye
            </h2>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
              Neeche diye gaye tabs par click karke dekhein software andar se kaisa dikhta hai:
            </p>
          </div>

          {/* Screenshot Switcher Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '18px'
          }}>
            {[
              { id: 'broadcast', label: '1. Broadcast Dashboard', icon: <Zap size={14} /> },
              { id: 'contacts', label: '2. Excel Contacts Directory', icon: <Users size={14} /> },
              { id: 'inbox', label: '3. Live Chat Inbox on PC', icon: <MessageSquare size={14} /> },
              { id: 'device', label: '4. WhatsApp Device Manager', icon: <Smartphone size={14} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#10b981' : '#1e293b',
                  color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Screenshot Display Card */}
          <div style={{
            background: '#020617',
            border: '1px solid #1e293b',
            borderRadius: '12px',
            overflow: 'hidden'
          }}>
            {/* Topbar of the frame */}
            <div style={{
              background: '#0f172a',
              borderBottom: '1px solid #1e293b',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600' }}>
                {screenshots[activeTab].title}
              </span>
              <span style={{ fontSize: '11px', color: '#10b981' }}>
                ● Actual Running Software
              </span>
            </div>

            {/* High Resolution Image */}
            <div style={{ padding: '8px', background: '#020617' }}>
              <img
                src={screenshots[activeTab].img}
                alt={screenshots[activeTab].title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '6px'
                }}
              />
            </div>

            {/* Feature List under image */}
            <div style={{ background: '#0f172a', padding: '16px 20px', borderTop: '1px solid #1e293b' }}>
              <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: '600', marginBottom: '8px' }}>
                {screenshots[activeTab].subtitle}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {screenshots[activeTab].features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12px', color: '#94a3b8' }}>
                    <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── HOW IT WORKS (SIMPLE 4 STEPS) ─── */}
        <div style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', textAlign: 'center', color: '#ffffff', marginBottom: '24px' }}>
            Software Kaise Install Karein aur Unlimited Kaise Banayein?
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px' }}>
              <div style={{ color: '#38bdf8', fontWeight: '800', fontSize: '14px', marginBottom: '6px' }}>Step 1: Download &amp; Test</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                Neeche diye gaye link se ZIP file download karein aur apne computer me unzip karein.
              </div>
            </div>

            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px' }}>
              <div style={{ color: '#10b981', fontWeight: '800', fontSize: '14px', marginBottom: '6px' }}>Step 2: 15 Free Trial Msgs</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                <code>START-APP.bat</code> chala kar pehle 15 messages free me test karke dekh lijiye ki software perfectly chal raha hai.
              </div>
            </div>

            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px' }}>
              <div style={{ color: '#f59e0b', fontWeight: '800', fontSize: '14px', marginBottom: '6px' }}>Step 3: ₹100 Pay Karein</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                Neeche diye gaye PhonePe/SBI QR code ko scan karke ₹100 pay kijiye.
              </div>
            </div>

            <div style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px', padding: '18px' }}>
              <div style={{ color: '#c084fc', fontWeight: '800', fontSize: '14px', marginBottom: '6px' }}>Step 4: Screenshot Bhejein</div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                Payment ka screenshot WhatsApp (+91 93515 39420) par bhejein — aapko turant Lifetime Unlimited Activation Key mil jayegi.
              </div>
            </div>
          </div>
        </div>

        {/* ─── PAYMENT & DOWNLOAD SECTION ─── */}
        <div id="payment-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>

          {/* LEFT: PHONEPE SBI BARCODE (CLEAN, WHITE CARD, 100% READABLE) */}
          <div style={{
            background: '#0f172a',
            border: '2px solid #10b981',
            borderRadius: '16px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'inline-block',
              background: '#10b981',
              color: '#040914',
              padding: '3px 10px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '800',
              marginBottom: '14px'
            }}>
              OFFICIAL PAYMENT QR
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0' }}>
              Scan QR to Pay ₹{offerPrice}
            </h3>
            <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 16px 0' }}>
              PhonePe, Google Pay, Paytm ya BHIM se scan karke ₹100 pay karein:
            </p>

            {/* Crisp QR Code Container */}
            <div style={{
              display: 'inline-block',
              background: '#000000',
              padding: '10px',
              borderRadius: '16px',
              border: '1px solid #334155',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.6)',
              marginBottom: '16px',
              maxWidth: '280px',
              width: '100%'
            }}>
              <img
                src="/images/whatsapp-crm-upi-qr.jpg"
                alt="PhonePe SBI UPI QR Code - loki - 6377595128@ibl"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '10px'
                }}
              />
            </div>

            {/* UPI ID Details */}
            <div style={{
              background: '#070d18',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>UPI ID:</span>
                <code style={{ fontSize: '14px', color: '#38bdf8', fontWeight: '700' }}>{upiId}</code>
                <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block' }}>Name: {payeeName} (SBI Primary Account)</span>
              </div>
              <button
                onClick={copyUpiId}
                style={{
                  background: '#1e293b',
                  color: '#e2e8f0',
                  border: '1px solid #334155',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                {copiedUpi ? 'Copied ✓' : 'Copy'}
              </button>
            </div>

            <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '14px' }}>
              Supported on PhonePe • Google Pay • Paytm • BHIM • UPI
            </div>

            {/* WHATSAPP SCREENSHOT BUTTON */}
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Namaste Sir, maine SumanTech WhatsApp CRM ke liye Rs 100 pay kar diya hai. Ye raha mera payment screenshot. Kripya mera Lifetime Unlimited Activation Key provide karein.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                background: '#25d366',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '13px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '10px'
              }}
            >
              <Smartphone size={16} />
              <span>📸 Payment Screenshot WhatsApp par Bhejein</span>
            </a>

            <div style={{ fontSize: '11px', color: '#94a3b8' }}>
              Screenshot bhejte hi aapko WhatsApp par instant key mil jayegi.
            </div>
          </div>

          {/* RIGHT: DOWNLOAD & 3-SHARE UNLOCK */}
          <div style={{
            background: '#0f172a',
            border: '1px solid #1e293b',
            borderRadius: '16px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-block',
                background: '#38bdf8',
                color: '#040914',
                padding: '3px 10px',
                borderRadius: '4px',
                fontSize: '11px',
                fontWeight: '800',
                marginBottom: '14px'
              }}>
                STEP: DOWNLOAD SOFTWARE
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '0 0 6px 0' }}>
                Download SumanTech WhatsApp CRM
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' }}>
                Neeche diye gaye button se Windows ZIP download karein (15 messages free trial included hai):
              </p>

              {/* DIRECT DOWNLOAD BUTTON */}
              <a
                href="/Sumantech-WhatsApp-CRM-Windows.zip"
                download="Sumantech-WhatsApp-CRM-Windows.zip"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#10b981',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '14px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '14px',
                  marginBottom: '18px'
                }}
              >
                <Download size={18} />
                <span>Download Windows Package (63 MB)</span>
              </a>

              {/* 3-Share Referral Box */}
              <div style={{
                borderTop: '1px solid #1e293b',
                paddingTop: '16px'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
                  Aapke dosto ke sath share karein:
                </div>
                <p style={{ fontSize: '11px', color: '#94a3b8', margin: '0 0 12px 0' }}>
                  WhatsApp par 3 logo ko share karke unhe bhi is ₹100 offer ke baare me batayein:
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '600', marginBottom: '6px', color: '#94a3b8' }}>
                  <span>Shares Progress:</span>
                  <span style={{ color: sharesCount >= shareTarget ? '#10b981' : '#f59e0b' }}>{sharesCount} / {shareTarget} Shared</span>
                </div>

                <div style={{ height: '6px', background: '#1e293b', borderRadius: '3px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ height: '100%', width: `${Math.min((sharesCount / shareTarget) * 100, 100)}%`, background: '#10b981' }} />
                </div>

                <button
                  onClick={handleShareOnWhatsApp}
                  style={{
                    width: '100%',
                    background: '#1e293b',
                    color: '#e2e8f0',
                    border: '1px solid #334155',
                    borderRadius: '6px',
                    padding: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Share2 size={14} />
                  <span>Share on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* ─── REAL HUMAN COMPANY BACKING & CONTACT INFO ─── */}
        <div style={{
          background: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#ffffff' }}>
              Developed &amp; Supported by SumanTech Solutions
            </div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
              In technical collaboration with KS Chartered Engineers &amp; Valuers (IIT Roorkee alumni led practice).
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
              Head Office: Jaipur, Rajasthan · Serving Clients Pan-India
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#10b981',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Phone size={14} />
              <span>Contact: {supportPhone}</span>
            </a>
          </div>
        </div>

      </main>

      {/* ─── CLEAN FOOTER ─── */}
      <footer style={{
        borderTop: '1px solid #1e293b',
        background: '#040914',
        padding: '24px 20px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#64748b'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '8px', color: '#94a3b8' }}>
            100% Localhost Execution · Complete Client Data Privacy · No Third-party Cloud Leakage
          </div>
          <div>
            © {new Date().getFullYear()} SumanTech Automation Suite. All Rights Reserved.
          </div>
          <div style={{ marginTop: '10px' }}>
            <button
              onClick={() => {
                if (typeof onNavigateHome === 'function') onNavigateHome();
                else window.location.href = '/';
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#38bdf8',
                cursor: 'pointer',
                fontSize: '11px',
                textDecoration: 'underline'
              }}
            >
              ← Return to Main Website (mscharteredengineer.com)
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
