import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ChevronRight, Calculator, Zap, 
  Sparkles, ShieldCheck, PhoneCall, MessageSquare, 
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
      className="tools-page tools-page-light" 
      style={{ 
        background: 'radial-gradient(circle at 10% 8%, rgba(217, 119, 6, 0.06) 0%, transparent 40%), radial-gradient(circle at 90% 25%, rgba(180, 83, 9, 0.05) 0%, transparent 45%), linear-gradient(180deg, #F4F0E8 0%, #FAF8F5 45%, #F4F0E8 100%)', 
        minHeight: '100vh', 
        paddingTop: '24px', 
        paddingBottom: '36px', 
        color: '#0f172a' 
      }}
    >
      <div className="container">
        {/* Top Breadcrumb & Navigation Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          padding: '16px 0',
          marginBottom: '20px',
          borderBottom: '1px solid #E8E2D8'
        }}>
          <button
            onClick={onNavigateHome}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #E8E2D8',
              borderRadius: '9999px',
              padding: '8px 18px',
              color: '#1e293b',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.color = '#1d4ed8';
              e.currentTarget.style.transform = 'translateX(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E8E2D8';
              e.currentTarget.style.color = '#1e293b';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <ArrowLeft size={16} />
            <span>&larr; Back to Home</span>
          </button>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#64748b' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigateHome(); }} style={{ color: '#475569', textDecoration: 'none' }}>Home</a>
            <ChevronRight size={14} />
            <span style={{ color: '#1d4ed8', fontWeight: 700 }}>Interactive Engineering Tools</span>
          </div>
        </div>

        {/* Dynamic Light Hero Header Banner */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #E8E2D8',
          borderRadius: '24px',
          padding: 'clamp(28px, 4vw, 44px) clamp(20px, 3.5vw, 40px)',
          marginBottom: '36px',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 12px 36px rgba(15, 23, 42, 0.05)'
        }}>
          {/* Subtle Ambient Background Accents */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '240px',
            height: '240px',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '860px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '9999px',
              color: '#1d4ed8',
              fontSize: '0.80rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '16px'
            }}>
              <Sparkles size={14} />
              <span>STATUTORY ESTIMATORS &amp; REGULATORY ENGINES</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.22,
              marginBottom: '14px',
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}>
              Interactive Engineering &amp;{' '}
              <span style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #0284c7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Valuation Tools
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '26px'
            }}>
              Instant online calculators formulated by <strong>Er. Mukesh Singh (IIT Roorkee, Corporate Member IEI)</strong>. Estimate industrial machinery depreciation under Companies Act 2013 / IndAS 16 or evaluate statutory CEIG solar power drawing clearance requirements with live algorithmic precision.
            </p>

            {/* 4 Interactive Feature Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              marginBottom: '28px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: '#FAF8F5',
                border: '1px solid #E8E2D8',
                borderRadius: '12px',
                fontSize: '0.82rem',
                color: '#1e293b',
                fontWeight: 600
              }}>
                <Gauge size={16} color="#2563eb" />
                <span>Instant SLM / WDV RUL</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: '#FAF8F5',
                border: '1px solid #E8E2D8',
                borderRadius: '12px',
                fontSize: '0.82rem',
                color: '#1e293b',
                fontWeight: 600
              }}>
                <Cpu size={16} color="#d97706" />
                <span>Companies Act 2013</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: '#FAF8F5',
                border: '1px solid #E8E2D8',
                borderRadius: '12px',
                fontSize: '0.82rem',
                color: '#1e293b',
                fontWeight: 600
              }}>
                <Zap size={16} color="#0284c7" />
                <span>CEIG 2023 Matrix</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                background: '#FAF8F5',
                border: '1px solid #E8E2D8',
                borderRadius: '12px',
                fontSize: '0.82rem',
                color: '#1e293b',
                fontWeight: 600
              }}>
                <Award size={16} color="#15803d" />
                <span>IIT Roorkee Attested</span>
              </div>
            </div>

            {/* Dynamic Tool Selection Tabs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <button
                onClick={() => setActiveTab('all')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'all' ? 'linear-gradient(135deg, #1e40af, #2563eb)' : '#ffffff',
                  border: `1px solid ${activeTab === 'all' ? '#1d4ed8' : '#E8E2D8'}`,
                  color: activeTab === 'all' ? '#ffffff' : '#334155',
                  boxShadow: activeTab === 'all' ? '0 4px 14px rgba(37, 99, 235, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.03)'
                }}
              >
                <Layers size={16} />
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
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'calculator' ? 'linear-gradient(135deg, #1e40af, #2563eb)' : '#ffffff',
                  border: `1px solid ${activeTab === 'calculator' ? '#1d4ed8' : '#E8E2D8'}`,
                  color: activeTab === 'calculator' ? '#ffffff' : '#334155',
                  boxShadow: activeTab === 'calculator' ? '0 4px 14px rgba(37, 99, 235, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.03)'
                }}
              >
                <Calculator size={16} color={activeTab === 'calculator' ? '#fbbf24' : '#d97706'} />
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
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: activeTab === 'solar' ? 'linear-gradient(135deg, #1e40af, #2563eb)' : '#ffffff',
                  border: `1px solid ${activeTab === 'solar' ? '#1d4ed8' : '#E8E2D8'}`,
                  color: activeTab === 'solar' ? '#ffffff' : '#334155',
                  boxShadow: activeTab === 'solar' ? '0 4px 14px rgba(37, 99, 235, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.03)'
                }}
              >
                <Zap size={16} color={activeTab === 'solar' ? '#ffffff' : '#0284c7'} />
                <span>2. CEIG Solar Compliance Checker</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Tool 1: Plant & Machinery Valuation Calculator (Light Mode) ── */}
        {(activeTab === 'all' || activeTab === 'calculator') && (
          <div style={{ marginBottom: '40px' }}>
            <ValuationCalculator onOpenQuote={onOpenQuote} lightMode={true} />
          </div>
        )}

        {/* ── Tool 2: CEIG Solar Compliance Checker (Light Mode) ── */}
        {(activeTab === 'all' || activeTab === 'solar') && (
          <div style={{ marginBottom: '40px' }}>
            <ComplianceChecker onOpenQuote={onOpenQuote} lightMode={true} />
          </div>
        )}

        {/* ── Bottom Purpose Selector Prompt (Modern Slate/Blue Banner) ── */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
          borderRadius: '20px',
          padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 12px 32px rgba(15, 23, 42, 0.15)',
          color: '#ffffff'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#fbbf24',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '8px'
            }}>
              <ShieldCheck size={14} />
              <span>Need Official Statutory Certification?</span>
            </div>
            <h3 style={{ fontSize: '1.28rem', color: '#ffffff', fontWeight: 800, marginBottom: '6px', lineHeight: 1.35 }}>
              These online tools provide initial estimations. Ready for an authorized report?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.90rem', margin: 0, lineHeight: 1.55 }}>
              Get an official Chartered Engineer certificate, bank-accepted valuation report, or CEIG drawing approval attested by Corporate Member MIE of IEI.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Tools Inquiry')}
              className="btn btn-gold"
              style={{ padding: '12px 24px', fontSize: '0.92rem', borderRadius: '12px' }}
            >
              Request Formal Valuation &rarr;
            </button>
            <a
              href="/purpose-selector"
              className="btn btn-outline"
              style={{ padding: '12px 22px', fontSize: '0.92rem', borderColor: 'rgba(255, 255, 255, 0.25)', color: '#ffffff', borderRadius: '12px' }}
            >
              Purpose Selector
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
