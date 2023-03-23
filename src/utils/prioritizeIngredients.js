export default function prioritizeIngredients(ingredients) {
  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.expiration > 0
  );

  const sortedIngredients = filteredIngredients.sort(
    (a, b) => a.expiration - b.expiration
  );

  const topIngredients = sortedIngredients.slice(0, 3);

  return topIngredients.map((ingredient) => ingredient.name.toLowerCase()).join(',+');
}