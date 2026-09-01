// Configurable Pricing Tiers Engine for Kpalee
export const PRICING_CONFIG = {
  freeThreshold: 10,
  baseCurrency: 'NGN',
  tiers: [
    { min: 1, max: 10, pricePerUnit: 0, label: 'Free Tier', badge: '100% Free' },
    { min: 11, max: 99, pricePerUnit: 350, label: 'Starter', badge: 'Standard' },
    { min: 100, max: 199, pricePerUnit: 300, label: 'Growth', badge: 'Popular' },
    { min: 200, max: 499, pricePerUnit: 250, label: 'Scale', badge: 'Best Value' },
    { min: 500, max: 100000, pricePerUnit: 200, label: 'Enterprise Volume', badge: 'Custom Bulk' }
  ],
  currencies: {
    NGN: { symbol: '₦', name: 'Nigerian Naira', rateFromNGN: 1, format: '₦' },
    USD: { symbol: '$', name: 'US Dollar', rateFromNGN: 0.00074, format: '$' },
    EUR: { symbol: '€', name: 'Euro', rateFromNGN: 0.00068, format: '€' },
    GBP: { symbol: '£', name: 'British Pound', rateFromNGN: 0.00057, format: '£' }
  }
};

/**
 * Calculates pricing for a given quantity and currency
 */
export function calculatePricing(quantity = 150, currencyCode = 'NGN') {
  const qty = Math.max(1, parseInt(quantity) || 1);
  const currency = PRICING_CONFIG.currencies[currencyCode] || PRICING_CONFIG.currencies.NGN;
  
  // Find applicable tier
  const matchedTier = PRICING_CONFIG.tiers.find(t => qty >= t.min && qty <= t.max) || PRICING_CONFIG.tiers[PRICING_CONFIG.tiers.length - 1];
  
  // Total in base currency (NGN)
  const isFree = qty <= PRICING_CONFIG.freeThreshold;
  const unitPriceNGN = isFree ? 0 : matchedTier.pricePerUnit;
  const totalNGN = isFree ? 0 : qty * unitPriceNGN;

  // Convert to selected currency
  const unitPriceConverted = unitPriceNGN * currency.rateFromNGN;
  const totalConverted = totalNGN * currency.rateFromNGN;

  // Format helper
  const formatAmount = (val, code) => {
    const curr = PRICING_CONFIG.currencies[code] || PRICING_CONFIG.currencies.NGN;
    if (code === 'NGN') {
      return `${curr.symbol}${Math.round(val).toLocaleString()}`;
    }
    return `${curr.symbol}${val.toFixed(2)}`;
  };

  return {
    quantity: qty,
    tier: matchedTier,
    isFree,
    currency,
    unitPriceNGN,
    totalNGN,
    unitPriceFormatted: formatAmount(unitPriceConverted, currencyCode),
    totalFormatted: isFree ? 'FREE 🎉' : formatAmount(totalConverted, currencyCode),
    convertedNote: currencyCode !== 'NGN' ? `Converted from ₦${totalNGN.toLocaleString()} NGN using live mid-market rates.` : null
  };
}
