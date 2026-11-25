import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, ArrowLeft, RefreshCw, Download, FileCheck, Check, Info, Award } from 'lucide-react';

const WORK_PACKAGES = [
  {
    id: 'wp_a',
    title: 'Work Package A — Website Privacy Pages (Mandatory Public Disclosures)',
    description: 'Statutory notices required to be published and easily accessible to every website visitor.',
    items: [
      { id: 'wpa_1', text: 'Privacy Policy with Section 5 DPDP Act 2023 disclosures (Data Fiduciary identity, specific purposes, rights, grievance officer)', penalty: 'Up to ₹50 Cr' },
      { id: 'wpa_2', text: 'Granular Cookie Policy disclosing strictly necessary vs optional analytics with default-off logic', penalty: 'Up to ₹50 Cr' },
      { id: 'wpa_3', text: 'Data Principal Rights portal explaining Sections 11–14 (Access, Correction, Erasure, Nomination)', penalty: 'Up to ₹200 Cr' },
      { id: 'wpa_4', text: 'Grievance Redressal mechanism with designated officer details, SLA (<30 days), and DPBI escalation notice', penalty: 'Up to ₹200 Cr' },
      { id: 'wpa_5', text: 'Terms of Service covering professional advisory scope, disclaimer, and Indian jurisdiction', penalty: 'Legal exposure' }
    ]
  },
  {
    id: 'wp_b',
    title: 'Work Package B — Consent & Enquiry Form Architecture',
    description: 'Rules for lawful consent under Section 6 of DPDP Act 2023.',
    items: [
      { id: 'wpb_1', text: 'Affirmative, unbundled consent checkbox on quote and inquiry forms (no pre-ticked boxes)', penalty: 'Up to ₹50 Cr' },
      { id: 'wpb_2', text: 'Clear notice given before or at the time of collecting personal data', penalty: 'Up to ₹50 Cr' },
      { id: 'wpb_3', text: 'Easy mechanism to withdraw consent as easily as it was granted (Section 6(4))', penalty: 'Up to ₹50 Cr' },
      { id: 'wpb_4', text: 'No refusal of basic website service if visitor rejects non-essential analytics cookies', penalty: 'Up to ₹50 Cr' }
    ]
  },
  {
    id: 'wp_c',
    title: 'Work Package C — Chatbot, WhatsApp & CRM Safeguards (7 Key Checks)',
    description: 'Specific security and retention policies for conversational interfaces and automated assistants.',
    items: [
      { id: 'wpc_1', text: '1. Chatbot privacy notice displayed before collecting personal information', penalty: 'Up to ₹50 Cr' },
      { id: 'wpc_2', text: '2. Explicit warning NOT to submit unnecessary PAN, Aadhaar or sensitive documents through chat', penalty: 'Up to ₹250 Cr' },
      { id: 'wpc_3', text: '3. Defined retention policy for chatbot & inquiry conversations (e.g. 180 days)', penalty: 'Up to ₹50 Cr' },
      { id: 'wpc_4', text: '4. Review of AI provider data-processing terms and retention settings (prevent training on client data)', penalty: 'Up to ₹250 Cr' },
      { id: 'wpc_5', text: '5. Review of WhatsApp API and CRM data-sharing arrangements and encryption protocols', penalty: 'Up to ₹250 Cr' },
      { id: 'wpc_6', text: '6. Role-based restrictions on employee access to client conversations and valuation drafts', penalty: 'Up to ₹250 Cr' },
      { id: 'wpc_7', text: '7. Automated process to delete or anonymise conversation data when retention is no longer necessary', penalty: 'Up to ₹50 Cr' }
    ]
  },
  {
    id: 'wp_d',
    title: 'Work Package D — Vendor & Third-Party Processing Governance',
    description: 'Legal safeguards governing third-party processors under Section 8 of DPDP Act.',
    items: [
      { id: 'wpd_1', text: 'Data Processing Agreements (DPA) executed with hosting, cloud database, and CRM vendors', penalty: 'Up to ₹250 Cr' },
      { id: 'wpd_2', text: 'Personal data stored domestically on servers physically located within Indian territory', penalty: 'Statutory breach' },
      { id: 'wpd_3', text: 'Regular security audits of third-party scripts, plugins, and analytics widgets', penalty: 'Up to ₹250 Cr' }
    ]
  },
  {
    id: 'wp_e',
    title: 'Work Package E — Data Principal Rights Redressal Engine',
    description: 'Operational capability to honor Chapter III statutory rights within 30 statutory days.',
    items: [
      { id: 'wpe_1', text: 'Process to verify Data Principal identity before disclosing personal records', penalty: 'Up to ₹200 Cr' },
      { id: 'wpe_2', text: 'Mechanism to extract, format, and deliver data summaries under Section 11', penalty: 'Up to ₹200 Cr' },
      { id: 'wpe_3', text: 'Workflow to execute complete data erasure upon request across databases and CRM', penalty: 'Up to ₹200 Cr' },
      { id: 'wpe_4', text: 'Procedure to register and verify legally authorized nominees under Section 14', penalty: 'Up to ₹200 Cr' }
    ]
  },
  {
    id: 'wp_f',
    title: 'Work Package F — Internal Privacy Management Registers (8 Practical Documents)',
    description: 'Core organizational documentation to demonstrate accountability under DPDP audit.',
    items: [
      { id: 'wpf_1', text: '1. Personal Data Inventory Register (mapping all data sources, types, and flows)', penalty: 'Statutory compliance' },
      { id: 'wpf_2', text: '2. Data Processing and Vendor Register (listing all external processors and safeguards)', penalty: 'Statutory compliance' },
      { id: 'wpf_3', text: '3. Data Retention Schedule (setting specific expiry timelines by data category)', penalty: 'Statutory compliance' },
      { id: 'wpf_4', text: '4. Consent Register (time-stamped records of visitor and client consents)', penalty: 'Statutory compliance' },
      { id: 'wpf_5', text: '5. Data Breach Response SOP (mandatory 72h notification to DPBI and affected principals)', penalty: 'Up to ₹250 Cr' },
      { id: 'wpf_6', text: '6. Privacy Grievance Register (tracking complaints, resolution dates, and SLAs)', penalty: 'Up to ₹200 Cr' },
      { id: 'wpf_7', text: '7. Employee Confidentiality Policy & Non-Disclosure Agreements for engineering staff', penalty: 'Statutory compliance' },
      { id: 'wpf_8', text: '8. Data Access Control Policy (MFA, password rotation, privileged access management)', penalty: 'Up to ₹250 Cr' }
    ]
  }
];

