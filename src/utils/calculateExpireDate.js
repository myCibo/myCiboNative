export default function calculateExpireDate(shelfLife) {
  // Get the current date as a Date object
  const currentDate = new Date();

  // Calculate the expiration date as a Date object
  const expirationDate = new Date(
    currentDate.getTime() + shelfLife * 24 * 60 * 60 * 1000
  );

  // Format the expiration date as a string in "yyyy-mm-dd" format

  const formattedExpirationDate = `${expirationDate.getFullYear()}-${(
    expirationDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${expirationDate.getDate().toString().padStart(2, "0")}`;
  return formattedExpirationDate;
}
