import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/molecules/SearchBar';
import IngredientItem from '../components/molecules/IngredientItem';
import LabelledIcon from '../components/molecules/LabelledIcon';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import { calculateExpiresInDays } from '../utils/expirationCalculator';


const ingredientsDataInitial = [
  {
    id: '1',
    name: 'Milk',
    category: 'Dairy',
    unit: 'Litre',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-03-24',
    expirationTime: 7,
    expiresInDays: null,
  },
  {
    id: '2',
    name: 'Eggs',
    category: 'Dairy',
    unit: 'Item',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2023-04-14',
    expirationTime: 28,
    expiresInDays: null,
  },
  {
    id: '3',
    name: 'Potatoes',
    category: 'Vegetables',
    unit: 'Item',
    amount: 1,
    purchaseDate: '2023-03-14',
    expirationDate: '2023-04-14',
    expirationTime: 30,
    expiresInDays: null,
  },
  {
    id: '4',
    name: 'Brown rice',
    category: 'Grains',
    unit: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-17',
    expirationDate: '2024-03-17',
    expirationTime: 365,
    expiresInDays: null,
  },
  {
    id: '5',
    name: 'Ground beef',
    category: 'Meat',
    unit: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-21',
    expirationDate: '2023-03-24',
    expirationTime: 3,
    expiresInDays: null,
  },
  {
    id: '6',
    name: 'Chicken',
    category: 'Meat',
    unit: 'Grams',
    amount: 1,
    purchaseDate: '2023-03-23',
    expirationDate: '2023-03-25',
    expirationTime: 2,
    expiresInDays: null,
  },
].map((ingredient) => ({
  ...ingredient,
  expiresInDays: calculateExpiresInDays(ingredient.expirationDate),
}));

const FridgeScreen = () => {

  const [ingredientsData, setIngredientsData] = useState(ingredientsDataInitial);
  const [displayData, setDisplayData] = useState(ingredientsData);


  // group ingredients by category. 
  const ingredientsByCategory = displayData.reduce((acc, ingredient) => {
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


  //Search Related 
  const handleSearch = (value) => {
    const filteredArray = ingredientsData.filter(item => {
      const lowercaseValue = value.toLowerCase();
      const lowercaseName = item.name.toLowerCase();
      const lowercaseCategory = item.category.toLowerCase();
      const nameWords = lowercaseName.split(' ');
      const categoryWords = lowercaseCategory.split(' ');

      // Check if the value is in the beginning of any word in the name or category
      const nameMatch = nameWords.some(word => word.startsWith(lowercaseValue));
      const categoryMatch = categoryWords.some(word => word.startsWith(lowercaseValue));

      return nameMatch || categoryMatch;
    });

    setDisplayData(filteredArray)
  }

  const handleSearchBack = () => {
    setDisplayData(ingredientsData)
    console.log("back is clicked  ")
  }


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
      marginVertical: 10,

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
        <SearchBar placeholder="Search Ingredient, Categories" onSearch={handleSearch} onBack={handleSearchBack} />
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

        {displayData.length > 0 
        ? (renderIngredientsByCategory()) 
        : (<Text> No results found</Text>
        )}
        
      </ScrollView>
    </View>
  );
};



export default FridgeScreen;