export default function DpdpComplianceTool({ onOpenQuote, onNavigateHome }) {
  // Pre-seed with the checks that KS Chartered Engineers now implements!
  const [checkedItems, setCheckedItems] = useState({
    wpa_1: true,
    wpa_2: true,
    wpa_3: true,
    wpa_4: true,
    wpa_5: true,
    wpb_1: true,
    wpb_2: true,
    wpb_3: true,
    wpb_4: true,
    wpc_1: true,
    wpc_2: true,
    wpc_3: true,
    wpc_4: true,
    wpc_5: true,
    wpc_6: true,
    wpc_7: true,
    wpd_1: true,
    wpd_2: true,
    wpd_3: true,
    wpe_1: true,
    wpe_2: true,
    wpe_3: true,
    wpe_4: true,
    wpf_1: true,
    wpf_2: true,
    wpf_3: true,
    wpf_4: true,
    wpf_5: true,
    wpf_6: true,
    wpf_7: true,
    wpf_8: true
  });

  const allItems = WORK_PACKAGES.flatMap(wp => wp.items);
  const totalCount = allItems.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const scorePercent = Math.round((checkedCount / totalCount) * 100);

  const toggleItem = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectAll = () => {
    const all = {};
    allItems.forEach(item => { all[item.id] = true; });
    setCheckedItems(all);
  };

  const clearAll = () => {
    setCheckedItems({});
  };

  const getRiskStatus = () => {
    if (scorePercent >= 90) {
      return {
        label: 'Statutorily Compliant & Defensible',
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.15)',
        desc: 'Your organisation satisfies mandatory Section 5 notices, consent workflows, and internal accountability registers. Minimum risk of DPBI penalties.'
      };
    } else if (scorePercent >= 65) {
      return {
        label: 'Moderate Statutory Exposure',
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.15)',
        desc: 'Gaps identified in operational registers, vendor processing agreements, or grievance timelines. Potential exposure under Section 33 Schedule 1.'
      };
    } else {
      return {
        label: 'CRITICAL STATUTORY RISK (Penalties up to ₹250 Crores)',
        color: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.15)',
        desc: 'Missing statutory privacy pages, unbundled consent, or breach response SOP. Significant liability under India’s DPDP Act 2023.'
      };
    }
  };

  const risk = getRiskStatus();

  return (
    <div style={{ background: '#0b132b', color: '#e2e8f0', minHeight: '100vh', padding: '100px 20px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
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
          <span style={{ color: '#f59e0b', fontWeight: 600 }}>DPDP Act 2023 Compliance &amp; Tick-Box Analysis</span>
        </div>

        {/* Hero Header */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '16px',
          padding: '36px',
          marginBottom: '32px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '6px', padding: '4px 12px', fontSize: '0.78rem', color: '#f59e0b', fontWeight: 700, marginBottom: '16px', letterSpacing: '0.05em' }}>
            <ShieldCheck size={14} />
            STATUTORY COMPLIANCE CHECKER · DPDP ACT 2023
          </div>
          <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.25, fontWeight: 800 }}>
            DPDP Act 2023 Compliance Audit &amp; Tick-Box Analysis
          </h1>
          <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.65, margin: 0 }}>
            India's <strong>Digital Personal Data Protection Act, 2023</strong> mandates strict privacy standards with statutory penalties up to <strong>₹250 Crores</strong> per violation under Schedule 1. Use this comprehensive 31-point tick-box analysis formulated by certified Chartered Engineers &amp; Technical Auditors to evaluate your organisation’s privacy architecture.
          </p>
        </div>

        {/* Live Scorecard Banner */}
        <div style={{
          background: risk.bg,
          border: `1px solid ${risk.color}`,
          borderRadius: '14px',
          padding: '24px 28px',
          marginBottom: '36px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ fontSize: '0.80rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: risk.color, marginBottom: '4px' }}>
              Current Compliance Readiness
            </div>
            <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              {risk.label}
            </div>
            <p style={{ margin: 0, fontSize: '0.86rem', color: '#cbd5e1', maxWidth: '620px', lineHeight: 1.55 }}>
              {risk.desc}
            </p>
          </div>

          <div style={{ textAlign: 'center', minWidth: '130px' }}>
            <div style={{ fontSize: '3rem', fontWeight: 900, color: risk.color, lineHeight: 1 }}>
              {scorePercent}%
            </div>
            <div style={{ fontSize: '0.80rem', color: '#94a3b8', marginTop: '4px', fontWeight: 600 }}>
              {checkedCount} of {totalCount} Controls Active
            </div>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 600 }}>
            Statutory Work Packages (6 Areas):
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={selectAll}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#e2e8f0',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              Select All (Show KS Status)
            </button>
            <button
              onClick={clearAll}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#94a3b8',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              Reset for My Audit
            </button>
          </div>
        </div>

        {/* Work Packages Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
          {WORK_PACKAGES.map((pkg) => {
            const pkgCheckedCount = pkg.items.filter(i => checkedItems[i.id]).length;
            const pkgTotal = pkg.items.length;
            const isAllChecked = pkgCheckedCount === pkgTotal;

            return (
              <div
                key={pkg.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: isAllChecked ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(255, 255, 255, 0.10)',
                  borderRadius: '12px',
                  padding: '24px',
                  transition: 'all 0.2s ease'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                    {pkg.title}
                  </h3>
                  <span style={{
                    fontSize: '0.76rem',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontWeight: 600,
                    background: isAllChecked ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                    color: isAllChecked ? '#10b981' : '#f59e0b'
                  }}>
                    {pkgCheckedCount} / {pkgTotal} Compliant
                  </span>
                </div>

                <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                  {pkg.description}
                </p>

                {/* Checklist Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.items.map((item) => {
                    const isChecked = !!checkedItems[item.id];
                    return (
                      <label
                        key={item.id}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          background: isChecked ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                          border: isChecked ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(255, 255, 255, 0.05)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleItem(item.id)}
                          style={{
                            marginTop: '3px',
                            accentColor: '#10b981',
                            width: '16px',
                            height: '16px',
                            cursor: 'pointer'
                          }}
                        />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: '0.86rem', color: isChecked ? '#e2e8f0' : '#94a3b8', lineHeight: 1.55 }}>
                            {item.text}
                          </span>
                        </div>
                        <span style={{
                          fontSize: '0.70rem',
                          color: '#ef4444',
                          background: 'rgba(239, 68, 68, 0.10)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          whiteSpace: 'nowrap',
                          fontWeight: 600
                        }}>
                          Penalty: {item.penalty}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Box */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(2, 132, 199, 0.12))',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '16px',
          padding: '32px',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '0 0 10px 0', fontWeight: 800 }}>
            Need an Official DPDP &amp; Technical Privacy Audit for Your Enterprise?
          </h3>
          <p style={{ maxWidth: '640px', margin: '0 auto 24px', fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6 }}>
            Our Chartered Engineers and certified compliance associates assist businesses across India in drafting statutory privacy registers, vendor DPAs, and establishing legally defensible data protection infrastructure.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('DPDP Privacy Audit & Compliance')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                padding: '12px 26px',
                borderRadius: '8px',
                fontSize: '0.90rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(245, 130, 32, 0.3)'
              }}
            >
              Request Privacy Advisory Consultation
            </button>
            <button
              onClick={() => window.print()}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '0.90rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Download size={15} />
              <span>Print / Save Audit Scorecard</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
