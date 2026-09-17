import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ShieldCheck, X, ArrowRight, AlertCircle, KeyRound } from 'lucide-react';

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter your admin passkey');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password.trim() })
      });

      const data = await res.json();
      if (data.success) {
        // Save session in sessionStorage
        sessionStorage.setItem('ms_admin_auth', 'true');
        setPassword('');
        onLoginSuccess();
      } else {
        setError(data.message || 'Incorrect Admin Passkey. Access Denied.');
      }
    } catch (err) {
      // Fallback local check if backend network error
      if (password.trim() === 'ms@admin2026' || password.trim() === 'admin123') {
        sessionStorage.setItem('ms_admin_auth', 'true');
        setPassword('');
        onLoginSuccess();
      } else {
        setError('Incorrect Passkey. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '440px', padding: '36px 30px' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Security Shield Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(24, 90, 219, 0.2) 100%)',
            border: '2px solid rgba(245, 158, 11, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            color: '#f59e0b',
            boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)'
          }}>
            <Lock size={30} />
          </div>

          <div className="section-badge gold" style={{ marginBottom: '8px', padding: '4px 14px', fontSize: '0.75rem' }}>
            <KeyRound size={13} />
            <span>Restricted Access</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '6px' }}>
            Admin Portal Login
          </h3>
          <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5 }}>
            Enter your admin passkey to manage incoming client inquiries, valuations & leads.
          </p>
        </div>

        {error && (
          <div style={{
            background: 'rgba(244, 63, 94, 0.15)',
            border: '1px solid rgba(244, 63, 94, 0.35)',
            borderRadius: 'var(--radius-md)',
            padding: '10px 14px',
            color: '#fda4af',
            fontSize: '0.84rem',
            marginBottom: '18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="form-group" style={{ marginBottom: '22px' }}>
            <label className="form-label" style={{ fontSize: '0.85rem' }}>
              Security Passkey
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
                style={{ paddingRight: '44px', height: '46px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Hint for the owner */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px dashed rgba(255, 255, 255, 0.12)',
            borderRadius: 'var(--radius-sm)',
            padding: '8px 12px',
            fontSize: '0.78rem',
            color: '#cbd5e1',
            marginBottom: '22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>Default Passkey:</span>
            <code style={{ color: '#fbbf24', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>ms@admin2026</code>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-gold"
            style={{ width: '100%', height: '46px', fontSize: '0.95rem' }}
          >
            {loading ? (
              <span>Verifying...</span>
            ) : (
              <>
                <ShieldCheck size={18} />
                <span>Unlock Lead Center</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
