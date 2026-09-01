import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Sliders, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  UploadCloud, 
  QrCode,
  Award,
  Users,
  BarChart3,
  ChevronRight,
  Shield,
  Send,
  CheckCircle2
} from 'lucide-react';
import hero3DStageImg from '../assets/hero_3d_stage.png';

export default function HeroSection({ onCreateCertificateClick, onExploreTemplatesClick }) {
  // Advanced Certificate Customization State
  const [recipientName, setRecipientName] = useState('Sarah J. Jenkins');
  const [certTitle, setCertTitle] = useState('CERTIFICATE OF MASTERY');
  const [isTwoLines, setIsTwoLines] = useState(false);
  const [textAlign, setTextAlign] = useState('center');
  const [activeColor, setActiveColor] = useState('#00a878');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [borderTheme, setBorderTheme] = useState('cert-border-gold');
  const [titleFont, setTitleFont] = useState('Playfair Display');
  const [signatureFont, setSignatureFont] = useState('Pinyon Script');
  const [showQrCode, setShowQrCode] = useState(true);
  
  // Security Watermark State
  const [showWatermark, setShowWatermark] = useState(true);
  const [watermarkText, setWatermarkText] = useState('KPALEE VERIFIED');
  const [watermarkOpacity, setWatermarkOpacity] = useState(0.08);

  // Custom Signature Image Upload
  const [signatureImage, setSignatureImage] = useState(null);

  // Accordion Toggle for Live Studio Customizer
  const [isStudioOpen, setIsStudioOpen] = useState(false);

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
      padding: '3rem 1.25rem 4rem 1.25rem',
      maxWidth: '1380px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      
      {/* Background Ambient Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 168, 120, 0.15) 0%, rgba(15, 118, 110, 0.05) 50%, transparent 75%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Main 2-Column Hero Showcase */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'center',
        marginBottom: '3.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Left Column Content */}
        <div>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <span className="badge badge-emerald" style={{ padding: '0.35rem 0.95rem', fontSize: '0.78rem' }}>
              <Sparkles size={13} color="var(--kpalee-emerald)" /> DIGITAL RECOGNITION ENGINE
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              • Zero Recipient Login Needed
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif animate-slide-up hero-title" style={{
            fontSize: '3.6rem',
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

          {/* Subtitle */}
          <p className="hero-subtext" style={{
            fontSize: '1.1rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            marginBottom: '2rem',
            maxWidth: '540px'
          }}>
            Design, issue, verify and showcase digital certificates & event badges at scale. Frictionless delivery for organizers, instant bragging rights for recipients.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <button
              onClick={onCreateCertificateClick}
              className="btn-primary btn-mobile-full"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              Create a certificate <ArrowRight size={18} />
            </button>

            <button
              onClick={onExploreTemplatesClick}
              className="btn-secondary btn-mobile-full"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              Explore templates
            </button>
          </div>

          {/* 3 Quick Value Prop Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', padding: '0.45rem', borderRadius: '10px' }}>
                <Zap size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>Fast & Easy</strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Create & send in minutes</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', padding: '0.45rem', borderRadius: '10px' }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>Secure & Verifiable</strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Tamper-proof credentials</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{ background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', padding: '0.45rem', borderRadius: '10px' }}>
                <Globe size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.85rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>Share Anywhere</strong>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>LinkedIn & WhatsApp</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Exact User 3D Stage Image with Independent Floating Animations */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: '100%', maxWidth: '620px', position: 'relative' }}>
            
            {/* Main Stage Base Image (Slow Floating Cycle 7s) */}
            <div className="animate-float-main">
              <img
                src={hero3DStageImg}
                alt="Kpalee 3D Podium Certificate Showcase Stage"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'drop-shadow(0 25px 45px rgba(6, 26, 22, 0.16))'
                }}
              />
            </div>

            {/* Floating Element 1: Top-Left Security Shield Badge (4.8s cycle) */}
            <div
              className="animate-float-slow-1 glass-panel"
              style={{
                position: 'absolute',
                top: '12%',
                left: '2%',
                padding: '0.5rem 0.85rem',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1.5px solid var(--kpalee-emerald)',
                boxShadow: '0 10px 25px rgba(0,168,120,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 10
              }}
            >
              <Shield size={16} color="var(--kpalee-emerald)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Tamper-Proof Seal
              </span>
            </div>

            {/* Floating Element 2: Top-Right Ribbon Honor Badge (6.2s cycle) */}
            <div
              className="animate-float-slow-2 glass-panel"
              style={{
                position: 'absolute',
                top: '8%',
                right: '4%',
                padding: '0.5rem 0.85rem',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1.5px solid var(--kpalee-teal)',
                boxShadow: '0 10px 25px rgba(15,118,110,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 10
              }}
            >
              <Award size={16} color="var(--kpalee-teal)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Official Credential
              </span>
            </div>

            {/* Floating Element 3: Bottom-Left QR Code Verified Badge (5.5s cycle) */}
            <div
              className="animate-float-slow-3 glass-panel"
              style={{
                position: 'absolute',
                bottom: '14%',
                left: '-2%',
                padding: '0.55rem 0.95rem',
                borderRadius: 'var(--radius-md)',
                background: '#ffffff',
                border: '1.5px solid var(--kpalee-emerald)',
                boxShadow: '0 12px 30px rgba(0,168,120,0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                zIndex: 10
              }}
            >
              <div style={{ background: 'var(--kpalee-mint-soft)', padding: '0.35rem', borderRadius: '8px' }}>
                <QrCode size={20} color="var(--kpalee-emerald)" />
              </div>
              <div>
                <strong style={{ fontSize: '0.78rem', color: 'var(--kpalee-dark-bg)', display: 'block', lineHeight: 1.2 }}>
                  Scan to Verify ✓
                </strong>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Cryptographic ID Check</span>
              </div>
            </div>

            {/* Floating Element 4: Bottom-Right Instant Delivery Badge (7.5s cycle) */}
            <div
              className="animate-float-slow-4 glass-panel"
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '-2%',
                padding: '0.5rem 0.85rem',
                borderRadius: '999px',
                background: '#ffffff',
                border: '1.5px solid var(--kpalee-emerald)',
                boxShadow: '0 10px 25px rgba(0,168,120,0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                zIndex: 10
              }}
            >
              <Send size={15} color="var(--kpalee-emerald)" />
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Instant Delivery
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom 4 Feature Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem',
        marginBottom: '3rem'
      }}>
        
        {/* Card 1 */}
        <div className="hero-feature-card">
          <div>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Award size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.45rem' }}>
              Certificate Builder
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Create beautiful, professional certificates with our easy live customizer builder.
            </p>
          </div>
          <button
            onClick={onCreateCertificateClick}
            style={{ background: 'none', border: 'none', padding: 0, color: 'var(--kpalee-emerald)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            Learn more <ArrowRight size={14} />
          </button>
        </div>

        {/* Card 2 */}
        <div className="hero-feature-card">
          <div>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <Users size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.45rem' }}>
              Event Badges & DP
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Design digital badges and display pictures for events, conferences and communities.
            </p>
          </div>
          <button
            onClick={onCreateCertificateClick}
            style={{ background: 'none', border: 'none', padding: 0, color: 'var(--kpalee-emerald)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            Learn more <ArrowRight size={14} />
          </button>
        </div>

        {/* Card 3 */}
        <div className="hero-feature-card">
          <div>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.45rem' }}>
              Verification Made Simple
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Anyone can verify authenticity instantly. No login or account required for recipients.
            </p>
          </div>
          <button
            onClick={onCreateCertificateClick}
            style={{ background: 'none', border: 'none', padding: 0, color: 'var(--kpalee-emerald)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            Learn more <ArrowRight size={14} />
          </button>
        </div>

        {/* Card 4 */}
        <div className="hero-feature-card">
          <div>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
              <BarChart3 size={22} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.45rem' }}>
              Insights & Analytics
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Track engagement, downloads and shares with powerful issuance analytics.
            </p>
          </div>
          <button
            onClick={onCreateCertificateClick}
            style={{ background: 'none', border: 'none', padding: 0, color: 'var(--kpalee-emerald)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
          >
            Learn more <ArrowRight size={14} />
          </button>
        </div>

      </div>

      {/* Accordion Toggle for Interactive Live Studio Customizer */}
      <div className="glass-panel" style={{
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        overflow: 'hidden',
        border: '1.5px solid var(--border-color)'
      }}>
        <button
          onClick={() => setIsStudioOpen(!isStudioOpen)}
          style={{
            width: '100%',
            padding: '1.25rem 1.5rem',
            background: isStudioOpen ? 'var(--kpalee-mint-soft)' : '#ffffff',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <Sliders size={20} color="var(--kpalee-emerald)" />
            <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
              Open Interactive Certificate Customizer Studio
            </span>
            <span className="badge badge-emerald">Live Editor</span>
          </div>

          <div style={{ transform: isStudioOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', color: 'var(--kpalee-emerald)' }}>
            <ChevronRight size={20} />
          </div>
        </button>

        {isStudioOpen && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
            
            {/* Control Bar */}
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
              
              {/* Row 1 Controls */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.75rem' }}>
                
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Recipient Name</label>
                  <input
                    type="text"
                    className="input-field"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    style={{ padding: '0.45rem 0.75rem', fontSize: '0.85rem' }}
                  />
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Certificate Title</label>
                  <input
                    type="text"
                    className="input-field"
                    value={certTitle}
                    onChange={(e) => setCertTitle(e.target.value)}
                    style={{ padding: '0.45rem 0.75rem', fontSize: '0.85rem' }}
                  />
                </div>

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

              {/* Row 2 Controls */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0.75rem',
                paddingTop: '0.65rem',
                borderTop: '1px solid rgba(0,168,120,0.15)',
                alignItems: 'center'
              }}>
                
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
                      style={{ padding: '0.42rem 0.65rem', fontSize: '0.8rem', flex: 1 }}
                    />
                  </div>
                </div>

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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label className="form-label">Manual Signature</label>
                  <label className="btn-secondary" style={{ padding: '0.42rem 0.75rem', fontSize: '0.78rem', cursor: 'pointer', justifyContent: 'center' }}>
                    <UploadCloud size={14} color="var(--kpalee-emerald)" /> {signatureImage ? 'Change Image' : 'Upload Signature'}
                    <input type="file" accept="image/*" onChange={handleSignatureUpload} style={{ display: 'none' }} />
                  </label>
                </div>

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

            {/* Certificate Stage Canvas */}
            <div className="cert-stage-wrapper">
              <div
                className={`cert-canvas-container ${borderTheme}`}
                style={{
                  background: bgColor,
                  alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
                  textAlign: textAlign
                }}
              >
                {showWatermark && (
                  <div className="cert-watermark-overlay">
                    <div className="cert-watermark-text" style={{ color: activeColor, opacity: watermarkOpacity }}>
                      {watermarkText}
                    </div>
                  </div>
                )}

                <div className="cert-org-header" style={{ fontWeight: 800, letterSpacing: '0.18em', color: 'var(--kpalee-dark-bg)', textTransform: 'uppercase' }}>
                  ANTIGRAVITY ACADEMY & KPALEE PLATFORM
                </div>

                <div style={{ width: '100%', margin: '0.4rem 0' }}>
                  <h2 className="cert-title-heading" style={{ fontFamily: titleFont, fontWeight: 800, letterSpacing: '0.04em', color: '#061a16', textTransform: 'uppercase', lineHeight: 1.18, margin: '0.15rem 0' }}>
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

                  <h3 className="cert-recipient-name" style={{ fontFamily: signatureFont, fontWeight: 600, color: activeColor, margin: '0.15rem 0', lineHeight: 1.1 }}>
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

                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ textAlign: 'left' }}>
                    <div className="cert-footer-text" style={{ fontWeight: 700, color: '#061a16' }}>September 1, 2026</div>
                    <div style={{ borderTop: '1px solid #a1e9c9', marginTop: '0.15rem', paddingTop: '0.15rem', fontSize: '0.6rem', color: '#476355', fontWeight: 700 }}>
                      DATE ISSUED
                    </div>
                  </div>

                  {showQrCode && (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
                      <div style={{ background: '#f8faf9', padding: '0.25rem', borderRadius: '6px', border: '1px solid #d1f2e4' }}>
                        <QrCode size={30} color="var(--kpalee-dark-bg)" />
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 800, color: activeColor }}>ID: KP-2026-004829</span>
                    </div>
                  )}

                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    {signatureImage ? (
                      <img src={signatureImage} alt="Signature" style={{ maxHeight: '38px', objectFit: 'contain', margin: '0 0 0 auto', display: 'block' }} />
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
        )}
      </div>

    </section>
  );
}
