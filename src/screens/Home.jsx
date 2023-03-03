import React from 'react';
import { View, Text } from 'react-native';
import Carousel from '../components/organisms/Carousel';
import SingleRecipeCarousel from '../components/molecules/SingleRecipeCarousel';

function HomeScreen() {
  const caroulselDummy = [{
    id: 1,
    title: 'Yuckery',
    imageSrc: {uri:'https://spoonacular.com/recipeImages/716429-312x231.jpg'}
  }, {
    id: 2,
    title: 'Fafafafa',
    imageSrc: {uri:'https://spoonacular.com/recipeImages/716429-312x231.jpg'}
  }, {
    id: 3,
    title: 'Yayaya',
    imageSrc: {uri:'https://spoonacular.com/recipeImages/716429-312x231.jpg'}
  },{
    id: 4,
    title: 'Yoyoyo',
    imageSrc: {uri:'https://spoonacular.com/recipeImages/716429-312x231.jpg'}
  }]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Carousel title="Fridge" data={caroulselDummy} CardComponent={SingleRecipeCarousel}/>
      <Carousel title="Recipes" data={caroulselDummy} CardComponent={SingleRecipeCarousel}/>
    </View>
  );
}

export default HomeScreen;