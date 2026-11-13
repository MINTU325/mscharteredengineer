import React, { useState } from 'react';
import { 
  Landmark, 
  Award, 
  TrendingUp, 
  Coins, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Sliders, 
  ShieldCheck, 
  Home, 
  Briefcase, 
  Layers, 
  Building2, 
  Clock, 
  FileCheck2, 
  BadgePercent,
  Calculator,
  Percent,
  CreditCard,
  MessageSquare,
  HelpCircle,
  PhoneCall,
  Check
} from 'lucide-react';

export default function BusinessLoansPage({ onOpenQuote, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ─── Interactive Loan & EMI Calculator State ───
  const [loanAmountLakhs, setLoanAmountLakhs] = useState(50); // In Lakhs
  const [interestRate, setInterestRate] = useState(9.5); // % p.a.
  const [tenureYears, setTenureYears] = useState(5); // Years

  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const principal = loanAmountLakhs * 100000;
  const monthlyRate = (interestRate / 12) / 100;
  const numberOfMonths = tenureYears * 12;
  
  const emi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1)
  );

  const totalAmountPayable = emi * numberOfMonths;
  const totalInterestPayableLakhs = ((totalAmountPayable - principal) / 100000).toFixed(2);

  const loanProducts = [
    {
      id: 'machinery-loan',
      category: 'machinery',
      title: 'Machinery & Equipment Loan / Funding',
      badge: 'Core CE Expertise',
      badgeColor: '#10b981',
      highlight: 'Upto 85% LTV on Plant & Machinery',
      desc: 'Specialized financing for purchasing new, imported, or refurbished industrial equipment, CNC lines, manufacturing apparatus, and testing tools essential for operations.',
      benefits: [
        'Financing up to 80%–85% of machinery invoice value (including customs duty)',
        'Chartered Engineer certified machinery appraisal & residual life report',
        'Repayment tenure up to 5 to 7 years with initial moratorium support',
        'Direct disbursement to machine manufacturers/importers with zero hassle'
      ],
      suitableFor: 'Manufacturing units, heavy industries, fabricators, and packaging units expanding capacity.'
    },
    {
      id: 'cgtmse-loan',
      category: 'collateral_free',
      title: 'CGTMSE Collateral-Free Business Loan',
      badge: 'Government Guarantee',
      badgeColor: '#38bdf8',
      highlight: 'Collateral-Free Credit Upto ₹5 Crores',
      desc: 'Institutional bank credit backed by the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE). Allows entrepreneurs to secure high-quantum capital without pledging land or property.',
      benefits: [
        'Zero collateral security or third-party guarantee required',
        'Credit limit up to ₹500 Lakhs (₹5 Crores) for eligible MSE enterprises',
        'Guarantee fee subsidized under state MSME promotion schemes',
        'Applicable for both Capex Term Loans and Working Capital requirements'
      ],
      suitableFor: 'Micro & Small manufacturing and service businesses with bankable cash flow projections.'
    },
    {
      id: 'term-loan',
      category: 'term_working',
      title: 'Industrial Term Loan for Capex Expansion',
      badge: 'Long-Term Capex',
      badgeColor: '#38bdf8',
      highlight: 'Structured Repayment Upto 10-15 Years',
      desc: 'Medium-to-long term credit facility provided by scheduled commercial banks for establishing greenfield industrial plants, factory civil sheds, and utility upgrades.',
      benefits: [
        'Customized disbursement schedules aligned with project milestone stages',
        'Chartered Engineer Techno-Economic Viability (TEV) study validation',
        'Grace / Moratorium period during factory construction and trial runs',
        'Competitive interest rates starting from 8.40% to 10.50% based on credit grade'
      ],
      suitableFor: 'Businesses undertaking expansion, new manufacturing plants, or modernizing factory civil infrastructure.'
    },
    {
      id: 'working-capital',
      category: 'term_working',
      title: 'Cash Credit (CC) & Overdraft (OD) Limits',
      badge: 'Liquidity & Cash Flow',
      badgeColor: '#f59e0b',
      highlight: 'Revolving Line Against Stock & Book Debts',
      desc: 'Revolving working capital facility to bridge day-to-day liquidity gaps, vendor payments, raw material inventory purchases, and payroll obligations.',
      benefits: [
        'Interest payable strictly on daily utilized amount, not entire sanctioned limit',
        'Drawing power calculation verified by monthly stock audits & CE certificates',
        'Seamless annual renewal with minimal documentation upon turnover review',
        'Can be combined with Bank Guarantee (BG) and Letter of Credit (LC) limits'
      ],
      suitableFor: 'Operating businesses with regular inventory turnover, debtor cycles, and seasonal working capital demand.'
    },
    {
      id: 'lap-secured',
      category: 'property_secured',
      title: 'Loan Against Property (LAP) / Mortgage Loan',
      badge: 'High Quantum Loan',
      badgeColor: '#10b981',
      highlight: 'Upto 70% of Property Fair Market Value',
      desc: 'High-value business financing obtained by hypothecating unencumbered residential, commercial, or industrial real estate assets as collateral security.',
      benefits: [
        'Substantially lower interest rates compared to unsecured business loans',
        'Extended repayment horizon up to 15 years reducing monthly EMI burden',
        'Dual valuation report (Fair Market Value + Realizable Value) by IBBI Registered Valuers',
        'Funds can be deployed flexibly for business growth, debt consolidation, or Capex'
      ],
      suitableFor: 'Business owners possessing commercial plots, factory land, or residential assets seeking long-term funding.'
    },
    {
      id: 'sidbi-schemes',
      category: 'collateral_free',
      title: 'SIDBI Direct Scheme & Green Financing',
      badge: 'Development Financial Inst.',
      badgeColor: '#10b981',
      highlight: 'Concessional Interest from 7.00% p.a.',
      desc: 'Low-cost direct funding from Small Industries Development Bank of India (SIDBI) for high-growth MSMEs, energy-efficient equipment, rooftop solar, and EV infrastructure.',
      benefits: [
        'Direct lending with minimal bureaucratic hurdles and subsidized interest',
        'SIDBI SPEED & 4E scheme for rapid machinery purchase within 48–72 hours',
        'Green finance subvention for energy-saving industrial equipment',
        'Chartered Engineer Energy Audit & TEV endorsement accepted directly'
      ],
      suitableFor: 'Growing MSMEs investing in energy-efficient technology, rooftop solar setups, or clean machinery.'
    }
  ];

  const filteredLoans = loanProducts.filter((loan) => {
    const matchCategory = selectedCategory === 'all' || loan.category === selectedCategory;
    const matchSearch =
      searchQuery === '' ||
      loan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loan.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div style={{ background: '#f8fafc', color: '#0f172a', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* ── Breadcrumb & Top Bar ── */}
      <div style={{ background: '#f8fafc', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#7a8296' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#0284c7', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0, fontSize: '0.85rem' }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#0f172a', fontWeight: 500 }}>Business Loans &amp; Project Financing</span>
          </div>

          <span style={{
            fontSize: '0.72rem',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            color: '#0284c7',
            padding: '3px 10px',
            borderRadius: '6px',
            fontWeight: 600
          }}>
            Bank Empanelled Chartered Engineers
          </span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '48px 20px 40px'
      }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '6px',
            padding: '4px 12px',
            color: '#0284c7',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.03em',
            marginBottom: '16px'
          }}>
            <Landmark size={14} />
            <span>COMMERCIAL, INDUSTRIAL &amp; MSME PROJECT FINANCING</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.9rem)',
            fontWeight: 600,
            lineHeight: 1.18,
            marginBottom: '16px',
            color: '#0f172a',
            letterSpacing: '-0.02em'
          }}>
            Business, Machinery &amp; <span style={{ color: '#0284c7' }}>Project Loans</span> <br />
            with <span style={{ color: '#10b981' }}>Chartered Engineer TEV &amp; DPR</span>
          </h1>

          <p style={{
            fontSize: '1.02rem',
            color: '#475569',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto 28px auto'
          }}>
            Fast-track your bank loan approvals with rigorous <strong>Techno-Economic Viability (TEV) studies</strong>, bank-approved plant &amp; machinery valuations, and institutional Detailed Project Reports (DPR).
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <button
              onClick={() => onOpenQuote('Business & Machinery Loans (DPR/TEV)')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Apply for Project / Business Loan</span>
              <ArrowRight size={16} />
            </button>

            <a
              href="#loan-calculator"
              style={{
                background: '#ffffff',
                color: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '8px',
                padding: '12px 22px',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Instant Loan EMI Calculator</span>
              <Calculator size={16} style={{ color: '#0284c7' }} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '12px',
            marginTop: '36px',
            paddingTop: '24px',
            borderTop: '1px solid #e2e8f0'
          }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#0284c7', marginBottom: '2px' }}>Upto ₹5 Cr</div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>Collateral-Free (CGTMSE)</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#10b981', marginBottom: '2px' }}>85% LTV</div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>Machinery &amp; Equipment Loan</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#f59e0b', marginBottom: '2px' }}>100% TEV Study</div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>Bankable DSCR &amp; Cash Flow</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '14px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#a855f7', marginBottom: '2px' }}>30+ Banks</div>
              <div style={{ fontSize: '0.78rem', color: '#475569' }}>Nationalized &amp; Private Empanelled</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Interactive Loan EMI & Eligibility Calculator Section ── */}
      <section id="loan-calculator" style={{ padding: '40px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          padding: '28px 24px'
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#0284c7' }}>
            <Calculator size={18} />
            <span style={{ fontSize: '0.80rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Loan Financial Simulator</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>
            Calculate Your Business Loan EMI &amp; Repayment
          </h2>
          <p style={{ fontSize: '0.90rem', color: '#475569', margin: '0 0 24px 0' }}>
            Simulate loan tenure, interest rates, and estimated monthly debt service to plan your project capital requirements.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'center' }}>
            
            {/* Sliders Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 500, color: '#cbd5e1' }}>
                    Required Loan Amount:
                  </label>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#0284c7' }}>₹{loanAmountLakhs} Lakhs</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={loanAmountLakhs}
                  onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#38bdf8', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#7a8296', marginTop: '2px' }}>
                  <span>₹5 Lakhs</span>
                  <span>₹2.5 Crores</span>
                  <span>₹5 Crores</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 500, color: '#cbd5e1' }}>
                    Expected Annual Interest Rate:
                  </label>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#10b981' }}>{interestRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="7.0"
                  max="16.0"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#10b981', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#7a8296', marginTop: '2px' }}>
                  <span>7.0% (SIDBI/Govt)</span>
                  <span>11.5%</span>
                  <span>16.0%</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <label style={{ fontSize: '0.84rem', fontWeight: 500, color: '#cbd5e1' }}>
                    Loan Repayment Tenure:
                  </label>
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#f59e0b' }}>{tenureYears} Years ({tenureYears * 12} Months)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#7a8296', marginTop: '2px' }}>
                  <span>1 Year</span>
                  <span>7 Years (Machinery)</span>
                  <span>15 Years (LAP)</span>
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div style={{ background: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#0f172a', borderRadius: '10px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ fontSize: '0.74rem', color: '#7a8296', textTransform: 'uppercase', fontWeight: 600 }}>
                  Estimated Monthly EMI:
                </div>
                <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 600, color: '#0284c7', lineHeight: 1.1, marginTop: '4px' }}>
                  ₹{emi.toLocaleString('en-IN')} <span style={{ fontSize: '0.85rem', fontWeight: 400, color: '#7a8296' }}>/ month</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569' }}>Total Interest Payable:</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>₹{totalInterestPayableLakhs} Lakhs</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#475569' }}>Total Repayment (P + I):</span>
                  <span style={{ fontWeight: 600, color: '#10b981' }}>₹{((totalAmountPayable) / 100000).toFixed(2)} Lakhs</span>
                </div>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#7a8296', lineHeight: 1.4 }}>
                *Indicative debt service estimation. Final loan terms determined by bank sanction letter and borrower DSCR assessment.
              </div>

              <button
                onClick={() => onOpenQuote(`Business Loan Inquiry (₹${loanAmountLakhs}L - ${tenureYears} Years @ ${interestRate}%)`)}
                style={{
                  background: '#F58220',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '10px 16px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>Apply for Sanction with DPR</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── Products Explorer & Filter Grid ── */}
      <section style={{ padding: '10px 20px 40px', maxWidth: '1120px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '0.80rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
              Products Directory
            </div>
            <h2 style={{ fontSize: '1.65rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
              Explore Business &amp; Commercial Loan Solutions
            </h2>
          </div>

          {/* Search Input Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search size={16} color="#7a8296" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product (Machinery, CGTMSE, LAP)..."
              style={{
                width: '100%',
                padding: '9px 12px 9px 36px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                background: '#ffffff',
                color: '#0f172a',
                fontSize: '0.90rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {[
            { id: 'all', label: 'All Products' },
            { id: 'machinery', label: 'Machinery & Capex' },
            { id: 'collateral_free', label: 'Collateral-Free (CGTMSE)' },
            { id: 'term_working', label: 'Term Loans & CC/OD' },
            { id: 'property_secured', label: 'Secured & LAP' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: selectedCategory === tab.id ? 600 : 500,
                border: selectedCategory === tab.id ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                cursor: 'pointer',
                background: selectedCategory === tab.id ? '#38bdf8' : '#11141c',
                color: selectedCategory === tab.id ? '#07080d' : '#a3a9b8',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '20px'
        }}>
          {filteredLoans.map((loan) => (
            <div
              key={loan.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.15s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: loan.badgeColor,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid #e2e8f0',
                    padding: '3px 8px',
                    borderRadius: '4px'
                  }}>
                    {loan.badge}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#7a8296' }}>Commercial Credit</span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', margin: '0 0 8px 0', lineHeight: 1.3 }}>
                  {loan.title}
                </h3>

                {/* Highlight pill */}
                <div style={{
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  color: '#0284c7',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Coins size={15} style={{ color: '#0284c7' }} />
                  <span>{loan.highlight}</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: '0 0 14px 0' }}>
                  {loan.desc}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '12px', marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 600, color: '#7a8296', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                    Key Lending Parameters:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {loan.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                        <Check size={14} style={{ color: '#10b981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: '8px 10px', background: '#f1f5f9', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.74rem', color: '#475569', marginBottom: '16px' }}>
                  <strong style={{ color: '#0f172a' }}>Best Suited For:</strong> {loan.suitableFor}
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(`Business Loan Inquiry: ${loan.title}`)}
                style={{
                  width: '100%',
                  background: '#f1f5f9',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#0f172a',
                  borderRadius: '6px',
                  padding: '9px 14px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  transition: 'background 0.15s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#232938';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1a1e28';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <span>Check Eligibility &amp; Apply</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </section>

      {/* ── Why Banks Require Chartered Engineer TEV & Valuation Reports ── */}
      <section style={{ padding: '32px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '32px 24px'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Institutional Lending Protocol
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 600, color: '#0f172a', margin: '8px 0 8px 0' }}>
              Why Banks Mandate Chartered Engineer TEV &amp; Valuation
            </h2>
            <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              Under RBI credit guidelines, scheduled banks require an independent technical appraisal before sanctioning multi-crore industrial credit facilities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '20px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <TrendingUp size={24} style={{ color: '#0284c7', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>DSCR &amp; Cash Flow Assessment</h3>
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Rigorous Debt Service Coverage Ratio (DSCR), Break-Even Point (BEP), and Internal Rate of Return (IRR) calculations required by bank credit committees.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <FileCheck2 size={24} style={{ color: '#10b981', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>Machinery Valuation (FMV &amp; FSV)</h3>
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Physical appraisal of imported &amp; indigenous machinery, determining Fair Market Value (FMV) and Forced Sale Value (FSV) for loan security charge.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <ShieldCheck size={24} style={{ color: '#a855f7', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>Civil Works &amp; Cost Vetting</h3>
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Vetting of factory shed civil estimates, BOQ items, and architect plans to ensure loan drawdowns match ground progress without fund diversion.
              </p>
            </div>

            <div style={{ padding: '20px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
              <Landmark size={24} style={{ color: '#f59e0b', marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>Consortium Bank Presentation</h3>
              <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Direct technical presentation to Lead Banks and NBFC risk teams, resolving technical queries with certified engineering credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing Consultation Card ── */}
      <section style={{ padding: '10px 20px 20px', maxWidth: '1120px', margin: '0 auto' }}>
        <div style={{
          background: '#f8fafc',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          padding: '32px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#0284c7', fontWeight: 600, marginBottom: '6px' }}>
              Project Financing Consultation
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0f172a', margin: '0 0 8px 0' }}>
              Planning an Industrial Project or Machinery Loan?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.92rem', margin: 0, maxWidth: '640px', lineHeight: 1.6 }}>
              Speak directly with Er. Mukesh Singh and our institutional banking advisory desk. We prepare bank-approved Detailed Project Reports (DPR) and TEV studies accepted by all major commercial lenders.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={() => onOpenQuote('Business Loan & TEV Advisory')}
              style={{
                background: '#F58220',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Request Project Appraisal
            </button>
            <a
              href="https://wa.me/919158658885?text=Hello%20Er.%20Mukesh%20Singh,%20I%20need%20a%20Chartered%20Engineer%20TEV%20/%20DPR%20report%20for%20a%20business%20loan."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#f1f5f9',
                color: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '12px 20px',
                fontSize: '0.95rem',
                fontWeight: 500,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <MessageSquare size={16} style={{ color: '#10b981' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
