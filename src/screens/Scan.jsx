import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import ScanCard from '../components/molecules/ScanCard'
import SearchBar from '../components/molecules/SearchBar';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import LabelledIcon from '../components/molecules/LabelledIcon';


//FakeData-------------
const dataArray = [
  { id: "1", name: "Apples", amount: 2, unit: "Pcs", category: "Produce", purchaseDate: "2023-03-17", expiresInDays: null, expirationDate: "2023-03-23" },
  { id: "2", name: "Bananas", amount: 3, unit: "Pcs", category: "Produce", purchaseDate: "2023-03-17", expiresInDays: null, expirationDate: "2023-03-24" },
  { id: "3", name: "Oranges", amount: 1, unit: "Pcs", category: "Produce", purchaseDate: "2023-03-17", expiresInDays: null, expirationDate: "2023-03-26" },
];
//--------------

function ScanScreen() {

  const [ingredientsData, setIngredientsData] = useState(dataArray);

  const handleAddIngredient = (ingredient) => {
    console.log(ingredient, 'scan screen add ingredient')
    
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
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors['creamyWhite'],
    },
    scroll: {
      width: '100%',
      alignItems: 'center',
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
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <SearchBar />
          <TouchableOpacity onPress={() => { console.log("Filter Pressed"); }}>
            <Icon name='filter' size={32} color={Colors.primaryBlack} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', alignSelf: 'flex-end', padding: 15, margin: 4 }}>
          <LabelledIcon
            label="Add Item"
            iconPos={0}
            iconName='add'
            variant='item'
            onNew={handleAddIngredient}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          {ingredientsData.map((item) => (
            <ScanCard key={item.id} data={item} onUpdate={handleUpdateIngredient} onDelete={handleDeleteIngredient} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default ScanScreen;