import React from 'react';
import { Mail, ExternalLink, X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export default function EmailSimulationModal({ isOpen, onClose, emails, onOpenCertificate }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(6, 26, 22, 0.75)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1100,
      padding: '1rem'
    }}>
      <div className="glass-panel animate-pop-in" style={{
        maxWidth: '680px',
        width: '100%',
        padding: '2.25rem',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        position: 'relative',
        boxShadow: 'var(--shadow-lg)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <div style={{
            background: 'var(--kpalee-mint-soft)',
            color: 'var(--kpalee-emerald)',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={22} />
          </div>
          <div>
            <span className="badge badge-emerald" style={{ marginBottom: '0.2rem' }}>Automated Recipient Delivery</span>
            <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
              Recipient Inbox Simulation
            </h3>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          When issuers generate certificates, recipients receive a personalized email containing their unique certificate access link.
        </p>

        {/* Email Inbox Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '420px', overflowY: 'auto', paddingRight: '0.3rem' }}>
          {emails.map(email => (
            <div
              key={email.id}
              style={{
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                background: 'var(--bg-main)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 700 }}>FROM: credentials@kpalee.com ({email.orgName})</span>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>
                    TO: {email.recipientName} &lt;{email.toEmail}&gt;
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{email.date}</span>
              </div>

              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.5rem' }}>
                {email.subject}
              </h4>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.1rem' }}>
                "Dear {email.recipientName}, your official verified digital certificate issued by {email.orgName} is ready! Click below to view, verify, and download your certificate on Kpalee without creating an account."
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--kpalee-emerald)', fontWeight: 700 }}>
                  Unique Link: http://kpalee.com/certificate/{email.certId}
                </span>

                <button
                  onClick={() => {
                    onClose();
                    onOpenCertificate(email.certId);
                  }}
                  className="btn-primary"
                  style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem' }}
                >
                  Follow Link to Download <ExternalLink size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
