export function calculateExpirationTime(purchaseDateStr, expirationDateStr) {
  const purchaseDate = new Date(purchaseDateStr);
  const expirationDate = new Date(expirationDateStr);
  return Math.floor((expirationDate - purchaseDate) / (1000 * 60 * 60 * 24));
};

export function calculateExpirationDate(purchaseDateStr, expirationTime) {
  const purchaseDate = new Date(purchaseDateStr);
  const expirationDate = new Date(purchaseDate);
  expirationDate.setDate(expirationDate.getDate() + expirationTime);
  return expirationDate;
};