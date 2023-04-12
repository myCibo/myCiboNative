import { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/molecules/SearchBar';
import IngredientItem from '../components/molecules/IngredientItem';
import LabelledIcon from '../components/molecules/LabelledIcon';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import { calculateExpiresInDays } from '../utils/expirationCalculator';
import FridgeHandler from '../handlers/FridgeHandler';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const fridgeHandler = new FridgeHandler();

const FridgeScreen = () => {
  const user = useContext(UserContext);

  const [ingredientsData, setIngredientsData] = useState([]);
  const [displayData, setDisplayData] = useState(ingredientsData);

  useEffect(() => {
    fridgeHandler.getFridgeItems(user.id, (data) => {
      const updatedData = data.map((ingredient) => ({
        ...ingredient,
        expiresInDays: calculateExpiresInDays(ingredient.expirationDate),
      }));
      setIngredientsData(updatedData);
      setDisplayData(updatedData);
    });
  }, []);
  

  // group ingredients by category. 
  const ingredientsByCategory = displayData.reduce((acc, ingredient) => {
    if (!acc[ingredient.category]) {
      acc[ingredient.category] = [];
    }
    acc[ingredient.category].push(ingredient);
    return acc;
  }, {});

  const handleAddFridgeItem = (ingredient) => {
    const userId = user.id;
    const newItem = {
      userId: userId,
      itemData: ingredient,
    };
    fridgeHandler.createFridgeItem(newItem, (data) => {
      data.expiresInDays = calculateExpiresInDays(data.expirationDate);
      const updatedIngredientsData = [...ingredientsData, data];
      setIngredientsData(updatedIngredientsData);
      setDisplayData(updatedIngredientsData);
    });
  };

  const handleUpdateFridgeItem = (ingredient) => {
    fridgeHandler.updateFridgeItem(ingredient.id, ingredient, () => {
      const updatedIngredientsData = ingredientsData.map((item) => {
        if (item.id === ingredient.id) {
          item.expiresInDays = calculateExpiresInDays(ingredient.expirationDate);
          return ingredient;
        }
        return item;
      });
      setIngredientsData(updatedIngredientsData);
      setDisplayData(updatedIngredientsData);
    });
  };

  const handleDeleteFridgeItem = (ingredientId) => {
    fridgeHandler.deleteFridgeItem(ingredientId, () => {
      const updatedIngredientsData = ingredientsData.filter((item) => item.id !== ingredientId);
      setIngredientsData(updatedIngredientsData);
      setDisplayData(updatedIngredientsData);
    });
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
      width: "61%",
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
            onNew={handleAddFridgeItem}
            data={{ category }}
          />
        </View>
        {ingredientsByCategory[category].map((ingredient) => (
          <IngredientItem
            key={ingredient.id}
            data={ingredient}
            onUpdate={handleUpdateFridgeItem}
            onDelete={handleDeleteFridgeItem}
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