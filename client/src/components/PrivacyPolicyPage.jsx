import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, FileText, CheckCircle2, PhoneCall, Mail, MapPin, ArrowLeft, ExternalLink, Scale, Clock, UserCheck } from 'lucide-react';

export default function PrivacyPolicyPage({ onOpenQuote, onNavigateHome }) {
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
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>Privacy Policy (DPDP Act 2023 Notice)</span>
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
            <ShieldCheck size={14} />
            STATUTORY PRIVACY NOTICE · SECTION 5 DPDP ACT 2023
          </div>
          <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.25, fontWeight: 800 }}>
            Privacy Policy &amp; Data Protection Notice
          </h1>
          <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
            Under the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> of India, this notice informs you as a <em>Data Principal</em> about how <strong>KS Chartered Engineers, Valuers &amp; Technical Services</strong> (the <em>Data Fiduciary</em>) processes your personal data, your statutory rights, and safeguards implemented to protect your privacy.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '20px', fontSize: '0.82rem', color: '#cbd5e1' }}>
            <div><strong>Effective Date:</strong> November 2024</div>
            <div><strong>Version:</strong> DPDP-2023.v1</div>
            <div><strong>Jurisdiction:</strong> Republic of India (Jaipur, Rajasthan)</div>
          </div>
        </div>

        {/* Critical Statutory Warning Box (From Screenshot 3) */}
        <div style={{
          background: 'rgba(239, 68, 68, 0.10)',
          border: '1px solid rgba(239, 68, 68, 0.35)',
          borderRadius: '12px',
          padding: '20px 24px',
          marginBottom: '36px',
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start'
        }}>
          <AlertTriangle size={24} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ margin: '0 0 6px 0', color: '#fca5a5', fontSize: '1rem', fontWeight: 700 }}>
              Statutory Warning on Sensitive Documents
            </h4>
            <p style={{ margin: 0, fontSize: '0.88rem', color: '#fecaca', lineHeight: 1.6 }}>
              Please do <strong>NOT submit unnecessary PAN, Aadhaar, bank passbooks, passwords, or confidential identity documents</strong> through website inquiry forms, contact widgets, or casual chat. Official identification documents are strictly collected only after an official engagement contract is signed through encrypted corporate channels.
            </p>
          </div>
        </div>

        {/* Section 1: Data Fiduciary Identity */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Scale size={20} style={{ color: '#f59e0b' }} />
            1. Identity of the Data Fiduciary
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            The Data Fiduciary responsible for processing your personal data on this website is:
          </p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '18px 22px', fontSize: '0.90rem', lineHeight: 1.8 }}>
            <div><strong>Entity Name:</strong> KS Chartered Engineers, Valuers &amp; Technical Services</div>
            <div><strong>Founder &amp; Principal Valuer:</strong> Er. KS (Chartered Engineer, IBBI Registered Valuer, Corporate Member IEI)</div>
            <div><strong>Headquarters:</strong> Jaipur, Rajasthan, India - 302020</div>
            <div><strong>Official Email:</strong> <a href="mailto:contact@mscharteredengineer.com" style={{ color: '#f59e0b' }}>contact@mscharteredengineer.com</a></div>
            <div><strong>Direct Helpline:</strong> +91 91586 58885</div>
          </div>
        </section>

        {/* Section 2: Personal Data We Collect & Specific Purpose */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} style={{ color: '#f59e0b' }} />
            2. Personal Data Collected &amp; Purpose of Processing (Section 5)
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            In accordance with <strong>Section 5(1) of the DPDP Act, 2023</strong>, we specify the exact categories of personal data collected and the specific lawful purpose for each:
          </p>
          <div style={{ overflowX: 'auto', marginTop: '14px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(245, 158, 11, 0.1)', borderBottom: '1px solid rgba(245, 158, 11, 0.25)' }}>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Data Category</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Specific Data Points</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Lawful Purpose (DPDP S.6)</th>
                  <th style={{ padding: '12px 14px', color: '#f59e0b', fontWeight: 600 }}>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>Contact Information</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Full Name, Mobile Number, Email Address</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>To respond to service quote requests and schedule technical inspections.</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>180 days (inquiry) / 8 yrs (statutory clients)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>Asset &amp; Project Data</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Property location, factory type, machinery specs, subsidy scheme sought</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>To calculate valuation estimates, CEIG compliance scope, or DPR viability.</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>Duration of statutory client engagement</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '12px 14px', fontWeight: 600, color: '#ffffff' }}>Technical Telemetry</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>IP address (anonymized), browser user-agent, cookie preferences</td>
                  <td style={{ padding: '12px 14px', color: '#cbd5e1' }}>Site security, DDoS prevention, remembering privacy choices.</td>
                  <td style={{ padding: '12px 14px', color: '#94a3b8' }}>6 months (consent cookie)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Data Principal Rights under Chapter III */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserCheck size={20} style={{ color: '#f59e0b' }} />
            3. Your Statutory Rights as a Data Principal
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            Under Chapter III of the DPDP Act 2023, you hold the following non-negotiable statutory rights:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginTop: '16px' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>Right to Access (Section 11)</div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                You may request a summary of personal data held about you and a list of entities with whom it was shared.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>Right to Correction &amp; Erasure (Section 12)</div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                You may request correction of inaccurate data or complete erasure of data once the inquiry purpose is fulfilled.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>Right of Grievance Redressal (Section 13)</div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                You have right to an easily accessible redressal mechanism managed by our designated Data Protection Grievance Officer.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>Right to Nominate (Section 14)</div>
              <p style={{ margin: 0, fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55 }}>
                You may nominate an individual who shall exercise your data rights in the event of death or incapacity.
              </p>
            </div>
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <a
              href="/data-privacy-rights"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                color: '#f59e0b',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              <span>Submit a Data Principal Rights Request</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* Section 4: Withdrawal of Consent */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lock size={20} style={{ color: '#f59e0b' }} />
            4. Withdrawal of Consent (Section 6(4))
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            Under Section 6(4) of the DPDP Act, you have the right to withdraw your consent at any time. Withdrawal is as easy as giving consent:
          </p>
          <ul style={{ fontSize: '0.90rem', color: '#cbd5e1', lineHeight: 1.8, paddingLeft: '22px' }}>
            <li>To withdraw cookie consent, click the <strong>Cookie Preferences</strong> button at the bottom-left of your screen anytime.</li>
            <li>To withdraw inquiry communication consent, simply email <a href="mailto:privacy@mscharteredengineer.com" style={{ color: '#f59e0b' }}>privacy@mscharteredengineer.com</a> with subject "Withdrawal of Consent".</li>
            <li>Withdrawal will cease further processing, without invalidating processing previously carried out under valid consent.</li>
          </ul>
        </section>

        {/* Section 5: Data Security Safeguards (Reasonable Security) */}
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#f59e0b' }} />
            5. Reasonable Security Safeguards (Section 8(5))
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            To prevent personal data breach and avoid statutory liabilities, we implement strict technological and organizational safeguards:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginTop: '12px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>🔒 End-to-End Encryption</div>
              <p style={{ margin: 0, fontSize: '0.80rem', color: '#94a3b8' }}>All web submissions utilize TLS 1.3 / HTTPS encryption in transit.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>🛡️ Role-Based Access Control</div>
              <p style={{ margin: 0, fontSize: '0.80rem', color: '#94a3b8' }}>Only licensed Chartered Engineers assigned to your file have data access.</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px' }}>🇮🇳 Strict Domestic Hosting</div>
              <p style={{ margin: 0, fontSize: '0.80rem', color: '#94a3b8' }}>Client engineering valuation records are securely hosted within Indian territory.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Data Protection Grievance Officer Details */}
        <section style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '1.35rem', color: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={20} style={{ color: '#f59e0b' }} />
            6. Statutory Grievance Redressal Officer (Section 8(10))
          </h2>
          <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#cbd5e1' }}>
            For privacy grievances, queries, or to report any security concern under Section 8(10) of the DPDP Act 2023, contact our designated officer:
          </p>
          <div style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(2, 132, 199, 0.08))',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            marginTop: '14px'
          }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
              Data Protection Grievance Redressal Officer
            </div>
            <div style={{ fontSize: '0.88rem', color: '#f59e0b', marginBottom: '12px' }}>
              KS Chartered Engineers, Valuers &amp; Technical Services
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', fontSize: '0.88rem' }}>
              <div><strong>Email:</strong> <a href="mailto:grievance@mscharteredengineer.com" style={{ color: '#f59e0b' }}>grievance@mscharteredengineer.com</a></div>
              <div><strong>Direct Phone:</strong> +91 91586 58885</div>
              <div><strong>Office:</strong> Jaipur, Rajasthan, India - 302020</div>
              <div><strong>Response SLA:</strong> Acknowledgment within 48h; resolution within 30 days.</div>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.82rem', color: '#94a3b8' }}>
              If you remain dissatisfied with our resolution, you have the statutory right under <strong>Section 13(3) of the DPDP Act, 2023</strong> to register a complaint with the <strong>Data Protection Board of India (DPBI)</strong>.
            </div>
          </div>
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
