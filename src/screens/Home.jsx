import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from "../components/atoms/CustomButton"
import RecipeDetails from "../components/molecules/RecipeDetails"

function HomeScreen() {

  const handlePress = (event) => {
    console.log("sjfkhfk");
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
      <Text>Home Screen</Text>
     
          <RecipeDetails serving={5} timeInMinutes={30} calorie={234}/>
          <CustomButton text="jaafhaejhf" onPress={handlePress}/>


    </View>
  );
}

export default HomeScreen;
