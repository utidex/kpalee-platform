import React from 'react';
import { Zap, Send, ShieldCheck, Share2, FileSpreadsheet, CheckCircle2, ArrowRight, Camera, Mail, Sparkles } from 'lucide-react';
import heroBannerImg from '../assets/hero_banner.png';

export default function FeatureShowcase({ onCreateClick, onBadgesClick }) {
  return (
    <section style={{ padding: '5.5rem 2rem', background: '#ffffff', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1350px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem auto' }}>
          <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} /> Built for Modern Events & Training Providers
          </span>
          <h2 className="font-serif" style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Everything You Need to Issue & Manage Credentials at Scale
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Eliminate manual PDF creation. Kpalee automates design, bulk distribution, cryptographic verification, and event social identity.
          </p>
        </div>

        {/* Feature Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          
          {/* Feature 1: Bulk Issuance with Visual Screenshot */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.85rem' }}>
                <Zap size={14} /> Bulk Issuance Engine
              </span>
              <h3 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Issue Thousands of Certificates in Seconds
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Simply upload your recipient spreadsheet (CSV or Excel). Kpalee automatically maps fields like Full Name, Course Title, Issue Date, and custom Certificate IDs across your batch.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.94rem', fontWeight: 600, color: 'var(--kpalee-dark-bg)' }}>
                  <CheckCircle2 size={18} color="var(--kpalee-emerald)" /> Instant CSV & Excel Column Auto-Mapping
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.94rem', fontWeight: 600, color: 'var(--kpalee-dark-bg)' }}>
                  <CheckCircle2 size={18} color="var(--kpalee-emerald)" /> Batch High-Res PNG & PDF Zip Generation
                </div>
              </div>

              <button onClick={onCreateClick} className="btn-primary">
                Start Bulk Issuing <ArrowRight size={17} />
              </button>
            </div>

            {/* Feature 1 Visual Image Mockup */}
            <div className="glass-panel" style={{
              padding: '1rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--kpalee-mint-soft) 0%, #ffffff 100%)',
              boxShadow: 'var(--shadow-lg)',
              border: '1.5px solid var(--border-color)'
            }}>
              <img
                src={heroBannerImg}
                alt="Kpalee Product Showcase"
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)', display: 'block' }}
              />
            </div>
          </div>

          {/* Feature 2: Automated Email Delivery & Zero Recipient Barrier */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            {/* Feature 2 Mock Email Visual */}
            <div className="glass-panel" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, var(--kpalee-dark-bg) 0%, #0f766e 100%)',
              color: '#ffffff'
            }}>
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: 'var(--radius-md)', color: 'var(--kpalee-dark-bg)', boxShadow: 'var(--shadow-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', padding: '0.4rem', borderRadius: '8px' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.94rem', color: 'var(--kpalee-dark-bg)', display: 'block' }}>Your Certificate is Ready! 🎉</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>From: credentials@kpalee.com</span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  "Congratulations Sarah! Your official certificate for Software Engineering Fellowship is verified and ready to download."
                </p>

                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.6rem', fontSize: '0.85rem' }}>
                  View & Download Certificate (Zero Account Needed)
                </button>
              </div>
            </div>

            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.85rem' }}>
                <Send size={14} /> Zero Recipient Barrier
              </span>
              <h3 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Recipients Receive Instant Access. Zero Friction.
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Never force your attendees or graduates to create accounts just to access their achievements. Recipients click their personal link to view, download, and share immediately.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.94rem', fontWeight: 600, color: 'var(--kpalee-dark-bg)' }}>
                  <CheckCircle2 size={18} color="var(--kpalee-emerald)" /> 1-Click View & High-Res PNG / PDF Export
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.94rem', fontWeight: 600, color: 'var(--kpalee-dark-bg)' }}>
                  <CheckCircle2 size={18} color="var(--kpalee-emerald)" /> Customizable Email Notification Templates
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Event Badges & DP Generator */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '0.85rem' }}>
                <Camera size={14} /> Social Identity Loop
              </span>
              <h3 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem', lineHeight: 1.25 }}>
                Turn Event Attendance Into Viral Social Bragging
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Create event badges and let your attendees generate custom event Display Picture (DP) profile frames for WhatsApp, Instagram, LinkedIn, and X.
              </p>

              <button onClick={onBadgesClick} className="btn-accent">
                Explore Event Badges & DP Generator <ArrowRight size={17} />
              </button>
            </div>

            <div className="glass-panel-dark" style={{ padding: '2.25rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', background: 'linear-gradient(135deg, #061a16 0%, #00a878 100%)' }}>
              <span className="badge badge-emerald" style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                Event DP Frame Preview
              </span>
              <h4 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 800 }}>Lagos Tech Week 2026</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--kpalee-emerald-light)', fontWeight: 800, display: 'block', marginTop: '0.35rem' }}>PROUD DELEGATE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
