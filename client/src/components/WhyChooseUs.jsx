import React from 'react';
import { 
  GraduationCap, 
  Clock, 
  Cpu, 
  Globe2, 
  Lightbulb, 
  Target, 
  ShieldCheck
} from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const pillars = [
    {
      icon: GraduationCap,
      color: "#38bdf8",
      title: "IIT Roorkee Graduate",
      subtitle: "Mechanical Engineering",
      description: "Rigorous academic engineering fundamentals from India's premier technical institute, ensuring analytical precision in all technical evaluations."
    },
    {
      icon: Clock,
      color: "#f59e0b",
      title: "Extensive Industry Experience",
      subtitle: "Proven Track Record",
      description: "Deep hands-on industrial experience in technical valuation, plant commissioning, statutory inspections, and techno-commercial risk appraisals across sectors."
    },
    {
      icon: Cpu,
      color: "#10b981",
      title: "Technology Evaluation",
      subtitle: "Advanced Machinery & Automation",
      description: "Deep expertise in evaluating state-of-the-art CNCs, automated process plants, renewable solar farms, and high-precision imported capital equipment."
    },
    {
      icon: Globe2,
      color: "#a78bfa",
      title: "International Industrial Exposure",
      subtitle: "Cross-Border Machinery Sourcing",
      description: "Extensive exposure to global industrial standards, EPCG regulations, customs import-export requirements, and international supplier certifications."
    },
    {
      icon: Lightbulb,
      color: "#fb7185",
      title: "Leadership in Technology",
      subtitle: "Innovation & Green Energy",
      description: "At the forefront of sustainable energy transitions, CEIG compliance, rainwater harvesting, and modern environmental standards."
    },
    {
      icon: Target,
      color: "#06b6d4",
      title: "Strong Planning & Execution",
      subtitle: "Time-Bound Delivery",
      description: "Commitment to rapid turnaround, rigorous documentation, bankable DPR preparation, and seamless government department clearances."
    }
  ];

  return (
    <section id="why-us" style={{ padding: '48px 0', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 32px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 12px',
            background: 'rgba(245, 130, 32, 0.12)',
            border: '1px solid rgba(245, 130, 32, 0.25)',
            borderRadius: '6px',
            color: '#f58220',
            fontSize: '0.78rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            marginBottom: '12px'
          }}>
            <ShieldCheck size={14} />
            <span>Why Choose Us</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.3rem)',
            color: '#0f172a',
            fontWeight: 800,
            lineHeight: 1.25,
            marginBottom: '10px'
          }}>
            Engineered for <span style={{ color: "#F58220" }}>Trust &amp; Precision</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.6 }}>
            Discover why India's leading industrial enterprises, commercial banks, and international importers trust KS Chartered Engineers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 22px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  borderTop: `3px solid ${pillar.color}`,
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = '#1a1e28';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderTopColor = pillar.color;
                  e.currentTarget.style.boxShadow = '0 12px 26px rgba(0, 0, 0, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#11141c';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderTopColor = pillar.color;
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.25)';
                }}
              >
                <div>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '6px',
                    background: `${pillar.color}18`,
                    border: `1px solid ${pillar.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color,
                    marginBottom: '16px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '1.14rem', color: '#0f172a', fontWeight: 700, marginBottom: '4px' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.76rem', color: pillar.color, fontWeight: 600, marginBottom: '10px' }}>
                    {pillar.subtitle}
                  </div>
                  <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Callout */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          padding: '24px 28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <h3 style={{ fontSize: '1.18rem', color: '#0f172a', fontWeight: 800, marginBottom: '6px' }}>
              Have a custom industrial or banking requirement?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
              Speak directly with our principal Chartered Engineer for confidential project advisory.
            </p>
          </div>
          <button 
            onClick={() => onOpenQuote()} 
            className="btn btn-primary" 
            style={{ 
              padding: '10px 24px', 
              fontSize: '0.88rem',
              fontWeight: 600,
              background: '#F58220',
              borderColor: '#F58220',
              borderRadius: '6px',
              color: '#0f172a'
            }}
          >
            Book Direct Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
