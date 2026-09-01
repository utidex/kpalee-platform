import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Check, Layers, Move, User, Award, QrCode, PenTool, Palette, Type, RefreshCw } from 'lucide-react';

export default function HeroSection({ onCreateCertificateClick, onExploreTemplatesClick }) {
  // Dynamic Hero State
  const [recipientName, setRecipientName] = useState('Sarah J. Jenkins');
  const [certTitle, setCertTitle] = useState('CERTIFICATE OF MASTERY');
  const [activeColor, setActiveColor] = useState('#00a878');
  const [borderTheme, setBorderTheme] = useState('cert-border-gold');
  const [titleFont, setTitleFont] = useState('Playfair Display');
  const [signatureFont, setSignatureFont] = useState('Pinyon Script');
  const [showQrCode, setShowQrCode] = useState(true);
  const [showSignature, setShowSignature] = useState(true);

  const colors = [
    { name: 'Mint Emerald', hex: '#00a878' },
    { name: 'Dark Teal', hex: '#0f766e' },
    { name: 'Royal Blue', hex: '#3359df' },
    { name: 'Classic Gold', hex: '#d97706' },
    { name: 'Regal Purple', hex: '#8b5cf6' }
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '4.5rem 2rem 5.5rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(0, 168, 120, 0.14) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Hero Headline & CTAs */}
      <div style={{
        textAlign: 'center',
        maxWidth: '860px',
        margin: '0 auto 3.5rem auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-emerald" style={{ padding: '0.35rem 0.95rem', fontSize: '0.82rem' }}>
            <Sparkles size={14} color="var(--kpalee-emerald)" /> Digital Recognition Engine
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>• Zero Recipient Account Needed</span>
        </div>

        <h1 className="font-serif animate-slide-up" style={{
          fontSize: '3.8rem',
          fontWeight: 800,
          color: 'var(--kpalee-dark-bg)',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '1.4rem'
        }}>
          Certificates people are <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--kpalee-emerald), var(--kpalee-teal))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            proud to receive.
          </span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          marginBottom: '2.25rem',
          fontWeight: 400
        }}>
          Design, issue, verify and showcase digital certificates & event badges at scale. <br />
          Frictionless delivery for organizers, instant bragging rights for recipients.
        </p>

        {/* Hero Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onCreateCertificateClick}
            className="btn-primary"
            style={{ padding: '0.9rem 1.9rem', fontSize: '1.05rem' }}
          >
            Create a certificate <ArrowRight size={19} />
          </button>

          <button
            onClick={onExploreTemplatesClick}
            className="btn-secondary"
            style={{ padding: '0.9rem 1.9rem', fontSize: '1.05rem' }}
          >
            Explore templates
          </button>
        </div>
      </div>

      {/* Dynamic Live Certificate Builder Demonstration */}
      <div className="glass-panel animate-pop-in" style={{
        maxWidth: '1150px',
        margin: '0 auto',
        padding: '2.25rem',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: '1.5px solid var(--border-color)',
        position: 'relative'
      }}>
        
        {/* Interactive Editor Control Panel */}
        <div style={{
          background: 'var(--kpalee-mint-soft)',
          padding: '1.1rem 1.4rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(0, 168, 120, 0.25)',
          marginBottom: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <PenTool size={18} color="var(--kpalee-emerald)" /> Live Interactive Builder — Try Editing Live!
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>Real-Time Canvas Render</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.85rem',
            alignItems: 'center'
          }}>
            {/* Input Recipient Name */}
            <div>
              <label className="form-label" style={{ fontSize: '0.72rem' }}>Recipient Name</label>
              <input
                type="text"
                className="input-field"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient Name..."
                style={{ width: '100%', padding: '0.4rem 0.75rem', fontSize: '0.88rem' }}
              />
            </div>

            {/* Input Certificate Title */}
            <div>
              <label className="form-label" style={{ fontSize: '0.72rem' }}>Certificate Title</label>
              <input
                type="text"
                className="input-field"
                value={certTitle}
                onChange={(e) => setCertTitle(e.target.value)}
                placeholder="Certificate Title..."
                style={{ width: '100%', padding: '0.4rem 0.75rem', fontSize: '0.88rem' }}
              />
            </div>

            {/* Title Font Selector */}
            <div>
              <label className="form-label" style={{ fontSize: '0.72rem' }}>Title Typography</label>
              <select
                className="select-field"
                value={titleFont}
                onChange={(e) => setTitleFont(e.target.value)}
                style={{ width: '100%', padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
              >
                <option value="Playfair Display">Playfair Display (Serif)</option>
                <option value="Cinzel">Cinzel (Roman Regal)</option>
                <option value="Outfit">Outfit (Modern)</option>
                <option value="Montserrat">Montserrat (Clean)</option>
              </select>
            </div>

            {/* Signature Font Selector */}
            <div>
              <label className="form-label" style={{ fontSize: '0.72rem' }}>Signature Style</label>
              <select
                className="select-field"
                value={signatureFont}
                onChange={(e) => setSignatureFont(e.target.value)}
                style={{ width: '100%', padding: '0.4rem 0.75rem', fontSize: '0.85rem' }}
              >
                <option value="Pinyon Script">Pinyon Calligraphy</option>
                <option value="Alex Brush">Alex Brush Script</option>
                <option value="Great Vibes">Great Vibes Cursive</option>
                <option value="Dancing Script">Dancing Script</option>
              </select>
            </div>
          </div>

          {/* Color Palette Switcher & Frame Switcher */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,168,120,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>Accent Color:</span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {colors.map(c => (
                  <button
                    key={c.hex}
                    onClick={() => setActiveColor(c.hex)}
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: c.hex,
                      border: activeColor === c.hex ? '2.5px solid #061a16' : '1px solid #fff',
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                      transform: activeColor === c.hex ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.2s ease'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>Frame:</span>
              <select
                className="select-field"
                value={borderTheme}
                onChange={(e) => setBorderTheme(e.target.value)}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
              >
                <option value="cert-border-gold">Mint Filigree Frame</option>
                <option value="cert-border-royal">Royal Double Border</option>
                <option value="cert-border-classic">Classic Regal Slate</option>
                <option value="cert-border-minimal">Minimalist Line</option>
                <option value="cert-border-ornate">Ornate Emerald</option>
              </select>
            </div>
          </div>

        </div>

        {/* Live Certificate Canvas Display */}
        <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
          
          {/* Floating Orbit Badges */}
          <div className="animate-float" style={{
            position: 'absolute',
            top: '-15px',
            left: '25px',
            background: 'var(--kpalee-dark-bg)',
            color: '#ffffff',
            padding: '0.45rem 0.95rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            boxShadow: '0 4px 14px rgba(0,0,0,0.2)'
          }}>
            <User size={15} color="var(--kpalee-emerald-light)" /> Recipient: {recipientName}
          </div>

          <div className="animate-float" style={{
            position: 'absolute',
            bottom: '25px',
            right: '30px',
            background: '#ffffff',
            border: '1.5px solid var(--kpalee-emerald)',
            color: 'var(--kpalee-dark-bg)',
            padding: '0.45rem 0.95rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.78rem',
            fontWeight: 700,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            animationDelay: '1.8s',
            boxShadow: 'var(--shadow-md)'
          }}>
            <ShieldCheck size={15} color="var(--kpalee-emerald)" /> Instant QR Verification
          </div>

          {/* Certificate Canvas Render */}
          <div
            className={`cert-canvas-container ${borderTheme}`}
            style={{
              background: '#ffffff',
              minWidth: '700px',
              padding: '2.75rem 3.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            {/* Organization Header */}
            <div style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--kpalee-dark-bg)', textTransform: 'uppercase' }}>
              ANTIGRAVITY ACADEMY & KPALEE PLATFORM
            </div>

            {/* Certificate Body */}
            <div style={{ width: '100%', margin: '1.1rem 0' }}>
              <h2
                style={{
                  fontFamily: titleFont,
                  fontSize: '2.3rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#061a16',
                  textTransform: 'uppercase',
                  margin: '0.2rem 0'
                }}
              >
                {certTitle || 'CERTIFICATE OF MASTERY'}
              </h2>

              <p style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', fontStyle: 'italic', color: '#475569', margin: '0.35rem 0' }}>
                This is proudly conferred upon
              </p>

              {/* Dynamic Recipient Name */}
              <h3
                style={{
                  fontFamily: signatureFont,
                  fontSize: '3.6rem',
                  fontWeight: 600,
                  color: activeColor,
                  margin: '0.5rem 0 0.2rem 0',
                  lineHeight: 1.15
                }}
              >
                {recipientName || 'Recipient Name'}
              </h3>

              <div style={{
                width: '190px',
                height: '2.5px',
                background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                margin: '0.4rem auto 0.8rem auto'
              }} />

              <p style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', color: '#103830', maxWidth: '560px', margin: '0 auto', lineHeight: 1.55 }}>
                for outstanding achievements in Advanced Full-Stack Architecture, Digital Recognition & Event Systems.
              </p>
            </div>

            {/* Footer Elements: Date, Seal, Signature */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 1rem' }}>
              {/* Date */}
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#061a16' }}>September 1, 2026</div>
                <div style={{ borderTop: '1.5px solid #a1e9c9', marginTop: '0.25rem', paddingTop: '0.2rem', fontSize: '0.7rem', color: '#476355', fontWeight: 700 }}>
                  DATE ISSUED
                </div>
              </div>

              {/* QR Code Tag */}
              {showQrCode && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                  <div style={{ background: '#f8faf9', padding: '0.4rem', borderRadius: '8px', border: '1px solid #d1f2e4' }}>
                    <QrCode size={42} color="var(--kpalee-dark-bg)" />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: activeColor }}>ID: KP-2026-004829</span>
                </div>
              )}

              {/* Calligraphic Signature Line */}
              {showSignature && (
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: signatureFont, fontSize: '2rem', color: '#061a16', lineHeight: 1 }}>
                    Alexander Vance
                  </div>
                  <div style={{ borderTop: '1.5px solid #a1e9c9', marginTop: '0.25rem', paddingTop: '0.2rem', fontSize: '0.7rem', color: '#476355', fontWeight: 700 }}>
                    DIRECTOR OF LEARNING
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
