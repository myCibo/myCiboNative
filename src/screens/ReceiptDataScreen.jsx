// src/screens/ReceiptDataScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import ScanCard from '../components/molecules/ScanCard'
import SearchBar from '../components/molecules/SearchBar';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import LabelledIcon from '../components/molecules/LabelledIcon';

const ReceiptDataScreen = ({ route }) => {
  const { data } = route.params;
  console.log("Data received in ReceiptDataScreen:", data);

  const lineItems = data.result.lineItems; // Access lineItems using data.result.lineItems
  const purchaseDate = data.result.date;
  const dataArray = lineItems.map((item, index) => ({
    id: (index + 1).toString(),
    name: item.descClean,
    amount: item.qty === 0 ? 1 : item.qty, // Set default qty to 1 if it's 0
    unit: item.unit,
    category: "",
    purchaseDate: purchaseDate,
    expiresInDays: null,
    expirationDate: null,
  }));

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
};

export default ReceiptDataScreen;
