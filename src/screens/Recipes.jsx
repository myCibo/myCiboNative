import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import RecipeHero from "../components/organisms/RecipeHero";
import Carousel from "../components/organisms/Carousel";
import RecipeCarouselLib from "../components/organisms/RecipeCarouselLib";
import SearchBar from '../components/molecules/SearchBar';
import { useNavigation } from '@react-navigation/native';

import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';

import axios from "axios";
import SingleRecipeCarousel from "../components/molecules/SingleRecipeCarousel";

const categorizedRecipes = {
  hero: [],
  mainCourse: [],
  dessert: [],
  appetizer: [],
  salad: [],
  soup: [],
  sideDish: [],
  beverage: [],
  breakfast: [],
  snack: [],
};


function RecipeScreen() {

  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResultArray, setSearchResultArray] = useState([]);




  const handleSearch = (value) => {
    setSearchResultArray([]);
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=5&apiKey=${process.env.API_KEY}`)

      .then(response => response.json())
      .then(data => {
        setSearchResultArray(data.results);
      })
      .catch(error => console.error(error));
  };

  const handleSearchCardPress = (recipe)=>{
    const { id, image, title } = recipe;
    navigation.navigate('DynamicRecipe', { id, image, title });

  }



  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=20&apiKey=${process.env.API_KEY}`

      )
      .then((response) => {
        const recipes = response.data.recipes;
        const categorizedRecipes = categorizeRecipes(recipes);
        setData(categorizedRecipes);
        setIsLoading(false);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function to categorize recipes based on type
  function categorizeRecipes(recipes) {
    recipes.forEach((recipe) => {
      if (recipes[0] == recipe) {
        categorizedRecipes.hero.push(recipe);
      } else if (recipe.dishTypes.includes("main course")) {
        categorizedRecipes.mainCourse.push(recipe);
      } else if (recipe.dishTypes.includes("dessert")) {
        categorizedRecipes.dessert.push(recipe);
      } else if (recipe.dishTypes.includes("appetizer")) {
        categorizedRecipes.appetizer.push(recipe);
      } else if (recipe.dishTypes.includes("salad")) {
        categorizedRecipes.salad.push(recipe);
      } else if (recipe.dishTypes.includes("soup")) {
        categorizedRecipes.soup.push(recipe);
      } else if (recipe.dishTypes.includes("side dish")) {
        categorizedRecipes.sideDish.push(recipe);
      } else if (recipe.dishTypes.includes("beverage")) {
        categorizedRecipes.beverage.push(recipe);
      } else if (recipe.dishTypes.includes("breakfast")) {
        categorizedRecipes.breakfast.push(recipe);
      } else if (recipe.dishTypes.includes("snack")) {
        categorizedRecipes.snack.push(recipe);
      }
    });
    return categorizedRecipes;
  }


  //Loading 
  if (isLoading) {
    return (
      <View style={styles.loader}>
        {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
        <ActivityIndicator size="large" color="#b82d1b" />
      </View>
    );
  }


  return (
    <ScrollView Style={styles.contentContainer}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <SearchBar placeholder="Search Recipe" onSearch={handleSearch} />
          <TouchableOpacity onPress={() => { console.log("Filter"); }}>
            <Icon name='filter' size={32} color={Colors.primaryBlack} />
          </TouchableOpacity>
        </View>

        {/* Search Result  */}
        {/* 
          search result : 
          array of objects/revcipes, keys are id,image, title, imagetype
          add a 'x' to clear the searchResultArray
          component goes here and data will nbe passed here 
          overlay on others  */}
        {searchResultArray.length > 0 ? (
          <>
            {searchResultArray.map((recipe, index) => (
            
              <TouchableOpacity  onPress={() => handleSearchCardPress(recipe)}>
                <Text key={index}>{recipe.title}</Text>
              </TouchableOpacity>
            ))}
            </>

        ) :
          <>
            {/* Hero */}
            {data.hero && data.hero.length > 0 && (
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                <RecipeHero
                  id={data.hero[0].id}
                  image={data.hero[0].image}
                  link="#"
                  title={data.hero[0].title}
                  label="For You"
                />
              </View>
            )}

            {/* Carousels */}
            <RecipeCarouselLib data={data} />
          </>
        }
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: Colors['creamyWhite'],


  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    marginVertical: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeScreen;
