import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  Phone, 
  Mail, 
  Trash2, 
  RefreshCw, 
  MessageSquare,
  FileSpreadsheet,
  AlertCircle,
  Building,
  MapPin,
  ShieldCheck,
  Scale,
  Database,
  Play,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function AdminDashboard({ onClose, onLogout }) {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads' | 'dpdp'
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  // DPDP state
  const [dpdpRetention, setDpdpRetention] = useState(null);
  const [dpdpGrievances, setDpdpGrievances] = useState([]);
  const [dpdpRights, setDpdpRights] = useState([]);
  const [dpdpConsents, setDpdpConsents] = useState({ total: 0, consents: [] });
  const [pruningLoading, setPruningLoading] = useState(false);
  const [pruningResult, setPruningResult] = useState(null);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/inquiries?status=${statusFilter}&search=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      if (data.success) {
        setInquiries(data.data);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDpdpData = async () => {
    try {
      const [retRes, grvRes, rgtRes, cstRes] = await Promise.all([
        fetch('/api/dpdp/retention/status').then(r => r.json()).catch(() => ({})),
        fetch('/api/dpdp/grievances').then(r => r.json()).catch(() => ({ data: [] })),
        fetch('/api/dpdp/rights-requests').then(r => r.json()).catch(() => ({ data: [] })),
        fetch('/api/dpdp/consents?limit=20').then(r => r.json()).catch(() => ({ consents: [], total: 0 }))
      ]);

      if (retRes.success) setDpdpRetention(retRes.data);
      if (grvRes.success) setDpdpGrievances(grvRes.data || []);
      if (rgtRes.success) setDpdpRights(rgtRes.data || []);
      if (cstRes.success) setDpdpConsents(cstRes);
    } catch (err) {
      console.error('Failed to load DPDP registers:', err);
    }
  };

  useEffect(() => {
    if (activeTab === 'leads') {
      fetchInquiries();
    } else {
      fetchDpdpData();
    }
  }, [activeTab, statusFilter, searchQuery]);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setInquiries(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Delete inquiry ${id}?`)) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setInquiries(prev => prev.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete inquiry:', err);
    }
  };

  const handleTriggerRetentionPrune = async () => {
    if (!window.confirm('Run statutory 180-day DPDP retention pruning now? Inquiries older than 180 days will be anonymized in compliance with Section 8(7).')) return;
    setPruningLoading(true);
    try {
      const res = await fetch('/api/dpdp/retention/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ retentionDays: 180, dryRun: false })
      });
      const data = await res.json();
      if (data.success) {
        setPruningResult(data.data);
        fetchDpdpData();
        fetchInquiries();
      }
    } catch (err) {
      console.error('Error triggering retention pruning:', err);
    } finally {
      setPruningLoading(false);
    }
  };

  const handleGrievanceStatusChange = async (ticketId, newStatus) => {
    try {
      const res = await fetch(`/api/dpdp/grievances/${ticketId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setDpdpGrievances(prev => prev.map(g => g.ticketId === ticketId ? { ...g, status: newStatus } : g));
      }
    } catch (err) {
      console.error('Failed to update grievance status:', err);
    }
  };

  const exportCSV = () => {
    if (!inquiries.length) return alert('No inquiries to export');
    const headers = [
      'Inquiry ID', 'Client Name', 'Company', 'Phone', 'Email',
      'Primary Service', 'Sub-Category', 'Location', 'Asset Scale', 'Urgency', 'Status', 'Date Submitted'
    ];

    const rows = inquiries.map(item => [
      item.id,
      `"${item.name || ''}"`,
      `"${item.company || ''}"`,
      `"${item.phone || ''}"`,
      `"${item.email || ''}"`,
      `"${item.service || ''}"`,
      `"${item.subCategory || ''}"`,
      `"${item.location || ''}"`,
      `"${item.estimatedAssetValue || ''}"`,
      `"${item.urgency || ''}"`,
      `"${item.status || ''}"`,
      `"${item.createdAt ? new Date(item.createdAt).toLocaleDateString() : ''}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `MS_Chartered_Engineers_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section" style={{ minHeight: '85vh', background: '#0b0d14' }}>
      <div className="container">
        {/* Header bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '28px'
        }}>
          <div>
            <div className="section-badge gold">
              <Users size={14} />
              <span>Admin Operations & Compliance Control Center</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '8px 0 4px' }}>
              Management & <span className="gold-gradient-text">Statutory Dashboard</span>
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', margin: 0 }}>
              KS Chartered Engineers, Valuers & Technical Services — Jaipur HQ
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {activeTab === 'leads' && (
              <button onClick={exportCSV} className="btn btn-outline" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                <FileSpreadsheet size={16} color="#10b981" />
                <span>Export CSV</span>
              </button>
            )}
            <button 
              onClick={() => { activeTab === 'leads' ? fetchInquiries() : fetchDpdpData(); }} 
              className="btn btn-outline" 
              style={{ padding: '10px 18px', fontSize: '0.88rem' }}
            >
              <RefreshCw size={16} className={loading ? "spin-slow" : ""} />
              <span>Refresh</span>
            </button>
            <button onClick={onClose} className="btn btn-outline" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
              <span>Exit Portal</span>
            </button>
            {onLogout && (
              <button 
                onClick={onLogout} 
                className="btn btn-primary" 
                style={{ 
                  padding: '10px 18px', 
                  fontSize: '0.88rem',
                  background: 'rgba(244, 63, 94, 0.2)',
                  borderColor: 'rgba(244, 63, 94, 0.4)',
                  color: '#fda4af'
                }}
                title="Lock portal & logout"
              >
                <span>Logout</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '12px'
        }}>
          <button
            onClick={() => setActiveTab('leads')}
            style={{
              background: activeTab === 'leads' ? '#f59e0b' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'leads' ? '#000000' : '#cbd5e1',
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <Users size={16} />
            <span>Client Consultation Leads ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('dpdp')}
            style={{
              background: activeTab === 'dpdp' ? '#38bdf8' : 'rgba(255,255,255,0.05)',
              color: activeTab === 'dpdp' ? '#000000' : '#cbd5e1',
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <ShieldCheck size={16} />
            <span>DPDP Statutory Registers & Retention Engine</span>
          </button>
        </div>

        {/* ══════════════ TAB 1: CLIENT LEADS ══════════════ */}
        {activeTab === 'leads' && (
          <>
            {/* Filter Bar */}
            <div className="glass-card" style={{ padding: '20px', marginBottom: '28px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                alignItems: 'center'
              }}>
                <div style={{ position: 'relative' }}>
                  <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input 
                    type="text" 
                    className="form-control"
                    style={{ paddingLeft: '40px' }}
                    placeholder="Search name, company, city, phone..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Filter size={16} color="#f59e0b" />
                  <select 
                    className="form-control"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Lead Statuses</option>
                    <option value="New">Status: New</option>
                    <option value="In Review">Status: In Review</option>
                    <option value="Quoted">Status: Quoted</option>
                    <option value="Completed">Status: Completed</option>
                    <option value="Anonymized">Status: Anonymized (DPDP)</option>
                  </select>
                </div>

                <div style={{ fontSize: '0.88rem', color: '#cbd5e1', textAlign: 'right' }}>
                  Showing <strong>{inquiries.length}</strong> active client consultation requests
                </div>
              </div>
            </div>

            {/* Inquiries List */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
                <RefreshCw size={28} className="spin-slow" style={{ marginBottom: '12px' }} />
                <p>Loading consultation records...</p>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="glass-card" style={{ textAlign: 'center', padding: '50px 20px', color: '#94a3b8' }}>
                <AlertCircle size={36} color="#f59e0b" style={{ margin: '0 auto 12px' }} />
                <h3 style={{ color: '#fff' }}>No inquiries found</h3>
                <p>No client requests match your filter criteria.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {inquiries.map(inq => (
                  <div key={inq.id} className="glass-card" style={{ padding: '24px' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '16px',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                          <span style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px', color: '#94a3b8' }}>
                            {inq.id}
                          </span>
                          <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#ffffff' }}>
                            {inq.name}
                          </h3>
                          {inq.company && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: '#f59e0b' }}>
                              <Building size={14} /> {inq.company}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600 }}>
                          {inq.service} {inq.subCategory && `— ${inq.subCategory}`}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                        <select
                          value={inq.status || 'New'}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          disabled={updatingId === inq.id || inq.status === 'Anonymized'}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '6px',
                            background: inq.status === 'Completed' ? 'rgba(16, 185, 129, 0.2)' : inq.status === 'Anonymized' ? 'rgba(148, 163, 184, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                            color: inq.status === 'Completed' ? '#34d399' : inq.status === 'Anonymized' ? '#94a3b8' : '#fbbf24',
                            border: '1px solid rgba(255,255,255,0.15)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          <option value="New" style={{ background: '#0b0d14', color: '#fff' }}>New</option>
                          <option value="In Review" style={{ background: '#0b0d14', color: '#fff' }}>In Review</option>
                          <option value="Quoted" style={{ background: '#0b0d14', color: '#fff' }}>Quoted</option>
                          <option value="Completed" style={{ background: '#0b0d14', color: '#fff' }}>Completed</option>
                          <option value="Anonymized" style={{ background: '#0b0d14', color: '#fff' }}>Anonymized (DPDP)</option>
                        </select>

                        <button
                          onClick={() => handleDelete(inq.id)}
                          style={{
                            background: 'rgba(244, 63, 94, 0.1)',
                            border: '1px solid rgba(244, 63, 94, 0.3)',
                            borderRadius: '8px',
                            padding: '7px 10px',
                            color: '#fda4af',
                            cursor: 'pointer'
                          }}
                          title="Delete Record"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div style={{
                      fontSize: '0.88rem',
                      color: '#e2e8f0',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '16px',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line'
                    }}>
                      {inq.projectScope}
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '14px',
                      fontSize: '0.82rem',
                      color: '#94a3b8'
                    }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin size={14} color="#38bdf8" /> {inq.location}
                        </span>
                        <span>Scale: <strong style={{ color: '#ffffff' }}>{inq.estimatedAssetValue}</strong></span>
                        <span>Urgency: <strong style={{ color: '#f59e0b' }}>{inq.urgency}</strong></span>
                        <span>Submitted: {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Recent'}</span>
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        {inq.phone && inq.status !== 'Anonymized' && (
                          <a 
                            href={`tel:${inq.phone}`}
                            className="btn btn-outline"
                            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                          >
                            <Phone size={13} color="#10b981" /> Call Client
                          </a>
                        )}
                        {inq.phone && inq.status !== 'Anonymized' && (
                          <a 
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)},%20this%20is%20KS%20from%20KS%20Chartered%20Engineers%20regarding%20your%20inquiry%20${inq.id}.`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-whatsapp"
                            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                          >
                            <MessageSquare size={13} /> WhatsApp
                          </a>
                        )}
                        {inq.email && inq.status !== 'Anonymized' && (
                          <a 
                            href={`mailto:${inq.email}`}
                            className="btn btn-outline"
                            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                          >
                            <Mail size={13} color="#f59e0b" /> Email
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ══════════════ TAB 2: DPDP STATUTORY REGISTERS ══════════════ */}
        {activeTab === 'dpdp' && (
          <div>
            {/* DPDP Top Metrics Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}>
              <div className="glass-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', marginBottom: '8px', fontSize: '0.84rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} />
                  <span>Statutory Consent Logs</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                  {dpdpConsents.total || dpdpRetention?.activeConsentRecords || 0}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Section 6 Validated Opt-in Records</div>
              </div>

              <div className="glass-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', marginBottom: '8px', fontSize: '0.84rem', fontWeight: 600 }}>
                  <Scale size={16} />
                  <span>Privacy Grievances</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                  {dpdpGrievances.length}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Section 13 (30-Day SLA Window)</div>
              </div>

              <div className="glass-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', marginBottom: '8px', fontSize: '0.84rem', fontWeight: 600 }}>
                  <FileText size={16} />
                  <span>Data Principal Rights</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                  {dpdpRights.length}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Chapter III (Access, Erasure, Nominee)</div>
              </div>

              <div className="glass-card" style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7', marginBottom: '8px', fontSize: '0.84rem', fontWeight: 600 }}>
                  <Database size={16} />
                  <span>Anonymized Inquiries</span>
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                  {dpdpRetention?.anonymizedInquiries || 0}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Section 8(7) Retention Compliance</div>
              </div>
            </div>

            {/* Retention Engine Action Banner */}
            <div className="glass-card" style={{
              padding: '24px',
              marginBottom: '28px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38bdf8', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
                    <Clock size={14} />
                    <span>Automated Retention Policy (Section 8(7) DPDP Act 2023)</span>
                  </div>
                  <h3 style={{ margin: '0 0 6px 0', color: '#ffffff', fontSize: '1.15rem' }}>
                    Automated 180-Day Personal Data Pruning Engine
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#94a3b8', maxWidth: '650px', lineHeight: 1.5 }}>
                    The system automatically runs every 24 hours to scrub personal identifying data (names, emails, phone numbers) from inquiries older than 180 days, while keeping non-PII financial & technical data for statutory analytics.
                  </p>
                </div>

                <button
                  onClick={handleTriggerRetentionPrune}
                  disabled={pruningLoading}
                  style={{
                    background: pruningLoading ? '#64748b' : '#38bdf8',
                    color: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 20px',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: pruningLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Play size={15} />
                  <span>{pruningLoading ? 'Executing Pruning...' : 'Run Retention Pruning Now'}</span>
                </button>
              </div>

              {pruningResult && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontSize: '0.85rem'
                }}>
                  Pruning complete! Inquiries anonymized: <strong>{pruningResult.inquiriesAnonymized}</strong>, Expired consents removed: <strong>{pruningResult.consentsPruned}</strong>. Audit trail recorded.
                </div>
              )}
            </div>

            {/* Grievances Register List */}
            <div className="glass-card" style={{ padding: '24px', marginBottom: '28px' }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#ffffff', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scale size={18} color="#f59e0b" />
                <span>Statutory Privacy Grievance Register (Section 13)</span>
              </h3>

              {dpdpGrievances.length === 0 ? (
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>No privacy grievances currently lodged.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {dpdpGrievances.map(g => (
                    <div key={g.ticketId} style={{
                      padding: '16px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                        <div>
                          <span style={{ fontSize: '0.75rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                            {g.ticketId}
                          </span>
                          <strong style={{ marginLeft: '10px', color: '#ffffff' }}>{g.name}</strong> ({g.email})
                          <div style={{ fontSize: '0.8rem', color: '#38bdf8', marginTop: '4px' }}>
                            Type: {g.grievanceType} · Logged: {new Date(g.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontSize: '0.8rem', color: g.slaDaysRemaining < 10 ? '#f43f5e' : '#34d399', fontWeight: 600 }}>
                            SLA: {g.slaDaysRemaining} days left
                          </span>
                          <select
                            value={g.status}
                            onChange={(e) => handleGrievanceStatusChange(g.ticketId, e.target.value)}
                            style={{
                              padding: '5px 10px',
                              borderRadius: '6px',
                              background: '#0b132b',
                              color: g.status === 'Resolved' ? '#34d399' : '#f59e0b',
                              border: '1px solid rgba(255,255,255,0.2)',
                              fontSize: '0.8rem'
                            }}
                          >
                            <option value="Open">Open</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Resolved">Resolved</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {g.description}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Recent Consent Logs Register */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h3 style={{ margin: '0 0 16px 0', color: '#ffffff', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Recent Consent Register Audit Trail (Section 6)</span>
              </h3>

              {dpdpConsents.consents && dpdpConsents.consents.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>
                        <th style={{ padding: '10px' }}>Consent ID</th>
                        <th style={{ padding: '10px' }}>Choice</th>
                        <th style={{ padding: '10px' }}>Timestamp</th>
                        <th style={{ padding: '10px' }}>IP Hash</th>
                        <th style={{ padding: '10px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dpdpConsents.consents.map(c => (
                        <tr key={c.consentId} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e2e8f0' }}>
                          <td style={{ padding: '10px' }}><code>{c.consentId}</code></td>
                          <td style={{ padding: '10px' }}>
                            <span style={{
                              color: c.optional ? '#34d399' : '#94a3b8',
                              fontWeight: 600
                            }}>
                              {c.choice}
                            </span>
                          </td>
                          <td style={{ padding: '10px' }}>{new Date(c.timestamp).toLocaleString()}</td>
                          <td style={{ padding: '10px' }}><code style={{ color: '#94a3b8' }}>{c.ipHash}</code></td>
                          <td style={{ padding: '10px' }}>
                            <span style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>Consent register initialized. Records will populate as visitors accept/reject preferences.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
