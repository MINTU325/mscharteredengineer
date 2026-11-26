import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Check, Sliders, ExternalLink, Cookie } from 'lucide-react';

export default function CookieConsentBanner({ onNavigate }) {
  const [isVisible, setIsVisible] = useState(false);
  const [optionalChecked, setOptionalChecked] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ks_dpdp_consent');
      if (!saved) {
        // Show after a brief delay so page loads smoothly
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        // Check 6 months expiration (180 days)
        const ageInDays = (Date.now() - (parsed.timestamp || 0)) / (1000 * 60 * 60 * 24);
        if (ageInDays > 180) {
          setIsVisible(true);
        } else {
          setOptionalChecked(!!parsed.optional);
        }
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (isOptionalAllowed) => {
    const consentObj = {
      timestamp: Date.now(),
      choice: isOptionalAllowed ? 'accepted_optional' : 'rejected_optional',
      necessary: true,
      optional: isOptionalAllowed,
      version: 'dpdp_2023_v1'
    };
    try {
      localStorage.setItem('ks_dpdp_consent', JSON.stringify(consentObj));
      // Dispatch custom event so app components or Google Analytics tag can respond
      window.dispatchEvent(new CustomEvent('ks_cookie_consent_updated', { detail: consentObj }));

      // Statutory DPDP Section 6 Audit Log on Backend
      fetch('/api/dpdp/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          choice: consentObj.choice,
          necessary: true,
          optional: isOptionalAllowed,
          version: 'dpdp_2023_v1'
        })
      }).catch(err => {
        // Non-blocking fallback
        console.debug('DPDP Consent backend logging skipped or offline:', err);
      });
    } catch (e) {
      console.warn('Storage error for cookie consent:', e);
    }
    setOptionalChecked(isOptionalAllowed);
    setIsVisible(false);
    setShowManageModal(false);
  };

  const handleAcceptOptional = () => {
    saveConsent(true);
  };

  const handleRejectOptional = () => {
    saveConsent(false);
  };

  const handleSaveManage = () => {
    saveConsent(optionalChecked);
  };

  // Allow reopening banner via custom event (e.g. from footer link)
  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
    };
    window.addEventListener('ks_open_cookie_banner', handleReopen);
    return () => window.removeEventListener('ks_open_cookie_banner', handleReopen);
  }, []);

  if (!isVisible && !showManageModal) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        title="Privacy & Cookie Preferences (DPDP Act 2023)"
        aria-label="Privacy & Cookie Preferences"
        style={{
          position: 'fixed',
          bottom: '18px',
          left: '18px',
          zIndex: 9998,
          background: 'rgba(11, 19, 43, 0.90)',
          color: '#e2e8f0',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '50px',
          padding: '7px 12px',
          fontSize: '0.74rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s ease'
        }}
      >
        <Cookie size={13} style={{ color: '#f59e0b' }} />
        <span>Cookie Preferences</span>
      </button>
    );
  }

  return (
    <>
      {/* ── Main Banner (Exact layout inspired by user screenshot) ── */}
      {isVisible && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '920px',
            zIndex: 99999,
            background: 'rgba(9, 14, 26, 0.97)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '14px',
            padding: '20px 24px',
            color: '#cbd5e1',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.55), 0 0 1px 1px rgba(255,255,255,0.06)',
            fontFamily: 'inherit',
            animation: 'fadeInUp 0.3s ease'
          }}
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px'
          }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: '#94a3b8',
              textTransform: 'uppercase'
            }}>
              COOKIES
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '0.68rem',
                padding: '2px 8px',
                borderRadius: '4px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                fontWeight: 600,
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}>
                DPDP Act 2023 Compliant
              </span>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: '0.86rem',
            lineHeight: 1.55,
            color: '#cbd5e1',
            margin: '0 0 10px 0'
          }}>
            We use one necessary cookie to remember this choice. Optional analytics and interactive calculators stay off unless you accept them. Continuing to browse is not consent. Rejecting optional cookies does not block the site.
          </p>

          {/* Policy Links */}
          <div style={{ marginBottom: '14px', fontSize: '0.82rem' }}>
            <a
              href="/cookie-policy"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/cookie-policy');
                }
              }}
              style={{
                color: '#f59e0b',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: 500
              }}
            >
              Cookie Notice
            </a>
            <span style={{ margin: '0 8px', color: '#64748b' }}>·</span>
            <a
              href="/privacy-policy"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/privacy-policy');
                }
              }}
              style={{
                color: '#f59e0b',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: 500
              }}
            >
              Privacy Notice
            </a>
            <span style={{ margin: '0 8px', color: '#64748b' }}>·</span>
            <a
              href="/data-privacy-rights"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/data-privacy-rights');
                }
              }}
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontWeight: 400
              }}
            >
              Data Principal Rights
            </a>
          </div>

          {/* Granular Option Checkboxes (Matching screenshot 1) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginBottom: '18px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '12px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '0.82rem',
              color: '#94a3b8',
              cursor: 'default'
            }}>
              <input
                type="checkbox"
                checked={true}
                disabled={true}
                style={{
                  marginTop: '3px',
                  accentColor: '#94a3b8',
                  cursor: 'not-allowed'
                }}
              />
              <span>
                <strong style={{ color: '#e2e8f0' }}>Necessary.</strong> The <code style={{ color: '#cbd5e1', background: 'rgba(255,255,255,0.08)', padding: '1px 4px', borderRadius: '3px' }}>ks_dpdp_consent</code> cookie remembers your choice for 6 months. It is always on once you choose, including when you reject optional media.
              </span>
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '0.82rem',
              color: '#cbd5e1',
              cursor: 'pointer'
            }}>
              <input
                type="checkbox"
                checked={optionalChecked}
                onChange={(e) => setOptionalChecked(e.target.checked)}
                style={{
                  marginTop: '3px',
                  accentColor: '#d4a373',
                  cursor: 'pointer'
                }}
              />
              <span>
                <strong style={{ color: '#e2e8f0' }}>Optional.</strong> Performance analytics and interactive valuation calculators. We do not set advertising or cross-site tracking cookies.
              </span>
            </label>
          </div>

          {/* Action Buttons (Right-aligned matching screenshot 1) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <button
              type="button"
              onClick={handleRejectOptional}
              style={{
                background: 'transparent',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '50px',
                padding: '9px 20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              REJECT OPTIONAL
            </button>

            <button
              type="button"
              onClick={() => setShowManageModal(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '50px',
                padding: '9px 20px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              MANAGE
            </button>

            <button
              type="button"
              onClick={handleAcceptOptional}
              style={{
                background: '#d4a373',
                color: '#090e1a',
                border: 'none',
                borderRadius: '50px',
                padding: '9px 22px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(212, 163, 115, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              ACCEPT OPTIONAL
            </button>
          </div>
        </aside>
      )}

      {/* ── Manage Preferences Modal ── */}
      {showManageModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div style={{
            background: '#0d1527',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '100%',
            padding: '28px',
            color: '#e2e8f0',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={20} style={{ color: '#f59e0b' }} />
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#ffffff' }}>Cookie &amp; Privacy Preferences</h3>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              Under India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>, you have the right to provide, customize, and withdraw consent for non-essential digital processing at any time without penalty.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {/* Category 1: Strictly Necessary */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>1. Strictly Necessary Cookies</span>
                  <span style={{ fontSize: '0.72rem', background: '#334155', color: '#94a3b8', padding: '2px 8px', borderRadius: '4px' }}>Always Active</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.80rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Essential for basic navigation, security, and remembering your privacy choices. Cannot be turned off in our systems.
                </p>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.92rem', color: '#ffffff' }}>2. Analytics &amp; Calculation Telemetry</span>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={optionalChecked}
                      onChange={(e) => setOptionalChecked(e.target.checked)}
                      style={{ accentColor: '#d4a373', width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                  </label>
                </div>
                <p style={{ margin: 0, fontSize: '0.80rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Aggregated telemetry to measure page performance, load times, and diagnostic errors. Never linked to your personal valuation inquiry.
                </p>
              </div>
            </div>

            {/* Modal Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                onClick={handleRejectOptional}
                style={{
                  background: 'transparent',
                  color: '#94a3b8',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reject All Optional
              </button>
              <button
                type="button"
                onClick={handleSaveManage}
                style={{
                  background: '#d4a373',
                  color: '#090e1a',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 22px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Save My Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
