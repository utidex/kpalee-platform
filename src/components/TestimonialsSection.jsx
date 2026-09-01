import React from 'react';
import { Star, Building2, Quote, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
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
      quote: "We issued 850 attendance certificates in less than 2 minutes right after Lagos Tech Week. The zero-account link meant attendees shared their certificates on LinkedIn instantly!",
      author: "Tunde Olatunji",
      title: "Head of Operations",
      org: "Lagos Tech Week 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The 'Get Your Event DP' profile frame generator went viral across WhatsApp and Twitter during our conference. Attendees loved customizing their official delegate badges.",
      author: "Amina Babatunde",
      title: "Community Director",
      org: "Pan-African Developers Network",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Kpalee completely eliminated our PDF paperwork nightmare. The dynamic field mapping and cryptographic QR verification give our diplomas institutional credibility.",
      author: "Chidi Chukwuma",
      title: "Program Lead",
      org: "West African Innovation Academy",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

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
            Customer Stories & Praise
          </span>
          <h2 className="font-serif" style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem' }}>
            Loved by Organizers & Attendees
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            See how organizations use Kpalee to issue certificates, boost event engagement, and scale recognition.
          </p>
        </div>

        {/* Dynamic 3D Hover & Glow Testimonial Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="testimonial-card"
            >
              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '0.98rem', color: 'var(--text-main)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '2rem' }}>
                  "{item.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <img
                  src={item.avatar}
                  alt={item.author}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--kpalee-emerald)' }}
                />
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                    {item.author}
                  </h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>
                    {item.title} • <strong>{item.org}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
