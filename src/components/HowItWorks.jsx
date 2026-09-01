import React from 'react';
import { UploadCloud, Users, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';
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
      bgColor: '#f0fdf4',
      previewType: 'template_choice'
    },
    {
      num: '02',
      title: 'Add recipients',
      desc: 'Import your attendee list via CSV/Excel spreadsheet or enter recipients manually in seconds with automatic column mapping.',
      icon: Users,
      badge: 'BULK IMPORT',
      color: '#0f766e',
      bgColor: '#ccfbf1',
      previewType: 'csv_import'
    },
    {
      num: '03',
      title: 'Personalize & generate',
      desc: 'Map dynamic recipient fields (Name, Date, ID, Signature, QR Code) and preview batch output before issuance.',
      icon: Sparkles,
      badge: 'AUTO MAPPING',
      color: '#3359df',
      bgColor: '#eff6ff',
      previewType: 'field_map'
    },
    {
      num: '04',
      title: 'Deliver & celebrate',
      desc: 'Certificates are generated. Recipients receive personal links to view, download, and share on LinkedIn & WhatsApp.',
      icon: Send,
      badge: 'ZERO LOGIN NEEDED',
      color: '#d97706',
      bgColor: '#fffbeb',
      previewType: 'email_share'
    }
  ];

  return (
    <section style={{ padding: '6rem 2rem 8rem 2rem', maxWidth: '1380px', margin: '0 auto' }}>
      
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

      {/* Sticky Stacking Collapsing Cards Container (Wider & Taller) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              style={{
                position: 'sticky',
                top: `${110 + idx * 30}px`,
                zIndex: idx + 1,
                background: '#ffffff',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '3.5rem 4rem',
                minHeight: '340px',
                boxShadow: `0 ${12 + idx * 8}px ${35 + idx * 10}px rgba(6, 26, 22, ${0.07 + idx * 0.03})`,
                transition: 'all 0.3s ease',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}>
                
                {/* Left Step Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '2.8rem', fontWeight: 900, color: step.color, lineHeight: 1 }}>
                      {step.num}
                    </span>
                    <span
                      style={{
                        background: step.bgColor,
                        color: step.color,
                        border: `1px solid ${step.color}40`,
                        padding: '0.4rem 0.95rem',
                        borderRadius: '999px',
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em'
                      }}
                    >
                      {step.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>

                {/* Right Visual Image Placeholder / Graphic Mockup */}
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
                  {step.previewType === 'csv_import' ? (
                    <img
                      src={stepPreviewImg}
                      alt="CSV Recipient Import Illustration"
                      style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: 'var(--radius-sm)' }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      padding: '1.75rem',
                      background: '#ffffff',
                      borderRadius: 'var(--radius-sm)',
                      textAlign: 'center',
                      border: '1px solid var(--border-color)'
                    }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '16px',
                        background: step.bgColor,
                        color: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.85rem auto'
                      }}>
                        <Icon size={32} />
                      </div>
                      <strong style={{ fontSize: '1rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>
                        {step.title} Step Preview
                      </strong>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Interactive UI Studio Automation</span>
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
