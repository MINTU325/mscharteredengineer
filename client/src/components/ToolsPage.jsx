import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ChevronRight, Calculator, Zap, 
  ShieldCheck, PhoneCall, MessageSquare, 
  HelpCircle, CheckCircle2, ArrowRight, Gauge, 
  Cpu, FileCheck, Award, Layers
} from 'lucide-react';
import ValuationCalculator from './ValuationCalculator';
import ComplianceChecker from './ComplianceChecker';

export default function ToolsPage({ onOpenQuote, onNavigateHome, currentRoute = '/tools' }) {
  const [activeTab, setActiveTab] = useState(() => {
    if (currentRoute === '/solar-checker') return 'solar';
    if (currentRoute === '/calculator' || currentRoute === '/valuation-calculator') return 'calculator';
    return 'all';
  });

  useEffect(() => {
    if (currentRoute === '/solar-checker') {
      setActiveTab('solar');
      const el = document.getElementById('solar-checker');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (currentRoute === '/calculator' || currentRoute === '/valuation-calculator') {
      setActiveTab('calculator');
      const el = document.getElementById('calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [currentRoute]);

  return (
    <div 
      className="tools-page" 
      style={{ 
        background: '#0b0d14', 
        minHeight: '100vh', 
        paddingTop: '20px', 
        paddingBottom: '60px', 
        color: '#eef0f5' 
      }}
    >
      <div className="container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Top Breadcrumb & Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '12px 0 20px',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#11141c',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              padding: '6px 14px',
              color: '#a3a9b8',
              fontSize: '0.85rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#eef0f5';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.24)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#a3a9b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </button>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#7a8296' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#a3a9b8', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#eef0f5', fontWeight: 500 }}>Interactive Engineering Tools</span>
          </div>
        </div>

        {/* Dedicated Hero Header Banner */}
        <div style={{
          background: '#07080d',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '36px 32px',
          marginBottom: '32px',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '860px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '6px',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              marginBottom: '16px'
            }}>
              <Calculator size={13} />
              <span>STATUTORY ESTIMATORS &amp; REGULATORY ENGINES</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
              fontWeight: 600,
              lineHeight: 1.18,
              marginBottom: '14px',
              color: '#eef0f5',
              letterSpacing: '-0.02em'
            }}>
              Interactive Engineering &amp;{' '}
              <span style={{ color: '#38bdf8' }}>
                Valuation Tools
              </span>
            </h1>

            <p style={{
              fontSize: '1.02rem',
              color: '#a3a9b8',
              lineHeight: 1.65,
              marginBottom: '24px'
            }}>
              Instant online calculators formulated by <strong>Er. Mukesh Singh (IIT Roorkee, Corporate Member IEI)</strong>. Estimate industrial machinery depreciation under Companies Act 2013 / IndAS 16 or evaluate statutory CEIG solar power drawing clearance requirements with live algorithmic precision.
            </p>

            {/* 4 Feature Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px',
              marginBottom: '26px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                fontSize: '0.80rem',
                color: '#cbd5e1'
              }}>
                <Gauge size={15} style={{ color: '#38bdf8' }} />
                <span>Instant SLM / WDV RUL</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                fontSize: '0.80rem',
                color: '#cbd5e1'
              }}>
                <Cpu size={15} style={{ color: '#f59e0b' }} />
                <span>Companies Act 2013</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                fontSize: '0.80rem',
                color: '#cbd5e1'
              }}>
                <Zap size={15} style={{ color: '#38bdf8' }} />
                <span>CEIG 2023 Matrix</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                background: '#11141c',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                fontSize: '0.80rem',
                color: '#cbd5e1'
              }}>
                <Award size={15} style={{ color: '#10b981' }} />
                <span>IIT Roorkee Attested</span>
              </div>
            </div>

            {/* Dynamic Tool Selection Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <button
                onClick={() => setActiveTab('all')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: activeTab === 'all' ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  background: activeTab === 'all' ? '#38bdf8' : '#11141c',
                  border: `1px solid ${activeTab === 'all' ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: activeTab === 'all' ? '#07080d' : '#a3a9b8'
                }}
              >
                <Layers size={14} />
                <span>All Tools (2)</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('calculator');
                  const el = document.getElementById('calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: activeTab === 'calculator' ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  background: activeTab === 'calculator' ? '#38bdf8' : '#11141c',
                  border: `1px solid ${activeTab === 'calculator' ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: activeTab === 'calculator' ? '#07080d' : '#a3a9b8'
                }}
              >
                <Calculator size={14} />
                <span>1. Machinery Valuation Calculator</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('solar');
                  const el = document.getElementById('solar-checker');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: activeTab === 'solar' ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  background: activeTab === 'solar' ? '#38bdf8' : '#11141c',
                  border: `1px solid ${activeTab === 'solar' ? '#38bdf8' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: activeTab === 'solar' ? '#07080d' : '#a3a9b8'
                }}
              >
                <Zap size={14} />
                <span>2. CEIG Solar Compliance Checker</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Tool 1: Plant & Machinery Valuation Calculator (Dark Mode) ── */}
        {(activeTab === 'all' || activeTab === 'calculator') && (
          <div style={{ marginBottom: '32px' }}>
            <ValuationCalculator onOpenQuote={onOpenQuote} lightMode={false} />
          </div>
        )}

        {/* ── Tool 2: CEIG Solar Compliance Checker (Dark Mode) ── */}
        {(activeTab === 'all' || activeTab === 'solar') && (
          <div style={{ marginBottom: '32px' }}>
            <ComplianceChecker onOpenQuote={onOpenQuote} lightMode={false} />
          </div>
        )}

        {/* ── Bottom Purpose Selector Prompt ── */}
        <div style={{
          background: '#07080d',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '32px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          color: '#eef0f5'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#38bdf8',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '6px'
            }}>
              <ShieldCheck size={14} />
              <span>Official Statutory Certification</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#eef0f5', fontWeight: 600, margin: '0 0 6px 0', lineHeight: 1.35 }}>
              These online tools provide initial estimations. Ready for an authorized report?
            </h3>
            <p style={{ color: '#a3a9b8', fontSize: '0.90rem', margin: 0, lineHeight: 1.55 }}>
              Get an official Chartered Engineer certificate, bank-accepted valuation report, or CEIG drawing approval attested by Corporate Member MIE of IEI.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Tools Inquiry')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Request Formal Valuation &rarr;
            </button>
            <a
              href="/purpose-selector"
              style={{
                background: '#1a1e28',
                color: '#eef0f5',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '8px',
                padding: '10px 18px',
                fontSize: '0.92rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              Purpose Selector
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
