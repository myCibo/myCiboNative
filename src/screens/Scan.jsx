import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from '../components/atoms/Icon';
import ModalInput from '../components/molecules/ModalInput';
import Colors from '../constants/styles';
import ModalDropdown from '../components/molecules/ModalDropdown';
import Test from '../components/molecules/Test';


function ScanScreen() {

  const styles = StyleSheet.create({
    body: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      // justifyContent: 'center',
      // height: '100%',
      // width: '100%',
      padding: 16,
      backgroundColor: Colors['creamyWhite'],
    },
    selection: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    font: {
      color: Colors['fontGray'],
      fontSize: 30,
    }
  });




  const ingredientData = [
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Milk' },
    { id: 3, name: 'Grapes' },
    { id: 4, name: 'Rice' },
    { id: 5, name: 'Cereal' },
    { id: 6, name: 'Bread' },
    { id: 7, name: 'Eggs' },
    { id: 8, name: 'Chicken' },
    { id: 9, name: 'Beef' },
    { id: 10, name: 'Pork' },
    { id: 11, name: 'Fish' },
    { id: 12, name: 'Cheese' },
    { id: 13, name: 'Butter' },
    { id: 14, name: 'Sour Cream' },
    { id: 15, name: 'Salsa' },
  ];

  // data is an array of ways to measure food
  const measurementData = [
    { id: 1, name: 'Cup' },
    { id: 2, name: 'Tbsp' },
    { id: 3, name: 'Tsp' },
    { id: 4, name: 'Oz' },
    { id: 5, name: 'Grams' },
    { id: 6, name: 'Pound' },
    { id: 7, name: 'Liter' },
    { id: 8, name: 'Milliliter' },
    { id: 9, name: 'Pinch' },
    { id: 10, name: 'Dash' },
    { id: 11, name: 'Scoop' },
  ]

  // a view that renders the scan screen with a modal input for the ingredient name with a label called name. below that, a modal input with the label number and on the same line, a dropdown for the measurement type.

  return (
    <View style={styles.body}>

      <Text style={styles.font}>Name</Text>
      <View style={styles.selection}>
        <ModalInput placeholder='Find Ingredient' type='search' data={ingredientData} />
      </View>

      <Text style={styles.font}>Number</Text>
      <View style={styles.selection}>
        {/* <ModalInput placeholder='0' type='number' /> */}
        <ModalDropdown placeholder={'Select Measurement'} data={measurementData} />
      </View>
    </View>
  );
}

export default ScanScreen;