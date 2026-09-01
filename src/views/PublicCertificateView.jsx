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
    <div className="animate-slide-up" style={{ maxWidth: '1200px', margin: '1.5rem auto', padding: '0 1rem' }}>
      
      {/* Top Toolbar */}
      <div className="no-print" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1.5rem'
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
        padding: '1.75rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '1.75rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div>
          <span className="badge badge-emerald" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
            No Account Needed • Ready to Download & Share
          </span>
          <h2 className="font-serif" style={{ fontSize: '1.7rem', color: '#ffffff', fontWeight: 800 }}>
            Congratulations, {cert.recipientName}! 🎉
          </h2>
          <p style={{ color: '#d1f2e4', fontSize: '0.92rem', marginTop: '0.2rem' }}>
            Your official digital certificate issued by <strong>{cert.orgName}</strong> is verified and ready.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleDownloadPNG}
            disabled={isExporting}
            className="btn-primary btn-mobile-full"
            style={{ padding: '0.7rem 1.4rem' }}
          >
            <Download size={17} /> {isExporting ? 'Generating PNG...' : 'Download HD PNG'}
          </button>

          <button
            onClick={handlePrint}
            className="btn-secondary btn-mobile-full"
            style={{ padding: '0.7rem 1.25rem' }}
          >
            <Printer size={17} /> Print / PDF
          </button>
        </div>
      </div>

      {/* Main Certificate Viewport Stage */}
      <div className="cert-responsive-stage" style={{ marginBottom: '2rem' }}>
        <div
          ref={certRef}
          className={`cert-canvas-container ${cert.borderStyle || 'cert-border-gold'}`}
          style={{
            background: cert.bgColor || '#ffffff',
            textAlign: 'center'
          }}
        >
          {/* Header Organization / Logo */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <div className="cert-org-header" style={{
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--kpalee-dark-bg)'
            }}>
              {cert.orgName || 'ANTIGRAVITY ACADEMY OF TECHNOLOGY'}
            </div>
          </div>

          {/* Certificate Main Body */}
          <div style={{ width: '100%', margin: '0.5rem 0' }}>
            <h1
              className="cert-title-heading"
              style={{
                fontFamily: cert.titleFont || 'Playfair Display',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#061a16',
                textTransform: 'uppercase',
                margin: '0.2rem 0',
                lineHeight: 1.18
              }}
            >
              {cert.title}
            </h1>

            <p style={{ fontFamily: 'Montserrat', fontSize: '0.8rem', fontStyle: 'italic', color: '#476355', margin: '0.2rem 0' }}>
              {cert.subtitle}
            </p>

            {/* Recipient Name Highlight */}
            <h2
              className="cert-recipient-name"
              style={{
                fontFamily: cert.signatureFont || 'Great Vibes',
                fontWeight: 600,
                color: 'var(--kpalee-emerald)',
                margin: '0.2rem 0',
                lineHeight: 1.1
              }}
            >
              {cert.recipientName}
            </h2>

            <div style={{
              width: '180px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--kpalee-emerald), transparent)',
              margin: '0.3rem auto 0.6rem auto'
            }} />

            {/* Citation Text */}
            <p className="cert-citation-text" style={{ fontFamily: 'Montserrat', color: '#103830', maxWidth: '580px', margin: '0 auto' }}>
              {cert.achievement}
            </p>
          </div>

          {/* Footer Signatures, Date & Graphic Seal */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            {/* Issue Date */}
            <div style={{ textAlign: 'left' }}>
              <div className="cert-footer-text" style={{ fontFamily: 'Montserrat', fontWeight: 700, color: '#061a16' }}>
                {cert.date}
              </div>
              <div style={{ borderTop: '1px solid #a1e9c9', marginTop: '0.15rem', paddingTop: '0.15rem', fontSize: '0.62rem', color: '#476355', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                DATE OF ISSUANCE
              </div>
            </div>

            {/* Kpalee Seal */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.15rem' }}>
              <div style={{ background: '#f8faf9', padding: '0.3rem', borderRadius: '6px', border: '1px solid #d1f2e4' }}>
                <QrCode size={34} color="var(--kpalee-dark-bg)" />
              </div>
              <span style={{ fontSize: '0.62rem', fontWeight: 800, color: 'var(--kpalee-emerald)' }}>ID: {cert.id}</span>
            </div>

            {/* Signatory Line */}
            <div style={{ textAlign: 'right', minWidth: '130px' }}>
              <div style={{ fontFamily: cert.signatureFont || 'Great Vibes', fontSize: '1.75rem', color: '#061a16', lineHeight: 1 }}>
                {cert.issuerName}
              </div>
              <div style={{ borderTop: '1px solid #a1e9c9', marginTop: '0.15rem', paddingTop: '0.15rem', fontSize: '0.62rem', color: '#476355', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>
                {cert.issuerTitle}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Social Share Bar */}
      <div className="glass-panel no-print" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: '#ffffff', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.3rem' }}>
          Showcase Your Achievement
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
          Share your verified certificate link with your network on social media.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => handleShare('linkedin')} className="btn-secondary btn-mobile-full" style={{ padding: '0.55rem 1.1rem' }}>
            Share on LinkedIn
          </button>
          <button onClick={() => handleShare('whatsapp')} className="btn-secondary btn-mobile-full" style={{ padding: '0.55rem 1.1rem' }}>
            Share on WhatsApp
          </button>
          <button onClick={() => handleShare('x')} className="btn-secondary btn-mobile-full" style={{ padding: '0.55rem 1.1rem' }}>
            Share on X (Twitter)
          </button>
          <button onClick={() => handleShare('copy')} className="btn-primary btn-mobile-full" style={{ padding: '0.55rem 1.1rem' }}>
            Copy Certificate Link
          </button>
        </div>
      </div>

    </div>
  );
}
