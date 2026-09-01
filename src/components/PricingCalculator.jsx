import React, { useState } from 'react';
import { calculatePricing, PRICING_CONFIG } from '../services/pricingService';
import { Calculator, CheckCircle2, Sparkles, ArrowRight, DollarSign, HelpCircle, ShieldCheck } from 'lucide-react';

export default function PricingCalculator({ currency, setCurrency, onCreateCertificateClick }) {
  const [quantity, setQuantity] = useState(150);

  const pricing = calculatePricing(quantity, currency);

  const handleSliderChange = (e) => {
    setQuantity(parseInt(e.target.value) || 1);
  };

  const incrementQty = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  return (
    <section id="kpalee-pricing-section" style={{ padding: '6rem 2rem', maxWidth: '1250px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
        <span className="badge badge-emerald" style={{ marginBottom: '1rem' }}>
          Flexible Pay-As-You-Issue Volume Pricing
        </span>
        <h2 className="font-serif" style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)', marginBottom: '1rem' }}>
          Simple, Transparent Volume Pricing
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          First <strong>50 certificates are 100% Free</strong>. Scale your certificate volume with automatic bulk discounts.
        </p>
      </div>

      {/* Main Interactive Calculator Card */}
      <div className="glass-panel" style={{
        padding: '3.5rem 3rem',
        borderRadius: 'var(--radius-lg)',
        background: '#ffffff',
        boxShadow: 'var(--shadow-lg)',
        border: '1.5px solid var(--border-color)',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        
        {/* Top Control Bar: Currency Selector */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--kpalee-mint-soft)', color: 'var(--kpalee-emerald)', padding: '0.55rem', borderRadius: '12px' }}>
              <Calculator size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--kpalee-dark-bg)' }}>
                Certificate Volume Calculator
              </h3>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>First 1–50 Certificates Free</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="select-field"
              style={{ padding: '0.5rem 0.95rem', fontSize: '0.9rem', fontWeight: 800 }}
            >
              {Object.keys(PRICING_CONFIG.currencies).map(code => (
                <option key={code} value={code}>
                  {PRICING_CONFIG.currencies[code].symbol} {code}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quantity Stepper & Slider */}
        <div style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
            <label className="form-label" style={{ fontSize: '0.92rem' }}>How many certificates do you need?</label>
            <span className="badge badge-emerald">{pricing.tier.label} ({pricing.tier.badge})</span>
          </div>

          {/* Stepper Inputs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <button
              onClick={() => incrementQty(-25)}
              className="btn-secondary"
              style={{ width: '52px', height: '52px', justifyContent: 'center', padding: 0, fontSize: '1.3rem', fontWeight: 800 }}
            >
              −
            </button>

            <input
              type="number"
              min={1}
              max={50000}
              className="input-field"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, color: 'var(--kpalee-emerald)', flex: 1, padding: '0.6rem' }}
            />

            <button
              onClick={() => incrementQty(25)}
              className="btn-secondary"
              style={{ width: '52px', height: '52px', justifyContent: 'center', padding: 0, fontSize: '1.3rem', fontWeight: 800 }}
            >
              +
            </button>
          </div>

          {/* Range Slider */}
          <input
            type="range"
            min={1}
            max={1000}
            step={5}
            value={Math.min(1000, quantity)}
            onChange={handleSliderChange}
            style={{
              width: '100%',
              accentColor: 'var(--kpalee-emerald)',
              cursor: 'pointer',
              height: '8px'
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.5rem', fontWeight: 700 }}>
            <span>1–50 (FREE)</span>
            <span>100 (₦350)</span>
            <span>200 (₦280)</span>
            <span>500 (₦220)</span>
            <span>1000+ (₦180)</span>
          </div>
        </div>

        {/* Cost Summary Box */}
        <div className="glass-panel-dark" style={{
          padding: '2.25rem',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          marginBottom: '2.25rem'
        }}>
          <span style={{ fontSize: '0.85rem', color: '#a1e9c9', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
            Estimated Total Output Cost
          </span>

          <div style={{ fontSize: '3.4rem', fontWeight: 800, color: '#ffffff', margin: '0.4rem 0 0.2rem 0' }}>
            {pricing.totalFormatted}
          </div>

          {!pricing.isFree && (
            <p style={{ fontSize: '0.95rem', color: '#d1f2e4' }}>
              Unit Price: <strong>{pricing.unitPriceFormatted}</strong> per certificate copy
            </p>
          )}

          {pricing.convertedNote && (
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.5rem', fontStyle: 'italic' }}>
              {pricing.convertedNote}
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={onCreateCertificateClick}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.95rem', fontSize: '1.1rem' }}
          >
            Start Generating Certificates <ArrowRight size={20} />
          </button>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Need more than 5,000 certificates? <a href="#sales" style={{ color: 'var(--kpalee-emerald)', fontWeight: 700 }}>Talk to Sales</a> for custom enterprise SLAs.
          </p>
        </div>

      </div>

    </section>
  );
}
