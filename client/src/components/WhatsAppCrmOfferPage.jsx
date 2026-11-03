import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Download,
  Share2,
  Copy,
  Check,
  Gift,
  Clock,
  Sparkles,
  Users,
  FileSpreadsheet,
  FileText,
  Bot,
  MessageSquare,
  Lock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  Flame,
  Award,
  ExternalLink,
  Laptop,
  CheckCheck,
  Eye
} from 'lucide-react';

export default function WhatsAppCrmOfferPage({ onNavigateHome }) {
  // Active screenshot tab: 'broadcast' | 'contacts' | 'inbox' | 'device'
  const [activeTab, setActiveTab] = useState('broadcast');

  // Shares tracking
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
  const [copiedPasskey, setCopiedPasskey] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Countdown timer: 18h 42m 15s remaining
  const [timeLeft, setTimeLeft] = useState({ hours: 18, minutes: 42, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const upiId = '6377595128@ibl';
  const payeeName = 'loki';
  const contactPhone = '+91 93515 39420';
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
      `💥 *Diwali Maha-Dhamaka Offer!* 🪔\n\nMaine abhi sirf ₹100 me *Lifetime SumanTech WhatsApp Marketing CRM & Bulk Sender* unlock kiya hai!\n\n✅ Unlimited Bulk WhatsApp Broadcasts from PC\n✅ Anti-Ban 15-25s Safe Humanized Delay\n✅ 1-Click Excel Upload & Contacts Directory\n✅ Branded PDF Quotation Generator\n✅ 24/7 AI Sales Bot & Auto-Reply Rules\n\n👉 Aap bhi Diwali Offer me sirf ₹100 me download karo:\n${shareUrl}\n\n📞 For More Info: +91 93515 39420`
    );

    window.open(`https://api.whatsapp.com/send?text=${promoMessage}`, '_blank');
  };

  // Handle UTR Submit
  const handleUtrSubmit = (e) => {
    e.preventDefault();
    if (!utrNumber.trim() || utrNumber.trim().length < 6) {
      alert('Please enter a valid 12-digit UPI UTR / Transaction ID');
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

  const copyPasskey = () => {
    navigator.clipboard.writeText('psrlms0707');
    setCopiedPasskey(true);
    setTimeout(() => setCopiedPasskey(false), 2000);
  };

  const copyOfferLink = () => {
    navigator.clipboard.writeText('https://www.mscharteredengineer.com/whatsapp-crm');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('checkout-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Screenshots data
  const screenshots = {
    broadcast: {
      title: 'Broadcast Campaign Hub',
      subtitle: 'Anti-Ban humanized pacing, instant message composer, variable tags, and live sending logs.',
      img: '/images/crm-screenshots/crm-broadcast-dashboard.png',
      highlights: [
        'Safe 12-25s randomized humanized delay between messages',
        'Direct rich-text messaging with line breaks and custom tags',
        'Real-time live sending progress bar and terminal logs',
        'Batch pause & emergency stop controls'
      ]
    },
    contacts: {
      title: 'Enterprise Contacts Directory',
      subtitle: '1-Click Excel/CSV import, duplicate remover, tags manager, and DND blacklist.',
      img: '/images/crm-screenshots/crm-contacts.png',
      highlights: [
        'Upload 10,000+ numbers from any Excel (.xlsx, .csv) spreadsheet',
        'Automatic DND blacklist filtering for opt-outs',
        'Multi-tag organization (e.g. CA, Builder, Client, Hot Lead)',
        '1-Click Export to clean CSV format'
      ]
    },
    inbox: {
      title: 'Live 1-on-1 Chat Inbox',
      subtitle: 'Reply directly to incoming customer messages from PC with quick templates.',
      img: '/images/crm-screenshots/crm-live-inbox.png',
      highlights: [
        'Full desktop live chat without touching your mobile phone',
        'Instant quick reply templates for fastest client response',
        'Seamless human takeover (auto-mutes bot during human conversation)',
        'Full chat history sync and unread counter'
      ]
    },
    device: {
      title: 'Device & Session Manager',
      subtitle: 'Permanent LocalAuth connection, live session uptime, and instant test ping.',
      img: '/images/crm-screenshots/crm-device-manager.png',
      highlights: [
        'Linked as +91 93515 39420 (Verified Session)',
        'Zero cloud leakage — runs 100% locally on your computer',
        'No re-scan required on PC restarts',
        'Built-in latency ping and one-click session re-sync'
      ]
    }
  };

  return (
    <div style={{ background: '#040914', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ─── STANDALONE TOP NAVIGATION BAR ─── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(4, 9, 20, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '14px 20px'
      }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
            }}>
              <Smartphone size={22} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff', lineHeight: 1.1 }}>
                SumanTech <span style={{ color: '#10b981' }}>WhatsApp CRM</span>
              </div>
              <div style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '700', letterSpacing: '0.5px' }}>
                DIWALI LIFETIME OFFER • ₹100 ONLY
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="https://wa.me/919351539420?text=Namaste%20Sir%2C%20I%20have%20a%20query%20about%20SumanTech%20WhatsApp%20CRM."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: '700',
                textDecoration: 'none'
              }}
            >
              <Phone size={14} color="#10b981" />
              <span>+91 93515 39420</span>
            </a>

            <button
              onClick={scrollToCheckout}
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                color: '#040914',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.35)'
              }}
            >
              <Flame size={15} />
              <span>Claim ₹100 Offer</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─── MAIN STANDALONE CONTENT CONTAINER ─── */}
      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>

        {/* ─── Hero Section ─── */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.2), rgba(245, 158, 11, 0.2))',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            padding: '6px 18px',
            borderRadius: '30px',
            color: '#fef08a',
            fontSize: '13px',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            <Sparkles size={16} color="#f59e0b" />
            <span>SPECIAL DIWALI MAHA-DHAMAKA • 98% DISCOUNT • LIFETIME ACCESS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: '900',
            lineHeight: 1.15,
            color: '#ffffff',
            margin: '0 auto 18px auto',
            maxWidth: '960px'
          }}>
            Stop Paying Monthly Fees. Get <span style={{ color: '#10b981' }}>Lifetime WhatsApp CRM</span> &amp; Bulk Sender for <span style={{ color: '#fbbf24' }}>₹100</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto 30px auto',
            lineHeight: 1.6
          }}>
            Send unlimited WhatsApp broadcasts with smart anti-ban pacing, import 10,000+ Excel contacts, generate instant branded PDF quotations, and run a 24/7 AI auto-reply bot. Runs 100% locally on your Windows PC.
          </p>

          {/* Pricing Box & Urgency Timer */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '24px',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '18px',
            padding: '18px 32px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.15)',
            marginBottom: '24px'
          }}>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '12px', color: '#94a3b8', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Diwali Special Price
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: '900', color: '#10b981' }}>₹{offerPrice}</span>
                <span style={{ fontSize: '1.3rem', color: '#64748b', textDecoration: 'line-through' }}>₹{originalPrice}</span>
                <span style={{ fontSize: '12px', color: '#fbbf24', background: 'rgba(245, 158, 11, 0.15)', padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                  ONE-TIME • LIFETIME
                </span>
              </div>
            </div>

            <div style={{ height: '44px', width: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '12px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: '700' }}>
                <Clock size={13} />
                <span>OFFER CLOSING SOON:</span>
              </span>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fef08a', letterSpacing: '1px' }}>
                {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
              </div>
            </div>
          </div>
        </div>

        {/* ─── INTERACTIVE SOFTWARE SCREENSHOT TOUR (GALLERY) ─── */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <span style={{
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              padding: '4px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '700'
            }}>
              ✨ LIVE SOFTWARE PREVIEW
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#ffffff', margin: '10px 0 6px 0' }}>
              Explore the Actual Software Interface
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
              Dekhiye software andar se kaisa dikhta hai aur kaise kaam karta hai:
            </p>
          </div>

          {/* Screenshot Navigation Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            {[
              { id: 'broadcast', label: '1. Broadcast Dashboard', icon: <Zap size={15} /> },
              { id: 'contacts', label: '2. Contacts & Excel Upload', icon: <Users size={15} /> },
              { id: 'inbox', label: '3. Live Chat Inbox', icon: <MessageSquare size={15} /> },
              { id: 'device', label: '4. Device Manager', icon: <Smartphone size={15} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? '#10b981' : 'rgba(255, 255, 255, 0.04)',
                  color: activeTab === tab.id ? '#040914' : '#94a3b8',
                  border: activeTab === tab.id ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '9px 18px',
                  borderRadius: '10px',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? '0 4px 15px rgba(16, 185, 129, 0.35)' : 'none'
                }}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Laptop Mockup Display Container */}
          <div style={{
            background: 'linear-gradient(145deg, #0f172a, #1e293b)',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.2)'
          }}>
            {/* Mockup Window Titlebar */}
            <div style={{
              background: '#090d16',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '12px 18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '12px' }}>
                  http://localhost:5001 — SumanTech WhatsApp CRM (Windows Edition)
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Live System Running
                </span>
              </div>
            </div>

            {/* Mockup Main Image */}
            <div style={{ position: 'relative', background: '#020617' }}>
              <img
                src={screenshots[activeTab].img}
                alt={screenshots[activeTab].title}
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '640px', objectFit: 'contain' }}
              />
            </div>

            {/* Mockup Feature Callout Footer */}
            <div style={{
              background: '#090d16',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '20px 24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: 0 }}>
                  {screenshots[activeTab].title}
                </h4>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                  — {screenshots[activeTab].subtitle}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '10px',
                marginTop: '12px'
              }}>
                {screenshots[activeTab].highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2-COLUMN CHECKOUT: UPI QR & 3-SHARE UNLOCKER ─── */}
        <div id="checkout-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>

          {/* STEP 1: SCAN & PAY ₹100 */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.8))',
            border: '2px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '20px',
            padding: '28px',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#10b981',
              color: '#040914',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '800',
              marginBottom: '16px'
            }}>
              STEP 1: SCAN &amp; PAY ₹{offerPrice}
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>
              Scan QR via PhonePe / GPay / Paytm
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: '1.5' }}>
              Scan the official PhonePe SBI QR code below to pay ₹{offerPrice} for lifetime software access.
            </p>

            {/* QR Card with Real PhonePe Screenshot */}
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{
                display: 'inline-block',
                background: '#090d16',
                border: '2px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '16px',
                padding: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.25)',
                maxWidth: '280px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '10px',
                  padding: '4px 10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '20px'
                }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#0054a6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '10px',
                    fontWeight: '900'
                  }}>
                    ●
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff' }}>loki</span>
                  <span style={{ fontSize: '10px', color: '#10b981', fontWeight: '600' }}>(SBI • PhonePe)</span>
                </div>

                <div style={{
                  background: '#000000',
                  padding: '8px',
                  borderRadius: '12px',
                  marginBottom: '10px'
                }}>
                  <img
                    src="/images/whatsapp-crm-upi-qr.jpg"
                    alt="Official PhonePe SBI UPI QR Code for loki - 6377595128@ibl"
                    style={{ width: '100%', maxHeight: '250px', objectFit: 'contain', display: 'block', borderRadius: '8px' }}
                  />
                </div>

                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  Supported on: <b>PhonePe • GPay • Paytm • BHIM</b>
                </div>
              </div>
            </div>

            {/* UPI ID Details */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <div>
                <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Official UPI VPA:</span>
                <code style={{ fontSize: '15px', color: '#38bdf8', fontWeight: '800', letterSpacing: '0.5px' }}>{upiId}</code>
                <span style={{ fontSize: '11px', color: '#10b981', display: 'block', marginTop: '2px' }}>Name: loki (SBI Primary)</span>
              </div>
              <button
                onClick={copyUpiId}
                style={{
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  color: '#38bdf8',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                {copiedUpi ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedUpi ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Direct WhatsApp Screenshot Share Button */}
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Namaste Sir, maine SumanTech WhatsApp CRM ke liye Rs 100 pay kar diya hai. Ye raha mera payment screenshot. Kripya mera Lifetime Unlimited Activation Key provide karein.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                padding: '13px 16px',
                fontSize: '14px',
                fontWeight: '800',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                marginBottom: '16px'
              }}
            >
              <Smartphone size={18} />
              <span>📸 Send Payment Screenshot on WhatsApp</span>
            </a>

            {/* Helpline Callout */}
            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '10px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="#10b981" />
                <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: '600' }}>
                  For More Info &amp; Key: <b style={{ color: '#10b981' }}>{contactPhone}</b>
                </span>
              </div>
              <span style={{ fontSize: '11px', color: '#fbbf24', fontWeight: '700' }}>
                Instant Key on WA
              </span>
            </div>

            {/* UTR Submission Form */}
            <form onSubmit={handleUtrSubmit} style={{ marginTop: '12px' }}>
              <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: '600' }}>
                Enter UPI Reference / UTR Number (12 Digits):
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  placeholder="e.g. 430192837465"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: isUtrSubmitted ? '#10b981' : '#f59e0b',
                    color: '#040914',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  {isUtrSubmitted ? 'Verified ✓' : 'Verify'}
                </button>
              </div>
            </form>
          </div>

          {/* STEP 2: VIRAL 3-SHARE UNLOCKER & DOWNLOAD */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.8))',
            border: isUnlocked ? '2px solid #10b981' : '1px solid rgba(245, 158, 11, 0.35)',
            borderRadius: '20px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: isUnlocked ? '0 0 30px rgba(16, 185, 129, 0.25)' : 'none'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: isUnlocked ? '#10b981' : '#f59e0b',
                color: '#040914',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '800',
                marginBottom: '16px'
              }}>
                {isUnlocked ? '🎉 SOFTWARE UNLOCKED!' : 'STEP 2: SHARE TO UNLOCK'}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '0 0 8px 0' }}>
                Share with 3 Friends to Unlock Unlimited Feature
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '0 0 20px 0', lineHeight: '1.5' }}>
                Share this Diwali deal with 3 business friends or WhatsApp groups. Once shared, your unlimited bulk sender unlocks instantly!
              </p>

              {/* Progress Bar */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '700', marginBottom: '8px' }}>
                  <span style={{ color: '#ffffff' }}>Sharing Progress:</span>
                  <span style={{ color: sharesCount >= shareTarget ? '#10b981' : '#fbbf24' }}>
                    {sharesCount} / {shareTarget} Completed
                  </span>
                </div>
                <div style={{ height: '10px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    width: `${Math.min((sharesCount / shareTarget) * 100, 100)}%`,
                    background: 'linear-gradient(90deg, #f59e0b, #10b981)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleShareOnWhatsApp}
                style={{
                  width: '100%',
                  background: '#25d366',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '14px',
                  fontSize: '15px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 16px rgba(37, 211, 102, 0.3)',
                  marginBottom: '16px'
                }}
              >
                <Share2 size={18} />
                <span>Share on WhatsApp ({shareTarget - sharesCount > 0 ? `${shareTarget - sharesCount} more needed` : 'Completed!'})</span>
              </button>

              <button
                onClick={copyOfferLink}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8',
                  borderRadius: '8px',
                  padding: '8px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                {copiedLink ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Copy Direct Share Link'}</span>
              </button>
            </div>

            {/* UNLOCKED DOWNLOAD CONTAINER */}
            <div style={{
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {isUnlocked ? (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#10b981', fontWeight: '800', fontSize: '15px', marginBottom: '8px' }}>
                    <CheckCircle2 size={18} />
                    <span>Download Ready!</span>
                  </div>

                  <a
                    href="/Sumantech-WhatsApp-CRM-Windows.zip"
                    download="Sumantech-WhatsApp-CRM-Windows.zip"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '800',
                      fontSize: '14px',
                      width: '100%',
                      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.4)',
                      marginBottom: '12px'
                    }}
                  >
                    <Download size={18} />
                    <span>Download Windows CRM ZIP (63 MB)</span>
                  </a>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}>
                    <span style={{ color: '#94a3b8' }}>Admin Passkey: <b style={{ color: '#10b981' }}>psrlms0707</b></span>
                    <button
                      onClick={copyPasskey}
                      style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '11px', fontWeight: '700' }}
                    >
                      {copiedPasskey ? 'Copied ✓' : 'Copy Key'}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: '10px',
                  padding: '14px',
                  textAlign: 'center',
                  color: '#64748b',
                  fontSize: '12px'
                }}>
                  <Lock size={16} style={{ margin: '0 auto 6px auto', display: 'block' }} />
                  Complete payment or 3 WhatsApp shares above to unlock the direct Windows download.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ─── 3-STEP SETUP INSTRUCTIONS ─── */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '50px'
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', textAlign: 'center', marginBottom: '24px' }}>
            Quick 3-Minute Setup on Any Windows PC
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', margin: '0 auto 12px auto' }}>1</div>
              <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Download &amp; Unzip</h5>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
                Download the ZIP file and extract it to your Desktop or C: drive.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#10b981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', margin: '0 auto 12px auto' }}>2</div>
              <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Run START-APP.bat</h5>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
                Double click the shortcut. The dashboard opens automatically in your browser.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#8b5cf6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', margin: '0 auto 12px auto' }}>3</div>
              <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '0 0 6px 0' }}>Scan WhatsApp QR</h5>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>
                Scan once from your phone. Session persists permanently and you're ready to broadcast!
              </p>
            </div>
          </div>
        </div>

        {/* ─── FREQUENTLY ASKED QUESTIONS ─── */}
        <div style={{ maxWidth: '780px', margin: '0 auto 40px auto' }}>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#ffffff', textAlign: 'center', marginBottom: '24px' }}>
            Frequently Asked Questions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                q: 'Kya isme koi monthly ya renewal charge hai?',
                a: 'Nahi! Diwali Special Offer me aapko Lifetime Access milta hai sirf ₹100 me bina kisi monthly subscription ke.'
              },
              {
                q: 'Kya mera WhatsApp number ban ho sakta hai?',
                a: 'Humne isme Anti-Ban Smart Humanized Pacing (15-25 seconds delay) daali hai jo WhatsApp ke multi-device standards ke mutabik kaam karti hai taaki number safe rahe.'
              },
              {
                q: 'Aapka customer support aur more information kahan se milegi?',
                a: 'Installation, setup ya kisi bhi jankari ke liye aap direct +91 93515 39420 par WhatsApp message ya direct call kar sakte hain.'
              }
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  padding: '16px 20px'
                }}
              >
                <div style={{ fontWeight: '700', fontSize: '14px', color: '#fbbf24', marginBottom: '6px' }}>
                  {faq.q}
                </div>
                <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* ─── STANDALONE COMPACT FOOTER ─── */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#020617',
        padding: '30px 20px',
        textAlign: 'center',
        fontSize: '13px',
        color: '#64748b'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#10b981" />
              <span>100% Localhost &amp; End-to-End Encrypted</span>
            </span>
            <span>•</span>
            <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={15} color="#38bdf8" />
              <span>No Cloud Database • Complete Privacy</span>
            </span>
            <span>•</span>
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#10b981', fontWeight: '700', textDecoration: 'none' }}
            >
              Support: {contactPhone}
            </a>
          </div>

          <p style={{ margin: '0 0 10px 0', fontSize: '12px' }}>
            © {new Date().getFullYear()} SumanTech Automation &amp; Marketing Suite. All Rights Reserved.
          </p>

          <button
            onClick={() => {
              if (typeof onNavigateHome === 'function') onNavigateHome();
              else window.location.href = '/';
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#475569',
              cursor: 'pointer',
              fontSize: '12px',
              textDecoration: 'underline'
            }}
          >
            Return to KS Chartered Engineers Main Website →
          </button>
        </div>
      </footer>

    </div>
  );
}
