import React from 'react';
import { Award, Building2, Calendar, CheckCircle2, ShieldCheck, Users } from 'lucide-react';

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
      padding: '3rem 2rem'
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Trusted by top creators, schools, communities & event teams
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.75rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="glass-panel" style={{ padding: '1.75rem 1.25rem', borderRadius: 'var(--radius-md)', background: '#ffffff' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'var(--kpalee-mint-soft)',
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <Icon size={24} />
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.35rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
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
