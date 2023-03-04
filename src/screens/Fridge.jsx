import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/molecules/SearchBar';
import FilterIcon from '../components/atoms/FilterIcon';
import IngredientItem from '../components/molecules/IngredientItem';
import LabelledIcon from '../components/molecules/LabelledIcon';

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

  // render the ingredients under each category
  const renderIngredientsByCategory = () => {
    return Object.keys(ingredientsByCategory).map((category) => (
      <View key={category}>
        <View style={styles.header}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <LabelledIcon label="Add Item +" />
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
        <FilterIcon />
      </View>
<<<<<<< HEAD
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#CD592E"
          totalItems={8}
          imageSrc={require("assets/images/takeout.png")}
          title="Takeout"
          size='small'
        />
        <CategorySquare
          backgroundColor="#F0A047"
          totalItems={4}
          imageSrc={require("assets/images/dairy.png")}
          title="Dairy"
          size = 'small'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#6B987A"
          totalItems={12}
          imageSrc={require("assets/images/produce.png")}
          title="Produce"
          size = 'small'
        />
        <CategorySquare
          backgroundColor="#F3C238"
          totalItems={7}
          imageSrc={require("assets/images/dry.png")}
          title="Dry"
          size = 'small'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#D35247"
          totalItems={6}
          imageSrc={require("assets/images/meat.png")}
          title="Meat"
          size = 'medium'
        />
        <CategorySquare
          backgroundColor="#B3A96C"
          totalItems={22}
          imageSrc={require("assets/images/spices.png")}
          title="Spices"
          size = 'medium'
        />
      </View>
      <View style={styles.row}>
        <CategorySquare
          backgroundColor="#DDAE55"
          totalItems={10}
          imageSrc={require("assets/images/canned.png")}
          title="Canned"
          size = 'large'
        />
        <CategorySquare
          backgroundColor="#8F9FC8"
          totalItems={8}
          imageSrc={require("assets/images/frozen.png")}
          title="Frozen"
          size = 'large'
        />
      </View>
=======
      <ScrollView showsVerticalScrollIndicator= {false} contentContainerStyle={styles.contentContainer}>
        {renderIngredientsByCategory()}
      </ScrollView>
>>>>>>> da05bb9ded053b9134c7acac7b36068c40486a22
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor:"#F6F3F0",
  },
  contentContainer: {
    width:"65%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});


export default FridgeScreen;