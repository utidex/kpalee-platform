import React from 'react';
import { Award, Building2, Calendar, CheckCircle2 } from 'lucide-react';

export default function SocialProofCounters() {
  const stats = [
    { label: 'Certificates Issued', value: '12,000+', icon: Award, color: 'var(--kpalee-emerald)' },
    { label: 'Organizations & Schools', value: '850+', icon: Building2, color: 'var(--kpalee-teal)' },
    { label: 'Events Powered', value: '120+', icon: Calendar, color: 'var(--kpalee-emerald)' },
    { label: 'Successful Delivery', value: '98%', icon: CheckCircle2, color: 'var(--kpalee-gold)' }
  ];

  return (
    <section style={{
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      background: 'rgba(255, 255, 255, 0.7)',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Trusted by top creators, schools, communities & event teams
        </p>

        <div className="social-proof-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel" style={{ padding: '1.25rem 0.85rem', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--kpalee-mint-soft)',
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.65rem auto'
                }}>
                  <Icon size={20} />
                </div>
                <div className="social-stat-number" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.2rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
