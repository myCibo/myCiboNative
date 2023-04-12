import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import RecipeHero from "../components/organisms/RecipeHero";
import Carousel from "../components/organisms/Carousel";
import RecipeCarouselLib from "../components/organisms/RecipeCarouselLib";
import SearchBar from '../components/molecules/RecipeSearchBar';
import { useNavigation } from '@react-navigation/native';
import RecipeSearchCard from "../components/molecules/RecipeSearchCard"

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
  const [showMainPage, setShowMainPage] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: {number: '20'},
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
      }
    };

    axios
      .request(options)
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

  const handleSearch = (value) => {

    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: value,
        instructionsRequired: 'true',
        ignorePantry: 'true',
        number: '5',
        limitLicense: 'false',
        ranking: '1'
      },
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
      }
    };

    axios
      .request(options)
      .then(response => response.json())
      .then(data => {
        console.log(data.result);
        setSearchResultArray([]);
        setSearchResultArray(data.results);

        setShowMainPage(false)

      })
      .catch((error) => {
        console.error(error);
      });


    // fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=3&apiKey=${process.env.API_KEY}`)

    //   .then(response => response.json())
    //   .then(data => {
    //     setSearchResultArray([]);
    //     setSearchResultArray(data.results);

    //     setShowMainPage(false)

    //   })
    //   .catch(error => console.error(error));
  };


  const handleSearchCardPress = (recipe) => {
    const { id, image, title } = recipe;
    navigation.navigate('DynamicRecipe', { id, image, title });

  }

  const handleBack = () => {
    console.log("back is pressd in Recipes Screen ")
    setShowMainPage(true)
    setSearchResultArray([]);

  }

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
        <ActivityIndicator size="large" color="#b82d1b" />
      </View>
    );
  }


  return (
    <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <SearchBar placeholder="Search Recipe" onSearch={() => handleSearch} onBack={() => handleBack} />
          <TouchableOpacity onPress={() => { console.log("Filter"); }}>
            <Icon name='filter' size={32} color={Colors.primaryBlack} />
          </TouchableOpacity>
        </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.container}>
          {/* Search Result  */}
          {!showMainPage && searchResultArray.length === 0 && (
            <Text> No results found</Text>
          )}
  
          {!showMainPage && searchResultArray.length > 0 && (
            <>
              {searchResultArray.map((recipe, index) => (
                <TouchableOpacity style={{ marginBottom: 16 }} key={index} onPress={() => handleSearchCardPress(recipe)}>
                  <RecipeSearchCard image={recipe.image} title={recipe.title} id={recipe.id} />
                </TouchableOpacity>
              ))}
            </>
          )}
  
          {/* Main Page */}
          {showMainPage && (
            <>
              {data.hero && data.hero.length > 0 && (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                  <RecipeHero data={data.hero[0]} label="For You" />
                </View>
              )}
              <RecipeCarouselLib data={data} />
            </>
          )}
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: Colors['creamyWhite'],
    // backgroundColor: "red", // Set a background color for the header

    
    top: 0, // Set the top position to 0
    zIndex: 1, // Set a z-index to make the header appear on top of the content
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors['creamyWhite'],
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeScreen;