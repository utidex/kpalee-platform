import React from 'react';
import { Shield, Sparkles, ChevronDown, UserCheck, PlusCircle, Award, CheckCircle2, Lock, Mail } from 'lucide-react';
import { PRICING_CONFIG } from '../services/pricingService';

export default function Navbar({ 
  currentView, 
  setCurrentView, 
  currency, 
  setCurrency, 
  isIssuerLoggedIn, 
  onIssuerLoginClick, 
  onIssuerLogout,
  onOpenEmailInbox 
}) {
  return (
    <header className="no-print" style={{
      borderBottom: '1px solid var(--border-color)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0.9rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        
        {/* Brand Wordmark Logo */}
        <div 
          onClick={() => setCurrentView('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
        >
          <div 
            className="pulse-glow"
            style={{
              background: 'linear-gradient(135deg, var(--kpalee-emerald), var(--kpalee-dark-bg))',
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0, 168, 120, 0.35)',
              transition: 'transform var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Shield size={24} color="#ffffff" strokeWidth={2.5} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--kpalee-dark-bg)' }}>
                Kpalee<span style={{ color: 'var(--kpalee-emerald)' }}>.</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '0.15rem 0.55rem' }}>
                <Sparkles size={11} /> Recognition Platform
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Certificates & Event Badges Delivered
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setCurrentView('landing')}
            className={currentView === 'landing' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.9rem' }}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentView('badges')}
            className={currentView === 'badges' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.9rem' }}
          >
            Event Badges & DP
          </button>

          <button
            onClick={() => setCurrentView('verify')}
            className={currentView === 'verify' ? 'btn-primary' : 'btn-secondary'}
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.9rem' }}
          >
            Verify Certificate
          </button>

          {/* Email Inbox Simulator Trigger */}
          <button
            onClick={onOpenEmailInbox}
            className="btn-accent"
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.88rem' }}
            title="Simulate Recipient Email Inbox"
          >
            <Mail size={16} /> Email Inbox Demo
          </button>

          {/* Currency Switcher Dropdown */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="select-field"
              style={{
                padding: '0.55rem 0.9rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--kpalee-dark-bg)',
                borderColor: 'var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--kpalee-mint-soft)'
              }}
            >
              {Object.keys(PRICING_CONFIG.currencies).map(code => (
                <option key={code} value={code}>
                  {PRICING_CONFIG.currencies[code].symbol} {code}
                </option>
              ))}
            </select>
          </div>

          {/* Issuer Account Controls */}
          {isIssuerLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => setCurrentView('dashboard')}
                className={currentView === 'dashboard' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
              >
                <UserCheck size={16} /> Issuer Dashboard
              </button>

              <button
                onClick={onIssuerLogout}
                className="btn-secondary"
                style={{ padding: '0.6rem 0.85rem', color: '#ef4444' }}
                title="Log Out Issuer Session"
              >
                Exit
              </button>
            </div>
          ) : (
            <button
              onClick={onIssuerLoginClick}
              className="btn-secondary"
              style={{ padding: '0.6rem 1.15rem', fontSize: '0.9rem' }}
            >
              <Lock size={15} /> Issuer Sign In
            </button>
          )}

          <button
            onClick={() => {
              if (isIssuerLoggedIn) {
                setCurrentView('dashboard');
              } else {
                onIssuerLoginClick();
              }
            }}
            className="btn-primary"
            style={{ padding: '0.65rem 1.35rem', fontSize: '0.92rem' }}
          >
            <PlusCircle size={17} /> Create Certificate
          </button>
        </nav>

      </div>
    </header>
  );
}
