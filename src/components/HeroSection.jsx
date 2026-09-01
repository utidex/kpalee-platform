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
  Image as ImageIcon
} from 'lucide-react';
import heroBannerImg from '../assets/hero_banner.png';

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
  
  // Custom Handwritten Signature Upload State
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
      padding: '4rem 2rem 5rem 2rem',
      maxWidth: '1440px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      
      {/* Background Glow & Vibrant Gradient Shapes */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(0, 168, 120, 0.18) 0%, rgba(15, 118, 110, 0.08) 50%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Hero Header Section */}
      <div style={{
        textAlign: 'center',
        maxWidth: '880px',
        margin: '0 auto 3rem auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-emerald" style={{ padding: '0.35rem 0.95rem', fontSize: '0.82rem' }}>
            <Sparkles size={14} color="var(--kpalee-emerald)" /> Digital Recognition Engine
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>• Zero Recipient Login Needed</span>
        </div>

        <h1 className="font-serif animate-slide-up" style={{
          fontSize: '3.8rem',
          fontWeight: 800,
          color: 'var(--kpalee-dark-bg)',
          lineHeight: 1.12,
          letterSpacing: '-0.03em',
          marginBottom: '1.25rem'
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
          fontSize: '1.18rem',
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

      {/* Advanced Interactive Editor & Canvas Stage */}
      <div className="glass-panel animate-pop-in" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2.25rem',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: '1.5px solid var(--border-color)',
        position: 'relative'
      }}>
        
        {/* Editor Controls Header Bar */}
        <div style={{
          background: 'linear-gradient(135deg, var(--kpalee-mint-soft) 0%, #ffffff 100%)',
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(0, 168, 120, 0.25)',
          marginBottom: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sliders size={18} color="var(--kpalee-emerald)" /> Certificate Customizer Panel
            </span>
            <span className="badge badge-emerald">Live Real-Time Studio</span>
          </div>

          {/* Control Grid Row 1: Texts & 2-Line Toggle */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            
            {/* Recipient Name */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Recipient Name</label>
              <input
                type="text"
                className="input-field"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Recipient Name..."
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.88rem' }}
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
                style={{ padding: '0.45rem 0.75rem', fontSize: '0.88rem' }}
              />
            </div>

            {/* 2-Line Title Break Toggle */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Title Line Format</label>
              <button
                type="button"
                onClick={() => setIsTwoLines(!isTwoLines)}
                className={isTwoLines ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                {isTwoLines ? '2-Line Split' : 'Single Line'}
              </button>
            </div>

            {/* Alignment Options */}
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label">Text Alignment</label>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                <button
                  type="button"
                  onClick={() => setTextAlign('left')}
                  className={textAlign === 'left' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.65rem', flex: 1, justifyContent: 'center' }}
                  title="Align Left"
                >
                  <AlignLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setTextAlign('center')}
                  className={textAlign === 'center' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.65rem', flex: 1, justifyContent: 'center' }}
                  title="Align Center"
                >
                  <AlignCenter size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setTextAlign('right')}
                  className={textAlign === 'right' ? 'btn-primary' : 'btn-secondary'}
                  style={{ padding: '0.45rem 0.65rem', flex: 1, justifyContent: 'center' }}
                  title="Align Right"
                >
                  <AlignRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Control Grid Row 2: Colors, Signature Upload & Theme */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(0,168,120,0.15)',
            alignItems: 'center'
          }}>
            
            {/* Color Picker & Presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <label className="form-label">Custom Theme Color</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="color"
                  value={activeColor}
                  onChange={(e) => setActiveColor(e.target.value)}
                  style={{ width: '32px', height: '32px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {presetColors.map(c => (
                    <button
                      key={c.hex}
                      onClick={() => setActiveColor(c.hex)}
                      style={{
                        width: '24px',
                        height: '24px',
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
              <label className="form-label">Manual Signature Upload</label>
              <label className="btn-secondary" style={{ padding: '0.42rem 0.75rem', fontSize: '0.8rem', cursor: 'pointer', justifyContent: 'center' }}>
                <UploadCloud size={15} color="var(--kpalee-emerald)" /> {signatureImage ? 'Change Image' : 'Upload Signature'}
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
                style={{ padding: '0.42rem 0.75rem', fontSize: '0.82rem' }}
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

        {/* Live Dynamic Certificate Canvas */}
        <div style={{ position: 'relative', width: '100%', overflowX: 'auto' }}>
          
          {/* Certificate Canvas Render */}
          <div
            className={`cert-canvas-container ${borderTheme}`}
            style={{
              background: bgColor,
              minWidth: '720px',
              padding: '2.75rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
              textAlign: textAlign,
              position: 'relative'
            }}
          >
            {/* Header Org Title */}
            <div style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--kpalee-dark-bg)', textTransform: 'uppercase' }}>
              ANTIGRAVITY ACADEMY & KPALEE PLATFORM
            </div>

            {/* Certificate Body */}
            <div style={{ width: '100%', margin: '1.25rem 0' }}>
              
              {/* Title (Single line or 2-line break) */}
              <h2
                style={{
                  fontFamily: titleFont,
                  fontSize: isTwoLines ? '2rem' : '2.3rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#061a16',
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  margin: '0.2rem 0'
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
                width: '200px',
                height: '2.5px',
                background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                margin: textAlign === 'center' ? '0.4rem auto 0.8rem auto' : textAlign === 'right' ? '0.4rem 0 0.8rem auto' : '0.4rem auto 0.8rem 0'
              }} />

              <p style={{ fontFamily: 'Montserrat', fontSize: '0.9rem', color: '#103830', maxWidth: '580px', margin: textAlign === 'center' ? '0 auto' : '0', lineHeight: 1.55 }}>
                for outstanding achievements in Advanced Full-Stack Architecture, Digital Recognition & Event Identity Systems.
              </p>
            </div>

            {/* Footer Elements: Date, Seal, Signature */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 0.5rem' }}>
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
                    <QrCode size={40} color="var(--kpalee-dark-bg)" />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: activeColor }}>ID: KP-2026-004829</span>
                </div>
              )}

              {/* Signature (Manual Image or Calligraphic Font) */}
              <div style={{ textAlign: 'right', minWidth: '150px' }}>
                {signatureImage ? (
                  <img
                    src={signatureImage}
                    alt="Uploaded Signature"
                    style={{ maxHeight: '48px', objectFit: 'contain', margin: '0 0 0 auto', display: 'block' }}
                  />
                ) : (
                  <div style={{ fontFamily: signatureFont, fontSize: '2rem', color: '#061a16', lineHeight: 1 }}>
                    Alexander Vance
                  </div>
                )}
                <div style={{ borderTop: '1.5px solid #a1e9c9', marginTop: '0.25rem', paddingTop: '0.2rem', fontSize: '0.7rem', color: '#476355', fontWeight: 700 }}>
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
