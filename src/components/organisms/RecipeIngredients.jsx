import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Linking, SafeAreaView } from 'react-native';

//Data in this component is coming from spoonacular api, Ingredient by ID:
//GET https://api.spoonacular.com/recipes/{id}/ingredientWidget.json

const RecipeIngredients = ({ data }) => {

  const styles = StyleSheet.create({
    card: {
      width: 340, 
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      borderRadius: 4,
      marginTop: 21,
      paddingBottom: 23,

      fontSize: 13,
      color: '#424242',
      borderBottomColor: '#B9B9B9',
      borderBottomWidth: StyleSheet.hairlineWidth,

      // elevation: 5,
      // shadowOffset: { width: 0, height: 8 },
      // shadowColor: '#000000',
      // shadowOpacity: 0.1,
      // shadowRadius: 20,
    },
 
  });

    const roundToQuarter = (num) => {
    return Math.round(num * 4) / 4;
  };

  const newArray = [];
  data.forEach((ingredient, index) => {
    const newIngredient = {};

    newIngredient.id = index + 1;
    newIngredient.name = ingredient.name;
    newIngredient.unit = ingredient.measures.metric.unitShort;
   newIngredient.amount = roundToQuarter(ingredient.measures.metric.amount).toFixed(2);


    if (newIngredient.amount.endsWith('.00')) {
      newIngredient.amount = newIngredient.amount.slice(0, -3);
    }

    newArray.push(newIngredient);
  });




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
      {newArray.map((ingredient, index) => (
        <View style={styles.card} key={index}>
          <Text style={{ fontWeight: '600' }}>{ingredient.amount} </Text>
          <Text style={{ fontWeight: '600' }}>{ingredient.unit} </Text>
          <Text style={{ fontWeight: '600', textTransform:'capitalize'}}>{ingredient.name}</Text>
        </View>
      ))}
    </View>
    </SafeAreaView>
  );
};

export default RecipeIngredients;
