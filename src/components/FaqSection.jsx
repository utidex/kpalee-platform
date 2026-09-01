import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Do recipients need an account to view or download their certificates?',
      a: 'No! Kpalee is built around a zero-account barrier. Recipients receive a direct personalized link via email or QR code. They can view, verify, download high-definition PNGs or PDFs, and share to LinkedIn with a single click.'
    },
    {
      q: 'How does the Pay-As-You-Issue volume pricing work?',
      a: 'Your first 50 certificates are 100% Free! Beyond 50 certificates, pricing automatically scales down with volume discounts (e.g. ₦350, ₦280, ₦220 down to ₦180 per copy). International billing in USD, EUR, and GBP is supported.'
    },
    {
      q: 'Can I upload my own custom certificate artwork and signature?',
      a: 'Absolutely! You can upload your existing custom PDF or PNG certificate designs, map dynamic text fields, and upload manual handwritten signature images or seal graphics directly onto the canvas.'
    },
    {
      q: 'How does the "Get Your Event DP" Profile Picture Generator work?',
      a: 'Event organizers configure event identity badges. Attendees upload their photo, pick from platform-determined dimensions (Square 1:1, Lanyard ID, Vertical Story), and download a custom branded social profile frame for WhatsApp and LinkedIn.'
    },
    {
      q: 'How does QR Code Verification prevent certificate fraud?',
      a: 'Every issued certificate contains a unique cryptographic ID and embedded QR code. Anyone can scan the QR code or enter the ID on Kpalee to instantly verify the certificate title, recipient name, issuer authority, and issuance date.'
    }
  ];

  return (
    <section style={{ padding: '5.5rem 1.5rem', background: '#ffffff', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '0.85rem' }}>
            <HelpCircle size={14} /> Got Questions?
          </span>
          <h2 className="font-serif" style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
            Everything you need to know about issuing certificates, event badges, and verification on Kpalee.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1.5px solid var(--kpalee-emerald)' : '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.5rem',
                    background: isOpen ? 'var(--kpalee-mint-soft)' : '#ffffff',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <span style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                    color: 'var(--kpalee-emerald)'
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '1.25rem 1.5rem 1.5rem 1.5rem', fontSize: '0.96rem', color: 'var(--text-muted)', lineHeight: 1.65, borderTop: '1px solid rgba(0,168,120,0.15)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
