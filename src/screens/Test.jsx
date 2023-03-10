import { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from '../components/atoms/Icon';
import ModalInput from '../components/molecules/ModalInput';
import ModalSearch from '../components/molecules/ModalSearch';
import Colors from '../constants/styles';
import ModalDropdown from '../components/molecules/ModalDropdown';
import CustomButton from '../components/atoms/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';


function ScanScreen() {

  const [disabled, setDisabled] = useState(true);

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

  const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: 16,
      paddingVertical: 32,
      backgroundColor: Colors['creamyWhite'],
      gap: 32,
    },
    category: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "100%",
      gap: 16,
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: Colors['fontGray'],
    },
    row: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      gap: 32,
    },
    bottom: {
      flex: 1,
      padding: 32,
      gap: 32,
    },
  });

  return (
    <View style={styles.container} >
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Item Name</Text>
        <View style={styles.row}>
          <ModalSearch placeholder='Find Ingredient' data={ingredientData} />
        </View>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Amount</Text>
        <View style={styles.row}>
          <ModalInput placeholder='0' type='number' />
          <ModalDropdown placeholder={'Select Measurement'} data={measurementData} />
        </View>
      </View>
      <View style={styles.bottom}>
        <CustomButton text='More Options' backgroundColor={Colors.primaryYellow} />
        <CustomButton text='Add New Item' backgroundColor={Colors.primaryGreen} disabled={disabled} />
      </View>
    </View>
  );
}

export default ScanScreen;