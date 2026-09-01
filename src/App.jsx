import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProofCounters from './components/SocialProofCounters';
import HowItWorks from './components/HowItWorks';
import FeatureShowcase from './components/FeatureShowcase';
import PricingCalculator from './components/PricingCalculator';
import DesignPathsSection from './components/DesignPathsSection';
import VerificationSection from './components/VerificationSection';
import EmailSimulationModal from './components/EmailSimulationModal';
import Footer from './components/Footer';

import PublicCertificateView from './views/PublicCertificateView';
import BadgesView from './views/BadgesView';
import DPGeneratorView from './views/DPGeneratorView';
import IssuerDashboardView from './views/IssuerDashboardView';

import { MOCK_EVENTS, MOCK_EMAILS } from './services/mockData';
import { Sparkles, Lock, X, ArrowRight, Shield } from 'lucide-react';

export default function App() {
  // Navigation & View State: 'landing' | 'certificate' | 'verify' | 'badges' | 'dp' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');
  
  // Selected State Handlers
  const [selectedCertId, setSelectedCertId] = useState('KP-2026-004829');
  const [selectedEventForDP, setSelectedEventForDP] = useState(MOCK_EVENTS[0]);

  // Email Delivery Simulator Modal State
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [emailsList, setEmailsList] = useState(MOCK_EMAILS);

  // Currency State (Default: NGN)
  const [currency, setCurrency] = useState('NGN');

  // Issuer Auth State
  const [isIssuerLoggedIn, setIsIssuerLoggedIn] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [passError, setPassError] = useState('');

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  const handleIssuerLogin = (e) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode.toLowerCase() === 'issuer' || passcode === '') {
      setIsIssuerLoggedIn(true);
      setIsLoginModalOpen(false);
      setPasscode('');
      setPassError('');
      setCurrentView('dashboard');
      showToast('Welcome back! Issuer session authenticated.');
    } else {
      setPassError('Incorrect passcode. Try "admin123"');
    }
  };

  const handleIssuerLogout = () => {
    setIsIssuerLoggedIn(false);
    if (currentView === 'dashboard') setCurrentView('landing');
    showToast('Issuer session logged out.');
  };

  const handleSelectCertificateView = (id) => {
    setSelectedCertId(id);
    setCurrentView('certificate');
  };

  const handleSelectEventDPView = (evt) => {
    setSelectedEventForDP(evt);
    setCurrentView('dp');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)' }}>
      
      {/* Navbar Header */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        currency={currency}
        setCurrency={setCurrency}
        isIssuerLoggedIn={isIssuerLoggedIn}
        onIssuerLoginClick={() => {
          if (isIssuerLoggedIn) {
            setCurrentView('dashboard');
          } else {
            setIsLoginModalOpen(true);
          }
        }}
        onIssuerLogout={handleIssuerLogout}
        onOpenEmailInbox={() => setIsEmailModalOpen(true)}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="no-print animate-pop-in" style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          background: '#ffffff',
          border: '1.5px solid var(--kpalee-emerald)',
          boxShadow: 'var(--shadow-lg)',
          color: 'var(--kpalee-dark-bg)',
          padding: '0.9rem 1.4rem',
          borderRadius: 'var(--radius-md)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <Sparkles size={20} color="var(--kpalee-emerald)" />
          <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>{toastMessage}</span>
        </div>
      )}

      {/* Main Page Content Views */}
      <main style={{ flex: 1 }}>
        
        {/* VIEW 1: LANDING PAGE */}
        {currentView === 'landing' && (
          <div>
            <HeroSection
              onCreateCertificateClick={() => {
                if (isIssuerLoggedIn) {
                  setCurrentView('dashboard');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
              onExploreTemplatesClick={() => {
                if (isIssuerLoggedIn) {
                  setCurrentView('dashboard');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
            />

            <SocialProofCounters />

            <HowItWorks />

            <FeatureShowcase
              onCreateClick={() => {
                if (isIssuerLoggedIn) {
                  setCurrentView('dashboard');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
              onBadgesClick={() => setCurrentView('badges')}
            />

            <PricingCalculator
              currency={currency}
              setCurrency={setCurrency}
              onCreateCertificateClick={() => {
                if (isIssuerLoggedIn) {
                  setCurrentView('dashboard');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
            />

            <DesignPathsSection
              onSelectOption={() => {
                if (isIssuerLoggedIn) {
                  setCurrentView('dashboard');
                } else {
                  setIsLoginModalOpen(true);
                }
              }}
            />

            <VerificationSection
              onVerifySearch={handleSelectCertificateView}
            />
          </div>
        )}

        {/* VIEW 2: RECIPIENT PUBLIC CERTIFICATE VIEW (ZERO-ACCOUNT) */}
        {currentView === 'certificate' && (
          <PublicCertificateView
            certificateId={selectedCertId}
            onBackClick={() => setCurrentView('landing')}
            onToast={showToast}
          />
        )}

        {/* VIEW 3: VERIFICATION LOOKUP VIEW */}
        {currentView === 'verify' && (
          <div className="animate-slide-up" style={{ padding: '2rem 0' }}>
            <VerificationSection onVerifySearch={handleSelectCertificateView} />
          </div>
        )}

        {/* VIEW 4: KPALEE BADGES & EVENT DISCOVERY */}
        {currentView === 'badges' && (
          <BadgesView
            onSelectEventForDP={handleSelectEventDPView}
            onToast={showToast}
          />
        )}

        {/* VIEW 5: GET YOUR EVENT DP GENERATOR */}
        {currentView === 'dp' && (
          <DPGeneratorView
            event={selectedEventForDP}
            onBackClick={() => setCurrentView('badges')}
            onToast={showToast}
          />
        )}

        {/* VIEW 6: ISSUER DASHBOARD */}
        {currentView === 'dashboard' && (
          <IssuerDashboardView
            onSelectCertificate={handleSelectCertificateView}
            onToast={showToast}
          />
        )}

      </main>

      {/* Recipient Email Delivery Inbox Simulator Modal */}
      <EmailSimulationModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        emails={emailsList}
        onOpenCertificate={handleSelectCertificateView}
      />

      {/* Issuer Login Modal */}
      {isLoginModalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6, 26, 22, 0.75)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div className="glass-panel animate-pop-in" style={{
            maxWidth: '440px',
            width: '100%',
            padding: '2.25rem',
            borderRadius: 'var(--radius-lg)',
            background: '#ffffff',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsLoginModalOpen(false)}
              style={{ position: 'absolute', top: '18px', right: '18px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={20} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'var(--kpalee-mint-soft)',
                color: 'var(--kpalee-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.85rem auto'
              }}>
                <Lock size={28} />
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Issuer Sign In
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                Sign in to manage projects and issue bulk certificates.
              </p>
            </div>

            <form onSubmit={handleIssuerLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div className="form-group">
                <label className="form-label">Issuer Passcode / Password</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Enter passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  autoFocus
                />
                {passError && <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 600 }}>{passError}</span>}
              </div>

              <div style={{ background: 'var(--kpalee-mint-soft)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem', color: 'var(--kpalee-dark-bg)' }}>
                Demo Passcode: <strong style={{ color: 'var(--kpalee-emerald)' }}>admin123</strong> (or leave blank)
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '0.85rem' }}>
                Authenticate & Access Dashboard <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} />

    </div>
  );
}
