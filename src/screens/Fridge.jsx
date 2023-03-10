import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/molecules/SearchBar';
import Icon from '../components/atoms/Icon';
import IngredientItem from '../components/molecules/IngredientItem';
import LabelledIcon from '../components/molecules/LabelledIcon';
import Colors from '../constants/styles';

const FridgeScreen = () => {
  // define the ingredients data
  const ingredientsData = [
    { name: 'Milk', category: 'Dairy', expiration: 1 },
    { name: 'Eggs', category: 'Dairy', expiration: 2 },
    { name: 'Carrots', category: 'Produce', expiration: 3 },
    { name: 'Potatoes', category: 'Produce', expiration: 4 },
    { name: 'Pasta', category: 'Dry', expiration: 5 },
    { name: 'Rice', category: 'Dry', expiration: 6 },
    { name: 'Beef', category: 'Meat', expiration: 0 },
    { name: 'Chicken', category: 'Meat', expiration: 10 },
    { name: 'Salt', category: 'Spices', expiration: 2 },
    { name: 'Pepper', category: 'Spices', expiration: 4 },
    { name: 'Soup', category: 'Canned', expiration: 3 },
    { name: 'Beans', category: 'Canned', expiration: 10 },
    { name: 'Ice Cream', category: 'Frozen', expiration: 5 },
    { name: 'Fish', category: 'Frozen', expiration: 0 },
  ];

  // group the ingredients by category
  const ingredientsByCategory = ingredientsData.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: Colors['creamyWhite'],
    },
    contentContainer: {
      width: "60%",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingVertical: 10,
      paddingHorizontal: 20,
      gap: 10,
    },
    categoryHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginTop: 20,
      marginBottom: 20,
    },
    categoryTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
  });

  // render the ingredients under each category
  const renderIngredientsByCategory = () => {
    return Object.keys(ingredientsByCategory).map((category) => (
      <View key={category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <LabelledIcon label="Add Item" iconPos={1} iconName='add' />
        </View>
        {ingredientsByCategory[category].map((ingredient) => (
          <IngredientItem
            key={ingredient.name}
            ingredientName={ingredient.name}
            ingredientExpiration={ingredient.expiration}
          />
        ))}
      </View>
    ));
  };



  return (
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} >
        {renderIngredientsByCategory()}
      </ScrollView>
    </View>
  );
};



export default FridgeScreen;