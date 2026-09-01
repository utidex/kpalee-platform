import React from 'react';
import { UploadCloud, Users, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Choose your path',
      desc: 'Upload your existing certificate design, choose from Kpalee templates, or request a custom design.',
      icon: UploadCloud,
      badge: 'Flexible Setup'
    },
    {
      num: '02',
      title: 'Add recipients',
      desc: 'Import your attendee list via CSV/Excel spreadsheet or enter recipients manually in seconds.',
      icon: Users,
      badge: 'Bulk Import'
    },
    {
      num: '03',
      title: 'Personalize & generate',
      desc: 'Map dynamic recipient fields (Name, Date, ID, Signature, QR Code) and preview batch output.',
      icon: Sparkles,
      badge: 'Auto Mapping'
    },
    {
      num: '04',
      title: 'Deliver & celebrate',
      desc: 'Certificates are generated. Recipients receive their personal links to view, download, and share.',
      icon: Send,
      badge: 'Zero Login Needed'
    }
  ];

  return (
    <section style={{ padding: '5rem 2rem', maxWidth: '1350px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
          Frictionless Workflow
        </span>
        <h2 className="font-serif" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem' }}>
          How Kpalee Works
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          From bulk recipient upload to instant certificate delivery — issuing credentials has never been this smooth.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
        gap: '2rem'
      }}>
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                background: '#ffffff',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform var(--transition-smooth), border-color var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--kpalee-emerald)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-emerald)', opacity: 0.85 }}>
                    {step.num}
                  </span>
                  <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                    {step.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.65rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {step.desc}
                </p>
              </div>

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
                <Icon size={22} />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
