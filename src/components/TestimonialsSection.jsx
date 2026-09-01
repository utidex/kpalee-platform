import React, { useState } from 'react';
import { Star, Building2, Quote, CheckCircle2, RotateCw } from 'lucide-react';

export default function TestimonialsSection() {
  const [flippedCards, setFlippedCards] = useState({});

  const brands = [
    { name: 'Lagos Tech Week', label: 'Tech Summit' },
    { name: 'AltSchool Africa', label: 'Academy' },
    { name: 'Andela', label: 'Engineering' },
    { name: 'Paystack', label: 'Payments' },
    { name: 'Flutterwave', label: 'Fintech' },
    { name: 'Ingressive For Good', label: 'Non-Profit' }
  ];

  // Duplicate brands array for seamless infinite marquee scroll
  const marqueeBrands = [...brands, ...brands, ...brands];

  const testimonials = [
    {
      id: 1,
      quote: "We issued 850 attendance certificates in less than 2 minutes right after Lagos Tech Week. The zero-account link meant attendees shared their certificates on LinkedIn instantly!",
      author: "Tunde Olatunji",
      title: "Head of Operations",
      org: "Lagos Tech Week 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      quote: "The 'Get Your Event DP' profile frame generator went viral across WhatsApp and Twitter during our conference. Attendees loved customizing their official delegate badges.",
      author: "Amina Babatunde",
      title: "Community Director",
      org: "Pan-African Developers Network",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      quote: "Kpalee completely eliminated our PDF paperwork nightmare. The dynamic field mapping and cryptographic QR verification give our diplomas institutional credibility.",
      author: "Chidi Chukwuma",
      title: "Program Lead",
      org: "West African Innovation Academy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section style={{ padding: '5.5rem 1.5rem', background: 'var(--bg-main)', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        {/* Infinite Right-to-Left Partner Brands Marquee */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
            Trusted By Leading Academies, Event Organizers & Tech Communities
          </p>

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {marqueeBrands.map((b, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: 'var(--shadow-sm)',
                    flexShrink: 0
                  }}
                >
                  <Building2 size={18} color="var(--kpalee-emerald)" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', whiteSpace: 'nowrap' }}>
                    {b.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.85rem' }}>
            Interactive Client Reviews (Hover / Tap to Flip)
          </span>
          <h2 className="font-serif" style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem' }}>
            Loved by Organizers & Attendees
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Hover or tap any review card to flip and read their full story.
          </p>
        </div>

        {/* Interactive 3D Flip Review Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((item) => {
            const isFlipped = !!flippedCards[item.id];
            return (
              <div
                key={item.id}
                className={`flip-card-container ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => toggleFlip(item.id)}
              >
                <div className="flip-card-inner">
                  
                  {/* FRONT SIDE: Emerald Green Background with Client Info & 5-Stars */}
                  <div className="flip-card-front">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span className="badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)' }}>
                        Verified Organizer
                      </span>
                      <RotateCw size={18} style={{ color: 'var(--kpalee-mint-tint)', opacity: 0.8 }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem', margin: '1rem 0' }}>
                      <div style={{ position: 'relative' }}>
                        <img
                          src={item.avatar}
                          alt={item.author}
                          style={{
                            width: '84px',
                            height: '84px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3.5px solid var(--kpalee-emerald-light)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 0,
                          background: 'var(--kpalee-gold)',
                          borderRadius: '50%',
                          padding: '3px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <CheckCircle2 size={16} color="#061a16" />
                        </div>
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
                          {item.author}
                        </h3>
                        <span style={{ fontSize: '0.85rem', color: '#cbf3e0', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}>
                          {item.title} • <strong>{item.org}</strong>
                        </span>
                      </div>

                      {/* 5-Star Rating */}
                      <div style={{ display: 'flex', gap: '0.35rem', color: '#f59e0b', margin: '0.3rem 0' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} fill="#f59e0b" />
                        ))}
                      </div>
                    </div>

                    {/* Hover/Tap Prompt */}
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', fontWeight: 700, letterSpacing: '0.04em' }}>
                      Hover / Tap to read review ↺
                    </div>
                  </div>

                  {/* BACK SIDE: White Panel showing the full client quote review text */}
                  <div className="flip-card-back">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} fill="#f59e0b" />
                        ))}
                      </div>
                      <Quote size={24} color="var(--kpalee-emerald)" opacity={0.6} />
                    </div>

                    <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.65, fontStyle: 'italic', flex: 1 }}>
                      "{item.quote}"
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-color)' }}>
                      <img
                        src={item.avatar}
                        alt={item.author}
                        style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--kpalee-emerald)' }}
                      />
                      <div>
                        <strong style={{ fontSize: '0.88rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>{item.author}</strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.org}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
