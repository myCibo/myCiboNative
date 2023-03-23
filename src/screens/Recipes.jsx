import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import RecipeHero from "../components/organisms/RecipeHero";
import Carousel from "../components/organisms/Carousel";
import SearchBar from '../components/molecules/SearchBar';
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

function CarouselHeader({ title = "this is title" }) {
  return <Text style={styles.categoryName}>{title}</Text>;
}

function RecipeScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `https://api.spoonacular.com/recipes/random?number=1&apiKey=${process.env.API_KEY}`
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

  if (isLoading) {
    return (
      <View style={styles.loader}>
         {/* <Text>Anything inside this view will show up while loading thre page </Text>*/}
      <ActivityIndicator size="large" color="#b82d1b" />
    </View>
    );
  }

  return (
    <ScrollView  Style={styles.contentContainer}>
      <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />
        <TouchableOpacity
          onPress={() => {
            console.log("Filter");
          }}

        >
        <Icon name='filter' size={32} color={Colors.primaryBlack}/>
        </TouchableOpacity>
      </View>

      {/* <View style={{ backgroundColor:'green', paddingHorizontal: 20,}}> */}
        {data.hero && data.hero.length > 0 && (
          // <Text>{data.hero[0].title}</Text>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center", 
            //paddingHorizontal: 12
          }}
          >
            <RecipeHero
              id={data.hero[0].id}
              image={data.hero[0].image}
              link="#"
              title={data.hero[0].title}  
              label="For You"
            />
          </View>
        )}

        {data.mainCourse && data.mainCourse.length > 2 && (
          <Carousel
            data={data.mainCourse}
            title="Main Course"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.dessert && data.dessert.length > 2 && (
          <Carousel
            data={data.dessert}
            title="Dessert"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.appetizer && data.appetizer.length > 2 && (
          <Carousel
            data={data.appetizer}
            title="Appetizer"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.salad && data.salad.length > 2 && (
          <Carousel
            data={data.salad}
            title="Salad"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.soup && data.soup.length > 2 && (
          <Carousel
            data={data.soup}
            title="Soup"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.sideDish && data.sideDish.length > 2 && (
          <Carousel
            data={data.sideDish}
            title="Side Dish"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.beverage && data.beverage.length > 2 && (
          <Carousel
            data={data.beverage}
            title="Beverage"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.breakfast && data.breakfast.length > 2 && (
          <Carousel
            data={data.breakfast}
            title="Breakfast"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {data.snack && data.snack.length > 2 && (
          <Carousel
            data={data.snack}
            title="Snack"
            CardComponent={SingleRecipeCarousel}
            Header={CarouselHeader}
          />
        )}
        {/* </View> */}
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
    // backgroundColor: 'red',
    

  },
  contentContainer: {
    // width: "60%",
    // backgroundColor:

  },
  categoryName: {
    color: "#0D302F",
    fontSize: 16,
    textTransform: "uppercase",
    marginVertical:10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
    marginVertical:10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f5f5f5'
  },
});

export default RecipeScreen;
