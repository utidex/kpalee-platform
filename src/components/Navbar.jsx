import React from 'react';
import { Shield, Sparkles, UserCheck, PlusCircle, Lock, Mail, ChevronRight } from 'lucide-react';
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
      background: 'rgba(255, 255, 255, 0.92)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(6, 26, 22, 0.05)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0.85rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>
        
        {/* Left: Brand Logo & Wordmark */}
        <div 
          onClick={() => setCurrentView('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }}
        >
          <div 
            style={{
              background: 'linear-gradient(135deg, var(--kpalee-emerald), var(--kpalee-dark-bg))',
              width: '42px',
              height: '42px',
              borderRadius: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(0, 168, 120, 0.4)',
              transition: 'transform var(--transition-fast)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Shield size={22} color="#ffffff" strokeWidth={2.5} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span className="font-serif" style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--kpalee-dark-bg)' }}>
                Kpalee<span style={{ color: 'var(--kpalee-emerald)' }}>.</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.65rem', padding: '0.12rem 0.5rem' }}>
                Recognition Engine
              </span>
            </div>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, margin: 0 }}>
              Certificates & Event Badges
            </p>
          </div>
        </div>

        {/* Center: Modern Navigation Pill Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: 'var(--bg-main)',
          padding: '0.3rem 0.5rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-color)'
        }}>
          <button
            onClick={() => setCurrentView('landing')}
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.86rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'landing' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'landing' ? '#ffffff' : 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentView('badges')}
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.86rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'badges' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'badges' ? '#ffffff' : 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            Event Badges & DP
          </button>

          <button
            onClick={() => setCurrentView('verify')}
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.86rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'verify' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'verify' ? '#ffffff' : 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            Verify Certificate
          </button>

          <button
            onClick={() => {
              setCurrentView('landing');
              setTimeout(() => {
                const el = document.getElementById('kpalee-pricing-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.86rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: 'var(--text-muted)',
              transition: 'all 0.2s ease'
            }}
          >
            Pricing
          </button>
        </nav>

        {/* Right: Actions Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          
          {/* Email Inbox Simulator Trigger Button */}
          <button
            onClick={onOpenEmailInbox}
            className="btn-secondary"
            style={{ padding: '0.48rem 0.85rem', fontSize: '0.82rem', borderColor: 'rgba(0, 168, 120, 0.4)', background: 'var(--kpalee-mint-soft)' }}
            title="Simulate Recipient Email Inbox"
          >
            <Mail size={15} color="var(--kpalee-emerald)" /> Email Demo
          </button>

          {/* Currency Switcher Dropdown */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="select-field"
              style={{
                padding: '0.45rem 0.75rem',
                fontSize: '0.82rem',
                fontWeight: 800,
                color: 'var(--kpalee-dark-bg)',
                borderColor: 'var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                background: '#ffffff'
              }}
            >
              {Object.keys(PRICING_CONFIG.currencies).map(code => (
                <option key={code} value={code}>
                  {PRICING_CONFIG.currencies[code].symbol} {code}
                </option>
              ))}
            </select>
          </div>

          {/* Issuer Account Button */}
          {isIssuerLoggedIn ? (
            <button
              onClick={() => setCurrentView('dashboard')}
              className={currentView === 'dashboard' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.52rem 1.1rem', fontSize: '0.85rem' }}
            >
              <UserCheck size={15} /> Dashboard
            </button>
          ) : (
            <button
              onClick={onIssuerLoginClick}
              className="btn-secondary"
              style={{ padding: '0.52rem 1rem', fontSize: '0.85rem' }}
            >
              <Lock size={14} /> Sign In
            </button>
          )}

          {/* Main Primary CTA */}
          <button
            onClick={() => {
              if (isIssuerLoggedIn) {
                setCurrentView('dashboard');
              } else {
                onIssuerLoginClick();
              }
            }}
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
          >
            <PlusCircle size={16} /> Create Certificate
          </button>

        </div>

      </div>
    </header>
  );
}
