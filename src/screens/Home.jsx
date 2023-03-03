import React, { useState, useEffect } from 'react';

import { View, ScrollView } from 'react-native';
import RecipeHero from '../components/organisms/RecipeHero';
import RecipeCarousel from '../components/organisms/RecipeCarousel';
import axios from 'axios';


const heroHeader = [{ title: "Classic Matzo Ball Soup", image: "https://spoonacular.com/recipeImages/639616-556x370.jpg" }]

const categorizedRecipes = {
  hero:[],
  mainCourse: [],
  dessert: [],
  appetizer: [],
  salad: [],
  soup: [],
  sideDish: [],
  beverage: [],
  breakfast: [],
  snack: []
};


function HomeScreen() {

  const [data, setData] = useState([]);
  const [hero, setHero] = useState([]);


  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/random?number=200&apiKey=${process.env.API_KEY}`)
      .then(response => {
        const recipes = response.data.recipes;
        const categorizedRecipes = categorizeRecipes(recipes);
        setData(categorizedRecipes);
      
      })
      .catch(error => {
        console.log(error);
      });

  }, []);



  // Function to categorize recipes based on type
  function categorizeRecipes(recipes) {

    recipes.forEach(recipe => {
      if (recipes[0] == recipe){
        categorizedRecipes.hero.push(recipe);
      } else if (recipe.dishTypes.includes('main course')) {
        categorizedRecipes.mainCourse.push(recipe);
      } else if (recipe.dishTypes.includes('dessert')) {
        categorizedRecipes.dessert.push(recipe);
      } else if (recipe.dishTypes.includes('appetizer')) {
        categorizedRecipes.appetizer.push(recipe);
      } else if (recipe.dishTypes.includes('salad')) {
        categorizedRecipes.salad.push(recipe);
      } else if (recipe.dishTypes.includes('soup')) {
        categorizedRecipes.soup.push(recipe);
      } else if (recipe.dishTypes.includes('side dish')) {
        categorizedRecipes.sideDish.push(recipe);
      } else if (recipe.dishTypes.includes('beverage')) {
        categorizedRecipes.beverage.push(recipe);
      } else if (recipe.dishTypes.includes('breakfast')) {
        categorizedRecipes.breakfast.push(recipe);
      } else if (recipe.dishTypes.includes('snack')) {
        categorizedRecipes.snack.push(recipe);
      }
    });
    return categorizedRecipes;
  }
 


  return (
    <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

       {data.hero && data.hero.length > 0 &&
          // <h1>{data.hero[0].title}</h1>
          <RecipeHero imageSrc={data.hero[0].image} link="#" title={data.hero[0].title} label="For You"/>
      }

      {data.mainCourse && data.mainCourse.length > 0 &&
          <RecipeCarousel data={data.mainCourse} title="Main Course"/>
      }
      {data.dessert && data.dessert.length > 0 &&
          <RecipeCarousel data={data.dessert} title="Dessert"/>
      }
         {data.appetizer && data.appetizer.length > 0 &&
          <RecipeCarousel data={data.appetizer} title="Appetizer"/>
      }
         {data.salad && data.salad.length > 0 &&
          <RecipeCarousel data={data.salad} title="Salad"/>
      }
         {data.soup && data.soup.length > 0 &&
          <RecipeCarousel data={data.soup} title="Soup"/>
      }
         {data.sideDish && data.sideDish.length > 0 &&
          <RecipeCarousel data={data.sideDish} title="Side Dish"/>
      }
          {data.beverage && data.beverage.length > 0 &&
          <RecipeCarousel data={data.beverage} title="Beverage"/>
      }
          {data.breakfast && data.breakfast.length > 0 &&
          <RecipeCarousel data={data.breakfast} title="Breakfast"/>
      }
          {data.snack && data.snack.length > 0 &&
          <RecipeCarousel data={data.snack} title="Snack"/>
      }
      </View>
    
    </ScrollView>
  );
}

export default HomeScreen;
