import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from "../components/atoms/CustomButton"
import RecipeDetails from "../components/molecules/RecipeDetails"
import RecipeInstruction from '../components/organisms/RecipeInstruction';

import data from "../recipeSteps.json";




function HomeScreen() {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Text>Home Screen</Text>
     
{/* 
          <RecipeDetails serving={5} timeInMinutes={30} calorie={234}/>
          <CustomButton text="jaafhaejhf" onPress={()=>console.log("presssed")}/> */}
          <RecipeInstruction data= {data} />


    </View>
  );
}

export default HomeScreen;
