// src/screens/ReceiptDataScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import ScanCard from '../components/molecules/ScanCard'
import SearchBar from '../components/molecules/SearchBar';
import Icon from '../components/atoms/Icon';
import Colors from '../constants/styles';
import LabelledIcon from '../components/molecules/LabelledIcon';
import calculateExpireDate from '../utils/calculateExpireDate';
import CustomButton from '../components/atoms/CustomButton';
import FridgeHandler from '../handlers/FridgeHandler';
import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import {calculateExpirationDate} from '../utils/expirationCalculator';


const ReceiptDataScreen = ({ route }) => {
  const user = useContext(UserContext);

  const { data } = route.params;

  // Regular expression to match JSON string with double quotes
  const jsonRegex = /\{[\s\S]*\}/;

  // Extract the JSON string from the message content
  const jsonString = data[0].message.content.match(jsonRegex)[0];

  // Replace any single quotes with double quotes
  const validJsonString = jsonString.replace(/'/g, "\"");

  // Parse the JSON string to an object
  const jsonData = JSON.parse(validJsonString);

  // console.log("Data received in ReceiptDataScreen:", jsonData.lineItems);

  const lineItems = jsonData.lineItems; // Access lineItems using data.result.lineItems
  // const purchaseDate = data.result.date;
  const currentDate = new Date();
  // const [formattedData, setFormattedData] = useState([]);


  const dataArray = lineItems.map((item, index) => ({
    name: item.name,
    // amount: item.qty === 0 ? 1 : item.qty, // Set default qty to 1 if it's 0
    id: index,
    amount: 1,
    unit: item.defaultUnit,
    category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
    purchaseDate: new Date().toISOString().split('T')[0],
    expiresInDays: item.defaultShelfLife,
    expirationDate: calculateExpirationDate(new Date().toISOString().split('T')[0], item.defaultShelfLife).toString(),
    expirationTime: item.defaultShelfLife
  }));
  const [dataLoaded, setDataLoaded] = useState(false);


  useEffect(() => {
    axios.post(`${process.env.BACKEND_URL}/formatReceiptData`, dataArray)
      .then((res) => {
        const formattedData = res.data;
        console.log('FORMARTED DATA', formattedData);
        // setFormattedData(formattedData);
        const fridgeData= formattedData.map((item, index) => {
          item.scanId = index;
          item.ingredientId = item.ingredientId;
          item.categoryId = item.categoryId;
          item.unitId = item.unitId;
          item.amount = item.amount;
          item.purchaseDate = new Date(item.purchaseDate).toISOString().split('T')[0];
          item.expirationDate = new Date(item.expirationDate).toISOString().split('T')[0];
          item.expirationTime = item.expirationTime;
        });

        setIngredientsData(fridgeData);
        setDisplayData(formattedData);
        setDataLoaded(true); 
        console.log('Data loaded:', dataLoaded);
      }, (error) => {
        console.log(error);
        console.log('Data loaded:', dataLoaded);
      });
    }, []);

  const [ingredientsData, setIngredientsData] = useState(dataArray);
  const [displayData, setDisplayData] = useState(ingredientsData);


  const handleAddIngredient = (ingredient) => {
    // console.log(ingredient, 'scan screen add ingredient')

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

  const handleDeleteIngredient = (scanId) => {

    console.log("before delete", displayData);
    console.log("UPDATED INGREDIENTS DATA", displayData.filter((item) => item.scanId !== scanId));
    setIngredientsData(ingredientsData => ingredientsData.filter((item) => item.scanId !== scanId));
    setDisplayData(displayData => displayData.filter((item) => item.scanId !== scanId));
  };

  
  const handleAddFridge = () => {
    const userId = user.id;
    // console.log("USER ID",userId)
    const newItem = {
      userId: userId,
      itemsData: ingredientsData,
    };
    console.log("INGREDIENTS DATA", ingredientsData)
    console.log("NEW ITEM", newItem.itemsData[0]);
    const fridgeHandler = new FridgeHandler();
    fridgeHandler.createManyFridgeItems(newItem);
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
              <View key={index} style={{ marginBottom: index === displayData.length - 1 ? 0 : 12 }}>
                <ScanCard data={item} onUpdate={handleUpdateIngredient} onDelete={() => handleDeleteIngredient(item.scanId)} />
              </View>
            ))
          ) : (<Text> No results found</Text>)}
        </View>

      </ScrollView>
      <CustomButton text="Add to Fridge" onPress={handleAddFridge} disabled={dataLoaded}/>
    </View>
  );
};

export default ReceiptDataScreen;
