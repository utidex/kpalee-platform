import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export default function Footer({ setCurrentView }) {
  return (
    <footer className="no-print" style={{
      borderTop: '1px solid var(--border-color)',
      background: 'var(--kpalee-dark-bg)',
      color: '#ffffff',
      padding: '4rem 2rem 2.5rem 2rem',
      marginTop: '5rem'
    }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{
                background: 'var(--kpalee-emerald)',
                color: '#ffffff',
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Shield size={20} />
              </div>
              <span className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>
                Kpalee<span style={{ color: 'var(--kpalee-emerald-light)' }}>.</span>
              </span>
            </div>

            <p style={{ color: '#a1e9c9', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Recognition, beautifully delivered. Issue, verify, and showcase digital certificates and event badges at scale.
            </p>

            <span className="badge badge-emerald" style={{ background: 'rgba(0, 168, 120, 0.2)', color: '#ffffff' }}>
              <Sparkles size={12} /> Designed for African Tech & Beyond
            </span>
          </div>

          {/* Product Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product & Features
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#cbf3e0' }}>
              <li><a href="#landing" onClick={() => setCurrentView('landing')} style={{ color: 'inherit', textDecoration: 'none' }}>Digital Certificates</a></li>
              <li><a href="#badges" onClick={() => setCurrentView('badges')} style={{ color: 'inherit', textDecoration: 'none' }}>Event Badges & Identity</a></li>
              <li><a href="#dp" onClick={() => setCurrentView('dp')} style={{ color: 'inherit', textDecoration: 'none' }}>"Get Your Event DP" Generator</a></li>
              <li><a href="#verify" onClick={() => setCurrentView('verify')} style={{ color: 'inherit', textDecoration: 'none' }}>Cryptographic QR Verification</a></li>
              <li><a href="#pricing" onClick={() => setCurrentView('landing')} style={{ color: 'inherit', textDecoration: 'none' }}>Volume Pricing Calculator</a></li>
            </ul>
          </div>

          {/* Issuer Resources Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Issuers & Developers
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#cbf3e0' }}>
              <li><a href="#dashboard" onClick={() => setCurrentView('dashboard')} style={{ color: 'inherit', textDecoration: 'none' }}>Issuer Control Portal</a></li>
              <li><a href="#bulk" onClick={() => setCurrentView('dashboard')} style={{ color: 'inherit', textDecoration: 'none' }}>Bulk Recipient CSV Import</a></li>
              <li><a href="#custom" onClick={() => setCurrentView('dashboard')} style={{ color: 'inherit', textDecoration: 'none' }}>Request Custom Artwork</a></li>
              <li><a href="#api" style={{ color: 'inherit', textDecoration: 'none' }}>Verification API Docs</a></li>
            </ul>
          </div>

          {/* Legal & Platform Info */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Kpalee Trust & Legal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#cbf3e0' }}>
              <li>Privacy Policy & Security</li>
              <li>Terms of Credentials Issuance</li>
              <li>Anti-Fraud & Authenticity Verification</li>
              <li>Contact Support: support@kpalee.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#88a897'
        }}>
          <div>
            © 2026 Kpalee Technologies Inc. All rights reserved.
          </div>
          <div>
            "You achieved something. Kpalee makes it worth showing."
          </div>
        </div>

      </div>
    </footer>
  );
}
