// Kpalee Flexible Pay-As-You-Issue Volume Pricing Engine

export const PRICING_CONFIG = {
  // Volume Tiers (NGN base currency)
  tiers: [
    { min: 1, max: 50, unitPriceNGN: 0, label: 'Starter Tier', isFree: true, badge: '100% FREE' },
    { min: 51, max: 199, unitPriceNGN: 350, label: 'Growth Volume', isFree: false, badge: 'Popular' },
    { min: 200, max: 499, unitPriceNGN: 280, label: 'Scale Tier', isFree: false, badge: '20% Discount' },
    { min: 500, max: 999, unitPriceNGN: 220, label: 'Pro Organization', isFree: false, badge: '37% Discount' },
    { min: 1000, max: 50000, unitPriceNGN: 180, label: 'Enterprise Volume', isFree: false, badge: 'Best Value' }
  ],

  // Multi-Currency Rates (per copy conversion)
  currencies: {
    NGN: { code: 'NGN', symbol: '₦', rateToNGN: 1, format: (val) => `₦${val.toLocaleString()}` },
    USD: { code: 'USD', symbol: '$', rateToNGN: 0.0016, customUnitPriceUSD: 0.50, format: (val) => `$${val.toFixed(2)}` },
    EUR: { code: 'EUR', symbol: '€', rateToNGN: 0.0014, customUnitPriceEUR: 0.45, format: (val) => `€${val.toFixed(2)}` },
    GBP: { code: 'GBP', symbol: '£', rateToNGN: 0.0012, customUnitPriceGBP: 0.40, format: (val) => `£${val.toFixed(2)}` }
  }
};

/**
 * Calculates pricing for a given volume quantity and currency
 */
export function calculatePricing(quantity, currencyCode = 'NGN') {
  const qty = Math.max(1, parseInt(quantity) || 1);
  const selectedCurrency = PRICING_CONFIG.currencies[currencyCode] || PRICING_CONFIG.currencies.NGN;

  // Find matching tier
  const tier = PRICING_CONFIG.tiers.find(t => qty >= t.min && qty <= t.max) || PRICING_CONFIG.tiers[PRICING_CONFIG.tiers.length - 1];

  let unitPrice = 0;
  let totalPrice = 0;

  if (tier.isFree) {
    unitPrice = 0;
    totalPrice = 0;
  } else {
    if (currencyCode === 'USD') {
      // Scale USD unit price dynamically per tier
      const usdBase = tier.unitPriceNGN >= 350 ? 0.65 : tier.unitPriceNGN >= 280 ? 0.50 : tier.unitPriceNGN >= 220 ? 0.40 : 0.30;
      unitPrice = usdBase;
      totalPrice = qty * unitPrice;
    } else if (currencyCode === 'EUR') {
      const eurBase = tier.unitPriceNGN >= 350 ? 0.60 : tier.unitPriceNGN >= 280 ? 0.45 : tier.unitPriceNGN >= 220 ? 0.35 : 0.28;
      unitPrice = eurBase;
      totalPrice = qty * unitPrice;
    } else if (currencyCode === 'GBP') {
      const gbpBase = tier.unitPriceNGN >= 350 ? 0.50 : tier.unitPriceNGN >= 280 ? 0.40 : tier.unitPriceNGN >= 220 ? 0.30 : 0.25;
      unitPrice = gbpBase;
      totalPrice = qty * unitPrice;
    } else {
      unitPrice = tier.unitPriceNGN;
      totalPrice = qty * unitPrice;
    }
  }

  return {
    quantity: qty,
    currency: selectedCurrency.code,
    currencySymbol: selectedCurrency.symbol,
    tier,
    unitPrice,
    totalPrice,
    unitPriceFormatted: tier.isFree ? 'Free' : selectedCurrency.format(unitPrice),
    totalFormatted: tier.isFree ? '100% FREE' : selectedCurrency.format(totalPrice),
    isFree: tier.isFree,
    convertedNote: currencyCode !== 'NGN' ? `(Configured for ${selectedCurrency.code} international billing)` : null
  };
}
