export function calcDiscount(suggestedRetailPrice: number, finalPrice: number) {
if (suggestedRetailPrice <= finalPrice) return null; // no discount

const amount = suggestedRetailPrice - finalPrice;
const percent = Math.round((amount / suggestedRetailPrice) * 100);

return { amount, percent };
}

