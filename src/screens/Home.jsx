import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from "../components/atoms/CustomButton"
import RecipeDetails from "../components/molecules/RecipeDetails"

function HomeScreen() {

  const handlePress = (event) => {
    console.log("sjfkhfk");
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
     
           <RecipeDetails />

     
     
     
     
      {/* <CustomButton
      text="jaafhaejhf"
      onPress={handlePress}
       height= {500}
        width= {200}
        backgroundColor="red"
        textColor="blue"
      
      /> */}


    </View>
  );
}

export default HomeScreen;
