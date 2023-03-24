export default function prioritizeIngredients(ingredients) {
  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.expiresInDays > 0
  );

  const sortedIngredients = filteredIngredients.sort(
    (a, b) => a.expiresInDays - b.expiresInDays
  );

  const topIngredients = sortedIngredients.slice(0, 3);

  return topIngredients
    .map((ingredient) => ingredient.name.toLowerCase().replace(/\s+/g, '-'))
    .join(',+');
}