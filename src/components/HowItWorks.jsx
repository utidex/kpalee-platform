import React from 'react';
import { UploadCloud, Users, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Choose your path',
      desc: 'Upload your existing certificate design, choose from Kpalee templates, or request a custom design.',
      icon: UploadCloud,
      badge: 'FLEXIBLE SETUP',
      color: '#00a878',
      bgColor: '#f0fdf4'
    },
    {
      num: '02',
      title: 'Add recipients',
      desc: 'Import your attendee list via CSV/Excel spreadsheet or enter recipients manually in seconds.',
      icon: Users,
      badge: 'BULK IMPORT',
      color: '#0f766e',
      bgColor: '#ccfbf1'
    },
    {
      num: '03',
      title: 'Personalize & generate',
      desc: 'Map dynamic recipient fields (Name, Date, ID, Signature, QR Code) and preview batch output.',
      icon: Sparkles,
      badge: 'AUTO MAPPING',
      color: '#3359df',
      bgColor: '#eff6ff'
    },
    {
      num: '04',
      title: 'Deliver & celebrate',
      desc: 'Certificates are generated. Recipients receive their personal links to view, download, and share.',
      icon: Send,
      badge: 'ZERO LOGIN NEEDED',
      color: '#d97706',
      bgColor: '#fffbeb'
    }
  ];

  return (
    <section style={{ padding: '6rem 2rem 8rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '1rem', padding: '0.4rem 1rem' }}>
          FRICTIONLESS WORKFLOW
        </span>
        <h2 className="font-serif" style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem', lineHeight: 1.15 }}>
          How Kpalee Works
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          From bulk recipient upload to instant certificate delivery — issuing credentials has never been this smooth.
        </p>
      </div>

      {/* Sticky Stacking Collapsing Cards Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              style={{
                position: 'sticky',
                top: `${120 + idx * 25}px`,
                zIndex: idx + 1,
                background: '#ffffff',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 3.5rem',
                boxShadow: `0 ${10 + idx * 8}px ${30 + idx * 10}px rgba(6, 26, 22, ${0.06 + idx * 0.03})`,
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}>
                
                {/* Left Card Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '2.6rem', fontWeight: 900, color: step.color, lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <span
                      style={{
                        background: step.bgColor,
                        color: step.color,
                        border: `1px solid ${step.color}40`,
                        padding: '0.35rem 0.85rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em'
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Right Visual Icon Box */}
                <div style={{
                  background: step.bgColor,
                  borderRadius: 'var(--radius-md)',
                  padding: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${step.color}25`
                }}>
                  <div style={{
                    width: '74px',
                    height: '74px',
                    borderRadius: '20px',
                    background: '#ffffff',
                    color: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
                  }}>
                    <Icon size={36} />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
