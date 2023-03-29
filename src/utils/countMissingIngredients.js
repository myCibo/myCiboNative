export default function countMissingIngredients(apiIngredients, dbIngredients) {
  const apiIngredientNames = apiIngredients.map(
    (ingredient) => ingredient.name.toLowerCase()
  );

  const dbIngredientNames = dbIngredients.map(
    (ingredient) => ingredient.name.toLowerCase()
  );

  const missingIngredients = apiIngredientNames.filter(
    (ingredient) => !dbIngredientNames.includes(ingredient)
  );

  return missingIngredients.length;
}