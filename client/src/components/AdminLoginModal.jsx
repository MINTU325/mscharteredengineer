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
        sessionStorage.setItem('ms_admin_token', data.token || 'admin-auth-valid');
        setPassword('');
        onLoginSuccess();
      } else {
        setError(data.message || 'Incorrect Admin Passkey. Access Denied.');
      }
    } catch (err) {
      // Fallback local check if backend network error
      if (password.trim() === 'psrlms0707') {
        sessionStorage.setItem('ms_admin_auth', 'true');
        sessionStorage.setItem('ms_admin_token', 'psrlms0707');
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
        style={{
          maxWidth: '440px',
          padding: '32px 28px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Security Shield Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '8px',
            background: '#fffbeb',
            border: '1px solid #fde68a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            color: '#f59e0b'
          }}>
            <Lock size={30} />
          </div>

          <div className="section-badge gold" style={{ marginBottom: '8px', padding: '4px 14px', fontSize: '0.75rem' }}>
            <KeyRound size={13} />
            <span>Restricted Access</span>
          </div>

          <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '6px' }}>
            Admin Portal Login
          </h3>
          <p style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.5 }}>
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



          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              height: '46px',
              fontSize: '0.95rem',
              fontWeight: 600,
              background: '#F58220',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
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
