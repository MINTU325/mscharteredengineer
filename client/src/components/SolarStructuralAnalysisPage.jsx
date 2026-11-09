import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function SolarStructuralAnalysisPage({ onNavigateHome, onOpenQuote }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.title = 'Solar Structural Analysis | KS Chartered Engineers';
  }, []);

  return (
    <div style={{ background: '#040914', color: '#f1f5f9', minHeight: '80vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <button
          onClick={() => {
            if (typeof onNavigateHome === 'function') onNavigateHome();
            else window.location.href = '/';
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '9999px',
            padding: '6px 16px',
            color: '#e2e8f0',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '30px'
          }}
        >
          <ArrowLeft size={14} /> Back to Home
        </button>

        {/* Blank Canvas Area - Ready for user's design instructions */}
        <div style={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed #1e293b',
          borderRadius: '16px',
          color: '#64748b',
          fontSize: '1rem',
          textAlign: 'center',
          padding: '40px 20px'
        }}>
          Solar Structural Analysis (Blank Canvas - Ready for new design)
        </div>
      </div>
    </div>
  );
}
