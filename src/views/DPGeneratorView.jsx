import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Camera, Download, Share2, Sparkles, ArrowLeft, CheckCircle2, UploadCloud, RefreshCw } from 'lucide-react';
import { MOCK_EVENTS } from '../services/mockData';

export default function DPGeneratorView({ event = MOCK_EVENTS[0], onBackClick, onToast }) {
  const dpRef = useRef(null);
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80');
  const [attendeeName, setAttendeeName] = useState('Amina Babatunde');
  const [badgeTitle, setBadgeTitle] = useState('PROUD ATTENDEE');
  const [isExporting, setIsExporting] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadDP = async () => {
    if (!dpRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(dpRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        logging: false
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${attendeeName.replace(/\s+/g, '_')}_${event.name.replace(/\s+/g, '_')}_DP.png`;
      link.href = image;
      link.click();
      if (onToast) onToast('Event Profile DP downloaded successfully! 🎉');
    } catch (err) {
      console.error('DP download error:', err);
      if (onToast) onToast('Could not export DP. Try taking a screenshot.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="animate-slide-up" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Top Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
        <button
          onClick={onBackClick}
          className="btn-secondary"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} /> Back to Event Badges
        </button>

        <span className="badge badge-emerald">
          <Sparkles size={13} /> "Get Your Event DP" Generator
        </span>
      </div>

      {/* Main Split Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(340px, 400px) 1fr',
        gap: '2.5rem',
        alignItems: 'start'
      }}>
        
        {/* Left Column: Customization Controls */}
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: '#ffffff' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <Camera size={20} color="var(--kpalee-emerald)" /> DP Frame Settings
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Upload your picture and personalize your social media event frame.
          </p>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            
            {/* Upload Photo */}
            <div className="form-group">
              <label className="form-label">Your Picture / Photo *</label>
              <label className="btn-secondary" style={{ padding: '0.75rem', justifyContent: 'center', cursor: 'pointer', borderStyle: 'dashed', borderColor: 'var(--kpalee-emerald)' }}>
                <UploadCloud size={18} color="var(--kpalee-emerald)" /> Upload Photo
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              </label>
            </div>

            {/* Attendee Name */}
            <div className="form-group">
              <label className="form-label">Attendee Name</label>
              <input
                type="text"
                className="input-field"
                value={attendeeName}
                onChange={(e) => setAttendeeName(e.target.value)}
                placeholder="e.g. Amina Babatunde"
              />
            </div>

            {/* Badge Title Overlay */}
            <div className="form-group">
              <label className="form-label">Badge Tagline / Role</label>
              <input
                type="text"
                className="input-field"
                value={badgeTitle}
                onChange={(e) => setBadgeTitle(e.target.value)}
                placeholder="PROUD ATTENDEE"
              />
            </div>

            {/* Event Name Display */}
            <div style={{ background: 'var(--kpalee-mint-soft)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #d1f2e4' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 700, display: 'block' }}>EVENT ATTACHED</span>
              <strong style={{ fontSize: '0.92rem', color: 'var(--kpalee-dark-bg)' }}>{event.name}</strong>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}>{event.date}</span>
            </div>

            <button
              onClick={handleDownloadDP}
              disabled={isExporting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '0.5rem' }}
            >
              <Download size={18} /> {isExporting ? 'Generating DP...' : 'Download Square Social DP'}
            </button>
          </form>

        </div>

        {/* Right Column: Square 1:1 Social Media DP Preview */}
        <div>
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: '#ffffff', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>
                Square 1:1 Social Frame Preview
              </span>
              <span className="badge badge-emerald">Ready for WhatsApp & LinkedIn</span>
            </div>

            {/* 1:1 Aspect Ratio Canvas Frame */}
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div
                ref={dpRef}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '24px',
                  background: event.coverColor || 'linear-gradient(135deg, #061a16 0%, #00a878 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px rgba(6, 26, 22, 0.25)'
                }}
              >
                {/* Top Event Logo Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.85rem', borderRadius: '999px', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.06em' }}>
                    {event.name}
                  </div>
                  <span style={{ background: 'var(--kpalee-emerald)', color: '#ffffff', padding: '0.3rem 0.65rem', borderRadius: '999px', fontSize: '0.68rem', fontWeight: 800 }}>
                    {badgeTitle}
                  </span>
                </div>

                {/* Center User Photo Container */}
                <div style={{
                  width: '210px',
                  height: '210px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  border: '6px solid #ffffff',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 2,
                  background: '#e6f9f0'
                }}>
                  <img
                    src={photoUrl}
                    alt="Attendee"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Bottom Name & Date Bar */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '16px',
                  padding: '0.85rem 1rem',
                  color: 'var(--kpalee-dark-bg)',
                  zIndex: 2,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                    {attendeeName}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <span>{event.location ? event.location.split(',')[0] : 'Lagos'}</span>
                    <span style={{ color: 'var(--kpalee-emerald)', fontWeight: 800 }}>{event.date}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
