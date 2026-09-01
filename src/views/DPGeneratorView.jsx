import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { Camera, Download, Share2, Sparkles, ArrowLeft, CheckCircle2, UploadCloud, RefreshCw, Layers, Frame, Image as ImageIcon } from 'lucide-react';
import { MOCK_EVENTS } from '../services/mockData';

export default function DPGeneratorView({ event = MOCK_EVENTS[0], onBackClick, onToast }) {
  const dpRef = useRef(null);
  
  // Customization Options
  const [designSource, setDesignSource] = useState('template'); // 'template' | 'custom_upload'
  const [dimensionPreset, setDimensionPreset] = useState('square'); // 'square' (1:1) | 'lanyard' (3:4) | 'story' (9:16)
  
  // Custom Frame Artwork Upload State
  const [customFrameUrl, setCustomFrameUrl] = useState(null);

  // User Attendee State
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80');
  const [attendeeName, setAttendeeName] = useState('Amina Babatunde');
  const [badgeTitle, setBadgeTitle] = useState('PROUD ATTENDEE');
  const [isExporting, setIsExporting] = useState(false);

  // Handle Attendee Photo Upload
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

  // Handle Organizer Custom Frame Overlay Upload
  const handleFrameOverlayUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomFrameUrl(reader.result);
        setDesignSource('custom_upload');
        if (onToast) onToast('Custom Event Frame Overlay uploaded successfully!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadDP = async () => {
    if (!dpRef.current) return;
    setIsExporting(true);
    try {
      const canvas = await html2canvas(dpRef.current, {
        scale: 2.5,
        useCORS: true,
        backgroundColor: null,
        logging: false
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${attendeeName.replace(/\s+/g, '_')}_${event.name.replace(/\s+/g, '_')}_Badge.png`;
      link.href = image;
      link.click();
      if (onToast) onToast('Event Profile Badge downloaded successfully! 🎉');
    } catch (err) {
      console.error('DP download error:', err);
      if (onToast) onToast('Could not export DP. Try taking a screenshot.');
    } finally {
      setIsExporting(false);
    }
  };

  // Dimension Styles Helper
  const getAspectRatioStyle = () => {
    if (dimensionPreset === 'lanyard') return { aspectRatio: '3 / 4', maxWidth: '420px' };
    if (dimensionPreset === 'story') return { aspectRatio: '9 / 16', maxWidth: '360px' };
    return { aspectRatio: '1 / 1', maxWidth: '480px' }; // Default Square 1:1
  };

  return (
    <div className="animate-slide-up" style={{ maxWidth: '1350px', margin: '2rem auto', padding: '0 2rem' }}>
      
      {/* Navigation Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <button
          onClick={onBackClick}
          className="btn-secondary"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
        >
          <ArrowLeft size={16} /> Back to Event Badges
        </button>

        <span className="badge badge-emerald">
          <Sparkles size={14} /> Kpalee Event Identity & Badge Studio
        </span>
      </div>

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(340px, 420px) 1fr',
        gap: '3rem',
        alignItems: 'start'
      }}>
        
        {/* Left Control Studio Panel */}
        <div className="glass-panel" style={{ padding: '2.25rem', borderRadius: 'var(--radius-lg)', background: '#ffffff' }}>
          
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
            <Camera size={22} color="var(--kpalee-emerald)" /> Badge & Frame Controls
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
            Choose design source, dimensions preset, and upload photo.
          </p>

          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {/* 1. Design Artwork Source Switcher */}
            <div className="form-group">
              <label className="form-label">Design Artwork Source</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setDesignSource('template')}
                  className={designSource === 'template' ? 'btn-primary' : 'btn-secondary'}
                  style={{ flex: 1, padding: '0.5rem 0.65rem', fontSize: '0.82rem', justifyContent: 'center' }}
                >
                  <Layers size={14} /> Kpalee Template
                </button>
                <button
                  type="button"
                  onClick={() => setDesignSource('custom_upload')}
                  className={designSource === 'custom_upload' ? 'btn-primary' : 'btn-secondary'}
                  style={{ flex: 1, padding: '0.5rem 0.65rem', fontSize: '0.82rem', justifyContent: 'center' }}
                >
                  <UploadCloud size={14} /> Upload Custom
                </button>
              </div>
            </div>

            {/* Custom Artwork Overlay Upload */}
            {designSource === 'custom_upload' && (
              <div className="form-group animate-pop-in" style={{ background: 'var(--kpalee-mint-soft)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #d1f2e4' }}>
                <label className="form-label" style={{ fontSize: '0.78rem' }}>Upload Organizer Frame Artwork (.PNG Overlay)</label>
                <label className="btn-secondary" style={{ padding: '0.65rem', justifyContent: 'center', cursor: 'pointer', borderStyle: 'dashed', borderColor: 'var(--kpalee-emerald)', background: '#fff' }}>
                  <ImageIcon size={16} color="var(--kpalee-emerald)" /> {customFrameUrl ? 'Change Frame PNG' : 'Upload Custom Frame PNG'}
                  <input type="file" accept="image/*" onChange={handleFrameOverlayUpload} style={{ display: 'none' }} />
                </label>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.35rem' }}>* PNG with transparent center cutout recommended</span>
              </div>
            )}

            {/* 2. Platform Standard Dimension Presets */}
            <div className="form-group">
              <label className="form-label">Badge Dimension Preset (Platform Determined)</label>
              <select
                className="select-field"
                value={dimensionPreset}
                onChange={(e) => setDimensionPreset(e.target.value)}
                style={{ fontSize: '0.88rem' }}
              >
                <option value="square">Square 1:1 Social DP (1080 x 1080px)</option>
                <option value="lanyard">Lanyard Event Badge (850 x 1200px)</option>
                <option value="story">Vertical Story Status (1080 x 1920px)</option>
              </select>
            </div>

            {/* 3. Attendee Photo Upload */}
            <div className="form-group">
              <label className="form-label">Attendee Picture / Photo *</label>
              <label className="btn-secondary" style={{ padding: '0.75rem', justifyContent: 'center', cursor: 'pointer', borderStyle: 'dashed', borderColor: 'var(--kpalee-emerald)' }}>
                <UploadCloud size={18} color="var(--kpalee-emerald)" /> Upload Attendee Photo
                <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
              </label>
            </div>

            {/* 4. Attendee Name */}
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

            {/* 5. Role / Badge Tagline */}
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

            <button
              onClick={handleDownloadDP}
              disabled={isExporting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', marginTop: '0.5rem' }}
            >
              <Download size={18} /> {isExporting ? 'Generating Badge...' : 'Download High-Res Badge Image'}
            </button>
          </form>

        </div>

        {/* Right Preview Canvas Column */}
        <div>
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: '#ffffff', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Live Badge Render ({dimensionPreset.toUpperCase()})
              </span>
              <span className="badge badge-emerald">Ready for Download & Social Share</span>
            </div>

            {/* Render Canvas Stage */}
            <div style={{ margin: '0 auto', ...getAspectRatioStyle() }}>
              <div
                ref={dpRef}
                style={{
                  width: '100%',
                  height: '100%',
                  aspectRatio: getAspectRatioStyle().aspectRatio,
                  borderRadius: '24px',
                  background: customFrameUrl ? '#ffffff' : (event.coverColor || 'linear-gradient(135deg, #061a16 0%, #00a878 100%)'),
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 25px 50px rgba(6, 26, 22, 0.25)'
                }}
              >
                {/* Custom Artwork Overlay image if uploaded */}
                {customFrameUrl && (
                  <img
                    src={customFrameUrl}
                    alt="Custom Organizer Frame"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 3, pointerEvents: 'none' }}
                  />
                )}

                {/* Top Event Logo Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.95rem', borderRadius: '999px', color: '#ffffff', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em' }}>
                    {event.name}
                  </div>
                  <span style={{ background: 'var(--kpalee-emerald)', color: '#ffffff', padding: '0.32rem 0.75rem', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 800 }}>
                    {badgeTitle}
                  </span>
                </div>

                {/* Center User Photo Container */}
                <div style={{
                  width: dimensionPreset === 'story' ? '220px' : '200px',
                  height: dimensionPreset === 'story' ? '220px' : '200px',
                  borderRadius: '50%',
                  margin: '0 auto',
                  border: '6px solid #ffffff',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
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
                  borderRadius: '18px',
                  padding: '0.95rem 1.1rem',
                  color: 'var(--kpalee-dark-bg)',
                  zIndex: 2,
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
                }}>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                    {attendeeName}
                  </h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.2rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
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
