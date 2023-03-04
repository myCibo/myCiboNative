import React, { useState, useEffect } from 'react';

import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import RecipeHero from '../components/organisms/RecipeHero';
import Carousel from '../components/organisms/Carousel';
import axios from 'axios';
import SingleRecipeCarousel from '../components/molecules/SingleRecipeCarousel';



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

function RecipeScreen() {
  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Recipe Screen</Text>
  //   </View>
  // );

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(`https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.API_KEY}`)
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

            <View  
            // style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            
            >
    
       {data.hero && data.hero.length > 0 &&
          // <Text>{data.hero[0].title}</Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <RecipeHero imageSrc={data.hero[0].image} link="#" title={data.hero[0].title} label="For You"/>
        </View>
      }



      {data.mainCourse && data.mainCourse.length > 0 &&
          <Carousel data={data.mainCourse} title="Main Course" CardComponent={SingleRecipeCarousel}/>
      }
      {data.dessert && data.dessert.length > 0 &&
          <Carousel data={data.dessert} title="Dessert" CardComponent={SingleRecipeCarousel}   />
      }
         {data.appetizer && data.appetizer.length > 0 &&
          <Carousel data={data.appetizer} title="Appetizer" CardComponent={SingleRecipeCarousel}/>
      }
         {data.salad && data.salad.length > 0 &&
          <Carousel data={data.salad} title="Salad" CardComponent={SingleRecipeCarousel}/>
      }
         {data.soup && data.soup.length > 0 &&
          <Carousel data={data.soup} title="Soup" CardComponent={SingleRecipeCarousel}/>
      }
         {data.sideDish && data.sideDish.length > 0 &&
          <Carousel data={data.sideDish} title="Side Dish" CardComponent={SingleRecipeCarousel}/>
      }
          {data.beverage && data.beverage.length > 0 &&
          <Carousel data={data.beverage} title="Beverage" CardComponent={SingleRecipeCarousel}/>
      }
          {data.breakfast && data.breakfast.length > 0 &&
          <Carousel data={data.breakfast} title="Breakfast" CardComponent={SingleRecipeCarousel}/>
      }
          {data.snack && data.snack.length > 0 &&
          <Carousel data={data.snack} title="Snack" CardComponent={SingleRecipeCarousel}/>
      }
      </View>
    
    </ScrollView>
  );
}

export default RecipeScreen;