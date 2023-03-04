import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'assets/icons/home.svg';
import CustomText from '../components/atoms/CustomText';


function ScanScreen() {

  const font = {
    color: '#000',
    fontSize: 30,
    weight: 'black',
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomText {...font}>Scan Screen</CustomText>
      <Icon height={200} width={200}/>
    </View>
  );
}

export default ScanScreen;