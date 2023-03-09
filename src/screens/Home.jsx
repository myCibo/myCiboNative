import React from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/organisms/Carousel';
import SingleRecipeCarousel from '../components/molecules/SingleRecipeCarousel';

function HomeScreen() {
  const caroulselDummy = [{
    id: 1,
    title: 'Yuckery',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg'
  }, {
    id: 2,
    title: 'Fafafafa',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg'
  }, {
    id: 3,
    title: 'Yayaya',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg'
  },{
    id: 4,
    title: 'Yoyoyo',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg'
  }]

  const FridgeHeader = () => <View><Text>Fridge</Text></View>
  const RecipeHeader = () => <View><Text>Recipe</Text></View>
  return (
    <View style={{ flex: 1 }}>
      <Carousel data={caroulselDummy} CardComponent={SingleRecipeCarousel} Header={FridgeHeader}/>
      <Carousel data={caroulselDummy} CardComponent={SingleRecipeCarousel} Header={RecipeHeader}/>
    </View>
  );
}

export default HomeScreen;