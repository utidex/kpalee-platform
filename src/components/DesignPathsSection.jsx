import React from 'react';
import { UploadCloud, Layers, PenTool, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DesignPathsSection({ onSelectOption }) {
  const options = [
    {
      id: 'upload',
      title: 'Upload your design',
      desc: 'Already have a custom PDF or PNG certificate design? Upload it directly and map dynamic recipient name fields.',
      buttonText: 'Upload Design',
      icon: UploadCloud,
      badge: 'Existing Artwork'
    },
    {
      id: 'template',
      title: 'Start from a template',
      desc: 'Choose from professionally designed Kpalee certificate templates tailored for bootcamps, awards, and events.',
      buttonText: 'Browse Templates',
      icon: Layers,
      badge: 'Instant Presets'
    },
    {
      id: 'custom',
      title: 'Request a custom design',
      desc: 'Need institutional logos, special security seals, or unique branding? Tell us what you imagine and our owner team will build it.',
      buttonText: 'Request a Design',
      icon: PenTool,
      badge: 'Bespoke Creation'
    }
  ];

  return (
    <section style={{ padding: '4.5rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
          3 Flexible Creation Pathways
        </span>
        <h2 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem' }}>
          Your Certificates, Your Way
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Whether you have ready-made graphics or need custom artwork, Kpalee supports every workflow.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {options.map((opt) => {
          const Icon = opt.icon;
          return (
            <div
              key={opt.id}
              className="glass-panel"
              style={{
                padding: '2.25rem 2rem',
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'var(--kpalee-mint-soft)',
                    color: 'var(--kpalee-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} />
                  </div>
                  <span className="badge badge-emerald">{opt.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.65rem' }}>
                  {opt.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {opt.desc}
                </p>
              </div>

              <button
                onClick={() => onSelectOption(opt.id)}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {opt.buttonText} <ArrowRight size={17} />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
