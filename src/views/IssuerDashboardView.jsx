import React, { useState } from 'react';
import { 
  ShieldCheck, 
  PlusCircle, 
  FileSpreadsheet, 
  UploadCloud, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  TrendingUp, 
  Search, 
  ChevronRight, 
  Layers, 
  PenTool, 
  Send,
  FileText,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { MOCK_ISSUER_PROJECTS, MOCK_TEMPLATES } from '../services/mockData';

export default function IssuerDashboardView({ onSelectCertificate, onToast }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'create' | 'recipients' | 'request'
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState('template');
  const [recipientInputText, setRecipientInputText] = useState("Amina Babatunde, amina@example.com\nChidi Chukwuma, chidi@example.com\nSarah Jenkins, sarah@example.com");
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom Request Form State
  const [reqTitle, setReqTitle] = useState('');
  const [reqDetails, setReqDetails] = useState('');
  const [reqSubmitted, setReqSubmitted] = useState(false);

  // Recipient Data State
  const [recipients, setRecipients] = useState([
    { id: 'KP-2026-004829', name: 'Amina Babatunde', email: 'amina@techflow.io', cert: 'Software Architecture Fellowship', status: 'Verified', date: '2026-09-01' },
    { id: 'KP-2026-009142', name: 'Chidi Chukwuma', email: 'chidi@pan-africa.org', cert: 'Excellence in Leadership', status: 'Downloaded', date: '2026-08-28' },
    { id: 'KP-2026-001044', name: 'Sarah Jenkins', email: 'sarah@bootcamp.io', cert: 'Academic Completion', status: 'Issued', date: '2026-08-25' }
  ]);

  const handleProcessWizard = () => {
    if (wizardStep === 1) {
      setWizardStep(2);
    } else if (wizardStep === 2) {
      // Parse recipients
      const lines = recipientInputText.split('\n').filter(l => l.trim().length > 0);
      const parsed = lines.map((line, idx) => {
        const parts = line.split(',');
        return {
          id: `KP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
          name: parts[0] ? parts[0].trim() : `Recipient ${idx + 1}`,
          email: parts[1] ? parts[1].trim() : `user${idx + 1}@example.com`,
          cert: 'Batch Issued Certificate',
          status: 'Issued',
          date: new Date().toISOString().split('T')[0]
        };
      });

      setRecipients(prev => [...parsed, ...prev]);
      setWizardStep(3);
      if (onToast) onToast('Bulk recipients processed and field mappings verified!');
    } else if (wizardStep === 3) {
      setWizardStep(1);
      setActiveTab('recipients');
      if (onToast) onToast('Batch certificates generated and delivery links issued! 🎉');
    }
  };

  const handleCustomRequestSubmit = (e) => {
    e.preventDefault();
    setReqSubmitted(true);
    if (onToast) onToast('Custom design request sent to Kpalee owner team!');
  };

  const filteredRecipients = recipients.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-slide-up" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2.5rem 2rem' }}>
      
      {/* Issuer Portal Banner */}
      <div className="glass-panel-dark" style={{
        padding: '2rem 2.5rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            background: 'var(--kpalee-emerald)',
            color: '#ffffff',
            width: '54px',
            height: '54px',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 18px rgba(0, 168, 120, 0.4)'
          }}>
            <ShieldCheck size={32} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <h1 className="font-serif" style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 800 }}>
                Issuer Control Center
              </h1>
              <span className="badge badge-emerald">Verified Issuer Session</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#d1f2e4', marginTop: '0.2rem' }}>
              Create projects, import recipient spreadsheets, generate bulk certificates, and track analytics.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setActiveTab('create');
            setWizardStep(1);
          }}
          className="btn-primary"
          style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}
        >
          <PlusCircle size={19} /> Create New Batch
        </button>
      </div>

      {/* Portal Tabs Bar */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('overview')}
          className={activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
        >
          Overview Metrics
        </button>

        <button
          onClick={() => {
            setActiveTab('create');
            setWizardStep(1);
          }}
          className={activeTab === 'create' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
        >
          Bulk Creation Wizard
        </button>

        <button
          onClick={() => setActiveTab('recipients')}
          className={activeTab === 'recipients' ? 'btn-primary' : 'btn-secondary'}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
        >
          Recipients & Certificates ({recipients.length})
        </button>

        <button
          onClick={() => setActiveTab('request')}
          className={activeTab === 'request' ? 'btn-accent' : 'btn-secondary'}
          style={{ padding: '0.55rem 1.25rem', fontSize: '0.9rem' }}
        >
          Request Custom Artwork
        </button>
      </div>

      {/* TAB 1: OVERVIEW METRICS */}
      {activeTab === 'overview' && (
        <div>
          {/* Analytics Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--kpalee-emerald)', marginBottom: '0.65rem' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Issued</span>
                <Award size={22} />
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>995</div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>Across 2 active projects</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--kpalee-teal)', marginBottom: '0.65rem' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Downloaded</span>
                <TrendingUp size={22} />
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>918</div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>92% claim rate</span>
            </div>

            <div className="glass-panel" style={{ padding: '1.5rem', background: '#ffffff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--kpalee-gold)', marginBottom: '0.65rem' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 600 }}>Verifications</span>
                <ShieldCheck size={22} />
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>704</div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: 600 }}>Authenticity queries</span>
            </div>
          </div>

          {/* Projects List */}
          <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#ffffff' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1.25rem' }}>
              Active Certificate Projects
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {MOCK_ISSUER_PROJECTS.map(prj => (
                <div
                  key={prj.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>{prj.name}</h4>
                      <span className="badge badge-emerald">{prj.status}</span>
                    </div>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Created on {prj.date}</span>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <div>Recipients: <strong style={{ color: 'var(--kpalee-dark-bg)' }}>{prj.recipientsCount}</strong></div>
                    <div>Downloaded: <strong style={{ color: 'var(--kpalee-emerald)' }}>{prj.downloadedCount}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BULK CREATION WIZARD */}
      {activeTab === 'create' && (
        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: '#ffffff' }}>
          
          {/* Wizard Header Progress */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem' }}>
            <h2 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
              Bulk Certificate Wizard — Step {wizardStep} of 3
            </h2>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span className={`badge ${wizardStep >= 1 ? 'badge-emerald' : 'badge-dark'}`}>1. Choose Path</span>
              <span className={`badge ${wizardStep >= 2 ? 'badge-emerald' : 'badge-dark'}`}>2. Import Recipients</span>
              <span className={`badge ${wizardStep >= 3 ? 'badge-emerald' : 'badge-dark'}`}>3. Review & Issue</span>
            </div>
          </div>

          {/* Step 1: Choose Creation Path */}
          {wizardStep === 1 && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem' }}>
                Select Creation Path
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div
                  onClick={() => setSelectedPath('template')}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: selectedPath === 'template' ? '2px solid var(--kpalee-emerald)' : '1px solid var(--border-color)',
                    background: selectedPath === 'template' ? 'var(--kpalee-mint-soft)' : '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  <Layers size={28} color="var(--kpalee-emerald)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.35rem' }}>
                    Kpalee Template Preset
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Use one of our pre-styled academic or executive certificate layouts.</p>
                </div>

                <div
                  onClick={() => setSelectedPath('upload')}
                  style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-md)',
                    border: selectedPath === 'upload' ? '2px solid var(--kpalee-emerald)' : '1px solid var(--border-color)',
                    background: selectedPath === 'upload' ? 'var(--kpalee-mint-soft)' : '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  <UploadCloud size={28} color="var(--kpalee-emerald)" style={{ marginBottom: '0.75rem' }} />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.35rem' }}>
                    Upload Artwork File
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Upload your existing custom PDF or PNG certificate graphics.</p>
                </div>
              </div>

              <button onClick={handleProcessWizard} className="btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
                Continue to Recipient Import <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2: Import & Map Recipients */}
          {wizardStep === 2 && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--kpalee-dark-bg)', marginBottom: '0.5rem' }}>
                Import Recipient Data
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Paste CSV formatted text (Format: <code>Full Name, Email</code> per line) or upload spreadsheet file.
              </p>

              <div className="form-group">
                <label className="form-label">Recipients List (CSV / Comma Separated)</label>
                <textarea
                  rows={6}
                  className="input-field"
                  value={recipientInputText}
                  onChange={(e) => setRecipientInputText(e.target.value)}
                  style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <button onClick={() => setWizardStep(1)} className="btn-secondary">Back</button>
                <button onClick={handleProcessWizard} className="btn-primary">
                  Process Recipients & Field Mapping <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Batch Preview & Issue */}
          {wizardStep === 3 && (
            <div>
              <div style={{ background: 'var(--kpalee-mint-soft)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid #d1f2e4', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '0.4rem' }}>
                  Batch Generation Ready! 🎉
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  All recipients have been mapped and cryptographical certificate IDs assigned. Click below to issue.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setWizardStep(2)} className="btn-secondary">Back</button>
                <button onClick={handleProcessWizard} className="btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                  Issue & Deliver Certificates <CheckCircle2 size={19} />
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* TAB 3: RECIPIENTS TABLE */}
      {activeTab === 'recipients' && (
        <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: '#ffffff' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
              Issued Recipient Credentials ({filteredRecipients.length})
            </h3>

            <div style={{ position: 'relative', width: '260px' }}>
              <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-field"
                placeholder="Search recipients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', paddingLeft: '2.4rem', padding: '0.45rem 0.9rem 0.45rem 2.4rem', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.85rem 1rem' }}>Certificate ID</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Recipient Name & Email</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Title</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Issue Date</th>
                  <th style={{ padding: '0.85rem 1rem' }}>Status</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecipients.map(r => (
                  <tr key={r.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--kpalee-emerald)' }}>{r.id}</td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ fontWeight: 700, color: 'var(--kpalee-dark-bg)' }}>{r.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{r.email}</div>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{r.cert}</td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{r.date}</td>
                    <td style={{ padding: '1rem' }}>
                      <span className={`badge ${r.status === 'Verified' ? 'badge-emerald' : 'badge-teal'}`}>
                        {r.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <button
                        onClick={() => onSelectCertificate(r.id)}
                        className="btn-secondary"
                        style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}
                      >
                        Public View <ExternalLink size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

      {/* TAB 4: REQUEST CUSTOM ARTWORK */}
      {activeTab === 'request' && (
        <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: '#ffffff', maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <span className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>Bespoke Certificate Design</span>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
              Request Custom Certificate Artwork
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Have an institutional seal, custom watermark, or dual signature design requirement? Submit your brief to Kpalee designers.
            </p>
          </div>

          {reqSubmitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <CheckCircle2 size={48} color="var(--kpalee-emerald)" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>Request Received!</h4>
              <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 1.5rem 0' }}>Our design team will craft your template and notify your issuer dashboard.</p>
              <button onClick={() => setReqSubmitted(false)} className="btn-secondary">Submit Another Request</button>
            </div>
          ) : (
            <form onSubmit={handleCustomRequestSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div className="form-group">
                <label className="form-label">Project / Certificate Title *</label>
                <input
                  type="text"
                  required
                  className="input-field"
                  value={reqTitle}
                  onChange={(e) => setReqTitle(e.target.value)}
                  placeholder="e.g. Executive Fellowship Diploma"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Design Brief & Specifications</label>
                <textarea
                  rows={4}
                  className="input-field"
                  value={reqDetails}
                  onChange={(e) => setReqDetails(e.target.value)}
                  placeholder="Describe your logo placement, color scheme, border style, or custom font instructions..."
                />
              </div>

              <button type="submit" className="btn-accent" style={{ justifyContent: 'center', padding: '0.85rem' }}>
                <Send size={18} /> Submit Custom Brief
              </button>
            </form>
          )}

        </div>
      )}

    </div>
  );
}
