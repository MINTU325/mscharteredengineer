import React from 'react';
import { 
  GraduationCap, 
  Clock, 
  Cpu, 
  Globe2, 
  Lightbulb, 
  Target, 
  ShieldCheck,
  CheckCircle
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
      title: "10+ Years Experience",
      subtitle: "Industry Proven Track Record",
      description: "Over a decade of hands-on industrial valuation, plant commissioning, statutory inspections, and techno-commercial risk appraisals."
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
    <section className="section" style={{ background: 'rgba(11, 23, 54, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge gold">
            <ShieldCheck size={15} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gold-gradient-text">Trust & Precision</span>
          </h2>
          <p className="section-description">
            Discover why India's leading industrial enterprises, commercial banks, and international importers trust MS Chartered Engineers.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '26px',
          marginBottom: '48px'
        }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="glass-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `2px solid ${pillar.color}`
                }}
              >
                <div>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: `rgba(255, 255, 255, 0.04)`,
                    border: `1px solid ${pillar.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color,
                    marginBottom: '20px'
                  }}>
                    <Icon size={26} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '4px' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: pillar.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    {pillar.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(24, 90, 219, 0.25) 0%, rgba(245, 158, 11, 0.15) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
              Have a custom industrial or banking requirement?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
              Speak directly with our principal Chartered Engineer for confidential project advisory.
            </p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-gold" style={{ padding: '14px 30px' }}>
            Book Direct Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
