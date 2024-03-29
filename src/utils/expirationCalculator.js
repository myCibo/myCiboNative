export function formatDate(dateInput) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Check if the input is a date object or a date string, and parse accordingly
  const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

  // Calculate the UTC offset for the Pacific Time Zone (in minutes)
  // (Assuming -7 hours for PDT or -8 hours for PST)
  const pacificOffset = date.getTimezoneOffset() + 7 * 60; // or 8 * 60 for PST

  // Convert the date object to the Pacific Time Zone
  date.setMinutes(date.getMinutes() + pacificOffset);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const ordinal = day % 10 === 1 && day !== 11
    ? 'st'
    : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th';

  return `${monthNames[monthIndex]} ${day}${ordinal}, ${year}`;
}


export function calculateExpiresInDays(expirationDateStr) {
  const today = new Date();
  const expirationDate = new Date(expirationDateStr);
  return Math.ceil((expirationDate - today) / (1000 * 60 * 60 * 24));
};

export function calculateExpirationDate(purchaseDateStr, expirationTime) {
  const purchaseDate = new Date(purchaseDateStr);
  purchaseDate.setDate(purchaseDate.getDate() + expirationTime);
  return purchaseDate.toISOString().split('T')[0];
};