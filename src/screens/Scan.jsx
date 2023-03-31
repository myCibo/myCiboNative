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
  const [displayData, setDisplayData] = useState(ingredientsData);


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


  //Search Related 
  const handleSearch = (value) => {
    const filteredArray = dataArray.filter(item => {
      const { name, category } = item
      return (name.toLowerCase().startsWith(value.toLowerCase())
        || category.toLowerCase().startsWith(value.toLowerCase()));
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
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
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
      <View style={styles.header}>
        <SearchBar placeholder="Search Item" onSearch={handleSearch} onBack={handleSearchBack} />
        <TouchableOpacity onPress={() => { console.log("Filter Pressed"); }}>
          <Icon name='filter' size={32} color={Colors.primaryBlack} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 340, padding: 5, margin: 4 }}>
          <Text style={{ alignSelf: 'flex-start', marginRight: 8 }}>{displayData.length} Items</Text>
          <LabelledIcon
            label="Add Item"
            iconPos={0}
            iconName='add'
            variant='item'
            onNew={handleAddIngredient}
          />
        </View>


        <View style={{ alignItems: 'center' }}>
          {displayData.length > 0 ? (
            displayData.map((item, index) => (
              <View key={item.id} style={{ marginBottom: index === displayData.length - 1 ? 0 : 12 }}>
                <ScanCard data={item} onUpdate={handleUpdateIngredient} onDelete={handleDeleteIngredient} />
              </View>
            ))
          ) : (<Text> No results found</Text>)}
        </View>

      </ScrollView>
    </View>
  );
}

export default ScanScreen;