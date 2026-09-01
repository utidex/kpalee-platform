import React, { useState } from 'react';
import { ShieldCheck, Search, QrCode, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { MOCK_CERTIFICATES } from '../services/mockData';

export default function VerificationSection({ onVerifySearch }) {
  const [queryId, setQueryId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!queryId) return;
    setSearched(true);
    const found = MOCK_CERTIFICATES.find(c => c.id.toLowerCase() === queryId.trim().toLowerCase());
    setSearchResult(found || null);
  };

  return (
    <section style={{ padding: '5rem 2rem', background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Text */}
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
              Instant Authenticity & Fraud Prevention
            </span>
            <h2 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Tamper-Proof Certificate Verification
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem' }}>
              Every Kpalee certificate comes equipped with a cryptographic Certificate ID and embedded QR verification code. Anyone, anywhere can instantly verify authenticity without creating an account.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--kpalee-dark-bg)', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--kpalee-emerald)" /> Zero Recipient Account Barrier
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--kpalee-dark-bg)', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--kpalee-emerald)" /> Real-Time Cryptographic QR Verification
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.95rem', color: 'var(--kpalee-dark-bg)', fontWeight: 600 }}>
                <CheckCircle2 size={20} color="var(--kpalee-emerald)" /> Verifiable Metadata Snapshot & Issuer Records
              </div>
            </div>
          </div>

          {/* Right Interactive Search Box */}
          <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: 'var(--radius-lg)', background: 'var(--bg-main)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={22} color="var(--kpalee-emerald)" /> Live Certificate Lookup
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Try searching sample ID: <strong style={{ color: 'var(--kpalee-emerald)', cursor: 'pointer' }} onClick={() => setQueryId('KP-2026-004829')}>KP-2026-004829</strong>
            </p>

            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={18} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  required
                  className="input-field"
                  value={queryId}
                  onChange={(e) => setQueryId(e.target.value)}
                  placeholder="Enter Certificate ID..."
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.2rem' }}>
                Verify
              </button>
            </form>

            {/* Result Box */}
            {searched && (
              searchResult ? (
                <div className="glass-panel animate-pop-in" style={{ padding: '1.25rem', background: '#ffffff', border: '1.5px solid var(--kpalee-emerald)', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <span className="badge badge-emerald">Verified Authentic ✓</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{searchResult.id}</span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>
                    {searchResult.recipientName}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0.8rem 0' }}>
                    {searchResult.title} • {searchResult.orgName}
                  </p>
                  <button
                    onClick={() => onVerifySearch(searchResult.id)}
                    className="btn-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.45rem', fontSize: '0.82rem' }}
                  >
                    View Public Certificate Details <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#ef4444', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem', textAlign: 'center' }}>
                  No certificate found with ID "{queryId}". Try "KP-2026-004829"
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
