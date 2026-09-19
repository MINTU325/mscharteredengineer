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
  MapPin
} from 'lucide-react';

export default function AdminDashboard({ onClose, onLogout }) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

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

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, searchQuery]);

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
      console.error('Failed to delete:', err);
    }
  };

  const exportCSV = () => {
    if (inquiries.length === 0) return;
    const headers = ["Inquiry ID", "Name", "Company", "Phone", "Email", "Service", "SubCategory", "Location", "Value", "Urgency", "Status", "Date"];
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
    <section className="section" style={{ minHeight: '85vh', background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Header bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div>
            <div className="section-badge gold">
              <Users size={14} />
              <span>Client Portal & Lead Management Engine</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', color: '#ffffff' }}>
              Inquiry & <span className="gold-gradient-text">Lead Control Center</span>
            </h1>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              MS Chartered Engineers, Valuers & Technical Consultancy Services — Jaipur HQ
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={exportCSV} className="btn btn-outline" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
              <FileSpreadsheet size={16} color="#10b981" />
              <span>Export CSV</span>
            </button>
            <button onClick={fetchInquiries} className="btn btn-outline" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
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
              </select>
            </div>

            <div style={{ fontSize: '0.88rem', color: '#cbd5e1', textAlign: 'right' }}>
              Showing <strong>{inquiries.length}</strong> active client consultation requests
            </div>
          </div>
        </div>

        {/* Leads Table / Card List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
            <RefreshCw size={32} className="spin-slow" style={{ margin: '0 auto 16px auto', display: 'block' }} />
            <span>Fetching live database records...</span>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="glass-card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <AlertCircle size={40} color="#f59e0b" style={{ margin: '0 auto 16px auto', display: 'block' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '8px' }}>No Inquiries Found</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Try clearing your search query or selecting "All Lead Statuses".</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {inquiries.map((inq) => (
              <div 
                key={inq.id} 
                className="glass-card" 
                style={{
                  padding: '24px',
                  borderLeft: `4px solid ${
                    inq.status === 'Completed' ? '#10b981' : 
                    inq.status === 'Quoted' ? '#38bdf8' : 
                    inq.status === 'In Review' ? '#f59e0b' : '#ec4899'
                  }`
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 10px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#93c5fd'
                      }}>
                        {inq.id}
                      </span>

                      <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                        {inq.name}
                      </h3>

                      {inq.company && (
                        <span style={{ fontSize: '0.88rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Building size={14} /> {inq.company}
                        </span>
                      )}

                      {(inq.subCategory?.includes('Valuation Report') || inq.projectScope?.includes('STAMPED VALUATION REPORT')) && (
                        <span style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '3px 10px',
                          background: 'rgba(245, 158, 11, 0.2)',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          borderRadius: 'var(--radius-full)',
                          color: '#fbbf24',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}>
                          ⭐ Stamped Valuation Report Lead
                        </span>
                      )}
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: '4px', fontWeight: 600 }}>
                      {inq.service} &bull; <span style={{ color: '#cbd5e1', fontWeight: 400 }}>{inq.subCategory}</span>
                    </div>
                  </div>

                  {/* Status Switcher & Delete */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <select
                      className="form-control"
                      style={{ padding: '6px 12px', fontSize: '0.82rem', width: 'auto' }}
                      value={inq.status || 'New'}
                      onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                      disabled={updatingId === inq.id}
                    >
                      <option value="New">Status: New</option>
                      <option value="In Review">Status: In Review</option>
                      <option value="Quoted">Status: Quoted</option>
                      <option value="Completed">Status: Completed</option>
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

                {/* Scope & Details */}
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

                {/* Footer metadata & direct contact triggers */}
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
                    {inq.phone && (
                      <a 
                        href={`tel:${inq.phone}`}
                        className="btn btn-outline"
                        style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                      >
                        <Phone size={13} color="#10b981" /> Call Client
                      </a>
                    )}
                    {inq.phone && (
                      <a 
                        href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.name)},%20this%20is%20Mukesh%20Singh%20from%20MS%20Chartered%20Engineers%20regarding%20your%20inquiry%20${inq.id}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-whatsapp"
                        style={{ padding: '6px 14px', fontSize: '0.78rem' }}
                      >
                        <MessageSquare size={13} /> WhatsApp
                      </a>
                    )}
                    {inq.email && (
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
      </div>
    </section>
  );
}
