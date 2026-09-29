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
    <section id="why-us" className="section section-white">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <div className="section-badge gold">
            <ShieldCheck size={15} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            Engineered for <span className="gold-gradient-text">Trust &amp; Precision</span>
          </h2>
          <p className="section-description">
            Discover why India's leading industrial enterprises, commercial banks, and international importers trust MS Chartered Engineers.
          </p>
        </div>

        <div className="why-us-grid" style={{ marginBottom: '36px' }}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="glass-card pillar-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `3px solid ${pillar.color}`
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: '#ffffff',
                    border: `1px solid ${pillar.color}40`,
                    boxShadow: `0 4px 12px ${pillar.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color,
                    marginBottom: '18px'
                  }}>
                    <Icon size={24} />
                  </div>

                  <h3 className="pillar-title" style={{ fontSize: '1.2rem', marginBottom: '4px' }}>
                    {pillar.title}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: pillar.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    {pillar.subtitle}
                  </div>
                  <p className="pillar-desc" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Callout */}
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #fef3c7 100%)',
          border: '1px solid #bfdbfe',
          borderRadius: 'var(--radius-xl)',
          padding: '28px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', fontWeight: 800, marginBottom: '6px' }}>
              Have a custom industrial or banking requirement?
            </h3>
            <p style={{ color: '#334155', fontSize: '0.92rem', margin: 0, lineHeight: 1.5 }}>
              Speak directly with our principal Chartered Engineer for confidential project advisory.
            </p>
          </div>
          <button onClick={() => onOpenQuote()} className="btn btn-gold" style={{ padding: '12px 28px', fontSize: '0.90rem' }}>
            Book Direct Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
