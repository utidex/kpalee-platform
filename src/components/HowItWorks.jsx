import React from 'react';
import { UploadCloud, Users, Sparkles, Send } from 'lucide-react';
import stepPreviewImg from '../assets/step_preview.png';

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
      desc: 'Import your attendee list via CSV/Excel spreadsheet or enter recipients manually in seconds with automatic column mapping.',
      icon: Users,
      badge: 'BULK IMPORT',
      color: '#0f766e',
      bgColor: '#ccfbf1'
    },
    {
      num: '03',
      title: 'Personalize & generate',
      desc: 'Map dynamic recipient fields (Name, Date, ID, Signature, QR Code) and preview batch output before issuance.',
      icon: Sparkles,
      badge: 'AUTO MAPPING',
      color: '#3359df',
      bgColor: '#eff6ff'
    },
    {
      num: '04',
      title: 'Deliver & celebrate',
      desc: 'Certificates are generated. Recipients receive personal links to view, download, and share on LinkedIn & WhatsApp.',
      icon: Send,
      badge: 'ZERO LOGIN NEEDED',
      color: '#d97706',
      bgColor: '#fffbeb'
    }
  ];

  return (
    <section style={{ padding: '5rem 1.5rem 6rem 1.5rem', maxWidth: '1350px', margin: '0 auto', overflow: 'visible' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '0.85rem', padding: '0.35rem 0.9rem' }}>
          FRICTIONLESS WORKFLOW
        </span>
        <h2 className="font-serif" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
          How Kpalee Works
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          From bulk recipient upload to instant certificate delivery — issuing credentials has never been this smooth.
        </p>
      </div>

      {/* Sticky Stacking Collapsing Scroll Cards Container for PC */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="how-it-works-card"
              style={{
                position: 'sticky',
                top: `${100 + idx * 25}px`,
                zIndex: idx + 1,
                background: '#ffffff',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem 3.5rem',
                boxShadow: `0 ${10 + idx * 8}px ${30 + idx * 10}px rgba(6, 26, 22, ${0.08 + idx * 0.03})`,
                transition: 'all 0.3s ease',
                marginBottom: '1rem'
              }}
            >
              <div className="how-it-works-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}>
                
                {/* Left Step Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.1rem' }}>
                    <span style={{ fontSize: '2.5rem', fontWeight: 900, color: step.color, lineHeight: 1 }}>
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

                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.75rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Right Visual Image Placeholder */}
                <div style={{
                  background: step.bgColor,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1.5px solid ${step.color}30`,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.04)'
                }}>
                  {step.num === '02' ? (
                    <img
                      src={stepPreviewImg}
                      alt="CSV Recipient Import Illustration"
                      style={{ width: '100%', maxHeight: '190px', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      padding: '1.5rem',
                      background: '#ffffff',
                      borderRadius: 'var(--radius-sm)',
                      textAlign: 'center',
                      border: '1px solid var(--border-color)'
                    }}>
                      <div style={{
                        width: '58px',
                        height: '58px',
                        borderRadius: '16px',
                        background: step.bgColor,
                        color: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.75rem auto'
                      }}>
                        <Icon size={28} />
                      </div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>
                        {step.title} Preview
                      </strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Automated Kpalee Workflow</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
