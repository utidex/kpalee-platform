import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  QrCode, 
  PenTool, 
  UploadCloud, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Palette, 
  Sliders, 
  Type, 
  Layers,
  ShieldAlert
} from 'lucide-react';

export default function HeroSection({ onCreateCertificateClick, onExploreTemplatesClick }) {
  // Advanced Certificate Customization State
  const [recipientName, setRecipientName] = useState('Sarah J. Jenkins');
  const [certTitle, setCertTitle] = useState('CERTIFICATE OF MASTERY');
  const [isTwoLines, setIsTwoLines] = useState(false);
  const [textAlign, setTextAlign] = useState('center'); // 'left' | 'center' | 'right'
  const [activeColor, setActiveColor] = useState('#00a878');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderTheme, setBorderTheme] = useState('cert-border-gold');
  const [titleFont, setTitleFont] = useState('Playfair Display');
  const [signatureFont, setSignatureFont] = useState('Pinyon Script');
  const [showQrCode, setShowQrCode] = useState(true);
  const [showSignature, setShowSignature] = useState(true);
  
  // Security Watermark State
  const [showWatermark, setShowWatermark] = useState(true);
  const [watermarkText, setWatermarkText] = useState('KPALEE VERIFIED');
  const [watermarkOpacity, setWatermarkOpacity] = useState(0.08);

  // Custom Signature Image Upload
  const [signatureImage, setSignatureImage] = useState(null);

  const presetColors = [
    { name: 'Mint Emerald', hex: '#00a878' },
    { name: 'Dark Teal', hex: '#0f766e' },
    { name: 'Royal Blue', hex: '#3359df' },
    { name: 'Classic Gold', hex: '#d97706' },
    { name: 'Regal Purple', hex: '#8b5cf6' },
    { name: 'Ruby Crimson', hex: '#dc2626' }
  ];

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignatureImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section style={{
      position: 'relative',
      padding: '3rem 1rem 4rem 1rem',
      maxWidth: '1440px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 168, 120, 0.16) 0%, rgba(15, 118, 110, 0.06) 50%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Hero Header Section */}
      <div style={{
        textAlign: 'center',
        maxWidth: '850px',
        margin: '0 auto 2.25rem auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span className="badge badge-emerald" style={{ padding: '0.3rem 0.85rem', fontSize: '0.78rem' }}>
            <Sparkles size={13} color="var(--kpalee-emerald)" /> Digital Recognition Engine
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>• Zero Recipient Login Needed</span>
        </div>

        <h1 className="font-serif animate-slide-up hero-title" style={{
          fontSize: '3.4rem',
          fontWeight: 800,
          color: 'var(--kpalee-dark-bg)',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '1rem'
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

        <p className="hero-subtext" style={{
          fontSize: '1.12rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1.75rem',
          fontWeight: 400
        }}>
          Design, issue, verify and showcase digital certificates & event badges at scale. <br />
          Frictionless delivery for organizers, instant bragging rights for recipients.
        </p>

        {/* Hero Action Buttons */}
        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={onCreateCertificateClick}
            className="btn-primary btn-mobile-full"
            style={{ padding: '0.8rem 1.75rem', fontSize: '1rem' }}
          >
            Create a certificate <ArrowRight size={18} />
          </button>

          <button
            onClick={onExploreTemplatesClick}
            className="btn-secondary btn-mobile-full"
            style={{ padding: '0.8rem 1.75rem', fontSize: '1rem' }}
          >
            Explore templates
          </button>
        </div>
      </div>

      {/* Advanced Interactive Editor & Canvas Stage */}
      <div className="glass-panel animate-pop-in" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '1.5rem 1rem',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: '1.5px solid var(--border-color)',
        position: 'relative'
      }}>
        
        {/* Editor Controls Header Bar */}
        <div style={{
          background: 'linear-gradient(135deg, var(--kpalee-mint-soft) 0%, #ffffff 100%)',
          padding: '1rem 1.15rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(0, 168, 120, 0.25)',
          marginBottom: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Sliders size={16} color="var(--kpalee-emerald)" /> Live Certificate Customizer
            </span>
            <span className="badge badge-emerald">Real-Time Studio</span>
          </div>

          {/* Control Grid Row 1: Texts & 2-Line Toggle */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem' }}>
            
            {/* Recipient Name */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Recipient Name</label>
              <input
                type="text"
                className="input-field"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient Name..."
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.85rem' }}
              />
            </div>

            {/* Certificate Title */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Certificate Title</label>
              <input
                type="text"
                className="input-field"
                value={certTitle}
                onChange={(e) => setCertTitle(e.target.value)}
                placeholder="Title..."
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.85rem' }}
              />
            </div>

            {/* 2-Line Title Break Toggle */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Title Format</label>
              <button
                type="button"
                onClick={() => setIsTwoLines(!isTwoLines)}
                className={isTwoLines ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center' }}
              >
                {isTwoLines ? '2-Line Break' : 'Single Line'}
              </button>
            </div>

            {/* Alignment Options */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Alignment</label>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => setTextAlign('left')}
                  className={textAlign === 'left' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.6rem', flex: 1, justifyContent: 'center' }}
                >
                  <AlignLeft size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setTextAlign('center')}
                  className={textAlign === 'center' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.6rem', flex: 1, justifyContent: 'center' }}
                >
                  <AlignCenter size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setTextAlign('right')}
                  className={textAlign === 'right' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.6rem', flex: 1, justifyContent: 'center' }}
                >
                  <AlignRight size={15} />
                </button>
              </div>
            </div>

          </div>

          {/* Control Grid Row 2: Colors, Signature Upload, Watermark & Theme */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0.75rem',
            paddingTop: '0.65rem',
            borderTop: '1px solid rgba(0,168,120,0.15)',
            alignItems: 'center'
          }}>
            
            {/* Security Watermark Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label className="form-label">Security Watermark</label>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => setShowWatermark(!showWatermark)}
                  className={showWatermark ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.42rem 0.65rem', fontSize: '0.78rem' }}
                >
                  Watermark {showWatermark ? '✓' : 'Off'}
                </button>
                <input
                  type="text"
                  className="input-field"
                  value={watermarkText}
                  onChange={(e) => setWatermarkText(e.target.value)}
                  placeholder="Watermark Text..."
                  style={{ padding: '0.42rem 0.65rem', fontSize: '0.8rem', flex: 1 }}
                />
              </div>
            </div>

            {/* Color Picker & Presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label className="form-label">Theme Color</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <input
                  type="color"
                  value={activeColor}
                  onChange={(e) => setActiveColor(e.target.value)}
                  style={{ width: '28px', height: '28px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {presetColors.map(c => (
                    <button
                      key={c.hex}
                      onClick={() => setActiveColor(c.hex)}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: c.hex,
                        border: activeColor === c.hex ? '2px solid #061a16' : '1px solid #fff',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Manual Signature Upload */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label className="form-label">Manual Signature</label>
              <label className="btn-secondary" style={{ padding: '0.42rem 0.75rem', fontSize: '0.78rem', cursor: 'pointer', justifyContent: 'center' }}>
                <UploadCloud size={14} color="var(--kpalee-emerald)" /> {signatureImage ? 'Change Image' : 'Upload Signature'}
                <input type="file" accept="image/*" onChange={handleSignatureUpload} style={{ display: 'none' }} />
              </label>
            </div>

            {/* Frame Style Dropdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label className="form-label">Frame Theme</label>
              <select
                className="select-field"
                value={borderTheme}
                onChange={(e) => setBorderTheme(e.target.value)}
                style={{ padding: '0.42rem 0.65rem', fontSize: '0.8rem' }}
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

        {/* Live Dynamic Certificate Canvas Stage */}
        <div className="cert-stage-wrapper">
          <div
            className={`cert-canvas-container ${borderTheme}`}
            style={{
              background: bgColor,
              alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
              textAlign: textAlign
            }}
          >
            {/* Watermark Security Text Overlay */}
            {showWatermark && (
              <div className="cert-watermark-overlay">
                <div
                  className="cert-watermark-text"
                  style={{ color: activeColor, opacity: watermarkOpacity }}
                >
                  {watermarkText}
                </div>
              </div>
            )}

            {/* Header Org Title */}
            <div className="cert-org-header" style={{ fontWeight: 800, letterSpacing: '0.18em', color: 'var(--kpalee-dark-bg)', textTransform: 'uppercase' }}>
              ANTIGRAVITY ACADEMY & KPALEE PLATFORM
            </div>

            {/* Certificate Body */}
            <div style={{ width: '100%', margin: '0.4rem 0' }}>
              
              {/* Title (Single line or 2-line break) */}
              <h2
                className="cert-title-heading"
                style={{
                  fontFamily: titleFont,
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#061a16',
                  textTransform: 'uppercase',
                  lineHeight: 1.18,
                  margin: '0.15rem 0'
                }}
              >
                {isTwoLines ? (
                  <>
                    {certTitle.split(' ')[0]} <br />
                    {certTitle.split(' ').slice(1).join(' ')}
                  </>
                ) : (
                  certTitle || 'CERTIFICATE OF MASTERY'
                )}
              </h2>

              <p style={{ fontFamily: 'Montserrat', fontSize: '0.78rem', fontStyle: 'italic', color: '#475569', margin: '0.15rem 0' }}>
                This is proudly conferred upon
              </p>

              {/* Dynamic Recipient Name */}
              <h3
                className="cert-recipient-name"
                style={{
                  fontFamily: signatureFont,
                  fontWeight: 600,
                  color: activeColor,
                  margin: '0.15rem 0',
                  lineHeight: 1.1
                }}
              >
                {recipientName || 'Recipient Name'}
              </h3>

              <div style={{
                width: '150px',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                margin: textAlign === 'center' ? '0.25rem auto 0.5rem auto' : textAlign === 'right' ? '0.25rem 0 0.5rem auto' : '0.25rem auto 0.5rem 0'
              }} />

              <p className="cert-citation-text" style={{ fontFamily: 'Montserrat', color: '#103830', maxWidth: '560px', margin: textAlign === 'center' ? '0 auto' : '0' }}>
                for outstanding achievements in Advanced Full-Stack Architecture, Digital Recognition & Event Identity Systems.
              </p>
            </div>

            {/* Footer Elements: Date, Seal, Signature */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              {/* Date */}
              <div style={{ textAlign: 'left' }}>
                <div className="cert-footer-text" style={{ fontWeight: 700, color: '#061a16' }}>September 1, 2026</div>
                <div style={{ borderTop: '1px solid #a1e9c9', marginTop: '0.15rem', paddingTop: '0.15rem', fontSize: '0.6rem', color: '#476355', fontWeight: 700 }}>
                  DATE ISSUED
                </div>
              </div>

              {/* QR Code Tag */}
              {showQrCode && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
                  <div style={{ background: '#f8faf9', padding: '0.25rem', borderRadius: '6px', border: '1px solid #d1f2e4' }}>
                    <QrCode size={30} color="var(--kpalee-dark-bg)" />
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 800, color: activeColor }}>ID: KP-2026-004829</span>
                </div>
              )}

              {/* Signature (Manual Image or Calligraphic Font) */}
              <div style={{ textAlign: 'right', minWidth: '120px' }}>
                {signatureImage ? (
                  <img
                    src={signatureImage}
                    alt="Uploaded Signature"
                    style={{ maxHeight: '38px', objectFit: 'contain', margin: '0 0 0 auto', display: 'block' }}
                  />
                ) : (
                  <div style={{ fontFamily: signatureFont, fontSize: '1.6rem', color: '#061a16', lineHeight: 1 }}>
                    Alexander Vance
                  </div>
                )}
                <div style={{ borderTop: '1px solid #a1e9c9', marginTop: '0.15rem', paddingTop: '0.15rem', fontSize: '0.6rem', color: '#476355', fontWeight: 700 }}>
                  DIRECTOR OF LEARNING
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
