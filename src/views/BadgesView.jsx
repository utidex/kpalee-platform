import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Users, Award, ArrowRight, CheckCircle2, Ticket, Share2, Camera } from 'lucide-react';
import { MOCK_EVENTS } from '../services/mockData';

export default function BadgesView({ onSelectEventForDP, onToast }) {
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [claimEmail, setClaimEmail] = useState('');
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClaim = (e) => {
    e.preventDefault();
    if (!claimEmail) return;
    setIsClaimed(true);
    if (onToast) onToast('Attendance confirmed! Badge claimed 🎉');
  };

  return (
    <div className="animate-slide-up" style={{ padding: '3rem 2rem 5rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
      
      {/* Badges Hero */}
      <div className="glass-panel-dark" style={{
        padding: '3.5rem 2.5rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '3.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <span className="badge badge-emerald" style={{ marginBottom: '1.25rem', background: 'rgba(0, 168, 120, 0.2)', color: '#ffffff' }}>
          <Sparkles size={14} color="var(--kpalee-emerald-light)" /> Digital Event Identity & Badges
        </span>

        <h1 className="font-serif" style={{ fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          You were there. <br />
          <span style={{ color: 'var(--kpalee-emerald-light)' }}>Now make it official.</span>
        </h1>

        <p style={{ maxWidth: '720px', color: '#d1f2e4', fontSize: '1.1rem', lineHeight: 1.6, margin: '0 auto 2.25rem auto' }}>
          Turn event attendance into digital proof you can show off. Claim your official attendee badge, download your custom event Display Picture (DP), and share with your network.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
            <CheckCircle2 size={18} color="var(--kpalee-emerald-light)" /> Official Event Badges
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
            <CheckCircle2 size={18} color="var(--kpalee-emerald-light)" /> One-Click "Get Your Event DP"
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>
            <CheckCircle2 size={18} color="var(--kpalee-emerald-light)" /> Instant WhatsApp & Social Share
          </div>
        </div>
      </div>

      {/* Events Worth Remembering Grid */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.5rem' }}>
          Events Worth Remembering
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2.25rem' }}>
          Select an event you attended to claim your digital badge or generate a custom profile picture frame.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem'
        }}>
          {MOCK_EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--kpalee-emerald)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <div>
                {/* Event Card Header Cover */}
                <div style={{
                  background: evt.coverColor,
                  color: '#ffffff',
                  padding: '1.75rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '1.25rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <span className="badge badge-emerald" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.65rem' }}>
                    {evt.badgeType}
                  </span>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                    {evt.name}
                  </h3>
                  <span style={{ fontSize: '0.8rem', opacity: 0.9, letterSpacing: '0.08em', fontWeight: 700 }}>
                    {evt.badgeTitle}
                  </span>
                </div>

                {/* Event Metadata */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Calendar size={16} color="var(--kpalee-emerald)" /> {evt.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <MapPin size={16} color="var(--kpalee-emerald)" /> {evt.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Users size={16} color="var(--kpalee-emerald)" /> {evt.attendeesCount.toLocaleString()} Attendees
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                  {evt.description}
                </p>
              </div>

              {/* Card Actions */}
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <button
                  onClick={() => {
                    setSelectedEventModal(evt);
                    setIsClaimed(false);
                    setClaimEmail('');
                  }}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: 'center', padding: '0.65rem', fontSize: '0.88rem' }}
                >
                  <Ticket size={16} /> Claim Badge
                </button>

                <button
                  onClick={() => onSelectEventForDP(evt)}
                  className="btn-accent"
                  style={{ justifyContent: 'center', padding: '0.65rem 0.9rem', fontSize: '0.88rem' }}
                  title="Generate Social Profile DP"
                >
                  <Camera size={16} /> Get DP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Claim Modal */}
      {selectedEventModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6, 26, 22, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div className="glass-panel animate-pop-in" style={{
            maxWidth: '520px',
            width: '100%',
            padding: '2.25rem',
            borderRadius: 'var(--radius-lg)',
            background: '#ffffff'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge badge-emerald">Event Badge Verification</span>
              <button
                onClick={() => setSelectedEventModal(null)}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.7rem' }}
              >
                Close
              </button>
            </div>

            {isClaimed ? (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--kpalee-mint-soft)',
                  border: '2px solid var(--kpalee-emerald)',
                  color: 'var(--kpalee-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--kpalee-dark-bg)', fontWeight: 800 }}>
                  You Were There! 🎉
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: '0.4rem 0 1.75rem 0' }}>
                  Your official attendee badge for <strong>{selectedEventModal.name}</strong> is verified.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    onClick={() => {
                      const evt = selectedEventModal;
                      setSelectedEventModal(null);
                      onSelectEventForDP(evt);
                    }}
                    className="btn-primary"
                    style={{ justifyContent: 'center', padding: '0.75rem' }}
                  >
                    <Camera size={18} /> Create Event Display Picture (DP)
                  </button>

                  <button
                    onClick={() => setSelectedEventModal(null)}
                    className="btn-secondary"
                    style={{ justifyContent: 'center', padding: '0.65rem' }}
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif" style={{ fontSize: '1.5rem', color: 'var(--kpalee-dark-bg)', fontWeight: 800, marginBottom: '0.4rem' }}>
                  Claim Badge: {selectedEventModal.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Enter your registered ticket email or ticket ID to claim your digital event credential.
                </p>

                <form onSubmit={handleClaim} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Attendee Email / Ticket ID *</label>
                    <input
                      type="text"
                      required
                      className="input-field"
                      placeholder="e.g. attendee@event.com or TICKET-8849"
                      value={claimEmail}
                      onChange={(e) => setClaimEmail(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: 'center', padding: '0.75rem', fontSize: '0.98rem' }}
                  >
                    Confirm & Claim Badge <ArrowRight size={17} />
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
