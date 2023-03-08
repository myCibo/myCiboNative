import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../components/atoms/Icon';
import ModalInput from '../components/molecules/ModalInput';
import CustomText from '../components/atoms/CustomText';
import Colors from '../constants/styles';


function ScanScreen() {

  const font = {
    color: Colors.fontBlack,
    fontSize: 30,
    type: 'black',
  }

  const data = [
    { id: 1, name: 'Ingredient 1' },
    { id: 2, name: 'Ingredient 2' },
    { id: 3, name: 'Ingredient 3' },
    { id: 4, name: 'Ingredient 4' },
    { id: 5, name: 'Ingredient 5' },
    { id: 6, name: 'Ingredient 6' },
    { id: 7, name: 'Ingredient 7' },
    { id: 8, name: 'Ingredient 8' },
    { id: 9, name: 'Ingredient 9' },
    { id: 10, name: 'Ingredient 10' },
    { id: 11, name: 'Ingredient 11' },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <CustomText {...font}>Scan Screen</CustomText>
      <Icon size={100} color={Colors.white} name='fridge'/>
      <ModalInput placeholder='Find Ingredient' type='number' data={data} />
    </View>
  );
}

export default ScanScreen;