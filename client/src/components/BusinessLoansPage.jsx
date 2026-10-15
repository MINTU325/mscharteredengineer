import React, { useState } from 'react';
import { 
  Landmark, 
  Sparkles, 
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
  PhoneCall
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
      badgeColor: '#059669',
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
      badgeColor: '#2563eb',
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
      badgeColor: '#0284c7',
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
      title: 'Working Capital Limit (Cash Credit / CC)',
      badge: 'Daily Liquidity',
      badgeColor: '#d97706',
      highlight: 'Revolving Line Against Stock & Debtors',
      desc: 'Essential financial lifeline enabling manufacturers and traders to bridge cash gaps between raw material procurement, factory production, and sales collection.',
      benefits: [
        'Flexible borrowing against hypothecation of inventory and book debts',
        'Interest calculated strictly on daily utilized amount, not on the total sanctioned limit',
        'Annual renewal with credit limit enhancement based on audited financial turnover',
        'Quarterly stock and asset valuation audits certified by Chartered Engineers'
      ],
      suitableFor: 'Industrial manufacturers, wholesalers, fabricators, and EPC contractors managing operational cycles.'
    },
    {
      id: 'mudra-loan',
      category: 'collateral_free',
      title: 'Mudra Loan (Pradhan Mantri Mudra Yojana - PMMY)',
      badge: 'Micro Enterprise',
      badgeColor: '#7c3aed',
      highlight: 'Zero Collateral Upto ₹10L - ₹20L',
      desc: 'Central government credit facility catering to micro-enterprises across three categories: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakhs), and Tarun (₹5 Lakhs to ₹10 Lakhs / ₹20 Lakhs).',
      benefits: [
        'Zero tangible collateral or margin requirement for micro-entrepreneurs',
        'Mudra RuPay Card issued for instant working capital withdrawals',
        'Concessional interest rate structures with nominal processing fees',
        'Available across all public sector banks, private banks, and RRBs'
      ],
      suitableFor: 'Small workshops, artisan units, service businesses, repair hubs, and retail enterprises.'
    },
    {
      id: 'pmegp-loan',
      category: 'collateral_free',
      title: 'PMEGP Credit-Linked Bank Loan',
      badge: 'Subsidy Bundled Loan',
      badgeColor: '#059669',
      highlight: 'Term Loan with Upto 35% Capital Subsidy',
      desc: 'Flagship credit-linked term loan bundled with direct margin money capital subsidy from KVIC, significantly reducing the net borrowing liability of new entrepreneurs.',
      benefits: [
        'Project cost up to ₹50 Lakhs for manufacturing units; ₹20 Lakhs for services',
        'Government subsidy of 15%–35% credited directly into beneficiary bank account',
        'Own contribution limited to just 5%–10% of total project cost',
        'Requires certified Detailed Project Report (DPR) prepared by technical engineers'
      ],
      suitableFor: 'First-generation entrepreneurs, rural artisans, and micro-manufacturers starting new ventures.'
    },
    {
      id: 'lap-secured',
      category: 'property_secured',
      title: 'Loan Against Property (LAP - Industrial / Commercial)',
      badge: 'High-Ticket Secured',
      badgeColor: '#b45309',
      highlight: 'Funding Upto ₹10+ Crores Against Property',
      desc: 'Secured credit facility where you pledge residential, commercial, or industrial factory land and sheds to unlock liquidity for business expansion or debt consolidation.',
      benefits: [
        'Long repayment tenures up to 15 years resulting in highly affordable monthly EMIs',
        'Substantially lower interest rates compared to unsecured business loans',
        'Valuation appraisal conducted by our bank-empanelled registered valuers',
        'High Loan-to-Value (LTV) ratio up to 65%–75% of fair market property value'
      ],
      suitableFor: 'Industrialists and property owners seeking substantial capital infusion for business scale-up.'
    },
    {
      id: 'gst-business-loan',
      category: 'collateral_free',
      title: 'GST-Linked Business Loan (Turnover Based)',
      badge: 'Fintech Express',
      badgeColor: '#8b5cf6',
      highlight: 'Instant Sanction on GSTR-3B Filings',
      desc: 'Modern digital credit product assessing business eligibility strictly on 12-month GST turnover rather than requiring years of heavy audited financial statements.',
      benefits: [
        'Paperless digital underwriting with sanction in 48 to 72 hours',
        'Loan amount calculated as a percentage of your verifiable GST monthly sales',
        'No physical collateral required for loans up to ₹50 Lakhs - ₹1 Crore',
        'Flexible monthly or daily repayment tenures aligned with sales cycles'
      ],
      suitableFor: 'GST-registered MSMEs, distributors, suppliers, and service firms seeking speedy capital.'
    },
    {
      id: 'overdraft-facility',
      category: 'term_working',
      title: 'Overdraft (OD) Limit & Trade Credit',
      badge: 'Buffer Liquidity',
      badgeColor: '#d97706',
      highlight: 'Pre-Approved Credit Buffer for Emergencies',
      desc: 'Flexible credit facility attached to your current account, allowing withdrawals beyond your available balance up to a pre-approved ceiling.',
      benefits: [
        'No interest charged when credit facility is unutilized',
        'Seamless deposit and withdrawal without repeated loan application steps',
        'Can be secured against property, fixed deposits, or commercial receivables',
        'Ideal for handling seasonal raw material spikes or unexpected commercial payments'
      ],
      suitableFor: 'Traders, manufacturers, and corporate businesses managing volatile cash flows.'
    },
    {
      id: 'startup-fund-loan',
      category: 'collateral_free',
      title: 'Startup India Debt & Venture Credit Facility',
      badge: 'Startup Credit',
      badgeColor: '#2563eb',
      highlight: 'Venture Debt & Credit Guarantee for Startups',
      desc: 'Specialized credit window supported by the Credit Guarantee Scheme for Startups (CGSS), providing debt funding to recognized innovative ventures.',
      benefits: [
        'Credit guarantee cover up to ₹10 Crores per startup borrower',
        'Non-dilutive capital option preserving founder equity during early scale-up',
        'Compatible with both Working Capital and Capex financing',
        'Requires DPIIT startup recognition certificate and techno-commercial pitch review'
      ],
      suitableFor: 'DPIIT recognized tech startups, hardware innovators, and scalable commercial ventures.'
    },
    {
      id: 'secured-business-loan',
      category: 'property_secured',
      title: 'Secured Commercial Loan for Manufacturing Units',
      badge: 'Industrial Scale',
      badgeColor: '#059669',
      highlight: 'Multi-Crore Project Finance Facility',
      desc: 'Comprehensive project debt structuring for large manufacturing enterprises, backed by mortgage of factory land, sheds, and installed machinery.',
      benefits: [
        'High ticket size from ₹1 Crore to ₹50+ Crores based on asset valuation',
        'Consortium and single-bank syndicated lending capabilities',
        'End-to-end Chartered Engineer TEV validation, sensitivity, and DSCR analysis',
        'Attractive institutional pricing with interest rates pegged to RBI repo rate'
      ],
      suitableFor: 'Large industrial plants, steel & cement processors, chemical units, and export houses.'
    },
    {
      id: 'unsecured-business-loan',
      category: 'collateral_free',
      title: 'Unsecured Business Loan (Fast-Track)',
      badge: 'Zero Collateral',
      badgeColor: '#d97706',
      highlight: 'Fast Sanction Upto ₹75 Lakhs in 3-5 Days',
      desc: 'Fast-track short-to-medium term business funding disbursed purely based on business vintage, annual ITR returns, and bank statement analysis.',
      benefits: [
        '100% collateral-free with minimal physical documentation',
        'Sanction and disbursement within 3 to 5 business working days',
        'Tenures ranging from 12 months to 48 months with fixed monthly EMIs',
        'Helps preserve property collateral for future large-scale term expansions'
      ],
      suitableFor: 'Service providers, retailers, suppliers, and MSMEs needing immediate operational capital.'
    },
    {
      id: 'las-securities',
      category: 'property_secured',
      title: 'Loan Against Securities (Shares, Mutual Funds & Bonds)',
      badge: 'Liquid Asset Credit',
      badgeColor: '#0284c7',
      highlight: 'Instant Line of Credit Without Selling Portfolio',
      desc: 'Pledge your equity shares, mutual fund units, sovereign gold bonds, or insurance policies to unlock fast liquidity while continuing to earn dividends and capital gains.',
      benefits: [
        'Retain ownership and market upside on your equity and mutual fund investments',
        'Substantially lower interest rates compared to unsecured personal or business loans',
        'Instant digital pledge and overdraft sanction within 24 hours',
        'Interest charged only on the exact amount utilized'
      ],
      suitableFor: 'Business owners and directors seeking immediate liquidity without breaking long-term wealth.'
    },
    {
      id: 'loan-against-fd',
      category: 'property_secured',
      title: 'Loan / Overdraft Against Fixed Deposit (FD)',
      badge: 'Guaranteed Approval',
      badgeColor: '#10b981',
      highlight: 'Upto 90%-95% FD Value at Lowest ROI',
      desc: 'Fastest and cheapest credit facility where your term deposit serves as collateral, providing liquid cash without incurring premature FD liquidation penalties.',
      benefits: [
        'Interest rate typically just 1%–2% above your underlying Fixed Deposit rate',
        'Zero processing charges or complex financial documentation checks',
        'Instant liquidity without breaking high-interest earning term deposits',
        'Repayment flexibility with bullet repayment or revolving overdraft options'
      ],
      suitableFor: 'Entrepreneurs and companies holding idle bank term deposits looking for short-term working funds.'
    }
  ];

  const filteredLoans = loanProducts.filter(loan => {
    const matchesCategory = selectedCategory === 'all' || loan.category === selectedCategory;
    const matchesSearch = loan.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loan.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          loan.highlight.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="business-loans-page" style={{ background: '#FAF8F5', minHeight: '100vh', paddingBottom: '70px', color: '#0F172A' }}>
      
      {/* ── Breadcrumb & Top Bar ── */}
      <div style={{ background: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#94A3B8' }}>
            <button 
              onClick={onNavigateHome}
              style={{ background: 'none', border: 'none', color: '#38BDF8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', padding: 0 }}
            >
              <Home size={14} /> Home
            </button>
            <span>/</span>
            <span style={{ color: '#F8FAFC', fontWeight: 600 }}>Business &amp; Machinery Project Loans</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.74rem', background: '#0284C7', color: '#FFFFFF', padding: '3px 10px', borderRadius: '9999px', fontWeight: 700 }}>
              Bank Empanelled Chartered Engineers
            </span>
          </div>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(2, 132, 199, 0.15) 0%, transparent 45%), radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), linear-gradient(135deg, #070E1E 0%, #08203E 100%)',
        color: '#FFFFFF',
        padding: '65px 0 55px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '9999px',
            padding: '6px 16px',
            color: '#38BDF8',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            marginBottom: '18px'
          }}>
            <Landmark size={15} />
            <span>COMMERCIAL, INDUSTRIAL &amp; MSME PROJECT FINANCING</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '18px',
            color: '#F8FAFC'
          }}>
            Business, Machinery &amp; <span style={{ color: '#38BDF8' }}>Project Loans</span> <br />
            with <span style={{ color: '#10B981' }}>Chartered Engineer TEV &amp; DPR</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.12rem)',
            color: '#CBD5E1',
            lineHeight: 1.65,
            maxWidth: '740px',
            margin: '0 auto 28px auto'
          }}>
            Fast-track your bank loan approvals with rigorous <strong>Techno-Economic Viability (TEV) studies</strong>, bank-approved plant &amp; machinery valuations, and institutional Detailed Project Reports (DPR).
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={() => onOpenQuote('Business & Machinery Loans (DPR/TEV)')}
              style={{
                background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                fontSize: '0.98rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(2, 132, 199, 0.4)'
              }}
            >
              <span>Apply for Project / Business Loan</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#loan-calculator"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#F8FAFC',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '14px 24px',
                fontSize: '0.98rem',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Instant Loan EMI Calculator</span>
              <Calculator size={18} />
            </a>
          </div>

          {/* Quick Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '44px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38BDF8' }}>Upto ₹5 Cr</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Collateral-Free (CGTMSE)</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10B981' }}>85% LTV</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Machinery &amp; Equipment Loan</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#F59E0B' }}>100% TEV Study</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Bankable DSCR &amp; Cash Flow</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#A855F7' }}>30+ Banks</div>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Nationalized &amp; Private Empanelled</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Interactive Loan EMI & Eligibility Calculator Section ── */}
      <section id="loan-calculator" style={{ padding: '50px 0', background: '#F1ECE1', borderBottom: '1px solid #E2D9C8' }}>
        <div className="container">
          <div style={{ maxWidth: '880px', margin: '0 auto', background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #0284C7', padding: ' clamp(24px, 4vw, 36px)', boxShadow: '0 12px 30px rgba(2, 132, 199, 0.08)' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#0284C7' }}>
              <Calculator size={20} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Loan Financial Simulator</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
              Calculate Your Business Loan EMI &amp; Repayment
            </h2>
            <p style={{ fontSize: '0.90rem', color: '#475569', marginBottom: '24px' }}>
              Simulate loan tenure, interest rates, and estimated monthly debt service to plan your project capital requirements.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
              
              {/* Sliders Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>
                      Required Loan Amount:
                    </label>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0284C7' }}>₹{loanAmountLakhs} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={loanAmountLakhs}
                    onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#0284C7', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    <span>₹5 Lakhs</span>
                    <span>₹2.5 Crores</span>
                    <span>₹5 Crores</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>
                      Interest Rate (% p.a.):
                    </label>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#059669' }}>{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="8.0"
                    max="16.0"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#059669', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    <span>8.0% (Prime)</span>
                    <span>11.5%</span>
                    <span>16.0% (Unsecured)</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <label style={{ fontSize: '0.84rem', fontWeight: 700, color: '#1E293B' }}>
                      Repayment Tenure:
                    </label>
                    <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#D97706' }}>{tenureYears} Years ({numberOfMonths} Months)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#D97706', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>
                    <span>1 Year</span>
                    <span>7 Years (Machinery)</span>
                    <span>15 Years (LAP)</span>
                  </div>
                </div>
              </div>

              {/* Calculated Result Card */}
              <div style={{ background: '#0F172A', color: '#FFFFFF', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>
                    Estimated Monthly EMI:
                  </div>
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#38BDF8', lineHeight: 1.1, marginTop: '4px' }}>
                    ₹{emi.toLocaleString('en-IN')} <span style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: 600 }}>/ month</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: '#94A3B8' }}>Total Interest Payable:</span>
                  <span style={{ fontWeight: 800, color: '#F59E0B' }}>₹{totalInterestPayableLakhs} Lakhs</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem' }}>
                  <span style={{ color: '#94A3B8' }}>Total Repayment:</span>
                  <span style={{ fontWeight: 800, color: '#34D399' }}>₹{(totalAmountPayable / 100000).toFixed(2)} Lakhs</span>
                </div>

                <div style={{ fontSize: '0.72rem', color: '#94A3B8', lineHeight: 1.4 }}>
                  *Actual sanctions depend on bank credit appraisal, CIBIL score, and Chartered Engineer TEV validation.
                </div>

                <button
                  onClick={() => onOpenQuote(`Business Loan Inquiry (₹${loanAmountLakhs}L - ${tenureYears} Yrs @ ${interestRate}%)`)}
                  style={{
                    background: '#0284C7',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Apply with Bankable DPR / TEV</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── Loan Products Explorer Grid ── */}
      <section style={{ padding: '60px 0 40px 0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 32px auto' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: '8px'
            }}>
              Explore Comprehensive <span style={{ color: '#0284C7' }}>Project Loan Products</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
              Whether you need plant machinery funding, collateral-free MSME credit, or high-value loans against commercial property.
            </p>

            {/* Search Input Bar */}
            <div style={{ position: 'relative', maxWidth: '480px', margin: '20px auto 16px auto' }}>
              <Search size={18} color="#64748B" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search loan (e.g. Machinery, CGTMSE, LAP, Term Loan, Mudra)..."
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: '9999px',
                  border: '1.5px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontSize: '0.90rem',
                  outline: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Products (14+)' },
                { id: 'machinery', label: '⚙️ Machinery & Capex' },
                { id: 'collateral_free', label: '🛡️ Collateral-Free (CGTMSE)' },
                { id: 'term_working', label: '🔄 Term Loans & CC/OD' },
                { id: 'property_secured', label: '🏢 Secured & LAP' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid',
                    cursor: 'pointer',
                    background: selectedCategory === tab.id ? '#0284C7' : '#FFFFFF',
                    color: selectedCategory === tab.id ? '#FFFFFF' : '#475569',
                    borderColor: selectedCategory === tab.id ? '#0284C7' : '#CBD5E1',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedCategory === tab.id ? '0 4px 12px rgba(2, 132, 199, 0.25)' : 'none'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '22px'
          }}>
            {filteredLoans.map((loan) => (
              <div
                key={loan.id}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E8E2D8',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.22s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: loan.badgeColor,
                      background: `${loan.badgeColor}15`,
                      border: `1px solid ${loan.badgeColor}35`,
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      {loan.badge}
                    </span>
                    <span style={{ fontSize: '0.70rem', color: '#64748B', fontWeight: 600 }}>Commercial Credit</span>
                  </div>

                  <h3 style={{ fontSize: '1.20rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', lineHeight: 1.3 }}>
                    {loan.title}
                  </h3>

                  {/* Highlight pill */}
                  <div style={{
                    background: '#F0F9FF',
                    border: '1px solid #BAE6FD',
                    color: '#0369A1',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Coins size={16} color="#0284C7" />
                    <span>{loan.highlight}</span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, marginBottom: '14px' }}>
                    {loan.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #F1ECE1', paddingTop: '12px', marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.76rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                      Key Features &amp; Terms:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {loan.benefits.map((b, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.82rem', color: '#334155' }}>
                          <CheckCircle2 size={14} color="#0284C7" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ padding: '8px 10px', background: '#FAF8F5', borderRadius: '6px', border: '1px solid #E8E2D8', fontSize: '0.74rem', color: '#64748B', marginBottom: '16px' }}>
                    <strong>Suitable For:</strong> {loan.suitableFor}
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote(`Business Loan Inquiry: ${loan.title}`)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Apply with DPR &amp; Valuation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Why Chartered Engineer Attestation Matters for Bank Loans ── */}
      <section style={{ padding: '50px 0', background: '#FFFFFF', borderTop: '1px solid #E8E2D8', borderBottom: '1px solid #E8E2D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0284C7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Institutional Banking Governance
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
              Why Banks Require a <span style={{ color: '#0284C7' }}>Chartered Engineer &amp; Valuer</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6, marginTop: '6px' }}>
              Bank credit managers and underwriters mandate technical due diligence before disbursing commercial and machinery project finance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <TrendingUp size={28} color="#0284C7" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>TEV Viability Study</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Techno-Economic Viability modeling examining debt-service coverage ratio (DSCR), internal rate of return (IRR), and break-even output.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <FileCheck2 size={28} color="#059669" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>FMV &amp; FSV Asset Valuation</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Bank-approved Fair Market Value (FMV) and Forced Sale Value (FSV) certification for mortgaging collateral land, factory sheds, and heavy plant.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <FileText size={28} color="#7C3AED" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Lender-Ready Bankable DPR</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Detailed Project Report (DPR) formatted precisely to match the credit policy requirements of SBI, PNB, Bank of Baroda, HDFC, and ICICI.
              </p>
            </div>

            <div style={{ padding: '22px', borderRadius: '12px', background: '#FAF8F5', border: '1px solid #E8E2D8' }}>
              <ShieldCheck size={28} color="#D97706" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>Disbursement Milestone Audit</h3>
              <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>
                Physical progress inspection certificates allowing banks to release term loan tranches smoothly as factory construction advances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA Card ── */}
      <section style={{ padding: '50px 0 20px 0' }}>
        <div className="container">
          <div style={{
            maxWidth: '920px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, #070E1E 0%, #0A2E5C 100%)',
            border: '1.5px solid #0284C7',
            borderRadius: '24px',
            padding: ' clamp(28px, 4vw, 42px)',
            color: '#FFFFFF',
            textAlign: 'center',
            boxShadow: '0 12px 36px rgba(2, 132, 199, 0.25)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#F8FAFC',
              marginBottom: '12px'
            }}>
              Need Capital to Expand Your <span style={{ color: '#38BDF8' }}>Plant or Business</span>?
            </h2>
            <p style={{
              fontSize: '0.96rem',
              color: '#CBD5E1',
              maxWidth: '650px',
              margin: '0 auto 24px auto',
              lineHeight: 1.6
            }}>
              Consult directly with our empanelled valuation engineers. We assess your loan eligibility, structure your project DPR, and coordinate with lending institutions.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => onOpenQuote('Business & Machinery Loans (DPR/TEV)')}
                style={{
                  background: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(2, 132, 199, 0.45)'
                }}
              >
                <span>Request Project Loan Consultation</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://wa.me/919158658885?text=Hello%20MS%20Group,%20I%20am%20interested%20in%20Business%20and%20Machinery%20Project%20Loan%20Assistance."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#F8FAFC',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={18} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
