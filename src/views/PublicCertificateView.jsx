import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Download, Printer, Share2, ShieldCheck, Sparkles, ArrowLeft, CheckCircle2, QrCode } from 'lucide-react';
import { MOCK_CERTIFICATES } from '../services/mockData';

export default function PublicCertificateView({ certificateId = 'KP-2026-004829', onBackClick, onToast }) {
  const certRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  // Find certificate or fallback
  const cert = MOCK_CERTIFICATES.find(c => c.id === certificateId) || MOCK_CERTIFICATES[0];

  const handleDownloadPNG = async () => {
    if (!certRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${cert.recipientName || 'Certificate'}_Kpalee.png`;
      link.href = image;
      link.click();
      if (onToast) onToast('High-Resolution Certificate PNG downloaded! 🎉');
    } catch (err) {
      console.error('Download error:', err);
      if (onToast) onToast('Could not export PNG. Try printing to PDF.');
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `I just received my official verified certificate for "${cert.title}" from ${cert.orgName}! 🎓 Verified on Kpalee:`;

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
    } else if (platform === 'x') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    } else {
      navigator.clipboard.writeText(url);
      if (onToast) onToast('Certificate link copied to clipboard!');
    }
  };

  return (
    <div className="animate-slide-up" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Top Toolbar */}
      <div className="no-print" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.75rem'
      }}>
        <button
          onClick={onBackClick}
          className="btn-secondary"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} /> Back to Kpalee
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="badge badge-emerald">Verified Authentic ✓</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>ID: {cert.id}</span>
        </div>
      </div>

      {/* Recipient Congratulations Banner */}
      <div className="glass-panel-dark no-print" style={{
        padding: '2rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div>
          <span className="badge badge-emerald" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
            No Account Needed • Ready to Download & Share
          </span>
          <h2 className="font-serif" style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 800 }}>
            Congratulations, {cert.recipientName}! 🎉
          </h2>
          <p style={{ color: '#d1f2e4', fontSize: '0.95rem', marginTop: '0.2rem' }}>
            Your official digital certificate issued by <strong>{cert.orgName}</strong> is verified and ready.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadPNG}
            disabled={isExporting}
            className="btn-primary"
            style={{ padding: '0.7rem 1.4rem' }}
          >
            <Download size={17} /> {isExporting ? 'Generating PNG...' : 'Download HD PNG'}
          </button>

          <button
            onClick={handlePrint}
            className="btn-secondary"
            style={{ padding: '0.7rem 1.25rem' }}
          >
            <Printer size={17} /> Print / PDF
          </button>
        </div>
      </div>

      {/* Main Certificate Viewport */}
      <div style={{ overflowX: 'auto', marginBottom: '2.5rem', paddingBottom: '0.5rem' }}>
        <div
          ref={certRef}
          className={`cert-canvas-container ${cert.borderStyle || 'cert-border-gold'}`}
          style={{
            background: cert.bgColor || '#ffffff',
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
          {/* Header Organization / Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--kpalee-dark-bg)'
            }}>
              {cert.orgName || 'ANTIGRAVITY ACADEMY OF TECHNOLOGY'}
            </div>
          </div>

          {/* Certificate Main Body */}
          <div style={{ width: '100%', margin: '1.25rem 0' }}>
            <h1
              style={{
                fontFamily: cert.titleFont || 'Playfair Display',
                fontSize: '2.3rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#061a16',
                textTransform: 'uppercase',
                margin: '0.25rem 0'
              }}
            >
              {cert.title}
            </h1>

            <p style={{ fontFamily: 'Montserrat', fontSize: '0.92rem', fontStyle: 'italic', color: '#476355', margin: '0.4rem 0' }}>
              {cert.subtitle}
            </p>

            {/* Recipient Name Highlight */}
            <h2
              style={{
                fontFamily: cert.signatureFont || 'Great Vibes',
                fontSize: '3.5rem',
                fontWeight: 600,
                color: 'var(--kpalee-emerald)',
                margin: '0.65rem 0 0.35rem 0',
                lineHeight: 1.15
              }}
            >
              {cert.recipientName}
            </h2>

            <div style={{
              width: '200px',
              height: '2.5px',
              background: 'linear-gradient(90deg, transparent, var(--kpalee-emerald), transparent)',
              margin: '0.4rem auto 0.9rem auto'
            }} />

            {/* Citation Text */}
            <p style={{ fontFamily: 'Montserrat', fontSize: '0.92rem', color: '#103830', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
              {cert.achievement}
            </p>
          </div>

          {/* Footer Signatures, Date & Graphic Seal */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 1.25rem' }}>
            {/* Issue Date */}
            <div style={{ textAlign: 'left', minWidth: '140px' }}>
              <div style={{ fontFamily: 'Montserrat', fontSize: '0.88rem', fontWeight: 700, color: '#061a16' }}>
                {cert.date}
              </div>
              <div style={{ borderTop: '1.5px solid #a1e9c9', marginTop: '0.3rem', paddingTop: '0.25rem', fontSize: '0.7rem', color: '#476355', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                DATE OF ISSUANCE
              </div>
            </div>

            {/* Kpalee Seal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
              <div style={{ background: '#f8faf9', padding: '0.4rem', borderRadius: '8px', border: '1px solid #d1f2e4' }}>
                <QrCode size={42} color="var(--kpalee-dark-bg)" />
              </div>
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--kpalee-emerald)' }}>ID: {cert.id}</span>
            </div>

            {/* Signatory Line */}
            <div style={{ textAlign: 'right', minWidth: '160px' }}>
              <div style={{ fontFamily: cert.signatureFont || 'Great Vibes', fontSize: '2rem', color: '#061a16', lineHeight: 1 }}>
                {cert.issuerName}
              </div>
              <div style={{ borderTop: '1.5px solid #a1e9c9', marginTop: '0.3rem', paddingTop: '0.25rem', fontSize: '0.7rem', color: '#476355', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                {cert.issuerTitle}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Social Share Bar */}
      <div className="glass-panel no-print" style={{ padding: '1.75rem 2rem', borderRadius: 'var(--radius-lg)', background: '#ffffff', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.4rem' }}>
          Showcase Your Achievement
        </h3>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
          Share your verified certificate link with your network on social media.
        </p>

        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => handleShare('linkedin')} className="btn-secondary" style={{ padding: '0.55rem 1.25rem' }}>
            Share on LinkedIn
          </button>          <button onClick={() => handleShare('whatsapp')} className="btn-secondary" style={{ padding: '0.55rem 1.25rem' }}>
            Share on WhatsApp
          </button>
          <button onClick={() => handleShare('x')} className="btn-secondary" style={{ padding: '0.55rem 1.25rem' }}>
            Share on X (Twitter)
          </button>
          <button onClick={() => handleShare('copy')} className="btn-primary" style={{ padding: '0.55rem 1.25rem' }}>
            Copy Certificate Link
          </button>
        </div>
      </div>

    </div>
  );
}
