import React, { useState } from 'react';
import { Shield, Sparkles, UserCheck, PlusCircle, Lock, Mail, Menu, X, ChevronRight } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (viewName) => {
    setCurrentView(viewName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="no-print" style={{
      borderBottom: '1px solid var(--border-color)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      boxShadow: '0 4px 20px rgba(6, 26, 22, 0.05)'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        
        {/* Brand Wordmark Logo */}
        <div 
          onClick={() => handleMobileNav('landing')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }}
        >
          <div 
            style={{
              background: 'linear-gradient(135deg, var(--kpalee-emerald), var(--kpalee-dark-bg))',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0, 168, 120, 0.4)'
            }}
          >
            <Shield size={22} color="#ffffff" strokeWidth={2.5} />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span className="font-serif" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--kpalee-dark-bg)' }}>
                Kpalee<span style={{ color: 'var(--kpalee-emerald)' }}>.</span>
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.62rem', padding: '0.1rem 0.45rem' }}>
                Recognition
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links (Hidden on small screens via CSS/flex) */}
        <nav className="desktop-nav" style={{
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
              padding: '0.48rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'landing' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'landing' ? '#ffffff' : 'var(--text-muted)'
            }}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentView('badges')}
            style={{
              padding: '0.48rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'badges' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'badges' ? '#ffffff' : 'var(--text-muted)'
            }}
          >
            Event Badges & DP
          </button>

          <button
            onClick={() => setCurrentView('verify')}
            style={{
              padding: '0.48rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: currentView === 'verify' ? 'var(--kpalee-emerald)' : 'transparent',
              color: currentView === 'verify' ? '#ffffff' : 'var(--text-muted)'
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
              padding: '0.48rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              color: 'var(--text-muted)'
            }}
          >
            Pricing
          </button>
        </nav>

        {/* Desktop Right Actions Cluster */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          
          <button
            onClick={onOpenEmailInbox}
            className="btn-secondary"
            style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem', borderColor: 'rgba(0, 168, 120, 0.4)', background: 'var(--kpalee-mint-soft)' }}
          >
            <Mail size={15} color="var(--kpalee-emerald)" /> Email Demo
          </button>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="select-field"
            style={{
              padding: '0.42rem 0.7rem',
              fontSize: '0.82rem',
              fontWeight: 800,
              width: 'auto'
            }}
          >
            {Object.keys(PRICING_CONFIG.currencies).map(code => (
              <option key={code} value={code}>
                {PRICING_CONFIG.currencies[code].symbol} {code}
              </option>
            ))}
          </select>

          {isIssuerLoggedIn ? (
            <button
              onClick={() => setCurrentView('dashboard')}
              className={currentView === 'dashboard' ? 'btn-primary' : 'btn-secondary'}
              style={{ padding: '0.48rem 1rem', fontSize: '0.85rem' }}
            >
              <UserCheck size={15} /> Dashboard
            </button>
          ) : (
            <button
              onClick={onIssuerLoginClick}
              className="btn-secondary"
              style={{ padding: '0.48rem 0.9rem', fontSize: '0.85rem' }}
            >
              <Lock size={14} /> Sign In
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
            style={{ padding: '0.52rem 1.15rem', fontSize: '0.86rem' }}
          >
            <PlusCircle size={15} /> Create
          </button>

        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-hamburger-btn"
          style={{
            background: 'var(--kpalee-mint-soft)',
            border: '1px solid var(--border-color)',
            color: 'var(--kpalee-dark-bg)',
            padding: '0.5rem',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'none' // Controlled via CSS media query
          }}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="animate-pop-in" style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}>
          <button
            onClick={() => handleMobileNav('landing')}
            className={currentView === 'landing' ? 'btn-primary' : 'btn-secondary'}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem' }}
          >
            Home
          </button>

          <button
            onClick={() => handleMobileNav('badges')}
            className={currentView === 'badges' ? 'btn-primary' : 'btn-secondary'}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem' }}
          >
            Event Badges & DP
          </button>

          <button
            onClick={() => handleMobileNav('verify')}
            className={currentView === 'verify' ? 'btn-primary' : 'btn-secondary'}
            style={{ width: '100%', justifyContent: 'flex-start', padding: '0.75rem' }}
          >
            Verify Certificate
          </button>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="select-field"
              style={{ flex: 1, padding: '0.5rem' }}
            >
              {Object.keys(PRICING_CONFIG.currencies).map(code => (
                <option key={code} value={code}>
                  {PRICING_CONFIG.currencies[code].symbol} {code}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEmailInbox();
            }}
            className="btn-accent"
            style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
          >
            <Mail size={16} /> Open Email Inbox Demo
          </button>

          {isIssuerLoggedIn ? (
            <button
              onClick={() => handleMobileNav('dashboard')}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
            >
              <UserCheck size={16} /> Issuer Dashboard
            </button>
          ) : (
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onIssuerLoginClick();
              }}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}
            >
              <Lock size={15} /> Issuer Sign In
            </button>
          )}

          <button
            onClick={() => {
              if (isIssuerLoggedIn) {
                handleMobileNav('dashboard');
              } else {
                setIsMobileMenuOpen(false);
                onIssuerLoginClick();
              }
            }}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
          >
            <PlusCircle size={17} /> Create Certificate
          </button>
        </div>
      )}

    </header>
  );
}
