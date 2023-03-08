import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../components/atoms/Icon';
import CustomText from '../components/atoms/CustomText';
import Colors from '../constants/styles';


function ScanScreen() {

  const font = {
    color: Colors.fontBlack,
    fontSize: 30,
    type: 'black',
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomText {...font}>Scan Screen</CustomText>
      <Icon size={100} color={Colors.white} name='fridge'/>
    </View>
  );
}

export default ScanScreen;