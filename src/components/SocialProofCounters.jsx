import React, { useState, useEffect } from 'react';
import { Award, Building2, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export default function SocialProofCounters() {
  // Target Target Values
  const initialStats = [
    { id: 'cert', label: 'Certificates Issued', target: 12000, suffix: '+', icon: Award, color: 'var(--kpalee-emerald)' },
    { id: 'org', label: 'Organizations & Schools', target: 850, suffix: '+', icon: Building2, color: 'var(--kpalee-teal)' },
    { id: 'evt', label: 'Events Powered', target: 120, suffix: '+', icon: Calendar, color: 'var(--kpalee-emerald)' },
    { id: 'rate', label: 'Successful Delivery', target: 98, suffix: '%', icon: CheckCircle2, color: 'var(--kpalee-gold)' }
  ];

  // Animated Counter Values State
  const [counts, setCounts] = useState({
    cert: 0,
    org: 0,
    evt: 0,
    rate: 0
  });

  const [clickedCard, setClickedCard] = useState(null);

  // Animated Count-Up Effect on Mount
  useEffect(() => {
    const duration = 1600; // ms
    const steps = 30;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      setCounts({
        cert: Math.min(12000, Math.floor(12000 * progress)),
        org: Math.min(850, Math.floor(850 * progress)),
        evt: Math.min(120, Math.floor(120 * progress)),
        rate: Math.min(98, Math.floor(98 * progress))
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Interactive Click Boost Handler (Mobile & PC)
  const handleCardClick = (stat) => {
    setClickedCard(stat.id);

    // Boost count on click
    setCounts(prev => ({
      ...prev,
      [stat.id]: prev[stat.id] + 1
    }));

    // Reset visual pulse after 600ms
    setTimeout(() => {
      setClickedCard(null);
    }, 600);
  };

  return (
    <section style={{
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      background: 'rgba(255, 255, 255, 0.75)',
      padding: '2.5rem 1rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.4rem' }}>
            <Sparkles size={12} /> Live Recognition Metrics
          </span>
          <p style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
            Trusted by top creators, schools, communities & event teams (Tap card to boost!)
          </p>
        </div>

        <div className="social-proof-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem',
          textAlign: 'center'
        }}>
          {initialStats.map((stat) => {
            const Icon = stat.icon;
            const currentVal = counts[stat.id];
            const isPulsing = clickedCard === stat.id;

            return (
              <div
                key={stat.id}
                onClick={() => handleCardClick(stat)}
                className="glass-panel metric-card-interactive"
                style={{
                  padding: '1.35rem 0.85rem',
                  borderRadius: 'var(--radius-md)',
                  background: isPulsing ? 'var(--kpalee-mint-soft)' : '#ffffff',
                  borderColor: isPulsing ? 'var(--kpalee-emerald)' : 'var(--border-color)',
                  transform: isPulsing ? 'scale(1.08)' : 'scale(1)'
                }}
                title="Click to interact & boost live count!"
              >
                {/* Floating +1 Particle Badge on Click */}
                {isPulsing && (
                  <span
                    className="animate-pop-in"
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '12px',
                      background: 'var(--kpalee-emerald)',
                      color: '#ffffff',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '999px',
                      boxShadow: '0 2px 6px rgba(0,168,120,0.4)'
                    }}
                  >
                    +1 Boost!
                  </span>
                )}

                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--kpalee-mint-soft)',
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem auto'
                }}>
                  <Icon size={22} />
                </div>

                <div className="social-stat-number" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--kpalee-dark-bg)', marginBottom: '0.2rem' }}>
                  {currentVal.toLocaleString()}{stat.suffix}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
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
