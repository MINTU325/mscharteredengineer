import React from 'react';
import { FileText, Shield, Scale, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function TermsAndConditionsPage({ onOpenQuote, onNavigateHome }) {
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
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>Terms of Service</span>
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
            <Scale size={14} />
            PROFESSIONAL PRACTICE TERMS &amp; STATUTORY ENGAGEMENT
          </div>
          <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.25, fontWeight: 800 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
            These terms govern the use of this website, online engineering calculators, and initial technical consultations provided by <strong>KS Chartered Engineers, Valuers &amp; Technical Services</strong>.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '20px', fontSize: '0.82rem', color: '#cbd5e1' }}>
            <div><strong>Last Updated:</strong> November 2024</div>
            <div><strong>Governing Law:</strong> Republic of India (Jaipur Jurisdiction)</div>
          </div>
        </div>

        {/* Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '0.90rem', color: '#cbd5e1', lineHeight: 1.75 }}>
          
          <section>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '14px' }}>
              1. Professional Standing &amp; Scope of Services
            </h2>
            <p>
              KS Chartered Engineers provides independent, certified technical valuations, Chartered Engineer certifications under Customs / DGFT / Banks / Wealth Tax Act (Section 34AB) / IBBI Companies Act 2013, and statutory electrical inspections (CEIG / RERC).
            </p>
            <p>
              Informational content, interactive online calculators, and preliminary quote estimators on this website are provided for initial exploratory reference and do not constitute a formal, binding valuation report until an on-site physical inspection is conducted and an official signed and stamped Chartered Engineer certificate is issued.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '14px' }}>
              2. Data Protection &amp; Confidentiality
            </h2>
            <p>
              All client communications and technical submissions are handled under strict engineering confidentiality and the <strong>Digital Personal Data Protection Act, 2023</strong>. Please refer to our <a href="/privacy-policy" style={{ color: '#f59e0b' }}>Privacy Policy</a> and <a href="/cookie-policy" style={{ color: '#f59e0b' }}>Cookie Policy</a> for detailed statutory rights and disclosures.
            </p>
            <p>
              Users are expressly advised not to upload unredacted PAN, Aadhaar, or confidential banking passwords via open web forms. Official evidentiary documentation must only be submitted through verified corporate channels after formal assignment execution.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '14px' }}>
              3. Intellectual Property
            </h2>
            <p>
              All methodologies, engineering assessment templates, architectural CAD designs, algorithmic calculators, and technical publications hosted on this website are the proprietary intellectual property of KS Chartered Engineers and Er. KS. Unauthorized automated scraping, reproduction, or commercial duplication is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '14px' }}>
              4. Limitation of Liability
            </h2>
            <p>
              While reasonable professional care is taken to maintain accurate statutory guidelines, KS Chartered Engineers shall not be liable for any indirect or consequential damages arising from reliance upon preliminary automated website calculators without formal engagement.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: '#ffffff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '14px' }}>
              5. Dispute Resolution &amp; Jurisdiction
            </h2>
            <p>
              Any disputes arising out of or related to website usage or professional services shall be subject to amicable mutual consultation first, and failing which, shall be subject to the exclusive jurisdiction of the competent Courts at <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </section>

        </div>

        {/* Back to Home CTA */}
        <div style={{ textAlign: 'center', paddingTop: '36px' }}>
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
