import React, { useState } from 'react';
import { Sparkles, Calendar, MapPin, Users, Ticket, Camera, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { MOCK_EVENTS } from '../services/mockData';

export default function BadgesView({ onSelectEventForDP, onToast }) {
  const [selectedEventModal, setSelectedEventModal] = useState(null);
  const [claimEmail, setClaimEmail] = useState('');
  const [isClaimed, setIsClaimed] = useState(false);

  // Extended Trending Events Dataset
  const trendingEvents = [
    ...MOCK_EVENTS,
    {
      id: 'evt-fintech-gala',
      name: 'Pan-African Fintech Gala',
      organizer: 'Fintech Leaders Council',
      date: 'November 18, 2026',
      location: 'Eko Convention Centre, Lagos',
      attendeesCount: 2100,
      coverColor: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)',
      badgeType: 'Fintech Delegate',
      badgeTitle: 'FINTECH LEADER',
      description: 'Celebrating high-growth payment infrastructure founders and neobanks across Africa.'
    },
    {
      id: 'evt-dev-conf',
      name: 'West Africa DevCon 2026',
      organizer: 'Developer Community Africa',
      date: 'December 4, 2026',
      location: 'Abuja International Conference Centre',
      attendeesCount: 3400,
      coverColor: 'linear-gradient(135deg, #065f46 0%, #059669 100%)',
      badgeType: 'Developer Pass',
      badgeTitle: 'SOFTWARE ENGINEER',
      description: 'Deep-dive engineering sessions on cloud infrastructure, AI models, and distributed databases.'
    }
  ];

  const handleClaim = (e) => {
    e.preventDefault();
    if (!claimEmail) return;
    setIsClaimed(true);
    if (onToast) onToast('Attendance confirmed! Badge claimed 🎉');
  };

  const scrollMarquee = (direction) => {
    const el = document.getElementById('kpalee-events-marquee');
    if (el) {
      el.scrollBy({ left: direction === 'left' ? -380 : 380, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-slide-up" style={{ padding: '3rem 2rem 5rem 2rem', maxWidth: '1440px', margin: '0 auto' }}>
      
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

        <h1 className="font-serif" style={{ fontSize: '3.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          You were there. <br />
          <span style={{ color: 'var(--kpalee-emerald-light)' }}>Now make it official.</span>
        </h1>

        <p style={{ maxWidth: '750px', color: '#d1f2e4', fontSize: '1.12rem', lineHeight: 1.6, margin: '0 auto 2.25rem auto' }}>
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

      {/* Trending Events Horizontal Scrolling Marquee */}
      <div style={{ marginBottom: '4rem' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <h2 className="font-serif" style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.35rem' }}>
              Trending Events & Badges
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)' }}>
              Scroll through active events to claim your attendee credential or generate custom social profile frames.
            </p>
          </div>

          {/* Marquee Navigation Scroll Controls */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => scrollMarquee('left')}
              className="btn-secondary"
              style={{ padding: '0.55rem 0.85rem', borderRadius: '50%' }}
              title="Scroll Left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollMarquee('right')}
              className="btn-secondary"
              style={{ padding: '0.55rem 0.85rem', borderRadius: '50%' }}
              title="Scroll Right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          id="kpalee-events-marquee"
          className="horizontal-scroll-container"
        >
          {trendingEvents.map((evt) => (
            <div
              key={evt.id}
              className="horizontal-scroll-item glass-panel"
              style={{
                padding: '1.75rem',
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
                  <span className="badge badge-emerald" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.25)', color: '#fff', fontSize: '0.65rem' }}>
                    {evt.badgeType}
                  </span>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.35rem' }}>
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

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.5rem' }}>
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
                  style={{ flex: 1, justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}
                >
                  <Ticket size={15} /> Claim Badge
                </button>

                <button
                  onClick={() => onSelectEventForDP(evt)}
                  className="btn-accent"
                  style={{ justifyContent: 'center', padding: '0.6rem 0.85rem', fontSize: '0.85rem' }}
                  title="Generate Social Profile DP"
                >
                  <Camera size={15} /> Get DP
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
