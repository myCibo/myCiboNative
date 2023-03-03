import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import RecipeHero from '../components/organisms/RecipeHero';




function RecipeScreen() {

  // const API_KEY = process.env.REACT_APP_API_KEY

  axios.get(`https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=65aee4a4d2a24b9a87d272a0efe3dd5d`)
  .then(response => {
    // handle the API response data here
    console.log(response.data); // add this line
  })
  .catch(error => {
    // handle the API error here
    console.log(error); // add this line

  });



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <RecipeHero 
        imageSrc="https://picsum.photos/400/500?random=1"
        link="#"
        title = "title"
        label="labelText"/>



    </View>
  );
}

export default RecipeScreen;