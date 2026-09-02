import React from 'react';
import { 
  UploadCloud, 
  Grid, 
  PenTool, 
  FileSpreadsheet, 
  User, 
  Wand2, 
  Tag, 
  Eye, 
  Layers, 
  Link, 
  Download, 
  Share2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Plus,
  FileText,
  Smartphone,
  Award,
  QrCode
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Choose your path',
      desc: 'Upload your existing certificate design, choose from Kpalee templates, or request a custom design that matches your brand.',
      badge: 'FLEXIBLE SETUP',
      color: '#00a878',
      bgColor: '#f0fdf4',
      borderColor: '#d1f2e4',
      subButtons: [
        { label: 'Upload design', icon: UploadCloud },
        { label: 'Choose from templates', icon: Grid },
        { label: 'Request custom design', icon: PenTool }
      ],
      // Render Mockup for Step 1
      renderMockup: () => (
        <div style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)',
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1px solid #d1f2e4',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Canvas Toolbar */}
          <div style={{
            background: '#ffffff',
            padding: '0.4rem 0.85rem',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            marginBottom: '0.85rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#475569' }}>Aa</span>
            <div style={{ width: '1px', height: '12px', background: '#cbd5e1' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#00a878' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: '#061a16' }} />
            <div style={{ display: 'flex', gap: '3px', marginLeft: 'auto' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#94a3b8' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#94a3b8' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: '0.85rem', alignItems: 'center' }}>
            {/* Main Canvas Frame */}
            <div style={{
              background: '#ffffff',
              border: '2px solid #061a16',
              outline: '2px solid #00a878',
              outlineOffset: '-5px',
              padding: '1rem 0.85rem',
              borderRadius: '4px',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
            }}>
              <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#00a878', letterSpacing: '0.1em' }}>KPALEE PLATFORM</span>
              <h4 className="font-serif" style={{ fontSize: '0.92rem', fontWeight: 800, color: '#061a16', margin: '0.1rem 0' }}>Certificate</h4>
              <span style={{ fontSize: '0.52rem', color: '#475569', textTransform: 'uppercase' }}>OF ACHIEVEMENT</span>
              <div style={{ fontSize: '0.82rem', fontFamily: 'Pinyon Script, cursive', color: '#00a878', margin: '0.2rem 0', fontWeight: 600 }}>John Doe</div>
              <p style={{ fontSize: '0.48rem', color: '#64748b' }}>For successfully completing the Leadership Program</p>
            </div>

            {/* Right Tools & Templates Dock */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ background: '#ffffff', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.68rem' }}>
                <strong style={{ display: 'block', fontSize: '0.68rem', color: '#0f172a', marginBottom: '0.3rem' }}>Add Elements</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', color: '#64748b', fontSize: '0.62rem' }}>
                  <span>T Text</span>
                  <span>🖼️ Logo</span>
                  <span>✍️ Signature</span>
                  <span>🔳 QR Code</span>
                </div>
              </div>

              <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.62rem', fontWeight: 700, color: '#00a878' }}>
                  <span>Templates</span>
                  <span>See all</span>
                </div>
                <div style={{ display: 'flex', gap: '0.3rem', marginTop: '0.3rem' }}>
                  <div style={{ flex: 1, height: '22px', background: '#e6f9f0', border: '1px solid #00a878', borderRadius: '3px' }} />
                  <div style={{ flex: 1, height: '22px', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Add recipients',
      desc: 'Import your attendees list via CSV/Excel spreadsheet or enter recipients manually in seconds with automatic column mapping.',
      badge: 'BULK IMPORT',
      color: '#0f766e',
      bgColor: '#ccfbf1',
      borderColor: '#99f6e4',
      subButtons: [
        { label: 'CSV / Excel Import', icon: FileSpreadsheet },
        { label: 'Manual Entry', icon: User },
        { label: 'Auto Column Mapping', icon: Wand2 }
      ],
      // Render Mockup for Step 2
      renderMockup: () => (
        <div style={{
          background: 'linear-gradient(135deg, #ccfbf1 0%, #ffffff 100%)',
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1px solid #99f6e4',
          position: 'relative'
        }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div>
              <strong style={{ fontSize: '0.88rem', color: '#0f766e', display: 'block' }}>Recipients</strong>
              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Total: 248 recipients</span>
            </div>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              <span style={{ background: '#ffffff', border: '1px solid #0f766e', color: '#0f766e', padding: '0.2rem 0.55rem', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700 }}>
                📥 Import CSV / Excel
              </span>
              <span style={{ background: '#0f766e', color: '#ffffff', padding: '0.2rem 0.55rem', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 700 }}>
                + Add Recipient
              </span>
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden', fontSize: '0.68rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 1.1fr 0.8fr', padding: '0.45rem 0.65rem', background: '#f8fafc', fontWeight: 700, color: '#475569', borderBottom: '1px solid #e2e8f0' }}>
              <span>Full Name</span>
              <span>Email Address</span>
              <span>Course / Event</span>
              <span>Status</span>
            </div>

            {[
              { name: 'John Doe', email: 'john@example.com', course: 'Leadership 101' },
              { name: 'Jane Smith', email: 'jane@example.com', course: 'Leadership 101' },
              { name: 'Michael Brown', email: 'michael@example.com', course: 'Leadership 101' },
              { name: 'Sarah Johnson', email: 'sarah@example.com', course: 'Leadership 101' }
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.4fr 1.1fr 0.8fr', padding: '0.4rem 0.65rem', borderBottom: i === 3 ? 'none' : '1px solid #f1f5f9', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, color: '#0f172a' }}>{row.name}</span>
                <span style={{ color: '#64748b' }}>{row.email}</span>
                <span style={{ color: '#475569' }}>{row.course}</span>
                <span style={{ background: '#e6f9f0', color: '#00a878', padding: '0.1rem 0.4rem', borderRadius: '999px', fontSize: '0.6rem', fontWeight: 700, width: 'fit-content' }}>
                  ✓ Ready
                </span>
              </div>
            ))}
          </div>

          {/* Floating XLS Icon Badge */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '-12px',
            background: '#ffffff',
            border: '1.5px solid #0f766e',
            borderRadius: '10px',
            padding: '0.35rem 0.55rem',
            boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <FileSpreadsheet size={16} color="#0f766e" />
            <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#0f766e' }}>.XLSX</span>
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Personalize & generate',
      desc: 'Map dynamic recipient fields (Name, Date, ID, Signature, QR Code) and preview batch output before generating your certificates.',
      badge: 'AUTO MAPPING',
      color: '#3359df',
      bgColor: '#eff6ff',
      borderColor: '#bfdbfe',
      subButtons: [
        { label: 'Field Mapping', icon: Tag },
        { label: 'Live Preview', icon: Eye },
        { label: 'Batch Preview', icon: Layers }
      ],
      // Render Mockup for Step 3
      renderMockup: () => (
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)',
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1px solid #bfdbfe'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.85rem', alignItems: 'center' }}>
            {/* Certificate Preview */}
            <div style={{
              background: '#ffffff',
              border: '2px solid #1e3a8a',
              outline: '2px double #3359df',
              outlineOffset: '-5px',
              padding: '1rem 0.75rem',
              borderRadius: '4px',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
            }}>
              <span style={{ fontSize: '0.52rem', fontWeight: 800, color: '#3359df' }}>CERTIFICATE OF ACHIEVEMENT</span>
              <h4 style={{ fontFamily: 'Pinyon Script, cursive', fontSize: '1.05rem', color: '#1e3a8a', margin: '0.15rem 0', fontWeight: 600 }}>Jane Smith</h4>
              <p style={{ fontSize: '0.48rem', color: '#64748b' }}>For successfully completing the Advanced Leadership Program</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.45rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                <span>May 24, 2026</span>
                <span>Authorized Director</span>
              </div>
            </div>

            {/* Right Field Mapping Panel */}
            <div style={{ background: '#ffffff', padding: '0.65rem', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.62rem' }}>
              <strong style={{ display: 'block', color: '#1e3a8a', marginBottom: '0.4rem', fontWeight: 800 }}>Field Mapping</strong>
              
              {[
                { label: 'Full Name', map: '{{full_name}}' },
                { label: 'Course / Event', map: '{{course}}' },
                { label: 'Date', map: '{{date}}' },
                { label: 'Certificate ID', map: '{{cert_id}}' },
                { label: 'Signature', map: '{{signature}}' }
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span style={{ color: '#475569' }}>{m.label}</span>
                  <span style={{ background: '#eff6ff', color: '#3359df', padding: '0.1rem 0.35rem', borderRadius: '4px', fontFamily: 'monospace' }}>
                    {m.map}
                  </span>
                </div>
              ))}

              <button style={{ width: '100%', background: '#00a878', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '0.35rem', fontSize: '0.65rem', fontWeight: 700, marginTop: '0.35rem', cursor: 'pointer' }}>
                ⚡ Generate Certificates
              </button>
            </div>
          </div>

          {/* Bottom Batch Preview Thumbnails */}
          <div style={{ marginTop: '0.75rem', paddingTop: '0.65rem', borderTop: '1px solid #dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#3359df' }}>Batch Preview (5 of 248)</span>
            <div style={{ display: 'flex', gap: '0.35rem' }}>
              {[1, 2, 3, 4, 5].map(n => (
                <div key={n} style={{ width: '32px', height: '22px', background: '#ffffff', border: '1px solid #bfdbfe', borderRadius: '3px' }} />
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Deliver & celebrate',
      desc: 'Certificates are generated. Recipients receive personal links to view, download, and share on LinkedIn & WhatsApp.',
      badge: 'ZERO LOGIN NEEDED',
      color: '#d97706',
      bgColor: '#fffbeb',
      borderColor: '#fde68a',
      subButtons: [
        { label: 'Personal Links', icon: Link },
        { label: 'Download Certificate', icon: Download },
        { label: 'Share on LinkedIn', icon: Share2 },
        { label: 'Share on WhatsApp', icon: Share2 }
      ],
      // Render Mockup for Step 4
      renderMockup: () => (
        <div style={{
          background: 'linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)',
          borderRadius: '16px',
          padding: '1.25rem',
          border: '1px solid #fde68a'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '0.85rem', alignItems: 'center' }}>
            {/* Mobile Recipient Phone Mockup */}
            <div style={{
              background: '#061a16',
              borderRadius: '16px',
              padding: '0.6rem 0.45rem',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
            }}>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#00a878', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.35rem auto' }}>
                <CheckCircle2 size={13} />
              </div>
              <strong style={{ fontSize: '0.68rem', display: 'block', lineHeight: 1.2 }}>Your certificate is ready!</strong>
              <p style={{ fontSize: '0.48rem', color: '#cbf3e0', margin: '0.2rem 0 0.4rem 0' }}>Congratulations Jane!</p>
              
              <div style={{ background: '#d97706', color: '#fff', borderRadius: '4px', padding: '0.2rem', fontSize: '0.55rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                View Certificate
              </div>
              <div style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderRadius: '4px', padding: '0.2rem', fontSize: '0.52rem' }}>
                Download PDF
              </div>
            </div>

            {/* Certificate Preview Card & Share Bar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{
                background: '#ffffff',
                border: '2px solid #d97706',
                padding: '0.85rem',
                borderRadius: '6px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}>
                <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#d97706' }}>VERIFIED DIPLOMA</span>
                <h4 style={{ fontFamily: 'Pinyon Script, cursive', fontSize: '0.98rem', color: '#061a16', margin: '0.1rem 0' }}>Jane Smith</h4>
                <p style={{ fontSize: '0.48rem', color: '#64748b' }}>Leadership Program 2026</p>
              </div>

              {/* Share Bar */}
              <div style={{ background: '#ffffff', padding: '0.45rem 0.65rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#0f172a' }}>Share achievement:</span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <span style={{ background: '#0077b5', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>in</span>
                  <span style={{ background: '#25d366', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>wa</span>
                  <span style={{ background: '#000000', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>X</span>
                  <span style={{ background: '#1877f2', color: '#fff', width: '20px', height: '20px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>f</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section style={{ padding: '5rem 1.25rem 6rem 1.25rem', maxWidth: '1280px', margin: '0 auto', overflow: 'visible' }}>
      
      {/* Section Header */}
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '0.85rem', padding: '0.35rem 0.9rem' }}>
          FRICTIONLESS WORKFLOW
        </span>
        <h2 className="font-serif" style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem', lineHeight: 1.15 }}>
          How Kpalee Works
        </h2>
        <p style={{ fontSize: '1.08rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          From bulk recipient upload to instant certificate delivery — issuing credentials has never been this smooth.
        </p>
      </div>

      {/* Sticky Stacking Collapsing Scroll Cards Container (PC & Mobile Compatible) */}
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'visible', paddingBottom: '4rem' }}>
        {steps.map((step, idx) => {
          return (
            <div
              key={step.num}
              style={{
                position: 'sticky',
                top: `${100 + idx * 28}px`,
                zIndex: idx + 1,
                background: '#ffffff',
                border: `1.5px solid ${step.borderColor}`,
                borderRadius: '24px',
                padding: '2.5rem 2.25rem',
                boxShadow: `0 ${12 + idx * 8}px ${35 + idx * 10}px rgba(6, 26, 22, ${0.08 + idx * 0.03})`,
                marginBottom: idx === steps.length - 1 ? '0' : '6rem',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}>
                
                {/* Left Column: Number, Badge, Title, Desc, and Sub-Buttons */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.1rem' }}>
                    {/* Number Circle */}
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      border: `2px solid ${step.color}`,
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.15rem',
                      fontWeight: 900
                    }}>
                      {step.num}
                    </div>

                    {/* Top Pill Badge */}
                    <span style={{
                      background: step.bgColor,
                      color: step.color,
                      border: `1px solid ${step.color}40`,
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.06em'
                    }}>
                      ✦ {step.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.85rem', lineHeight: 1.2 }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '1.02rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {step.desc}
                  </p>

                  {/* Sub-Feature Buttons Grid */}
                  <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                    {step.subButtons.map((sub, sIdx) => {
                      const SubIcon = sub.icon;
                      return (
                        <div
                          key={sIdx}
                          style={{
                            background: '#ffffff',
                            border: `1px solid ${step.color}35`,
                            borderRadius: '12px',
                            padding: '0.6rem 0.85rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.35rem',
                            flex: 1,
                            minWidth: '95px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                            textAlign: 'center'
                          }}
                        >
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '8px',
                            background: step.bgColor,
                            color: step.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            <SubIcon size={16} />
                          </div>
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', lineHeight: 1.2 }}>
                            {sub.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Detailed Graphic Mockup Illustration */}
                <div>
                  {step.renderMockup()}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
