import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/molecules/SearchBar';
import IngredientItem from '../components/molecules/IngredientItem';
import LabelledIcon from '../components/molecules/LabelledIcon';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import { calculateExpirationTime } from '../utils/expirationCalculator';


const ingredientsDataInitial = [
  {
    id: '1',
    name: 'Milk',
    category: 'Dairy',
    measurement: 'Litre',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-03-20',
    expiration: null,
  },
  {
    id: '2',
    name: 'Eggs',
    category: 'Dairy',
    measurement: 'Item',
    amount: 1,
    purchaseDate: '2023-03-12',
    expirationDate: '2023-03-12',
    expiration: null,
  },
  {
    id: '3',
    name: 'Potatoes',
    category: 'Vegetables',
    measurement: 'Item',
    amount: 1,
    purchaseDate: '2023-03-14',
    expirationDate: '2023-03-28',
    expiration: null,
  },
  {
    id: '4',
    name: 'Rice',
    category: 'Grains',
    measurement: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-03-28',
    expiration: null,
  },
  {
    id: '5',
    name: 'Beef',
    category: 'Meat',
    measurement: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-03-18',
    expiration: null,
  },
  {
    id: '6',
    name: 'Chicken',
    category: 'Meat',
    measurement: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-03-18',
    expiration: null,
  },
].map((ingredient) => ({
  ...ingredient,
  expiration: calculateExpirationTime(ingredient.purchaseDate, ingredient.expirationDate),
}));

const FridgeScreen = () => {

  const [ingredientsData, setIngredientsData] = useState(ingredientsDataInitial);

  // group ingredients by category. There 
  const ingredientsByCategory = ingredientsData.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});

  const handleAddIngredient = (ingredient) => {
    const updatedIngredientsData = [...ingredientsData, ingredient];
    setIngredientsData(updatedIngredientsData);
  };


  const handleUpdateIngredient = (ingredient) => {
    const updatedIngredientsData = ingredientsData.map((item) => {
      if (item.id === ingredient.id) {
        return ingredient;
      }
      return item;
    });
    setIngredientsData(updatedIngredientsData);
  };

  const handleDeleteIngredient = (ingredientId) => {
    const updatedIngredientsData = ingredientsData.filter((item) => item.id !== ingredientId);
    setIngredientsData(updatedIngredientsData);
  };

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
          <LabelledIcon
            label="Add Item"
            iconPos={1}
            iconName='add'
            variant='item'
            onNew={handleAddIngredient}
            data={{ category }}
          />
        </View>
        {ingredientsByCategory[category].map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            data={ingredient}
            onUpdate={handleUpdateIngredient}
            onDelete={handleDeleteIngredient}
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
          <Icon name='filter' size={32} color={Colors.primaryBlack} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {renderIngredientsByCategory()}
      </ScrollView>
    </View>
  );
};



export default FridgeScreen;