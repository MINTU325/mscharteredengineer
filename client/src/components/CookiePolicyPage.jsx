import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check, X, ArrowLeft, Sliders, ExternalLink, RefreshCw } from 'lucide-react';

export default function CookiePolicyPage({ onOpenQuote, onNavigateHome }) {
  const [consentState, setConsentState] = useState(() => {
    try {
      const saved = localStorage.getItem('ks_dpdp_consent');
      if (saved) return JSON.parse(saved);
    } catch {}
    return { necessary: true, optional: false };
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const toggleOptional = (checked) => {
    const updated = {
      ...consentState,
      timestamp: Date.now(),
      choice: checked ? 'accepted_optional' : 'rejected_optional',
      optional: checked,
      necessary: true,
      version: 'dpdp_2023_v1'
    };
    try {
      localStorage.setItem('ks_dpdp_consent', JSON.stringify(updated));
      window.dispatchEvent(new CustomEvent('ks_cookie_consent_updated', { detail: updated }));
    } catch (e) {
      console.warn(e);
    }
    setConsentState(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const clearAllCookies = () => {
    try {
      localStorage.removeItem('ks_dpdp_consent');
      window.location.reload();
    } catch {}
  };

  return (
    <div style={{ background: '#0b132b', color: '#e2e8f0', minHeight: '100vh', padding: '100px 20px 80px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '0.85rem' }}>
          <button
            onClick={onNavigateHome}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: 0
            }}
          >
            <ArrowLeft size={16} />
            <span>Home</span>
          </button>
          <span style={{ color: '#475569' }}>/</span>
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>Cookie Policy</span>
        </div>

        {/* Hero Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '16px',
          padding: '36px',
          marginBottom: '36px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.78rem', color: '#f59e0b', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.05em' }}>
            <Cookie size={14} />
            COOKIE DISCLOSURE &amp; CONSENT ARCHITECTURE
          </div>
          <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.25, fontWeight: 800 }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
            This policy outlines how <strong>KS Chartered Engineers</strong> uses cookies and similar client-side storage technologies in full compliance with the <strong>Digital Personal Data Protection Act, 2023</strong>. Continuing to browse does not constitute consent; you have sovereign authority to control non-essential cookies.
          </p>
        </div>

        {/* Live Interactive Cookie Manager (From Screenshot 1) */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '14px',
          padding: '24px 28px',
          marginBottom: '36px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sliders size={18} style={{ color: '#f59e0b' }} />
              Live Cookie Consent Settings
            </h3>
            {savedSuccess && (
              <span style={{ fontSize: '0.82rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <Check size={16} /> Preferences Updated Successfully!
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Necessary Cookie Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 18px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <div>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.92rem' }}>1. Strictly Necessary Cookies</div>
                <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginTop: '2px' }}>
                  Cookie: <code style={{ color: '#cbd5e1' }}>ks_dpdp_consent</code> · Expiry: 6 months · Purpose: Remembers privacy choice
                </div>
              </div>
              <span style={{ fontSize: '0.75rem', background: '#334155', color: '#94a3b8', padding: '3px 10px', borderRadius: '4px', fontWeight: 600 }}>
                Always Active
              </span>
            </div>

            {/* Optional Cookie Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 18px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <div>
                <div style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '0.92rem' }}>2. Optional Performance &amp; Analytics Cookies</div>
                <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginTop: '2px' }}>
                  Service: Google Analytics / GTM telemetry · Expiry: Session/2 yrs · We do not set advertising or tracking cookies
                </div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={consentState.optional}
                  onChange={(e) => toggleOptional(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#d4a373', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '0.82rem', fontWeight: 600, color: consentState.optional ? '#10b981' : '#94a3b8' }}>
                  {consentState.optional ? 'Enabled' : 'Disabled'}
                </span>
              </label>
            </div>
          </div>

          <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button
              onClick={clearAllCookies}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#94a3b8',
                borderRadius: '6px',
                padding: '8px 14px',
                fontSize: '0.78rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <RefreshCw size={13} />
              Reset All Choices
            </button>
          </div>
        </div>

        {/* Detailed Inventory Table */}
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px' }}>
            Complete Cookie &amp; Storage Inventory
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(245, 158, 11, 0.1)', borderBottom: '1px solid rgba(245, 158, 11, 0.25)' }}>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Cookie Name</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Provider</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Category</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Lifespan</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Default State</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>ks_dpdp_consent</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>First-Party (mscharteredengineer.com)</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Strictly Necessary</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>6 Months (180 days)</td>
                  <td style={{ padding: '12px 14px', color: '#10b981', fontWeight: 600 }}>Always On</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>_ga / _ga_*</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Google Tag Manager / Analytics</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Optional Telemetry</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>2 Years (if consented)</td>
                  <td style={{ padding: '12px 14px', color: '#ef4444', fontWeight: 600 }}>Blocked until Accepted</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>ms_admin_auth</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>First-Party (SessionStorage)</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Strictly Necessary (Admin)</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>Browser Session</td>
                  <td style={{ padding: '12px 14px', color: '#10b981', fontWeight: 600 }}>Internal Staff Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to manage in browser */}
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px' }}>
            Browser-Level Cookie Controls
          </h2>
          <p style={{ fontSize: '0.90rem', color: '#cbd5e1', lineHeight: 1.7 }}>
            In addition to our live toggle above, most web browsers allow you to control cookies through settings preferences. To delete or block cookies in popular browsers:
          </p>
          <ul style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.8, paddingLeft: '22px' }}>
            <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Enhanced Tracking Protection</li>
            <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
            <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
          </ul>
        </section>

        {/* Back to Home CTA */}
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <button
            onClick={onNavigateHome}
            style={{
              background: '#F58220',
              color: '#ffffff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '0.92rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            Return to Homepage
          </button>
        </div>

      </div>
    </div>
  );
}
